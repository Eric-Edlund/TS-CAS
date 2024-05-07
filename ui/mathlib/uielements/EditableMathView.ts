import { MathElement, NameTable } from "../expressions/MathElement"

/**
 * Displays math and is editable.
 */
export class MathView extends HTMLDivElement {
    public constructor(
        expression: MathElement | null = null,
        tbl: NameTable = {}
    ) {
        super()
        this.tbl = tbl
        this.style.display = "block"
        this.setValue(expression)
    }

    public inline(): MathView {
        this.display = "inline"
        this.style.display = "inline"
        this.innerHTML =
            `<math display='${this.display}'>` +
            (this._value?.toMathXML(this.tbl) ?? "") +
            "</math>"
        this.listeners.forEach(l => l(this._value))
        MathJax.typeset([this])
        return this
    }

    public connectedCallback(): void {}

    public setValue(e: MathElement | null): void {
        this._value = e
        this.innerHTML =
            `<math display='${this.display}'>` +
            (e?.toMathXML(this.tbl) ?? "") +
            "</math>"
        this.listeners.forEach(l => l(this._value))
        MathJax.typeset([this])
    }

    public get value(): MathElement | null {
        return this._value
    }

    /**
     * Listener will be called whenever the math
     * in the view is edited.
     * @param l
     */
    public addEditListener(l: EditableMathListener): void {
        this.listeners.push(l)
    }
    private readonly listeners: EditableMathListener[] = []
    private _value: MathElement | null = null
    private display: "inline" | "block" = "block"
    private tbl: NameTable
}

export type EditableMathListener = (e: MathElement | null) => void

customElements.define("editable-mathview", MathView, { extends: "div" })

declare const MathJax: any
