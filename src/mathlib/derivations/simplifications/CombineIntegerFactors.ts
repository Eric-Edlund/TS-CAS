import { Argument } from "../../Argument";
import { num, productOrNot } from "../../ConvenientExpressions";
import { Expression } from "../../expressions/Expression";
import { Integer } from "../../expressions/Integer";
import { Product } from "../../expressions/Product";
import { Relationship } from "../../Relationship";
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib";
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule";

/**
 * Products with several integer terms are simplified to only include 1
 */
export class CombineIntegerFactors extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return exp instanceof Product
        && !exp.isNegation
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const p = exp as Product

        const remainingFactors: Expression[] = []
        let coefficient = 1
        for (const f of p.factors) {
            if (f instanceof Integer) {
                coefficient *= f.value
            } else  
                remainingFactors.push(f)
        }

        if (p.factors.length - remainingFactors.length < 2) return new Set<Argument>()

        return setOf(new Argument(setOf(exp), {
            n: exp,
            r: Relationship.Equal,
            n1: productOrNot(num(coefficient), ...remainingFactors)
        }, "Multiply integer terms"))
    }

}