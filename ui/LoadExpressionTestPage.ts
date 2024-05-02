import {
    a,
    b,
    c,
    int,
    negative,
    num,
    product,
    sum,
    x,
    y
} from "./mathlib/ConvenientExpressions"
import { Derivative } from "./mathlib/expressions/Derivative"
import { Exponent } from "./mathlib/expressions/Exponent"
import { Expression } from "./mathlib/expressions/Expression"
import { Fraction } from "./mathlib/expressions/Fraction"
import { Integral } from "./mathlib/expressions/Integral"
import { MathView } from "./mathlib/uielements/EditableMathView"

/**
 * Called after the dom is loaded.
 * Populates the body element of the document
 * with the test expressions page
 */
export function loadExpressionsTestPage(): void {
    const page = document.getElementsByTagName("body")[0] as HTMLBodyElement

    function p(content: string) {
        const e = document.createElement("p")
        e.innerText = content
        page.append(e)
    }

    function view(exp: Expression) {
        const e = new MathView(exp)
        page.append(e)
    }

    p("The sum of a, a, and a")
    view(sum(a, a, a))

    p("Integral of a over b with respect to c")
    view(Integral.of(Fraction.of(a, b), c))

    p("Integral of (a over a) over b with respect to c")
    view(Integral.of(Fraction.of(Fraction.of(a, a), b), c))

    p("Integral of ((a over a) over a) over b with respect to c")
    view(Integral.of(Fraction.of(Fraction.of(Fraction.of(a, a), a), b), c))

    p("Integral of (((a over a) over a) over a) over b with respect to c")
    view(
        Integral.of(
            Fraction.of(Fraction.of(Fraction.of(Fraction.of(a, a), a), a), b),
            c
        )
    )

    p(
        "Integral of ((((a over a) over a) over a) over a) over b with respect to c"
    )
    view(
        Integral.of(
            Fraction.of(
                Fraction.of(
                    Fraction.of(Fraction.of(Fraction.of(a, a), a), a),
                    a
                ),
                b
            ),
            c
        )
    )

    p("")
    view(
        int(
            Fraction.of(
                sum(
                    negative(b),
                    Exponent.of(sum(x, a), Fraction.of(num(1), num(2)))
                ),
                product(num(2), a)
            ),
            x
        )
    )

    p("Product of x and y")
    view(product(x, y))

    p("Product of (x-1), -1 and y")
    view(product(sum(x, negative(num(1))), num(-1), y))

    p("Negation of x (Reped as the propduct of -1 and x)")
    view(negative(x))

    p("Sum of x and -x")
    view(sum(x, negative(x)))

    p("Sum of -x and x")
    view(sum(negative(x), x))

    p("Derivative of the square of x with respect to x")
    view(Derivative.of(Exponent.of(x, num(2)), x))

    p("Derivative ((x^2) - 2) with respect to x")
    view(Derivative.of(Exponent.of(sum(x, num(-2)), num(2)), x))

    p("")
    view(num(1))

    p("")
    view(num(1))

    p("")
    view(num(1))

    p("")
    view(num(1))
}

document.addEventListener('DOMContentLoaded', loadExpressionsTestPage)
