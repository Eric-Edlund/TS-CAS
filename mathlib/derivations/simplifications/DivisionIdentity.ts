import { Argument } from "../../Argument";
import { num } from "../../ConvenientExpressions";
import { Expression } from "../../expressions/Expression";
import { Fraction } from "../../expressions/Fraction";
import { Integer } from "../../expressions/Integer";
import { Relationship } from "../../Relationship";
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib";
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule";

/**
 * Anything divided by 1 is the numerator
 */
export class DivisionIdentity extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return exp instanceof Fraction
            && exp.denominator instanceof Integer
            && exp.denominator.value == 1
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const frac = exp as Fraction
        return setOf(new Argument(setOf(frac), {
            n: frac,
            r: Relationship.Equal,
            n1: Fraction.of(frac.numerator, num(1)),
        }, "Division identity is 1"))
    }

}