import { inParen } from "../util/MathMLHelpers";
import { Expression } from "./Expression";
import { Integer } from "./Integer";
import { ProductType } from "./Product";
import { SumType } from "./Sum";


/**
 * An indefinate integral (for now).
 * TODO: Should we separate definate/indefinate integrals?
 */
export class Integral extends Expression {
    public static of(integrand: Expression, relativeTo: Expression): Integral {
        if (!this.instances.has(integrand.hash + relativeTo.hash))
            this.instances.set(integrand.hash + relativeTo.hash, new Integral(integrand, relativeTo))
        return this.instances.get(integrand.hash + relativeTo.hash)!
    }
    private static instances: Map<string, Integral> = new Map()

    private constructor(integrand: Expression, relativeTo: Expression) {
        super()
        this.integrand = integrand
        this.relativeTo = relativeTo

        Object.freeze(this.integrand)
        Object.freeze(this.relativeTo)

        this.isReducible = false
        this.isHealthy = true
        this.isConstant = false
    }
    public readonly integrand: Expression
    public readonly relativeTo: Expression

    public get reduced(): Integer {
        throw new Error("Method not implemented. Not sure how this works with Integrals.");
    }
    public readonly isReducible: boolean;
    public readonly class: string = IntegralType;
    public toString(): string {
        return "∫" + this.integrand.toString()
    }
    public get hash(): string {
        return "∫" + this.integrand.toString() + this.relativeTo.toString()
    }
    public readonly isHealthy: boolean;
    public readonly isConstant: boolean;
    public toMathXML(): string {
        function wrapIfNeeded(exp: Expression): string {
            if (exp.class == SumType || exp.class == ProductType)
                return inParen(exp.toMathXML())
            return exp.toMathXML()
        }

        return "<mrow><mo>∫</mo>" + wrapIfNeeded(this.integrand) + "<mn>d</mn>" + wrapIfNeeded(this.relativeTo) + "</mrow>"
    }

}

export const IntegralType = "Integral"