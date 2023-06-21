import { MathGraphNode } from "../MathGraphNode";
import { Integer, IntegerType } from "./Integer";
import { MathElement } from "./MathElement";

/**
 * Base of all mathematical expressions.
 * All children should implement fly-wheel pattern.
 * All children should be immutable.
 */
export abstract class Expression extends MathGraphNode implements MathElement {

    public abstract toMathXML(): string;

    /**
     * True if the expression could be written as an 
     * integer but isn't.
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
    public get isReducibleOrInt(): boolean {
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
     * Produces a string which is exactly what's necessary
     * to communicate unamgigiously the content of the expression.
     */
    public abstract toUnambigiousString(): string;

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