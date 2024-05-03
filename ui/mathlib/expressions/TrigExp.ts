import { VariableValueMap } from "../VariableValueMap"
import { inParen, inRow } from "../util/MathMLHelpers";
import { Expression } from "./Expression"
import { FractionType } from "./Fraction";
import { IntegerType } from "./Integer";
import { NameTable } from "./MathElement";
import { ProductType } from "./Product";
import { SumType } from "./Sum";
import { VariableType } from "./Variable";

export type TrigFn = "Sin" | "Cos" | "Tan" | "Sec" | "Csc" | "Cot"
            | "Arcsin" | "Arccos" | "Arctan" | "Arcsec" | "Arccsc" | "Arccot"

export function isTrigFn(val: string): boolean {
    return val === "Sin"
        || val === "Cos"
        || val === "Tan"
        || val === "Sec"
        || val === "Csc"
        || val === "Cot"
        || val === "Arcsin"
        || val === "Arccos"
        || val === "Arctan"
        || val === "Arcsec"
        || val === "Arccsc"
        || val === "Arccot"
}

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

    public toMathXMLWithInlinePower(table: NameTable, power: Expression): string {
        return this.mathXMLImpl(table, power)
    }
    public toMathXML(table: NameTable): string {
        return this.mathXMLImpl(table, null)
    }

    private mathXMLImpl(table: NameTable, power: Expression | null): string {
        function wrapIfNeeded(exp: Expression): string {
            if (exp.class !== IntegerType 
                && exp.class !== VariableType
                && exp.class !== FractionType
            ) {
                return inParen(exp.toMathXML(table))
            }
            return exp.toMathXML(table);
        }

        function rowIfNeeded(exp: Expression): string {
            let result = exp.toMathXML(table)
            if (exp.class === SumType || exp.class === ProductType) {
                result = inRow(result)
            }
            return result
        }

        return "<mrow>" + 
            (power != null ? "<msup>" : "") + 
            "<mtext>" +
            this.operation.toLowerCase() + 
            "</mtext>" + 
            (power != null ? `${rowIfNeeded(power)}</msup>` : "") + 
            "<mspace width=\"0.5em\"/>" + 
            "<mrow>" + wrapIfNeeded(this.exp) + "</mrow></mrow>"

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

    public evaluate(_values: VariableValueMap): number {
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

