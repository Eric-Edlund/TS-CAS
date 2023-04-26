import { num, orderedProduct } from "../../ConvenientExpressions";
import { Argument } from "../../Argument";
import { Expression } from "../../expressions/Expression";
import { Product } from "../../expressions/Product";
import { Relationship } from "../../Relationship";
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule";
import { Sum } from "../../expressions/Sum";
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib";

/**
 * a + a = 2a
 * 
 * But not 
 * 1 + 1 = 2(1)
 */
export class CombineCommonTermsAddition extends NoContextExpressionSimplificationRule {

    protected appliesImpl(exp: Expression): boolean {
        if (!(exp instanceof Sum)) return false;
        if (exp.reducibleOrInt) return false;
        const sum = exp as Sum;
        if (new Set(sum.terms).size < sum.terms.length) return true;
        return false;
    }

    protected applyImpl(exp: Expression): Set<Argument> {
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
                const product = orderedProduct(...[num(occurances), uniqueTerm])
                
                if (remainingTerms.length == 0) {
                    equivalentExpressions.add(product)
                } else {
                    remainingTerms.push(product)
                    equivalentExpressions.add(Sum.of(remainingTerms))
                }
            }
        }

        // Turn the equivalent expressions into inferences
        let inferences = new Set<Argument>()
        equivalentExpressions.forEach(e => {
            inferences.add(new Argument(setOf(sum), {
                n: sum,
                r: Relationship.Equal,
                n1: e,
            }, "Distributive property of multiplication"))
        })
        return inferences;
    }
}
