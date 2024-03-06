import { Expression } from "../expressions/Expression";
import { Fraction } from "../expressions/Fraction";
import { Integer } from "../expressions/Integer";
import { Integral } from "../expressions/Integral";
import { parseExpressionLatex } from "../userinput/LatexParser"
import { assert } from "../util/assert";
import { negative, num, product, sum, v } from "../ConvenientExpressions";
import { Derivative } from "../expressions/Derivative";
import { Exponent } from "../expressions/Exponent";


test("Latex is parsed correctly", () => {
    const EXP_1 = "\\frac{1}{2}";
    const EXP_2 = "\\int x + 3 da"
    const EXP_3 = "3\\int 5 d5a + 4"
    const EXP_4 = "a + bc\\cdot d + (a+b)"
    const EXP_5 = "a - b"
    const EXP_6 = "\\int dx"
    const EXP_7 = "\\int xd(x+1) + 7"
    const EXP_8 = "\\frac{d}{dx} a + z"
    const EXP_9 = "\\int \\int xdxdy"
    const EXP_10 = "a^b"
    // TODO: logs

    function expect(latex: string, value: Expression): void {
        const result = parseExpressionLatex(latex);
        assert(result == value, "Latex string " + latex + " parsed to "
             + result?.toUnambigiousString() + " instead of expected "
             + value.toUnambigiousString())
    }

    expect(EXP_1, Fraction.of(Integer.of(1), Integer.of(2)))
    expect(EXP_2, Integral.of(sum(v("x"), num(3)), v("a")))
    expect(EXP_3, sum(
        product(
            num(3),
            Integral.of(num(5), product(num(5), v("a"))),
        ),
        num(4)
    ))
    expect(EXP_4, sum(
        v("a"),
        product(v("b"), v("c"), v("d")),
        sum(v("a"), v("b"))
    ))
    expect(EXP_5, sum(
        v("a"),
        negative(v("b"))
    ))
    expect(EXP_6, Integral.of(num(1), v("x")))
    expect(EXP_7, sum(Integral.of(v("x"), sum(v("x"), num(1))), num(7)))
    expect(EXP_8, sum(Derivative.of(v("a"), v("x")), v("z")))
    expect(EXP_9, Integral.of(Integral.of(v("x"), v("x")), v("y")))
    expect(EXP_10, Exponent.of(v("a"), v("b")))
})
