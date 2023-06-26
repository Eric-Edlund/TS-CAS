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
        table.style.width = '80%'
        const row = document.createElement('tr')
        table.appendChild(row)

        function append(cell: HTMLTableCellElement): void {
            cell.style.border = "1px solid black"
            row.appendChild(cell)
        }

        const data1 = document.createElement('td')
        const data2 = document.createElement('td')
        const data3 = document.createElement('td')
        append(data1)
        append(data2)
        append(data3)

        data1.appendChild(view(start))
        const graph = new Graph();
        graph.addNode(start)
        const deriver = new Deriver(graph)
        deriver.expand(40)

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
            const data4 = document.createElement('td')
            const data5 = document.createElement('td')
            const data6 = document.createElement('td')
            append(data4)
            append(data5)
            append(data6)
            data4.innerHTML = results[0].toUnambigiousString() + "<br>" + answ.toUnambigiousString()
            data5.innerHTML = "Hashes: <br>" + results[0].hash + "<br>" + answ.hash
            data6.innerHTML = "IDs: " + results[0].id + "<br>" + answ.id 
        }
    }

    /**
     * Wrapper for simplify that parses strings
     * @param input 
     * @param answ 
     */
    function pSimp(input: string, answ: string) {
        const inputExp = parseExpression(input)
        const answExp = parseExpression(answ)
        simplify(inputExp, answExp)
    }

    // Expressions and their correct simplifications
    simplify(sum(x, x), product(num(2), x))
    simplify(product(x, x), pow(x, num(2)))
    simplify(sum(a, a, b), sum(product(num(2), a), b))
    simplify(product(pow(a, b), pow(c, b)), product(pow(a, b), pow(c, b)))
    simplify(product(pow(a, b), pow(a, c)), pow(a, sum(b, c)))
    simplify(product(pow(a, b), pow(a, b)), pow(a, product(num(2), b)))
    pSimp("(a+b)(a+b)", "(a+b)^2")
    pSimp("(a+b)(a-b)", "a^2-b^2")
    
}