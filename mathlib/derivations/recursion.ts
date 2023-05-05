import { Argument } from "../Argument"
import { product, sum } from "../ConvenientExpressions"
import { Derivative, DerivativeType } from "../expressions/Derivative"
import { Exponent, ExponentType } from "../expressions/Exponent"
import { Expression } from "../expressions/Expression"
import { Fraction, FractionType } from "../expressions/Fraction"
import { Integer } from "../expressions/Integer"
import { Logarithm, LogType } from "../expressions/Logarithm"
import { Product, ProductType } from "../expressions/Product"
import { Sum, SumType } from "../expressions/Sum"
import { Variable } from "../expressions/Variable"
import { Relationship } from "../Relationship"
import { setOf } from "../util/ThingsThatShouldBeInTheStdLib"

/**
 * Gets all equivalents of the given expression
 * checking it's children's equivalents.
 * 
 * (a + a) + (b + b)
 * -> (2a) + (b + b) with inference a + a = 2a
 * @param exp 
 * @param directEquivalents Function that will produce equivalent expressions
 *        without recursion.
 * @returns Array of inferences to equivalent expressions.
 */
 export function equiv(exp: Expression, directEquivalents: (e: Expression) => Set<Argument>): Argument[] {
    if (exp instanceof Variable || exp instanceof Integer) return []
    else switch(exp.class) {
        case SumType: return sumEquiv(exp as Sum, directEquivalents)
        case ProductType: return productEquiv(exp as Product, directEquivalents)
        case ExponentType: return exponentEquiv(exp as Exponent, directEquivalents)
        case FractionType: return fractionEquiv(exp as Fraction, directEquivalents)
        case DerivativeType: return derivativeEquiv(exp as Derivative, directEquivalents)
        case LogType: return logarithmEquiv(exp as Logarithm, directEquivalents)
        default: throw new Error("Not implemented for " + exp.class)
    }
}

/**
 * Gets all equivalents of the given expression
 * by swapping out it's children individually.
 * 
 * (a + a) + (b + b)
 * -> (2a) + (b + b) with inference a + a = 2a
 * @param exp 
 * @returns Array of inferences to equivalent expressions.
 */
function sumEquiv(exp: Sum, directEquivalents: (e: Expression) => Set<Argument>): Argument[] {
    const equivalentSums: Set<Argument> = new Set()

    // Add top level equivalents
    directEquivalents(exp).forEach(inf => {
        equivalentSums.add(inf)
    })

    // Find equivalents for each term
    for (let i = 0; i < exp.terms.length; i++) {
        const term = exp.terms[i]

        // Substitute term for each equivalent
        equiv(term, directEquivalents).forEach(a => {
            equivalentSums.add(new Argument(setOf(exp), {
                n: exp, 
                r: Relationship.Equal, 
                n1: swap(exp, i, a.claim.n1 as Expression)}, a.argument))
        })

    }

    function swap(s: Sum, i: number, e: Expression): Sum {
        const terms = [...s.terms]
        terms[i] = e
        return sum(...terms)
    }

    return [...equivalentSums]
}

function productEquiv(exp: Product, directEquivalents: (e: Expression) => Set<Argument>): Argument[] {
    const equivalentProducts: Set<Argument> = new Set()

    // Add top level equivalents
    directEquivalents(exp).forEach(inf => {
        equivalentProducts.add(inf)
    })

    // Find equivalents for each term
    for (let i = 0; i < exp.factors.length; i++) {
        const factor = exp.factors[i]

        // Substitute term for each equivalent
        equiv(factor, directEquivalents).forEach(alt => {
            equivalentProducts.add(new Argument(setOf(exp), {
                n: exp,
                r: Relationship.Equal,
                n1: swap(exp, i, alt.claim.n1 as Expression),
            }, alt.argument))
        })
    }

    function swap(s: Product, i: number, e: Expression): Product {
        const terms = [...s.factors]
        terms[i] = e
        return product(...terms)
    }

    return [...equivalentProducts]
}

function exponentEquiv(exp: Exponent, directEquivalents: (e: Expression) => Set<Argument>): Argument[] {
    const equivalents: Set<Argument> = new Set()

    // Add top level equivalents
    directEquivalents(exp).forEach(inf => {
        equivalents.add(inf)
    })

    equiv(exp.base, directEquivalents).forEach(alt => {
        equivalents.add(new Argument(setOf(exp), {
            n: exp, 
            r: Relationship.Equal,
            n1: Exponent.of(alt.claim.n1 as Expression, exp.power)}, alt.argument))
    })
    equiv(exp.power, directEquivalents).forEach(alt => {
        equivalents.add(new Argument(setOf(exp), {
            n: exp,
            r: Relationship.Equal,
            n1: Exponent.of(exp.base, alt.claim.n1 as Expression),
        }, alt.argument))
    })

    return [...equivalents]
}

function fractionEquiv(exp: Fraction, directEquivalents: (e: Expression) => Set<Argument>): Argument[] {
    const equivalents: Set<Argument> = new Set()

    // Add top level equivalents
    directEquivalents(exp).forEach(inf => {
        equivalents.add(inf)
    })

    equiv(exp.numerator, directEquivalents).forEach(alt => {
        equivalents.add(new Argument(setOf(exp), {
            n: exp, 
            r: Relationship.Equal,
            n1: Fraction.of(alt.claim.n1 as Expression, exp.denominator)}, alt.argument))
    })
    equiv(exp.denominator, directEquivalents).forEach(alt => {
        equivalents.add(new Argument(setOf(exp), {
            n: exp,
            r: Relationship.Equal,
            n1: Fraction.of(exp.numerator, alt.claim.n1 as Expression),
        }, alt.argument))
    })

    return [...equivalents]
}

function derivativeEquiv(exp: Derivative, directEquivalents: (e: Expression) => Set<Argument>): Argument[] {
    const equivalents: Set<Argument> = new Set()

    // Add top level equivalents
    directEquivalents(exp).forEach(inf => {
        equivalents.add(inf)
    })

    equiv(exp.exp, directEquivalents).forEach(alt => {
        equivalents.add(new Argument(setOf(exp), {
            n: exp, 
            r: Relationship.Equal,
            n1: Derivative.of(alt.claim.n1 as Expression, exp.relativeTo)
        }, alt.argument))
    })
    equiv(exp.relativeTo, directEquivalents).forEach(alt => {
        equivalents.add(new Argument(setOf(exp), {
            n: exp,
            r: Relationship.Equal,
            n1: Derivative.of(exp.exp, alt.claim.n1 as Expression),
        }, alt.argument))
    })

    return [...equivalents]
}

function logarithmEquiv(exp: Logarithm, directEquivalents: (e: Expression) => Set<Argument>): Argument[] {
    const equivalents: Set<Argument> = new Set()

    // Add top level equivalents
    directEquivalents(exp).forEach(arg => {
        equivalents.add(arg)
    })

    equiv(exp.exp, directEquivalents).forEach(alt => {
        equivalents.add(new Argument(setOf(exp), {
            n: exp, 
            r: Relationship.Equal,
            n1: Logarithm.of(alt.claim.n1 as Expression, exp.base)
        }, alt.argument))
    })
    equiv(exp.base, directEquivalents).forEach(alt => {
        equivalents.add(new Argument(setOf(exp), {
            n: exp,
            r: Relationship.Equal,
            n1: Logarithm.of(exp.exp, alt.claim.n1 as Expression),
        }, alt.argument))
    })

    return [...equivalents]
}