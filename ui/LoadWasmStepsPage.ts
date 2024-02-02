import { simplify_with_steps } from "../cas/pkg";
import { Expression } from "./mathlib/expressions/Expression"
import { EditableMathView } from "./mathlib/uielements/EditableMathView"

export async function loadWasmStepsBackend(): Promise<void> {
    const loadWasm = import("../cas/pkg");
    loadWasm.then((res) => {
        console.log("Loaded wasm.")
        console.log(simplify_with_steps)
        console.log(res.simplify_with_steps("1"))
        res.run()

    })


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

    // import("../cas/pkg").then(module => {
    //     module.simplify_with_steps("1"); 
    //     console.log("Run with crate")
    // })


    inputView.addEventListener("keyup", () => {
        // let result = wasm.simplify_with_steps(inputView.textContent)
        // console.log(result)
    })
}
