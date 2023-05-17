
/**
 * Checks if the given expression evaluated to true. If not, throws error
 * with the message given.
 * @param msg Displayed if the expression is false. Defaults to "Failed Assert"
 */
export function assert(exp: boolean, msg: string = "Failed assert"): void {
    if (!exp) throw new Error(msg);
}