import { Argument } from "./Argument";
import { ExpressionEdge } from "./ExpressionEdge";
import { Expression } from "./expressions/Expression";
import { Inference } from "./Inference";
import { assert } from "./util/assert";

/**
 * Class representing a graph of expressions and statements
 * including everything we know about a problem.
 * Connects GraphNodes via Inferences for edges.
 * 
 * It's a digraph.
 */
export class Graph {

    /**
     * Adds an expression to the problem.
     * @param node 
     */
    public addNode(node: MathGraphNode): void {
        this.nodes.add(node)
        if (node instanceof Argument) {
            const a = node as Argument;
            for(const ground of a.grounds) {
                this
            }
        }
        this.repOk()
    }

    /**
     * Adds an inference to the graph.
     * Adds both endpoints of the inference to the graph.
     * @param i 
     */
    public addInference(i: Inference): void {
        this.addEdge(i.first, i.second, i)
        this.addConnection(i.first, i.second)
        this.nodes.add(i.first)
        this.nodes.add(i.second)
        this.repOk()
    }

    public addInferences(list: Iterable<Inference>): void {
        for (const i of list)
            this.addInference(i)
    }

    /**
     * Adds a node representing an acumulation of facts
     * that leads to a conclusion.
     * @param a 
     */
    public addArgument(a: Argument) {
        this.nodes.add(a)

        // Add the grounds
        for (const ground of a.grounds) {
            this.nodes.add(ground)
            this.addConnection(ground, a)
            this.addEdge(ground, a, ArgumentEdge.To)
        }

        // Add the claim
        const claim = a.claim
        this.addNode(claim.n)
        this.addNode(claim.n1)

        this.addConnection(a, claim.n)
        this.addEdge(a, claim.n, ArgumentEdge.From)
        this.addConnection(a, claim.n1)
        this.addEdge(a, claim.n1, ArgumentEdge.From)

        this.addConnection(claim.n, claim.n1)
        this.addConnection(claim.n1, claim.n)
        this.addEdge(claim.n, claim.n1, a)
        this.addEdge(claim.n1, claim.n, a)

        this.repOk()
    }

    /**
     * Get the neighbors of a node.
     * @param node 
     * @param direction Nodes that are adjacent to this node, from this node, or either.
     * @returns Undefined if the node isn't in this graph. Otherwise, a set of connected nodes.
     *          If the node is in the graph but isn't connected to anything, returns empty set.
     */
    public getNeighbors(node: MathGraphNode, direction: "in" | "out" | "both"): Set<MathGraphNode> | undefined {
        if (!this.nodes.has(node)) return undefined;
        if (direction == "out") {
            return new Set<MathGraphNode>(this.connections.get(node))
        }
        let adjacentTo = new Set<MathGraphNode>()
        for (const n of this.nodes) {
            if (this.connections.get(n)?.has(node)) adjacentTo.add(n)
        }
        if (direction == "in") return adjacentTo

        for (const n of this.connections.get(node) ?? []) adjacentTo.add(n)

        return adjacentTo
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
        
        if (direction == "in") {
            return degIn
        }

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
     * @returns An iterable of all the nodes in the graph.
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
     */
    public addGraph(graph: Graph): void {
        graph.nodes.forEach(node => {
            this.nodes.add(node)
        })
        graph.edges.forEach((map, node1) => {
            map.forEach((edge, node2) => {
                if (edge instanceof Inference)
                    this.addInference(edge)
                else if (edge instanceof Argument) 
                    this.addArgument(edge)
                else if (edge == "supports") {
                    this.addEdge(node1, node2, ArgumentEdge.To)
                    this.addConnection(node1, node2)
                } else if (edge == "claims") {
                    this.addEdge(node1, node2, ArgumentEdge.From)
                    this.addConnection(node1, node2)
                }
                else throw new Error("Unknown Edge Type")
            })
        })
        this.repOk()
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

    private addConnection(n: MathGraphNode, n1: MathGraphNode): void {
        if (this.connections.get(n) == null) {
            this.connections.set(n, new Set<MathGraphNode>())
        }
        this.connections.get(n)!.add(n1)
    }

    private addEdge(n: MathGraphNode, n1: MathGraphNode, e: GraphEdge) {
        if (this.edges.get(n) == undefined) {
            this.edges.set(n, new Map<Expression, Inference>())
        }
        this.edges.get(n)!.set(n1, e);
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

    
    private nodes = new Set<MathGraphNode>()
    // Quickly access all connections of a node
    private connections = new Map<MathGraphNode, Set<MathGraphNode>>()
    // Determine the type of connection between two nodes
    private edges = new Map<MathGraphNode, Map<MathGraphNode, GraphEdge>>()
}

/**
 * Nodes in the graph can be expressions or Acumulations.
 */
export type MathGraphNode = Expression | Argument;
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
export type GraphEdge = ExpressionEdge | ArgumentEdge
