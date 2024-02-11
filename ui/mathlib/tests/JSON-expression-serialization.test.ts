import { Exponent } from "../expressions/Exponent"
import { Fraction } from "../expressions/Fraction"
import { Integer } from "../expressions/Integer"
import { Product } from "../expressions/Product"
import { Sum } from "../expressions/Sum"
import { Logarithm } from "../expressions/Logarithm"

test("Expression objects serialize to JSON correctyl", () => {
    let i = Integer.of(69).toJSON()
    expect(i == `"{"num": 69}"`)

    let s = Sum.of([Integer.of(1), Integer.of(1)]).toJSON()
    expect(s == `["Sum", {"num": 1}, {"num": 1}]`)

    let p = Product.of([Integer.of(1), Integer.of(1)]).toJSON()
    expect(p == `["Product", {"num": 1}, {"num": 1}]`)

    let e = Exponent.of(Integer.of(1), Integer.of(2)).toJSON()
    expect(e == `["Exponent", {"num": 1}, {"num": 2}]`)

    let f = Fraction.of(Integer.of(1), Integer.of(2)).toJSON()
    expect((f = `["Divide", {"num": 1}, {"num": 2}]`))

    let l = Logarithm.of(Integer.of(1), Integer.of(2)).toJSON()
    expect(l == `["Logarithrm", {"num": 1}, {"num": 2}]`)
})
