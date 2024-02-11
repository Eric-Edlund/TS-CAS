import { VariableValueMap } from "../VariableValueMap"
import { Expression } from "./Expression"

export class Logarithm extends Expression {
    public static of(exp: Expression, base: Expression): Logarithm {
        const hash = exp.hash + base.hash
        if (!this.instances.has(hash))
            this.instances.set(hash, new Logarithm(exp, base))
        return this.instances.get(hash)!
    }
    private static instances: Map<string, Logarithm> = new Map()
    private constructor(exp: Expression, base: Expression) {
        super()
        this.exp = exp
        this.base = base
        Object.freeze(this.exp)
        Object.freeze(this.base)
        this.isReducible = false //TODO: Determine if a logarithm is reducible
        this.isConstant = exp.isConstant && base.isConstant
        this.childCount = 2 + exp.childCount + base.childCount
    }

    public toMathXML(): string {
        return `<mrow>
            <msub><mtext>log</mtext>${this.base.toMathXML()}</msub>
            <mrow>${this.exp.toMathXML()}</mrow>
        </row>`
    }
    public isReducible: boolean
    public readonly class: string = LogType
    public toString(): string {
        return `log${this.base.toString()}(${this.exp.toString()})`
    }
    public toUnambigiousString(): string {
        return `log(${this.base.toUnambigiousString()})(${this.exp.toUnambigiousString()})`
    }
    public get hash(): string {
        throw new Error("Method not implemented.")
    }
    public evaluate(values: VariableValueMap): number {
        return (
            Math.log(this.exp.evaluate(values)) /
            Math.log(this.base.evaluate(values))
        )
    }

    toJSON(): string {
        return `["Log", ${this.base.toJSON()}, ${this.exp.toJSON()}]`
    }

    public readonly isConstant: boolean
    public readonly childCount: number

    public readonly exp: Expression
    public readonly base: Expression
}

export const LogType = "Logarithm"
