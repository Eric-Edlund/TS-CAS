import { Argument } from "../../Argument";
import { fraction, productOrNot } from "../../ConvenientExpressions";
import { Expression } from "../../expressions/Expression";
import { Product } from "../../expressions/Product";
import { Relationship } from "../../Relationship";
import { RelationalDerivationRule } from "../RelationalDerivationRule";

export class DivideOnBothSides extends RelationalDerivationRule {
    protected applyImpl(equation: Set<Expression>): Argument[] {
        const out: Argument[] = []

        const combinations = cartesianProduct<Expression>(equation)

        combinations.filter(pair => {
            return pair[0] instanceof Product
        }).forEach(pair => {
            const p = pair[0] as Product
            const other = pair[1]

            // Some products have multiple factors
            p.factors.forEach(factor => {
                let second: Expression[]
                if (other instanceof Product) {
                    second = [...other.factors]
                } else {
                    second = [other]
                }
                const claim = {n: p.without(factor), n1: fraction(productOrNot(...second), factor), r: Relationship.Equal}
                out.push(new Argument(new Set([p, other]), claim, "a=b & c=d => a/c = b/d", RULE_ID))
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

export const RULE_ID = "Div on both sides"