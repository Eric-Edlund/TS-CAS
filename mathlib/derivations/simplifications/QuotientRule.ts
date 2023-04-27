import { Argument } from "../../Argument";
import { negative, num, product, sum } from "../../ConvenientExpressions";
import { Derivative } from "../../expressions/Derivative";
import { Exponent } from "../../expressions/Exponent";
import { Expression } from "../../expressions/Expression";
import { Fraction } from "../../expressions/Fraction";
import { Relationship } from "../../Relationship";
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib";
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule";


export class QuotientRule extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return exp instanceof Derivative
            && exp.exp instanceof Fraction
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const d = exp as Derivative
        const a = (d.exp as Fraction).numerator
        const b = (d.exp as Fraction).denominator
        return setOf(new Argument(setOf(exp), {
            n: exp,
            r: Relationship.Equal,
            n1: Fraction.of(
                    sum(
                        product(Derivative.of(a, d.relativeTo), b),
                        negative(product(a, Derivative.of(b, d.relativeTo)))
                    ),
                    Exponent.of(b, num(2))
                )
        }, "Quotient Rule"))
    }
    
}