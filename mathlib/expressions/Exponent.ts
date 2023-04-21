import { inParen, inRow } from "../util/MathMLHelpers";
import { Expression } from "./Expression";
import { Integer, IntegerType } from "./Integer";
import { ProductType } from "./Product";
import { SumType } from "./Sum";


export class Exponent extends Expression {
    public static of(base: Expression, power: Expression): Exponent {
        if (!Exponent.instances.has(base)) {
            Exponent.instances.set(base, new Map<Expression, Exponent>())
            if (!Exponent.instances.get(base)!.has(power)) {
                Exponent.instances.get(base)!.set(power, new Exponent(base, power))
            }
        }
        return Exponent.instances.get(base)!.get(power)!
    }
    private static instances = new Map<Expression, Map<Expression, Exponent>>()

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
        // The integers are closed over exponentiation
        this.isReducible = (base.isReducible || base.class == IntegerType) && (power.isReducible || power.class == IntegerType) && Math.pow(base.reduced.value, power.reduced.value) % 1 == 0
        this.isHealthy = !this.isReducible
        this.isConstant = base.isConstant && power.isConstant
    }
    
    public readonly base: Expression;
    public readonly power: Expression;
    public readonly isReducible: boolean;
    public readonly isHealthy: boolean;

    public get reduced(): Integer {
        return Integer.of(Math.pow(this.base.reduced.value, this.power.reduced.value))
    }
    public readonly isConstant: boolean;
} 

export const ExponentType = "Exponent"