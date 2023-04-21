import { Expression } from "./expressions/Expression";
import { Integer } from "./expressions/Integer";
import { Fraction } from "./expressions/Fraction";
import { Integral } from "./expressions/Integral";
import { factorOrder, Product } from "./expressions/Product";
import { orderTerms, Sum, SumType } from "./expressions/Sum";
import { Variable } from "./expressions/Variable";

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
    const intTerm = terms.filter(e => e instanceof Integer)
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
    const intEval =  sumEvalIntegerTerms(...terms)
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
                if (other.isNegation && other.negation == t) {
                    remove(terms, other)
                    remove(terms, t)
                    continue terms
                }
            }
        }
    }

    if (terms.length == 0)
        return Integer.of(0)
    else if (terms.length == 1)
        return terms[0]
    else
        return sum(...terms)
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
 * Removes the first instance of the given
 * element from the array. Really should be
 * part of the std library. Identifies object
 * with referencial equality.
 * @param array 
 * @param element 
 */
function remove<T>(array: T[], element: T) {
    for (let i=0; i < array.length; i++) {
        if (array[i] === element) {
            array.splice(i, 1)
            return
        }
    }
}

export function product(...factors: Expression[]): Product {
    return Product.of(factors)
}

export function negative(expression: Expression): Expression {
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

export const a = v('a')
export const b = v('b')
export const c = v('c')
export const d = v('d')
export const e = v('e')
export const f = v('f')

export const x = v('x')
export const y = v('y')