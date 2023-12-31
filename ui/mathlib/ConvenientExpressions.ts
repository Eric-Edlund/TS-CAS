import { Expression } from "./expressions/Expression"
import { Integer } from "./expressions/Integer"
import { Fraction } from "./expressions/Fraction"
import { Integral } from "./expressions/Integral"
import { factorOrder, Product } from "./expressions/Product"
import { orderTerms, Sum, SumType } from "./expressions/Sum"
import { Variable } from "./expressions/Variable"
import { Argument } from "./Argument"
import { Relationship } from "./Relationship"
import { assert } from "./util/assert"
import { Exponent } from "./expressions/Exponent"

export function fraction(num: Expression, den: Expression): Fraction {
    return Fraction.of(num, den)
}

/**
 * A convenience method for Sum.of()
 */
export function sum(...terms: Expression[]): Sum {
    return Sum.of(terms)
}

/**
 * Gets the correctly ordered sum of the given sum.
 * 1 + a = a + 1
 * Follows the spec given in the Sum.ts file.
 * @param sum
 * @returns
 */
export function orderedSum(sum: Sum): Sum {
    const ordered = orderTerms(...sum.terms)
    return Sum.of(ordered)
}

/**
 * Returns the sum of the given terms, evaluating any integer terms.
 * Puts final constant integer as the last term.
 * If the result is a sum, it will not have the integer 0 as a term.
 * If all given terms sum to zero, the integer zero will be returned.
 * @param terms
 */
export function sumEvalIntegerTerms(...terms: Expression[]): Expression {
    const integers = terms.filter(e => e instanceof Integer).length
    if (integers < 2) return sum(...terms)

    const nonIntTerms = terms.filter(e => !(e instanceof Integer))
    const intTerm = terms
        .filter(e => e instanceof Integer)
        .map<Integer>(e => e as Integer)
        .reduce((a, b) => num(a.value + b.value))

    if (intTerm.value == 0) {
        if (nonIntTerms.length > 1) {
            return sum(...nonIntTerms)
        } else if (nonIntTerms.length == 1) {
            return nonIntTerms[0]
        } else {
            return intTerm
        }
    } else {
        if (nonIntTerms.length == 0) {
            return intTerm
        } else {
            return sum(...nonIntTerms, intTerm)
        }
    }
}

/**
 * Returns the sum of the given terms. Evaluates any
 * integer terms. Additionally cancels out any positive
 * negative terms.
 *
 * Simplifies
 *  x + a - a = x
 * x + ab - ab = x
 * x + 2ab - 2ab = x
 * a - a = 0
 *
 * Doesn't affect
 *  x + 2a - a
 * @param terms
 */
export function sumIntuitive(...terms: Expression[]): Expression {
    const intEval = sumEvalIntegerTerms(...terms)
    if (intEval.class != SumType) return intEval
    terms = [...(intEval as Sum).terms]

    // Find opposite pairs
    // They will take the form
    //      exp + -1 * exp
    // I assume here that the only way to notate
    // negativity is by multiplying by -1
    terms: for (const t of terms) {
        const otherTerms = [...terms]
        remove(otherTerms, t)

        for (const other of otherTerms) {
            if (other instanceof Product) {
                if (other.isNegation && other.negation === t) {
                    remove(terms, other)
                    remove(terms, t)
                    continue terms
                }
            }
        }
    }

    if (terms.length == 0) return Integer.of(0)
    else if (terms.length == 1) return terms[0]
    else return sum(...terms)
}

/**
 * Finds the sum of the given terms or if only 1
 * is given returns that term.
 * @param terms
 * @returns
 */
export function sumOrNot(...terms: Expression[]): Expression {
    if (terms.length == 1) return terms[0]
    else return sum(...terms)
}

/**
 * Produces a product from the given factors
 * where the factors are ordered according to convention.
 * @param factors At least 2
 */
export function orderedProduct(...factors: Expression[]): Product {
    factors.sort(factorOrder)
    return product(...factors)
}

/**
 * Convenience wrapper function for Exponent.of
 * @param base
 * @param power
 * @returns
 */
export function pow(base: Expression, power: Expression): Exponent {
    return Exponent.of(base, power)
}

/**
 * Removes the first instance of the given
 * element from the array. Really should be
 * part of the std library. Identifies object
 * with referencial equality.
 * @param array
 * @param element
 */
export function remove<T>(array: T[], element: T) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            array.splice(i, 1)
            return
        }
    }
}

/**
 * Gets a new array without the first instance of the given
 * element. Really should be
 * part of the std library. Identifies object
 * with referencial equality.
 * @param array
 * @param element
 */
export function removeNew<T>(array: T[], element: T): T[] {
    const input = [...array]
    for (let i = 0; i < input.length; i++) {
        if (input[i] === element) {
            input.splice(i, 1)
            return input
        }
    }
    throw new Error("Given array doesn't contain element " + element)
}

export function product(...factors: Expression[]): Product {
    factors.forEach(f =>
        assert(
            f != null && f != undefined,
            "Making product with null or undefined factor"
        )
    )
    return Product.of(factors)
}

export function negative(expression: Expression): Expression {
    assert(expression != undefined, "Taking negative of undefined expression")
    if (expression instanceof Integer) return Integer.of(-expression.value)
    else return Product.of([Integer.of(-1), expression])
}

export function num(val: number): Integer {
    return Integer.of(val)
}

export function v(symbol: string): Variable {
    return Variable.of(symbol)
}

export function int(integrand: Expression, respectTo: Expression): Integral {
    return Integral.of(integrand, respectTo)
}

export function equivalenceArgument(
    first: Expression,
    second: Expression,
    explanation: string
): Argument {
    return new Argument(
        setOf(first),
        {
            n: first,
            r: Relationship.Equal,
            n1: second
        },
        explanation,
        "TEST_ARGUMENT"
    )
}

/**
 *
 * @returns The product of the given factors, or the only factor given
 * if only one given. Throws if no expressions are given.
 */
export function productOrNot(...expressions: Expression[]): Expression {
    assert(expressions.length > 0)
    if (expressions.length == 1) return expressions[0]
    return product(...expressions)
}

/**
 * Takes the product of the given expressions. If none are
 * given, 1. If one is given, that one.
 */
export function productOrOne(...expressions: Expression[]): Expression {
    if (expressions.length === 0) {
        return num(1)
    } else return productOrNot(...expressions)
}

/**
 * @returns The product of the given terms exlcuding the first if
 *          it's one. If the resulting terms list is only one term,
 *          returns the only term.
 */
export function productAndNotTimesOne(
    ...expressions: Expression[]
): Expression {
    if (expressions[0] instanceof Integer && expressions[0].value == 1) {
        expressions.shift()
        return productOrNot(...expressions)
    }
    return productOrNot(...expressions)
}

function setOf(...expressions: Expression[]): Set<Expression> {
    const out = new Set<Expression>()
    expressions.forEach(e => out.add(e))
    return out
}

export const a = v("a")
export const b = v("b")
export const c = v("c")
export const d = v("d")
export const e = v("e")
export const f = v("f")

export const x = v("x")
export const y = v("y")
