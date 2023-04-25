import { Argument } from "../Argument";
import { Expression } from "../expressions/Expression";
import { assert } from "../util/assert";

/**
 * A rule that takes an expression and produces an equivalent expression.
 * ExpressionSimplificationRules can use reflection to determine what
 * type of expression they're given, but should use expression specific
 * functions on sub-expressions. These rules will be recursively used
 * to derive simplified expressions.
 * 
 * These rules are also contextless: they're only given the expression,
 * no other information about the problem.
 */
export abstract class NoContextExpressionSimplificationRule {

    /**
     * All subclasses should register themselves in this list.
     */
    public static rules: Set<NoContextExpressionSimplificationRule> = new Set()

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
     * @returns Set of equivalent expressions.
     */
    public apply(exp: Expression): Set<Argument> {
        const result = this.applyImpl(exp);
        result.forEach(e => {
            assert(e != null && e != undefined)
        });
        return result;
    }

    protected abstract appliesImpl(exp: Expression): boolean;
    protected abstract applyImpl(exp: Expression): Set<Argument>
}