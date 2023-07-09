import { Argument } from "../../Argument";
import { Expression } from "../../expressions/Expression";
import { Integral } from "../../expressions/Integral";
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule";

export class USubstitution extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return false;//exp instanceof Integral
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        throw new Error("Not implemented")
    }

}

export const RULE_ID = "USubstitution"