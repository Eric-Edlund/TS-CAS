import { Argument } from "./Argument";
import { orderedSum } from "./ConvenientExpressions";
import { Exponent } from "./expressions/Exponent";
import { Expression } from "./expressions/Expression";
import { Integer } from "./expressions/Integer";
import { Product } from "./expressions/Product";
import { Sum } from "./expressions/Sum";
import { Graph } from "./Graph";
import { GraphMinipulator } from "./GraphMinipulator";
import { Inference } from "./Inference";
import { assert } from "./util/assert";

/**
 * Given an expression, this class can derive other
 * equivalent expressions.
 */
export class EquivalenceFinder {

    /**
     * Produces a graph containing expressions
     * equivalent to the one given with their 
     * derivations.
     * Only goes 1 inference deep.
     */
    public static findEquivalentsFor(exp: Expression): Graph {
        let out = new Graph();
        for (const rule of rulesOfInference) {
            if (rule.applies(exp)) {
                // For debuging broken rules
                //console.log(rule.name)
                out.addInferences(rule.apply(exp))
            }
        }
        return out;
    }

    public static expand(input: Graph): Graph {
        let out = new Graph();
        for (const node of input.getNodes()) {
            if (!(node instanceof Expression)) continue
            rulesOfInference.filter(r => r.applies(node)).forEach(rule => {
                out.addInferences(rule.apply(node))
            })
        }
        return out;
    }
    
}

abstract class RuleOfInference {
    /**
     * The name of this rule of inference.
     * "The Commutative Property"
     */
    public abstract readonly name: string;

    /**
     * Determines if this rule can be applied to 
     * the given expression. The apply() function
     * makes assumptions that are verified in this function,
     * so only apply if it applies.
     * 
     * Rules try to avoid producing unhealthy expressions 
     * when possible.
     * @param exp 
     */
    public abstract applies(exp: Expression): boolean;

    /**
     * Gets the set of inferences this
     * rule creates. Only called if applies() is true.
     */
    public apply(exp: Expression): Set<Inference> {
        const result = this.applyImpl(exp);
        result.forEach(e => {
            assert(e != null && e != undefined)
        });
        return result;
    }

    
    protected abstract applyImpl(exp: Expression): Set<Inference>;
}

/**
 * a + a = 2a
 * 
 * But not 
 * 1 + 1 = 2(1)
 */
class CombineCommonTermsAddition extends RuleOfInference {
    public name: string = "Combine Common Terms (Addition)";
    public applies(exp: Expression): boolean {
        if (!(exp instanceof Sum)) return false;
        if (exp.reducibleOrInt) return false;
        const sum = exp as Sum;
        if (new Set(sum.terms).size < sum.terms.length) return true;
        return false;
    }

    protected applyImpl(exp: Expression): Set<Inference> {
        let equivalentExpressions = new Set<Sum | Product>();
        const sum = exp as Sum;
        const uniqueTerms = new Set(sum.terms);
        // Suppose the sum is a + a + b

        // For every unique term in {a, b}
        for (const uniqueTerm of uniqueTerms) {
            // Avoid unhealthy expressions
            if (uniqueTerm.reducibleOrInt) continue

            let remainingTerms: Expression[] = [];
            let occurances = 0;
            // Count the number of times it occurs in the sum,
            // collecting all other terms.
            for (const t of sum.terms) {
                if (t == uniqueTerm) {
                    occurances++;
                } else {
                    remainingTerms.push(t);
                }
            }
            // If it occures multiple times, create a new sum
            // expression with that term combined
            if (occurances > 1) {
                const product = Product.of([uniqueTerm, Integer.of(occurances)])
                
                if (remainingTerms.length == 0) {
                    equivalentExpressions.add(product)
                } else {
                    remainingTerms.push(product)
                    equivalentExpressions.add(Sum.of(remainingTerms))
                }
            }
        }

        // Turn the equivalent expressions into inferences
        let inferences = new Set<Inference>()
        equivalentExpressions.forEach(e => {
            inferences.add(new Inference(sum, e, "Distributive property of multiplication"))
        })
        return inferences;
    }

}

class CombineCommonTermsMultiplication extends RuleOfInference {
    public name: string = "CombineCommonTerms (Multiplication)"
    public applies(exp: Expression): boolean {
        if (!(exp instanceof Product)) return false;
        if (exp.isReducible) return false;
        const product = exp as Product;
        if (new Set(product.factors).size < product.factors.length) return true;
        return false;
    }
    protected applyImpl(exp: Expression): Set<Inference> {
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
        let inferences = new Set<Inference>()
        equivalentExpressions.forEach(e => {
            inferences.add(new Inference(product, e, "Exponential rule for multiplying equal bases"))
        })
        
        return inferences;
    }

}

/**
 * Combine any integer terms in Sums.
 * a + 2 + 2 + 2= a + 4
 * 2 - 2 = 0
 * 
 * Combines all of them at once no matter how many terms there are.
 * 
 */
class EvaluateSums extends RuleOfInference {
    public name: string = "Addition";
    public applies(exp: Expression): boolean {
        return exp instanceof Sum
    }
    protected applyImpl(exp: Expression): Set<Inference> {
        const sum = exp as Sum
        const out = new Set<Inference>()
        const integerTerms = [...sum.terms].filter(t => t instanceof Integer)
        if (integerTerms.length == 0) {
            return out
        }
        const newInt = integerTerms.map<Integer>(e => e as Integer).reduce((a, b) => Integer.of(a.value + b.value))
        const otherTerms = [...sum.terms].filter(t => !(t instanceof Integer))

        //console.log("Simplifying via Addition " + sum.toString())
        //console.log("Found " + integerTerms.length + " integer terms")
        //integerTerms.forEach(t => console.log(t))

        let result: Inference;
        if (otherTerms.length == 0) {
            result = new Inference(sum, newInt, "Evaluated Addition")
        } else {
            result = new Inference(sum, Sum.of(otherTerms.concat(newInt)), "Evaluated Addition")
        }
        out.add(result)
        return out
    }
}

class ReduceReducibles extends RuleOfInference {
    public name: string = "Evaluate Reducibles"
    public applies(exp: Expression): boolean {
        return exp.isReducible
    }
    protected applyImpl(exp: Expression): Set<Inference> {
        return new Set<Inference>([new Inference(exp, exp.reduced, "Reduced")])
    }
    
}

/**
 * Turns sums that are unhealthy because their term order
 * is wrong into correctly ordered sums.
 */
class OrderSums extends RuleOfInference {

    public name: string = "Reorder Sums"
    public applies(exp: Expression): boolean {
        return !exp.isHealthy && exp instanceof Sum
    }
    protected applyImpl(exp: Expression): Set<Inference> {
        return new Set<Inference>([new Inference(exp, orderedSum(exp as Sum), "Reordered")])
    }
}

let rulesOfInference: RuleOfInference[] = [
    new CombineCommonTermsAddition(),
    new CombineCommonTermsMultiplication(),
    new EvaluateSums(),
    new ReduceReducibles(),
    new OrderSums(),
]