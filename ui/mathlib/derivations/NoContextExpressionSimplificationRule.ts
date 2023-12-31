import { Argument } from "../Argument"
import { Expression } from "../expressions/Expression"
import { Variable } from "../expressions/Variable"
import { assert } from "../util/assert"
import { setOf } from "../util/ThingsThatShouldBeInTheStdLib"
import { VariableValueMap } from "../VariableValueMap"

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

        const result = this.applyImpl(exp)
        result.forEach(e => {
            assert(e != null && e != undefined)
            assert(
                e.claim.n1 !== exp,
                "Rule " +
                    this.constructor.name +
                    " produced result equivalent to ground"
            )
            // TODO: This fuzzy test is inconlusive and can fail when two expressions are equal.
            // Don't leave it in production.
            // assert(fuzzyEquivalenceTest(exp, e.claim.n1), "Failed fuzzy equivalence test "
            //             + exp.toUnambigiousString() + "/=" + e.claim.n1.toUnambigiousString()
            //             + " during argument " + e.argument)
        })
        return result
    }

    /**
     * Returns the type of expression this rule's
     * results approach.
     */
    public get convergenceType(): ConvergenceTarget {
        return ConvergenceTarget.None
    }

    protected abstract appliesImpl(exp: Expression): boolean
    protected abstract applyImpl(exp: Expression): Set<Argument>
}

/**
 * Plugs in some values to see if they're equivalent.
 * @param e1
 * @param e2
 */
function fuzzyEquivalenceTest(e1: Expression, e2: Expression): boolean {
    const LIMIT = 0.001
    for (const value of values) {
        if (Math.abs(e1.evaluate(value) - e2.evaluate(value)) > LIMIT)
            return false
    }
    return true
}

export enum ConvergenceTarget {
    Factored,
    Polynomial,
    None
}

const values: Set<VariableValueMap> = setOf(
    buildVariableValueMap(-2.1),
    buildVariableValueMap(-1.1),
    buildVariableValueMap(0.1),
    buildVariableValueMap(1.1),
    buildVariableValueMap(2.1),
    {
        valueOf(v: Variable): number {
            return v.symbol.codePointAt(0) ?? 0
        }
    },
    {
        valueOf(v: Variable): number {
            return v.symbol.charCodeAt(0)
        }
    }
)

function buildVariableValueMap(val: number): VariableValueMap {
    return {
        valueOf(v: Variable): number {
            return val
        }
    }
}
