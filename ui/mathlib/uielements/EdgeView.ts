import { Argument } from "../Argument"
import { GraphEdge } from "../Graph"
import { Relationship } from "../Relationship"
import { uiPreferences } from "./UIPreferences"
import { WebGraphView } from "./WebGraphView"
import { GivenEdge } from "../Graph"
import { MathGraphNode } from "../MathGraphNode"
import { assert } from "../util/assert"

/**
 * Represents an edge in a graph.
 */
export class EdgeView extends HTMLParagraphElement {
    public constructor(
        owner: WebGraphView,
        edge: { n: MathGraphNode; n1: MathGraphNode; e: GraphEdge }
    ) {
        super()
        this.owner = owner
        this.edge = edge.e
        this.first = edge.n
        this.second = edge.n1
        Object.freeze(this.edge)

        this.style.width = "fit-content"
        this.style.height = "fit-content"
        this.style.padding = "0"
        this.style.zIndex = "-2"
        this.style.margin = "0"
        this.style.whiteSpace = "nowrap"
        this.style.textAlign = "center"
        this.style.backgroundColor = uiPreferences.edgeEqualsBackgroundColor
        this.style.userSelect = "none"
        this.style.backgroundColor = "white"

        uiPreferences.onUpdate(() => {
            this.style.backgroundColor = uiPreferences.edgeEqualsBackgroundColor
        })

        this.addEventListener("click", event => {
            this.owner.edgeClicked(this, event)
        })
        this.addEventListener("mouseout", event => {})

        this.repOk()
    }

    /**
     * Sets rotation angle of view while also
     * letting it know the angle has changed.
     * @param rad
     */
    public setAngle(rad: number): void {
        this.style.rotate = "" + rad + "rad"
        //this.textContent = "" + (rad * 2 * Math.PI / 360).toFixed(2) + "deg"
    }

    /**
     * Sets element screen width and ensures text fits
     * inside the edge.
     */
    public set width(val: string) {
        super.style.width = val
    }

    /**
     * Called when element is conncted to the DOM.
     */
    public connectedCallback(): void {
        if (this.edge instanceof Argument) {
            this.textContent = "" + this.edge.claim.r
        } else if (this.edge instanceof GivenEdge) {
            this.textContent = "" + this.edge.r
        } else throw new Error("Not implemented for " + this.edge)
    }

    private repOk(): void {
        assert(this.first != undefined)
        assert(this.second != undefined)
    }

    private readonly owner: WebGraphView
    public readonly edge: GraphEdge
    public readonly first: MathGraphNode
    public readonly second: MathGraphNode
}

customElements.define("edge-view", EdgeView, { extends: "p" })
