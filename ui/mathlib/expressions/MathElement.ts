export interface NameTable {
    /**
     * Maps substitution ids to symbols.
     */
    [substitutionId: string]: string
}

/**
 * Can be expressed with MathML
 */
export interface MathElement {
    /**
     * Get mathml text for this expression.
     */
    toMathXML(nameTable: NameTable): string
}
