import { WebGraphView } from "../uielements/WebGraphView"
import { a, b, c, equivalenceArgument, sum } from "../ConvenientExpressions"
import { Graph } from "../Graph"
import { Argument } from "../Argument"

test("WebGraphView constructs", () => {
    const graph = new Graph()
    graph.addArgument(equivalenceArgument(sum(a, b), c, "given"))
    //graph.addGraph(Algebra.expand(graph))
    //graph.addGraph(Algebra.expand(graph))

    // Can't do this without the browser runtime.
    //const view = new WebGraphView(graph, new Set([sum(a, b), c]))
})
