import { Expression } from "../expressions/Expression";
import { Fraction } from "../expressions/Fraction";
import { Integer } from "../expressions/Integer";
import { Integral } from "../expressions/Integral";
import { parseExpressionLatex } from "../userinput/LatexParser"
import { assert } from "../util/assert";
import { negative, num, product, sum, v } from "../ConvenientExpressions";
import { Derivative } from "../expressions/Derivative";
import { Exponent } from "../expressions/Exponent";
import { TrigExp } from "../expressions/TrigExp";


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
    const EXP_11 = "\\arctan x"
    const EXP_12 = "\\sin \\cos x + 7"
    const EXP_13 = "\\tan (x+9)"
    const EXP_14 = "\\cot ^2 x"
    const EXP_15 = "\\sqrt x"
    const EXP_16 = "\\frac{4}{11}"
    const EXP_17 = "x^{11}"
    const EXP_18 = "x^{2x}"
    // TODO: logs

    function expect(latex: string, value: Expression): void {
        const result = parseExpressionLatex(latex);
        if (result === "empty") {
            assert(false, "Input shouldn't be empty.");
            return
        }
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
    expect(EXP_11, TrigExp.of("Arctan", v("x")))
    expect(EXP_12, sum(TrigExp.of("Sin", TrigExp.of("Cos", v("x"))), num(7)))
    expect(EXP_13, TrigExp.of("Tan", sum(v("x"), num(9))))
    expect(EXP_14, Exponent.of(TrigExp.of("Cot", v("x")), num(2)))
    expect(EXP_15, Exponent.of(v("x"), Fraction.of(num(1), num(2))))
    expect(EXP_16, Fraction.of(num(4), num(11)))
    expect(EXP_17, Exponent.of(v("x"), num(11)))
    expect(EXP_18, Exponent.of(v("x"), product(num(2), v("x"))))
})
