import {
    WebGraphView,
    WebGraphViewInitSettings
} from "./mathlib/uielements/WebGraphView"
import { Expression } from "./mathlib/expressions/Expression"
import { Interpreter } from "./mathlib/interpreting/Interpreter"
import { parseExpressionLatex } from "./mathlib/userinput/LatexParser"
import { Graph } from "./mathlib/Graph"
import { CasWorkerMsg, IncrementalGraphResult } from "./CasWorkerTypes"
import { parseExpressionJSON } from "./mathlib/expressions-from-json"
import { Relationship } from "./mathlib/Relationship"
import { Argument } from "./mathlib/Argument"
import { setOf } from "./mathlib/util/ThingsThatShouldBeInTheStdLib"
import { Accessor, Show, createEffect, createSignal } from "solid-js"
import { render } from "solid-js/web"
import { Integer } from "./mathlib/expressions/Integer"

declare const MQ: any

const casWorker = new Worker("casWorker.js")

const config: WebGraphViewInitSettings = {
    showArguments: false,
    drawEdgeLines: true,
    debugCornerEnabled: true
}

const [expression, setExpression] = createSignal<Expression | null>(null)
const [graph, setGraph] = createSignal(new Graph(), {equals: false})

document.addEventListener("DOMContentLoaded", () => {
    const inputDiv = document.getElementById("input") as HTMLDivElement
    const input = document.createElement("textarea")
    const out = document.getElementById("outputbox")!

    const quill = MQ.MathField(inputDiv, {
        handlers: {
            edit: function () {
                const parseResult = parseExpressionLatex(quill.latex())
                if (parseResult === "empty") {
                    setExpression(null)
                    return
                }
                setExpression(parseResult)
            }
        },
        autoCommands: "int pi sqrt",
        substituteTextarea: function () {
            return input
        }
    })
    input.focus()

    // Shortcuts
    document.getElementById("body")!.addEventListener("keypress", () => {
        input.focus()
    })

    casWorker.onmessage = (
        incrementalResult: MessageEvent<IncrementalGraphResult>
    ) => {
        const { newData, failed, forProblem } = incrementalResult.data

        if (failed || forProblem != expression()?.toJSON()) {
            return
        }

        // A practical limit to the number of nodes we can afford to render
        if (graph().numNodes() > 100) {
            return
        }

        for (const { source, target } of newData) {
            let n = parseExpressionJSON(source)
            let n1 = parseExpressionJSON(target)
            graph().addEdge(
                n,
                n1,
                new Argument(
                    setOf(n),
                    { n: n, r: Relationship.Equal, n1: n1 },
                    "From backend",
                    "unknown"
                )
            )
        }
        setGraph(graph())
    }
    
    render(() => <GraphView graph={graph} root={expression}/>, out)

    createEffect(() => {
        if (expression() === null) {
            casWorker.postMessage({
                cancel: true
            })
            return
        }

        console.log("Parsed " + expression()!.toJSON())
        const newGraph = new Graph()
        newGraph.addNode(expression()!)
        setGraph(newGraph)

        casWorker.postMessage({
            expressionJson: expression()!.toJSON(),
            operation: "graph"
        } as CasWorkerMsg)
    })
})

interface GraphViewProps {
    graph: Accessor<Graph>
    root: Accessor<Expression | null>
}
function GraphView({graph, root}: GraphViewProps): Element {
    const tmp = new Graph()
    const one = Integer.of(1)
    tmp.addNode(one)
    const view = new WebGraphView(tmp, new Set([one]), new Interpreter({skips: setOf()}), config)
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
