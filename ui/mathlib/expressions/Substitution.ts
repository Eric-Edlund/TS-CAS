import { VariableValueMap } from "../VariableValueMap";
import { Expression } from "./Expression";


export class Substitution extends Expression {
    public static of(exp: Expression, id: number): Substitution {
        if (!Substitution.instances.has(id)) {
            Substitution.instances.set(id, new Substitution(exp, id))
        }
        return Substitution.instances.get(id)!
    }
    private static instances: Map<number, Substitution> = new Map();

    public toMathXML(): string {
        return `<mi>u:${this.id}</mi>`
    }
    public isReducible: boolean;
    public class: string;
    public toString(): string {
        return "Sub " + this.id
    }
    public toUnambigiousString(): string {
        return "Sub " + this.id + " " + this.exp.toUnambigiousString()
    }
    public get hash(): string {
        return "Sub " + this.id + " " + this.exp.hash
    }
    public isConstant: boolean;
    public childCount: number;
    public evaluate(values: VariableValueMap): number {
        throw new Error("Method not implemented.");
    }
    public toJSON(): string {
        throw new Error("Substitutions shouldn't be encoded from the frontend")
    }

    private constructor(exp: Expression, subId: number) {
        super()
        this.exp = exp
        this.subId = subId
    }

    private readonly exp: Expression
    private readonly subId: number
}
