import { Argument } from "../../Argument";
import { negative, sumIntuitive } from "../../ConvenientExpressions";
import { Expression } from "../../expressions/Expression";
import { Product } from "../../expressions/Product";
import { Sum } from "../../expressions/Sum";
import { Relationship } from "../../Relationship";
import { RelationalDerivationRule } from "../RelationalDerivationRule";

export class SubtractFromBothSides extends RelationalDerivationRule {
    protected applyImpl(equation: Set<Expression>): Argument[] {
        const out: Argument[] = []
        const combinations = cartesianProduct<Expression>(equation)

        // If one is addition, subtract from both sides
        // Here we filter so that only pairs where the first expression is
        // a sum are operated on. This works because combinations is symetric.
        // Now for each pair we only have to deal with the first exp being sum.
        combinations.filter(pair => {
            return pair[0] instanceof Sum
        }).forEach(pair => {
            const s = pair[0] as Sum
            const other = pair[1]

            // Some Sums have multiple terms
            s.terms.filter(term => !(term instanceof Product && term.isNegation))
            .forEach(term => {
                // If other is itself a sum, we will break it apart
                // into terms so that we can combine integer terms in the
                // final result and avoid
                // x + 2 + 2 = y + 2 => x + 2 = y + 2 - 2
                // Note: We only do this to integer terms, because that's
                // so obvious and couldn't possibly need to be explained further.
                // We don't do it to variable terms. The following is correct behavior:
                // x + a + a = y + a => x + a = y + a - a
                // TODO: This distinction is debatable. Why shouldn't the left hand
                // of the last deduction be x + a + a - a? By doing this, 
                // we produce a much more complicated and expensive graph. 
                let second: Expression[]
                if (other instanceof Sum) {
                    second = [...other.terms]
                } else {
                    second = [other]
                }
                const claim = {n: s.without(term), n1: sumIntuitive(...second, negative(term)), r: Relationship.Equal}
                out.push(new Argument(new Set([s, other]), claim, "a=b & c=d => a-c = b-d"))
            })
        })
        return out
    }
}

/**
 * Gets the anti-reflexive closure of the relation A x A.
 * It's symmetric and transitive.
 * 
 * @param set 
 */
 function cartesianProduct<T>(set: Set<T>): T[][] {
    const out = []
    for (const first of set) {
        for (const second of set) {
            if (first === second) continue
            out.push([first, second])
        }
    }
    return out
}