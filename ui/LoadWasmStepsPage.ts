import { EditableMathView } from "./mathlib/uielements/EditableMathView"
import initWasm, {simplify_with_steps} from "../cas/pkg"

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

    inputView.addEventListener("keyup", () => {
        let result = JSON.parse(simplify_with_steps(inputView.textContent))
        console.log(result[0])
        problemViewDiv.innerHTML = result[0]
        solutionView.innerHTML = "<math display='block'>" + result[0] + "</math>"
        MathJax.typeset([problemViewDiv])
    })
}
