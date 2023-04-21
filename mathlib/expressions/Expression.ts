import { Integer, IntegerType } from "./Integer";
import { MathElement } from "./MathElement";

/**
 * Base of all mathematical expressions.
 * All children should implement fly-wheel pattern.
 * All children should be immutable.
 */
export abstract class Expression extends MathElement {

    /**
     * Get the reduced form of this expression.
     * @throws NotReducible error if expression
     * isn't reducible.
     */
    public abstract get reduced(): Integer;

    /**
     * True if the expression could be written as an 
     * integer but isn't
     * 
     * Reducible:
     * 2 + 2 -> 4
     * 2^4 -> 32
     * 4/2 -> 2
     * 
     * Not Reducible:
     * 1
     * 4/3
     * sqrt(2)
     * pi
     */
    public abstract readonly isReducible: boolean;
    /**
     * True if the expression is reducible or is an integer.
     */
    public get reducibleOrInt(): boolean {
        return this.isReducible || this.class == IntegerType
    }
    /**
     * The class name of the expression.
     * For reflection.
     */
    public abstract readonly class: string;
    /**
     * Gets a debug string that adequately communicates
     * the expression.
     */
    public abstract toString(): string;

    /**
     * Produces a string that uniquely identifies 
     * the expression's type and values such that
     * 1. no two subclasses of expression could produce
     * the same key
     * 2. All instances of expression with equal values 
     * have the same key
     */
    public abstract get hash(): string;

    /**
     * Critical to building a reasonably sized graph is being
     * picky about which nodes to expand from. Some nodes have 
     * very limited utility in deriving new truths, like
     * 
     *      x + 2 + 2.
     * 
     * This field is true iff the expression satisfies a list of
     * expression implementation specific criteria that make it
     * a viable candidate for expansion.
     * 
     * Expressions that don't satisfy these criteria should only
     * be used by operations that find equivalent expressions. From 
     * the last example,
     *  
     *      x + 2 + 2 = x + 4
     * 
     * is an ok inference to make, as it's result has a chance
     * of producing a helpful equivalent expression. Non-equivalence
     * operations like
     * 
     *      x + 2 + 2 = y
     *   => x + 2 = y - 2
     * 
     * are a waste of resources because they produce other relationships
     * that are less helpful than they could be. This property should be
     * true if the expression is expressed in a significant, minimal form.
     */
    public abstract readonly isHealthy: boolean

    /**
     * True if this expression contains no variables.
     */
    public abstract readonly isConstant: boolean

    /**
     * Positive integer representing the complexity of the expression
     * including its composing elements. Equals number of children
     *  plus the total complexity of all children.
     */
    public abstract readonly childCount: number
}