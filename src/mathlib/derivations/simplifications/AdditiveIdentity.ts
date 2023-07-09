import { Argument } from "../../Argument";
import { sumOrNot } from "../../ConvenientExpressions";
import { Expression } from "../../expressions/Expression";
import { Integer } from "../../expressions/Integer";
import { Sum } from "../../expressions/Sum";
import { Relationship } from "../../Relationship";
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib";
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule";

/**
 * Anything plus 0 is anything
 */
export class AdditiveIdentity extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return exp instanceof Sum
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const termsWithoutZero = (exp as Sum).terms.filter(t => !(t instanceof Integer && t.value == 0))
        if (termsWithoutZero.length == (exp as Sum).terms.length) return setOf()

        return setOf(new Argument(setOf(exp), {
            n: exp,
            r: Relationship.Equal,
            n1: sumOrNot(...termsWithoutZero)
        }, "Additive identity", RULE_ID))
    }

}

export const RULE_ID = "Additive Identity"