import { a, num, sum, v } from "../ConvenientExpressions"
import { assert } from "../util/assert"


test("Sum correctly tests health", () => {
    const exp = sum(a, num(1), num(1))
    assert(exp.isHealthy == false)
})