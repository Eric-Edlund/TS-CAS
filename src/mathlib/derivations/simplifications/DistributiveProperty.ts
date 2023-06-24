import { Argument } from "../../Argument";
import { productOrNot, product as productOf, remove, sum } from "../../ConvenientExpressions";
import { Expression } from "../../expressions/Expression";
import { Product } from "../../expressions/Product";
import { Sum } from "../../expressions/Sum";
import { Relationship } from "../../Relationship";
import { assert } from "../../util/assert";
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib";
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule";

/**
 * Distributes multiplication over addition.
 */
export class DistributiveProperty extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return exp instanceof Product;
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const product = exp as Product;

        const nonSums = product.factors.filter(f => !(f instanceof Sum))
        if (nonSums.length == 0) return setOf()
        // There is at least one non-sum factor

        const firstSum = product.factors.filter(f => f instanceof Sum)[0] as Sum
        if (firstSum == undefined) return setOf()
        // There is at least one sum

        console.log("In: " + product.toString())

        const remainingSums = product.factors.filter(f => f instanceof Sum)
        remove(remainingSums, firstSum)

        console.log("Remaining Sums: " + remainingSums.length)

        const toDistribute = productOrNot(...nonSums)

        const distributed = sum(...firstSum.terms.map(t => productOf(toDistribute, t)))

        const result = productOrNot(
            distributed,
            ...remainingSums
        )

        console.log("Out: " + result.toString())

        return setOf(new Argument(setOf(exp), {
            n: exp,
            r: Relationship.Equal,
            n1: result
        }, `Distribute ${productOrNot(...nonSums).toUnambigiousString()}`))
    }
}