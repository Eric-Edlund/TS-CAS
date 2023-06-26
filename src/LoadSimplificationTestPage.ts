import { parse } from "mathjs";
import { a, b, c, d, fraction, negative, num, pow, product, sum, x, y } from "./mathlib/ConvenientExpressions";
import { Deriver } from "./mathlib/derivations/Deriver";
import { Exponent } from "./mathlib/expressions/Exponent";
import { Expression } from "./mathlib/expressions/Expression";
import { Logarithm } from "./mathlib/expressions/Logarithm";
import { Graph } from "./mathlib/Graph";
import { EditableMathView } from "./mathlib/uielements/EditableMathView";
import { parseExpression } from "./mathlib/userinput/AntlrMathParser";
import { PowerContext } from "./mathlib/userinput/arithmeticParser";

/**
 * Called after DOM is loaded.
 * Substitutes the body element in the document
 * with the primary integrator view.
 */
export function loadSimplificationTestPage() {
    const page = document.getElementsByTagName('body')[0] as HTMLBodyElement
    page.style.padding = "8ch"

    function p(content: string): HTMLElement {
        const e = document.createElement('p')
        e.innerText = content
        return e
    }

    function view(exp: Expression): HTMLElement {
        const e = new EditableMathView()
        e.value = exp
        return e
    }

    /**
     * Print the parsed expression to the page.
     * @param input User input string to parse.
     * @param explanation 
     */
    function expression(input: string, explanation: string | null = null) {
        page.append(p("Input:       " + input))
        if (explanation != null) page.append(p(explanation))
        page.append(view(parseExpression(input)! as Expression))
    }

    /**
     * Adds a test column to the page.
     * @param start 
     * @param answ The correct simplification of the expression.
     */
    function simplify(start: Expression, answ: Expression): void {
        const table = document.createElement('table')
        table.style.border = "1px solid black"
        table.style.width = '70%'
        const row = document.createElement('tr')
        table.appendChild(row)

        const data1 = document.createElement('td')
        const data2 = document.createElement('td')
        const data3 = document.createElement('td')
        row.appendChild(data1)
        row.appendChild(data2)
        row.appendChild(data3)
        data1.style.border = "1px solid black"
        data2.style.border = "1px solid black"
        data3.style.border = "1px solid black"

        data1.appendChild(view(start))
        const graph = new Graph();
        graph.addNode(start)
        const deriver = new Deriver(graph)
        deriver.expand(10)

        const results = deriver.simplifiedExpressions
        console.log(results.length)
        data2.appendChild(view(results[0]))
        data3.appendChild(view(answ))

        page.append(table)

        // Conditional formatting
        if (results[0] === answ) {
            data2.style.backgroundColor = "lightgreen"
        } else {
            data2.style.backgroundColor = "red"
        }
    }

    // Expressions and their correct simplifications
    simplify(sum(x, x), product(num(2), x))
    simplify(product(x, x), pow(x, num(2)))
    
}