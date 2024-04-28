import { VariableValueMap } from "../VariableValueMap";
import { Expression } from "./Expression";
import { NameTable } from "./MathElement";

/**
 * Get the nth substitution symbol to use.
 * Ex) u, v, ...
 */
function getSymbol(n: number): string {
    switch (n) {
        case 0: return 'u'
        case 1: return 'v'
        case 2: return 'w'
        case 3: return 'a'
        case 4: return 'a'
        case 5: return 'b'
        case 6: return 'c'
    }
    return `sub(${n})`
}

export class Substitution extends Expression {
    public static of(exp: Expression, id: number): Substitution {
        if (!Substitution.instances.has(id)) {
            Substitution.instances.set(id, new Substitution(exp, id))
        }
        return Substitution.instances.get(id)!
    }
    private static instances: Map<number, Substitution> = new Map();

    public toMathXML(table: NameTable): string {
        if (!table[this.subId]) {
            table[this.subId] = getSymbol(Object.keys(table).length)
        }
        const symbol = table[this.subId];
        return `<mi>${symbol}</mi>`
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
    public evaluate(_values: VariableValueMap): number {
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
