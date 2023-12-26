import { VariableValueMap } from "../VariableValueMap"
import { Expression } from "./Expression"
import { Integer } from "./Integer"

export class Variable extends Expression {
    public static of(symbol: string): Variable {
        if (Variable.instances.get(symbol) == undefined) {
            Variable.instances.set(symbol, new Variable(symbol))
        }
        return Variable.instances.get(symbol)!
    }
    private static instances = new Map<string, Variable>()
    private constructor(symbol: string) {
        super()
        this.symbol = symbol
    }

    public class: string = VariableType
    public toMathXML(): string {
        return "<mi>" + this.symbol + "</mi>"
    }
    public toString(): string {
        return this.symbol
    }
    public toUnambigiousString(): string {
        return this.symbol
    }

    public get hash(): string {
        return "Var" + this.symbol
    }

    public evaluate(values: VariableValueMap): number {
        return values.valueOf(this)
    }

    public readonly symbol: string
    public readonly isReducible: boolean = false

    public readonly isConstant = false
    public readonly childCount: number = 0
}

export const VariableType = "Variable"
