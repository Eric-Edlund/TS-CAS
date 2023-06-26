import { Argument } from "../Argument";
import { v } from "../ConvenientExpressions";
import { Expression } from "../expressions/Expression";
import { GivenEdge, Graph } from "../Graph";
import { GraphMinipulator } from "../GraphMinipulator";
import { Relationship } from "../Relationship";
import { assert } from "../util/assert";
import { setOf } from "../util/ThingsThatShouldBeInTheStdLib";
import { simplificationOrder } from "./DerivationRules";
import { NoContextExpressionSimplificationRule as NoContextExpressionSimplificationRule } from "./NoContextExpressionSimplificationRule";
import { equiv } from "./recursion";
import { RelationalDerivationRule } from "./RelationalDerivationRule";

/**
 * Holds a single graph and expands it using rules.
 */
export class Deriver {
    /**
     * Give it the graph you're going to expand.
     * @param graph 
     */
    public constructor(graph: Graph) {
        this.graph = graph
        this.simplifiedInIsolation = new Set()
        this.notSimplifiable = new Set()
    }

    /**
     * Expands the graph arbitrarily.
     * This function is still poorly defined,
     * very experemental.
     */
    public expand(): void {
        // Simplify all the expressions using the contextless simplifying rules
        // Do this until there's nothing more to simplify
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()


        //this.algebraicExpansion()
    }

    /**
     * Recursively makes sure that every node in the graph
     * is either simplified (meaning there is no contextless
     * rule that can simplify it further) or is marked down
     * as unsimplifiable.
     */
    private simplifyNoContext(): void {
        const unsimplified = [...this.graph.getNodes()].filter(n => n instanceof Expression)
                            .map<Expression>(n => n as Expression)
                            .filter(e => !this.simplifiedInIsolation.has(e))

        let shouldDoAgain = false
        unsimplified.forEach(e => {
            this.simplifiedInIsolation.add(e)

            // Try to find equivalents using every set of rules.
            // If a set finds equivalents, move on to the next
            // expression instead of trying later rules to save
            // time.
            for (const rules of simplificationOrder) {
                const derivedSimplifications = equiv(e, equivalentsFnUsing(rules))
                if (derivedSimplifications.length > 0) {
                    shouldDoAgain = true
                    derivedSimplifications.forEach(a => {
                        this.graph.addArgument(a)
                    })
                    return // To next expression
                }
            }

            // If none of the rules we have worked, the expression isn't simplifiable.
            this.notSimplifiable.add(e)
        })

        //if (shouldDoAgain) this.simplifyNoContext()
    }

    /**
     * Expands the graph using algebra rules.
     * Only simplified rules are used.
     */
    private algebraicExpansion(): void {
        const rules = [...RelationalDerivationRule.rules]

        const components = [...GraphMinipulator.getComponentNodes(this.graph, edge => {
            return (edge instanceof Argument && edge.relationship == Relationship.Equal)
                || (edge instanceof GivenEdge && edge.r == Relationship.Equal)
        })]

        components.forEach(component => {
            const equation: Expression[] = []
            for (const node of component) {
                if (node instanceof Expression && this.notSimplifiable.has(node))
                    equation.push(node)
            }
                   
            rules.forEach(r => {
                r.apply(setOf(...equation)).forEach(a => {
                    this.graph.addArgument(a)
                })
            })
        })
    }

    public readonly graph: Graph

    /**
     * 
     * @returns true if the given expression is in the graph
     * and has already had the contextless simplification operations
     * done to it and cannot be further simplified.
     */
    public isSimplified(exp: Expression): boolean {
        return this.notSimplifiable.has(exp)
    }
    // A set of nodes in the graph which have had all simplification 
    // operations done to them.
    private readonly simplifiedInIsolation: Set<Expression>
    // The set of nodes in the graph that have had contextless
    // simplification operations run on them and aren't further
    // simplifiable
    private readonly notSimplifiable: Set<Expression>
}

/**
 * Function that makes a function that gets the equivalent
 * expressions for a given one.
 * @param rules What rules the resulting function should use to 
 *      find equivalents.
 * @returns A function which will use the given rules to
 *      find direct equivalents.
 */
function equivalentsFnUsing(rules: NoContextExpressionSimplificationRule[]): (exp: Expression) => Set<Argument> {
    return function (exp: Expression): Set<Argument> {
        const out: Set<Argument> = new Set()
        rules.filter(r => r.applies(exp)).forEach(rule => {
            rule.apply(exp).forEach(i => {
                out.add(i)
            })
        })
        return out
    }
}
