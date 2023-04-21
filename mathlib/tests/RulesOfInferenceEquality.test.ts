
/**
 * Make sure that expressions are being rewritten correctly,
 * in other words, that the rules of inference are working.
 */

import { Equivalence } from "../derivations/equivalence/Equivalence"
import { Exponent } from "../expressions/Exponent"
import { Integer } from "../expressions/Integer"
import { Product } from "../expressions/Product"
import { Sum } from "../expressions/Sum"
import { Variable } from "../expressions/Variable"
import { assert } from "../util/assert"

test("a * a = a^2", () => {
    const exp = Product.of([Variable.of('a'), Variable.of('a')])
    const result = Equivalence.findEquivalentsFor(exp)
    const expected = Exponent.of(Variable.of('a'), Integer.of(2))
    assert(result.contains(expected), "Failed to find expression")
})

test("a + a = 2a", () => {
    const exp = Sum.of([Variable.of('a'), Variable.of('a')])
    const result = Equivalence.findEquivalentsFor(exp)
    const expected = Product.of([Variable.of('a'), Integer.of(2)])
    assert(result.contains(expected), "Failed to combine terms " + result + " " + expected + " equal? ")
})