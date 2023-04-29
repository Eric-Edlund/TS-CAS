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
const ConvenientExpressions_1 = __webpack_require__(/*! ./mathlib/ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const Parser_1 = __webpack_require__(/*! ./mathlib/userinput/Parser */ "./mathlib/userinput/Parser.ts");
const WebGraphView_1 = __webpack_require__(/*! ./mathlib/uielements/WebGraphView */ "./mathlib/uielements/WebGraphView.ts");
const Graph_1 = __webpack_require__(/*! ./mathlib/Graph */ "./mathlib/Graph.ts");
const Deriver_1 = __webpack_require__(/*! ./mathlib/derivations/Deriver */ "./mathlib/derivations/Deriver.ts");
const Expression_1 = __webpack_require__(/*! ./mathlib/expressions/Expression */ "./mathlib/expressions/Expression.ts");
const RelationalDerivationRule_1 = __webpack_require__(/*! ./mathlib/derivations/RelationalDerivationRule */ "./mathlib/derivations/RelationalDerivationRule.ts");
const SubtractFromBothSides_1 = __webpack_require__(/*! ./mathlib/derivations/algebra/SubtractFromBothSides */ "./mathlib/derivations/algebra/SubtractFromBothSides.ts");
const DivideOnBothSides_1 = __webpack_require__(/*! ./mathlib/derivations/algebra/DivideOnBothSides */ "./mathlib/derivations/algebra/DivideOnBothSides.ts");
const Variable_1 = __webpack_require__(/*! ./mathlib/expressions/Variable */ "./mathlib/expressions/Variable.ts");
const Exponent_1 = __webpack_require__(/*! ./mathlib/expressions/Exponent */ "./mathlib/expressions/Exponent.ts");
const Fraction_1 = __webpack_require__(/*! ./mathlib/expressions/Fraction */ "./mathlib/expressions/Fraction.ts");
const Derivative_1 = __webpack_require__(/*! ./mathlib/expressions/Derivative */ "./mathlib/expressions/Derivative.ts");
RelationalDerivationRule_1.RelationalDerivationRule.rules.add(new SubtractFromBothSides_1.SubtractFromBothSides());
RelationalDerivationRule_1.RelationalDerivationRule.rules.add(new DivideOnBothSides_1.DivideOnBothSides());
/**
 * Called after DOM is loaded.
 * Substitutes the body element in the document
 * with the primary integrator view.
 * @returns
 */
function loadPrimaryPage() {
    //const root = Derivative.of(sum(a, a, product(num(2), b)), a)
    //const root = Derivative.of(product(num(3), Exponent.of(x, num(2)), Exponent.of(x, num(3))), x)
    //const root = product(Exponent.of(x, num(3)), Exponent.of(x, num(4)), x, x)
    const root = Derivative_1.Derivative.of(Fraction_1.Fraction.of(Exponent_1.Exponent.of(ConvenientExpressions_1.x, (0, ConvenientExpressions_1.num)(2)), ConvenientExpressions_1.x), ConvenientExpressions_1.x);
    //const root = Fraction.of(product(num(2), x, Exponent.of(x, a), a), product(num(2), a, a, x))
    const graph = new Graph_1.Graph().addNode(root);
    const deriver = new Deriver_1.Deriver(graph);
    deriver.expand();
    //console.log("Result: " + graph)
    const input = document.getElementById("input");
    input.addEventListener("keyup", () => {
        (0, Parser_1.parse)(input.value);
    });
    const out = document.getElementById("outputbox");
    const config = {
        showArguments: false,
        drawEdgeLines: true,
        debugCornerEnabled: true,
    };
    const graphView = new WebGraphView_1.WebGraphView(graph, new Set([root]), config);
    graphView.setNodeColoringScheme(n => {
        if (n instanceof Expression_1.Expression) {
            if (!deriver.isSimplified(n))
                return "lightgray";
            else if (!n.isHealthy)
                return "lightred";
            else if (n instanceof Variable_1.Variable)
                return "orange";
            else
                return "lightblue";
        }
        return "black";
    });
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
 * Connects one or more nodes (grounds) to one or more nodes (claims).
 * Contains an explanation/argument for the connection.
 */
class Argument {
    constructor(grounds, claim, argument) {
        this.grounds = grounds;
        Object.freeze(this.grounds);
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
     * Two out math graph nodes that are related by this Arugment.
     */
    claim;
    /**
     * The explanation that connects the argument's grounds to
     * it's claimed relationship between the two out nodes.
     *
     */
    argument;
    /**
     * Nodes that have an edge pointing to this argument.
     */
    grounds;
    repOk() {
        (0, assert_1.assert)(this.grounds != null);
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
exports.y = exports.x = exports.f = exports.e = exports.d = exports.c = exports.b = exports.a = exports.productAndNotTimesOne = exports.productOrNot = exports.equivalenceArgument = exports.int = exports.v = exports.num = exports.negative = exports.product = exports.removeNew = exports.remove = exports.orderedProduct = exports.sumOrNot = exports.sumIntuitive = exports.sumEvalIntegerTerms = exports.orderedSum = exports.sum = exports.fraction = void 0;
const Integer_1 = __webpack_require__(/*! ./expressions/Integer */ "./mathlib/expressions/Integer.ts");
const Fraction_1 = __webpack_require__(/*! ./expressions/Fraction */ "./mathlib/expressions/Fraction.ts");
const Integral_1 = __webpack_require__(/*! ./expressions/Integral */ "./mathlib/expressions/Integral.ts");
const Product_1 = __webpack_require__(/*! ./expressions/Product */ "./mathlib/expressions/Product.ts");
const Sum_1 = __webpack_require__(/*! ./expressions/Sum */ "./mathlib/expressions/Sum.ts");
const Variable_1 = __webpack_require__(/*! ./expressions/Variable */ "./mathlib/expressions/Variable.ts");
const Argument_1 = __webpack_require__(/*! ./Argument */ "./mathlib/Argument.ts");
const Relationship_1 = __webpack_require__(/*! ./Relationship */ "./mathlib/Relationship.ts");
const assert_1 = __webpack_require__(/*! ./util/assert */ "./mathlib/util/assert.ts");
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
    terms = [...intEval.terms];
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
                if (other.isNegation && other.negation === t) {
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
 * Finds the sum of the given terms or if only 1
 * is given returns that term.
 * @param terms
 * @returns
 */
function sumOrNot(...terms) {
    if (terms.length == 1)
        return terms[0];
    else
        return sum(...terms);
}
exports.sumOrNot = sumOrNot;
/**
 * Produces a product from the given factors
 * where the factors are ordered according to convention.
 * @param factors At least 2
 */
function orderedProduct(...factors) {
    factors.sort(Product_1.factorOrder);
    return product(...factors);
}
exports.orderedProduct = orderedProduct;
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
exports.remove = remove;
/**
 * Gets a new array without the first instance of the given
 * element. Really should be
 * part of the std library. Identifies object
 * with referencial equality.
 * @param array
 * @param element
 */
function removeNew(array, element) {
    const input = [...array];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === element) {
            input.splice(i, 1);
            return input;
        }
    }
    throw new Error("Given array doesn't contain element " + element);
}
exports.removeNew = removeNew;
function product(...factors) {
    factors.forEach(f => (0, assert_1.assert)(f != null && f != undefined, "Making product with null or undefined factor"));
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
function equivalenceArgument(first, second, explanation) {
    return new Argument_1.Argument(setOf(first), {
        n: first,
        r: Relationship_1.Relationship.Equal,
        n1: second,
    }, explanation);
}
exports.equivalenceArgument = equivalenceArgument;
/**
 *
 * @returns The product of the given factors, or the only factor given
 * if only one given. Throws if no expressions are given.
 */
function productOrNot(...expressions) {
    (0, assert_1.assert)(expressions.length > 0);
    if (expressions.length == 1)
        return expressions[0];
    return product(...expressions);
}
exports.productOrNot = productOrNot;
/**
 * @returns The product of the given terms exlcuding the first if
 *          it's one. If the resulting terms list is only one term,
 *          returns the only term.
 */
function productAndNotTimesOne(...expressions) {
    if (expressions[0] instanceof Integer_1.Integer && expressions[0].value == 1) {
        expressions.shift();
        return productOrNot(...expressions);
    }
    return productOrNot(...expressions);
}
exports.productAndNotTimesOne = productAndNotTimesOne;
function setOf(...expressions) {
    const out = new Set();
    expressions.forEach(e => out.add(e));
    return out;
}
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
exports.GivenEdge = exports.ArgumentEdge = exports.Graph = void 0;
const Argument_1 = __webpack_require__(/*! ./Argument */ "./mathlib/Argument.ts");
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
     * @returns the same graph for chaining.
     */
    addNode(node) {
        this.nodes.add(node);
        if (node instanceof Argument_1.Argument) {
            this.addArgument(node);
        }
        this.repOk();
        return this;
    }
    /**
     * Add a relationship between two elements given by the user to the graph.
     * Should not be called to add derived truths bc this won't store an explanation.
     * Adds given nodes if they aren't already on the graph.
     * @param n
     * @param n1
     * @param r
     * @returns self for chaining
     */
    addRelationship(n, n1, r) {
        this.addNode(n);
        this.addNode(n1);
        // Defined both ways because the user is giving it
        this.addEdge(n, n1, new GivenEdge(r));
        this.addEdge(n1, n, new GivenEdge(r));
        this.addConnection(n, n1);
        this.addConnection(n1, n);
        return this;
    }
    /**
     * Adds a node representing an acumulation of facts
     * that leads to a conclusion.
     * @param a
     * @returns the same graph for chaining.
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
        return this;
    }
    /**
     * @returns the same graph for chaining.
     */
    addArguments(...a) {
        a.forEach(arg => this.addArgument(arg));
        return this;
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
     * @returns A new set containing all the nodes in the graph
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
     * @returns the same graph for chaining.
     */
    addGraph(graph) {
        graph.nodes.forEach(node => {
            this.nodes.add(node);
        });
        graph.edges.forEach((map, node1) => {
            map.forEach((edge, node2) => {
                if (edge instanceof Argument_1.Argument)
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
        return this;
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
/**
 * Communicates a relationhip given by the user.
 */
class GivenEdge {
    constructor(r) {
        this.r = r;
    }
    r;
}
exports.GivenEdge = GivenEdge;


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
        const includedNodes = new Set();
        const components = new Set();
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

/***/ "./mathlib/derivations/Deriver.ts":
/*!****************************************!*\
  !*** ./mathlib/derivations/Deriver.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Deriver = void 0;
const Argument_1 = __webpack_require__(/*! ../Argument */ "./mathlib/Argument.ts");
const Expression_1 = __webpack_require__(/*! ../expressions/Expression */ "./mathlib/expressions/Expression.ts");
const Graph_1 = __webpack_require__(/*! ../Graph */ "./mathlib/Graph.ts");
const GraphMinipulator_1 = __webpack_require__(/*! ../GraphMinipulator */ "./mathlib/GraphMinipulator.ts");
const Relationship_1 = __webpack_require__(/*! ../Relationship */ "./mathlib/Relationship.ts");
const ThingsThatShouldBeInTheStdLib_1 = __webpack_require__(/*! ../util/ThingsThatShouldBeInTheStdLib */ "./mathlib/util/ThingsThatShouldBeInTheStdLib.ts");
const recursion_1 = __webpack_require__(/*! ./recursion */ "./mathlib/derivations/recursion.ts");
const RelationalDerivationRule_1 = __webpack_require__(/*! ./RelationalDerivationRule */ "./mathlib/derivations/RelationalDerivationRule.ts");
const AdditiveIdentity_1 = __webpack_require__(/*! ./simplifications/AdditiveIdentity */ "./mathlib/derivations/simplifications/AdditiveIdentity.ts");
const AssociativePropertyOfProductsAndSums_1 = __webpack_require__(/*! ./simplifications/AssociativePropertyOfProductsAndSums */ "./mathlib/derivations/simplifications/AssociativePropertyOfProductsAndSums.ts");
const CancelNegatives_1 = __webpack_require__(/*! ./simplifications/CancelNegatives */ "./mathlib/derivations/simplifications/CancelNegatives.ts");
const CombineCommonFactorsMultiplication_1 = __webpack_require__(/*! ./simplifications/CombineCommonFactorsMultiplication */ "./mathlib/derivations/simplifications/CombineCommonFactorsMultiplication.ts");
const CombineCommonTermsAddition_1 = __webpack_require__(/*! ./simplifications/CombineCommonTermsAddition */ "./mathlib/derivations/simplifications/CombineCommonTermsAddition.ts");
const CombineIntegerFactors_1 = __webpack_require__(/*! ./simplifications/CombineIntegerFactors */ "./mathlib/derivations/simplifications/CombineIntegerFactors.ts");
const DivideFractions_1 = __webpack_require__(/*! ./simplifications/DivideFractions */ "./mathlib/derivations/simplifications/DivideFractions.ts");
const DivisionIdentity_1 = __webpack_require__(/*! ./simplifications/DivisionIdentity */ "./mathlib/derivations/simplifications/DivisionIdentity.ts");
const EvaluateSums_1 = __webpack_require__(/*! ./simplifications/EvaluateSums */ "./mathlib/derivations/simplifications/EvaluateSums.ts");
const ExponentialIdentity_1 = __webpack_require__(/*! ./simplifications/ExponentialIdentity */ "./mathlib/derivations/simplifications/ExponentialIdentity.ts");
const ExponentToZero_1 = __webpack_require__(/*! ./simplifications/ExponentToZero */ "./mathlib/derivations/simplifications/ExponentToZero.ts");
const MultiplicativeIdentity_1 = __webpack_require__(/*! ./simplifications/MultiplicativeIdentity */ "./mathlib/derivations/simplifications/MultiplicativeIdentity.ts");
const MultiplyExponentPowers_1 = __webpack_require__(/*! ./simplifications/MultiplyExponentPowers */ "./mathlib/derivations/simplifications/MultiplyExponentPowers.ts");
const OrderSums_1 = __webpack_require__(/*! ./simplifications/OrderSums */ "./mathlib/derivations/simplifications/OrderSums.ts");
const PowerRule_1 = __webpack_require__(/*! ./simplifications/PowerRule */ "./mathlib/derivations/simplifications/PowerRule.ts");
const ProductRule_1 = __webpack_require__(/*! ./simplifications/ProductRule */ "./mathlib/derivations/simplifications/ProductRule.ts");
const PullConstantsFromDerivatives_1 = __webpack_require__(/*! ./simplifications/PullConstantsFromDerivatives */ "./mathlib/derivations/simplifications/PullConstantsFromDerivatives.ts");
const QuotientRule_1 = __webpack_require__(/*! ./simplifications/QuotientRule */ "./mathlib/derivations/simplifications/QuotientRule.ts");
const SumCoefficientsOfAddedTerms_1 = __webpack_require__(/*! ./simplifications/SumCoefficientsOfAddedTerms */ "./mathlib/derivations/simplifications/SumCoefficientsOfAddedTerms.ts");
const USubstitution_1 = __webpack_require__(/*! ./simplifications/USubstitution */ "./mathlib/derivations/simplifications/USubstitution.ts");
/**
 * Holds a single graph and expands it using rules.
 */
class Deriver {
    /**
     * Give it the graph you're going to expand.
     * @param graph
     */
    constructor(graph) {
        this.graph = graph;
        this.simplifiedInIsolation = new Set();
        this.notSimplifiable = new Set();
    }
    /**
     * Expands the graph arbitrarily.
     * This function is still poorly defined,
     * very experemental.
     */
    expand() {
        // Simplify all the expressions using the contextless simplifying rules
        // Do this until there's nothing more to simplify
        this.simplifyNoContext();
        this.simplifyNoContext();
        this.simplifyNoContext();
        this.simplifyNoContext();
        this.simplifyNoContext();
        this.simplifyNoContext();
        this.simplifyNoContext();
        this.simplifyNoContext();
        this.simplifyNoContext();
        this.simplifyNoContext();
        this.simplifyNoContext();
        this.simplifyNoContext();
        //this.algebraicExpansion()
        //this.algebraicExpansion()
        //this.simplifyNoContext()
    }
    /**
     * Recursively makes sure that every node in the graph
     * is either simplified (meaning there is no contextless
     * rule that can simplify it further) or is marked down
     * as unsimplifiable.
     */
    simplifyNoContext() {
        const unsimplified = [...this.graph.getNodes()].filter(n => n instanceof Expression_1.Expression)
            .map(n => n)
            .filter(e => !this.simplifiedInIsolation.has(e));
        unsimplified.forEach(e => {
            this.simplifiedInIsolation.add(e);
            // Try to find equivalents using every set of rules.
            // If a set finds equivalents, move on to the next
            // expression instead of trying later rules to save
            // time.
            for (const rules of simplificationOrder) {
                const derivedSimplifications = (0, recursion_1.equiv)(e, equivalentsFnUsing(rules));
                if (derivedSimplifications.length > 0) {
                    derivedSimplifications.forEach(a => {
                        this.graph.addArgument(a);
                    });
                    return; // To next expression
                }
            }
            // If none of the rules we have worked, the expression isn't simplifiable.
            this.notSimplifiable.add(e);
        });
        //if (unsimplified.length > 0) this.simplifyNoContext()
    }
    /**
     * Expands the graph using algebra rules.
     * Only simplified rules are used.
     */
    algebraicExpansion() {
        const rules = [...RelationalDerivationRule_1.RelationalDerivationRule.rules];
        const components = [...GraphMinipulator_1.GraphMinipulator.getComponentNodes(this.graph, edge => {
                return (edge instanceof Argument_1.Argument && edge.relationship == Relationship_1.Relationship.Equal)
                    || (edge instanceof Graph_1.GivenEdge && edge.r == Relationship_1.Relationship.Equal);
            })];
        components.forEach(component => {
            const equation = [];
            for (const node of component) {
                if (node instanceof Expression_1.Expression && this.notSimplifiable.has(node))
                    equation.push(node);
            }
            rules.forEach(r => {
                r.apply((0, ThingsThatShouldBeInTheStdLib_1.setOf)(...equation)).forEach(a => {
                    this.graph.addArgument(a);
                });
            });
        });
    }
    graph;
    /**
     *
     * @returns true if the given expression is in the graph
     * and has already had the contextless simplification operations
     * done to it and cannot be further simplified.
     */
    isSimplified(exp) {
        return this.notSimplifiable.has(exp);
    }
    // A set of nodes in the graph which have had all simplification 
    // operations done to them.
    simplifiedInIsolation;
    // The set of nodes in the graph that have had contextless
    // simplification operations run on them and aren't further
    // simplifiable
    notSimplifiable;
}
exports.Deriver = Deriver;
/**
 * Function that makes a function that gets the equivalent
 * expressions for a given one.
 * @param rules What rules the resulting function should use to
 *      find equivalents.
 * @returns A function which will use the given rules to
 *      find direct equivalents.
 */
function equivalentsFnUsing(rules) {
    return function (exp) {
        const out = new Set();
        rules.filter(r => r.applies(exp)).forEach(rule => {
            rule.apply(exp).forEach(i => {
                out.add(i);
            });
        });
        return out;
    };
}
/**
 * 1 input, 1 output
 */
const identityRules = [
    new MultiplicativeIdentity_1.MultiplicativeIdentity(),
    new ExponentialIdentity_1.ExponentialIdentity(),
    new DivisionIdentity_1.DivisionIdentity(),
    new AdditiveIdentity_1.AdditiveIdentity(),
    new ExponentToZero_1.ExponentToZero(),
];
/**
 * 1 input, 1 output
 */
const beautifyingRules = [
    new OrderSums_1.OrderSums(),
];
/**
 * 1 input, 1 output
 */
const evaluativeRules = [
    new EvaluateSums_1.EvaluateSums(),
    new CancelNegatives_1.CancelNegatives(),
    new CombineIntegerFactors_1.CombineIntegerFactors(),
];
const combinatoricRules = [
    new SumCoefficientsOfAddedTerms_1.SumCoefficientsOfAddedTerms(),
    new CombineCommonTermsAddition_1.CombineCommonTermsAddition(),
    new CombineCommonFactorsMultiplication_1.CombineCommonFactorsMultiplication(),
    new MultiplyExponentPowers_1.MultiplyExponentPowers(),
];
const remainingNoContextSimplificationRules = [
    new USubstitution_1.USubstitution(),
    new PowerRule_1.PowerRule(),
    new PullConstantsFromDerivatives_1.PullConstantsFromDerivatives(),
    new AssociativePropertyOfProductsAndSums_1.AssociativePropertyOfProductsAndSums(),
    new ProductRule_1.ProductRule(),
    new QuotientRule_1.QuotientRule(),
    new DivideFractions_1.DivideFractions(),
];
/**
 * A list of lists of simplification rules.
 * Earlier lists should be tried first.
 * If and only if an earlier list fails to
 * produce equivalent expressions should later lists
 * be used.
 */
const simplificationOrder = [
    identityRules,
    beautifyingRules,
    evaluativeRules,
    combinatoricRules,
    remainingNoContextSimplificationRules,
];


/***/ }),

/***/ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts":
/*!**********************************************************************!*\
  !*** ./mathlib/derivations/NoContextExpressionSimplificationRule.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NoContextExpressionSimplificationRule = void 0;
const assert_1 = __webpack_require__(/*! ../util/assert */ "./mathlib/util/assert.ts");
/**
 * A rule that takes an expression and produces an equivalent expression.
 * ExpressionSimplificationRules can use reflection to determine what
 * type of expression they're given, but should use expression specific
 * functions on sub-expressions. These rules will be recursively used
 * to derive simplified expressions.
 *
 * These rules are also contextless: they're only given the expression,
 * no other information about the problem.
 */
class NoContextExpressionSimplificationRule {
    /**
     * Checks if this rule can find equivalents for the
     * given expression. Only call apply() if true.
     */
    applies(exp) {
        return this.appliesImpl(exp);
    }
    /**
     * Produces a set of expressions that are equivalent to
     * the given one. Only call if the given expression
     * passed the applies() test.
     * @param exp The expression to find an equivalent for.
     * @returns Set of equivalent expressions, not including the given one.
     */
    apply(exp) {
        //console.log(this.constructor.name + " on " + exp.toString())
        const result = this.applyImpl(exp);
        result.forEach(e => {
            (0, assert_1.assert)(e != null && e != undefined);
            (0, assert_1.assert)(e.claim.n1 !== exp, "Rule " + this.constructor.name + " produced result equivalent to ground");
            //if (this.constructor.name == "CombineCommonTermsMultiplication")
            //console.log(this.constructor.name + exp.toString() + "\n -> " + e.claim.n1.toString())
        });
        return result;
    }
}
exports.NoContextExpressionSimplificationRule = NoContextExpressionSimplificationRule;


/***/ }),

/***/ "./mathlib/derivations/RelationalDerivationRule.ts":
/*!*********************************************************!*\
  !*** ./mathlib/derivations/RelationalDerivationRule.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RelationalDerivationRule = void 0;
/**
 * Produces truths from a set of equivalent expressions.
 */
class RelationalDerivationRule {
    /**
     *
     * @param equation A set of expressions which are equal.
     */
    apply(equation) {
        return this.applyImpl(equation);
    }
    static rules = new Set();
}
exports.RelationalDerivationRule = RelationalDerivationRule;


/***/ }),

/***/ "./mathlib/derivations/algebra/DivideOnBothSides.ts":
/*!**********************************************************!*\
  !*** ./mathlib/derivations/algebra/DivideOnBothSides.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DivideOnBothSides = void 0;
const Argument_1 = __webpack_require__(/*! ../../Argument */ "./mathlib/Argument.ts");
const ConvenientExpressions_1 = __webpack_require__(/*! ../../ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const Product_1 = __webpack_require__(/*! ../../expressions/Product */ "./mathlib/expressions/Product.ts");
const Relationship_1 = __webpack_require__(/*! ../../Relationship */ "./mathlib/Relationship.ts");
const RelationalDerivationRule_1 = __webpack_require__(/*! ../RelationalDerivationRule */ "./mathlib/derivations/RelationalDerivationRule.ts");
class DivideOnBothSides extends RelationalDerivationRule_1.RelationalDerivationRule {
    applyImpl(equation) {
        const out = [];
        const combinations = cartesianProduct(equation);
        combinations.filter(pair => {
            return pair[0] instanceof Product_1.Product;
        }).forEach(pair => {
            const p = pair[0];
            const other = pair[1];
            // Some products have multiple factors
            p.factors.forEach(factor => {
                let second;
                if (other instanceof Product_1.Product) {
                    second = [...other.factors];
                }
                else {
                    second = [other];
                }
                const claim = { n: p.without(factor), n1: (0, ConvenientExpressions_1.fraction)((0, ConvenientExpressions_1.productOrNot)(...second), factor), r: Relationship_1.Relationship.Equal };
                out.push(new Argument_1.Argument(new Set([p, other]), claim, "a=b & c=d => a/c = b/d"));
            });
        });
        return out;
    }
}
exports.DivideOnBothSides = DivideOnBothSides;
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

/***/ "./mathlib/derivations/algebra/SubtractFromBothSides.ts":
/*!**************************************************************!*\
  !*** ./mathlib/derivations/algebra/SubtractFromBothSides.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubtractFromBothSides = void 0;
const Argument_1 = __webpack_require__(/*! ../../Argument */ "./mathlib/Argument.ts");
const ConvenientExpressions_1 = __webpack_require__(/*! ../../ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const Product_1 = __webpack_require__(/*! ../../expressions/Product */ "./mathlib/expressions/Product.ts");
const Sum_1 = __webpack_require__(/*! ../../expressions/Sum */ "./mathlib/expressions/Sum.ts");
const Relationship_1 = __webpack_require__(/*! ../../Relationship */ "./mathlib/Relationship.ts");
const RelationalDerivationRule_1 = __webpack_require__(/*! ../RelationalDerivationRule */ "./mathlib/derivations/RelationalDerivationRule.ts");
class SubtractFromBothSides extends RelationalDerivationRule_1.RelationalDerivationRule {
    applyImpl(equation) {
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
            s.terms.filter(term => !(term instanceof Product_1.Product && term.isNegation))
                .forEach(term => {
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
}
exports.SubtractFromBothSides = SubtractFromBothSides;
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

/***/ "./mathlib/derivations/recursion.ts":
/*!******************************************!*\
  !*** ./mathlib/derivations/recursion.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.equiv = void 0;
const Argument_1 = __webpack_require__(/*! ../Argument */ "./mathlib/Argument.ts");
const ConvenientExpressions_1 = __webpack_require__(/*! ../ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const Derivative_1 = __webpack_require__(/*! ../expressions/Derivative */ "./mathlib/expressions/Derivative.ts");
const Exponent_1 = __webpack_require__(/*! ../expressions/Exponent */ "./mathlib/expressions/Exponent.ts");
const Fraction_1 = __webpack_require__(/*! ../expressions/Fraction */ "./mathlib/expressions/Fraction.ts");
const Integer_1 = __webpack_require__(/*! ../expressions/Integer */ "./mathlib/expressions/Integer.ts");
const Product_1 = __webpack_require__(/*! ../expressions/Product */ "./mathlib/expressions/Product.ts");
const Sum_1 = __webpack_require__(/*! ../expressions/Sum */ "./mathlib/expressions/Sum.ts");
const Variable_1 = __webpack_require__(/*! ../expressions/Variable */ "./mathlib/expressions/Variable.ts");
const Relationship_1 = __webpack_require__(/*! ../Relationship */ "./mathlib/Relationship.ts");
const ThingsThatShouldBeInTheStdLib_1 = __webpack_require__(/*! ../util/ThingsThatShouldBeInTheStdLib */ "./mathlib/util/ThingsThatShouldBeInTheStdLib.ts");
/**
 * Gets all equivalents of the given expression
 * checking it's children's equivalents.
 *
 * (a + a) + (b + b)
 * -> (2a) + (b + b) with inference a + a = 2a
 * @param exp
 * @param directEquivalents Function that will produce equivalent expressions
 *        without recursion.
 * @returns Array of inferences to equivalent expressions.
 */
function equiv(exp, directEquivalents) {
    if (exp instanceof Variable_1.Variable || exp instanceof Integer_1.Integer)
        return [];
    else
        switch (exp.class) {
            case Sum_1.SumType: return sumEquiv(exp, directEquivalents);
            case Product_1.ProductType: return productEquiv(exp, directEquivalents);
            case Exponent_1.ExponentType: return exponentEquiv(exp, directEquivalents);
            case Fraction_1.FractionType: return fractionEquiv(exp, directEquivalents);
            case Derivative_1.DerivativeType: return derivativeEquiv(exp, directEquivalents);
            default: throw new Error("Not implemented for " + exp.class);
        }
}
exports.equiv = equiv;
/**
 * Gets all equivalents of the given expression
 * by swapping out it's children individually.
 *
 * (a + a) + (b + b)
 * -> (2a) + (b + b) with inference a + a = 2a
 * @param exp
 * @returns Array of inferences to equivalent expressions.
 */
function sumEquiv(exp, directEquivalents) {
    const equivalentSums = new Set();
    // Add top level equivalents
    directEquivalents(exp).forEach(inf => {
        equivalentSums.add(inf);
    });
    // Find equivalents for each term
    for (let i = 0; i < exp.terms.length; i++) {
        const term = exp.terms[i];
        // Substitute term for each equivalent
        equiv(term, directEquivalents).forEach(a => {
            equivalentSums.add(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(exp), {
                n: exp,
                r: Relationship_1.Relationship.Equal,
                n1: swap(exp, i, a.claim.n1)
            }, a.argument));
        });
    }
    function swap(s, i, e) {
        const terms = [...s.terms];
        terms[i] = e;
        return (0, ConvenientExpressions_1.sum)(...terms);
    }
    return [...equivalentSums];
}
function productEquiv(exp, directEquivalents) {
    const equivalentProducts = new Set();
    // Add top level equivalents
    directEquivalents(exp).forEach(inf => {
        equivalentProducts.add(inf);
    });
    // Find equivalents for each term
    for (let i = 0; i < exp.factors.length; i++) {
        const factor = exp.factors[i];
        // Substitute term for each equivalent
        equiv(factor, directEquivalents).forEach(alt => {
            equivalentProducts.add(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(exp), {
                n: exp,
                r: Relationship_1.Relationship.Equal,
                n1: swap(exp, i, alt.claim.n1),
            }, alt.argument));
        });
    }
    function swap(s, i, e) {
        const terms = [...s.factors];
        terms[i] = e;
        return (0, ConvenientExpressions_1.product)(...terms);
    }
    return [...equivalentProducts];
}
function exponentEquiv(exp, directEquivalents) {
    const equivalents = new Set();
    // Add top level equivalents
    directEquivalents(exp).forEach(inf => {
        equivalents.add(inf);
    });
    equiv(exp.base, directEquivalents).forEach(alt => {
        equivalents.add(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(exp), {
            n: exp,
            r: Relationship_1.Relationship.Equal,
            n1: Exponent_1.Exponent.of(alt.claim.n1, exp.power)
        }, alt.argument));
    });
    equiv(exp.power, directEquivalents).forEach(alt => {
        equivalents.add(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(exp), {
            n: exp,
            r: Relationship_1.Relationship.Equal,
            n1: Exponent_1.Exponent.of(exp.base, alt.claim.n1),
        }, alt.argument));
    });
    return [...equivalents];
}
function fractionEquiv(exp, directEquivalents) {
    const equivalents = new Set();
    // Add top level equivalents
    directEquivalents(exp).forEach(inf => {
        equivalents.add(inf);
    });
    equiv(exp.numerator, directEquivalents).forEach(alt => {
        equivalents.add(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(exp), {
            n: exp,
            r: Relationship_1.Relationship.Equal,
            n1: Fraction_1.Fraction.of(alt.claim.n1, exp.denominator)
        }, alt.argument));
    });
    equiv(exp.denominator, directEquivalents).forEach(alt => {
        equivalents.add(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(exp), {
            n: exp,
            r: Relationship_1.Relationship.Equal,
            n1: Fraction_1.Fraction.of(exp.numerator, alt.claim.n1),
        }, alt.argument));
    });
    return [...equivalents];
}
function derivativeEquiv(exp, directEquivalents) {
    const equivalents = new Set();
    // Add top level equivalents
    directEquivalents(exp).forEach(inf => {
        equivalents.add(inf);
    });
    equiv(exp.exp, directEquivalents).forEach(alt => {
        equivalents.add(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(exp), {
            n: exp,
            r: Relationship_1.Relationship.Equal,
            n1: Derivative_1.Derivative.of(alt.claim.n1, exp.relativeTo)
        }, alt.argument));
    });
    equiv(exp.relativeTo, directEquivalents).forEach(alt => {
        equivalents.add(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(exp), {
            n: exp,
            r: Relationship_1.Relationship.Equal,
            n1: Derivative_1.Derivative.of(exp.exp, alt.claim.n1),
        }, alt.argument));
    });
    return [...equivalents];
}


/***/ }),

/***/ "./mathlib/derivations/simplifications/AdditiveIdentity.ts":
/*!*****************************************************************!*\
  !*** ./mathlib/derivations/simplifications/AdditiveIdentity.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdditiveIdentity = void 0;
const Argument_1 = __webpack_require__(/*! ../../Argument */ "./mathlib/Argument.ts");
const ConvenientExpressions_1 = __webpack_require__(/*! ../../ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const Integer_1 = __webpack_require__(/*! ../../expressions/Integer */ "./mathlib/expressions/Integer.ts");
const Sum_1 = __webpack_require__(/*! ../../expressions/Sum */ "./mathlib/expressions/Sum.ts");
const Relationship_1 = __webpack_require__(/*! ../../Relationship */ "./mathlib/Relationship.ts");
const ThingsThatShouldBeInTheStdLib_1 = __webpack_require__(/*! ../../util/ThingsThatShouldBeInTheStdLib */ "./mathlib/util/ThingsThatShouldBeInTheStdLib.ts");
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ../NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
/**
 * Anything plus 0 is anything
 */
class AdditiveIdentity extends NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule {
    appliesImpl(exp) {
        return exp instanceof Sum_1.Sum;
    }
    applyImpl(exp) {
        const termsWithoutZero = exp.terms.filter(t => !(t instanceof Integer_1.Integer && t.value == 0));
        if (termsWithoutZero.length == exp.terms.length)
            return (0, ThingsThatShouldBeInTheStdLib_1.setOf)();
        return (0, ThingsThatShouldBeInTheStdLib_1.setOf)(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(exp), {
            n: exp,
            r: Relationship_1.Relationship.Equal,
            n1: (0, ConvenientExpressions_1.sumOrNot)(...termsWithoutZero)
        }, "Additive identity"));
    }
}
exports.AdditiveIdentity = AdditiveIdentity;


/***/ }),

/***/ "./mathlib/derivations/simplifications/AssociativePropertyOfProductsAndSums.ts":
/*!*************************************************************************************!*\
  !*** ./mathlib/derivations/simplifications/AssociativePropertyOfProductsAndSums.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AssociativePropertyOfProductsAndSums = void 0;
const Argument_1 = __webpack_require__(/*! ../../Argument */ "./mathlib/Argument.ts");
const ConvenientExpressions_1 = __webpack_require__(/*! ../../ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const Product_1 = __webpack_require__(/*! ../../expressions/Product */ "./mathlib/expressions/Product.ts");
const Sum_1 = __webpack_require__(/*! ../../expressions/Sum */ "./mathlib/expressions/Sum.ts");
const Relationship_1 = __webpack_require__(/*! ../../Relationship */ "./mathlib/Relationship.ts");
const ThingsThatShouldBeInTheStdLib_1 = __webpack_require__(/*! ../../util/ThingsThatShouldBeInTheStdLib */ "./mathlib/util/ThingsThatShouldBeInTheStdLib.ts");
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ../NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
/**
 * Flattens products in products and sums in sums
 */
class AssociativePropertyOfProductsAndSums extends NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule {
    appliesImpl(exp) {
        return exp instanceof Sum_1.Sum || exp instanceof Product_1.Product;
    }
    applyImpl(exp) {
        if (exp instanceof Sum_1.Sum) {
            const newTerms = exp.terms.map(t => {
                if (t instanceof Sum_1.Sum) {
                    return [...t.terms];
                }
                return [t];
            }).flat();
            if (newTerms.length == exp.terms.length)
                return new Set();
            return (0, ThingsThatShouldBeInTheStdLib_1.setOf)(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(exp), {
                n: exp,
                r: Relationship_1.Relationship.Equal,
                n1: (0, ConvenientExpressions_1.sum)(...newTerms)
            }, "Associative property of addition"));
        }
        else {
            if (exp.isNegation)
                return (0, ThingsThatShouldBeInTheStdLib_1.setOf)();
            const newFactors = exp.factors.map(t => {
                if (t instanceof Product_1.Product) {
                    return [...t.factors];
                }
                return [t];
            }).flat();
            if (newFactors.length == exp.factors.length)
                return new Set();
            return (0, ThingsThatShouldBeInTheStdLib_1.setOf)(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(exp), {
                n: exp,
                r: Relationship_1.Relationship.Equal,
                n1: (0, ConvenientExpressions_1.product)(...newFactors)
            }, "Associative property of multiplication"));
        }
    }
}
exports.AssociativePropertyOfProductsAndSums = AssociativePropertyOfProductsAndSums;


/***/ }),

/***/ "./mathlib/derivations/simplifications/CancelNegatives.ts":
/*!****************************************************************!*\
  !*** ./mathlib/derivations/simplifications/CancelNegatives.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CancelNegatives = void 0;
const Argument_1 = __webpack_require__(/*! ../../Argument */ "./mathlib/Argument.ts");
const ConvenientExpressions_1 = __webpack_require__(/*! ../../ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const Product_1 = __webpack_require__(/*! ../../expressions/Product */ "./mathlib/expressions/Product.ts");
const Relationship_1 = __webpack_require__(/*! ../../Relationship */ "./mathlib/Relationship.ts");
const ThingsThatShouldBeInTheStdLib_1 = __webpack_require__(/*! ../../util/ThingsThatShouldBeInTheStdLib */ "./mathlib/util/ThingsThatShouldBeInTheStdLib.ts");
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ../NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
const ConvenientExpressions_2 = __webpack_require__(/*! ../../ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
/**
 * Makes sure a product doesn't contain any negations.
 * The product is either a negation or not.
 */
class CancelNegatives extends NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule {
    appliesImpl(exp) {
        return exp instanceof Product_1.Product;
    }
    applyImpl(exp) {
        const product = exp;
        const negatedFactors = [];
        const others = [];
        for (const f of product.factors) {
            if (f instanceof Product_1.Product && f.isNegation) {
                negatedFactors.push(f);
            }
            else {
                others.push(f);
            }
        }
        if (negatedFactors.length < 1)
            return (0, ThingsThatShouldBeInTheStdLib_1.setOf)();
        const resultIsNegative = negatedFactors.length % 2 == 1;
        const result = (0, ConvenientExpressions_2.product)(...negatedFactors, ...others);
        const negatedResult = resultIsNegative ? (0, ConvenientExpressions_1.negative)(result) : result;
        return (0, ThingsThatShouldBeInTheStdLib_1.setOf)(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(exp), {
            n: exp,
            r: Relationship_1.Relationship.Equal,
            n1: negatedResult
        }, "Cancel negatives"));
    }
}
exports.CancelNegatives = CancelNegatives;


/***/ }),

/***/ "./mathlib/derivations/simplifications/CombineCommonFactorsMultiplication.ts":
/*!***********************************************************************************!*\
  !*** ./mathlib/derivations/simplifications/CombineCommonFactorsMultiplication.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CombineCommonFactorsMultiplication = void 0;
const Argument_1 = __webpack_require__(/*! ../../Argument */ "./mathlib/Argument.ts");
const ConvenientExpressions_1 = __webpack_require__(/*! ../../ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const Exponent_1 = __webpack_require__(/*! ../../expressions/Exponent */ "./mathlib/expressions/Exponent.ts");
const Product_1 = __webpack_require__(/*! ../../expressions/Product */ "./mathlib/expressions/Product.ts");
const Sum_1 = __webpack_require__(/*! ../../expressions/Sum */ "./mathlib/expressions/Sum.ts");
const Relationship_1 = __webpack_require__(/*! ../../Relationship */ "./mathlib/Relationship.ts");
const ThingsThatShouldBeInTheStdLib_1 = __webpack_require__(/*! ../../util/ThingsThatShouldBeInTheStdLib */ "./mathlib/util/ThingsThatShouldBeInTheStdLib.ts");
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ../NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
/**
 * Combines like factors and exponents with like bases.
 */
class CombineCommonFactorsMultiplication extends NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule {
    appliesImpl(exp) {
        return exp instanceof Product_1.Product
            && !exp.isReducible;
    }
    applyImpl(exp) {
        const product = exp;
        const uniqueBases = new Set();
        for (const factor of product.factors) {
            if (factor instanceof Exponent_1.Exponent)
                uniqueBases.add(factor.base);
            else
                uniqueBases.add(factor);
        }
        const equivalentExpressions = new Set();
        // For every unique factor
        for (const base of uniqueBases) {
            let powerTerms = [];
            let remainingFactors = [];
            // Count the number of times it occurs in the product
            // Collect the other factors in a list
            for (const f of product.factors) {
                if (f instanceof Exponent_1.Exponent) {
                    if (f.base === base)
                        powerTerms.push(f.power);
                }
                else {
                    if (f === base) {
                        powerTerms.push((0, ConvenientExpressions_1.num)(1));
                    }
                    else {
                        remainingFactors.push(f);
                    }
                }
            }
            // Order the power terms correctly
            powerTerms = (0, Sum_1.orderTerms)(...powerTerms);
            // If it occured multiple times, create a new exponent
            // To combine the repeats
            if (powerTerms.length > 1) {
                const exponent = Exponent_1.Exponent.of(base, (0, ConvenientExpressions_1.sum)(...powerTerms));
                if (remainingFactors.length == 0) {
                    equivalentExpressions.add(exponent);
                }
                else {
                    // Insert the new exponent at the correct place in the new product
                    function insertCorrectly(arr, el) {
                        // Pick index
                        let index = 0;
                        for (let i = 0; i < arr.length; i++) {
                            if ((0, Product_1.factorOrder)(el, arr[i]) >= 0) {
                                index = i + 1;
                                break;
                            }
                        }
                        arr.splice(index, 0, el);
                    }
                    insertCorrectly(remainingFactors, exponent);
                    equivalentExpressions.add(Product_1.Product.of(remainingFactors));
                }
            }
        }
        // Turn the equivalent expressions into inferences
        let inferences = new Set();
        equivalentExpressions.forEach(e => {
            inferences.add(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(product), {
                n: product,
                r: Relationship_1.Relationship.Equal,
                n1: e,
            }, "Combine common factors multiplication"));
        });
        return inferences;
    }
}
exports.CombineCommonFactorsMultiplication = CombineCommonFactorsMultiplication;


/***/ }),

/***/ "./mathlib/derivations/simplifications/CombineCommonTermsAddition.ts":
/*!***************************************************************************!*\
  !*** ./mathlib/derivations/simplifications/CombineCommonTermsAddition.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CombineCommonTermsAddition = void 0;
const ConvenientExpressions_1 = __webpack_require__(/*! ../../ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const Argument_1 = __webpack_require__(/*! ../../Argument */ "./mathlib/Argument.ts");
const Product_1 = __webpack_require__(/*! ../../expressions/Product */ "./mathlib/expressions/Product.ts");
const Relationship_1 = __webpack_require__(/*! ../../Relationship */ "./mathlib/Relationship.ts");
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ../NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
const Sum_1 = __webpack_require__(/*! ../../expressions/Sum */ "./mathlib/expressions/Sum.ts");
const ThingsThatShouldBeInTheStdLib_1 = __webpack_require__(/*! ../../util/ThingsThatShouldBeInTheStdLib */ "./mathlib/util/ThingsThatShouldBeInTheStdLib.ts");
/**
 * a + a = 2a
 * 2a - a = a  (this means we have to check for negations)
 *
 * (bc)a + 7a = (7 + bc)a
 *
 * But not
 * 1 + 1 = 2(1)
 */
class CombineCommonTermsAddition extends NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule {
    appliesImpl(exp) {
        return exp instanceof Sum_1.Sum
            && !exp.isReducible;
    }
    applyImpl(exp) {
        const sum = exp;
        const uniqueFactors = new Set();
        const args = new Set();
        // Find all unique factors in all terms
        // Don't consider the -1 in negations
        // Consider the factors of negated products separately
        for (const term of sum.terms) {
            if (term instanceof Product_1.Product) {
                if (term.isNegation)
                    if (term.negation instanceof Product_1.Product) {
                        (0, ThingsThatShouldBeInTheStdLib_1.addAll)(uniqueFactors, ...term.negation.factors);
                    }
                    else
                        uniqueFactors.add(term.negation);
                else
                    (0, ThingsThatShouldBeInTheStdLib_1.addAll)(uniqueFactors, ...term.factors); //TODO: Capture all combinations of factors
            }
            else
                uniqueFactors.add(term);
        }
        // Create an argument for pulling out each factor
        for (const factor of uniqueFactors) {
            // Don't waste time with unhealthy factors
            if (factor.isReducibleOrInt)
                continue;
            // Figure out which terms contain it
            const relaventTerms = [];
            const otherTerms = [];
            for (const term of sum.terms) {
                if (term instanceof Product_1.Product) {
                    if (term.isNegation) {
                        // If it's a negation, check if the negation has it
                        if (term.negation === factor)
                            relaventTerms.push(term);
                        else if (term.negation instanceof Product_1.Product) {
                            if ((0, ThingsThatShouldBeInTheStdLib_1.has)(term.negation.factors, factor))
                                relaventTerms.push(term);
                            else
                                otherTerms.push(term);
                        }
                    }
                    else if ((0, ThingsThatShouldBeInTheStdLib_1.has)(term.factors, factor))
                        relaventTerms.push(term);
                    else
                        otherTerms.push(term);
                }
                else {
                    if (term === factor)
                        relaventTerms.push(Product_1.Product.of([(0, ConvenientExpressions_1.num)(1), term]));
                    else
                        otherTerms.push(term);
                }
            }
            // Pull it out of those terms
            const coefficients = [];
            if (relaventTerms.length < 2)
                continue;
            for (const term of relaventTerms) {
                if (term.isNegation) {
                    if (term.negation instanceof Product_1.Product) {
                        coefficients.push((0, ConvenientExpressions_1.negative)(term.negation.without(factor)));
                    }
                    else
                        coefficients.push((0, ConvenientExpressions_1.negative)((0, ConvenientExpressions_1.num)(1)));
                }
                else {
                    coefficients.push(term.without(factor));
                }
            }
            const pulled = (0, ConvenientExpressions_1.sumOrNot)((0, ConvenientExpressions_1.orderedProduct)(Sum_1.Sum.of(coefficients), factor), ...otherTerms);
            args.add(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(exp), {
                n: exp,
                r: Relationship_1.Relationship.Equal,
                n1: pulled
            }, "Combine like terms"));
        }
        return args;
    }
}
exports.CombineCommonTermsAddition = CombineCommonTermsAddition;


/***/ }),

/***/ "./mathlib/derivations/simplifications/CombineIntegerFactors.ts":
/*!**********************************************************************!*\
  !*** ./mathlib/derivations/simplifications/CombineIntegerFactors.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CombineIntegerFactors = void 0;
const Argument_1 = __webpack_require__(/*! ../../Argument */ "./mathlib/Argument.ts");
const ConvenientExpressions_1 = __webpack_require__(/*! ../../ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const Integer_1 = __webpack_require__(/*! ../../expressions/Integer */ "./mathlib/expressions/Integer.ts");
const Product_1 = __webpack_require__(/*! ../../expressions/Product */ "./mathlib/expressions/Product.ts");
const Relationship_1 = __webpack_require__(/*! ../../Relationship */ "./mathlib/Relationship.ts");
const ThingsThatShouldBeInTheStdLib_1 = __webpack_require__(/*! ../../util/ThingsThatShouldBeInTheStdLib */ "./mathlib/util/ThingsThatShouldBeInTheStdLib.ts");
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ../NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
/**
 * Products with several integer terms are simplified to only include 1
 */
class CombineIntegerFactors extends NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule {
    appliesImpl(exp) {
        return exp instanceof Product_1.Product;
    }
    applyImpl(exp) {
        const p = exp;
        const remainingFactors = [];
        let coefficient = 1;
        for (const f of p.factors) {
            if (f instanceof Integer_1.Integer) {
                coefficient *= f.value;
            }
            else
                remainingFactors.push(f);
        }
        if (p.factors.length - remainingFactors.length < 2)
            return new Set();
        return (0, ThingsThatShouldBeInTheStdLib_1.setOf)(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(exp), {
            n: exp,
            r: Relationship_1.Relationship.Equal,
            n1: (0, ConvenientExpressions_1.productOrNot)((0, ConvenientExpressions_1.num)(coefficient), ...remainingFactors)
        }, "Multiply integer terms"));
    }
}
exports.CombineIntegerFactors = CombineIntegerFactors;


/***/ }),

/***/ "./mathlib/derivations/simplifications/DivideFractions.ts":
/*!****************************************************************!*\
  !*** ./mathlib/derivations/simplifications/DivideFractions.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DivideFractions = void 0;
const Argument_1 = __webpack_require__(/*! ../../Argument */ "./mathlib/Argument.ts");
const ConvenientExpressions_1 = __webpack_require__(/*! ../../ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const Exponent_1 = __webpack_require__(/*! ../../expressions/Exponent */ "./mathlib/expressions/Exponent.ts");
const Fraction_1 = __webpack_require__(/*! ../../expressions/Fraction */ "./mathlib/expressions/Fraction.ts");
const Product_1 = __webpack_require__(/*! ../../expressions/Product */ "./mathlib/expressions/Product.ts");
const Relationship_1 = __webpack_require__(/*! ../../Relationship */ "./mathlib/Relationship.ts");
const ThingsThatShouldBeInTheStdLib_1 = __webpack_require__(/*! ../../util/ThingsThatShouldBeInTheStdLib */ "./mathlib/util/ThingsThatShouldBeInTheStdLib.ts");
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ../NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
class DivideFractions extends NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule {
    appliesImpl(exp) {
        return exp instanceof Fraction_1.Fraction
            && exp.numerator instanceof Product_1.Product
            && exp.denominator instanceof Product_1.Product;
    }
    applyImpl(exp) {
        const frac = exp;
        const num = frac.numerator;
        const den = frac.denominator;
        // Take the factors of the negation of any negations
        const numFactors = num.isNegation ?
            num.negation instanceof Product_1.Product ?
                num.negation.factors // Get factors if the negation is a product
                : [num.negation] // If negation isn't a product, return the negation as a list of 1
            : num.factors; // If not a negation, return the factors
        const denFactors = !den.isNegation ? den.factors
            : den.negation instanceof Product_1.Product ?
                den.negation.factors
                : [den.negation];
        // If there are any repeats, give up
        if (new Set(numFactors).size < numFactors.length)
            return (0, ThingsThatShouldBeInTheStdLib_1.setOf)();
        if (new Set(denFactors).size < denFactors.length)
            return (0, ThingsThatShouldBeInTheStdLib_1.setOf)();
        // Treat every factor as an exponent
        const numExponents = numFactors.map(f => {
            if (f instanceof Exponent_1.Exponent)
                return f;
            else
                return Exponent_1.Exponent.of(f, (0, ConvenientExpressions_1.num)(1));
        });
        const denExponents = denFactors.map(f => {
            if (f instanceof Exponent_1.Exponent)
                return f;
            else
                return Exponent_1.Exponent.of(f, (0, ConvenientExpressions_1.num)(1));
        });
        // For each den exponent base, create an overall sum of the powers
        const numExponentPowers = new Map();
        numExponents.forEach(exponent => {
            if (!numExponentPowers.has(exponent.base))
                numExponentPowers.set(exponent.base, []);
            numExponentPowers.get(exponent.base).push(exponent.power);
        });
        const denExponentPowers = new Map();
        denExponents.forEach(exponent => {
            if (!denExponentPowers.has(exponent.base))
                denExponentPowers.set(exponent.base, []);
            denExponentPowers.get(exponent.base).push(exponent.power);
        });
        // Any base which is in the numerator and denominator
        // will only be in the numerator
        const newNumExponentPowers = new Map(numExponentPowers);
        const newDenExponentPowers = new Map(denExponentPowers);
        denExponentPowers.forEach((powers, base) => {
            if (numExponentPowers.has(base)) {
                newNumExponentPowers.get(base).push((0, ConvenientExpressions_1.negative)((0, ConvenientExpressions_1.sumOrNot)(...powers)));
                newDenExponentPowers.delete(base);
            }
        });
        // Get the new factors for the numerator and denominator
        const newNumExponents = [];
        newNumExponentPowers.forEach((powers, base) => {
            newNumExponents.push(Exponent_1.Exponent.of(base, (0, ConvenientExpressions_1.sumOrNot)(...powers)));
        });
        const newDenExponents = [];
        newDenExponentPowers.forEach((powers, base) => {
            newDenExponents.push(Exponent_1.Exponent.of(base, (0, ConvenientExpressions_1.sumOrNot)(...powers)));
        });
        const top = (0, ConvenientExpressions_1.productOrNot)(...newNumExponents);
        const bottom = newDenExponents.length != 0 ? (0, ConvenientExpressions_1.productOrNot)(...newDenExponents) : (0, ConvenientExpressions_1.num)(1);
        // Preserve the negations removed earlier
        const result = Fraction_1.Fraction.of(num.isNegation ? (0, ConvenientExpressions_1.negative)(top) : top, den.isNegation ? (0, ConvenientExpressions_1.negative)(bottom) : bottom);
        return (0, ThingsThatShouldBeInTheStdLib_1.setOf)(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(exp), {
            n: exp,
            r: Relationship_1.Relationship.Equal,
            n1: result
        }, "Cancel out fractions"));
    }
}
exports.DivideFractions = DivideFractions;


/***/ }),

/***/ "./mathlib/derivations/simplifications/DivisionIdentity.ts":
/*!*****************************************************************!*\
  !*** ./mathlib/derivations/simplifications/DivisionIdentity.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DivisionIdentity = void 0;
const Argument_1 = __webpack_require__(/*! ../../Argument */ "./mathlib/Argument.ts");
const Fraction_1 = __webpack_require__(/*! ../../expressions/Fraction */ "./mathlib/expressions/Fraction.ts");
const Integer_1 = __webpack_require__(/*! ../../expressions/Integer */ "./mathlib/expressions/Integer.ts");
const Relationship_1 = __webpack_require__(/*! ../../Relationship */ "./mathlib/Relationship.ts");
const ThingsThatShouldBeInTheStdLib_1 = __webpack_require__(/*! ../../util/ThingsThatShouldBeInTheStdLib */ "./mathlib/util/ThingsThatShouldBeInTheStdLib.ts");
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ../NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
/**
 * Anything divided by 1 is the numerator
 */
class DivisionIdentity extends NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule {
    appliesImpl(exp) {
        return exp instanceof Fraction_1.Fraction
            && exp.denominator instanceof Integer_1.Integer
            && exp.denominator.value == 1;
    }
    applyImpl(exp) {
        const frac = exp;
        return (0, ThingsThatShouldBeInTheStdLib_1.setOf)(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(frac), {
            n: frac,
            r: Relationship_1.Relationship.Equal,
            n1: frac.numerator,
        }, "Division identity is 1"));
    }
}
exports.DivisionIdentity = DivisionIdentity;


/***/ }),

/***/ "./mathlib/derivations/simplifications/EvaluateSums.ts":
/*!*************************************************************!*\
  !*** ./mathlib/derivations/simplifications/EvaluateSums.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EvaluateSums = void 0;
const Argument_1 = __webpack_require__(/*! ../../Argument */ "./mathlib/Argument.ts");
const ConvenientExpressions_1 = __webpack_require__(/*! ../../ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const Integer_1 = __webpack_require__(/*! ../../expressions/Integer */ "./mathlib/expressions/Integer.ts");
const Sum_1 = __webpack_require__(/*! ../../expressions/Sum */ "./mathlib/expressions/Sum.ts");
const Relationship_1 = __webpack_require__(/*! ../../Relationship */ "./mathlib/Relationship.ts");
const ThingsThatShouldBeInTheStdLib_1 = __webpack_require__(/*! ../../util/ThingsThatShouldBeInTheStdLib */ "./mathlib/util/ThingsThatShouldBeInTheStdLib.ts");
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ../NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
/**
 * Combine any integer terms in Sums.
 * a + 2 + 2 + 2= a + 4
 * 2 - 2 = 0
 *
 * Combines all of them at once no matter how many terms there are.
 *
 */
class EvaluateSums extends NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule {
    appliesImpl(exp) {
        return exp instanceof Sum_1.Sum;
    }
    applyImpl(exp) {
        const sum = exp;
        const integerTerms = [...sum.terms].filter(t => t instanceof Integer_1.Integer);
        if (integerTerms.length < 2) {
            return (0, ThingsThatShouldBeInTheStdLib_1.setOf)();
        }
        const newInt = integerTerms.map(e => e).reduce((a, b) => Integer_1.Integer.of(a.value + b.value));
        const otherTerms = [...sum.terms].filter(t => !(t instanceof Integer_1.Integer));
        return (0, ThingsThatShouldBeInTheStdLib_1.setOf)(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(sum), {
            n: sum,
            r: Relationship_1.Relationship.Equal,
            n1: (0, ConvenientExpressions_1.sumOrNot)(...otherTerms, newInt)
        }, "Evaluated Addition"));
    }
}
exports.EvaluateSums = EvaluateSums;


/***/ }),

/***/ "./mathlib/derivations/simplifications/ExponentToZero.ts":
/*!***************************************************************!*\
  !*** ./mathlib/derivations/simplifications/ExponentToZero.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExponentToZero = void 0;
const Argument_1 = __webpack_require__(/*! ../../Argument */ "./mathlib/Argument.ts");
const ConvenientExpressions_1 = __webpack_require__(/*! ../../ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const Exponent_1 = __webpack_require__(/*! ../../expressions/Exponent */ "./mathlib/expressions/Exponent.ts");
const Integer_1 = __webpack_require__(/*! ../../expressions/Integer */ "./mathlib/expressions/Integer.ts");
const Relationship_1 = __webpack_require__(/*! ../../Relationship */ "./mathlib/Relationship.ts");
const ThingsThatShouldBeInTheStdLib_1 = __webpack_require__(/*! ../../util/ThingsThatShouldBeInTheStdLib */ "./mathlib/util/ThingsThatShouldBeInTheStdLib.ts");
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ../NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
class ExponentToZero extends NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule {
    appliesImpl(exp) {
        return exp instanceof Exponent_1.Exponent
            && exp.power instanceof Integer_1.Integer
            && exp.power.value == 0;
    }
    applyImpl(exp) {
        return (0, ThingsThatShouldBeInTheStdLib_1.setOf)(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(exp), {
            n: exp,
            r: Relationship_1.Relationship.Equal,
            n1: (0, ConvenientExpressions_1.num)(1)
        }, "Anything to zero is zero"));
    }
}
exports.ExponentToZero = ExponentToZero;


/***/ }),

/***/ "./mathlib/derivations/simplifications/ExponentialIdentity.ts":
/*!********************************************************************!*\
  !*** ./mathlib/derivations/simplifications/ExponentialIdentity.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExponentialIdentity = void 0;
const Argument_1 = __webpack_require__(/*! ../../Argument */ "./mathlib/Argument.ts");
const Exponent_1 = __webpack_require__(/*! ../../expressions/Exponent */ "./mathlib/expressions/Exponent.ts");
const Integer_1 = __webpack_require__(/*! ../../expressions/Integer */ "./mathlib/expressions/Integer.ts");
const Relationship_1 = __webpack_require__(/*! ../../Relationship */ "./mathlib/Relationship.ts");
const ThingsThatShouldBeInTheStdLib_1 = __webpack_require__(/*! ../../util/ThingsThatShouldBeInTheStdLib */ "./mathlib/util/ThingsThatShouldBeInTheStdLib.ts");
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ../NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
/**
 * Anything to the first is just that thing.
 * Turns any exponent with a power of 1 to that thing.
 */
class ExponentialIdentity extends NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule {
    appliesImpl(exp) {
        return exp instanceof Exponent_1.Exponent
            && exp.power instanceof Integer_1.Integer
            && exp.power.value == 1;
    }
    applyImpl(exp) {
        const e = exp;
        return (0, ThingsThatShouldBeInTheStdLib_1.setOf)(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(e), {
            n: e,
            r: Relationship_1.Relationship.Equal,
            n1: e.base,
        }, "Exponential Identity is 1"));
    }
}
exports.ExponentialIdentity = ExponentialIdentity;


/***/ }),

/***/ "./mathlib/derivations/simplifications/MultiplicativeIdentity.ts":
/*!***********************************************************************!*\
  !*** ./mathlib/derivations/simplifications/MultiplicativeIdentity.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MultiplicativeIdentity = void 0;
const Argument_1 = __webpack_require__(/*! ../../Argument */ "./mathlib/Argument.ts");
const ConvenientExpressions_1 = __webpack_require__(/*! ../../ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const Integer_1 = __webpack_require__(/*! ../../expressions/Integer */ "./mathlib/expressions/Integer.ts");
const Product_1 = __webpack_require__(/*! ../../expressions/Product */ "./mathlib/expressions/Product.ts");
const Relationship_1 = __webpack_require__(/*! ../../Relationship */ "./mathlib/Relationship.ts");
const ThingsThatShouldBeInTheStdLib_1 = __webpack_require__(/*! ../../util/ThingsThatShouldBeInTheStdLib */ "./mathlib/util/ThingsThatShouldBeInTheStdLib.ts");
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ../NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
/**
 * 1x = x
 * 1*1x = 1
 */
class MultiplicativeIdentity extends NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule {
    appliesImpl(exp) {
        return exp instanceof Product_1.Product
            && new Set(exp.factors).has((0, ConvenientExpressions_1.num)(1));
    }
    applyImpl(exp) {
        const p = exp;
        const newFactors = [];
        for (const factor of p.factors) {
            if (factor instanceof Integer_1.Integer && factor.value == 1)
                continue;
            newFactors.push(factor);
        }
        if (newFactors.length == 0)
            newFactors.push((0, ConvenientExpressions_1.num)(1));
        return (0, ThingsThatShouldBeInTheStdLib_1.setOf)(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(exp), {
            n: exp,
            r: Relationship_1.Relationship.Equal,
            n1: (0, ConvenientExpressions_1.productOrNot)(...newFactors)
        }, "Multiplicative Identity"));
    }
}
exports.MultiplicativeIdentity = MultiplicativeIdentity;


/***/ }),

/***/ "./mathlib/derivations/simplifications/MultiplyExponentPowers.ts":
/*!***********************************************************************!*\
  !*** ./mathlib/derivations/simplifications/MultiplyExponentPowers.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MultiplyExponentPowers = void 0;
const Argument_1 = __webpack_require__(/*! ../../Argument */ "./mathlib/Argument.ts");
const ConvenientExpressions_1 = __webpack_require__(/*! ../../ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const Exponent_1 = __webpack_require__(/*! ../../expressions/Exponent */ "./mathlib/expressions/Exponent.ts");
const Relationship_1 = __webpack_require__(/*! ../../Relationship */ "./mathlib/Relationship.ts");
const ThingsThatShouldBeInTheStdLib_1 = __webpack_require__(/*! ../../util/ThingsThatShouldBeInTheStdLib */ "./mathlib/util/ThingsThatShouldBeInTheStdLib.ts");
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ../NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
class MultiplyExponentPowers extends NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule {
    appliesImpl(exp) {
        return exp instanceof Exponent_1.Exponent
            && exp.base instanceof Exponent_1.Exponent;
    }
    applyImpl(exp) {
        const outer = exp;
        const inner = outer.base;
        return (0, ThingsThatShouldBeInTheStdLib_1.setOf)(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(exp), {
            n: exp,
            r: Relationship_1.Relationship.Equal,
            n1: Exponent_1.Exponent.of(inner.base, (0, ConvenientExpressions_1.product)(inner.power, outer.power))
        }, "Exponents to exponents multiply"));
    }
}
exports.MultiplyExponentPowers = MultiplyExponentPowers;


/***/ }),

/***/ "./mathlib/derivations/simplifications/OrderSums.ts":
/*!**********************************************************!*\
  !*** ./mathlib/derivations/simplifications/OrderSums.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderSums = void 0;
const Argument_1 = __webpack_require__(/*! ../../Argument */ "./mathlib/Argument.ts");
const ConvenientExpressions_1 = __webpack_require__(/*! ../../ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const Sum_1 = __webpack_require__(/*! ../../expressions/Sum */ "./mathlib/expressions/Sum.ts");
const Relationship_1 = __webpack_require__(/*! ../../Relationship */ "./mathlib/Relationship.ts");
const ThingsThatShouldBeInTheStdLib_1 = __webpack_require__(/*! ../../util/ThingsThatShouldBeInTheStdLib */ "./mathlib/util/ThingsThatShouldBeInTheStdLib.ts");
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ../NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
/**
 * Turns sums that are unhealthy because their term order
 * is wrong into correctly ordered sums.
 */
class OrderSums extends NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule {
    appliesImpl(exp) {
        return exp instanceof Sum_1.Sum && (0, ConvenientExpressions_1.orderedSum)(exp) !== exp;
    }
    applyImpl(exp) {
        return new Set([new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(exp), {
                n: exp,
                r: Relationship_1.Relationship.Equal,
                n1: (0, ConvenientExpressions_1.orderedSum)(exp),
            }, "Reordered")]);
    }
}
exports.OrderSums = OrderSums;


/***/ }),

/***/ "./mathlib/derivations/simplifications/PowerRule.ts":
/*!**********************************************************!*\
  !*** ./mathlib/derivations/simplifications/PowerRule.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PowerRule = void 0;
const Argument_1 = __webpack_require__(/*! ../../Argument */ "./mathlib/Argument.ts");
const ConvenientExpressions_1 = __webpack_require__(/*! ../../ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const Derivative_1 = __webpack_require__(/*! ../../expressions/Derivative */ "./mathlib/expressions/Derivative.ts");
const Exponent_1 = __webpack_require__(/*! ../../expressions/Exponent */ "./mathlib/expressions/Exponent.ts");
const Relationship_1 = __webpack_require__(/*! ../../Relationship */ "./mathlib/Relationship.ts");
const ThingsThatShouldBeInTheStdLib_1 = __webpack_require__(/*! ../../util/ThingsThatShouldBeInTheStdLib */ "./mathlib/util/ThingsThatShouldBeInTheStdLib.ts");
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ../NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
/**
 * Derives using the power rule
 */
class PowerRule extends NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule {
    appliesImpl(exp) {
        return exp instanceof Derivative_1.Derivative
            && ((exp.exp instanceof Exponent_1.Exponent
                && exp.exp.base === exp.relativeTo
                && exp.exp.power.isConstant)
                || (exp.exp === exp.relativeTo));
    }
    /**
     * We know:
     * exp is a Derivative of an Exponent with a constant power
     * the exponent's base is the same as what the derivative is relative to
     */
    applyImpl(exp) {
        const d = exp;
        let exponent;
        if (d.exp instanceof Exponent_1.Exponent) {
            exponent = d.exp;
        }
        else {
            exponent = Exponent_1.Exponent.of(d.exp, (0, ConvenientExpressions_1.num)(1));
        }
        const result = (0, ConvenientExpressions_1.product)(exponent.power, Exponent_1.Exponent.of(exponent.base, (0, ConvenientExpressions_1.sumIntuitive)(exponent.power, (0, ConvenientExpressions_1.negative)((0, ConvenientExpressions_1.num)(1)))));
        return (0, ThingsThatShouldBeInTheStdLib_1.setOf)(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(exp), {
            n: exp,
            r: Relationship_1.Relationship.Equal,
            n1: result
        }, "Power rule"));
    }
}
exports.PowerRule = PowerRule;


/***/ }),

/***/ "./mathlib/derivations/simplifications/ProductRule.ts":
/*!************************************************************!*\
  !*** ./mathlib/derivations/simplifications/ProductRule.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductRule = void 0;
const Argument_1 = __webpack_require__(/*! ../../Argument */ "./mathlib/Argument.ts");
const ConvenientExpressions_1 = __webpack_require__(/*! ../../ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const Derivative_1 = __webpack_require__(/*! ../../expressions/Derivative */ "./mathlib/expressions/Derivative.ts");
const Product_1 = __webpack_require__(/*! ../../expressions/Product */ "./mathlib/expressions/Product.ts");
const Relationship_1 = __webpack_require__(/*! ../../Relationship */ "./mathlib/Relationship.ts");
const ThingsThatShouldBeInTheStdLib_1 = __webpack_require__(/*! ../../util/ThingsThatShouldBeInTheStdLib */ "./mathlib/util/ThingsThatShouldBeInTheStdLib.ts");
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ../NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
/**
 * Derivatives of products
 *
 * Only operates on derivatives of products where all factors are not constant.
 */
class ProductRule extends NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule {
    appliesImpl(exp) {
        return exp instanceof Derivative_1.Derivative
            && exp.exp instanceof Product_1.Product
            // Contains no constant factors
            && !exp.exp.factors.map(f => f.isConstant).reduce((a, b) => a || b);
        // Contains no derivatives TODO: Find a better solution to loop guarding
        //&& !exp.exp.factors.map<boolean>(f => f instanceof Derivative).reduce((a, b) => a || b)
    }
    applyImpl(exp) {
        const d = exp;
        const p = d.exp;
        const factors = p.factors;
        // For each factor, create a product containing its derivative and the other factors
        const terms = [];
        for (let i = 0; i < factors.length; i++) { // i is the factor to derivatize (what term we're on)
            const factorToDerivatize = factors[i];
            const pFactors = [];
            for (const factor of factors) { // a is the the factor we're on
                if (factor === factorToDerivatize)
                    pFactors.push(Derivative_1.Derivative.of(factor, d.relativeTo));
                else
                    pFactors.push(factor);
            }
            terms.push((0, ConvenientExpressions_1.product)(...pFactors));
        }
        return (0, ThingsThatShouldBeInTheStdLib_1.setOf)(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(d), {
            n: d,
            r: Relationship_1.Relationship.Equal,
            n1: (0, ConvenientExpressions_1.sum)(...terms)
        }, "Product Rule"));
    }
}
exports.ProductRule = ProductRule;


/***/ }),

/***/ "./mathlib/derivations/simplifications/PullConstantsFromDerivatives.ts":
/*!*****************************************************************************!*\
  !*** ./mathlib/derivations/simplifications/PullConstantsFromDerivatives.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PullConstantsFromDerivatives = void 0;
const Argument_1 = __webpack_require__(/*! ../../Argument */ "./mathlib/Argument.ts");
const ConvenientExpressions_1 = __webpack_require__(/*! ../../ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const Derivative_1 = __webpack_require__(/*! ../../expressions/Derivative */ "./mathlib/expressions/Derivative.ts");
const Product_1 = __webpack_require__(/*! ../../expressions/Product */ "./mathlib/expressions/Product.ts");
const Relationship_1 = __webpack_require__(/*! ../../Relationship */ "./mathlib/Relationship.ts");
const ThingsThatShouldBeInTheStdLib_1 = __webpack_require__(/*! ../../util/ThingsThatShouldBeInTheStdLib */ "./mathlib/util/ThingsThatShouldBeInTheStdLib.ts");
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ../NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
class PullConstantsFromDerivatives extends NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule {
    appliesImpl(exp) {
        return exp instanceof Derivative_1.Derivative
            && exp.exp instanceof Product_1.Product;
    }
    applyImpl(exp) {
        const d = exp;
        const p = d.exp;
        const constFactors = p.factors.filter(f => f.isConstant);
        const out = new Set;
        for (const factor of constFactors) {
            out.add(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(d), {
                n: d,
                r: Relationship_1.Relationship.Equal,
                n1: (0, ConvenientExpressions_1.productAndNotTimesOne)(factor, Derivative_1.Derivative.of((0, ConvenientExpressions_1.productOrNot)(...(0, ConvenientExpressions_1.removeNew)(p.factors, factor)), d.relativeTo))
            }, "Pull constant factor from derivative"));
        }
        return out;
    }
}
exports.PullConstantsFromDerivatives = PullConstantsFromDerivatives;


/***/ }),

/***/ "./mathlib/derivations/simplifications/QuotientRule.ts":
/*!*************************************************************!*\
  !*** ./mathlib/derivations/simplifications/QuotientRule.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuotientRule = void 0;
const Argument_1 = __webpack_require__(/*! ../../Argument */ "./mathlib/Argument.ts");
const ConvenientExpressions_1 = __webpack_require__(/*! ../../ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const Derivative_1 = __webpack_require__(/*! ../../expressions/Derivative */ "./mathlib/expressions/Derivative.ts");
const Exponent_1 = __webpack_require__(/*! ../../expressions/Exponent */ "./mathlib/expressions/Exponent.ts");
const Fraction_1 = __webpack_require__(/*! ../../expressions/Fraction */ "./mathlib/expressions/Fraction.ts");
const Relationship_1 = __webpack_require__(/*! ../../Relationship */ "./mathlib/Relationship.ts");
const ThingsThatShouldBeInTheStdLib_1 = __webpack_require__(/*! ../../util/ThingsThatShouldBeInTheStdLib */ "./mathlib/util/ThingsThatShouldBeInTheStdLib.ts");
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ../NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
class QuotientRule extends NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule {
    appliesImpl(exp) {
        return exp instanceof Derivative_1.Derivative
            && exp.exp instanceof Fraction_1.Fraction;
    }
    applyImpl(exp) {
        const d = exp;
        const a = d.exp.numerator;
        const b = d.exp.denominator;
        return (0, ThingsThatShouldBeInTheStdLib_1.setOf)(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(exp), {
            n: exp,
            r: Relationship_1.Relationship.Equal,
            n1: Fraction_1.Fraction.of((0, ConvenientExpressions_1.sum)((0, ConvenientExpressions_1.product)(Derivative_1.Derivative.of(a, d.relativeTo), b), (0, ConvenientExpressions_1.negative)((0, ConvenientExpressions_1.product)(a, Derivative_1.Derivative.of(b, d.relativeTo)))), Exponent_1.Exponent.of(b, (0, ConvenientExpressions_1.num)(2)))
        }, "Quotient Rule"));
    }
}
exports.QuotientRule = QuotientRule;


/***/ }),

/***/ "./mathlib/derivations/simplifications/SumCoefficientsOfAddedTerms.ts":
/*!****************************************************************************!*\
  !*** ./mathlib/derivations/simplifications/SumCoefficientsOfAddedTerms.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SumCoefficientsOfAddedTerms = void 0;
const Argument_1 = __webpack_require__(/*! ../../Argument */ "./mathlib/Argument.ts");
const ConvenientExpressions_1 = __webpack_require__(/*! ../../ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const Integer_1 = __webpack_require__(/*! ../../expressions/Integer */ "./mathlib/expressions/Integer.ts");
const Product_1 = __webpack_require__(/*! ../../expressions/Product */ "./mathlib/expressions/Product.ts");
const Sum_1 = __webpack_require__(/*! ../../expressions/Sum */ "./mathlib/expressions/Sum.ts");
const Relationship_1 = __webpack_require__(/*! ../../Relationship */ "./mathlib/Relationship.ts");
const ThingsThatShouldBeInTheStdLib_1 = __webpack_require__(/*! ../../util/ThingsThatShouldBeInTheStdLib */ "./mathlib/util/ThingsThatShouldBeInTheStdLib.ts");
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ../NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
/**
 * Takes sums of several added products and combines ones that only
 * have different coefficients.
 *
 * a + 2a = 3a
 * a - 2a = -1a
 */
class SumCoefficientsOfAddedTerms extends NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule {
    appliesImpl(exp) {
        return exp instanceof Sum_1.Sum;
    }
    applyImpl(exp) {
        const terms = exp.terms;
        // Split the terms into product and not products
        const productTerms = [];
        const nonProductTerms = [];
        for (const term of terms) {
            if (term instanceof Product_1.Product && term.factors[0] instanceof Integer_1.Integer) {
                productTerms.push(term);
            }
            else {
                nonProductTerms.push(term);
            }
        }
        // Sort the product terms into groups of common factors
        const groups = new Map();
        for (const term of productTerms) {
            const first = term.factors[0];
            const temp = [...term.factors];
            temp.splice(0, 1);
            const group = (0, ConvenientExpressions_1.productOrNot)(...temp);
            if (!groups.has(group))
                groups.set(group, { coefficient: first.value, moreThanOne: false });
            else {
                groups.get(group).coefficient += first.value;
                groups.get(group).moreThanOne = true;
            }
        }
        // For every group with more than one product, produce a new argument
        const out = new Set();
        groups.forEach((obj, group) => {
            if (!obj.moreThanOne)
                return;
            const productTermsNotCombined = productTerms.filter(t => {
                const temp = [...t.factors];
                temp.splice(0, 1);
                const termWithoutLeadingCoefficient = (0, ConvenientExpressions_1.productOrNot)(...temp);
                return group !== termWithoutLeadingCoefficient;
            });
            out.add(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(exp), {
                n: exp,
                r: Relationship_1.Relationship.Equal,
                n1: (0, ConvenientExpressions_1.sumOrNot)((0, ConvenientExpressions_1.productAndNotTimesOne)((0, ConvenientExpressions_1.num)(obj.coefficient), group), ...nonProductTerms, ...productTermsNotCombined)
            }, "Combining like terms"));
        });
        return out;
    }
}
exports.SumCoefficientsOfAddedTerms = SumCoefficientsOfAddedTerms;


/***/ }),

/***/ "./mathlib/derivations/simplifications/USubstitution.ts":
/*!**************************************************************!*\
  !*** ./mathlib/derivations/simplifications/USubstitution.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.USubstitution = void 0;
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ../NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
class USubstitution extends NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule {
    appliesImpl(exp) {
        return false; //exp instanceof Integral
    }
    applyImpl(exp) {
        throw new Error("Not implemented");
    }
}
exports.USubstitution = USubstitution;


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
        const hash = exp.hash + relativeTo.hash;
        if (!this.instances.has(hash))
            this.instances.set(hash, new Derivative(exp, relativeTo));
        return this.instances.get(hash);
    }
    static instances = new Map();
    constructor(exp, relativeTo) {
        super();
        this.exp = exp;
        this.relativeTo = relativeTo;
        Object.freeze(this.exp);
        Object.freeze(this.relativeTo);
        this.isReducible = false; //TODO: Determine if a derivative is reducible
        this.isConstant = false; // TODO: Determine if a derivative is constant
        this.childCount = 2 + exp.childCount + relativeTo.childCount;
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
    childCount;
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
exports.ExponentType = exports.Exponent = void 0;
const MathMLHelpers_1 = __webpack_require__(/*! ../util/MathMLHelpers */ "./mathlib/util/MathMLHelpers.ts");
const Expression_1 = __webpack_require__(/*! ./Expression */ "./mathlib/expressions/Expression.ts");
const Product_1 = __webpack_require__(/*! ./Product */ "./mathlib/expressions/Product.ts");
const Sum_1 = __webpack_require__(/*! ./Sum */ "./mathlib/expressions/Sum.ts");
class Exponent extends Expression_1.Expression {
    static of(base, power) {
        const hash = base.hash + power.hash;
        if (!Exponent.instances.has(hash)) {
            Exponent.instances.set(hash, new Exponent(base, power));
        }
        return Exponent.instances.get(hash);
    }
    static instances = new Map();
    class = exports.ExponentType;
    toMathXML() {
        function wrapIfNeeded(exp) {
            if (exp.class == Sum_1.SumType || exp.class == Product_1.ProductType)
                return (0, MathMLHelpers_1.inRow)((0, MathMLHelpers_1.inParen)(exp.toMathXML()));
            return exp.toMathXML();
        }
        return "<msup>" + wrapIfNeeded(this.base) + (0, MathMLHelpers_1.inRow)(this.power.toMathXML()) + "</msup>";
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
        Object.freeze(this.base);
        Object.freeze(this.power);
        // The integers are closed over exponentiation
        this.isReducible = (base.isReducibleOrInt) && (power.isReducibleOrInt); // && Math.pow(base.reduced.value, power.reduced.value) % 1 == 0
        this.isHealthy = !this.isReducible;
        this.isConstant = base.isConstant && power.isConstant;
        this.childCount = 2 + base.childCount + power.childCount;
    }
    base;
    power;
    isReducible;
    isHealthy;
    isConstant;
    childCount;
}
exports.Exponent = Exponent;
exports.ExponentType = "Exponent";


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
 * All children should be immutable.
 */
class Expression extends MathElement_1.MathElement {
    /**
     * True if the expression is reducible or is an integer.
     */
    get isReducibleOrInt() {
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
        Object.freeze(this.numerator);
        Object.freeze(this.denominator);
        /*
        A fraction is reducible if the denom | num.
            <=> num = k * denom where k is an integer.

        This makes proving reducibility hard.
        TODO: Decide if it's worth implementing reducibility for Fractions
        */
        this.isReducible = false;
        this.isHealthy = true;
        this.isConstant = num.isConstant && denom.isConstant;
        this.childCount = 2 + num.childCount + denom.childCount;
    }
    numerator;
    denominator;
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
    childCount;
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
    isHealthy = true;
    isConstant = true;
    childCount = 0;
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
        Object.freeze(this.integrand);
        Object.freeze(this.relativeTo);
        this.isReducible = false;
        this.isHealthy = true;
        this.isConstant = false;
        this.childCount = 2 + integrand.childCount + relativeTo.childCount;
    }
    integrand;
    relativeTo;
    isReducible;
    class = exports.IntegralType;
    toString() {
        return "∫" + this.integrand.toString();
    }
    get hash() {
        return "∫" + this.integrand.toString() + this.relativeTo.toString();
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
    childCount;
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
exports.factorOrder = exports.ProductType = exports.Product = void 0;
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
        Object.freeze(this.factors);
        let reducible = true;
        this.factors.forEach(f => {
            reducible &&= f.isReducible || f.class == Integer_1.IntegerType;
        });
        // The integers are closed over multiplication
        this.isReducible = reducible;
        let healthy = true;
        healthy &&= this.numNegatives() < 2;
        this.isHealthy = healthy;
        let isNegation = factors.length == 2;
        isNegation &&= factors.filter(e => {
            return e instanceof Integer_1.Integer && e.value == -1;
        }).length == 1;
        this.isNegation = isNegation;
        this.isConstant = this.factors.map(f => f.isConstant).reduce((a, b) => a && b);
        this.childCount = factors.length + factors.map(f => f.childCount).reduce((a, b) => a + b) - (this.isNegation ? 1 : 0);
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
    /**
     * Returns a new Expression without the given factor.
     * If the product contains the factor multiple times,
     * only removes one. If it doesn't contain the factor,
     * returns itself.
     * @param exp A factor in this product.
     */
    without(exp) {
        const newFactors = [...this.factors];
        const index = newFactors.findIndex((value) => {
            return value === exp;
        });
        if (index == -1)
            return this;
        newFactors.splice(index, 1);
        if (newFactors.length < 2) {
            return newFactors[0]; // Gauranteed there's one term here
        }
        return Product.of(newFactors);
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
    /**
     * Only 1 negative integer
     * Integer factors are first
     * No factor equals 1
     */
    isHealthy;
    isConstant;
    childCount;
}
exports.Product = Product;
exports.ProductType = "Product";
/**
 * Can be used in array.sort() to get properly ordered products.
 *
 * @param a
 * @param b
 * @returns Positive if a should be after b
 */
function factorOrder(a, b) {
    if (a instanceof Integer_1.Integer && b instanceof Integer_1.Integer)
        return 0;
    if (a instanceof Integer_1.Integer) {
        return aFirst;
    }
    return 0;
}
exports.factorOrder = factorOrder;
const aFirst = 1;
const aAfter = -1;


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
        Object.freeze(this.terms);
        this.childCount = terms.length + terms.map(t => t.childCount).reduce((a, b) => a + b);
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
        if (index == -1)
            return this;
        newTerms.splice(index, 1);
        if (newTerms.length < 2) {
            return newTerms[0]; // Gauranteed there's one term here
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
     * Ordered, immutable
     */
    terms;
    isReducible;
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
    childCount;
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
    isHealthy = true;
    isConstant = false;
    childCount = 0;
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
const UIPreferences_1 = __webpack_require__(/*! ./UIPreferences */ "./mathlib/uielements/UIPreferences.ts");
const Graph_1 = __webpack_require__(/*! ../Graph */ "./mathlib/Graph.ts");
/**
 * Represents an edge in a graph.
 */
class EdgeView extends HTMLParagraphElement {
    constructor(owner, edge) {
        super();
        this.owner = owner;
        this.edge = edge.e;
        this.first = edge.n;
        this.second = edge.n1;
        Object.freeze(this.edge);
        this.style.width = "fit-content";
        this.style.height = "fit-content";
        this.style.padding = "0";
        this.style.zIndex = "-2";
        this.style.margin = "0";
        this.style.whiteSpace = "nowrap";
        this.style.textAlign = "center";
        this.style.backgroundColor = UIPreferences_1.uiPreferences.edgeEqualsBackgroundColor;
        this.style.userSelect = "none";
        UIPreferences_1.uiPreferences.onUpdate(() => {
            this.style.backgroundColor = UIPreferences_1.uiPreferences.edgeEqualsBackgroundColor;
        });
        this.addEventListener("click", event => {
            this.owner.edgeClicked(this, event);
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
        if (this.edge instanceof Argument_1.Argument) {
            this.textContent = "" + this.edge.claim.r;
        }
        else if (this.edge instanceof Graph_1.GivenEdge) {
            this.textContent = "" + this.edge.r;
        }
        else
            throw new Error("Not implemented for " + this.edge);
    }
    owner;
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

/***/ "./mathlib/uielements/ExplanationPopup.ts":
/*!************************************************!*\
  !*** ./mathlib/uielements/ExplanationPopup.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExplanationPopup = void 0;
const Expression_1 = __webpack_require__(/*! ../expressions/Expression */ "./mathlib/expressions/Expression.ts");
const MathMLHelpers_1 = __webpack_require__(/*! ../util/MathMLHelpers */ "./mathlib/util/MathMLHelpers.ts");
class ExplanationPopup extends HTMLDivElement {
    /**
     *
     * @param arg
     * @param onClose Called after user clicks close button.
     */
    constructor(arg, onClose) {
        super();
        this.arg = arg;
        this.onClose = onClose;
        const closeButton = document.createElement('b');
        closeButton.addEventListener('click', () => {
            this.onClose();
        });
        closeButton.textContent = "Close";
        closeButton.style.userSelect = "none";
        closeButton.style.float = "right";
        this.append(closeButton);
        const text = document.createElement('div');
        text.innerHTML = arg.argument + "<br>";
        if (arg.claim.n instanceof Expression_1.Expression && arg.claim.n1 instanceof Expression_1.Expression)
            text.innerHTML += (0, MathMLHelpers_1.inMathBlock)((0, MathMLHelpers_1.inRow)(arg.claim.n.toMathXML() + " <mo>" + arg.claim.r + "</mo> " + arg.claim.n1.toMathXML())) + "<br> Derived from: <br>";
        for (const ground of arg.grounds) {
            if (ground instanceof Expression_1.Expression)
                text.innerHTML += (0, MathMLHelpers_1.inMath)(ground.toMathXML()) + "<br>";
        }
        this.append(text);
        this.style.backgroundColor = "white";
        this.style.border = "1px solid black";
        this.style.boxShadow = "0.3ch 0.3ch 0.6ch rgba(0, 0, 0, 0.5)";
        this.style.padding = "1ch";
        this.style.width = "fit-content";
        this.style.zIndex = "15";
    }
    connectedCallback() {
        MathJax.typeset([this]);
    }
    arg;
    onClose;
}
exports.ExplanationPopup = ExplanationPopup;
customElements.define("explanation-popup", ExplanationPopup, { extends: "div" });


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
        this.addEventListener("click", () => {
            console.log(this.node.toString());
        });
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
        this.style.paddingTop = "0";
        this.style.paddingBottom = "0";
        this.style.width = "fit-content";
        this.style.height = "fit-content";
        this.style.whiteSpace = "nowrap";
        this.style.zIndex = "5";
    }
    set backgroundColor(value) {
        this.style.backgroundColor = value;
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
const ExplanationPopup_1 = __webpack_require__(/*! ./ExplanationPopup */ "./mathlib/uielements/ExplanationPopup.ts");
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
        this.explanationPopups = [];
        if (config != undefined) {
            this.showArguments = config.showArguments;
            this.drawEdgeLines = config.drawEdgeLines;
            this.debugCornerEnabled = config.debugCornerEnabled;
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
        this.resizeObserver.observe(this);
        this.addEventListener("wheel", (event) => {
            const mousePos = Point(event.offsetX, event.offsetY);
            const preMousePos = this.getInternalPos(mousePos);
            const scaleDelta = Math.pow(0.8, event.deltaY / 360);
            this.scale = scaleDelta * this.scale;
            const postMousePos = this.getInternalPos(mousePos);
            const intXDiff = postMousePos.x - preMousePos.x;
            //console.log("Internal X Change under mouse " + intXDiff)
            // Adjust offset so that content under the mouse doesn't move
            //this.offsetX += intXDiff
            //console.log("Corrected X Change under mouse " + (this.getInternalPos(mousePos).x - preMousePos.x))
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
     * Set a function that determines the color of a node.
     * @param colorFn
     */
    setNodeColoringScheme(colorFn) {
        this.nodeColorFn = colorFn;
        this.propogateSettingsToNodes();
    }
    nodeColorFn = (n) => "lightblue";
    propogateSettingsToNodes() {
        this.nodes.forEach((view, node) => {
            view.backgroundColor = this.nodeColorFn(node);
        });
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
            const view = new EdgeView_1.EdgeView(this, edge);
            view.style.position = "absolute";
            this.edges.set(edge, view);
            this.append(view);
        });
        this.propogateSettingsToNodes();
        if (this.debugCornerEnabled) {
            const corner = document.createElement('p');
            corner.innerHTML = "Graph Nodes: " + this.graph.getNodes().size + "<br>"
                + "Visible Nodes: " + this.nodes.size + "<br>"
                + "Graph Edges: " + this.graph.getEdges().size + "<br>"
                + "Visible Edges: " + this.edges.size + "<br>";
            corner.style.zIndex = "100";
            corner.style.backgroundColor = "white";
            corner.style.width = "fit-content";
            corner.style.margin = "0";
            corner.style.padding = "1ch";
            corner.style.border = "black 1px solid";
            corner.style.position = "absolute";
            this.append(corner);
        }
        this.repOk();
    }
    connectedCallback() {
        this.readGraph();
        this.arrange();
        this.updateOffset();
    }
    /**
     * Pick places for all the nodes/edges on the screen.
     * Populates the position* rep vars.
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
            // The starting angular offset to add the stepsize to
            // Making it non-zero stops things from aligning
            const stepOffset = (Math.PI / 3.5) * depth;
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
            let radius = Math.max(nodes.size * nodeRadius / Math.PI, lastRadius + (3 * nodeRadius));
            if (depth == 0 && nodes.size == 1)
                radius = 0;
            lastRadius = radius;
            const ns = [...nodes]; // TODO, assign a meaningful ordering
            ns.forEach((node, index) => {
                const view = this.nodes.get(node);
                //view.style.width = "" + smallR + "px"
                //view.style.height = "" + smallR + "px"
                // Get the cartesian point from the radius and angle
                const x = radius * Math.cos(stepSize * index + stepOffset) + center.x;
                const y = radius * Math.sin(stepSize * index + stepOffset) + center.y;
                this.nodePositions.set(view, Point(x, y));
            });
            const ring = document.createElement("div");
            ring.style.border = "lightgray solid 0.3ch";
            ring.style.borderRadius = "100%";
            ring.style.position = "absolute";
            ring.style.zIndex = "-10";
            this.appendChild(ring);
            this.ringElements.add(ring);
            this.ringPositions.set(ring, { radius: radius });
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
            const adjustedCenterPos = applyScale({
                x: center.x + this.offsetX,
                y: center.y + this.offsetY,
            });
            view.style.left = "" + (adjustedCenterPos.x - (pos.radius * scale)) + "px";
            view.style.top = "" + (adjustedCenterPos.y - (pos.radius * scale)) + "px";
            view.style.width = "" + pos.radius * 2 * scale + "px";
            view.style.aspectRatio = "1";
        });
        this.explanationPopups.forEach(val => {
            const view = val.e;
            const pos = val.pos;
            const adjusted = applyScale({
                x: pos.x + this.offsetX,
                y: pos.y + this.offsetY,
            });
            view.style.left = "" + (adjusted.x - (0.5 * view.offsetWidth)) + "px";
            view.style.top = "" + (adjusted.y - (0.5 * view.offsetHeight)) + "px";
        });
        this.repOk();
    }
    /**
     * Map from relative screen coordinates (where tl of this view is (0,0))
     * to the internal coordinate system we're using.
     */
    getInternalPos(pixelPos) {
        const center = this.center;
        const scale = this.scale;
        return Point((pixelPos.x - center.x) / scale + center.x - this.offsetX, (pixelPos.y - center.y) / scale + center.y - this.offsetY);
    }
    /**
     * React to an edge being clicked.
     * @param view In this view
     * @param event The click event
     */
    edgeClicked(view, event) {
        // TODO: Don't allow dupliate explanation popups
        if (view.edge instanceof Argument_1.Argument) {
            const popup = new ExplanationPopup_1.ExplanationPopup(view.edge, () => {
                this.removeChild(popup);
                for (let i = 0; i < this.explanationPopups.length; i++) {
                    if (this.explanationPopups[i].e === popup) {
                        this.explanationPopups.splice(i, 1);
                        break;
                    }
                }
            });
            const rect = this.getBoundingClientRect();
            const realtiveX = event.clientX - rect.left;
            const relativeY = event.clientY - rect.top;
            //TODO: The position isn't correct
            //TODO: Algorithm for picking where we should put the popup so it stays out
            // of the way of the graph
            this.explanationPopups.push({
                e: popup,
                pos: this.getInternalPos(Point(realtiveX, relativeY)),
            });
            popup.style.position = "absolute";
            this.append(popup);
            this.updateOffset();
        }
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
    /**
     * Position of top left of popup
     */
    explanationPopups;
    gestureRecognizer;
    // If the graph should draw argument nodes.
    showArguments = false;
    drawEdgeLines = false;
    debugCornerEnabled = false;
    resizeObserver = new ResizeObserver(_ => {
        this.arrange();
        this.updateOffset();
    });
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
exports.inMathBlock = exports.inMath = exports.inRow = exports.inParen = void 0;
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
/**
 * Wraps the given string in <math></math>
 * @param str
 */
function inMath(str) {
    return "<math>" + str + "</math>";
}
exports.inMath = inMath;
/**
 * Wraps the given string in <math display='block'></math>
 * @param str
 */
function inMathBlock(str) {
    return "<math display='block'>" + str + "</math>";
}
exports.inMathBlock = inMathBlock;


/***/ }),

/***/ "./mathlib/util/ThingsThatShouldBeInTheStdLib.ts":
/*!*******************************************************!*\
  !*** ./mathlib/util/ThingsThatShouldBeInTheStdLib.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.has = exports.addAll = exports.setOf = void 0;
function setOf(...arr) {
    const out = new Set();
    arr.forEach(e => out.add(e));
    return out;
}
exports.setOf = setOf;
/**
 * Adds the given elements to the given collection
 * @param collection
 * @param elements
 */
function addAll(collection, ...elements) {
    for (const e of elements) {
        collection.add(e);
    }
}
exports.addAll = addAll;
/**
 * Checks if the given element is in the given collection
 * using referencial equality.
 * @param collection
 * @param element
 * @returns True if the collection has the element, false otherwise.
 */
function has(collection, element) {
    for (const e of collection) {
        if (e === element)
            return true;
    }
    return false;
}
exports.has = has;


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
window.onload = () => {
    setTimeout(function () {
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
    }, 100);
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MkhBQStDO0FBQzdGLHdCQUF3QixtQkFBTyxDQUFDLCtGQUFpQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQiw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1COzs7Ozs7Ozs7OztBQ3BDTjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxXQUFXLEdBQUcsY0FBYyxHQUFHLGFBQWE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7Ozs7Ozs7Ozs7QUNsQ0U7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7Ozs7Ozs7VUNaZDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDRCQUE0QixtQkFBTyxDQUFDLG1EQUFxQjtBQUN6RCxtQ0FBbUMsbUJBQU8sQ0FBQyxpRUFBNEI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL0V4cHJlc3Npb25UZXN0UGFnZUxvYWRlci50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vUHJpbWFyeVBhZ2VMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL1RvdWNoR2VzdHVyZVJlY29nbml6ZXIudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvQXJndW1lbnQudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvQ29udmVuaWVudEV4cHJlc3Npb25zLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL0dyYXBoLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL0dyYXBoTWluaXB1bGF0b3IudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvUmVsYXRpb25zaGlwLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL0Rlcml2ZXIudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZS50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGUudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvYWxnZWJyYS9EaXZpZGVPbkJvdGhTaWRlcy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9hbGdlYnJhL1N1YnRyYWN0RnJvbUJvdGhTaWRlcy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9yZWN1cnNpb24udHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL0FkZGl0aXZlSWRlbnRpdHkudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL0Fzc29jaWF0aXZlUHJvcGVydHlPZlByb2R1Y3RzQW5kU3Vtcy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvQ2FuY2VsTmVnYXRpdmVzLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9Db21iaW5lQ29tbW9uRmFjdG9yc011bHRpcGxpY2F0aW9uLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9Db21iaW5lQ29tbW9uVGVybXNBZGRpdGlvbi50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvQ29tYmluZUludGVnZXJGYWN0b3JzLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9EaXZpZGVGcmFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL0RpdmlzaW9uSWRlbnRpdHkudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL0V2YWx1YXRlU3Vtcy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvRXhwb25lbnRUb1plcm8udHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL0V4cG9uZW50aWFsSWRlbnRpdHkudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL011bHRpcGxpY2F0aXZlSWRlbnRpdHkudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL011bHRpcGx5RXhwb25lbnRQb3dlcnMudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL09yZGVyU3Vtcy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvUG93ZXJSdWxlLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9Qcm9kdWN0UnVsZS50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvUHVsbENvbnN0YW50c0Zyb21EZXJpdmF0aXZlcy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvUXVvdGllbnRSdWxlLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9TdW1Db2VmZmljaWVudHNPZkFkZGVkVGVybXMudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL1VTdWJzdGl0dXRpb24udHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvRGVyaXZhdGl2ZS50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9leHByZXNzaW9ucy9FeHBvbmVudC50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9leHByZXNzaW9ucy9FeHByZXNzaW9uLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2V4cHJlc3Npb25zL0ZyYWN0aW9uLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2V4cHJlc3Npb25zL0ludGVnZXIudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvSW50ZWdyYWwudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvTWF0aEVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvUHJvZHVjdC50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9leHByZXNzaW9ucy9TdW0udHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvVmFyaWFibGUudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdWllbGVtZW50cy9Bcmd1bWVudE5vZGVWaWV3LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3VpZWxlbWVudHMvRWRnZVZpZXcudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdWllbGVtZW50cy9FZGl0YWJsZU1hdGhWaWV3LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3VpZWxlbWVudHMvRXhwbGFuYXRpb25Qb3B1cC50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi91aWVsZW1lbnRzL0V4cHJlc3Npb25Ob2RlVmlldy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi91aWVsZW1lbnRzL0dyYXBoTm9kZVZpZXcudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdWllbGVtZW50cy9VSVByZWZlcmVuY2VzLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3VpZWxlbWVudHMvV2ViR3JhcGhWaWV3LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3VzZXJpbnB1dC9QYXJzZXIudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdXRpbC9NYXRoTUxIZWxwZXJzLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3V0aWwvVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWIudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdXRpbC9hc3NlcnQudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubG9hZEV4cHJlc3Npb25zVGVzdFBhZ2UgPSB2b2lkIDA7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgRGVyaXZhdGl2ZV8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9leHByZXNzaW9ucy9EZXJpdmF0aXZlXCIpO1xuY29uc3QgRXhwb25lbnRfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZXhwcmVzc2lvbnMvRXhwb25lbnRcIik7XG5jb25zdCBGcmFjdGlvbl8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9leHByZXNzaW9ucy9GcmFjdGlvblwiKTtcbmNvbnN0IEludGVncmFsXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2V4cHJlc3Npb25zL0ludGVncmFsXCIpO1xuY29uc3QgRWRpdGFibGVNYXRoVmlld18xID0gcmVxdWlyZShcIi4vbWF0aGxpYi91aWVsZW1lbnRzL0VkaXRhYmxlTWF0aFZpZXdcIik7XG4vKipcbiAqIENhbGxlZCBhZnRlciB0aGUgZG9tIGlzIGxvYWRlZC5cbiAqIFBvcHVsYXRlcyB0aGUgYm9keSBlbGVtZW50IG9mIHRoZSBkb2N1bWVudFxuICogd2l0aCB0aGUgdGVzdCBleHByZXNzaW9ucyBwYWdlXG4gKi9cbmZ1bmN0aW9uIGxvYWRFeHByZXNzaW9uc1Rlc3RQYWdlKCkge1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICAgIGZ1bmN0aW9uIHAoY29udGVudCkge1xuICAgICAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBlLmlubmVyVGV4dCA9IGNvbnRlbnQ7XG4gICAgICAgIHBhZ2UuYXBwZW5kKGUpO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdmlldyhleHApIHtcbiAgICAgICAgY29uc3QgZSA9IG5ldyBFZGl0YWJsZU1hdGhWaWV3XzEuRWRpdGFibGVNYXRoVmlldygpO1xuICAgICAgICBlLnZhbHVlID0gZXhwO1xuICAgICAgICBwYWdlLmFwcGVuZChlKTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIHAoXCJUaGUgc3VtIG9mIGEsIGEsIGFuZCBhXCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bSkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSkpO1xuICAgIHAoXCJJbnRlZ3JhbCBvZiBhIG92ZXIgYiB3aXRoIHJlc3BlY3QgdG8gY1wiKTtcbiAgICB2aWV3KEludGVncmFsXzEuSW50ZWdyYWwub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5iKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYykpO1xuICAgIHAoXCJJbnRlZ3JhbCBvZiAoYSBvdmVyIGEpIG92ZXIgYiB3aXRoIHJlc3BlY3QgdG8gY1wiKTtcbiAgICB2aWV3KEludGVncmFsXzEuSW50ZWdyYWwub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5iKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYykpO1xuICAgIHAoXCJJbnRlZ3JhbCBvZiAoKGEgb3ZlciBhKSBvdmVyIGEpIG92ZXIgYiB3aXRoIHJlc3BlY3QgdG8gY1wiKTtcbiAgICB2aWV3KEludGVncmFsXzEuSW50ZWdyYWwub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5iKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYykpO1xuICAgIHAoXCJJbnRlZ3JhbCBvZiAoKChhIG92ZXIgYSkgb3ZlciBhKSBvdmVyIGEpIG92ZXIgYiB3aXRoIHJlc3BlY3QgdG8gY1wiKTtcbiAgICB2aWV3KEludGVncmFsXzEuSW50ZWdyYWwub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5iKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYykpO1xuICAgIHAoXCJJbnRlZ3JhbCBvZiAoKCgoYSBvdmVyIGEpIG92ZXIgYSkgb3ZlciBhKSBvdmVyIGEpIG92ZXIgYiB3aXRoIHJlc3BlY3QgdG8gY1wiKTtcbiAgICB2aWV3KEludGVncmFsXzEuSW50ZWdyYWwub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5iKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYykpO1xuICAgIHAoXCJcIik7XG4gICAgdmlldygoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuaW50KShGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5uZWdhdGl2ZSkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYiksIEV4cG9uZW50XzEuRXhwb25lbnQub2YoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bSkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSksIEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSksICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDIpKSkpLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdCkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMiksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCkpO1xuICAgIHAoXCJQcm9kdWN0IG9mIHggYW5kIHlcIik7XG4gICAgdmlldygoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdCkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueSkpO1xuICAgIHAoXCJQcm9kdWN0IG9mICh4LTEpLCAtMSBhbmQgeVwiKTtcbiAgICB2aWV3KCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5wcm9kdWN0KSgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtKShDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54LCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubmVnYXRpdmUpKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDEpKSksICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKC0xKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueSkpO1xuICAgIHAoXCJOZWdhdGlvbiBvZiB4IChSZXBlZCBhcyB0aGUgcHJvcGR1Y3Qgb2YgLTEgYW5kIHgpXCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm5lZ2F0aXZlKShDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54KSk7XG4gICAgcChcIlN1bSBvZiB4IGFuZCAteFwiKTtcbiAgICB2aWV3KCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKENvbnZlbmllbnRFeHByZXNzaW9uc18xLngsICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5uZWdhdGl2ZSkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCkpKTtcbiAgICBwKFwiU3VtIG9mIC14IGFuZCB4XCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bSkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm5lZ2F0aXZlKShDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54KSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCkpO1xuICAgIHAoXCJEZXJpdmF0aXZlIG9mIHRoZSBzcXVhcmUgb2YgeCB3aXRoIHJlc3BlY3QgdG8geFwiKTtcbiAgICB2aWV3KERlcml2YXRpdmVfMS5EZXJpdmF0aXZlLm9mKEV4cG9uZW50XzEuRXhwb25lbnQub2YoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCwgKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMikpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54KSk7XG4gICAgcChcIkRlcml2YXRpdmUgKCh4XjIpIC0gMikgd2l0aCByZXNwZWN0IHRvIHhcIik7XG4gICAgdmlldyhEZXJpdmF0aXZlXzEuRGVyaXZhdGl2ZS5vZihFeHBvbmVudF8xLkV4cG9uZW50Lm9mKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKENvbnZlbmllbnRFeHByZXNzaW9uc18xLngsICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKC0yKSksICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDIpKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCkpO1xuICAgIHAoXCJcIik7XG4gICAgdmlldygoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgxKSk7XG4gICAgcChcIlwiKTtcbiAgICB2aWV3KCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDEpKTtcbiAgICBwKFwiXCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSkpO1xuICAgIHAoXCJcIik7XG4gICAgdmlldygoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgxKSk7XG59XG5leHBvcnRzLmxvYWRFeHByZXNzaW9uc1Rlc3RQYWdlID0gbG9hZEV4cHJlc3Npb25zVGVzdFBhZ2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubG9hZFByaW1hcnlQYWdlID0gdm9pZCAwO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IFBhcnNlcl8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi91c2VyaW5wdXQvUGFyc2VyXCIpO1xuY29uc3QgV2ViR3JhcGhWaWV3XzEgPSByZXF1aXJlKFwiLi9tYXRobGliL3VpZWxlbWVudHMvV2ViR3JhcGhWaWV3XCIpO1xuY29uc3QgR3JhcGhfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvR3JhcGhcIik7XG5jb25zdCBEZXJpdmVyXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL0Rlcml2ZXJcIik7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2V4cHJlc3Npb25zL0V4cHJlc3Npb25cIik7XG5jb25zdCBSZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZGVyaXZhdGlvbnMvUmVsYXRpb25hbERlcml2YXRpb25SdWxlXCIpO1xuY29uc3QgU3VidHJhY3RGcm9tQm90aFNpZGVzXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL2FsZ2VicmEvU3VidHJhY3RGcm9tQm90aFNpZGVzXCIpO1xuY29uc3QgRGl2aWRlT25Cb3RoU2lkZXNfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZGVyaXZhdGlvbnMvYWxnZWJyYS9EaXZpZGVPbkJvdGhTaWRlc1wiKTtcbmNvbnN0IFZhcmlhYmxlXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2V4cHJlc3Npb25zL1ZhcmlhYmxlXCIpO1xuY29uc3QgRXhwb25lbnRfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZXhwcmVzc2lvbnMvRXhwb25lbnRcIik7XG5jb25zdCBGcmFjdGlvbl8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9leHByZXNzaW9ucy9GcmFjdGlvblwiKTtcbmNvbnN0IERlcml2YXRpdmVfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZXhwcmVzc2lvbnMvRGVyaXZhdGl2ZVwiKTtcblJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZV8xLlJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZS5ydWxlcy5hZGQobmV3IFN1YnRyYWN0RnJvbUJvdGhTaWRlc18xLlN1YnRyYWN0RnJvbUJvdGhTaWRlcygpKTtcblJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZV8xLlJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZS5ydWxlcy5hZGQobmV3IERpdmlkZU9uQm90aFNpZGVzXzEuRGl2aWRlT25Cb3RoU2lkZXMoKSk7XG4vKipcbiAqIENhbGxlZCBhZnRlciBET00gaXMgbG9hZGVkLlxuICogU3Vic3RpdHV0ZXMgdGhlIGJvZHkgZWxlbWVudCBpbiB0aGUgZG9jdW1lbnRcbiAqIHdpdGggdGhlIHByaW1hcnkgaW50ZWdyYXRvciB2aWV3LlxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gbG9hZFByaW1hcnlQYWdlKCkge1xuICAgIC8vY29uc3Qgcm9vdCA9IERlcml2YXRpdmUub2Yoc3VtKGEsIGEsIHByb2R1Y3QobnVtKDIpLCBiKSksIGEpXG4gICAgLy9jb25zdCByb290ID0gRGVyaXZhdGl2ZS5vZihwcm9kdWN0KG51bSgzKSwgRXhwb25lbnQub2YoeCwgbnVtKDIpKSwgRXhwb25lbnQub2YoeCwgbnVtKDMpKSksIHgpXG4gICAgLy9jb25zdCByb290ID0gcHJvZHVjdChFeHBvbmVudC5vZih4LCBudW0oMykpLCBFeHBvbmVudC5vZih4LCBudW0oNCkpLCB4LCB4KVxuICAgIGNvbnN0IHJvb3QgPSBEZXJpdmF0aXZlXzEuRGVyaXZhdGl2ZS5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKEV4cG9uZW50XzEuRXhwb25lbnQub2YoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCwgKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMikpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54KSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCk7XG4gICAgLy9jb25zdCByb290ID0gRnJhY3Rpb24ub2YocHJvZHVjdChudW0oMiksIHgsIEV4cG9uZW50Lm9mKHgsIGEpLCBhKSwgcHJvZHVjdChudW0oMiksIGEsIGEsIHgpKVxuICAgIGNvbnN0IGdyYXBoID0gbmV3IEdyYXBoXzEuR3JhcGgoKS5hZGROb2RlKHJvb3QpO1xuICAgIGNvbnN0IGRlcml2ZXIgPSBuZXcgRGVyaXZlcl8xLkRlcml2ZXIoZ3JhcGgpO1xuICAgIGRlcml2ZXIuZXhwYW5kKCk7XG4gICAgLy9jb25zb2xlLmxvZyhcIlJlc3VsdDogXCIgKyBncmFwaClcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRcIik7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+IHtcbiAgICAgICAgKDAsIFBhcnNlcl8xLnBhcnNlKShpbnB1dC52YWx1ZSk7XG4gICAgfSk7XG4gICAgY29uc3Qgb3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXRib3hcIik7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICBzaG93QXJndW1lbnRzOiBmYWxzZSxcbiAgICAgICAgZHJhd0VkZ2VMaW5lczogdHJ1ZSxcbiAgICAgICAgZGVidWdDb3JuZXJFbmFibGVkOiB0cnVlLFxuICAgIH07XG4gICAgY29uc3QgZ3JhcGhWaWV3ID0gbmV3IFdlYkdyYXBoVmlld18xLldlYkdyYXBoVmlldyhncmFwaCwgbmV3IFNldChbcm9vdF0pLCBjb25maWcpO1xuICAgIGdyYXBoVmlldy5zZXROb2RlQ29sb3JpbmdTY2hlbWUobiA9PiB7XG4gICAgICAgIGlmIChuIGluc3RhbmNlb2YgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24pIHtcbiAgICAgICAgICAgIGlmICghZGVyaXZlci5pc1NpbXBsaWZpZWQobikpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibGlnaHRncmF5XCI7XG4gICAgICAgICAgICBlbHNlIGlmICghbi5pc0hlYWx0aHkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibGlnaHRyZWRcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKG4gaW5zdGFuY2VvZiBWYXJpYWJsZV8xLlZhcmlhYmxlKVxuICAgICAgICAgICAgICAgIHJldHVybiBcIm9yYW5nZVwiO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBcImxpZ2h0Ymx1ZVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcImJsYWNrXCI7XG4gICAgfSk7XG4gICAgZ3JhcGhWaWV3LnNldEF0dHJpYnV0ZShcImlkXCIsIFwid2ViLWdyYXBodmlld1wiKTtcbiAgICBvdXQuYXBwZW5kQ2hpbGQoZ3JhcGhWaWV3KTtcbn1cbmV4cG9ydHMubG9hZFByaW1hcnlQYWdlID0gbG9hZFByaW1hcnlQYWdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRvdWNoR2VzdHVyZVJlY29nbml6ZXIgPSB2b2lkIDA7XG4vKipcbiAqIEludGVycHJldCBjb21wbGljYXRlZCB0b3VjaCBnZXN0dXJlIGRhdGEuXG4gKi9cbmNsYXNzIFRvdWNoR2VzdHVyZVJlY29nbml6ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1vdmVMaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy5waW5jaExpc3RlbmVycyA9IFtdO1xuICAgIH1cbiAgICBhZGRNb3ZlTGlzdGVuZXIoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5tb3ZlTGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIGEgcGluY2ggZ2VzdHVyZSBoYXMgYmVlbiBkZXRlY3RlZC5cbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgVGFrZXMgYSBjZW50ZXIgY29vcmRpbmF0ZSB0aGF0J3MgdGhlIGF2ZXJhZ2Ugb2YgdGhlIGZpbmdlciBwb3NpdGlvbnMsXG4gICAgICogICAgICAgICAgICAgIHRoZSBjaGFuZ2UgaW4gc2NhbGUgc2luY2UgdGhlIGxhc3QgY2FsbCBvbiAoMCwgaW5maW5pdHkpIHdoZXJlIDEgaXMgbm8gY2hhbmdlLFxuICAgICAqICAgICAgICAgICAgICBhbmQgdGhlIG51bWJlciBvZiBmaW5nZXJzIGluIHRoZSBnZXN0dXJlIChhbiBpbnRlZ2VyKS5cbiAgICAgKi9cbiAgICBhZGRQaW5jaExpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMucGluY2hMaXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNob3VsZCB0YWtlIGFsbCB0b3VjaCBldmVudHMgZnJvbSB0aGUgdmlldyB1c2luZyBpdC5cbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBwcm9jZXNzVG91Y2hEb3duKGV2ZW50KSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNob3VsZCB0YWtlIGFsbCB0b3VjaCBldmVudHMgZnJvbSB0aGUgdmlldyB1c2luZyBpdC5cbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBwcm9jZXNzVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGZvciAoY29uc3QgY2hhbmdlZCBvZiBldmVudC5jaGFuZ2VkVG91Y2hlcykge1xuICAgICAgICAgICAgY2hhbmdlZC5jbGllbnRYO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNob3VsZCB0YWtlIGFsbCB0b3VjaCBldmVudHMgZnJvbSB0aGUgdmlldyB1c2luZyBpdC5cbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBwcm9jZXNzVG91Y2hFbmQoZXZlbnQpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2hvdWxkIHRha2UgYWxsIHRvdWNoIGV2ZW50cyBmcm9tIHRoZSB2aWV3IHVzaW5nIGl0LlxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHByb2Nlc3NUb3VjaENhbmNlbChldmVudCkge1xuICAgIH1cbiAgICAvL3ByaXZhdGUgbGFzdFg6IE1hcDxUb3VjaFxuICAgIG1vdmVMaXN0ZW5lcnM7XG4gICAgcGluY2hMaXN0ZW5lcnM7XG59XG5leHBvcnRzLlRvdWNoR2VzdHVyZVJlY29nbml6ZXIgPSBUb3VjaEdlc3R1cmVSZWNvZ25pemVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFyZ3VtZW50ID0gdm9pZCAwO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi91dGlsL2Fzc2VydFwiKTtcbi8qKlxuICogQ29ubmVjdHMgb25lIG9yIG1vcmUgbm9kZXMgKGdyb3VuZHMpIHRvIG9uZSBvciBtb3JlIG5vZGVzIChjbGFpbXMpLlxuICogQ29udGFpbnMgYW4gZXhwbGFuYXRpb24vYXJndW1lbnQgZm9yIHRoZSBjb25uZWN0aW9uLlxuICovXG5jbGFzcyBBcmd1bWVudCB7XG4gICAgY29uc3RydWN0b3IoZ3JvdW5kcywgY2xhaW0sIGFyZ3VtZW50KSB7XG4gICAgICAgIHRoaXMuZ3JvdW5kcyA9IGdyb3VuZHM7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5ncm91bmRzKTtcbiAgICAgICAgdGhpcy5jbGFpbSA9IGNsYWltO1xuICAgICAgICB0aGlzLmFyZ3VtZW50ID0gYXJndW1lbnQ7XG4gICAgICAgIHRoaXMucmVwT2soKTtcbiAgICB9XG4gICAgZXhwcmVzc2lvbkVkZ2UgPSB0cnVlO1xuICAgIGdldCByZWxhdGlvbnNoaXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsYWltLnI7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCJBcmd1bWVudCBcIiArIHRoaXMuY2xhaW0ucjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHdvIG91dCBtYXRoIGdyYXBoIG5vZGVzIHRoYXQgYXJlIHJlbGF0ZWQgYnkgdGhpcyBBcnVnbWVudC5cbiAgICAgKi9cbiAgICBjbGFpbTtcbiAgICAvKipcbiAgICAgKiBUaGUgZXhwbGFuYXRpb24gdGhhdCBjb25uZWN0cyB0aGUgYXJndW1lbnQncyBncm91bmRzIHRvXG4gICAgICogaXQncyBjbGFpbWVkIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIHRoZSB0d28gb3V0IG5vZGVzLlxuICAgICAqXG4gICAgICovXG4gICAgYXJndW1lbnQ7XG4gICAgLyoqXG4gICAgICogTm9kZXMgdGhhdCBoYXZlIGFuIGVkZ2UgcG9pbnRpbmcgdG8gdGhpcyBhcmd1bWVudC5cbiAgICAgKi9cbiAgICBncm91bmRzO1xuICAgIHJlcE9rKCkge1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLmdyb3VuZHMgIT0gbnVsbCk7XG4gICAgICAgIGZvciAoY29uc3QgZ3JvdW5kIG9mIHRoaXMuZ3JvdW5kcykge1xuICAgICAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkoZ3JvdW5kICE9IG51bGwgJiYgZ3JvdW5kICE9IHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5jbGFpbS5uICE9IG51bGwgJiYgdGhpcy5jbGFpbS5uICE9IHVuZGVmaW5lZCk7XG4gICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMuY2xhaW0ubjEgIT0gbnVsbCAmJiB0aGlzLmNsYWltLm4xICE9IHVuZGVmaW5lZCk7XG4gICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMuY2xhaW0uciAhPSB1bmRlZmluZWQgJiYgdGhpcy5jbGFpbS5yICE9IG51bGwpO1xuICAgIH1cbn1cbmV4cG9ydHMuQXJndW1lbnQgPSBBcmd1bWVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy55ID0gZXhwb3J0cy54ID0gZXhwb3J0cy5mID0gZXhwb3J0cy5lID0gZXhwb3J0cy5kID0gZXhwb3J0cy5jID0gZXhwb3J0cy5iID0gZXhwb3J0cy5hID0gZXhwb3J0cy5wcm9kdWN0QW5kTm90VGltZXNPbmUgPSBleHBvcnRzLnByb2R1Y3RPck5vdCA9IGV4cG9ydHMuZXF1aXZhbGVuY2VBcmd1bWVudCA9IGV4cG9ydHMuaW50ID0gZXhwb3J0cy52ID0gZXhwb3J0cy5udW0gPSBleHBvcnRzLm5lZ2F0aXZlID0gZXhwb3J0cy5wcm9kdWN0ID0gZXhwb3J0cy5yZW1vdmVOZXcgPSBleHBvcnRzLnJlbW92ZSA9IGV4cG9ydHMub3JkZXJlZFByb2R1Y3QgPSBleHBvcnRzLnN1bU9yTm90ID0gZXhwb3J0cy5zdW1JbnR1aXRpdmUgPSBleHBvcnRzLnN1bUV2YWxJbnRlZ2VyVGVybXMgPSBleHBvcnRzLm9yZGVyZWRTdW0gPSBleHBvcnRzLnN1bSA9IGV4cG9ydHMuZnJhY3Rpb24gPSB2b2lkIDA7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi9leHByZXNzaW9ucy9JbnRlZ2VyXCIpO1xuY29uc3QgRnJhY3Rpb25fMSA9IHJlcXVpcmUoXCIuL2V4cHJlc3Npb25zL0ZyYWN0aW9uXCIpO1xuY29uc3QgSW50ZWdyYWxfMSA9IHJlcXVpcmUoXCIuL2V4cHJlc3Npb25zL0ludGVncmFsXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4vZXhwcmVzc2lvbnMvUHJvZHVjdFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4vZXhwcmVzc2lvbnMvU3VtXCIpO1xuY29uc3QgVmFyaWFibGVfMSA9IHJlcXVpcmUoXCIuL2V4cHJlc3Npb25zL1ZhcmlhYmxlXCIpO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuL0FyZ3VtZW50XCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0XCIpO1xuZnVuY3Rpb24gZnJhY3Rpb24obnVtLCBkZW4pIHtcbiAgICByZXR1cm4gRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihudW0sIGRlbik7XG59XG5leHBvcnRzLmZyYWN0aW9uID0gZnJhY3Rpb247XG4vKipcbiAqIEEgY29udmVuaWVuY2UgbWV0aG9kIGZvciBTdW0ub2YoKVxuICovXG5mdW5jdGlvbiBzdW0oLi4udGVybXMpIHtcbiAgICByZXR1cm4gU3VtXzEuU3VtLm9mKHRlcm1zKTtcbn1cbmV4cG9ydHMuc3VtID0gc3VtO1xuLyoqXG4gKiBHZXRzIHRoZSBjb3JyZWN0bHkgb3JkZXJlZCBzdW0gb2YgdGhlIGdpdmVuIHN1bS5cbiAqIDEgKyBhID0gYSArIDFcbiAqIEZvbGxvd3MgdGhlIHNwZWMgZ2l2ZW4gaW4gdGhlIFN1bS50cyBmaWxlLlxuICogQHBhcmFtIHN1bVxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gb3JkZXJlZFN1bShzdW0pIHtcbiAgICBjb25zdCBvcmRlcmVkID0gKDAsIFN1bV8xLm9yZGVyVGVybXMpKC4uLnN1bS50ZXJtcyk7XG4gICAgcmV0dXJuIFN1bV8xLlN1bS5vZihvcmRlcmVkKTtcbn1cbmV4cG9ydHMub3JkZXJlZFN1bSA9IG9yZGVyZWRTdW07XG4vKipcbiAqIFJldHVybnMgdGhlIHN1bSBvZiB0aGUgZ2l2ZW4gdGVybXMsIGV2YWx1YXRpbmcgYW55IGludGVnZXIgdGVybXMuXG4gKiBQdXRzIGZpbmFsIGNvbnN0YW50IGludGVnZXIgYXMgdGhlIGxhc3QgdGVybS5cbiAqIElmIHRoZSByZXN1bHQgaXMgYSBzdW0sIGl0IHdpbGwgbm90IGhhdmUgdGhlIGludGVnZXIgMCBhcyBhIHRlcm0uXG4gKiBJZiBhbGwgZ2l2ZW4gdGVybXMgc3VtIHRvIHplcm8sIHRoZSBpbnRlZ2VyIHplcm8gd2lsbCBiZSByZXR1cm5lZC5cbiAqIEBwYXJhbSB0ZXJtc1xuICovXG5mdW5jdGlvbiBzdW1FdmFsSW50ZWdlclRlcm1zKC4uLnRlcm1zKSB7XG4gICAgY29uc3QgaW50ZWdlcnMgPSB0ZXJtcy5maWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpLmxlbmd0aDtcbiAgICBpZiAoaW50ZWdlcnMgPCAyKVxuICAgICAgICByZXR1cm4gc3VtKC4uLnRlcm1zKTtcbiAgICBjb25zdCBub25JbnRUZXJtcyA9IHRlcm1zLmZpbHRlcihlID0+ICEoZSBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKSk7XG4gICAgY29uc3QgaW50VGVybSA9IHRlcm1zLmZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcilcbiAgICAgICAgLm1hcChlID0+IGUpXG4gICAgICAgIC5yZWR1Y2UoKGEsIGIpID0+IG51bShhLnZhbHVlICsgYi52YWx1ZSkpO1xuICAgIGlmIChpbnRUZXJtLnZhbHVlID09IDApIHtcbiAgICAgICAgaWYgKG5vbkludFRlcm1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBzdW0oLi4ubm9uSW50VGVybXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5vbkludFRlcm1zLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9uSW50VGVybXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaW50VGVybTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKG5vbkludFRlcm1zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gaW50VGVybTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzdW0oLi4ubm9uSW50VGVybXMsIGludFRlcm0pO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5zdW1FdmFsSW50ZWdlclRlcm1zID0gc3VtRXZhbEludGVnZXJUZXJtcztcbi8qKlxuICogUmV0dXJucyB0aGUgc3VtIG9mIHRoZSBnaXZlbiB0ZXJtcy4gRXZhbHVhdGVzIGFueVxuICogaW50ZWdlciB0ZXJtcy4gQWRkaXRpb25hbGx5IGNhbmNlbHMgb3V0IGFueSBwb3NpdGl2ZVxuICogbmVnYXRpdmUgdGVybXMuXG4gKlxuICogU2ltcGxpZmllc1xuICogIHggKyBhIC0gYSA9IHhcbiAqIHggKyBhYiAtIGFiID0geFxuICogeCArIDJhYiAtIDJhYiA9IHhcbiAqIGEgLSBhID0gMFxuICpcbiAqIERvZXNuJ3QgYWZmZWN0XG4gKiAgeCArIDJhIC0gYVxuICogQHBhcmFtIHRlcm1zXG4gKi9cbmZ1bmN0aW9uIHN1bUludHVpdGl2ZSguLi50ZXJtcykge1xuICAgIGNvbnN0IGludEV2YWwgPSBzdW1FdmFsSW50ZWdlclRlcm1zKC4uLnRlcm1zKTtcbiAgICBpZiAoaW50RXZhbC5jbGFzcyAhPSBTdW1fMS5TdW1UeXBlKVxuICAgICAgICByZXR1cm4gaW50RXZhbDtcbiAgICB0ZXJtcyA9IFsuLi5pbnRFdmFsLnRlcm1zXTtcbiAgICAvLyBGaW5kIG9wcG9zaXRlIHBhaXJzXG4gICAgLy8gVGhleSB3aWxsIHRha2UgdGhlIGZvcm1cbiAgICAvLyAgICAgIGV4cCArIC0xICogZXhwXG4gICAgLy8gSSBhc3N1bWUgaGVyZSB0aGF0IHRoZSBvbmx5IHdheSB0byBub3RhdGVcbiAgICAvLyBuZWdhdGl2aXR5IGlzIGJ5IG11bHRpcGx5aW5nIGJ5IC0xXG4gICAgdGVybXM6IGZvciAoY29uc3QgdCBvZiB0ZXJtcykge1xuICAgICAgICBjb25zdCBvdGhlclRlcm1zID0gWy4uLnRlcm1zXTtcbiAgICAgICAgcmVtb3ZlKG90aGVyVGVybXMsIHQpO1xuICAgICAgICBmb3IgKGNvbnN0IG90aGVyIG9mIG90aGVyVGVybXMpIHtcbiAgICAgICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG90aGVyLmlzTmVnYXRpb24gJiYgb3RoZXIubmVnYXRpb24gPT09IHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlKHRlcm1zLCBvdGhlcik7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZSh0ZXJtcywgdCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIHRlcm1zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodGVybXMubGVuZ3RoID09IDApXG4gICAgICAgIHJldHVybiBJbnRlZ2VyXzEuSW50ZWdlci5vZigwKTtcbiAgICBlbHNlIGlmICh0ZXJtcy5sZW5ndGggPT0gMSlcbiAgICAgICAgcmV0dXJuIHRlcm1zWzBdO1xuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIHN1bSguLi50ZXJtcyk7XG59XG5leHBvcnRzLnN1bUludHVpdGl2ZSA9IHN1bUludHVpdGl2ZTtcbi8qKlxuICogRmluZHMgdGhlIHN1bSBvZiB0aGUgZ2l2ZW4gdGVybXMgb3IgaWYgb25seSAxXG4gKiBpcyBnaXZlbiByZXR1cm5zIHRoYXQgdGVybS5cbiAqIEBwYXJhbSB0ZXJtc1xuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gc3VtT3JOb3QoLi4udGVybXMpIHtcbiAgICBpZiAodGVybXMubGVuZ3RoID09IDEpXG4gICAgICAgIHJldHVybiB0ZXJtc1swXTtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBzdW0oLi4udGVybXMpO1xufVxuZXhwb3J0cy5zdW1Pck5vdCA9IHN1bU9yTm90O1xuLyoqXG4gKiBQcm9kdWNlcyBhIHByb2R1Y3QgZnJvbSB0aGUgZ2l2ZW4gZmFjdG9yc1xuICogd2hlcmUgdGhlIGZhY3RvcnMgYXJlIG9yZGVyZWQgYWNjb3JkaW5nIHRvIGNvbnZlbnRpb24uXG4gKiBAcGFyYW0gZmFjdG9ycyBBdCBsZWFzdCAyXG4gKi9cbmZ1bmN0aW9uIG9yZGVyZWRQcm9kdWN0KC4uLmZhY3RvcnMpIHtcbiAgICBmYWN0b3JzLnNvcnQoUHJvZHVjdF8xLmZhY3Rvck9yZGVyKTtcbiAgICByZXR1cm4gcHJvZHVjdCguLi5mYWN0b3JzKTtcbn1cbmV4cG9ydHMub3JkZXJlZFByb2R1Y3QgPSBvcmRlcmVkUHJvZHVjdDtcbi8qKlxuICogUmVtb3ZlcyB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgdGhlIGdpdmVuXG4gKiBlbGVtZW50IGZyb20gdGhlIGFycmF5LiBSZWFsbHkgc2hvdWxkIGJlXG4gKiBwYXJ0IG9mIHRoZSBzdGQgbGlicmFyeS4gSWRlbnRpZmllcyBvYmplY3RcbiAqIHdpdGggcmVmZXJlbmNpYWwgZXF1YWxpdHkuXG4gKiBAcGFyYW0gYXJyYXlcbiAqIEBwYXJhbSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZShhcnJheSwgZWxlbWVudCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFycmF5W2ldID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLnJlbW92ZSA9IHJlbW92ZTtcbi8qKlxuICogR2V0cyBhIG5ldyBhcnJheSB3aXRob3V0IHRoZSBmaXJzdCBpbnN0YW5jZSBvZiB0aGUgZ2l2ZW5cbiAqIGVsZW1lbnQuIFJlYWxseSBzaG91bGQgYmVcbiAqIHBhcnQgb2YgdGhlIHN0ZCBsaWJyYXJ5LiBJZGVudGlmaWVzIG9iamVjdFxuICogd2l0aCByZWZlcmVuY2lhbCBlcXVhbGl0eS5cbiAqIEBwYXJhbSBhcnJheVxuICogQHBhcmFtIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlTmV3KGFycmF5LCBlbGVtZW50KSB7XG4gICAgY29uc3QgaW5wdXQgPSBbLi4uYXJyYXldO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlucHV0W2ldID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgICBpbnB1dC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiR2l2ZW4gYXJyYXkgZG9lc24ndCBjb250YWluIGVsZW1lbnQgXCIgKyBlbGVtZW50KTtcbn1cbmV4cG9ydHMucmVtb3ZlTmV3ID0gcmVtb3ZlTmV3O1xuZnVuY3Rpb24gcHJvZHVjdCguLi5mYWN0b3JzKSB7XG4gICAgZmFjdG9ycy5mb3JFYWNoKGYgPT4gKDAsIGFzc2VydF8xLmFzc2VydCkoZiAhPSBudWxsICYmIGYgIT0gdW5kZWZpbmVkLCBcIk1ha2luZyBwcm9kdWN0IHdpdGggbnVsbCBvciB1bmRlZmluZWQgZmFjdG9yXCIpKTtcbiAgICByZXR1cm4gUHJvZHVjdF8xLlByb2R1Y3Qub2YoZmFjdG9ycyk7XG59XG5leHBvcnRzLnByb2R1Y3QgPSBwcm9kdWN0O1xuZnVuY3Rpb24gbmVnYXRpdmUoZXhwcmVzc2lvbikge1xuICAgIGlmIChleHByZXNzaW9uIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpXG4gICAgICAgIHJldHVybiBJbnRlZ2VyXzEuSW50ZWdlci5vZigtZXhwcmVzc2lvbi52YWx1ZSk7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gUHJvZHVjdF8xLlByb2R1Y3Qub2YoW0ludGVnZXJfMS5JbnRlZ2VyLm9mKC0xKSwgZXhwcmVzc2lvbl0pO1xufVxuZXhwb3J0cy5uZWdhdGl2ZSA9IG5lZ2F0aXZlO1xuZnVuY3Rpb24gbnVtKHZhbCkge1xuICAgIHJldHVybiBJbnRlZ2VyXzEuSW50ZWdlci5vZih2YWwpO1xufVxuZXhwb3J0cy5udW0gPSBudW07XG5mdW5jdGlvbiB2KHN5bWJvbCkge1xuICAgIHJldHVybiBWYXJpYWJsZV8xLlZhcmlhYmxlLm9mKHN5bWJvbCk7XG59XG5leHBvcnRzLnYgPSB2O1xuZnVuY3Rpb24gaW50KGludGVncmFuZCwgcmVzcGVjdFRvKSB7XG4gICAgcmV0dXJuIEludGVncmFsXzEuSW50ZWdyYWwub2YoaW50ZWdyYW5kLCByZXNwZWN0VG8pO1xufVxuZXhwb3J0cy5pbnQgPSBpbnQ7XG5mdW5jdGlvbiBlcXVpdmFsZW5jZUFyZ3VtZW50KGZpcnN0LCBzZWNvbmQsIGV4cGxhbmF0aW9uKSB7XG4gICAgcmV0dXJuIG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KHNldE9mKGZpcnN0KSwge1xuICAgICAgICBuOiBmaXJzdCxcbiAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICBuMTogc2Vjb25kLFxuICAgIH0sIGV4cGxhbmF0aW9uKTtcbn1cbmV4cG9ydHMuZXF1aXZhbGVuY2VBcmd1bWVudCA9IGVxdWl2YWxlbmNlQXJndW1lbnQ7XG4vKipcbiAqXG4gKiBAcmV0dXJucyBUaGUgcHJvZHVjdCBvZiB0aGUgZ2l2ZW4gZmFjdG9ycywgb3IgdGhlIG9ubHkgZmFjdG9yIGdpdmVuXG4gKiBpZiBvbmx5IG9uZSBnaXZlbi4gVGhyb3dzIGlmIG5vIGV4cHJlc3Npb25zIGFyZSBnaXZlbi5cbiAqL1xuZnVuY3Rpb24gcHJvZHVjdE9yTm90KC4uLmV4cHJlc3Npb25zKSB7XG4gICAgKDAsIGFzc2VydF8xLmFzc2VydCkoZXhwcmVzc2lvbnMubGVuZ3RoID4gMCk7XG4gICAgaWYgKGV4cHJlc3Npb25zLmxlbmd0aCA9PSAxKVxuICAgICAgICByZXR1cm4gZXhwcmVzc2lvbnNbMF07XG4gICAgcmV0dXJuIHByb2R1Y3QoLi4uZXhwcmVzc2lvbnMpO1xufVxuZXhwb3J0cy5wcm9kdWN0T3JOb3QgPSBwcm9kdWN0T3JOb3Q7XG4vKipcbiAqIEByZXR1cm5zIFRoZSBwcm9kdWN0IG9mIHRoZSBnaXZlbiB0ZXJtcyBleGxjdWRpbmcgdGhlIGZpcnN0IGlmXG4gKiAgICAgICAgICBpdCdzIG9uZS4gSWYgdGhlIHJlc3VsdGluZyB0ZXJtcyBsaXN0IGlzIG9ubHkgb25lIHRlcm0sXG4gKiAgICAgICAgICByZXR1cm5zIHRoZSBvbmx5IHRlcm0uXG4gKi9cbmZ1bmN0aW9uIHByb2R1Y3RBbmROb3RUaW1lc09uZSguLi5leHByZXNzaW9ucykge1xuICAgIGlmIChleHByZXNzaW9uc1swXSBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyICYmIGV4cHJlc3Npb25zWzBdLnZhbHVlID09IDEpIHtcbiAgICAgICAgZXhwcmVzc2lvbnMuc2hpZnQoKTtcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RPck5vdCguLi5leHByZXNzaW9ucyk7XG4gICAgfVxuICAgIHJldHVybiBwcm9kdWN0T3JOb3QoLi4uZXhwcmVzc2lvbnMpO1xufVxuZXhwb3J0cy5wcm9kdWN0QW5kTm90VGltZXNPbmUgPSBwcm9kdWN0QW5kTm90VGltZXNPbmU7XG5mdW5jdGlvbiBzZXRPZiguLi5leHByZXNzaW9ucykge1xuICAgIGNvbnN0IG91dCA9IG5ldyBTZXQoKTtcbiAgICBleHByZXNzaW9ucy5mb3JFYWNoKGUgPT4gb3V0LmFkZChlKSk7XG4gICAgcmV0dXJuIG91dDtcbn1cbmV4cG9ydHMuYSA9IHYoJ2EnKTtcbmV4cG9ydHMuYiA9IHYoJ2InKTtcbmV4cG9ydHMuYyA9IHYoJ2MnKTtcbmV4cG9ydHMuZCA9IHYoJ2QnKTtcbmV4cG9ydHMuZSA9IHYoJ2UnKTtcbmV4cG9ydHMuZiA9IHYoJ2YnKTtcbmV4cG9ydHMueCA9IHYoJ3gnKTtcbmV4cG9ydHMueSA9IHYoJ3knKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HaXZlbkVkZ2UgPSBleHBvcnRzLkFyZ3VtZW50RWRnZSA9IGV4cG9ydHMuR3JhcGggPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4vQXJndW1lbnRcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0XCIpO1xuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBncmFwaCBvZiBleHByZXNzaW9ucyBhbmQgc3RhdGVtZW50c1xuICogaW5jbHVkaW5nIGV2ZXJ5dGhpbmcgd2Uga25vdyBhYm91dCBhIHByb2JsZW0uXG4gKiBDb25uZWN0cyBHcmFwaE5vZGVzIHZpYSBJbmZlcmVuY2VzIGZvciBlZGdlcy5cbiAqXG4gKiBJdCdzIGEgZGlncmFwaC5cbiAqL1xuY2xhc3MgR3JhcGgge1xuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gZXhwcmVzc2lvbiB0byB0aGUgcHJvYmxlbS5cbiAgICAgKiBAcGFyYW0gbm9kZVxuICAgICAqIEByZXR1cm5zIHRoZSBzYW1lIGdyYXBoIGZvciBjaGFpbmluZy5cbiAgICAgKi9cbiAgICBhZGROb2RlKG5vZGUpIHtcbiAgICAgICAgdGhpcy5ub2Rlcy5hZGQobm9kZSk7XG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgQXJndW1lbnRfMS5Bcmd1bWVudCkge1xuICAgICAgICAgICAgdGhpcy5hZGRBcmd1bWVudChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcE9rKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGQgYSByZWxhdGlvbnNoaXAgYmV0d2VlbiB0d28gZWxlbWVudHMgZ2l2ZW4gYnkgdGhlIHVzZXIgdG8gdGhlIGdyYXBoLlxuICAgICAqIFNob3VsZCBub3QgYmUgY2FsbGVkIHRvIGFkZCBkZXJpdmVkIHRydXRocyBiYyB0aGlzIHdvbid0IHN0b3JlIGFuIGV4cGxhbmF0aW9uLlxuICAgICAqIEFkZHMgZ2l2ZW4gbm9kZXMgaWYgdGhleSBhcmVuJ3QgYWxyZWFkeSBvbiB0aGUgZ3JhcGguXG4gICAgICogQHBhcmFtIG5cbiAgICAgKiBAcGFyYW0gbjFcbiAgICAgKiBAcGFyYW0gclxuICAgICAqIEByZXR1cm5zIHNlbGYgZm9yIGNoYWluaW5nXG4gICAgICovXG4gICAgYWRkUmVsYXRpb25zaGlwKG4sIG4xLCByKSB7XG4gICAgICAgIHRoaXMuYWRkTm9kZShuKTtcbiAgICAgICAgdGhpcy5hZGROb2RlKG4xKTtcbiAgICAgICAgLy8gRGVmaW5lZCBib3RoIHdheXMgYmVjYXVzZSB0aGUgdXNlciBpcyBnaXZpbmcgaXRcbiAgICAgICAgdGhpcy5hZGRFZGdlKG4sIG4xLCBuZXcgR2l2ZW5FZGdlKHIpKTtcbiAgICAgICAgdGhpcy5hZGRFZGdlKG4xLCBuLCBuZXcgR2l2ZW5FZGdlKHIpKTtcbiAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKG4sIG4xKTtcbiAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKG4xLCBuKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBub2RlIHJlcHJlc2VudGluZyBhbiBhY3VtdWxhdGlvbiBvZiBmYWN0c1xuICAgICAqIHRoYXQgbGVhZHMgdG8gYSBjb25jbHVzaW9uLlxuICAgICAqIEBwYXJhbSBhXG4gICAgICogQHJldHVybnMgdGhlIHNhbWUgZ3JhcGggZm9yIGNoYWluaW5nLlxuICAgICAqL1xuICAgIGFkZEFyZ3VtZW50KGEpIHtcbiAgICAgICAgdGhpcy5ub2Rlcy5hZGQoYSk7XG4gICAgICAgIC8vIEFkZCB0aGUgZ3JvdW5kc1xuICAgICAgICBmb3IgKGNvbnN0IGdyb3VuZCBvZiBhLmdyb3VuZHMpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZXMuYWRkKGdyb3VuZCk7XG4gICAgICAgICAgICB0aGlzLmFkZENvbm5lY3Rpb24oZ3JvdW5kLCBhKTtcbiAgICAgICAgICAgIHRoaXMuYWRkRWRnZShncm91bmQsIGEsIEFyZ3VtZW50RWRnZS5Ubyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIHRoZSBjbGFpbVxuICAgICAgICBjb25zdCBjbGFpbSA9IGEuY2xhaW07XG4gICAgICAgIHRoaXMuYWRkTm9kZShjbGFpbS5uKTtcbiAgICAgICAgdGhpcy5hZGROb2RlKGNsYWltLm4xKTtcbiAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKGEsIGNsYWltLm4pO1xuICAgICAgICB0aGlzLmFkZEVkZ2UoYSwgY2xhaW0ubiwgQXJndW1lbnRFZGdlLkZyb20pO1xuICAgICAgICB0aGlzLmFkZENvbm5lY3Rpb24oYSwgY2xhaW0ubjEpO1xuICAgICAgICB0aGlzLmFkZEVkZ2UoYSwgY2xhaW0ubjEsIEFyZ3VtZW50RWRnZS5Gcm9tKTtcbiAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKGNsYWltLm4sIGNsYWltLm4xKTtcbiAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKGNsYWltLm4xLCBjbGFpbS5uKTtcbiAgICAgICAgdGhpcy5hZGRFZGdlKGNsYWltLm4sIGNsYWltLm4xLCBhKTtcbiAgICAgICAgdGhpcy5hZGRFZGdlKGNsYWltLm4xLCBjbGFpbS5uLCBhKTtcbiAgICAgICAgdGhpcy5yZXBPaygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMgdGhlIHNhbWUgZ3JhcGggZm9yIGNoYWluaW5nLlxuICAgICAqL1xuICAgIGFkZEFyZ3VtZW50cyguLi5hKSB7XG4gICAgICAgIGEuZm9yRWFjaChhcmcgPT4gdGhpcy5hZGRBcmd1bWVudChhcmcpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbmVpZ2hib3JzIG9mIGEgbm9kZS5cbiAgICAgKiBAcGFyYW0gbm9kZVxuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24gTm9kZXMgdGhhdCBhcmUgYWRqYWNlbnQgdG8gdGhpcyBub2RlLCBmcm9tIHRoaXMgbm9kZSwgb3IgZWl0aGVyLlxuICAgICAqIEByZXR1cm5zIFVuZGVmaW5lZCBpZiB0aGUgbm9kZSBpc24ndCBpbiB0aGlzIGdyYXBoLiBPdGhlcndpc2UsIGEgc2V0IG9mIGNvbm5lY3RlZCBub2Rlcy5cbiAgICAgKiAgICAgICAgICBJZiB0aGUgbm9kZSBpcyBpbiB0aGUgZ3JhcGggYnV0IGlzbid0IGNvbm5lY3RlZCB0byBhbnl0aGluZywgcmV0dXJucyBlbXB0eSBzZXQuXG4gICAgICovXG4gICAgZ2V0TmVpZ2hib3JzKG5vZGUsIGRpcmVjdGlvbikge1xuICAgICAgICBpZiAoIXRoaXMubm9kZXMuaGFzKG5vZGUpKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcIm91dFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNldCh0aGlzLmNvbm5lY3Rpb25zLmdldChub2RlKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFkamFjZW50VG8gPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgbiBvZiB0aGlzLm5vZGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9ucy5nZXQobik/Lmhhcyhub2RlKSlcbiAgICAgICAgICAgICAgICBhZGphY2VudFRvLmFkZChuKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwiaW5cIilcbiAgICAgICAgICAgIHJldHVybiBhZGphY2VudFRvO1xuICAgICAgICBmb3IgKGNvbnN0IG4gb2YgdGhpcy5jb25uZWN0aW9ucy5nZXQobm9kZSkgPz8gW10pXG4gICAgICAgICAgICBhZGphY2VudFRvLmFkZChuKTtcbiAgICAgICAgcmV0dXJuIGFkamFjZW50VG87XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgdGhlIG51bWJlciBvZiBlZGdlcyB0aGlzIG5vZGUgaGFzLlxuICAgICAqIEBwYXJhbSBub2RlIFRoZSBub2RlIGJlaW5nIGNvbnNkZXJlZC5cbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIENvdW50IG9ubHkgdGhlIGVkZ2VzIGdvaW5nIHRvd2FyZHMgdGhpcyBub2RlLCBhd2F5IGZyb21cbiAgICAgKiAgICAgICAgICBpdCwgb3IgYm90aC5cbiAgICAgKiBAcmV0dXJucyA+PSAwLCB1bmRlZmluZWQgaWYgdGhlIGdpdmVuIG5vZGUgaXNuJ3QgaW4gdGhlIGdyYXBoLlxuICAgICAqL1xuICAgIGdldERlZ3JlZShub2RlLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKCF0aGlzLm5vZGVzLmhhcyhub2RlKSlcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJvdXRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbnMuZ2V0KG5vZGUpPy5zaXplID8/IDA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRlZ0luID0gMDtcbiAgICAgICAgdGhpcy5ub2Rlcy5mb3JFYWNoKG4gPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbnMuZ2V0KG4pID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9ucy5nZXQobikuaGFzKG5vZGUpKVxuICAgICAgICAgICAgICAgIGRlZ0luKys7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwiaW5cIikge1xuICAgICAgICAgICAgcmV0dXJuIGRlZ0luO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWdJbiArICh0aGlzLmNvbm5lY3Rpb25zLmdldChub2RlKT8uc2l6ZSA/PyAwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIG4gTm9kZSBpbiB0aGUgZ3JhcGguXG4gICAgICogQHBhcmFtIG4xIEluIHRoZSBncmFwaC5cbiAgICAgKiBAcmV0dXJucyBVbmRlZmluZWQgaWYgZWl0aGVyIG5vZGUgaXNuJ3QgaW4gdGhlIGdyYXBoIG9yIHRoZXkncmUgbm90XG4gICAgICogY29ubmVjdGVkLlxuICAgICAqL1xuICAgIGdldEVkZ2UobiwgbjEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWRnZXMuZ2V0KG4pPy5nZXQobjEpO1xuICAgIH1cbiAgICBjb250YWlucyhub2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVzLmhhcyhub2RlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMgQSBuZXcgc2V0IGNvbnRhaW5pbmcgYWxsIHRoZSBub2RlcyBpbiB0aGUgZ3JhcGhcbiAgICAgKi9cbiAgICBnZXROb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZXQodGhpcy5ub2Rlcyk7XG4gICAgfVxuICAgIGdldEVkZ2VzKCkge1xuICAgICAgICBjb25zdCBvdXQgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuZWRnZXMuZm9yRWFjaCgobWFwLCBmaXJzdCkgPT4ge1xuICAgICAgICAgICAgbWFwLmZvckVhY2goKGVkZ2UsIHNlY29uZCkgPT4ge1xuICAgICAgICAgICAgICAgIG91dC5hZGQoeyBuOiBmaXJzdCwgbjE6IHNlY29uZCwgZTogZWRnZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgbnVtTm9kZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVzLnNpemU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYWxsIGdyYXBoIG5vZGVzIGFuZCBlZGdlcyB0byB0aGlzIG9uZS5cbiAgICAgKiBAcGFyYW0gZ3JhcGhcbiAgICAgKiBAcmV0dXJucyB0aGUgc2FtZSBncmFwaCBmb3IgY2hhaW5pbmcuXG4gICAgICovXG4gICAgYWRkR3JhcGgoZ3JhcGgpIHtcbiAgICAgICAgZ3JhcGgubm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9kZXMuYWRkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgZ3JhcGguZWRnZXMuZm9yRWFjaCgobWFwLCBub2RlMSkgPT4ge1xuICAgICAgICAgICAgbWFwLmZvckVhY2goKGVkZ2UsIG5vZGUyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVkZ2UgaW5zdGFuY2VvZiBBcmd1bWVudF8xLkFyZ3VtZW50KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEFyZ3VtZW50KGVkZ2UpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVkZ2UgPT0gXCJzdXBwb3J0c1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRWRnZShub2RlMSwgbm9kZTIsIEFyZ3VtZW50RWRnZS5Ubyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbihub2RlMSwgbm9kZTIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlZGdlID09IFwiY2xhaW1zXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFZGdlKG5vZGUxLCBub2RlMiwgQXJndW1lbnRFZGdlLkZyb20pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbm5lY3Rpb24obm9kZTEsIG5vZGUyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIEVkZ2UgVHlwZVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZXBPaygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGxldCBvdXQgPSBcIkdyYXBoKFYgPSB7XCI7XG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XG4gICAgICAgICAgICBvdXQgKz0gbm9kZS50b1N0cmluZygpICsgXCIsXCI7XG4gICAgICAgIH1cbiAgICAgICAgb3V0ID0gb3V0LnN1YnN0cmluZygwLCBvdXQubGVuZ3RoIC0gMSkgKyBcIn0sIEUgPSB7XCI7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnMuZm9yRWFjaCgoc2V0LCBzcmMpID0+IHtcbiAgICAgICAgICAgIHNldC5mb3JFYWNoKGRlc3QgPT4ge1xuICAgICAgICAgICAgICAgIG91dCArPSBzcmMudG9TdHJpbmcoKSArIFwiIC0+IFwiICsgZGVzdC50b1N0cmluZygpICsgXCIsIFwiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBvdXQgKz0gXCJ9IEVkZ2UgQ291bnQ6IFwiICsgdGhpcy5jb25uZWN0aW9ucy5zaXplO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICBhZGRDb25uZWN0aW9uKG4sIG4xKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25zLmdldChuKSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLnNldChuLCBuZXcgU2V0KCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnMuZ2V0KG4pLmFkZChuMSk7XG4gICAgfVxuICAgIGFkZEVkZ2UobiwgbjEsIGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZWRnZXMuZ2V0KG4pID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lZGdlcy5zZXQobiwgbmV3IE1hcCgpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVkZ2VzLmdldChuKS5zZXQobjEsIGUpO1xuICAgIH1cbiAgICByZXBPaygpIHtcbiAgICAgICAgdGhpcy5ub2Rlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPSB1bmRlZmluZWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQWxsIGNvbm5lY3Rpb25zL2VkZ2VzIGhhdmUgbm9kZXNcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLm5vZGVzLmhhcyhrZXkpKTtcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2gobiA9PiB7XG4gICAgICAgICAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5ub2Rlcy5oYXMobikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVkZ2VzLmZvckVhY2goKG1hcCwgZmlyc3QpID0+IHtcbiAgICAgICAgICAgIG1hcC5mb3JFYWNoKChlZGdlLCBzZWNvbmQpID0+IHtcbiAgICAgICAgICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLm5vZGVzLmhhcyhmaXJzdCkpO1xuICAgICAgICAgICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMubm9kZXMuaGFzKHNlY29uZCkpO1xuICAgICAgICAgICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMuY29ubmVjdGlvbnMuZ2V0KGZpcnN0KS5oYXMoc2Vjb25kKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vZGVzID0gbmV3IFNldCgpO1xuICAgIC8vIFF1aWNrbHkgYWNjZXNzIGFsbCBjb25uZWN0aW9ucyBvZiBhIG5vZGVcbiAgICBjb25uZWN0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAvLyBEZXRlcm1pbmUgdGhlIHR5cGUgb2YgY29ubmVjdGlvbiBiZXR3ZWVuIHR3byBub2Rlc1xuICAgIGVkZ2VzID0gbmV3IE1hcCgpO1xufVxuZXhwb3J0cy5HcmFwaCA9IEdyYXBoO1xudmFyIEFyZ3VtZW50RWRnZTtcbihmdW5jdGlvbiAoQXJndW1lbnRFZGdlKSB7XG4gICAgQXJndW1lbnRFZGdlW1wiVG9cIl0gPSBcInN1cHBvcnRzXCI7XG4gICAgQXJndW1lbnRFZGdlW1wiRnJvbVwiXSA9IFwiY2xhaW1zXCI7XG59KShBcmd1bWVudEVkZ2UgPSBleHBvcnRzLkFyZ3VtZW50RWRnZSB8fCAoZXhwb3J0cy5Bcmd1bWVudEVkZ2UgPSB7fSkpO1xuLyoqXG4gKiBDb21tdW5pY2F0ZXMgYSByZWxhdGlvbmhpcCBnaXZlbiBieSB0aGUgdXNlci5cbiAqL1xuY2xhc3MgR2l2ZW5FZGdlIHtcbiAgICBjb25zdHJ1Y3RvcihyKSB7XG4gICAgICAgIHRoaXMuciA9IHI7XG4gICAgfVxuICAgIHI7XG59XG5leHBvcnRzLkdpdmVuRWRnZSA9IEdpdmVuRWRnZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HcmFwaE1pbmlwdWxhdG9yID0gdm9pZCAwO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi91dGlsL2Fzc2VydFwiKTtcbi8qKlxuICogVG9vbCB0byBkbyBvcGVyYXRpb25zIG9uIGdyYXBocy5cbiAqL1xuY2xhc3MgR3JhcGhNaW5pcHVsYXRvciB7XG4gICAgLyoqXG4gICAgICogRmluZCBub2RlcyBvZiBjb21wb25lbnRzIG9mIGEgZ3JhcGggd2hlcmUgb25seSBlZGdlcyBmb3Igd2hpY2hcbiAgICAgKiB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gcmV0dXJucyB0cnVlIGFyZSBjb25zaWRlcmVkLlxuICAgICAqIEBwYXJhbVxuICAgICAqIEBwYXJhbSBpc0Nvbm5lY3RlZFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDb21wb25lbnROb2RlcyhpbnB1dCwgaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgY29uc3QgaW5jbHVkZWROb2RlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIGlucHV0LmdldE5vZGVzKCkpIHtcbiAgICAgICAgICAgIGlmIChpbmNsdWRlZE5vZGVzLmhhcyhub2RlKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0QWxsQ29ubmVjdGVkKG4pIHtcbiAgICAgICAgICAgICAgICBpbmNsdWRlZE5vZGVzLmFkZChuKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50LmhhcyhuKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5hZGQobik7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBuZWlnaGJvciBvZiBpbnB1dC5nZXROZWlnaGJvcnMobiwgXCJib3RoXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNDb25uZWN0ZWQoaW5wdXQuZ2V0RWRnZShuLCBuZWlnaGJvcikpKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIGdldEFsbENvbm5lY3RlZChuZWlnaGJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdldEFsbENvbm5lY3RlZChub2RlKTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5hZGQobm9kZSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFkZChjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKGluY2x1ZGVkTm9kZXMuc2l6ZSA9PSBpbnB1dC5udW1Ob2RlcygpKTtcbiAgICAgICAgLy8gQXNzZXJ0IGNvbXBvbmVudHMgYXJlIHBhaXJ3aXNlIGRpc2pvaW50IG9mIHByb2JsZW1zIHNob3cgdXBcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgZXZlcnkgZWRnZSBpbiB0aGUgZ3JhcGguXG4gICAgICogQHBhcmFtIGlucHV0XG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UmVsYXRpb25zKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IG91dCA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgaW5wdXQuZ2V0Tm9kZXMoKSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBvdGhlciBvZiBpbnB1dC5nZXROZWlnaGJvcnMobm9kZSwgXCJvdXRcIikpIHtcbiAgICAgICAgICAgICAgICBvdXQucHVzaCh7IGZpcnN0OiBub2RlLCBzZWNvbmQ6IG90aGVyLCBlOiBpbnB1dC5nZXRFZGdlKG5vZGUsIG90aGVyKSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIGdyYXBoIGludG8gc2V0cyBvZlxuICAgICAqIG5vZGVzIGdyb3VwZWQgYnkgZGVwdGggZnJvbSBhIGNlbnRlciBub2RlLlxuICAgICAqIEFzc3VtZXMgdGhlIGdyYXBoIGlzIGNvbm5lY3RlZC5cbiAgICAgKiBAcGFyYW0gcm9vdE5vZGVzIENvbnRhaW5zIGF0IGxlYXN0IG9uZSBub2RlIGluIHRoZSBncmFwaC5cbiAgICAgKiBAcGFyYW0gY291bnQgRnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIGlmIGFueSBnaXZlbiBub2RlIHNob3VsZCBiZVxuICAgICAqIGluY2x1ZGVkIGluIHRoZSBkZXB0aCBjb3VudC4gRGVmYXVsdHMgdG8gY291bnRpbmcgYWxsIG5vZGVzLiBOb2RlcyB0aGF0XG4gICAgICogYXJlbid0IGluY2x1ZGVkIHdvbid0IGJlIGluIHRoZSByZXR1cm5lZCB2YWx1ZS5cbiAgICAgKiBAcmV0dXJucyBNYXAgZnJvbSBkZXB0aCBpbiBncmFwaCB0byBhIHNldCBvZiBub2RlcyBhdCB0aGF0IGRlcHRoLlxuICAgICAqXG4gICAgICovXG4gICAgc3RhdGljIGdldExldmVscyhpbnB1dCwgcm9vdE5vZGVzLCBjb3VudCA9ICgpID0+IHRydWUpIHtcbiAgICAgICAgY29uc3Qgcm9vdHMgPSBuZXcgU2V0KHJvb3ROb2Rlcyk7XG4gICAgICAgIGNvbnN0IGRlcHRocyA9IG5ldyBNYXAoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlY3Vyc2l2ZWx5IG1hcHMgb3V0IGFsbCBub2RlcyBpbiB0aGUgZ3JhcGgsXG4gICAgICAgICAqIHB1dHRpbiB0aGVtIGluIHRoZSBkZXB0aHMgbWFwLlxuICAgICAgICAgKiBAcGFyYW0gbm9kZVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gbWFwTm9kZShub2RlLCBkZXB0aCA9IDApIHtcbiAgICAgICAgICAgIGlmIChyb290cy5oYXMobm9kZSkpIHtcbiAgICAgICAgICAgICAgICBkZXB0aCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGVwdGggPCAoZGVwdGhzLmdldChub2RlKSA/PyBOdW1iZXIuTUFYX1ZBTFVFKSkge1xuICAgICAgICAgICAgICAgIGRlcHRocy5zZXQobm9kZSwgZGVwdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmVpZ2hib3JzID0gWy4uLmlucHV0LmdldE5laWdoYm9ycyhub2RlLCBcImJvdGhcIildO1xuICAgICAgICAgICAgbmVpZ2hib3JzLmZpbHRlcih2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBmb3VuZCBhIHNob3J0ZXIgcGF0aCB0byBpdCBvciB0aGVyZSB3YXMgbm8gZm91bmQgcGF0aCB0byBpdFxuICAgICAgICAgICAgICAgIHJldHVybiAoZGVwdGhzLmdldCh2YWx1ZSkgPT0gdW5kZWZpbmVkIHx8IGRlcHRocy5nZXQodmFsdWUpID4gZGVwdGgpICYmIHZhbHVlICE9PSBub2RlO1xuICAgICAgICAgICAgfSkuZm9yRWFjaChuID0+IHtcbiAgICAgICAgICAgICAgICBtYXBOb2RlKG4sIGNvdW50KG5vZGUpID8gZGVwdGggKyAxIDogZGVwdGgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbWFwTm9kZShbLi4ucm9vdHNdWzBdKTtcbiAgICAgICAgY29uc3Qgb3V0ID0gbmV3IE1hcCgpO1xuICAgICAgICBkZXB0aHMuZm9yRWFjaCgoZGVwdGgsIG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmICghY291bnQobm9kZSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKG91dC5nZXQoZGVwdGgpID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG91dC5zZXQoZGVwdGgsIG5ldyBTZXQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXQuZ2V0KGRlcHRoKS5hZGQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBnaXZlbiBncmFwaCBpcyBjb25uZWN0ZWQsIG1lYW5pbmcgdGhhdFxuICAgICAqIGl0J3MgcG9zc2libGUgdG8gdHJhdmVyc2UgYmV0d2VlbiBhbnkgdHdvIG5vZGVzIG9uIHRoZSBncmFwaC5cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNDb25uZWN0ZWQoaW5wdXQpIHtcbiAgICAgICAgLy8gQ2hlY2sgZXZlcnkgbm9kZSBoYXMgYSBkZWdyZWUgb2YgMSBvciBtb3JlIG9yIGdyYXBoIG9ubHkgaGFzIDEgb3IgMCBlbGVtZW50c1xuICAgICAgICByZXR1cm4gWy4uLmlucHV0LmdldE5vZGVzKCldLm1hcChub2RlID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC5nZXREZWdyZWUobm9kZSwgXCJib3RoXCIpID4gMDtcbiAgICAgICAgfSkucmVkdWNlKChhLCBiKSA9PiBhICYmIGIpIHx8IGlucHV0Lm51bU5vZGVzKCkgPCAyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGaWx0ZXJzIGVkZ2VzIGxpc3QgcmV0dXJuaW5nIGEgbGlzdCB3aGVyZSBvbmx5IG9uZSBlZGdlXG4gICAgICogZnJvbSBhbnkgZWRnZSBsb29wcyBpcyBpbmNsdWRlZC5cbiAgICAgKiBGb3IgZXhhbXBsZSBpZiB0aGUgaW5wdXQgZWRnZXMgYXJlIGEgLT4gYiBhbmQgYiAtPiBhLFxuICAgICAqIHRoZSByZXN1bHQgd2lsbCBvbmx5IGNvbnRhaW4gYSAtPiBiLlxuICAgICAqIEBwYXJhbSBlZGdlc1xuICAgICAqL1xuICAgIHN0YXRpYyBkcm9wU3ltbWV0cmljKGVkZ2VzKSB7XG4gICAgICAgIGNvbnN0IG91dCA9IFtdO1xuICAgICAgICBmdW5jdGlvbiBhbHJlYWR5SGFzKGVkZ2UpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZSBvZiBvdXQpXG4gICAgICAgICAgICAgICAgaWYgKGVkZ2UubiA9PSBlLm4xICYmIGVkZ2UubjEgPT0gZS5uKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGVkZ2Ugb2YgZWRnZXMpIHtcbiAgICAgICAgICAgIGlmICghYWxyZWFkeUhhcyhlZGdlKSlcbiAgICAgICAgICAgICAgICBvdXQucHVzaChlZGdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbn1cbmV4cG9ydHMuR3JhcGhNaW5pcHVsYXRvciA9IEdyYXBoTWluaXB1bGF0b3I7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUmVsYXRpb25zaGlwID0gdm9pZCAwO1xuLyoqXG4gKiBBIHdheSBpbiB3aGljaCAyIGV4cHJlc3Npb25zIGNhbiBiZSByZWxhdGVkLlxuICovXG52YXIgUmVsYXRpb25zaGlwO1xuKGZ1bmN0aW9uIChSZWxhdGlvbnNoaXApIHtcbiAgICBSZWxhdGlvbnNoaXBbXCJFcXVhbFwiXSA9IFwiPVwiO1xufSkoUmVsYXRpb25zaGlwID0gZXhwb3J0cy5SZWxhdGlvbnNoaXAgfHwgKGV4cG9ydHMuUmVsYXRpb25zaGlwID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5EZXJpdmVyID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi9Bcmd1bWVudFwiKTtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuLi9leHByZXNzaW9ucy9FeHByZXNzaW9uXCIpO1xuY29uc3QgR3JhcGhfMSA9IHJlcXVpcmUoXCIuLi9HcmFwaFwiKTtcbmNvbnN0IEdyYXBoTWluaXB1bGF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HcmFwaE1pbmlwdWxhdG9yXCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuY29uc3QgcmVjdXJzaW9uXzEgPSByZXF1aXJlKFwiLi9yZWN1cnNpb25cIik7XG5jb25zdCBSZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuL1JlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZVwiKTtcbmNvbnN0IEFkZGl0aXZlSWRlbnRpdHlfMSA9IHJlcXVpcmUoXCIuL3NpbXBsaWZpY2F0aW9ucy9BZGRpdGl2ZUlkZW50aXR5XCIpO1xuY29uc3QgQXNzb2NpYXRpdmVQcm9wZXJ0eU9mUHJvZHVjdHNBbmRTdW1zXzEgPSByZXF1aXJlKFwiLi9zaW1wbGlmaWNhdGlvbnMvQXNzb2NpYXRpdmVQcm9wZXJ0eU9mUHJvZHVjdHNBbmRTdW1zXCIpO1xuY29uc3QgQ2FuY2VsTmVnYXRpdmVzXzEgPSByZXF1aXJlKFwiLi9zaW1wbGlmaWNhdGlvbnMvQ2FuY2VsTmVnYXRpdmVzXCIpO1xuY29uc3QgQ29tYmluZUNvbW1vbkZhY3RvcnNNdWx0aXBsaWNhdGlvbl8xID0gcmVxdWlyZShcIi4vc2ltcGxpZmljYXRpb25zL0NvbWJpbmVDb21tb25GYWN0b3JzTXVsdGlwbGljYXRpb25cIik7XG5jb25zdCBDb21iaW5lQ29tbW9uVGVybXNBZGRpdGlvbl8xID0gcmVxdWlyZShcIi4vc2ltcGxpZmljYXRpb25zL0NvbWJpbmVDb21tb25UZXJtc0FkZGl0aW9uXCIpO1xuY29uc3QgQ29tYmluZUludGVnZXJGYWN0b3JzXzEgPSByZXF1aXJlKFwiLi9zaW1wbGlmaWNhdGlvbnMvQ29tYmluZUludGVnZXJGYWN0b3JzXCIpO1xuY29uc3QgRGl2aWRlRnJhY3Rpb25zXzEgPSByZXF1aXJlKFwiLi9zaW1wbGlmaWNhdGlvbnMvRGl2aWRlRnJhY3Rpb25zXCIpO1xuY29uc3QgRGl2aXNpb25JZGVudGl0eV8xID0gcmVxdWlyZShcIi4vc2ltcGxpZmljYXRpb25zL0RpdmlzaW9uSWRlbnRpdHlcIik7XG5jb25zdCBFdmFsdWF0ZVN1bXNfMSA9IHJlcXVpcmUoXCIuL3NpbXBsaWZpY2F0aW9ucy9FdmFsdWF0ZVN1bXNcIik7XG5jb25zdCBFeHBvbmVudGlhbElkZW50aXR5XzEgPSByZXF1aXJlKFwiLi9zaW1wbGlmaWNhdGlvbnMvRXhwb25lbnRpYWxJZGVudGl0eVwiKTtcbmNvbnN0IEV4cG9uZW50VG9aZXJvXzEgPSByZXF1aXJlKFwiLi9zaW1wbGlmaWNhdGlvbnMvRXhwb25lbnRUb1plcm9cIik7XG5jb25zdCBNdWx0aXBsaWNhdGl2ZUlkZW50aXR5XzEgPSByZXF1aXJlKFwiLi9zaW1wbGlmaWNhdGlvbnMvTXVsdGlwbGljYXRpdmVJZGVudGl0eVwiKTtcbmNvbnN0IE11bHRpcGx5RXhwb25lbnRQb3dlcnNfMSA9IHJlcXVpcmUoXCIuL3NpbXBsaWZpY2F0aW9ucy9NdWx0aXBseUV4cG9uZW50UG93ZXJzXCIpO1xuY29uc3QgT3JkZXJTdW1zXzEgPSByZXF1aXJlKFwiLi9zaW1wbGlmaWNhdGlvbnMvT3JkZXJTdW1zXCIpO1xuY29uc3QgUG93ZXJSdWxlXzEgPSByZXF1aXJlKFwiLi9zaW1wbGlmaWNhdGlvbnMvUG93ZXJSdWxlXCIpO1xuY29uc3QgUHJvZHVjdFJ1bGVfMSA9IHJlcXVpcmUoXCIuL3NpbXBsaWZpY2F0aW9ucy9Qcm9kdWN0UnVsZVwiKTtcbmNvbnN0IFB1bGxDb25zdGFudHNGcm9tRGVyaXZhdGl2ZXNfMSA9IHJlcXVpcmUoXCIuL3NpbXBsaWZpY2F0aW9ucy9QdWxsQ29uc3RhbnRzRnJvbURlcml2YXRpdmVzXCIpO1xuY29uc3QgUXVvdGllbnRSdWxlXzEgPSByZXF1aXJlKFwiLi9zaW1wbGlmaWNhdGlvbnMvUXVvdGllbnRSdWxlXCIpO1xuY29uc3QgU3VtQ29lZmZpY2llbnRzT2ZBZGRlZFRlcm1zXzEgPSByZXF1aXJlKFwiLi9zaW1wbGlmaWNhdGlvbnMvU3VtQ29lZmZpY2llbnRzT2ZBZGRlZFRlcm1zXCIpO1xuY29uc3QgVVN1YnN0aXR1dGlvbl8xID0gcmVxdWlyZShcIi4vc2ltcGxpZmljYXRpb25zL1VTdWJzdGl0dXRpb25cIik7XG4vKipcbiAqIEhvbGRzIGEgc2luZ2xlIGdyYXBoIGFuZCBleHBhbmRzIGl0IHVzaW5nIHJ1bGVzLlxuICovXG5jbGFzcyBEZXJpdmVyIHtcbiAgICAvKipcbiAgICAgKiBHaXZlIGl0IHRoZSBncmFwaCB5b3UncmUgZ29pbmcgdG8gZXhwYW5kLlxuICAgICAqIEBwYXJhbSBncmFwaFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGdyYXBoKSB7XG4gICAgICAgIHRoaXMuZ3JhcGggPSBncmFwaDtcbiAgICAgICAgdGhpcy5zaW1wbGlmaWVkSW5Jc29sYXRpb24gPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMubm90U2ltcGxpZmlhYmxlID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFeHBhbmRzIHRoZSBncmFwaCBhcmJpdHJhcmlseS5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIHN0aWxsIHBvb3JseSBkZWZpbmVkLFxuICAgICAqIHZlcnkgZXhwZXJlbWVudGFsLlxuICAgICAqL1xuICAgIGV4cGFuZCgpIHtcbiAgICAgICAgLy8gU2ltcGxpZnkgYWxsIHRoZSBleHByZXNzaW9ucyB1c2luZyB0aGUgY29udGV4dGxlc3Mgc2ltcGxpZnlpbmcgcnVsZXNcbiAgICAgICAgLy8gRG8gdGhpcyB1bnRpbCB0aGVyZSdzIG5vdGhpbmcgbW9yZSB0byBzaW1wbGlmeVxuICAgICAgICB0aGlzLnNpbXBsaWZ5Tm9Db250ZXh0KCk7XG4gICAgICAgIHRoaXMuc2ltcGxpZnlOb0NvbnRleHQoKTtcbiAgICAgICAgdGhpcy5zaW1wbGlmeU5vQ29udGV4dCgpO1xuICAgICAgICB0aGlzLnNpbXBsaWZ5Tm9Db250ZXh0KCk7XG4gICAgICAgIHRoaXMuc2ltcGxpZnlOb0NvbnRleHQoKTtcbiAgICAgICAgdGhpcy5zaW1wbGlmeU5vQ29udGV4dCgpO1xuICAgICAgICB0aGlzLnNpbXBsaWZ5Tm9Db250ZXh0KCk7XG4gICAgICAgIHRoaXMuc2ltcGxpZnlOb0NvbnRleHQoKTtcbiAgICAgICAgdGhpcy5zaW1wbGlmeU5vQ29udGV4dCgpO1xuICAgICAgICB0aGlzLnNpbXBsaWZ5Tm9Db250ZXh0KCk7XG4gICAgICAgIHRoaXMuc2ltcGxpZnlOb0NvbnRleHQoKTtcbiAgICAgICAgdGhpcy5zaW1wbGlmeU5vQ29udGV4dCgpO1xuICAgICAgICAvL3RoaXMuYWxnZWJyYWljRXhwYW5zaW9uKClcbiAgICAgICAgLy90aGlzLmFsZ2VicmFpY0V4cGFuc2lvbigpXG4gICAgICAgIC8vdGhpcy5zaW1wbGlmeU5vQ29udGV4dCgpXG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IG1ha2VzIHN1cmUgdGhhdCBldmVyeSBub2RlIGluIHRoZSBncmFwaFxuICAgICAqIGlzIGVpdGhlciBzaW1wbGlmaWVkIChtZWFuaW5nIHRoZXJlIGlzIG5vIGNvbnRleHRsZXNzXG4gICAgICogcnVsZSB0aGF0IGNhbiBzaW1wbGlmeSBpdCBmdXJ0aGVyKSBvciBpcyBtYXJrZWQgZG93blxuICAgICAqIGFzIHVuc2ltcGxpZmlhYmxlLlxuICAgICAqL1xuICAgIHNpbXBsaWZ5Tm9Db250ZXh0KCkge1xuICAgICAgICBjb25zdCB1bnNpbXBsaWZpZWQgPSBbLi4udGhpcy5ncmFwaC5nZXROb2RlcygpXS5maWx0ZXIobiA9PiBuIGluc3RhbmNlb2YgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24pXG4gICAgICAgICAgICAubWFwKG4gPT4gbilcbiAgICAgICAgICAgIC5maWx0ZXIoZSA9PiAhdGhpcy5zaW1wbGlmaWVkSW5Jc29sYXRpb24uaGFzKGUpKTtcbiAgICAgICAgdW5zaW1wbGlmaWVkLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNpbXBsaWZpZWRJbklzb2xhdGlvbi5hZGQoZSk7XG4gICAgICAgICAgICAvLyBUcnkgdG8gZmluZCBlcXVpdmFsZW50cyB1c2luZyBldmVyeSBzZXQgb2YgcnVsZXMuXG4gICAgICAgICAgICAvLyBJZiBhIHNldCBmaW5kcyBlcXVpdmFsZW50cywgbW92ZSBvbiB0byB0aGUgbmV4dFxuICAgICAgICAgICAgLy8gZXhwcmVzc2lvbiBpbnN0ZWFkIG9mIHRyeWluZyBsYXRlciBydWxlcyB0byBzYXZlXG4gICAgICAgICAgICAvLyB0aW1lLlxuICAgICAgICAgICAgZm9yIChjb25zdCBydWxlcyBvZiBzaW1wbGlmaWNhdGlvbk9yZGVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVyaXZlZFNpbXBsaWZpY2F0aW9ucyA9ICgwLCByZWN1cnNpb25fMS5lcXVpdikoZSwgZXF1aXZhbGVudHNGblVzaW5nKHJ1bGVzKSk7XG4gICAgICAgICAgICAgICAgaWYgKGRlcml2ZWRTaW1wbGlmaWNhdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBkZXJpdmVkU2ltcGxpZmljYXRpb25zLmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoLmFkZEFyZ3VtZW50KGEpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBUbyBuZXh0IGV4cHJlc3Npb25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBub25lIG9mIHRoZSBydWxlcyB3ZSBoYXZlIHdvcmtlZCwgdGhlIGV4cHJlc3Npb24gaXNuJ3Qgc2ltcGxpZmlhYmxlLlxuICAgICAgICAgICAgdGhpcy5ub3RTaW1wbGlmaWFibGUuYWRkKGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy9pZiAodW5zaW1wbGlmaWVkLmxlbmd0aCA+IDApIHRoaXMuc2ltcGxpZnlOb0NvbnRleHQoKVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBFeHBhbmRzIHRoZSBncmFwaCB1c2luZyBhbGdlYnJhIHJ1bGVzLlxuICAgICAqIE9ubHkgc2ltcGxpZmllZCBydWxlcyBhcmUgdXNlZC5cbiAgICAgKi9cbiAgICBhbGdlYnJhaWNFeHBhbnNpb24oKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVzID0gWy4uLlJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZV8xLlJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZS5ydWxlc107XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBbLi4uR3JhcGhNaW5pcHVsYXRvcl8xLkdyYXBoTWluaXB1bGF0b3IuZ2V0Q29tcG9uZW50Tm9kZXModGhpcy5ncmFwaCwgZWRnZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChlZGdlIGluc3RhbmNlb2YgQXJndW1lbnRfMS5Bcmd1bWVudCAmJiBlZGdlLnJlbGF0aW9uc2hpcCA9PSBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwpXG4gICAgICAgICAgICAgICAgICAgIHx8IChlZGdlIGluc3RhbmNlb2YgR3JhcGhfMS5HaXZlbkVkZ2UgJiYgZWRnZS5yID09IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCk7XG4gICAgICAgICAgICB9KV07XG4gICAgICAgIGNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXF1YXRpb24gPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uICYmIHRoaXMubm90U2ltcGxpZmlhYmxlLmhhcyhub2RlKSlcbiAgICAgICAgICAgICAgICAgICAgZXF1YXRpb24ucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJ1bGVzLmZvckVhY2gociA9PiB7XG4gICAgICAgICAgICAgICAgci5hcHBseSgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoLi4uZXF1YXRpb24pKS5mb3JFYWNoKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoLmFkZEFyZ3VtZW50KGEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBncmFwaDtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIGV4cHJlc3Npb24gaXMgaW4gdGhlIGdyYXBoXG4gICAgICogYW5kIGhhcyBhbHJlYWR5IGhhZCB0aGUgY29udGV4dGxlc3Mgc2ltcGxpZmljYXRpb24gb3BlcmF0aW9uc1xuICAgICAqIGRvbmUgdG8gaXQgYW5kIGNhbm5vdCBiZSBmdXJ0aGVyIHNpbXBsaWZpZWQuXG4gICAgICovXG4gICAgaXNTaW1wbGlmaWVkKGV4cCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RTaW1wbGlmaWFibGUuaGFzKGV4cCk7XG4gICAgfVxuICAgIC8vIEEgc2V0IG9mIG5vZGVzIGluIHRoZSBncmFwaCB3aGljaCBoYXZlIGhhZCBhbGwgc2ltcGxpZmljYXRpb24gXG4gICAgLy8gb3BlcmF0aW9ucyBkb25lIHRvIHRoZW0uXG4gICAgc2ltcGxpZmllZEluSXNvbGF0aW9uO1xuICAgIC8vIFRoZSBzZXQgb2Ygbm9kZXMgaW4gdGhlIGdyYXBoIHRoYXQgaGF2ZSBoYWQgY29udGV4dGxlc3NcbiAgICAvLyBzaW1wbGlmaWNhdGlvbiBvcGVyYXRpb25zIHJ1biBvbiB0aGVtIGFuZCBhcmVuJ3QgZnVydGhlclxuICAgIC8vIHNpbXBsaWZpYWJsZVxuICAgIG5vdFNpbXBsaWZpYWJsZTtcbn1cbmV4cG9ydHMuRGVyaXZlciA9IERlcml2ZXI7XG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgbWFrZXMgYSBmdW5jdGlvbiB0aGF0IGdldHMgdGhlIGVxdWl2YWxlbnRcbiAqIGV4cHJlc3Npb25zIGZvciBhIGdpdmVuIG9uZS5cbiAqIEBwYXJhbSBydWxlcyBXaGF0IHJ1bGVzIHRoZSByZXN1bHRpbmcgZnVuY3Rpb24gc2hvdWxkIHVzZSB0b1xuICogICAgICBmaW5kIGVxdWl2YWxlbnRzLlxuICogQHJldHVybnMgQSBmdW5jdGlvbiB3aGljaCB3aWxsIHVzZSB0aGUgZ2l2ZW4gcnVsZXMgdG9cbiAqICAgICAgZmluZCBkaXJlY3QgZXF1aXZhbGVudHMuXG4gKi9cbmZ1bmN0aW9uIGVxdWl2YWxlbnRzRm5Vc2luZyhydWxlcykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXhwKSB7XG4gICAgICAgIGNvbnN0IG91dCA9IG5ldyBTZXQoKTtcbiAgICAgICAgcnVsZXMuZmlsdGVyKHIgPT4gci5hcHBsaWVzKGV4cCkpLmZvckVhY2gocnVsZSA9PiB7XG4gICAgICAgICAgICBydWxlLmFwcGx5KGV4cCkuZm9yRWFjaChpID0+IHtcbiAgICAgICAgICAgICAgICBvdXQuYWRkKGkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH07XG59XG4vKipcbiAqIDEgaW5wdXQsIDEgb3V0cHV0XG4gKi9cbmNvbnN0IGlkZW50aXR5UnVsZXMgPSBbXG4gICAgbmV3IE11bHRpcGxpY2F0aXZlSWRlbnRpdHlfMS5NdWx0aXBsaWNhdGl2ZUlkZW50aXR5KCksXG4gICAgbmV3IEV4cG9uZW50aWFsSWRlbnRpdHlfMS5FeHBvbmVudGlhbElkZW50aXR5KCksXG4gICAgbmV3IERpdmlzaW9uSWRlbnRpdHlfMS5EaXZpc2lvbklkZW50aXR5KCksXG4gICAgbmV3IEFkZGl0aXZlSWRlbnRpdHlfMS5BZGRpdGl2ZUlkZW50aXR5KCksXG4gICAgbmV3IEV4cG9uZW50VG9aZXJvXzEuRXhwb25lbnRUb1plcm8oKSxcbl07XG4vKipcbiAqIDEgaW5wdXQsIDEgb3V0cHV0XG4gKi9cbmNvbnN0IGJlYXV0aWZ5aW5nUnVsZXMgPSBbXG4gICAgbmV3IE9yZGVyU3Vtc18xLk9yZGVyU3VtcygpLFxuXTtcbi8qKlxuICogMSBpbnB1dCwgMSBvdXRwdXRcbiAqL1xuY29uc3QgZXZhbHVhdGl2ZVJ1bGVzID0gW1xuICAgIG5ldyBFdmFsdWF0ZVN1bXNfMS5FdmFsdWF0ZVN1bXMoKSxcbiAgICBuZXcgQ2FuY2VsTmVnYXRpdmVzXzEuQ2FuY2VsTmVnYXRpdmVzKCksXG4gICAgbmV3IENvbWJpbmVJbnRlZ2VyRmFjdG9yc18xLkNvbWJpbmVJbnRlZ2VyRmFjdG9ycygpLFxuXTtcbmNvbnN0IGNvbWJpbmF0b3JpY1J1bGVzID0gW1xuICAgIG5ldyBTdW1Db2VmZmljaWVudHNPZkFkZGVkVGVybXNfMS5TdW1Db2VmZmljaWVudHNPZkFkZGVkVGVybXMoKSxcbiAgICBuZXcgQ29tYmluZUNvbW1vblRlcm1zQWRkaXRpb25fMS5Db21iaW5lQ29tbW9uVGVybXNBZGRpdGlvbigpLFxuICAgIG5ldyBDb21iaW5lQ29tbW9uRmFjdG9yc011bHRpcGxpY2F0aW9uXzEuQ29tYmluZUNvbW1vbkZhY3RvcnNNdWx0aXBsaWNhdGlvbigpLFxuICAgIG5ldyBNdWx0aXBseUV4cG9uZW50UG93ZXJzXzEuTXVsdGlwbHlFeHBvbmVudFBvd2VycygpLFxuXTtcbmNvbnN0IHJlbWFpbmluZ05vQ29udGV4dFNpbXBsaWZpY2F0aW9uUnVsZXMgPSBbXG4gICAgbmV3IFVTdWJzdGl0dXRpb25fMS5VU3Vic3RpdHV0aW9uKCksXG4gICAgbmV3IFBvd2VyUnVsZV8xLlBvd2VyUnVsZSgpLFxuICAgIG5ldyBQdWxsQ29uc3RhbnRzRnJvbURlcml2YXRpdmVzXzEuUHVsbENvbnN0YW50c0Zyb21EZXJpdmF0aXZlcygpLFxuICAgIG5ldyBBc3NvY2lhdGl2ZVByb3BlcnR5T2ZQcm9kdWN0c0FuZFN1bXNfMS5Bc3NvY2lhdGl2ZVByb3BlcnR5T2ZQcm9kdWN0c0FuZFN1bXMoKSxcbiAgICBuZXcgUHJvZHVjdFJ1bGVfMS5Qcm9kdWN0UnVsZSgpLFxuICAgIG5ldyBRdW90aWVudFJ1bGVfMS5RdW90aWVudFJ1bGUoKSxcbiAgICBuZXcgRGl2aWRlRnJhY3Rpb25zXzEuRGl2aWRlRnJhY3Rpb25zKCksXG5dO1xuLyoqXG4gKiBBIGxpc3Qgb2YgbGlzdHMgb2Ygc2ltcGxpZmljYXRpb24gcnVsZXMuXG4gKiBFYXJsaWVyIGxpc3RzIHNob3VsZCBiZSB0cmllZCBmaXJzdC5cbiAqIElmIGFuZCBvbmx5IGlmIGFuIGVhcmxpZXIgbGlzdCBmYWlscyB0b1xuICogcHJvZHVjZSBlcXVpdmFsZW50IGV4cHJlc3Npb25zIHNob3VsZCBsYXRlciBsaXN0c1xuICogYmUgdXNlZC5cbiAqL1xuY29uc3Qgc2ltcGxpZmljYXRpb25PcmRlciA9IFtcbiAgICBpZGVudGl0eVJ1bGVzLFxuICAgIGJlYXV0aWZ5aW5nUnVsZXMsXG4gICAgZXZhbHVhdGl2ZVJ1bGVzLFxuICAgIGNvbWJpbmF0b3JpY1J1bGVzLFxuICAgIHJlbWFpbmluZ05vQ29udGV4dFNpbXBsaWZpY2F0aW9uUnVsZXMsXG5dO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUgPSB2b2lkIDA7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2Fzc2VydFwiKTtcbi8qKlxuICogQSBydWxlIHRoYXQgdGFrZXMgYW4gZXhwcmVzc2lvbiBhbmQgcHJvZHVjZXMgYW4gZXF1aXZhbGVudCBleHByZXNzaW9uLlxuICogRXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZXMgY2FuIHVzZSByZWZsZWN0aW9uIHRvIGRldGVybWluZSB3aGF0XG4gKiB0eXBlIG9mIGV4cHJlc3Npb24gdGhleSdyZSBnaXZlbiwgYnV0IHNob3VsZCB1c2UgZXhwcmVzc2lvbiBzcGVjaWZpY1xuICogZnVuY3Rpb25zIG9uIHN1Yi1leHByZXNzaW9ucy4gVGhlc2UgcnVsZXMgd2lsbCBiZSByZWN1cnNpdmVseSB1c2VkXG4gKiB0byBkZXJpdmUgc2ltcGxpZmllZCBleHByZXNzaW9ucy5cbiAqXG4gKiBUaGVzZSBydWxlcyBhcmUgYWxzbyBjb250ZXh0bGVzczogdGhleSdyZSBvbmx5IGdpdmVuIHRoZSBleHByZXNzaW9uLFxuICogbm8gb3RoZXIgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHByb2JsZW0uXG4gKi9cbmNsYXNzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGlzIHJ1bGUgY2FuIGZpbmQgZXF1aXZhbGVudHMgZm9yIHRoZVxuICAgICAqIGdpdmVuIGV4cHJlc3Npb24uIE9ubHkgY2FsbCBhcHBseSgpIGlmIHRydWUuXG4gICAgICovXG4gICAgYXBwbGllcyhleHApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwbGllc0ltcGwoZXhwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvZHVjZXMgYSBzZXQgb2YgZXhwcmVzc2lvbnMgdGhhdCBhcmUgZXF1aXZhbGVudCB0b1xuICAgICAqIHRoZSBnaXZlbiBvbmUuIE9ubHkgY2FsbCBpZiB0aGUgZ2l2ZW4gZXhwcmVzc2lvblxuICAgICAqIHBhc3NlZCB0aGUgYXBwbGllcygpIHRlc3QuXG4gICAgICogQHBhcmFtIGV4cCBUaGUgZXhwcmVzc2lvbiB0byBmaW5kIGFuIGVxdWl2YWxlbnQgZm9yLlxuICAgICAqIEByZXR1cm5zIFNldCBvZiBlcXVpdmFsZW50IGV4cHJlc3Npb25zLCBub3QgaW5jbHVkaW5nIHRoZSBnaXZlbiBvbmUuXG4gICAgICovXG4gICAgYXBwbHkoZXhwKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgb24gXCIgKyBleHAudG9TdHJpbmcoKSlcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5hcHBseUltcGwoZXhwKTtcbiAgICAgICAgcmVzdWx0LmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KShlICE9IG51bGwgJiYgZSAhPSB1bmRlZmluZWQpO1xuICAgICAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkoZS5jbGFpbS5uMSAhPT0gZXhwLCBcIlJ1bGUgXCIgKyB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiBwcm9kdWNlZCByZXN1bHQgZXF1aXZhbGVudCB0byBncm91bmRcIik7XG4gICAgICAgICAgICAvL2lmICh0aGlzLmNvbnN0cnVjdG9yLm5hbWUgPT0gXCJDb21iaW5lQ29tbW9uVGVybXNNdWx0aXBsaWNhdGlvblwiKVxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmNvbnN0cnVjdG9yLm5hbWUgKyBleHAudG9TdHJpbmcoKSArIFwiXFxuIC0+IFwiICsgZS5jbGFpbS5uMS50b1N0cmluZygpKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5leHBvcnRzLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUgPSBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZSA9IHZvaWQgMDtcbi8qKlxuICogUHJvZHVjZXMgdHJ1dGhzIGZyb20gYSBzZXQgb2YgZXF1aXZhbGVudCBleHByZXNzaW9ucy5cbiAqL1xuY2xhc3MgUmVsYXRpb25hbERlcml2YXRpb25SdWxlIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlcXVhdGlvbiBBIHNldCBvZiBleHByZXNzaW9ucyB3aGljaCBhcmUgZXF1YWwuXG4gICAgICovXG4gICAgYXBwbHkoZXF1YXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwbHlJbXBsKGVxdWF0aW9uKTtcbiAgICB9XG4gICAgc3RhdGljIHJ1bGVzID0gbmV3IFNldCgpO1xufVxuZXhwb3J0cy5SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGUgPSBSZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRGl2aWRlT25Cb3RoU2lkZXMgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL1Byb2R1Y3RcIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi8uLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBSZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGVcIik7XG5jbGFzcyBEaXZpZGVPbkJvdGhTaWRlcyBleHRlbmRzIFJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZV8xLlJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZSB7XG4gICAgYXBwbHlJbXBsKGVxdWF0aW9uKSB7XG4gICAgICAgIGNvbnN0IG91dCA9IFtdO1xuICAgICAgICBjb25zdCBjb21iaW5hdGlvbnMgPSBjYXJ0ZXNpYW5Qcm9kdWN0KGVxdWF0aW9uKTtcbiAgICAgICAgY29tYmluYXRpb25zLmZpbHRlcihwYWlyID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwYWlyWzBdIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3Q7XG4gICAgICAgIH0pLmZvckVhY2gocGFpciA9PiB7XG4gICAgICAgICAgICBjb25zdCBwID0gcGFpclswXTtcbiAgICAgICAgICAgIGNvbnN0IG90aGVyID0gcGFpclsxXTtcbiAgICAgICAgICAgIC8vIFNvbWUgcHJvZHVjdHMgaGF2ZSBtdWx0aXBsZSBmYWN0b3JzXG4gICAgICAgICAgICBwLmZhY3RvcnMuZm9yRWFjaChmYWN0b3IgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzZWNvbmQ7XG4gICAgICAgICAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3QpIHtcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kID0gWy4uLm90aGVyLmZhY3RvcnNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kID0gW290aGVyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgY2xhaW0gPSB7IG46IHAud2l0aG91dChmYWN0b3IpLCBuMTogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmZyYWN0aW9uKSgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdE9yTm90KSguLi5zZWNvbmQpLCBmYWN0b3IpLCByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwgfTtcbiAgICAgICAgICAgICAgICBvdXQucHVzaChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudChuZXcgU2V0KFtwLCBvdGhlcl0pLCBjbGFpbSwgXCJhPWIgJiBjPWQgPT4gYS9jID0gYi9kXCIpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG59XG5leHBvcnRzLkRpdmlkZU9uQm90aFNpZGVzID0gRGl2aWRlT25Cb3RoU2lkZXM7XG4vKipcbiAqIEdldHMgdGhlIGFudGktcmVmbGV4aXZlIGNsb3N1cmUgb2YgdGhlIHJlbGF0aW9uIEEgeCBBLlxuICogSXQncyBzeW1tZXRyaWMgYW5kIHRyYW5zaXRpdmUuXG4gKlxuICogQHBhcmFtIHNldFxuICovXG5mdW5jdGlvbiBjYXJ0ZXNpYW5Qcm9kdWN0KHNldCkge1xuICAgIGNvbnN0IG91dCA9IFtdO1xuICAgIGZvciAoY29uc3QgZmlyc3Qgb2Ygc2V0KSB7XG4gICAgICAgIGZvciAoY29uc3Qgc2Vjb25kIG9mIHNldCkge1xuICAgICAgICAgICAgaWYgKGZpcnN0ID09PSBzZWNvbmQpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBvdXQucHVzaChbZmlyc3QsIHNlY29uZF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU3VidHJhY3RGcm9tQm90aFNpZGVzID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9Qcm9kdWN0XCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvU3VtXCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgUmVsYXRpb25hbERlcml2YXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vUmVsYXRpb25hbERlcml2YXRpb25SdWxlXCIpO1xuY2xhc3MgU3VidHJhY3RGcm9tQm90aFNpZGVzIGV4dGVuZHMgUmVsYXRpb25hbERlcml2YXRpb25SdWxlXzEuUmVsYXRpb25hbERlcml2YXRpb25SdWxlIHtcbiAgICBhcHBseUltcGwoZXF1YXRpb24pIHtcbiAgICAgICAgY29uc3Qgb3V0ID0gW107XG4gICAgICAgIGNvbnN0IGNvbWJpbmF0aW9ucyA9IGNhcnRlc2lhblByb2R1Y3QoZXF1YXRpb24pO1xuICAgICAgICAvLyBJZiBvbmUgaXMgYWRkaXRpb24sIHN1YnRyYWN0IGZyb20gYm90aCBzaWRlc1xuICAgICAgICAvLyBIZXJlIHdlIGZpbHRlciBzbyB0aGF0IG9ubHkgcGFpcnMgd2hlcmUgdGhlIGZpcnN0IGV4cHJlc3Npb24gaXNcbiAgICAgICAgLy8gYSBzdW0gYXJlIG9wZXJhdGVkIG9uLiBUaGlzIHdvcmtzIGJlY2F1c2UgY29tYmluYXRpb25zIGlzIHN5bWV0cmljLlxuICAgICAgICAvLyBOb3cgZm9yIGVhY2ggcGFpciB3ZSBvbmx5IGhhdmUgdG8gZGVhbCB3aXRoIHRoZSBmaXJzdCBleHAgYmVpbmcgc3VtLlxuICAgICAgICBjb21iaW5hdGlvbnMuZmlsdGVyKHBhaXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHBhaXJbMF0gaW5zdGFuY2VvZiBTdW1fMS5TdW07XG4gICAgICAgIH0pLmZvckVhY2gocGFpciA9PiB7XG4gICAgICAgICAgICBjb25zdCBzID0gcGFpclswXTtcbiAgICAgICAgICAgIGNvbnN0IG90aGVyID0gcGFpclsxXTtcbiAgICAgICAgICAgIC8vIFNvbWUgU3VtcyBoYXZlIG11bHRpcGxlIHRlcm1zXG4gICAgICAgICAgICBzLnRlcm1zLmZpbHRlcih0ZXJtID0+ICEodGVybSBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0ICYmIHRlcm0uaXNOZWdhdGlvbikpXG4gICAgICAgICAgICAgICAgLmZvckVhY2godGVybSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgb3RoZXIgaXMgaXRzZWxmIGEgc3VtLCB3ZSB3aWxsIGJyZWFrIGl0IGFwYXJ0XG4gICAgICAgICAgICAgICAgLy8gaW50byB0ZXJtcyBzbyB0aGF0IHdlIGNhbiBjb21iaW5lIGludGVnZXIgdGVybXMgaW4gdGhlXG4gICAgICAgICAgICAgICAgLy8gZmluYWwgcmVzdWx0IGFuZCBhdm9pZFxuICAgICAgICAgICAgICAgIC8vIHggKyAyICsgMiA9IHkgKyAyID0+IHggKyAyID0geSArIDIgLSAyXG4gICAgICAgICAgICAgICAgLy8gTm90ZTogV2Ugb25seSBkbyB0aGlzIHRvIGludGVnZXIgdGVybXMsIGJlY2F1c2UgdGhhdCdzXG4gICAgICAgICAgICAgICAgLy8gc28gb2J2aW91cyBhbmQgY291bGRuJ3QgcG9zc2libHkgbmVlZCB0byBiZSBleHBsYWluZWQgZnVydGhlci5cbiAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCBkbyBpdCB0byB2YXJpYWJsZSB0ZXJtcy4gVGhlIGZvbGxvd2luZyBpcyBjb3JyZWN0IGJlaGF2aW9yOlxuICAgICAgICAgICAgICAgIC8vIHggKyBhICsgYSA9IHkgKyBhID0+IHggKyBhID0geSArIGEgLSBhXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBkaXN0aW5jdGlvbiBpcyBkZWJhdGFibGUuIFdoeSBzaG91bGRuJ3QgdGhlIGxlZnQgaGFuZFxuICAgICAgICAgICAgICAgIC8vIG9mIHRoZSBsYXN0IGRlZHVjdGlvbiBiZSB4ICsgYSArIGEgLSBhPyBCeSBkb2luZyB0aGlzLCBcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm9kdWNlIGEgbXVjaCBtb3JlIGNvbXBsaWNhdGVkIGFuZCBleHBlbnNpdmUgZ3JhcGguIFxuICAgICAgICAgICAgICAgIGxldCBzZWNvbmQ7XG4gICAgICAgICAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgU3VtXzEuU3VtKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZCA9IFsuLi5vdGhlci50ZXJtc107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWNvbmQgPSBbb3RoZXJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBjbGFpbSA9IHsgbjogcy53aXRob3V0KHRlcm0pLCBuMTogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bUludHVpdGl2ZSkoLi4uc2Vjb25kLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubmVnYXRpdmUpKHRlcm0pKSwgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsIH07XG4gICAgICAgICAgICAgICAgb3V0LnB1c2gobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQobmV3IFNldChbcywgb3RoZXJdKSwgY2xhaW0sIFwiYT1iICYgYz1kID0+IGEtYyA9IGItZFwiKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxufVxuZXhwb3J0cy5TdWJ0cmFjdEZyb21Cb3RoU2lkZXMgPSBTdWJ0cmFjdEZyb21Cb3RoU2lkZXM7XG4vKipcbiAqIEdldHMgdGhlIGFudGktcmVmbGV4aXZlIGNsb3N1cmUgb2YgdGhlIHJlbGF0aW9uIEEgeCBBLlxuICogSXQncyBzeW1tZXRyaWMgYW5kIHRyYW5zaXRpdmUuXG4gKlxuICogQHBhcmFtIHNldFxuICovXG5mdW5jdGlvbiBjYXJ0ZXNpYW5Qcm9kdWN0KHNldCkge1xuICAgIGNvbnN0IG91dCA9IFtdO1xuICAgIGZvciAoY29uc3QgZmlyc3Qgb2Ygc2V0KSB7XG4gICAgICAgIGZvciAoY29uc3Qgc2Vjb25kIG9mIHNldCkge1xuICAgICAgICAgICAgaWYgKGZpcnN0ID09PSBzZWNvbmQpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBvdXQucHVzaChbZmlyc3QsIHNlY29uZF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZXF1aXYgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgRGVyaXZhdGl2ZV8xID0gcmVxdWlyZShcIi4uL2V4cHJlc3Npb25zL0Rlcml2YXRpdmVcIik7XG5jb25zdCBFeHBvbmVudF8xID0gcmVxdWlyZShcIi4uL2V4cHJlc3Npb25zL0V4cG9uZW50XCIpO1xuY29uc3QgRnJhY3Rpb25fMSA9IHJlcXVpcmUoXCIuLi9leHByZXNzaW9ucy9GcmFjdGlvblwiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuLi9leHByZXNzaW9ucy9JbnRlZ2VyXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4uL2V4cHJlc3Npb25zL1Byb2R1Y3RcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuLi9leHByZXNzaW9ucy9TdW1cIik7XG5jb25zdCBWYXJpYWJsZV8xID0gcmVxdWlyZShcIi4uL2V4cHJlc3Npb25zL1ZhcmlhYmxlXCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuLyoqXG4gKiBHZXRzIGFsbCBlcXVpdmFsZW50cyBvZiB0aGUgZ2l2ZW4gZXhwcmVzc2lvblxuICogY2hlY2tpbmcgaXQncyBjaGlsZHJlbidzIGVxdWl2YWxlbnRzLlxuICpcbiAqIChhICsgYSkgKyAoYiArIGIpXG4gKiAtPiAoMmEpICsgKGIgKyBiKSB3aXRoIGluZmVyZW5jZSBhICsgYSA9IDJhXG4gKiBAcGFyYW0gZXhwXG4gKiBAcGFyYW0gZGlyZWN0RXF1aXZhbGVudHMgRnVuY3Rpb24gdGhhdCB3aWxsIHByb2R1Y2UgZXF1aXZhbGVudCBleHByZXNzaW9uc1xuICogICAgICAgIHdpdGhvdXQgcmVjdXJzaW9uLlxuICogQHJldHVybnMgQXJyYXkgb2YgaW5mZXJlbmNlcyB0byBlcXVpdmFsZW50IGV4cHJlc3Npb25zLlxuICovXG5mdW5jdGlvbiBlcXVpdihleHAsIGRpcmVjdEVxdWl2YWxlbnRzKSB7XG4gICAgaWYgKGV4cCBpbnN0YW5jZW9mIFZhcmlhYmxlXzEuVmFyaWFibGUgfHwgZXhwIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpXG4gICAgICAgIHJldHVybiBbXTtcbiAgICBlbHNlXG4gICAgICAgIHN3aXRjaCAoZXhwLmNsYXNzKSB7XG4gICAgICAgICAgICBjYXNlIFN1bV8xLlN1bVR5cGU6IHJldHVybiBzdW1FcXVpdihleHAsIGRpcmVjdEVxdWl2YWxlbnRzKTtcbiAgICAgICAgICAgIGNhc2UgUHJvZHVjdF8xLlByb2R1Y3RUeXBlOiByZXR1cm4gcHJvZHVjdEVxdWl2KGV4cCwgZGlyZWN0RXF1aXZhbGVudHMpO1xuICAgICAgICAgICAgY2FzZSBFeHBvbmVudF8xLkV4cG9uZW50VHlwZTogcmV0dXJuIGV4cG9uZW50RXF1aXYoZXhwLCBkaXJlY3RFcXVpdmFsZW50cyk7XG4gICAgICAgICAgICBjYXNlIEZyYWN0aW9uXzEuRnJhY3Rpb25UeXBlOiByZXR1cm4gZnJhY3Rpb25FcXVpdihleHAsIGRpcmVjdEVxdWl2YWxlbnRzKTtcbiAgICAgICAgICAgIGNhc2UgRGVyaXZhdGl2ZV8xLkRlcml2YXRpdmVUeXBlOiByZXR1cm4gZGVyaXZhdGl2ZUVxdWl2KGV4cCwgZGlyZWN0RXF1aXZhbGVudHMpO1xuICAgICAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIGZvciBcIiArIGV4cC5jbGFzcyk7XG4gICAgICAgIH1cbn1cbmV4cG9ydHMuZXF1aXYgPSBlcXVpdjtcbi8qKlxuICogR2V0cyBhbGwgZXF1aXZhbGVudHMgb2YgdGhlIGdpdmVuIGV4cHJlc3Npb25cbiAqIGJ5IHN3YXBwaW5nIG91dCBpdCdzIGNoaWxkcmVuIGluZGl2aWR1YWxseS5cbiAqXG4gKiAoYSArIGEpICsgKGIgKyBiKVxuICogLT4gKDJhKSArIChiICsgYikgd2l0aCBpbmZlcmVuY2UgYSArIGEgPSAyYVxuICogQHBhcmFtIGV4cFxuICogQHJldHVybnMgQXJyYXkgb2YgaW5mZXJlbmNlcyB0byBlcXVpdmFsZW50IGV4cHJlc3Npb25zLlxuICovXG5mdW5jdGlvbiBzdW1FcXVpdihleHAsIGRpcmVjdEVxdWl2YWxlbnRzKSB7XG4gICAgY29uc3QgZXF1aXZhbGVudFN1bXMgPSBuZXcgU2V0KCk7XG4gICAgLy8gQWRkIHRvcCBsZXZlbCBlcXVpdmFsZW50c1xuICAgIGRpcmVjdEVxdWl2YWxlbnRzKGV4cCkuZm9yRWFjaChpbmYgPT4ge1xuICAgICAgICBlcXVpdmFsZW50U3Vtcy5hZGQoaW5mKTtcbiAgICB9KTtcbiAgICAvLyBGaW5kIGVxdWl2YWxlbnRzIGZvciBlYWNoIHRlcm1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4cC50ZXJtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0ZXJtID0gZXhwLnRlcm1zW2ldO1xuICAgICAgICAvLyBTdWJzdGl0dXRlIHRlcm0gZm9yIGVhY2ggZXF1aXZhbGVudFxuICAgICAgICBlcXVpdih0ZXJtLCBkaXJlY3RFcXVpdmFsZW50cykuZm9yRWFjaChhID0+IHtcbiAgICAgICAgICAgIGVxdWl2YWxlbnRTdW1zLmFkZChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICAgICAgbjE6IHN3YXAoZXhwLCBpLCBhLmNsYWltLm4xKVxuICAgICAgICAgICAgfSwgYS5hcmd1bWVudCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3dhcChzLCBpLCBlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1zID0gWy4uLnMudGVybXNdO1xuICAgICAgICB0ZXJtc1tpXSA9IGU7XG4gICAgICAgIHJldHVybiAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtKSguLi50ZXJtcyk7XG4gICAgfVxuICAgIHJldHVybiBbLi4uZXF1aXZhbGVudFN1bXNdO1xufVxuZnVuY3Rpb24gcHJvZHVjdEVxdWl2KGV4cCwgZGlyZWN0RXF1aXZhbGVudHMpIHtcbiAgICBjb25zdCBlcXVpdmFsZW50UHJvZHVjdHMgPSBuZXcgU2V0KCk7XG4gICAgLy8gQWRkIHRvcCBsZXZlbCBlcXVpdmFsZW50c1xuICAgIGRpcmVjdEVxdWl2YWxlbnRzKGV4cCkuZm9yRWFjaChpbmYgPT4ge1xuICAgICAgICBlcXVpdmFsZW50UHJvZHVjdHMuYWRkKGluZik7XG4gICAgfSk7XG4gICAgLy8gRmluZCBlcXVpdmFsZW50cyBmb3IgZWFjaCB0ZXJtXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleHAuZmFjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBmYWN0b3IgPSBleHAuZmFjdG9yc1tpXTtcbiAgICAgICAgLy8gU3Vic3RpdHV0ZSB0ZXJtIGZvciBlYWNoIGVxdWl2YWxlbnRcbiAgICAgICAgZXF1aXYoZmFjdG9yLCBkaXJlY3RFcXVpdmFsZW50cykuZm9yRWFjaChhbHQgPT4ge1xuICAgICAgICAgICAgZXF1aXZhbGVudFByb2R1Y3RzLmFkZChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICAgICAgbjE6IHN3YXAoZXhwLCBpLCBhbHQuY2xhaW0ubjEpLFxuICAgICAgICAgICAgfSwgYWx0LmFyZ3VtZW50KSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzd2FwKHMsIGksIGUpIHtcbiAgICAgICAgY29uc3QgdGVybXMgPSBbLi4ucy5mYWN0b3JzXTtcbiAgICAgICAgdGVybXNbaV0gPSBlO1xuICAgICAgICByZXR1cm4gKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3QpKC4uLnRlcm1zKTtcbiAgICB9XG4gICAgcmV0dXJuIFsuLi5lcXVpdmFsZW50UHJvZHVjdHNdO1xufVxuZnVuY3Rpb24gZXhwb25lbnRFcXVpdihleHAsIGRpcmVjdEVxdWl2YWxlbnRzKSB7XG4gICAgY29uc3QgZXF1aXZhbGVudHMgPSBuZXcgU2V0KCk7XG4gICAgLy8gQWRkIHRvcCBsZXZlbCBlcXVpdmFsZW50c1xuICAgIGRpcmVjdEVxdWl2YWxlbnRzKGV4cCkuZm9yRWFjaChpbmYgPT4ge1xuICAgICAgICBlcXVpdmFsZW50cy5hZGQoaW5mKTtcbiAgICB9KTtcbiAgICBlcXVpdihleHAuYmFzZSwgZGlyZWN0RXF1aXZhbGVudHMpLmZvckVhY2goYWx0ID0+IHtcbiAgICAgICAgZXF1aXZhbGVudHMuYWRkKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogRXhwb25lbnRfMS5FeHBvbmVudC5vZihhbHQuY2xhaW0ubjEsIGV4cC5wb3dlcilcbiAgICAgICAgfSwgYWx0LmFyZ3VtZW50KSk7XG4gICAgfSk7XG4gICAgZXF1aXYoZXhwLnBvd2VyLCBkaXJlY3RFcXVpdmFsZW50cykuZm9yRWFjaChhbHQgPT4ge1xuICAgICAgICBlcXVpdmFsZW50cy5hZGQobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgIG4xOiBFeHBvbmVudF8xLkV4cG9uZW50Lm9mKGV4cC5iYXNlLCBhbHQuY2xhaW0ubjEpLFxuICAgICAgICB9LCBhbHQuYXJndW1lbnQpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gWy4uLmVxdWl2YWxlbnRzXTtcbn1cbmZ1bmN0aW9uIGZyYWN0aW9uRXF1aXYoZXhwLCBkaXJlY3RFcXVpdmFsZW50cykge1xuICAgIGNvbnN0IGVxdWl2YWxlbnRzID0gbmV3IFNldCgpO1xuICAgIC8vIEFkZCB0b3AgbGV2ZWwgZXF1aXZhbGVudHNcbiAgICBkaXJlY3RFcXVpdmFsZW50cyhleHApLmZvckVhY2goaW5mID0+IHtcbiAgICAgICAgZXF1aXZhbGVudHMuYWRkKGluZik7XG4gICAgfSk7XG4gICAgZXF1aXYoZXhwLm51bWVyYXRvciwgZGlyZWN0RXF1aXZhbGVudHMpLmZvckVhY2goYWx0ID0+IHtcbiAgICAgICAgZXF1aXZhbGVudHMuYWRkKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihhbHQuY2xhaW0ubjEsIGV4cC5kZW5vbWluYXRvcilcbiAgICAgICAgfSwgYWx0LmFyZ3VtZW50KSk7XG4gICAgfSk7XG4gICAgZXF1aXYoZXhwLmRlbm9taW5hdG9yLCBkaXJlY3RFcXVpdmFsZW50cykuZm9yRWFjaChhbHQgPT4ge1xuICAgICAgICBlcXVpdmFsZW50cy5hZGQobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgIG4xOiBGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKGV4cC5udW1lcmF0b3IsIGFsdC5jbGFpbS5uMSksXG4gICAgICAgIH0sIGFsdC5hcmd1bWVudCkpO1xuICAgIH0pO1xuICAgIHJldHVybiBbLi4uZXF1aXZhbGVudHNdO1xufVxuZnVuY3Rpb24gZGVyaXZhdGl2ZUVxdWl2KGV4cCwgZGlyZWN0RXF1aXZhbGVudHMpIHtcbiAgICBjb25zdCBlcXVpdmFsZW50cyA9IG5ldyBTZXQoKTtcbiAgICAvLyBBZGQgdG9wIGxldmVsIGVxdWl2YWxlbnRzXG4gICAgZGlyZWN0RXF1aXZhbGVudHMoZXhwKS5mb3JFYWNoKGluZiA9PiB7XG4gICAgICAgIGVxdWl2YWxlbnRzLmFkZChpbmYpO1xuICAgIH0pO1xuICAgIGVxdWl2KGV4cC5leHAsIGRpcmVjdEVxdWl2YWxlbnRzKS5mb3JFYWNoKGFsdCA9PiB7XG4gICAgICAgIGVxdWl2YWxlbnRzLmFkZChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgbjE6IERlcml2YXRpdmVfMS5EZXJpdmF0aXZlLm9mKGFsdC5jbGFpbS5uMSwgZXhwLnJlbGF0aXZlVG8pXG4gICAgICAgIH0sIGFsdC5hcmd1bWVudCkpO1xuICAgIH0pO1xuICAgIGVxdWl2KGV4cC5yZWxhdGl2ZVRvLCBkaXJlY3RFcXVpdmFsZW50cykuZm9yRWFjaChhbHQgPT4ge1xuICAgICAgICBlcXVpdmFsZW50cy5hZGQobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgIG4xOiBEZXJpdmF0aXZlXzEuRGVyaXZhdGl2ZS5vZihleHAuZXhwLCBhbHQuY2xhaW0ubjEpLFxuICAgICAgICB9LCBhbHQuYXJndW1lbnQpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gWy4uLmVxdWl2YWxlbnRzXTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5BZGRpdGl2ZUlkZW50aXR5ID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9JbnRlZ2VyXCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvU3VtXCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG4vKipcbiAqIEFueXRoaW5nIHBsdXMgMCBpcyBhbnl0aGluZ1xuICovXG5jbGFzcyBBZGRpdGl2ZUlkZW50aXR5IGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gZXhwIGluc3RhbmNlb2YgU3VtXzEuU3VtO1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGNvbnN0IHRlcm1zV2l0aG91dFplcm8gPSBleHAudGVybXMuZmlsdGVyKHQgPT4gISh0IGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIgJiYgdC52YWx1ZSA9PSAwKSk7XG4gICAgICAgIGlmICh0ZXJtc1dpdGhvdXRaZXJvLmxlbmd0aCA9PSBleHAudGVybXMubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuICgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKSgpO1xuICAgICAgICByZXR1cm4gKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bU9yTm90KSguLi50ZXJtc1dpdGhvdXRaZXJvKVxuICAgICAgICB9LCBcIkFkZGl0aXZlIGlkZW50aXR5XCIpKTtcbiAgICB9XG59XG5leHBvcnRzLkFkZGl0aXZlSWRlbnRpdHkgPSBBZGRpdGl2ZUlkZW50aXR5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFzc29jaWF0aXZlUHJvcGVydHlPZlByb2R1Y3RzQW5kU3VtcyA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vQXJndW1lbnRcIik7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db252ZW5pZW50RXhwcmVzc2lvbnNcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvUHJvZHVjdFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL1N1bVwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9UaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYlwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuLyoqXG4gKiBGbGF0dGVucyBwcm9kdWN0cyBpbiBwcm9kdWN0cyBhbmQgc3VtcyBpbiBzdW1zXG4gKi9cbmNsYXNzIEFzc29jaWF0aXZlUHJvcGVydHlPZlByb2R1Y3RzQW5kU3VtcyBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGV4cCBpbnN0YW5jZW9mIFN1bV8xLlN1bSB8fCBleHAgaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdDtcbiAgICB9XG4gICAgYXBwbHlJbXBsKGV4cCkge1xuICAgICAgICBpZiAoZXhwIGluc3RhbmNlb2YgU3VtXzEuU3VtKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdUZXJtcyA9IGV4cC50ZXJtcy5tYXAodCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBTdW1fMS5TdW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi50LnRlcm1zXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFt0XTtcbiAgICAgICAgICAgIH0pLmZsYXQoKTtcbiAgICAgICAgICAgIGlmIChuZXdUZXJtcy5sZW5ndGggPT0gZXhwLnRlcm1zLmxlbmd0aClcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNldCgpO1xuICAgICAgICAgICAgcmV0dXJuICgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICAgICAgbjE6ICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKC4uLm5ld1Rlcm1zKVxuICAgICAgICAgICAgfSwgXCJBc3NvY2lhdGl2ZSBwcm9wZXJ0eSBvZiBhZGRpdGlvblwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZXhwLmlzTmVnYXRpb24pXG4gICAgICAgICAgICAgICAgcmV0dXJuICgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKSgpO1xuICAgICAgICAgICAgY29uc3QgbmV3RmFjdG9ycyA9IGV4cC5mYWN0b3JzLm1hcCh0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodCBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4udC5mYWN0b3JzXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFt0XTtcbiAgICAgICAgICAgIH0pLmZsYXQoKTtcbiAgICAgICAgICAgIGlmIChuZXdGYWN0b3JzLmxlbmd0aCA9PSBleHAuZmFjdG9ycy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTZXQoKTtcbiAgICAgICAgICAgIHJldHVybiAoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgICAgIG4xOiAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdCkoLi4ubmV3RmFjdG9ycylcbiAgICAgICAgICAgIH0sIFwiQXNzb2NpYXRpdmUgcHJvcGVydHkgb2YgbXVsdGlwbGljYXRpb25cIikpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5Bc3NvY2lhdGl2ZVByb3BlcnR5T2ZQcm9kdWN0c0FuZFN1bXMgPSBBc3NvY2lhdGl2ZVByb3BlcnR5T2ZQcm9kdWN0c0FuZFN1bXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ2FuY2VsTmVnYXRpdmVzID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9Qcm9kdWN0XCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMiA9IHJlcXVpcmUoXCIuLi8uLi9Db252ZW5pZW50RXhwcmVzc2lvbnNcIik7XG4vKipcbiAqIE1ha2VzIHN1cmUgYSBwcm9kdWN0IGRvZXNuJ3QgY29udGFpbiBhbnkgbmVnYXRpb25zLlxuICogVGhlIHByb2R1Y3QgaXMgZWl0aGVyIGEgbmVnYXRpb24gb3Igbm90LlxuICovXG5jbGFzcyBDYW5jZWxOZWdhdGl2ZXMgZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAgaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdDtcbiAgICB9XG4gICAgYXBwbHlJbXBsKGV4cCkge1xuICAgICAgICBjb25zdCBwcm9kdWN0ID0gZXhwO1xuICAgICAgICBjb25zdCBuZWdhdGVkRmFjdG9ycyA9IFtdO1xuICAgICAgICBjb25zdCBvdGhlcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBmIG9mIHByb2R1Y3QuZmFjdG9ycykge1xuICAgICAgICAgICAgaWYgKGYgaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCAmJiBmLmlzTmVnYXRpb24pIHtcbiAgICAgICAgICAgICAgICBuZWdhdGVkRmFjdG9ycy5wdXNoKGYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3RoZXJzLnB1c2goZik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5lZ2F0ZWRGYWN0b3JzLmxlbmd0aCA8IDEpXG4gICAgICAgICAgICByZXR1cm4gKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdElzTmVnYXRpdmUgPSBuZWdhdGVkRmFjdG9ycy5sZW5ndGggJSAyID09IDE7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9ICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMi5wcm9kdWN0KSguLi5uZWdhdGVkRmFjdG9ycywgLi4ub3RoZXJzKTtcbiAgICAgICAgY29uc3QgbmVnYXRlZFJlc3VsdCA9IHJlc3VsdElzTmVnYXRpdmUgPyAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubmVnYXRpdmUpKHJlc3VsdCkgOiByZXN1bHQ7XG4gICAgICAgIHJldHVybiAoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgIG4xOiBuZWdhdGVkUmVzdWx0XG4gICAgICAgIH0sIFwiQ2FuY2VsIG5lZ2F0aXZlc1wiKSk7XG4gICAgfVxufVxuZXhwb3J0cy5DYW5jZWxOZWdhdGl2ZXMgPSBDYW5jZWxOZWdhdGl2ZXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29tYmluZUNvbW1vbkZhY3RvcnNNdWx0aXBsaWNhdGlvbiA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vQXJndW1lbnRcIik7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db252ZW5pZW50RXhwcmVzc2lvbnNcIik7XG5jb25zdCBFeHBvbmVudF8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL0V4cG9uZW50XCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL1Byb2R1Y3RcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9TdW1cIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi8uLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xID0gcmVxdWlyZShcIi4uLy4uL3V0aWwvVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJcIik7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbi8qKlxuICogQ29tYmluZXMgbGlrZSBmYWN0b3JzIGFuZCBleHBvbmVudHMgd2l0aCBsaWtlIGJhc2VzLlxuICovXG5jbGFzcyBDb21iaW5lQ29tbW9uRmFjdG9yc011bHRpcGxpY2F0aW9uIGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gZXhwIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3RcbiAgICAgICAgICAgICYmICFleHAuaXNSZWR1Y2libGU7XG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IGV4cDtcbiAgICAgICAgY29uc3QgdW5pcXVlQmFzZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgZmFjdG9yIG9mIHByb2R1Y3QuZmFjdG9ycykge1xuICAgICAgICAgICAgaWYgKGZhY3RvciBpbnN0YW5jZW9mIEV4cG9uZW50XzEuRXhwb25lbnQpXG4gICAgICAgICAgICAgICAgdW5pcXVlQmFzZXMuYWRkKGZhY3Rvci5iYXNlKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB1bmlxdWVCYXNlcy5hZGQoZmFjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlcXVpdmFsZW50RXhwcmVzc2lvbnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIC8vIEZvciBldmVyeSB1bmlxdWUgZmFjdG9yXG4gICAgICAgIGZvciAoY29uc3QgYmFzZSBvZiB1bmlxdWVCYXNlcykge1xuICAgICAgICAgICAgbGV0IHBvd2VyVGVybXMgPSBbXTtcbiAgICAgICAgICAgIGxldCByZW1haW5pbmdGYWN0b3JzID0gW107XG4gICAgICAgICAgICAvLyBDb3VudCB0aGUgbnVtYmVyIG9mIHRpbWVzIGl0IG9jY3VycyBpbiB0aGUgcHJvZHVjdFxuICAgICAgICAgICAgLy8gQ29sbGVjdCB0aGUgb3RoZXIgZmFjdG9ycyBpbiBhIGxpc3RcbiAgICAgICAgICAgIGZvciAoY29uc3QgZiBvZiBwcm9kdWN0LmZhY3RvcnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZiBpbnN0YW5jZW9mIEV4cG9uZW50XzEuRXhwb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGYuYmFzZSA9PT0gYmFzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvd2VyVGVybXMucHVzaChmLnBvd2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmID09PSBiYXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3dlclRlcm1zLnB1c2goKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nRmFjdG9ycy5wdXNoKGYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gT3JkZXIgdGhlIHBvd2VyIHRlcm1zIGNvcnJlY3RseVxuICAgICAgICAgICAgcG93ZXJUZXJtcyA9ICgwLCBTdW1fMS5vcmRlclRlcm1zKSguLi5wb3dlclRlcm1zKTtcbiAgICAgICAgICAgIC8vIElmIGl0IG9jY3VyZWQgbXVsdGlwbGUgdGltZXMsIGNyZWF0ZSBhIG5ldyBleHBvbmVudFxuICAgICAgICAgICAgLy8gVG8gY29tYmluZSB0aGUgcmVwZWF0c1xuICAgICAgICAgICAgaWYgKHBvd2VyVGVybXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cG9uZW50ID0gRXhwb25lbnRfMS5FeHBvbmVudC5vZihiYXNlLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtKSguLi5wb3dlclRlcm1zKSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlbWFpbmluZ0ZhY3RvcnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZXF1aXZhbGVudEV4cHJlc3Npb25zLmFkZChleHBvbmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBJbnNlcnQgdGhlIG5ldyBleHBvbmVudCBhdCB0aGUgY29ycmVjdCBwbGFjZSBpbiB0aGUgbmV3IHByb2R1Y3RcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaW5zZXJ0Q29ycmVjdGx5KGFyciwgZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBpY2sgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoMCwgUHJvZHVjdF8xLmZhY3Rvck9yZGVyKShlbCwgYXJyW2ldKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDAsIGVsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRDb3JyZWN0bHkocmVtYWluaW5nRmFjdG9ycywgZXhwb25lbnQpO1xuICAgICAgICAgICAgICAgICAgICBlcXVpdmFsZW50RXhwcmVzc2lvbnMuYWRkKFByb2R1Y3RfMS5Qcm9kdWN0Lm9mKHJlbWFpbmluZ0ZhY3RvcnMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHVybiB0aGUgZXF1aXZhbGVudCBleHByZXNzaW9ucyBpbnRvIGluZmVyZW5jZXNcbiAgICAgICAgbGV0IGluZmVyZW5jZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGVxdWl2YWxlbnRFeHByZXNzaW9ucy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgaW5mZXJlbmNlcy5hZGQobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKHByb2R1Y3QpLCB7XG4gICAgICAgICAgICAgICAgbjogcHJvZHVjdCxcbiAgICAgICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICAgICAgbjE6IGUsXG4gICAgICAgICAgICB9LCBcIkNvbWJpbmUgY29tbW9uIGZhY3RvcnMgbXVsdGlwbGljYXRpb25cIikpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGluZmVyZW5jZXM7XG4gICAgfVxufVxuZXhwb3J0cy5Db21iaW5lQ29tbW9uRmFjdG9yc011bHRpcGxpY2F0aW9uID0gQ29tYmluZUNvbW1vbkZhY3RvcnNNdWx0aXBsaWNhdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Db21iaW5lQ29tbW9uVGVybXNBZGRpdGlvbiA9IHZvaWQgMDtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vQXJndW1lbnRcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvUHJvZHVjdFwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvU3VtXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuLyoqXG4gKiBhICsgYSA9IDJhXG4gKiAyYSAtIGEgPSBhICAodGhpcyBtZWFucyB3ZSBoYXZlIHRvIGNoZWNrIGZvciBuZWdhdGlvbnMpXG4gKlxuICogKGJjKWEgKyA3YSA9ICg3ICsgYmMpYVxuICpcbiAqIEJ1dCBub3RcbiAqIDEgKyAxID0gMigxKVxuICovXG5jbGFzcyBDb21iaW5lQ29tbW9uVGVybXNBZGRpdGlvbiBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGV4cCBpbnN0YW5jZW9mIFN1bV8xLlN1bVxuICAgICAgICAgICAgJiYgIWV4cC5pc1JlZHVjaWJsZTtcbiAgICB9XG4gICAgYXBwbHlJbXBsKGV4cCkge1xuICAgICAgICBjb25zdCBzdW0gPSBleHA7XG4gICAgICAgIGNvbnN0IHVuaXF1ZUZhY3RvcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBuZXcgU2V0KCk7XG4gICAgICAgIC8vIEZpbmQgYWxsIHVuaXF1ZSBmYWN0b3JzIGluIGFsbCB0ZXJtc1xuICAgICAgICAvLyBEb24ndCBjb25zaWRlciB0aGUgLTEgaW4gbmVnYXRpb25zXG4gICAgICAgIC8vIENvbnNpZGVyIHRoZSBmYWN0b3JzIG9mIG5lZ2F0ZWQgcHJvZHVjdHMgc2VwYXJhdGVseVxuICAgICAgICBmb3IgKGNvbnN0IHRlcm0gb2Ygc3VtLnRlcm1zKSB7XG4gICAgICAgICAgICBpZiAodGVybSBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlcm0uaXNOZWdhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlcm0ubmVnYXRpb24gaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuYWRkQWxsKSh1bmlxdWVGYWN0b3JzLCAuLi50ZXJtLm5lZ2F0aW9uLmZhY3RvcnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXF1ZUZhY3RvcnMuYWRkKHRlcm0ubmVnYXRpb24pO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuYWRkQWxsKSh1bmlxdWVGYWN0b3JzLCAuLi50ZXJtLmZhY3RvcnMpOyAvL1RPRE86IENhcHR1cmUgYWxsIGNvbWJpbmF0aW9ucyBvZiBmYWN0b3JzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdW5pcXVlRmFjdG9ycy5hZGQodGVybSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ3JlYXRlIGFuIGFyZ3VtZW50IGZvciBwdWxsaW5nIG91dCBlYWNoIGZhY3RvclxuICAgICAgICBmb3IgKGNvbnN0IGZhY3RvciBvZiB1bmlxdWVGYWN0b3JzKSB7XG4gICAgICAgICAgICAvLyBEb24ndCB3YXN0ZSB0aW1lIHdpdGggdW5oZWFsdGh5IGZhY3RvcnNcbiAgICAgICAgICAgIGlmIChmYWN0b3IuaXNSZWR1Y2libGVPckludClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIEZpZ3VyZSBvdXQgd2hpY2ggdGVybXMgY29udGFpbiBpdFxuICAgICAgICAgICAgY29uc3QgcmVsYXZlbnRUZXJtcyA9IFtdO1xuICAgICAgICAgICAgY29uc3Qgb3RoZXJUZXJtcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCB0ZXJtIG9mIHN1bS50ZXJtcykge1xuICAgICAgICAgICAgICAgIGlmICh0ZXJtIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlcm0uaXNOZWdhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQncyBhIG5lZ2F0aW9uLCBjaGVjayBpZiB0aGUgbmVnYXRpb24gaGFzIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVybS5uZWdhdGlvbiA9PT0gZmFjdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF2ZW50VGVybXMucHVzaCh0ZXJtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRlcm0ubmVnYXRpb24gaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5oYXMpKHRlcm0ubmVnYXRpb24uZmFjdG9ycywgZmFjdG9yKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXZlbnRUZXJtcy5wdXNoKHRlcm0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJUZXJtcy5wdXNoKHRlcm0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLmhhcykodGVybS5mYWN0b3JzLCBmYWN0b3IpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXZlbnRUZXJtcy5wdXNoKHRlcm0pO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlclRlcm1zLnB1c2godGVybSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGVybSA9PT0gZmFjdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXZlbnRUZXJtcy5wdXNoKFByb2R1Y3RfMS5Qcm9kdWN0Lm9mKFsoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgxKSwgdGVybV0pKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJUZXJtcy5wdXNoKHRlcm0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFB1bGwgaXQgb3V0IG9mIHRob3NlIHRlcm1zXG4gICAgICAgICAgICBjb25zdCBjb2VmZmljaWVudHMgPSBbXTtcbiAgICAgICAgICAgIGlmIChyZWxhdmVudFRlcm1zLmxlbmd0aCA8IDIpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRlcm0gb2YgcmVsYXZlbnRUZXJtcykge1xuICAgICAgICAgICAgICAgIGlmICh0ZXJtLmlzTmVnYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlcm0ubmVnYXRpb24gaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29lZmZpY2llbnRzLnB1c2goKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm5lZ2F0aXZlKSh0ZXJtLm5lZ2F0aW9uLndpdGhvdXQoZmFjdG9yKSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZWZmaWNpZW50cy5wdXNoKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5uZWdhdGl2ZSkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvZWZmaWNpZW50cy5wdXNoKHRlcm0ud2l0aG91dChmYWN0b3IpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwdWxsZWQgPSAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtT3JOb3QpKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5vcmRlcmVkUHJvZHVjdCkoU3VtXzEuU3VtLm9mKGNvZWZmaWNpZW50cyksIGZhY3RvciksIC4uLm90aGVyVGVybXMpO1xuICAgICAgICAgICAgYXJncy5hZGQobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgICAgIG4xOiBwdWxsZWRcbiAgICAgICAgICAgIH0sIFwiQ29tYmluZSBsaWtlIHRlcm1zXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJncztcbiAgICB9XG59XG5leHBvcnRzLkNvbWJpbmVDb21tb25UZXJtc0FkZGl0aW9uID0gQ29tYmluZUNvbW1vblRlcm1zQWRkaXRpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29tYmluZUludGVnZXJGYWN0b3JzID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9JbnRlZ2VyXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL1Byb2R1Y3RcIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi8uLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xID0gcmVxdWlyZShcIi4uLy4uL3V0aWwvVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJcIik7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbi8qKlxuICogUHJvZHVjdHMgd2l0aCBzZXZlcmFsIGludGVnZXIgdGVybXMgYXJlIHNpbXBsaWZpZWQgdG8gb25seSBpbmNsdWRlIDFcbiAqL1xuY2xhc3MgQ29tYmluZUludGVnZXJGYWN0b3JzIGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gZXhwIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3Q7XG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgY29uc3QgcCA9IGV4cDtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nRmFjdG9ycyA9IFtdO1xuICAgICAgICBsZXQgY29lZmZpY2llbnQgPSAxO1xuICAgICAgICBmb3IgKGNvbnN0IGYgb2YgcC5mYWN0b3JzKSB7XG4gICAgICAgICAgICBpZiAoZiBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKSB7XG4gICAgICAgICAgICAgICAgY29lZmZpY2llbnQgKj0gZi52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZW1haW5pbmdGYWN0b3JzLnB1c2goZik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHAuZmFjdG9ycy5sZW5ndGggLSByZW1haW5pbmdGYWN0b3JzLmxlbmd0aCA8IDIpXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNldCgpO1xuICAgICAgICByZXR1cm4gKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3RPck5vdCkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoY29lZmZpY2llbnQpLCAuLi5yZW1haW5pbmdGYWN0b3JzKVxuICAgICAgICB9LCBcIk11bHRpcGx5IGludGVnZXIgdGVybXNcIikpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29tYmluZUludGVnZXJGYWN0b3JzID0gQ29tYmluZUludGVnZXJGYWN0b3JzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRpdmlkZUZyYWN0aW9ucyA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vQXJndW1lbnRcIik7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db252ZW5pZW50RXhwcmVzc2lvbnNcIik7XG5jb25zdCBFeHBvbmVudF8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL0V4cG9uZW50XCIpO1xuY29uc3QgRnJhY3Rpb25fMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9GcmFjdGlvblwiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9Qcm9kdWN0XCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG5jbGFzcyBEaXZpZGVGcmFjdGlvbnMgZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAgaW5zdGFuY2VvZiBGcmFjdGlvbl8xLkZyYWN0aW9uXG4gICAgICAgICAgICAmJiBleHAubnVtZXJhdG9yIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3RcbiAgICAgICAgICAgICYmIGV4cC5kZW5vbWluYXRvciBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0O1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGNvbnN0IGZyYWMgPSBleHA7XG4gICAgICAgIGNvbnN0IG51bSA9IGZyYWMubnVtZXJhdG9yO1xuICAgICAgICBjb25zdCBkZW4gPSBmcmFjLmRlbm9taW5hdG9yO1xuICAgICAgICAvLyBUYWtlIHRoZSBmYWN0b3JzIG9mIHRoZSBuZWdhdGlvbiBvZiBhbnkgbmVnYXRpb25zXG4gICAgICAgIGNvbnN0IG51bUZhY3RvcnMgPSBudW0uaXNOZWdhdGlvbiA/XG4gICAgICAgICAgICBudW0ubmVnYXRpb24gaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCA/XG4gICAgICAgICAgICAgICAgbnVtLm5lZ2F0aW9uLmZhY3RvcnMgLy8gR2V0IGZhY3RvcnMgaWYgdGhlIG5lZ2F0aW9uIGlzIGEgcHJvZHVjdFxuICAgICAgICAgICAgICAgIDogW251bS5uZWdhdGlvbl0gLy8gSWYgbmVnYXRpb24gaXNuJ3QgYSBwcm9kdWN0LCByZXR1cm4gdGhlIG5lZ2F0aW9uIGFzIGEgbGlzdCBvZiAxXG4gICAgICAgICAgICA6IG51bS5mYWN0b3JzOyAvLyBJZiBub3QgYSBuZWdhdGlvbiwgcmV0dXJuIHRoZSBmYWN0b3JzXG4gICAgICAgIGNvbnN0IGRlbkZhY3RvcnMgPSAhZGVuLmlzTmVnYXRpb24gPyBkZW4uZmFjdG9yc1xuICAgICAgICAgICAgOiBkZW4ubmVnYXRpb24gaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCA/XG4gICAgICAgICAgICAgICAgZGVuLm5lZ2F0aW9uLmZhY3RvcnNcbiAgICAgICAgICAgICAgICA6IFtkZW4ubmVnYXRpb25dO1xuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgYW55IHJlcGVhdHMsIGdpdmUgdXBcbiAgICAgICAgaWYgKG5ldyBTZXQobnVtRmFjdG9ycykuc2l6ZSA8IG51bUZhY3RvcnMubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuICgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKSgpO1xuICAgICAgICBpZiAobmV3IFNldChkZW5GYWN0b3JzKS5zaXplIDwgZGVuRmFjdG9ycy5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKCk7XG4gICAgICAgIC8vIFRyZWF0IGV2ZXJ5IGZhY3RvciBhcyBhbiBleHBvbmVudFxuICAgICAgICBjb25zdCBudW1FeHBvbmVudHMgPSBudW1GYWN0b3JzLm1hcChmID0+IHtcbiAgICAgICAgICAgIGlmIChmIGluc3RhbmNlb2YgRXhwb25lbnRfMS5FeHBvbmVudClcbiAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gRXhwb25lbnRfMS5FeHBvbmVudC5vZihmLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgxKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBkZW5FeHBvbmVudHMgPSBkZW5GYWN0b3JzLm1hcChmID0+IHtcbiAgICAgICAgICAgIGlmIChmIGluc3RhbmNlb2YgRXhwb25lbnRfMS5FeHBvbmVudClcbiAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gRXhwb25lbnRfMS5FeHBvbmVudC5vZihmLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgxKSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBGb3IgZWFjaCBkZW4gZXhwb25lbnQgYmFzZSwgY3JlYXRlIGFuIG92ZXJhbGwgc3VtIG9mIHRoZSBwb3dlcnNcbiAgICAgICAgY29uc3QgbnVtRXhwb25lbnRQb3dlcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIG51bUV4cG9uZW50cy5mb3JFYWNoKGV4cG9uZW50ID0+IHtcbiAgICAgICAgICAgIGlmICghbnVtRXhwb25lbnRQb3dlcnMuaGFzKGV4cG9uZW50LmJhc2UpKVxuICAgICAgICAgICAgICAgIG51bUV4cG9uZW50UG93ZXJzLnNldChleHBvbmVudC5iYXNlLCBbXSk7XG4gICAgICAgICAgICBudW1FeHBvbmVudFBvd2Vycy5nZXQoZXhwb25lbnQuYmFzZSkucHVzaChleHBvbmVudC5wb3dlcik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBkZW5FeHBvbmVudFBvd2VycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgZGVuRXhwb25lbnRzLmZvckVhY2goZXhwb25lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKCFkZW5FeHBvbmVudFBvd2Vycy5oYXMoZXhwb25lbnQuYmFzZSkpXG4gICAgICAgICAgICAgICAgZGVuRXhwb25lbnRQb3dlcnMuc2V0KGV4cG9uZW50LmJhc2UsIFtdKTtcbiAgICAgICAgICAgIGRlbkV4cG9uZW50UG93ZXJzLmdldChleHBvbmVudC5iYXNlKS5wdXNoKGV4cG9uZW50LnBvd2VyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEFueSBiYXNlIHdoaWNoIGlzIGluIHRoZSBudW1lcmF0b3IgYW5kIGRlbm9taW5hdG9yXG4gICAgICAgIC8vIHdpbGwgb25seSBiZSBpbiB0aGUgbnVtZXJhdG9yXG4gICAgICAgIGNvbnN0IG5ld051bUV4cG9uZW50UG93ZXJzID0gbmV3IE1hcChudW1FeHBvbmVudFBvd2Vycyk7XG4gICAgICAgIGNvbnN0IG5ld0RlbkV4cG9uZW50UG93ZXJzID0gbmV3IE1hcChkZW5FeHBvbmVudFBvd2Vycyk7XG4gICAgICAgIGRlbkV4cG9uZW50UG93ZXJzLmZvckVhY2goKHBvd2VycywgYmFzZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG51bUV4cG9uZW50UG93ZXJzLmhhcyhiYXNlKSkge1xuICAgICAgICAgICAgICAgIG5ld051bUV4cG9uZW50UG93ZXJzLmdldChiYXNlKS5wdXNoKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5uZWdhdGl2ZSkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bU9yTm90KSguLi5wb3dlcnMpKSk7XG4gICAgICAgICAgICAgICAgbmV3RGVuRXhwb25lbnRQb3dlcnMuZGVsZXRlKGJhc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gR2V0IHRoZSBuZXcgZmFjdG9ycyBmb3IgdGhlIG51bWVyYXRvciBhbmQgZGVub21pbmF0b3JcbiAgICAgICAgY29uc3QgbmV3TnVtRXhwb25lbnRzID0gW107XG4gICAgICAgIG5ld051bUV4cG9uZW50UG93ZXJzLmZvckVhY2goKHBvd2VycywgYmFzZSkgPT4ge1xuICAgICAgICAgICAgbmV3TnVtRXhwb25lbnRzLnB1c2goRXhwb25lbnRfMS5FeHBvbmVudC5vZihiYXNlLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtT3JOb3QpKC4uLnBvd2VycykpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG5ld0RlbkV4cG9uZW50cyA9IFtdO1xuICAgICAgICBuZXdEZW5FeHBvbmVudFBvd2Vycy5mb3JFYWNoKChwb3dlcnMsIGJhc2UpID0+IHtcbiAgICAgICAgICAgIG5ld0RlbkV4cG9uZW50cy5wdXNoKEV4cG9uZW50XzEuRXhwb25lbnQub2YoYmFzZSwgKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bU9yTm90KSguLi5wb3dlcnMpKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0b3AgPSAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdE9yTm90KSguLi5uZXdOdW1FeHBvbmVudHMpO1xuICAgICAgICBjb25zdCBib3R0b20gPSBuZXdEZW5FeHBvbmVudHMubGVuZ3RoICE9IDAgPyAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdE9yTm90KSguLi5uZXdEZW5FeHBvbmVudHMpIDogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSk7XG4gICAgICAgIC8vIFByZXNlcnZlIHRoZSBuZWdhdGlvbnMgcmVtb3ZlZCBlYXJsaWVyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YobnVtLmlzTmVnYXRpb24gPyAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubmVnYXRpdmUpKHRvcCkgOiB0b3AsIGRlbi5pc05lZ2F0aW9uID8gKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm5lZ2F0aXZlKShib3R0b20pIDogYm90dG9tKTtcbiAgICAgICAgcmV0dXJuICgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgbjE6IHJlc3VsdFxuICAgICAgICB9LCBcIkNhbmNlbCBvdXQgZnJhY3Rpb25zXCIpKTtcbiAgICB9XG59XG5leHBvcnRzLkRpdmlkZUZyYWN0aW9ucyA9IERpdmlkZUZyYWN0aW9ucztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5EaXZpc2lvbklkZW50aXR5ID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IEZyYWN0aW9uXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvRnJhY3Rpb25cIik7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvSW50ZWdlclwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9UaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYlwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuLyoqXG4gKiBBbnl0aGluZyBkaXZpZGVkIGJ5IDEgaXMgdGhlIG51bWVyYXRvclxuICovXG5jbGFzcyBEaXZpc2lvbklkZW50aXR5IGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gZXhwIGluc3RhbmNlb2YgRnJhY3Rpb25fMS5GcmFjdGlvblxuICAgICAgICAgICAgJiYgZXhwLmRlbm9taW5hdG9yIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXJcbiAgICAgICAgICAgICYmIGV4cC5kZW5vbWluYXRvci52YWx1ZSA9PSAxO1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGNvbnN0IGZyYWMgPSBleHA7XG4gICAgICAgIHJldHVybiAoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGZyYWMpLCB7XG4gICAgICAgICAgICBuOiBmcmFjLFxuICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgbjE6IGZyYWMubnVtZXJhdG9yLFxuICAgICAgICB9LCBcIkRpdmlzaW9uIGlkZW50aXR5IGlzIDFcIikpO1xuICAgIH1cbn1cbmV4cG9ydHMuRGl2aXNpb25JZGVudGl0eSA9IERpdmlzaW9uSWRlbnRpdHk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXZhbHVhdGVTdW1zID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9JbnRlZ2VyXCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvU3VtXCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG4vKipcbiAqIENvbWJpbmUgYW55IGludGVnZXIgdGVybXMgaW4gU3Vtcy5cbiAqIGEgKyAyICsgMiArIDI9IGEgKyA0XG4gKiAyIC0gMiA9IDBcbiAqXG4gKiBDb21iaW5lcyBhbGwgb2YgdGhlbSBhdCBvbmNlIG5vIG1hdHRlciBob3cgbWFueSB0ZXJtcyB0aGVyZSBhcmUuXG4gKlxuICovXG5jbGFzcyBFdmFsdWF0ZVN1bXMgZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAgaW5zdGFuY2VvZiBTdW1fMS5TdW07XG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgY29uc3Qgc3VtID0gZXhwO1xuICAgICAgICBjb25zdCBpbnRlZ2VyVGVybXMgPSBbLi4uc3VtLnRlcm1zXS5maWx0ZXIodCA9PiB0IGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpO1xuICAgICAgICBpZiAoaW50ZWdlclRlcm1zLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHJldHVybiAoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdJbnQgPSBpbnRlZ2VyVGVybXMubWFwKGUgPT4gZSkucmVkdWNlKChhLCBiKSA9PiBJbnRlZ2VyXzEuSW50ZWdlci5vZihhLnZhbHVlICsgYi52YWx1ZSkpO1xuICAgICAgICBjb25zdCBvdGhlclRlcm1zID0gWy4uLnN1bS50ZXJtc10uZmlsdGVyKHQgPT4gISh0IGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpKTtcbiAgICAgICAgcmV0dXJuICgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoc3VtKSwge1xuICAgICAgICAgICAgbjogc3VtLFxuICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgbjE6ICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW1Pck5vdCkoLi4ub3RoZXJUZXJtcywgbmV3SW50KVxuICAgICAgICB9LCBcIkV2YWx1YXRlZCBBZGRpdGlvblwiKSk7XG4gICAgfVxufVxuZXhwb3J0cy5FdmFsdWF0ZVN1bXMgPSBFdmFsdWF0ZVN1bXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXhwb25lbnRUb1plcm8gPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgRXhwb25lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9FeHBvbmVudFwiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9JbnRlZ2VyXCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG5jbGFzcyBFeHBvbmVudFRvWmVybyBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGV4cCBpbnN0YW5jZW9mIEV4cG9uZW50XzEuRXhwb25lbnRcbiAgICAgICAgICAgICYmIGV4cC5wb3dlciBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyXG4gICAgICAgICAgICAmJiBleHAucG93ZXIudmFsdWUgPT0gMDtcbiAgICB9XG4gICAgYXBwbHlJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSlcbiAgICAgICAgfSwgXCJBbnl0aGluZyB0byB6ZXJvIGlzIHplcm9cIikpO1xuICAgIH1cbn1cbmV4cG9ydHMuRXhwb25lbnRUb1plcm8gPSBFeHBvbmVudFRvWmVybztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FeHBvbmVudGlhbElkZW50aXR5ID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IEV4cG9uZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvRXhwb25lbnRcIik7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvSW50ZWdlclwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9UaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYlwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuLyoqXG4gKiBBbnl0aGluZyB0byB0aGUgZmlyc3QgaXMganVzdCB0aGF0IHRoaW5nLlxuICogVHVybnMgYW55IGV4cG9uZW50IHdpdGggYSBwb3dlciBvZiAxIHRvIHRoYXQgdGhpbmcuXG4gKi9cbmNsYXNzIEV4cG9uZW50aWFsSWRlbnRpdHkgZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAgaW5zdGFuY2VvZiBFeHBvbmVudF8xLkV4cG9uZW50XG4gICAgICAgICAgICAmJiBleHAucG93ZXIgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlclxuICAgICAgICAgICAgJiYgZXhwLnBvd2VyLnZhbHVlID09IDE7XG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgY29uc3QgZSA9IGV4cDtcbiAgICAgICAgcmV0dXJuICgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZSksIHtcbiAgICAgICAgICAgIG46IGUsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogZS5iYXNlLFxuICAgICAgICB9LCBcIkV4cG9uZW50aWFsIElkZW50aXR5IGlzIDFcIikpO1xuICAgIH1cbn1cbmV4cG9ydHMuRXhwb25lbnRpYWxJZGVudGl0eSA9IEV4cG9uZW50aWFsSWRlbnRpdHk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTXVsdGlwbGljYXRpdmVJZGVudGl0eSA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vQXJndW1lbnRcIik7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db252ZW5pZW50RXhwcmVzc2lvbnNcIik7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvSW50ZWdlclwiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9Qcm9kdWN0XCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG4vKipcbiAqIDF4ID0geFxuICogMSoxeCA9IDFcbiAqL1xuY2xhc3MgTXVsdGlwbGljYXRpdmVJZGVudGl0eSBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGV4cCBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0XG4gICAgICAgICAgICAmJiBuZXcgU2V0KGV4cC5mYWN0b3JzKS5oYXMoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSkpO1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGNvbnN0IHAgPSBleHA7XG4gICAgICAgIGNvbnN0IG5ld0ZhY3RvcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBmYWN0b3Igb2YgcC5mYWN0b3JzKSB7XG4gICAgICAgICAgICBpZiAoZmFjdG9yIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIgJiYgZmFjdG9yLnZhbHVlID09IDEpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBuZXdGYWN0b3JzLnB1c2goZmFjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3RmFjdG9ycy5sZW5ndGggPT0gMClcbiAgICAgICAgICAgIG5ld0ZhY3RvcnMucHVzaCgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgxKSk7XG4gICAgICAgIHJldHVybiAoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgIG4xOiAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdE9yTm90KSguLi5uZXdGYWN0b3JzKVxuICAgICAgICB9LCBcIk11bHRpcGxpY2F0aXZlIElkZW50aXR5XCIpKTtcbiAgICB9XG59XG5leHBvcnRzLk11bHRpcGxpY2F0aXZlSWRlbnRpdHkgPSBNdWx0aXBsaWNhdGl2ZUlkZW50aXR5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk11bHRpcGx5RXhwb25lbnRQb3dlcnMgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgRXhwb25lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9FeHBvbmVudFwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9UaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYlwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuY2xhc3MgTXVsdGlwbHlFeHBvbmVudFBvd2VycyBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGV4cCBpbnN0YW5jZW9mIEV4cG9uZW50XzEuRXhwb25lbnRcbiAgICAgICAgICAgICYmIGV4cC5iYXNlIGluc3RhbmNlb2YgRXhwb25lbnRfMS5FeHBvbmVudDtcbiAgICB9XG4gICAgYXBwbHlJbXBsKGV4cCkge1xuICAgICAgICBjb25zdCBvdXRlciA9IGV4cDtcbiAgICAgICAgY29uc3QgaW5uZXIgPSBvdXRlci5iYXNlO1xuICAgICAgICByZXR1cm4gKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogRXhwb25lbnRfMS5FeHBvbmVudC5vZihpbm5lci5iYXNlLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdCkoaW5uZXIucG93ZXIsIG91dGVyLnBvd2VyKSlcbiAgICAgICAgfSwgXCJFeHBvbmVudHMgdG8gZXhwb25lbnRzIG11bHRpcGx5XCIpKTtcbiAgICB9XG59XG5leHBvcnRzLk11bHRpcGx5RXhwb25lbnRQb3dlcnMgPSBNdWx0aXBseUV4cG9uZW50UG93ZXJzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk9yZGVyU3VtcyA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vQXJndW1lbnRcIik7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db252ZW5pZW50RXhwcmVzc2lvbnNcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9TdW1cIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi8uLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xID0gcmVxdWlyZShcIi4uLy4uL3V0aWwvVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJcIik7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbi8qKlxuICogVHVybnMgc3VtcyB0aGF0IGFyZSB1bmhlYWx0aHkgYmVjYXVzZSB0aGVpciB0ZXJtIG9yZGVyXG4gKiBpcyB3cm9uZyBpbnRvIGNvcnJlY3RseSBvcmRlcmVkIHN1bXMuXG4gKi9cbmNsYXNzIE9yZGVyU3VtcyBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGV4cCBpbnN0YW5jZW9mIFN1bV8xLlN1bSAmJiAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEub3JkZXJlZFN1bSkoZXhwKSAhPT0gZXhwO1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2V0KFtuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICAgICAgbjE6ICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5vcmRlcmVkU3VtKShleHApLFxuICAgICAgICAgICAgfSwgXCJSZW9yZGVyZWRcIildKTtcbiAgICB9XG59XG5leHBvcnRzLk9yZGVyU3VtcyA9IE9yZGVyU3VtcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Qb3dlclJ1bGUgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgRGVyaXZhdGl2ZV8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL0Rlcml2YXRpdmVcIik7XG5jb25zdCBFeHBvbmVudF8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL0V4cG9uZW50XCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG4vKipcbiAqIERlcml2ZXMgdXNpbmcgdGhlIHBvd2VyIHJ1bGVcbiAqL1xuY2xhc3MgUG93ZXJSdWxlIGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gZXhwIGluc3RhbmNlb2YgRGVyaXZhdGl2ZV8xLkRlcml2YXRpdmVcbiAgICAgICAgICAgICYmICgoZXhwLmV4cCBpbnN0YW5jZW9mIEV4cG9uZW50XzEuRXhwb25lbnRcbiAgICAgICAgICAgICAgICAmJiBleHAuZXhwLmJhc2UgPT09IGV4cC5yZWxhdGl2ZVRvXG4gICAgICAgICAgICAgICAgJiYgZXhwLmV4cC5wb3dlci5pc0NvbnN0YW50KVxuICAgICAgICAgICAgICAgIHx8IChleHAuZXhwID09PSBleHAucmVsYXRpdmVUbykpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXZSBrbm93OlxuICAgICAqIGV4cCBpcyBhIERlcml2YXRpdmUgb2YgYW4gRXhwb25lbnQgd2l0aCBhIGNvbnN0YW50IHBvd2VyXG4gICAgICogdGhlIGV4cG9uZW50J3MgYmFzZSBpcyB0aGUgc2FtZSBhcyB3aGF0IHRoZSBkZXJpdmF0aXZlIGlzIHJlbGF0aXZlIHRvXG4gICAgICovXG4gICAgYXBwbHlJbXBsKGV4cCkge1xuICAgICAgICBjb25zdCBkID0gZXhwO1xuICAgICAgICBsZXQgZXhwb25lbnQ7XG4gICAgICAgIGlmIChkLmV4cCBpbnN0YW5jZW9mIEV4cG9uZW50XzEuRXhwb25lbnQpIHtcbiAgICAgICAgICAgIGV4cG9uZW50ID0gZC5leHA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBleHBvbmVudCA9IEV4cG9uZW50XzEuRXhwb25lbnQub2YoZC5leHAsICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDEpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdCkoZXhwb25lbnQucG93ZXIsIEV4cG9uZW50XzEuRXhwb25lbnQub2YoZXhwb25lbnQuYmFzZSwgKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bUludHVpdGl2ZSkoZXhwb25lbnQucG93ZXIsICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5uZWdhdGl2ZSkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSkpKSkpO1xuICAgICAgICByZXR1cm4gKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogcmVzdWx0XG4gICAgICAgIH0sIFwiUG93ZXIgcnVsZVwiKSk7XG4gICAgfVxufVxuZXhwb3J0cy5Qb3dlclJ1bGUgPSBQb3dlclJ1bGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUHJvZHVjdFJ1bGUgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgRGVyaXZhdGl2ZV8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL0Rlcml2YXRpdmVcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvUHJvZHVjdFwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9UaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYlwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuLyoqXG4gKiBEZXJpdmF0aXZlcyBvZiBwcm9kdWN0c1xuICpcbiAqIE9ubHkgb3BlcmF0ZXMgb24gZGVyaXZhdGl2ZXMgb2YgcHJvZHVjdHMgd2hlcmUgYWxsIGZhY3RvcnMgYXJlIG5vdCBjb25zdGFudC5cbiAqL1xuY2xhc3MgUHJvZHVjdFJ1bGUgZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAgaW5zdGFuY2VvZiBEZXJpdmF0aXZlXzEuRGVyaXZhdGl2ZVxuICAgICAgICAgICAgJiYgZXhwLmV4cCBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0XG4gICAgICAgICAgICAvLyBDb250YWlucyBubyBjb25zdGFudCBmYWN0b3JzXG4gICAgICAgICAgICAmJiAhZXhwLmV4cC5mYWN0b3JzLm1hcChmID0+IGYuaXNDb25zdGFudCkucmVkdWNlKChhLCBiKSA9PiBhIHx8IGIpO1xuICAgICAgICAvLyBDb250YWlucyBubyBkZXJpdmF0aXZlcyBUT0RPOiBGaW5kIGEgYmV0dGVyIHNvbHV0aW9uIHRvIGxvb3AgZ3VhcmRpbmdcbiAgICAgICAgLy8mJiAhZXhwLmV4cC5mYWN0b3JzLm1hcDxib29sZWFuPihmID0+IGYgaW5zdGFuY2VvZiBEZXJpdmF0aXZlKS5yZWR1Y2UoKGEsIGIpID0+IGEgfHwgYilcbiAgICB9XG4gICAgYXBwbHlJbXBsKGV4cCkge1xuICAgICAgICBjb25zdCBkID0gZXhwO1xuICAgICAgICBjb25zdCBwID0gZC5leHA7XG4gICAgICAgIGNvbnN0IGZhY3RvcnMgPSBwLmZhY3RvcnM7XG4gICAgICAgIC8vIEZvciBlYWNoIGZhY3RvciwgY3JlYXRlIGEgcHJvZHVjdCBjb250YWluaW5nIGl0cyBkZXJpdmF0aXZlIGFuZCB0aGUgb3RoZXIgZmFjdG9yc1xuICAgICAgICBjb25zdCB0ZXJtcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZhY3RvcnMubGVuZ3RoOyBpKyspIHsgLy8gaSBpcyB0aGUgZmFjdG9yIHRvIGRlcml2YXRpemUgKHdoYXQgdGVybSB3ZSdyZSBvbilcbiAgICAgICAgICAgIGNvbnN0IGZhY3RvclRvRGVyaXZhdGl6ZSA9IGZhY3RvcnNbaV07XG4gICAgICAgICAgICBjb25zdCBwRmFjdG9ycyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBmYWN0b3Igb2YgZmFjdG9ycykgeyAvLyBhIGlzIHRoZSB0aGUgZmFjdG9yIHdlJ3JlIG9uXG4gICAgICAgICAgICAgICAgaWYgKGZhY3RvciA9PT0gZmFjdG9yVG9EZXJpdmF0aXplKVxuICAgICAgICAgICAgICAgICAgICBwRmFjdG9ycy5wdXNoKERlcml2YXRpdmVfMS5EZXJpdmF0aXZlLm9mKGZhY3RvciwgZC5yZWxhdGl2ZVRvKSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBwRmFjdG9ycy5wdXNoKGZhY3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZXJtcy5wdXNoKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5wcm9kdWN0KSguLi5wRmFjdG9ycykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGQpLCB7XG4gICAgICAgICAgICBuOiBkLFxuICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgbjE6ICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKC4uLnRlcm1zKVxuICAgICAgICB9LCBcIlByb2R1Y3QgUnVsZVwiKSk7XG4gICAgfVxufVxuZXhwb3J0cy5Qcm9kdWN0UnVsZSA9IFByb2R1Y3RSdWxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlB1bGxDb25zdGFudHNGcm9tRGVyaXZhdGl2ZXMgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgRGVyaXZhdGl2ZV8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL0Rlcml2YXRpdmVcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvUHJvZHVjdFwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9UaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYlwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuY2xhc3MgUHVsbENvbnN0YW50c0Zyb21EZXJpdmF0aXZlcyBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGV4cCBpbnN0YW5jZW9mIERlcml2YXRpdmVfMS5EZXJpdmF0aXZlXG4gICAgICAgICAgICAmJiBleHAuZXhwIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3Q7XG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgY29uc3QgZCA9IGV4cDtcbiAgICAgICAgY29uc3QgcCA9IGQuZXhwO1xuICAgICAgICBjb25zdCBjb25zdEZhY3RvcnMgPSBwLmZhY3RvcnMuZmlsdGVyKGYgPT4gZi5pc0NvbnN0YW50KTtcbiAgICAgICAgY29uc3Qgb3V0ID0gbmV3IFNldDtcbiAgICAgICAgZm9yIChjb25zdCBmYWN0b3Igb2YgY29uc3RGYWN0b3JzKSB7XG4gICAgICAgICAgICBvdXQuYWRkKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShkKSwge1xuICAgICAgICAgICAgICAgIG46IGQsXG4gICAgICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgICAgIG4xOiAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdEFuZE5vdFRpbWVzT25lKShmYWN0b3IsIERlcml2YXRpdmVfMS5EZXJpdmF0aXZlLm9mKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5wcm9kdWN0T3JOb3QpKC4uLigwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5yZW1vdmVOZXcpKHAuZmFjdG9ycywgZmFjdG9yKSksIGQucmVsYXRpdmVUbykpXG4gICAgICAgICAgICB9LCBcIlB1bGwgY29uc3RhbnQgZmFjdG9yIGZyb20gZGVyaXZhdGl2ZVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG59XG5leHBvcnRzLlB1bGxDb25zdGFudHNGcm9tRGVyaXZhdGl2ZXMgPSBQdWxsQ29uc3RhbnRzRnJvbURlcml2YXRpdmVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlF1b3RpZW50UnVsZSA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vQXJndW1lbnRcIik7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db252ZW5pZW50RXhwcmVzc2lvbnNcIik7XG5jb25zdCBEZXJpdmF0aXZlXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvRGVyaXZhdGl2ZVwiKTtcbmNvbnN0IEV4cG9uZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvRXhwb25lbnRcIik7XG5jb25zdCBGcmFjdGlvbl8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL0ZyYWN0aW9uXCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG5jbGFzcyBRdW90aWVudFJ1bGUgZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAgaW5zdGFuY2VvZiBEZXJpdmF0aXZlXzEuRGVyaXZhdGl2ZVxuICAgICAgICAgICAgJiYgZXhwLmV4cCBpbnN0YW5jZW9mIEZyYWN0aW9uXzEuRnJhY3Rpb247XG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgY29uc3QgZCA9IGV4cDtcbiAgICAgICAgY29uc3QgYSA9IGQuZXhwLm51bWVyYXRvcjtcbiAgICAgICAgY29uc3QgYiA9IGQuZXhwLmRlbm9taW5hdG9yO1xuICAgICAgICByZXR1cm4gKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogRnJhY3Rpb25fMS5GcmFjdGlvbi5vZigoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtKSgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdCkoRGVyaXZhdGl2ZV8xLkRlcml2YXRpdmUub2YoYSwgZC5yZWxhdGl2ZVRvKSwgYiksICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5uZWdhdGl2ZSkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3QpKGEsIERlcml2YXRpdmVfMS5EZXJpdmF0aXZlLm9mKGIsIGQucmVsYXRpdmVUbykpKSksIEV4cG9uZW50XzEuRXhwb25lbnQub2YoYiwgKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMikpKVxuICAgICAgICB9LCBcIlF1b3RpZW50IFJ1bGVcIikpO1xuICAgIH1cbn1cbmV4cG9ydHMuUXVvdGllbnRSdWxlID0gUXVvdGllbnRSdWxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlN1bUNvZWZmaWNpZW50c09mQWRkZWRUZXJtcyA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vQXJndW1lbnRcIik7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db252ZW5pZW50RXhwcmVzc2lvbnNcIik7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvSW50ZWdlclwiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9Qcm9kdWN0XCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvU3VtXCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG4vKipcbiAqIFRha2VzIHN1bXMgb2Ygc2V2ZXJhbCBhZGRlZCBwcm9kdWN0cyBhbmQgY29tYmluZXMgb25lcyB0aGF0IG9ubHlcbiAqIGhhdmUgZGlmZmVyZW50IGNvZWZmaWNpZW50cy5cbiAqXG4gKiBhICsgMmEgPSAzYVxuICogYSAtIDJhID0gLTFhXG4gKi9cbmNsYXNzIFN1bUNvZWZmaWNpZW50c09mQWRkZWRUZXJtcyBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGV4cCBpbnN0YW5jZW9mIFN1bV8xLlN1bTtcbiAgICB9XG4gICAgYXBwbHlJbXBsKGV4cCkge1xuICAgICAgICBjb25zdCB0ZXJtcyA9IGV4cC50ZXJtcztcbiAgICAgICAgLy8gU3BsaXQgdGhlIHRlcm1zIGludG8gcHJvZHVjdCBhbmQgbm90IHByb2R1Y3RzXG4gICAgICAgIGNvbnN0IHByb2R1Y3RUZXJtcyA9IFtdO1xuICAgICAgICBjb25zdCBub25Qcm9kdWN0VGVybXMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCB0ZXJtIG9mIHRlcm1zKSB7XG4gICAgICAgICAgICBpZiAodGVybSBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0ICYmIHRlcm0uZmFjdG9yc1swXSBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRlcm1zLnB1c2godGVybSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBub25Qcm9kdWN0VGVybXMucHVzaCh0ZXJtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBTb3J0IHRoZSBwcm9kdWN0IHRlcm1zIGludG8gZ3JvdXBzIG9mIGNvbW1vbiBmYWN0b3JzXG4gICAgICAgIGNvbnN0IGdyb3VwcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgZm9yIChjb25zdCB0ZXJtIG9mIHByb2R1Y3RUZXJtcykge1xuICAgICAgICAgICAgY29uc3QgZmlyc3QgPSB0ZXJtLmZhY3RvcnNbMF07XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gWy4uLnRlcm0uZmFjdG9yc107XG4gICAgICAgICAgICB0ZW1wLnNwbGljZSgwLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3RPck5vdCkoLi4udGVtcCk7XG4gICAgICAgICAgICBpZiAoIWdyb3Vwcy5oYXMoZ3JvdXApKVxuICAgICAgICAgICAgICAgIGdyb3Vwcy5zZXQoZ3JvdXAsIHsgY29lZmZpY2llbnQ6IGZpcnN0LnZhbHVlLCBtb3JlVGhhbk9uZTogZmFsc2UgfSk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBncm91cHMuZ2V0KGdyb3VwKS5jb2VmZmljaWVudCArPSBmaXJzdC52YWx1ZTtcbiAgICAgICAgICAgICAgICBncm91cHMuZ2V0KGdyb3VwKS5tb3JlVGhhbk9uZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRm9yIGV2ZXJ5IGdyb3VwIHdpdGggbW9yZSB0aGFuIG9uZSBwcm9kdWN0LCBwcm9kdWNlIGEgbmV3IGFyZ3VtZW50XG4gICAgICAgIGNvbnN0IG91dCA9IG5ldyBTZXQoKTtcbiAgICAgICAgZ3JvdXBzLmZvckVhY2goKG9iaiwgZ3JvdXApID0+IHtcbiAgICAgICAgICAgIGlmICghb2JqLm1vcmVUaGFuT25lKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RUZXJtc05vdENvbWJpbmVkID0gcHJvZHVjdFRlcm1zLmZpbHRlcih0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0gWy4uLnQuZmFjdG9yc107XG4gICAgICAgICAgICAgICAgdGVtcC5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVybVdpdGhvdXRMZWFkaW5nQ29lZmZpY2llbnQgPSAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdE9yTm90KSguLi50ZW1wKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXAgIT09IHRlcm1XaXRob3V0TGVhZGluZ0NvZWZmaWNpZW50O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBvdXQuYWRkKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgICAgICBuMTogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bU9yTm90KSgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdEFuZE5vdFRpbWVzT25lKSgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKShvYmouY29lZmZpY2llbnQpLCBncm91cCksIC4uLm5vblByb2R1Y3RUZXJtcywgLi4ucHJvZHVjdFRlcm1zTm90Q29tYmluZWQpXG4gICAgICAgICAgICB9LCBcIkNvbWJpbmluZyBsaWtlIHRlcm1zXCIpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxufVxuZXhwb3J0cy5TdW1Db2VmZmljaWVudHNPZkFkZGVkVGVybXMgPSBTdW1Db2VmZmljaWVudHNPZkFkZGVkVGVybXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVVN1YnN0aXR1dGlvbiA9IHZvaWQgMDtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuY2xhc3MgVVN1YnN0aXR1dGlvbiBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvL2V4cCBpbnN0YW5jZW9mIEludGVncmFsXG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkXCIpO1xuICAgIH1cbn1cbmV4cG9ydHMuVVN1YnN0aXR1dGlvbiA9IFVTdWJzdGl0dXRpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRGVyaXZhdGl2ZVR5cGUgPSBleHBvcnRzLkRlcml2YXRpdmUgPSB2b2lkIDA7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uXCIpO1xuY29uc3QgSW50ZWdlcl8xID0gcmVxdWlyZShcIi4vSW50ZWdlclwiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuL1Byb2R1Y3RcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuL1N1bVwiKTtcbi8qKlxuICpcbiAqL1xuY2xhc3MgRGVyaXZhdGl2ZSBleHRlbmRzIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uIHtcbiAgICBzdGF0aWMgb2YoZXhwLCByZWxhdGl2ZVRvKSB7XG4gICAgICAgIGNvbnN0IGhhc2ggPSBleHAuaGFzaCArIHJlbGF0aXZlVG8uaGFzaDtcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlcy5oYXMoaGFzaCkpXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlcy5zZXQoaGFzaCwgbmV3IERlcml2YXRpdmUoZXhwLCByZWxhdGl2ZVRvKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlcy5nZXQoaGFzaCk7XG4gICAgfVxuICAgIHN0YXRpYyBpbnN0YW5jZXMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3RydWN0b3IoZXhwLCByZWxhdGl2ZVRvKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZXhwID0gZXhwO1xuICAgICAgICB0aGlzLnJlbGF0aXZlVG8gPSByZWxhdGl2ZVRvO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMuZXhwKTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLnJlbGF0aXZlVG8pO1xuICAgICAgICB0aGlzLmlzUmVkdWNpYmxlID0gZmFsc2U7IC8vVE9ETzogRGV0ZXJtaW5lIGlmIGEgZGVyaXZhdGl2ZSBpcyByZWR1Y2libGVcbiAgICAgICAgdGhpcy5pc0NvbnN0YW50ID0gZmFsc2U7IC8vIFRPRE86IERldGVybWluZSBpZiBhIGRlcml2YXRpdmUgaXMgY29uc3RhbnRcbiAgICAgICAgdGhpcy5jaGlsZENvdW50ID0gMiArIGV4cC5jaGlsZENvdW50ICsgcmVsYXRpdmVUby5jaGlsZENvdW50O1xuICAgICAgICBsZXQgaXNIZWFsdGh5ID0gdHJ1ZTtcbiAgICAgICAgaWYgKGV4cC5pc0NvbnN0YW50KVxuICAgICAgICAgICAgaXNIZWFsdGh5ID0gZmFsc2U7XG4gICAgICAgIGlmIChleHAgaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCkge1xuICAgICAgICAgICAgbmV3IFNldChleHAuZmFjdG9ycykuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyIHx8IGUgaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCAmJiBlLmlzTmVnYXRpb24gJiYgZS5uZWdhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgaXNIZWFsdGh5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy9UT0RPOiBUaGVyZSBhcmUgYSBsb3QgbW9yZSBwb3NzaWJsaXRpZXMgdGhhbiB0aGlzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzSGVhbHRoeSA9IGlzSGVhbHRoeTtcbiAgICB9XG4gICAgZXhwO1xuICAgIHJlbGF0aXZlVG87XG4gICAgaXNSZWR1Y2libGU7XG4gICAgY2xhc3MgPSBleHBvcnRzLkRlcml2YXRpdmVUeXBlO1xuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCJkL2RcIiArIHRoaXMucmVsYXRpdmVUby50b1N0cmluZygpICsgXCIoXCIgKyB0aGlzLmV4cC50b1N0cmluZygpICsgXCIpXCI7XG4gICAgfVxuICAgIGdldCBoYXNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGFzcyArIHRoaXMuZXhwLmhhc2ggKyB0aGlzLnJlbGF0aXZlVG8uaGFzaDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogMS4gZXhwIGlzbid0IGEgY29uc3RhbnRcbiAgICAgKiAyLiBJZiBleHAgaXMgcHJvZHVjdCwgaXQgY29udGFpbnMgbm8gY29uc3RhbnRzLlxuICAgICAqL1xuICAgIGlzSGVhbHRoeTtcbiAgICB0b01hdGhYTUwoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHdyYXBJZk5lZWRlZChleHApIHtcbiAgICAgICAgICAgIGlmIChleHAuY2xhc3MgPT0gU3VtXzEuU3VtVHlwZSB8fCBleHAuY2xhc3MgPT0gUHJvZHVjdF8xLlByb2R1Y3RUeXBlKVxuICAgICAgICAgICAgICAgIHJldHVybiBcIjxtbz4oPC9tbz5cIiArIGV4cC50b01hdGhYTUwoKSArIFwiPG1vPik8L21vPlwiO1xuICAgICAgICAgICAgcmV0dXJuIGV4cC50b01hdGhYTUwoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCI8bWZyYWM+PG1uPmQ8L21uPjxtcm93Pjxtbj5kPC9tbj5cIiArIHdyYXBJZk5lZWRlZCh0aGlzLnJlbGF0aXZlVG8pICsgXCI8L21yb3c+PC9tZnJhYz5cIiArIHdyYXBJZk5lZWRlZCh0aGlzLmV4cCk7XG4gICAgfVxuICAgIGlzQ29uc3RhbnQ7XG4gICAgY2hpbGRDb3VudDtcbn1cbmV4cG9ydHMuRGVyaXZhdGl2ZSA9IERlcml2YXRpdmU7XG5leHBvcnRzLkRlcml2YXRpdmVUeXBlID0gXCJEZXJpdmF0aXZlXCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXhwb25lbnRUeXBlID0gZXhwb3J0cy5FeHBvbmVudCA9IHZvaWQgMDtcbmNvbnN0IE1hdGhNTEhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuLi91dGlsL01hdGhNTEhlbHBlcnNcIik7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4vUHJvZHVjdFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4vU3VtXCIpO1xuY2xhc3MgRXhwb25lbnQgZXh0ZW5kcyBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbiB7XG4gICAgc3RhdGljIG9mKGJhc2UsIHBvd2VyKSB7XG4gICAgICAgIGNvbnN0IGhhc2ggPSBiYXNlLmhhc2ggKyBwb3dlci5oYXNoO1xuICAgICAgICBpZiAoIUV4cG9uZW50Lmluc3RhbmNlcy5oYXMoaGFzaCkpIHtcbiAgICAgICAgICAgIEV4cG9uZW50Lmluc3RhbmNlcy5zZXQoaGFzaCwgbmV3IEV4cG9uZW50KGJhc2UsIHBvd2VyKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEV4cG9uZW50Lmluc3RhbmNlcy5nZXQoaGFzaCk7XG4gICAgfVxuICAgIHN0YXRpYyBpbnN0YW5jZXMgPSBuZXcgTWFwKCk7XG4gICAgY2xhc3MgPSBleHBvcnRzLkV4cG9uZW50VHlwZTtcbiAgICB0b01hdGhYTUwoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHdyYXBJZk5lZWRlZChleHApIHtcbiAgICAgICAgICAgIGlmIChleHAuY2xhc3MgPT0gU3VtXzEuU3VtVHlwZSB8fCBleHAuY2xhc3MgPT0gUHJvZHVjdF8xLlByb2R1Y3RUeXBlKVxuICAgICAgICAgICAgICAgIHJldHVybiAoMCwgTWF0aE1MSGVscGVyc18xLmluUm93KSgoMCwgTWF0aE1MSGVscGVyc18xLmluUGFyZW4pKGV4cC50b01hdGhYTUwoKSkpO1xuICAgICAgICAgICAgcmV0dXJuIGV4cC50b01hdGhYTUwoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCI8bXN1cD5cIiArIHdyYXBJZk5lZWRlZCh0aGlzLmJhc2UpICsgKDAsIE1hdGhNTEhlbHBlcnNfMS5pblJvdykodGhpcy5wb3dlci50b01hdGhYTUwoKSkgKyBcIjwvbXN1cD5cIjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBcIihcIiArIHRoaXMuYmFzZSArIFwiKV4oXCIgKyB0aGlzLnBvd2VyICsgXCIpXCI7XG4gICAgfVxuICAgIGdldCBoYXNoKCkge1xuICAgICAgICByZXR1cm4gXCJFeHBvbmVudFwiICsgdGhpcy5iYXNlLmhhc2ggKyB0aGlzLnBvd2VyLmhhc2g7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKGJhc2UsIHBvd2VyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYmFzZSA9IGJhc2U7XG4gICAgICAgIHRoaXMucG93ZXIgPSBwb3dlcjtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLmJhc2UpO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMucG93ZXIpO1xuICAgICAgICAvLyBUaGUgaW50ZWdlcnMgYXJlIGNsb3NlZCBvdmVyIGV4cG9uZW50aWF0aW9uXG4gICAgICAgIHRoaXMuaXNSZWR1Y2libGUgPSAoYmFzZS5pc1JlZHVjaWJsZU9ySW50KSAmJiAocG93ZXIuaXNSZWR1Y2libGVPckludCk7IC8vICYmIE1hdGgucG93KGJhc2UucmVkdWNlZC52YWx1ZSwgcG93ZXIucmVkdWNlZC52YWx1ZSkgJSAxID09IDBcbiAgICAgICAgdGhpcy5pc0hlYWx0aHkgPSAhdGhpcy5pc1JlZHVjaWJsZTtcbiAgICAgICAgdGhpcy5pc0NvbnN0YW50ID0gYmFzZS5pc0NvbnN0YW50ICYmIHBvd2VyLmlzQ29uc3RhbnQ7XG4gICAgICAgIHRoaXMuY2hpbGRDb3VudCA9IDIgKyBiYXNlLmNoaWxkQ291bnQgKyBwb3dlci5jaGlsZENvdW50O1xuICAgIH1cbiAgICBiYXNlO1xuICAgIHBvd2VyO1xuICAgIGlzUmVkdWNpYmxlO1xuICAgIGlzSGVhbHRoeTtcbiAgICBpc0NvbnN0YW50O1xuICAgIGNoaWxkQ291bnQ7XG59XG5leHBvcnRzLkV4cG9uZW50ID0gRXhwb25lbnQ7XG5leHBvcnRzLkV4cG9uZW50VHlwZSA9IFwiRXhwb25lbnRcIjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FeHByZXNzaW9uID0gdm9pZCAwO1xuY29uc3QgSW50ZWdlcl8xID0gcmVxdWlyZShcIi4vSW50ZWdlclwiKTtcbmNvbnN0IE1hdGhFbGVtZW50XzEgPSByZXF1aXJlKFwiLi9NYXRoRWxlbWVudFwiKTtcbi8qKlxuICogQmFzZSBvZiBhbGwgbWF0aGVtYXRpY2FsIGV4cHJlc3Npb25zLlxuICogQWxsIGNoaWxkcmVuIHNob3VsZCBpbXBsZW1lbnQgZmx5LXdoZWVsIHBhdHRlcm4uXG4gKiBBbGwgY2hpbGRyZW4gc2hvdWxkIGJlIGltbXV0YWJsZS5cbiAqL1xuY2xhc3MgRXhwcmVzc2lvbiBleHRlbmRzIE1hdGhFbGVtZW50XzEuTWF0aEVsZW1lbnQge1xuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGV4cHJlc3Npb24gaXMgcmVkdWNpYmxlIG9yIGlzIGFuIGludGVnZXIuXG4gICAgICovXG4gICAgZ2V0IGlzUmVkdWNpYmxlT3JJbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzUmVkdWNpYmxlIHx8IHRoaXMuY2xhc3MgPT0gSW50ZWdlcl8xLkludGVnZXJUeXBlO1xuICAgIH1cbn1cbmV4cG9ydHMuRXhwcmVzc2lvbiA9IEV4cHJlc3Npb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRnJhY3Rpb25UeXBlID0gZXhwb3J0cy5GcmFjdGlvbiA9IHZvaWQgMDtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuL0V4cHJlc3Npb25cIik7XG5jbGFzcyBGcmFjdGlvbiBleHRlbmRzIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uIHtcbiAgICBzdGF0aWMgb2YobnVtZXJhdG9yLCBkZW5vbWluYXRvcikge1xuICAgICAgICBjb25zdCBoYXNoID0gbnVtZXJhdG9yLmhhc2ggKyBkZW5vbWluYXRvci5oYXNoO1xuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2UuaGFzKGhhc2gpKVxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXQoaGFzaCwgbmV3IEZyYWN0aW9uKG51bWVyYXRvciwgZGVub21pbmF0b3IpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZ2V0KGhhc2gpO1xuICAgIH1cbiAgICBzdGF0aWMgaW5zdGFuY2UgPSBuZXcgTWFwKCk7XG4gICAgY29uc3RydWN0b3IobnVtLCBkZW5vbSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm51bWVyYXRvciA9IG51bTtcbiAgICAgICAgdGhpcy5kZW5vbWluYXRvciA9IGRlbm9tO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMubnVtZXJhdG9yKTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLmRlbm9taW5hdG9yKTtcbiAgICAgICAgLypcbiAgICAgICAgQSBmcmFjdGlvbiBpcyByZWR1Y2libGUgaWYgdGhlIGRlbm9tIHwgbnVtLlxuICAgICAgICAgICAgPD0+IG51bSA9IGsgKiBkZW5vbSB3aGVyZSBrIGlzIGFuIGludGVnZXIuXG5cbiAgICAgICAgVGhpcyBtYWtlcyBwcm92aW5nIHJlZHVjaWJpbGl0eSBoYXJkLlxuICAgICAgICBUT0RPOiBEZWNpZGUgaWYgaXQncyB3b3J0aCBpbXBsZW1lbnRpbmcgcmVkdWNpYmlsaXR5IGZvciBGcmFjdGlvbnNcbiAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pc1JlZHVjaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzSGVhbHRoeSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNDb25zdGFudCA9IG51bS5pc0NvbnN0YW50ICYmIGRlbm9tLmlzQ29uc3RhbnQ7XG4gICAgICAgIHRoaXMuY2hpbGRDb3VudCA9IDIgKyBudW0uY2hpbGRDb3VudCArIGRlbm9tLmNoaWxkQ291bnQ7XG4gICAgfVxuICAgIG51bWVyYXRvcjtcbiAgICBkZW5vbWluYXRvcjtcbiAgICBpc1JlZHVjaWJsZTtcbiAgICBjbGFzcyA9IGV4cG9ydHMuRnJhY3Rpb25UeXBlO1xuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5udW1lcmF0b3IudG9TdHJpbmcoKSArIFwiIC8gXCIgKyB0aGlzLmRlbm9taW5hdG9yLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGdldCBoYXNoKCkge1xuICAgICAgICByZXR1cm4gZXhwb3J0cy5GcmFjdGlvblR5cGUgKyB0aGlzLm51bWVyYXRvci5oYXNoICsgdGhpcy5kZW5vbWluYXRvci5oYXNoO1xuICAgIH1cbiAgICBpc0hlYWx0aHk7XG4gICAgaXNDb25zdGFudDtcbiAgICB0b01hdGhYTUwoKSB7XG4gICAgICAgIHJldHVybiBcIjxtZnJhYz48bXJvdz5cIiArIHRoaXMubnVtZXJhdG9yLnRvTWF0aFhNTCgpICsgXCI8L21yb3c+PG1yb3c+XCIgKyB0aGlzLmRlbm9taW5hdG9yLnRvTWF0aFhNTCgpICsgXCI8L21yb3c+PC9tZnJhYz5cIjtcbiAgICB9XG4gICAgY2hpbGRDb3VudDtcbn1cbmV4cG9ydHMuRnJhY3Rpb24gPSBGcmFjdGlvbjtcbmV4cG9ydHMuRnJhY3Rpb25UeXBlID0gXCJGcmFjdGlvblwiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkludGVnZXJUeXBlID0gZXhwb3J0cy5JbnRlZ2VyID0gdm9pZCAwO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi4vdXRpbC9hc3NlcnRcIik7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uXCIpO1xuLyoqXG4gKiBJbnRlZ2VyXG4gKiBQb3NpdGl2ZSBvciBuZWdhdGl2ZVxuICovXG5jbGFzcyBJbnRlZ2VyIGV4dGVuZHMgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24ge1xuICAgIHN0YXRpYyBvZih2YWx1ZSkge1xuICAgICAgICBpZiAoIUludGVnZXIuaW5zdGFuY2VzLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIEludGVnZXIuaW5zdGFuY2VzLnNldCh2YWx1ZSwgbmV3IEludGVnZXIodmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSW50ZWdlci5pbnN0YW5jZXMuZ2V0KHZhbHVlKTtcbiAgICB9XG4gICAgc3RhdGljIGluc3RhbmNlcyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMudmFsdWUgJSAxID09IDAsIFwiQ3JlYXRpbmcgbm9uLWludGVnZXIgaW50ZWdlciBcIiArIHRoaXMudmFsdWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyBBIHBvc2l0aXZlIHZlcnNpb24gb2YgdGhpcyBpbnRlZ2VyLlxuICAgICAqL1xuICAgIGJ1dFBvc2l0aXZlKCkge1xuICAgICAgICByZXR1cm4gSW50ZWdlci5vZihNYXRoLmFicyh0aGlzLnZhbHVlKSk7XG4gICAgfVxuICAgIGNsYXNzID0gZXhwb3J0cy5JbnRlZ2VyVHlwZTtcbiAgICB0b01hdGhYTUwoKSB7XG4gICAgICAgIHJldHVybiBcIjxtbj5cIiArIHRoaXMudmFsdWUgKyBcIjwvbW4+XCI7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCJcIiArIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIGdldCBoYXNoKCkge1xuICAgICAgICByZXR1cm4gXCJOdW1iZXJFeHBcIiArIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHZhbHVlO1xuICAgIGlzUmVkdWNpYmxlID0gZmFsc2U7XG4gICAgaXNIZWFsdGh5ID0gdHJ1ZTtcbiAgICBpc0NvbnN0YW50ID0gdHJ1ZTtcbiAgICBjaGlsZENvdW50ID0gMDtcbn1cbmV4cG9ydHMuSW50ZWdlciA9IEludGVnZXI7XG5leHBvcnRzLkludGVnZXJUeXBlID0gXCJJbnRlZ2VyXCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSW50ZWdyYWxUeXBlID0gZXhwb3J0cy5JbnRlZ3JhbCA9IHZvaWQgMDtcbmNvbnN0IE1hdGhNTEhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuLi91dGlsL01hdGhNTEhlbHBlcnNcIik7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4vUHJvZHVjdFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4vU3VtXCIpO1xuLyoqXG4gKiBBbiBpbmRlZmluYXRlIGludGVncmFsIChmb3Igbm93KS5cbiAqIFRPRE86IFNob3VsZCB3ZSBzZXBhcmF0ZSBkZWZpbmF0ZS9pbmRlZmluYXRlIGludGVncmFscz9cbiAqL1xuY2xhc3MgSW50ZWdyYWwgZXh0ZW5kcyBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbiB7XG4gICAgc3RhdGljIG9mKGludGVncmFuZCwgcmVsYXRpdmVUbykge1xuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2VzLmhhcyhpbnRlZ3JhbmQuaGFzaCArIHJlbGF0aXZlVG8uaGFzaCkpXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlcy5zZXQoaW50ZWdyYW5kLmhhc2ggKyByZWxhdGl2ZVRvLmhhc2gsIG5ldyBJbnRlZ3JhbChpbnRlZ3JhbmQsIHJlbGF0aXZlVG8pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzLmdldChpbnRlZ3JhbmQuaGFzaCArIHJlbGF0aXZlVG8uaGFzaCk7XG4gICAgfVxuICAgIHN0YXRpYyBpbnN0YW5jZXMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3RydWN0b3IoaW50ZWdyYW5kLCByZWxhdGl2ZVRvKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaW50ZWdyYW5kID0gaW50ZWdyYW5kO1xuICAgICAgICB0aGlzLnJlbGF0aXZlVG8gPSByZWxhdGl2ZVRvO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMuaW50ZWdyYW5kKTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLnJlbGF0aXZlVG8pO1xuICAgICAgICB0aGlzLmlzUmVkdWNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNIZWFsdGh5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0NvbnN0YW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hpbGRDb3VudCA9IDIgKyBpbnRlZ3JhbmQuY2hpbGRDb3VudCArIHJlbGF0aXZlVG8uY2hpbGRDb3VudDtcbiAgICB9XG4gICAgaW50ZWdyYW5kO1xuICAgIHJlbGF0aXZlVG87XG4gICAgaXNSZWR1Y2libGU7XG4gICAgY2xhc3MgPSBleHBvcnRzLkludGVncmFsVHlwZTtcbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwi4oirXCIgKyB0aGlzLmludGVncmFuZC50b1N0cmluZygpO1xuICAgIH1cbiAgICBnZXQgaGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIFwi4oirXCIgKyB0aGlzLmludGVncmFuZC50b1N0cmluZygpICsgdGhpcy5yZWxhdGl2ZVRvLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlzSGVhbHRoeTtcbiAgICBpc0NvbnN0YW50O1xuICAgIHRvTWF0aFhNTCgpIHtcbiAgICAgICAgZnVuY3Rpb24gd3JhcElmTmVlZGVkKGV4cCkge1xuICAgICAgICAgICAgaWYgKGV4cC5jbGFzcyA9PSBTdW1fMS5TdW1UeXBlIHx8IGV4cC5jbGFzcyA9PSBQcm9kdWN0XzEuUHJvZHVjdFR5cGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuICgwLCBNYXRoTUxIZWxwZXJzXzEuaW5QYXJlbikoZXhwLnRvTWF0aFhNTCgpKTtcbiAgICAgICAgICAgIHJldHVybiBleHAudG9NYXRoWE1MKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiPG1yb3c+PG1vPuKIqzwvbW8+XCIgKyB3cmFwSWZOZWVkZWQodGhpcy5pbnRlZ3JhbmQpICsgXCI8bW4+ZDwvbW4+XCIgKyB3cmFwSWZOZWVkZWQodGhpcy5yZWxhdGl2ZVRvKSArIFwiPC9tcm93PlwiO1xuICAgIH1cbiAgICBjaGlsZENvdW50O1xufVxuZXhwb3J0cy5JbnRlZ3JhbCA9IEludGVncmFsO1xuZXhwb3J0cy5JbnRlZ3JhbFR5cGUgPSBcIkludGVncmFsXCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWF0aEVsZW1lbnQgPSB2b2lkIDA7XG4vKipcbiAqIENhbiBiZSBleHByZXNzZWQgd2l0aCBNYXRoTUxcbiAqL1xuY2xhc3MgTWF0aEVsZW1lbnQge1xufVxuZXhwb3J0cy5NYXRoRWxlbWVudCA9IE1hdGhFbGVtZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmZhY3Rvck9yZGVyID0gZXhwb3J0cy5Qcm9kdWN0VHlwZSA9IGV4cG9ydHMuUHJvZHVjdCA9IHZvaWQgMDtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4uL3V0aWwvYXNzZXJ0XCIpO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvblwiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuL0ludGVnZXJcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuL1N1bVwiKTtcbi8qKlxuICogQSBtYXRoZW1hdGljYWwgcHJvZHVjdCB3aXRoIDIgb3IgbW9yZSBmYWN0b3JzLlxuICovXG5jbGFzcyBQcm9kdWN0IGV4dGVuZHMgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24ge1xuICAgIC8qKlxuICAgICAqIEZvciBlZmZpY2llbmN5LCBwcm9kdWN0cyBhcmUgY29tcGFyZWQgYnkgcmVmZXJlbmNlLlxuICAgICAqIEhlcmUgd2UgZW5zdXJlID09PSA8PT4gPT1cbiAgICAgKiBAcGFyYW0gZmFjdG9yc1xuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgc3RhdGljIG9mKGZhY3RvcnMpIHtcbiAgICAgICAgY29uc3QgaGFzaCA9IGZhY3RvcnMubWFwKGUgPT4gZS5oYXNoKS5qb2luKFwiXCIpO1xuICAgICAgICBpZiAoIVByb2R1Y3QuaW5zdGFuY2VzLmhhcyhoYXNoKSlcbiAgICAgICAgICAgIFByb2R1Y3QuaW5zdGFuY2VzLnNldChoYXNoLCBuZXcgUHJvZHVjdChmYWN0b3JzKSk7XG4gICAgICAgIHJldHVybiBQcm9kdWN0Lmluc3RhbmNlcy5nZXQoaGFzaCk7XG4gICAgfVxuICAgIHN0YXRpYyBpbnN0YW5jZXMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3RydWN0b3IoZmFjdG9ycykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KShmYWN0b3JzLmxlbmd0aCA+PSAyLCBcIkNyZWF0aW5nIHByb2R1Y3Qgd2l0aCBsZXNzIHRoYW4gMiBmYWN0b3JzLlwiKTtcbiAgICAgICAgdGhpcy5mYWN0b3JzID0gZmFjdG9ycztcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLmZhY3RvcnMpO1xuICAgICAgICBsZXQgcmVkdWNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mYWN0b3JzLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgICByZWR1Y2libGUgJiY9IGYuaXNSZWR1Y2libGUgfHwgZi5jbGFzcyA9PSBJbnRlZ2VyXzEuSW50ZWdlclR5cGU7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUaGUgaW50ZWdlcnMgYXJlIGNsb3NlZCBvdmVyIG11bHRpcGxpY2F0aW9uXG4gICAgICAgIHRoaXMuaXNSZWR1Y2libGUgPSByZWR1Y2libGU7XG4gICAgICAgIGxldCBoZWFsdGh5ID0gdHJ1ZTtcbiAgICAgICAgaGVhbHRoeSAmJj0gdGhpcy5udW1OZWdhdGl2ZXMoKSA8IDI7XG4gICAgICAgIHRoaXMuaXNIZWFsdGh5ID0gaGVhbHRoeTtcbiAgICAgICAgbGV0IGlzTmVnYXRpb24gPSBmYWN0b3JzLmxlbmd0aCA9PSAyO1xuICAgICAgICBpc05lZ2F0aW9uICYmPSBmYWN0b3JzLmZpbHRlcihlID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIgJiYgZS52YWx1ZSA9PSAtMTtcbiAgICAgICAgfSkubGVuZ3RoID09IDE7XG4gICAgICAgIHRoaXMuaXNOZWdhdGlvbiA9IGlzTmVnYXRpb247XG4gICAgICAgIHRoaXMuaXNDb25zdGFudCA9IHRoaXMuZmFjdG9ycy5tYXAoZiA9PiBmLmlzQ29uc3RhbnQpLnJlZHVjZSgoYSwgYikgPT4gYSAmJiBiKTtcbiAgICAgICAgdGhpcy5jaGlsZENvdW50ID0gZmFjdG9ycy5sZW5ndGggKyBmYWN0b3JzLm1hcChmID0+IGYuY2hpbGRDb3VudCkucmVkdWNlKChhLCBiKSA9PiBhICsgYikgLSAodGhpcy5pc05lZ2F0aW9uID8gMSA6IDApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoaXMgcHJvZHVjdCBpcyBqdXN0XG4gICAgICogLTEgKiBhbm90aGVyIGV4cHJlc3Npb24uXG4gICAgICovXG4gICAgaXNOZWdhdGlvbjtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHZhbHVlIHRoYXQgdGhpcyBwcm9kdWN0IGlzIG5lZ2F0aW5nXG4gICAgICogLTEgKiBleHAgcmV0dXJucyBleHAuXG4gICAgICogQHRocm93cyBpZiBwcm9kdWN0IGlzbid0IGEgbmVnYXRpb24uXG4gICAgICovXG4gICAgZ2V0IG5lZ2F0aW9uKCkge1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLmlzTmVnYXRpb24sIFwiVHJ5aW5nIHRvIGdldCBuZWdhdGlvbiBmcm9tIG5vbi1uZWdhdGluZyBzdW1cIik7XG4gICAgICAgIGlmICh0aGlzLmZhY3RvcnNbMF0uY2xhc3MgPT0gSW50ZWdlcl8xLkludGVnZXJUeXBlICYmIHRoaXMuZmFjdG9yc1swXS52YWx1ZSA9PSAtMSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZhY3RvcnNbMV07XG4gICAgICAgIHJldHVybiB0aGlzLmZhY3RvcnNbMF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBuZXcgRXhwcmVzc2lvbiB3aXRob3V0IHRoZSBnaXZlbiBmYWN0b3IuXG4gICAgICogSWYgdGhlIHByb2R1Y3QgY29udGFpbnMgdGhlIGZhY3RvciBtdWx0aXBsZSB0aW1lcyxcbiAgICAgKiBvbmx5IHJlbW92ZXMgb25lLiBJZiBpdCBkb2Vzbid0IGNvbnRhaW4gdGhlIGZhY3RvcixcbiAgICAgKiByZXR1cm5zIGl0c2VsZi5cbiAgICAgKiBAcGFyYW0gZXhwIEEgZmFjdG9yIGluIHRoaXMgcHJvZHVjdC5cbiAgICAgKi9cbiAgICB3aXRob3V0KGV4cCkge1xuICAgICAgICBjb25zdCBuZXdGYWN0b3JzID0gWy4uLnRoaXMuZmFjdG9yc107XG4gICAgICAgIGNvbnN0IGluZGV4ID0gbmV3RmFjdG9ycy5maW5kSW5kZXgoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IGV4cDtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpbmRleCA9PSAtMSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBuZXdGYWN0b3JzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGlmIChuZXdGYWN0b3JzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXdGYWN0b3JzWzBdOyAvLyBHYXVyYW50ZWVkIHRoZXJlJ3Mgb25lIHRlcm0gaGVyZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9kdWN0Lm9mKG5ld0ZhY3RvcnMpO1xuICAgIH1cbiAgICB0b01hdGhYTUwoKSB7XG4gICAgICAgIGxldCBvdXQgPSBcIlwiO1xuICAgICAgICBmdW5jdGlvbiB3cmFwSWZOZWVkZWQoZXhwKSB7XG4gICAgICAgICAgICBpZiAoZXhwLmNsYXNzID09IGV4cG9ydHMuUHJvZHVjdFR5cGUgfHwgZXhwLmNsYXNzID09IFN1bV8xLlN1bVR5cGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPG1vPig8L21vPlwiICsgZXhwLnRvTWF0aFhNTCgpICsgXCI8bW8+KTwvbW8+XCI7XG4gICAgICAgICAgICByZXR1cm4gZXhwLnRvTWF0aFhNTCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVpdGhlciB0aGlzIGlzIGEgbmVnYXRpb24sIG9yIGEgbGlzdCBvZiBwcm9kdWN0c1xuICAgICAgICAvLyBGaXJzdCB0aGUgbmVnYXRpb24gY2FzZS4uLlxuICAgICAgICBpZiAodGhpcy5pc05lZ2F0aW9uKSB7XG4gICAgICAgICAgICBvdXQgKz0gXCI8bW8+LTwvbW8+XCI7XG4gICAgICAgICAgICBvdXQgKz0gd3JhcElmTmVlZGVkKHRoaXMubmVnYXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBpdCdzIGEgbGlzdCBvZiBwcm9kdWN0cy4uLlxuICAgICAgICBjb25zdCBmaXJzdEZhY3RvciA9IHRoaXMuZmFjdG9yc1swXTtcbiAgICAgICAgb3V0ICs9IHdyYXBJZk5lZWRlZChmaXJzdEZhY3Rvcik7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5mYWN0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZmFjdG9yID0gdGhpcy5mYWN0b3JzW2ldO1xuICAgICAgICAgICAgbGV0IG5lZWRzRG90ID0gKGZhY3Rvci5jbGFzcyA9PSBJbnRlZ2VyXzEuSW50ZWdlclR5cGUgJiYgdGhpcy5mYWN0b3JzW2kgLSAxXS5jbGFzcyA9PSBJbnRlZ2VyXzEuSW50ZWdlclR5cGUpXG4gICAgICAgICAgICAgICAgfHwgKGZhY3RvciBpbnN0YW5jZW9mIFByb2R1Y3QgJiYgZmFjdG9yLmlzTmVnYXRpb24pIC8vIElmIHRoZXJlJ3MgYSBuZWdhdGl2ZSBzaWduLCBnZXQgYSBkb3RcbiAgICAgICAgICAgICAgICB8fCAoZmFjdG9yIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIgJiYgZmFjdG9yLnZhbHVlIDwgMSk7XG4gICAgICAgICAgICBpZiAobmVlZHNEb3QpXG4gICAgICAgICAgICAgICAgb3V0ICs9IFwiPG1vPsK3PC9tbz5cIjtcbiAgICAgICAgICAgIG91dCArPSB3cmFwSWZOZWVkZWQoZmFjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyBOdW1iZXIgb2YgbmVnYXRpdmUgaW50ZWdlciBwcm9kdWN0cy5cbiAgICAgKi9cbiAgICBudW1OZWdhdGl2ZXMoKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIHRoaXMuZmFjdG9ycy5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgICAgaWYgKGYgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcilcbiAgICAgICAgICAgICAgICBpZiAoZi52YWx1ZSA8IDApXG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBsZXQgb3V0ID0gXCJcIjtcbiAgICAgICAgZm9yIChjb25zdCBleHAgb2YgdGhpcy5mYWN0b3JzKSB7XG4gICAgICAgICAgICBpZiAoZXhwIGluc3RhbmNlb2YgUHJvZHVjdCkge1xuICAgICAgICAgICAgICAgIG91dCArPSBcIihcIiArIGV4cC50b1N0cmluZygpICsgXCIpXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXQgKz0gZXhwLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXQgKz0gXCLCt1wiO1xuICAgICAgICB9XG4gICAgICAgIG91dCA9IG91dC5zdWJzdHJpbmcoMCwgb3V0Lmxlbmd0aCAtIDEpO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICBnZXQgaGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIFwiUHJvZHVjdFwiICsgdGhpcy5mYWN0b3JzLm1hcChlID0+IGUuaGFzaCkuam9pbigpO1xuICAgIH1cbiAgICAvLyBBdCBsZWFzdCAyIGVsZW1lbnRzLCBvcmRlciBtYXR0ZXJzXG4gICAgZmFjdG9ycztcbiAgICBjbGFzcyA9IGV4cG9ydHMuUHJvZHVjdFR5cGU7XG4gICAgaXNSZWR1Y2libGU7XG4gICAgLyoqXG4gICAgICogT25seSAxIG5lZ2F0aXZlIGludGVnZXJcbiAgICAgKiBJbnRlZ2VyIGZhY3RvcnMgYXJlIGZpcnN0XG4gICAgICogTm8gZmFjdG9yIGVxdWFscyAxXG4gICAgICovXG4gICAgaXNIZWFsdGh5O1xuICAgIGlzQ29uc3RhbnQ7XG4gICAgY2hpbGRDb3VudDtcbn1cbmV4cG9ydHMuUHJvZHVjdCA9IFByb2R1Y3Q7XG5leHBvcnRzLlByb2R1Y3RUeXBlID0gXCJQcm9kdWN0XCI7XG4vKipcbiAqIENhbiBiZSB1c2VkIGluIGFycmF5LnNvcnQoKSB0byBnZXQgcHJvcGVybHkgb3JkZXJlZCBwcm9kdWN0cy5cbiAqXG4gKiBAcGFyYW0gYVxuICogQHBhcmFtIGJcbiAqIEByZXR1cm5zIFBvc2l0aXZlIGlmIGEgc2hvdWxkIGJlIGFmdGVyIGJcbiAqL1xuZnVuY3Rpb24gZmFjdG9yT3JkZXIoYSwgYikge1xuICAgIGlmIChhIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIgJiYgYiBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAoYSBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKSB7XG4gICAgICAgIHJldHVybiBhRmlyc3Q7XG4gICAgfVxuICAgIHJldHVybiAwO1xufVxuZXhwb3J0cy5mYWN0b3JPcmRlciA9IGZhY3Rvck9yZGVyO1xuY29uc3QgYUZpcnN0ID0gMTtcbmNvbnN0IGFBZnRlciA9IC0xO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm9yZGVyVGVybXMgPSBleHBvcnRzLlN1bVR5cGUgPSBleHBvcnRzLlN1bSA9IHZvaWQgMDtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4uL3V0aWwvYXNzZXJ0XCIpO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvblwiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuL0ludGVnZXJcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi9Qcm9kdWN0XCIpO1xuY29uc3QgVmFyaWFibGVfMSA9IHJlcXVpcmUoXCIuL1ZhcmlhYmxlXCIpO1xuLyoqXG4gKiBFeHByZXNzaW9uIHJlcHJlc2VudGluZyB0aGUgc3VtIG9mIDIgb3IgbW9yZSB0ZXJtcy5cbiAqL1xuY2xhc3MgU3VtIGV4dGVuZHMgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24ge1xuICAgIC8qKlxuICAgICAqIEZhY3RvcnkgbWV0aG9kIGNvbnNudHJ1Y3Rvci5cbiAgICAgKiBAcGFyYW0gdGVybXMgQ29udGFpbnMgYXQgbGVhc3QgMiBlbGVtZW50c1xuICAgICAqL1xuICAgIHN0YXRpYyBvZih0ZXJtcykge1xuICAgICAgICBjb25zdCBoYXNoID0gdGVybXMubWFwKHQgPT4gdC5oYXNoKS5qb2luKFwiXCIpO1xuICAgICAgICBpZiAoIVN1bS5pbnN0YW5jZXMuaGFzKGhhc2gpKSB7XG4gICAgICAgICAgICBTdW0uaW5zdGFuY2VzLnNldChoYXNoLCBuZXcgU3VtKHRlcm1zKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFN1bS5pbnN0YW5jZXMuZ2V0KGhhc2gpO1xuICAgIH1cbiAgICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0cnVjdG9yKHRlcm1zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRlcm1zLmxlbmd0aCA+PSAyLCBcIkNyZWF0aW5nIHN1bSB3aXRoIGxlc3MgdGhhbiAyIHRlcm1zLlwiKTtcbiAgICAgICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICAgICAgICB0aGlzLmlzUmVkdWNpYmxlID0gdGhpcy50ZXJtcy5tYXAodCA9PiB0LmlzUmVkdWNpYmxlIHx8IHQuY2xhc3MgPT0gSW50ZWdlcl8xLkludGVnZXJUeXBlKS5yZWR1Y2UoKGEsIGIpID0+IGEgJiYgYik7XG4gICAgICAgIHRoaXMuaXNIZWFsdGh5ID0gdGhpcy5kZXRlcm1pbmVIZWFsdGgoKTtcbiAgICAgICAgdGhpcy5pc0NvbnN0YW50ID0gdGhpcy50ZXJtcy5tYXAodCA9PiB0LmlzQ29uc3RhbnQpLnJlZHVjZSgoYSwgYikgPT4gYSAmJiBiKTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLnRlcm1zKTtcbiAgICAgICAgdGhpcy5jaGlsZENvdW50ID0gdGVybXMubGVuZ3RoICsgdGVybXMubWFwKHQgPT4gdC5jaGlsZENvdW50KS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIG5ldyBFeHByZXNzaW9uIHdpdGhvdXQgdGhlIGdpdmVuIHRlcm0uXG4gICAgICogSWYgdGhlIHN1bSBjb250YWlucyB0aGUgdGVybSBtdWx0aXBsZSB0aW1lcyxcbiAgICAgKiBvbmx5IHJlbW92ZXMgb25lLiBJZiBpdCBkb2Vzbid0IGNvbnRhaW4gdGhlIHRlcm0sXG4gICAgICogcmV0dXJucyBpdHNlbGYuXG4gICAgICogQHBhcmFtIHRlcm0gQSB0ZXJtIGluIHRoaXMgc3VtLlxuICAgICAqL1xuICAgIHdpdGhvdXQodGVybSkge1xuICAgICAgICBjb25zdCBuZXdUZXJtcyA9IFsuLi50aGlzLnRlcm1zXTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBuZXdUZXJtcy5maW5kSW5kZXgoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IHRlcm07XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5kZXggPT0gLTEpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgbmV3VGVybXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgaWYgKG5ld1Rlcm1zLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXdUZXJtc1swXTsgLy8gR2F1cmFudGVlZCB0aGVyZSdzIG9uZSB0ZXJtIGhlcmVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU3VtLm9mKG5ld1Rlcm1zKTtcbiAgICB9XG4gICAgdG9NYXRoWE1MKCkge1xuICAgICAgICBmdW5jdGlvbiB3cmFwSWZOZWVkZWQoZXhwKSB7XG4gICAgICAgICAgICBpZiAoZXhwLmNsYXNzID09IGV4cG9ydHMuU3VtVHlwZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8bW8+KDwvbW8+XCIgKyBleHAudG9NYXRoWE1MKCkgKyBcIjxtbz4pPC9tbz5cIjtcbiAgICAgICAgICAgIHJldHVybiBleHAudG9NYXRoWE1MKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG91dCA9IHdyYXBJZk5lZWRlZCh0aGlzLnRlcm1zWzBdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLnRlcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtc1tpXTtcbiAgICAgICAgICAgIC8vIFN1YnRyYWN0IG5lZ2F0aXZlIHRlcm1zIGluc3RlYWQgb2YgYWRkaW5nIG5lZ2F0aXZlc1xuICAgICAgICAgICAgaWYgKHRlcm0gaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCAmJiB0ZXJtLmlzTmVnYXRpb24pIHtcbiAgICAgICAgICAgICAgICBvdXQgKz0gXCI8bW8+LTwvbW8+XCIgKyB3cmFwSWZOZWVkZWQodGVybS5uZWdhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0ZXJtIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIgJiYgdGVybS52YWx1ZSA8IDApIHtcbiAgICAgICAgICAgICAgICBvdXQgKz0gXCI8bW8+LTwvbW8+XCIgKyB3cmFwSWZOZWVkZWQodGVybS5idXRQb3NpdGl2ZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dCArPSBcIjxtbz4rPC9tbz5cIiArIHdyYXBJZk5lZWRlZCh0aGlzLnRlcm1zW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgbGV0IG91dCA9IFwiXCI7XG4gICAgICAgIGZvciAoY29uc3QgZXhwIG9mIHRoaXMudGVybXMpIHtcbiAgICAgICAgICAgIG91dCArPSBleHAudG9TdHJpbmcoKSArIFwiK1wiO1xuICAgICAgICB9XG4gICAgICAgIG91dCA9IG91dC5zdWJzdHJpbmcoMCwgb3V0Lmxlbmd0aCAtIDEpO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICBnZXQgaGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIFwiU3VtXCIgKyB0aGlzLnRlcm1zLm1hcChlID0+IGUuaGFzaCkuam9pbigpO1xuICAgIH1cbiAgICBjbGFzcyA9IGV4cG9ydHMuU3VtVHlwZTtcbiAgICAvKipcbiAgICAgKiBPcmRlcmVkLCBpbW11dGFibGVcbiAgICAgKi9cbiAgICB0ZXJtcztcbiAgICBpc1JlZHVjaWJsZTtcbiAgICAvKipcbiAgICAgKiBGaWd1cmUgb3V0IGlmIHdlJ3JlIGhlYWx0aHkuXG4gICAgICovXG4gICAgZGV0ZXJtaW5lSGVhbHRoKCkge1xuICAgICAgICBpZiAodGhpcy50ZXJtcy5maWx0ZXIodCA9PiB0LmlzUmVkdWNpYmxlIHx8IHQgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcikubGVuZ3RoID4gMSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGhpcy50ZXJtcy5mb3JFYWNoKHQgPT4ge1xuICAgICAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcilcbiAgICAgICAgICAgICAgICBpZiAodC52YWx1ZSA9PSAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRlcm1zLmZvckVhY2godGVybSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRlcm0uaXNIZWFsdGh5KVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNvcnJlY3RPcmRlcmluZyA9IG9yZGVyVGVybXMoLi4udGhpcy50ZXJtcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50ZXJtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMudGVybXNbaV0gIT09IGNvcnJlY3RPcmRlcmluZ1tpXSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy9UT0RPOiBDaGVjayBjb25kaXRpb24gM1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBzdW0gaXMgaGVhbHRoeSBpZmY6XG4gICAgICpcbiAgICAgKiAxLiBDb250YWlucyBhIG1heCBvZiAxIHJlZHVjaWJsZSB0ZXJtLlxuICAgICAqIDIuIFByb2R1Y3RzIHdpdGggaW50ZWdlciBjb2VmZmljaWVudHMgYXJlIGNvbWJpbmVkLlxuICAgICAqICBhICsgMmEgPSAzYSxcbiAgICAgKiAgYSArIC1hID0gMFxuICAgICAqIDMuIE5vIHRlcm0gaXMgMFxuICAgICAqIDQuIEFsbCB0ZXJtcyBhcmUgaGVhbHRoeS5cbiAgICAgKiA1LiBUZXJtcyBhcmUgb3JkZXJlZCBjb3JyZWN0bHkuXG4gICAgICovXG4gICAgaXNIZWFsdGh5O1xuICAgIGlzQ29uc3RhbnQ7XG4gICAgY2hpbGRDb3VudDtcbn1cbmV4cG9ydHMuU3VtID0gU3VtO1xuZXhwb3J0cy5TdW1UeXBlID0gXCJTdW1cIjtcbi8qKlxuICogUmV0dXJucyB0aGUgZ2l2ZW4gdGVybXMgb3JkZXJlZCBjb3JyZWN0bHkgdG9cbiAqIGJlIHBsYWNlZCBpbiBhIFN1bS4gQWx0ZXJzIHRoZSBnaXZlbiBhcnJheS5cbiAqIEBwYXJhbSB0ZXJtc1xuICovXG5mdW5jdGlvbiBvcmRlclRlcm1zKC4uLnRlcm1zKSB7XG4gICAgLy8gQSBub3RlIGFib3V0IHRoZSBzb3J0IGZ1bmN0aW9uIGJjIHRoZSBkb2N1bWVudGF0aW9uIGlzIGNyeXB0aWNcbiAgICAvLyBJZiBhIHNob3VsZCBiZSBwdXQgYmVmb3JlIGIgaW4gdGhlIHN1bSwgcmV0dXJuIGEgbmVnYXRpdmUgdmFsdWVcbiAgICByZXR1cm4gdGVybXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAvLyBWYXJpYWJsZXMgYmVmb3JlIEludGVnZXJzXG4gICAgICAgIGlmIChhLmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZSAmJiAoYi5jbGFzcyA9PSBWYXJpYWJsZV8xLlZhcmlhYmxlVHlwZSB8fCAoYiBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0ICYmIGIuaXNOZWdhdGlvbiAmJiBiLm5lZ2F0aW9uLmNsYXNzID09IFZhcmlhYmxlXzEuVmFyaWFibGVUeXBlKSkpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoYS5jbGFzcyA9PSBWYXJpYWJsZV8xLlZhcmlhYmxlVHlwZSB8fCAoYSBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0ICYmIGEuaXNOZWdhdGlvbiAmJiBhLm5lZ2F0aW9uLmNsYXNzID09IFZhcmlhYmxlXzEuVmFyaWFibGVUeXBlKSkgJiYgYi5jbGFzcyA9PSBJbnRlZ2VyXzEuSW50ZWdlclR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9KTtcbn1cbmV4cG9ydHMub3JkZXJUZXJtcyA9IG9yZGVyVGVybXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVmFyaWFibGVUeXBlID0gZXhwb3J0cy5WYXJpYWJsZSA9IHZvaWQgMDtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuL0V4cHJlc3Npb25cIik7XG5jbGFzcyBWYXJpYWJsZSBleHRlbmRzIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uIHtcbiAgICBzdGF0aWMgb2Yoc3ltYm9sKSB7XG4gICAgICAgIGlmIChWYXJpYWJsZS5pbnN0YW5jZXMuZ2V0KHN5bWJvbCkgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBWYXJpYWJsZS5pbnN0YW5jZXMuc2V0KHN5bWJvbCwgbmV3IFZhcmlhYmxlKHN5bWJvbCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBWYXJpYWJsZS5pbnN0YW5jZXMuZ2V0KHN5bWJvbCk7XG4gICAgfVxuICAgIHN0YXRpYyBpbnN0YW5jZXMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3RydWN0b3Ioc3ltYm9sKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3ltYm9sID0gc3ltYm9sO1xuICAgIH1cbiAgICBjbGFzcyA9IGV4cG9ydHMuVmFyaWFibGVUeXBlO1xuICAgIHRvTWF0aFhNTCgpIHtcbiAgICAgICAgcmV0dXJuIFwiPG1pPlwiICsgdGhpcy5zeW1ib2wgKyBcIjwvbWk+XCI7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zeW1ib2w7XG4gICAgfVxuICAgIGdldCBoYXNoKCkge1xuICAgICAgICByZXR1cm4gXCJWYXJpYWJsZVwiICsgdGhpcy5zeW1ib2w7XG4gICAgfVxuICAgIHN5bWJvbDtcbiAgICBpc1JlZHVjaWJsZSA9IGZhbHNlO1xuICAgIGlzSGVhbHRoeSA9IHRydWU7XG4gICAgaXNDb25zdGFudCA9IGZhbHNlO1xuICAgIGNoaWxkQ291bnQgPSAwO1xufVxuZXhwb3J0cy5WYXJpYWJsZSA9IFZhcmlhYmxlO1xuZXhwb3J0cy5WYXJpYWJsZVR5cGUgPSBcIlZhcmlhYmxlXCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQXJndW1lbnROb2RlVmlldyA9IHZvaWQgMDtcbmNvbnN0IEdyYXBoTm9kZVZpZXdfMSA9IHJlcXVpcmUoXCIuL0dyYXBoTm9kZVZpZXdcIik7XG4vKipcbiAqIFJlcHJlc2VudHMgYW4gYXJndW1lbnQgbm9kZS5cbiAqL1xuY2xhc3MgQXJndW1lbnROb2RlVmlldyBleHRlbmRzIEdyYXBoTm9kZVZpZXdfMS5HcmFwaE5vZGVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihhcmcpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hcmd1bWVudCA9IGFyZztcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSB0aGlzLmFyZ3VtZW50LmFyZ3VtZW50O1xuICAgIH1cbiAgICBhcmd1bWVudDtcbn1cbmV4cG9ydHMuQXJndW1lbnROb2RlVmlldyA9IEFyZ3VtZW50Tm9kZVZpZXc7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJhcmd1bWVudC1ub2Rldmlld1wiLCBBcmd1bWVudE5vZGVWaWV3LCB7IGV4dGVuZHM6IFwiZGl2XCIgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRWRnZVZpZXcgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uL0FyZ3VtZW50XCIpO1xuY29uc3QgVUlQcmVmZXJlbmNlc18xID0gcmVxdWlyZShcIi4vVUlQcmVmZXJlbmNlc1wiKTtcbmNvbnN0IEdyYXBoXzEgPSByZXF1aXJlKFwiLi4vR3JhcGhcIik7XG4vKipcbiAqIFJlcHJlc2VudHMgYW4gZWRnZSBpbiBhIGdyYXBoLlxuICovXG5jbGFzcyBFZGdlVmlldyBleHRlbmRzIEhUTUxQYXJhZ3JhcGhFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihvd25lciwgZWRnZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgICAgIHRoaXMuZWRnZSA9IGVkZ2UuZTtcbiAgICAgICAgdGhpcy5maXJzdCA9IGVkZ2UubjtcbiAgICAgICAgdGhpcy5zZWNvbmQgPSBlZGdlLm4xO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMuZWRnZSk7XG4gICAgICAgIHRoaXMuc3R5bGUud2lkdGggPSBcImZpdC1jb250ZW50XCI7XG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gXCJmaXQtY29udGVudFwiO1xuICAgICAgICB0aGlzLnN0eWxlLnBhZGRpbmcgPSBcIjBcIjtcbiAgICAgICAgdGhpcy5zdHlsZS56SW5kZXggPSBcIi0yXCI7XG4gICAgICAgIHRoaXMuc3R5bGUubWFyZ2luID0gXCIwXCI7XG4gICAgICAgIHRoaXMuc3R5bGUud2hpdGVTcGFjZSA9IFwibm93cmFwXCI7XG4gICAgICAgIHRoaXMuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBVSVByZWZlcmVuY2VzXzEudWlQcmVmZXJlbmNlcy5lZGdlRXF1YWxzQmFja2dyb3VuZENvbG9yO1xuICAgICAgICB0aGlzLnN0eWxlLnVzZXJTZWxlY3QgPSBcIm5vbmVcIjtcbiAgICAgICAgVUlQcmVmZXJlbmNlc18xLnVpUHJlZmVyZW5jZXMub25VcGRhdGUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBVSVByZWZlcmVuY2VzXzEudWlQcmVmZXJlbmNlcy5lZGdlRXF1YWxzQmFja2dyb3VuZENvbG9yO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5vd25lci5lZGdlQ2xpY2tlZCh0aGlzLCBldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBldmVudCA9PiB7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHJvdGF0aW9uIGFuZ2xlIG9mIHZpZXcgd2hpbGUgYWxzb1xuICAgICAqIGxldHRpbmcgaXQga25vdyB0aGUgYW5nbGUgaGFzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHJhZFxuICAgICAqL1xuICAgIHNldEFuZ2xlKHJhZCkge1xuICAgICAgICB0aGlzLnN0eWxlLnJvdGF0ZSA9IFwiXCIgKyByYWQgKyBcInJhZFwiO1xuICAgICAgICAvL3RoaXMudGV4dENvbnRlbnQgPSBcIlwiICsgKHJhZCAqIDIgKiBNYXRoLlBJIC8gMzYwKS50b0ZpeGVkKDIpICsgXCJkZWdcIlxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGVsZW1lbnQgc2NyZWVuIHdpZHRoIGFuZCBlbnN1cmVzIHRleHQgZml0c1xuICAgICAqIGluc2lkZSB0aGUgZWRnZS5cbiAgICAgKi9cbiAgICBzZXQgd2lkdGgodmFsKSB7XG4gICAgICAgIHN1cGVyLnN0eWxlLndpZHRoID0gdmFsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBlbGVtZW50IGlzIGNvbm5jdGVkIHRvIHRoZSBET00uXG4gICAgICovXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmVkZ2UgaW5zdGFuY2VvZiBBcmd1bWVudF8xLkFyZ3VtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gXCJcIiArIHRoaXMuZWRnZS5jbGFpbS5yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZWRnZSBpbnN0YW5jZW9mIEdyYXBoXzEuR2l2ZW5FZGdlKSB7XG4gICAgICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gXCJcIiArIHRoaXMuZWRnZS5yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCBmb3IgXCIgKyB0aGlzLmVkZ2UpO1xuICAgIH1cbiAgICBvd25lcjtcbiAgICBlZGdlO1xuICAgIGZpcnN0O1xuICAgIHNlY29uZDtcbn1cbmV4cG9ydHMuRWRnZVZpZXcgPSBFZGdlVmlldztcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImVkZ2Utdmlld1wiLCBFZGdlVmlldywgeyBleHRlbmRzOiBcInBcIiB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FZGl0YWJsZU1hdGhWaWV3ID0gdm9pZCAwO1xuLyoqXG4gKiBEaXNwbGF5cyBtYXRoIGFuZCBpcyBlZGl0YWJsZS5cbiAqL1xuY2xhc3MgRWRpdGFibGVNYXRoVmlldyBleHRlbmRzIEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgfVxuICAgIHNldCB2YWx1ZShlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gZTtcbiAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBcIjxtYXRoIGRpc3BsYXk9J2Jsb2NrJz5cIiArIChlPy50b01hdGhYTUwoKSA/PyBcIlwiKSArIFwiPC9tYXRoPlwiO1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGwgPT4gbCh0aGlzLl92YWx1ZSkpO1xuICAgICAgICBNYXRoSmF4LnR5cGVzZXQoW3RoaXNdKTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExpc3RlbmVyIHdpbGwgYmUgY2FsbGVkIHdoZW5ldmVyIHRoZSBtYXRoXG4gICAgICogaW4gdGhlIHZpZXcgaXMgZWRpdGVkLlxuICAgICAqIEBwYXJhbSBsXG4gICAgICovXG4gICAgYWRkRWRpdExpc3RlbmVyKGwpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsKTtcbiAgICB9XG4gICAgbGlzdGVuZXJzID0gW107XG4gICAgX3ZhbHVlID0gbnVsbDtcbn1cbmV4cG9ydHMuRWRpdGFibGVNYXRoVmlldyA9IEVkaXRhYmxlTWF0aFZpZXc7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJlZGl0YWJsZS1tYXRodmlld1wiLCBFZGl0YWJsZU1hdGhWaWV3LCB7IGV4dGVuZHM6IFwiZGl2XCIgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXhwbGFuYXRpb25Qb3B1cCA9IHZvaWQgMDtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuLi9leHByZXNzaW9ucy9FeHByZXNzaW9uXCIpO1xuY29uc3QgTWF0aE1MSGVscGVyc18xID0gcmVxdWlyZShcIi4uL3V0aWwvTWF0aE1MSGVscGVyc1wiKTtcbmNsYXNzIEV4cGxhbmF0aW9uUG9wdXAgZXh0ZW5kcyBIVE1MRGl2RWxlbWVudCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJnXG4gICAgICogQHBhcmFtIG9uQ2xvc2UgQ2FsbGVkIGFmdGVyIHVzZXIgY2xpY2tzIGNsb3NlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihhcmcsIG9uQ2xvc2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hcmcgPSBhcmc7XG4gICAgICAgIHRoaXMub25DbG9zZSA9IG9uQ2xvc2U7XG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYicpO1xuICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25DbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSBcIkNsb3NlXCI7XG4gICAgICAgIGNsb3NlQnV0dG9uLnN0eWxlLnVzZXJTZWxlY3QgPSBcIm5vbmVcIjtcbiAgICAgICAgY2xvc2VCdXR0b24uc3R5bGUuZmxvYXQgPSBcInJpZ2h0XCI7XG4gICAgICAgIHRoaXMuYXBwZW5kKGNsb3NlQnV0dG9uKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZXh0LmlubmVySFRNTCA9IGFyZy5hcmd1bWVudCArIFwiPGJyPlwiO1xuICAgICAgICBpZiAoYXJnLmNsYWltLm4gaW5zdGFuY2VvZiBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbiAmJiBhcmcuY2xhaW0ubjEgaW5zdGFuY2VvZiBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbilcbiAgICAgICAgICAgIHRleHQuaW5uZXJIVE1MICs9ICgwLCBNYXRoTUxIZWxwZXJzXzEuaW5NYXRoQmxvY2spKCgwLCBNYXRoTUxIZWxwZXJzXzEuaW5Sb3cpKGFyZy5jbGFpbS5uLnRvTWF0aFhNTCgpICsgXCIgPG1vPlwiICsgYXJnLmNsYWltLnIgKyBcIjwvbW8+IFwiICsgYXJnLmNsYWltLm4xLnRvTWF0aFhNTCgpKSkgKyBcIjxicj4gRGVyaXZlZCBmcm9tOiA8YnI+XCI7XG4gICAgICAgIGZvciAoY29uc3QgZ3JvdW5kIG9mIGFyZy5ncm91bmRzKSB7XG4gICAgICAgICAgICBpZiAoZ3JvdW5kIGluc3RhbmNlb2YgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24pXG4gICAgICAgICAgICAgICAgdGV4dC5pbm5lckhUTUwgKz0gKDAsIE1hdGhNTEhlbHBlcnNfMS5pbk1hdGgpKGdyb3VuZC50b01hdGhYTUwoKSkgKyBcIjxicj5cIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFwcGVuZCh0ZXh0KTtcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5ib3hTaGFkb3cgPSBcIjAuM2NoIDAuM2NoIDAuNmNoIHJnYmEoMCwgMCwgMCwgMC41KVwiO1xuICAgICAgICB0aGlzLnN0eWxlLnBhZGRpbmcgPSBcIjFjaFwiO1xuICAgICAgICB0aGlzLnN0eWxlLndpZHRoID0gXCJmaXQtY29udGVudFwiO1xuICAgICAgICB0aGlzLnN0eWxlLnpJbmRleCA9IFwiMTVcIjtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIE1hdGhKYXgudHlwZXNldChbdGhpc10pO1xuICAgIH1cbiAgICBhcmc7XG4gICAgb25DbG9zZTtcbn1cbmV4cG9ydHMuRXhwbGFuYXRpb25Qb3B1cCA9IEV4cGxhbmF0aW9uUG9wdXA7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJleHBsYW5hdGlvbi1wb3B1cFwiLCBFeHBsYW5hdGlvblBvcHVwLCB7IGV4dGVuZHM6IFwiZGl2XCIgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXhwcmVzc2lvbk5vZGVWaWV3ID0gdm9pZCAwO1xuY29uc3QgRWRpdGFibGVNYXRoVmlld18xID0gcmVxdWlyZShcIi4vRWRpdGFibGVNYXRoVmlld1wiKTtcbmNvbnN0IEdyYXBoTm9kZVZpZXdfMSA9IHJlcXVpcmUoXCIuL0dyYXBoTm9kZVZpZXdcIik7XG4vKipcbiAqIEEgZ3JhcGggbm9kZSB2aWV3IGZvciBleHByZXNzaW9uIG5vZGVzLlxuICovXG5jbGFzcyBFeHByZXNzaW9uTm9kZVZpZXcgZXh0ZW5kcyBHcmFwaE5vZGVWaWV3XzEuR3JhcGhOb2RlVmlldyB7XG4gICAgY29uc3RydWN0b3Iobm9kZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgICAgICB0aGlzLmVkaXRhYmxlTWF0aFZpZXcgPSBuZXcgRWRpdGFibGVNYXRoVmlld18xLkVkaXRhYmxlTWF0aFZpZXcoKTtcbiAgICAgICAgdGhpcy5lZGl0YWJsZU1hdGhWaWV3LnZhbHVlID0gdGhpcy5ub2RlO1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuZWRpdGFibGVNYXRoVmlldyk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubm9kZS50b1N0cmluZygpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIH1cbiAgICBub2RlO1xuICAgIGVkaXRhYmxlTWF0aFZpZXc7XG59XG5leHBvcnRzLkV4cHJlc3Npb25Ob2RlVmlldyA9IEV4cHJlc3Npb25Ob2RlVmlldztcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImV4cHJlc3Npb24tbm9kZXZpZXdcIiwgRXhwcmVzc2lvbk5vZGVWaWV3LCB7IGV4dGVuZHM6IFwiZGl2XCIgfSk7XG5jb25zdCBjb2xvclVuaGVhbHRoeU5vZGVzID0gdHJ1ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HcmFwaE5vZGVWaWV3ID0gdm9pZCAwO1xuLyoqXG4gKiBBbiBodG1sIGVsZW1lbnQgdGhhdCByZXByZXNlbnRzIGEgbWF0aCBncmFwaCBub2RlLlxuICovXG5jbGFzcyBHcmFwaE5vZGVWaWV3IGV4dGVuZHMgSFRNTERpdkVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvL3RoaXMuc3R5bGUuYm9yZGVyID0gXCJibHVlIGRvdHRlZCAwLjJjaFwiXG4gICAgICAgIHRoaXMuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxY2hcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImxpZ2h0Ymx1ZVwiO1xuICAgICAgICB0aGlzLnN0eWxlLnBhZGRpbmcgPSBcIjFjaFwiO1xuICAgICAgICB0aGlzLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5wYWRkaW5nQm90dG9tID0gXCIwXCI7XG4gICAgICAgIHRoaXMuc3R5bGUud2lkdGggPSBcImZpdC1jb250ZW50XCI7XG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gXCJmaXQtY29udGVudFwiO1xuICAgICAgICB0aGlzLnN0eWxlLndoaXRlU3BhY2UgPSBcIm5vd3JhcFwiO1xuICAgICAgICB0aGlzLnN0eWxlLnpJbmRleCA9IFwiNVwiO1xuICAgIH1cbiAgICBzZXQgYmFja2dyb3VuZENvbG9yKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdmFsdWU7XG4gICAgfVxufVxuZXhwb3J0cy5HcmFwaE5vZGVWaWV3ID0gR3JhcGhOb2RlVmlldztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51aVByZWZlcmVuY2VzID0gdm9pZCAwO1xuY2xhc3MgVUlQcmVmZXJlbmNlcyB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIEZ1bmN0aW9uIGNhbGxlZCB3aGVuZXZlciBhIHVpIHByZWZlcmVuY2VcbiAgICAgKiBpcyBjaGFuZ2VkLlxuICAgICAqL1xuICAgIG9uVXBkYXRlKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgIH1cbiAgICAvLyBHZXR0ZXJzIGFuZCBTZXR0ZXJzXG4gICAgLyoqXG4gICAgICogQmFja2dyb3VuZCBjb2xvciBvZiBhIGdyYXBoIGVkZ2UgZGVub3RpbmdcbiAgICAgKiBlcXVhbGl0eSBiZXR3ZWVuIHR3byBleHByZXNzaW9ucy5cbiAgICAgKiBDc3MgdmFsdWUuXG4gICAgICovXG4gICAgZ2V0IGVkZ2VFcXVhbHNCYWNrZ3JvdW5kQ29sb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lZGdlRXF1YWxzQmFja2dyb3VuZENvbG9yO1xuICAgIH1cbiAgICBzZXQgZWRnZUVxdWFsc0JhY2tncm91bmRDb2xvcih2YWwpIHtcbiAgICAgICAgdGhpcy5fZWRnZUVxdWFsc0JhY2tncm91bmRDb2xvciA9IHZhbDtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MuZm9yRWFjaChjID0+IGMoKSk7XG4gICAgfVxuICAgIC8vIFByZWZlcmVuY2UgVmFsdWVzXG4gICAgX2VkZ2VFcXVhbHNCYWNrZ3JvdW5kQ29sb3IgPSBcIm5vbmVcIjtcbiAgICBjYWxsYmFja3MgPSBbXTtcbn1cbmV4cG9ydHMudWlQcmVmZXJlbmNlcyA9IG5ldyBVSVByZWZlcmVuY2VzKCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuV2ViR3JhcGhWaWV3ID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi9Bcmd1bWVudFwiKTtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuLi9leHByZXNzaW9ucy9FeHByZXNzaW9uXCIpO1xuY29uc3QgR3JhcGhNaW5pcHVsYXRvcl8xID0gcmVxdWlyZShcIi4uL0dyYXBoTWluaXB1bGF0b3JcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2Fzc2VydFwiKTtcbmNvbnN0IFRvdWNoR2VzdHVyZVJlY29nbml6ZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9Ub3VjaEdlc3R1cmVSZWNvZ25pemVyXCIpO1xuY29uc3QgRWRnZVZpZXdfMSA9IHJlcXVpcmUoXCIuL0VkZ2VWaWV3XCIpO1xuY29uc3QgRXhwcmVzc2lvbk5vZGVWaWV3XzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uTm9kZVZpZXdcIik7XG5jb25zdCBBcmd1bWVudE5vZGVWaWV3XzEgPSByZXF1aXJlKFwiLi9Bcmd1bWVudE5vZGVWaWV3XCIpO1xuY29uc3QgRXhwbGFuYXRpb25Qb3B1cF8xID0gcmVxdWlyZShcIi4vRXhwbGFuYXRpb25Qb3B1cFwiKTtcbi8qKlxuICogQSB1aSBlbGVtZW50IHRoYXQgd2lsbCBkaXNwbGF5IGEgbWF0aCBncmFwaCBpbiBhIHdlYi5cbiAqL1xuY2xhc3MgV2ViR3JhcGhWaWV3IGV4dGVuZHMgSFRNTERpdkVsZW1lbnQge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBncmFwaCBNdXN0IGJlIGZ1bGx5IGNvbm5lY3RlZC5cbiAgICAgKiBAcGFyYW0gcm9vdHMgTm9uLWVtcHR5LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGdyYXBoLCByb290cywgY29uZmlnID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZ3JhcGggPSBncmFwaDtcbiAgICAgICAgdGhpcy5ub2RlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gMDtcbiAgICAgICAgdGhpcy5vZmZzZXRZID0gMDtcbiAgICAgICAgdGhpcy5ub2RlUG9zaXRpb25zID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmVkZ2VQb3NpdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZWRnZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucm9vdE5vZGVzID0gbmV3IFNldChyb290cyk7XG4gICAgICAgIHRoaXMucmluZ0VsZW1lbnRzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLnJpbmdQb3NpdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZXhwbGFuYXRpb25Qb3B1cHMgPSBbXTtcbiAgICAgICAgaWYgKGNvbmZpZyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0FyZ3VtZW50cyA9IGNvbmZpZy5zaG93QXJndW1lbnRzO1xuICAgICAgICAgICAgdGhpcy5kcmF3RWRnZUxpbmVzID0gY29uZmlnLmRyYXdFZGdlTGluZXM7XG4gICAgICAgICAgICB0aGlzLmRlYnVnQ29ybmVyRW5hYmxlZCA9IGNvbmZpZy5kZWJ1Z0Nvcm5lckVuYWJsZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHlsZS5jbGlwUGF0aCA9IFwicG9seWdvbigwJSAwJSwgMTAwJSAwJSwgMTAwJSAxMDAlLCAwJSAxMDAlKVwiO1xuICAgICAgICB0aGlzLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgICAgICB0aGlzLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudG91Y2hEb3duID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubW91c2VEb3duKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0WCArPSBldmVudC5tb3ZlbWVudFggLyB0aGlzLnNjYWxlO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXRZICs9IGV2ZW50Lm1vdmVtZW50WSAvIHRoaXMuc2NhbGU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9mZnNldCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1vdXNlUG9zID0gUG9pbnQoZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XG4gICAgICAgICAgICBjb25zdCBwcmVNb3VzZVBvcyA9IHRoaXMuZ2V0SW50ZXJuYWxQb3MobW91c2VQb3MpO1xuICAgICAgICAgICAgY29uc3Qgc2NhbGVEZWx0YSA9IE1hdGgucG93KDAuOCwgZXZlbnQuZGVsdGFZIC8gMzYwKTtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZURlbHRhICogdGhpcy5zY2FsZTtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RNb3VzZVBvcyA9IHRoaXMuZ2V0SW50ZXJuYWxQb3MobW91c2VQb3MpO1xuICAgICAgICAgICAgY29uc3QgaW50WERpZmYgPSBwb3N0TW91c2VQb3MueCAtIHByZU1vdXNlUG9zLng7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiSW50ZXJuYWwgWCBDaGFuZ2UgdW5kZXIgbW91c2UgXCIgKyBpbnRYRGlmZilcbiAgICAgICAgICAgIC8vIEFkanVzdCBvZmZzZXQgc28gdGhhdCBjb250ZW50IHVuZGVyIHRoZSBtb3VzZSBkb2Vzbid0IG1vdmVcbiAgICAgICAgICAgIC8vdGhpcy5vZmZzZXRYICs9IGludFhEaWZmXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiQ29ycmVjdGVkIFggQ2hhbmdlIHVuZGVyIG1vdXNlIFwiICsgKHRoaXMuZ2V0SW50ZXJuYWxQb3MobW91c2VQb3MpLnggLSBwcmVNb3VzZVBvcy54KSlcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT2Zmc2V0KCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2VzdHVyZVJlY29nbml6ZXIgPSBuZXcgVG91Y2hHZXN0dXJlUmVjb2duaXplcl8xLlRvdWNoR2VzdHVyZVJlY29nbml6ZXIoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hkb3duXCIsIHRoaXMuZ2VzdHVyZVJlY29nbml6ZXIucHJvY2Vzc1RvdWNoRG93bik7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuZ2VzdHVyZVJlY29nbml6ZXIucHJvY2Vzc1RvdWNoRW5kKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgdGhpcy5nZXN0dXJlUmVjb2duaXplci5wcm9jZXNzVG91Y2hDYW5jZWwpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5nZXN0dXJlUmVjb2duaXplci5wcm9jZXNzVG91Y2hNb3ZlKTtcbiAgICAgICAgdGhpcy5nZXN0dXJlUmVjb2duaXplci5hZGRQaW5jaExpc3RlbmVyKChjZW50ZXIsIHNjYWxlRGVsdGEsIGZpbmdlcnMpID0+IHtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVwT2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IGEgZnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIHRoZSBjb2xvciBvZiBhIG5vZGUuXG4gICAgICogQHBhcmFtIGNvbG9yRm5cbiAgICAgKi9cbiAgICBzZXROb2RlQ29sb3JpbmdTY2hlbWUoY29sb3JGbikge1xuICAgICAgICB0aGlzLm5vZGVDb2xvckZuID0gY29sb3JGbjtcbiAgICAgICAgdGhpcy5wcm9wb2dhdGVTZXR0aW5nc1RvTm9kZXMoKTtcbiAgICB9XG4gICAgbm9kZUNvbG9yRm4gPSAobikgPT4gXCJsaWdodGJsdWVcIjtcbiAgICBwcm9wb2dhdGVTZXR0aW5nc1RvTm9kZXMoKSB7XG4gICAgICAgIHRoaXMubm9kZXMuZm9yRWFjaCgodmlldywgbm9kZSkgPT4ge1xuICAgICAgICAgICAgdmlldy5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLm5vZGVDb2xvckZuKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBpZiB0aGUgdmlldyBzaG91bGQgc2hvdyBhcmd1bWVudCBub2RlcyBhcyBub2Rlcy5cbiAgICAgKiBGYWxzZSBieSBkZWZhdWx0LlxuICAgICAqIEBwYXJhbSB2YWxcbiAgICAgKi9cbiAgICBzZXRTaG93QXJndW1lbnRzKHZhbCkge1xuICAgICAgICB0aGlzLnNob3dBcmd1bWVudHMgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlYWRHcmFwaCgpO1xuICAgICAgICB0aGlzLmFycmFuZ2UoKTtcbiAgICAgICAgdGhpcy51cGRhdGVPZmZzZXQoKTtcbiAgICB9XG4gICAgZ2V0IGNlbnRlcigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHRoaXMub2Zmc2V0V2lkdGggLyAyLFxuICAgICAgICAgICAgeTogdGhpcy5vZmZzZXRIZWlnaHQgLyAyLFxuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGb2xsb3dzIHRoZSBzaG93QXJndW1lbnQgc2V0dGluZy5cbiAgICAgKiBQb3B1bGF0ZXMgdGhpcy5ub2RlcywgdGhpcy5lZGdlcyxcbiAgICAgKiBhZGRzIHRoZSBjcmVhdGVkIHZpZXdzIHRvIHRoZSBzaGFkb3cgZG9tXG4gICAgICogdG8gbWF0Y2ggdGhlIGdyYXBoLlxuICAgICAqIFJlbW92ZXMgYW55IHByZS1leGlzdGluZyBlbGVtZW50cyBmcm9tIHRoZSBzaGFkb3cgZG9tLlxuICAgICAqL1xuICAgIHJlYWRHcmFwaCgpIHtcbiAgICAgICAgLy8gQ2xlYXIgZXhpc3RpbmdcbiAgICAgICAgdGhpcy5ub2Rlcy5mb3JFYWNoKCh2aWV3LCBub2RlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHZpZXcpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ub2Rlcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmVkZ2VzLmZvckVhY2goKHZpZXcsIGVkZ2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodmlldyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVkZ2VzLmNsZWFyKCk7XG4gICAgICAgIC8vIEZldGNoIG5vZGVzXG4gICAgICAgIHRoaXMuZ3JhcGguZ2V0Tm9kZXMoKS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgRXhwcmVzc2lvbk5vZGVWaWV3XzEuRXhwcmVzc2lvbk5vZGVWaWV3KG5vZGUpO1xuICAgICAgICAgICAgICAgIHZpZXcuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rlcy5zZXQobm9kZSwgdmlldyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmQodmlldyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgQXJndW1lbnRfMS5Bcmd1bWVudCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zaG93QXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgY29uc3QgdmlldyA9IG5ldyBBcmd1bWVudE5vZGVWaWV3XzEuQXJndW1lbnROb2RlVmlldyhub2RlKTtcbiAgICAgICAgICAgICAgICB2aWV3LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZXMuc2V0KG5vZGUsIHZpZXcpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kKHZpZXcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdyYXBoIGNvbnRhaW5zIG5vZGUgV2ViR3JhcGhWaWV3IGNhbid0IHByb2Nlc3MuXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gRmV0Y2ggZWRnZXNcbiAgICAgICAgR3JhcGhNaW5pcHVsYXRvcl8xLkdyYXBoTWluaXB1bGF0b3IuZHJvcFN5bW1ldHJpYyh0aGlzLmdyYXBoLmdldEVkZ2VzKCkpLmZpbHRlcihlZGdlID0+IHtcbiAgICAgICAgICAgIC8vIE9ubHkgY29uc2lkZXIgZWRnZXMgZm9yIHdoaWNoIHdlIGhhdmUgYm90aCBlbmRwb2ludHMgb24gdGhlIHZpZXdcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVzLmhhcyhlZGdlLm4pICYmIHRoaXMubm9kZXMuaGFzKGVkZ2UubjEpO1xuICAgICAgICB9KS5mb3JFYWNoKGVkZ2UgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmlldyA9IG5ldyBFZGdlVmlld18xLkVkZ2VWaWV3KHRoaXMsIGVkZ2UpO1xuICAgICAgICAgICAgdmlldy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgIHRoaXMuZWRnZXMuc2V0KGVkZ2UsIHZpZXcpO1xuICAgICAgICAgICAgdGhpcy5hcHBlbmQodmlldyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BvZ2F0ZVNldHRpbmdzVG9Ob2RlcygpO1xuICAgICAgICBpZiAodGhpcy5kZWJ1Z0Nvcm5lckVuYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvcm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvcm5lci5pbm5lckhUTUwgPSBcIkdyYXBoIE5vZGVzOiBcIiArIHRoaXMuZ3JhcGguZ2V0Tm9kZXMoKS5zaXplICsgXCI8YnI+XCJcbiAgICAgICAgICAgICAgICArIFwiVmlzaWJsZSBOb2RlczogXCIgKyB0aGlzLm5vZGVzLnNpemUgKyBcIjxicj5cIlxuICAgICAgICAgICAgICAgICsgXCJHcmFwaCBFZGdlczogXCIgKyB0aGlzLmdyYXBoLmdldEVkZ2VzKCkuc2l6ZSArIFwiPGJyPlwiXG4gICAgICAgICAgICAgICAgKyBcIlZpc2libGUgRWRnZXM6IFwiICsgdGhpcy5lZGdlcy5zaXplICsgXCI8YnI+XCI7XG4gICAgICAgICAgICBjb3JuZXIuc3R5bGUuekluZGV4ID0gXCIxMDBcIjtcbiAgICAgICAgICAgIGNvcm5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICBjb3JuZXIuc3R5bGUud2lkdGggPSBcImZpdC1jb250ZW50XCI7XG4gICAgICAgICAgICBjb3JuZXIuc3R5bGUubWFyZ2luID0gXCIwXCI7XG4gICAgICAgICAgICBjb3JuZXIuc3R5bGUucGFkZGluZyA9IFwiMWNoXCI7XG4gICAgICAgICAgICBjb3JuZXIuc3R5bGUuYm9yZGVyID0gXCJibGFjayAxcHggc29saWRcIjtcbiAgICAgICAgICAgIGNvcm5lci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kKGNvcm5lcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXBPaygpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5yZWFkR3JhcGgoKTtcbiAgICAgICAgdGhpcy5hcnJhbmdlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlT2Zmc2V0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBpY2sgcGxhY2VzIGZvciBhbGwgdGhlIG5vZGVzL2VkZ2VzIG9uIHRoZSBzY3JlZW4uXG4gICAgICogUG9wdWxhdGVzIHRoZSBwb3NpdGlvbiogcmVwIHZhcnMuXG4gICAgICovXG4gICAgYXJyYW5nZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlUG9zaXRpb25zLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuZWRnZVBvc2l0aW9ucy5jbGVhcigpO1xuICAgICAgICB0aGlzLnJpbmdQb3NpdGlvbnMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yaW5nRWxlbWVudHMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQoZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJpbmdFbGVtZW50cy5jbGVhcigpO1xuICAgICAgICAvLyBQbGFjZSBub2RlcyBvbiBhIHNlcmllcyBvZiByaW5ncyBmcm9tIHRoZSBjZW50ZXIgdXNpbmcgdGhlaXIgZGVwdGggaW4gdGhlIGdyYXBoXG4gICAgICAgIGNvbnN0IGxldmVscyA9IEdyYXBoTWluaXB1bGF0b3JfMS5HcmFwaE1pbmlwdWxhdG9yLmdldExldmVscyh0aGlzLmdyYXBoLCB0aGlzLnJvb3ROb2RlcywgKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgQXJndW1lbnRfMS5Bcmd1bWVudClcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93QXJndW1lbnRzO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5ldyB0eXBlIG9mIG5vZGVcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgbWF4RGVwdGggPSAwO1xuICAgICAgICBsZXZlbHMuZm9yRWFjaCgoXywgZGVwdGgpID0+IHtcbiAgICAgICAgICAgIG1heERlcHRoID0gTWF0aC5tYXgobWF4RGVwdGgsIGRlcHRoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHsgeDogKHRoaXMuY2xpZW50V2lkdGggLyAyKSwgeTogdGhpcy5jbGllbnRIZWlnaHQgLyAyIH07XG4gICAgICAgIGxldCBsYXN0UmFkaXVzID0gMDsgLy9weFxuICAgICAgICBmb3IgKGxldCBkZXB0aCA9IDA7IGRlcHRoIDwgbWF4RGVwdGggKyAxOyBkZXB0aCsrKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlcyA9IGxldmVscy5nZXQoZGVwdGgpO1xuICAgICAgICAgICAgLy8gT3JnYW5pemUgdGhlIHJvb3Qgbm9kZXMgb24gYSBjaXJjbGUgYXJvdW5kIHRoZSBjZW50ZXJcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBTaXplID0gKDIgKiBNYXRoLlBJKSAvIG5vZGVzLnNpemU7XG4gICAgICAgICAgICAvLyBUaGUgc3RhcnRpbmcgYW5ndWxhciBvZmZzZXQgdG8gYWRkIHRoZSBzdGVwc2l6ZSB0b1xuICAgICAgICAgICAgLy8gTWFraW5nIGl0IG5vbi16ZXJvIHN0b3BzIHRoaW5ncyBmcm9tIGFsaWduaW5nXG4gICAgICAgICAgICBjb25zdCBzdGVwT2Zmc2V0ID0gKE1hdGguUEkgLyAzLjUpICogZGVwdGg7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGN1bGF0aW5nIHRoZSByYWRpdXMgb2YgdGhlIGNpcmNsZVxuICAgICAgICAgICAgICogU3VwcG9zZSBldmVyeSByb290IG5vZGUgb24gdGhlIHN0YXJ0aW5nIGNpcmNsZSByZXF1aXJlc1xuICAgICAgICAgICAgICogYSBjaXJjdWxhciBzcGFjZSB0byBiZSBkcmF3biB3aXRoIHJhZGl1cyBub2RlUmFkaXVzXG4gICAgICAgICAgICAgKiBBIHN0YXJ0aW5nIGNpcmNsZSB3aXRoIG4gb2YgdGhlc2Ugbm9kZXMgd291bGQgcmVxdWlyZSBhXG4gICAgICAgICAgICAgKiBjaXJjdW1mZXJlbmNlIG9mIG4gKiAybm9kZVJhZGl1cy5cbiAgICAgICAgICAgICAqIFRoZSBjaXJjdW1mZXJlbmNlIG9mIGEgY2lyY2xlIGNhbiBiZSBleHByZXNzZWRcbiAgICAgICAgICAgICAqIGFzIDIqcGkqclxuICAgICAgICAgICAgICogPT4gciA9IG4gKiAyICogc21hbGxSIC8gKDIgKiBwaSlcbiAgICAgICAgICAgICAqICAgICAgPSBuICogc21hbGxSIC8gcGlcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY29uc3Qgbm9kZVJhZGl1cyA9IDcwOyAvLyBwaXhlbHNcbiAgICAgICAgICAgIGxldCByYWRpdXMgPSBNYXRoLm1heChub2Rlcy5zaXplICogbm9kZVJhZGl1cyAvIE1hdGguUEksIGxhc3RSYWRpdXMgKyAoMyAqIG5vZGVSYWRpdXMpKTtcbiAgICAgICAgICAgIGlmIChkZXB0aCA9PSAwICYmIG5vZGVzLnNpemUgPT0gMSlcbiAgICAgICAgICAgICAgICByYWRpdXMgPSAwO1xuICAgICAgICAgICAgbGFzdFJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgICAgIGNvbnN0IG5zID0gWy4uLm5vZGVzXTsgLy8gVE9ETywgYXNzaWduIGEgbWVhbmluZ2Z1bCBvcmRlcmluZ1xuICAgICAgICAgICAgbnMuZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5ub2Rlcy5nZXQobm9kZSk7XG4gICAgICAgICAgICAgICAgLy92aWV3LnN0eWxlLndpZHRoID0gXCJcIiArIHNtYWxsUiArIFwicHhcIlxuICAgICAgICAgICAgICAgIC8vdmlldy5zdHlsZS5oZWlnaHQgPSBcIlwiICsgc21hbGxSICsgXCJweFwiXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjYXJ0ZXNpYW4gcG9pbnQgZnJvbSB0aGUgcmFkaXVzIGFuZCBhbmdsZVxuICAgICAgICAgICAgICAgIGNvbnN0IHggPSByYWRpdXMgKiBNYXRoLmNvcyhzdGVwU2l6ZSAqIGluZGV4ICsgc3RlcE9mZnNldCkgKyBjZW50ZXIueDtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gcmFkaXVzICogTWF0aC5zaW4oc3RlcFNpemUgKiBpbmRleCArIHN0ZXBPZmZzZXQpICsgY2VudGVyLnk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlUG9zaXRpb25zLnNldCh2aWV3LCBQb2ludCh4LCB5KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHJpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcmluZy5zdHlsZS5ib3JkZXIgPSBcImxpZ2h0Z3JheSBzb2xpZCAwLjNjaFwiO1xuICAgICAgICAgICAgcmluZy5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwMCVcIjtcbiAgICAgICAgICAgIHJpbmcuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICByaW5nLnN0eWxlLnpJbmRleCA9IFwiLTEwXCI7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHJpbmcpO1xuICAgICAgICAgICAgdGhpcy5yaW5nRWxlbWVudHMuYWRkKHJpbmcpO1xuICAgICAgICAgICAgdGhpcy5yaW5nUG9zaXRpb25zLnNldChyaW5nLCB7IHJhZGl1czogcmFkaXVzIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vdyBhcmFuZ2UgdGhlIGVkZ2VzXG4gICAgICAgIHRoaXMuZWRnZXMuZm9yRWFjaCgodmlldywgZWRnZSkgPT4ge1xuICAgICAgICAgICAgLy8gRmluZCB0aGUgbWlkZGxlIG9mIHRoZSB0d28gZW5kcHRzXG4gICAgICAgICAgICBjb25zdCBmaXJzdFggPSB0aGlzLm5vZGVQb3NpdGlvbnMuZ2V0KHRoaXMubm9kZXMuZ2V0KGVkZ2UubikpLng7XG4gICAgICAgICAgICBjb25zdCBmaXJzdFkgPSB0aGlzLm5vZGVQb3NpdGlvbnMuZ2V0KHRoaXMubm9kZXMuZ2V0KGVkZ2UubikpLnk7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmRYID0gdGhpcy5ub2RlUG9zaXRpb25zLmdldCh0aGlzLm5vZGVzLmdldChlZGdlLm4xKSkueDtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZFkgPSB0aGlzLm5vZGVQb3NpdGlvbnMuZ2V0KHRoaXMubm9kZXMuZ2V0KGVkZ2UubjEpKS55O1xuICAgICAgICAgICAgY29uc3QgeCA9IChmaXJzdFggKyBzZWNvbmRYKSAvIDI7XG4gICAgICAgICAgICBjb25zdCB5ID0gKGZpcnN0WSArIHNlY29uZFkpIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihzZWNvbmRZIC0gZmlyc3RZLCBzZWNvbmRYIC0gZmlyc3RYKTtcbiAgICAgICAgICAgIHRoaXMuZWRnZVBvc2l0aW9ucy5zZXQodmlldywgeyB4OiB4LCB5OiB5LCBhbmdsZTogYW5nbGUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlcE9rKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgZHJhdyBwb3NpdGlvbiBvZiB0aGUgbm9kZXMgb24gdGhlIHNjcmVlblxuICAgICAqIHRvIG1hdGNoIHRoZSBvZmZzZXQgaW4gcmVwLiBBc3N1bWVzIGFsbCB2aWV3cyBoYXZlIGEgcG9zaXRpb25cbiAgICAgKiBzdG9yZWQgaW4gdGhlIHJlcC4gQ2FsbCBhcnJhbmdlKCkgZmlyc3QuXG4gICAgICogQWxzbyBhcHBsaWVzIHRoZSBzY2FsZSBmYWN0b3IgdG8gdGhlIGZpbmFsIGRyYXcgcG9zaXRpb25zLFxuICAgICAqIGludmlzaWJsZSB0byBldmVyeW9uZSBlbHNlLlxuICAgICAqL1xuICAgIHVwZGF0ZU9mZnNldCgpIHtcbiAgICAgICAgY29uc3QgY2VudGVyID0gdGhpcy5jZW50ZXI7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gdGhpcy5zY2FsZTtcbiAgICAgICAgZnVuY3Rpb24gYXBwbHlTY2FsZShpKSB7XG4gICAgICAgICAgICByZXR1cm4gUG9pbnQoKChpLngpIC0gY2VudGVyLngpICogc2NhbGUgKyBjZW50ZXIueCwgKChpLnkpIC0gY2VudGVyLnkpICogc2NhbGUgKyBjZW50ZXIueSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlUG9zaXRpb25zLmZvckVhY2goKHBvcywgdmlldykgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWRqdXN0ZWQgPSBhcHBseVNjYWxlKHtcbiAgICAgICAgICAgICAgICB4OiBwb3MueCArIHRoaXMub2Zmc2V0WCxcbiAgICAgICAgICAgICAgICB5OiBwb3MueSArIHRoaXMub2Zmc2V0WSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmlldy5zdHlsZS5sZWZ0ID0gXCJcIiArIChhZGp1c3RlZC54IC0gKDAuNSAqIHZpZXcub2Zmc2V0V2lkdGgpKSArIFwicHhcIjtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUudG9wID0gXCJcIiArIChhZGp1c3RlZC55IC0gKDAuNSAqIHZpZXcub2Zmc2V0SGVpZ2h0KSkgKyBcInB4XCI7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVkZ2VQb3NpdGlvbnMuZm9yRWFjaCgocG9zLCB2aWV3KSA9PiB7XG4gICAgICAgICAgICB2aWV3LnNldEFuZ2xlKHBvcy5hbmdsZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5kcmF3RWRnZUxpbmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RQb3MgPSB0aGlzLm5vZGVQb3NpdGlvbnMuZ2V0KHRoaXMubm9kZXMuZ2V0KHZpZXcuZmlyc3QpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRQb3MgPSB0aGlzLm5vZGVQb3NpdGlvbnMuZ2V0KHRoaXMubm9kZXMuZ2V0KHZpZXcuc2Vjb25kKSk7XG4gICAgICAgICAgICAgICAgdmlldy53aWR0aCA9IFwiXCIgKyAoc2NhbGUgKiBNYXRoLmh5cG90KHNlY29uZFBvcy54IC0gZmlyc3RQb3MueCwgc2Vjb25kUG9zLnkgLSBmaXJzdFBvcy55KSkgKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgdmlldy5zdHlsZS5ib3JkZXJCb3R0b20gPSBcImJsYWNrIDAuMWNoIHNvbGlkXCI7XG4gICAgICAgICAgICAgICAgdmlldy5zdHlsZS5ib3JkZXJUb3AgPSBcImJsYWNrIDAuMWNoIHNvbGlkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2aWV3LndpZHRoID0gXCJmaXQtY29udGVudFwiO1xuICAgICAgICAgICAgICAgIHZpZXcuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgdmlldy5zdHlsZS5ib3JkZXJUb3AgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGFkanVzdGVkID0gYXBwbHlTY2FsZSh7XG4gICAgICAgICAgICAgICAgeDogcG9zLnggKyB0aGlzLm9mZnNldFgsXG4gICAgICAgICAgICAgICAgeTogcG9zLnkgKyB0aGlzLm9mZnNldFksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUubGVmdCA9IFwiXCIgKyAoYWRqdXN0ZWQueCAtICgwLjUgKiB2aWV3Lm9mZnNldFdpZHRoKSkgKyBcInB4XCI7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLnRvcCA9IFwiXCIgKyAoYWRqdXN0ZWQueSAtICgwLjUgKiB2aWV3Lm9mZnNldEhlaWdodCkpICsgXCJweFwiO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gT3ZlcmxheSBlbGVtZW50cyBjaGFuZ2Ugc2l6ZSB3aXRoIHNjYWxlXG4gICAgICAgIHRoaXMucmluZ1Bvc2l0aW9ucy5mb3JFYWNoKChwb3MsIHZpZXcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFkanVzdGVkQ2VudGVyUG9zID0gYXBwbHlTY2FsZSh7XG4gICAgICAgICAgICAgICAgeDogY2VudGVyLnggKyB0aGlzLm9mZnNldFgsXG4gICAgICAgICAgICAgICAgeTogY2VudGVyLnkgKyB0aGlzLm9mZnNldFksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUubGVmdCA9IFwiXCIgKyAoYWRqdXN0ZWRDZW50ZXJQb3MueCAtIChwb3MucmFkaXVzICogc2NhbGUpKSArIFwicHhcIjtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUudG9wID0gXCJcIiArIChhZGp1c3RlZENlbnRlclBvcy55IC0gKHBvcy5yYWRpdXMgKiBzY2FsZSkpICsgXCJweFwiO1xuICAgICAgICAgICAgdmlldy5zdHlsZS53aWR0aCA9IFwiXCIgKyBwb3MucmFkaXVzICogMiAqIHNjYWxlICsgXCJweFwiO1xuICAgICAgICAgICAgdmlldy5zdHlsZS5hc3BlY3RSYXRpbyA9IFwiMVwiO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5leHBsYW5hdGlvblBvcHVwcy5mb3JFYWNoKHZhbCA9PiB7XG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gdmFsLmU7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSB2YWwucG9zO1xuICAgICAgICAgICAgY29uc3QgYWRqdXN0ZWQgPSBhcHBseVNjYWxlKHtcbiAgICAgICAgICAgICAgICB4OiBwb3MueCArIHRoaXMub2Zmc2V0WCxcbiAgICAgICAgICAgICAgICB5OiBwb3MueSArIHRoaXMub2Zmc2V0WSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmlldy5zdHlsZS5sZWZ0ID0gXCJcIiArIChhZGp1c3RlZC54IC0gKDAuNSAqIHZpZXcub2Zmc2V0V2lkdGgpKSArIFwicHhcIjtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUudG9wID0gXCJcIiArIChhZGp1c3RlZC55IC0gKDAuNSAqIHZpZXcub2Zmc2V0SGVpZ2h0KSkgKyBcInB4XCI7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlcE9rKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1hcCBmcm9tIHJlbGF0aXZlIHNjcmVlbiBjb29yZGluYXRlcyAod2hlcmUgdGwgb2YgdGhpcyB2aWV3IGlzICgwLDApKVxuICAgICAqIHRvIHRoZSBpbnRlcm5hbCBjb29yZGluYXRlIHN5c3RlbSB3ZSdyZSB1c2luZy5cbiAgICAgKi9cbiAgICBnZXRJbnRlcm5hbFBvcyhwaXhlbFBvcykge1xuICAgICAgICBjb25zdCBjZW50ZXIgPSB0aGlzLmNlbnRlcjtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLnNjYWxlO1xuICAgICAgICByZXR1cm4gUG9pbnQoKHBpeGVsUG9zLnggLSBjZW50ZXIueCkgLyBzY2FsZSArIGNlbnRlci54IC0gdGhpcy5vZmZzZXRYLCAocGl4ZWxQb3MueSAtIGNlbnRlci55KSAvIHNjYWxlICsgY2VudGVyLnkgLSB0aGlzLm9mZnNldFkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWFjdCB0byBhbiBlZGdlIGJlaW5nIGNsaWNrZWQuXG4gICAgICogQHBhcmFtIHZpZXcgSW4gdGhpcyB2aWV3XG4gICAgICogQHBhcmFtIGV2ZW50IFRoZSBjbGljayBldmVudFxuICAgICAqL1xuICAgIGVkZ2VDbGlja2VkKHZpZXcsIGV2ZW50KSB7XG4gICAgICAgIC8vIFRPRE86IERvbid0IGFsbG93IGR1cGxpYXRlIGV4cGxhbmF0aW9uIHBvcHVwc1xuICAgICAgICBpZiAodmlldy5lZGdlIGluc3RhbmNlb2YgQXJndW1lbnRfMS5Bcmd1bWVudCkge1xuICAgICAgICAgICAgY29uc3QgcG9wdXAgPSBuZXcgRXhwbGFuYXRpb25Qb3B1cF8xLkV4cGxhbmF0aW9uUG9wdXAodmlldy5lZGdlLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZChwb3B1cCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmV4cGxhbmF0aW9uUG9wdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmV4cGxhbmF0aW9uUG9wdXBzW2ldLmUgPT09IHBvcHVwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGxhbmF0aW9uUG9wdXBzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlYWx0aXZlWCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCByZWxhdGl2ZVkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICAvL1RPRE86IFRoZSBwb3NpdGlvbiBpc24ndCBjb3JyZWN0XG4gICAgICAgICAgICAvL1RPRE86IEFsZ29yaXRobSBmb3IgcGlja2luZyB3aGVyZSB3ZSBzaG91bGQgcHV0IHRoZSBwb3B1cCBzbyBpdCBzdGF5cyBvdXRcbiAgICAgICAgICAgIC8vIG9mIHRoZSB3YXkgb2YgdGhlIGdyYXBoXG4gICAgICAgICAgICB0aGlzLmV4cGxhbmF0aW9uUG9wdXBzLnB1c2goe1xuICAgICAgICAgICAgICAgIGU6IHBvcHVwLFxuICAgICAgICAgICAgICAgIHBvczogdGhpcy5nZXRJbnRlcm5hbFBvcyhQb2ludChyZWFsdGl2ZVgsIHJlbGF0aXZlWSkpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwb3B1cC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kKHBvcHVwKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT2Zmc2V0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVwT2soKSB7XG4gICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMucm9vdE5vZGVzLnNpemUgPiAwKTtcbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkoR3JhcGhNaW5pcHVsYXRvcl8xLkdyYXBoTWluaXB1bGF0b3IuaXNDb25uZWN0ZWQodGhpcy5ncmFwaCksIFwiR3JhcGggbm90IGNvbm5lY3RlZFwiKTtcbiAgICB9XG4gICAgZ3JhcGg7XG4gICAgbm9kZXM7XG4gICAgLy8gVGhlIFBvc2l0aW9uIG9mIHRoZSBjZW50ZXIgb2YgdGhlIG5vZGUuXG4gICAgbm9kZVBvc2l0aW9ucztcbiAgICBlZGdlcztcbiAgICBlZGdlUG9zaXRpb25zO1xuICAgIC8vIEFtdCB0byBhZGQgdG8gbGVmdCBjb29yZGluYXRlXG4gICAgb2Zmc2V0WDtcbiAgICAvLyBBZGRlZCB0byB0b3AgY29vcmRpbmF0ZSBvZiBub2Rlc1xuICAgIG9mZnNldFk7XG4gICAgLy8gaWYgdGhlIG1vdXNlIGlzIGRvd25cbiAgICBtb3VzZURvd24gPSBmYWxzZTtcbiAgICB0b3VjaERvd24gPSBmYWxzZTtcbiAgICBzY2FsZSA9IDE7XG4gICAgcm9vdE5vZGVzO1xuICAgIHJpbmdFbGVtZW50cztcbiAgICByaW5nUG9zaXRpb25zO1xuICAgIC8qKlxuICAgICAqIFBvc2l0aW9uIG9mIHRvcCBsZWZ0IG9mIHBvcHVwXG4gICAgICovXG4gICAgZXhwbGFuYXRpb25Qb3B1cHM7XG4gICAgZ2VzdHVyZVJlY29nbml6ZXI7XG4gICAgLy8gSWYgdGhlIGdyYXBoIHNob3VsZCBkcmF3IGFyZ3VtZW50IG5vZGVzLlxuICAgIHNob3dBcmd1bWVudHMgPSBmYWxzZTtcbiAgICBkcmF3RWRnZUxpbmVzID0gZmFsc2U7XG4gICAgZGVidWdDb3JuZXJFbmFibGVkID0gZmFsc2U7XG4gICAgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoXyA9PiB7XG4gICAgICAgIHRoaXMuYXJyYW5nZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZU9mZnNldCgpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5XZWJHcmFwaFZpZXcgPSBXZWJHcmFwaFZpZXc7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ3ZWItZ3JhcGh2aWV3XCIsIFdlYkdyYXBoVmlldywgeyBleHRlbmRzOiBcImRpdlwiIH0pO1xuZnVuY3Rpb24gUG9pbnQoeCwgeSwgYW5nbGUgPSB1bmRlZmluZWQpIHtcbiAgICBpZiAoYW5nbGUgPT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHksXG4gICAgICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogeCxcbiAgICAgICAgeTogeSxcbiAgICAgICAgYW5nbGU6IGFuZ2xlLFxuICAgIH07XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGFyc2UgPSB2b2lkIDA7XG4vKipcbiAqIFBhcnNlcyBodW1hbiB3cml0dGVuLCB1dGYtOCB0eXBlIG1hdGggZXhwcmVzc2lvbnNcbiAqIGludG8gYWN0dWFsIG1hdGguXG4gKiBAcGFyYW0gaW5wdXRcbiAqL1xuZnVuY3Rpb24gcGFyc2UoaW5wdXQpIHtcbiAgICBjb25zdCBvdXQgPSBbXTtcbiAgICBjb25zb2xlLmxvZyhcIklucHV0OiBcIiArIGlucHV0KTtcbiAgICBjb25zdCBmaW5kRXhwcmVzc2lvbnMgPSAvWzAtOWEtekEtWl0rLztcbiAgICBjb25zdCBmaW5kT3BlcmF0b3JzID0gL1tcXCtcXC1cXCpcXC9cXF5dLztcbiAgICBjb25zb2xlLmxvZyhmaW5kRXhwcmVzc2lvbnMpO1xuICAgIGNvbnN0IHNwbGl0ID0gaW5wdXQuc3BsaXQoZmluZEV4cHJlc3Npb25zKTtcbiAgICBjb25zb2xlLmxvZyhzcGxpdCk7XG4gICAgcmV0dXJuIG91dDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbmZ1bmN0aW9uIHBhcnNlRXhwcmVzc2lvbihpbnB1dCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZFwiKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pbk1hdGhCbG9jayA9IGV4cG9ydHMuaW5NYXRoID0gZXhwb3J0cy5pblJvdyA9IGV4cG9ydHMuaW5QYXJlbiA9IHZvaWQgMDtcbi8qKlxuICogV3JhcHMgdGhlIGdpdmVuIG1hdGhtbCBzdHJpbmcgaW4gbWF0aG1sIHBhcmVudGhhc2VzLlxuICogQHBhcmFtIHN0clxuICovXG5mdW5jdGlvbiBpblBhcmVuKHN0cikge1xuICAgIHJldHVybiBcIjxtbz4oPC9tbz5cIiArIHN0ciArIFwiPG1vPik8L21vPlwiO1xufVxuZXhwb3J0cy5pblBhcmVuID0gaW5QYXJlbjtcbi8qKlxuICogUHV0cyB0aGUgZ2l2ZW4gbWF0aG1sIGV4cHJlc3Npb24gaW4gYSByb3cgc28gdGhhdFxuICogaXQgZG9lc24ndCBnZXQgZGl2aWRlZCBieSBtYXRoamF4LlxuICogQHBhcmFtIHN0clxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gaW5Sb3coc3RyKSB7XG4gICAgcmV0dXJuIFwiPG1yb3c+XCIgKyBzdHIgKyBcIjwvbXJvdz5cIjtcbn1cbmV4cG9ydHMuaW5Sb3cgPSBpblJvdztcbi8qKlxuICogV3JhcHMgdGhlIGdpdmVuIHN0cmluZyBpbiA8bWF0aD48L21hdGg+XG4gKiBAcGFyYW0gc3RyXG4gKi9cbmZ1bmN0aW9uIGluTWF0aChzdHIpIHtcbiAgICByZXR1cm4gXCI8bWF0aD5cIiArIHN0ciArIFwiPC9tYXRoPlwiO1xufVxuZXhwb3J0cy5pbk1hdGggPSBpbk1hdGg7XG4vKipcbiAqIFdyYXBzIHRoZSBnaXZlbiBzdHJpbmcgaW4gPG1hdGggZGlzcGxheT0nYmxvY2snPjwvbWF0aD5cbiAqIEBwYXJhbSBzdHJcbiAqL1xuZnVuY3Rpb24gaW5NYXRoQmxvY2soc3RyKSB7XG4gICAgcmV0dXJuIFwiPG1hdGggZGlzcGxheT0nYmxvY2snPlwiICsgc3RyICsgXCI8L21hdGg+XCI7XG59XG5leHBvcnRzLmluTWF0aEJsb2NrID0gaW5NYXRoQmxvY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFzID0gZXhwb3J0cy5hZGRBbGwgPSBleHBvcnRzLnNldE9mID0gdm9pZCAwO1xuZnVuY3Rpb24gc2V0T2YoLi4uYXJyKSB7XG4gICAgY29uc3Qgb3V0ID0gbmV3IFNldCgpO1xuICAgIGFyci5mb3JFYWNoKGUgPT4gb3V0LmFkZChlKSk7XG4gICAgcmV0dXJuIG91dDtcbn1cbmV4cG9ydHMuc2V0T2YgPSBzZXRPZjtcbi8qKlxuICogQWRkcyB0aGUgZ2l2ZW4gZWxlbWVudHMgdG8gdGhlIGdpdmVuIGNvbGxlY3Rpb25cbiAqIEBwYXJhbSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0gZWxlbWVudHNcbiAqL1xuZnVuY3Rpb24gYWRkQWxsKGNvbGxlY3Rpb24sIC4uLmVsZW1lbnRzKSB7XG4gICAgZm9yIChjb25zdCBlIG9mIGVsZW1lbnRzKSB7XG4gICAgICAgIGNvbGxlY3Rpb24uYWRkKGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuYWRkQWxsID0gYWRkQWxsO1xuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGVsZW1lbnQgaXMgaW4gdGhlIGdpdmVuIGNvbGxlY3Rpb25cbiAqIHVzaW5nIHJlZmVyZW5jaWFsIGVxdWFsaXR5LlxuICogQHBhcmFtIGNvbGxlY3Rpb25cbiAqIEBwYXJhbSBlbGVtZW50XG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBjb2xsZWN0aW9uIGhhcyB0aGUgZWxlbWVudCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5mdW5jdGlvbiBoYXMoY29sbGVjdGlvbiwgZWxlbWVudCkge1xuICAgIGZvciAoY29uc3QgZSBvZiBjb2xsZWN0aW9uKSB7XG4gICAgICAgIGlmIChlID09PSBlbGVtZW50KVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaGFzID0gaGFzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFzc2VydCA9IHZvaWQgMDtcbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBleHByZXNzaW9uIGV2YWx1YXRlZCB0byB0cnVlLiBJZiBub3QsIHRocm93cyBlcnJvclxuICogd2l0aCB0aGUgbWVzc2FnZSBnaXZlbi5cbiAqIEBwYXJhbSBtc2cgRGlzcGxheWVkIGlmIHRoZSBleHByZXNzaW9uIGlzIGZhbHNlLiBEZWZhdWx0cyB0byBcIkZhaWxlZCBBc3NlcnRcIlxuICovXG5mdW5jdGlvbiBhc3NlcnQoZXhwLCBtc2cgPSBcIkZhaWxlZCBhc3NlcnRcIikge1xuICAgIGlmICghZXhwKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbn1cbmV4cG9ydHMuYXNzZXJ0ID0gYXNzZXJ0O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUHJpbWFyeVBhZ2VMb2FkZXJfMSA9IHJlcXVpcmUoXCIuL1ByaW1hcnlQYWdlTG9hZGVyXCIpO1xuY29uc3QgRXhwcmVzc2lvblRlc3RQYWdlTG9hZGVyXzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uVGVzdFBhZ2VMb2FkZXJcIik7XG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICAqIFBvcHVsYXRlIGh0bWwgZWxlbWVudHMgYnkgdGhlaXIgY2xhc3MuXG4gICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uY2xhc3NMaXN0O1xuICAgICAgICBpZiAoY2xhc3Nlcy5jb250YWlucygnZXhwcmVzc2lvblRlc3RQYWdlJykpIHtcbiAgICAgICAgICAgICgwLCBFeHByZXNzaW9uVGVzdFBhZ2VMb2FkZXJfMS5sb2FkRXhwcmVzc2lvbnNUZXN0UGFnZSkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjbGFzc2VzLmNvbnRhaW5zKCdwcmltYXJ5SW50ZWdyYXRvcicpKSB7XG4gICAgICAgICAgICAoMCwgUHJpbWFyeVBhZ2VMb2FkZXJfMS5sb2FkUHJpbWFyeVBhZ2UpKCk7XG4gICAgICAgIH1cbiAgICB9LCAxMDApO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==