import { Argument } from "../../Argument"
import { negative, product, sumOrNot } from "../../ConvenientExpressions"
import { Expression } from "../../expressions/Expression"
import { Integer } from "../../expressions/Integer"
import { Product } from "../../expressions/Product"
import { Sum } from "../../expressions/Sum"
import { Relationship } from "../../Relationship"
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib"
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule"

/**
 * Combine any integer terms in Sums.
 * a + 2 + 2 + 2= a + 4
 * 2 - 2 = 0
 *
 * Combines all of them at once no matter how many terms there are.
 *
 */
export class EvaluateSums extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return exp instanceof Sum
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const sum = exp as Sum
        const integerTerms = [...sum.terms].filter(
            t =>
                t instanceof Integer ||
                (t instanceof Product &&
                    t.isNegation &&
                    t.negation instanceof Integer)
        )
        if (integerTerms.length < 2) {
            return setOf()
        }
        const newInt = Integer.of(
            integerTerms
                .map<number>(e => {
                    if (e instanceof Integer) {
                        return e.value
                    }
                    return -((e as Product).negation as Integer).value
                })
                .reduce((a, b) => a + b)
        )
        const otherTerms = [...sum.terms].filter(
            t =>
                !(t instanceof Integer) &&
                !(
                    t instanceof Product &&
                    t.isNegation &&
                    t.negation instanceof Integer
                )
        )

        return setOf(
            new Argument(
                setOf(sum),
                {
                    n: sum,
                    r: Relationship.Equal,
                    n1: sumOrNot(...otherTerms, newInt)
                },
                "Evaluated Addition",
                RULE_ID
            )
        )
    }
}

export const RULE_ID = "Eval Addition"
