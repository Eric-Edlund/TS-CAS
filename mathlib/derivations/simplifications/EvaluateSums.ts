import { Argument } from "../../Argument";
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
        const out = new Set<Argument>()
        const integerTerms = [...sum.terms].filter(t => t instanceof Integer)
        if (integerTerms.length == 0) {
            return out
        }
        const newInt = integerTerms.map<Integer>(e => e as Integer).reduce((a, b) => Integer.of(a.value + b.value))
        const otherTerms = [...sum.terms].filter(t => !(t instanceof Integer))

        let result: Argument;
        if (otherTerms.length == 0) {
            result = new Argument(setOf(sum), {
                n: sum,
                r: Relationship.Equal,
                n1: newInt
            }, "Evaluated Addition")
        } else {
            result = new Argument(setOf(sum), {
                n: sum,
                r: Relationship.Equal,
                n1: Sum.of(otherTerms.concat(newInt)),
            }, "Evaluated Addition")
        }
        out.add(result)
        return out
    }
}

