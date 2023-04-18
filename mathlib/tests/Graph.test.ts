

/**
 * Tests for the graph class.
 * 
 */

import { v } from "../ConvenientExpressions";
import { Graph } from "../Graph";
import { Inference } from "../Inference";
import { assert } from "../util/assert";

const a = v('a')
const b = v('b')
const c = v('c')
const d = v('d')
const e = v('e')
const f = v('f')

test("graph correctly finds/counts neighbors", () => {
    const graph = new Graph()
    graph.addInference(new Inference(a, b, "given"))
    graph.addInference(new Inference(b, a, "given"))
    graph.addInference(new Inference(b, c, "g"))
    graph.addInference(new Inference(a, d, ""))
    graph.addNode(e)

    assert(graph.getNeighbors(a, "both")!.size == 2, "" + [...graph.getNeighbors(a, "both")!])
    assert(graph.getNeighbors(a, "in")!.size == 1)
    assert(graph.getNeighbors(a, "out")!.size == 2)
    assert(graph.getNeighbors(b, "both")!.size == 2)
    assert(graph.getNeighbors(b, "in")!.size == 1)
    assert(graph.getNeighbors(b, "out")!.size == 2)
    
    assert(graph.getNeighbors(e, "both")!.size == 0)
    assert(graph.getDegree(e, "both") == 0)

    assert(graph.getNeighbors(f, "both") == undefined)
    assert(graph.getDegree(f, "both") == undefined)

    assert(graph.getDegree(a, "both") == 3, "" + graph.getDegree(a, "both"))
})