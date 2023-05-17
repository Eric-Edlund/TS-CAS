import { Argument } from "../Argument"
import { Expression } from "../expressions/Expression"
import { GraphEdge } from "../Graph"
import { inMath, inMathBlock, inRow } from "../util/MathMLHelpers"

export class ExplanationPopup extends HTMLDivElement {

    /**
     * 
     * @param arg 
     * @param onClose Called after user clicks close button.
     */
    public constructor(arg: Argument, onClose: () => void) {
        super()
        this.arg = arg
        this.onClose = onClose

        const closeButton = document.createElement('b')
        closeButton.addEventListener('click', () => {
            this.onClose()
        })
        closeButton.textContent = "Close"
        closeButton.style.userSelect = "none"
        closeButton.style.float = "right"
        this.append(closeButton)

        const text = document.createElement('div')
        text.innerHTML = arg.argument + "<br>"
        if (arg.claim.n instanceof Expression && arg.claim.n1 instanceof Expression)
        text.innerHTML += inMathBlock(inRow(arg.claim.n.toMathXML() + " <mo>" + arg.claim.r + "</mo> " + arg.claim.n1.toMathXML())) + "<br> Derived from: <br>" 
        for (const ground of arg.grounds) {
            if (ground instanceof Expression)
                text.innerHTML += inMath(ground.toMathXML()) + "<br>"
        }
        this.append(text)

        
        this.style.backgroundColor = "white"
        this.style.border = "1px solid black"
        this.style.boxShadow = "0.3ch 0.3ch 0.6ch rgba(0, 0, 0, 0.5)"
        this.style.padding = "1ch"
        this.style.width = "fit-content"
        this.style.zIndex = "15"
    }

    public connectedCallback(): void {
        MathJax.typeset([this])
    }

    private readonly arg: Argument
    private readonly onClose: () => void
}

customElements.define("explanation-popup", ExplanationPopup, {extends: "div"});

declare const MathJax: any