import { Argument } from "../../Argument"
import { Expression } from "../../expressions/Expression"
import { Product } from "../../expressions/Product"
import {
    product as productOf,
    productOrNot,
    sum
} from "../../ConvenientExpressions"
import { Sum } from "../../expressions/Sum"
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib"
import {
    ConvergenceTarget,
    NoContextExpressionSimplificationRule
} from "../NoContextExpressionSimplificationRule"
import { Relationship } from "../../Relationship"

/**
 * (a + b)(c + d) = ac + ad + bc + bd
 */
export class FOIL extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return exp instanceof Product
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const product = exp as Product

        const sums = product.factors.filter(f => f instanceof Sum)
        if (sums.length < 2) return setOf()

        const nonSums = product.factors.filter(f => !(f instanceof Sum))

        const first = sums[0] as Sum
        const second = sums[1] as Sum

        const foiled = first.terms
            .map(t => {
                const terms: Expression[] = []
                for (const t1 of second.terms) {
                    terms.push(productOf(t, t1))
                }
                return terms
            })
            .flat()

        sums.splice(0, 2)
        const result = productOrNot(...nonSums, sum(...foiled), ...sums)

        return setOf(
            new Argument(
                setOf(exp),
                {
                    n: exp,
                    r: Relationship.Equal,
                    n1: result
                },
                "Foil it",
                RULE_ID
            )
        )
    }

    public get convergenceType(): ConvergenceTarget {
        return ConvergenceTarget.Polynomial
    }
}

export const RULE_ID = "FOIL"
