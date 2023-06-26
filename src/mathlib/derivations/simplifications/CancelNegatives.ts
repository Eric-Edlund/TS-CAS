import { Argument } from "../../Argument";
import { negative } from "../../ConvenientExpressions";
import { Expression } from "../../expressions/Expression";
import { Product } from "../../expressions/Product";
import { Relationship } from "../../Relationship";
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib";
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule";
import { product as productOf } from "../../ConvenientExpressions";


/**
 * Makes sure a product doesn't contain any negations.
 * The product is either a negation or not.
 */
export class CancelNegatives extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return exp instanceof Product
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const product = exp as Product
        const negatedFactors: Expression[] = []
        const others: Expression[] = []

        for (const f of product.factors) {
            if (f instanceof Product && f.isNegation) {
                negatedFactors.push(f.negation)
            } else {
                others.push(f)
            }
        }

        const isNegation = product.isNegation

        const negations = negatedFactors.length + (isNegation ? 1 : 0)

        if (negations < 2) return setOf()

        const resultIsNegative = negations % 2 == 1
        const result = productOf(...negatedFactors, ...others)
        const negatedResult = resultIsNegative ? negative(result) : result

        return setOf(new Argument(setOf(exp), {
            n: exp,
            r: Relationship.Equal,
            n1: negatedResult
        }, "Cancel negatives"))
    }
}
