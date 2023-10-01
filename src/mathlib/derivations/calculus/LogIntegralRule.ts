import { Integral, IntegralType } from "../../../mathlib/expressions/Integral";
import { Argument } from "../../../mathlib/Argument";
import { Expression } from "../../../mathlib/expressions/Expression";
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule";
import { Fraction } from "../../../mathlib/expressions/Fraction";
import { setOf } from "../../../mathlib/util/ThingsThatShouldBeInTheStdLib";

/**
 * Integrates du/u  -> log|u|
 */
export class LogIntegralRule extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        if (exp.class !== IntegralType) return
        const i = exp as Integral

        return i.integrand instanceof Fraction
            && i.integrand.denominator === i.relativeTo
            && i.integrand.numerator.isConstant
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const i = exp as Integral

        return setOf()
    }

}