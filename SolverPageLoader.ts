import { a, num, product, x } from "./mathlib/ConvenientExpressions"
import { Deriver } from "./mathlib/derivations/Deriver"
import { Exponent } from "./mathlib/expressions/Exponent"
import { Fraction } from "./mathlib/expressions/Fraction"
import { Graph, GraphEdge } from "./mathlib/Graph"
import { EditableMathView } from "./mathlib/uielements/EditableMathView"
import path from "ngraph.path"
import createGraph from "ngraph.graph"
import { Expression } from "./mathlib/expressions/Expression"
import { MathGraphNode } from "./mathlib/MathGraphNode"
import { GraphNodeView } from "./mathlib/uielements/GraphNodeView"
import { Argument } from "./mathlib/Argument"
import { ArgumentNodeView } from "./mathlib/uielements/ArgumentNodeView"
import { ExpressionNodeView } from "./mathlib/uielements/ExpressionNodeView"
import { Derivative } from "./mathlib/expressions/Derivative"


export function loadSolverPage(): void {
    const page = document.getElementsByTagName('body')[0]

    //const root = Derivative.of(sum(a, a, product(num(2), b)), a)
    //const root = Derivative.of(product(num(3), Exponent.of(x, num(2)), Exponent.of(x, num(3))), x)
    //const root = product(Exponent.of(x, num(3)), Exponent.of(x, num(4)), x, x)
    const root = Derivative.of(Fraction.of(Exponent.of(x, num(2)), x), x)
    //const root = Fraction.of(product(num(2), x, Exponent.of(x, a), a), product(num(2), a, a, x))
    const graph = new Graph().addNode(root)

    const deriver = new Deriver(graph)
    deriver.expand()

    let simplified: Expression | null = null
    for (const node of graph.getNodes()) {
        if (node instanceof Expression)
            if (deriver.isSimplified(node)) 
            simplified = node as Expression
    }

    // Copy the resulting graph into a library implementation of graph
    const libraryGraph = createGraph<MathGraphNode, GraphEdge>()
    graph.getNodes().forEach(n => libraryGraph.addNode(n.id, n))
    for (const edge of graph.getEdges()) {
        libraryGraph.addLink(edge.n.id, edge.n1.id)
    }

    // Do path finding operation on it
    const pathFinder = path.aStar<MathGraphNode, GraphEdge>(libraryGraph)
    const resultPath = pathFinder.find(root.id, simplified!.id).reverse()

    const problemView = document.getElementById('problem')! as EditableMathView
    const solutionView = document.getElementById('solution')! as EditableMathView
    const stepListView = document.getElementById('steps')!

    problemView.value = root
    solutionView.value = simplified!

    resultPath.forEach(node => {
        let view: GraphNodeView
        if (node.data instanceof Argument) {
            view = new ArgumentNodeView(node.data)
        } else if (node.data instanceof Expression) {
            view = new ExpressionNodeView(node.data)
        } else throw new Error("Not implemented")

        stepListView.appendChild(view)
    })
    
}