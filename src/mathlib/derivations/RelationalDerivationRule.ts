import { Argument } from "../Argument"
import { Expression } from "../expressions/Expression"

/**
 * Produces truths from a set of equivalent expressions.
 */
export abstract class RelationalDerivationRule {
    /**
     *
     * @param equation A set of expressions which are equal.
     */
    public apply(equation: Set<Expression>): Argument[] {
        return this.applyImpl(equation)
    }

    protected abstract applyImpl(equation: Set<Expression>): Argument[]

    public static readonly rules: Set<RelationalDerivationRule> = new Set()
}
