import { inParen } from "../util/MathMLHelpers";
import { VariableValueMap } from "../VariableValueMap";
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
        this.isConstant = false
        this.childCount = 2 + integrand.childCount + relativeTo.childCount
    }
    public readonly integrand: Expression
    public readonly relativeTo: Expression

    public readonly isReducible: boolean;
    public readonly class: string = IntegralType;
    public toString(): string {
        return "∫" + this.integrand.toString()
    }
    public toUnambigiousString(): string {
        return "∫(" + this.integrand.toUnambigiousString() + ")"+this.relativeTo.toUnambigiousString()
    }
    public get hash(): string {
        return "∫" + this.integrand.toString() + this.relativeTo.toString()
    }
    public readonly isConstant: boolean;
    public toMathXML(): string {
        function wrapIfNeeded(exp: Expression): string {
            if (exp.class == SumType || exp.class == ProductType)
                return inParen(exp.toMathXML())
            return exp.toMathXML()
        }

        return "<mrow><mo>∫</mo>" + wrapIfNeeded(this.integrand) + "<mn>d</mn>" + wrapIfNeeded(this.relativeTo) + "</mrow>"
    }

    public evaluate(values: VariableValueMap): number {
        // Nah fuck this bro
        return NaN;
    }

    public readonly childCount: number;

}

export const IntegralType = "Integral"