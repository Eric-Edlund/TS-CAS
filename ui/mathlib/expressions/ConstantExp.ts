import { VariableValueMap } from "../VariableValueMap";
import { Expression } from "./Expression";

export type Constant = "Euler" | "Pi"

export class ConstantExp extends Expression {
    public static of(value: Constant): ConstantExp {
        if (!ConstantExp.instances.has(value)) {
            ConstantExp.instances.set(value, new ConstantExp(value))
        }
        return ConstantExp.instances.get(value)
    }
    private static instances: Map<Constant, ConstantExp> = new Map();

    private constructor(value: Constant) {
        super();
        this.value = value
    }

    public toMathXML(): string {
        let symbol = ""
        switch (this.value) {
            case "Euler": symbol = "e";
            break
            case "Pi": symbol = "π"
            break;
        }
        return `<mi>${symbol}</mi>`
    }
    public isReducible: boolean;
    public class: string;
    public toString(): string {
        return this.value
    }
    public toUnambigiousString(): string {
        return this.value
    }
    public get hash(): string {
        return "Const" + this.value
    }
    public isConstant: boolean;
    public childCount: number;
    public evaluate(values: VariableValueMap): number {
        throw new Error("Method not implemented.");
    }
    public toJSON(): string {
        switch (this.value) {
            case "Euler": return '"E"';
            case "Pi": return '"Pi"';
        }
    }

    public readonly value: Constant
}
