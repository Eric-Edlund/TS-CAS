import { Deriver } from "./mathlib/derivations/Deriver"
import { Graph, GraphEdge } from "./mathlib/Graph"
import { EditableMathView } from "./mathlib/uielements/EditableMathView"
import path from "ngraph.path"
import createGraph from "ngraph.graph"
import { Expression } from "./mathlib/expressions/Expression"
import { MathGraphNode } from "./mathlib/MathGraphNode"
import { Argument } from "./mathlib/Argument"
import { ArgumentNodeView } from "./mathlib/uielements/ArgumentNodeView"
import { ExpressionNodeView } from "./mathlib/uielements/ExpressionNodeView"
import { GraphMinipulator } from "./mathlib/GraphMinipulator"
import { parseExpression } from "./mathlib/userinput/AntlrMathParser"
import { Interpreter } from "./mathlib/interpreting/Interpreter"
import { setOf } from "./mathlib/util/ThingsThatShouldBeInTheStdLib"
import { RULE_ID as Evaluate_Sums_Rule } from "./mathlib/derivations/simplifications/EvaluateSums"
import { Path } from "./mathlib/interpreting/Path"


let controller = new AbortController();
let solverThread: Promise<Path<Expression>> | null

export function loadSolverPage(): void {
    const inputView = document.getElementById('problem')! as HTMLTextAreaElement
    const problemViewDiv = document.getElementById('expressionViewDiv') as HTMLDivElement
    const solutionView = document.getElementById('solution')! as EditableMathView
    const stepListView = document.getElementById('steps')!

    // Populate ui
    const problemView = new EditableMathView()
    problemViewDiv.appendChild(problemView)

    inputView.focus()

    inputView.addEventListener("keyup", () => {
        // Parse input
        let exp: Expression
        try {
            exp = parseExpression(inputView.value)
            problemView.value = exp
        } catch (e) {
            stepListView.style.opacity = "0.6"
            problemView.value = null
            return
        }
        // We were able to parse the input
        stepListView.style.opacity = "1"

        // Clear the previous result
        while (stepListView.children.length > 0) {
            stepListView.removeChild(stepListView.children[0])
        }

        console.log("New Task")
        controller.abort()
        controller = new AbortController()
        solverThread = getSolution(exp, controller.signal)
        
        solverThread.then(steps => {
            if (steps.nodes.length == 0) {
                stepListView.textContent = "Cannot Simplify"
                return
            }

            // Interpret the solution
            const interpreter = new Interpreter({
                skips: setOf(
                    Evaluate_Sums_Rule
                )
            })
            const skipSet = interpreter.processPath(steps)

            // Display new result
            solutionView.value = steps.nodes[steps.nodes.length - 1] as Expression

            function recursiveAdd(node: Expression): void {

                stepListView.appendChild(new ExpressionNodeView(node, view => {}))

                const next = skipSet.next(node)
        
                if (next == null) return
                
                const arg = next.a
                stepListView.appendChild(new ArgumentNodeView(arg, view => {}))
                recursiveAdd(next.e)
            }    

            recursiveAdd(steps.nodes[0])
        })
    })
}

/**
 * Simplifies the given expression returning an array
 * of steps ending in the answer.
 * The last node will be an expression.
 * Result path will have no nodes if there is no solution.
 */
async function getSolution(problem: Expression, abort: AbortSignal): Promise<Path<Expression>> {
    const graph = new Graph().addNode(problem)

    const deriver = new Deriver(graph)
    console.log("Pre Expand")
    deriver.expand(50, true, abort)
    console.log("Post expand")

    let simplified: Expression = problem
    for (const node of graph.getNodes()) {
        if (node instanceof Expression)
            if (deriver.isSimplified(node))
                if (simplified.childCount > node.childCount)
                    simplified = node as Expression
    }

    // Copy the resulting graph into a library implementation of graph
    const libraryGraph = createGraph<MathGraphNode, GraphEdge>()
    graph.getNodes().forEach(n => {
        libraryGraph.addNode(n.id, n)
    })

    // I assume that library graph isn't directed
    for (const edge of GraphMinipulator.dropSymmetric(graph.getEdges())) {
        if (edge.e instanceof Argument) {
            libraryGraph.addLink(edge.n.id, edge.e.id)
            libraryGraph.addLink(edge.e.id, edge.n1.id)
        }
            
        // if (edge.n instanceof Expression && edge.n1 instanceof Expression)
        //     console.log(`edge ${edge.n} AND ${edge.n1}`)
    }

    // Do path finding operation on it
    const pathFinder = path.nba<MathGraphNode, GraphEdge>(libraryGraph)
    const resultPath = pathFinder.find(problem.id, simplified!.id).reverse()

    const typedResultPath = resultPath.map(node => {
        if (node.data instanceof Argument)
            return node.data as Argument
        else if (node.data instanceof Expression)
            return node.data as Expression
        else throw new Error("Not implemented")
    }).filter(node => node instanceof Expression) as Expression[]

    return new Path(graph, ...typedResultPath)    
}