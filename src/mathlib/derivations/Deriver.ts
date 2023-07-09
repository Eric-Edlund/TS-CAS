import { Argument } from "../Argument";
import { Expression } from "../expressions/Expression";
import { Product, ProductType } from "../expressions/Product";
import { Sum } from "../expressions/Sum";
import { GivenEdge, Graph } from "../Graph";
import { convergentSimplificationRules, factoringSimplificationRules, polynomialSimplificationRules } from "./DerivationRules";
import { ConvergenceTarget, NoContextExpressionSimplificationRule } from "./NoContextExpressionSimplificationRule";
import { equiv } from "./recursion";

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
    }

    /**
     * Expands the graph arbitrarily.
     * This function is still poorly defined,
     * very experemental.
     * @param maxDepth The maximum number of iterations the
     *      deriver will do before returning. Non-negative.
     *      If null, there is no max depth.
     * @param skipConvergentSimplifications If true, convergent simplification operations
     *          aren't counted when calculating depth.
     */
    public expand(maxDepth: number | null = null, skipConvergentSimplifications: boolean = false): void {
        // Simplify all the expressions using the contextless simplifying rules
        // Do this until there's nothing more to simplify
        
        if (maxDepth == null) {
            while (true) {
                while (this.simplifyNoContextConvergent());
                if (!this.simplifyNoContextDivergent()) break;
            }
        }
        else
        {
            for (let i=0; i < maxDepth; i++) {
                if (skipConvergentSimplifications) {
                    while (this.simplifyNoContextConvergent());
                    if (!this.simplifyNoContextDivergent()) return
                } else {
                    console.log("+1")
                    if (!this.simplifyNoContextConvergent()) {
                        console.log("No convergent simping left")
                        if (!this.simplifyNoContextDivergent()) 
                            return
                    }
                        
                }    
            }
            console.log("Ran out of depth")
        }

        //this.algebraicExpansion()
    }

    /**
     * Gets a list of expressions which couldn't be simplified further.
     */
    public get simplifiedExpressions(): Expression[] {
        return [...this.passedFactoringSimplification, ...this.passedPolynomialSimplification]
    }

    /**
     * Applies convergent simplification rules to expand the graph.
     * @returns True if there is more to simplify and this should
     *          be called again. Will be called a finite number of times.
     */
    private simplifyNoContextConvergent(): boolean {
        const unsimplified = [...this.graph.getNodes()].filter(n => n instanceof Expression)
                            .map<Expression>(n => n as Expression)
                            .filter(e => !this.processedByConvergentSimplification.has(e))

        let shouldDoAgain = false
        unsimplified.forEach(e => {
            this.processedByConvergentSimplification.add(e)

            // Try to find equivalents using general convergent rules.
            for (const rule of convergentSimplificationRules) {
                const derivedSimplifications = equiv(e, equivalentsFnUsing([rule]))
                if (this.addToGraph(derivedSimplifications)) {
                    shouldDoAgain = true
                    
                    this.notSimplified.add(e)
                    return // To next expression
                }
            }

            this.passedConvergentSimplification.add(e)
        })

        return shouldDoAgain
    }

    /**
     * Applies divergent simplification rules to expand the graph.
     * @returns True if the function expanded the graph.
     */
    private simplifyNoContextDivergent(): boolean {
        console.log("simping")

        // Only operate on expressions which have passed convergent simplification
        const unsimplified = [...this.passedConvergentSimplification]

        let shouldDoAgain = false
        unsimplified.forEach(e => {

            let canBeSimplified = false;

            // Try to find equivalents using divergent rules.

            for (const rule of factoringSimplificationRules) {
                const derivedSimplifications = equiv(e, equivalentsFnUsing([rule]))
                if (this.addToGraph(derivedSimplifications)) {
                    shouldDoAgain = true
                    canBeSimplified = true
                }
                else if (e instanceof Product) {
                    console.log("Passed Divergent Factoring " + e.toUnambigiousString())
                    this.passedFactoringSimplification.add(e)
                }
                // If expression is a polynomial, it may be a simplified polynomial
            }

            for (const rule of polynomialSimplificationRules) {
                const derivedSimplifications = equiv(e, equivalentsFnUsing([rule]))
                if (this.addToGraph(derivedSimplifications)) {
                    shouldDoAgain = true
                    canBeSimplified = true
                    // If expression is a product, it may be a simplified product
                }
                else if (e instanceof Sum) {
                    this.passedPolynomialSimplification.add(e)
                }
            }

            // If none of the rules we have worked, the expression isn't simplifiable.
            if (canBeSimplified)
                this.notSimplified.add(e)
        })

        return shouldDoAgain
    }

    /**
     * For each given argument, adds to the graph.
     * If both end points of all arguments are already in the graph,
     * returns false.
     * @param args 
     * @effects this.graph
     * @returns True if one or more of the arguments
     * were added to the graph.
     */
    private addToGraph(args: Argument[]): boolean {
        let atLeastOne = false;
        args.forEach(a => {
            if (this.graph.contains(a.claim.n) 
            && this.graph.contains(a.claim.n1)) this.graph.addArgument(a)
            else {
                this.graph.addArgument(a)
                atLeastOne = true
            }
           
        })
        return atLeastOne;
    }

    /**
     * Expands the graph using algebra rules.
     * Only simplified rules are used.
     */
    private algebraicExpansion(): void {
        // const rules = [...RelationalDerivationRule.rules]

        // const components = [...GraphMinipulator.getComponentNodes(this.graph, edge => {
        //     return (edge instanceof Argument && edge.relationship == Relationship.Equal)
        //         || (edge instanceof GivenEdge && edge.r == Relationship.Equal)
        // })]

        // components.forEach(component => {
        //     const equation: Expression[] = []
        //     for (const node of component) {
        //         if (node instanceof Expression && this.simplified.has(node))
        //             equation.push(node)
        //     }
                   
        //     rules.forEach(r => {
        //         r.apply(setOf(...equation)).forEach(a => {
        //             this.graph.addArgument(a)
        //         })
        //     })
        // })
    }

    public readonly graph: Graph

    /**
     * 
     * @returns true if the given expression is in the graph
     * and has already had the contextless simplification operations
     * done to it and cannot be further simplified.
     */
    public isSimplified(exp: Expression): boolean {
        if (!this.passedConvergentSimplification.has(exp)) return false

        if (exp instanceof Product) return this.passedFactoringSimplification.has(exp)
        if (exp instanceof Sum) return this.passedPolynomialSimplification.has(exp)
        
        return true
    }

    // Set of expressions that we know can be simplified more.
    public readonly notSimplified = new Set<Expression>()

    // All the expressions which could not be simplified further by
    // convergent simplification rules.
    public readonly passedConvergentSimplification = new Set<Expression>()

    // All expressions which have been processed by the simplification rules
    /// regardless of the result.
    public readonly processedByConvergentSimplification = new Set<Expression>()

    // All expressions which are products and could not be further
    // simplified by factoring simplification rules. A subset of
    // passedConvergentSimplification.
    public readonly passedFactoringSimplification = new Set<Product>()

    // All expressions which are sums and could not be further
    // simplified by polynomial simplification rules. A subset of
    // passedConvergentSimplification.
    public readonly passedPolynomialSimplification = new Set<Sum>()
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
