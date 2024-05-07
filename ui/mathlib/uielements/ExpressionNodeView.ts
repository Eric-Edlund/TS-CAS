import { Expression } from "../expressions/Expression"
import { NameTable } from "../expressions/MathElement"
import { Variable } from "../expressions/Variable"
import { MathView } from "./EditableMathView"
import { GraphNodeView } from "./GraphNodeView"

/**
 * A graph node view for expression nodes.
 */
export class ExpressionNodeView extends GraphNodeView {
    public constructor(
        node: Expression,
        tbl: NameTable,
        setStyle: (view: GraphNodeView) => void
    ) {
        super(setStyle)
        this.node = node

        this.editableMathView = new MathView()
        this.editableMathView.setValue(this.node, tbl)
        this.appendChild(this.editableMathView)

        this.addEventListener("click", () => {
            console.log(this.node.toUnambigiousString())
        })
    }

    public connectedCallback(): void {
        this.classList.add("expression")
    }

    protected readonly node: Expression
    private readonly editableMathView: MathView
}
customElements.define("expression-nodeview", ExpressionNodeView, {
    extends: "div"
})

const colorUnhealthyNodes = true
