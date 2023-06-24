import { Argument } from "../Argument";
import { Expression } from "../expressions/Expression";
import { assert } from "../util/assert";

/**
 * A rule that takes an expression and produces one or more equivalent expressions.
 * These can use reflection to determine what
 * type of expression they're given. These rules will be recursively used
 * to derive simplified expressions.
 * 
 * These rules are also contextless: they're only given the expression,
 * no other information about the problem.
 * 
 * All of these rules need to converge to a simplified answer. They can't
 * form loops. Thinking about this, there are two simplified forms to 
 * converge to:
 *  - Factored form c(a+b)
 *  - Polynomial form ac + bc
 */
export abstract class NoContextExpressionSimplificationRule {
    /**
     * Checks if this rule can find equivalents for the
     * given expression. Only call apply() if true.
     */
    public applies(exp: Expression): boolean {
        return this.appliesImpl(exp)
    }

    /**
     * Produces a set of expressions that are equivalent to
     * the given one. Only call if the given expression
     * passed the applies() test.
     * @param exp The expression to find an equivalent for.
     * @returns Set of equivalent expressions, not including the given one.
     */
    public apply(exp: Expression): Set<Argument> {
        //console.log(this.constructor.name + " on " + exp.toString())

        const result = this.applyImpl(exp);
        result.forEach(e => {
            assert(e != null && e != undefined)
            assert(e.claim.n1 !== exp, "Rule " + this.constructor.name + " produced result equivalent to ground")
            //if (this.constructor.name == "CombineCommonTermsMultiplication")
                //console.log(this.constructor.name + exp.toString() + "\n -> " + e.claim.n1.toString())
        });
        return result;
    }

    protected abstract appliesImpl(exp: Expression): boolean;
    protected abstract applyImpl(exp: Expression): Set<Argument>
}