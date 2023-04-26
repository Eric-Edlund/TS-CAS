import { Argument } from "../../Argument";
import { num, product } from "../../ConvenientExpressions";
import { Derivative, DerivativeType } from "../../expressions/Derivative";
import { Exponent, ExponentType } from "../../expressions/Exponent";
import { Expression } from "../../expressions/Expression";
import { Integer } from "../../expressions/Integer";
import { ProductType } from "../../expressions/Product";
import { Relationship } from "../../Relationship";
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib";
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule";

/**
 * Derives using the power rule
 */
export class PowerRule extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return exp instanceof Derivative 
        && exp.exp instanceof Exponent
        && exp.exp.base === exp.relativeTo
        && exp.exp.power.isConstant
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const d = exp as Derivative
        const exponent = d.exp as Exponent
        const result = product(exponent.power as Integer, Exponent.of(exponent.base, num((exponent.power as Integer).value - 1)))
        return setOf(new Argument(setOf(exp), {
            n: exp,
            r: Relationship.Equal,
            n1: result
        }, "Power rule"))

    }

}