import { Expression } from "./mathlib/expressions/Expression";
import { EditableMathView } from "./mathlib/uielements/EditableMathView";
import { parseExpression } from "./mathlib/userinput/AntlrMathParser";

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

    /**
     * Print the parsed expression to the page.
     * @param input User input string to parse.
     * @param explanation 
     */
    function expression(input: string, explanation: string | null = null) {
        p("Input:       " + input)
        if (explanation != null) p(explanation)
        view(parseExpression(input)! as Expression)
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
    
}