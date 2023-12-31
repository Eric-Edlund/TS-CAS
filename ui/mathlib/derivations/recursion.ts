import { Argument } from "../Argument"
import { product, sum } from "../ConvenientExpressions"
import { Derivative, DerivativeType } from "../expressions/Derivative"
import { Exponent, ExponentType } from "../expressions/Exponent"
import { Expression } from "../expressions/Expression"
import { Fraction, FractionType } from "../expressions/Fraction"
import { Integer } from "../expressions/Integer"
import { Integral, IntegralType } from "../expressions/Integral"
import { Logarithm, LogType } from "../expressions/Logarithm"
import { Product, ProductType } from "../expressions/Product"
import { Sum, SumType } from "../expressions/Sum"
import { Variable } from "../expressions/Variable"
import { Relationship } from "../Relationship"
import { setOf } from "../util/ThingsThatShouldBeInTheStdLib"

/**
 * Searches for equivalents of the given
 * expression with a search depth of 1.
 * It does this by reflecting the expression's
 * type, then disbatching to a type specific equivalents
 * function.
 *
 * The specific functions use the given directEquivalents
 * function to swap out the component values of their
 * expression with equivalents.
 *
 * Ex)
 *  Given the expression
 *         (a + a) + (b * b)
 *  we disbatch to the sum specific function (because
 *  the outer most operation is addition). This disbatch
 *  function uses the directEquivalents function to swap out
 *  each of the sum's terms individually, yielding results
 *  like:
 *      -> (2a) + (b * b) with inference a + a = 2a
 *      -> (a + a) + b^2
 *
 * @param exp The expression to search for equivalents.
 * @param directEquivalents Function that takes expressions and finds equivalents.
 *              This function only needs to look for top level equivalents- recursion
 *              is handled by the equiv function.
 * @returns Array of arguments connecting the given expression to equivalents.
 */
export function equiv(
    exp: Expression,
    directEquivalents: (e: Expression) => Set<Argument>
): Argument[] {
    if (exp instanceof Variable || exp instanceof Integer) return []
    else
        switch (exp.class) {
            case SumType:
                return sumEquiv(exp as Sum, directEquivalents)
            case ProductType:
                return productEquiv(exp as Product, directEquivalents)
            case ExponentType:
                return exponentEquiv(exp as Exponent, directEquivalents)
            case FractionType:
                return fractionEquiv(exp as Fraction, directEquivalents)
            case DerivativeType:
                return derivativeEquiv(exp as Derivative, directEquivalents)
            case LogType:
                return logarithmEquiv(exp as Logarithm, directEquivalents)
            case IntegralType:
                return integralEquiv(exp as Integral, directEquivalents)
            default:
                throw new Error("Not implemented for " + exp.class)
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
function sumEquiv(
    exp: Sum,
    directEquivalents: (e: Expression) => Set<Argument>
): Argument[] {
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
            equivalentSums.add(
                new Argument(
                    setOf(exp),
                    {
                        n: exp,
                        r: Relationship.Equal,
                        n1: swap(exp, i, a.claim.n1 as Expression)
                    },
                    a.argument,
                    a.ruleId
                )
            )
        })
    }

    function swap(s: Sum, i: number, e: Expression): Sum {
        const terms = [...s.terms]
        terms[i] = e
        return sum(...terms)
    }

    return [...equivalentSums]
}

function productEquiv(
    exp: Product,
    directEquivalents: (e: Expression) => Set<Argument>
): Argument[] {
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
            equivalentProducts.add(
                new Argument(
                    setOf(exp),
                    {
                        n: exp,
                        r: Relationship.Equal,
                        n1: swap(exp, i, alt.claim.n1 as Expression)
                    },
                    alt.argument,
                    alt.ruleId
                )
            )
        })
    }

    function swap(s: Product, i: number, e: Expression): Product {
        const terms = [...s.factors]
        terms[i] = e
        return product(...terms)
    }

    return [...equivalentProducts]
}

function exponentEquiv(
    exp: Exponent,
    directEquivalents: (e: Expression) => Set<Argument>
): Argument[] {
    const equivalents: Set<Argument> = new Set()

    // Add top level equivalents
    directEquivalents(exp).forEach(inf => {
        equivalents.add(inf)
    })

    equiv(exp.base, directEquivalents).forEach(alt => {
        equivalents.add(
            new Argument(
                setOf(exp),
                {
                    n: exp,
                    r: Relationship.Equal,
                    n1: Exponent.of(alt.claim.n1 as Expression, exp.power)
                },
                alt.argument,
                alt.ruleId
            )
        )
    })
    equiv(exp.power, directEquivalents).forEach(alt => {
        equivalents.add(
            new Argument(
                setOf(exp),
                {
                    n: exp,
                    r: Relationship.Equal,
                    n1: Exponent.of(exp.base, alt.claim.n1 as Expression)
                },
                alt.argument,
                alt.ruleId
            )
        )
    })

    return [...equivalents]
}

function fractionEquiv(
    exp: Fraction,
    directEquivalents: (e: Expression) => Set<Argument>
): Argument[] {
    const equivalents: Set<Argument> = new Set()

    // Add top level equivalents
    directEquivalents(exp).forEach(inf => {
        equivalents.add(inf)
    })

    equiv(exp.numerator, directEquivalents).forEach(alt => {
        equivalents.add(
            new Argument(
                setOf(exp),
                {
                    n: exp,
                    r: Relationship.Equal,
                    n1: Fraction.of(alt.claim.n1 as Expression, exp.denominator)
                },
                alt.argument,
                alt.ruleId
            )
        )
    })
    equiv(exp.denominator, directEquivalents).forEach(alt => {
        equivalents.add(
            new Argument(
                setOf(exp),
                {
                    n: exp,
                    r: Relationship.Equal,
                    n1: Fraction.of(exp.numerator, alt.claim.n1 as Expression)
                },
                alt.argument,
                alt.ruleId
            )
        )
    })

    return [...equivalents]
}

function derivativeEquiv(
    exp: Derivative,
    directEquivalents: (e: Expression) => Set<Argument>
): Argument[] {
    const equivalents: Set<Argument> = new Set()

    // Add top level equivalents
    directEquivalents(exp).forEach(inf => {
        equivalents.add(inf)
    })

    equiv(exp.exp, directEquivalents).forEach(alt => {
        equivalents.add(
            new Argument(
                setOf(exp),
                {
                    n: exp,
                    r: Relationship.Equal,
                    n1: Derivative.of(
                        alt.claim.n1 as Expression,
                        exp.relativeTo
                    )
                },
                alt.argument,
                alt.ruleId
            )
        )
    })
    equiv(exp.relativeTo, directEquivalents).forEach(alt => {
        equivalents.add(
            new Argument(
                setOf(exp),
                {
                    n: exp,
                    r: Relationship.Equal,
                    n1: Derivative.of(exp.exp, alt.claim.n1 as Expression)
                },
                alt.argument,
                alt.ruleId
            )
        )
    })

    return [...equivalents]
}

function logarithmEquiv(
    exp: Logarithm,
    directEquivalents: (e: Expression) => Set<Argument>
): Argument[] {
    const equivalents: Set<Argument> = new Set()

    // Add top level equivalents
    directEquivalents(exp).forEach(arg => {
        equivalents.add(arg)
    })

    equiv(exp.exp, directEquivalents).forEach(alt => {
        equivalents.add(
            new Argument(
                setOf(exp),
                {
                    n: exp,
                    r: Relationship.Equal,
                    n1: Logarithm.of(alt.claim.n1 as Expression, exp.base)
                },
                alt.argument,
                alt.ruleId
            )
        )
    })
    equiv(exp.base, directEquivalents).forEach(alt => {
        equivalents.add(
            new Argument(
                setOf(exp),
                {
                    n: exp,
                    r: Relationship.Equal,
                    n1: Logarithm.of(exp.exp, alt.claim.n1 as Expression)
                },
                alt.argument,
                alt.ruleId
            )
        )
    })

    return [...equivalents]
}

function integralEquiv(
    exp: Integral,
    directEquivalents: (e: Expression) => Set<Argument>
): Argument[] {
    const equivalents: Set<Argument> = new Set()

    // Add top level equivalents
    directEquivalents(exp).forEach(arg => {
        equivalents.add(arg)
    })

    equiv(exp.integrand, directEquivalents).forEach(alt => {
        equivalents.add(
            new Argument(
                setOf(exp),
                {
                    n: exp,
                    r: Relationship.Equal,
                    n1: Integral.of(alt.claim.n1 as Expression, exp.relativeTo)
                },
                alt.argument,
                alt.ruleId
            )
        )
    })
    equiv(exp.relativeTo, directEquivalents).forEach(alt => {
        equivalents.add(
            new Argument(
                setOf(exp),
                {
                    n: exp,
                    r: Relationship.Equal,
                    n1: Integral.of(exp.integrand, alt.claim.n1 as Expression)
                },
                alt.argument,
                alt.ruleId
            )
        )
    })

    return [...equivalents]
}
