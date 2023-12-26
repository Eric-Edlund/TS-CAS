import { Argument } from "../../Argument"
import { product } from "../../ConvenientExpressions"
import { Expression } from "../../expressions/Expression"
import { factorOrder, Product } from "../../expressions/Product"
import { Relationship } from "../../Relationship"
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib"
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule"

/**
 * Reorders factors to follow convention.
 */
export class OrderProducts extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return exp instanceof Product
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const p = exp as Product

        const result = product(...[...p.factors].sort(factorOrder))
        if (result === p) return setOf()

        return setOf(
            new Argument(
                setOf(exp),
                {
                    n: exp,
                    r: Relationship.Equal,
                    n1: result
                },
                "Reorder product factors to match math convention",
                RULE_ID
            )
        )
    }
}

export const RULE_ID = "Order products"
