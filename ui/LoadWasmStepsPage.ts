import { EditableMathView } from "./mathlib/uielements/EditableMathView"
import initWasm, {simplify_with_steps} from "../cas/pkg"
import { parseExpression } from "./mathlib/userinput/AntlrMathParser"
import { Expression } from "./mathlib/expressions/Expression"
import { Integer } from "./mathlib/expressions/Integer"
import { Sum } from "./mathlib/expressions/Sum"

declare const MathJax: any

export async function loadWasmStepsBackend(): Promise<void> {
    await initWasm()

    const inputView = document.getElementById("problem")! as HTMLTextAreaElement
    const problemViewDiv = document.getElementById(
        "expressionViewDiv"
    ) as HTMLDivElement
    const solutionView = document.getElementById("solution")!
    const stepListView = document.getElementById("steps")!

    // Populate ui
    const problemView = new EditableMathView()
    problemViewDiv.appendChild(problemView)

    inputView.focus()
    let parsedExpression: Expression;

    inputView.addEventListener("keyup", () => {
        parsedExpression = parseExpression(inputView.value) ?? parsedExpression
        if (parsedExpression == undefined) return

        let r = simplify_with_steps(parsedExpression.toJSON())

        let result: String;
        try {
            result = JSON.parse(r);
        } catch (e) {
            console.log("Implementation error: Received error msg from backend:")
            console.log(r)
            return
        }

        problemViewDiv.innerHTML = result[result.length - 1]
        solutionView.innerHTML = "<math display='block'>" + result[0] + "</math>"
        MathJax.typeset([])
    })
}
