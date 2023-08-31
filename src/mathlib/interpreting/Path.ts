import { Graph } from "../Graph"
import { MathGraphNode } from "../MathGraphNode"

/**
 * Represents a path of graphs.
 * Immutable
 */
export class Path<T extends MathGraphNode> implements Iterable<MathGraphNode> {
    public constructor(graph: Graph, ...nodes: T[]) {
        this.nodes = nodes
        this.graph = graph
    }
    
    [Symbol.iterator](): Iterator<MathGraphNode, any, undefined> {
        throw new Error("Method not implemented.")
    }

    public readonly nodes: T[]
    public readonly graph: Graph
}