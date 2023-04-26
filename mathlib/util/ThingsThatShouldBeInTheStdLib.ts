import { Expression } from "../expressions/Expression"

export function setOf<T>(...arr: T[]): Set<T> {
    const out = new Set<T>()
    arr.forEach(e => out.add(e))
    return out
}
