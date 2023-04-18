import { ExpressionEdge } from "./ExpressionEdge";
import { Expression } from "./expressions/Expression";
import { Graph, MathGraphNode } from "./Graph";
import { Relationship } from "./Relationship";
import { assert } from "./util/assert";

/**
 * Has several dependancies and draws exatly 1.
 * Communicates several Nodes are all required to prove what
 * comes after this one.
 */
 export class Argument implements ExpressionEdge {
    constructor(grounds: Set<Expression>, claim: {n: MathGraphNode, r: Relationship, n1: MathGraphNode}, argument: string) {
        this._grounds = grounds
        this.claim = claim
        this.argument = argument
        this.repOk()
    }
     expressionEdge: true = true
     get relationship(): Relationship {
         return this.claim.r
     }

    public toString(): string {
        return "Argument " + this.claim.r
    }
    /**
     * The nodes this argument draws from.
     * 2 or more.
     */
    public get grounds(): Iterable<MathGraphNode> {
        return this._grounds;
    }

    /**
     * Two out math graph nodes that are related by this Arugment.
     */
    public readonly claim: {n: MathGraphNode, r: Relationship, n1: MathGraphNode};
    /**
     * The explanation that connects the argument's grounds to 
     * it's claimed relationship between the two out nodes.
     * 
     */
    public readonly argument: string;
    private readonly _grounds;

    private repOk() {
        assert(this._grounds != null)
        for(const ground of this.grounds) {
            assert(ground != null && ground != undefined)
        }
        assert(this.claim.n != null && this.claim.n != undefined)
        assert(this.claim.n1 != null && this.claim.n1 != undefined)
        assert(this.claim.r != undefined && this.claim.r != null)
    }
}