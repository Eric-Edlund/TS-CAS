import { Accessor, Show, createEffect } from "solid-js"
import { Graph } from "../mathlib/Graph"
import { Expression } from "../mathlib/expressions/Expression"
import { Integer } from "../mathlib/expressions/Integer"
import { Interpreter } from "../mathlib/interpreting/Interpreter"
import { WebGraphView, WebGraphViewInitSettings } from "../mathlib/uielements/WebGraphView"

export interface Props {
    graph: Accessor<Graph>
    root: Accessor<Expression | null>
    interpreter: Interpreter
    config: WebGraphViewInitSettings
}

export function GraphView({graph, root, interpreter, config}: Props) {
    const tmp = new Graph()
    // We create garbage default data because WebGraphView() doesn't allow
    // being empty.
    const one = Integer.of(1)
    tmp.addNode(one)
    const view = new WebGraphView(tmp, new Set([one]), interpreter, config)
    view.style.width = "100%"
    view.style.height = "100%"
    createEffect(() => {
        if (graph().numNodes() > 0 && root()) {
            view.setGraph(graph(), new Set([root()!]))
        }
    })

    return (<Show when={graph().numNodes() > 0 && root()} >
        {view}
    </Show>)
}
