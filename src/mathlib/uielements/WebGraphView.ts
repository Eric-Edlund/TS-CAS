import { Argument } from "../Argument";
import { Expression } from "../expressions/Expression";
import { GraphEdge, Graph } from "../Graph";
import { Relationship } from "../Relationship";
import { num } from "../ConvenientExpressions";
import { GraphMinipulator } from "../GraphMinipulator";
import { assert } from "../util/assert";
import { TouchGestureRecognizer } from "./TouchGestureRecognizer";
import { EdgeView } from "./EdgeView";
import { ExpressionNodeView } from "./ExpressionNodeView";
import { ArgumentNodeView } from "./ArgumentNodeView";
import { GraphNodeView } from "./GraphNodeView";
import { ExplanationPopup } from "./ExplanationPopup";
import { MathGraphNode } from "../MathGraphNode";

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
        this.explanationPopups = []

        if (config != undefined) {
            this.showArguments = config.showArguments
            this.drawEdgeLines = config.drawEdgeLines
            this.debugCornerEnabled = config.debugCornerEnabled
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

        this.resizeObserver.observe(this)

        this.addEventListener("wheel", (event) => {
            const mousePos = Point(event.offsetX, event.offsetY)

            const scaleDelta = Math.pow(0.8, event.deltaY / 360)
            this.scale = scaleDelta * this.scale

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
     * Set a function that determines the color of a node.
     * @param colorFn 
     */
    public setNodeColoringScheme(colorFn: (n: MathGraphNode) => string) {
        this.nodeColorFn = colorFn
        this.propogateSettingsToNodes()
    }
    private nodeColorFn: (n: MathGraphNode) => string = (n) => "lightblue"

    private propogateSettingsToNodes(): void {
        this.nodes.forEach((view, node) => {
            view.backgroundColor = this.nodeColorFn(node)
        })
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
                const view = new ExpressionNodeView(node, this.baseNodeStyle)
                view.style.position = "absolute"
                this.nodes.set(node, view)
                this.append(view)
            } else if (node instanceof Argument) {
                if (!this.showArguments) return;
                const view = new ArgumentNodeView(node, this.baseNodeStyle)
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
            const view = new EdgeView(this, edge)
            view.style.position = "absolute"
            this.edges.set(edge, view)
            this.append(view)
        })

        this.propogateSettingsToNodes()

        if (this.debugCornerEnabled) {
            const corner = document.createElement('p')
            corner.innerHTML = "Graph Nodes: " + this.graph.getNodes().size + "<br>"
                             + "Visible Nodes: " + this.nodes.size + "<br>"
                             + "Graph Edges: " + this.graph.getEdges().size + "<br>"
                             + "Visible Edges: " + this.edges.size + "<br>"
            corner.style.zIndex = "100"
            corner.style.backgroundColor = "white"
            corner.style.width = "fit-content"
            corner.style.margin = "0"
            corner.style.padding = "1ch"
            corner.style.border = "black 1px solid"
            corner.style.position = "absolute"
            this.append(corner)            
        }

        this.repOk()
    }

    public connectedCallback() {
        this.readGraph()
        this.arrange()
        this.updateOffset()
    }

    /**
     * Pick places for all the nodes/edges on the screen.
     * Populates the position* rep vars.
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
            // The starting angular offset to add the stepsize to
            // Making it non-zero stops things from aligning
            const stepOffset = (Math.PI / 3.5) * depth
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
            let radius = Math.max(nodes.size * nodeRadius / Math.PI, lastRadius + (3*nodeRadius))
            if (depth == 0 && nodes.size == 1) radius = 0
            lastRadius = radius;
    
            const ns = [...nodes]// TODO, assign a meaningful ordering

            ns.forEach((node, index) => {
                const view = this.nodes.get(node)!;
                //view.style.width = "" + smallR + "px"
                //view.style.height = "" + smallR + "px"

                // Get the cartesian point from the radius and angle
                const x = radius * Math.cos(stepSize * index + stepOffset) + center.x
                const y = radius * Math.sin(stepSize * index + stepOffset) + center.y
                this.nodePositions.set(view, Point(x, y))
            })

            const ring = document.createElement("div")
            ring.style.border = "lightgray solid 0.3ch"
            ring.style.borderRadius = "100%"
            ring.style.position = "absolute"
            ring.style.zIndex = "-10"
            this.appendChild(ring)
            this.ringElements.add(ring)
            this.ringPositions.set(ring, {radius: radius})
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
            const adjustedCenterPos = applyScale({
                x: center.x + this.offsetX,
                y: center.y + this.offsetY,
            })
            view.style.left = "" + (adjustedCenterPos.x - (pos.radius * scale)) + "px"
            view.style.top = "" + (adjustedCenterPos.y - (pos.radius * scale)) + "px"
            view.style.width = "" + pos.radius * 2 * scale + "px"
            view.style.aspectRatio = "1"
        })

        this.explanationPopups.forEach(val => {
            const view = val.e
            const pos = val.pos
            const adjusted = applyScale({
                x: pos.x + this.offsetX,
                y: pos.y + this.offsetY,
            })
            view.style.left = "" + (adjusted.x  - (0.5 * view.offsetWidth)) + "px"
            view.style.top = "" + (adjusted.y  - (0.5 * view.offsetHeight)) + "px"
        })
        this.repOk()
    }

    /**
     * Map from relative screen coordinates (where tl of this view is (0,0))
     * to the internal coordinate system we're using.
     */
    private getInternalPos(pixelPos: Point): Point {
        const center = this.center;
        const scale = this.scale
        
        return Point (
            (pixelPos.x - center.x) / scale + center.x - this.offsetX,
            (pixelPos.y - center.y) / scale + center.y - this.offsetY,
        )
    }

    /**
     * React to an edge being clicked.
     * @param view In this view
     * @param event The click event
     */
    public edgeClicked(view: EdgeView, event: MouseEvent): void {
        // TODO: Don't allow dupliate explanation popups
        
        if (view.edge instanceof Argument) {
            const popup = new ExplanationPopup(view.edge, () => {
                this.removeChild(popup)
                for(let i=0; i < this.explanationPopups.length; i++) {
                    if (this.explanationPopups[i].e === popup) {
                        this.explanationPopups.splice(i, 1)
                        break
                    }     
                }
            })
            const rect = this.getBoundingClientRect();
            const realtiveX = event.clientX - rect.left;
            const relativeY = event.clientY - rect.top;
            //TODO: The position isn't correct
            //TODO: Algorithm for picking where we should put the popup so it stays out
            // of the way of the graph
            this.explanationPopups.push({
                e: popup, 
                pos: this.getInternalPos(Point(realtiveX, relativeY)),
            })
            popup.style.position = "absolute"
            this.append(popup)
            this.updateOffset()
        }
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
    private readonly ringPositions: Map<HTMLElement, {radius: number}>;

    /**
     * Position of top left of popup
     */
    private readonly explanationPopups: {e: ExplanationPopup, pos: Point}[]

    private readonly gestureRecognizer: TouchGestureRecognizer;

    // If the graph should draw argument nodes.
    private showArguments: boolean = false;
    private drawEdgeLines: boolean = false;
    private debugCornerEnabled: boolean = false;

    private readonly resizeObserver = new ResizeObserver(_ => {
        this.arrange()
        this.updateOffset()
    })

    private readonly baseNodeStyle = (view: GraphNodeView): void => {
        view.style.borderRadius = "1ch"
        view.style.backgroundColor = "lightblue"
        view.style.zIndex = "5"
    }
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

    /**
     * If true, shows a box in the corner of the view
     * that gives debug info about the graph.
     */
    debugCornerEnabled: boolean;
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
