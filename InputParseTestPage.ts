import { Expression } from "./mathlib/expressions/Expression";
import { EditableMathView } from "./mathlib/uielements/EditableMathView";
import { parseExpression, parseToLatex } from "./mathlib/userinput/Parser";

/**
 * Called after DOM is loaded.
 * Substitutes the body element in the document
 * with the primary integrator view.
 */
export function loadInputParseTestPage() {
    const page = document.getElementsByTagName('body')[0] as HTMLBodyElement
    page.style.padding = "8ch"

    function p(content: string) {
        const e = document.createElement('p')
        e.innerText = content
        page.append(e)
    }

    function view(exp: Expression) {
        const e = new EditableMathView()
        e.value = exp
        page.append(e)
    }

    function expression(input: string, explanation: string | null = null) {
        p("Input:       " + input)
        if (explanation != null) p(explanation)
        //p(`Parsed: ${parseToLatex(input)}`)
        
        view(parseExpression(input)!)
    }

    // Expression strings to test
    expression("a^b+c", "The +c shouldn't be in the exponent")

    expression("-a-b+c")
    expression("-a+-b+c")
    expression("a+b+c")
    expression("a+(b+c)")
    expression("a-b-c")
    expression("a*b+c")
    expression("a/b+c")
    expression("a/b/c")
    
}