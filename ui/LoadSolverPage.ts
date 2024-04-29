import { EditableMathView } from "./mathlib/uielements/EditableMathView"
import { Expression } from "./mathlib/expressions/Expression"
import { parseExpressionJSON } from "./mathlib/expressions-from-json"
import { parseExpressionLatex } from "./mathlib/userinput/LatexParser"
import { CasWorkerMsg } from "./CasWorkerTypes"

declare const MathJax: any
declare const MQ: any
declare const M: any

let casWorker: Worker

document.addEventListener("DOMContentLoaded", () => {
    const answerSummary = document.getElementById(
        "answerSummary"
    )! as HTMLDivElement

    // Displays the final answer
    const solutionView = new EditableMathView()

    // Displays sequence of steps leading to the final answer
    const stepListView = document.getElementById("stepsView")! as HTMLDivElement

    const inputView = document.getElementById("input")

    /**
     * Called after the DOM is loaded.
     */
    async function loadSolverPage(): Promise<void> {
        // await initWasm()
        const view = document.createElement("textarea")
        const quill = MQ.MathField(inputView, {
            handlers: {
                edit: function () {
                    const parseResult = parseExpressionLatex(quill.latex())
                    if (parseResult === "empty") {
                        expression = null
                        onInputExpressionChanged()
                        return
                    }
                    expression = parseResult
                    if (expression == null) {
                        inputView.style.color = "red"
                        // Also set border color
                        // https://docs.mathquill.com/en/latest/Config/#changing-colors
                        inputView.style.borderColor = "red"
                    } else {
                        inputView.style.color = "black"
                        inputView.style.borderColor = "black"
                    }
                    onInputExpressionChanged()
                }
            },
            autoCommands: "int pi sqrt",
            substituteTextarea: function () {
                return view
            }
        })
        view.focus()

        answerSummary.replaceChildren(solutionView)

        var elems = document.querySelectorAll(".sidenav")
        M.Sidenav.init(elems, {})
    }

    // The last valid entered expression
    let expression: Expression | null

    /**
     * Starts solving it in the background.
     * @effects The solution steps view and summary div.
     *      Does not effect the input area.
     */
    function onInputExpressionChanged() {
        if (expression === undefined) return
        if (expression === null) {
            solutionView.innerHTML = ""
            stepListView.innerHTML = ""
            return
        }
        console.log("Parsed " + expression.toJSON())

        // TODO: Redo the incremental solution model so that a JS timer checks
        // in with Rust at an interval. This way, we won't have to kill the 
        // worker and reload the wasm.
        casWorker?.terminate()
        casWorker = new Worker("casWorker.js")
        casWorker.postMessage({
            expressionJson: expression.toJSON()
        } as CasWorkerMsg)

        casWorker.onmessage = (incrementalResult: MessageEvent<any>) => {
            const { steps, failed } = incrementalResult.data

            console.log(JSON.stringify(steps))
            solutionView.value = parseExpressionJSON(steps[steps.length - 1])
            stepListView.innerHTML = ""
            for (let i = 1; i + 1 < steps.length; i += 2) {
                let argument = steps[i]
                let expression = steps[i + 1]

                stepListView.appendChild(row(argument, expression))
            }
            MathJax.typeset([answerSummary, stepListView])
        }

        // let r = simplify_with_steps(
        //     expression.toJSON(),
        //     20,
        //     "evaluate_first",
        //     1000
        // )
        //
        // const result: {
        //     steps: string[]
        //     success: boolean
        // } = JSON.parse(r)
        //
        // if (result.success) {
        //     solutionView.value = parseExpressionJSON(
        //         result.steps[result.steps.length - 1]
        //     )
        //     stepListView.innerHTML = ""
        //     for (let i = 1; i + 1 < result.steps.length; i += 2) {
        //         let argument = result.steps[i]
        //         let expression = result.steps[i + 1]
        //
        //         stepListView.appendChild(row(argument, expression))
        //     }
        // } else {
        //     // Fetch the equivalents it was able to find
        //     console.log("No solution found.")
        //     let result = JSON.parse(
        //         get_all_equivalents(
        //             expression.toJSON(),
        //             20,
        //             "evaluate_first",
        //             5000
        //         )
        //     )
        //     const equivalents = result["equivalents"]
        //     console.log("Found " + equivalents.length + " equivalents.")
        //     console.log("Using rules:")
        //     console.log(result["rules_used"])
        //     solutionView.value = null
        //     stepListView.innerHTML = ""
        //     for (const equiv of equivalents) {
        //         if (new String("" + equiv).includes("Integral")) {
        //             continue
        //         }
        //         stepListView.appendChild(row(JSON.stringify(equiv), equiv))
        //     }
        // }
        //
        // MathJax.typeset([answerSummary, stepListView])
    }

    /**
     * Creates an argument row for the solution steps list.
     */
    function row(argument: string, expression: string): HTMLDivElement {
        const row = document.createElement("div")
        row.classList.add("row")

        const argumentView = document.createElement("p")
        argumentView.innerText = argument
        argumentView.classList.add("col", "s6")
        row.appendChild(argumentView)

        const expressionView = new EditableMathView()
        expressionView.value = parseExpressionJSON(expression)
        row.appendChild(expressionView)

        return row
    }

    loadSolverPage()
})
