import { Argument } from "../../Argument";
import { sumOrNot } from "../../ConvenientExpressions";
import { Expression } from "../../expressions/Expression";
import { Integer } from "../../expressions/Integer";
import { Sum } from "../../expressions/Sum";
import { Relationship } from "../../Relationship";
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib";
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule";


/**
 * Combine any integer terms in Sums.
 * a + 2 + 2 + 2= a + 4
 * 2 - 2 = 0
 * 
 * Combines all of them at once no matter how many terms there are.
 * 
 */
export class EvaluateSums extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return exp instanceof Sum
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const sum = exp as Sum
        const integerTerms = [...sum.terms].filter(t => t instanceof Integer)
        if (integerTerms.length < 2) {
            return setOf()
        }
        const newInt = integerTerms.map<Integer>(e => e as Integer).reduce((a, b) => Integer.of(a.value + b.value))
        const otherTerms = [...sum.terms].filter(t => !(t instanceof Integer))

        return setOf(new Argument(setOf(sum), {
            n: sum,
            r: Relationship.Equal,
            n1: sumOrNot(...otherTerms, newInt)
        }, "Evaluated Addition"))
    }
}

