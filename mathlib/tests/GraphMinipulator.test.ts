
/**
 * Tests the graph minipulator functions.
 */

import { AlgebraDoer } from "../AlgebraDoer"
import { num } from "../ConvenientExpressions"
import { Graph } from "../Graph"
import { GraphMinipulator } from "../GraphMinipulator"
import { Inference } from "../Inference"
import { assert } from "../util/assert"


test("depth mapping works", () => {
    const graph = new Graph()
    const root = num(0)
    const d1 = num(1)
    const d2 = num(2)
    graph.addNode(root)
    graph.addInference(new Inference(root, d1, "nothing"))
    graph.addInference(new Inference(d1, d2, "nothing"))

    const result = GraphMinipulator.getLevels(graph, [root]);
    //console.log(result)
    assert(result.get(0)!.has(root))
    assert(result.get(1)!.has(d1))
    assert(result.get(2)!.has(d2))
    assert(result.get(0)!.size == 1)
    assert(result.get(1)!.size == 1)
    assert(result.get(2)!.size == 1)

    const result1 = GraphMinipulator.getLevels(graph, [root, d1]);
    //console.log(result)
    assert(result1.get(0)!.has(root))
    assert(result1.get(0)!.has(d1))
    assert(result1.get(1)!.has(d2))
    assert(result1.get(0)!.size == 2)
    assert(result1.get(1)!.size == 1)
})