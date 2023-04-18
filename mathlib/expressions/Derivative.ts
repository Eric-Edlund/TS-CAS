import { Expression } from "./Expression";
import { Integer } from "./Integer";
import { Product, ProductType } from "./Product";
import { SumType } from "./Sum";

/**
 * 
 */
export class Derivative extends Expression {
    public static of(exp: Expression, relativeTo: Expression): Derivative {
        if (!this.instances.has(exp.hash))
            this.instances.set(exp.hash + relativeTo.hash, new Derivative(exp, relativeTo))
        return this.instances.get(exp.hash + relativeTo.hash)!
    }
    private static instances: Map<string, Derivative> = new Map();
    private constructor(exp: Expression, relativeTo: Expression) {
        super()
        this.exp = exp
        this.relativeTo = relativeTo
        this.isReducible = false //TODO: Determine if a derivative is reducible
        this.isConstant = false // TODO: Determine if a derivative is constant

        let isHealthy = true
        if (exp.isConstant) isHealthy = false
        if (exp instanceof Product) {
            new Set(exp.factors).forEach(e => {
                if (e instanceof Integer || e instanceof Product && e.isNegation && e.negation) isHealthy = false
                //TODO: There are a lot more possiblities than this
            })
        }
        this.isHealthy = isHealthy
    }

    public readonly exp: Expression;
    public readonly relativeTo: Expression;

    public get reduced(): Integer {
        throw new Error("Method not implemented. Not sure if derivatives should be reducible.");
    }
    public readonly isReducible: boolean;
    public readonly class: string = DerivativeType;
    public toString(): string {
        return "d/d" + this.relativeTo.toString() + "(" + this.exp.toString() + ")"
    }
    public get hash(): string {
        return this.class + this.exp.hash + this.relativeTo.hash
    }
    /**
     * 1. exp isn't a constant
     * 2. If exp is product, it contains no constants.
     */
    public readonly isHealthy: boolean;
    public toMathXML(): string {
        function wrapIfNeeded(exp: Expression): string {
            if (exp.class == SumType || exp.class == ProductType)
                return "<mo>(</mo>" + exp.toMathXML() + "<mo>)</mo>"
            return exp.toMathXML()
        }
        return "<mfrac><mn>d</mn><mrow><mn>d</mn>" + wrapIfNeeded(this.relativeTo) + "</mrow></mfrac>" + wrapIfNeeded(this.exp)
    }
    public isConstant: boolean;
}

export const DerivativeType = "Derivative"