/**
 * Can be expressed with MathML
 */
export abstract class MathElement {
    /**
     * Get mathml text for this expression.
     */
    public abstract toMathXML(): string;
}