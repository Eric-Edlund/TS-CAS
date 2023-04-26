import { Argument } from "../../Argument";
import { num } from "../../ConvenientExpressions";
import { Exponent } from "../../expressions/Exponent";
import { Expression } from "../../expressions/Expression";
import { Integer } from "../../expressions/Integer";
import { Product } from "../../expressions/Product";
import { Relationship } from "../../Relationship";
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib";
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule";




export class CombineCommonTermsMultiplication extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        if (!(exp instanceof Product)) return false;
        if (exp.isReducible) return false;
        const product = exp as Product;
        if (new Set(product.factors).size < product.factors.length) return true;
        return false;
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        let equivalentExpressions = new Set<Product | Exponent>();
        const product = exp as Product;
        const uniqueFactors = new Set(product.factors);
        // Suppose the product is a * a * b

        // For every unique factor
        for (const uniqueFactor of uniqueFactors) {
            let occurances = 0;
            let remainingFactors: Expression[] = [];
            // Count the number of times it occurs in the product
            // Collect the other factors in a list
            for (const f of product.factors) {
                if (f === uniqueFactor) {
                    occurances++;
                } else {
                    remainingFactors.push(f);
                }
            }
            // If it occured multiple times, create a new exponent
            // To combine the repeats
            if (occurances > 1) {
                const exponent = Exponent.of(uniqueFactor, num(occurances))
                
                if (remainingFactors.length == 0) {
                    equivalentExpressions.add(exponent)
                } else {
                    remainingFactors.push(exponent)
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
