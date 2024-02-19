import { EditableMathView } from "./mathlib/uielements/EditableMathView"
import initWasm, { simplify_with_steps } from "../cas/pkg"
import { parseExpression } from "./mathlib/userinput/AntlrMathParser"
import { Expression } from "./mathlib/expressions/Expression"
import { parseExpressionJSON } from "./mathlib/expressions-from-json"

declare const MathJax: any

export async function loadWasmStepsBackend(): Promise<void> {
    await initWasm()

    // Where the text input goes
    const inputView = document.getElementById(
        "inputView"
    )! as HTMLTextAreaElement
    // Displays the typeset input
    const problemView = new EditableMathView()
    {
        const problemViewDiv = document.getElementById(
            "problemView"
        ) as HTMLDivElement
        problemViewDiv.appendChild(problemView)
    }
    // Displays the final answer
    const solutionView = new EditableMathView()
    {
        const solutionViewDiv = document.getElementById("solutionView")!
        solutionViewDiv.appendChild(solutionView)
    }
    // Displays sequence of steps
    const stepListView = document.getElementById("stepsView")! as HTMLDivElement

    // Populate ui

    inputView.focus()
    let parsedExpression: Expression

    inputView.addEventListener("keyup", () => {
        parsedExpression = parseExpression(inputView.value) ?? parsedExpression
        if (parsedExpression == undefined) return

        problemView.value = parsedExpression

        let r = simplify_with_steps(parsedExpression.toJSON())

        let result: {
            steps: string[]
        }
        try {
            result = JSON.parse(r)
        } catch (e) {
            console.log(
                "Implementation error: Received error msg from backend:"
            )
            console.log(r)
            return
        }

        stepListView.innerHTML = ""
        for (let i = 1; i + 1 < result.steps.length; i += 2) {
            let argument = result.steps[i]
            let expression = result.steps[i + 1]

            stepListView.appendChild(row(argument, expression))
        }

        solutionView.value = parseExpressionJSON(
            result.steps[result.steps.length - 1]
        )
        MathJax.typeset([problemView, stepListView])
    })
}

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
