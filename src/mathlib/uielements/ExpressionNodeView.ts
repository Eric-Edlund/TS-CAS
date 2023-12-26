import { Expression } from "../expressions/Expression"
import { Variable } from "../expressions/Variable"
import { EditableMathView } from "./EditableMathView"
import { GraphNodeView } from "./GraphNodeView"

/**
 * A graph node view for expression nodes.
 */
export class ExpressionNodeView extends GraphNodeView {
    public constructor(
        node: Expression,
        setStyle: (view: GraphNodeView) => void
    ) {
        super(setStyle)
        this.node = node

        this.editableMathView = new EditableMathView()
        this.editableMathView.value = this.node
        this.appendChild(this.editableMathView)

        this.addEventListener("click", () => {
            console.log(this.node.toUnambigiousString())
        })
    }

    public connectedCallback(): void {
        this.classList.add("expression")
    }

    protected readonly node: Expression
    private readonly editableMathView: EditableMathView
}
customElements.define("expression-nodeview", ExpressionNodeView, {
    extends: "div"
})

const colorUnhealthyNodes = true
