import { Expression } from "../expressions/Expression"

export function setOf<T>(...arr: T[]): Set<T> {
    const out = new Set<T>()
    arr.forEach(e => out.add(e))
    return out
}

/**
 * Adds the given elements to the given collection
 * @param collection 
 * @param elements 
 */
export function addAll<T>(collection: Set<T>, ...elements: T[]) {
    for (const e of elements) {
        collection.add(e)
    }
}

/**
 * Checks if the given element is in the given collection
 * using referencial equality.
 * @param collection 
 * @param element 
 * @returns True if the collection has the element, false otherwise.
 */
export function has<T>(collection: T[], element: T): boolean {
    for (const e of collection) {
        if (e === element) return true
    }
    return false
}