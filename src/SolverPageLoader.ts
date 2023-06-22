import { Deriver } from "./mathlib/derivations/Deriver"
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
import { GraphMinipulator } from "./mathlib/GraphMinipulator"
import { parseExpression } from "./mathlib/userinput/AntlrMathParser"


export function loadSolverPage(): void {
    const problemView = document.getElementById('problem')! as HTMLTextAreaElement
    const solutionView = document.getElementById('solution')! as EditableMathView
    const stepListView = document.getElementById('steps')!

    problemView.focus()

    problemView.addEventListener("keyup", () => {
        // Parse input
        let exp: Expression
        try {
            exp = parseExpression(problemView.value)
        } catch (e) {
            stepListView.style.opacity = "0.6"
            return
        }
        // We were able to parse the input
        stepListView.style.opacity = "1"

        // Clear the previous result
        while (stepListView.children.length > 0) {
            stepListView.removeChild(stepListView.children[0])
        }
        

        const steps = getSolution(exp)

        // Display new result
        solutionView.value = steps[steps.length - 1] as Expression
        steps.forEach(step => {
            let view: GraphNodeView
            if (step instanceof Argument) {
                view = new ArgumentNodeView(step, view => {})
            } else if (step instanceof Expression) {
                view = new ExpressionNodeView(step, view => {})
            } else throw new Error("Not implemented")
    
            stepListView.appendChild(view)
        })
    })

    
    
}

/**
 * Simplifies the given expression returning an array
 * of steps ending in the answer.
 * The last node will be an expression.
 */
function getSolution(problem: Expression): MathGraphNode[] {
    const graph = new Graph().addNode(problem)

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

    // I assume that library graph isn't directed
    for (const edge of GraphMinipulator.dropSymmetric(graph.getEdges())) {
        libraryGraph.addLink(edge.n.id, edge.n1.id)
        // if (edge.n instanceof Expression && edge.n1 instanceof Expression)
        //     console.log(`edge ${edge.n} AND ${edge.n1}`)
    }

    // Do path finding operation on it
    const pathFinder = path.nba<MathGraphNode, GraphEdge>(libraryGraph)
    const resultPath = pathFinder.find(problem.id, simplified!.id).reverse()

    return resultPath.map(node => {
        if (node.data instanceof Argument)
            return node.data as Argument
        else if (node.data instanceof Expression)
            return node.data as Expression
        else throw new Error("Not implemented")
    });
}