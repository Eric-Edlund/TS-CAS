// Parse Latex expressions into Expression with unified-latex library
// Docs https://siefkenj.github.io/unified-latex/

import { Expression } from "../expressions/Expression";
import { unified } from "unified"
import {
    parseMath
} from "@unified-latex/unified-latex-util-parse";
import * as Ast from '@unified-latex/unified-latex-types';

/**
 * Parses latex expression into internal expression.
 */
export function parseExpressionLatex(source: string): Expression | null {
    const ast: Ast.Node[] = parseMath(source);

    if (ast == undefined) return null
    if (ast.length == 0) return null
    ast.forEach(node => parseRec(node))
    return null
}

function parseRec(node: Ast.Node): void {
    console.log(node)
}
