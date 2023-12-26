import { Integral, IntegralType } from "../../../mathlib/expressions/Integral"
import { Argument } from "../../../mathlib/Argument"
import { Expression } from "../../../mathlib/expressions/Expression"
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule"
import { Exponent, ExponentType } from "../../../mathlib/expressions/Exponent"
import { Relationship } from "../../../mathlib/Relationship"
import { Fraction } from "../../../mathlib/expressions/Fraction"
import { setOf } from "../../../mathlib/util/ThingsThatShouldBeInTheStdLib"
import { negative, num, sum } from "../../../mathlib/ConvenientExpressions"

export class ReversePowerRule extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        if (exp.class !== IntegralType) return false

        const i = exp as Integral

        return (
            (i.integrand instanceof Exponent &&
                i.integrand.base === i.relativeTo &&
                i.integrand.power.isConstant) ||
            i.integrand === i.relativeTo
        )
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const i = exp as Integral
        const integrand = i.integrand

        let result: Expression

        if (integrand instanceof Exponent) {
            result = Fraction.of(
                Exponent.of(integrand.base, sum(integrand.power, num(1))),
                sum(integrand.power, num(1))
            )
        } else {
            result = Exponent.of(integrand, num(2))
        }

        return setOf(
            new Argument(
                setOf(exp),
                {
                    n: exp,
                    r: Relationship.Equal,
                    n1: result
                },
                "Reverse power rule",
                RULE_ID
            )
        )
    }
}

export const RULE_ID = "Reverse Power Rule"
