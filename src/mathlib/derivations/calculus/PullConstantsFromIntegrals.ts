import { Argument } from "../../../mathlib/Argument"
import { Expression } from "../../../mathlib/expressions/Expression"
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule"
import { Integral, IntegralType } from "../../../mathlib/expressions/Integral"
import { Product } from "../../../mathlib/expressions/Product"
import {
    product,
    productOrNot,
    productOrOne
} from "../../../mathlib/ConvenientExpressions"
import { Relationship } from "../../../mathlib/Relationship"
import { setOf } from "../../../mathlib/util/ThingsThatShouldBeInTheStdLib"

export class PullConstantsFromIntegrals extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        if (exp.class !== IntegralType) return false
        const i = exp as Integral

        return (
            i.integrand instanceof Product &&
            i.integrand.factors.some(f => {
                return f.isConstant
            }) &&
            i.integrand.factors.some(f => !f.isConstant)
        )
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const i = exp as Integral
        const integrand = i.integrand as Product

        const pulledFactors = productOrNot(
            ...integrand.factors.filter(f => f.isConstant)
        )
        const newIntegrand = productOrOne(
            ...integrand.factors.filter(f => !f.isConstant)
        )

        const result = product(
            pulledFactors,
            Integral.of(newIntegrand, i.relativeTo)
        )

        return setOf(
            new Argument(
                setOf(exp),
                {
                    n: exp,
                    r: Relationship.Equal,
                    n1: result
                },
                "Pull constants from integral",
                RULE_ID
            )
        )
    }
}

export const RULE_ID = "ConstantsFromIntegrals"
