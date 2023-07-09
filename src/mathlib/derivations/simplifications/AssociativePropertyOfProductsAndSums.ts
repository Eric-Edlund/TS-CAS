import { Argument } from "../../Argument";
import { product, sum } from "../../ConvenientExpressions";
import { Expression } from "../../expressions/Expression";
import { Product } from "../../expressions/Product";
import { Sum, SumType } from "../../expressions/Sum";
import { Relationship } from "../../Relationship";
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib";
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule";

/**
 * Flattens products in products and sums in sums.
 * 
 * Only returns one simplification of an input. 
 */
export class AssociativePropertyOfProductsAndSums extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return exp instanceof Sum || exp instanceof Product
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        if (exp instanceof Sum) {
            const newTerms = exp.terms.map<Expression[]>(t => {
                if (t instanceof Sum) {
                    return [...t.terms]
                }
                return [t]
            }).flat()

            if (newTerms.length == exp.terms.length) return new Set<Argument>()

            return setOf(new Argument(setOf(exp), {
                n: exp,
                r: Relationship.Equal,
                n1: sum(...newTerms)
            }, "Associative property of addition"))
        } else {
            const newFactors = (exp as Product).factors.map<Expression[]>(t => {
                if (t instanceof Product) {
                    return [...t.factors]
                }
                return [t]
            }).flat()
            if (newFactors.length == (exp as Product).factors.length) return new Set<Argument>()

            return setOf(new Argument(setOf(exp), {
                n: exp,
                r: Relationship.Equal,
                n1: product(...newFactors)
            }, "Associative property of multiplication"))
        }
    }

}