import { VariableValueMap } from "../VariableValueMap"
import { Expression } from "./Expression"
import { NameTable } from "./MathElement"
import { ProductType } from "./Product"
import { SumType } from "./Sum"

export class Derivative extends Expression {
    public static of(exp: Expression, relativeTo: Expression): Derivative {
        const hash = exp.hash + relativeTo.hash
        if (!this.instances.has(hash))
            this.instances.set(hash, new Derivative(exp, relativeTo))
        return this.instances.get(hash)!
    }
    private static instances: Map<string, Derivative> = new Map()
    private constructor(exp: Expression, relativeTo: Expression) {
        super()
        this.exp = exp
        this.relativeTo = relativeTo
        Object.freeze(this.exp)
        Object.freeze(this.relativeTo)
        this.isReducible = false //TODO: Determine if a derivative is reducible
        this.isConstant = false // TODO: Determine if a derivative is constant
        this.childCount = 2 + exp.childCount + relativeTo.childCount
    }

    public readonly exp: Expression
    public readonly relativeTo: Expression

    public readonly isReducible: boolean
    public readonly class: string = DerivativeType
    public toString(): string {
        return (
            "d/d" + this.relativeTo.toString() + "(" + this.exp.toString() + ")"
        )
    }

    public toUnambigiousString(): string {
        return (
            "(d/d" +
            this.relativeTo.toUnambigiousString() +
            ")" +
            this.exp.toUnambigiousString()
        )
    }
    public get hash(): string {
        return this.class + this.exp.hash + this.relativeTo.hash
    }

    public toMathXML(table: NameTable): string {
        function wrapIfNeeded(exp: Expression): string {
            if (exp.class == SumType || exp.class == ProductType)
                return "<mo>(</mo>" + exp.toMathXML(table) + "<mo>)</mo>"
            return exp.toMathXML(table)
        }
        return (
            "<mfrac><mn>d</mn><mrow><mn>d</mn>" +
            wrapIfNeeded(this.relativeTo) +
            "</mrow></mfrac>" +
            wrapIfNeeded(this.exp)
        )
    }

    public evaluate(_values: VariableValueMap): number {
        // Maybe later
        return NaN
    }

    toJSON(): string {
        return `["Derivative", ${this.exp.toJSON()}, ${this.relativeTo.toJSON()}]`
    }

    public readonly isConstant: boolean
    public readonly childCount: number
}

export const DerivativeType = "Derivative"
