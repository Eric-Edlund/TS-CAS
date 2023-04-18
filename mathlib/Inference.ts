import { ExpressionEdge } from "./ExpressionEdge";
import { Expression } from "./expressions/Expression";
import { MathGraphNode } from "./Graph";
import { Relationship } from "./Relationship";

/**
 * Connects two expressions with an explanation.
 * In one direction. A directed edge.
 */
export class Inference implements ExpressionEdge {
    constructor (exp1: Expression, exp2: Expression, explanation: string) {
        this.explanation = explanation
        this.first = exp1
        this.second = exp2
        this.relationship = Relationship.Equal
    }
    public readonly explanation: string;
    public readonly first: MathGraphNode;
    public readonly second: MathGraphNode;
    public readonly relationship: Relationship;
    public toString(): string {
        return this.relationship
    }
    expressionEdge: true = true;
}