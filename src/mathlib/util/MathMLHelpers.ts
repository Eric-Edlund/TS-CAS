/**
 * Wraps the given mathml string in mathml parenthases.
 * @param str
 */
export function inParen(str: string): string {
    return "<mo>(</mo>" + str + "<mo>)</mo>"
}

/**
 * Puts the given mathml expression in a row so that
 * it doesn't get divided by mathjax.
 * @param str
 * @returns
 */
export function inRow(str: string): string {
    return "<mrow>" + str + "</mrow>"
}

/**
 * Wraps the given string in <math></math>
 * @param str
 */
export function inMath(str: string): string {
    return "<math>" + str + "</math>"
}

/**
 * Wraps the given string in <math display='block'></math>
 * @param str
 */
export function inMathBlock(str: string): string {
    return "<math display='block'>" + str + "</math>"
}
