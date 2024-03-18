import { EditableMathView } from "./mathlib/uielements/EditableMathView"
import initWasm, { get_all_equivalents, simplify_with_steps } from "../cas-wasm-wrapper/pkg"
import { Expression } from "./mathlib/expressions/Expression"
import { parseExpressionJSON } from "./mathlib/expressions-from-json"
import { parseExpressionLatex } from "./mathlib/userinput/LatexParser"

declare const MathJax: any
declare const MQ: any

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
export async function loadSolverPage(): Promise<void> {
    await initWasm()
    const quill = MQ.MathField(inputView, {
        handlers: {
            edit: function() {
                const parseResult = parseExpressionLatex(quill.latex());
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
        autoCommands: 'int pi sqrt'
    })

    answerSummary.replaceChildren(solutionView)
}

// The last valid entered expression
let expression: Expression | null

/**
 * Calculates the new answer and displays it.
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

    let r = simplify_with_steps(expression.toJSON(), 20, "evaluate_first")

    let result: {
        steps: string[],
        success: boolean
    }
    try {
        result = JSON.parse(r)
    } catch (e) {
        console.log("Implementation error: Received error msg from backend:")
        console.log(r)
        return
    }

    if (result.success) {
        solutionView.value = parseExpressionJSON(
            result.steps[result.steps.length - 1]
        )
        stepListView.innerHTML = ""
        for (let i = 1; i + 1 < result.steps.length; i += 2) {
            let argument = result.steps[i]
            let expression = result.steps[i + 1]

            stepListView.appendChild(row(argument, expression))
        }
    } else {
        // Fetch the equivalents it was able to find
        console.log("No solution found.")
        let equivalents = JSON.parse(get_all_equivalents(expression.toJSON(), 20, 
            "evaluate_first"))["equivalents"]
        console.log("Found " + equivalents.length + " equivalents.")
        solutionView.value = null
        stepListView.innerHTML = ""
        for (const equiv of equivalents) {
            if (new String("" + equiv).includes("Integral")) {
                continue;
            }
            stepListView.appendChild(row(JSON.stringify(equiv), equiv))
        }
    }


    MathJax.typeset([answerSummary, stepListView])
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
