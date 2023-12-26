import { Argument } from "../Argument"
import { Expression } from "../expressions/Expression"
import { Graph } from "../Graph"
import { MathGraphNode } from "../MathGraphNode"
import { Path } from "./Path"

/**
 * Takes a graph and collapses any arguments that are obvious.
 */
export class Interpreter {
    public constructor(config: InterpreterSettings) {
        this.config = config
    }

    public processPath(path: Path<Expression>): SkipSet {
        this.graph = path.graph
        const result = new SkipSet()

        const shouldSkip = (arg: Argument) => {
            return this.config.skips.has(arg.ruleId)
        }
        const graph = this.graph

        function recursiveAdd(node: Expression): void {
            const next = findNext(node)
            if (next != null) {
                const argument = graph.getEdge(
                    node,
                    path.nodes[path.nodes.indexOf(node) + 1]
                ) as Argument
                result.addSkip(node, { e: next, a: argument })
                recursiveAdd(next)
            }
        }

        // Gets the next expression to show or null if there
        // isn't one. Never returns the given expression
        function findNext(node: Expression): Expression | null {
            let index = path.nodes.indexOf(node)
            const next = path.nodes[index + 1]
            if (next == undefined) return null

            if (shouldSkip(graph.getEdge(node, next) as Argument)) {
                return findNext(next) ?? next
            } else return next
        }

        recursiveAdd(path.nodes[0])

        this.graph = null
        return result
    }

    private hasOneOutEdge(node: MathGraphNode): boolean {
        return this.graph?.getDegree(node, "out") == 1
    }

    // Null after every process call.
    private graph: Graph | null = null
    private readonly config: InterpreterSettings
}

export interface InterpreterSettings {
    /**
     * Set of rule ids. Arguments generated by these rules
     * will be bridged over in the graph.
     */
    skips: Set<string>
}

interface Skip {
    readonly a: Argument
    readonly e: Expression
}

/**
 * Currently only supports expressions.
 * TODO: Figure out arguments.
 */
export class SkipSet {
    /**
     * Finds the next expression that should be displayed.
     * The input and result expression should be displayed as
     * connected by the input's out argument, which is provided
     * in the result.
     *
     * There will be
     * exactly one simple path connecting the output and
     * result.
     * @param input
     * @return Null if the input has no skip mapped to it.
     */
    public next(input: Expression): Skip | null {
        if (this.skips.has(input)) return this.skips.get(input)!
        return null
    }

    /**
     * Adds the start end pair to the skip set. If already included,
     * does nothing. If the given start already has an end assigned
     * and the assigned /= the given end, throws. If start == end,
     * does nothing.
     * @param start
     * @param end
     */
    public addSkip(start: Expression, end: Skip): void {
        if (start == end.e) return
        if (this.skips.has(start) && this.skips.get(start)! != end)
            throw new Error("Adding another end to SkipSet")
        this.skips.set(start, end)
    }

    private skips = new Map<Expression, { e: Expression; a: Argument }>()
}
