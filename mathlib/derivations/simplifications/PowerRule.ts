import { Argument } from "../../Argument";
import { negative, num, product, sumIntuitive } from "../../ConvenientExpressions";
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
        && ((exp.exp instanceof Exponent
            && exp.exp.base === exp.relativeTo
            && exp.exp.power.isConstant)
        || (exp.exp === exp.relativeTo))
    }

    /**
     * We know:
     * exp is a Derivative of an Exponent with a constant power
     * the exponent's base is the same as what the derivative is relative to
     */
    protected applyImpl(exp: Expression): Set<Argument> {
        const d = exp as Derivative
        let exponent: Exponent;
        if (d.exp instanceof Exponent) {
            exponent = d.exp
        } else {
            exponent = Exponent.of(d.exp, num(1))
        }
        const result = product(exponent.power, Exponent.of(exponent.base, sumIntuitive(exponent.power, negative(num(1)))))
        return setOf(new Argument(setOf(exp), {
            n: exp,
            r: Relationship.Equal,
            n1: result
        }, "Power rule"))

    }

}