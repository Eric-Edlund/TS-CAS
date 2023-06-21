import { parse } from "mathjs";
import { a, b, c, d, fraction, negative, num, product, sum, x, y } from "./mathlib/ConvenientExpressions";
import { Exponent } from "./mathlib/expressions/Exponent";
import { Expression } from "./mathlib/expressions/Expression";
import { Logarithm } from "./mathlib/expressions/Logarithm";
import { EditableMathView } from "./mathlib/uielements/EditableMathView";
import { parseExpression } from "./mathlib/userinput/AntlrMathParser";
import { PowerContext } from "./mathlib/userinput/arithmeticParser";

/**
 * Called after DOM is loaded.
 * Substitutes the body element in the document
 * with the primary integrator view.
 */
export function loadInputParseTestPage() {
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
     * Takes an internal expression, converts it
     * to a string, then parses that string into 
     * an expression.
     * @param input 
     */
    function twoWay(input: Expression): void {
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

        data1.appendChild(view(input))
        const text = p(input.toUnambigiousString())
        text.style.display = "block"
        text.style.textAlign = "center"
        data2.appendChild(text)
        const parseResult = parseExpression(input.toUnambigiousString())
        data3.appendChild(view(parseResult))
        page.append(table)

        // Conditional formatting
        if (input === parseResult) {
            data3.style.backgroundColor = "lightgreen"
        } else {
            data3.style.backgroundColor = "red"
        }
    }

    // Expression strings to test
    expression("a^b+c", "The +c shouldn't be in the exponent")
    expression("a+b^c")
    expression ("(a+b)^c")

    expression("-a-b+c")
    expression("-a+-b+c")
    expression("a+b+c")
    expression("-(a+b)")
    expression("-a(a+b)")
    expression("a+(b+c)")
    expression("a-b-c")
    expression("a*b+c")
    expression("a/b+c")
    expression("a/b/c")
    expression("abx-d")
    expression("-abx-d")
    expression("-a-bx-d")
    expression("abcd")
    expression("a*b*c*d")
    expression("ab*cd")

    expression("int4x+2")
    expression("int(4x+2)")

    expression("logx")
    expression("log(x)")

    twoWay(sum(x, y, a, b, c))
    twoWay(sum(a, Exponent.of(b, c)))
    twoWay (Exponent.of(sum(a, b), c))
    twoWay(sum(negative(a), negative(b), c))
    twoWay(sum(a, b, c))
    twoWay(negative(sum(a, b)))
    twoWay(product(negative(a), sum(a, b)))
    twoWay(negative(product(a, sum(a, b))))
    twoWay(sum(a, sum(b, c)))
    twoWay(sum(a, negative(b), negative(c)))
    twoWay(sum(product(a, b), c))
    twoWay(sum(fraction(a, b), c))
    twoWay(fraction(fraction(a, b), c))
    twoWay(sum(product(a, b, x), d))
    twoWay(sum(negative(product(a, b, x)), negative(d)))
    twoWay(sum(negative(a), negative(product(b,x)), negative(d)))
    twoWay(product(a, b, c, d))
    // twoWay("ab*cd")
    // twoWay("int4x+2")
    // twoWay("int(4x+2)")
    twoWay(Logarithm.of(x, num(10)))
    
}