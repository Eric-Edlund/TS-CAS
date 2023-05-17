import { MathGraphNode } from "../MathGraphNode"

/**
 * Represents a path of graphs.
 * Immutable
 */
export class Path {
    public constructor(...nodes: MathGraphNode[]) {
        this.nodes = nodes
    }

    public readonly nodes: MathGraphNode[]
}

export class MutiblePath {
    public constructor(...nodes: MathGraphNode[]) {
        this.nodes = nodes
    }

    public getImmutible(): Path {
        return new Path(...this.nodes)
    }

    public readonly nodes: MathGraphNode[]
}