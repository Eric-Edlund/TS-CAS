
/**
 * Checks that we are drawing valid algebraic conclusions.
 */

import { Argument } from "../Argument"
import { equivalenceArgument, num, sum, v } from "../ConvenientExpressions"
import { Integer } from "../expressions/Integer"
import { Product } from "../expressions/Product"
import { Sum } from "../expressions/Sum"
import { Variable } from "../expressions/Variable"
import { Graph } from "../Graph"
import { GraphMinipulator } from "../GraphMinipulator"
import { assert } from "../util/assert"

const a = Variable.of('a')
const b = Variable.of('b')
const c = Variable.of('c')

test("a + b = c => a = c - b", () => {

    const leftHand = Sum.of([a, b])
    const rightHand = c
    const startGraph = new Graph()
    startGraph.addNode(leftHand)
    startGraph.addArgument(equivalenceArgument(leftHand, rightHand, "Given by problem"))
    startGraph.addArgument(equivalenceArgument(rightHand, leftHand, "Given by problem"))

    ///const expansion = Algebra.expand(startGraph)
    const expected = Sum.of([c, Product.of([Integer.of(-1), b])])
    ////assert(expansion.contains(expected), "" + expansion + " doesn't contain " + expected)
    //assert(expansion.contains(a))
    //assert(expansion.getEdge(expected, a)! instanceof Argument)
})

test("Algebraic Expansion produces a connected resultant graph", () => {
    const graph = new Graph();
    graph.addArgument(equivalenceArgument(sum(a, b), c, "given"))
    //graph.addGraph(Algebra.expand(graph));
    //assert(GraphMinipulator.isConnected(graph), "graph isn't connected")
    //graph.addGraph(Algebra.expand(graph));
    //assert(GraphMinipulator.isConnected(graph), "graph isn't connected")
})

test("Algebraic Expansion produces a connected resultant graph 2", () => {
    const graph = new Graph();
    const left = sum(v('x'), num(2), num(2))
    const right = sum(v('y'), num(2))
    graph.addNode(left)
    graph.addNode(right)
    graph.addArgument(equivalenceArgument(left, right, "Given by problem"))
    
    //const result = Algebra.expand(graph)
    //graph.addGraph(result);

    //assert(GraphMinipulator.isConnected(graph), "graph isn't connected")
    //graph.addGraph(Algebra.expand(graph));
    //assert(GraphMinipulator.isConnected(graph), "graph isn't connected")
})