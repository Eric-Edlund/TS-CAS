import { Argument } from "../../Argument";
import { product } from "../../ConvenientExpressions";
import { Exponent } from "../../expressions/Exponent";
import { Expression } from "../../expressions/Expression";
import { Relationship } from "../../Relationship";
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib";
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule";

export class MultiplyExponentPowers extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return exp instanceof Exponent
            && exp.base instanceof Exponent

    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const outer = exp as Exponent
        const inner = outer.base as Exponent

        return setOf(new Argument(setOf(exp), {
            n: exp,
            r: Relationship.Equal,
            n1: Exponent.of(inner.base, product(inner.power, outer.power))
        }, "Exponents to exponents multiply"))
    }

}