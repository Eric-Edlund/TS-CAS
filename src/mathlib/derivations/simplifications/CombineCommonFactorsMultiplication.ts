import { Argument } from "../../Argument";
import { num, sum } from "../../ConvenientExpressions";
import { Exponent } from "../../expressions/Exponent";
import { Expression } from "../../expressions/Expression";
import { Integer } from "../../expressions/Integer";
import { factorOrder, Product } from "../../expressions/Product";
import { orderTerms } from "../../expressions/Sum";
import { Relationship } from "../../Relationship";
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib";
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule";



/**
 * Combines like factors and exponents with like bases.
 */
export class CombineCommonFactorsMultiplication extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return exp instanceof Product
            && !exp.isReducible
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const product = exp as Product;


        // Find all the bases/factors in the product
        const bases = new Set<Expression>()
        for (const factor of product.factors) {
            if (factor instanceof Exponent) 
                bases.add(factor.base)
            else bases.add(factor)
        }


        const equivalentExpressions = new Set<Product | Exponent>();
        // For every unique factor
        for (const base of bases) {
            let powerTerms: Expression[] = []
            const remainingFactors: Expression[] = [];
            // Count the number of times it occurs in the product
            // Collect the other factors in a list
            for (const f of product.factors) {
                if (f instanceof Exponent && f.base === base) {
                    powerTerms.push(f.power)
                } else if (f === base) {
                    powerTerms.push(num(1));
                } else {
                    remainingFactors.push(f);
                }
            }

            // Order the power terms correctly
            powerTerms = orderTerms(...powerTerms)

            // If the base only occured once, nothing to simplify
            if (powerTerms.length == 1) continue;

            // Create a new exponent that combines the terms
            const exponent = Exponent.of(base, sum(...powerTerms))
            
            // If there are no other factors, we're done
            if (remainingFactors.length == 0) {
                equivalentExpressions.add(exponent)
                continue;
            }
            
            // Insert the new exponent at the correct place in the new product
            function insertCorrectly(arr: Expression[], el: Expression): void {
                // Pick index
                let index = 0
                for (let i=0; i < arr.length; i++) {
                    if (factorOrder(el, arr[i]) > 0) {
                        index = i + 1
                        break
                    }
                }

                arr.splice(index, 0, el)
            }
            insertCorrectly(remainingFactors, exponent)
            equivalentExpressions.add(Product.of(remainingFactors))
        }

        // Make arguments for each equivalent expression
        const args = new Set<Argument>()
        equivalentExpressions.forEach(e => {
            args.add(new Argument(setOf(product), {
                n: product,
                r: Relationship.Equal,
                n1: e,
            }, "Combine common factors multiplication", RULE_ID))
        })
        
        return args;
    }

}

export const RULE_ID = "CCFactors Mult"