import { Argument } from "../Argument"
import { GraphEdge } from "../Graph"

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

        const text = document.createElement('p')
        this.append(text)

        text.textContent = arg.argument
        this.style.backgroundColor = "lightgray"
        this.style.border = "1px solid black"
        this.style.padding = "1ch"
    }

    private readonly arg: Argument
    private readonly onClose: () => void
}

customElements.define("explanation-popup", ExplanationPopup, {extends: "div"});