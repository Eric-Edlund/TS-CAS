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
import { GraphView } from "./components/GraphView"
import { ExpressionInput } from "./components/ExpressionInput"

declare const MQ: any

const casWorker = new Worker("casWorker.js")

const config: WebGraphViewInitSettings = {
    showArguments: false,
    drawEdgeLines: true,
    debugCornerEnabled: true
}

const [expression, setExpression] = createSignal<Expression | null>(null)
const [graph, setGraph] = createSignal(new Graph(), { equals: false })

document.addEventListener("DOMContentLoaded", () => {
    const inputDiv = document.getElementById("input") as HTMLDivElement
    const { mathInput, setFocused } = ExpressionInput({ editCb: setExpression })
    render(() => mathInput, inputDiv)
    setFocused(true)
    window.addEventListener("keypress", () => setFocused(true))

    const out = document.getElementById("outputbox")!
    render(
        () => (
            <GraphView
                graph={graph}
                root={expression}
                interpreter={new Interpreter({ skips: setOf() })}
                config={config}
            />
        ),
        out
    )

    casWorker.onmessage = (
        incrementalResult: MessageEvent<IncrementalGraphResult>
    ) => {
        const { newData, failed, forProblem } = incrementalResult.data

        if (failed || forProblem != expression()?.toJSON()) {
            return
        }

        // A practical limit to the number of nodes we can afford to render
        if (graph().numNodes() > 50) {
            return
        }

        for (const { source, target, edge: argument} of newData) {
            let n = parseExpressionJSON(source)
            let n1 = parseExpressionJSON(target)
            graph().addEdge(
                n,
                n1,
                new Argument(
                    setOf(n),
                    { n: n, r: Relationship.Equal, n1: n1 },
                    argument.rule_name,
                    "unknown"
                )
            )
        }
        setGraph(graph())
    }


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
