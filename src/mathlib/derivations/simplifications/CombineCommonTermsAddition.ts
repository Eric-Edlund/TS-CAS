import { negative, num, orderedProduct, product, sumOrNot } from "../../ConvenientExpressions";
import { Argument } from "../../Argument";
import { Expression } from "../../expressions/Expression";
import { Product } from "../../expressions/Product";
import { Relationship } from "../../Relationship";
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule";
import { Sum } from "../../expressions/Sum";
import { addAll, has, setOf } from "../../util/ThingsThatShouldBeInTheStdLib";

/**
 * a + a = 2a
 * 2a - a = a  (this means we have to check for negations)
 * 
 * (bc)a + 7a = (7 + bc)a
 * 
 * But not 
 * 1 + 1 = 2(1)
 */
export class CombineCommonTermsAddition extends NoContextExpressionSimplificationRule {

    protected appliesImpl(exp: Expression): boolean {
        return exp instanceof Sum
            && !exp.isReducible
    }

    protected applyImpl(exp: Expression): Set<Argument> {
        const sum = exp as Sum;
        const uniqueFactors = new Set<Expression>()

        const args = new Set<Argument>()

        // Find all unique factors in all terms
        // Don't consider the -1 in negations
        // Consider the factors of negated products separately
        for (const term of sum.terms) {
            if (term instanceof Product) {
                if (term.isNegation)
                    if (term.negation instanceof Product) {
                        addAll(uniqueFactors, ...term.negation.factors)
                    } else uniqueFactors.add(term.negation)
                else addAll(uniqueFactors, ...term.factors)//TODO: Capture all combinations of factors
            } else uniqueFactors.add(term)
        }
        
        // Create an argument for pulling out each factor
        for (const factor of uniqueFactors) {
            // Don't waste time with unhealthy factors
            if (factor.isReducibleOrInt) continue

            // Figure out which terms contain it
            const relaventTerms: Product[] = []
            const otherTerms: Expression[] = []
            for (const term of sum.terms) {
                if (term instanceof Product) {
                    if (term.isNegation) {
                        // If it's a negation, check if the negation has it
                        if (term.negation === factor) relaventTerms.push(term)
                        else if (term.negation instanceof Product) {
                            if (has(term.negation.factors, factor)) relaventTerms.push(term)
                            else otherTerms.push(term)
                        }
                    } else if (has(term.factors, factor))
                        relaventTerms.push(term)
                    else otherTerms.push(term)
                } else {
                    if (term === factor) relaventTerms.push(Product.of([num(1), term]))
                    else otherTerms.push(term)
                }
            }

            // Pull it out of those terms
            const coefficients: Expression[] = []
            if (relaventTerms.length < 2) continue
            for (const term of relaventTerms) {
                if (term.isNegation) {
                    if (term.negation instanceof Product) {
                        coefficients.push(negative(term.negation.without(factor)))
                    } else
                        coefficients.push(negative(num(1)))
                } else {
                    coefficients.push(term.without(factor))
                }
            }
            const pulled = sumOrNot(orderedProduct(Sum.of(coefficients), factor), ...otherTerms)

            args.add(new Argument(setOf(exp), {
                n: exp,
                r: Relationship.Equal,
                n1: pulled
            }, "Combine like terms"))
        }

        return args
    }
}
