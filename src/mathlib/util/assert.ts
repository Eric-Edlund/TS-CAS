
/**
 * Checks if the given expression evaluated to true. If not, throws error
 * with the message given.
 * @param msg Displayed if the expression is false. Defaults to "Failed Assert"
 */
export function assert(exp: boolean, msg: string = "Failed assert"): void {
    if (!exp) throw new Error(msg);
}

export function for_all<T>(iterable: Iterable<T>, exp: (val: T) => boolean): boolean {
    for (const i of iterable) {
        if (!exp(i)) return false
    }
    return true
}

export function for_some<T>(iterable: Iterable<T>, exp: (val: T) => boolean): boolean {
    for (const i of iterable) {
        if (exp(i)) return true
    }
    return false
}