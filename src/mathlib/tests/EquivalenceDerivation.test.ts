/**
 * Test that the deriver is deriving the expected true statements.
 */

import { deriveExpand, wrapInGraph } from "../derivations/Deriver"
import { Expression } from "../expressions/Expression"
import { Integer } from "../expressions/Integer"
import { parseExpression } from "../userinput/AntlrMathParser"


/**
 * Creates a test that parses the given expression, then derives
 * equal statements with the given depth, then checks that the
 * derived result contains the given expected equivalent expressions.
 * @param expected A mixed list of expressions and expression strings.
 *              The expression strings will be parsed.
 */
function testFn(exp: string, depth: number, expected: Expression[] | String[]): void {

    expected = expected.map(val => {
        if (typeof val === "string") {
            return parseExpression(val)
        } else return val
    }) as Expression[]

    test(exp, () => {
        const derivationResult = deriveExpand(wrapInGraph(parseExpression(exp)), depth)
        for (const e of expected) {
            expect(derivationResult.graph.getNodes()).toContain(e)
        }
    })
}

testFn("1/2(1/3)", 30, ["1/6"])


// test("1/2(1/3)", () => {
//     const derivationResult = deriveExpand(wrapInGraph(parseExpression("1/2(1/3)")), 30)
// })