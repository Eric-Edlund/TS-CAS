import { Expression } from "./Expression";
import { Integer } from "./Integer";

export class Fraction extends Expression {
    public static of(numerator: Expression, denominator: Expression): Fraction {
        const hash = numerator.hash + denominator.hash
        if (!this.instance.has(hash))
            this.instance.set(hash, new Fraction(numerator, denominator))
        return this.instance.get(hash)!
    }
    private static instance: Map<string, Fraction> = new Map()
    private constructor(num: Expression, denom: Expression) {
        super()
        this.numerator = num
        this.denominator = denom
        Object.freeze(this.numerator)
        Object.freeze(this.denominator)

        /*
        A fraction is reducible if the denom | num.
            <=> num = k * denom where k is an integer.

        This makes proving reducibility hard.
        TODO: Decide if it's worth implementing reducibility for Fractions
        */
        this.isReducible = false
        this.isConstant = num.isConstant && denom.isConstant
        this.childCount = 2 + num.childCount + denom.childCount
    }
    public readonly numerator: Expression
    public readonly denominator: Expression

    public readonly isReducible: boolean;
    public readonly class: string = FractionType;
    public toString(): string {
        return this.numerator.toString() + " / " + this.denominator.toString()
    }
    public toUnambigiousString(): string {
        return `${this.numerator.toUnambigiousString()}/${this.denominator.toUnambigiousString()}`
    }
    public get hash(): string {
        return FractionType + this.numerator.hash + this.denominator.hash
    }
    public readonly isConstant: boolean;
    public toMathXML(): string {
        return "<mfrac><mrow>" + this.numerator.toMathXML() + "</mrow><mrow>" + this.denominator.toMathXML() + "</mrow></mfrac>"
    }
    public readonly childCount: number

}

export const FractionType = "Fraction"