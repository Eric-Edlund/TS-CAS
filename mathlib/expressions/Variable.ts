import { Expression } from "./Expression";
import { Integer } from "./Integer";

export class Variable extends Expression {
    public static of(symbol: string): Variable {
        if (Variable.instances.get(symbol) == undefined) {
            Variable.instances.set(symbol, new Variable(symbol))
        }
        return Variable.instances.get(symbol)!;
    }
    private static instances = new Map<string, Variable>()
    private constructor(symbol: string) {
        super();
        this.symbol = symbol
    }

    public class: string = VariableType
    public toMathXML(): string {
        return "<mi>"+this.symbol+"</mi>";
    }
    public toString(): string {
        return this.symbol;
    }

    public get hash(): string {
        return "Variable"+this.symbol
    }
    
    public readonly symbol: string;
    public readonly isReducible: boolean = false;
    public get reduced(): Integer {
        throw new Error("Variables can't be reduced to integers.")
    }
    public readonly isHealthy: boolean = true
    public readonly isConstant = false;
}

export const VariableType = "Variable"