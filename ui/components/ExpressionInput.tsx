import { createEffect, createSignal } from "solid-js"
import { Expression } from "../mathlib/expressions/Expression"
import { parseExpressionLatex } from "../mathlib/userinput/LatexParser"

declare const MQ: any

export interface Props {
    editCb: (expression: Expression | null) => void
}

export function ExpressionInput({ editCb }: Props) {
    const wrappingView = document.createElement("div")
    wrappingView.style.width = "100%"
    wrappingView.style.height = "100%"
    wrappingView.style.margin = "0"
    wrappingView.style.padding = "0.5em"
    wrappingView.style.backgroundColor = "white"
    const view = document.createElement("textarea")
    const quill = MQ.MathField(wrappingView, {
        handlers: {
            edit: function () {
                const parseResult = parseExpressionLatex(quill.latex())
                if (parseResult === "empty") {
                    editCb(null)
                    return
                }
                if (parseResult == null) {
                    wrappingView.style.color = "red"
                } else {
                    wrappingView.style.color = "black"
                }
                editCb(parseResult)
            },
        },
        autoCommands: "int pi sqrt",
        substituteTextarea: function () {
            return view
        }
    })

    const [focused, setFocused] = createSignal(false)

    createEffect(() => {
        if (focused()) {
            view.focus()
        } else {
            view.blur()
        }
    })

    view.addEventListener("focus", () => setFocused(true))
    view.addEventListener("blur", () => setFocused(false))

    return {
        mathInput: wrappingView,
        focused,
        setFocused
    }
}
