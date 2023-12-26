import { Argument } from "../../Argument"
import { num } from "../../ConvenientExpressions"
import { Exponent } from "../../expressions/Exponent"
import { Expression } from "../../expressions/Expression"
import { Integer } from "../../expressions/Integer"
import { Relationship } from "../../Relationship"
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib"
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule"

export class ExponentToZero extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return (
            exp instanceof Exponent &&
            exp.power instanceof Integer &&
            exp.power.value == 0
        )
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        return setOf(
            new Argument(
                setOf(exp),
                {
                    n: exp,
                    r: Relationship.Equal,
                    n1: num(1)
                },
                "Anything to zero is zero",
                RULE_ID
            )
        )
    }
}

export const RULE_ID = "Pow of Zero"
