// Parse Latex expressions into Expression with unified-latex library
// Docs https://siefkenj.github.io/unified-latex/

import { Expression } from "../expressions/Expression";
import { unified } from "unified"
import {
    parseMath
} from "@unified-latex/unified-latex-util-parse";
import * as Ast from '@unified-latex/unified-latex-types';
import { Fraction } from "../expressions/Fraction";
import { Integer } from "../expressions/Integer";

/**
 * Parses latex expression into internal expression.
 */
export function parseExpressionLatex(source: string): Expression | null {
    const ast: Ast.Node[] = parseMath(source);

    if (ast == undefined) return null
    if (ast.length == 0) return null
    ast.forEach(node => parseRec([node]))
    return null
}

function parseRec(nodes: Ast.Node[]): Expression {

    if (nodes.length > 1) return Integer.of(1)
    const node = nodes[0]

    console.log(node)

    switch (node.type) {
    case "macro":
        switch (node.content) {
        case "frac":
            const num = parseRec(node.args[0].content)
            const den = parseRec(node.args[1].content)
            return Fraction.of(num, den)
        case "int":
        }
        break;
    }

    return Integer.of(1)
}

/**
* Groups adjacent numbers left to right
*/ 
function groupNumbers(nodes: Ast.Node[]): Ast.Node[] {

}

function parseAddMultiply(node: Ast.Node[]): Expression {

}
