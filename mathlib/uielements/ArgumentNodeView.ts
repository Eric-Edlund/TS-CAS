import { Argument } from "../Argument";
import { GraphNodeView } from "./GraphNodeView";

/**
 * Represents an argument node.
 */
 export class ArgumentNodeView extends GraphNodeView {

    constructor(arg: Argument) {
        super()
        this.argument = arg
    }

    public connectedCallback(): void {
        this.textContent = this.argument.argument
    }

    private readonly argument: Argument;
}

customElements.define("argument-nodeview", ArgumentNodeView, {extends: "div"});