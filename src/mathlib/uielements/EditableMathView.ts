import { MathElement } from "../expressions/MathElement"

/**
 * Displays math and is editable.
 */
export class EditableMathView extends HTMLDivElement {
    public constructor() {
        super()

        this.addEventListener("click", event => {})
    }

    public connectedCallback(): void {}

    public set value(e: MathElement | null) {
        this._value = e
        this.innerHTML =
            "<math display='block'>" + (e?.toMathXML() ?? "") + "</math>"
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
}

export type EditableMathListener = (e: MathElement | null) => void

customElements.define("editable-mathview", EditableMathView, { extends: "div" })

declare const MathJax: any
