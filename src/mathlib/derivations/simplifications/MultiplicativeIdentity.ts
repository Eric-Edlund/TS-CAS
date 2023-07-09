import { Argument } from "../../Argument";
import { num, productOrNot } from "../../ConvenientExpressions";
import { Expression } from "../../expressions/Expression";
import { Integer } from "../../expressions/Integer";
import { Product } from "../../expressions/Product";
import { Relationship } from "../../Relationship";
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib";
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule";

/**
 * 1x = x
 * 1*1x = 1
 */
export class MultiplicativeIdentity extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return exp instanceof Product
            && new Set(exp.factors).has(num(1))
            && !exp.isNegation
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const p = exp as Product
        const newFactors: Expression[] = []
        for (const factor of p.factors) {
            if (factor instanceof Integer && factor.value == 1) continue
            newFactors.push(factor)
        }

        if (newFactors.length == 0) newFactors.push(num(1))

        return setOf(new Argument(setOf(exp), {
            n: exp,
            r: Relationship.Equal,
            n1: productOrNot(...newFactors)
        }, "Multiplicative Identity", RULE_ID))
    }

}

export const RULE_ID = "Mult Identity"