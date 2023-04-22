/**
 * An html element that represents a math graph node.
 */
export abstract class GraphNodeView extends HTMLDivElement {

    constructor() {
        super();
        //this.style.border = "blue dotted 0.2ch"
        this.style.borderRadius = "1ch"
        this.style.backgroundColor = "lightblue"
        this.style.padding = "1ch"
        this.style.paddingTop = "0"
        this.style.paddingBottom = "0"
        this.style.width = "fit-content"
        this.style.height = "fit-content"
        this.style.whiteSpace = "nowrap"
    }

    public abstract connectedCallback(): void;
}