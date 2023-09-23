import { Relationship } from "../../../mathlib/Relationship";
import { Argument } from "../../../mathlib/Argument";
import { Expression } from "../../../mathlib/expressions/Expression";
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule"
import { num } from "../../../mathlib/ConvenientExpressions";
import { setOf } from "../../../mathlib/util/ThingsThatShouldBeInTheStdLib";
import { Derivative, DerivativeType } from "../../../mathlib/expressions/Derivative";

export class ConstantDerivaties extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return exp.class === DerivativeType && (exp as Derivative).exp.isConstant
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        return setOf(new Argument(setOf(exp), {
            n: exp,
            r: Relationship.Equal,
            n1: num(0)
        }, "Derivative of anything is zero", RULE_ID))
    }

}

export const RULE_ID: string = "Constant Derivative"