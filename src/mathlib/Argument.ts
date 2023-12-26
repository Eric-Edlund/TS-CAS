import { Expression } from "./expressions/Expression"
import { Graph } from "./Graph"
import { MathGraphNode } from "./MathGraphNode"
import { Relationship } from "./Relationship"
import { assert } from "./util/assert"

/**
 * Connects one or more nodes (grounds) to one or more nodes (claims).
 * Contains an explanation/argument for the connection.
 */
export class Argument extends MathGraphNode {
    constructor(
        grounds: Set<Expression>,
        claim: { n: Expression; r: Relationship; n1: Expression },
        argument: string,
        ruleId: string
    ) {
        super()
        this.grounds = grounds
        Object.freeze(this.grounds)
        this.claim = claim
        this.argument = argument
        this.ruleId = ruleId
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
     * Two out math graph nodes that are related by this Arugment.
     */
    public readonly claim: { n: Expression; r: Relationship; n1: Expression }
    /**
     * The explanation that connects the argument's grounds to
     * it's claimed relationship between the two out nodes.
     *
     */
    public readonly argument: string
    /**
     * Nodes that have an edge pointing to this argument.
     */
    public readonly grounds: Set<Expression>

    /**
     * The id of the rule which generated this argument.
     */
    public readonly ruleId: string

    private repOk() {
        assert(this.grounds != null)
        for (const ground of this.grounds) {
            assert(ground != null && ground != undefined)
        }
        assert(this.claim.n != null && this.claim.n != undefined)
        assert(this.claim.n1 != null && this.claim.n1 != undefined)
        assert(this.claim.r != undefined && this.claim.r != null)
    }
}
