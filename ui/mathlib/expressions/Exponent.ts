import { inParen, inRow } from "../util/MathMLHelpers"
import { VariableValueMap } from "../VariableValueMap"
import { Expression } from "./Expression"
import { FractionType } from "./Fraction"
import { Integer, IntegerType } from "./Integer"
import { ProductType } from "./Product"
import { SumType } from "./Sum"
import { TrigType } from "./TrigExp"

export class Exponent extends Expression {
    public static of(base: Expression, power: Expression): Exponent {
        const hash = base.hash + power.hash
        if (!Exponent.instances.has(hash)) {
            Exponent.instances.set(hash, new Exponent(base, power))
        }
        return Exponent.instances.get(hash)!
    }
    private static instances = new Map<string, Exponent>()

    public class: string = ExponentType
    public toMathXML(): string {
        function wrapIfNeeded(exp: Expression): string {
            if (
                exp.class == SumType ||
                exp.class == ProductType ||
                exp.class == FractionType ||
                exp.class == TrigType
            )
                return inRow(inParen(exp.toMathXML()))
            return exp.toMathXML()
        }
        return (
            "<msup>" +
            wrapIfNeeded(this.base) +
            inRow(this.power.toMathXML()) +
            "</msup>"
        )
    }
    public toString(): string {
        return "(" + this.base + ")^(" + this.power + ")"
    }
    public toUnambigiousString(): string {
        return "(" + this.base + ")^(" + this.power + ")"
    }

    public get hash(): string {
        return "Pow" + this.base.hash + this.power.hash
    }

    public evaluate(values: VariableValueMap): number {
        return Math.pow(this.base.evaluate(values), this.power.evaluate(values))
    }

    toJSON(): string {
        return `["Exponent", ${this.base.toJSON()}, ${this.power.toJSON()}]`
    }

    private constructor(base: Expression, power: Expression) {
        super()
        this.base = base
        this.power = power
        Object.freeze(this.base)
        Object.freeze(this.power)
        // The integers are closed over exponentiation
        this.isReducible =
            (base.isReducible || base.class === IntegerType) &&
            (power.isReducible || power.class === IntegerType) // && Math.pow(base.reduced.value, power.reduced.value) % 1 == 0
        this.isConstant = base.isConstant && power.isConstant
        this.childCount = 2 + base.childCount + power.childCount
    }

    public readonly base: Expression
    public readonly power: Expression
    public readonly isReducible: boolean

    public readonly isConstant: boolean
    public readonly childCount: number
}

export const ExponentType = "Exponent"
