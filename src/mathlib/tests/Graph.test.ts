

/**
 * Tests for the graph class.
 * 
 */

import { equivalenceArgument, v } from "../ConvenientExpressions";
import { Graph } from "../Graph";
import { Argument } from "../Argument";
import { assert } from "../util/assert";

const a = v('a')
const b = v('b')
const c = v('c')
const d = v('d')
const e = v('e')
const f = v('f')

test("graph correctly finds/counts neighbors", () => {
    const graph = new Graph()
    graph.addArgument(equivalenceArgument(a, b, "given"))
    graph.addArgument(equivalenceArgument(b, a, "given"))
    graph.addArgument(equivalenceArgument(b, c, "g"))
    graph.addArgument(equivalenceArgument(a, d, ""))
    graph.addNode(e)

    assert(graph.getNeighbors(a, "both")!.length == 2, "" + [...graph.getNeighbors(a, "both")!])
    assert(graph.getNeighbors(a, "in")!.length == 1)
    assert(graph.getNeighbors(a, "out")!.length == 2)
    assert(graph.getNeighbors(b, "both")!.length == 2)
    assert(graph.getNeighbors(b, "in")!.length == 1)
    assert(graph.getNeighbors(b, "out")!.length == 2)
    
    assert(graph.getNeighbors(e, "both")!.length == 0)
    assert(graph.getDegree(e, "both") == 0)

    assert(graph.getNeighbors(f, "both") == undefined)
    assert(graph.getDegree(f, "both") == undefined)

    assert(graph.getDegree(a, "both") == 3, "" + graph.getDegree(a, "both"))
})