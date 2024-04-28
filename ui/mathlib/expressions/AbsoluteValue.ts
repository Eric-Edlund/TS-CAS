import { VariableValueMap } from "../VariableValueMap";
import { Expression } from "./Expression"
import { NameTable } from "./MathElement";


export class AbsoluteValue extends Expression {

    public static of(exp: Expression): AbsoluteValue {
        if (!AbsoluteValue.instances.has("Abs" + exp.hash)) {
            AbsoluteValue.instances.set("Abs" + exp.hash, new AbsoluteValue(exp))
        }
        return AbsoluteValue.instances.get("Abs" + exp.hash)
    }
    private static instances: Map<string, AbsoluteValue> = new Map();

    private constructor(exp: Expression) {
        super()
        this.exp = exp
    }
    public toMathXML(table: NameTable): string {
        return `<mrow><mo>|</mo>${this.exp.toMathXML(table)}<mo>|</mo></mrow>`
    }
    public isReducible: boolean;
    public class: string;
    public toString(): string {
        throw new Error("Method not implemented.");
    }
    public toUnambigiousString(): string {
        return `Abs${this.exp.toUnambigiousString()}`
    }
    public get hash(): string {
        return "Abs" + this.exp.hash
    }
    public isConstant: boolean;
    public childCount: number;
    public evaluate(_values: VariableValueMap): number {
        throw new Error("Method not implemented.");
    }
    public toJSON(): string {
        return `["Abs",${this.exp.toJSON()}]`
    }

    public readonly exp: Expression
}
