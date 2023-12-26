import common from "mocha/lib/interfaces/common"
import { Argument } from "../../Argument"
import {
    f,
    negative,
    num,
    productOrNot,
    sum
} from "../../ConvenientExpressions"
import { Exponent } from "../../expressions/Exponent"
import { Expression } from "../../expressions/Expression"
import { Fraction } from "../../expressions/Fraction"
import { Product } from "../../expressions/Product"
import { Relationship } from "../../Relationship"
import { has, setOf } from "../../util/ThingsThatShouldBeInTheStdLib"
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule"

/**
 * In all cases, any combined exponent factors will
 * be put in the numerator. It's hard to know if they
 * will evaluate to be negative or not, so we'll put
 * them all in the numerator and deal with that later.
 * TODO: Maybe we could iterate over the graph after it's
 *      done to go back and fix this? Maybe it's worth the 2^n
 *      added complexity to create nodes for every possible placement
 *      then just pathfind the easiest?
 */
export class SubtractExponentsOnFractions extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return exp instanceof Fraction
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const frac = exp as Fraction
        const top =
            frac.numerator instanceof Product
                ? frac.numerator.factors
                : [frac.numerator]
        const bottom =
            frac.denominator instanceof Product
                ? frac.denominator.factors
                : [frac.denominator]

        // Treat every factor of top and bottom as an exponent
        function asExponent(f: Expression): Exponent {
            if (f instanceof Exponent) return f
            else return Exponent.of(f, num(1))
        }
        const topExponents = top.map<Exponent>(asExponent)
        const bottomExponents = bottom.map<Exponent>(asExponent)

        // Find what bases are common
        const commonBases = new Set<Expression>()
        topExponents.forEach(e => {
            if (
                has(
                    bottomExponents.map<Expression>(e => e.base),
                    e.base
                )
            )
                commonBases.add(e.base)
        })
        bottomExponents.forEach(e => {
            if (
                has(
                    topExponents.map<Expression>(e => e.base),
                    e.base
                )
            )
                commonBases.add(e.base)
        })

        if (commonBases.size == 0) return setOf()

        // Separate factors which won't be effected
        const uneffectedTopFactors = top.filter(f => {
            if (f instanceof Exponent) return !commonBases.has(f.base)
            return !commonBases.has(f)
        })
        const uneffectedBottomFactors = bottom.filter(f => {
            if (f instanceof Exponent) return !commonBases.has(f.base)
            return !commonBases.has(f)
        })

        // Find all the terms for each base
        // Remember that the final exponent will be in the numerator
        const exponentTerms = new Map<Expression, Expression[]>()
        topExponents.forEach(e => {
            if (!commonBases.has(e.base)) return
            if (!exponentTerms.has(e.base)) {
                exponentTerms.set(e.base, [])
            }
            exponentTerms.get(e.base)!.push(e.power)
        })
        bottomExponents.forEach(e => {
            if (!commonBases.has(e.base)) return
            if (!exponentTerms.has(e.base)) {
                exponentTerms.set(e.base, [])
            }
            // Negative bc we're putting these in the numerator
            exponentTerms.get(e.base)!.push(negative(e.power))
        })

        const resultingTopExponents: Exponent[] = []
        exponentTerms.forEach((powerTerms, base) => {
            resultingTopExponents.push(Exponent.of(base, sum(...powerTerms)))
        })

        if (uneffectedBottomFactors.length == 0)
            uneffectedBottomFactors.push(num(1))

        return setOf(
            new Argument(
                setOf(frac),
                {
                    n: frac,
                    r: Relationship.Equal,
                    n1: Fraction.of(
                        productOrNot(
                            ...resultingTopExponents,
                            ...uneffectedTopFactors
                        ),
                        productOrNot(...uneffectedBottomFactors)
                    )
                },
                "Sum exponents in both numerator and denominator",
                RULE_ID
            )
        )
    }
}

export const RULE_ID = "Sum exponents in num and den in fractions"
