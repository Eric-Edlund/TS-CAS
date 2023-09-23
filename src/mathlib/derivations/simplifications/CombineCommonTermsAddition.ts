import { negative, num, orderedProduct, product, sumOrNot } from "../../ConvenientExpressions";
import { Argument } from "../../Argument";
import { Expression } from "../../expressions/Expression";
import { Product } from "../../expressions/Product";
import { Relationship } from "../../Relationship";
import { ConvergenceTarget, NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule";
import { Sum } from "../../expressions/Sum";
import { addAll, has, setOf } from "../../util/ThingsThatShouldBeInTheStdLib";
import { IntegerType } from "../../../mathlib/expressions/Integer";

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
        const args = new Set<Argument>()

        const uniqueFactors = new Set<Expression>()

        // Find all unique factors in all terms
        // Assume products have been flattened already (associative property)
        for (const term of sum.terms) {
            if (term instanceof Product) {
                addAll(uniqueFactors, ...term.factors) 
                //TODO: Capture all combinations of factors
                //TODO: Capture integer factors
                
            } else uniqueFactors.add(term)
        }
        
        // Create an argument for pulling out each factor
        for (const factor of uniqueFactors) {

            if (factor.isReducible || factor.class === IntegerType) continue

            // Figure out which terms contain it
            const relaventTerms: Product[] = []
            const otherTerms: Expression[] = []
            for (const term of sum.terms) {
                if (term instanceof Product) {
                    if (has(term.factors, factor)) 
                        relaventTerms.push(term)
                    else 
                        otherTerms.push(term)
                } else {
                    if (term === factor) 
                        relaventTerms.push(Product.of([num(1), term]))
                    else 
                        otherTerms.push(term)
                }
            }

            if (relaventTerms.length < 2) continue

            // Pull it out of those terms
            const coefficients: Expression[] = []
            for (const term of relaventTerms) {
                coefficients.push(term.without(factor))
            }
            const pulled = sumOrNot(orderedProduct(Sum.of(coefficients), factor), ...otherTerms)

            args.add(new Argument(setOf(exp), {
                n: exp,
                r: Relationship.Equal,
                n1: pulled
            }, "Combine like terms", RULE_ID))
        }

        return args
    }

    public get convergenceType(): ConvergenceTarget {
        return ConvergenceTarget.Factored
    }
}

export const RULE_ID = "CCTerms Add"