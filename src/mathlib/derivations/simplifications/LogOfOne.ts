import { Argument } from "../../Argument"
import { num } from "../../ConvenientExpressions"
import { Expression } from "../../expressions/Expression"
import { Integer } from "../../expressions/Integer"
import { Logarithm } from "../../expressions/Logarithm"
import { Relationship } from "../../Relationship"
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib"
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule"

export class LogOfOne extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return (
            exp instanceof Logarithm &&
            exp.exp instanceof Integer &&
            exp.exp.value === 1
        )
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        return setOf(
            new Argument(
                setOf(exp),
                {
                    n: exp,
                    r: Relationship.Equal,
                    n1: num(0)
                },
                "Log in any base of 1 is 0",
                RULE_ID
            )
        )
    }
}

export const RULE_ID = "Log of 1"
