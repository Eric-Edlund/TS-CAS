import { Argument } from "../Argument";
import { Expression } from "../expressions/Expression";
import { Product } from "../expressions/Product";
import { Sum } from "../expressions/Sum";
import { Graph } from "../Graph";
import { convergentSimplificationRules, factoringSimplificationRules, polynomialSimplificationRules } from "./DerivationRules";
import { NoContextExpressionSimplificationRule } from "./NoContextExpressionSimplificationRule";
import { equiv } from "./recursion";

/**
 * Creates a new graph contianing the given node.
 */
export function wrapInGraph(exp: Expression): Graph {
    return new Graph().addNode(exp)
}

/**
 * Expands the given graph using derivation rules to find 
 * equivalent expressions.
 */
export function deriveExpand(
    graph: Graph,
    maxDepth: number, 
    skipConvergentSimplifications: boolean = false
    ): DerivationResult {

    const result = new DerivationResult(graph)
    
    result.expand(maxDepth, skipConvergentSimplifications)
    return result;
}

/**
 * Holds a single graph and expands it using rules.
 */
class DerivationResult {
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
     * @param abort A signal used to prematurely abort the operation.
     */
    public expand(maxDepth: number, skipConvergentSimplifications: boolean = false): void {
        // Simplify all the expressions using the contextless simplifying rules
        // Do this until there's nothing more to simplify
        
        for (let i=0; i < maxDepth; i++) {
            if (skipConvergentSimplifications) {
                while (this.simplifyNoContextConvergent()) {
                }
                if (!this.simplifyNoContextDivergent()) return
            } else {
                if (!this.simplifyNoContextConvergent()) {
                    if (!this.simplifyNoContextDivergent()) 
                        return
                }
                    
            }    
        }
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
                const derivedSimplification = equiv(e, equivalentsFnUsing([rule]))[0]
                
                if (derivedSimplification != undefined) {
                    this.addToGraph([derivedSimplification])
                    shouldDoAgain = true
                    
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

        // Only operate on expressions which have passed convergent simplification
        const candidates = [...this.passedConvergentSimplification]

        // True if more expressions were added to the graph
        let shouldDoAgain = false
        
        candidates.forEach(e => {

            // Try to find equivalents using divergent rules.

            for (const rule of factoringSimplificationRules) {
                const derivedSimplifications = equiv(e, equivalentsFnUsing([rule]))

                shouldDoAgain ||= this.addToGraph(derivedSimplifications)

                if (derivedSimplifications.length == 0) {
                    if (e instanceof Product) 
                        this.passedFactoringSimplification.add(e)
                }
            }

            for (const rule of polynomialSimplificationRules) {
                const derivedSimplifications = equiv(e, equivalentsFnUsing([rule]))

                shouldDoAgain ||= this.addToGraph(derivedSimplifications)

                if (derivedSimplifications.length > 0) {
                    if (e instanceof Sum) 
                        this.passedPolynomialSimplification.add(e)
                }
            }
        })

        return shouldDoAgain
    }

    /**
     * For each given argument, adds to the graph if at least
     * one of its claim's endpoints isn't already in the graph.
     * If both end points of all arguments are already in the graph,
     * returns false.
     * @param args 
     * @effects this.graph
     */
    private addToGraph(args: Argument[]): boolean {
        let atLeastOne = false;
        args.forEach(a => {
            if (!this.graph.contains(a.claim.n) 
            || !this.graph.contains(a.claim.n1)
            ) {
                this.graph.addArgument(a)
                atLeastOne = true
            }
           
        })
        return atLeastOne;
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
