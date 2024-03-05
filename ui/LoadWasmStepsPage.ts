import { EditableMathView } from "./mathlib/uielements/EditableMathView"
import initWasm, { simplify_with_steps } from "../cas/pkg"
import { parseExpression } from "./mathlib/userinput/AntlrMathParser"
import { Expression } from "./mathlib/expressions/Expression"
import { parseExpressionJSON } from "./mathlib/expressions-from-json"
import { parseExpressionLatex } from "./mathlib/userinput/LatexParser"

declare const MathJax: any
declare const MQ: any

type InputMode = "quill" | "boring"
let currentInputMode: InputMode

// Only accessible after the DOM is loaded
let activeUI: QuillInputUI | LegacyInputUI

type QuillInputUI = {
    quillInput: any
}

type LegacyInputUI = {
    textInput: HTMLTextAreaElement
    inputView: EditableMathView
}

const answerSummary = document.getElementById(
    "answerSummary"
)! as HTMLDivElement

// Displays the final answer
const solutionView = new EditableMathView()

// Displays sequence of steps leading to the final answer
const stepListView = document.getElementById("stepsView")! as HTMLDivElement

/**
 * Called after the DOM is loaded.
 */
export async function loadWasmStepsBackend(): Promise<void> {
    await initWasm()
    setInputMode("quill")
}

// The last valid entered expression
let expression: Expression

/**
 * Calculates the new answer and displays it.
 * @effects The solution steps view and summary div.
 *      Does not effect the input area.
 */
function onInputExpressionChanged() {
    if (expression == undefined) return
    console.log(expression.toUnambigiousString())

    let r = simplify_with_steps(expression.toJSON())

    let result: {
        steps: string[]
    }
    try {
        result = JSON.parse(r)
    } catch (e) {
        console.log("Implementation error: Received error msg from backend:")
        console.log(r)
        return
    }

    solutionView.value = parseExpressionJSON(
        result.steps[result.steps.length - 1]
    )
    stepListView.innerHTML = ""
    for (let i = 1; i + 1 < result.steps.length; i += 2) {
        let argument = result.steps[i]
        let expression = result.steps[i + 1]

        stepListView.appendChild(row(argument, expression))
    }

    MathJax.typeset([answerSummary, stepListView])
}

/**
 * Makes the chosen current view the visible one.
 * @effects activeUI, currentInputMode, DOM
 */
export function setInputMode(mode: InputMode): void {
    if (currentInputMode == mode) return
    currentInputMode = mode

    const inputDiv = document.getElementById("inputZone")!

    if (mode == "quill") {
        const inputView = document.createElement("span")
        inputView.classList.add('col', 's12')
        inputView.style.minHeight = "2em"
        const quill = MQ.MathField(inputView, {
            handlers: {
                edit: function() {
                    expression = parseExpressionLatex(quill.latex()) ?? expression
                    onInputExpressionChanged()
                }
            },
            autoCommands: 'int'
        })
        
        activeUI = {
            quillInput: quill
        } as QuillInputUI

        inputDiv.replaceChildren(inputView)
        answerSummary.replaceChildren(solutionView)
    } else {
        const inputArea = document.createElement("textarea")
        const inputView = new EditableMathView()
        inputView.classList.add("col", "s5")
        inputArea.addEventListener("input", () => {
            expression = parseExpression(inputArea.value) ?? expression
            inputView.value = expression
            onInputExpressionChanged()
        })

        activeUI = {
            textInput: inputArea,
            inputView: inputView
        } as LegacyInputUI

        inputDiv.replaceChildren(inputArea)

        answerSummary.replaceChildren()
        answerSummary.appendChild(inputView)
        const eqSymbol = document.createElement("div")
        eqSymbol.classList.add("col", "s2")
        eqSymbol.innerHTML = "<math display='block'><mo>=</mo></math>"
        answerSummary.appendChild(eqSymbol)
        solutionView.classList.add("col", "s5")
        answerSummary.appendChild(solutionView)

        MathJax.typeset([answerSummary])
    }
}

//@ts-ignore
window.setInputMode = setInputMode

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
