/**
 * Verifies the convenice functions work as expected.
 */

import { a, b, negative, num, product, sumIntuitive } from "../ConvenientExpressions"
import { Integer } from "../expressions/Integer"
import { assert } from "../util/assert"


test("Intuitive sum", () => {
    assert(sumIntuitive(a, negative(a)) == Integer.of(0))
    assert(sumIntuitive(a, a, negative(a)) == a)
    assert(sumIntuitive(b, a, negative(a)) == b)
    assert(sumIntuitive(b, product(num(2), a), negative(product(num(2), a))) == b)
})