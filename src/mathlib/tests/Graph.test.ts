

/**
 * Tests for the graph class.
 * 
 */

import { equivalenceArgument, v } from "../ConvenientExpressions";
import { Graph } from "../Graph";
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

    // expect(graph.getNeighbors(a, "both")).toContain([b, d])
    // expect(graph.getNeighbors(a, "in")!.length).toBe(1)
    // expect(graph.getNeighbors(a, "out")!.length).toBe(2)
    // expect(graph.getNeighbors(b, "both")!.length).toBe(2)
    // expect(graph.getNeighbors(b, "in")!.length).toBe(1)
    // expect(graph.getNeighbors(b, "out")!.length).toBe(2)
    
    // assert(graph.getNeighbors(e, "both")!.length == 0)
    // assert(graph.getDegree(e, "both") == 0)

    // assert(graph.getNeighbors(f, "both") == undefined)
    // assert(graph.getDegree(f, "both") == undefined)

    // assert(graph.getDegree(a, "both") == 3, "" + graph.getDegree(a, "both"))
})