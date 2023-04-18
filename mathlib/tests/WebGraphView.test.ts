import { WebGraphView } from "../uielements/WebGraphView"
import { AlgebraDoer } from "../AlgebraDoer"
import { a, b, c, sum } from "../ConvenientExpressions"
import { Graph } from "../Graph"
import { Inference } from "../Inference"


test("WebGraphView constructs", () => {
    const graph = new Graph()
    graph.addInference(new Inference(sum(a, b), c, "given"))
    graph.addGraph(AlgebraDoer.expand(graph))
    graph.addGraph(AlgebraDoer.expand(graph))

    // Can't do this without the browser runtime.
    //const view = new WebGraphView(graph, new Set([sum(a, b), c]))
})