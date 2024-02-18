import { Argument } from "../../Argument"
import {
    num,
    productAndNotTimesOne,
    productOrNot,
    sumOrNot
} from "../../ConvenientExpressions"
import { Expression } from "../../expressions/Expression"
import { Integer } from "../../expressions/Integer"
import { Product } from "../../expressions/Product"
import { Sum } from "../../expressions/Sum"
import { Relationship } from "../../Relationship"
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib"
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule"

/**
 * Takes sums of several added products and combines ones that only
 * have different coefficients.
 *
 * a + 2a = 3a
 * a - 2a = -1a
 */
export class SumCoefficientsOfAddedTerms extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return exp instanceof Sum
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const terms = (exp as Sum).terms

        // Split the terms into product and not products
        const productTerms: Product[] = []
        const nonProductTerms: Expression[] = []
        for (const term of terms) {
            if (term instanceof Product && term.factors[0] instanceof Integer) {
                productTerms.push(term)
            } else {
                nonProductTerms.push(term)
            }
        }

        // Sort the product terms into groups of common factors
        const groups: Map<
            Expression,
            { coefficient: number; moreThanOne: boolean }
        > = new Map()
        for (const term of productTerms) {
            const first = term.factors[0] as Integer
            const temp = [...term.factors]
            temp.splice(0, 1)
            const group = productOrNot(...temp)

            if (!groups.has(group))
                groups.set(group, {
                    coefficient: first.value,
                    moreThanOne: false
                })
            else {
                groups.get(group)!.coefficient += first.value
                groups.get(group)!.moreThanOne = true
            }
        }

        // For every group with more than one product, produce a new argument
        const out = new Set<Argument>()
        groups.forEach((obj, group) => {
            if (!obj.moreThanOne) return

            const productTermsNotCombined = productTerms.filter(t => {
                const temp = [...t.factors]
                temp.splice(0, 1)
                const termWithoutLeadingCoefficient = productOrNot(...temp)
                return group !== termWithoutLeadingCoefficient
            })

            out.add(
                new Argument(
                    setOf(exp),
                    {
                        n: exp,
                        r: Relationship.Equal,
                        n1: sumOrNot(
                            productAndNotTimesOne(num(obj.coefficient), group),
                            ...nonProductTerms,
                            ...productTermsNotCombined
                        )
                    },
                    "Combining like terms",
                    RULE_ID
                )
            )
        })

        return out
    }
}

export const RULE_ID = "SumCoefficients of added terms"
