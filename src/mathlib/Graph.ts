import { Argument } from "./Argument";
import { Expression } from "./expressions/Expression";
import { MathGraphNode } from "./MathGraphNode";
import { Relationship } from "./Relationship";
import { assert } from "./util/assert";

/**
 * Class representing a graph of expressions and statements
 * including everything we know about a problem.
 * Connects GraphNodes via Inferences for edges.
 * 
 * It's a digraph. TODO: It may also need to be a multigraph...
 */
export class Graph {

    public constructor() {
        this.nodes = new Set<MathGraphNode>()
        this.connections = new Map<MathGraphNode, Set<MathGraphNode>>()
        this.edges = new Map<MathGraphNode, Map<MathGraphNode, GraphEdge>>()
        this.repOk()
    }

    /**
     * Adds an expression to the problem.
     * @param node 
     * @returns the same graph for chaining.
     */
    public addNode(node: MathGraphNode): Graph {
        this.nodes.add(node)
        if (node instanceof Argument) {
            this.addArgument(node)
        }
        this.repOk()
        return this
    }

    /**
     * Add a relationship between two elements given by the user to the graph.
     * Should not be called to add derived truths bc this won't store an explanation.
     * Adds given nodes if they aren't already on the graph.
     * @param n 
     * @param n1 
     * @param r 
     * @returns self for chaining
     */
    public addRelationship(n: MathGraphNode, n1: MathGraphNode, r: Relationship): Graph {
        this.addNode(n)
        this.addNode(n1)

        // Defined both ways because the user is giving it
        this.internalAdd(n, n1, new GivenEdge(r))
        this.internalAdd(n1, n, new GivenEdge(r))

        this.repOk()
        return this
    }

    /**
     * Adds a node representing an acumulation of facts
     * that leads to a conclusion.
     * @param a 
     * @returns the same graph for chaining.
     */
    public addArgument(a: Argument): Graph {
        this.nodes.add(a)

        // Add the grounds
        for (const ground of a.grounds) {
            this.nodes.add(ground)
            this.internalAdd(ground, a, ArgumentEdge.To)
        }

        // Add the claim
        const claim = a.claim
        this.addNode(claim.n)
        this.addNode(claim.n1)
        this.internalAdd(a, claim.n, ArgumentEdge.From)
        this.internalAdd(a, claim.n1, ArgumentEdge.From)
        this.internalAdd(claim.n, claim.n1, a)
        this.internalAdd(claim.n1, claim.n, a)

        this.repOk()
        return this
    }

    /**
     * @returns the same graph for chaining.
     */
    public addArguments(...a: Argument[]): Graph {
        a.forEach(arg => this.addArgument(arg))
        return this
    }

    /**
     * Get the set of neighbors of a node.
     * @param node 
     * @param direction Nodes that are adjacent to this node, from this node, or either.
     * @returns Undefined if the node isn't in this graph. Otherwise, a set of connected nodes.
     *          If the node is in the graph but isn't connected to anything, returns empty set.
     */
    public getNeighbors(node: MathGraphNode, direction: "in" | "out" | "both"): MathGraphNode[] | undefined {
        if (!this.nodes.has(node)) return undefined;
        if (direction == "out") {
            return [...this.connections.get(node)!]
        }
        let adjacentTo = new Set<MathGraphNode>()
        for (const n of this.nodes) {
            if (this.connections.get(n)?.has(node)) adjacentTo.add(n)
        }
        if (direction == "in") return [...adjacentTo]

        for (const n of this.connections.get(node) ?? []) adjacentTo.add(n)

        return [...adjacentTo]
    }

    /**
     * Determines the number of edges this node has.
     * @param node The node being consdered.
     * @param direction Count only the edges going towards this node, away from 
     *          it, or both.
     * @returns >= 0, undefined if the given node isn't in the graph.
     */
    public getDegree(node: MathGraphNode, direction: "in" | "out" | "both"): number | undefined {
        if (!this.nodes.has(node)) return undefined
        if (direction == "out") {
            return this.connections.get(node)?.size ?? 0
        }
        let degIn = 0
        this.nodes.forEach(n => {
            if (this.connections.get(n) == undefined) return
            if (this.connections.get(n)!.has(node)) degIn++
        })
        
        if (direction == "in")
            return degIn

        return degIn + (this.connections.get(node)?.size ?? 0)
    }

    /**
     * @param n Node in the graph.
     * @param n1 In the graph.
     * @returns Undefined if either node isn't in the graph or they're not
     * connected.
     */
    public getEdge(n: MathGraphNode, n1: MathGraphNode): GraphEdge | undefined {
        return this.edges.get(n)?.get(n1);
    }

    public contains(node: MathGraphNode): boolean {
        return this.nodes.has(node)
    }

    /**
     * @returns A new set containing all the nodes in the graph
     */
    public getNodes(): Set<MathGraphNode> {
        return new Set<MathGraphNode>(this.nodes)
    }

    public getEdges(): Set<{n: MathGraphNode, n1: MathGraphNode, e: GraphEdge}> {
        const out = new Set<{n: MathGraphNode, n1: MathGraphNode, e: GraphEdge}>()
        this.edges.forEach((map, first) => {
            map.forEach((edge, second) => {
                out.add({n: first, n1: second, e: edge})
            })
        })
        return out
    }

    public numNodes(): number {
        return this.nodes.size
    }

    /**
     * Adds all graph nodes and edges to this one.
     * @param graph 
     * @returns the same graph for chaining.
     */
    public addGraph(graph: Graph): Graph {
        graph.nodes.forEach(node => {
            this.nodes.add(node)
        })
        graph.edges.forEach((map, node1) => {
            map.forEach((edge, node2) => {
                if (edge instanceof Argument) 
                    this.addArgument(edge)
                else if (edge == "supports") {
                    this.internalAdd(node1, node2, ArgumentEdge.To)
                } else if (edge == "claims") {
                    this.internalAdd(node1, node2, ArgumentEdge.From)
                }
                else throw new Error("Unknown Edge Type")
            })
        })
        this.repOk()
        return this
    }

    public toString(): string {
        let out = "Graph(V = {";
        for (const node of this.nodes) {
            out += node.toString() + ","
        }

        out = out.substring(0, out.length - 1) + "}, E = {"
        this.connections.forEach((set, src) => {
            set.forEach(dest => {
                out += src.toString() + " -> " + dest.toString() + ", "
            })
        })
        out += "} Edge Count: " + this.connections.size
        
        return out;
    }

    private internalAdd(n: MathGraphNode, n1: MathGraphNode, e: GraphEdge): void {
        if (this.connections.get(n) == null) {
            this.connections.set(n, new Set<MathGraphNode>())
        }
        this.connections.get(n)!.add(n1)
        if (this.edges.get(n) == undefined) {
            this.edges.set(n, new Map<Expression, GraphEdge>())
        }
        this.edges.get(n)!.set(n1, e);
        this.repOk()
    }

    private repOk() {
        this.nodes.forEach((value) => {
            assert(value != null && value != undefined)
        })

        // All connections/edges have nodes
        this.connections.forEach((value, key) => {
            assert(this.nodes.has(key))
            value.forEach(n => {
                assert(this.nodes.has(n))
            })
        })

        this.edges.forEach((map, first) => {
            map.forEach((edge, second) => {
                assert(this.nodes.has(first))
                assert(this.nodes.has(second))
                assert(this.connections.get(first)!.has(second))
            })
        })
    }
    
    private readonly nodes: Set<MathGraphNode>
    // Quickly access all connections of a node
    private readonly connections: Map<MathGraphNode, Set<MathGraphNode>>
    // Determine the type of connection between two nodes
    private readonly edges: Map<MathGraphNode, Map<MathGraphNode, GraphEdge>>
}

export enum ArgumentEdge {
    To = "supports",
    From = "claims"
}

/**
 * Edges in the graph can be inferences which hold additional information
 * about the relationship between nodes, or "toAcumulation" which means
 * the first node is a logical dependancy of an acumulation.
 * When an argument results in two expressions that are equal, the expressions
 * are connected by that Argument.
 */
export type GraphEdge = Argument | ArgumentEdge | GivenEdge

/**
 * Communicates a relationhip given by the user.
 */
export class GivenEdge {
    public constructor(r: Relationship) {
        this.r = r
    }
    public readonly r: Relationship
}
