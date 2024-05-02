import { render } from "solid-js/web"
import { MathView } from "./mathlib/uielements/EditableMathView"
import { Expression } from "./mathlib/expressions/Expression"
import { parseExpressionJSON } from "./mathlib/expressions-from-json"
import { parseExpressionLatex } from "./mathlib/userinput/LatexParser"
import { CasWorkerMsg, IncrementalSimplifyResult } from "./CasWorkerTypes"
import { Accessor, For, createEffect, createSignal } from "solid-js"

declare const MathJax: any
declare const MQ: any
declare const M: any

const casWorker = new Worker("casWorker.js")

interface Step {
    argument: string
    expression: Expression
}

document.addEventListener("DOMContentLoaded", () => {
    const answerSummary = document.getElementById(
        "answerSummary"
    )! as HTMLDivElement

    // Displays sequence of steps leading to the final answer
    const stepListView = document.getElementById("stepsView")! as HTMLDivElement

    const inputView = document.getElementById("input")!

    // The last valid entered expression
    const [expression, setExpression] = createSignal<Expression | null>(null)
    const [steps, setSteps] = createSignal<Step[]>([])
    const [answer, setAnswer] = createSignal<Expression | null>(null)
    createEffect(() => {
        if (steps().length > 0) {
            setAnswer(steps()[steps().length - 1].expression)
        }
    })

    // Displays the final answer
    render(() => <MathViewSolid expression={answer} />, answerSummary)

    casWorker.onmessage = (
        incrementalResult: MessageEvent<IncrementalSimplifyResult>
    ) => {
        const { steps: res, failed, forProblem } = incrementalResult.data

        if (failed || forProblem != expression()!.toJSON()) {
            return
        }

        const resSteps: Step[] = []
        for (let i = 1; i + 1 < res.length; i += 2) {
            let argument = res[i]
            let expression = res[i + 1]

            resSteps.push({
                argument: argument,
                expression: parseExpressionJSON(expression)
            })
        }

        setSteps(resSteps)

        console.log(JSON.stringify(steps))
    }

    createEffect(() => {
        if (expression() === null) {
            casWorker.postMessage({
                cancel: true
            })
            return
        }

        console.log("Parsed " + expression()!.toJSON())

        casWorker.postMessage({
            expressionJson: expression()!.toJSON(),
            operation: "simplify"
        } as CasWorkerMsg)
    }, expression)

    const view = document.createElement("textarea")
    const quill = MQ.MathField(inputView, {
        handlers: {
            edit: function () {
                const parseResult = parseExpressionLatex(quill.latex())
                if (parseResult === "empty") {
                    setExpression(null)
                    return
                }
                setExpression(parseResult)
                if (expression() == null) {
                    inputView.style.color = "red"
                    // Also set border color
                    // https://docs.mathquill.com/en/latest/Config/#changing-colors
                    inputView.style.borderColor = "red"
                } else {
                    inputView.style.color = "black"
                    inputView.style.borderColor = "black"
                }
            }
        },
        autoCommands: "int pi sqrt",
        substituteTextarea: function () {
            return view
        }
    })
    view.focus()

    var elems = document.querySelectorAll(".sidenav")
    M.Sidenav.init(elems, {})

    // Shortcuts
    document.getElementById("body")!.addEventListener("keypress", () => {
        view.focus()
    })

    render(() => <StepList steps={steps}/>, stepListView)
})

interface StepListProp {
    steps: Accessor<Step[]>
}

function StepList({ steps }: StepListProp): Element {
    console.log("Creating step list")
    createEffect(() => {
        MathJax.typeset()
    }, steps())

    return (
        <div>
            <For each={steps()}>
                {step => (
                    <Row
                        argument={step.argument}
                        expression={step.expression}
                    />
                )}
            </For>
        </div>
    )
}

interface RowProps {
    argument: string
    expression: Expression
}

/**
 * Creates an argument row for the solution steps list.
 */
function Row({ argument, expression }: RowProps): Element {
    return (
        <div className="row">
            <p className="col s6">{argument}</p>
            {new MathView(expression)}
        </div>
    )
}

interface MathViewSolidProps {
    expression: Accessor<Expression | null>
}

function MathViewSolid({ expression }: MathViewSolidProps): Element {
    return (<>{new MathView(expression())}</>)
}
