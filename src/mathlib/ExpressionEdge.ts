import { Relationship } from "./Relationship";

/**
 * An edge in a math graph between two expressions.
 */
export interface ExpressionEdge {
    get relationship(): Relationship;

    expressionEdge: true;
}