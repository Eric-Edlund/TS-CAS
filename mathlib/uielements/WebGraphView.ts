import { Argument } from "../Argument";
import { Expression } from "../expressions/Expression";
import { GraphEdge, Graph, MathGraphNode } from "../Graph";
import { Inference } from "../Inference";
import { ExpressionEdge } from "../ExpressionEdge";
import { Relationship } from "../Relationship";
import { num } from "../ConvenientExpressions";
import { GraphMinipulator } from "../GraphMinipulator";
import { assert } from "../util/assert";
import { TouchGestureRecognizer } from "../../TouchGestureRecognizer";
import { EdgeView } from "./EdgeView";
import { ExpressionNodeView } from "./ExpressionNodeView";
import { ArgumentNodeView } from "./ArgumentNodeView";
import { GraphNodeView } from "./GraphNodeView";

/**
 * A ui element that will display a math graph in a web.
 */
export class WebGraphView extends HTMLDivElement {
    /**
     * @param graph Must be fully connected.
     * @param roots Non-empty.
     */
    public constructor(graph: Graph, roots: Set<MathGraphNode>, config: WebGraphViewInitSettings | undefined = undefined){
        super();
        this.graph = graph;
        this.nodes = new Map<MathGraphNode, GraphNodeView>();
        this.offsetX = 0;
        this.offsetY = 0;
        this.nodePositions = new Map();
        this.edgePositions = new Map();
        this.edges = new Map();
        this.rootNodes = new Set(roots);
        this.ringElements = new Set();
        this.ringPositions = new Map();

        if (config != undefined) {
            this.showArguments = config.showArguments
            this.drawEdgeLines = config.drawEdgeLines
        }

        this.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
        this.style.position = "relative"
        this.style.overflow = "hidden"

        this.addEventListener("mousedown", event => {
            this.mouseDown = true
            this.touchDown = false
        })
        this.addEventListener("mouseup", event => {
            this.mouseDown = false
        })
        this.addEventListener("mouseleave", event => {
            this.mouseDown = false
        })
        this.addEventListener("mousemove", (event: MouseEvent) => {
            if (!this.mouseDown) return
            this.offsetX += event.movementX / this.scale
            this.offsetY += event.movementY / this.scale
            this.updateOffset()
        })

        this.addEventListener("wheel", (event) => {
            this.scale = Math.pow(0.8, event.deltaY / 360) * this.scale
            this.updateOffset()
            return true
        })

        this.gestureRecognizer = new TouchGestureRecognizer();
        this.addEventListener("touchdown", this.gestureRecognizer.processTouchDown)
        this.addEventListener("touchend", this.gestureRecognizer.processTouchEnd)
        this.addEventListener("touchcancel", this.gestureRecognizer.processTouchCancel)
        this.addEventListener("touchmove", this.gestureRecognizer.processTouchMove)
        this.gestureRecognizer.addPinchListener((center, scaleDelta, fingers) => {

        })
        this.repOk()
    }

    /**
     * Sets if the view should show argument nodes as nodes.
     * False by default.
     * @param val 
     */
    public setShowArguments(val: boolean) {
        this.showArguments = true
        this.readGraph()
        this.arrange()
        this.updateOffset()
    }

    private get center(): {x: number, y: number} {
        return {
            x: this.offsetWidth / 2,
            y: this.offsetHeight / 2,
        }
    }

    /**
     * Follows the showArgument setting.
     * Populates this.nodes, this.edges,
     * adds the created views to the shadow dom
     * to match the graph.
     * Removes any pre-existing elements from the shadow dom.
     */
    private readGraph(): void {
        // Clear existing
        this.nodes.forEach((view, node) => {
            this.removeChild(view)
        })
        this.nodes.clear()
        this.edges.forEach((view, edge) => {
            this.removeChild(view)
        })
        this.edges.clear()

        // Fetch nodes
        this.graph.getNodes().forEach(node => {
            if (node instanceof Expression) {
                const view = new ExpressionNodeView(node)
                view.style.position = "absolute"
                this.nodes.set(node, view)
                this.append(view)
            } else if (node instanceof Argument) {
                if (!this.showArguments) return;
                const view = new ArgumentNodeView(node)
                view.style.position = "absolute"
                this.nodes.set(node, view)
                this.append(view)
                
            } else throw new Error("Graph contains node WebGraphView can't process.")
            
        })

        // Fetch edges
        GraphMinipulator.dropSymmetric(this.graph.getEdges()).filter(edge => {
            // Only consider edges for which we have both endpoints on the view
            return this.nodes.has(edge.n) && this.nodes.has(edge.n1);
        }).forEach(edge => {
            const view = new EdgeView(edge)
            view.style.position = "absolute"
            this.edges.set(edge, view)
            this.append(view)
        })

        this.repOk()
    }

    public connectedCallback() {
        this.readGraph()
        this.arrange()
        this.updateOffset()
    }

    /**
     * Pick places for all the nodes/edges on the screen.
     * Populates the position_* rep vars.
     */
    private arrange(): void {
        this.nodePositions.clear()
        this.edgePositions.clear()
        this.ringPositions.clear()
        this.ringElements.forEach(e => {
            this.removeChild(e)
        })
        this.ringElements.clear()
     
        // Place nodes on a series of rings from the center using their depth in the graph
        const levels = GraphMinipulator.getLevels(this.graph, this.rootNodes, (node) => {
            if (node instanceof Expression) return true
            else if (node instanceof Argument) return this.showArguments
            else throw new Error("New type of node")
        })

        let maxDepth = 0;
        levels.forEach((_, depth) => {
            maxDepth = Math.max(maxDepth, depth)
        })

        const center = {x: (this.clientWidth / 2), y: this.clientHeight / 2};
        let lastRadius = 0 //px
        for (let depth = 0; depth < maxDepth + 1; depth++) {
            const nodes = levels.get(depth)!
            
            // Organize the root nodes on a circle around the center
            const stepSize = (2 * Math.PI) / nodes.size;
            /**
             * Calculating the radius of the circle
             * Suppose every root node on the starting circle requires
             * a circular space to be drawn with radius nodeRadius
             * A starting circle with n of these nodes would require a 
             * circumference of n * 2nodeRadius.
             * The circumference of a circle can be expressed
             * as 2*pi*r
             * => r = n * 2 * smallR / (2 * pi)
             *      = n * smallR / pi
             */
            const nodeRadius = 70; // pixels
            const radius = Math.max(nodes.size * nodeRadius / Math.PI, lastRadius + (3*nodeRadius))
            lastRadius = radius;
    
            const ns = [...nodes]// TODO, assign a meaningful ordering

            ns.forEach((node, index) => {
                const view = this.nodes.get(node)!;
                //view.style.width = "" + smallR + "px"
                //view.style.height = "" + smallR + "px"

                // Get the cartesian point from the radius and angle
                const x = radius * Math.cos(stepSize * index) + center.x
                const y = radius * Math.sin(stepSize * index) + center.y
                this.nodePositions.set(view, Point(x, y))
            })

            const ring = document.createElement("div")
            ring.style.width = "" + (2 * radius) + "px"
            ring.style.height = "" + (2 * radius) + "px"
            ring.style.border = "lightgray solid 0.3ch"
            ring.style.borderRadius = "100%"
            ring.style.position = "absolute"
            ring.style.zIndex = "-10"
            this.appendChild(ring)
            this.ringElements.add(ring)
            this.ringPositions.set(ring, {x: center.x, y: center.y})
        }

        // Now arange the edges
        this.edges.forEach((view, edge) => {
            // Find the middle of the two endpts
            const firstX = this.nodePositions.get(this.nodes.get(edge.n)!)!.x;
            const firstY = this.nodePositions.get(this.nodes.get(edge.n)!)!.y;
            const secondX = this.nodePositions.get(this.nodes.get(edge.n1)!)!.x;
            const secondY = this.nodePositions.get(this.nodes.get(edge.n1)!)!.y;
            const x = (firstX + secondX) / 2
            const y = (firstY + secondY) / 2
            const angle = Math.atan2(secondY - firstY, secondX - firstX)
            this.edgePositions.set(view, {x: x, y: y, angle: angle})
        })

        this.repOk()
    }

    /**
     * Update the draw position of the nodes on the screen
     * to match the offset in rep. Assumes all views have a position
     * stored in the rep. Call arrange() first.
     * Also applies the scale factor to the final draw positions, 
     * invisible to everyone else.
     */
     private updateOffset(): void {

        const center = this.center;
        const scale = this.scale

        function applyScale(i: Point): Point {
            return Point(
                ((i.x)-center.x) * scale + center.x,
                ((i.y)-center.y) * scale + center.y
            )
        }

        this.nodePositions.forEach((pos, view) => {
            const adjusted = applyScale({
                x: pos.x + this.offsetX,
                y: pos.y + this.offsetY,
            })
            view.style.left = "" + (adjusted.x - (0.5 * view.offsetWidth)) + "px"
            view.style.top = "" + (adjusted.y - (0.5 * view.offsetHeight)) + "px"
        })

        this.edgePositions.forEach((pos, view) => {
            view.setAngle(pos.angle)
            if (this.drawEdgeLines) {
                const firstPos = this.nodePositions.get(this.nodes.get(view.first)!)!
                const secondPos = this.nodePositions.get(this.nodes.get(view.second)!)!
                view.width = "" +  (scale * Math.hypot(secondPos.x - firstPos.x, secondPos.y - firstPos.y)) + "px"
                view.style.borderBottom = "black 0.1ch solid"
                view.style.borderTop = "black 0.1ch solid"
            } else {
                view.width = "fit-content"
                view.style.borderBottom = "none"
                view.style.borderTop = "none"
            }
            
            const adjusted = applyScale({
                x: pos.x + this.offsetX,
                y: pos.y + this.offsetY,
            })

            view.style.left = "" + (adjusted.x  - (0.5 * view.offsetWidth)) + "px"
            view.style.top = "" + (adjusted.y  - (0.5 * view.offsetHeight)) + "px"
        })
    
        // Overlay elements change size with scale
        this.ringPositions.forEach((pos, view) => {
            const adjustedPos = applyScale({
                x: pos.x + this.offsetX - (0.5 * view.offsetWidth),
                y: pos.y + this.offsetY - (0.5 * view.offsetHeight),
            })
            view.style.left = "" + adjustedPos.x + "px"
            view.style.top = "" + adjustedPos.y + "px"
            view.style.scale = "" + this.scale
            view.style.transformOrigin = "0 0"
        })
        this.repOk()
    }

    private repOk(): void {
        assert (this.rootNodes.size > 0)
        assert(GraphMinipulator.isConnected(this.graph), "Graph not connected")
    }

    private graph: Graph;
    private readonly nodes: Map<MathGraphNode, GraphNodeView>;
    // The Position of the center of the node.
    private readonly nodePositions: Map<GraphNodeView, Point>;
    private readonly edges: Map<{n: MathGraphNode, n1: MathGraphNode, e: GraphEdge}, EdgeView>;
    private readonly edgePositions: Map<EdgeView, AnglePoint>;
    // Amt to add to left coordinate
    private offsetX: number;
    // Added to top coordinate of nodes
    private offsetY: number;
    // if the mouse is down
    private mouseDown: boolean = false;
    private touchDown: boolean = false;

    private scale: number = 1;

    private readonly rootNodes: Set<MathGraphNode>;

    private readonly ringElements: Set<HTMLElement>;
    private readonly ringPositions: Map<HTMLElement, Point>;

    private readonly gestureRecognizer: TouchGestureRecognizer;

    // If the graph should draw argument nodes.
    private showArguments: boolean = false;
    private drawEdgeLines: boolean = false;
    
}

customElements.define("web-graphview", WebGraphView, {extends: "div"});

export interface WebGraphViewInitSettings {
    /**
     * If the view should display argument nodes as nodes.
     * Helpful for debugging.
     */
    showArguments: boolean;

    /**
     * If true, draws a line for every edge connecting
     * its two end points. (Notates direction of connection)
     */
    drawEdgeLines: boolean;
}

type Point = {x: number, y: number}
type AnglePoint = Point & {angle: number/*Radians */}

function Point(x: number, y: number, angle: number | undefined = undefined): Point | AnglePoint {
    if (angle == undefined)
        return {
            x: x,
            y: y,
        }
    return {
        x: x,
        y: y,
        angle: angle,
    }
}
