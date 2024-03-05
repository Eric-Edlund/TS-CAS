import { Expression } from "../expressions/Expression";
import { Fraction } from "../expressions/Fraction";
import { Integer } from "../expressions/Integer";
import { parseExpressionLatex } from "../userinput/LatexParser"
import { assert } from "../util/assert";


test("Latex is parsed correctly", () => {
    const EXP_1 = "\\frac{1}{2}";

    function expect(latex: string, value: Expression): void {
        const result = parseExpressionLatex(latex);
        assert(result == value, "Latex string " + latex + " parsed to "
             + result?.toUnambigiousString() + " instead of expected "
             + value.toUnambigiousString())
    }

    expect(EXP_1, Fraction.of(Integer.of(1), Integer.of(2)))
    
})
