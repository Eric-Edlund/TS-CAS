/**
 * Test that the deriver is deriving the expected true statements.
 */

import { num, v } from "../ConvenientExpressions"
import { deriveExpand, wrapInGraph } from "../derivations/Deriver"
import { Derivative } from "../expressions/Derivative"
import { Expression } from "../expressions/Expression"
import { parseExpression } from "../userinput/AntlrMathParser"


/**
 * Creates a test that parses the given expression, then derives
 * equal statements with the given depth, then checks that the
 * derived result contains the given expected equivalent expressions.
 * @param expected A mixed list of expressions and expression strings.
 *              The expression strings will be parsed.
 */
function testFn(exp: string | Expression, depth: number, expected: Expression[] | String[]) {

    expected = expected.map(val => {
        if (typeof val === "string") {
            return parseExpression(val)
        } else return val
    }) as Expression[]

    if (typeof exp === "string") {
        exp = parseExpression(exp)
    }

    test("Simplify " + exp.toString(), () => {
        const derivationResult = deriveExpand(wrapInGraph(exp as Expression), depth)
        for (const e of expected) {
            expect(derivationResult.graph.getNodes()).toContain(e)
        }
    })
}

testFn("x+x", 30, ["2x"])
testFn("1/2(1/3)",         30,     ["1/6"])
testFn(Derivative.of(v("x"), v("X")),        30,     [num(1)])
testFn("xx",               30,     ["x^2"])
testFn("x/x",              30,     ["1"])
testFn("int(x)",           30,     ["(1/2)x^2", "b"])
testFn("(a+b)(a-b)aa", 5, ["a^2(a+b)(a-b)", "(a^3+a^2b)(a-b)"])
testFn(Derivative.of(num(1), v("x")), 5, ["0"])
