import { Argument } from "../Argument"
import { GraphEdge } from "../Graph"

export class ExplanationPopup extends HTMLDivElement {
    public constructor(arg: Argument) {
        super()
        this.arg = arg

        const text = document.createElement('p')
        this.append(text)

        text.textContent = arg.argument
        
    }

    private readonly arg: Argument
}