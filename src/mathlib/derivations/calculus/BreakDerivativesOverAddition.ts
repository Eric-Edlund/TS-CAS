import { Argument } from "../../Argument";
import { Derivative } from "../../expressions/Derivative";
import { Expression } from "../../expressions/Expression";
import { Sum } from "../../expressions/Sum";
import { Relationship } from "../../Relationship";
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib";
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule";


export class BreakDerivativesOverAddition extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return exp instanceof Derivative
            && exp.exp instanceof Sum
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const d = exp as Derivative
        const sum = d.exp as Sum

        const terms = [...sum.terms]
        const wrapped = terms.map<Derivative>(t => Derivative.of(t, d.relativeTo))

        return setOf(new Argument(setOf(d), {
            n: d,
            r: Relationship.Equal,
            n1: Sum.of(wrapped),
        }, "Split derivative over addition"))
    }

}