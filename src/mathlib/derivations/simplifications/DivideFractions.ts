import { Argument } from "../../Argument";
import { removeNew, num as numOf, negative, sumOrNot, productOrNot } from "../../ConvenientExpressions";
import { Exponent } from "../../expressions/Exponent";
import { Expression } from "../../expressions/Expression";
import { Fraction } from "../../expressions/Fraction";
import { Product } from "../../expressions/Product";
import { Relationship } from "../../Relationship";
import { has, setOf } from "../../util/ThingsThatShouldBeInTheStdLib";
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule";

export class DivideFractions extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return exp instanceof Fraction
            && exp.numerator instanceof Product
            && exp.denominator instanceof Product
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const frac = exp as Fraction
        const num = frac.numerator as Product
        const den = frac.denominator as Product

        // Take the factors of the negation of any negations
        const numFactors = num.isNegation ? 
            num.negation instanceof Product ?
                num.negation.factors // Get factors if the negation is a product
                : [num.negation]  // If negation isn't a product, return the negation as a list of 1
                : num.factors   // If not a negation, return the factors
        const denFactors = !den.isNegation ? den.factors
                : den.negation instanceof Product ?
                    den.negation.factors
                    : [den.negation]


        // If there are any repeats, give up
        if (new Set(numFactors).size < numFactors.length) return setOf()
        if (new Set(denFactors).size < denFactors.length) return setOf()

        // Treat every factor as an exponent
        const numExponents = numFactors.map<Exponent>(f => {
            if (f instanceof Exponent) return f
            else return Exponent.of(f, numOf(1))
        })
        const denExponents = denFactors.map<Exponent>(f => {
            if (f instanceof Exponent) return f
            else return Exponent.of(f, numOf(1))
        })

        // For each den exponent base, create an overall sum of the powers
        const numExponentPowers = new Map<Expression, Expression[]>()
        numExponents.forEach(exponent => {
            if (!numExponentPowers.has(exponent.base))
                numExponentPowers.set(exponent.base, [])
            numExponentPowers.get(exponent.base)!.push(exponent.power)
        })
        const denExponentPowers = new Map<Expression, Expression[]>()
        denExponents.forEach(exponent => {
            if (!denExponentPowers.has(exponent.base))
                denExponentPowers.set(exponent.base, [])
            denExponentPowers.get(exponent.base)!.push(exponent.power)
        })

        // Any base which is in the numerator and denominator
        // will only be in the numerator
        const newNumExponentPowers = new Map<Expression, Expression[]>(numExponentPowers)
        const newDenExponentPowers = new Map<Expression, Expression[]>(denExponentPowers)
        denExponentPowers.forEach((powers, base) => {
            if (numExponentPowers.has(base)) {
                newNumExponentPowers.get(base)!.push(negative(sumOrNot(...powers)))
                newDenExponentPowers.delete(base)
            }
        })

        // Get the new factors for the numerator and denominator
        const newNumExponents: Exponent[] = []
        newNumExponentPowers.forEach((powers, base) => {
            newNumExponents.push(Exponent.of(base, sumOrNot(...powers)))
        })
        const newDenExponents: Exponent[] = []
        newDenExponentPowers.forEach((powers, base) => {
            newDenExponents.push(Exponent.of(base, sumOrNot(...powers)))
        })

        const top = productOrNot(...newNumExponents)
        const bottom = newDenExponents.length != 0 ? productOrNot(...newDenExponents) : numOf(1)

        // Preserve the negations removed earlier
        const result = Fraction.of(
            num.isNegation ? negative(top) : top,
            den.isNegation ? negative(bottom) : bottom
        )

        return setOf(new Argument(setOf(exp), {
            n: exp,
            r: Relationship.Equal,
            n1: result
        }, "Cancel out fractions"))
    }

}