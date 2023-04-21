import { orderedProduct, orderedSum, product, sum, sumIntuitive } from "../../ConvenientExpressions";
import { Exponent, ExponentType } from "../../expressions/Exponent";
import { Expression } from "../../expressions/Expression";
import { Integer } from "../../expressions/Integer";
import { Product, ProductType } from "../../expressions/Product";
import { Sum, SumType } from "../../expressions/Sum";
import { Variable } from "../../expressions/Variable";
import { Graph } from "../../Graph";
import { Inference } from "../../Inference";
import { assert } from "../../util/assert";


/**
 * Given an expression, this class can derive other
 * equivalent expressions.
 */
export class Equivalence {

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
                out.addInferences(rule.apply(exp))
            }
        }
        return out;
    }

    /**
     * Produces a graph that expands from the input.
     * The union of the result and the input is what
     * you want to use.
     * 
     * Applies rules of inference to find equivalents for all
     * expressions in the input graph. Recursively finds equivalents
     * for child expressions. Only goes one inference deep.
     * @param input 
     * @returns 
     */
    public static expand(input: Graph): Graph {
        let out = new Graph();
        const base = [...input.getNodes()].filter(node => node instanceof Expression)

        for (const node of base) {
            if (!(node instanceof Expression)) continue
            rulesOfInference.filter(r => r.applies(node)).forEach(rule => {
                out.addInferences(rule.apply(node))
            })
        }
        return out;
    }

    /**
     * Find equivalents recursively, return all equivalents
     * with depth = 1.
     * @param input 
     * @returns 
     */
    public static expandExperimental(input: Graph): Graph {
        const base = [...input.getNodes()].filter(node => node instanceof Expression)
        const inferred: Inference[] = base.map(exp => {
            return equiv(exp as Expression)
        }).flat()
        const out = new Graph()
        out.addInferences(inferred)
        return out
    }
}

/**
 * Finds equivalents of the given expression
 * using rules of inference. Not recursive.
 * @param exp 
 */
function directEquivalents(exp: Expression): Set<Inference> {
    const out: Set<Inference> = new Set()
    rulesOfInference.filter(r => r.applies(exp)).forEach(rule => {
        rule.apply(exp).forEach(i => {
            out.add(i)
        })
    })
    return out
}

/**
 * Gets all equivalents of the given expression
 * checking it's children's equivalents.
 * 
 * (a + a) + (b + b)
 * -> (2a) + (b + b) with inference a + a = 2a
 * @param exp 
 * @returns Array of inferences to equivalent expressions.
 */
function equiv(exp: Expression): Inference[] {
    if (exp instanceof Variable || exp instanceof Integer) return []
    else switch(exp.class) {
        case SumType: return sumEquiv(exp as Sum)
        case ProductType: return productEquiv(exp as Product)
        case ExponentType: return exponentEquiv(exp as Exponent)
        default: throw new Error("Not implemented " + exp.class)
    }
}

/**
 * Gets all equivalents of the given expression
 * by swapping out it's children individually.
 * 
 * (a + a) + (b + b)
 * -> (2a) + (b + b) with inference a + a = 2a
 * @param exp 
 * @returns Array of inferences to equivalent expressions.
 */
function sumEquiv(exp: Sum): Inference[] {
    const equivalentSums: Set<Inference> = new Set()

    // Add top level equivalents
    directEquivalents(exp).forEach(inf => {
        equivalentSums.add(inf)
    })

    // Find equivalents for each term
    for (let i = 0; i < exp.terms.length; i++) {
        const term = exp.terms[i]

        // Substitute term for each equivalent
        equiv(term).forEach(alt => {
            equivalentSums.add(new Inference(exp, swap(exp, i, alt.second as Expression), alt.explanation))
        })

    }

    function swap(s: Sum, i: number, e: Expression): Sum {
        const terms = [...s.terms]
        terms[i] = e
        return sum(...terms)
    }

    return [...equivalentSums]
}

function productEquiv(exp: Product): Inference[] {
    const equivalentProducts: Set<Inference> = new Set()

    // Add top level equivalents
    directEquivalents(exp).forEach(inf => {
        equivalentProducts.add(inf)
    })

    // Find equivalents for each term
    for (let i = 0; i < exp.factors.length; i++) {
        const factor = exp.factors[i]

        // Substitute term for each equivalent
        equiv(factor).forEach(alt => {
            equivalentProducts.add(new Inference(exp, swap(exp, i, alt.second as Expression), alt.explanation))
        })
    }

    function swap(s: Product, i: number, e: Expression): Product {
        const terms = [...s.factors]
        terms[i] = e
        return product(...terms)
    }

    return [...equivalentProducts]
}

function exponentEquiv(exp: Exponent): Inference[] {
    const equivalents: Set<Inference> = new Set()

    // Add top level equivalents
    directEquivalents(exp).forEach(inf => {
        equivalents.add(inf)
    })

    equiv(exp.base).forEach(alt => {
        equivalents.add(new Inference(exp, Exponent.of(alt.second as Expression, exp.power), alt.explanation))
    })
    equiv(exp.power).forEach(alt => {
        equivalents.add(new Inference(exp, Exponent.of(exp.base, alt.second as Expression), alt.explanation))
    })

    return [...equivalents]
}

/**
 * Produces an equivalent expression using only the given expression's
 * direct children. Only use reflection on the given expression, 
 * not it's children. The rules will be recursively applied to the children automatically.
 */
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
                const product = orderedProduct(...[Integer.of(occurances), uniqueTerm])
                
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
