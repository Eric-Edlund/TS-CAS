import { Argument } from "../../Argument";
import { product as productOf, productAndNotTimesOne, remove } from "../../ConvenientExpressions";
import { Expression } from "../../expressions/Expression";
import { Fraction } from "../../expressions/Fraction";
import { Product } from "../../expressions/Product";
import { Relationship } from "../../Relationship";
import { assert } from "../../util/assert";
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib";
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule";


/**
 * Simplifies products containing fractions by moving the
 * parts of the product into the numerator of the first fraction.
 */
export class CombineProductsAndFractions extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return exp instanceof Product
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const product = exp as Product;
        // All products have at least 2 factors

        const firstFraction: Fraction | undefined = product.factors.filter(f => f instanceof Fraction)[0] as Fraction
        if (firstFraction === undefined) return setOf()
        // At least one of those is a fraction

        const nonFractionFactors = product.factors.filter(f => !(f instanceof Fraction))
        if (nonFractionFactors.length == 0) return setOf()
        // At least one of those is not a fraction

        let result: Expression;
        // Fraction and non-fraction factors partition the set of factors
        if (product.factors.length - nonFractionFactors.length == 1) {
            // There is exactly one fraction factor
            // All the factors will be combined into one factor
            result = Fraction.of(
                    productOf(firstFraction.numerator, ...nonFractionFactors),
                    firstFraction.denominator
                )
        } else {
            // There are multiple fractions
            const remainingFractionFactors = product.factors.filter(f => f instanceof Fraction)
            remove(remainingFractionFactors, firstFraction)
            
            assert(remainingFractionFactors.length > 0)

            result = productOf(
                Fraction.of(
                    productAndNotTimesOne(firstFraction.numerator, ...nonFractionFactors),
                    firstFraction.denominator
                ),
                ...remainingFractionFactors
            )
        }

        return setOf(new Argument(setOf(exp), {
            n: exp,
            r: Relationship.Equal,
            n1: result
        }, "Combine products into fraction", RULE_ID))
    }

}

export const RULE_ID = "Prod=>Frac"