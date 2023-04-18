/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ExpressionTestPageLoader.ts":
/*!*************************************!*\
  !*** ./ExpressionTestPageLoader.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadExpressionsTestPage = void 0;
const ConvenientExpressions_1 = __webpack_require__(/*! ./mathlib/ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const Derivative_1 = __webpack_require__(/*! ./mathlib/expressions/Derivative */ "./mathlib/expressions/Derivative.ts");
const Exponent_1 = __webpack_require__(/*! ./mathlib/expressions/Exponent */ "./mathlib/expressions/Exponent.ts");
const Fraction_1 = __webpack_require__(/*! ./mathlib/expressions/Fraction */ "./mathlib/expressions/Fraction.ts");
const Integral_1 = __webpack_require__(/*! ./mathlib/expressions/Integral */ "./mathlib/expressions/Integral.ts");
const EditableMathView_1 = __webpack_require__(/*! ./mathlib/uielements/EditableMathView */ "./mathlib/uielements/EditableMathView.ts");
/**
 * Called after the dom is loaded.
 * Populates the body element of the document
 * with the test expressions page
 */
function loadExpressionsTestPage() {
    const page = document.getElementsByTagName('body')[0];
    function p(content) {
        const e = document.createElement('p');
        e.innerText = content;
        page.append(e);
        return e;
    }
    function view(exp) {
        const e = new EditableMathView_1.EditableMathView();
        e.value = exp;
        page.append(e);
        return e;
    }
    p("The sum of a, a, and a");
    view((0, ConvenientExpressions_1.sum)(ConvenientExpressions_1.a, ConvenientExpressions_1.a, ConvenientExpressions_1.a));
    p("Integral of a over b with respect to c");
    view(Integral_1.Integral.of(Fraction_1.Fraction.of(ConvenientExpressions_1.a, ConvenientExpressions_1.b), ConvenientExpressions_1.c));
    p("Integral of (a over a) over b with respect to c");
    view(Integral_1.Integral.of(Fraction_1.Fraction.of(Fraction_1.Fraction.of(ConvenientExpressions_1.a, ConvenientExpressions_1.a), ConvenientExpressions_1.b), ConvenientExpressions_1.c));
    p("Integral of ((a over a) over a) over b with respect to c");
    view(Integral_1.Integral.of(Fraction_1.Fraction.of(Fraction_1.Fraction.of(Fraction_1.Fraction.of(ConvenientExpressions_1.a, ConvenientExpressions_1.a), ConvenientExpressions_1.a), ConvenientExpressions_1.b), ConvenientExpressions_1.c));
    p("Integral of (((a over a) over a) over a) over b with respect to c");
    view(Integral_1.Integral.of(Fraction_1.Fraction.of(Fraction_1.Fraction.of(Fraction_1.Fraction.of(Fraction_1.Fraction.of(ConvenientExpressions_1.a, ConvenientExpressions_1.a), ConvenientExpressions_1.a), ConvenientExpressions_1.a), ConvenientExpressions_1.b), ConvenientExpressions_1.c));
    p("Integral of ((((a over a) over a) over a) over a) over b with respect to c");
    view(Integral_1.Integral.of(Fraction_1.Fraction.of(Fraction_1.Fraction.of(Fraction_1.Fraction.of(Fraction_1.Fraction.of(Fraction_1.Fraction.of(ConvenientExpressions_1.a, ConvenientExpressions_1.a), ConvenientExpressions_1.a), ConvenientExpressions_1.a), ConvenientExpressions_1.a), ConvenientExpressions_1.b), ConvenientExpressions_1.c));
    p("");
    view((0, ConvenientExpressions_1.int)(Fraction_1.Fraction.of((0, ConvenientExpressions_1.sum)((0, ConvenientExpressions_1.negative)(ConvenientExpressions_1.b), Exponent_1.Exponent.of((0, ConvenientExpressions_1.sum)(ConvenientExpressions_1.x, ConvenientExpressions_1.a), Fraction_1.Fraction.of((0, ConvenientExpressions_1.num)(1), (0, ConvenientExpressions_1.num)(2)))), (0, ConvenientExpressions_1.product)((0, ConvenientExpressions_1.num)(2), ConvenientExpressions_1.a)), ConvenientExpressions_1.x));
    p("Product of x and y");
    view((0, ConvenientExpressions_1.product)(ConvenientExpressions_1.x, ConvenientExpressions_1.y));
    p("Product of (x-1), -1 and y");
    view((0, ConvenientExpressions_1.product)((0, ConvenientExpressions_1.sum)(ConvenientExpressions_1.x, (0, ConvenientExpressions_1.negative)((0, ConvenientExpressions_1.num)(1))), (0, ConvenientExpressions_1.num)(-1), ConvenientExpressions_1.y));
    p("Negation of x (Reped as the propduct of -1 and x)");
    view((0, ConvenientExpressions_1.negative)(ConvenientExpressions_1.x));
    p("Sum of x and -x");
    view((0, ConvenientExpressions_1.sum)(ConvenientExpressions_1.x, (0, ConvenientExpressions_1.negative)(ConvenientExpressions_1.x)));
    p("Sum of -x and x");
    view((0, ConvenientExpressions_1.sum)((0, ConvenientExpressions_1.negative)(ConvenientExpressions_1.x), ConvenientExpressions_1.x));
    p("Derivative of the square of x with respect to x");
    view(Derivative_1.Derivative.of(Exponent_1.Exponent.of(ConvenientExpressions_1.x, (0, ConvenientExpressions_1.num)(2)), ConvenientExpressions_1.x));
    p("Derivative ((x^2) - 2) with respect to x");
    view(Derivative_1.Derivative.of(Exponent_1.Exponent.of((0, ConvenientExpressions_1.sum)(ConvenientExpressions_1.x, (0, ConvenientExpressions_1.num)(-2)), (0, ConvenientExpressions_1.num)(2)), ConvenientExpressions_1.x));
    p("");
    view((0, ConvenientExpressions_1.num)(1));
    p("");
    view((0, ConvenientExpressions_1.num)(1));
    p("");
    view((0, ConvenientExpressions_1.num)(1));
    p("");
    view((0, ConvenientExpressions_1.num)(1));
}
exports.loadExpressionsTestPage = loadExpressionsTestPage;


/***/ }),

/***/ "./PrimaryPageLoader.ts":
/*!******************************!*\
  !*** ./PrimaryPageLoader.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadPrimaryPage = void 0;
const Algebra_1 = __webpack_require__(/*! ./mathlib/derivations/Algebra */ "./mathlib/derivations/Algebra.ts");
const ConvenientExpressions_1 = __webpack_require__(/*! ./mathlib/ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const Parser_1 = __webpack_require__(/*! ./mathlib/userinput/Parser */ "./mathlib/userinput/Parser.ts");
const WebGraphView_1 = __webpack_require__(/*! ./mathlib/uielements/WebGraphView */ "./mathlib/uielements/WebGraphView.ts");
const Integral_1 = __webpack_require__(/*! ./mathlib/expressions/Integral */ "./mathlib/expressions/Integral.ts");
const Fraction_1 = __webpack_require__(/*! ./mathlib/expressions/Fraction */ "./mathlib/expressions/Fraction.ts");
const Graph_1 = __webpack_require__(/*! ./mathlib/Graph */ "./mathlib/Graph.ts");
const Arithmetic_1 = __webpack_require__(/*! ./mathlib/derivations/Arithmetic */ "./mathlib/derivations/Arithmetic.ts");
/**
 * Called after DOM is loaded.
 * Substitutes the body element in the document
 * with the primary integrator view.
 * @returns
 */
function loadPrimaryPage() {
    const graph = new Graph_1.Graph();
    /*
    const left = sum(v('x'), num(2), num(2))
    const right = sum(v('y'), num(2))
    graph.addNode(left)
    graph.addNode(right)
    graph.addInference(new Inference(left, right, "Given by problem"))
    */
    //const root = Derivative.of(sum(a, a, product(num(2), b)), a)
    const root = Integral_1.Integral.of((0, ConvenientExpressions_1.fraction)(Fraction_1.Fraction.of(ConvenientExpressions_1.a, ConvenientExpressions_1.a), ConvenientExpressions_1.b), ConvenientExpressions_1.c);
    graph.addNode(root);
    graph.addGraph(Arithmetic_1.Arithmetic.expand(graph));
    graph.addGraph(Algebra_1.Algebra.expand(graph));
    graph.addGraph(Arithmetic_1.Arithmetic.expand(graph));
    graph.addGraph(Algebra_1.Algebra.expand(graph));
    //console.log("Result: " + graph)
    const input = document.getElementById("input");
    input.addEventListener("keyup", () => {
        (0, Parser_1.parse)(input.value);
    });
    const out = document.getElementById("outputbox");
    const config = {
        showArguments: false,
        drawEdgeLines: false,
    };
    const graphView = new WebGraphView_1.WebGraphView(graph, new Set([root]), config);
    graphView.setAttribute("id", "web-graphview");
    out.appendChild(graphView);
}
exports.loadPrimaryPage = loadPrimaryPage;


/***/ }),

/***/ "./TouchGestureRecognizer.ts":
/*!***********************************!*\
  !*** ./TouchGestureRecognizer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TouchGestureRecognizer = void 0;
/**
 * Interpret complicated touch gesture data.
 */
class TouchGestureRecognizer {
    constructor() {
        this.moveListeners = [];
        this.pinchListeners = [];
    }
    addMoveListener(callback) {
        this.moveListeners.push(callback);
    }
    /**
     * Adds a function that will be called when a pinch gesture has been detected.
     * @param callback Takes a center coordinate that's the average of the finger positions,
     *              the change in scale since the last call on (0, infinity) where 1 is no change,
     *              and the number of fingers in the gesture (an integer).
     */
    addPinchListener(callback) {
        this.pinchListeners.push(callback);
    }
    /**
     * Should take all touch events from the view using it.
     * @param event
     */
    processTouchDown(event) {
    }
    /**
     * Should take all touch events from the view using it.
     * @param event
     */
    processTouchMove(event) {
        for (const changed of event.changedTouches) {
            changed.clientX;
        }
    }
    /**
     * Should take all touch events from the view using it.
     * @param event
     */
    processTouchEnd(event) {
    }
    /**
     * Should take all touch events from the view using it.
     * @param event
     */
    processTouchCancel(event) {
    }
    //private lastX: Map<Touch
    moveListeners;
    pinchListeners;
}
exports.TouchGestureRecognizer = TouchGestureRecognizer;


/***/ }),

/***/ "./mathlib/Argument.ts":
/*!*****************************!*\
  !*** ./mathlib/Argument.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Argument = void 0;
const assert_1 = __webpack_require__(/*! ./util/assert */ "./mathlib/util/assert.ts");
/**
 * Has several dependancies and draws exatly 1.
 * Communicates several Nodes are all required to prove what
 * comes after this one.
 */
class Argument {
    constructor(grounds, claim, argument) {
        this._grounds = grounds;
        this.claim = claim;
        this.argument = argument;
        this.repOk();
    }
    expressionEdge = true;
    get relationship() {
        return this.claim.r;
    }
    toString() {
        return "Argument " + this.claim.r;
    }
    /**
     * The nodes this argument draws from.
     * 2 or more.
     */
    get grounds() {
        return this._grounds;
    }
    /**
     * Two out math graph nodes that are related by this Arugment.
     */
    claim;
    /**
     * The explanation that connects the argument's grounds to
     * it's claimed relationship between the two out nodes.
     *
     */
    argument;
    _grounds;
    repOk() {
        (0, assert_1.assert)(this._grounds != null);
        for (const ground of this.grounds) {
            (0, assert_1.assert)(ground != null && ground != undefined);
        }
        (0, assert_1.assert)(this.claim.n != null && this.claim.n != undefined);
        (0, assert_1.assert)(this.claim.n1 != null && this.claim.n1 != undefined);
        (0, assert_1.assert)(this.claim.r != undefined && this.claim.r != null);
    }
}
exports.Argument = Argument;


/***/ }),

/***/ "./mathlib/ConvenientExpressions.ts":
/*!******************************************!*\
  !*** ./mathlib/ConvenientExpressions.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.y = exports.x = exports.f = exports.e = exports.d = exports.c = exports.b = exports.a = exports.int = exports.v = exports.num = exports.negative = exports.product = exports.sumIntuitive = exports.sumEvalIntegerTerms = exports.orderedSum = exports.sum = exports.fraction = void 0;
const Integer_1 = __webpack_require__(/*! ./expressions/Integer */ "./mathlib/expressions/Integer.ts");
const Fraction_1 = __webpack_require__(/*! ./expressions/Fraction */ "./mathlib/expressions/Fraction.ts");
const Integral_1 = __webpack_require__(/*! ./expressions/Integral */ "./mathlib/expressions/Integral.ts");
const Product_1 = __webpack_require__(/*! ./expressions/Product */ "./mathlib/expressions/Product.ts");
const Sum_1 = __webpack_require__(/*! ./expressions/Sum */ "./mathlib/expressions/Sum.ts");
const Variable_1 = __webpack_require__(/*! ./expressions/Variable */ "./mathlib/expressions/Variable.ts");
function fraction(num, den) {
    return Fraction_1.Fraction.of(num, den);
}
exports.fraction = fraction;
/**
 * A convenience method for Sum.of()
 */
function sum(...terms) {
    return Sum_1.Sum.of(terms);
}
exports.sum = sum;
/**
 * Gets the correctly ordered sum of the given sum.
 * 1 + a = a + 1
 * Follows the spec given in the Sum.ts file.
 * @param sum
 * @returns
 */
function orderedSum(sum) {
    const ordered = (0, Sum_1.orderTerms)(...sum.terms);
    return Sum_1.Sum.of(ordered);
}
exports.orderedSum = orderedSum;
/**
 * Returns the sum of the given terms, evaluating any integer terms.
 * Puts final constant integer as the last term.
 * If the result is a sum, it will not have the integer 0 as a term.
 * If all given terms sum to zero, the integer zero will be returned.
 * @param terms
 */
function sumEvalIntegerTerms(...terms) {
    const integers = terms.filter(e => e instanceof Integer_1.Integer).length;
    if (integers < 2)
        return sum(...terms);
    const nonIntTerms = terms.filter(e => !(e instanceof Integer_1.Integer));
    const intTerm = terms.filter(e => e instanceof Integer_1.Integer)
        .map(e => e)
        .reduce((a, b) => num(a.value + b.value));
    if (intTerm.value == 0) {
        if (nonIntTerms.length > 1) {
            return sum(...nonIntTerms);
        }
        else if (nonIntTerms.length == 1) {
            return nonIntTerms[0];
        }
        else {
            return intTerm;
        }
    }
    else {
        if (nonIntTerms.length == 0) {
            return intTerm;
        }
        else {
            return sum(...nonIntTerms, intTerm);
        }
    }
}
exports.sumEvalIntegerTerms = sumEvalIntegerTerms;
/**
 * Returns the sum of the given terms. Evaluates any
 * integer terms. Additionally cancels out any positive
 * negative terms.
 *
 * Simplifies
 *  x + a - a = x
 * x + ab - ab = x
 * x + 2ab - 2ab = x
 * a - a = 0
 *
 * Doesn't affect
 *  x + 2a - a
 * @param terms
 */
function sumIntuitive(...terms) {
    const intEval = sumEvalIntegerTerms(...terms);
    if (intEval.class != Sum_1.SumType)
        return intEval;
    terms = intEval.terms;
    // Find opposite pairs
    // They will take the form
    //      exp + -1 * exp
    // I assume here that the only way to notate
    // negativity is by multiplying by -1
    terms: for (const t of terms) {
        const otherTerms = [...terms];
        remove(otherTerms, t);
        for (const other of otherTerms) {
            if (other instanceof Product_1.Product) {
                if (other.isNegation && other.negation == t) {
                    remove(terms, other);
                    remove(terms, t);
                    continue terms;
                }
            }
        }
    }
    if (terms.length == 0)
        return Integer_1.Integer.of(0);
    else if (terms.length == 1)
        return terms[0];
    else
        return sum(...terms);
}
exports.sumIntuitive = sumIntuitive;
/**
 * Removes the first instance of the given
 * element from the array. Really should be
 * part of the std library. Identifies object
 * with referencial equality.
 * @param array
 * @param element
 */
function remove(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            array.splice(i, 1);
            return;
        }
    }
}
function product(...factors) {
    return Product_1.Product.of(factors);
}
exports.product = product;
function negative(expression) {
    if (expression instanceof Integer_1.Integer)
        return Integer_1.Integer.of(-expression.value);
    else
        return Product_1.Product.of([Integer_1.Integer.of(-1), expression]);
}
exports.negative = negative;
function num(val) {
    return Integer_1.Integer.of(val);
}
exports.num = num;
function v(symbol) {
    return Variable_1.Variable.of(symbol);
}
exports.v = v;
function int(integrand, respectTo) {
    return Integral_1.Integral.of(integrand, respectTo);
}
exports.int = int;
exports.a = v('a');
exports.b = v('b');
exports.c = v('c');
exports.d = v('d');
exports.e = v('e');
exports.f = v('f');
exports.x = v('x');
exports.y = v('y');


/***/ }),

/***/ "./mathlib/Graph.ts":
/*!**************************!*\
  !*** ./mathlib/Graph.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArgumentEdge = exports.Graph = void 0;
const Argument_1 = __webpack_require__(/*! ./Argument */ "./mathlib/Argument.ts");
const Inference_1 = __webpack_require__(/*! ./Inference */ "./mathlib/Inference.ts");
const assert_1 = __webpack_require__(/*! ./util/assert */ "./mathlib/util/assert.ts");
/**
 * Class representing a graph of expressions and statements
 * including everything we know about a problem.
 * Connects GraphNodes via Inferences for edges.
 *
 * It's a digraph.
 */
class Graph {
    /**
     * Adds an expression to the problem.
     * @param node
     */
    addNode(node) {
        this.nodes.add(node);
        if (node instanceof Argument_1.Argument) {
            const a = node;
            for (const ground of a.grounds) {
                this;
            }
        }
        this.repOk();
    }
    /**
     * Adds an inference to the graph.
     * Adds both endpoints of the inference to the graph.
     * @param i
     */
    addInference(i) {
        this.addEdge(i.first, i.second, i);
        this.addConnection(i.first, i.second);
        this.nodes.add(i.first);
        this.nodes.add(i.second);
        this.repOk();
    }
    addInferences(list) {
        for (const i of list)
            this.addInference(i);
    }
    /**
     * Adds a node representing an acumulation of facts
     * that leads to a conclusion.
     * @param a
     */
    addArgument(a) {
        this.nodes.add(a);
        // Add the grounds
        for (const ground of a.grounds) {
            this.nodes.add(ground);
            this.addConnection(ground, a);
            this.addEdge(ground, a, ArgumentEdge.To);
        }
        // Add the claim
        const claim = a.claim;
        this.addNode(claim.n);
        this.addNode(claim.n1);
        this.addConnection(a, claim.n);
        this.addEdge(a, claim.n, ArgumentEdge.From);
        this.addConnection(a, claim.n1);
        this.addEdge(a, claim.n1, ArgumentEdge.From);
        this.addConnection(claim.n, claim.n1);
        this.addConnection(claim.n1, claim.n);
        this.addEdge(claim.n, claim.n1, a);
        this.addEdge(claim.n1, claim.n, a);
        this.repOk();
    }
    /**
     * Get the neighbors of a node.
     * @param node
     * @param direction Nodes that are adjacent to this node, from this node, or either.
     * @returns Undefined if the node isn't in this graph. Otherwise, a set of connected nodes.
     *          If the node is in the graph but isn't connected to anything, returns empty set.
     */
    getNeighbors(node, direction) {
        if (!this.nodes.has(node))
            return undefined;
        if (direction == "out") {
            return new Set(this.connections.get(node));
        }
        let adjacentTo = new Set();
        for (const n of this.nodes) {
            if (this.connections.get(n)?.has(node))
                adjacentTo.add(n);
        }
        if (direction == "in")
            return adjacentTo;
        for (const n of this.connections.get(node) ?? [])
            adjacentTo.add(n);
        return adjacentTo;
    }
    /**
     * Determines the number of edges this node has.
     * @param node The node being consdered.
     * @param direction Count only the edges going towards this node, away from
     *          it, or both.
     * @returns >= 0, undefined if the given node isn't in the graph.
     */
    getDegree(node, direction) {
        if (!this.nodes.has(node))
            return undefined;
        if (direction == "out") {
            return this.connections.get(node)?.size ?? 0;
        }
        let degIn = 0;
        this.nodes.forEach(n => {
            if (this.connections.get(n) == undefined)
                return;
            if (this.connections.get(n).has(node))
                degIn++;
        });
        if (direction == "in") {
            return degIn;
        }
        return degIn + (this.connections.get(node)?.size ?? 0);
    }
    /**
     * @param n Node in the graph.
     * @param n1 In the graph.
     * @returns Undefined if either node isn't in the graph or they're not
     * connected.
     */
    getEdge(n, n1) {
        return this.edges.get(n)?.get(n1);
    }
    contains(node) {
        return this.nodes.has(node);
    }
    /**
     * @returns An iterable of all the nodes in the graph.
     */
    getNodes() {
        return new Set(this.nodes);
    }
    getEdges() {
        const out = new Set();
        this.edges.forEach((map, first) => {
            map.forEach((edge, second) => {
                out.add({ n: first, n1: second, e: edge });
            });
        });
        return out;
    }
    numNodes() {
        return this.nodes.size;
    }
    /**
     * Adds all graph nodes and edges to this one.
     * @param graph
     */
    addGraph(graph) {
        graph.nodes.forEach(node => {
            this.nodes.add(node);
        });
        graph.edges.forEach((map, node1) => {
            map.forEach((edge, node2) => {
                if (edge instanceof Inference_1.Inference)
                    this.addInference(edge);
                else if (edge instanceof Argument_1.Argument)
                    this.addArgument(edge);
                else if (edge == "supports") {
                    this.addEdge(node1, node2, ArgumentEdge.To);
                    this.addConnection(node1, node2);
                }
                else if (edge == "claims") {
                    this.addEdge(node1, node2, ArgumentEdge.From);
                    this.addConnection(node1, node2);
                }
                else
                    throw new Error("Unknown Edge Type");
            });
        });
        this.repOk();
    }
    toString() {
        let out = "Graph(V = {";
        for (const node of this.nodes) {
            out += node.toString() + ",";
        }
        out = out.substring(0, out.length - 1) + "}, E = {";
        this.connections.forEach((set, src) => {
            set.forEach(dest => {
                out += src.toString() + " -> " + dest.toString() + ", ";
            });
        });
        out += "} Edge Count: " + this.connections.size;
        return out;
    }
    addConnection(n, n1) {
        if (this.connections.get(n) == null) {
            this.connections.set(n, new Set());
        }
        this.connections.get(n).add(n1);
    }
    addEdge(n, n1, e) {
        if (this.edges.get(n) == undefined) {
            this.edges.set(n, new Map());
        }
        this.edges.get(n).set(n1, e);
    }
    repOk() {
        this.nodes.forEach((value) => {
            (0, assert_1.assert)(value != null && value != undefined);
        });
        // All connections/edges have nodes
        this.connections.forEach((value, key) => {
            (0, assert_1.assert)(this.nodes.has(key));
            value.forEach(n => {
                (0, assert_1.assert)(this.nodes.has(n));
            });
        });
        this.edges.forEach((map, first) => {
            map.forEach((edge, second) => {
                (0, assert_1.assert)(this.nodes.has(first));
                (0, assert_1.assert)(this.nodes.has(second));
                (0, assert_1.assert)(this.connections.get(first).has(second));
            });
        });
    }
    nodes = new Set();
    // Quickly access all connections of a node
    connections = new Map();
    // Determine the type of connection between two nodes
    edges = new Map();
}
exports.Graph = Graph;
var ArgumentEdge;
(function (ArgumentEdge) {
    ArgumentEdge["To"] = "supports";
    ArgumentEdge["From"] = "claims";
})(ArgumentEdge = exports.ArgumentEdge || (exports.ArgumentEdge = {}));


/***/ }),

/***/ "./mathlib/GraphMinipulator.ts":
/*!*************************************!*\
  !*** ./mathlib/GraphMinipulator.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GraphMinipulator = void 0;
const assert_1 = __webpack_require__(/*! ./util/assert */ "./mathlib/util/assert.ts");
/**
 * Tool to do operations on graphs.
 */
class GraphMinipulator {
    /**
     * Find nodes of components of a graph where only edges for which
     * the callback function returns true are considered.
     * @param
     * @param isConnected
     */
    static getComponentNodes(input, isConnected) {
        let includedNodes = new Set();
        let components = new Set();
        for (const node of input.getNodes()) {
            if (includedNodes.has(node)) {
                continue;
            }
            const component = new Set();
            function getAllConnected(n) {
                includedNodes.add(n);
                if (component.has(n)) {
                    return;
                }
                component.add(n);
                for (const neighbor of input.getNeighbors(n, "both")) {
                    if (!isConnected(input.getEdge(n, neighbor)))
                        continue;
                    getAllConnected(neighbor);
                }
                return;
            }
            getAllConnected(node);
            component.add(node);
            components.add(component);
        }
        (0, assert_1.assert)(includedNodes.size == input.numNodes());
        // Assert components are pairwise disjoint of problems show up
        return components;
    }
    /**
     * Gets every edge in the graph.
     * @param input
     * @returns
     */
    static getRelations(input) {
        const out = [];
        for (const node of input.getNodes()) {
            for (const other of input.getNeighbors(node, "out")) {
                out.push({ first: node, second: other, e: input.getEdge(node, other) });
            }
        }
        return out;
    }
    /**
     * Parses the graph into sets of
     * nodes grouped by depth from a center node.
     * Assumes the graph is connected.
     * @param rootNodes Contains at least one node in the graph.
     * @param count Function that determines if any given node should be
     * included in the depth count. Defaults to counting all nodes. Nodes that
     * aren't included won't be in the returned value.
     * @returns Map from depth in graph to a set of nodes at that depth.
     *
     */
    static getLevels(input, rootNodes, count = () => true) {
        const roots = new Set(rootNodes);
        const depths = new Map();
        /**
         * Recursively maps out all nodes in the graph,
         * puttin them in the depths map.
         * @param node
         */
        function mapNode(node, depth = 0) {
            if (roots.has(node)) {
                depth = 0;
            }
            if (depth < (depths.get(node) ?? Number.MAX_VALUE)) {
                depths.set(node, depth);
            }
            const neighbors = [...input.getNeighbors(node, "both")];
            neighbors.filter(value => {
                // If we have found a shorter path to it or there was no found path to it
                return (depths.get(value) == undefined || depths.get(value) > depth) && value !== node;
            }).forEach(n => {
                mapNode(n, count(node) ? depth + 1 : depth);
            });
        }
        mapNode([...roots][0]);
        const out = new Map();
        depths.forEach((depth, node) => {
            if (!count(node))
                return;
            if (out.get(depth) == undefined) {
                out.set(depth, new Set());
            }
            out.get(depth).add(node);
        });
        return out;
    }
    /**
     * Determines if the given graph is connected, meaning that
     * it's possible to traverse between any two nodes on the graph.
     */
    static isConnected(input) {
        // Check every node has a degree of 1 or more or graph only has 1 or 0 elements
        return [...input.getNodes()].map(node => {
            return input.getDegree(node, "both") > 0;
        }).reduce((a, b) => a && b) || input.numNodes() < 2;
    }
    /**
     * Filters edges list returning a list where only one edge
     * from any edge loops is included.
     * For example if the input edges are a -> b and b -> a,
     * the result will only contain a -> b.
     * @param edges
     */
    static dropSymmetric(edges) {
        const out = [];
        function alreadyHas(edge) {
            for (const e of out)
                if (edge.n == e.n1 && edge.n1 == e.n)
                    return true;
            return false;
        }
        for (const edge of edges) {
            if (!alreadyHas(edge))
                out.push(edge);
        }
        return out;
    }
}
exports.GraphMinipulator = GraphMinipulator;


/***/ }),

/***/ "./mathlib/Inference.ts":
/*!******************************!*\
  !*** ./mathlib/Inference.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Inference = void 0;
const Relationship_1 = __webpack_require__(/*! ./Relationship */ "./mathlib/Relationship.ts");
/**
 * Connects two expressions with an explanation.
 * In one direction. A directed edge.
 */
class Inference {
    constructor(exp1, exp2, explanation) {
        this.explanation = explanation;
        this.first = exp1;
        this.second = exp2;
        this.relationship = Relationship_1.Relationship.Equal;
    }
    explanation;
    first;
    second;
    relationship;
    toString() {
        return this.relationship;
    }
    expressionEdge = true;
}
exports.Inference = Inference;


/***/ }),

/***/ "./mathlib/Relationship.ts":
/*!*********************************!*\
  !*** ./mathlib/Relationship.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Relationship = void 0;
/**
 * A way in which 2 expressions can be related.
 */
var Relationship;
(function (Relationship) {
    Relationship["Equal"] = "=";
})(Relationship = exports.Relationship || (exports.Relationship = {}));


/***/ }),

/***/ "./mathlib/derivations/Algebra.ts":
/*!****************************************!*\
  !*** ./mathlib/derivations/Algebra.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Algebra = void 0;
const Argument_1 = __webpack_require__(/*! ../Argument */ "./mathlib/Argument.ts");
const ConvenientExpressions_1 = __webpack_require__(/*! ../ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const Sum_1 = __webpack_require__(/*! ../expressions/Sum */ "./mathlib/expressions/Sum.ts");
const Graph_1 = __webpack_require__(/*! ../Graph */ "./mathlib/Graph.ts");
const GraphMinipulator_1 = __webpack_require__(/*! ../GraphMinipulator */ "./mathlib/GraphMinipulator.ts");
const Inference_1 = __webpack_require__(/*! ../Inference */ "./mathlib/Inference.ts");
const Relationship_1 = __webpack_require__(/*! ../Relationship */ "./mathlib/Relationship.ts");
/**
 * Uses algebra to expand a graph.
 */
class Algebra {
    /**
     * Create a new graph containing only expansions from the
     * given one.
     * @param input
     */
    static expand(input) {
        return subtractFromBothSides(input);
    }
}
exports.Algebra = Algebra;
/**
 * Create a new graph containing only expansions from the
 * given one. Resulting graph may not be connected. The result
 * unioned with the input will be connected.
 * x = y + 2
 * => x - 2 = y
 * @param input
 */
function subtractFromBothSides(input) {
    // Get the components of the graph which are equal
    const equals = GraphMinipulator_1.GraphMinipulator.getComponentNodes(input, (e) => {
        return e instanceof Inference_1.Inference && e.relationship == Relationship_1.Relationship.Equal;
    });
    // Filter out unhealthy expressions
    equals.forEach(component => {
        const healthy = [...component].filter(e => e.isHealthy);
        component.clear();
        healthy.forEach(e => component.add(e));
    });
    const out = new Graph_1.Graph();
    equals.forEach(equation => {
        const args = subFromBothSides(equation);
        args.forEach(a => {
            out.addArgument(a);
        });
    });
    return out;
}
/**
 * Get a list of conclusions that can be drawn
 * from the equality of the expressions given.
 * @param equation
 * @returns
 */
function subFromBothSides(equation) {
    const out = [];
    const combinations = cartesianProduct(equation);
    // If one is addition, subtract from both sides
    // Here we filter so that only pairs where the first expression is
    // a sum are operated on. This works because combinations is symetric.
    // Now for each pair we only have to deal with the first exp being sum.
    combinations.filter(pair => {
        return pair[0] instanceof Sum_1.Sum;
    }).forEach(pair => {
        const s = pair[0];
        const other = pair[1];
        // Some Sums have multiple terms
        s.terms.forEach(term => {
            // If other is itself a sum, we will break it apart
            // into terms so that we can combine integer terms in the
            // final result and avoid
            // x + 2 + 2 = y + 2 => x + 2 = y + 2 - 2
            // Note: We only do this to integer terms, because that's
            // so obvious and couldn't possibly need to be explained further.
            // We don't do it to variable terms. The following is correct behavior:
            // x + a + a = y + a => x + a = y + a - a
            // TODO: This distinction is debatable. Why shouldn't the left hand
            // of the last deduction be x + a + a - a? By doing this, 
            // we produce a much more complicated and expensive graph. 
            let second;
            if (other instanceof Sum_1.Sum) {
                second = [...other.terms];
            }
            else {
                second = [other];
            }
            const claim = { n: s.without(term), n1: (0, ConvenientExpressions_1.sumIntuitive)(...second, (0, ConvenientExpressions_1.negative)(term)), r: Relationship_1.Relationship.Equal };
            out.push(new Argument_1.Argument(new Set([s, other]), claim, "a=b & c=d => a-c = b-d"));
        });
    });
    return out;
}
/**
 * Gets the anti-reflexive closure of the relation A x A.
 * It's symmetric and transitive.
 *
 * @param set
 */
function cartesianProduct(set) {
    const out = [];
    for (const first of set) {
        for (const second of set) {
            if (first === second)
                continue;
            out.push([first, second]);
        }
    }
    return out;
}


/***/ }),

/***/ "./mathlib/derivations/Arithmetic.ts":
/*!*******************************************!*\
  !*** ./mathlib/derivations/Arithmetic.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Arithmetic = void 0;
const ConvenientExpressions_1 = __webpack_require__(/*! ../ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const Exponent_1 = __webpack_require__(/*! ../expressions/Exponent */ "./mathlib/expressions/Exponent.ts");
const Expression_1 = __webpack_require__(/*! ../expressions/Expression */ "./mathlib/expressions/Expression.ts");
const Integer_1 = __webpack_require__(/*! ../expressions/Integer */ "./mathlib/expressions/Integer.ts");
const Product_1 = __webpack_require__(/*! ../expressions/Product */ "./mathlib/expressions/Product.ts");
const Sum_1 = __webpack_require__(/*! ../expressions/Sum */ "./mathlib/expressions/Sum.ts");
const Graph_1 = __webpack_require__(/*! ../Graph */ "./mathlib/Graph.ts");
const Inference_1 = __webpack_require__(/*! ../Inference */ "./mathlib/Inference.ts");
const assert_1 = __webpack_require__(/*! ../util/assert */ "./mathlib/util/assert.ts");
/**
 * Given an expression, this class can derive other
 * equivalent expressions.
 */
class Arithmetic {
    /**
     * Produces a graph containing expressions
     * equivalent to the one given with their
     * derivations.
     * Only goes 1 inference deep.
     */
    static findEquivalentsFor(exp) {
        let out = new Graph_1.Graph();
        for (const rule of rulesOfInference) {
            if (rule.applies(exp)) {
                // For debuging broken rules
                //console.log(rule.name)
                out.addInferences(rule.apply(exp));
            }
        }
        return out;
    }
    static expand(input) {
        let out = new Graph_1.Graph();
        for (const node of input.getNodes()) {
            if (!(node instanceof Expression_1.Expression))
                continue;
            rulesOfInference.filter(r => r.applies(node)).forEach(rule => {
                out.addInferences(rule.apply(node));
            });
        }
        return out;
    }
}
exports.Arithmetic = Arithmetic;
class RuleOfInference {
    /**
     * Gets the set of inferences this
     * rule creates. Only called if applies() is true.
     */
    apply(exp) {
        const result = this.applyImpl(exp);
        result.forEach(e => {
            (0, assert_1.assert)(e != null && e != undefined);
        });
        return result;
    }
}
/**
 * a + a = 2a
 *
 * But not
 * 1 + 1 = 2(1)
 */
class CombineCommonTermsAddition extends RuleOfInference {
    name = "Combine Common Terms (Addition)";
    applies(exp) {
        if (!(exp instanceof Sum_1.Sum))
            return false;
        if (exp.reducibleOrInt)
            return false;
        const sum = exp;
        if (new Set(sum.terms).size < sum.terms.length)
            return true;
        return false;
    }
    applyImpl(exp) {
        let equivalentExpressions = new Set();
        const sum = exp;
        const uniqueTerms = new Set(sum.terms);
        // Suppose the sum is a + a + b
        // For every unique term in {a, b}
        for (const uniqueTerm of uniqueTerms) {
            // Avoid unhealthy expressions
            if (uniqueTerm.reducibleOrInt)
                continue;
            let remainingTerms = [];
            let occurances = 0;
            // Count the number of times it occurs in the sum,
            // collecting all other terms.
            for (const t of sum.terms) {
                if (t == uniqueTerm) {
                    occurances++;
                }
                else {
                    remainingTerms.push(t);
                }
            }
            // If it occures multiple times, create a new sum
            // expression with that term combined
            if (occurances > 1) {
                const product = Product_1.Product.of([uniqueTerm, Integer_1.Integer.of(occurances)]);
                if (remainingTerms.length == 0) {
                    equivalentExpressions.add(product);
                }
                else {
                    remainingTerms.push(product);
                    equivalentExpressions.add(Sum_1.Sum.of(remainingTerms));
                }
            }
        }
        // Turn the equivalent expressions into inferences
        let inferences = new Set();
        equivalentExpressions.forEach(e => {
            inferences.add(new Inference_1.Inference(sum, e, "Distributive property of multiplication"));
        });
        return inferences;
    }
}
class CombineCommonTermsMultiplication extends RuleOfInference {
    name = "CombineCommonTerms (Multiplication)";
    applies(exp) {
        if (!(exp instanceof Product_1.Product))
            return false;
        if (exp.isReducible)
            return false;
        const product = exp;
        if (new Set(product.factors).size < product.factors.length)
            return true;
        return false;
    }
    applyImpl(exp) {
        let equivalentExpressions = new Set();
        const product = exp;
        const uniqueFactors = new Set(product.factors);
        // Suppose the product is a * a * b
        // For every unique factor {a, b}
        for (const uniqueFactor of uniqueFactors) {
            let occurances = 0;
            let remainingFactors = [];
            // Count the number of times it occurs in the product,
            // collecting all other factors.
            for (const t of product.factors) {
                if (t == uniqueFactor) {
                    occurances++;
                }
                else {
                    remainingFactors.push(t);
                }
            }
            // If it occures multiple times, create a new sum
            // expression with that term combined
            if (occurances > 1) {
                const exponent = Exponent_1.Exponent.of(uniqueFactor, Integer_1.Integer.of(occurances));
                if (remainingFactors.length == 0) {
                    equivalentExpressions.add(exponent);
                }
                else {
                    remainingFactors.push(product);
                    equivalentExpressions.add(Product_1.Product.of(remainingFactors));
                }
            }
        }
        // Turn the equivalent expressions into inferences
        let inferences = new Set();
        equivalentExpressions.forEach(e => {
            inferences.add(new Inference_1.Inference(product, e, "Exponential rule for multiplying equal bases"));
        });
        return inferences;
    }
}
/**
 * Combine any integer terms in Sums.
 * a + 2 + 2 + 2= a + 4
 * 2 - 2 = 0
 *
 * Combines all of them at once no matter how many terms there are.
 *
 */
class EvaluateSums extends RuleOfInference {
    name = "Addition";
    applies(exp) {
        return exp instanceof Sum_1.Sum;
    }
    applyImpl(exp) {
        const sum = exp;
        const out = new Set();
        const integerTerms = [...sum.terms].filter(t => t instanceof Integer_1.Integer);
        if (integerTerms.length == 0) {
            return out;
        }
        const newInt = integerTerms.map(e => e).reduce((a, b) => Integer_1.Integer.of(a.value + b.value));
        const otherTerms = [...sum.terms].filter(t => !(t instanceof Integer_1.Integer));
        let result;
        if (otherTerms.length == 0) {
            result = new Inference_1.Inference(sum, newInt, "Evaluated Addition");
        }
        else {
            result = new Inference_1.Inference(sum, Sum_1.Sum.of(otherTerms.concat(newInt)), "Evaluated Addition");
        }
        out.add(result);
        return out;
    }
}
class ReduceReducibles extends RuleOfInference {
    name = "Evaluate Reducibles";
    applies(exp) {
        return exp.isReducible;
    }
    applyImpl(exp) {
        return new Set([new Inference_1.Inference(exp, exp.reduced, "Reduced")]);
    }
}
/**
 * Turns sums that are unhealthy because their term order
 * is wrong into correctly ordered sums.
 */
class OrderSums extends RuleOfInference {
    name = "Reorder Sums";
    applies(exp) {
        return !exp.isHealthy && exp instanceof Sum_1.Sum;
    }
    applyImpl(exp) {
        return new Set([new Inference_1.Inference(exp, (0, ConvenientExpressions_1.orderedSum)(exp), "Reordered")]);
    }
}
let rulesOfInference = [
    new CombineCommonTermsAddition(),
    new CombineCommonTermsMultiplication(),
    new EvaluateSums(),
    new ReduceReducibles(),
    new OrderSums(),
];


/***/ }),

/***/ "./mathlib/expressions/Derivative.ts":
/*!*******************************************!*\
  !*** ./mathlib/expressions/Derivative.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DerivativeType = exports.Derivative = void 0;
const Expression_1 = __webpack_require__(/*! ./Expression */ "./mathlib/expressions/Expression.ts");
const Integer_1 = __webpack_require__(/*! ./Integer */ "./mathlib/expressions/Integer.ts");
const Product_1 = __webpack_require__(/*! ./Product */ "./mathlib/expressions/Product.ts");
const Sum_1 = __webpack_require__(/*! ./Sum */ "./mathlib/expressions/Sum.ts");
/**
 *
 */
class Derivative extends Expression_1.Expression {
    static of(exp, relativeTo) {
        if (!this.instances.has(exp.hash))
            this.instances.set(exp.hash + relativeTo.hash, new Derivative(exp, relativeTo));
        return this.instances.get(exp.hash + relativeTo.hash);
    }
    static instances = new Map();
    constructor(exp, relativeTo) {
        super();
        this.exp = exp;
        this.relativeTo = relativeTo;
        this.isReducible = false; //TODO: Determine if a derivative is reducible
        this.isConstant = false; // TODO: Determine if a derivative is constant
        let isHealthy = true;
        if (exp.isConstant)
            isHealthy = false;
        if (exp instanceof Product_1.Product) {
            new Set(exp.factors).forEach(e => {
                if (e instanceof Integer_1.Integer || e instanceof Product_1.Product && e.isNegation && e.negation)
                    isHealthy = false;
                //TODO: There are a lot more possiblities than this
            });
        }
        this.isHealthy = isHealthy;
    }
    exp;
    relativeTo;
    get reduced() {
        throw new Error("Method not implemented. Not sure if derivatives should be reducible.");
    }
    isReducible;
    class = exports.DerivativeType;
    toString() {
        return "d/d" + this.relativeTo.toString() + "(" + this.exp.toString() + ")";
    }
    get hash() {
        return this.class + this.exp.hash + this.relativeTo.hash;
    }
    /**
     * 1. exp isn't a constant
     * 2. If exp is product, it contains no constants.
     */
    isHealthy;
    toMathXML() {
        function wrapIfNeeded(exp) {
            if (exp.class == Sum_1.SumType || exp.class == Product_1.ProductType)
                return "<mo>(</mo>" + exp.toMathXML() + "<mo>)</mo>";
            return exp.toMathXML();
        }
        return "<mfrac><mn>d</mn><mrow><mn>d</mn>" + wrapIfNeeded(this.relativeTo) + "</mrow></mfrac>" + wrapIfNeeded(this.exp);
    }
    isConstant;
}
exports.Derivative = Derivative;
exports.DerivativeType = "Derivative";


/***/ }),

/***/ "./mathlib/expressions/Exponent.ts":
/*!*****************************************!*\
  !*** ./mathlib/expressions/Exponent.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Exponent = void 0;
const MathMLHelpers_1 = __webpack_require__(/*! ../util/MathMLHelpers */ "./mathlib/util/MathMLHelpers.ts");
const Expression_1 = __webpack_require__(/*! ./Expression */ "./mathlib/expressions/Expression.ts");
const Integer_1 = __webpack_require__(/*! ./Integer */ "./mathlib/expressions/Integer.ts");
const Product_1 = __webpack_require__(/*! ./Product */ "./mathlib/expressions/Product.ts");
const Sum_1 = __webpack_require__(/*! ./Sum */ "./mathlib/expressions/Sum.ts");
class Exponent extends Expression_1.Expression {
    static of(base, power) {
        if (!Exponent.instances.has(base)) {
            Exponent.instances.set(base, new Map());
            if (!Exponent.instances.get(base).has(power)) {
                Exponent.instances.get(base).set(power, new Exponent(base, power));
            }
        }
        return Exponent.instances.get(base).get(power);
    }
    static instances = new Map();
    class = "Exponent";
    toMathXML() {
        function wrapIfNeeded(exp) {
            if (exp.class == Sum_1.SumType || exp.class == Product_1.ProductType)
                return (0, MathMLHelpers_1.inRow)((0, MathMLHelpers_1.inParen)(exp.toMathXML()));
            return exp.toMathXML();
        }
        return "<msup>" + wrapIfNeeded(this.base) + this.power.toMathXML() + "</msup>";
    }
    toString() {
        return "(" + this.base + ")^(" + this.power + ")";
    }
    get hash() {
        return "Exponent" + this.base.hash + this.power.hash;
    }
    constructor(base, power) {
        super();
        this.base = base;
        this.power = power;
        // The integers are closed over exponentiation
        this.isReducible = (base.isReducible || base.class == Integer_1.IntegerType) && (power.isReducible || power.class == Integer_1.IntegerType) && Math.pow(base.reduced.value, power.reduced.value) % 1 == 0;
        this.isHealthy = !this.isReducible;
        this.isConstant = base.isConstant && power.isConstant;
    }
    base;
    power;
    isReducible;
    isHealthy;
    get reduced() {
        return Integer_1.Integer.of(Math.pow(this.base.reduced.value, this.power.reduced.value));
    }
    isConstant;
}
exports.Exponent = Exponent;


/***/ }),

/***/ "./mathlib/expressions/Expression.ts":
/*!*******************************************!*\
  !*** ./mathlib/expressions/Expression.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Expression = void 0;
const Integer_1 = __webpack_require__(/*! ./Integer */ "./mathlib/expressions/Integer.ts");
const MathElement_1 = __webpack_require__(/*! ./MathElement */ "./mathlib/expressions/MathElement.ts");
/**
 * Base of all mathematical expressions.
 * All children should implement fly-wheel pattern.
 */
class Expression extends MathElement_1.MathElement {
    get reducibleOrInt() {
        return this.isReducible || this.class == Integer_1.IntegerType;
    }
}
exports.Expression = Expression;


/***/ }),

/***/ "./mathlib/expressions/Fraction.ts":
/*!*****************************************!*\
  !*** ./mathlib/expressions/Fraction.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FractionType = exports.Fraction = void 0;
const Expression_1 = __webpack_require__(/*! ./Expression */ "./mathlib/expressions/Expression.ts");
class Fraction extends Expression_1.Expression {
    static of(numerator, denominator) {
        const hash = numerator.hash + denominator.hash;
        if (!this.instance.has(hash))
            this.instance.set(hash, new Fraction(numerator, denominator));
        return this.instance.get(hash);
    }
    static instance = new Map();
    constructor(num, denom) {
        super();
        this.numerator = num;
        this.denominator = denom;
        /*
        A fraction is reducible if the denom | num.
            <=> num = k * denom where k is an integer.

        This makes proving reducibility hard.
        TODO: Decide if it's worth implementing reducibility for Fractions
        */
        this.isReducible = false;
        this.isHealthy = true;
        this.isConstant = num.isConstant && denom.isConstant;
    }
    numerator;
    denominator;
    get reduced() {
        throw new Error("Method not implemented.");
    }
    isReducible;
    class = exports.FractionType;
    toString() {
        return this.numerator.toString() + " / " + this.denominator.toString();
    }
    get hash() {
        return exports.FractionType + this.numerator.hash + this.denominator.hash;
    }
    isHealthy;
    isConstant;
    toMathXML() {
        return "<mfrac><mrow>" + this.numerator.toMathXML() + "</mrow><mrow>" + this.denominator.toMathXML() + "</mrow></mfrac>";
    }
}
exports.Fraction = Fraction;
exports.FractionType = "Fraction";


/***/ }),

/***/ "./mathlib/expressions/Integer.ts":
/*!****************************************!*\
  !*** ./mathlib/expressions/Integer.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntegerType = exports.Integer = void 0;
const assert_1 = __webpack_require__(/*! ../util/assert */ "./mathlib/util/assert.ts");
const Expression_1 = __webpack_require__(/*! ./Expression */ "./mathlib/expressions/Expression.ts");
/**
 * Integer
 * Positive or negative
 */
class Integer extends Expression_1.Expression {
    static of(value) {
        if (!Integer.instances.has(value)) {
            Integer.instances.set(value, new Integer(value));
        }
        return Integer.instances.get(value);
    }
    static instances = new Map();
    constructor(value) {
        super();
        this.value = value;
        (0, assert_1.assert)(this.value % 1 == 0, "Creating non-integer integer " + this.value);
    }
    /**
     * @returns A positive version of this integer.
     */
    butPositive() {
        return Integer.of(Math.abs(this.value));
    }
    class = exports.IntegerType;
    toMathXML() {
        return "<mn>" + this.value + "</mn>";
    }
    toString() {
        return "" + this.value;
    }
    get hash() {
        return "NumberExp" + this.value;
    }
    value;
    isReducible = false;
    get reduced() {
        throw new Error("Integers aren't reducible.");
    }
    isHealthy = true;
    isConstant = true;
}
exports.Integer = Integer;
exports.IntegerType = "Integer";


/***/ }),

/***/ "./mathlib/expressions/Integral.ts":
/*!*****************************************!*\
  !*** ./mathlib/expressions/Integral.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntegralType = exports.Integral = void 0;
const MathMLHelpers_1 = __webpack_require__(/*! ../util/MathMLHelpers */ "./mathlib/util/MathMLHelpers.ts");
const Expression_1 = __webpack_require__(/*! ./Expression */ "./mathlib/expressions/Expression.ts");
const Product_1 = __webpack_require__(/*! ./Product */ "./mathlib/expressions/Product.ts");
const Sum_1 = __webpack_require__(/*! ./Sum */ "./mathlib/expressions/Sum.ts");
/**
 * An indefinate integral (for now).
 * TODO: Should we separate definate/indefinate integrals?
 */
class Integral extends Expression_1.Expression {
    static of(integrand, relativeTo) {
        if (!this.instances.has(integrand.hash + relativeTo.hash))
            this.instances.set(integrand.hash + relativeTo.hash, new Integral(integrand, relativeTo));
        return this.instances.get(integrand.hash + relativeTo.hash);
    }
    static instances = new Map();
    constructor(integrand, relativeTo) {
        super();
        this.integrand = integrand;
        this.relativeTo = relativeTo;
        this.isReducible = false;
        this.isHealthy = true;
        this.isConstant = false;
    }
    integrand;
    relativeTo;
    get reduced() {
        throw new Error("Method not implemented. Not sure how this works with Integrals.");
    }
    isReducible;
    class = exports.IntegralType;
    toString() {
        return "∫" + this.integrand.toString();
    }
    get hash() {
        throw new Error("Method not implemented.");
    }
    isHealthy;
    isConstant;
    toMathXML() {
        function wrapIfNeeded(exp) {
            if (exp.class == Sum_1.SumType || exp.class == Product_1.ProductType)
                return (0, MathMLHelpers_1.inParen)(exp.toMathXML());
            return exp.toMathXML();
        }
        return "<mrow><mo>∫</mo>" + wrapIfNeeded(this.integrand) + "<mn>d</mn>" + wrapIfNeeded(this.relativeTo) + "</mrow>";
    }
}
exports.Integral = Integral;
exports.IntegralType = "Integral";


/***/ }),

/***/ "./mathlib/expressions/MathElement.ts":
/*!********************************************!*\
  !*** ./mathlib/expressions/MathElement.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MathElement = void 0;
/**
 * Can be expressed with MathML
 */
class MathElement {
}
exports.MathElement = MathElement;


/***/ }),

/***/ "./mathlib/expressions/Product.ts":
/*!****************************************!*\
  !*** ./mathlib/expressions/Product.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductType = exports.Product = void 0;
const assert_1 = __webpack_require__(/*! ../util/assert */ "./mathlib/util/assert.ts");
const Expression_1 = __webpack_require__(/*! ./Expression */ "./mathlib/expressions/Expression.ts");
const Integer_1 = __webpack_require__(/*! ./Integer */ "./mathlib/expressions/Integer.ts");
const Sum_1 = __webpack_require__(/*! ./Sum */ "./mathlib/expressions/Sum.ts");
/**
 * A mathematical product with 2 or more factors.
 */
class Product extends Expression_1.Expression {
    /**
     * For efficiency, products are compared by reference.
     * Here we ensure === <=> ==
     * @param factors
     * @returns
     */
    static of(factors) {
        const hash = factors.map(e => e.hash).join("");
        if (!Product.instances.has(hash))
            Product.instances.set(hash, new Product(factors));
        return Product.instances.get(hash);
    }
    static instances = new Map();
    constructor(factors) {
        super();
        (0, assert_1.assert)(factors.length >= 2, "Creating product with less than 2 factors.");
        this.factors = factors;
        let reducible = true;
        this.factors.forEach(f => {
            reducible &&= f.isReducible || f.class == Integer_1.IntegerType;
        });
        // The integers are closed over multiplication
        this.isReducible = reducible;
        let healthy = true;
        healthy &&= this.numNegatives() > 1;
        this.isHealthy = healthy;
        let isNegation = factors.length == 2;
        isNegation &&= factors.filter(e => {
            return e instanceof Integer_1.Integer && e.value == -1;
        }).length == 1;
        this.isNegation = isNegation;
        this.isConstant = this.factors.map(f => f.isConstant).reduce((a, b) => a && b);
    }
    /**
     * True if this product is just
     * -1 * another expression.
     */
    isNegation;
    /**
     * Get the value that this product is negating
     * -1 * exp returns exp.
     * @throws if product isn't a negation.
     */
    get negation() {
        (0, assert_1.assert)(this.isNegation, "Trying to get negation from non-negating sum");
        if (this.factors[0].class == Integer_1.IntegerType && this.factors[0].value == -1)
            return this.factors[1];
        return this.factors[0];
    }
    toMathXML() {
        let out = "";
        function wrapIfNeeded(exp) {
            if (exp.class == exports.ProductType || exp.class == Sum_1.SumType)
                return "<mo>(</mo>" + exp.toMathXML() + "<mo>)</mo>";
            return exp.toMathXML();
        }
        // Either this is a negation, or a list of products
        // First the negation case...
        if (this.isNegation) {
            out += "<mo>-</mo>";
            out += wrapIfNeeded(this.negation);
            return out;
        }
        // If it's a list of products...
        const firstFactor = this.factors[0];
        out += wrapIfNeeded(firstFactor);
        for (let i = 1; i < this.factors.length; i++) {
            let factor = this.factors[i];
            let needsDot = (factor.class == Integer_1.IntegerType && this.factors[i - 1].class == Integer_1.IntegerType)
                || (factor instanceof Product && factor.isNegation) // If there's a negative sign, get a dot
                || (factor instanceof Integer_1.Integer && factor.value < 1);
            if (needsDot)
                out += "<mo>·</mo>";
            out += wrapIfNeeded(factor);
        }
        return out;
    }
    /**
     * @returns Number of negative integer products.
     */
    numNegatives() {
        let count = 0;
        this.factors.forEach(f => {
            if (f instanceof Integer_1.Integer)
                if (f.value < 0)
                    count++;
        });
        return count;
    }
    toString() {
        let out = "";
        for (const exp of this.factors) {
            if (exp instanceof Product) {
                out += "(" + exp.toString() + ")";
            }
            else {
                out += exp.toString();
            }
            out += "·";
        }
        out = out.substring(0, out.length - 1);
        return out;
    }
    get hash() {
        return "Product" + this.factors.map(e => e.hash).join();
    }
    // At least 2 elements, order matters
    factors;
    class = exports.ProductType;
    isReducible;
    get reduced() {
        return this.factors.map(e => e.reduced).reduce((a, b) => {
            return Integer_1.Integer.of(a.reduced.value * b.reduced.value);
        });
    }
    /**
     * Only 1 negative integer
     * Integer factors are first
     * No factor equals 1
     */
    isHealthy;
    isConstant;
}
exports.Product = Product;
exports.ProductType = "Product";


/***/ }),

/***/ "./mathlib/expressions/Sum.ts":
/*!************************************!*\
  !*** ./mathlib/expressions/Sum.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.orderTerms = exports.SumType = exports.Sum = void 0;
const assert_1 = __webpack_require__(/*! ../util/assert */ "./mathlib/util/assert.ts");
const Expression_1 = __webpack_require__(/*! ./Expression */ "./mathlib/expressions/Expression.ts");
const Integer_1 = __webpack_require__(/*! ./Integer */ "./mathlib/expressions/Integer.ts");
const Product_1 = __webpack_require__(/*! ./Product */ "./mathlib/expressions/Product.ts");
const Variable_1 = __webpack_require__(/*! ./Variable */ "./mathlib/expressions/Variable.ts");
/**
 * Expression representing the sum of 2 or more terms.
 */
class Sum extends Expression_1.Expression {
    /**
     * Factory method consntructor.
     * @param terms Contains at least 2 elements
     */
    static of(terms) {
        const hash = terms.map(t => t.hash).join("");
        if (!Sum.instances.has(hash)) {
            Sum.instances.set(hash, new Sum(terms));
        }
        return Sum.instances.get(hash);
    }
    static instances = new Map();
    constructor(terms) {
        super();
        (0, assert_1.assert)(terms.length >= 2, "Creating sum with less than 2 terms.");
        this.terms = terms;
        this.isReducible = this.terms.map(t => t.isReducible || t.class == Integer_1.IntegerType).reduce((a, b) => a && b);
        this.isHealthy = this.determineHealth();
        this.isConstant = this.terms.map(t => t.isConstant).reduce((a, b) => a && b);
    }
    /**
     * Returns a new Expression without the given term.
     * If the sum contains the term multiple times,
     * only removes one. If it doesn't contain the term,
     * returns itself.
     * @param term A term in this sum.
     */
    without(term) {
        const newTerms = [...this.terms];
        const index = newTerms.findIndex((value) => {
            return value === term;
        });
        newTerms.splice(index, 1);
        if (newTerms.length <= 1) {
            return newTerms[0];
        }
        return Sum.of(newTerms);
    }
    toMathXML() {
        function wrapIfNeeded(exp) {
            if (exp.class == exports.SumType)
                return "<mo>(</mo>" + exp.toMathXML() + "<mo>)</mo>";
            return exp.toMathXML();
        }
        let out = wrapIfNeeded(this.terms[0]);
        for (let i = 1; i < this.terms.length; i++) {
            const term = this.terms[i];
            // Subtract negative terms instead of adding negatives
            if (term instanceof Product_1.Product && term.isNegation) {
                out += "<mo>-</mo>" + wrapIfNeeded(term.negation);
            }
            else if (term instanceof Integer_1.Integer && term.value < 0) {
                out += "<mo>-</mo>" + wrapIfNeeded(term.butPositive());
            }
            else {
                out += "<mo>+</mo>" + wrapIfNeeded(this.terms[i]);
            }
        }
        return out;
    }
    toString() {
        let out = "";
        for (const exp of this.terms) {
            out += exp.toString() + "+";
        }
        out = out.substring(0, out.length - 1);
        return out;
    }
    get hash() {
        return "Sum" + this.terms.map(e => e.hash).join();
    }
    class = exports.SumType;
    /**
     * Ordered, don't change it.
     */
    terms;
    isReducible;
    get reduced() {
        return Integer_1.Integer.of(this.terms.map(t => t.reduced.value).reduce((a, b) => a + b));
    }
    /**
     * Figure out if we're healthy.
     */
    determineHealth() {
        if (this.terms.filter(t => t.isReducible || t instanceof Integer_1.Integer).length > 1)
            return false;
        this.terms.forEach(t => {
            if (t instanceof Integer_1.Integer)
                if (t.value == 0)
                    return false;
        });
        this.terms.forEach(term => {
            if (!term.isHealthy)
                return false;
        });
        const correctOrdering = orderTerms(...this.terms);
        for (let i = 0; i < this.terms.length; i++) {
            if (this.terms[i] !== correctOrdering[i])
                return false;
        }
        //TODO: Check condition 3
        return true;
    }
    /**
     * A sum is healthy iff:
     *
     * 1. Contains a max of 1 reducible term.
     * 2. Products with integer coefficients are combined.
     *  a + 2a = 3a,
     *  a + -a = 0
     * 3. No term is 0
     * 4. All terms are healthy.
     * 5. Terms are ordered correctly.
     */
    isHealthy;
    isConstant;
}
exports.Sum = Sum;
exports.SumType = "Sum";
/**
 * Returns the given terms ordered correctly to
 * be placed in a Sum. Alters the given array.
 * @param terms
 */
function orderTerms(...terms) {
    // A note about the sort function bc the documentation is cryptic
    // If a should be put before b in the sum, return a negative value
    return terms.sort((a, b) => {
        // Variables before Integers
        if (a.class == Integer_1.IntegerType && (b.class == Variable_1.VariableType || (b instanceof Product_1.Product && b.isNegation && b.negation.class == Variable_1.VariableType))) {
            return 1;
        }
        if ((a.class == Variable_1.VariableType || (a instanceof Product_1.Product && a.isNegation && a.negation.class == Variable_1.VariableType)) && b.class == Integer_1.IntegerType) {
            return -1;
        }
        return 0;
    });
}
exports.orderTerms = orderTerms;


/***/ }),

/***/ "./mathlib/expressions/Variable.ts":
/*!*****************************************!*\
  !*** ./mathlib/expressions/Variable.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VariableType = exports.Variable = void 0;
const Expression_1 = __webpack_require__(/*! ./Expression */ "./mathlib/expressions/Expression.ts");
class Variable extends Expression_1.Expression {
    static of(symbol) {
        if (Variable.instances.get(symbol) == undefined) {
            Variable.instances.set(symbol, new Variable(symbol));
        }
        return Variable.instances.get(symbol);
    }
    static instances = new Map();
    constructor(symbol) {
        super();
        this.symbol = symbol;
    }
    class = exports.VariableType;
    toMathXML() {
        return "<mi>" + this.symbol + "</mi>";
    }
    toString() {
        return this.symbol;
    }
    get hash() {
        return "Variable" + this.symbol;
    }
    symbol;
    isReducible = false;
    get reduced() {
        throw new Error("Variables can't be reduced to integers.");
    }
    isHealthy = true;
    isConstant = false;
}
exports.Variable = Variable;
exports.VariableType = "Variable";


/***/ }),

/***/ "./mathlib/uielements/ArgumentNodeView.ts":
/*!************************************************!*\
  !*** ./mathlib/uielements/ArgumentNodeView.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArgumentNodeView = void 0;
const GraphNodeView_1 = __webpack_require__(/*! ./GraphNodeView */ "./mathlib/uielements/GraphNodeView.ts");
/**
 * Represents an argument node.
 */
class ArgumentNodeView extends GraphNodeView_1.GraphNodeView {
    constructor(arg) {
        super();
        this.argument = arg;
    }
    connectedCallback() {
        this.textContent = this.argument.argument;
    }
    argument;
}
exports.ArgumentNodeView = ArgumentNodeView;
customElements.define("argument-nodeview", ArgumentNodeView, { extends: "div" });


/***/ }),

/***/ "./mathlib/uielements/EdgeView.ts":
/*!****************************************!*\
  !*** ./mathlib/uielements/EdgeView.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EdgeView = void 0;
const Argument_1 = __webpack_require__(/*! ../Argument */ "./mathlib/Argument.ts");
const Inference_1 = __webpack_require__(/*! ../Inference */ "./mathlib/Inference.ts");
const UIPreferences_1 = __webpack_require__(/*! ./UIPreferences */ "./mathlib/uielements/UIPreferences.ts");
/**
 * Represents an edge in a graph.
 */
class EdgeView extends HTMLParagraphElement {
    constructor(edge) {
        super();
        this.edge = edge.e;
        this.first = edge.n;
        this.second = edge.n1;
        this.style.width = "fit-content";
        this.style.height = "fit-content";
        this.style.padding = "0";
        this.style.zIndex = "-2";
        this.style.margin = "0";
        this.style.whiteSpace = "nowrap";
        this.style.textAlign = "center";
        this.style.backgroundColor = UIPreferences_1.uiPreferences.edgeEqualsBackgroundColor;
        UIPreferences_1.uiPreferences.onUpdate(() => {
            this.style.backgroundColor = UIPreferences_1.uiPreferences.edgeEqualsBackgroundColor;
        });
        this.addEventListener("click", event => {
        });
        this.addEventListener("mouseout", event => {
        });
    }
    /**
     * Sets rotation angle of view while also
     * letting it know the angle has changed.
     * @param rad
     */
    setAngle(rad) {
        this.style.rotate = "" + rad + "rad";
        //this.textContent = "" + (rad * 2 * Math.PI / 360).toFixed(2) + "deg"
    }
    /**
     * Sets element screen width and ensures text fits
     * inside the edge.
     */
    set width(val) {
        super.style.width = val;
    }
    /**
     * Called when element is conncted to the DOM.
     */
    connectedCallback() {
        if (this.edge instanceof Inference_1.Inference) {
            this.textContent = "" + this.edge.relationship;
        }
        else if (this.edge instanceof Argument_1.Argument) {
            this.textContent = "" + this.edge.claim.r;
        }
        else {
            this.textContent = "'" + this.first.toString() + "' -> '" + this.second.toString() + "'";
        }
    }
    edge;
    first;
    second;
}
exports.EdgeView = EdgeView;
customElements.define("edge-view", EdgeView, { extends: "p" });


/***/ }),

/***/ "./mathlib/uielements/EditableMathView.ts":
/*!************************************************!*\
  !*** ./mathlib/uielements/EditableMathView.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EditableMathView = void 0;
/**
 * Displays math and is editable.
 */
class EditableMathView extends HTMLDivElement {
    constructor() {
        super();
        this.addEventListener("click", event => {
        });
    }
    connectedCallback() {
    }
    set value(e) {
        this._value = e;
        this.innerHTML = "<math display='block'>" + (e?.toMathXML() ?? "") + "</math>";
        this.listeners.forEach(l => l(this._value));
        MathJax.typeset([this]);
    }
    get value() {
        return this._value;
    }
    /**
     * Listener will be called whenever the math
     * in the view is edited.
     * @param l
     */
    addEditListener(l) {
        this.listeners.push(l);
    }
    listeners = [];
    _value = null;
}
exports.EditableMathView = EditableMathView;
customElements.define("editable-mathview", EditableMathView, { extends: "div" });


/***/ }),

/***/ "./mathlib/uielements/ExpressionNodeView.ts":
/*!**************************************************!*\
  !*** ./mathlib/uielements/ExpressionNodeView.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExpressionNodeView = void 0;
const EditableMathView_1 = __webpack_require__(/*! ./EditableMathView */ "./mathlib/uielements/EditableMathView.ts");
const GraphNodeView_1 = __webpack_require__(/*! ./GraphNodeView */ "./mathlib/uielements/GraphNodeView.ts");
/**
 * A graph node view for expression nodes.
 */
class ExpressionNodeView extends GraphNodeView_1.GraphNodeView {
    constructor(node) {
        super();
        this.node = node;
        this.editableMathView = new EditableMathView_1.EditableMathView();
        this.editableMathView.value = this.node;
        this.appendChild(this.editableMathView);
        if (!node.isHealthy)
            this.style.backgroundColor = 'red';
    }
    connectedCallback() {
    }
    node;
    editableMathView;
}
exports.ExpressionNodeView = ExpressionNodeView;
customElements.define("expression-nodeview", ExpressionNodeView, { extends: "div" });
const colorUnhealthyNodes = true;


/***/ }),

/***/ "./mathlib/uielements/GraphNodeView.ts":
/*!*********************************************!*\
  !*** ./mathlib/uielements/GraphNodeView.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GraphNodeView = void 0;
/**
 * An html element that represents a math graph node.
 */
class GraphNodeView extends HTMLDivElement {
    constructor() {
        super();
        //this.style.border = "blue dotted 0.2ch"
        this.style.borderRadius = "1ch";
        this.style.backgroundColor = "lightblue";
        this.style.padding = "1ch";
        this.style.width = "fit-content";
        this.style.height = "fit-content";
        this.style.whiteSpace = "nowrap";
    }
}
exports.GraphNodeView = GraphNodeView;


/***/ }),

/***/ "./mathlib/uielements/UIPreferences.ts":
/*!*********************************************!*\
  !*** ./mathlib/uielements/UIPreferences.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.uiPreferences = void 0;
class UIPreferences {
    /**
     * @param callback Function called whenever a ui preference
     * is changed.
     */
    onUpdate(callback) {
        this.callbacks.push(callback);
    }
    // Getters and Setters
    /**
     * Background color of a graph edge denoting
     * equality between two expressions.
     * Css value.
     */
    get edgeEqualsBackgroundColor() {
        return this._edgeEqualsBackgroundColor;
    }
    set edgeEqualsBackgroundColor(val) {
        this._edgeEqualsBackgroundColor = val;
        this.callbacks.forEach(c => c());
    }
    // Preference Values
    _edgeEqualsBackgroundColor = "none";
    callbacks = [];
}
exports.uiPreferences = new UIPreferences();


/***/ }),

/***/ "./mathlib/uielements/WebGraphView.ts":
/*!********************************************!*\
  !*** ./mathlib/uielements/WebGraphView.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebGraphView = void 0;
const Argument_1 = __webpack_require__(/*! ../Argument */ "./mathlib/Argument.ts");
const Expression_1 = __webpack_require__(/*! ../expressions/Expression */ "./mathlib/expressions/Expression.ts");
const GraphMinipulator_1 = __webpack_require__(/*! ../GraphMinipulator */ "./mathlib/GraphMinipulator.ts");
const assert_1 = __webpack_require__(/*! ../util/assert */ "./mathlib/util/assert.ts");
const TouchGestureRecognizer_1 = __webpack_require__(/*! ../../TouchGestureRecognizer */ "./TouchGestureRecognizer.ts");
const EdgeView_1 = __webpack_require__(/*! ./EdgeView */ "./mathlib/uielements/EdgeView.ts");
const ExpressionNodeView_1 = __webpack_require__(/*! ./ExpressionNodeView */ "./mathlib/uielements/ExpressionNodeView.ts");
const ArgumentNodeView_1 = __webpack_require__(/*! ./ArgumentNodeView */ "./mathlib/uielements/ArgumentNodeView.ts");
/**
 * A ui element that will display a math graph in a web.
 */
class WebGraphView extends HTMLDivElement {
    /**
     * @param graph Must be fully connected.
     * @param roots Non-empty.
     */
    constructor(graph, roots, config = undefined) {
        super();
        this.graph = graph;
        this.nodes = new Map();
        this.offsetX = 0;
        this.offsetY = 0;
        this.nodePositions = new Map();
        this.edgePositions = new Map();
        this.edges = new Map();
        this.rootNodes = new Set(roots);
        this.ringElements = new Set();
        this.ringPositions = new Map();
        if (config != undefined) {
            this.showArguments = config.showArguments;
            this.drawEdgeLines = config.drawEdgeLines;
        }
        this.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
        this.style.position = "relative";
        this.style.overflow = "hidden";
        this.addEventListener("mousedown", event => {
            this.mouseDown = true;
            this.touchDown = false;
        });
        this.addEventListener("mouseup", event => {
            this.mouseDown = false;
        });
        this.addEventListener("mouseleave", event => {
            this.mouseDown = false;
        });
        this.addEventListener("mousemove", (event) => {
            if (!this.mouseDown)
                return;
            this.offsetX += event.movementX / this.scale;
            this.offsetY += event.movementY / this.scale;
            this.updateOffset();
        });
        this.addEventListener("wheel", (event) => {
            this.scale = Math.pow(0.8, event.deltaY / 360) * this.scale;
            this.updateOffset();
            return true;
        });
        this.gestureRecognizer = new TouchGestureRecognizer_1.TouchGestureRecognizer();
        this.addEventListener("touchdown", this.gestureRecognizer.processTouchDown);
        this.addEventListener("touchend", this.gestureRecognizer.processTouchEnd);
        this.addEventListener("touchcancel", this.gestureRecognizer.processTouchCancel);
        this.addEventListener("touchmove", this.gestureRecognizer.processTouchMove);
        this.gestureRecognizer.addPinchListener((center, scaleDelta, fingers) => {
        });
        this.repOk();
    }
    /**
     * Sets if the view should show argument nodes as nodes.
     * False by default.
     * @param val
     */
    setShowArguments(val) {
        this.showArguments = true;
        this.readGraph();
        this.arrange();
        this.updateOffset();
    }
    get center() {
        return {
            x: this.offsetWidth / 2,
            y: this.offsetHeight / 2,
        };
    }
    /**
     * Follows the showArgument setting.
     * Populates this.nodes, this.edges,
     * adds the created views to the shadow dom
     * to match the graph.
     * Removes any pre-existing elements from the shadow dom.
     */
    readGraph() {
        // Clear existing
        this.nodes.forEach((view, node) => {
            this.removeChild(view);
        });
        this.nodes.clear();
        this.edges.forEach((view, edge) => {
            this.removeChild(view);
        });
        this.edges.clear();
        // Fetch nodes
        this.graph.getNodes().forEach(node => {
            if (node instanceof Expression_1.Expression) {
                const view = new ExpressionNodeView_1.ExpressionNodeView(node);
                view.style.position = "absolute";
                this.nodes.set(node, view);
                this.append(view);
            }
            else if (node instanceof Argument_1.Argument) {
                if (!this.showArguments)
                    return;
                const view = new ArgumentNodeView_1.ArgumentNodeView(node);
                view.style.position = "absolute";
                this.nodes.set(node, view);
                this.append(view);
            }
            else
                throw new Error("Graph contains node WebGraphView can't process.");
        });
        // Fetch edges
        GraphMinipulator_1.GraphMinipulator.dropSymmetric(this.graph.getEdges()).filter(edge => {
            // Only consider edges for which we have both endpoints on the view
            return this.nodes.has(edge.n) && this.nodes.has(edge.n1);
        }).forEach(edge => {
            const view = new EdgeView_1.EdgeView(edge);
            view.style.position = "absolute";
            this.edges.set(edge, view);
            this.append(view);
        });
        this.repOk();
    }
    connectedCallback() {
        this.readGraph();
        this.arrange();
        this.updateOffset();
    }
    /**
     * Pick places for all the nodes/edges on the screen.
     * Populates the position_* rep vars.
     */
    arrange() {
        this.nodePositions.clear();
        this.edgePositions.clear();
        this.ringPositions.clear();
        this.ringElements.forEach(e => {
            this.removeChild(e);
        });
        this.ringElements.clear();
        // Place nodes on a series of rings from the center using their depth in the graph
        const levels = GraphMinipulator_1.GraphMinipulator.getLevels(this.graph, this.rootNodes, (node) => {
            if (node instanceof Expression_1.Expression)
                return true;
            else if (node instanceof Argument_1.Argument)
                return this.showArguments;
            else
                throw new Error("New type of node");
        });
        let maxDepth = 0;
        levels.forEach((_, depth) => {
            maxDepth = Math.max(maxDepth, depth);
        });
        const center = { x: (this.clientWidth / 2), y: this.clientHeight / 2 };
        let lastRadius = 0; //px
        for (let depth = 0; depth < maxDepth + 1; depth++) {
            const nodes = levels.get(depth);
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
            const radius = Math.max(nodes.size * nodeRadius / Math.PI, lastRadius + (3 * nodeRadius));
            lastRadius = radius;
            const ns = [...nodes]; // TODO, assign a meaningful ordering
            ns.forEach((node, index) => {
                const view = this.nodes.get(node);
                //view.style.width = "" + smallR + "px"
                //view.style.height = "" + smallR + "px"
                // Get the cartesian point from the radius and angle
                const x = radius * Math.cos(stepSize * index) + center.x;
                const y = radius * Math.sin(stepSize * index) + center.y;
                this.nodePositions.set(view, Point(x, y));
            });
            const ring = document.createElement("div");
            ring.style.width = "" + (2 * radius) + "px";
            ring.style.height = "" + (2 * radius) + "px";
            ring.style.border = "lightgray solid 0.3ch";
            ring.style.borderRadius = "100%";
            ring.style.position = "absolute";
            ring.style.zIndex = "-10";
            this.appendChild(ring);
            this.ringElements.add(ring);
            this.ringPositions.set(ring, { x: center.x, y: center.y });
        }
        // Now arange the edges
        this.edges.forEach((view, edge) => {
            // Find the middle of the two endpts
            const firstX = this.nodePositions.get(this.nodes.get(edge.n)).x;
            const firstY = this.nodePositions.get(this.nodes.get(edge.n)).y;
            const secondX = this.nodePositions.get(this.nodes.get(edge.n1)).x;
            const secondY = this.nodePositions.get(this.nodes.get(edge.n1)).y;
            const x = (firstX + secondX) / 2;
            const y = (firstY + secondY) / 2;
            const angle = Math.atan2(secondY - firstY, secondX - firstX);
            this.edgePositions.set(view, { x: x, y: y, angle: angle });
        });
        this.repOk();
    }
    /**
     * Update the draw position of the nodes on the screen
     * to match the offset in rep. Assumes all views have a position
     * stored in the rep. Call arrange() first.
     * Also applies the scale factor to the final draw positions,
     * invisible to everyone else.
     */
    updateOffset() {
        const center = this.center;
        const scale = this.scale;
        function applyScale(i) {
            return Point(((i.x) - center.x) * scale + center.x, ((i.y) - center.y) * scale + center.y);
        }
        this.nodePositions.forEach((pos, view) => {
            const adjusted = applyScale({
                x: pos.x + this.offsetX,
                y: pos.y + this.offsetY,
            });
            view.style.left = "" + (adjusted.x - (0.5 * view.offsetWidth)) + "px";
            view.style.top = "" + (adjusted.y - (0.5 * view.offsetHeight)) + "px";
        });
        this.edgePositions.forEach((pos, view) => {
            view.setAngle(pos.angle);
            if (this.drawEdgeLines) {
                const firstPos = this.nodePositions.get(this.nodes.get(view.first));
                const secondPos = this.nodePositions.get(this.nodes.get(view.second));
                view.width = "" + (scale * Math.hypot(secondPos.x - firstPos.x, secondPos.y - firstPos.y)) + "px";
                view.style.borderBottom = "black 0.1ch solid";
                view.style.borderTop = "black 0.1ch solid";
            }
            else {
                view.width = "fit-content";
                view.style.borderBottom = "none";
                view.style.borderTop = "none";
            }
            const adjusted = applyScale({
                x: pos.x + this.offsetX,
                y: pos.y + this.offsetY,
            });
            view.style.left = "" + (adjusted.x - (0.5 * view.offsetWidth)) + "px";
            view.style.top = "" + (adjusted.y - (0.5 * view.offsetHeight)) + "px";
        });
        // Overlay elements change size with scale
        this.ringPositions.forEach((pos, view) => {
            const adjustedPos = applyScale({
                x: pos.x + this.offsetX - (0.5 * view.offsetWidth),
                y: pos.y + this.offsetY - (0.5 * view.offsetHeight),
            });
            view.style.left = "" + adjustedPos.x + "px";
            view.style.top = "" + adjustedPos.y + "px";
            view.style.scale = "" + this.scale;
            view.style.transformOrigin = "0 0";
        });
        this.repOk();
    }
    repOk() {
        (0, assert_1.assert)(this.rootNodes.size > 0);
        (0, assert_1.assert)(GraphMinipulator_1.GraphMinipulator.isConnected(this.graph), "Graph not connected");
    }
    graph;
    nodes;
    // The Position of the center of the node.
    nodePositions;
    edges;
    edgePositions;
    // Amt to add to left coordinate
    offsetX;
    // Added to top coordinate of nodes
    offsetY;
    // if the mouse is down
    mouseDown = false;
    touchDown = false;
    scale = 1;
    rootNodes;
    ringElements;
    ringPositions;
    gestureRecognizer;
    // If the graph should draw argument nodes.
    showArguments = false;
    drawEdgeLines = false;
}
exports.WebGraphView = WebGraphView;
customElements.define("web-graphview", WebGraphView, { extends: "div" });
function Point(x, y, angle = undefined) {
    if (angle == undefined)
        return {
            x: x,
            y: y,
        };
    return {
        x: x,
        y: y,
        angle: angle,
    };
}


/***/ }),

/***/ "./mathlib/userinput/Parser.ts":
/*!*************************************!*\
  !*** ./mathlib/userinput/Parser.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parse = void 0;
/**
 * Parses human written, utf-8 type math expressions
 * into actual math.
 * @param input
 */
function parse(input) {
    const out = [];
    console.log("Input: " + input);
    const findExpressions = /[0-9a-zA-Z]+/;
    const findOperators = /[\+\-\*\/\^]/;
    console.log(findExpressions);
    const split = input.split(findExpressions);
    console.log(split);
    return out;
}
exports.parse = parse;
function parseExpression(input) {
    throw new Error("Not implemented");
}


/***/ }),

/***/ "./mathlib/util/MathMLHelpers.ts":
/*!***************************************!*\
  !*** ./mathlib/util/MathMLHelpers.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.inRow = exports.inParen = void 0;
/**
 * Wraps the given mathml string in mathml parenthases.
 * @param str
 */
function inParen(str) {
    return "<mo>(</mo>" + str + "<mo>)</mo>";
}
exports.inParen = inParen;
/**
 * Puts the given mathml expression in a row so that
 * it doesn't get divided by mathjax.
 * @param str
 * @returns
 */
function inRow(str) {
    return "<mrow>" + str + "</mrow>";
}
exports.inRow = inRow;


/***/ }),

/***/ "./mathlib/util/assert.ts":
/*!********************************!*\
  !*** ./mathlib/util/assert.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.assert = void 0;
/**
 * Checks if the given expression evaluated to true. If not, throws error
 * with the message given.
 * @param msg Displayed if the expression is false. Defaults to "Failed Assert"
 */
function assert(exp, msg = "Failed assert") {
    if (!exp)
        throw new Error(msg);
}
exports.assert = assert;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const PrimaryPageLoader_1 = __webpack_require__(/*! ./PrimaryPageLoader */ "./PrimaryPageLoader.ts");
const ExpressionTestPageLoader_1 = __webpack_require__(/*! ./ExpressionTestPageLoader */ "./ExpressionTestPageLoader.ts");
/**
 * Populate html elements by their class.
 */
const classes = document.getElementsByTagName('body')[0].classList;
if (classes.contains('expressionTestPage')) {
    (0, ExpressionTestPageLoader_1.loadExpressionsTestPage)();
}
else if (classes.contains('primaryIntegrator')) {
    (0, PrimaryPageLoader_1.loadPrimaryPage)();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekIsNEJBQTRCO0FBQzVCLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDBCQUEwQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDBCQUEwQjtBQUNyRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQix1REFBdUQsZ0JBQWdCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN6VGE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDckJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGFBQWEsR0FBRyxlQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOzs7Ozs7O1VDWmQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw0QkFBNEIsbUJBQU8sQ0FBQyxtREFBcUI7QUFDekQsbUNBQW1DLG1CQUFPLENBQUMsaUVBQTRCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL0V4cHJlc3Npb25UZXN0UGFnZUxvYWRlci50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vUHJpbWFyeVBhZ2VMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL1RvdWNoR2VzdHVyZVJlY29nbml6ZXIudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvQXJndW1lbnQudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvQ29udmVuaWVudEV4cHJlc3Npb25zLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL0dyYXBoLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL0dyYXBoTWluaXB1bGF0b3IudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvSW5mZXJlbmNlLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL1JlbGF0aW9uc2hpcC50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9BbGdlYnJhLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL0FyaXRobWV0aWMudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvRGVyaXZhdGl2ZS50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9leHByZXNzaW9ucy9FeHBvbmVudC50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9leHByZXNzaW9ucy9FeHByZXNzaW9uLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2V4cHJlc3Npb25zL0ZyYWN0aW9uLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2V4cHJlc3Npb25zL0ludGVnZXIudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvSW50ZWdyYWwudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvTWF0aEVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvUHJvZHVjdC50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9leHByZXNzaW9ucy9TdW0udHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvVmFyaWFibGUudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdWllbGVtZW50cy9Bcmd1bWVudE5vZGVWaWV3LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3VpZWxlbWVudHMvRWRnZVZpZXcudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdWllbGVtZW50cy9FZGl0YWJsZU1hdGhWaWV3LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3VpZWxlbWVudHMvRXhwcmVzc2lvbk5vZGVWaWV3LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3VpZWxlbWVudHMvR3JhcGhOb2RlVmlldy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi91aWVsZW1lbnRzL1VJUHJlZmVyZW5jZXMudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdWllbGVtZW50cy9XZWJHcmFwaFZpZXcudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdXNlcmlucHV0L1BhcnNlci50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi91dGlsL01hdGhNTEhlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdXRpbC9hc3NlcnQudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubG9hZEV4cHJlc3Npb25zVGVzdFBhZ2UgPSB2b2lkIDA7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgRGVyaXZhdGl2ZV8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9leHByZXNzaW9ucy9EZXJpdmF0aXZlXCIpO1xuY29uc3QgRXhwb25lbnRfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZXhwcmVzc2lvbnMvRXhwb25lbnRcIik7XG5jb25zdCBGcmFjdGlvbl8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9leHByZXNzaW9ucy9GcmFjdGlvblwiKTtcbmNvbnN0IEludGVncmFsXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2V4cHJlc3Npb25zL0ludGVncmFsXCIpO1xuY29uc3QgRWRpdGFibGVNYXRoVmlld18xID0gcmVxdWlyZShcIi4vbWF0aGxpYi91aWVsZW1lbnRzL0VkaXRhYmxlTWF0aFZpZXdcIik7XG4vKipcbiAqIENhbGxlZCBhZnRlciB0aGUgZG9tIGlzIGxvYWRlZC5cbiAqIFBvcHVsYXRlcyB0aGUgYm9keSBlbGVtZW50IG9mIHRoZSBkb2N1bWVudFxuICogd2l0aCB0aGUgdGVzdCBleHByZXNzaW9ucyBwYWdlXG4gKi9cbmZ1bmN0aW9uIGxvYWRFeHByZXNzaW9uc1Rlc3RQYWdlKCkge1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICAgIGZ1bmN0aW9uIHAoY29udGVudCkge1xuICAgICAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBlLmlubmVyVGV4dCA9IGNvbnRlbnQ7XG4gICAgICAgIHBhZ2UuYXBwZW5kKGUpO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdmlldyhleHApIHtcbiAgICAgICAgY29uc3QgZSA9IG5ldyBFZGl0YWJsZU1hdGhWaWV3XzEuRWRpdGFibGVNYXRoVmlldygpO1xuICAgICAgICBlLnZhbHVlID0gZXhwO1xuICAgICAgICBwYWdlLmFwcGVuZChlKTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIHAoXCJUaGUgc3VtIG9mIGEsIGEsIGFuZCBhXCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bSkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSkpO1xuICAgIHAoXCJJbnRlZ3JhbCBvZiBhIG92ZXIgYiB3aXRoIHJlc3BlY3QgdG8gY1wiKTtcbiAgICB2aWV3KEludGVncmFsXzEuSW50ZWdyYWwub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5iKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYykpO1xuICAgIHAoXCJJbnRlZ3JhbCBvZiAoYSBvdmVyIGEpIG92ZXIgYiB3aXRoIHJlc3BlY3QgdG8gY1wiKTtcbiAgICB2aWV3KEludGVncmFsXzEuSW50ZWdyYWwub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5iKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYykpO1xuICAgIHAoXCJJbnRlZ3JhbCBvZiAoKGEgb3ZlciBhKSBvdmVyIGEpIG92ZXIgYiB3aXRoIHJlc3BlY3QgdG8gY1wiKTtcbiAgICB2aWV3KEludGVncmFsXzEuSW50ZWdyYWwub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5iKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYykpO1xuICAgIHAoXCJJbnRlZ3JhbCBvZiAoKChhIG92ZXIgYSkgb3ZlciBhKSBvdmVyIGEpIG92ZXIgYiB3aXRoIHJlc3BlY3QgdG8gY1wiKTtcbiAgICB2aWV3KEludGVncmFsXzEuSW50ZWdyYWwub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5iKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYykpO1xuICAgIHAoXCJJbnRlZ3JhbCBvZiAoKCgoYSBvdmVyIGEpIG92ZXIgYSkgb3ZlciBhKSBvdmVyIGEpIG92ZXIgYiB3aXRoIHJlc3BlY3QgdG8gY1wiKTtcbiAgICB2aWV3KEludGVncmFsXzEuSW50ZWdyYWwub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5iKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYykpO1xuICAgIHAoXCJcIik7XG4gICAgdmlldygoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuaW50KShGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5uZWdhdGl2ZSkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYiksIEV4cG9uZW50XzEuRXhwb25lbnQub2YoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bSkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSksIEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSksICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDIpKSkpLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdCkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMiksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCkpO1xuICAgIHAoXCJQcm9kdWN0IG9mIHggYW5kIHlcIik7XG4gICAgdmlldygoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdCkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueSkpO1xuICAgIHAoXCJQcm9kdWN0IG9mICh4LTEpLCAtMSBhbmQgeVwiKTtcbiAgICB2aWV3KCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5wcm9kdWN0KSgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtKShDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54LCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubmVnYXRpdmUpKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDEpKSksICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKC0xKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueSkpO1xuICAgIHAoXCJOZWdhdGlvbiBvZiB4IChSZXBlZCBhcyB0aGUgcHJvcGR1Y3Qgb2YgLTEgYW5kIHgpXCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm5lZ2F0aXZlKShDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54KSk7XG4gICAgcChcIlN1bSBvZiB4IGFuZCAteFwiKTtcbiAgICB2aWV3KCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKENvbnZlbmllbnRFeHByZXNzaW9uc18xLngsICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5uZWdhdGl2ZSkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCkpKTtcbiAgICBwKFwiU3VtIG9mIC14IGFuZCB4XCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bSkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm5lZ2F0aXZlKShDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54KSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCkpO1xuICAgIHAoXCJEZXJpdmF0aXZlIG9mIHRoZSBzcXVhcmUgb2YgeCB3aXRoIHJlc3BlY3QgdG8geFwiKTtcbiAgICB2aWV3KERlcml2YXRpdmVfMS5EZXJpdmF0aXZlLm9mKEV4cG9uZW50XzEuRXhwb25lbnQub2YoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCwgKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMikpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54KSk7XG4gICAgcChcIkRlcml2YXRpdmUgKCh4XjIpIC0gMikgd2l0aCByZXNwZWN0IHRvIHhcIik7XG4gICAgdmlldyhEZXJpdmF0aXZlXzEuRGVyaXZhdGl2ZS5vZihFeHBvbmVudF8xLkV4cG9uZW50Lm9mKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKENvbnZlbmllbnRFeHByZXNzaW9uc18xLngsICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKC0yKSksICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDIpKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCkpO1xuICAgIHAoXCJcIik7XG4gICAgdmlldygoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgxKSk7XG4gICAgcChcIlwiKTtcbiAgICB2aWV3KCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDEpKTtcbiAgICBwKFwiXCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSkpO1xuICAgIHAoXCJcIik7XG4gICAgdmlldygoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgxKSk7XG59XG5leHBvcnRzLmxvYWRFeHByZXNzaW9uc1Rlc3RQYWdlID0gbG9hZEV4cHJlc3Npb25zVGVzdFBhZ2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubG9hZFByaW1hcnlQYWdlID0gdm9pZCAwO1xuY29uc3QgQWxnZWJyYV8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9kZXJpdmF0aW9ucy9BbGdlYnJhXCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IFBhcnNlcl8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi91c2VyaW5wdXQvUGFyc2VyXCIpO1xuY29uc3QgV2ViR3JhcGhWaWV3XzEgPSByZXF1aXJlKFwiLi9tYXRobGliL3VpZWxlbWVudHMvV2ViR3JhcGhWaWV3XCIpO1xuY29uc3QgSW50ZWdyYWxfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZXhwcmVzc2lvbnMvSW50ZWdyYWxcIik7XG5jb25zdCBGcmFjdGlvbl8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9leHByZXNzaW9ucy9GcmFjdGlvblwiKTtcbmNvbnN0IEdyYXBoXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL0dyYXBoXCIpO1xuY29uc3QgQXJpdGhtZXRpY18xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9kZXJpdmF0aW9ucy9Bcml0aG1ldGljXCIpO1xuLyoqXG4gKiBDYWxsZWQgYWZ0ZXIgRE9NIGlzIGxvYWRlZC5cbiAqIFN1YnN0aXR1dGVzIHRoZSBib2R5IGVsZW1lbnQgaW4gdGhlIGRvY3VtZW50XG4gKiB3aXRoIHRoZSBwcmltYXJ5IGludGVncmF0b3Igdmlldy5cbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIGxvYWRQcmltYXJ5UGFnZSgpIHtcbiAgICBjb25zdCBncmFwaCA9IG5ldyBHcmFwaF8xLkdyYXBoKCk7XG4gICAgLypcbiAgICBjb25zdCBsZWZ0ID0gc3VtKHYoJ3gnKSwgbnVtKDIpLCBudW0oMikpXG4gICAgY29uc3QgcmlnaHQgPSBzdW0odigneScpLCBudW0oMikpXG4gICAgZ3JhcGguYWRkTm9kZShsZWZ0KVxuICAgIGdyYXBoLmFkZE5vZGUocmlnaHQpXG4gICAgZ3JhcGguYWRkSW5mZXJlbmNlKG5ldyBJbmZlcmVuY2UobGVmdCwgcmlnaHQsIFwiR2l2ZW4gYnkgcHJvYmxlbVwiKSlcbiAgICAqL1xuICAgIC8vY29uc3Qgcm9vdCA9IERlcml2YXRpdmUub2Yoc3VtKGEsIGEsIHByb2R1Y3QobnVtKDIpLCBiKSksIGEpXG4gICAgY29uc3Qgcm9vdCA9IEludGVncmFsXzEuSW50ZWdyYWwub2YoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmZyYWN0aW9uKShGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5iKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYyk7XG4gICAgZ3JhcGguYWRkTm9kZShyb290KTtcbiAgICBncmFwaC5hZGRHcmFwaChBcml0aG1ldGljXzEuQXJpdGhtZXRpYy5leHBhbmQoZ3JhcGgpKTtcbiAgICBncmFwaC5hZGRHcmFwaChBbGdlYnJhXzEuQWxnZWJyYS5leHBhbmQoZ3JhcGgpKTtcbiAgICBncmFwaC5hZGRHcmFwaChBcml0aG1ldGljXzEuQXJpdGhtZXRpYy5leHBhbmQoZ3JhcGgpKTtcbiAgICBncmFwaC5hZGRHcmFwaChBbGdlYnJhXzEuQWxnZWJyYS5leHBhbmQoZ3JhcGgpKTtcbiAgICAvL2NvbnNvbGUubG9nKFwiUmVzdWx0OiBcIiArIGdyYXBoKVxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4ge1xuICAgICAgICAoMCwgUGFyc2VyXzEucGFyc2UpKGlucHV0LnZhbHVlKTtcbiAgICB9KTtcbiAgICBjb25zdCBvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dGJveFwiKTtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgIHNob3dBcmd1bWVudHM6IGZhbHNlLFxuICAgICAgICBkcmF3RWRnZUxpbmVzOiBmYWxzZSxcbiAgICB9O1xuICAgIGNvbnN0IGdyYXBoVmlldyA9IG5ldyBXZWJHcmFwaFZpZXdfMS5XZWJHcmFwaFZpZXcoZ3JhcGgsIG5ldyBTZXQoW3Jvb3RdKSwgY29uZmlnKTtcbiAgICBncmFwaFZpZXcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWItZ3JhcGh2aWV3XCIpO1xuICAgIG91dC5hcHBlbmRDaGlsZChncmFwaFZpZXcpO1xufVxuZXhwb3J0cy5sb2FkUHJpbWFyeVBhZ2UgPSBsb2FkUHJpbWFyeVBhZ2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVG91Y2hHZXN0dXJlUmVjb2duaXplciA9IHZvaWQgMDtcbi8qKlxuICogSW50ZXJwcmV0IGNvbXBsaWNhdGVkIHRvdWNoIGdlc3R1cmUgZGF0YS5cbiAqL1xuY2xhc3MgVG91Y2hHZXN0dXJlUmVjb2duaXplciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubW92ZUxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLnBpbmNoTGlzdGVuZXJzID0gW107XG4gICAgfVxuICAgIGFkZE1vdmVMaXN0ZW5lcihjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm1vdmVMaXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gYSBwaW5jaCBnZXN0dXJlIGhhcyBiZWVuIGRldGVjdGVkLlxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBUYWtlcyBhIGNlbnRlciBjb29yZGluYXRlIHRoYXQncyB0aGUgYXZlcmFnZSBvZiB0aGUgZmluZ2VyIHBvc2l0aW9ucyxcbiAgICAgKiAgICAgICAgICAgICAgdGhlIGNoYW5nZSBpbiBzY2FsZSBzaW5jZSB0aGUgbGFzdCBjYWxsIG9uICgwLCBpbmZpbml0eSkgd2hlcmUgMSBpcyBubyBjaGFuZ2UsXG4gICAgICogICAgICAgICAgICAgIGFuZCB0aGUgbnVtYmVyIG9mIGZpbmdlcnMgaW4gdGhlIGdlc3R1cmUgKGFuIGludGVnZXIpLlxuICAgICAqL1xuICAgIGFkZFBpbmNoTGlzdGVuZXIoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5waW5jaExpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2hvdWxkIHRha2UgYWxsIHRvdWNoIGV2ZW50cyBmcm9tIHRoZSB2aWV3IHVzaW5nIGl0LlxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHByb2Nlc3NUb3VjaERvd24oZXZlbnQpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2hvdWxkIHRha2UgYWxsIHRvdWNoIGV2ZW50cyBmcm9tIHRoZSB2aWV3IHVzaW5nIGl0LlxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHByb2Nlc3NUb3VjaE1vdmUoZXZlbnQpIHtcbiAgICAgICAgZm9yIChjb25zdCBjaGFuZ2VkIG9mIGV2ZW50LmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICAgICAgICBjaGFuZ2VkLmNsaWVudFg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU2hvdWxkIHRha2UgYWxsIHRvdWNoIGV2ZW50cyBmcm9tIHRoZSB2aWV3IHVzaW5nIGl0LlxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHByb2Nlc3NUb3VjaEVuZChldmVudCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTaG91bGQgdGFrZSBhbGwgdG91Y2ggZXZlbnRzIGZyb20gdGhlIHZpZXcgdXNpbmcgaXQuXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICovXG4gICAgcHJvY2Vzc1RvdWNoQ2FuY2VsKGV2ZW50KSB7XG4gICAgfVxuICAgIC8vcHJpdmF0ZSBsYXN0WDogTWFwPFRvdWNoXG4gICAgbW92ZUxpc3RlbmVycztcbiAgICBwaW5jaExpc3RlbmVycztcbn1cbmV4cG9ydHMuVG91Y2hHZXN0dXJlUmVjb2duaXplciA9IFRvdWNoR2VzdHVyZVJlY29nbml6ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQXJndW1lbnQgPSB2b2lkIDA7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0XCIpO1xuLyoqXG4gKiBIYXMgc2V2ZXJhbCBkZXBlbmRhbmNpZXMgYW5kIGRyYXdzIGV4YXRseSAxLlxuICogQ29tbXVuaWNhdGVzIHNldmVyYWwgTm9kZXMgYXJlIGFsbCByZXF1aXJlZCB0byBwcm92ZSB3aGF0XG4gKiBjb21lcyBhZnRlciB0aGlzIG9uZS5cbiAqL1xuY2xhc3MgQXJndW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKGdyb3VuZHMsIGNsYWltLCBhcmd1bWVudCkge1xuICAgICAgICB0aGlzLl9ncm91bmRzID0gZ3JvdW5kcztcbiAgICAgICAgdGhpcy5jbGFpbSA9IGNsYWltO1xuICAgICAgICB0aGlzLmFyZ3VtZW50ID0gYXJndW1lbnQ7XG4gICAgICAgIHRoaXMucmVwT2soKTtcbiAgICB9XG4gICAgZXhwcmVzc2lvbkVkZ2UgPSB0cnVlO1xuICAgIGdldCByZWxhdGlvbnNoaXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsYWltLnI7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCJBcmd1bWVudCBcIiArIHRoaXMuY2xhaW0ucjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIG5vZGVzIHRoaXMgYXJndW1lbnQgZHJhd3MgZnJvbS5cbiAgICAgKiAyIG9yIG1vcmUuXG4gICAgICovXG4gICAgZ2V0IGdyb3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ncm91bmRzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUd28gb3V0IG1hdGggZ3JhcGggbm9kZXMgdGhhdCBhcmUgcmVsYXRlZCBieSB0aGlzIEFydWdtZW50LlxuICAgICAqL1xuICAgIGNsYWltO1xuICAgIC8qKlxuICAgICAqIFRoZSBleHBsYW5hdGlvbiB0aGF0IGNvbm5lY3RzIHRoZSBhcmd1bWVudCdzIGdyb3VuZHMgdG9cbiAgICAgKiBpdCdzIGNsYWltZWQgcmVsYXRpb25zaGlwIGJldHdlZW4gdGhlIHR3byBvdXQgbm9kZXMuXG4gICAgICpcbiAgICAgKi9cbiAgICBhcmd1bWVudDtcbiAgICBfZ3JvdW5kcztcbiAgICByZXBPaygpIHtcbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5fZ3JvdW5kcyAhPSBudWxsKTtcbiAgICAgICAgZm9yIChjb25zdCBncm91bmQgb2YgdGhpcy5ncm91bmRzKSB7XG4gICAgICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KShncm91bmQgIT0gbnVsbCAmJiBncm91bmQgIT0gdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLmNsYWltLm4gIT0gbnVsbCAmJiB0aGlzLmNsYWltLm4gIT0gdW5kZWZpbmVkKTtcbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5jbGFpbS5uMSAhPSBudWxsICYmIHRoaXMuY2xhaW0ubjEgIT0gdW5kZWZpbmVkKTtcbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5jbGFpbS5yICE9IHVuZGVmaW5lZCAmJiB0aGlzLmNsYWltLnIgIT0gbnVsbCk7XG4gICAgfVxufVxuZXhwb3J0cy5Bcmd1bWVudCA9IEFyZ3VtZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnkgPSBleHBvcnRzLnggPSBleHBvcnRzLmYgPSBleHBvcnRzLmUgPSBleHBvcnRzLmQgPSBleHBvcnRzLmMgPSBleHBvcnRzLmIgPSBleHBvcnRzLmEgPSBleHBvcnRzLmludCA9IGV4cG9ydHMudiA9IGV4cG9ydHMubnVtID0gZXhwb3J0cy5uZWdhdGl2ZSA9IGV4cG9ydHMucHJvZHVjdCA9IGV4cG9ydHMuc3VtSW50dWl0aXZlID0gZXhwb3J0cy5zdW1FdmFsSW50ZWdlclRlcm1zID0gZXhwb3J0cy5vcmRlcmVkU3VtID0gZXhwb3J0cy5zdW0gPSBleHBvcnRzLmZyYWN0aW9uID0gdm9pZCAwO1xuY29uc3QgSW50ZWdlcl8xID0gcmVxdWlyZShcIi4vZXhwcmVzc2lvbnMvSW50ZWdlclwiKTtcbmNvbnN0IEZyYWN0aW9uXzEgPSByZXF1aXJlKFwiLi9leHByZXNzaW9ucy9GcmFjdGlvblwiKTtcbmNvbnN0IEludGVncmFsXzEgPSByZXF1aXJlKFwiLi9leHByZXNzaW9ucy9JbnRlZ3JhbFwiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuL2V4cHJlc3Npb25zL1Byb2R1Y3RcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuL2V4cHJlc3Npb25zL1N1bVwiKTtcbmNvbnN0IFZhcmlhYmxlXzEgPSByZXF1aXJlKFwiLi9leHByZXNzaW9ucy9WYXJpYWJsZVwiKTtcbmZ1bmN0aW9uIGZyYWN0aW9uKG51bSwgZGVuKSB7XG4gICAgcmV0dXJuIEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YobnVtLCBkZW4pO1xufVxuZXhwb3J0cy5mcmFjdGlvbiA9IGZyYWN0aW9uO1xuLyoqXG4gKiBBIGNvbnZlbmllbmNlIG1ldGhvZCBmb3IgU3VtLm9mKClcbiAqL1xuZnVuY3Rpb24gc3VtKC4uLnRlcm1zKSB7XG4gICAgcmV0dXJuIFN1bV8xLlN1bS5vZih0ZXJtcyk7XG59XG5leHBvcnRzLnN1bSA9IHN1bTtcbi8qKlxuICogR2V0cyB0aGUgY29ycmVjdGx5IG9yZGVyZWQgc3VtIG9mIHRoZSBnaXZlbiBzdW0uXG4gKiAxICsgYSA9IGEgKyAxXG4gKiBGb2xsb3dzIHRoZSBzcGVjIGdpdmVuIGluIHRoZSBTdW0udHMgZmlsZS5cbiAqIEBwYXJhbSBzdW1cbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIG9yZGVyZWRTdW0oc3VtKSB7XG4gICAgY29uc3Qgb3JkZXJlZCA9ICgwLCBTdW1fMS5vcmRlclRlcm1zKSguLi5zdW0udGVybXMpO1xuICAgIHJldHVybiBTdW1fMS5TdW0ub2Yob3JkZXJlZCk7XG59XG5leHBvcnRzLm9yZGVyZWRTdW0gPSBvcmRlcmVkU3VtO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBzdW0gb2YgdGhlIGdpdmVuIHRlcm1zLCBldmFsdWF0aW5nIGFueSBpbnRlZ2VyIHRlcm1zLlxuICogUHV0cyBmaW5hbCBjb25zdGFudCBpbnRlZ2VyIGFzIHRoZSBsYXN0IHRlcm0uXG4gKiBJZiB0aGUgcmVzdWx0IGlzIGEgc3VtLCBpdCB3aWxsIG5vdCBoYXZlIHRoZSBpbnRlZ2VyIDAgYXMgYSB0ZXJtLlxuICogSWYgYWxsIGdpdmVuIHRlcm1zIHN1bSB0byB6ZXJvLCB0aGUgaW50ZWdlciB6ZXJvIHdpbGwgYmUgcmV0dXJuZWQuXG4gKiBAcGFyYW0gdGVybXNcbiAqL1xuZnVuY3Rpb24gc3VtRXZhbEludGVnZXJUZXJtcyguLi50ZXJtcykge1xuICAgIGNvbnN0IGludGVnZXJzID0gdGVybXMuZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKS5sZW5ndGg7XG4gICAgaWYgKGludGVnZXJzIDwgMilcbiAgICAgICAgcmV0dXJuIHN1bSguLi50ZXJtcyk7XG4gICAgY29uc3Qgbm9uSW50VGVybXMgPSB0ZXJtcy5maWx0ZXIoZSA9PiAhKGUgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcikpO1xuICAgIGNvbnN0IGludFRlcm0gPSB0ZXJtcy5maWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpXG4gICAgICAgIC5tYXAoZSA9PiBlKVxuICAgICAgICAucmVkdWNlKChhLCBiKSA9PiBudW0oYS52YWx1ZSArIGIudmFsdWUpKTtcbiAgICBpZiAoaW50VGVybS52YWx1ZSA9PSAwKSB7XG4gICAgICAgIGlmIChub25JbnRUZXJtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gc3VtKC4uLm5vbkludFRlcm1zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChub25JbnRUZXJtcy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vbkludFRlcm1zWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGludFRlcm07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChub25JbnRUZXJtcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGludFRlcm07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3VtKC4uLm5vbkludFRlcm1zLCBpbnRUZXJtKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuc3VtRXZhbEludGVnZXJUZXJtcyA9IHN1bUV2YWxJbnRlZ2VyVGVybXM7XG4vKipcbiAqIFJldHVybnMgdGhlIHN1bSBvZiB0aGUgZ2l2ZW4gdGVybXMuIEV2YWx1YXRlcyBhbnlcbiAqIGludGVnZXIgdGVybXMuIEFkZGl0aW9uYWxseSBjYW5jZWxzIG91dCBhbnkgcG9zaXRpdmVcbiAqIG5lZ2F0aXZlIHRlcm1zLlxuICpcbiAqIFNpbXBsaWZpZXNcbiAqICB4ICsgYSAtIGEgPSB4XG4gKiB4ICsgYWIgLSBhYiA9IHhcbiAqIHggKyAyYWIgLSAyYWIgPSB4XG4gKiBhIC0gYSA9IDBcbiAqXG4gKiBEb2Vzbid0IGFmZmVjdFxuICogIHggKyAyYSAtIGFcbiAqIEBwYXJhbSB0ZXJtc1xuICovXG5mdW5jdGlvbiBzdW1JbnR1aXRpdmUoLi4udGVybXMpIHtcbiAgICBjb25zdCBpbnRFdmFsID0gc3VtRXZhbEludGVnZXJUZXJtcyguLi50ZXJtcyk7XG4gICAgaWYgKGludEV2YWwuY2xhc3MgIT0gU3VtXzEuU3VtVHlwZSlcbiAgICAgICAgcmV0dXJuIGludEV2YWw7XG4gICAgdGVybXMgPSBpbnRFdmFsLnRlcm1zO1xuICAgIC8vIEZpbmQgb3Bwb3NpdGUgcGFpcnNcbiAgICAvLyBUaGV5IHdpbGwgdGFrZSB0aGUgZm9ybVxuICAgIC8vICAgICAgZXhwICsgLTEgKiBleHBcbiAgICAvLyBJIGFzc3VtZSBoZXJlIHRoYXQgdGhlIG9ubHkgd2F5IHRvIG5vdGF0ZVxuICAgIC8vIG5lZ2F0aXZpdHkgaXMgYnkgbXVsdGlwbHlpbmcgYnkgLTFcbiAgICB0ZXJtczogZm9yIChjb25zdCB0IG9mIHRlcm1zKSB7XG4gICAgICAgIGNvbnN0IG90aGVyVGVybXMgPSBbLi4udGVybXNdO1xuICAgICAgICByZW1vdmUob3RoZXJUZXJtcywgdCk7XG4gICAgICAgIGZvciAoY29uc3Qgb3RoZXIgb2Ygb3RoZXJUZXJtcykge1xuICAgICAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3QpIHtcbiAgICAgICAgICAgICAgICBpZiAob3RoZXIuaXNOZWdhdGlvbiAmJiBvdGhlci5uZWdhdGlvbiA9PSB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZSh0ZXJtcywgb3RoZXIpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmUodGVybXMsIHQpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZSB0ZXJtcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRlcm1zLmxlbmd0aCA9PSAwKVxuICAgICAgICByZXR1cm4gSW50ZWdlcl8xLkludGVnZXIub2YoMCk7XG4gICAgZWxzZSBpZiAodGVybXMubGVuZ3RoID09IDEpXG4gICAgICAgIHJldHVybiB0ZXJtc1swXTtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBzdW0oLi4udGVybXMpO1xufVxuZXhwb3J0cy5zdW1JbnR1aXRpdmUgPSBzdW1JbnR1aXRpdmU7XG4vKipcbiAqIFJlbW92ZXMgdGhlIGZpcnN0IGluc3RhbmNlIG9mIHRoZSBnaXZlblxuICogZWxlbWVudCBmcm9tIHRoZSBhcnJheS4gUmVhbGx5IHNob3VsZCBiZVxuICogcGFydCBvZiB0aGUgc3RkIGxpYnJhcnkuIElkZW50aWZpZXMgb2JqZWN0XG4gKiB3aXRoIHJlZmVyZW5jaWFsIGVxdWFsaXR5LlxuICogQHBhcmFtIGFycmF5XG4gKiBAcGFyYW0gZWxlbWVudFxuICovXG5mdW5jdGlvbiByZW1vdmUoYXJyYXksIGVsZW1lbnQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhcnJheVtpXSA9PT0gZWxlbWVudCkge1xuICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcHJvZHVjdCguLi5mYWN0b3JzKSB7XG4gICAgcmV0dXJuIFByb2R1Y3RfMS5Qcm9kdWN0Lm9mKGZhY3RvcnMpO1xufVxuZXhwb3J0cy5wcm9kdWN0ID0gcHJvZHVjdDtcbmZ1bmN0aW9uIG5lZ2F0aXZlKGV4cHJlc3Npb24pIHtcbiAgICBpZiAoZXhwcmVzc2lvbiBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKVxuICAgICAgICByZXR1cm4gSW50ZWdlcl8xLkludGVnZXIub2YoLWV4cHJlc3Npb24udmFsdWUpO1xuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIFByb2R1Y3RfMS5Qcm9kdWN0Lm9mKFtJbnRlZ2VyXzEuSW50ZWdlci5vZigtMSksIGV4cHJlc3Npb25dKTtcbn1cbmV4cG9ydHMubmVnYXRpdmUgPSBuZWdhdGl2ZTtcbmZ1bmN0aW9uIG51bSh2YWwpIHtcbiAgICByZXR1cm4gSW50ZWdlcl8xLkludGVnZXIub2YodmFsKTtcbn1cbmV4cG9ydHMubnVtID0gbnVtO1xuZnVuY3Rpb24gdihzeW1ib2wpIHtcbiAgICByZXR1cm4gVmFyaWFibGVfMS5WYXJpYWJsZS5vZihzeW1ib2wpO1xufVxuZXhwb3J0cy52ID0gdjtcbmZ1bmN0aW9uIGludChpbnRlZ3JhbmQsIHJlc3BlY3RUbykge1xuICAgIHJldHVybiBJbnRlZ3JhbF8xLkludGVncmFsLm9mKGludGVncmFuZCwgcmVzcGVjdFRvKTtcbn1cbmV4cG9ydHMuaW50ID0gaW50O1xuZXhwb3J0cy5hID0gdignYScpO1xuZXhwb3J0cy5iID0gdignYicpO1xuZXhwb3J0cy5jID0gdignYycpO1xuZXhwb3J0cy5kID0gdignZCcpO1xuZXhwb3J0cy5lID0gdignZScpO1xuZXhwb3J0cy5mID0gdignZicpO1xuZXhwb3J0cy54ID0gdigneCcpO1xuZXhwb3J0cy55ID0gdigneScpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFyZ3VtZW50RWRnZSA9IGV4cG9ydHMuR3JhcGggPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4vQXJndW1lbnRcIik7XG5jb25zdCBJbmZlcmVuY2VfMSA9IHJlcXVpcmUoXCIuL0luZmVyZW5jZVwiKTtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4vdXRpbC9hc3NlcnRcIik7XG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIGdyYXBoIG9mIGV4cHJlc3Npb25zIGFuZCBzdGF0ZW1lbnRzXG4gKiBpbmNsdWRpbmcgZXZlcnl0aGluZyB3ZSBrbm93IGFib3V0IGEgcHJvYmxlbS5cbiAqIENvbm5lY3RzIEdyYXBoTm9kZXMgdmlhIEluZmVyZW5jZXMgZm9yIGVkZ2VzLlxuICpcbiAqIEl0J3MgYSBkaWdyYXBoLlxuICovXG5jbGFzcyBHcmFwaCB7XG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBleHByZXNzaW9uIHRvIHRoZSBwcm9ibGVtLlxuICAgICAqIEBwYXJhbSBub2RlXG4gICAgICovXG4gICAgYWRkTm9kZShub2RlKSB7XG4gICAgICAgIHRoaXMubm9kZXMuYWRkKG5vZGUpO1xuICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEFyZ3VtZW50XzEuQXJndW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBub2RlO1xuICAgICAgICAgICAgZm9yIChjb25zdCBncm91bmQgb2YgYS5ncm91bmRzKSB7XG4gICAgICAgICAgICAgICAgdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcE9rKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gaW5mZXJlbmNlIHRvIHRoZSBncmFwaC5cbiAgICAgKiBBZGRzIGJvdGggZW5kcG9pbnRzIG9mIHRoZSBpbmZlcmVuY2UgdG8gdGhlIGdyYXBoLlxuICAgICAqIEBwYXJhbSBpXG4gICAgICovXG4gICAgYWRkSW5mZXJlbmNlKGkpIHtcbiAgICAgICAgdGhpcy5hZGRFZGdlKGkuZmlyc3QsIGkuc2Vjb25kLCBpKTtcbiAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKGkuZmlyc3QsIGkuc2Vjb25kKTtcbiAgICAgICAgdGhpcy5ub2Rlcy5hZGQoaS5maXJzdCk7XG4gICAgICAgIHRoaXMubm9kZXMuYWRkKGkuc2Vjb25kKTtcbiAgICAgICAgdGhpcy5yZXBPaygpO1xuICAgIH1cbiAgICBhZGRJbmZlcmVuY2VzKGxpc3QpIHtcbiAgICAgICAgZm9yIChjb25zdCBpIG9mIGxpc3QpXG4gICAgICAgICAgICB0aGlzLmFkZEluZmVyZW5jZShpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIG5vZGUgcmVwcmVzZW50aW5nIGFuIGFjdW11bGF0aW9uIG9mIGZhY3RzXG4gICAgICogdGhhdCBsZWFkcyB0byBhIGNvbmNsdXNpb24uXG4gICAgICogQHBhcmFtIGFcbiAgICAgKi9cbiAgICBhZGRBcmd1bWVudChhKSB7XG4gICAgICAgIHRoaXMubm9kZXMuYWRkKGEpO1xuICAgICAgICAvLyBBZGQgdGhlIGdyb3VuZHNcbiAgICAgICAgZm9yIChjb25zdCBncm91bmQgb2YgYS5ncm91bmRzKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVzLmFkZChncm91bmQpO1xuICAgICAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKGdyb3VuZCwgYSk7XG4gICAgICAgICAgICB0aGlzLmFkZEVkZ2UoZ3JvdW5kLCBhLCBBcmd1bWVudEVkZ2UuVG8pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCB0aGUgY2xhaW1cbiAgICAgICAgY29uc3QgY2xhaW0gPSBhLmNsYWltO1xuICAgICAgICB0aGlzLmFkZE5vZGUoY2xhaW0ubik7XG4gICAgICAgIHRoaXMuYWRkTm9kZShjbGFpbS5uMSk7XG4gICAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbihhLCBjbGFpbS5uKTtcbiAgICAgICAgdGhpcy5hZGRFZGdlKGEsIGNsYWltLm4sIEFyZ3VtZW50RWRnZS5Gcm9tKTtcbiAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKGEsIGNsYWltLm4xKTtcbiAgICAgICAgdGhpcy5hZGRFZGdlKGEsIGNsYWltLm4xLCBBcmd1bWVudEVkZ2UuRnJvbSk7XG4gICAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbihjbGFpbS5uLCBjbGFpbS5uMSk7XG4gICAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbihjbGFpbS5uMSwgY2xhaW0ubik7XG4gICAgICAgIHRoaXMuYWRkRWRnZShjbGFpbS5uLCBjbGFpbS5uMSwgYSk7XG4gICAgICAgIHRoaXMuYWRkRWRnZShjbGFpbS5uMSwgY2xhaW0ubiwgYSk7XG4gICAgICAgIHRoaXMucmVwT2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBuZWlnaGJvcnMgb2YgYSBub2RlLlxuICAgICAqIEBwYXJhbSBub2RlXG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiBOb2RlcyB0aGF0IGFyZSBhZGphY2VudCB0byB0aGlzIG5vZGUsIGZyb20gdGhpcyBub2RlLCBvciBlaXRoZXIuXG4gICAgICogQHJldHVybnMgVW5kZWZpbmVkIGlmIHRoZSBub2RlIGlzbid0IGluIHRoaXMgZ3JhcGguIE90aGVyd2lzZSwgYSBzZXQgb2YgY29ubmVjdGVkIG5vZGVzLlxuICAgICAqICAgICAgICAgIElmIHRoZSBub2RlIGlzIGluIHRoZSBncmFwaCBidXQgaXNuJ3QgY29ubmVjdGVkIHRvIGFueXRoaW5nLCByZXR1cm5zIGVtcHR5IHNldC5cbiAgICAgKi9cbiAgICBnZXROZWlnaGJvcnMobm9kZSwgZGlyZWN0aW9uKSB7XG4gICAgICAgIGlmICghdGhpcy5ub2Rlcy5oYXMobm9kZSkpXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwib3V0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2V0KHRoaXMuY29ubmVjdGlvbnMuZ2V0KG5vZGUpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYWRqYWNlbnRUbyA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBuIG9mIHRoaXMubm9kZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25zLmdldChuKT8uaGFzKG5vZGUpKVxuICAgICAgICAgICAgICAgIGFkamFjZW50VG8uYWRkKG4pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJpblwiKVxuICAgICAgICAgICAgcmV0dXJuIGFkamFjZW50VG87XG4gICAgICAgIGZvciAoY29uc3QgbiBvZiB0aGlzLmNvbm5lY3Rpb25zLmdldChub2RlKSA/PyBbXSlcbiAgICAgICAgICAgIGFkamFjZW50VG8uYWRkKG4pO1xuICAgICAgICByZXR1cm4gYWRqYWNlbnRUbztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB0aGUgbnVtYmVyIG9mIGVkZ2VzIHRoaXMgbm9kZSBoYXMuXG4gICAgICogQHBhcmFtIG5vZGUgVGhlIG5vZGUgYmVpbmcgY29uc2RlcmVkLlxuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24gQ291bnQgb25seSB0aGUgZWRnZXMgZ29pbmcgdG93YXJkcyB0aGlzIG5vZGUsIGF3YXkgZnJvbVxuICAgICAqICAgICAgICAgIGl0LCBvciBib3RoLlxuICAgICAqIEByZXR1cm5zID49IDAsIHVuZGVmaW5lZCBpZiB0aGUgZ2l2ZW4gbm9kZSBpc24ndCBpbiB0aGUgZ3JhcGguXG4gICAgICovXG4gICAgZ2V0RGVncmVlKG5vZGUsIGRpcmVjdGlvbikge1xuICAgICAgICBpZiAoIXRoaXMubm9kZXMuaGFzKG5vZGUpKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcIm91dFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9ucy5nZXQobm9kZSk/LnNpemUgPz8gMDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGVnSW4gPSAwO1xuICAgICAgICB0aGlzLm5vZGVzLmZvckVhY2gobiA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9ucy5nZXQobikgPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25zLmdldChuKS5oYXMobm9kZSkpXG4gICAgICAgICAgICAgICAgZGVnSW4rKztcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJpblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVnSW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZ0luICsgKHRoaXMuY29ubmVjdGlvbnMuZ2V0KG5vZGUpPy5zaXplID8/IDApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbiBOb2RlIGluIHRoZSBncmFwaC5cbiAgICAgKiBAcGFyYW0gbjEgSW4gdGhlIGdyYXBoLlxuICAgICAqIEByZXR1cm5zIFVuZGVmaW5lZCBpZiBlaXRoZXIgbm9kZSBpc24ndCBpbiB0aGUgZ3JhcGggb3IgdGhleSdyZSBub3RcbiAgICAgKiBjb25uZWN0ZWQuXG4gICAgICovXG4gICAgZ2V0RWRnZShuLCBuMSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lZGdlcy5nZXQobik/LmdldChuMSk7XG4gICAgfVxuICAgIGNvbnRhaW5zKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZXMuaGFzKG5vZGUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyBBbiBpdGVyYWJsZSBvZiBhbGwgdGhlIG5vZGVzIGluIHRoZSBncmFwaC5cbiAgICAgKi9cbiAgICBnZXROb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZXQodGhpcy5ub2Rlcyk7XG4gICAgfVxuICAgIGdldEVkZ2VzKCkge1xuICAgICAgICBjb25zdCBvdXQgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuZWRnZXMuZm9yRWFjaCgobWFwLCBmaXJzdCkgPT4ge1xuICAgICAgICAgICAgbWFwLmZvckVhY2goKGVkZ2UsIHNlY29uZCkgPT4ge1xuICAgICAgICAgICAgICAgIG91dC5hZGQoeyBuOiBmaXJzdCwgbjE6IHNlY29uZCwgZTogZWRnZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgbnVtTm9kZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVzLnNpemU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYWxsIGdyYXBoIG5vZGVzIGFuZCBlZGdlcyB0byB0aGlzIG9uZS5cbiAgICAgKiBAcGFyYW0gZ3JhcGhcbiAgICAgKi9cbiAgICBhZGRHcmFwaChncmFwaCkge1xuICAgICAgICBncmFwaC5ub2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub2Rlcy5hZGQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBncmFwaC5lZGdlcy5mb3JFYWNoKChtYXAsIG5vZGUxKSA9PiB7XG4gICAgICAgICAgICBtYXAuZm9yRWFjaCgoZWRnZSwgbm9kZTIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWRnZSBpbnN0YW5jZW9mIEluZmVyZW5jZV8xLkluZmVyZW5jZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRJbmZlcmVuY2UoZWRnZSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZWRnZSBpbnN0YW5jZW9mIEFyZ3VtZW50XzEuQXJndW1lbnQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQXJndW1lbnQoZWRnZSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZWRnZSA9PSBcInN1cHBvcnRzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFZGdlKG5vZGUxLCBub2RlMiwgQXJndW1lbnRFZGdlLlRvKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKG5vZGUxLCBub2RlMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVkZ2UgPT0gXCJjbGFpbXNcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVkZ2Uobm9kZTEsIG5vZGUyLCBBcmd1bWVudEVkZ2UuRnJvbSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbihub2RlMSwgbm9kZTIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gRWRnZSBUeXBlXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlcE9rKCk7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBsZXQgb3V0ID0gXCJHcmFwaChWID0ge1wiO1xuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgdGhpcy5ub2Rlcykge1xuICAgICAgICAgICAgb3V0ICs9IG5vZGUudG9TdHJpbmcoKSArIFwiLFwiO1xuICAgICAgICB9XG4gICAgICAgIG91dCA9IG91dC5zdWJzdHJpbmcoMCwgb3V0Lmxlbmd0aCAtIDEpICsgXCJ9LCBFID0ge1wiO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLmZvckVhY2goKHNldCwgc3JjKSA9PiB7XG4gICAgICAgICAgICBzZXQuZm9yRWFjaChkZXN0ID0+IHtcbiAgICAgICAgICAgICAgICBvdXQgKz0gc3JjLnRvU3RyaW5nKCkgKyBcIiAtPiBcIiArIGRlc3QudG9TdHJpbmcoKSArIFwiLCBcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgb3V0ICs9IFwifSBFZGdlIENvdW50OiBcIiArIHRoaXMuY29ubmVjdGlvbnMuc2l6ZTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgYWRkQ29ubmVjdGlvbihuLCBuMSkge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9ucy5nZXQobikgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9ucy5zZXQobiwgbmV3IFNldCgpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLmdldChuKS5hZGQobjEpO1xuICAgIH1cbiAgICBhZGRFZGdlKG4sIG4xLCBlKSB7XG4gICAgICAgIGlmICh0aGlzLmVkZ2VzLmdldChuKSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZWRnZXMuc2V0KG4sIG5ldyBNYXAoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lZGdlcy5nZXQobikuc2V0KG4xLCBlKTtcbiAgICB9XG4gICAgcmVwT2soKSB7XG4gICAgICAgIHRoaXMubm9kZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT0gdW5kZWZpbmVkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEFsbCBjb25uZWN0aW9ucy9lZGdlcyBoYXZlIG5vZGVzXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5ub2Rlcy5oYXMoa2V5KSk7XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKG4gPT4ge1xuICAgICAgICAgICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMubm9kZXMuaGFzKG4pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lZGdlcy5mb3JFYWNoKChtYXAsIGZpcnN0KSA9PiB7XG4gICAgICAgICAgICBtYXAuZm9yRWFjaCgoZWRnZSwgc2Vjb25kKSA9PiB7XG4gICAgICAgICAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5ub2Rlcy5oYXMoZmlyc3QpKTtcbiAgICAgICAgICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLm5vZGVzLmhhcyhzZWNvbmQpKTtcbiAgICAgICAgICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLmNvbm5lY3Rpb25zLmdldChmaXJzdCkuaGFzKHNlY29uZCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBub2RlcyA9IG5ldyBTZXQoKTtcbiAgICAvLyBRdWlja2x5IGFjY2VzcyBhbGwgY29ubmVjdGlvbnMgb2YgYSBub2RlXG4gICAgY29ubmVjdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgLy8gRGV0ZXJtaW5lIHRoZSB0eXBlIG9mIGNvbm5lY3Rpb24gYmV0d2VlbiB0d28gbm9kZXNcbiAgICBlZGdlcyA9IG5ldyBNYXAoKTtcbn1cbmV4cG9ydHMuR3JhcGggPSBHcmFwaDtcbnZhciBBcmd1bWVudEVkZ2U7XG4oZnVuY3Rpb24gKEFyZ3VtZW50RWRnZSkge1xuICAgIEFyZ3VtZW50RWRnZVtcIlRvXCJdID0gXCJzdXBwb3J0c1wiO1xuICAgIEFyZ3VtZW50RWRnZVtcIkZyb21cIl0gPSBcImNsYWltc1wiO1xufSkoQXJndW1lbnRFZGdlID0gZXhwb3J0cy5Bcmd1bWVudEVkZ2UgfHwgKGV4cG9ydHMuQXJndW1lbnRFZGdlID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HcmFwaE1pbmlwdWxhdG9yID0gdm9pZCAwO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi91dGlsL2Fzc2VydFwiKTtcbi8qKlxuICogVG9vbCB0byBkbyBvcGVyYXRpb25zIG9uIGdyYXBocy5cbiAqL1xuY2xhc3MgR3JhcGhNaW5pcHVsYXRvciB7XG4gICAgLyoqXG4gICAgICogRmluZCBub2RlcyBvZiBjb21wb25lbnRzIG9mIGEgZ3JhcGggd2hlcmUgb25seSBlZGdlcyBmb3Igd2hpY2hcbiAgICAgKiB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gcmV0dXJucyB0cnVlIGFyZSBjb25zaWRlcmVkLlxuICAgICAqIEBwYXJhbVxuICAgICAqIEBwYXJhbSBpc0Nvbm5lY3RlZFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDb21wb25lbnROb2RlcyhpbnB1dCwgaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgbGV0IGluY2x1ZGVkTm9kZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGxldCBjb21wb25lbnRzID0gbmV3IFNldCgpO1xuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgaW5wdXQuZ2V0Tm9kZXMoKSkge1xuICAgICAgICAgICAgaWYgKGluY2x1ZGVkTm9kZXMuaGFzKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRBbGxDb25uZWN0ZWQobikge1xuICAgICAgICAgICAgICAgIGluY2x1ZGVkTm9kZXMuYWRkKG4pO1xuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQuaGFzKG4pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmFkZChuKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5laWdoYm9yIG9mIGlucHV0LmdldE5laWdoYm9ycyhuLCBcImJvdGhcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0Nvbm5lY3RlZChpbnB1dC5nZXRFZGdlKG4sIG5laWdoYm9yKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgZ2V0QWxsQ29ubmVjdGVkKG5laWdoYm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2V0QWxsQ29ubmVjdGVkKG5vZGUpO1xuICAgICAgICAgICAgY29tcG9uZW50LmFkZChub2RlKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYWRkKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkoaW5jbHVkZWROb2Rlcy5zaXplID09IGlucHV0Lm51bU5vZGVzKCkpO1xuICAgICAgICAvLyBBc3NlcnQgY29tcG9uZW50cyBhcmUgcGFpcndpc2UgZGlzam9pbnQgb2YgcHJvYmxlbXMgc2hvdyB1cFxuICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyBldmVyeSBlZGdlIGluIHRoZSBncmFwaC5cbiAgICAgKiBAcGFyYW0gaW5wdXRcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRSZWxhdGlvbnMoaW5wdXQpIHtcbiAgICAgICAgY29uc3Qgb3V0ID0gW107XG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBpbnB1dC5nZXROb2RlcygpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG90aGVyIG9mIGlucHV0LmdldE5laWdoYm9ycyhub2RlLCBcIm91dFwiKSkge1xuICAgICAgICAgICAgICAgIG91dC5wdXNoKHsgZmlyc3Q6IG5vZGUsIHNlY29uZDogb3RoZXIsIGU6IGlucHV0LmdldEVkZ2Uobm9kZSwgb3RoZXIpIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgZ3JhcGggaW50byBzZXRzIG9mXG4gICAgICogbm9kZXMgZ3JvdXBlZCBieSBkZXB0aCBmcm9tIGEgY2VudGVyIG5vZGUuXG4gICAgICogQXNzdW1lcyB0aGUgZ3JhcGggaXMgY29ubmVjdGVkLlxuICAgICAqIEBwYXJhbSByb290Tm9kZXMgQ29udGFpbnMgYXQgbGVhc3Qgb25lIG5vZGUgaW4gdGhlIGdyYXBoLlxuICAgICAqIEBwYXJhbSBjb3VudCBGdW5jdGlvbiB0aGF0IGRldGVybWluZXMgaWYgYW55IGdpdmVuIG5vZGUgc2hvdWxkIGJlXG4gICAgICogaW5jbHVkZWQgaW4gdGhlIGRlcHRoIGNvdW50LiBEZWZhdWx0cyB0byBjb3VudGluZyBhbGwgbm9kZXMuIE5vZGVzIHRoYXRcbiAgICAgKiBhcmVuJ3QgaW5jbHVkZWQgd29uJ3QgYmUgaW4gdGhlIHJldHVybmVkIHZhbHVlLlxuICAgICAqIEByZXR1cm5zIE1hcCBmcm9tIGRlcHRoIGluIGdyYXBoIHRvIGEgc2V0IG9mIG5vZGVzIGF0IHRoYXQgZGVwdGguXG4gICAgICpcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0TGV2ZWxzKGlucHV0LCByb290Tm9kZXMsIGNvdW50ID0gKCkgPT4gdHJ1ZSkge1xuICAgICAgICBjb25zdCByb290cyA9IG5ldyBTZXQocm9vdE5vZGVzKTtcbiAgICAgICAgY29uc3QgZGVwdGhzID0gbmV3IE1hcCgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVjdXJzaXZlbHkgbWFwcyBvdXQgYWxsIG5vZGVzIGluIHRoZSBncmFwaCxcbiAgICAgICAgICogcHV0dGluIHRoZW0gaW4gdGhlIGRlcHRocyBtYXAuXG4gICAgICAgICAqIEBwYXJhbSBub2RlXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBtYXBOb2RlKG5vZGUsIGRlcHRoID0gMCkge1xuICAgICAgICAgICAgaWYgKHJvb3RzLmhhcyhub2RlKSkge1xuICAgICAgICAgICAgICAgIGRlcHRoID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZXB0aCA8IChkZXB0aHMuZ2V0KG5vZGUpID8/IE51bWJlci5NQVhfVkFMVUUpKSB7XG4gICAgICAgICAgICAgICAgZGVwdGhzLnNldChub2RlLCBkZXB0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZWlnaGJvcnMgPSBbLi4uaW5wdXQuZ2V0TmVpZ2hib3JzKG5vZGUsIFwiYm90aFwiKV07XG4gICAgICAgICAgICBuZWlnaGJvcnMuZmlsdGVyKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGZvdW5kIGEgc2hvcnRlciBwYXRoIHRvIGl0IG9yIHRoZXJlIHdhcyBubyBmb3VuZCBwYXRoIHRvIGl0XG4gICAgICAgICAgICAgICAgcmV0dXJuIChkZXB0aHMuZ2V0KHZhbHVlKSA9PSB1bmRlZmluZWQgfHwgZGVwdGhzLmdldCh2YWx1ZSkgPiBkZXB0aCkgJiYgdmFsdWUgIT09IG5vZGU7XG4gICAgICAgICAgICB9KS5mb3JFYWNoKG4gPT4ge1xuICAgICAgICAgICAgICAgIG1hcE5vZGUobiwgY291bnQobm9kZSkgPyBkZXB0aCArIDEgOiBkZXB0aCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBtYXBOb2RlKFsuLi5yb290c11bMF0pO1xuICAgICAgICBjb25zdCBvdXQgPSBuZXcgTWFwKCk7XG4gICAgICAgIGRlcHRocy5mb3JFYWNoKChkZXB0aCwgbm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjb3VudChub2RlKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiAob3V0LmdldChkZXB0aCkgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgb3V0LnNldChkZXB0aCwgbmV3IFNldCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91dC5nZXQoZGVwdGgpLmFkZChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgdGhlIGdpdmVuIGdyYXBoIGlzIGNvbm5lY3RlZCwgbWVhbmluZyB0aGF0XG4gICAgICogaXQncyBwb3NzaWJsZSB0byB0cmF2ZXJzZSBiZXR3ZWVuIGFueSB0d28gbm9kZXMgb24gdGhlIGdyYXBoLlxuICAgICAqL1xuICAgIHN0YXRpYyBpc0Nvbm5lY3RlZChpbnB1dCkge1xuICAgICAgICAvLyBDaGVjayBldmVyeSBub2RlIGhhcyBhIGRlZ3JlZSBvZiAxIG9yIG1vcmUgb3IgZ3JhcGggb25seSBoYXMgMSBvciAwIGVsZW1lbnRzXG4gICAgICAgIHJldHVybiBbLi4uaW5wdXQuZ2V0Tm9kZXMoKV0ubWFwKG5vZGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0LmdldERlZ3JlZShub2RlLCBcImJvdGhcIikgPiAwO1xuICAgICAgICB9KS5yZWR1Y2UoKGEsIGIpID0+IGEgJiYgYikgfHwgaW5wdXQubnVtTm9kZXMoKSA8IDI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpbHRlcnMgZWRnZXMgbGlzdCByZXR1cm5pbmcgYSBsaXN0IHdoZXJlIG9ubHkgb25lIGVkZ2VcbiAgICAgKiBmcm9tIGFueSBlZGdlIGxvb3BzIGlzIGluY2x1ZGVkLlxuICAgICAqIEZvciBleGFtcGxlIGlmIHRoZSBpbnB1dCBlZGdlcyBhcmUgYSAtPiBiIGFuZCBiIC0+IGEsXG4gICAgICogdGhlIHJlc3VsdCB3aWxsIG9ubHkgY29udGFpbiBhIC0+IGIuXG4gICAgICogQHBhcmFtIGVkZ2VzXG4gICAgICovXG4gICAgc3RhdGljIGRyb3BTeW1tZXRyaWMoZWRnZXMpIHtcbiAgICAgICAgY29uc3Qgb3V0ID0gW107XG4gICAgICAgIGZ1bmN0aW9uIGFscmVhZHlIYXMoZWRnZSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlIG9mIG91dClcbiAgICAgICAgICAgICAgICBpZiAoZWRnZS5uID09IGUubjEgJiYgZWRnZS5uMSA9PSBlLm4pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgZWRnZSBvZiBlZGdlcykge1xuICAgICAgICAgICAgaWYgKCFhbHJlYWR5SGFzKGVkZ2UpKVxuICAgICAgICAgICAgICAgIG91dC5wdXNoKGVkZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxufVxuZXhwb3J0cy5HcmFwaE1pbmlwdWxhdG9yID0gR3JhcGhNaW5pcHVsYXRvcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JbmZlcmVuY2UgPSB2b2lkIDA7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuL1JlbGF0aW9uc2hpcFwiKTtcbi8qKlxuICogQ29ubmVjdHMgdHdvIGV4cHJlc3Npb25zIHdpdGggYW4gZXhwbGFuYXRpb24uXG4gKiBJbiBvbmUgZGlyZWN0aW9uLiBBIGRpcmVjdGVkIGVkZ2UuXG4gKi9cbmNsYXNzIEluZmVyZW5jZSB7XG4gICAgY29uc3RydWN0b3IoZXhwMSwgZXhwMiwgZXhwbGFuYXRpb24pIHtcbiAgICAgICAgdGhpcy5leHBsYW5hdGlvbiA9IGV4cGxhbmF0aW9uO1xuICAgICAgICB0aGlzLmZpcnN0ID0gZXhwMTtcbiAgICAgICAgdGhpcy5zZWNvbmQgPSBleHAyO1xuICAgICAgICB0aGlzLnJlbGF0aW9uc2hpcCA9IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbDtcbiAgICB9XG4gICAgZXhwbGFuYXRpb247XG4gICAgZmlyc3Q7XG4gICAgc2Vjb25kO1xuICAgIHJlbGF0aW9uc2hpcDtcbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVsYXRpb25zaGlwO1xuICAgIH1cbiAgICBleHByZXNzaW9uRWRnZSA9IHRydWU7XG59XG5leHBvcnRzLkluZmVyZW5jZSA9IEluZmVyZW5jZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5SZWxhdGlvbnNoaXAgPSB2b2lkIDA7XG4vKipcbiAqIEEgd2F5IGluIHdoaWNoIDIgZXhwcmVzc2lvbnMgY2FuIGJlIHJlbGF0ZWQuXG4gKi9cbnZhciBSZWxhdGlvbnNoaXA7XG4oZnVuY3Rpb24gKFJlbGF0aW9uc2hpcCkge1xuICAgIFJlbGF0aW9uc2hpcFtcIkVxdWFsXCJdID0gXCI9XCI7XG59KShSZWxhdGlvbnNoaXAgPSBleHBvcnRzLlJlbGF0aW9uc2hpcCB8fCAoZXhwb3J0cy5SZWxhdGlvbnNoaXAgPSB7fSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFsZ2VicmEgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi4vZXhwcmVzc2lvbnMvU3VtXCIpO1xuY29uc3QgR3JhcGhfMSA9IHJlcXVpcmUoXCIuLi9HcmFwaFwiKTtcbmNvbnN0IEdyYXBoTWluaXB1bGF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HcmFwaE1pbmlwdWxhdG9yXCIpO1xuY29uc3QgSW5mZXJlbmNlXzEgPSByZXF1aXJlKFwiLi4vSW5mZXJlbmNlXCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vUmVsYXRpb25zaGlwXCIpO1xuLyoqXG4gKiBVc2VzIGFsZ2VicmEgdG8gZXhwYW5kIGEgZ3JhcGguXG4gKi9cbmNsYXNzIEFsZ2VicmEge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBncmFwaCBjb250YWluaW5nIG9ubHkgZXhwYW5zaW9ucyBmcm9tIHRoZVxuICAgICAqIGdpdmVuIG9uZS5cbiAgICAgKiBAcGFyYW0gaW5wdXRcbiAgICAgKi9cbiAgICBzdGF0aWMgZXhwYW5kKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBzdWJ0cmFjdEZyb21Cb3RoU2lkZXMoaW5wdXQpO1xuICAgIH1cbn1cbmV4cG9ydHMuQWxnZWJyYSA9IEFsZ2VicmE7XG4vKipcbiAqIENyZWF0ZSBhIG5ldyBncmFwaCBjb250YWluaW5nIG9ubHkgZXhwYW5zaW9ucyBmcm9tIHRoZVxuICogZ2l2ZW4gb25lLiBSZXN1bHRpbmcgZ3JhcGggbWF5IG5vdCBiZSBjb25uZWN0ZWQuIFRoZSByZXN1bHRcbiAqIHVuaW9uZWQgd2l0aCB0aGUgaW5wdXQgd2lsbCBiZSBjb25uZWN0ZWQuXG4gKiB4ID0geSArIDJcbiAqID0+IHggLSAyID0geVxuICogQHBhcmFtIGlucHV0XG4gKi9cbmZ1bmN0aW9uIHN1YnRyYWN0RnJvbUJvdGhTaWRlcyhpbnB1dCkge1xuICAgIC8vIEdldCB0aGUgY29tcG9uZW50cyBvZiB0aGUgZ3JhcGggd2hpY2ggYXJlIGVxdWFsXG4gICAgY29uc3QgZXF1YWxzID0gR3JhcGhNaW5pcHVsYXRvcl8xLkdyYXBoTWluaXB1bGF0b3IuZ2V0Q29tcG9uZW50Tm9kZXMoaW5wdXQsIChlKSA9PiB7XG4gICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgSW5mZXJlbmNlXzEuSW5mZXJlbmNlICYmIGUucmVsYXRpb25zaGlwID09IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbDtcbiAgICB9KTtcbiAgICAvLyBGaWx0ZXIgb3V0IHVuaGVhbHRoeSBleHByZXNzaW9uc1xuICAgIGVxdWFscy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWx0aHkgPSBbLi4uY29tcG9uZW50XS5maWx0ZXIoZSA9PiBlLmlzSGVhbHRoeSk7XG4gICAgICAgIGNvbXBvbmVudC5jbGVhcigpO1xuICAgICAgICBoZWFsdGh5LmZvckVhY2goZSA9PiBjb21wb25lbnQuYWRkKGUpKTtcbiAgICB9KTtcbiAgICBjb25zdCBvdXQgPSBuZXcgR3JhcGhfMS5HcmFwaCgpO1xuICAgIGVxdWFscy5mb3JFYWNoKGVxdWF0aW9uID0+IHtcbiAgICAgICAgY29uc3QgYXJncyA9IHN1YkZyb21Cb3RoU2lkZXMoZXF1YXRpb24pO1xuICAgICAgICBhcmdzLmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICBvdXQuYWRkQXJndW1lbnQoYSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIEdldCBhIGxpc3Qgb2YgY29uY2x1c2lvbnMgdGhhdCBjYW4gYmUgZHJhd25cbiAqIGZyb20gdGhlIGVxdWFsaXR5IG9mIHRoZSBleHByZXNzaW9ucyBnaXZlbi5cbiAqIEBwYXJhbSBlcXVhdGlvblxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gc3ViRnJvbUJvdGhTaWRlcyhlcXVhdGlvbikge1xuICAgIGNvbnN0IG91dCA9IFtdO1xuICAgIGNvbnN0IGNvbWJpbmF0aW9ucyA9IGNhcnRlc2lhblByb2R1Y3QoZXF1YXRpb24pO1xuICAgIC8vIElmIG9uZSBpcyBhZGRpdGlvbiwgc3VidHJhY3QgZnJvbSBib3RoIHNpZGVzXG4gICAgLy8gSGVyZSB3ZSBmaWx0ZXIgc28gdGhhdCBvbmx5IHBhaXJzIHdoZXJlIHRoZSBmaXJzdCBleHByZXNzaW9uIGlzXG4gICAgLy8gYSBzdW0gYXJlIG9wZXJhdGVkIG9uLiBUaGlzIHdvcmtzIGJlY2F1c2UgY29tYmluYXRpb25zIGlzIHN5bWV0cmljLlxuICAgIC8vIE5vdyBmb3IgZWFjaCBwYWlyIHdlIG9ubHkgaGF2ZSB0byBkZWFsIHdpdGggdGhlIGZpcnN0IGV4cCBiZWluZyBzdW0uXG4gICAgY29tYmluYXRpb25zLmZpbHRlcihwYWlyID0+IHtcbiAgICAgICAgcmV0dXJuIHBhaXJbMF0gaW5zdGFuY2VvZiBTdW1fMS5TdW07XG4gICAgfSkuZm9yRWFjaChwYWlyID0+IHtcbiAgICAgICAgY29uc3QgcyA9IHBhaXJbMF07XG4gICAgICAgIGNvbnN0IG90aGVyID0gcGFpclsxXTtcbiAgICAgICAgLy8gU29tZSBTdW1zIGhhdmUgbXVsdGlwbGUgdGVybXNcbiAgICAgICAgcy50ZXJtcy5mb3JFYWNoKHRlcm0gPT4ge1xuICAgICAgICAgICAgLy8gSWYgb3RoZXIgaXMgaXRzZWxmIGEgc3VtLCB3ZSB3aWxsIGJyZWFrIGl0IGFwYXJ0XG4gICAgICAgICAgICAvLyBpbnRvIHRlcm1zIHNvIHRoYXQgd2UgY2FuIGNvbWJpbmUgaW50ZWdlciB0ZXJtcyBpbiB0aGVcbiAgICAgICAgICAgIC8vIGZpbmFsIHJlc3VsdCBhbmQgYXZvaWRcbiAgICAgICAgICAgIC8vIHggKyAyICsgMiA9IHkgKyAyID0+IHggKyAyID0geSArIDIgLSAyXG4gICAgICAgICAgICAvLyBOb3RlOiBXZSBvbmx5IGRvIHRoaXMgdG8gaW50ZWdlciB0ZXJtcywgYmVjYXVzZSB0aGF0J3NcbiAgICAgICAgICAgIC8vIHNvIG9idmlvdXMgYW5kIGNvdWxkbid0IHBvc3NpYmx5IG5lZWQgdG8gYmUgZXhwbGFpbmVkIGZ1cnRoZXIuXG4gICAgICAgICAgICAvLyBXZSBkb24ndCBkbyBpdCB0byB2YXJpYWJsZSB0ZXJtcy4gVGhlIGZvbGxvd2luZyBpcyBjb3JyZWN0IGJlaGF2aW9yOlxuICAgICAgICAgICAgLy8geCArIGEgKyBhID0geSArIGEgPT4geCArIGEgPSB5ICsgYSAtIGFcbiAgICAgICAgICAgIC8vIFRPRE86IFRoaXMgZGlzdGluY3Rpb24gaXMgZGViYXRhYmxlLiBXaHkgc2hvdWxkbid0IHRoZSBsZWZ0IGhhbmRcbiAgICAgICAgICAgIC8vIG9mIHRoZSBsYXN0IGRlZHVjdGlvbiBiZSB4ICsgYSArIGEgLSBhPyBCeSBkb2luZyB0aGlzLCBcbiAgICAgICAgICAgIC8vIHdlIHByb2R1Y2UgYSBtdWNoIG1vcmUgY29tcGxpY2F0ZWQgYW5kIGV4cGVuc2l2ZSBncmFwaC4gXG4gICAgICAgICAgICBsZXQgc2Vjb25kO1xuICAgICAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgU3VtXzEuU3VtKSB7XG4gICAgICAgICAgICAgICAgc2Vjb25kID0gWy4uLm90aGVyLnRlcm1zXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlY29uZCA9IFtvdGhlcl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjbGFpbSA9IHsgbjogcy53aXRob3V0KHRlcm0pLCBuMTogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bUludHVpdGl2ZSkoLi4uc2Vjb25kLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubmVnYXRpdmUpKHRlcm0pKSwgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsIH07XG4gICAgICAgICAgICBvdXQucHVzaChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudChuZXcgU2V0KFtzLCBvdGhlcl0pLCBjbGFpbSwgXCJhPWIgJiBjPWQgPT4gYS1jID0gYi1kXCIpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogR2V0cyB0aGUgYW50aS1yZWZsZXhpdmUgY2xvc3VyZSBvZiB0aGUgcmVsYXRpb24gQSB4IEEuXG4gKiBJdCdzIHN5bW1ldHJpYyBhbmQgdHJhbnNpdGl2ZS5cbiAqXG4gKiBAcGFyYW0gc2V0XG4gKi9cbmZ1bmN0aW9uIGNhcnRlc2lhblByb2R1Y3Qoc2V0KSB7XG4gICAgY29uc3Qgb3V0ID0gW107XG4gICAgZm9yIChjb25zdCBmaXJzdCBvZiBzZXQpIHtcbiAgICAgICAgZm9yIChjb25zdCBzZWNvbmQgb2Ygc2V0KSB7XG4gICAgICAgICAgICBpZiAoZmlyc3QgPT09IHNlY29uZClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIG91dC5wdXNoKFtmaXJzdCwgc2Vjb25kXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Bcml0aG1ldGljID0gdm9pZCAwO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgRXhwb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9leHByZXNzaW9ucy9FeHBvbmVudFwiKTtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuLi9leHByZXNzaW9ucy9FeHByZXNzaW9uXCIpO1xuY29uc3QgSW50ZWdlcl8xID0gcmVxdWlyZShcIi4uL2V4cHJlc3Npb25zL0ludGVnZXJcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi4vZXhwcmVzc2lvbnMvUHJvZHVjdFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4uL2V4cHJlc3Npb25zL1N1bVwiKTtcbmNvbnN0IEdyYXBoXzEgPSByZXF1aXJlKFwiLi4vR3JhcGhcIik7XG5jb25zdCBJbmZlcmVuY2VfMSA9IHJlcXVpcmUoXCIuLi9JbmZlcmVuY2VcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2Fzc2VydFwiKTtcbi8qKlxuICogR2l2ZW4gYW4gZXhwcmVzc2lvbiwgdGhpcyBjbGFzcyBjYW4gZGVyaXZlIG90aGVyXG4gKiBlcXVpdmFsZW50IGV4cHJlc3Npb25zLlxuICovXG5jbGFzcyBBcml0aG1ldGljIHtcbiAgICAvKipcbiAgICAgKiBQcm9kdWNlcyBhIGdyYXBoIGNvbnRhaW5pbmcgZXhwcmVzc2lvbnNcbiAgICAgKiBlcXVpdmFsZW50IHRvIHRoZSBvbmUgZ2l2ZW4gd2l0aCB0aGVpclxuICAgICAqIGRlcml2YXRpb25zLlxuICAgICAqIE9ubHkgZ29lcyAxIGluZmVyZW5jZSBkZWVwLlxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5kRXF1aXZhbGVudHNGb3IoZXhwKSB7XG4gICAgICAgIGxldCBvdXQgPSBuZXcgR3JhcGhfMS5HcmFwaCgpO1xuICAgICAgICBmb3IgKGNvbnN0IHJ1bGUgb2YgcnVsZXNPZkluZmVyZW5jZSkge1xuICAgICAgICAgICAgaWYgKHJ1bGUuYXBwbGllcyhleHApKSB7XG4gICAgICAgICAgICAgICAgLy8gRm9yIGRlYnVnaW5nIGJyb2tlbiBydWxlc1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocnVsZS5uYW1lKVxuICAgICAgICAgICAgICAgIG91dC5hZGRJbmZlcmVuY2VzKHJ1bGUuYXBwbHkoZXhwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgc3RhdGljIGV4cGFuZChpbnB1dCkge1xuICAgICAgICBsZXQgb3V0ID0gbmV3IEdyYXBoXzEuR3JhcGgoKTtcbiAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIGlucHV0LmdldE5vZGVzKCkpIHtcbiAgICAgICAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbikpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBydWxlc09mSW5mZXJlbmNlLmZpbHRlcihyID0+IHIuYXBwbGllcyhub2RlKSkuZm9yRWFjaChydWxlID0+IHtcbiAgICAgICAgICAgICAgICBvdXQuYWRkSW5mZXJlbmNlcyhydWxlLmFwcGx5KG5vZGUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxufVxuZXhwb3J0cy5Bcml0aG1ldGljID0gQXJpdGhtZXRpYztcbmNsYXNzIFJ1bGVPZkluZmVyZW5jZSB7XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2V0IG9mIGluZmVyZW5jZXMgdGhpc1xuICAgICAqIHJ1bGUgY3JlYXRlcy4gT25seSBjYWxsZWQgaWYgYXBwbGllcygpIGlzIHRydWUuXG4gICAgICovXG4gICAgYXBwbHkoZXhwKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuYXBwbHlJbXBsKGV4cCk7XG4gICAgICAgIHJlc3VsdC5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkoZSAhPSBudWxsICYmIGUgIT0gdW5kZWZpbmVkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuLyoqXG4gKiBhICsgYSA9IDJhXG4gKlxuICogQnV0IG5vdFxuICogMSArIDEgPSAyKDEpXG4gKi9cbmNsYXNzIENvbWJpbmVDb21tb25UZXJtc0FkZGl0aW9uIGV4dGVuZHMgUnVsZU9mSW5mZXJlbmNlIHtcbiAgICBuYW1lID0gXCJDb21iaW5lIENvbW1vbiBUZXJtcyAoQWRkaXRpb24pXCI7XG4gICAgYXBwbGllcyhleHApIHtcbiAgICAgICAgaWYgKCEoZXhwIGluc3RhbmNlb2YgU3VtXzEuU3VtKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGV4cC5yZWR1Y2libGVPckludClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3Qgc3VtID0gZXhwO1xuICAgICAgICBpZiAobmV3IFNldChzdW0udGVybXMpLnNpemUgPCBzdW0udGVybXMubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgYXBwbHlJbXBsKGV4cCkge1xuICAgICAgICBsZXQgZXF1aXZhbGVudEV4cHJlc3Npb25zID0gbmV3IFNldCgpO1xuICAgICAgICBjb25zdCBzdW0gPSBleHA7XG4gICAgICAgIGNvbnN0IHVuaXF1ZVRlcm1zID0gbmV3IFNldChzdW0udGVybXMpO1xuICAgICAgICAvLyBTdXBwb3NlIHRoZSBzdW0gaXMgYSArIGEgKyBiXG4gICAgICAgIC8vIEZvciBldmVyeSB1bmlxdWUgdGVybSBpbiB7YSwgYn1cbiAgICAgICAgZm9yIChjb25zdCB1bmlxdWVUZXJtIG9mIHVuaXF1ZVRlcm1zKSB7XG4gICAgICAgICAgICAvLyBBdm9pZCB1bmhlYWx0aHkgZXhwcmVzc2lvbnNcbiAgICAgICAgICAgIGlmICh1bmlxdWVUZXJtLnJlZHVjaWJsZU9ySW50KVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgbGV0IHJlbWFpbmluZ1Rlcm1zID0gW107XG4gICAgICAgICAgICBsZXQgb2NjdXJhbmNlcyA9IDA7XG4gICAgICAgICAgICAvLyBDb3VudCB0aGUgbnVtYmVyIG9mIHRpbWVzIGl0IG9jY3VycyBpbiB0aGUgc3VtLFxuICAgICAgICAgICAgLy8gY29sbGVjdGluZyBhbGwgb3RoZXIgdGVybXMuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHQgb2Ygc3VtLnRlcm1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHQgPT0gdW5pcXVlVGVybSkge1xuICAgICAgICAgICAgICAgICAgICBvY2N1cmFuY2VzKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW1haW5pbmdUZXJtcy5wdXNoKHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGl0IG9jY3VyZXMgbXVsdGlwbGUgdGltZXMsIGNyZWF0ZSBhIG5ldyBzdW1cbiAgICAgICAgICAgIC8vIGV4cHJlc3Npb24gd2l0aCB0aGF0IHRlcm0gY29tYmluZWRcbiAgICAgICAgICAgIGlmIChvY2N1cmFuY2VzID4gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBQcm9kdWN0XzEuUHJvZHVjdC5vZihbdW5pcXVlVGVybSwgSW50ZWdlcl8xLkludGVnZXIub2Yob2NjdXJhbmNlcyldKTtcbiAgICAgICAgICAgICAgICBpZiAocmVtYWluaW5nVGVybXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZXF1aXZhbGVudEV4cHJlc3Npb25zLmFkZChwcm9kdWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZ1Rlcm1zLnB1c2gocHJvZHVjdCk7XG4gICAgICAgICAgICAgICAgICAgIGVxdWl2YWxlbnRFeHByZXNzaW9ucy5hZGQoU3VtXzEuU3VtLm9mKHJlbWFpbmluZ1Rlcm1zKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFR1cm4gdGhlIGVxdWl2YWxlbnQgZXhwcmVzc2lvbnMgaW50byBpbmZlcmVuY2VzXG4gICAgICAgIGxldCBpbmZlcmVuY2VzID0gbmV3IFNldCgpO1xuICAgICAgICBlcXVpdmFsZW50RXhwcmVzc2lvbnMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIGluZmVyZW5jZXMuYWRkKG5ldyBJbmZlcmVuY2VfMS5JbmZlcmVuY2Uoc3VtLCBlLCBcIkRpc3RyaWJ1dGl2ZSBwcm9wZXJ0eSBvZiBtdWx0aXBsaWNhdGlvblwiKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaW5mZXJlbmNlcztcbiAgICB9XG59XG5jbGFzcyBDb21iaW5lQ29tbW9uVGVybXNNdWx0aXBsaWNhdGlvbiBleHRlbmRzIFJ1bGVPZkluZmVyZW5jZSB7XG4gICAgbmFtZSA9IFwiQ29tYmluZUNvbW1vblRlcm1zIChNdWx0aXBsaWNhdGlvbilcIjtcbiAgICBhcHBsaWVzKGV4cCkge1xuICAgICAgICBpZiAoIShleHAgaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChleHAuaXNSZWR1Y2libGUpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBleHA7XG4gICAgICAgIGlmIChuZXcgU2V0KHByb2R1Y3QuZmFjdG9ycykuc2l6ZSA8IHByb2R1Y3QuZmFjdG9ycy5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGxldCBlcXVpdmFsZW50RXhwcmVzc2lvbnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBleHA7XG4gICAgICAgIGNvbnN0IHVuaXF1ZUZhY3RvcnMgPSBuZXcgU2V0KHByb2R1Y3QuZmFjdG9ycyk7XG4gICAgICAgIC8vIFN1cHBvc2UgdGhlIHByb2R1Y3QgaXMgYSAqIGEgKiBiXG4gICAgICAgIC8vIEZvciBldmVyeSB1bmlxdWUgZmFjdG9yIHthLCBifVxuICAgICAgICBmb3IgKGNvbnN0IHVuaXF1ZUZhY3RvciBvZiB1bmlxdWVGYWN0b3JzKSB7XG4gICAgICAgICAgICBsZXQgb2NjdXJhbmNlcyA9IDA7XG4gICAgICAgICAgICBsZXQgcmVtYWluaW5nRmFjdG9ycyA9IFtdO1xuICAgICAgICAgICAgLy8gQ291bnQgdGhlIG51bWJlciBvZiB0aW1lcyBpdCBvY2N1cnMgaW4gdGhlIHByb2R1Y3QsXG4gICAgICAgICAgICAvLyBjb2xsZWN0aW5nIGFsbCBvdGhlciBmYWN0b3JzLlxuICAgICAgICAgICAgZm9yIChjb25zdCB0IG9mIHByb2R1Y3QuZmFjdG9ycykge1xuICAgICAgICAgICAgICAgIGlmICh0ID09IHVuaXF1ZUZhY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICBvY2N1cmFuY2VzKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW1haW5pbmdGYWN0b3JzLnB1c2godCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgaXQgb2NjdXJlcyBtdWx0aXBsZSB0aW1lcywgY3JlYXRlIGEgbmV3IHN1bVxuICAgICAgICAgICAgLy8gZXhwcmVzc2lvbiB3aXRoIHRoYXQgdGVybSBjb21iaW5lZFxuICAgICAgICAgICAgaWYgKG9jY3VyYW5jZXMgPiAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhwb25lbnQgPSBFeHBvbmVudF8xLkV4cG9uZW50Lm9mKHVuaXF1ZUZhY3RvciwgSW50ZWdlcl8xLkludGVnZXIub2Yob2NjdXJhbmNlcykpO1xuICAgICAgICAgICAgICAgIGlmIChyZW1haW5pbmdGYWN0b3JzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVxdWl2YWxlbnRFeHByZXNzaW9ucy5hZGQoZXhwb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nRmFjdG9ycy5wdXNoKHByb2R1Y3QpO1xuICAgICAgICAgICAgICAgICAgICBlcXVpdmFsZW50RXhwcmVzc2lvbnMuYWRkKFByb2R1Y3RfMS5Qcm9kdWN0Lm9mKHJlbWFpbmluZ0ZhY3RvcnMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHVybiB0aGUgZXF1aXZhbGVudCBleHByZXNzaW9ucyBpbnRvIGluZmVyZW5jZXNcbiAgICAgICAgbGV0IGluZmVyZW5jZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGVxdWl2YWxlbnRFeHByZXNzaW9ucy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgaW5mZXJlbmNlcy5hZGQobmV3IEluZmVyZW5jZV8xLkluZmVyZW5jZShwcm9kdWN0LCBlLCBcIkV4cG9uZW50aWFsIHJ1bGUgZm9yIG11bHRpcGx5aW5nIGVxdWFsIGJhc2VzXCIpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBpbmZlcmVuY2VzO1xuICAgIH1cbn1cbi8qKlxuICogQ29tYmluZSBhbnkgaW50ZWdlciB0ZXJtcyBpbiBTdW1zLlxuICogYSArIDIgKyAyICsgMj0gYSArIDRcbiAqIDIgLSAyID0gMFxuICpcbiAqIENvbWJpbmVzIGFsbCBvZiB0aGVtIGF0IG9uY2Ugbm8gbWF0dGVyIGhvdyBtYW55IHRlcm1zIHRoZXJlIGFyZS5cbiAqXG4gKi9cbmNsYXNzIEV2YWx1YXRlU3VtcyBleHRlbmRzIFJ1bGVPZkluZmVyZW5jZSB7XG4gICAgbmFtZSA9IFwiQWRkaXRpb25cIjtcbiAgICBhcHBsaWVzKGV4cCkge1xuICAgICAgICByZXR1cm4gZXhwIGluc3RhbmNlb2YgU3VtXzEuU3VtO1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGNvbnN0IHN1bSA9IGV4cDtcbiAgICAgICAgY29uc3Qgb3V0ID0gbmV3IFNldCgpO1xuICAgICAgICBjb25zdCBpbnRlZ2VyVGVybXMgPSBbLi4uc3VtLnRlcm1zXS5maWx0ZXIodCA9PiB0IGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpO1xuICAgICAgICBpZiAoaW50ZWdlclRlcm1zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0ludCA9IGludGVnZXJUZXJtcy5tYXAoZSA9PiBlKS5yZWR1Y2UoKGEsIGIpID0+IEludGVnZXJfMS5JbnRlZ2VyLm9mKGEudmFsdWUgKyBiLnZhbHVlKSk7XG4gICAgICAgIGNvbnN0IG90aGVyVGVybXMgPSBbLi4uc3VtLnRlcm1zXS5maWx0ZXIodCA9PiAhKHQgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcikpO1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICBpZiAob3RoZXJUZXJtcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEluZmVyZW5jZV8xLkluZmVyZW5jZShzdW0sIG5ld0ludCwgXCJFdmFsdWF0ZWQgQWRkaXRpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgSW5mZXJlbmNlXzEuSW5mZXJlbmNlKHN1bSwgU3VtXzEuU3VtLm9mKG90aGVyVGVybXMuY29uY2F0KG5ld0ludCkpLCBcIkV2YWx1YXRlZCBBZGRpdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBvdXQuYWRkKHJlc3VsdCk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxufVxuY2xhc3MgUmVkdWNlUmVkdWNpYmxlcyBleHRlbmRzIFJ1bGVPZkluZmVyZW5jZSB7XG4gICAgbmFtZSA9IFwiRXZhbHVhdGUgUmVkdWNpYmxlc1wiO1xuICAgIGFwcGxpZXMoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAuaXNSZWR1Y2libGU7XG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZXQoW25ldyBJbmZlcmVuY2VfMS5JbmZlcmVuY2UoZXhwLCBleHAucmVkdWNlZCwgXCJSZWR1Y2VkXCIpXSk7XG4gICAgfVxufVxuLyoqXG4gKiBUdXJucyBzdW1zIHRoYXQgYXJlIHVuaGVhbHRoeSBiZWNhdXNlIHRoZWlyIHRlcm0gb3JkZXJcbiAqIGlzIHdyb25nIGludG8gY29ycmVjdGx5IG9yZGVyZWQgc3Vtcy5cbiAqL1xuY2xhc3MgT3JkZXJTdW1zIGV4dGVuZHMgUnVsZU9mSW5mZXJlbmNlIHtcbiAgICBuYW1lID0gXCJSZW9yZGVyIFN1bXNcIjtcbiAgICBhcHBsaWVzKGV4cCkge1xuICAgICAgICByZXR1cm4gIWV4cC5pc0hlYWx0aHkgJiYgZXhwIGluc3RhbmNlb2YgU3VtXzEuU3VtO1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2V0KFtuZXcgSW5mZXJlbmNlXzEuSW5mZXJlbmNlKGV4cCwgKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm9yZGVyZWRTdW0pKGV4cCksIFwiUmVvcmRlcmVkXCIpXSk7XG4gICAgfVxufVxubGV0IHJ1bGVzT2ZJbmZlcmVuY2UgPSBbXG4gICAgbmV3IENvbWJpbmVDb21tb25UZXJtc0FkZGl0aW9uKCksXG4gICAgbmV3IENvbWJpbmVDb21tb25UZXJtc011bHRpcGxpY2F0aW9uKCksXG4gICAgbmV3IEV2YWx1YXRlU3VtcygpLFxuICAgIG5ldyBSZWR1Y2VSZWR1Y2libGVzKCksXG4gICAgbmV3IE9yZGVyU3VtcygpLFxuXTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5EZXJpdmF0aXZlVHlwZSA9IGV4cG9ydHMuRGVyaXZhdGl2ZSA9IHZvaWQgMDtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuL0V4cHJlc3Npb25cIik7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi9JbnRlZ2VyXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4vUHJvZHVjdFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4vU3VtXCIpO1xuLyoqXG4gKlxuICovXG5jbGFzcyBEZXJpdmF0aXZlIGV4dGVuZHMgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24ge1xuICAgIHN0YXRpYyBvZihleHAsIHJlbGF0aXZlVG8pIHtcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlcy5oYXMoZXhwLmhhc2gpKVxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXMuc2V0KGV4cC5oYXNoICsgcmVsYXRpdmVUby5oYXNoLCBuZXcgRGVyaXZhdGl2ZShleHAsIHJlbGF0aXZlVG8pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzLmdldChleHAuaGFzaCArIHJlbGF0aXZlVG8uaGFzaCk7XG4gICAgfVxuICAgIHN0YXRpYyBpbnN0YW5jZXMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3RydWN0b3IoZXhwLCByZWxhdGl2ZVRvKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZXhwID0gZXhwO1xuICAgICAgICB0aGlzLnJlbGF0aXZlVG8gPSByZWxhdGl2ZVRvO1xuICAgICAgICB0aGlzLmlzUmVkdWNpYmxlID0gZmFsc2U7IC8vVE9ETzogRGV0ZXJtaW5lIGlmIGEgZGVyaXZhdGl2ZSBpcyByZWR1Y2libGVcbiAgICAgICAgdGhpcy5pc0NvbnN0YW50ID0gZmFsc2U7IC8vIFRPRE86IERldGVybWluZSBpZiBhIGRlcml2YXRpdmUgaXMgY29uc3RhbnRcbiAgICAgICAgbGV0IGlzSGVhbHRoeSA9IHRydWU7XG4gICAgICAgIGlmIChleHAuaXNDb25zdGFudClcbiAgICAgICAgICAgIGlzSGVhbHRoeSA9IGZhbHNlO1xuICAgICAgICBpZiAoZXhwIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3QpIHtcbiAgICAgICAgICAgIG5ldyBTZXQoZXhwLmZhY3RvcnMpLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlciB8fCBlIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3QgJiYgZS5pc05lZ2F0aW9uICYmIGUubmVnYXRpb24pXG4gICAgICAgICAgICAgICAgICAgIGlzSGVhbHRoeSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vVE9ETzogVGhlcmUgYXJlIGEgbG90IG1vcmUgcG9zc2libGl0aWVzIHRoYW4gdGhpc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0hlYWx0aHkgPSBpc0hlYWx0aHk7XG4gICAgfVxuICAgIGV4cDtcbiAgICByZWxhdGl2ZVRvO1xuICAgIGdldCByZWR1Y2VkKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLiBOb3Qgc3VyZSBpZiBkZXJpdmF0aXZlcyBzaG91bGQgYmUgcmVkdWNpYmxlLlwiKTtcbiAgICB9XG4gICAgaXNSZWR1Y2libGU7XG4gICAgY2xhc3MgPSBleHBvcnRzLkRlcml2YXRpdmVUeXBlO1xuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCJkL2RcIiArIHRoaXMucmVsYXRpdmVUby50b1N0cmluZygpICsgXCIoXCIgKyB0aGlzLmV4cC50b1N0cmluZygpICsgXCIpXCI7XG4gICAgfVxuICAgIGdldCBoYXNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGFzcyArIHRoaXMuZXhwLmhhc2ggKyB0aGlzLnJlbGF0aXZlVG8uaGFzaDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogMS4gZXhwIGlzbid0IGEgY29uc3RhbnRcbiAgICAgKiAyLiBJZiBleHAgaXMgcHJvZHVjdCwgaXQgY29udGFpbnMgbm8gY29uc3RhbnRzLlxuICAgICAqL1xuICAgIGlzSGVhbHRoeTtcbiAgICB0b01hdGhYTUwoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHdyYXBJZk5lZWRlZChleHApIHtcbiAgICAgICAgICAgIGlmIChleHAuY2xhc3MgPT0gU3VtXzEuU3VtVHlwZSB8fCBleHAuY2xhc3MgPT0gUHJvZHVjdF8xLlByb2R1Y3RUeXBlKVxuICAgICAgICAgICAgICAgIHJldHVybiBcIjxtbz4oPC9tbz5cIiArIGV4cC50b01hdGhYTUwoKSArIFwiPG1vPik8L21vPlwiO1xuICAgICAgICAgICAgcmV0dXJuIGV4cC50b01hdGhYTUwoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCI8bWZyYWM+PG1uPmQ8L21uPjxtcm93Pjxtbj5kPC9tbj5cIiArIHdyYXBJZk5lZWRlZCh0aGlzLnJlbGF0aXZlVG8pICsgXCI8L21yb3c+PC9tZnJhYz5cIiArIHdyYXBJZk5lZWRlZCh0aGlzLmV4cCk7XG4gICAgfVxuICAgIGlzQ29uc3RhbnQ7XG59XG5leHBvcnRzLkRlcml2YXRpdmUgPSBEZXJpdmF0aXZlO1xuZXhwb3J0cy5EZXJpdmF0aXZlVHlwZSA9IFwiRGVyaXZhdGl2ZVwiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkV4cG9uZW50ID0gdm9pZCAwO1xuY29uc3QgTWF0aE1MSGVscGVyc18xID0gcmVxdWlyZShcIi4uL3V0aWwvTWF0aE1MSGVscGVyc1wiKTtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuL0V4cHJlc3Npb25cIik7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi9JbnRlZ2VyXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4vUHJvZHVjdFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4vU3VtXCIpO1xuY2xhc3MgRXhwb25lbnQgZXh0ZW5kcyBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbiB7XG4gICAgc3RhdGljIG9mKGJhc2UsIHBvd2VyKSB7XG4gICAgICAgIGlmICghRXhwb25lbnQuaW5zdGFuY2VzLmhhcyhiYXNlKSkge1xuICAgICAgICAgICAgRXhwb25lbnQuaW5zdGFuY2VzLnNldChiYXNlLCBuZXcgTWFwKCkpO1xuICAgICAgICAgICAgaWYgKCFFeHBvbmVudC5pbnN0YW5jZXMuZ2V0KGJhc2UpLmhhcyhwb3dlcikpIHtcbiAgICAgICAgICAgICAgICBFeHBvbmVudC5pbnN0YW5jZXMuZ2V0KGJhc2UpLnNldChwb3dlciwgbmV3IEV4cG9uZW50KGJhc2UsIHBvd2VyKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEV4cG9uZW50Lmluc3RhbmNlcy5nZXQoYmFzZSkuZ2V0KHBvd2VyKTtcbiAgICB9XG4gICAgc3RhdGljIGluc3RhbmNlcyA9IG5ldyBNYXAoKTtcbiAgICBjbGFzcyA9IFwiRXhwb25lbnRcIjtcbiAgICB0b01hdGhYTUwoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHdyYXBJZk5lZWRlZChleHApIHtcbiAgICAgICAgICAgIGlmIChleHAuY2xhc3MgPT0gU3VtXzEuU3VtVHlwZSB8fCBleHAuY2xhc3MgPT0gUHJvZHVjdF8xLlByb2R1Y3RUeXBlKVxuICAgICAgICAgICAgICAgIHJldHVybiAoMCwgTWF0aE1MSGVscGVyc18xLmluUm93KSgoMCwgTWF0aE1MSGVscGVyc18xLmluUGFyZW4pKGV4cC50b01hdGhYTUwoKSkpO1xuICAgICAgICAgICAgcmV0dXJuIGV4cC50b01hdGhYTUwoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCI8bXN1cD5cIiArIHdyYXBJZk5lZWRlZCh0aGlzLmJhc2UpICsgdGhpcy5wb3dlci50b01hdGhYTUwoKSArIFwiPC9tc3VwPlwiO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwiKFwiICsgdGhpcy5iYXNlICsgXCIpXihcIiArIHRoaXMucG93ZXIgKyBcIilcIjtcbiAgICB9XG4gICAgZ2V0IGhhc2goKSB7XG4gICAgICAgIHJldHVybiBcIkV4cG9uZW50XCIgKyB0aGlzLmJhc2UuaGFzaCArIHRoaXMucG93ZXIuaGFzaDtcbiAgICB9XG4gICAgY29uc3RydWN0b3IoYmFzZSwgcG93ZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5iYXNlID0gYmFzZTtcbiAgICAgICAgdGhpcy5wb3dlciA9IHBvd2VyO1xuICAgICAgICAvLyBUaGUgaW50ZWdlcnMgYXJlIGNsb3NlZCBvdmVyIGV4cG9uZW50aWF0aW9uXG4gICAgICAgIHRoaXMuaXNSZWR1Y2libGUgPSAoYmFzZS5pc1JlZHVjaWJsZSB8fCBiYXNlLmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZSkgJiYgKHBvd2VyLmlzUmVkdWNpYmxlIHx8IHBvd2VyLmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZSkgJiYgTWF0aC5wb3coYmFzZS5yZWR1Y2VkLnZhbHVlLCBwb3dlci5yZWR1Y2VkLnZhbHVlKSAlIDEgPT0gMDtcbiAgICAgICAgdGhpcy5pc0hlYWx0aHkgPSAhdGhpcy5pc1JlZHVjaWJsZTtcbiAgICAgICAgdGhpcy5pc0NvbnN0YW50ID0gYmFzZS5pc0NvbnN0YW50ICYmIHBvd2VyLmlzQ29uc3RhbnQ7XG4gICAgfVxuICAgIGJhc2U7XG4gICAgcG93ZXI7XG4gICAgaXNSZWR1Y2libGU7XG4gICAgaXNIZWFsdGh5O1xuICAgIGdldCByZWR1Y2VkKCkge1xuICAgICAgICByZXR1cm4gSW50ZWdlcl8xLkludGVnZXIub2YoTWF0aC5wb3codGhpcy5iYXNlLnJlZHVjZWQudmFsdWUsIHRoaXMucG93ZXIucmVkdWNlZC52YWx1ZSkpO1xuICAgIH1cbiAgICBpc0NvbnN0YW50O1xufVxuZXhwb3J0cy5FeHBvbmVudCA9IEV4cG9uZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkV4cHJlc3Npb24gPSB2b2lkIDA7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi9JbnRlZ2VyXCIpO1xuY29uc3QgTWF0aEVsZW1lbnRfMSA9IHJlcXVpcmUoXCIuL01hdGhFbGVtZW50XCIpO1xuLyoqXG4gKiBCYXNlIG9mIGFsbCBtYXRoZW1hdGljYWwgZXhwcmVzc2lvbnMuXG4gKiBBbGwgY2hpbGRyZW4gc2hvdWxkIGltcGxlbWVudCBmbHktd2hlZWwgcGF0dGVybi5cbiAqL1xuY2xhc3MgRXhwcmVzc2lvbiBleHRlbmRzIE1hdGhFbGVtZW50XzEuTWF0aEVsZW1lbnQge1xuICAgIGdldCByZWR1Y2libGVPckludCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNSZWR1Y2libGUgfHwgdGhpcy5jbGFzcyA9PSBJbnRlZ2VyXzEuSW50ZWdlclR5cGU7XG4gICAgfVxufVxuZXhwb3J0cy5FeHByZXNzaW9uID0gRXhwcmVzc2lvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5GcmFjdGlvblR5cGUgPSBleHBvcnRzLkZyYWN0aW9uID0gdm9pZCAwO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvblwiKTtcbmNsYXNzIEZyYWN0aW9uIGV4dGVuZHMgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24ge1xuICAgIHN0YXRpYyBvZihudW1lcmF0b3IsIGRlbm9taW5hdG9yKSB7XG4gICAgICAgIGNvbnN0IGhhc2ggPSBudW1lcmF0b3IuaGFzaCArIGRlbm9taW5hdG9yLmhhc2g7XG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZS5oYXMoaGFzaCkpXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNldChoYXNoLCBuZXcgRnJhY3Rpb24obnVtZXJhdG9yLCBkZW5vbWluYXRvcikpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5nZXQoaGFzaCk7XG4gICAgfVxuICAgIHN0YXRpYyBpbnN0YW5jZSA9IG5ldyBNYXAoKTtcbiAgICBjb25zdHJ1Y3RvcihudW0sIGRlbm9tKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubnVtZXJhdG9yID0gbnVtO1xuICAgICAgICB0aGlzLmRlbm9taW5hdG9yID0gZGVub207XG4gICAgICAgIC8qXG4gICAgICAgIEEgZnJhY3Rpb24gaXMgcmVkdWNpYmxlIGlmIHRoZSBkZW5vbSB8IG51bS5cbiAgICAgICAgICAgIDw9PiBudW0gPSBrICogZGVub20gd2hlcmUgayBpcyBhbiBpbnRlZ2VyLlxuXG4gICAgICAgIFRoaXMgbWFrZXMgcHJvdmluZyByZWR1Y2liaWxpdHkgaGFyZC5cbiAgICAgICAgVE9ETzogRGVjaWRlIGlmIGl0J3Mgd29ydGggaW1wbGVtZW50aW5nIHJlZHVjaWJpbGl0eSBmb3IgRnJhY3Rpb25zXG4gICAgICAgICovXG4gICAgICAgIHRoaXMuaXNSZWR1Y2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0hlYWx0aHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzQ29uc3RhbnQgPSBudW0uaXNDb25zdGFudCAmJiBkZW5vbS5pc0NvbnN0YW50O1xuICAgIH1cbiAgICBudW1lcmF0b3I7XG4gICAgZGVub21pbmF0b3I7XG4gICAgZ2V0IHJlZHVjZWQoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBpc1JlZHVjaWJsZTtcbiAgICBjbGFzcyA9IGV4cG9ydHMuRnJhY3Rpb25UeXBlO1xuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5udW1lcmF0b3IudG9TdHJpbmcoKSArIFwiIC8gXCIgKyB0aGlzLmRlbm9taW5hdG9yLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGdldCBoYXNoKCkge1xuICAgICAgICByZXR1cm4gZXhwb3J0cy5GcmFjdGlvblR5cGUgKyB0aGlzLm51bWVyYXRvci5oYXNoICsgdGhpcy5kZW5vbWluYXRvci5oYXNoO1xuICAgIH1cbiAgICBpc0hlYWx0aHk7XG4gICAgaXNDb25zdGFudDtcbiAgICB0b01hdGhYTUwoKSB7XG4gICAgICAgIHJldHVybiBcIjxtZnJhYz48bXJvdz5cIiArIHRoaXMubnVtZXJhdG9yLnRvTWF0aFhNTCgpICsgXCI8L21yb3c+PG1yb3c+XCIgKyB0aGlzLmRlbm9taW5hdG9yLnRvTWF0aFhNTCgpICsgXCI8L21yb3c+PC9tZnJhYz5cIjtcbiAgICB9XG59XG5leHBvcnRzLkZyYWN0aW9uID0gRnJhY3Rpb247XG5leHBvcnRzLkZyYWN0aW9uVHlwZSA9IFwiRnJhY3Rpb25cIjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JbnRlZ2VyVHlwZSA9IGV4cG9ydHMuSW50ZWdlciA9IHZvaWQgMDtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4uL3V0aWwvYXNzZXJ0XCIpO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvblwiKTtcbi8qKlxuICogSW50ZWdlclxuICogUG9zaXRpdmUgb3IgbmVnYXRpdmVcbiAqL1xuY2xhc3MgSW50ZWdlciBleHRlbmRzIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uIHtcbiAgICBzdGF0aWMgb2YodmFsdWUpIHtcbiAgICAgICAgaWYgKCFJbnRlZ2VyLmluc3RhbmNlcy5oYXModmFsdWUpKSB7XG4gICAgICAgICAgICBJbnRlZ2VyLmluc3RhbmNlcy5zZXQodmFsdWUsIG5ldyBJbnRlZ2VyKHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEludGVnZXIuaW5zdGFuY2VzLmdldCh2YWx1ZSk7XG4gICAgfVxuICAgIHN0YXRpYyBpbnN0YW5jZXMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLnZhbHVlICUgMSA9PSAwLCBcIkNyZWF0aW5nIG5vbi1pbnRlZ2VyIGludGVnZXIgXCIgKyB0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMgQSBwb3NpdGl2ZSB2ZXJzaW9uIG9mIHRoaXMgaW50ZWdlci5cbiAgICAgKi9cbiAgICBidXRQb3NpdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIEludGVnZXIub2YoTWF0aC5hYnModGhpcy52YWx1ZSkpO1xuICAgIH1cbiAgICBjbGFzcyA9IGV4cG9ydHMuSW50ZWdlclR5cGU7XG4gICAgdG9NYXRoWE1MKCkge1xuICAgICAgICByZXR1cm4gXCI8bW4+XCIgKyB0aGlzLnZhbHVlICsgXCI8L21uPlwiO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIgKyB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICBnZXQgaGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIFwiTnVtYmVyRXhwXCIgKyB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICB2YWx1ZTtcbiAgICBpc1JlZHVjaWJsZSA9IGZhbHNlO1xuICAgIGdldCByZWR1Y2VkKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnRlZ2VycyBhcmVuJ3QgcmVkdWNpYmxlLlwiKTtcbiAgICB9XG4gICAgaXNIZWFsdGh5ID0gdHJ1ZTtcbiAgICBpc0NvbnN0YW50ID0gdHJ1ZTtcbn1cbmV4cG9ydHMuSW50ZWdlciA9IEludGVnZXI7XG5leHBvcnRzLkludGVnZXJUeXBlID0gXCJJbnRlZ2VyXCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSW50ZWdyYWxUeXBlID0gZXhwb3J0cy5JbnRlZ3JhbCA9IHZvaWQgMDtcbmNvbnN0IE1hdGhNTEhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuLi91dGlsL01hdGhNTEhlbHBlcnNcIik7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4vUHJvZHVjdFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4vU3VtXCIpO1xuLyoqXG4gKiBBbiBpbmRlZmluYXRlIGludGVncmFsIChmb3Igbm93KS5cbiAqIFRPRE86IFNob3VsZCB3ZSBzZXBhcmF0ZSBkZWZpbmF0ZS9pbmRlZmluYXRlIGludGVncmFscz9cbiAqL1xuY2xhc3MgSW50ZWdyYWwgZXh0ZW5kcyBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbiB7XG4gICAgc3RhdGljIG9mKGludGVncmFuZCwgcmVsYXRpdmVUbykge1xuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2VzLmhhcyhpbnRlZ3JhbmQuaGFzaCArIHJlbGF0aXZlVG8uaGFzaCkpXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlcy5zZXQoaW50ZWdyYW5kLmhhc2ggKyByZWxhdGl2ZVRvLmhhc2gsIG5ldyBJbnRlZ3JhbChpbnRlZ3JhbmQsIHJlbGF0aXZlVG8pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzLmdldChpbnRlZ3JhbmQuaGFzaCArIHJlbGF0aXZlVG8uaGFzaCk7XG4gICAgfVxuICAgIHN0YXRpYyBpbnN0YW5jZXMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3RydWN0b3IoaW50ZWdyYW5kLCByZWxhdGl2ZVRvKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaW50ZWdyYW5kID0gaW50ZWdyYW5kO1xuICAgICAgICB0aGlzLnJlbGF0aXZlVG8gPSByZWxhdGl2ZVRvO1xuICAgICAgICB0aGlzLmlzUmVkdWNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNIZWFsdGh5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0NvbnN0YW50ID0gZmFsc2U7XG4gICAgfVxuICAgIGludGVncmFuZDtcbiAgICByZWxhdGl2ZVRvO1xuICAgIGdldCByZWR1Y2VkKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLiBOb3Qgc3VyZSBob3cgdGhpcyB3b3JrcyB3aXRoIEludGVncmFscy5cIik7XG4gICAgfVxuICAgIGlzUmVkdWNpYmxlO1xuICAgIGNsYXNzID0gZXhwb3J0cy5JbnRlZ3JhbFR5cGU7XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBcIuKIq1wiICsgdGhpcy5pbnRlZ3JhbmQudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgZ2V0IGhhc2goKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBpc0hlYWx0aHk7XG4gICAgaXNDb25zdGFudDtcbiAgICB0b01hdGhYTUwoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHdyYXBJZk5lZWRlZChleHApIHtcbiAgICAgICAgICAgIGlmIChleHAuY2xhc3MgPT0gU3VtXzEuU3VtVHlwZSB8fCBleHAuY2xhc3MgPT0gUHJvZHVjdF8xLlByb2R1Y3RUeXBlKVxuICAgICAgICAgICAgICAgIHJldHVybiAoMCwgTWF0aE1MSGVscGVyc18xLmluUGFyZW4pKGV4cC50b01hdGhYTUwoKSk7XG4gICAgICAgICAgICByZXR1cm4gZXhwLnRvTWF0aFhNTCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIjxtcm93Pjxtbz7iiKs8L21vPlwiICsgd3JhcElmTmVlZGVkKHRoaXMuaW50ZWdyYW5kKSArIFwiPG1uPmQ8L21uPlwiICsgd3JhcElmTmVlZGVkKHRoaXMucmVsYXRpdmVUbykgKyBcIjwvbXJvdz5cIjtcbiAgICB9XG59XG5leHBvcnRzLkludGVncmFsID0gSW50ZWdyYWw7XG5leHBvcnRzLkludGVncmFsVHlwZSA9IFwiSW50ZWdyYWxcIjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NYXRoRWxlbWVudCA9IHZvaWQgMDtcbi8qKlxuICogQ2FuIGJlIGV4cHJlc3NlZCB3aXRoIE1hdGhNTFxuICovXG5jbGFzcyBNYXRoRWxlbWVudCB7XG59XG5leHBvcnRzLk1hdGhFbGVtZW50ID0gTWF0aEVsZW1lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUHJvZHVjdFR5cGUgPSBleHBvcnRzLlByb2R1Y3QgPSB2b2lkIDA7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2Fzc2VydFwiKTtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuL0V4cHJlc3Npb25cIik7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi9JbnRlZ2VyXCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi9TdW1cIik7XG4vKipcbiAqIEEgbWF0aGVtYXRpY2FsIHByb2R1Y3Qgd2l0aCAyIG9yIG1vcmUgZmFjdG9ycy5cbiAqL1xuY2xhc3MgUHJvZHVjdCBleHRlbmRzIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uIHtcbiAgICAvKipcbiAgICAgKiBGb3IgZWZmaWNpZW5jeSwgcHJvZHVjdHMgYXJlIGNvbXBhcmVkIGJ5IHJlZmVyZW5jZS5cbiAgICAgKiBIZXJlIHdlIGVuc3VyZSA9PT0gPD0+ID09XG4gICAgICogQHBhcmFtIGZhY3RvcnNcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHN0YXRpYyBvZihmYWN0b3JzKSB7XG4gICAgICAgIGNvbnN0IGhhc2ggPSBmYWN0b3JzLm1hcChlID0+IGUuaGFzaCkuam9pbihcIlwiKTtcbiAgICAgICAgaWYgKCFQcm9kdWN0Lmluc3RhbmNlcy5oYXMoaGFzaCkpXG4gICAgICAgICAgICBQcm9kdWN0Lmluc3RhbmNlcy5zZXQoaGFzaCwgbmV3IFByb2R1Y3QoZmFjdG9ycykpO1xuICAgICAgICByZXR1cm4gUHJvZHVjdC5pbnN0YW5jZXMuZ2V0KGhhc2gpO1xuICAgIH1cbiAgICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0cnVjdG9yKGZhY3RvcnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkoZmFjdG9ycy5sZW5ndGggPj0gMiwgXCJDcmVhdGluZyBwcm9kdWN0IHdpdGggbGVzcyB0aGFuIDIgZmFjdG9ycy5cIik7XG4gICAgICAgIHRoaXMuZmFjdG9ycyA9IGZhY3RvcnM7XG4gICAgICAgIGxldCByZWR1Y2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmZhY3RvcnMuZm9yRWFjaChmID0+IHtcbiAgICAgICAgICAgIHJlZHVjaWJsZSAmJj0gZi5pc1JlZHVjaWJsZSB8fCBmLmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoZSBpbnRlZ2VycyBhcmUgY2xvc2VkIG92ZXIgbXVsdGlwbGljYXRpb25cbiAgICAgICAgdGhpcy5pc1JlZHVjaWJsZSA9IHJlZHVjaWJsZTtcbiAgICAgICAgbGV0IGhlYWx0aHkgPSB0cnVlO1xuICAgICAgICBoZWFsdGh5ICYmPSB0aGlzLm51bU5lZ2F0aXZlcygpID4gMTtcbiAgICAgICAgdGhpcy5pc0hlYWx0aHkgPSBoZWFsdGh5O1xuICAgICAgICBsZXQgaXNOZWdhdGlvbiA9IGZhY3RvcnMubGVuZ3RoID09IDI7XG4gICAgICAgIGlzTmVnYXRpb24gJiY9IGZhY3RvcnMuZmlsdGVyKGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlciAmJiBlLnZhbHVlID09IC0xO1xuICAgICAgICB9KS5sZW5ndGggPT0gMTtcbiAgICAgICAgdGhpcy5pc05lZ2F0aW9uID0gaXNOZWdhdGlvbjtcbiAgICAgICAgdGhpcy5pc0NvbnN0YW50ID0gdGhpcy5mYWN0b3JzLm1hcChmID0+IGYuaXNDb25zdGFudCkucmVkdWNlKChhLCBiKSA9PiBhICYmIGIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoaXMgcHJvZHVjdCBpcyBqdXN0XG4gICAgICogLTEgKiBhbm90aGVyIGV4cHJlc3Npb24uXG4gICAgICovXG4gICAgaXNOZWdhdGlvbjtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHZhbHVlIHRoYXQgdGhpcyBwcm9kdWN0IGlzIG5lZ2F0aW5nXG4gICAgICogLTEgKiBleHAgcmV0dXJucyBleHAuXG4gICAgICogQHRocm93cyBpZiBwcm9kdWN0IGlzbid0IGEgbmVnYXRpb24uXG4gICAgICovXG4gICAgZ2V0IG5lZ2F0aW9uKCkge1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLmlzTmVnYXRpb24sIFwiVHJ5aW5nIHRvIGdldCBuZWdhdGlvbiBmcm9tIG5vbi1uZWdhdGluZyBzdW1cIik7XG4gICAgICAgIGlmICh0aGlzLmZhY3RvcnNbMF0uY2xhc3MgPT0gSW50ZWdlcl8xLkludGVnZXJUeXBlICYmIHRoaXMuZmFjdG9yc1swXS52YWx1ZSA9PSAtMSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZhY3RvcnNbMV07XG4gICAgICAgIHJldHVybiB0aGlzLmZhY3RvcnNbMF07XG4gICAgfVxuICAgIHRvTWF0aFhNTCgpIHtcbiAgICAgICAgbGV0IG91dCA9IFwiXCI7XG4gICAgICAgIGZ1bmN0aW9uIHdyYXBJZk5lZWRlZChleHApIHtcbiAgICAgICAgICAgIGlmIChleHAuY2xhc3MgPT0gZXhwb3J0cy5Qcm9kdWN0VHlwZSB8fCBleHAuY2xhc3MgPT0gU3VtXzEuU3VtVHlwZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8bW8+KDwvbW8+XCIgKyBleHAudG9NYXRoWE1MKCkgKyBcIjxtbz4pPC9tbz5cIjtcbiAgICAgICAgICAgIHJldHVybiBleHAudG9NYXRoWE1MKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRWl0aGVyIHRoaXMgaXMgYSBuZWdhdGlvbiwgb3IgYSBsaXN0IG9mIHByb2R1Y3RzXG4gICAgICAgIC8vIEZpcnN0IHRoZSBuZWdhdGlvbiBjYXNlLi4uXG4gICAgICAgIGlmICh0aGlzLmlzTmVnYXRpb24pIHtcbiAgICAgICAgICAgIG91dCArPSBcIjxtbz4tPC9tbz5cIjtcbiAgICAgICAgICAgIG91dCArPSB3cmFwSWZOZWVkZWQodGhpcy5uZWdhdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGl0J3MgYSBsaXN0IG9mIHByb2R1Y3RzLi4uXG4gICAgICAgIGNvbnN0IGZpcnN0RmFjdG9yID0gdGhpcy5mYWN0b3JzWzBdO1xuICAgICAgICBvdXQgKz0gd3JhcElmTmVlZGVkKGZpcnN0RmFjdG9yKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmZhY3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBmYWN0b3IgPSB0aGlzLmZhY3RvcnNbaV07XG4gICAgICAgICAgICBsZXQgbmVlZHNEb3QgPSAoZmFjdG9yLmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZSAmJiB0aGlzLmZhY3RvcnNbaSAtIDFdLmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZSlcbiAgICAgICAgICAgICAgICB8fCAoZmFjdG9yIGluc3RhbmNlb2YgUHJvZHVjdCAmJiBmYWN0b3IuaXNOZWdhdGlvbikgLy8gSWYgdGhlcmUncyBhIG5lZ2F0aXZlIHNpZ24sIGdldCBhIGRvdFxuICAgICAgICAgICAgICAgIHx8IChmYWN0b3IgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlciAmJiBmYWN0b3IudmFsdWUgPCAxKTtcbiAgICAgICAgICAgIGlmIChuZWVkc0RvdClcbiAgICAgICAgICAgICAgICBvdXQgKz0gXCI8bW8+wrc8L21vPlwiO1xuICAgICAgICAgICAgb3V0ICs9IHdyYXBJZk5lZWRlZChmYWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIE51bWJlciBvZiBuZWdhdGl2ZSBpbnRlZ2VyIHByb2R1Y3RzLlxuICAgICAqL1xuICAgIG51bU5lZ2F0aXZlcygpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5mYWN0b3JzLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgICBpZiAoZiBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKVxuICAgICAgICAgICAgICAgIGlmIChmLnZhbHVlIDwgMClcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGxldCBvdXQgPSBcIlwiO1xuICAgICAgICBmb3IgKGNvbnN0IGV4cCBvZiB0aGlzLmZhY3RvcnMpIHtcbiAgICAgICAgICAgIGlmIChleHAgaW5zdGFuY2VvZiBQcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IFwiKFwiICsgZXhwLnRvU3RyaW5nKCkgKyBcIilcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dCArPSBleHAudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91dCArPSBcIsK3XCI7XG4gICAgICAgIH1cbiAgICAgICAgb3V0ID0gb3V0LnN1YnN0cmluZygwLCBvdXQubGVuZ3RoIC0gMSk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIGdldCBoYXNoKCkge1xuICAgICAgICByZXR1cm4gXCJQcm9kdWN0XCIgKyB0aGlzLmZhY3RvcnMubWFwKGUgPT4gZS5oYXNoKS5qb2luKCk7XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IDIgZWxlbWVudHMsIG9yZGVyIG1hdHRlcnNcbiAgICBmYWN0b3JzO1xuICAgIGNsYXNzID0gZXhwb3J0cy5Qcm9kdWN0VHlwZTtcbiAgICBpc1JlZHVjaWJsZTtcbiAgICBnZXQgcmVkdWNlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFjdG9ycy5tYXAoZSA9PiBlLnJlZHVjZWQpLnJlZHVjZSgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIEludGVnZXJfMS5JbnRlZ2VyLm9mKGEucmVkdWNlZC52YWx1ZSAqIGIucmVkdWNlZC52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPbmx5IDEgbmVnYXRpdmUgaW50ZWdlclxuICAgICAqIEludGVnZXIgZmFjdG9ycyBhcmUgZmlyc3RcbiAgICAgKiBObyBmYWN0b3IgZXF1YWxzIDFcbiAgICAgKi9cbiAgICBpc0hlYWx0aHk7XG4gICAgaXNDb25zdGFudDtcbn1cbmV4cG9ydHMuUHJvZHVjdCA9IFByb2R1Y3Q7XG5leHBvcnRzLlByb2R1Y3RUeXBlID0gXCJQcm9kdWN0XCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMub3JkZXJUZXJtcyA9IGV4cG9ydHMuU3VtVHlwZSA9IGV4cG9ydHMuU3VtID0gdm9pZCAwO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi4vdXRpbC9hc3NlcnRcIik7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uXCIpO1xuY29uc3QgSW50ZWdlcl8xID0gcmVxdWlyZShcIi4vSW50ZWdlclwiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuL1Byb2R1Y3RcIik7XG5jb25zdCBWYXJpYWJsZV8xID0gcmVxdWlyZShcIi4vVmFyaWFibGVcIik7XG4vKipcbiAqIEV4cHJlc3Npb24gcmVwcmVzZW50aW5nIHRoZSBzdW0gb2YgMiBvciBtb3JlIHRlcm1zLlxuICovXG5jbGFzcyBTdW0gZXh0ZW5kcyBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbiB7XG4gICAgLyoqXG4gICAgICogRmFjdG9yeSBtZXRob2QgY29uc250cnVjdG9yLlxuICAgICAqIEBwYXJhbSB0ZXJtcyBDb250YWlucyBhdCBsZWFzdCAyIGVsZW1lbnRzXG4gICAgICovXG4gICAgc3RhdGljIG9mKHRlcm1zKSB7XG4gICAgICAgIGNvbnN0IGhhc2ggPSB0ZXJtcy5tYXAodCA9PiB0Lmhhc2gpLmpvaW4oXCJcIik7XG4gICAgICAgIGlmICghU3VtLmluc3RhbmNlcy5oYXMoaGFzaCkpIHtcbiAgICAgICAgICAgIFN1bS5pbnN0YW5jZXMuc2V0KGhhc2gsIG5ldyBTdW0odGVybXMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU3VtLmluc3RhbmNlcy5nZXQoaGFzaCk7XG4gICAgfVxuICAgIHN0YXRpYyBpbnN0YW5jZXMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3RydWN0b3IodGVybXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGVybXMubGVuZ3RoID49IDIsIFwiQ3JlYXRpbmcgc3VtIHdpdGggbGVzcyB0aGFuIDIgdGVybXMuXCIpO1xuICAgICAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gICAgICAgIHRoaXMuaXNSZWR1Y2libGUgPSB0aGlzLnRlcm1zLm1hcCh0ID0+IHQuaXNSZWR1Y2libGUgfHwgdC5jbGFzcyA9PSBJbnRlZ2VyXzEuSW50ZWdlclR5cGUpLnJlZHVjZSgoYSwgYikgPT4gYSAmJiBiKTtcbiAgICAgICAgdGhpcy5pc0hlYWx0aHkgPSB0aGlzLmRldGVybWluZUhlYWx0aCgpO1xuICAgICAgICB0aGlzLmlzQ29uc3RhbnQgPSB0aGlzLnRlcm1zLm1hcCh0ID0+IHQuaXNDb25zdGFudCkucmVkdWNlKChhLCBiKSA9PiBhICYmIGIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbmV3IEV4cHJlc3Npb24gd2l0aG91dCB0aGUgZ2l2ZW4gdGVybS5cbiAgICAgKiBJZiB0aGUgc3VtIGNvbnRhaW5zIHRoZSB0ZXJtIG11bHRpcGxlIHRpbWVzLFxuICAgICAqIG9ubHkgcmVtb3ZlcyBvbmUuIElmIGl0IGRvZXNuJ3QgY29udGFpbiB0aGUgdGVybSxcbiAgICAgKiByZXR1cm5zIGl0c2VsZi5cbiAgICAgKiBAcGFyYW0gdGVybSBBIHRlcm0gaW4gdGhpcyBzdW0uXG4gICAgICovXG4gICAgd2l0aG91dCh0ZXJtKSB7XG4gICAgICAgIGNvbnN0IG5ld1Rlcm1zID0gWy4uLnRoaXMudGVybXNdO1xuICAgICAgICBjb25zdCBpbmRleCA9IG5ld1Rlcm1zLmZpbmRJbmRleCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gdGVybTtcbiAgICAgICAgfSk7XG4gICAgICAgIG5ld1Rlcm1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGlmIChuZXdUZXJtcy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ld1Rlcm1zWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdW0ub2YobmV3VGVybXMpO1xuICAgIH1cbiAgICB0b01hdGhYTUwoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHdyYXBJZk5lZWRlZChleHApIHtcbiAgICAgICAgICAgIGlmIChleHAuY2xhc3MgPT0gZXhwb3J0cy5TdW1UeXBlKVxuICAgICAgICAgICAgICAgIHJldHVybiBcIjxtbz4oPC9tbz5cIiArIGV4cC50b01hdGhYTUwoKSArIFwiPG1vPik8L21vPlwiO1xuICAgICAgICAgICAgcmV0dXJuIGV4cC50b01hdGhYTUwoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgb3V0ID0gd3JhcElmTmVlZGVkKHRoaXMudGVybXNbMF0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMudGVybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm1zW2ldO1xuICAgICAgICAgICAgLy8gU3VidHJhY3QgbmVnYXRpdmUgdGVybXMgaW5zdGVhZCBvZiBhZGRpbmcgbmVnYXRpdmVzXG4gICAgICAgICAgICBpZiAodGVybSBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0ICYmIHRlcm0uaXNOZWdhdGlvbikge1xuICAgICAgICAgICAgICAgIG91dCArPSBcIjxtbz4tPC9tbz5cIiArIHdyYXBJZk5lZWRlZCh0ZXJtLm5lZ2F0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRlcm0gaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlciAmJiB0ZXJtLnZhbHVlIDwgMCkge1xuICAgICAgICAgICAgICAgIG91dCArPSBcIjxtbz4tPC9tbz5cIiArIHdyYXBJZk5lZWRlZCh0ZXJtLmJ1dFBvc2l0aXZlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IFwiPG1vPis8L21vPlwiICsgd3JhcElmTmVlZGVkKHRoaXMudGVybXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBsZXQgb3V0ID0gXCJcIjtcbiAgICAgICAgZm9yIChjb25zdCBleHAgb2YgdGhpcy50ZXJtcykge1xuICAgICAgICAgICAgb3V0ICs9IGV4cC50b1N0cmluZygpICsgXCIrXCI7XG4gICAgICAgIH1cbiAgICAgICAgb3V0ID0gb3V0LnN1YnN0cmluZygwLCBvdXQubGVuZ3RoIC0gMSk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIGdldCBoYXNoKCkge1xuICAgICAgICByZXR1cm4gXCJTdW1cIiArIHRoaXMudGVybXMubWFwKGUgPT4gZS5oYXNoKS5qb2luKCk7XG4gICAgfVxuICAgIGNsYXNzID0gZXhwb3J0cy5TdW1UeXBlO1xuICAgIC8qKlxuICAgICAqIE9yZGVyZWQsIGRvbid0IGNoYW5nZSBpdC5cbiAgICAgKi9cbiAgICB0ZXJtcztcbiAgICBpc1JlZHVjaWJsZTtcbiAgICBnZXQgcmVkdWNlZCgpIHtcbiAgICAgICAgcmV0dXJuIEludGVnZXJfMS5JbnRlZ2VyLm9mKHRoaXMudGVybXMubWFwKHQgPT4gdC5yZWR1Y2VkLnZhbHVlKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpZ3VyZSBvdXQgaWYgd2UncmUgaGVhbHRoeS5cbiAgICAgKi9cbiAgICBkZXRlcm1pbmVIZWFsdGgoKSB7XG4gICAgICAgIGlmICh0aGlzLnRlcm1zLmZpbHRlcih0ID0+IHQuaXNSZWR1Y2libGUgfHwgdCBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKS5sZW5ndGggPiAxKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0aGlzLnRlcm1zLmZvckVhY2godCA9PiB7XG4gICAgICAgICAgICBpZiAodCBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKVxuICAgICAgICAgICAgICAgIGlmICh0LnZhbHVlID09IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGVybXMuZm9yRWFjaCh0ZXJtID0+IHtcbiAgICAgICAgICAgIGlmICghdGVybS5pc0hlYWx0aHkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY29ycmVjdE9yZGVyaW5nID0gb3JkZXJUZXJtcyguLi50aGlzLnRlcm1zKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRlcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50ZXJtc1tpXSAhPT0gY29ycmVjdE9yZGVyaW5nW2ldKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvL1RPRE86IENoZWNrIGNvbmRpdGlvbiAzXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHN1bSBpcyBoZWFsdGh5IGlmZjpcbiAgICAgKlxuICAgICAqIDEuIENvbnRhaW5zIGEgbWF4IG9mIDEgcmVkdWNpYmxlIHRlcm0uXG4gICAgICogMi4gUHJvZHVjdHMgd2l0aCBpbnRlZ2VyIGNvZWZmaWNpZW50cyBhcmUgY29tYmluZWQuXG4gICAgICogIGEgKyAyYSA9IDNhLFxuICAgICAqICBhICsgLWEgPSAwXG4gICAgICogMy4gTm8gdGVybSBpcyAwXG4gICAgICogNC4gQWxsIHRlcm1zIGFyZSBoZWFsdGh5LlxuICAgICAqIDUuIFRlcm1zIGFyZSBvcmRlcmVkIGNvcnJlY3RseS5cbiAgICAgKi9cbiAgICBpc0hlYWx0aHk7XG4gICAgaXNDb25zdGFudDtcbn1cbmV4cG9ydHMuU3VtID0gU3VtO1xuZXhwb3J0cy5TdW1UeXBlID0gXCJTdW1cIjtcbi8qKlxuICogUmV0dXJucyB0aGUgZ2l2ZW4gdGVybXMgb3JkZXJlZCBjb3JyZWN0bHkgdG9cbiAqIGJlIHBsYWNlZCBpbiBhIFN1bS4gQWx0ZXJzIHRoZSBnaXZlbiBhcnJheS5cbiAqIEBwYXJhbSB0ZXJtc1xuICovXG5mdW5jdGlvbiBvcmRlclRlcm1zKC4uLnRlcm1zKSB7XG4gICAgLy8gQSBub3RlIGFib3V0IHRoZSBzb3J0IGZ1bmN0aW9uIGJjIHRoZSBkb2N1bWVudGF0aW9uIGlzIGNyeXB0aWNcbiAgICAvLyBJZiBhIHNob3VsZCBiZSBwdXQgYmVmb3JlIGIgaW4gdGhlIHN1bSwgcmV0dXJuIGEgbmVnYXRpdmUgdmFsdWVcbiAgICByZXR1cm4gdGVybXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAvLyBWYXJpYWJsZXMgYmVmb3JlIEludGVnZXJzXG4gICAgICAgIGlmIChhLmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZSAmJiAoYi5jbGFzcyA9PSBWYXJpYWJsZV8xLlZhcmlhYmxlVHlwZSB8fCAoYiBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0ICYmIGIuaXNOZWdhdGlvbiAmJiBiLm5lZ2F0aW9uLmNsYXNzID09IFZhcmlhYmxlXzEuVmFyaWFibGVUeXBlKSkpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoYS5jbGFzcyA9PSBWYXJpYWJsZV8xLlZhcmlhYmxlVHlwZSB8fCAoYSBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0ICYmIGEuaXNOZWdhdGlvbiAmJiBhLm5lZ2F0aW9uLmNsYXNzID09IFZhcmlhYmxlXzEuVmFyaWFibGVUeXBlKSkgJiYgYi5jbGFzcyA9PSBJbnRlZ2VyXzEuSW50ZWdlclR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9KTtcbn1cbmV4cG9ydHMub3JkZXJUZXJtcyA9IG9yZGVyVGVybXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVmFyaWFibGVUeXBlID0gZXhwb3J0cy5WYXJpYWJsZSA9IHZvaWQgMDtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuL0V4cHJlc3Npb25cIik7XG5jbGFzcyBWYXJpYWJsZSBleHRlbmRzIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uIHtcbiAgICBzdGF0aWMgb2Yoc3ltYm9sKSB7XG4gICAgICAgIGlmIChWYXJpYWJsZS5pbnN0YW5jZXMuZ2V0KHN5bWJvbCkgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBWYXJpYWJsZS5pbnN0YW5jZXMuc2V0KHN5bWJvbCwgbmV3IFZhcmlhYmxlKHN5bWJvbCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBWYXJpYWJsZS5pbnN0YW5jZXMuZ2V0KHN5bWJvbCk7XG4gICAgfVxuICAgIHN0YXRpYyBpbnN0YW5jZXMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3RydWN0b3Ioc3ltYm9sKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3ltYm9sID0gc3ltYm9sO1xuICAgIH1cbiAgICBjbGFzcyA9IGV4cG9ydHMuVmFyaWFibGVUeXBlO1xuICAgIHRvTWF0aFhNTCgpIHtcbiAgICAgICAgcmV0dXJuIFwiPG1pPlwiICsgdGhpcy5zeW1ib2wgKyBcIjwvbWk+XCI7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zeW1ib2w7XG4gICAgfVxuICAgIGdldCBoYXNoKCkge1xuICAgICAgICByZXR1cm4gXCJWYXJpYWJsZVwiICsgdGhpcy5zeW1ib2w7XG4gICAgfVxuICAgIHN5bWJvbDtcbiAgICBpc1JlZHVjaWJsZSA9IGZhbHNlO1xuICAgIGdldCByZWR1Y2VkKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJWYXJpYWJsZXMgY2FuJ3QgYmUgcmVkdWNlZCB0byBpbnRlZ2Vycy5cIik7XG4gICAgfVxuICAgIGlzSGVhbHRoeSA9IHRydWU7XG4gICAgaXNDb25zdGFudCA9IGZhbHNlO1xufVxuZXhwb3J0cy5WYXJpYWJsZSA9IFZhcmlhYmxlO1xuZXhwb3J0cy5WYXJpYWJsZVR5cGUgPSBcIlZhcmlhYmxlXCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQXJndW1lbnROb2RlVmlldyA9IHZvaWQgMDtcbmNvbnN0IEdyYXBoTm9kZVZpZXdfMSA9IHJlcXVpcmUoXCIuL0dyYXBoTm9kZVZpZXdcIik7XG4vKipcbiAqIFJlcHJlc2VudHMgYW4gYXJndW1lbnQgbm9kZS5cbiAqL1xuY2xhc3MgQXJndW1lbnROb2RlVmlldyBleHRlbmRzIEdyYXBoTm9kZVZpZXdfMS5HcmFwaE5vZGVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihhcmcpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hcmd1bWVudCA9IGFyZztcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSB0aGlzLmFyZ3VtZW50LmFyZ3VtZW50O1xuICAgIH1cbiAgICBhcmd1bWVudDtcbn1cbmV4cG9ydHMuQXJndW1lbnROb2RlVmlldyA9IEFyZ3VtZW50Tm9kZVZpZXc7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJhcmd1bWVudC1ub2Rldmlld1wiLCBBcmd1bWVudE5vZGVWaWV3LCB7IGV4dGVuZHM6IFwiZGl2XCIgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRWRnZVZpZXcgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uL0FyZ3VtZW50XCIpO1xuY29uc3QgSW5mZXJlbmNlXzEgPSByZXF1aXJlKFwiLi4vSW5mZXJlbmNlXCIpO1xuY29uc3QgVUlQcmVmZXJlbmNlc18xID0gcmVxdWlyZShcIi4vVUlQcmVmZXJlbmNlc1wiKTtcbi8qKlxuICogUmVwcmVzZW50cyBhbiBlZGdlIGluIGEgZ3JhcGguXG4gKi9cbmNsYXNzIEVkZ2VWaWV3IGV4dGVuZHMgSFRNTFBhcmFncmFwaEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVkZ2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lZGdlID0gZWRnZS5lO1xuICAgICAgICB0aGlzLmZpcnN0ID0gZWRnZS5uO1xuICAgICAgICB0aGlzLnNlY29uZCA9IGVkZ2UubjE7XG4gICAgICAgIHRoaXMuc3R5bGUud2lkdGggPSBcImZpdC1jb250ZW50XCI7XG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gXCJmaXQtY29udGVudFwiO1xuICAgICAgICB0aGlzLnN0eWxlLnBhZGRpbmcgPSBcIjBcIjtcbiAgICAgICAgdGhpcy5zdHlsZS56SW5kZXggPSBcIi0yXCI7XG4gICAgICAgIHRoaXMuc3R5bGUubWFyZ2luID0gXCIwXCI7XG4gICAgICAgIHRoaXMuc3R5bGUud2hpdGVTcGFjZSA9IFwibm93cmFwXCI7XG4gICAgICAgIHRoaXMuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBVSVByZWZlcmVuY2VzXzEudWlQcmVmZXJlbmNlcy5lZGdlRXF1YWxzQmFja2dyb3VuZENvbG9yO1xuICAgICAgICBVSVByZWZlcmVuY2VzXzEudWlQcmVmZXJlbmNlcy5vblVwZGF0ZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFVJUHJlZmVyZW5jZXNfMS51aVByZWZlcmVuY2VzLmVkZ2VFcXVhbHNCYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBldmVudCA9PiB7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHJvdGF0aW9uIGFuZ2xlIG9mIHZpZXcgd2hpbGUgYWxzb1xuICAgICAqIGxldHRpbmcgaXQga25vdyB0aGUgYW5nbGUgaGFzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHJhZFxuICAgICAqL1xuICAgIHNldEFuZ2xlKHJhZCkge1xuICAgICAgICB0aGlzLnN0eWxlLnJvdGF0ZSA9IFwiXCIgKyByYWQgKyBcInJhZFwiO1xuICAgICAgICAvL3RoaXMudGV4dENvbnRlbnQgPSBcIlwiICsgKHJhZCAqIDIgKiBNYXRoLlBJIC8gMzYwKS50b0ZpeGVkKDIpICsgXCJkZWdcIlxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGVsZW1lbnQgc2NyZWVuIHdpZHRoIGFuZCBlbnN1cmVzIHRleHQgZml0c1xuICAgICAqIGluc2lkZSB0aGUgZWRnZS5cbiAgICAgKi9cbiAgICBzZXQgd2lkdGgodmFsKSB7XG4gICAgICAgIHN1cGVyLnN0eWxlLndpZHRoID0gdmFsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBlbGVtZW50IGlzIGNvbm5jdGVkIHRvIHRoZSBET00uXG4gICAgICovXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmVkZ2UgaW5zdGFuY2VvZiBJbmZlcmVuY2VfMS5JbmZlcmVuY2UpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBcIlwiICsgdGhpcy5lZGdlLnJlbGF0aW9uc2hpcDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmVkZ2UgaW5zdGFuY2VvZiBBcmd1bWVudF8xLkFyZ3VtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gXCJcIiArIHRoaXMuZWRnZS5jbGFpbS5yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9IFwiJ1wiICsgdGhpcy5maXJzdC50b1N0cmluZygpICsgXCInIC0+ICdcIiArIHRoaXMuc2Vjb25kLnRvU3RyaW5nKCkgKyBcIidcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlZGdlO1xuICAgIGZpcnN0O1xuICAgIHNlY29uZDtcbn1cbmV4cG9ydHMuRWRnZVZpZXcgPSBFZGdlVmlldztcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImVkZ2Utdmlld1wiLCBFZGdlVmlldywgeyBleHRlbmRzOiBcInBcIiB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FZGl0YWJsZU1hdGhWaWV3ID0gdm9pZCAwO1xuLyoqXG4gKiBEaXNwbGF5cyBtYXRoIGFuZCBpcyBlZGl0YWJsZS5cbiAqL1xuY2xhc3MgRWRpdGFibGVNYXRoVmlldyBleHRlbmRzIEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgfVxuICAgIHNldCB2YWx1ZShlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gZTtcbiAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBcIjxtYXRoIGRpc3BsYXk9J2Jsb2NrJz5cIiArIChlPy50b01hdGhYTUwoKSA/PyBcIlwiKSArIFwiPC9tYXRoPlwiO1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGwgPT4gbCh0aGlzLl92YWx1ZSkpO1xuICAgICAgICBNYXRoSmF4LnR5cGVzZXQoW3RoaXNdKTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExpc3RlbmVyIHdpbGwgYmUgY2FsbGVkIHdoZW5ldmVyIHRoZSBtYXRoXG4gICAgICogaW4gdGhlIHZpZXcgaXMgZWRpdGVkLlxuICAgICAqIEBwYXJhbSBsXG4gICAgICovXG4gICAgYWRkRWRpdExpc3RlbmVyKGwpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsKTtcbiAgICB9XG4gICAgbGlzdGVuZXJzID0gW107XG4gICAgX3ZhbHVlID0gbnVsbDtcbn1cbmV4cG9ydHMuRWRpdGFibGVNYXRoVmlldyA9IEVkaXRhYmxlTWF0aFZpZXc7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJlZGl0YWJsZS1tYXRodmlld1wiLCBFZGl0YWJsZU1hdGhWaWV3LCB7IGV4dGVuZHM6IFwiZGl2XCIgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXhwcmVzc2lvbk5vZGVWaWV3ID0gdm9pZCAwO1xuY29uc3QgRWRpdGFibGVNYXRoVmlld18xID0gcmVxdWlyZShcIi4vRWRpdGFibGVNYXRoVmlld1wiKTtcbmNvbnN0IEdyYXBoTm9kZVZpZXdfMSA9IHJlcXVpcmUoXCIuL0dyYXBoTm9kZVZpZXdcIik7XG4vKipcbiAqIEEgZ3JhcGggbm9kZSB2aWV3IGZvciBleHByZXNzaW9uIG5vZGVzLlxuICovXG5jbGFzcyBFeHByZXNzaW9uTm9kZVZpZXcgZXh0ZW5kcyBHcmFwaE5vZGVWaWV3XzEuR3JhcGhOb2RlVmlldyB7XG4gICAgY29uc3RydWN0b3Iobm9kZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgICAgICB0aGlzLmVkaXRhYmxlTWF0aFZpZXcgPSBuZXcgRWRpdGFibGVNYXRoVmlld18xLkVkaXRhYmxlTWF0aFZpZXcoKTtcbiAgICAgICAgdGhpcy5lZGl0YWJsZU1hdGhWaWV3LnZhbHVlID0gdGhpcy5ub2RlO1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuZWRpdGFibGVNYXRoVmlldyk7XG4gICAgICAgIGlmICghbm9kZS5pc0hlYWx0aHkpXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB9XG4gICAgbm9kZTtcbiAgICBlZGl0YWJsZU1hdGhWaWV3O1xufVxuZXhwb3J0cy5FeHByZXNzaW9uTm9kZVZpZXcgPSBFeHByZXNzaW9uTm9kZVZpZXc7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJleHByZXNzaW9uLW5vZGV2aWV3XCIsIEV4cHJlc3Npb25Ob2RlVmlldywgeyBleHRlbmRzOiBcImRpdlwiIH0pO1xuY29uc3QgY29sb3JVbmhlYWx0aHlOb2RlcyA9IHRydWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR3JhcGhOb2RlVmlldyA9IHZvaWQgMDtcbi8qKlxuICogQW4gaHRtbCBlbGVtZW50IHRoYXQgcmVwcmVzZW50cyBhIG1hdGggZ3JhcGggbm9kZS5cbiAqL1xuY2xhc3MgR3JhcGhOb2RlVmlldyBleHRlbmRzIEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgLy90aGlzLnN0eWxlLmJvcmRlciA9IFwiYmx1ZSBkb3R0ZWQgMC4yY2hcIlxuICAgICAgICB0aGlzLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMWNoXCI7XG4gICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJsaWdodGJsdWVcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5wYWRkaW5nID0gXCIxY2hcIjtcbiAgICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IFwiZml0LWNvbnRlbnRcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBcImZpdC1jb250ZW50XCI7XG4gICAgICAgIHRoaXMuc3R5bGUud2hpdGVTcGFjZSA9IFwibm93cmFwXCI7XG4gICAgfVxufVxuZXhwb3J0cy5HcmFwaE5vZGVWaWV3ID0gR3JhcGhOb2RlVmlldztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51aVByZWZlcmVuY2VzID0gdm9pZCAwO1xuY2xhc3MgVUlQcmVmZXJlbmNlcyB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIEZ1bmN0aW9uIGNhbGxlZCB3aGVuZXZlciBhIHVpIHByZWZlcmVuY2VcbiAgICAgKiBpcyBjaGFuZ2VkLlxuICAgICAqL1xuICAgIG9uVXBkYXRlKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgIH1cbiAgICAvLyBHZXR0ZXJzIGFuZCBTZXR0ZXJzXG4gICAgLyoqXG4gICAgICogQmFja2dyb3VuZCBjb2xvciBvZiBhIGdyYXBoIGVkZ2UgZGVub3RpbmdcbiAgICAgKiBlcXVhbGl0eSBiZXR3ZWVuIHR3byBleHByZXNzaW9ucy5cbiAgICAgKiBDc3MgdmFsdWUuXG4gICAgICovXG4gICAgZ2V0IGVkZ2VFcXVhbHNCYWNrZ3JvdW5kQ29sb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lZGdlRXF1YWxzQmFja2dyb3VuZENvbG9yO1xuICAgIH1cbiAgICBzZXQgZWRnZUVxdWFsc0JhY2tncm91bmRDb2xvcih2YWwpIHtcbiAgICAgICAgdGhpcy5fZWRnZUVxdWFsc0JhY2tncm91bmRDb2xvciA9IHZhbDtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MuZm9yRWFjaChjID0+IGMoKSk7XG4gICAgfVxuICAgIC8vIFByZWZlcmVuY2UgVmFsdWVzXG4gICAgX2VkZ2VFcXVhbHNCYWNrZ3JvdW5kQ29sb3IgPSBcIm5vbmVcIjtcbiAgICBjYWxsYmFja3MgPSBbXTtcbn1cbmV4cG9ydHMudWlQcmVmZXJlbmNlcyA9IG5ldyBVSVByZWZlcmVuY2VzKCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuV2ViR3JhcGhWaWV3ID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi9Bcmd1bWVudFwiKTtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuLi9leHByZXNzaW9ucy9FeHByZXNzaW9uXCIpO1xuY29uc3QgR3JhcGhNaW5pcHVsYXRvcl8xID0gcmVxdWlyZShcIi4uL0dyYXBoTWluaXB1bGF0b3JcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2Fzc2VydFwiKTtcbmNvbnN0IFRvdWNoR2VzdHVyZVJlY29nbml6ZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9Ub3VjaEdlc3R1cmVSZWNvZ25pemVyXCIpO1xuY29uc3QgRWRnZVZpZXdfMSA9IHJlcXVpcmUoXCIuL0VkZ2VWaWV3XCIpO1xuY29uc3QgRXhwcmVzc2lvbk5vZGVWaWV3XzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uTm9kZVZpZXdcIik7XG5jb25zdCBBcmd1bWVudE5vZGVWaWV3XzEgPSByZXF1aXJlKFwiLi9Bcmd1bWVudE5vZGVWaWV3XCIpO1xuLyoqXG4gKiBBIHVpIGVsZW1lbnQgdGhhdCB3aWxsIGRpc3BsYXkgYSBtYXRoIGdyYXBoIGluIGEgd2ViLlxuICovXG5jbGFzcyBXZWJHcmFwaFZpZXcgZXh0ZW5kcyBIVE1MRGl2RWxlbWVudCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGdyYXBoIE11c3QgYmUgZnVsbHkgY29ubmVjdGVkLlxuICAgICAqIEBwYXJhbSByb290cyBOb24tZW1wdHkuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZ3JhcGgsIHJvb3RzLCBjb25maWcgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5ncmFwaCA9IGdyYXBoO1xuICAgICAgICB0aGlzLm5vZGVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLm9mZnNldFggPSAwO1xuICAgICAgICB0aGlzLm9mZnNldFkgPSAwO1xuICAgICAgICB0aGlzLm5vZGVQb3NpdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZWRnZVBvc2l0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5lZGdlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yb290Tm9kZXMgPSBuZXcgU2V0KHJvb3RzKTtcbiAgICAgICAgdGhpcy5yaW5nRWxlbWVudHMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMucmluZ1Bvc2l0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAgICAgaWYgKGNvbmZpZyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0FyZ3VtZW50cyA9IGNvbmZpZy5zaG93QXJndW1lbnRzO1xuICAgICAgICAgICAgdGhpcy5kcmF3RWRnZUxpbmVzID0gY29uZmlnLmRyYXdFZGdlTGluZXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHlsZS5jbGlwUGF0aCA9IFwicG9seWdvbigwJSAwJSwgMTAwJSAwJSwgMTAwJSAxMDAlLCAwJSAxMDAlKVwiO1xuICAgICAgICB0aGlzLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgICAgICB0aGlzLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudG91Y2hEb3duID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubW91c2VEb3duKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0WCArPSBldmVudC5tb3ZlbWVudFggLyB0aGlzLnNjYWxlO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXRZICs9IGV2ZW50Lm1vdmVtZW50WSAvIHRoaXMuc2NhbGU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9mZnNldCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlID0gTWF0aC5wb3coMC44LCBldmVudC5kZWx0YVkgLyAzNjApICogdGhpcy5zY2FsZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT2Zmc2V0KCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2VzdHVyZVJlY29nbml6ZXIgPSBuZXcgVG91Y2hHZXN0dXJlUmVjb2duaXplcl8xLlRvdWNoR2VzdHVyZVJlY29nbml6ZXIoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hkb3duXCIsIHRoaXMuZ2VzdHVyZVJlY29nbml6ZXIucHJvY2Vzc1RvdWNoRG93bik7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuZ2VzdHVyZVJlY29nbml6ZXIucHJvY2Vzc1RvdWNoRW5kKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgdGhpcy5nZXN0dXJlUmVjb2duaXplci5wcm9jZXNzVG91Y2hDYW5jZWwpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5nZXN0dXJlUmVjb2duaXplci5wcm9jZXNzVG91Y2hNb3ZlKTtcbiAgICAgICAgdGhpcy5nZXN0dXJlUmVjb2duaXplci5hZGRQaW5jaExpc3RlbmVyKChjZW50ZXIsIHNjYWxlRGVsdGEsIGZpbmdlcnMpID0+IHtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVwT2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBpZiB0aGUgdmlldyBzaG91bGQgc2hvdyBhcmd1bWVudCBub2RlcyBhcyBub2Rlcy5cbiAgICAgKiBGYWxzZSBieSBkZWZhdWx0LlxuICAgICAqIEBwYXJhbSB2YWxcbiAgICAgKi9cbiAgICBzZXRTaG93QXJndW1lbnRzKHZhbCkge1xuICAgICAgICB0aGlzLnNob3dBcmd1bWVudHMgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlYWRHcmFwaCgpO1xuICAgICAgICB0aGlzLmFycmFuZ2UoKTtcbiAgICAgICAgdGhpcy51cGRhdGVPZmZzZXQoKTtcbiAgICB9XG4gICAgZ2V0IGNlbnRlcigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHRoaXMub2Zmc2V0V2lkdGggLyAyLFxuICAgICAgICAgICAgeTogdGhpcy5vZmZzZXRIZWlnaHQgLyAyLFxuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGb2xsb3dzIHRoZSBzaG93QXJndW1lbnQgc2V0dGluZy5cbiAgICAgKiBQb3B1bGF0ZXMgdGhpcy5ub2RlcywgdGhpcy5lZGdlcyxcbiAgICAgKiBhZGRzIHRoZSBjcmVhdGVkIHZpZXdzIHRvIHRoZSBzaGFkb3cgZG9tXG4gICAgICogdG8gbWF0Y2ggdGhlIGdyYXBoLlxuICAgICAqIFJlbW92ZXMgYW55IHByZS1leGlzdGluZyBlbGVtZW50cyBmcm9tIHRoZSBzaGFkb3cgZG9tLlxuICAgICAqL1xuICAgIHJlYWRHcmFwaCgpIHtcbiAgICAgICAgLy8gQ2xlYXIgZXhpc3RpbmdcbiAgICAgICAgdGhpcy5ub2Rlcy5mb3JFYWNoKCh2aWV3LCBub2RlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHZpZXcpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ub2Rlcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmVkZ2VzLmZvckVhY2goKHZpZXcsIGVkZ2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodmlldyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVkZ2VzLmNsZWFyKCk7XG4gICAgICAgIC8vIEZldGNoIG5vZGVzXG4gICAgICAgIHRoaXMuZ3JhcGguZ2V0Tm9kZXMoKS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgRXhwcmVzc2lvbk5vZGVWaWV3XzEuRXhwcmVzc2lvbk5vZGVWaWV3KG5vZGUpO1xuICAgICAgICAgICAgICAgIHZpZXcuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rlcy5zZXQobm9kZSwgdmlldyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmQodmlldyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgQXJndW1lbnRfMS5Bcmd1bWVudCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zaG93QXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgY29uc3QgdmlldyA9IG5ldyBBcmd1bWVudE5vZGVWaWV3XzEuQXJndW1lbnROb2RlVmlldyhub2RlKTtcbiAgICAgICAgICAgICAgICB2aWV3LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZXMuc2V0KG5vZGUsIHZpZXcpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kKHZpZXcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdyYXBoIGNvbnRhaW5zIG5vZGUgV2ViR3JhcGhWaWV3IGNhbid0IHByb2Nlc3MuXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gRmV0Y2ggZWRnZXNcbiAgICAgICAgR3JhcGhNaW5pcHVsYXRvcl8xLkdyYXBoTWluaXB1bGF0b3IuZHJvcFN5bW1ldHJpYyh0aGlzLmdyYXBoLmdldEVkZ2VzKCkpLmZpbHRlcihlZGdlID0+IHtcbiAgICAgICAgICAgIC8vIE9ubHkgY29uc2lkZXIgZWRnZXMgZm9yIHdoaWNoIHdlIGhhdmUgYm90aCBlbmRwb2ludHMgb24gdGhlIHZpZXdcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVzLmhhcyhlZGdlLm4pICYmIHRoaXMubm9kZXMuaGFzKGVkZ2UubjEpO1xuICAgICAgICB9KS5mb3JFYWNoKGVkZ2UgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmlldyA9IG5ldyBFZGdlVmlld18xLkVkZ2VWaWV3KGVkZ2UpO1xuICAgICAgICAgICAgdmlldy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgIHRoaXMuZWRnZXMuc2V0KGVkZ2UsIHZpZXcpO1xuICAgICAgICAgICAgdGhpcy5hcHBlbmQodmlldyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlcE9rKCk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLnJlYWRHcmFwaCgpO1xuICAgICAgICB0aGlzLmFycmFuZ2UoKTtcbiAgICAgICAgdGhpcy51cGRhdGVPZmZzZXQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGljayBwbGFjZXMgZm9yIGFsbCB0aGUgbm9kZXMvZWRnZXMgb24gdGhlIHNjcmVlbi5cbiAgICAgKiBQb3B1bGF0ZXMgdGhlIHBvc2l0aW9uXyogcmVwIHZhcnMuXG4gICAgICovXG4gICAgYXJyYW5nZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlUG9zaXRpb25zLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuZWRnZVBvc2l0aW9ucy5jbGVhcigpO1xuICAgICAgICB0aGlzLnJpbmdQb3NpdGlvbnMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yaW5nRWxlbWVudHMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQoZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJpbmdFbGVtZW50cy5jbGVhcigpO1xuICAgICAgICAvLyBQbGFjZSBub2RlcyBvbiBhIHNlcmllcyBvZiByaW5ncyBmcm9tIHRoZSBjZW50ZXIgdXNpbmcgdGhlaXIgZGVwdGggaW4gdGhlIGdyYXBoXG4gICAgICAgIGNvbnN0IGxldmVscyA9IEdyYXBoTWluaXB1bGF0b3JfMS5HcmFwaE1pbmlwdWxhdG9yLmdldExldmVscyh0aGlzLmdyYXBoLCB0aGlzLnJvb3ROb2RlcywgKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgQXJndW1lbnRfMS5Bcmd1bWVudClcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93QXJndW1lbnRzO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5ldyB0eXBlIG9mIG5vZGVcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgbWF4RGVwdGggPSAwO1xuICAgICAgICBsZXZlbHMuZm9yRWFjaCgoXywgZGVwdGgpID0+IHtcbiAgICAgICAgICAgIG1heERlcHRoID0gTWF0aC5tYXgobWF4RGVwdGgsIGRlcHRoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHsgeDogKHRoaXMuY2xpZW50V2lkdGggLyAyKSwgeTogdGhpcy5jbGllbnRIZWlnaHQgLyAyIH07XG4gICAgICAgIGxldCBsYXN0UmFkaXVzID0gMDsgLy9weFxuICAgICAgICBmb3IgKGxldCBkZXB0aCA9IDA7IGRlcHRoIDwgbWF4RGVwdGggKyAxOyBkZXB0aCsrKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlcyA9IGxldmVscy5nZXQoZGVwdGgpO1xuICAgICAgICAgICAgLy8gT3JnYW5pemUgdGhlIHJvb3Qgbm9kZXMgb24gYSBjaXJjbGUgYXJvdW5kIHRoZSBjZW50ZXJcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBTaXplID0gKDIgKiBNYXRoLlBJKSAvIG5vZGVzLnNpemU7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGN1bGF0aW5nIHRoZSByYWRpdXMgb2YgdGhlIGNpcmNsZVxuICAgICAgICAgICAgICogU3VwcG9zZSBldmVyeSByb290IG5vZGUgb24gdGhlIHN0YXJ0aW5nIGNpcmNsZSByZXF1aXJlc1xuICAgICAgICAgICAgICogYSBjaXJjdWxhciBzcGFjZSB0byBiZSBkcmF3biB3aXRoIHJhZGl1cyBub2RlUmFkaXVzXG4gICAgICAgICAgICAgKiBBIHN0YXJ0aW5nIGNpcmNsZSB3aXRoIG4gb2YgdGhlc2Ugbm9kZXMgd291bGQgcmVxdWlyZSBhXG4gICAgICAgICAgICAgKiBjaXJjdW1mZXJlbmNlIG9mIG4gKiAybm9kZVJhZGl1cy5cbiAgICAgICAgICAgICAqIFRoZSBjaXJjdW1mZXJlbmNlIG9mIGEgY2lyY2xlIGNhbiBiZSBleHByZXNzZWRcbiAgICAgICAgICAgICAqIGFzIDIqcGkqclxuICAgICAgICAgICAgICogPT4gciA9IG4gKiAyICogc21hbGxSIC8gKDIgKiBwaSlcbiAgICAgICAgICAgICAqICAgICAgPSBuICogc21hbGxSIC8gcGlcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY29uc3Qgbm9kZVJhZGl1cyA9IDcwOyAvLyBwaXhlbHNcbiAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgubWF4KG5vZGVzLnNpemUgKiBub2RlUmFkaXVzIC8gTWF0aC5QSSwgbGFzdFJhZGl1cyArICgzICogbm9kZVJhZGl1cykpO1xuICAgICAgICAgICAgbGFzdFJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgICAgIGNvbnN0IG5zID0gWy4uLm5vZGVzXTsgLy8gVE9ETywgYXNzaWduIGEgbWVhbmluZ2Z1bCBvcmRlcmluZ1xuICAgICAgICAgICAgbnMuZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5ub2Rlcy5nZXQobm9kZSk7XG4gICAgICAgICAgICAgICAgLy92aWV3LnN0eWxlLndpZHRoID0gXCJcIiArIHNtYWxsUiArIFwicHhcIlxuICAgICAgICAgICAgICAgIC8vdmlldy5zdHlsZS5oZWlnaHQgPSBcIlwiICsgc21hbGxSICsgXCJweFwiXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjYXJ0ZXNpYW4gcG9pbnQgZnJvbSB0aGUgcmFkaXVzIGFuZCBhbmdsZVxuICAgICAgICAgICAgICAgIGNvbnN0IHggPSByYWRpdXMgKiBNYXRoLmNvcyhzdGVwU2l6ZSAqIGluZGV4KSArIGNlbnRlci54O1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSByYWRpdXMgKiBNYXRoLnNpbihzdGVwU2l6ZSAqIGluZGV4KSArIGNlbnRlci55O1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZVBvc2l0aW9ucy5zZXQodmlldywgUG9pbnQoeCwgeSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCByaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHJpbmcuc3R5bGUud2lkdGggPSBcIlwiICsgKDIgKiByYWRpdXMpICsgXCJweFwiO1xuICAgICAgICAgICAgcmluZy5zdHlsZS5oZWlnaHQgPSBcIlwiICsgKDIgKiByYWRpdXMpICsgXCJweFwiO1xuICAgICAgICAgICAgcmluZy5zdHlsZS5ib3JkZXIgPSBcImxpZ2h0Z3JheSBzb2xpZCAwLjNjaFwiO1xuICAgICAgICAgICAgcmluZy5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwMCVcIjtcbiAgICAgICAgICAgIHJpbmcuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICByaW5nLnN0eWxlLnpJbmRleCA9IFwiLTEwXCI7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHJpbmcpO1xuICAgICAgICAgICAgdGhpcy5yaW5nRWxlbWVudHMuYWRkKHJpbmcpO1xuICAgICAgICAgICAgdGhpcy5yaW5nUG9zaXRpb25zLnNldChyaW5nLCB7IHg6IGNlbnRlci54LCB5OiBjZW50ZXIueSB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBOb3cgYXJhbmdlIHRoZSBlZGdlc1xuICAgICAgICB0aGlzLmVkZ2VzLmZvckVhY2goKHZpZXcsIGVkZ2UpID0+IHtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIG1pZGRsZSBvZiB0aGUgdHdvIGVuZHB0c1xuICAgICAgICAgICAgY29uc3QgZmlyc3RYID0gdGhpcy5ub2RlUG9zaXRpb25zLmdldCh0aGlzLm5vZGVzLmdldChlZGdlLm4pKS54O1xuICAgICAgICAgICAgY29uc3QgZmlyc3RZID0gdGhpcy5ub2RlUG9zaXRpb25zLmdldCh0aGlzLm5vZGVzLmdldChlZGdlLm4pKS55O1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kWCA9IHRoaXMubm9kZVBvc2l0aW9ucy5nZXQodGhpcy5ub2Rlcy5nZXQoZWRnZS5uMSkpLng7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmRZID0gdGhpcy5ub2RlUG9zaXRpb25zLmdldCh0aGlzLm5vZGVzLmdldChlZGdlLm4xKSkueTtcbiAgICAgICAgICAgIGNvbnN0IHggPSAoZmlyc3RYICsgc2Vjb25kWCkgLyAyO1xuICAgICAgICAgICAgY29uc3QgeSA9IChmaXJzdFkgKyBzZWNvbmRZKSAvIDI7XG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoc2Vjb25kWSAtIGZpcnN0WSwgc2Vjb25kWCAtIGZpcnN0WCk7XG4gICAgICAgICAgICB0aGlzLmVkZ2VQb3NpdGlvbnMuc2V0KHZpZXcsIHsgeDogeCwgeTogeSwgYW5nbGU6IGFuZ2xlIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZXBPaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGRyYXcgcG9zaXRpb24gb2YgdGhlIG5vZGVzIG9uIHRoZSBzY3JlZW5cbiAgICAgKiB0byBtYXRjaCB0aGUgb2Zmc2V0IGluIHJlcC4gQXNzdW1lcyBhbGwgdmlld3MgaGF2ZSBhIHBvc2l0aW9uXG4gICAgICogc3RvcmVkIGluIHRoZSByZXAuIENhbGwgYXJyYW5nZSgpIGZpcnN0LlxuICAgICAqIEFsc28gYXBwbGllcyB0aGUgc2NhbGUgZmFjdG9yIHRvIHRoZSBmaW5hbCBkcmF3IHBvc2l0aW9ucyxcbiAgICAgKiBpbnZpc2libGUgdG8gZXZlcnlvbmUgZWxzZS5cbiAgICAgKi9cbiAgICB1cGRhdGVPZmZzZXQoKSB7XG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHRoaXMuY2VudGVyO1xuICAgICAgICBjb25zdCBzY2FsZSA9IHRoaXMuc2NhbGU7XG4gICAgICAgIGZ1bmN0aW9uIGFwcGx5U2NhbGUoaSkge1xuICAgICAgICAgICAgcmV0dXJuIFBvaW50KCgoaS54KSAtIGNlbnRlci54KSAqIHNjYWxlICsgY2VudGVyLngsICgoaS55KSAtIGNlbnRlci55KSAqIHNjYWxlICsgY2VudGVyLnkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZVBvc2l0aW9ucy5mb3JFYWNoKChwb3MsIHZpZXcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFkanVzdGVkID0gYXBwbHlTY2FsZSh7XG4gICAgICAgICAgICAgICAgeDogcG9zLnggKyB0aGlzLm9mZnNldFgsXG4gICAgICAgICAgICAgICAgeTogcG9zLnkgKyB0aGlzLm9mZnNldFksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUubGVmdCA9IFwiXCIgKyAoYWRqdXN0ZWQueCAtICgwLjUgKiB2aWV3Lm9mZnNldFdpZHRoKSkgKyBcInB4XCI7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLnRvcCA9IFwiXCIgKyAoYWRqdXN0ZWQueSAtICgwLjUgKiB2aWV3Lm9mZnNldEhlaWdodCkpICsgXCJweFwiO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lZGdlUG9zaXRpb25zLmZvckVhY2goKHBvcywgdmlldykgPT4ge1xuICAgICAgICAgICAgdmlldy5zZXRBbmdsZShwb3MuYW5nbGUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZHJhd0VkZ2VMaW5lcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0UG9zID0gdGhpcy5ub2RlUG9zaXRpb25zLmdldCh0aGlzLm5vZGVzLmdldCh2aWV3LmZpcnN0KSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kUG9zID0gdGhpcy5ub2RlUG9zaXRpb25zLmdldCh0aGlzLm5vZGVzLmdldCh2aWV3LnNlY29uZCkpO1xuICAgICAgICAgICAgICAgIHZpZXcud2lkdGggPSBcIlwiICsgKHNjYWxlICogTWF0aC5oeXBvdChzZWNvbmRQb3MueCAtIGZpcnN0UG9zLngsIHNlY29uZFBvcy55IC0gZmlyc3RQb3MueSkpICsgXCJweFwiO1xuICAgICAgICAgICAgICAgIHZpZXcuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJibGFjayAwLjFjaCBzb2xpZFwiO1xuICAgICAgICAgICAgICAgIHZpZXcuc3R5bGUuYm9yZGVyVG9wID0gXCJibGFjayAwLjFjaCBzb2xpZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlldy53aWR0aCA9IFwiZml0LWNvbnRlbnRcIjtcbiAgICAgICAgICAgICAgICB2aWV3LnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIHZpZXcuc3R5bGUuYm9yZGVyVG9wID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhZGp1c3RlZCA9IGFwcGx5U2NhbGUoe1xuICAgICAgICAgICAgICAgIHg6IHBvcy54ICsgdGhpcy5vZmZzZXRYLFxuICAgICAgICAgICAgICAgIHk6IHBvcy55ICsgdGhpcy5vZmZzZXRZLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLmxlZnQgPSBcIlwiICsgKGFkanVzdGVkLnggLSAoMC41ICogdmlldy5vZmZzZXRXaWR0aCkpICsgXCJweFwiO1xuICAgICAgICAgICAgdmlldy5zdHlsZS50b3AgPSBcIlwiICsgKGFkanVzdGVkLnkgLSAoMC41ICogdmlldy5vZmZzZXRIZWlnaHQpKSArIFwicHhcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIE92ZXJsYXkgZWxlbWVudHMgY2hhbmdlIHNpemUgd2l0aCBzY2FsZVxuICAgICAgICB0aGlzLnJpbmdQb3NpdGlvbnMuZm9yRWFjaCgocG9zLCB2aWV3KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhZGp1c3RlZFBvcyA9IGFwcGx5U2NhbGUoe1xuICAgICAgICAgICAgICAgIHg6IHBvcy54ICsgdGhpcy5vZmZzZXRYIC0gKDAuNSAqIHZpZXcub2Zmc2V0V2lkdGgpLFxuICAgICAgICAgICAgICAgIHk6IHBvcy55ICsgdGhpcy5vZmZzZXRZIC0gKDAuNSAqIHZpZXcub2Zmc2V0SGVpZ2h0KSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmlldy5zdHlsZS5sZWZ0ID0gXCJcIiArIGFkanVzdGVkUG9zLnggKyBcInB4XCI7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLnRvcCA9IFwiXCIgKyBhZGp1c3RlZFBvcy55ICsgXCJweFwiO1xuICAgICAgICAgICAgdmlldy5zdHlsZS5zY2FsZSA9IFwiXCIgKyB0aGlzLnNjYWxlO1xuICAgICAgICAgICAgdmlldy5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBcIjAgMFwiO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZXBPaygpO1xuICAgIH1cbiAgICByZXBPaygpIHtcbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5yb290Tm9kZXMuc2l6ZSA+IDApO1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KShHcmFwaE1pbmlwdWxhdG9yXzEuR3JhcGhNaW5pcHVsYXRvci5pc0Nvbm5lY3RlZCh0aGlzLmdyYXBoKSwgXCJHcmFwaCBub3QgY29ubmVjdGVkXCIpO1xuICAgIH1cbiAgICBncmFwaDtcbiAgICBub2RlcztcbiAgICAvLyBUaGUgUG9zaXRpb24gb2YgdGhlIGNlbnRlciBvZiB0aGUgbm9kZS5cbiAgICBub2RlUG9zaXRpb25zO1xuICAgIGVkZ2VzO1xuICAgIGVkZ2VQb3NpdGlvbnM7XG4gICAgLy8gQW10IHRvIGFkZCB0byBsZWZ0IGNvb3JkaW5hdGVcbiAgICBvZmZzZXRYO1xuICAgIC8vIEFkZGVkIHRvIHRvcCBjb29yZGluYXRlIG9mIG5vZGVzXG4gICAgb2Zmc2V0WTtcbiAgICAvLyBpZiB0aGUgbW91c2UgaXMgZG93blxuICAgIG1vdXNlRG93biA9IGZhbHNlO1xuICAgIHRvdWNoRG93biA9IGZhbHNlO1xuICAgIHNjYWxlID0gMTtcbiAgICByb290Tm9kZXM7XG4gICAgcmluZ0VsZW1lbnRzO1xuICAgIHJpbmdQb3NpdGlvbnM7XG4gICAgZ2VzdHVyZVJlY29nbml6ZXI7XG4gICAgLy8gSWYgdGhlIGdyYXBoIHNob3VsZCBkcmF3IGFyZ3VtZW50IG5vZGVzLlxuICAgIHNob3dBcmd1bWVudHMgPSBmYWxzZTtcbiAgICBkcmF3RWRnZUxpbmVzID0gZmFsc2U7XG59XG5leHBvcnRzLldlYkdyYXBoVmlldyA9IFdlYkdyYXBoVmlldztcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIndlYi1ncmFwaHZpZXdcIiwgV2ViR3JhcGhWaWV3LCB7IGV4dGVuZHM6IFwiZGl2XCIgfSk7XG5mdW5jdGlvbiBQb2ludCh4LCB5LCBhbmdsZSA9IHVuZGVmaW5lZCkge1xuICAgIGlmIChhbmdsZSA9PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogeSxcbiAgICAgICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiB4LFxuICAgICAgICB5OiB5LFxuICAgICAgICBhbmdsZTogYW5nbGUsXG4gICAgfTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXJzZSA9IHZvaWQgMDtcbi8qKlxuICogUGFyc2VzIGh1bWFuIHdyaXR0ZW4sIHV0Zi04IHR5cGUgbWF0aCBleHByZXNzaW9uc1xuICogaW50byBhY3R1YWwgbWF0aC5cbiAqIEBwYXJhbSBpbnB1dFxuICovXG5mdW5jdGlvbiBwYXJzZShpbnB1dCkge1xuICAgIGNvbnN0IG91dCA9IFtdO1xuICAgIGNvbnNvbGUubG9nKFwiSW5wdXQ6IFwiICsgaW5wdXQpO1xuICAgIGNvbnN0IGZpbmRFeHByZXNzaW9ucyA9IC9bMC05YS16QS1aXSsvO1xuICAgIGNvbnN0IGZpbmRPcGVyYXRvcnMgPSAvW1xcK1xcLVxcKlxcL1xcXl0vO1xuICAgIGNvbnNvbGUubG9nKGZpbmRFeHByZXNzaW9ucyk7XG4gICAgY29uc3Qgc3BsaXQgPSBpbnB1dC5zcGxpdChmaW5kRXhwcmVzc2lvbnMpO1xuICAgIGNvbnNvbGUubG9nKHNwbGl0KTtcbiAgICByZXR1cm4gb3V0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuZnVuY3Rpb24gcGFyc2VFeHByZXNzaW9uKGlucHV0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkXCIpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmluUm93ID0gZXhwb3J0cy5pblBhcmVuID0gdm9pZCAwO1xuLyoqXG4gKiBXcmFwcyB0aGUgZ2l2ZW4gbWF0aG1sIHN0cmluZyBpbiBtYXRobWwgcGFyZW50aGFzZXMuXG4gKiBAcGFyYW0gc3RyXG4gKi9cbmZ1bmN0aW9uIGluUGFyZW4oc3RyKSB7XG4gICAgcmV0dXJuIFwiPG1vPig8L21vPlwiICsgc3RyICsgXCI8bW8+KTwvbW8+XCI7XG59XG5leHBvcnRzLmluUGFyZW4gPSBpblBhcmVuO1xuLyoqXG4gKiBQdXRzIHRoZSBnaXZlbiBtYXRobWwgZXhwcmVzc2lvbiBpbiBhIHJvdyBzbyB0aGF0XG4gKiBpdCBkb2Vzbid0IGdldCBkaXZpZGVkIGJ5IG1hdGhqYXguXG4gKiBAcGFyYW0gc3RyXG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiBpblJvdyhzdHIpIHtcbiAgICByZXR1cm4gXCI8bXJvdz5cIiArIHN0ciArIFwiPC9tcm93PlwiO1xufVxuZXhwb3J0cy5pblJvdyA9IGluUm93O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFzc2VydCA9IHZvaWQgMDtcbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBleHByZXNzaW9uIGV2YWx1YXRlZCB0byB0cnVlLiBJZiBub3QsIHRocm93cyBlcnJvclxuICogd2l0aCB0aGUgbWVzc2FnZSBnaXZlbi5cbiAqIEBwYXJhbSBtc2cgRGlzcGxheWVkIGlmIHRoZSBleHByZXNzaW9uIGlzIGZhbHNlLiBEZWZhdWx0cyB0byBcIkZhaWxlZCBBc3NlcnRcIlxuICovXG5mdW5jdGlvbiBhc3NlcnQoZXhwLCBtc2cgPSBcIkZhaWxlZCBhc3NlcnRcIikge1xuICAgIGlmICghZXhwKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbn1cbmV4cG9ydHMuYXNzZXJ0ID0gYXNzZXJ0O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUHJpbWFyeVBhZ2VMb2FkZXJfMSA9IHJlcXVpcmUoXCIuL1ByaW1hcnlQYWdlTG9hZGVyXCIpO1xuY29uc3QgRXhwcmVzc2lvblRlc3RQYWdlTG9hZGVyXzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uVGVzdFBhZ2VMb2FkZXJcIik7XG4vKipcbiAqIFBvcHVsYXRlIGh0bWwgZWxlbWVudHMgYnkgdGhlaXIgY2xhc3MuXG4gKi9cbmNvbnN0IGNsYXNzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmNsYXNzTGlzdDtcbmlmIChjbGFzc2VzLmNvbnRhaW5zKCdleHByZXNzaW9uVGVzdFBhZ2UnKSkge1xuICAgICgwLCBFeHByZXNzaW9uVGVzdFBhZ2VMb2FkZXJfMS5sb2FkRXhwcmVzc2lvbnNUZXN0UGFnZSkoKTtcbn1cbmVsc2UgaWYgKGNsYXNzZXMuY29udGFpbnMoJ3ByaW1hcnlJbnRlZ3JhdG9yJykpIHtcbiAgICAoMCwgUHJpbWFyeVBhZ2VMb2FkZXJfMS5sb2FkUHJpbWFyeVBhZ2UpKCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=