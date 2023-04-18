import { Expression } from "../expressions/Expression";
import { Graph } from "../Graph";

/**
 * Parses human written, utf-8 type math expressions
 * into actual math.
 * @param input 
 */
export function parse(input: string): Expression[] {
    const out: Expression[] = []

    console.log("Input: " + input)

    const findExpressions = /[0-9a-zA-Z]+/
    const findOperators = /[\+\-\*\/\^]/
    console.log(findExpressions)
    const split = input.split(findExpressions)
    console.log(split)

    return out;
}

function parseExpression(input: string): Expression {
    throw new Error("Not implemented")
}