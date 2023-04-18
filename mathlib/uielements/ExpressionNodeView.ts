import { Expression } from "../expressions/Expression";
import { EditableMathView } from "./EditableMathView";
import { GraphNodeView } from "./GraphNodeView";

/**
 * A graph node view for expression nodes.
 */
export class ExpressionNodeView extends GraphNodeView {
    public constructor(node: Expression) {
        super();
        this.node = node

        this.editableMathView = new EditableMathView()
        this.editableMathView.value = this.node
        this.appendChild(this.editableMathView)

        if (!node.isHealthy)
            this.style.backgroundColor = 'red'
    }

    public connectedCallback(): void {
    }

    protected readonly node: Expression;
    private readonly editableMathView: EditableMathView;
}
customElements.define("expression-nodeview", ExpressionNodeView, {extends: "div"});

const colorUnhealthyNodes = true