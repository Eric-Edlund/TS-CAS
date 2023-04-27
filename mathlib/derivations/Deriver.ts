import { Argument } from "../Argument";
import { Expression } from "../expressions/Expression";
import { GivenEdge, Graph, MathGraphNode } from "../Graph";
import { GraphMinipulator } from "../GraphMinipulator";
import { Relationship } from "../Relationship";
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

        //this.algebraicExpansion()

        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()
        this.simplifyNoContext()

        //this.algebraicExpansion()
        //this.simplifyNoContext()

    }

    /**
     * Recursively makes sure that every node in the graph
     * is either simplified (meaning there is no contextless
     * rule that can simplify it further) or is marked down
     * as unsimplifiable.
     */
    private simplifyNoContext(): void {
        const rules = NoContextExpressionSimplificationRule.rules
        const unchecked = [...this.graph.getNodes()].filter(n => n instanceof Expression)
                            .map<Expression>(n => n as Expression)
                            .filter(e => !this.simplifiedInIsolation.has(e))

        unchecked.forEach(e => {
            const simplifications = equiv(e, contextlessSimplificationsFn)
            this.simplifiedInIsolation.add(e)
            if (simplifications.length == 0) this.notSimplifiable.add(e)
            simplifications.forEach(a => this.graph.addArgument(a))
        })

        //if (unchecked.length > 0) this.simplifyNoContext()
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
 * Finds equivalents of the given expression
 * using rules of inference. Not recursive.
 * @param exp 
 */
const contextlessSimplificationsFn = function directEquivalents(exp: Expression): Set<Argument> {
    const rules = [...NoContextExpressionSimplificationRule.rules]
    const out: Set<Argument> = new Set()
     rules.filter(r => r.applies(exp)).forEach(rule => {
        rule.apply(exp).forEach(i => {
            out.add(i)
        })
    })
    return out
}

function setOf(...arr: Expression[]): Set<Expression> {
    const out = new Set<Expression>()
    arr.forEach(e => out.add(e))
    return out
}