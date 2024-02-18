import { EditableMathView } from "./mathlib/uielements/EditableMathView"
import initWasm, {simplify_with_steps} from "../cas/pkg"
import { parseExpression } from "./mathlib/userinput/AntlrMathParser"
import { Expression } from "./mathlib/expressions/Expression"
import { Integer } from "./mathlib/expressions/Integer"
import { Sum } from "./mathlib/expressions/Sum"
import { parseExpressionJSON } from "./mathlib/expressions-from-json"

declare const MathJax: any

export async function loadWasmStepsBackend(): Promise<void> {
    await initWasm()

    // Where the text input goes
    const inputView = document.getElementById("inputView")! as HTMLTextAreaElement
    // Displays the typeset input
    const problemView = new EditableMathView();
    {
        const problemViewDiv = document.getElementById("problemView") as HTMLDivElement
        problemViewDiv.appendChild(problemView)
    }
    // Displays the final answer
    const solutionView = new EditableMathView();
    {
        const solutionViewDiv = document.getElementById("solutionView")!;
        solutionViewDiv.appendChild(solutionView)
    }
    // Displays sequence of steps
    const stepListView = document.getElementById("stepsView")! as HTMLDivElement

    // Populate ui

    inputView.focus()
    let parsedExpression: Expression;

    inputView.addEventListener("keyup", () => {
        parsedExpression = parseExpression(inputView.value) ?? parsedExpression
        if (parsedExpression == undefined) return

        problemView.value = parsedExpression;

        let r = simplify_with_steps(parsedExpression.toJSON())

        let result: {
            "steps": string[]
        }
        try {
            result = JSON.parse(r);
        } catch (e) {
            console.log("Implementation error: Received error msg from backend:")
            console.log(r)
            return
        }


        stepListView.innerHTML = ''
        for (let i=0; i<result.steps.length; i++) {
            let step = result.steps[i];
            if (i % 2 == 1) {
                const paragraph = document.createElement("p");
                paragraph.innerText = step;
                stepListView.appendChild(paragraph);
            } else {
                const stepView = document.createElement("div")
                const expressionView = new EditableMathView();
                expressionView.value = parseExpressionJSON(step);
                stepView.appendChild(expressionView);
                stepListView.appendChild(stepView);
            }
        }

        solutionView.value = parseExpressionJSON(result.steps[result.steps.length - 1])
        MathJax.typeset([problemView, stepListView])
    })
}
