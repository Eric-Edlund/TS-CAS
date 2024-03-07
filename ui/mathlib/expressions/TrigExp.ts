import { assert } from "../util/assert"
import { VariableValueMap } from "../VariableValueMap"
import { Expression } from "./Expression"
import { Integer, IntegerType } from "./Integer";
import { Variable, VariableType } from "./Variable";

type TrigFn = "Sin" | "Cos" | "Tan" | "Sec" | "Csc" | "Cot"
            | "Arcsin" | "Arccos" | "Arctan" | "Arcsec" | "Arccos" | "Arccot"

export class TrigExp extends Expression {
    public static of(fn: TrigFn, exp: Expression): TrigExp {
        const hash = fn + exp.hash;
        if (!TrigExp.instances.has(hash)) {
            TrigExp.instances.set(hash, new TrigExp(fn, exp))
        }
        return TrigExp.instances.get(hash)!
    }
    private static instances: Map<string, TrigExp> = new Map()

    private constructor(fn: TrigFn, exp: Expression) {
        super()
        this.operation = fn
        this.exp = exp
    }

    public class: string = TrigType
    public toMathXML(): string {
        function wrapIfNeeded(exp: Expression): string {
            if (exp.class === IntegerType || exp.class === VariableType) {
                return '(' + exp.toMathXML() + ')'
            }
            return exp.toMathXML();
        }

        return "<mrow>" + this.operation.toLowerCase() + wrapIfNeeded(this.exp) + "</mrow>"
    }

    public toString(): string {
        return "" + this.operation + '(' + this.exp.toString() + ')'
    }
    public toUnambigiousString(): string {
        return "" + this.operation + '(' + this.exp.toString() + ')'
    }

    public get hash(): string {
        return this.operation + this.exp.hash
    }

    public evaluate(values: VariableValueMap): number {
        throw new Error("Not implemented")
    }

    public toJSON(): string {
        return `["${this.operation}", ${this.exp.toJSON()}]`
    }

    public readonly operation: TrigFn 
    public readonly exp: Expression

    public readonly isReducible: boolean = false
    public readonly isConstant = true
    public readonly childCount = 0
}

export const TrigType = "Trig"

