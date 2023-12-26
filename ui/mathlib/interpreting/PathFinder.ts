import { Graph } from "../Graph"
import { MathGraphNode } from "../MathGraphNode"
import { Path } from "./Path"

/**
 * Extracts relevant information from a graph.
 * Because there is no functional interhitance,
 * we're using a class.
 */
export interface PathFinder {
    findPaths(graph: Graph): Path<MathGraphNode>[]
}
