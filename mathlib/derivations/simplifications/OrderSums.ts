import { Argument } from "../../Argument"
import { orderedSum } from "../../ConvenientExpressions"
import { Expression } from "../../expressions/Expression"
import { Sum, SumType } from "../../expressions/Sum"
import { Relationship } from "../../Relationship"
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib"
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule"

/**
 * Turns sums that are unhealthy because their term order
 * is wrong into correctly ordered sums.
 */
 export class OrderSums extends NoContextExpressionSimplificationRule {

    protected appliesImpl(exp: Expression): boolean {
        return !exp.isHealthy && exp.class === SumType
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        return new Set<Argument>([new Argument(setOf(exp), {
            n: exp,
            r: Relationship.Equal,
            n1: orderedSum(exp as Sum),
        }, "Reordered")])
    }
}