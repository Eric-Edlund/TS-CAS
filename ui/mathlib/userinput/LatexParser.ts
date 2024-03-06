// Parse Latex expressions into Expression with unified-latex library
// Docs https://siefkenj.github.io/unified-latex/

import { Expression } from "../expressions/Expression"
import { unified } from "unified"
import { parseMath } from "@unified-latex/unified-latex-util-parse"
import * as Ast from "@unified-latex/unified-latex-types"
import { Fraction } from "../expressions/Fraction"
import { Integer } from "../expressions/Integer"
import { Product } from "../expressions/Product"
import { num, productOrNot, sumOrNot, v } from "../ConvenientExpressions"
import { Variable } from "../expressions/Variable"
import { Integral } from "../expressions/Integral"
import { Logarithm } from "../expressions/Logarithm"
import { argv0 } from "process"
import { Derivative } from "../expressions/Derivative"

/**
 * Parses latex expression into internal expression.
 */
export function parseExpressionLatex(source: string): Expression | null {
    const ast: Ast.Node[] = parseMath(source)

    console.log(source)

    if (ast == undefined) return null
    if (ast.length == 0) return null
    groupNumbers(ast)
    dropParenMacros(ast)
    trimWhiteSpace(ast)
    ast.forEach(node => console.log(node))

    return group(ast)
}

/**
 * Groups adjacent numbers left to right
 */
function groupNumbers(nodes: Ast.Node[]): void {
    function isNum(str: string) {
        return str.split("").every(char =>
            char === "0" ||
            char === "1" ||
            char === "2" ||
            char === "3" ||
            char === "4" ||
            char === "5" ||
            char === "6" ||
            char === "7" ||
            char === "8" ||
            char === "9"
        )

    }
    for (let i = 1; i < nodes.length; i++) {
        const last = nodes[i - 1]
        const curr = nodes[i]
        if (
            last.type === "string" &&
            isNum(last.content) &&
            curr.type === "string" &&
            isNum(curr.content)
        ) {
            curr.content = last.content + curr.content
            nodes.splice(i - 1, 1)
            i--
        }
    }
}

/**
 * Removes the \left and \right macros MathQuill adds
 * to parentheses.
 */
function dropParenMacros(nodes: Ast.Node[]): void {
    for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        if (
            n.type === "macro" &&
            (n.content === "right" || n.content === "left")
        ) {
            nodes.splice(i, 1)
            i--
        }
    }
}

function trimWhiteSpace(nodes: Ast.Node[]): void {
    for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        if (n.type === "macro" && n.content.trim() === "") {
            nodes.splice(i, 1)
            i--
        }
        if (n.type === "whitespace") {
            nodes.splice(i, 1)
            i--
        }
    }
}

/**
 * Takes a node representing a fraction, variable or number
 * and gets the expression for it.
 */
function interpret(node: Ast.Node): Expression | null{

    switch (node.type) {
        case "macro":
            switch (node.content) {
                case "frac":
                    const num = group(node.args[0].content);
                    const den = group(node.args[1].content)

                    if (num == null || den == null) {
                        return null
                    }

                    return Fraction.of(
                        num,
                        den
                    )
                default:
                    console.log("Unimplemented macro " + node.content)
            }
            break

        case "string":
            const num = /[0-9]+/
            if (node.content.match(num)) {
                return Integer.of(parseInt(node.content))
            } else {
                return Variable.of(node.content)
            }
    }

    console.log("Unimplemented interpet")
    return Variable.of("Not understood")
}

/**
 * Groups nodes into products and sums, recursively interpreting
 * their elements.
 */
function group(
    nodes: Ast.Node[],
    start: number = 0,
    end: number = nodes.length - 1
): Expression | null {
    if (end < start) {
        return null
    }
    function isAddition(node: Ast.Node): boolean {
        return node.type === "string" && node.content === "+"
    }
    function isSubtraction(node: Ast.Node): boolean {
        return node.type === "string" && node.content === "-"
    }
    function isUnaryMinus(index: number): boolean {
        const prev = nodes[index - 1]
        if (prev == undefined) return false
        const curr = nodes[index]
        if (curr.type !== "string") {
            return false
        }
        if (curr.content !== "-") return false;

        if (prev.type === "string") {
            const prevChar = prev.content
            if (prevChar === "(" || prevChar === "*" || prevChar === "+") {
                return true;
            }
        } else if (isDerivative(prev)) {
            return true
        }
    }
    function isDot(node: Ast.Node): boolean {
        return node.type === "macro" && node.content === "cdot"
    }
    function isIntegral(node: Ast.Node): boolean {
        return node.type === "macro" && node.content === "int"
    }
    function isLog(node: Ast.Node): boolean {
        return node.type === "macro" && node.content === "log"
    }
    // We only recognize derivatives of the form (d/d<var>)
    // Returns the integration variable if it is a derivative
    function isDerivative(node: Ast.Node): Expression | null{
        if (node.type === "macro" 
            && node.content === "frac"
            && node.args[0].content.length === 1
            && node.args[0].content[0].type === "string"
            && node.args[0].content[0].content === "d"
            && node.args[1].content[0].type === "string"
            && node.args[1].content[0].content === "d"
        ) {
            return group(node.args[1].content.slice(1))
        }
        return null
    }
    function isOpenParen(node: Ast.Node): boolean {
        return node.type === "string" && node.content === "("
    }
    function isCloseParen(node: Ast.Node): boolean {
        return node.type === "string" && node.content === ")"
    }

    // Begins searching at start and finds the first index
    // of a + or non-unary - not in a deeper level of parens
    // than the start index. Returns -1 if none found.
    function findNextTopLevelSum(start: number): number {
        let depth = 0;
        for (let i=start; i<=end; i++) {
            if (isOpenParen(nodes[i])) depth++;
            else if (isCloseParen(nodes[i])) depth--;
            if (depth === 0) {
                if (isAddition(nodes[i])) return i;
                else if (!isUnaryMinus(i) && isSubtraction(nodes[i])) return i;
            }
        }
        return -1
    }


    const terms = []
    let i = start
    let subtractNext = false
    while (i <= end) {
        let factors = []

        if (subtractNext) {
            subtractNext = false
            factors.push(Integer.of(-1))
        }
        while (i <= end) {
            const curr = nodes[i]
            if (isUnaryMinus(i)) {
                factors.push(Integer.of(-1))
                i++
                continue
            }
            if (isAddition(curr)) {
                i++
                break
            }
            if (isSubtraction(curr)) {
                subtractNext = true
                i++
                break
            }
            if (isOpenParen(curr)) {
                let stack = 1
                let j = i
                while (stack > 0 && j < end) {
                    j++
                    const n = nodes[j]
                    if (n.type !== "string") continue
                    if (n.content === "(") stack++
                    if (n.content === ")") stack--
                }
                if (j == i + 1) {
                    return null
                }
                const parenExp = group(nodes, i + 1, j - 1)
                if (parenExp != null) {
                    factors.push(parenExp)
                }
                i = j + 1
                continue
            }
            if (isDot(curr)) {
                i++
                continue
            }

            // Once an integral macro is seen, consume all remaining
            // nodes until end as part of the integral. The produced
            // behavior is that integrals must be wrapped in parens
            // if they are not the last factor in a product.
            if (isIntegral(curr)) {
                let lastD = null

                for (let j = i + 1; j <= end; j++) {
                    const n = nodes[j]
                    if (n.type === "string" && n.content === "d") {
                        // console.log("found d at " + j)
                        lastD = j
                    }
                }

                if (lastD == null) {
                    return null
                }

                let integrand
                if (i + 1 > lastD - 1) {
                    integrand = Integer.of(1)
                } else {
                    integrand = group(nodes, i + 1, lastD - 1)
                }
                if (integrand == null) {
                    return null
                }

                // If there is no specified variable
                if (lastD + 1 > end) {
                    return null
                }

                // TODO: I'm doing the recursion wrong? maybe?

                // If there is addition after the "d", don't include
                // it in the integration variable.

                // Index of the first addition op after the D (if there is one)
                const plusIndex = findNextTopLevelSum(lastD + 1);

                let variable
                if (plusIndex === -1) {
                    variable = group(nodes, lastD + 1, end)
                } else {
                    variable = group(
                        nodes,
                        lastD + 1,
                        plusIndex - 1
                    )
                }

                if (variable == null) return null

                const result = Integral.of(integrand, variable)
                // console.log(result.toUnambigiousString())
                factors.push(result)
                if (plusIndex !== -1) {
                    i = plusIndex 
                } else {
                    i = end + 1
                }
                break
            }

            if (isLog(curr)) {
                i++
                const next = nodes[i]
                if (next === undefined) {
                    return null
                }
                let base
                if (next.type === "macro" && next.content === "_") {
                    base = group(next.args[0].content)
                    i++
                } else {
                    base = Integer.of(10)
                }

                factors.push(Logarithm.of(v("Not read"), base))
                //TODO: Finish log

                continue
            }

            let derivative = isDerivative(curr);
            if (derivative) {
                // Get index of next addition (add it to i)
                const plusIndex = findNextTopLevelSum(i+1)

                let exp;
                if (plusIndex === -1) {
                    exp = group(nodes, i+1, end)
                } else {
                    exp = group(nodes, i+1, plusIndex - 1)
                }

                if (exp == null) {
                    // There was no expression after the 
                    // derivation symbol
                    return null
                }

                factors.push(Derivative.of(exp, derivative))
                if (plusIndex !== -1) {
                    i = plusIndex
                } else {
                    i = end + 1
                }
                continue;
            }

            const interpretation = interpret(curr);
            if (interpretation) {
                factors.push(interpretation)
            }
            i++
        }

        if (factors.length > 0) {
            terms.push(productOrNot(...factors))
        }
    }

    if (terms.length === 0) {
        return null
    }
    return sumOrNot(...terms)
}
