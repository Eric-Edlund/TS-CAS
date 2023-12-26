import { Argument } from "../../Argument"
import { Exponent } from "../../expressions/Exponent"
import { Expression } from "../../expressions/Expression"
import { Integer } from "../../expressions/Integer"
import { Relationship } from "../../Relationship"
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib"
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule"

/**
 * Anything to the first is just that thing.
 * Turns any exponent with a power of 1 to that thing.
 */
export class ExponentialIdentity extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return (
            exp instanceof Exponent &&
            exp.power instanceof Integer &&
            exp.power.value == 1
        )
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const e = exp as Exponent
        return setOf(
            new Argument(
                setOf(e),
                {
                    n: e,
                    r: Relationship.Equal,
                    n1: e.base
                },
                "Exponential Identity is 1",
                RULE_ID
            )
        )
    }
}

export const RULE_ID = "Exponential Identity"
