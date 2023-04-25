import { GraphEdge, Graph, MathGraphNode } from "./Graph";
import { Relationship } from "./Relationship";
import { assert } from "./util/assert";

/**
 * Tool to do operations on graphs.
 */
export class GraphMinipulator {
    /**
     * Find nodes of components of a graph where only edges for which
     * the callback function returns true are considered.
     * @param 
     * @param isConnected 
     */
    public static getComponentNodes(input: Graph, isConnected: (e: GraphEdge) => boolean): Set<Set<MathGraphNode>> {
        const includedNodes = new Set<MathGraphNode>()
        const components = new Set<Set<MathGraphNode>>()

        for (const node of input.getNodes()) {
            if (includedNodes.has(node)) {
                continue
            }

            const component = new Set<MathGraphNode>()
            
            function getAllConnected(n: MathGraphNode): void {
                includedNodes.add(n)
                if (component.has(n)) {
                    return
                }

                component.add(n)

                for (const neighbor of input.getNeighbors(n, "both")!) {
                    if (!isConnected(input.getEdge(n, neighbor)!)) continue
                    getAllConnected(neighbor)
                }
                return
            }

            getAllConnected(node)
            component.add(node)
            components.add(component)
        }

        assert(includedNodes.size == input.numNodes())
        // Assert components are pairwise disjoint of problems show up

        return components
    }

    /**
     * Gets every edge in the graph.
     * @param input 
     * @returns 
     */
    public static getRelations(input: Graph): {first: MathGraphNode, second: MathGraphNode, e: GraphEdge}[] {
        const out: {first: MathGraphNode, second: MathGraphNode, e: GraphEdge}[] = []
        for (const node of input.getNodes()) {            
            for (const other of input.getNeighbors(node, "out")!) {
                out.push({first: node, second: other, e: input.getEdge(node, other)!})
            }
        }
        return out
    }

    /**
     * Parses the graph into sets of
     * nodes grouped by depth from a center node.
     * Assumes the graph is connected.
     * @param rootNodes Contains at least one node in the graph.
     * @param count Function that determines if any given node should be
     * included in the depth count. Defaults to counting all nodes. Nodes that 
     * aren't included won't be in the returned value.
     * @returns Map from depth in graph to a set of nodes at that depth.
     * 
     */
    public static getLevels(input: Graph, rootNodes: Iterable<MathGraphNode>, count: (n: MathGraphNode) => boolean = () => true): Map<number, Set<MathGraphNode>> {
        const roots = new Set(rootNodes)
        const depths = new Map<MathGraphNode, number>();

        /**
         * Recursively maps out all nodes in the graph,
         * puttin them in the depths map.
         * @param node 
         */
        function mapNode(node: MathGraphNode, depth: number = 0): void {
            if (roots.has(node)) {
                depth = 0
            }
            if (depth < (depths.get(node) ?? Number.MAX_VALUE)) {
                depths.set(node, depth)
            }
            const neighbors = [...input.getNeighbors(node, "both")!];
            neighbors.filter(value => {
                // If we have found a shorter path to it or there was no found path to it
                return (depths.get(value) == undefined || depths.get(value)! > depth) && value !== node
            }).forEach(n => {
                mapNode(n, count(node) ? depth + 1 : depth)
            })
        }

        mapNode([...roots][0]);

        const out = new Map<number, Set<MathGraphNode>>()
        depths.forEach((depth, node) => {
            if (!count(node)) return
            if (out.get(depth) == undefined) {
                out.set(depth, new Set())
            }
            out.get(depth)!.add(node)
        })

        
        return out;
    }

    /**
     * Determines if the given graph is connected, meaning that
     * it's possible to traverse between any two nodes on the graph.
     */
    public static isConnected(input: Graph): boolean {
        // Check every node has a degree of 1 or more or graph only has 1 or 0 elements
        return [...input.getNodes()].map<boolean>(node => {
            return input.getDegree(node, "both")! > 0
        }).reduce((a, b) => a && b) || input.numNodes() < 2
    }

    /**
     * Filters edges list returning a list where only one edge
     * from any edge loops is included.
     * For example if the input edges are a -> b and b -> a,
     * the result will only contain a -> b.
     * @param edges 
     */
    public static dropSymmetric(edges: Iterable<{n: MathGraphNode, n1: MathGraphNode, e: GraphEdge}>): {n: MathGraphNode, n1: MathGraphNode, e: GraphEdge}[] {
        const out: {n: MathGraphNode, n1: MathGraphNode, e: GraphEdge}[] = []

        function alreadyHas(edge: {n: MathGraphNode, n1: MathGraphNode, e: GraphEdge}): boolean {
            for (const e of out) 
                if (edge.n == e.n1 && edge.n1 == e.n) 
                    return true
            return false
        }

        for (const edge of edges) {
            if (!alreadyHas(edge)) out.push(edge)
        }
        
        return out;
    }
}