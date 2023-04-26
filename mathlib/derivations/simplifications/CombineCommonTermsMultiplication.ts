import { Argument } from "../../Argument";
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

        // For every unique factor {a, b}
        for (const uniqueFactor of uniqueFactors) {
            let occurances = 0;
            let remainingFactors: Expression[] = [];
            // Count the number of times it occurs in the product,
            // collecting all other factors.
            for (const t of product.factors) {
                if (t == uniqueFactor) {
                    occurances++;
                } else {
                    remainingFactors.push(t);
                }
            }
            // If it occures multiple times, create a new sum
            // expression with that term combined
            if (occurances > 1) {
                const exponent = Exponent.of(uniqueFactor, Integer.of(occurances))
                
                if (remainingFactors.length == 0) {
                    equivalentExpressions.add(exponent)
                } else {
                    remainingFactors.push(product)
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
            }, "Exponential rule for multiplying equal bases"))
        })
        
        return inferences;
    }

}
