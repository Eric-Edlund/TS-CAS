import { inParen, inRow } from "../util/MathMLHelpers";
import { Expression } from "./Expression";
import { Integer, IntegerType } from "./Integer";
import { ProductType } from "./Product";
import { SumType } from "./Sum";


export class Exponent extends Expression {
    public static of(base: Expression, power: Expression): Exponent {
        const hash = base.hash + power.hash
        if (!Exponent.instances.has(hash)) {
            Exponent.instances.set(hash, new Exponent(base, power))
        }
        return Exponent.instances.get(hash)!
    }
    private static instances = new Map<string, Exponent>()

    public class: string = ExponentType;
    public toMathXML(): string {
        function wrapIfNeeded(exp: Expression): string {
            if (exp.class == SumType || exp.class == ProductType)
                return inRow(inParen(exp.toMathXML()))
            return exp.toMathXML()
        }
        return "<msup>" + wrapIfNeeded(this.base) + this.power.toMathXML() + "</msup>"
    }
    public toString(): string {
        return "(" + this.base + ")^(" + this.power + ")"
    }

    public get hash(): string {
        return "Exponent"+this.base.hash+this.power.hash
    }

    private constructor(base: Expression, power: Expression) {
        super()
        this.base = base
        this.power = power
        Object.freeze(this.base)
        Object.freeze(this.power)
        // The integers are closed over exponentiation
        this.isReducible = (base.isReducible || base.class == IntegerType) && (power.isReducible || power.class == IntegerType) && Math.pow(base.reduced.value, power.reduced.value) % 1 == 0
        this.isHealthy = !this.isReducible
        this.isConstant = base.isConstant && power.isConstant
        this.childCount = 2 + base.childCount + power.childCount
    }
    
    public readonly base: Expression;
    public readonly power: Expression;
    public readonly isReducible: boolean;
    public readonly isHealthy: boolean;

    public get reduced(): Integer {
        return Integer.of(Math.pow(this.base.reduced.value, this.power.reduced.value))
    }
    public readonly isConstant: boolean;
    public readonly childCount: number;
} 

export const ExponentType = "Exponent"