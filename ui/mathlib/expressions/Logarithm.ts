import { VariableValueMap } from "../VariableValueMap"
import { inParen } from "../util/MathMLHelpers"
import { ConstantExp } from "./ConstantExp"
import { Expression } from "./Expression"
import { Integer } from "./Integer"
import { NameTable } from "./MathElement"
import { ProductType } from "./Product"
import { SumType } from "./Sum"

export class Logarithm extends Expression {
    public static of(exp: Expression, base: Expression): Logarithm {
        const hash = "Log" + exp.hash + base.hash
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

    public toMathXML(table: NameTable): string {
        let text = "log"
        if (this.base === ConstantExp.of("Euler")) {
            text = "ln"
        }
        let base = this.base.toMathXML(table)
        if (text === "ln") {
            base = ""
        } else if (text === "log" && this.base === Integer.of(10)) {
            base = ""
        }
        function wrapIfNeeded(exp: Expression): string {
            if (exp.class === ProductType
            || exp.class === SumType) {
                return inParen(exp.toMathXML(table))
            }
            return exp.toMathXML(table)
        }
        if (base === "") {
            return `<mrow>
<mtext>${text}</mtext>
<mrow>${wrapIfNeeded(this.exp)}</mrow>
</row>`
        } else {
            return `<mrow>
<msub><mtext>${text}</mtext>${base}</msub>
<mrow>${wrapIfNeeded(this.exp)}</mrow>
</row>`
        }
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
        return "Log" + this.exp.hash + this.base.hash
    }
    public evaluate(values: VariableValueMap): number {
        return (
            Math.log(this.exp.evaluate(values)) /
            Math.log(this.base.evaluate(values))
        )
    }

    toJSON(): string {
        return `["Logarithm", ${this.base.toJSON()}, ${this.exp.toJSON()}]`
    }

    public readonly isConstant: boolean
    public readonly childCount: number

    public readonly exp: Expression
    public readonly base: Expression
}

export const LogType = "Logarithm"
