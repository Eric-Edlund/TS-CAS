import { Argument } from "../../Argument";
import { num, sum } from "../../ConvenientExpressions";
import { Exponent } from "../../expressions/Exponent";
import { Expression } from "../../expressions/Expression";
import { Integer } from "../../expressions/Integer";
import { factorOrder, Product } from "../../expressions/Product";
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
        const uniqueBases = new Set<Expression>()
        for (const factor of product.factors) {
            if (factor instanceof Exponent) 
                uniqueBases.add(factor.base)
            else uniqueBases.add(factor)
        }


        const equivalentExpressions = new Set<Product | Exponent>();
        // For every unique factor
        for (const base of uniqueBases) {
            const powerTerms: Expression[] = []
            let remainingFactors: Expression[] = [];
            // Count the number of times it occurs in the product
            // Collect the other factors in a list
            for (const f of product.factors) {
                if (f instanceof Exponent) {
                    if (f.base === base)
                        powerTerms.push(f.power)
                } else {
                    if (f === base) {
                        powerTerms.push(num(1));
                    } else {
                        remainingFactors.push(f);
                    }
                }
            }

            // If it occured multiple times, create a new exponent
            // To combine the repeats
            if (powerTerms.length > 1) {
                const exponent = Exponent.of(base, sum(...powerTerms))
                
                if (remainingFactors.length == 0) {
                    equivalentExpressions.add(exponent)
                } else {
                    // Insert the new exponent at the correct place in the new product
                    function insertCorrectly(arr: Expression[], el: Expression): void {
                        // Pick index
                        let index = 0
                        for (let i=0; i < arr.length; i++) {
                            if (factorOrder(el, arr[i]) >= 0) {
                                index = i + 1
                                break
                            }
                        }

                        arr.splice(index, 0, el)
                    }
                    insertCorrectly(remainingFactors, exponent)
                    equivalentExpressions.add(Product.of(remainingFactors))
                }
            }
        }

        // Turn the equivalent expressions into inferences
        let inferences = new Set<Argument>()
        equivalentExpressions.forEach(e => {
            inferences.add(new Argument(setOf(product), {
                n: product,
                r: Relationship.Equal,
                n1: e,
            }, "Combine common factors multiplication"))
        })
        
        return inferences;
    }

}
