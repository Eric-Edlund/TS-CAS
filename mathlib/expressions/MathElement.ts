/**
 * Can be expressed with MathML
 */
export interface MathElement {
    /**
     * Get mathml text for this expression.
     */
    toMathXML(): string;
}