import {
    WebGraphView,
    WebGraphViewInitSettings
} from "./mathlib/uielements/WebGraphView"
import { Expression } from "./mathlib/expressions/Expression"
import { Interpreter } from "./mathlib/interpreting/Interpreter"
import { parseExpressionLatex } from "./mathlib/userinput/LatexParser"
import { GivenEdge, Graph } from "./mathlib/Graph"
import { CasWorkerMsg, IncrementalGraphResult } from "./CasWorkerTypes"
import { parseExpressionJSON } from "./mathlib/expressions-from-json"
import { Relationship } from "./mathlib/Relationship"
import { Argument } from "./mathlib/Argument"
import { setOf } from "./mathlib/util/ThingsThatShouldBeInTheStdLib"

declare const MQ: any

const casWorker = new Worker("casWorker.js")

const config: WebGraphViewInitSettings = {
    showArguments: false,
    drawEdgeLines: true,
    debugCornerEnabled: true
}

let graph = new Graph()
let graphView: WebGraphView | null = null;


/**
 * Called after DOM is loaded.
 * Substitutes the body element in the document
 * with the primary integrator view.
 */
document.addEventListener("DOMContentLoaded", () => {
    console.log("Loading")
    const inputDiv = document.getElementById("input") as HTMLDivElement
    const input = document.createElement("textarea")
    const out = document.getElementById("outputbox")!

    let expression: Expression | null = null

    const quill = MQ.MathField(inputDiv, {
        handlers: {
            edit: function () {
                const parseResult = parseExpressionLatex(quill.latex())
                if (parseResult === "empty") {
                    expression = null
                    onInputExpressionChanged()
                    return
                }
                expression = parseResult
                onInputExpressionChanged()
            }
        },
        autoCommands: "int pi sqrt",
        substituteTextarea: function () {
            return input
        }
    })
    input.focus()
    // Shortcuts
    document.getElementById("body").addEventListener("keypress", () => {
        input.focus()
    })

    casWorker.onmessage = (
        incrementalResult: MessageEvent<IncrementalGraphResult>
    ) => {
        const { newData, failed, forProblem } = incrementalResult.data

        if (failed || forProblem != expression?.toJSON()) {
            return
        }

        // A practical limit to the number of nodes we can afford to render
        if (graph.numNodes() > 100) {
            return
        }


        for (const { source, target } of newData) {
            let n = parseExpressionJSON(source)
            let n1 = parseExpressionJSON(target)
            graph.addEdge(n, n1, new Argument(setOf(n), {n: n, r: Relationship.Equal, n1: n1}, "From backend", "unknown"))
        }

        graphView.setGraph(graph, new Set([expression]))
    }

    /**
     * Starts solving it in the background.
     * @effects The solution steps view and summary div.
     *      Does not effect the input area.
     */
    function onInputExpressionChanged() {
        if (expression === undefined) return
        if (expression === null) {
            casWorker.postMessage({
                cancel: true
            })
            return
        }

        console.log("Parsed " + expression.toJSON())
        graph = new Graph()
        graph.addNode(expression)

        graphView = new WebGraphView(
            graph,
            new Set([expression]),
            new Interpreter({ skips: new Set() }),
            config
        )
        graphView.setAttribute("id", "web-graphview")
        out.replaceChildren(graphView)

        casWorker.postMessage({
            expressionJson: expression.toJSON(),
            operation: "graph"
        } as CasWorkerMsg)
    }
})
