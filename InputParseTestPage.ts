import { Expression } from "./mathlib/expressions/Expression";
import { EditableMathView } from "./mathlib/uielements/EditableMathView";
import { parse, parseExpression } from "./mathlib/userinput/Parser";

/**
 * Called after DOM is loaded.
 * Substitutes the body element in the document
 * with the primary integrator view.
 */
export function loadInputParseTestPage() {
    const page = document.getElementsByTagName('body')[0] as HTMLBodyElement

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

    function expression(input: string) {
        p(input)
        view(parseExpression(input))
    }

    // Expression strings to test
    
}