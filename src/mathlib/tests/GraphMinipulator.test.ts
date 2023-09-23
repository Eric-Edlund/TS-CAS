
/**
 * Tests the graph minipulator functions.
 */

import { equivalenceArgument, num } from "../ConvenientExpressions"
import { Graph } from "../Graph"
import { GraphMinipulator } from "../GraphMinipulator"

test("depth mapping works", () => {
    const graph = new Graph()
    const root = num(0)
    const d1 = num(1)
    const d2 = num(2)
    graph.addNode(root)
    graph.addArgument(equivalenceArgument(root, d1, "nothing"))
    graph.addArgument(equivalenceArgument(d1, d2, "nothing"))

    //TODO: Update test now that arguments are considered nodes
    // const result = GraphMinipulator.getLevels(graph, [root]);
    // expect(result.get(0)).toContain(root)
    // expect(result.get(1)).toContain(d1)
    // expect(result.get(2)).toContain(d2)
    // expect(result.get(0)!.size).toBe(1)
    // expect(result.get(1)!.size).toBe(1)
    // expect(result.get(2)!.size).toBe(1)

    // const result1 = GraphMinipulator.getLevels(graph, [root, d1]);
    // expect(result1.get(0)).toContain(root)
    // expect(result1.get(0)).toContain(d1)
    // expect(result1.get(1)).toContain(d2)
    // expect(result1.get(0)!.size).toBe(2)
    // expect(result1.get(1)!.size).toBe(1)
})