import { Argument } from "../../Argument";
import { f, product, removeNew, sum } from "../../ConvenientExpressions";
import { Derivative } from "../../expressions/Derivative";
import { Expression } from "../../expressions/Expression";
import { Product } from "../../expressions/Product";
import { Relationship } from "../../Relationship";
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib";
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule";

/**
 * Derivatives of products
 * 
 * Only operates on derivatives of products where all factors are not constant.
 */
export class ProductRule extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return exp instanceof Derivative
        && exp.exp instanceof Product
        // Contains no constant factors
        && !exp.exp.factors.map<boolean>(f => f.isConstant).reduce((a, b) => a || b)
        // Contains no derivatives TODO: Find a better solution to loop guarding
        //&& !exp.exp.factors.map<boolean>(f => f instanceof Derivative).reduce((a, b) => a || b)
    }

    protected applyImpl(exp: Expression): Set<Argument> {

        const d = exp as Derivative
        const p = d.exp as Product
        const factors = p.factors

        // For each factor, create a product containing its derivative and the other factors
        const terms: Product[] = []
        for (let i=0; i < factors.length; i++) { // i is the factor to derivatize (what term we're on)
            const factorToDerivatize = factors[i]
            const pFactors: Expression[] = []
            for (const factor of factors) { // a is the the factor we're on
                if (factor === factorToDerivatize) pFactors.push(Derivative.of(factor, d.relativeTo))
                else pFactors.push(factor)
            }

            terms.push(product(...pFactors))
        }

        return setOf(new Argument(setOf(d), {
            n: d,
            r: Relationship.Equal,
            n1: sum(...terms) as Expression
        }, "Product Rule"))
    }

}