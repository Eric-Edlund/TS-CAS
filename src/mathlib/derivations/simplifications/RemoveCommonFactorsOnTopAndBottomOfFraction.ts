import { Argument } from "../../Argument"
import { num } from "../../ConvenientExpressions"
import { Expression } from "../../expressions/Expression"
import { Fraction } from "../../expressions/Fraction"
import { Product } from "../../expressions/Product"
import { Relationship } from "../../Relationship"
import { has, setOf } from "../../util/ThingsThatShouldBeInTheStdLib"
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule"

export class RemoveCommonFactorsFromTopAndBottomOfFraction extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return (
            exp instanceof Fraction &&
            !(exp.numerator instanceof Product && exp.numerator.isNegation) &&
            !(exp.denominator instanceof Product && exp.denominator.isNegation)
        )
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const frac = exp as Fraction
        const top = frac.numerator
        const bottom = frac.denominator

        const allFactors = new Set<Expression>()
        if (top instanceof Product) {
            top.factors.forEach(f => allFactors.add(f))
        } else allFactors.add(top)
        if (bottom instanceof Product) {
            bottom.factors.forEach(f => allFactors.add(f))
        } else allFactors.add(bottom)

        // Find factors that are in both top and bottom
        const inBoth = new Set<Expression>()
        allFactors.forEach(f => {
            if (
                (top instanceof Product ? has(top.factors, f) : top === f) &&
                (bottom instanceof Product
                    ? has(bottom.factors, f)
                    : bottom === f)
            )
                inBoth.add(f)
        })

        if (inBoth.size == 0) return setOf()

        // Return new fraction without those
        let newTop: Expression = top
        inBoth.forEach(f => {
            if (newTop instanceof Product) {
                newTop = newTop.without(f)
            } else {
                newTop = num(1)
            }
        })

        let newBottom: Expression = bottom
        inBoth.forEach(f => {
            if (newBottom instanceof Product) {
                newBottom = newBottom.without(f)
            } else {
                newBottom = num(1)
            }
        })

        return setOf(
            new Argument(
                setOf(frac),
                {
                    n: frac,
                    r: Relationship.Equal,
                    n1: Fraction.of(newTop, newBottom)
                },
                "Divide top and bottom by same thing",
                RULE_ID
            )
        )
    }
}

export const RULE_ID = "Div top and bottom by same thing"
