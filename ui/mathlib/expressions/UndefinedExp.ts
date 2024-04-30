import { VariableValueMap } from "../VariableValueMap";
import { Expression } from "./Expression";
import { NameTable } from "./MathElement";

export class UndefinedExp extends Expression {
    public toMathXML(table: NameTable): string {
        return "<mtext>Undefined</mtext>"
    }
    public isReducible: boolean = false;
    public class: string = "Undefined";
    public toString(): string {
        return "Undefined"
    }
    public toUnambigiousString(): string {
        return "Undefined"
    }
    public get hash(): string {
        return "Undefined"
    }
    public isConstant: boolean = true;
    public childCount: number = 0;
    public evaluate(values: VariableValueMap): number {
        throw new Error("Method not implemented.");
    }
    public toJSON(): string {
        throw new Error("Undefined should never be encoded from the frontend");
    }

}



export const UNDEFINED_EXP = new UndefinedExp()
