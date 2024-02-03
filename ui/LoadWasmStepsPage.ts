import { Expression } from "./mathlib/expressions/Expression"
import { EditableMathView } from "./mathlib/uielements/EditableMathView"
import loadWasm, {simplify_with_steps} from "../cas/pkg"

export async function loadWasmStepsBackend(): Promise<void> {
    await loadWasm()

    const inputView = document.getElementById("problem")! as HTMLTextAreaElement
    const problemViewDiv = document.getElementById(
        "expressionViewDiv"
    ) as HTMLDivElement
    const solutionView = document.getElementById(
        "solution"
    )! as EditableMathView
    const stepListView = document.getElementById("steps")!

    // Populate ui
    const problemView = new EditableMathView()
    problemViewDiv.appendChild(problemView)

    inputView.focus()

    inputView.addEventListener("keyup", () => {
        let result = simplify_with_steps(inputView.textContent)
        console.log(result)
    })
}
