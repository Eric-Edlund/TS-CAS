/**
 * An html element that represents a math graph node.
 */
export abstract class GraphNodeView extends HTMLDivElement {
    /**
     *
     * @param setStyle Function that when called
     *  should set the style for this view.
     */
    constructor(setStyle: (view: GraphNodeView) => void) {
        super()

        this.style.padding = "1ch"
        this.style.width = "fit-content"
        this.style.height = "fit-content"
        this.style.whiteSpace = "nowrap"

        setStyle(this)
    }

    public set backgroundColor(value: string) {
        this.style.backgroundColor = value
    }

    public abstract connectedCallback(): void
}
