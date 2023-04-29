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
    //const root = Derivative.of(Fraction.of(Exponent.of(x, num(2)), x), x)
    const root = Fraction_1.Fraction.of((0, ConvenientExpressions_1.product)((0, ConvenientExpressions_1.num)(2), ConvenientExpressions_1.x, Exponent_1.Exponent.of(ConvenientExpressions_1.x, ConvenientExpressions_1.a), ConvenientExpressions_1.a), (0, ConvenientExpressions_1.product)((0, ConvenientExpressions_1.num)(2), ConvenientExpressions_1.a, ConvenientExpressions_1.a, ConvenientExpressions_1.x));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwrQkFBK0I7QUFDL0IsZ0NBQWdDLG1CQUFPLENBQUMsMkVBQWlDO0FBQ3pFLHFCQUFxQixtQkFBTyxDQUFDLDZFQUFrQztBQUMvRCxtQkFBbUIsbUJBQU8sQ0FBQyx5RUFBZ0M7QUFDM0QsbUJBQW1CLG1CQUFPLENBQUMseUVBQWdDO0FBQzNELG1CQUFtQixtQkFBTyxDQUFDLHlFQUFnQztBQUMzRCwyQkFBMkIsbUJBQU8sQ0FBQyx1RkFBdUM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjs7Ozs7Ozs7Ozs7QUNqRWxCO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHVCQUF1QjtBQUN2QixnQ0FBZ0MsbUJBQU8sQ0FBQywyRUFBaUM7QUFDekUsaUJBQWlCLG1CQUFPLENBQUMsaUVBQTRCO0FBQ3JELHVCQUF1QixtQkFBTyxDQUFDLCtFQUFtQztBQUNsRSxnQkFBZ0IsbUJBQU8sQ0FBQywyQ0FBaUI7QUFDekMsa0JBQWtCLG1CQUFPLENBQUMsdUVBQStCO0FBQ3pELHFCQUFxQixtQkFBTyxDQUFDLDZFQUFrQztBQUMvRCxtQ0FBbUMsbUJBQU8sQ0FBQyx5R0FBZ0Q7QUFDM0YsZ0NBQWdDLG1CQUFPLENBQUMsbUhBQXFEO0FBQzdGLDRCQUE0QixtQkFBTyxDQUFDLDJHQUFpRDtBQUNyRixtQkFBbUIsbUJBQU8sQ0FBQyx5RUFBZ0M7QUFDM0QsbUJBQW1CLG1CQUFPLENBQUMseUVBQWdDO0FBQzNELG1CQUFtQixtQkFBTyxDQUFDLHlFQUFnQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCOzs7Ozs7Ozs7OztBQzVEVjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCOzs7Ozs7Ozs7OztBQ3REakI7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0JBQWdCO0FBQ2hCLGlCQUFpQixtQkFBTyxDQUFDLCtDQUFlO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOzs7Ozs7Ozs7OztBQy9DSDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxTQUFTLEdBQUcsU0FBUyxHQUFHLFNBQVMsR0FBRyxTQUFTLEdBQUcsU0FBUyxHQUFHLFNBQVMsR0FBRyxTQUFTLEdBQUcsU0FBUyxHQUFHLDZCQUE2QixHQUFHLG9CQUFvQixHQUFHLDJCQUEyQixHQUFHLFdBQVcsR0FBRyxTQUFTLEdBQUcsV0FBVyxHQUFHLGdCQUFnQixHQUFHLGVBQWUsR0FBRyxpQkFBaUIsR0FBRyxjQUFjLEdBQUcsc0JBQXNCLEdBQUcsZ0JBQWdCLEdBQUcsb0JBQW9CLEdBQUcsMkJBQTJCLEdBQUcsa0JBQWtCLEdBQUcsV0FBVyxHQUFHLGdCQUFnQjtBQUMzYixrQkFBa0IsbUJBQU8sQ0FBQywrREFBdUI7QUFDakQsbUJBQW1CLG1CQUFPLENBQUMsaUVBQXdCO0FBQ25ELG1CQUFtQixtQkFBTyxDQUFDLGlFQUF3QjtBQUNuRCxrQkFBa0IsbUJBQU8sQ0FBQywrREFBdUI7QUFDakQsY0FBYyxtQkFBTyxDQUFDLHVEQUFtQjtBQUN6QyxtQkFBbUIsbUJBQU8sQ0FBQyxpRUFBd0I7QUFDbkQsbUJBQW1CLG1CQUFPLENBQUMseUNBQVk7QUFDdkMsdUJBQXVCLG1CQUFPLENBQUMsaURBQWdCO0FBQy9DLGlCQUFpQixtQkFBTyxDQUFDLCtDQUFlO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFNBQVM7QUFDVCxTQUFTO0FBQ1QsU0FBUztBQUNULFNBQVM7QUFDVCxTQUFTO0FBQ1QsU0FBUztBQUNULFNBQVM7Ozs7Ozs7Ozs7O0FDclBJO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQixHQUFHLG9CQUFvQixHQUFHLGFBQWE7QUFDeEQsbUJBQW1CLG1CQUFPLENBQUMseUNBQVk7QUFDdkMsaUJBQWlCLG1CQUFPLENBQUMsK0NBQWU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsK0JBQStCO0FBQ3pELGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELE9BQU87QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMENBQTBDLG9CQUFvQixLQUFLO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7Ozs7Ozs7Ozs7QUM5UEo7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsd0JBQXdCO0FBQ3hCLGlCQUFpQixtQkFBTyxDQUFDLCtDQUFlO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwyREFBMkQ7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qjs7Ozs7Ozs7Ozs7QUN2SVg7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMENBQTBDLG9CQUFvQixLQUFLOzs7Ozs7Ozs7OztBQ1R2RDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxlQUFlO0FBQ2YsbUJBQW1CLG1CQUFPLENBQUMsMENBQWE7QUFDeEMscUJBQXFCLG1CQUFPLENBQUMsc0VBQTJCO0FBQ3hELGdCQUFnQixtQkFBTyxDQUFDLG9DQUFVO0FBQ2xDLDJCQUEyQixtQkFBTyxDQUFDLDBEQUFxQjtBQUN4RCx1QkFBdUIsbUJBQU8sQ0FBQyxrREFBaUI7QUFDaEQsd0NBQXdDLG1CQUFPLENBQUMsOEZBQXVDO0FBQ3ZGLG9CQUFvQixtQkFBTyxDQUFDLHVEQUFhO0FBQ3pDLG1DQUFtQyxtQkFBTyxDQUFDLHFGQUE0QjtBQUN2RSwyQkFBMkIsbUJBQU8sQ0FBQyxxR0FBb0M7QUFDdkUsK0NBQStDLG1CQUFPLENBQUMsNklBQXdEO0FBQy9HLDBCQUEwQixtQkFBTyxDQUFDLG1HQUFtQztBQUNyRSw2Q0FBNkMsbUJBQU8sQ0FBQyx5SUFBc0Q7QUFDM0cscUNBQXFDLG1CQUFPLENBQUMseUhBQThDO0FBQzNGLGdDQUFnQyxtQkFBTyxDQUFDLCtHQUF5QztBQUNqRiwwQkFBMEIsbUJBQU8sQ0FBQyxtR0FBbUM7QUFDckUsMkJBQTJCLG1CQUFPLENBQUMscUdBQW9DO0FBQ3ZFLHVCQUF1QixtQkFBTyxDQUFDLDZGQUFnQztBQUMvRCw4QkFBOEIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDN0UseUJBQXlCLG1CQUFPLENBQUMsaUdBQWtDO0FBQ25FLGlDQUFpQyxtQkFBTyxDQUFDLGlIQUEwQztBQUNuRixpQ0FBaUMsbUJBQU8sQ0FBQyxpSEFBMEM7QUFDbkYsb0JBQW9CLG1CQUFPLENBQUMsdUZBQTZCO0FBQ3pELG9CQUFvQixtQkFBTyxDQUFDLHVGQUE2QjtBQUN6RCxzQkFBc0IsbUJBQU8sQ0FBQywyRkFBK0I7QUFDN0QsdUNBQXVDLG1CQUFPLENBQUMsNkhBQWdEO0FBQy9GLHVCQUF1QixtQkFBTyxDQUFDLDZGQUFnQztBQUMvRCxzQ0FBc0MsbUJBQU8sQ0FBQywySEFBK0M7QUFDN0Ysd0JBQXdCLG1CQUFPLENBQUMsK0ZBQWlDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbk5hO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDZDQUE2QztBQUM3QyxpQkFBaUIsbUJBQU8sQ0FBQyxnREFBZ0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qzs7Ozs7Ozs7Ozs7QUN6Q2hDO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQzs7Ozs7Ozs7Ozs7QUNoQm5CO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHlCQUF5QjtBQUN6QixtQkFBbUIsbUJBQU8sQ0FBQyw2Q0FBZ0I7QUFDM0MsZ0NBQWdDLG1CQUFPLENBQUMsdUVBQTZCO0FBQ3JFLGtCQUFrQixtQkFBTyxDQUFDLG1FQUEyQjtBQUNyRCx1QkFBdUIsbUJBQU8sQ0FBQyxxREFBb0I7QUFDbkQsbUNBQW1DLG1CQUFPLENBQUMsc0ZBQTZCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNsRGE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsNkJBQTZCO0FBQzdCLG1CQUFtQixtQkFBTyxDQUFDLDZDQUFnQjtBQUMzQyxnQ0FBZ0MsbUJBQU8sQ0FBQyx1RUFBNkI7QUFDckUsa0JBQWtCLG1CQUFPLENBQUMsbUVBQTJCO0FBQ3JELGNBQWMsbUJBQU8sQ0FBQywyREFBdUI7QUFDN0MsdUJBQXVCLG1CQUFPLENBQUMscURBQW9CO0FBQ25ELG1DQUFtQyxtQkFBTyxDQUFDLHNGQUE2QjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuRWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsYUFBYTtBQUNiLG1CQUFtQixtQkFBTyxDQUFDLDBDQUFhO0FBQ3hDLGdDQUFnQyxtQkFBTyxDQUFDLG9FQUEwQjtBQUNsRSxxQkFBcUIsbUJBQU8sQ0FBQyxzRUFBMkI7QUFDeEQsbUJBQW1CLG1CQUFPLENBQUMsa0VBQXlCO0FBQ3BELG1CQUFtQixtQkFBTyxDQUFDLGtFQUF5QjtBQUNwRCxrQkFBa0IsbUJBQU8sQ0FBQyxnRUFBd0I7QUFDbEQsa0JBQWtCLG1CQUFPLENBQUMsZ0VBQXdCO0FBQ2xELGNBQWMsbUJBQU8sQ0FBQyx3REFBb0I7QUFDMUMsbUJBQW1CLG1CQUFPLENBQUMsa0VBQXlCO0FBQ3BELHVCQUF1QixtQkFBTyxDQUFDLGtEQUFpQjtBQUNoRCx3Q0FBd0MsbUJBQU8sQ0FBQyw4RkFBdUM7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7O0FDbkthO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHdCQUF3QjtBQUN4QixtQkFBbUIsbUJBQU8sQ0FBQyw2Q0FBZ0I7QUFDM0MsZ0NBQWdDLG1CQUFPLENBQUMsdUVBQTZCO0FBQ3JFLGtCQUFrQixtQkFBTyxDQUFDLG1FQUEyQjtBQUNyRCxjQUFjLG1CQUFPLENBQUMsMkRBQXVCO0FBQzdDLHVCQUF1QixtQkFBTyxDQUFDLHFEQUFvQjtBQUNuRCx3Q0FBd0MsbUJBQU8sQ0FBQyxpR0FBMEM7QUFDMUYsZ0RBQWdELG1CQUFPLENBQUMsZ0hBQTBDO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esd0JBQXdCOzs7Ozs7Ozs7OztBQzVCWDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw0Q0FBNEM7QUFDNUMsbUJBQW1CLG1CQUFPLENBQUMsNkNBQWdCO0FBQzNDLGdDQUFnQyxtQkFBTyxDQUFDLHVFQUE2QjtBQUNyRSxrQkFBa0IsbUJBQU8sQ0FBQyxtRUFBMkI7QUFDckQsY0FBYyxtQkFBTyxDQUFDLDJEQUF1QjtBQUM3Qyx1QkFBdUIsbUJBQU8sQ0FBQyxxREFBb0I7QUFDbkQsd0NBQXdDLG1CQUFPLENBQUMsaUdBQTBDO0FBQzFGLGdEQUFnRCxtQkFBTyxDQUFDLGdIQUEwQztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qzs7Ozs7Ozs7Ozs7QUNwRC9CO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHVCQUF1QjtBQUN2QixtQkFBbUIsbUJBQU8sQ0FBQyw2Q0FBZ0I7QUFDM0MsZ0NBQWdDLG1CQUFPLENBQUMsdUVBQTZCO0FBQ3JFLGtCQUFrQixtQkFBTyxDQUFDLG1FQUEyQjtBQUNyRCx1QkFBdUIsbUJBQU8sQ0FBQyxxREFBb0I7QUFDbkQsd0NBQXdDLG1CQUFPLENBQUMsaUdBQTBDO0FBQzFGLGdEQUFnRCxtQkFBTyxDQUFDLGdIQUEwQztBQUNsRyxnQ0FBZ0MsbUJBQU8sQ0FBQyx1RUFBNkI7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsdUJBQXVCOzs7Ozs7Ozs7OztBQzFDVjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwwQ0FBMEM7QUFDMUMsbUJBQW1CLG1CQUFPLENBQUMsNkNBQWdCO0FBQzNDLGdDQUFnQyxtQkFBTyxDQUFDLHVFQUE2QjtBQUNyRSxtQkFBbUIsbUJBQU8sQ0FBQyxxRUFBNEI7QUFDdkQsa0JBQWtCLG1CQUFPLENBQUMsbUVBQTJCO0FBQ3JELGNBQWMsbUJBQU8sQ0FBQywyREFBdUI7QUFDN0MsdUJBQXVCLG1CQUFPLENBQUMscURBQW9CO0FBQ25ELHdDQUF3QyxtQkFBTyxDQUFDLGlHQUEwQztBQUMxRixnREFBZ0QsbUJBQU8sQ0FBQyxnSEFBMEM7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsZ0JBQWdCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7Ozs7Ozs7Ozs7O0FDeEY3QjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQ0FBa0M7QUFDbEMsZ0NBQWdDLG1CQUFPLENBQUMsdUVBQTZCO0FBQ3JFLG1CQUFtQixtQkFBTyxDQUFDLDZDQUFnQjtBQUMzQyxrQkFBa0IsbUJBQU8sQ0FBQyxtRUFBMkI7QUFDckQsdUJBQXVCLG1CQUFPLENBQUMscURBQW9CO0FBQ25ELGdEQUFnRCxtQkFBTyxDQUFDLGdIQUEwQztBQUNsRyxjQUFjLG1CQUFPLENBQUMsMkRBQXVCO0FBQzdDLHdDQUF3QyxtQkFBTyxDQUFDLGlHQUEwQztBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpR0FBaUc7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7Ozs7Ozs7Ozs7O0FDeEdyQjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw2QkFBNkI7QUFDN0IsbUJBQW1CLG1CQUFPLENBQUMsNkNBQWdCO0FBQzNDLGdDQUFnQyxtQkFBTyxDQUFDLHVFQUE2QjtBQUNyRSxrQkFBa0IsbUJBQU8sQ0FBQyxtRUFBMkI7QUFDckQsa0JBQWtCLG1CQUFPLENBQUMsbUVBQTJCO0FBQ3JELHVCQUF1QixtQkFBTyxDQUFDLHFEQUFvQjtBQUNuRCx3Q0FBd0MsbUJBQU8sQ0FBQyxpR0FBMEM7QUFDMUYsZ0RBQWdELG1CQUFPLENBQUMsZ0hBQTBDO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsNkJBQTZCOzs7Ozs7Ozs7OztBQ3JDaEI7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsdUJBQXVCO0FBQ3ZCLG1CQUFtQixtQkFBTyxDQUFDLDZDQUFnQjtBQUMzQyxnQ0FBZ0MsbUJBQU8sQ0FBQyx1RUFBNkI7QUFDckUsbUJBQW1CLG1CQUFPLENBQUMscUVBQTRCO0FBQ3ZELG1CQUFtQixtQkFBTyxDQUFDLHFFQUE0QjtBQUN2RCxrQkFBa0IsbUJBQU8sQ0FBQyxtRUFBMkI7QUFDckQsdUJBQXVCLG1CQUFPLENBQUMscURBQW9CO0FBQ25ELHdDQUF3QyxtQkFBTyxDQUFDLGlHQUEwQztBQUMxRixnREFBZ0QsbUJBQU8sQ0FBQyxnSEFBMEM7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsdUJBQXVCOzs7Ozs7Ozs7OztBQzVGVjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx3QkFBd0I7QUFDeEIsbUJBQW1CLG1CQUFPLENBQUMsNkNBQWdCO0FBQzNDLG1CQUFtQixtQkFBTyxDQUFDLHFFQUE0QjtBQUN2RCxrQkFBa0IsbUJBQU8sQ0FBQyxtRUFBMkI7QUFDckQsdUJBQXVCLG1CQUFPLENBQUMscURBQW9CO0FBQ25ELHdDQUF3QyxtQkFBTyxDQUFDLGlHQUEwQztBQUMxRixnREFBZ0QsbUJBQU8sQ0FBQyxnSEFBMEM7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx3QkFBd0I7Ozs7Ozs7Ozs7O0FDM0JYO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQjtBQUNwQixtQkFBbUIsbUJBQU8sQ0FBQyw2Q0FBZ0I7QUFDM0MsZ0NBQWdDLG1CQUFPLENBQUMsdUVBQTZCO0FBQ3JFLGtCQUFrQixtQkFBTyxDQUFDLG1FQUEyQjtBQUNyRCxjQUFjLG1CQUFPLENBQUMsMkRBQXVCO0FBQzdDLHVCQUF1QixtQkFBTyxDQUFDLHFEQUFvQjtBQUNuRCx3Q0FBd0MsbUJBQU8sQ0FBQyxpR0FBMEM7QUFDMUYsZ0RBQWdELG1CQUFPLENBQUMsZ0hBQTBDO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esb0JBQW9COzs7Ozs7Ozs7OztBQ3JDUDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxzQkFBc0I7QUFDdEIsbUJBQW1CLG1CQUFPLENBQUMsNkNBQWdCO0FBQzNDLGdDQUFnQyxtQkFBTyxDQUFDLHVFQUE2QjtBQUNyRSxtQkFBbUIsbUJBQU8sQ0FBQyxxRUFBNEI7QUFDdkQsa0JBQWtCLG1CQUFPLENBQUMsbUVBQTJCO0FBQ3JELHVCQUF1QixtQkFBTyxDQUFDLHFEQUFvQjtBQUNuRCx3Q0FBd0MsbUJBQU8sQ0FBQyxpR0FBMEM7QUFDMUYsZ0RBQWdELG1CQUFPLENBQUMsZ0hBQTBDO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHNCQUFzQjs7Ozs7Ozs7Ozs7QUN4QlQ7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsMkJBQTJCO0FBQzNCLG1CQUFtQixtQkFBTyxDQUFDLDZDQUFnQjtBQUMzQyxtQkFBbUIsbUJBQU8sQ0FBQyxxRUFBNEI7QUFDdkQsa0JBQWtCLG1CQUFPLENBQUMsbUVBQTJCO0FBQ3JELHVCQUF1QixtQkFBTyxDQUFDLHFEQUFvQjtBQUNuRCx3Q0FBd0MsbUJBQU8sQ0FBQyxpR0FBMEM7QUFDMUYsZ0RBQWdELG1CQUFPLENBQUMsZ0hBQTBDO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwyQkFBMkI7Ozs7Ozs7Ozs7O0FDNUJkO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDhCQUE4QjtBQUM5QixtQkFBbUIsbUJBQU8sQ0FBQyw2Q0FBZ0I7QUFDM0MsZ0NBQWdDLG1CQUFPLENBQUMsdUVBQTZCO0FBQ3JFLGtCQUFrQixtQkFBTyxDQUFDLG1FQUEyQjtBQUNyRCxrQkFBa0IsbUJBQU8sQ0FBQyxtRUFBMkI7QUFDckQsdUJBQXVCLG1CQUFPLENBQUMscURBQW9CO0FBQ25ELHdDQUF3QyxtQkFBTyxDQUFDLGlHQUEwQztBQUMxRixnREFBZ0QsbUJBQU8sQ0FBQyxnSEFBMEM7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSw4QkFBOEI7Ozs7Ozs7Ozs7O0FDbENqQjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw4QkFBOEI7QUFDOUIsbUJBQW1CLG1CQUFPLENBQUMsNkNBQWdCO0FBQzNDLGdDQUFnQyxtQkFBTyxDQUFDLHVFQUE2QjtBQUNyRSxtQkFBbUIsbUJBQU8sQ0FBQyxxRUFBNEI7QUFDdkQsdUJBQXVCLG1CQUFPLENBQUMscURBQW9CO0FBQ25ELHdDQUF3QyxtQkFBTyxDQUFDLGlHQUEwQztBQUMxRixnREFBZ0QsbUJBQU8sQ0FBQyxnSEFBMEM7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSw4QkFBOEI7Ozs7Ozs7Ozs7O0FDeEJqQjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxpQkFBaUI7QUFDakIsbUJBQW1CLG1CQUFPLENBQUMsNkNBQWdCO0FBQzNDLGdDQUFnQyxtQkFBTyxDQUFDLHVFQUE2QjtBQUNyRSxjQUFjLG1CQUFPLENBQUMsMkRBQXVCO0FBQzdDLHVCQUF1QixtQkFBTyxDQUFDLHFEQUFvQjtBQUNuRCx3Q0FBd0MsbUJBQU8sQ0FBQyxpR0FBMEM7QUFDMUYsZ0RBQWdELG1CQUFPLENBQUMsZ0hBQTBDO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxpQkFBaUI7Ozs7Ozs7Ozs7O0FDekJKO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQjtBQUNqQixtQkFBbUIsbUJBQU8sQ0FBQyw2Q0FBZ0I7QUFDM0MsZ0NBQWdDLG1CQUFPLENBQUMsdUVBQTZCO0FBQ3JFLHFCQUFxQixtQkFBTyxDQUFDLHlFQUE4QjtBQUMzRCxtQkFBbUIsbUJBQU8sQ0FBQyxxRUFBNEI7QUFDdkQsdUJBQXVCLG1CQUFPLENBQUMscURBQW9CO0FBQ25ELHdDQUF3QyxtQkFBTyxDQUFDLGlHQUEwQztBQUMxRixnREFBZ0QsbUJBQU8sQ0FBQyxnSEFBMEM7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxpQkFBaUI7Ozs7Ozs7Ozs7O0FDM0NKO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFtQjtBQUNuQixtQkFBbUIsbUJBQU8sQ0FBQyw2Q0FBZ0I7QUFDM0MsZ0NBQWdDLG1CQUFPLENBQUMsdUVBQTZCO0FBQ3JFLHFCQUFxQixtQkFBTyxDQUFDLHlFQUE4QjtBQUMzRCxrQkFBa0IsbUJBQU8sQ0FBQyxtRUFBMkI7QUFDckQsdUJBQXVCLG1CQUFPLENBQUMscURBQW9CO0FBQ25ELHdDQUF3QyxtQkFBTyxDQUFDLGlHQUEwQztBQUMxRixnREFBZ0QsbUJBQU8sQ0FBQyxnSEFBMEM7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQkFBb0IsT0FBTztBQUNuRDtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLG1CQUFtQjs7Ozs7Ozs7Ozs7QUNoRE47QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0NBQW9DO0FBQ3BDLG1CQUFtQixtQkFBTyxDQUFDLDZDQUFnQjtBQUMzQyxnQ0FBZ0MsbUJBQU8sQ0FBQyx1RUFBNkI7QUFDckUscUJBQXFCLG1CQUFPLENBQUMseUVBQThCO0FBQzNELGtCQUFrQixtQkFBTyxDQUFDLG1FQUEyQjtBQUNyRCx1QkFBdUIsbUJBQU8sQ0FBQyxxREFBb0I7QUFDbkQsd0NBQXdDLG1CQUFPLENBQUMsaUdBQTBDO0FBQzFGLGdEQUFnRCxtQkFBTyxDQUFDLGdIQUEwQztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7Ozs7Ozs7Ozs7O0FDOUJ2QjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxvQkFBb0I7QUFDcEIsbUJBQW1CLG1CQUFPLENBQUMsNkNBQWdCO0FBQzNDLGdDQUFnQyxtQkFBTyxDQUFDLHVFQUE2QjtBQUNyRSxxQkFBcUIsbUJBQU8sQ0FBQyx5RUFBOEI7QUFDM0QsbUJBQW1CLG1CQUFPLENBQUMscUVBQTRCO0FBQ3ZELG1CQUFtQixtQkFBTyxDQUFDLHFFQUE0QjtBQUN2RCx1QkFBdUIsbUJBQU8sQ0FBQyxxREFBb0I7QUFDbkQsd0NBQXdDLG1CQUFPLENBQUMsaUdBQTBDO0FBQzFGLGdEQUFnRCxtQkFBTyxDQUFDLGdIQUEwQztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esb0JBQW9COzs7Ozs7Ozs7OztBQzNCUDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQ0FBbUM7QUFDbkMsbUJBQW1CLG1CQUFPLENBQUMsNkNBQWdCO0FBQzNDLGdDQUFnQyxtQkFBTyxDQUFDLHVFQUE2QjtBQUNyRSxrQkFBa0IsbUJBQU8sQ0FBQyxtRUFBMkI7QUFDckQsa0JBQWtCLG1CQUFPLENBQUMsbUVBQTJCO0FBQ3JELGNBQWMsbUJBQU8sQ0FBQywyREFBdUI7QUFDN0MsdUJBQXVCLG1CQUFPLENBQUMscURBQW9CO0FBQ25ELHdDQUF3QyxtQkFBTyxDQUFDLGlHQUEwQztBQUMxRixnREFBZ0QsbUJBQU8sQ0FBQyxnSEFBMEM7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyw4Q0FBOEM7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7Ozs7Ozs7Ozs7O0FDckV0QjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxxQkFBcUI7QUFDckIsZ0RBQWdELG1CQUFPLENBQUMsZ0hBQTBDO0FBQ2xHO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7Ozs7Ozs7Ozs7QUNaUjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxzQkFBc0IsR0FBRyxrQkFBa0I7QUFDM0MscUJBQXFCLG1CQUFPLENBQUMseURBQWM7QUFDM0Msa0JBQWtCLG1CQUFPLENBQUMsbURBQVc7QUFDckMsa0JBQWtCLG1CQUFPLENBQUMsbURBQVc7QUFDckMsY0FBYyxtQkFBTyxDQUFDLDJDQUFPO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLHNCQUFzQjs7Ozs7Ozs7Ozs7QUNsRVQ7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CLEdBQUcsZ0JBQWdCO0FBQ3ZDLHdCQUF3QixtQkFBTyxDQUFDLDhEQUF1QjtBQUN2RCxxQkFBcUIsbUJBQU8sQ0FBQyx5REFBYztBQUMzQyxrQkFBa0IsbUJBQU8sQ0FBQyxtREFBVztBQUNyQyxjQUFjLG1CQUFPLENBQUMsMkNBQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixvQkFBb0I7Ozs7Ozs7Ozs7O0FDbkRQO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFrQjtBQUNsQixrQkFBa0IsbUJBQU8sQ0FBQyxtREFBVztBQUNyQyxzQkFBc0IsbUJBQU8sQ0FBQywyREFBZTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjs7Ozs7Ozs7Ozs7QUNsQkw7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CLEdBQUcsZ0JBQWdCO0FBQ3ZDLHFCQUFxQixtQkFBTyxDQUFDLHlEQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsb0JBQW9COzs7Ozs7Ozs7OztBQ2hEUDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBbUIsR0FBRyxlQUFlO0FBQ3JDLGlCQUFpQixtQkFBTyxDQUFDLGdEQUFnQjtBQUN6QyxxQkFBcUIsbUJBQU8sQ0FBQyx5REFBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsbUJBQW1COzs7Ozs7Ozs7OztBQzdDTjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxvQkFBb0IsR0FBRyxnQkFBZ0I7QUFDdkMsd0JBQXdCLG1CQUFPLENBQUMsOERBQXVCO0FBQ3ZELHFCQUFxQixtQkFBTyxDQUFDLHlEQUFjO0FBQzNDLGtCQUFrQixtQkFBTyxDQUFDLG1EQUFXO0FBQ3JDLGNBQWMsbUJBQU8sQ0FBQywyQ0FBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLG9CQUFvQjs7Ozs7Ozs7Ozs7QUNwRFA7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7Ozs7Ozs7Ozs7O0FDUk47QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQW1CLEdBQUcsbUJBQW1CLEdBQUcsZUFBZTtBQUMzRCxpQkFBaUIsbUJBQU8sQ0FBQyxnREFBZ0I7QUFDekMscUJBQXFCLG1CQUFPLENBQUMseURBQWM7QUFDM0Msa0JBQWtCLG1CQUFPLENBQUMsbURBQVc7QUFDckMsY0FBYyxtQkFBTyxDQUFDLDJDQUFPO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5QkFBeUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7Ozs7Ozs7Ozs7O0FDM0thO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFrQixHQUFHLGVBQWUsR0FBRyxXQUFXO0FBQ2xELGlCQUFpQixtQkFBTyxDQUFDLGdEQUFnQjtBQUN6QyxxQkFBcUIsbUJBQU8sQ0FBQyx5REFBYztBQUMzQyxrQkFBa0IsbUJBQU8sQ0FBQyxtREFBVztBQUNyQyxrQkFBa0IsbUJBQU8sQ0FBQyxtREFBVztBQUNyQyxtQkFBbUIsbUJBQU8sQ0FBQyxxREFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFrQjs7Ozs7Ozs7Ozs7QUN4Skw7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CLEdBQUcsZ0JBQWdCO0FBQ3ZDLHFCQUFxQixtQkFBTyxDQUFDLHlEQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLG9CQUFvQjs7Ozs7Ozs7Ozs7QUNqQ1A7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsd0JBQXdCO0FBQ3hCLHdCQUF3QixtQkFBTyxDQUFDLDhEQUFpQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QiwrREFBK0QsZ0JBQWdCOzs7Ozs7Ozs7OztBQ2xCbEU7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0JBQWdCO0FBQ2hCLG1CQUFtQixtQkFBTyxDQUFDLDBDQUFhO0FBQ3hDLHdCQUF3QixtQkFBTyxDQUFDLDhEQUFpQjtBQUNqRCxnQkFBZ0IsbUJBQU8sQ0FBQyxvQ0FBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsK0NBQStDLGNBQWM7Ozs7Ozs7Ozs7O0FDdEVoRDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QiwrREFBK0QsZ0JBQWdCOzs7Ozs7Ozs7OztBQ25DbEU7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsd0JBQXdCO0FBQ3hCLHFCQUFxQixtQkFBTyxDQUFDLHNFQUEyQjtBQUN4RCx3QkFBd0IsbUJBQU8sQ0FBQyw4REFBdUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QiwrREFBK0QsZ0JBQWdCOzs7Ozs7Ozs7OztBQzlDbEU7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsMEJBQTBCO0FBQzFCLDJCQUEyQixtQkFBTyxDQUFDLG9FQUFvQjtBQUN2RCx3QkFBd0IsbUJBQU8sQ0FBQyw4REFBaUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixtRUFBbUUsZ0JBQWdCO0FBQ25GOzs7Ozs7Ozs7OztBQzFCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOzs7Ozs7Ozs7OztBQ3hCUjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7Ozs7Ozs7Ozs7O0FDNUJSO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQjtBQUNwQixtQkFBbUIsbUJBQU8sQ0FBQywwQ0FBYTtBQUN4QyxxQkFBcUIsbUJBQU8sQ0FBQyxzRUFBMkI7QUFDeEQsMkJBQTJCLG1CQUFPLENBQUMsMERBQXFCO0FBQ3hELGlCQUFpQixtQkFBTyxDQUFDLGdEQUFnQjtBQUN6QyxpQ0FBaUMsbUJBQU8sQ0FBQyxpRUFBOEI7QUFDdkUsbUJBQW1CLG1CQUFPLENBQUMsb0RBQVk7QUFDdkMsNkJBQTZCLG1CQUFPLENBQUMsd0VBQXNCO0FBQzNELDJCQUEyQixtQkFBTyxDQUFDLG9FQUFvQjtBQUN2RCwyQkFBMkIsbUJBQU8sQ0FBQyxvRUFBb0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7Ozs7Ozs7Ozs7QUNwQ047QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsV0FBVyxHQUFHLGNBQWMsR0FBRyxhQUFhO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7Ozs7Ozs7Ozs7O0FDbENFO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOzs7Ozs7O1VDWmQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw0QkFBNEIsbUJBQU8sQ0FBQyxtREFBcUI7QUFDekQsbUNBQW1DLG1CQUFPLENBQUMsaUVBQTRCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVncmF0b3IvLi9FeHByZXNzaW9uVGVzdFBhZ2VMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL1ByaW1hcnlQYWdlTG9hZGVyLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9Ub3VjaEdlc3R1cmVSZWNvZ25pemVyLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL0FyZ3VtZW50LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL0NvbnZlbmllbnRFeHByZXNzaW9ucy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9HcmFwaC50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9HcmFwaE1pbmlwdWxhdG9yLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL1JlbGF0aW9uc2hpcC50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9EZXJpdmVyLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvUmVsYXRpb25hbERlcml2YXRpb25SdWxlLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL2FsZ2VicmEvRGl2aWRlT25Cb3RoU2lkZXMudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvYWxnZWJyYS9TdWJ0cmFjdEZyb21Cb3RoU2lkZXMudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvcmVjdXJzaW9uLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9BZGRpdGl2ZUlkZW50aXR5LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9Bc3NvY2lhdGl2ZVByb3BlcnR5T2ZQcm9kdWN0c0FuZFN1bXMudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL0NhbmNlbE5lZ2F0aXZlcy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvQ29tYmluZUNvbW1vbkZhY3RvcnNNdWx0aXBsaWNhdGlvbi50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvQ29tYmluZUNvbW1vblRlcm1zQWRkaXRpb24udHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL0NvbWJpbmVJbnRlZ2VyRmFjdG9ycy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvRGl2aWRlRnJhY3Rpb25zLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9EaXZpc2lvbklkZW50aXR5LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9FdmFsdWF0ZVN1bXMudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL0V4cG9uZW50VG9aZXJvLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9FeHBvbmVudGlhbElkZW50aXR5LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9NdWx0aXBsaWNhdGl2ZUlkZW50aXR5LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9NdWx0aXBseUV4cG9uZW50UG93ZXJzLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9PcmRlclN1bXMudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL1Bvd2VyUnVsZS50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvUHJvZHVjdFJ1bGUudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL1B1bGxDb25zdGFudHNGcm9tRGVyaXZhdGl2ZXMudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL1F1b3RpZW50UnVsZS50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvU3VtQ29lZmZpY2llbnRzT2ZBZGRlZFRlcm1zLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9VU3Vic3RpdHV0aW9uLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2V4cHJlc3Npb25zL0Rlcml2YXRpdmUudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvRXhwb25lbnQudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvRXhwcmVzc2lvbi50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9leHByZXNzaW9ucy9GcmFjdGlvbi50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9leHByZXNzaW9ucy9JbnRlZ2VyLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2V4cHJlc3Npb25zL0ludGVncmFsLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2V4cHJlc3Npb25zL01hdGhFbGVtZW50LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2V4cHJlc3Npb25zL1Byb2R1Y3QudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvU3VtLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2V4cHJlc3Npb25zL1ZhcmlhYmxlLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3VpZWxlbWVudHMvQXJndW1lbnROb2RlVmlldy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi91aWVsZW1lbnRzL0VkZ2VWaWV3LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3VpZWxlbWVudHMvRWRpdGFibGVNYXRoVmlldy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi91aWVsZW1lbnRzL0V4cGxhbmF0aW9uUG9wdXAudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdWllbGVtZW50cy9FeHByZXNzaW9uTm9kZVZpZXcudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdWllbGVtZW50cy9HcmFwaE5vZGVWaWV3LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3VpZWxlbWVudHMvVUlQcmVmZXJlbmNlcy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi91aWVsZW1lbnRzL1dlYkdyYXBoVmlldy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi91c2VyaW5wdXQvUGFyc2VyLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3V0aWwvTWF0aE1MSGVscGVycy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3V0aWwvYXNzZXJ0LnRzIiwid2VicGFjazovL2ludGVncmF0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmxvYWRFeHByZXNzaW9uc1Rlc3RQYWdlID0gdm9pZCAwO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IERlcml2YXRpdmVfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZXhwcmVzc2lvbnMvRGVyaXZhdGl2ZVwiKTtcbmNvbnN0IEV4cG9uZW50XzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2V4cHJlc3Npb25zL0V4cG9uZW50XCIpO1xuY29uc3QgRnJhY3Rpb25fMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZXhwcmVzc2lvbnMvRnJhY3Rpb25cIik7XG5jb25zdCBJbnRlZ3JhbF8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9leHByZXNzaW9ucy9JbnRlZ3JhbFwiKTtcbmNvbnN0IEVkaXRhYmxlTWF0aFZpZXdfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvdWllbGVtZW50cy9FZGl0YWJsZU1hdGhWaWV3XCIpO1xuLyoqXG4gKiBDYWxsZWQgYWZ0ZXIgdGhlIGRvbSBpcyBsb2FkZWQuXG4gKiBQb3B1bGF0ZXMgdGhlIGJvZHkgZWxlbWVudCBvZiB0aGUgZG9jdW1lbnRcbiAqIHdpdGggdGhlIHRlc3QgZXhwcmVzc2lvbnMgcGFnZVxuICovXG5mdW5jdGlvbiBsb2FkRXhwcmVzc2lvbnNUZXN0UGFnZSgpIHtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbiAgICBmdW5jdGlvbiBwKGNvbnRlbnQpIHtcbiAgICAgICAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZS5pbm5lclRleHQgPSBjb250ZW50O1xuICAgICAgICBwYWdlLmFwcGVuZChlKTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHZpZXcoZXhwKSB7XG4gICAgICAgIGNvbnN0IGUgPSBuZXcgRWRpdGFibGVNYXRoVmlld18xLkVkaXRhYmxlTWF0aFZpZXcoKTtcbiAgICAgICAgZS52YWx1ZSA9IGV4cDtcbiAgICAgICAgcGFnZS5hcHBlbmQoZSk7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBwKFwiVGhlIHN1bSBvZiBhLCBhLCBhbmQgYVwiKTtcbiAgICB2aWV3KCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpKTtcbiAgICBwKFwiSW50ZWdyYWwgb2YgYSBvdmVyIGIgd2l0aCByZXNwZWN0IHRvIGNcIik7XG4gICAgdmlldyhJbnRlZ3JhbF8xLkludGVncmFsLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYiksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmMpKTtcbiAgICBwKFwiSW50ZWdyYWwgb2YgKGEgb3ZlciBhKSBvdmVyIGIgd2l0aCByZXNwZWN0IHRvIGNcIik7XG4gICAgdmlldyhJbnRlZ3JhbF8xLkludGVncmFsLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYiksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmMpKTtcbiAgICBwKFwiSW50ZWdyYWwgb2YgKChhIG92ZXIgYSkgb3ZlciBhKSBvdmVyIGIgd2l0aCByZXNwZWN0IHRvIGNcIik7XG4gICAgdmlldyhJbnRlZ3JhbF8xLkludGVncmFsLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYiksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmMpKTtcbiAgICBwKFwiSW50ZWdyYWwgb2YgKCgoYSBvdmVyIGEpIG92ZXIgYSkgb3ZlciBhKSBvdmVyIGIgd2l0aCByZXNwZWN0IHRvIGNcIik7XG4gICAgdmlldyhJbnRlZ3JhbF8xLkludGVncmFsLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYiksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmMpKTtcbiAgICBwKFwiSW50ZWdyYWwgb2YgKCgoKGEgb3ZlciBhKSBvdmVyIGEpIG92ZXIgYSkgb3ZlciBhKSBvdmVyIGIgd2l0aCByZXNwZWN0IHRvIGNcIik7XG4gICAgdmlldyhJbnRlZ3JhbF8xLkludGVncmFsLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYiksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmMpKTtcbiAgICBwKFwiXCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmludCkoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZigoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtKSgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubmVnYXRpdmUpKENvbnZlbmllbnRFeHByZXNzaW9uc18xLmIpLCBFeHBvbmVudF8xLkV4cG9uZW50Lm9mKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKENvbnZlbmllbnRFeHByZXNzaW9uc18xLngsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDEpLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgyKSkpKSwgKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3QpKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDIpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hKSksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLngpKTtcbiAgICBwKFwiUHJvZHVjdCBvZiB4IGFuZCB5XCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3QpKENvbnZlbmllbnRFeHByZXNzaW9uc18xLngsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnkpKTtcbiAgICBwKFwiUHJvZHVjdCBvZiAoeC0xKSwgLTEgYW5kIHlcIik7XG4gICAgdmlldygoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdCkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bSkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCwgKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm5lZ2F0aXZlKSgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgxKSkpLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgtMSksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnkpKTtcbiAgICBwKFwiTmVnYXRpb24gb2YgeCAoUmVwZWQgYXMgdGhlIHByb3BkdWN0IG9mIC0xIGFuZCB4KVwiKTtcbiAgICB2aWV3KCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5uZWdhdGl2ZSkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCkpO1xuICAgIHAoXCJTdW0gb2YgeCBhbmQgLXhcIik7XG4gICAgdmlldygoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtKShDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54LCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubmVnYXRpdmUpKENvbnZlbmllbnRFeHByZXNzaW9uc18xLngpKSk7XG4gICAgcChcIlN1bSBvZiAteCBhbmQgeFwiKTtcbiAgICB2aWV3KCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5uZWdhdGl2ZSkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLngpKTtcbiAgICBwKFwiRGVyaXZhdGl2ZSBvZiB0aGUgc3F1YXJlIG9mIHggd2l0aCByZXNwZWN0IHRvIHhcIik7XG4gICAgdmlldyhEZXJpdmF0aXZlXzEuRGVyaXZhdGl2ZS5vZihFeHBvbmVudF8xLkV4cG9uZW50Lm9mKENvbnZlbmllbnRFeHByZXNzaW9uc18xLngsICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDIpKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCkpO1xuICAgIHAoXCJEZXJpdmF0aXZlICgoeF4yKSAtIDIpIHdpdGggcmVzcGVjdCB0byB4XCIpO1xuICAgIHZpZXcoRGVyaXZhdGl2ZV8xLkRlcml2YXRpdmUub2YoRXhwb25lbnRfMS5FeHBvbmVudC5vZigoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtKShDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54LCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgtMikpLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgyKSksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLngpKTtcbiAgICBwKFwiXCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSkpO1xuICAgIHAoXCJcIik7XG4gICAgdmlldygoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgxKSk7XG4gICAgcChcIlwiKTtcbiAgICB2aWV3KCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDEpKTtcbiAgICBwKFwiXCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSkpO1xufVxuZXhwb3J0cy5sb2FkRXhwcmVzc2lvbnNUZXN0UGFnZSA9IGxvYWRFeHByZXNzaW9uc1Rlc3RQYWdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmxvYWRQcmltYXJ5UGFnZSA9IHZvaWQgMDtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9Db252ZW5pZW50RXhwcmVzc2lvbnNcIik7XG5jb25zdCBQYXJzZXJfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvdXNlcmlucHV0L1BhcnNlclwiKTtcbmNvbnN0IFdlYkdyYXBoVmlld18xID0gcmVxdWlyZShcIi4vbWF0aGxpYi91aWVsZW1lbnRzL1dlYkdyYXBoVmlld1wiKTtcbmNvbnN0IEdyYXBoXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL0dyYXBoXCIpO1xuY29uc3QgRGVyaXZlcl8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9kZXJpdmF0aW9ucy9EZXJpdmVyXCIpO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9leHByZXNzaW9ucy9FeHByZXNzaW9uXCIpO1xuY29uc3QgUmVsYXRpb25hbERlcml2YXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL1JlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZVwiKTtcbmNvbnN0IFN1YnRyYWN0RnJvbUJvdGhTaWRlc18xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9kZXJpdmF0aW9ucy9hbGdlYnJhL1N1YnRyYWN0RnJvbUJvdGhTaWRlc1wiKTtcbmNvbnN0IERpdmlkZU9uQm90aFNpZGVzXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL2FsZ2VicmEvRGl2aWRlT25Cb3RoU2lkZXNcIik7XG5jb25zdCBWYXJpYWJsZV8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9leHByZXNzaW9ucy9WYXJpYWJsZVwiKTtcbmNvbnN0IEV4cG9uZW50XzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2V4cHJlc3Npb25zL0V4cG9uZW50XCIpO1xuY29uc3QgRnJhY3Rpb25fMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZXhwcmVzc2lvbnMvRnJhY3Rpb25cIik7XG5SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGVfMS5SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGUucnVsZXMuYWRkKG5ldyBTdWJ0cmFjdEZyb21Cb3RoU2lkZXNfMS5TdWJ0cmFjdEZyb21Cb3RoU2lkZXMoKSk7XG5SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGVfMS5SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGUucnVsZXMuYWRkKG5ldyBEaXZpZGVPbkJvdGhTaWRlc18xLkRpdmlkZU9uQm90aFNpZGVzKCkpO1xuLyoqXG4gKiBDYWxsZWQgYWZ0ZXIgRE9NIGlzIGxvYWRlZC5cbiAqIFN1YnN0aXR1dGVzIHRoZSBib2R5IGVsZW1lbnQgaW4gdGhlIGRvY3VtZW50XG4gKiB3aXRoIHRoZSBwcmltYXJ5IGludGVncmF0b3Igdmlldy5cbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIGxvYWRQcmltYXJ5UGFnZSgpIHtcbiAgICAvL2NvbnN0IHJvb3QgPSBEZXJpdmF0aXZlLm9mKHN1bShhLCBhLCBwcm9kdWN0KG51bSgyKSwgYikpLCBhKVxuICAgIC8vY29uc3Qgcm9vdCA9IERlcml2YXRpdmUub2YocHJvZHVjdChudW0oMyksIEV4cG9uZW50Lm9mKHgsIG51bSgyKSksIEV4cG9uZW50Lm9mKHgsIG51bSgzKSkpLCB4KVxuICAgIC8vY29uc3Qgcm9vdCA9IHByb2R1Y3QoRXhwb25lbnQub2YoeCwgbnVtKDMpKSwgRXhwb25lbnQub2YoeCwgbnVtKDQpKSwgeCwgeClcbiAgICAvL2NvbnN0IHJvb3QgPSBEZXJpdmF0aXZlLm9mKEZyYWN0aW9uLm9mKEV4cG9uZW50Lm9mKHgsIG51bSgyKSksIHgpLCB4KVxuICAgIGNvbnN0IHJvb3QgPSBGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5wcm9kdWN0KSgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgyKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCwgRXhwb25lbnRfMS5FeHBvbmVudC5vZihDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54LCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSksICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5wcm9kdWN0KSgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgyKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCkpO1xuICAgIGNvbnN0IGdyYXBoID0gbmV3IEdyYXBoXzEuR3JhcGgoKS5hZGROb2RlKHJvb3QpO1xuICAgIGNvbnN0IGRlcml2ZXIgPSBuZXcgRGVyaXZlcl8xLkRlcml2ZXIoZ3JhcGgpO1xuICAgIGRlcml2ZXIuZXhwYW5kKCk7XG4gICAgLy9jb25zb2xlLmxvZyhcIlJlc3VsdDogXCIgKyBncmFwaClcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRcIik7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+IHtcbiAgICAgICAgKDAsIFBhcnNlcl8xLnBhcnNlKShpbnB1dC52YWx1ZSk7XG4gICAgfSk7XG4gICAgY29uc3Qgb3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXRib3hcIik7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICBzaG93QXJndW1lbnRzOiBmYWxzZSxcbiAgICAgICAgZHJhd0VkZ2VMaW5lczogdHJ1ZSxcbiAgICAgICAgZGVidWdDb3JuZXJFbmFibGVkOiB0cnVlLFxuICAgIH07XG4gICAgY29uc3QgZ3JhcGhWaWV3ID0gbmV3IFdlYkdyYXBoVmlld18xLldlYkdyYXBoVmlldyhncmFwaCwgbmV3IFNldChbcm9vdF0pLCBjb25maWcpO1xuICAgIGdyYXBoVmlldy5zZXROb2RlQ29sb3JpbmdTY2hlbWUobiA9PiB7XG4gICAgICAgIGlmIChuIGluc3RhbmNlb2YgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24pIHtcbiAgICAgICAgICAgIGlmICghZGVyaXZlci5pc1NpbXBsaWZpZWQobikpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibGlnaHRncmF5XCI7XG4gICAgICAgICAgICBlbHNlIGlmICghbi5pc0hlYWx0aHkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibGlnaHRyZWRcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKG4gaW5zdGFuY2VvZiBWYXJpYWJsZV8xLlZhcmlhYmxlKVxuICAgICAgICAgICAgICAgIHJldHVybiBcIm9yYW5nZVwiO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBcImxpZ2h0Ymx1ZVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcImJsYWNrXCI7XG4gICAgfSk7XG4gICAgZ3JhcGhWaWV3LnNldEF0dHJpYnV0ZShcImlkXCIsIFwid2ViLWdyYXBodmlld1wiKTtcbiAgICBvdXQuYXBwZW5kQ2hpbGQoZ3JhcGhWaWV3KTtcbn1cbmV4cG9ydHMubG9hZFByaW1hcnlQYWdlID0gbG9hZFByaW1hcnlQYWdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRvdWNoR2VzdHVyZVJlY29nbml6ZXIgPSB2b2lkIDA7XG4vKipcbiAqIEludGVycHJldCBjb21wbGljYXRlZCB0b3VjaCBnZXN0dXJlIGRhdGEuXG4gKi9cbmNsYXNzIFRvdWNoR2VzdHVyZVJlY29nbml6ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1vdmVMaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy5waW5jaExpc3RlbmVycyA9IFtdO1xuICAgIH1cbiAgICBhZGRNb3ZlTGlzdGVuZXIoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5tb3ZlTGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIGEgcGluY2ggZ2VzdHVyZSBoYXMgYmVlbiBkZXRlY3RlZC5cbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgVGFrZXMgYSBjZW50ZXIgY29vcmRpbmF0ZSB0aGF0J3MgdGhlIGF2ZXJhZ2Ugb2YgdGhlIGZpbmdlciBwb3NpdGlvbnMsXG4gICAgICogICAgICAgICAgICAgIHRoZSBjaGFuZ2UgaW4gc2NhbGUgc2luY2UgdGhlIGxhc3QgY2FsbCBvbiAoMCwgaW5maW5pdHkpIHdoZXJlIDEgaXMgbm8gY2hhbmdlLFxuICAgICAqICAgICAgICAgICAgICBhbmQgdGhlIG51bWJlciBvZiBmaW5nZXJzIGluIHRoZSBnZXN0dXJlIChhbiBpbnRlZ2VyKS5cbiAgICAgKi9cbiAgICBhZGRQaW5jaExpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMucGluY2hMaXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNob3VsZCB0YWtlIGFsbCB0b3VjaCBldmVudHMgZnJvbSB0aGUgdmlldyB1c2luZyBpdC5cbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBwcm9jZXNzVG91Y2hEb3duKGV2ZW50KSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNob3VsZCB0YWtlIGFsbCB0b3VjaCBldmVudHMgZnJvbSB0aGUgdmlldyB1c2luZyBpdC5cbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBwcm9jZXNzVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGZvciAoY29uc3QgY2hhbmdlZCBvZiBldmVudC5jaGFuZ2VkVG91Y2hlcykge1xuICAgICAgICAgICAgY2hhbmdlZC5jbGllbnRYO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNob3VsZCB0YWtlIGFsbCB0b3VjaCBldmVudHMgZnJvbSB0aGUgdmlldyB1c2luZyBpdC5cbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBwcm9jZXNzVG91Y2hFbmQoZXZlbnQpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2hvdWxkIHRha2UgYWxsIHRvdWNoIGV2ZW50cyBmcm9tIHRoZSB2aWV3IHVzaW5nIGl0LlxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHByb2Nlc3NUb3VjaENhbmNlbChldmVudCkge1xuICAgIH1cbiAgICAvL3ByaXZhdGUgbGFzdFg6IE1hcDxUb3VjaFxuICAgIG1vdmVMaXN0ZW5lcnM7XG4gICAgcGluY2hMaXN0ZW5lcnM7XG59XG5leHBvcnRzLlRvdWNoR2VzdHVyZVJlY29nbml6ZXIgPSBUb3VjaEdlc3R1cmVSZWNvZ25pemVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFyZ3VtZW50ID0gdm9pZCAwO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi91dGlsL2Fzc2VydFwiKTtcbi8qKlxuICogQ29ubmVjdHMgb25lIG9yIG1vcmUgbm9kZXMgKGdyb3VuZHMpIHRvIG9uZSBvciBtb3JlIG5vZGVzIChjbGFpbXMpLlxuICogQ29udGFpbnMgYW4gZXhwbGFuYXRpb24vYXJndW1lbnQgZm9yIHRoZSBjb25uZWN0aW9uLlxuICovXG5jbGFzcyBBcmd1bWVudCB7XG4gICAgY29uc3RydWN0b3IoZ3JvdW5kcywgY2xhaW0sIGFyZ3VtZW50KSB7XG4gICAgICAgIHRoaXMuZ3JvdW5kcyA9IGdyb3VuZHM7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5ncm91bmRzKTtcbiAgICAgICAgdGhpcy5jbGFpbSA9IGNsYWltO1xuICAgICAgICB0aGlzLmFyZ3VtZW50ID0gYXJndW1lbnQ7XG4gICAgICAgIHRoaXMucmVwT2soKTtcbiAgICB9XG4gICAgZXhwcmVzc2lvbkVkZ2UgPSB0cnVlO1xuICAgIGdldCByZWxhdGlvbnNoaXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsYWltLnI7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCJBcmd1bWVudCBcIiArIHRoaXMuY2xhaW0ucjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHdvIG91dCBtYXRoIGdyYXBoIG5vZGVzIHRoYXQgYXJlIHJlbGF0ZWQgYnkgdGhpcyBBcnVnbWVudC5cbiAgICAgKi9cbiAgICBjbGFpbTtcbiAgICAvKipcbiAgICAgKiBUaGUgZXhwbGFuYXRpb24gdGhhdCBjb25uZWN0cyB0aGUgYXJndW1lbnQncyBncm91bmRzIHRvXG4gICAgICogaXQncyBjbGFpbWVkIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIHRoZSB0d28gb3V0IG5vZGVzLlxuICAgICAqXG4gICAgICovXG4gICAgYXJndW1lbnQ7XG4gICAgLyoqXG4gICAgICogTm9kZXMgdGhhdCBoYXZlIGFuIGVkZ2UgcG9pbnRpbmcgdG8gdGhpcyBhcmd1bWVudC5cbiAgICAgKi9cbiAgICBncm91bmRzO1xuICAgIHJlcE9rKCkge1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLmdyb3VuZHMgIT0gbnVsbCk7XG4gICAgICAgIGZvciAoY29uc3QgZ3JvdW5kIG9mIHRoaXMuZ3JvdW5kcykge1xuICAgICAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkoZ3JvdW5kICE9IG51bGwgJiYgZ3JvdW5kICE9IHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5jbGFpbS5uICE9IG51bGwgJiYgdGhpcy5jbGFpbS5uICE9IHVuZGVmaW5lZCk7XG4gICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMuY2xhaW0ubjEgIT0gbnVsbCAmJiB0aGlzLmNsYWltLm4xICE9IHVuZGVmaW5lZCk7XG4gICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMuY2xhaW0uciAhPSB1bmRlZmluZWQgJiYgdGhpcy5jbGFpbS5yICE9IG51bGwpO1xuICAgIH1cbn1cbmV4cG9ydHMuQXJndW1lbnQgPSBBcmd1bWVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy55ID0gZXhwb3J0cy54ID0gZXhwb3J0cy5mID0gZXhwb3J0cy5lID0gZXhwb3J0cy5kID0gZXhwb3J0cy5jID0gZXhwb3J0cy5iID0gZXhwb3J0cy5hID0gZXhwb3J0cy5wcm9kdWN0QW5kTm90VGltZXNPbmUgPSBleHBvcnRzLnByb2R1Y3RPck5vdCA9IGV4cG9ydHMuZXF1aXZhbGVuY2VBcmd1bWVudCA9IGV4cG9ydHMuaW50ID0gZXhwb3J0cy52ID0gZXhwb3J0cy5udW0gPSBleHBvcnRzLm5lZ2F0aXZlID0gZXhwb3J0cy5wcm9kdWN0ID0gZXhwb3J0cy5yZW1vdmVOZXcgPSBleHBvcnRzLnJlbW92ZSA9IGV4cG9ydHMub3JkZXJlZFByb2R1Y3QgPSBleHBvcnRzLnN1bU9yTm90ID0gZXhwb3J0cy5zdW1JbnR1aXRpdmUgPSBleHBvcnRzLnN1bUV2YWxJbnRlZ2VyVGVybXMgPSBleHBvcnRzLm9yZGVyZWRTdW0gPSBleHBvcnRzLnN1bSA9IGV4cG9ydHMuZnJhY3Rpb24gPSB2b2lkIDA7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi9leHByZXNzaW9ucy9JbnRlZ2VyXCIpO1xuY29uc3QgRnJhY3Rpb25fMSA9IHJlcXVpcmUoXCIuL2V4cHJlc3Npb25zL0ZyYWN0aW9uXCIpO1xuY29uc3QgSW50ZWdyYWxfMSA9IHJlcXVpcmUoXCIuL2V4cHJlc3Npb25zL0ludGVncmFsXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4vZXhwcmVzc2lvbnMvUHJvZHVjdFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4vZXhwcmVzc2lvbnMvU3VtXCIpO1xuY29uc3QgVmFyaWFibGVfMSA9IHJlcXVpcmUoXCIuL2V4cHJlc3Npb25zL1ZhcmlhYmxlXCIpO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuL0FyZ3VtZW50XCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0XCIpO1xuZnVuY3Rpb24gZnJhY3Rpb24obnVtLCBkZW4pIHtcbiAgICByZXR1cm4gRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihudW0sIGRlbik7XG59XG5leHBvcnRzLmZyYWN0aW9uID0gZnJhY3Rpb247XG4vKipcbiAqIEEgY29udmVuaWVuY2UgbWV0aG9kIGZvciBTdW0ub2YoKVxuICovXG5mdW5jdGlvbiBzdW0oLi4udGVybXMpIHtcbiAgICByZXR1cm4gU3VtXzEuU3VtLm9mKHRlcm1zKTtcbn1cbmV4cG9ydHMuc3VtID0gc3VtO1xuLyoqXG4gKiBHZXRzIHRoZSBjb3JyZWN0bHkgb3JkZXJlZCBzdW0gb2YgdGhlIGdpdmVuIHN1bS5cbiAqIDEgKyBhID0gYSArIDFcbiAqIEZvbGxvd3MgdGhlIHNwZWMgZ2l2ZW4gaW4gdGhlIFN1bS50cyBmaWxlLlxuICogQHBhcmFtIHN1bVxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gb3JkZXJlZFN1bShzdW0pIHtcbiAgICBjb25zdCBvcmRlcmVkID0gKDAsIFN1bV8xLm9yZGVyVGVybXMpKC4uLnN1bS50ZXJtcyk7XG4gICAgcmV0dXJuIFN1bV8xLlN1bS5vZihvcmRlcmVkKTtcbn1cbmV4cG9ydHMub3JkZXJlZFN1bSA9IG9yZGVyZWRTdW07XG4vKipcbiAqIFJldHVybnMgdGhlIHN1bSBvZiB0aGUgZ2l2ZW4gdGVybXMsIGV2YWx1YXRpbmcgYW55IGludGVnZXIgdGVybXMuXG4gKiBQdXRzIGZpbmFsIGNvbnN0YW50IGludGVnZXIgYXMgdGhlIGxhc3QgdGVybS5cbiAqIElmIHRoZSByZXN1bHQgaXMgYSBzdW0sIGl0IHdpbGwgbm90IGhhdmUgdGhlIGludGVnZXIgMCBhcyBhIHRlcm0uXG4gKiBJZiBhbGwgZ2l2ZW4gdGVybXMgc3VtIHRvIHplcm8sIHRoZSBpbnRlZ2VyIHplcm8gd2lsbCBiZSByZXR1cm5lZC5cbiAqIEBwYXJhbSB0ZXJtc1xuICovXG5mdW5jdGlvbiBzdW1FdmFsSW50ZWdlclRlcm1zKC4uLnRlcm1zKSB7XG4gICAgY29uc3QgaW50ZWdlcnMgPSB0ZXJtcy5maWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpLmxlbmd0aDtcbiAgICBpZiAoaW50ZWdlcnMgPCAyKVxuICAgICAgICByZXR1cm4gc3VtKC4uLnRlcm1zKTtcbiAgICBjb25zdCBub25JbnRUZXJtcyA9IHRlcm1zLmZpbHRlcihlID0+ICEoZSBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKSk7XG4gICAgY29uc3QgaW50VGVybSA9IHRlcm1zLmZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcilcbiAgICAgICAgLm1hcChlID0+IGUpXG4gICAgICAgIC5yZWR1Y2UoKGEsIGIpID0+IG51bShhLnZhbHVlICsgYi52YWx1ZSkpO1xuICAgIGlmIChpbnRUZXJtLnZhbHVlID09IDApIHtcbiAgICAgICAgaWYgKG5vbkludFRlcm1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBzdW0oLi4ubm9uSW50VGVybXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5vbkludFRlcm1zLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9uSW50VGVybXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaW50VGVybTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKG5vbkludFRlcm1zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gaW50VGVybTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzdW0oLi4ubm9uSW50VGVybXMsIGludFRlcm0pO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5zdW1FdmFsSW50ZWdlclRlcm1zID0gc3VtRXZhbEludGVnZXJUZXJtcztcbi8qKlxuICogUmV0dXJucyB0aGUgc3VtIG9mIHRoZSBnaXZlbiB0ZXJtcy4gRXZhbHVhdGVzIGFueVxuICogaW50ZWdlciB0ZXJtcy4gQWRkaXRpb25hbGx5IGNhbmNlbHMgb3V0IGFueSBwb3NpdGl2ZVxuICogbmVnYXRpdmUgdGVybXMuXG4gKlxuICogU2ltcGxpZmllc1xuICogIHggKyBhIC0gYSA9IHhcbiAqIHggKyBhYiAtIGFiID0geFxuICogeCArIDJhYiAtIDJhYiA9IHhcbiAqIGEgLSBhID0gMFxuICpcbiAqIERvZXNuJ3QgYWZmZWN0XG4gKiAgeCArIDJhIC0gYVxuICogQHBhcmFtIHRlcm1zXG4gKi9cbmZ1bmN0aW9uIHN1bUludHVpdGl2ZSguLi50ZXJtcykge1xuICAgIGNvbnN0IGludEV2YWwgPSBzdW1FdmFsSW50ZWdlclRlcm1zKC4uLnRlcm1zKTtcbiAgICBpZiAoaW50RXZhbC5jbGFzcyAhPSBTdW1fMS5TdW1UeXBlKVxuICAgICAgICByZXR1cm4gaW50RXZhbDtcbiAgICB0ZXJtcyA9IFsuLi5pbnRFdmFsLnRlcm1zXTtcbiAgICAvLyBGaW5kIG9wcG9zaXRlIHBhaXJzXG4gICAgLy8gVGhleSB3aWxsIHRha2UgdGhlIGZvcm1cbiAgICAvLyAgICAgIGV4cCArIC0xICogZXhwXG4gICAgLy8gSSBhc3N1bWUgaGVyZSB0aGF0IHRoZSBvbmx5IHdheSB0byBub3RhdGVcbiAgICAvLyBuZWdhdGl2aXR5IGlzIGJ5IG11bHRpcGx5aW5nIGJ5IC0xXG4gICAgdGVybXM6IGZvciAoY29uc3QgdCBvZiB0ZXJtcykge1xuICAgICAgICBjb25zdCBvdGhlclRlcm1zID0gWy4uLnRlcm1zXTtcbiAgICAgICAgcmVtb3ZlKG90aGVyVGVybXMsIHQpO1xuICAgICAgICBmb3IgKGNvbnN0IG90aGVyIG9mIG90aGVyVGVybXMpIHtcbiAgICAgICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG90aGVyLmlzTmVnYXRpb24gJiYgb3RoZXIubmVnYXRpb24gPT09IHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlKHRlcm1zLCBvdGhlcik7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZSh0ZXJtcywgdCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIHRlcm1zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodGVybXMubGVuZ3RoID09IDApXG4gICAgICAgIHJldHVybiBJbnRlZ2VyXzEuSW50ZWdlci5vZigwKTtcbiAgICBlbHNlIGlmICh0ZXJtcy5sZW5ndGggPT0gMSlcbiAgICAgICAgcmV0dXJuIHRlcm1zWzBdO1xuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIHN1bSguLi50ZXJtcyk7XG59XG5leHBvcnRzLnN1bUludHVpdGl2ZSA9IHN1bUludHVpdGl2ZTtcbi8qKlxuICogRmluZHMgdGhlIHN1bSBvZiB0aGUgZ2l2ZW4gdGVybXMgb3IgaWYgb25seSAxXG4gKiBpcyBnaXZlbiByZXR1cm5zIHRoYXQgdGVybS5cbiAqIEBwYXJhbSB0ZXJtc1xuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gc3VtT3JOb3QoLi4udGVybXMpIHtcbiAgICBpZiAodGVybXMubGVuZ3RoID09IDEpXG4gICAgICAgIHJldHVybiB0ZXJtc1swXTtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBzdW0oLi4udGVybXMpO1xufVxuZXhwb3J0cy5zdW1Pck5vdCA9IHN1bU9yTm90O1xuLyoqXG4gKiBQcm9kdWNlcyBhIHByb2R1Y3QgZnJvbSB0aGUgZ2l2ZW4gZmFjdG9yc1xuICogd2hlcmUgdGhlIGZhY3RvcnMgYXJlIG9yZGVyZWQgYWNjb3JkaW5nIHRvIGNvbnZlbnRpb24uXG4gKiBAcGFyYW0gZmFjdG9ycyBBdCBsZWFzdCAyXG4gKi9cbmZ1bmN0aW9uIG9yZGVyZWRQcm9kdWN0KC4uLmZhY3RvcnMpIHtcbiAgICBmYWN0b3JzLnNvcnQoUHJvZHVjdF8xLmZhY3Rvck9yZGVyKTtcbiAgICByZXR1cm4gcHJvZHVjdCguLi5mYWN0b3JzKTtcbn1cbmV4cG9ydHMub3JkZXJlZFByb2R1Y3QgPSBvcmRlcmVkUHJvZHVjdDtcbi8qKlxuICogUmVtb3ZlcyB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgdGhlIGdpdmVuXG4gKiBlbGVtZW50IGZyb20gdGhlIGFycmF5LiBSZWFsbHkgc2hvdWxkIGJlXG4gKiBwYXJ0IG9mIHRoZSBzdGQgbGlicmFyeS4gSWRlbnRpZmllcyBvYmplY3RcbiAqIHdpdGggcmVmZXJlbmNpYWwgZXF1YWxpdHkuXG4gKiBAcGFyYW0gYXJyYXlcbiAqIEBwYXJhbSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZShhcnJheSwgZWxlbWVudCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFycmF5W2ldID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLnJlbW92ZSA9IHJlbW92ZTtcbi8qKlxuICogR2V0cyBhIG5ldyBhcnJheSB3aXRob3V0IHRoZSBmaXJzdCBpbnN0YW5jZSBvZiB0aGUgZ2l2ZW5cbiAqIGVsZW1lbnQuIFJlYWxseSBzaG91bGQgYmVcbiAqIHBhcnQgb2YgdGhlIHN0ZCBsaWJyYXJ5LiBJZGVudGlmaWVzIG9iamVjdFxuICogd2l0aCByZWZlcmVuY2lhbCBlcXVhbGl0eS5cbiAqIEBwYXJhbSBhcnJheVxuICogQHBhcmFtIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlTmV3KGFycmF5LCBlbGVtZW50KSB7XG4gICAgY29uc3QgaW5wdXQgPSBbLi4uYXJyYXldO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlucHV0W2ldID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgICBpbnB1dC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiR2l2ZW4gYXJyYXkgZG9lc24ndCBjb250YWluIGVsZW1lbnQgXCIgKyBlbGVtZW50KTtcbn1cbmV4cG9ydHMucmVtb3ZlTmV3ID0gcmVtb3ZlTmV3O1xuZnVuY3Rpb24gcHJvZHVjdCguLi5mYWN0b3JzKSB7XG4gICAgZmFjdG9ycy5mb3JFYWNoKGYgPT4gKDAsIGFzc2VydF8xLmFzc2VydCkoZiAhPSBudWxsICYmIGYgIT0gdW5kZWZpbmVkLCBcIk1ha2luZyBwcm9kdWN0IHdpdGggbnVsbCBvciB1bmRlZmluZWQgZmFjdG9yXCIpKTtcbiAgICByZXR1cm4gUHJvZHVjdF8xLlByb2R1Y3Qub2YoZmFjdG9ycyk7XG59XG5leHBvcnRzLnByb2R1Y3QgPSBwcm9kdWN0O1xuZnVuY3Rpb24gbmVnYXRpdmUoZXhwcmVzc2lvbikge1xuICAgIGlmIChleHByZXNzaW9uIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpXG4gICAgICAgIHJldHVybiBJbnRlZ2VyXzEuSW50ZWdlci5vZigtZXhwcmVzc2lvbi52YWx1ZSk7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gUHJvZHVjdF8xLlByb2R1Y3Qub2YoW0ludGVnZXJfMS5JbnRlZ2VyLm9mKC0xKSwgZXhwcmVzc2lvbl0pO1xufVxuZXhwb3J0cy5uZWdhdGl2ZSA9IG5lZ2F0aXZlO1xuZnVuY3Rpb24gbnVtKHZhbCkge1xuICAgIHJldHVybiBJbnRlZ2VyXzEuSW50ZWdlci5vZih2YWwpO1xufVxuZXhwb3J0cy5udW0gPSBudW07XG5mdW5jdGlvbiB2KHN5bWJvbCkge1xuICAgIHJldHVybiBWYXJpYWJsZV8xLlZhcmlhYmxlLm9mKHN5bWJvbCk7XG59XG5leHBvcnRzLnYgPSB2O1xuZnVuY3Rpb24gaW50KGludGVncmFuZCwgcmVzcGVjdFRvKSB7XG4gICAgcmV0dXJuIEludGVncmFsXzEuSW50ZWdyYWwub2YoaW50ZWdyYW5kLCByZXNwZWN0VG8pO1xufVxuZXhwb3J0cy5pbnQgPSBpbnQ7XG5mdW5jdGlvbiBlcXVpdmFsZW5jZUFyZ3VtZW50KGZpcnN0LCBzZWNvbmQsIGV4cGxhbmF0aW9uKSB7XG4gICAgcmV0dXJuIG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KHNldE9mKGZpcnN0KSwge1xuICAgICAgICBuOiBmaXJzdCxcbiAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICBuMTogc2Vjb25kLFxuICAgIH0sIGV4cGxhbmF0aW9uKTtcbn1cbmV4cG9ydHMuZXF1aXZhbGVuY2VBcmd1bWVudCA9IGVxdWl2YWxlbmNlQXJndW1lbnQ7XG4vKipcbiAqXG4gKiBAcmV0dXJucyBUaGUgcHJvZHVjdCBvZiB0aGUgZ2l2ZW4gZmFjdG9ycywgb3IgdGhlIG9ubHkgZmFjdG9yIGdpdmVuXG4gKiBpZiBvbmx5IG9uZSBnaXZlbi4gVGhyb3dzIGlmIG5vIGV4cHJlc3Npb25zIGFyZSBnaXZlbi5cbiAqL1xuZnVuY3Rpb24gcHJvZHVjdE9yTm90KC4uLmV4cHJlc3Npb25zKSB7XG4gICAgKDAsIGFzc2VydF8xLmFzc2VydCkoZXhwcmVzc2lvbnMubGVuZ3RoID4gMCk7XG4gICAgaWYgKGV4cHJlc3Npb25zLmxlbmd0aCA9PSAxKVxuICAgICAgICByZXR1cm4gZXhwcmVzc2lvbnNbMF07XG4gICAgcmV0dXJuIHByb2R1Y3QoLi4uZXhwcmVzc2lvbnMpO1xufVxuZXhwb3J0cy5wcm9kdWN0T3JOb3QgPSBwcm9kdWN0T3JOb3Q7XG4vKipcbiAqIEByZXR1cm5zIFRoZSBwcm9kdWN0IG9mIHRoZSBnaXZlbiB0ZXJtcyBleGxjdWRpbmcgdGhlIGZpcnN0IGlmXG4gKiAgICAgICAgICBpdCdzIG9uZS4gSWYgdGhlIHJlc3VsdGluZyB0ZXJtcyBsaXN0IGlzIG9ubHkgb25lIHRlcm0sXG4gKiAgICAgICAgICByZXR1cm5zIHRoZSBvbmx5IHRlcm0uXG4gKi9cbmZ1bmN0aW9uIHByb2R1Y3RBbmROb3RUaW1lc09uZSguLi5leHByZXNzaW9ucykge1xuICAgIGlmIChleHByZXNzaW9uc1swXSBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyICYmIGV4cHJlc3Npb25zWzBdLnZhbHVlID09IDEpIHtcbiAgICAgICAgZXhwcmVzc2lvbnMuc2hpZnQoKTtcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RPck5vdCguLi5leHByZXNzaW9ucyk7XG4gICAgfVxuICAgIHJldHVybiBwcm9kdWN0T3JOb3QoLi4uZXhwcmVzc2lvbnMpO1xufVxuZXhwb3J0cy5wcm9kdWN0QW5kTm90VGltZXNPbmUgPSBwcm9kdWN0QW5kTm90VGltZXNPbmU7XG5mdW5jdGlvbiBzZXRPZiguLi5leHByZXNzaW9ucykge1xuICAgIGNvbnN0IG91dCA9IG5ldyBTZXQoKTtcbiAgICBleHByZXNzaW9ucy5mb3JFYWNoKGUgPT4gb3V0LmFkZChlKSk7XG4gICAgcmV0dXJuIG91dDtcbn1cbmV4cG9ydHMuYSA9IHYoJ2EnKTtcbmV4cG9ydHMuYiA9IHYoJ2InKTtcbmV4cG9ydHMuYyA9IHYoJ2MnKTtcbmV4cG9ydHMuZCA9IHYoJ2QnKTtcbmV4cG9ydHMuZSA9IHYoJ2UnKTtcbmV4cG9ydHMuZiA9IHYoJ2YnKTtcbmV4cG9ydHMueCA9IHYoJ3gnKTtcbmV4cG9ydHMueSA9IHYoJ3knKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HaXZlbkVkZ2UgPSBleHBvcnRzLkFyZ3VtZW50RWRnZSA9IGV4cG9ydHMuR3JhcGggPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4vQXJndW1lbnRcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0XCIpO1xuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBncmFwaCBvZiBleHByZXNzaW9ucyBhbmQgc3RhdGVtZW50c1xuICogaW5jbHVkaW5nIGV2ZXJ5dGhpbmcgd2Uga25vdyBhYm91dCBhIHByb2JsZW0uXG4gKiBDb25uZWN0cyBHcmFwaE5vZGVzIHZpYSBJbmZlcmVuY2VzIGZvciBlZGdlcy5cbiAqXG4gKiBJdCdzIGEgZGlncmFwaC5cbiAqL1xuY2xhc3MgR3JhcGgge1xuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gZXhwcmVzc2lvbiB0byB0aGUgcHJvYmxlbS5cbiAgICAgKiBAcGFyYW0gbm9kZVxuICAgICAqIEByZXR1cm5zIHRoZSBzYW1lIGdyYXBoIGZvciBjaGFpbmluZy5cbiAgICAgKi9cbiAgICBhZGROb2RlKG5vZGUpIHtcbiAgICAgICAgdGhpcy5ub2Rlcy5hZGQobm9kZSk7XG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgQXJndW1lbnRfMS5Bcmd1bWVudCkge1xuICAgICAgICAgICAgdGhpcy5hZGRBcmd1bWVudChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcE9rKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGQgYSByZWxhdGlvbnNoaXAgYmV0d2VlbiB0d28gZWxlbWVudHMgZ2l2ZW4gYnkgdGhlIHVzZXIgdG8gdGhlIGdyYXBoLlxuICAgICAqIFNob3VsZCBub3QgYmUgY2FsbGVkIHRvIGFkZCBkZXJpdmVkIHRydXRocyBiYyB0aGlzIHdvbid0IHN0b3JlIGFuIGV4cGxhbmF0aW9uLlxuICAgICAqIEFkZHMgZ2l2ZW4gbm9kZXMgaWYgdGhleSBhcmVuJ3QgYWxyZWFkeSBvbiB0aGUgZ3JhcGguXG4gICAgICogQHBhcmFtIG5cbiAgICAgKiBAcGFyYW0gbjFcbiAgICAgKiBAcGFyYW0gclxuICAgICAqIEByZXR1cm5zIHNlbGYgZm9yIGNoYWluaW5nXG4gICAgICovXG4gICAgYWRkUmVsYXRpb25zaGlwKG4sIG4xLCByKSB7XG4gICAgICAgIHRoaXMuYWRkTm9kZShuKTtcbiAgICAgICAgdGhpcy5hZGROb2RlKG4xKTtcbiAgICAgICAgLy8gRGVmaW5lZCBib3RoIHdheXMgYmVjYXVzZSB0aGUgdXNlciBpcyBnaXZpbmcgaXRcbiAgICAgICAgdGhpcy5hZGRFZGdlKG4sIG4xLCBuZXcgR2l2ZW5FZGdlKHIpKTtcbiAgICAgICAgdGhpcy5hZGRFZGdlKG4xLCBuLCBuZXcgR2l2ZW5FZGdlKHIpKTtcbiAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKG4sIG4xKTtcbiAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKG4xLCBuKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBub2RlIHJlcHJlc2VudGluZyBhbiBhY3VtdWxhdGlvbiBvZiBmYWN0c1xuICAgICAqIHRoYXQgbGVhZHMgdG8gYSBjb25jbHVzaW9uLlxuICAgICAqIEBwYXJhbSBhXG4gICAgICogQHJldHVybnMgdGhlIHNhbWUgZ3JhcGggZm9yIGNoYWluaW5nLlxuICAgICAqL1xuICAgIGFkZEFyZ3VtZW50KGEpIHtcbiAgICAgICAgdGhpcy5ub2Rlcy5hZGQoYSk7XG4gICAgICAgIC8vIEFkZCB0aGUgZ3JvdW5kc1xuICAgICAgICBmb3IgKGNvbnN0IGdyb3VuZCBvZiBhLmdyb3VuZHMpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZXMuYWRkKGdyb3VuZCk7XG4gICAgICAgICAgICB0aGlzLmFkZENvbm5lY3Rpb24oZ3JvdW5kLCBhKTtcbiAgICAgICAgICAgIHRoaXMuYWRkRWRnZShncm91bmQsIGEsIEFyZ3VtZW50RWRnZS5Ubyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIHRoZSBjbGFpbVxuICAgICAgICBjb25zdCBjbGFpbSA9IGEuY2xhaW07XG4gICAgICAgIHRoaXMuYWRkTm9kZShjbGFpbS5uKTtcbiAgICAgICAgdGhpcy5hZGROb2RlKGNsYWltLm4xKTtcbiAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKGEsIGNsYWltLm4pO1xuICAgICAgICB0aGlzLmFkZEVkZ2UoYSwgY2xhaW0ubiwgQXJndW1lbnRFZGdlLkZyb20pO1xuICAgICAgICB0aGlzLmFkZENvbm5lY3Rpb24oYSwgY2xhaW0ubjEpO1xuICAgICAgICB0aGlzLmFkZEVkZ2UoYSwgY2xhaW0ubjEsIEFyZ3VtZW50RWRnZS5Gcm9tKTtcbiAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKGNsYWltLm4sIGNsYWltLm4xKTtcbiAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKGNsYWltLm4xLCBjbGFpbS5uKTtcbiAgICAgICAgdGhpcy5hZGRFZGdlKGNsYWltLm4sIGNsYWltLm4xLCBhKTtcbiAgICAgICAgdGhpcy5hZGRFZGdlKGNsYWltLm4xLCBjbGFpbS5uLCBhKTtcbiAgICAgICAgdGhpcy5yZXBPaygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMgdGhlIHNhbWUgZ3JhcGggZm9yIGNoYWluaW5nLlxuICAgICAqL1xuICAgIGFkZEFyZ3VtZW50cyguLi5hKSB7XG4gICAgICAgIGEuZm9yRWFjaChhcmcgPT4gdGhpcy5hZGRBcmd1bWVudChhcmcpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbmVpZ2hib3JzIG9mIGEgbm9kZS5cbiAgICAgKiBAcGFyYW0gbm9kZVxuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24gTm9kZXMgdGhhdCBhcmUgYWRqYWNlbnQgdG8gdGhpcyBub2RlLCBmcm9tIHRoaXMgbm9kZSwgb3IgZWl0aGVyLlxuICAgICAqIEByZXR1cm5zIFVuZGVmaW5lZCBpZiB0aGUgbm9kZSBpc24ndCBpbiB0aGlzIGdyYXBoLiBPdGhlcndpc2UsIGEgc2V0IG9mIGNvbm5lY3RlZCBub2Rlcy5cbiAgICAgKiAgICAgICAgICBJZiB0aGUgbm9kZSBpcyBpbiB0aGUgZ3JhcGggYnV0IGlzbid0IGNvbm5lY3RlZCB0byBhbnl0aGluZywgcmV0dXJucyBlbXB0eSBzZXQuXG4gICAgICovXG4gICAgZ2V0TmVpZ2hib3JzKG5vZGUsIGRpcmVjdGlvbikge1xuICAgICAgICBpZiAoIXRoaXMubm9kZXMuaGFzKG5vZGUpKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcIm91dFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNldCh0aGlzLmNvbm5lY3Rpb25zLmdldChub2RlKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFkamFjZW50VG8gPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgbiBvZiB0aGlzLm5vZGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9ucy5nZXQobik/Lmhhcyhub2RlKSlcbiAgICAgICAgICAgICAgICBhZGphY2VudFRvLmFkZChuKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwiaW5cIilcbiAgICAgICAgICAgIHJldHVybiBhZGphY2VudFRvO1xuICAgICAgICBmb3IgKGNvbnN0IG4gb2YgdGhpcy5jb25uZWN0aW9ucy5nZXQobm9kZSkgPz8gW10pXG4gICAgICAgICAgICBhZGphY2VudFRvLmFkZChuKTtcbiAgICAgICAgcmV0dXJuIGFkamFjZW50VG87XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgdGhlIG51bWJlciBvZiBlZGdlcyB0aGlzIG5vZGUgaGFzLlxuICAgICAqIEBwYXJhbSBub2RlIFRoZSBub2RlIGJlaW5nIGNvbnNkZXJlZC5cbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIENvdW50IG9ubHkgdGhlIGVkZ2VzIGdvaW5nIHRvd2FyZHMgdGhpcyBub2RlLCBhd2F5IGZyb21cbiAgICAgKiAgICAgICAgICBpdCwgb3IgYm90aC5cbiAgICAgKiBAcmV0dXJucyA+PSAwLCB1bmRlZmluZWQgaWYgdGhlIGdpdmVuIG5vZGUgaXNuJ3QgaW4gdGhlIGdyYXBoLlxuICAgICAqL1xuICAgIGdldERlZ3JlZShub2RlLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKCF0aGlzLm5vZGVzLmhhcyhub2RlKSlcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJvdXRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbnMuZ2V0KG5vZGUpPy5zaXplID8/IDA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRlZ0luID0gMDtcbiAgICAgICAgdGhpcy5ub2Rlcy5mb3JFYWNoKG4gPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbnMuZ2V0KG4pID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9ucy5nZXQobikuaGFzKG5vZGUpKVxuICAgICAgICAgICAgICAgIGRlZ0luKys7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwiaW5cIikge1xuICAgICAgICAgICAgcmV0dXJuIGRlZ0luO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWdJbiArICh0aGlzLmNvbm5lY3Rpb25zLmdldChub2RlKT8uc2l6ZSA/PyAwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIG4gTm9kZSBpbiB0aGUgZ3JhcGguXG4gICAgICogQHBhcmFtIG4xIEluIHRoZSBncmFwaC5cbiAgICAgKiBAcmV0dXJucyBVbmRlZmluZWQgaWYgZWl0aGVyIG5vZGUgaXNuJ3QgaW4gdGhlIGdyYXBoIG9yIHRoZXkncmUgbm90XG4gICAgICogY29ubmVjdGVkLlxuICAgICAqL1xuICAgIGdldEVkZ2UobiwgbjEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWRnZXMuZ2V0KG4pPy5nZXQobjEpO1xuICAgIH1cbiAgICBjb250YWlucyhub2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVzLmhhcyhub2RlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMgQSBuZXcgc2V0IGNvbnRhaW5pbmcgYWxsIHRoZSBub2RlcyBpbiB0aGUgZ3JhcGhcbiAgICAgKi9cbiAgICBnZXROb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZXQodGhpcy5ub2Rlcyk7XG4gICAgfVxuICAgIGdldEVkZ2VzKCkge1xuICAgICAgICBjb25zdCBvdXQgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuZWRnZXMuZm9yRWFjaCgobWFwLCBmaXJzdCkgPT4ge1xuICAgICAgICAgICAgbWFwLmZvckVhY2goKGVkZ2UsIHNlY29uZCkgPT4ge1xuICAgICAgICAgICAgICAgIG91dC5hZGQoeyBuOiBmaXJzdCwgbjE6IHNlY29uZCwgZTogZWRnZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgbnVtTm9kZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVzLnNpemU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYWxsIGdyYXBoIG5vZGVzIGFuZCBlZGdlcyB0byB0aGlzIG9uZS5cbiAgICAgKiBAcGFyYW0gZ3JhcGhcbiAgICAgKiBAcmV0dXJucyB0aGUgc2FtZSBncmFwaCBmb3IgY2hhaW5pbmcuXG4gICAgICovXG4gICAgYWRkR3JhcGgoZ3JhcGgpIHtcbiAgICAgICAgZ3JhcGgubm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9kZXMuYWRkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgZ3JhcGguZWRnZXMuZm9yRWFjaCgobWFwLCBub2RlMSkgPT4ge1xuICAgICAgICAgICAgbWFwLmZvckVhY2goKGVkZ2UsIG5vZGUyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVkZ2UgaW5zdGFuY2VvZiBBcmd1bWVudF8xLkFyZ3VtZW50KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEFyZ3VtZW50KGVkZ2UpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVkZ2UgPT0gXCJzdXBwb3J0c1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRWRnZShub2RlMSwgbm9kZTIsIEFyZ3VtZW50RWRnZS5Ubyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbihub2RlMSwgbm9kZTIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlZGdlID09IFwiY2xhaW1zXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFZGdlKG5vZGUxLCBub2RlMiwgQXJndW1lbnRFZGdlLkZyb20pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbm5lY3Rpb24obm9kZTEsIG5vZGUyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIEVkZ2UgVHlwZVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZXBPaygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGxldCBvdXQgPSBcIkdyYXBoKFYgPSB7XCI7XG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XG4gICAgICAgICAgICBvdXQgKz0gbm9kZS50b1N0cmluZygpICsgXCIsXCI7XG4gICAgICAgIH1cbiAgICAgICAgb3V0ID0gb3V0LnN1YnN0cmluZygwLCBvdXQubGVuZ3RoIC0gMSkgKyBcIn0sIEUgPSB7XCI7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnMuZm9yRWFjaCgoc2V0LCBzcmMpID0+IHtcbiAgICAgICAgICAgIHNldC5mb3JFYWNoKGRlc3QgPT4ge1xuICAgICAgICAgICAgICAgIG91dCArPSBzcmMudG9TdHJpbmcoKSArIFwiIC0+IFwiICsgZGVzdC50b1N0cmluZygpICsgXCIsIFwiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBvdXQgKz0gXCJ9IEVkZ2UgQ291bnQ6IFwiICsgdGhpcy5jb25uZWN0aW9ucy5zaXplO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICBhZGRDb25uZWN0aW9uKG4sIG4xKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25zLmdldChuKSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLnNldChuLCBuZXcgU2V0KCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnMuZ2V0KG4pLmFkZChuMSk7XG4gICAgfVxuICAgIGFkZEVkZ2UobiwgbjEsIGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZWRnZXMuZ2V0KG4pID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lZGdlcy5zZXQobiwgbmV3IE1hcCgpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVkZ2VzLmdldChuKS5zZXQobjEsIGUpO1xuICAgIH1cbiAgICByZXBPaygpIHtcbiAgICAgICAgdGhpcy5ub2Rlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPSB1bmRlZmluZWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQWxsIGNvbm5lY3Rpb25zL2VkZ2VzIGhhdmUgbm9kZXNcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLm5vZGVzLmhhcyhrZXkpKTtcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2gobiA9PiB7XG4gICAgICAgICAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5ub2Rlcy5oYXMobikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVkZ2VzLmZvckVhY2goKG1hcCwgZmlyc3QpID0+IHtcbiAgICAgICAgICAgIG1hcC5mb3JFYWNoKChlZGdlLCBzZWNvbmQpID0+IHtcbiAgICAgICAgICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLm5vZGVzLmhhcyhmaXJzdCkpO1xuICAgICAgICAgICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMubm9kZXMuaGFzKHNlY29uZCkpO1xuICAgICAgICAgICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMuY29ubmVjdGlvbnMuZ2V0KGZpcnN0KS5oYXMoc2Vjb25kKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vZGVzID0gbmV3IFNldCgpO1xuICAgIC8vIFF1aWNrbHkgYWNjZXNzIGFsbCBjb25uZWN0aW9ucyBvZiBhIG5vZGVcbiAgICBjb25uZWN0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAvLyBEZXRlcm1pbmUgdGhlIHR5cGUgb2YgY29ubmVjdGlvbiBiZXR3ZWVuIHR3byBub2Rlc1xuICAgIGVkZ2VzID0gbmV3IE1hcCgpO1xufVxuZXhwb3J0cy5HcmFwaCA9IEdyYXBoO1xudmFyIEFyZ3VtZW50RWRnZTtcbihmdW5jdGlvbiAoQXJndW1lbnRFZGdlKSB7XG4gICAgQXJndW1lbnRFZGdlW1wiVG9cIl0gPSBcInN1cHBvcnRzXCI7XG4gICAgQXJndW1lbnRFZGdlW1wiRnJvbVwiXSA9IFwiY2xhaW1zXCI7XG59KShBcmd1bWVudEVkZ2UgPSBleHBvcnRzLkFyZ3VtZW50RWRnZSB8fCAoZXhwb3J0cy5Bcmd1bWVudEVkZ2UgPSB7fSkpO1xuLyoqXG4gKiBDb21tdW5pY2F0ZXMgYSByZWxhdGlvbmhpcCBnaXZlbiBieSB0aGUgdXNlci5cbiAqL1xuY2xhc3MgR2l2ZW5FZGdlIHtcbiAgICBjb25zdHJ1Y3RvcihyKSB7XG4gICAgICAgIHRoaXMuciA9IHI7XG4gICAgfVxuICAgIHI7XG59XG5leHBvcnRzLkdpdmVuRWRnZSA9IEdpdmVuRWRnZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HcmFwaE1pbmlwdWxhdG9yID0gdm9pZCAwO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi91dGlsL2Fzc2VydFwiKTtcbi8qKlxuICogVG9vbCB0byBkbyBvcGVyYXRpb25zIG9uIGdyYXBocy5cbiAqL1xuY2xhc3MgR3JhcGhNaW5pcHVsYXRvciB7XG4gICAgLyoqXG4gICAgICogRmluZCBub2RlcyBvZiBjb21wb25lbnRzIG9mIGEgZ3JhcGggd2hlcmUgb25seSBlZGdlcyBmb3Igd2hpY2hcbiAgICAgKiB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gcmV0dXJucyB0cnVlIGFyZSBjb25zaWRlcmVkLlxuICAgICAqIEBwYXJhbVxuICAgICAqIEBwYXJhbSBpc0Nvbm5lY3RlZFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDb21wb25lbnROb2RlcyhpbnB1dCwgaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgY29uc3QgaW5jbHVkZWROb2RlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIGlucHV0LmdldE5vZGVzKCkpIHtcbiAgICAgICAgICAgIGlmIChpbmNsdWRlZE5vZGVzLmhhcyhub2RlKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0QWxsQ29ubmVjdGVkKG4pIHtcbiAgICAgICAgICAgICAgICBpbmNsdWRlZE5vZGVzLmFkZChuKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50LmhhcyhuKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5hZGQobik7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBuZWlnaGJvciBvZiBpbnB1dC5nZXROZWlnaGJvcnMobiwgXCJib3RoXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNDb25uZWN0ZWQoaW5wdXQuZ2V0RWRnZShuLCBuZWlnaGJvcikpKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIGdldEFsbENvbm5lY3RlZChuZWlnaGJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdldEFsbENvbm5lY3RlZChub2RlKTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5hZGQobm9kZSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFkZChjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKGluY2x1ZGVkTm9kZXMuc2l6ZSA9PSBpbnB1dC5udW1Ob2RlcygpKTtcbiAgICAgICAgLy8gQXNzZXJ0IGNvbXBvbmVudHMgYXJlIHBhaXJ3aXNlIGRpc2pvaW50IG9mIHByb2JsZW1zIHNob3cgdXBcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgZXZlcnkgZWRnZSBpbiB0aGUgZ3JhcGguXG4gICAgICogQHBhcmFtIGlucHV0XG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UmVsYXRpb25zKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IG91dCA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgaW5wdXQuZ2V0Tm9kZXMoKSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBvdGhlciBvZiBpbnB1dC5nZXROZWlnaGJvcnMobm9kZSwgXCJvdXRcIikpIHtcbiAgICAgICAgICAgICAgICBvdXQucHVzaCh7IGZpcnN0OiBub2RlLCBzZWNvbmQ6IG90aGVyLCBlOiBpbnB1dC5nZXRFZGdlKG5vZGUsIG90aGVyKSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIGdyYXBoIGludG8gc2V0cyBvZlxuICAgICAqIG5vZGVzIGdyb3VwZWQgYnkgZGVwdGggZnJvbSBhIGNlbnRlciBub2RlLlxuICAgICAqIEFzc3VtZXMgdGhlIGdyYXBoIGlzIGNvbm5lY3RlZC5cbiAgICAgKiBAcGFyYW0gcm9vdE5vZGVzIENvbnRhaW5zIGF0IGxlYXN0IG9uZSBub2RlIGluIHRoZSBncmFwaC5cbiAgICAgKiBAcGFyYW0gY291bnQgRnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIGlmIGFueSBnaXZlbiBub2RlIHNob3VsZCBiZVxuICAgICAqIGluY2x1ZGVkIGluIHRoZSBkZXB0aCBjb3VudC4gRGVmYXVsdHMgdG8gY291bnRpbmcgYWxsIG5vZGVzLiBOb2RlcyB0aGF0XG4gICAgICogYXJlbid0IGluY2x1ZGVkIHdvbid0IGJlIGluIHRoZSByZXR1cm5lZCB2YWx1ZS5cbiAgICAgKiBAcmV0dXJucyBNYXAgZnJvbSBkZXB0aCBpbiBncmFwaCB0byBhIHNldCBvZiBub2RlcyBhdCB0aGF0IGRlcHRoLlxuICAgICAqXG4gICAgICovXG4gICAgc3RhdGljIGdldExldmVscyhpbnB1dCwgcm9vdE5vZGVzLCBjb3VudCA9ICgpID0+IHRydWUpIHtcbiAgICAgICAgY29uc3Qgcm9vdHMgPSBuZXcgU2V0KHJvb3ROb2Rlcyk7XG4gICAgICAgIGNvbnN0IGRlcHRocyA9IG5ldyBNYXAoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlY3Vyc2l2ZWx5IG1hcHMgb3V0IGFsbCBub2RlcyBpbiB0aGUgZ3JhcGgsXG4gICAgICAgICAqIHB1dHRpbiB0aGVtIGluIHRoZSBkZXB0aHMgbWFwLlxuICAgICAgICAgKiBAcGFyYW0gbm9kZVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gbWFwTm9kZShub2RlLCBkZXB0aCA9IDApIHtcbiAgICAgICAgICAgIGlmIChyb290cy5oYXMobm9kZSkpIHtcbiAgICAgICAgICAgICAgICBkZXB0aCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGVwdGggPCAoZGVwdGhzLmdldChub2RlKSA/PyBOdW1iZXIuTUFYX1ZBTFVFKSkge1xuICAgICAgICAgICAgICAgIGRlcHRocy5zZXQobm9kZSwgZGVwdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmVpZ2hib3JzID0gWy4uLmlucHV0LmdldE5laWdoYm9ycyhub2RlLCBcImJvdGhcIildO1xuICAgICAgICAgICAgbmVpZ2hib3JzLmZpbHRlcih2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBmb3VuZCBhIHNob3J0ZXIgcGF0aCB0byBpdCBvciB0aGVyZSB3YXMgbm8gZm91bmQgcGF0aCB0byBpdFxuICAgICAgICAgICAgICAgIHJldHVybiAoZGVwdGhzLmdldCh2YWx1ZSkgPT0gdW5kZWZpbmVkIHx8IGRlcHRocy5nZXQodmFsdWUpID4gZGVwdGgpICYmIHZhbHVlICE9PSBub2RlO1xuICAgICAgICAgICAgfSkuZm9yRWFjaChuID0+IHtcbiAgICAgICAgICAgICAgICBtYXBOb2RlKG4sIGNvdW50KG5vZGUpID8gZGVwdGggKyAxIDogZGVwdGgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbWFwTm9kZShbLi4ucm9vdHNdWzBdKTtcbiAgICAgICAgY29uc3Qgb3V0ID0gbmV3IE1hcCgpO1xuICAgICAgICBkZXB0aHMuZm9yRWFjaCgoZGVwdGgsIG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmICghY291bnQobm9kZSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKG91dC5nZXQoZGVwdGgpID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG91dC5zZXQoZGVwdGgsIG5ldyBTZXQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXQuZ2V0KGRlcHRoKS5hZGQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBnaXZlbiBncmFwaCBpcyBjb25uZWN0ZWQsIG1lYW5pbmcgdGhhdFxuICAgICAqIGl0J3MgcG9zc2libGUgdG8gdHJhdmVyc2UgYmV0d2VlbiBhbnkgdHdvIG5vZGVzIG9uIHRoZSBncmFwaC5cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNDb25uZWN0ZWQoaW5wdXQpIHtcbiAgICAgICAgLy8gQ2hlY2sgZXZlcnkgbm9kZSBoYXMgYSBkZWdyZWUgb2YgMSBvciBtb3JlIG9yIGdyYXBoIG9ubHkgaGFzIDEgb3IgMCBlbGVtZW50c1xuICAgICAgICByZXR1cm4gWy4uLmlucHV0LmdldE5vZGVzKCldLm1hcChub2RlID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC5nZXREZWdyZWUobm9kZSwgXCJib3RoXCIpID4gMDtcbiAgICAgICAgfSkucmVkdWNlKChhLCBiKSA9PiBhICYmIGIpIHx8IGlucHV0Lm51bU5vZGVzKCkgPCAyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGaWx0ZXJzIGVkZ2VzIGxpc3QgcmV0dXJuaW5nIGEgbGlzdCB3aGVyZSBvbmx5IG9uZSBlZGdlXG4gICAgICogZnJvbSBhbnkgZWRnZSBsb29wcyBpcyBpbmNsdWRlZC5cbiAgICAgKiBGb3IgZXhhbXBsZSBpZiB0aGUgaW5wdXQgZWRnZXMgYXJlIGEgLT4gYiBhbmQgYiAtPiBhLFxuICAgICAqIHRoZSByZXN1bHQgd2lsbCBvbmx5IGNvbnRhaW4gYSAtPiBiLlxuICAgICAqIEBwYXJhbSBlZGdlc1xuICAgICAqL1xuICAgIHN0YXRpYyBkcm9wU3ltbWV0cmljKGVkZ2VzKSB7XG4gICAgICAgIGNvbnN0IG91dCA9IFtdO1xuICAgICAgICBmdW5jdGlvbiBhbHJlYWR5SGFzKGVkZ2UpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZSBvZiBvdXQpXG4gICAgICAgICAgICAgICAgaWYgKGVkZ2UubiA9PSBlLm4xICYmIGVkZ2UubjEgPT0gZS5uKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGVkZ2Ugb2YgZWRnZXMpIHtcbiAgICAgICAgICAgIGlmICghYWxyZWFkeUhhcyhlZGdlKSlcbiAgICAgICAgICAgICAgICBvdXQucHVzaChlZGdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbn1cbmV4cG9ydHMuR3JhcGhNaW5pcHVsYXRvciA9IEdyYXBoTWluaXB1bGF0b3I7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUmVsYXRpb25zaGlwID0gdm9pZCAwO1xuLyoqXG4gKiBBIHdheSBpbiB3aGljaCAyIGV4cHJlc3Npb25zIGNhbiBiZSByZWxhdGVkLlxuICovXG52YXIgUmVsYXRpb25zaGlwO1xuKGZ1bmN0aW9uIChSZWxhdGlvbnNoaXApIHtcbiAgICBSZWxhdGlvbnNoaXBbXCJFcXVhbFwiXSA9IFwiPVwiO1xufSkoUmVsYXRpb25zaGlwID0gZXhwb3J0cy5SZWxhdGlvbnNoaXAgfHwgKGV4cG9ydHMuUmVsYXRpb25zaGlwID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5EZXJpdmVyID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi9Bcmd1bWVudFwiKTtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuLi9leHByZXNzaW9ucy9FeHByZXNzaW9uXCIpO1xuY29uc3QgR3JhcGhfMSA9IHJlcXVpcmUoXCIuLi9HcmFwaFwiKTtcbmNvbnN0IEdyYXBoTWluaXB1bGF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HcmFwaE1pbmlwdWxhdG9yXCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuY29uc3QgcmVjdXJzaW9uXzEgPSByZXF1aXJlKFwiLi9yZWN1cnNpb25cIik7XG5jb25zdCBSZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuL1JlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZVwiKTtcbmNvbnN0IEFkZGl0aXZlSWRlbnRpdHlfMSA9IHJlcXVpcmUoXCIuL3NpbXBsaWZpY2F0aW9ucy9BZGRpdGl2ZUlkZW50aXR5XCIpO1xuY29uc3QgQXNzb2NpYXRpdmVQcm9wZXJ0eU9mUHJvZHVjdHNBbmRTdW1zXzEgPSByZXF1aXJlKFwiLi9zaW1wbGlmaWNhdGlvbnMvQXNzb2NpYXRpdmVQcm9wZXJ0eU9mUHJvZHVjdHNBbmRTdW1zXCIpO1xuY29uc3QgQ2FuY2VsTmVnYXRpdmVzXzEgPSByZXF1aXJlKFwiLi9zaW1wbGlmaWNhdGlvbnMvQ2FuY2VsTmVnYXRpdmVzXCIpO1xuY29uc3QgQ29tYmluZUNvbW1vbkZhY3RvcnNNdWx0aXBsaWNhdGlvbl8xID0gcmVxdWlyZShcIi4vc2ltcGxpZmljYXRpb25zL0NvbWJpbmVDb21tb25GYWN0b3JzTXVsdGlwbGljYXRpb25cIik7XG5jb25zdCBDb21iaW5lQ29tbW9uVGVybXNBZGRpdGlvbl8xID0gcmVxdWlyZShcIi4vc2ltcGxpZmljYXRpb25zL0NvbWJpbmVDb21tb25UZXJtc0FkZGl0aW9uXCIpO1xuY29uc3QgQ29tYmluZUludGVnZXJGYWN0b3JzXzEgPSByZXF1aXJlKFwiLi9zaW1wbGlmaWNhdGlvbnMvQ29tYmluZUludGVnZXJGYWN0b3JzXCIpO1xuY29uc3QgRGl2aWRlRnJhY3Rpb25zXzEgPSByZXF1aXJlKFwiLi9zaW1wbGlmaWNhdGlvbnMvRGl2aWRlRnJhY3Rpb25zXCIpO1xuY29uc3QgRGl2aXNpb25JZGVudGl0eV8xID0gcmVxdWlyZShcIi4vc2ltcGxpZmljYXRpb25zL0RpdmlzaW9uSWRlbnRpdHlcIik7XG5jb25zdCBFdmFsdWF0ZVN1bXNfMSA9IHJlcXVpcmUoXCIuL3NpbXBsaWZpY2F0aW9ucy9FdmFsdWF0ZVN1bXNcIik7XG5jb25zdCBFeHBvbmVudGlhbElkZW50aXR5XzEgPSByZXF1aXJlKFwiLi9zaW1wbGlmaWNhdGlvbnMvRXhwb25lbnRpYWxJZGVudGl0eVwiKTtcbmNvbnN0IEV4cG9uZW50VG9aZXJvXzEgPSByZXF1aXJlKFwiLi9zaW1wbGlmaWNhdGlvbnMvRXhwb25lbnRUb1plcm9cIik7XG5jb25zdCBNdWx0aXBsaWNhdGl2ZUlkZW50aXR5XzEgPSByZXF1aXJlKFwiLi9zaW1wbGlmaWNhdGlvbnMvTXVsdGlwbGljYXRpdmVJZGVudGl0eVwiKTtcbmNvbnN0IE11bHRpcGx5RXhwb25lbnRQb3dlcnNfMSA9IHJlcXVpcmUoXCIuL3NpbXBsaWZpY2F0aW9ucy9NdWx0aXBseUV4cG9uZW50UG93ZXJzXCIpO1xuY29uc3QgT3JkZXJTdW1zXzEgPSByZXF1aXJlKFwiLi9zaW1wbGlmaWNhdGlvbnMvT3JkZXJTdW1zXCIpO1xuY29uc3QgUG93ZXJSdWxlXzEgPSByZXF1aXJlKFwiLi9zaW1wbGlmaWNhdGlvbnMvUG93ZXJSdWxlXCIpO1xuY29uc3QgUHJvZHVjdFJ1bGVfMSA9IHJlcXVpcmUoXCIuL3NpbXBsaWZpY2F0aW9ucy9Qcm9kdWN0UnVsZVwiKTtcbmNvbnN0IFB1bGxDb25zdGFudHNGcm9tRGVyaXZhdGl2ZXNfMSA9IHJlcXVpcmUoXCIuL3NpbXBsaWZpY2F0aW9ucy9QdWxsQ29uc3RhbnRzRnJvbURlcml2YXRpdmVzXCIpO1xuY29uc3QgUXVvdGllbnRSdWxlXzEgPSByZXF1aXJlKFwiLi9zaW1wbGlmaWNhdGlvbnMvUXVvdGllbnRSdWxlXCIpO1xuY29uc3QgU3VtQ29lZmZpY2llbnRzT2ZBZGRlZFRlcm1zXzEgPSByZXF1aXJlKFwiLi9zaW1wbGlmaWNhdGlvbnMvU3VtQ29lZmZpY2llbnRzT2ZBZGRlZFRlcm1zXCIpO1xuY29uc3QgVVN1YnN0aXR1dGlvbl8xID0gcmVxdWlyZShcIi4vc2ltcGxpZmljYXRpb25zL1VTdWJzdGl0dXRpb25cIik7XG4vKipcbiAqIEhvbGRzIGEgc2luZ2xlIGdyYXBoIGFuZCBleHBhbmRzIGl0IHVzaW5nIHJ1bGVzLlxuICovXG5jbGFzcyBEZXJpdmVyIHtcbiAgICAvKipcbiAgICAgKiBHaXZlIGl0IHRoZSBncmFwaCB5b3UncmUgZ29pbmcgdG8gZXhwYW5kLlxuICAgICAqIEBwYXJhbSBncmFwaFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGdyYXBoKSB7XG4gICAgICAgIHRoaXMuZ3JhcGggPSBncmFwaDtcbiAgICAgICAgdGhpcy5zaW1wbGlmaWVkSW5Jc29sYXRpb24gPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMubm90U2ltcGxpZmlhYmxlID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFeHBhbmRzIHRoZSBncmFwaCBhcmJpdHJhcmlseS5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIHN0aWxsIHBvb3JseSBkZWZpbmVkLFxuICAgICAqIHZlcnkgZXhwZXJlbWVudGFsLlxuICAgICAqL1xuICAgIGV4cGFuZCgpIHtcbiAgICAgICAgLy8gU2ltcGxpZnkgYWxsIHRoZSBleHByZXNzaW9ucyB1c2luZyB0aGUgY29udGV4dGxlc3Mgc2ltcGxpZnlpbmcgcnVsZXNcbiAgICAgICAgLy8gRG8gdGhpcyB1bnRpbCB0aGVyZSdzIG5vdGhpbmcgbW9yZSB0byBzaW1wbGlmeVxuICAgICAgICB0aGlzLnNpbXBsaWZ5Tm9Db250ZXh0KCk7XG4gICAgICAgIHRoaXMuc2ltcGxpZnlOb0NvbnRleHQoKTtcbiAgICAgICAgdGhpcy5zaW1wbGlmeU5vQ29udGV4dCgpO1xuICAgICAgICB0aGlzLnNpbXBsaWZ5Tm9Db250ZXh0KCk7XG4gICAgICAgIHRoaXMuc2ltcGxpZnlOb0NvbnRleHQoKTtcbiAgICAgICAgdGhpcy5zaW1wbGlmeU5vQ29udGV4dCgpO1xuICAgICAgICB0aGlzLnNpbXBsaWZ5Tm9Db250ZXh0KCk7XG4gICAgICAgIHRoaXMuc2ltcGxpZnlOb0NvbnRleHQoKTtcbiAgICAgICAgdGhpcy5zaW1wbGlmeU5vQ29udGV4dCgpO1xuICAgICAgICB0aGlzLnNpbXBsaWZ5Tm9Db250ZXh0KCk7XG4gICAgICAgIHRoaXMuc2ltcGxpZnlOb0NvbnRleHQoKTtcbiAgICAgICAgdGhpcy5zaW1wbGlmeU5vQ29udGV4dCgpO1xuICAgICAgICAvL3RoaXMuYWxnZWJyYWljRXhwYW5zaW9uKClcbiAgICAgICAgLy90aGlzLmFsZ2VicmFpY0V4cGFuc2lvbigpXG4gICAgICAgIC8vdGhpcy5zaW1wbGlmeU5vQ29udGV4dCgpXG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IG1ha2VzIHN1cmUgdGhhdCBldmVyeSBub2RlIGluIHRoZSBncmFwaFxuICAgICAqIGlzIGVpdGhlciBzaW1wbGlmaWVkIChtZWFuaW5nIHRoZXJlIGlzIG5vIGNvbnRleHRsZXNzXG4gICAgICogcnVsZSB0aGF0IGNhbiBzaW1wbGlmeSBpdCBmdXJ0aGVyKSBvciBpcyBtYXJrZWQgZG93blxuICAgICAqIGFzIHVuc2ltcGxpZmlhYmxlLlxuICAgICAqL1xuICAgIHNpbXBsaWZ5Tm9Db250ZXh0KCkge1xuICAgICAgICBjb25zdCB1bnNpbXBsaWZpZWQgPSBbLi4udGhpcy5ncmFwaC5nZXROb2RlcygpXS5maWx0ZXIobiA9PiBuIGluc3RhbmNlb2YgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24pXG4gICAgICAgICAgICAubWFwKG4gPT4gbilcbiAgICAgICAgICAgIC5maWx0ZXIoZSA9PiAhdGhpcy5zaW1wbGlmaWVkSW5Jc29sYXRpb24uaGFzKGUpKTtcbiAgICAgICAgdW5zaW1wbGlmaWVkLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNpbXBsaWZpZWRJbklzb2xhdGlvbi5hZGQoZSk7XG4gICAgICAgICAgICAvLyBUcnkgdG8gZmluZCBlcXVpdmFsZW50cyB1c2luZyBldmVyeSBzZXQgb2YgcnVsZXMuXG4gICAgICAgICAgICAvLyBJZiBhIHNldCBmaW5kcyBlcXVpdmFsZW50cywgbW92ZSBvbiB0byB0aGUgbmV4dFxuICAgICAgICAgICAgLy8gZXhwcmVzc2lvbiBpbnN0ZWFkIG9mIHRyeWluZyBsYXRlciBydWxlcyB0byBzYXZlXG4gICAgICAgICAgICAvLyB0aW1lLlxuICAgICAgICAgICAgZm9yIChjb25zdCBydWxlcyBvZiBzaW1wbGlmaWNhdGlvbk9yZGVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVyaXZlZFNpbXBsaWZpY2F0aW9ucyA9ICgwLCByZWN1cnNpb25fMS5lcXVpdikoZSwgZXF1aXZhbGVudHNGblVzaW5nKHJ1bGVzKSk7XG4gICAgICAgICAgICAgICAgaWYgKGRlcml2ZWRTaW1wbGlmaWNhdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBkZXJpdmVkU2ltcGxpZmljYXRpb25zLmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoLmFkZEFyZ3VtZW50KGEpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBUbyBuZXh0IGV4cHJlc3Npb25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBub25lIG9mIHRoZSBydWxlcyB3ZSBoYXZlIHdvcmtlZCwgdGhlIGV4cHJlc3Npb24gaXNuJ3Qgc2ltcGxpZmlhYmxlLlxuICAgICAgICAgICAgdGhpcy5ub3RTaW1wbGlmaWFibGUuYWRkKGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy9pZiAodW5zaW1wbGlmaWVkLmxlbmd0aCA+IDApIHRoaXMuc2ltcGxpZnlOb0NvbnRleHQoKVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBFeHBhbmRzIHRoZSBncmFwaCB1c2luZyBhbGdlYnJhIHJ1bGVzLlxuICAgICAqIE9ubHkgc2ltcGxpZmllZCBydWxlcyBhcmUgdXNlZC5cbiAgICAgKi9cbiAgICBhbGdlYnJhaWNFeHBhbnNpb24oKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVzID0gWy4uLlJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZV8xLlJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZS5ydWxlc107XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBbLi4uR3JhcGhNaW5pcHVsYXRvcl8xLkdyYXBoTWluaXB1bGF0b3IuZ2V0Q29tcG9uZW50Tm9kZXModGhpcy5ncmFwaCwgZWRnZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChlZGdlIGluc3RhbmNlb2YgQXJndW1lbnRfMS5Bcmd1bWVudCAmJiBlZGdlLnJlbGF0aW9uc2hpcCA9PSBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwpXG4gICAgICAgICAgICAgICAgICAgIHx8IChlZGdlIGluc3RhbmNlb2YgR3JhcGhfMS5HaXZlbkVkZ2UgJiYgZWRnZS5yID09IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCk7XG4gICAgICAgICAgICB9KV07XG4gICAgICAgIGNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXF1YXRpb24gPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uICYmIHRoaXMubm90U2ltcGxpZmlhYmxlLmhhcyhub2RlKSlcbiAgICAgICAgICAgICAgICAgICAgZXF1YXRpb24ucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJ1bGVzLmZvckVhY2gociA9PiB7XG4gICAgICAgICAgICAgICAgci5hcHBseSgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoLi4uZXF1YXRpb24pKS5mb3JFYWNoKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoLmFkZEFyZ3VtZW50KGEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBncmFwaDtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIGV4cHJlc3Npb24gaXMgaW4gdGhlIGdyYXBoXG4gICAgICogYW5kIGhhcyBhbHJlYWR5IGhhZCB0aGUgY29udGV4dGxlc3Mgc2ltcGxpZmljYXRpb24gb3BlcmF0aW9uc1xuICAgICAqIGRvbmUgdG8gaXQgYW5kIGNhbm5vdCBiZSBmdXJ0aGVyIHNpbXBsaWZpZWQuXG4gICAgICovXG4gICAgaXNTaW1wbGlmaWVkKGV4cCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RTaW1wbGlmaWFibGUuaGFzKGV4cCk7XG4gICAgfVxuICAgIC8vIEEgc2V0IG9mIG5vZGVzIGluIHRoZSBncmFwaCB3aGljaCBoYXZlIGhhZCBhbGwgc2ltcGxpZmljYXRpb24gXG4gICAgLy8gb3BlcmF0aW9ucyBkb25lIHRvIHRoZW0uXG4gICAgc2ltcGxpZmllZEluSXNvbGF0aW9uO1xuICAgIC8vIFRoZSBzZXQgb2Ygbm9kZXMgaW4gdGhlIGdyYXBoIHRoYXQgaGF2ZSBoYWQgY29udGV4dGxlc3NcbiAgICAvLyBzaW1wbGlmaWNhdGlvbiBvcGVyYXRpb25zIHJ1biBvbiB0aGVtIGFuZCBhcmVuJ3QgZnVydGhlclxuICAgIC8vIHNpbXBsaWZpYWJsZVxuICAgIG5vdFNpbXBsaWZpYWJsZTtcbn1cbmV4cG9ydHMuRGVyaXZlciA9IERlcml2ZXI7XG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgbWFrZXMgYSBmdW5jdGlvbiB0aGF0IGdldHMgdGhlIGVxdWl2YWxlbnRcbiAqIGV4cHJlc3Npb25zIGZvciBhIGdpdmVuIG9uZS5cbiAqIEBwYXJhbSBydWxlcyBXaGF0IHJ1bGVzIHRoZSByZXN1bHRpbmcgZnVuY3Rpb24gc2hvdWxkIHVzZSB0b1xuICogICAgICBmaW5kIGVxdWl2YWxlbnRzLlxuICogQHJldHVybnMgQSBmdW5jdGlvbiB3aGljaCB3aWxsIHVzZSB0aGUgZ2l2ZW4gcnVsZXMgdG9cbiAqICAgICAgZmluZCBkaXJlY3QgZXF1aXZhbGVudHMuXG4gKi9cbmZ1bmN0aW9uIGVxdWl2YWxlbnRzRm5Vc2luZyhydWxlcykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXhwKSB7XG4gICAgICAgIGNvbnN0IG91dCA9IG5ldyBTZXQoKTtcbiAgICAgICAgcnVsZXMuZmlsdGVyKHIgPT4gci5hcHBsaWVzKGV4cCkpLmZvckVhY2gocnVsZSA9PiB7XG4gICAgICAgICAgICBydWxlLmFwcGx5KGV4cCkuZm9yRWFjaChpID0+IHtcbiAgICAgICAgICAgICAgICBvdXQuYWRkKGkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH07XG59XG4vKipcbiAqIDEgaW5wdXQsIDEgb3V0cHV0XG4gKi9cbmNvbnN0IGlkZW50aXR5UnVsZXMgPSBbXG4gICAgbmV3IE11bHRpcGxpY2F0aXZlSWRlbnRpdHlfMS5NdWx0aXBsaWNhdGl2ZUlkZW50aXR5KCksXG4gICAgbmV3IEV4cG9uZW50aWFsSWRlbnRpdHlfMS5FeHBvbmVudGlhbElkZW50aXR5KCksXG4gICAgbmV3IERpdmlzaW9uSWRlbnRpdHlfMS5EaXZpc2lvbklkZW50aXR5KCksXG4gICAgbmV3IEFkZGl0aXZlSWRlbnRpdHlfMS5BZGRpdGl2ZUlkZW50aXR5KCksXG4gICAgbmV3IEV4cG9uZW50VG9aZXJvXzEuRXhwb25lbnRUb1plcm8oKSxcbl07XG4vKipcbiAqIDEgaW5wdXQsIDEgb3V0cHV0XG4gKi9cbmNvbnN0IGJlYXV0aWZ5aW5nUnVsZXMgPSBbXG4gICAgbmV3IE9yZGVyU3Vtc18xLk9yZGVyU3VtcygpLFxuXTtcbi8qKlxuICogMSBpbnB1dCwgMSBvdXRwdXRcbiAqL1xuY29uc3QgZXZhbHVhdGl2ZVJ1bGVzID0gW1xuICAgIG5ldyBFdmFsdWF0ZVN1bXNfMS5FdmFsdWF0ZVN1bXMoKSxcbiAgICBuZXcgQ2FuY2VsTmVnYXRpdmVzXzEuQ2FuY2VsTmVnYXRpdmVzKCksXG4gICAgbmV3IENvbWJpbmVJbnRlZ2VyRmFjdG9yc18xLkNvbWJpbmVJbnRlZ2VyRmFjdG9ycygpLFxuXTtcbmNvbnN0IGNvbWJpbmF0b3JpY1J1bGVzID0gW1xuICAgIG5ldyBTdW1Db2VmZmljaWVudHNPZkFkZGVkVGVybXNfMS5TdW1Db2VmZmljaWVudHNPZkFkZGVkVGVybXMoKSxcbiAgICBuZXcgQ29tYmluZUNvbW1vblRlcm1zQWRkaXRpb25fMS5Db21iaW5lQ29tbW9uVGVybXNBZGRpdGlvbigpLFxuICAgIG5ldyBDb21iaW5lQ29tbW9uRmFjdG9yc011bHRpcGxpY2F0aW9uXzEuQ29tYmluZUNvbW1vbkZhY3RvcnNNdWx0aXBsaWNhdGlvbigpLFxuICAgIG5ldyBNdWx0aXBseUV4cG9uZW50UG93ZXJzXzEuTXVsdGlwbHlFeHBvbmVudFBvd2VycygpLFxuXTtcbmNvbnN0IHJlbWFpbmluZ05vQ29udGV4dFNpbXBsaWZpY2F0aW9uUnVsZXMgPSBbXG4gICAgbmV3IFVTdWJzdGl0dXRpb25fMS5VU3Vic3RpdHV0aW9uKCksXG4gICAgbmV3IFBvd2VyUnVsZV8xLlBvd2VyUnVsZSgpLFxuICAgIG5ldyBQdWxsQ29uc3RhbnRzRnJvbURlcml2YXRpdmVzXzEuUHVsbENvbnN0YW50c0Zyb21EZXJpdmF0aXZlcygpLFxuICAgIG5ldyBBc3NvY2lhdGl2ZVByb3BlcnR5T2ZQcm9kdWN0c0FuZFN1bXNfMS5Bc3NvY2lhdGl2ZVByb3BlcnR5T2ZQcm9kdWN0c0FuZFN1bXMoKSxcbiAgICBuZXcgUHJvZHVjdFJ1bGVfMS5Qcm9kdWN0UnVsZSgpLFxuICAgIG5ldyBRdW90aWVudFJ1bGVfMS5RdW90aWVudFJ1bGUoKSxcbiAgICBuZXcgRGl2aWRlRnJhY3Rpb25zXzEuRGl2aWRlRnJhY3Rpb25zKCksXG5dO1xuLyoqXG4gKiBBIGxpc3Qgb2YgbGlzdHMgb2Ygc2ltcGxpZmljYXRpb24gcnVsZXMuXG4gKiBFYXJsaWVyIGxpc3RzIHNob3VsZCBiZSB0cmllZCBmaXJzdC5cbiAqIElmIGFuZCBvbmx5IGlmIGFuIGVhcmxpZXIgbGlzdCBmYWlscyB0b1xuICogcHJvZHVjZSBlcXVpdmFsZW50IGV4cHJlc3Npb25zIHNob3VsZCBsYXRlciBsaXN0c1xuICogYmUgdXNlZC5cbiAqL1xuY29uc3Qgc2ltcGxpZmljYXRpb25PcmRlciA9IFtcbiAgICBpZGVudGl0eVJ1bGVzLFxuICAgIGJlYXV0aWZ5aW5nUnVsZXMsXG4gICAgZXZhbHVhdGl2ZVJ1bGVzLFxuICAgIGNvbWJpbmF0b3JpY1J1bGVzLFxuICAgIHJlbWFpbmluZ05vQ29udGV4dFNpbXBsaWZpY2F0aW9uUnVsZXMsXG5dO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUgPSB2b2lkIDA7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2Fzc2VydFwiKTtcbi8qKlxuICogQSBydWxlIHRoYXQgdGFrZXMgYW4gZXhwcmVzc2lvbiBhbmQgcHJvZHVjZXMgYW4gZXF1aXZhbGVudCBleHByZXNzaW9uLlxuICogRXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZXMgY2FuIHVzZSByZWZsZWN0aW9uIHRvIGRldGVybWluZSB3aGF0XG4gKiB0eXBlIG9mIGV4cHJlc3Npb24gdGhleSdyZSBnaXZlbiwgYnV0IHNob3VsZCB1c2UgZXhwcmVzc2lvbiBzcGVjaWZpY1xuICogZnVuY3Rpb25zIG9uIHN1Yi1leHByZXNzaW9ucy4gVGhlc2UgcnVsZXMgd2lsbCBiZSByZWN1cnNpdmVseSB1c2VkXG4gKiB0byBkZXJpdmUgc2ltcGxpZmllZCBleHByZXNzaW9ucy5cbiAqXG4gKiBUaGVzZSBydWxlcyBhcmUgYWxzbyBjb250ZXh0bGVzczogdGhleSdyZSBvbmx5IGdpdmVuIHRoZSBleHByZXNzaW9uLFxuICogbm8gb3RoZXIgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHByb2JsZW0uXG4gKi9cbmNsYXNzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGlzIHJ1bGUgY2FuIGZpbmQgZXF1aXZhbGVudHMgZm9yIHRoZVxuICAgICAqIGdpdmVuIGV4cHJlc3Npb24uIE9ubHkgY2FsbCBhcHBseSgpIGlmIHRydWUuXG4gICAgICovXG4gICAgYXBwbGllcyhleHApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwbGllc0ltcGwoZXhwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvZHVjZXMgYSBzZXQgb2YgZXhwcmVzc2lvbnMgdGhhdCBhcmUgZXF1aXZhbGVudCB0b1xuICAgICAqIHRoZSBnaXZlbiBvbmUuIE9ubHkgY2FsbCBpZiB0aGUgZ2l2ZW4gZXhwcmVzc2lvblxuICAgICAqIHBhc3NlZCB0aGUgYXBwbGllcygpIHRlc3QuXG4gICAgICogQHBhcmFtIGV4cCBUaGUgZXhwcmVzc2lvbiB0byBmaW5kIGFuIGVxdWl2YWxlbnQgZm9yLlxuICAgICAqIEByZXR1cm5zIFNldCBvZiBlcXVpdmFsZW50IGV4cHJlc3Npb25zLCBub3QgaW5jbHVkaW5nIHRoZSBnaXZlbiBvbmUuXG4gICAgICovXG4gICAgYXBwbHkoZXhwKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgb24gXCIgKyBleHAudG9TdHJpbmcoKSlcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5hcHBseUltcGwoZXhwKTtcbiAgICAgICAgcmVzdWx0LmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KShlICE9IG51bGwgJiYgZSAhPSB1bmRlZmluZWQpO1xuICAgICAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkoZS5jbGFpbS5uMSAhPT0gZXhwLCBcIlJ1bGUgXCIgKyB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiBwcm9kdWNlZCByZXN1bHQgZXF1aXZhbGVudCB0byBncm91bmRcIik7XG4gICAgICAgICAgICAvL2lmICh0aGlzLmNvbnN0cnVjdG9yLm5hbWUgPT0gXCJDb21iaW5lQ29tbW9uVGVybXNNdWx0aXBsaWNhdGlvblwiKVxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmNvbnN0cnVjdG9yLm5hbWUgKyBleHAudG9TdHJpbmcoKSArIFwiXFxuIC0+IFwiICsgZS5jbGFpbS5uMS50b1N0cmluZygpKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5leHBvcnRzLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUgPSBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZSA9IHZvaWQgMDtcbi8qKlxuICogUHJvZHVjZXMgdHJ1dGhzIGZyb20gYSBzZXQgb2YgZXF1aXZhbGVudCBleHByZXNzaW9ucy5cbiAqL1xuY2xhc3MgUmVsYXRpb25hbERlcml2YXRpb25SdWxlIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlcXVhdGlvbiBBIHNldCBvZiBleHByZXNzaW9ucyB3aGljaCBhcmUgZXF1YWwuXG4gICAgICovXG4gICAgYXBwbHkoZXF1YXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwbHlJbXBsKGVxdWF0aW9uKTtcbiAgICB9XG4gICAgc3RhdGljIHJ1bGVzID0gbmV3IFNldCgpO1xufVxuZXhwb3J0cy5SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGUgPSBSZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRGl2aWRlT25Cb3RoU2lkZXMgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL1Byb2R1Y3RcIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi8uLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBSZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGVcIik7XG5jbGFzcyBEaXZpZGVPbkJvdGhTaWRlcyBleHRlbmRzIFJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZV8xLlJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZSB7XG4gICAgYXBwbHlJbXBsKGVxdWF0aW9uKSB7XG4gICAgICAgIGNvbnN0IG91dCA9IFtdO1xuICAgICAgICBjb25zdCBjb21iaW5hdGlvbnMgPSBjYXJ0ZXNpYW5Qcm9kdWN0KGVxdWF0aW9uKTtcbiAgICAgICAgY29tYmluYXRpb25zLmZpbHRlcihwYWlyID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwYWlyWzBdIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3Q7XG4gICAgICAgIH0pLmZvckVhY2gocGFpciA9PiB7XG4gICAgICAgICAgICBjb25zdCBwID0gcGFpclswXTtcbiAgICAgICAgICAgIGNvbnN0IG90aGVyID0gcGFpclsxXTtcbiAgICAgICAgICAgIC8vIFNvbWUgcHJvZHVjdHMgaGF2ZSBtdWx0aXBsZSBmYWN0b3JzXG4gICAgICAgICAgICBwLmZhY3RvcnMuZm9yRWFjaChmYWN0b3IgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzZWNvbmQ7XG4gICAgICAgICAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3QpIHtcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kID0gWy4uLm90aGVyLmZhY3RvcnNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kID0gW290aGVyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgY2xhaW0gPSB7IG46IHAud2l0aG91dChmYWN0b3IpLCBuMTogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmZyYWN0aW9uKSgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdE9yTm90KSguLi5zZWNvbmQpLCBmYWN0b3IpLCByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwgfTtcbiAgICAgICAgICAgICAgICBvdXQucHVzaChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudChuZXcgU2V0KFtwLCBvdGhlcl0pLCBjbGFpbSwgXCJhPWIgJiBjPWQgPT4gYS9jID0gYi9kXCIpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG59XG5leHBvcnRzLkRpdmlkZU9uQm90aFNpZGVzID0gRGl2aWRlT25Cb3RoU2lkZXM7XG4vKipcbiAqIEdldHMgdGhlIGFudGktcmVmbGV4aXZlIGNsb3N1cmUgb2YgdGhlIHJlbGF0aW9uIEEgeCBBLlxuICogSXQncyBzeW1tZXRyaWMgYW5kIHRyYW5zaXRpdmUuXG4gKlxuICogQHBhcmFtIHNldFxuICovXG5mdW5jdGlvbiBjYXJ0ZXNpYW5Qcm9kdWN0KHNldCkge1xuICAgIGNvbnN0IG91dCA9IFtdO1xuICAgIGZvciAoY29uc3QgZmlyc3Qgb2Ygc2V0KSB7XG4gICAgICAgIGZvciAoY29uc3Qgc2Vjb25kIG9mIHNldCkge1xuICAgICAgICAgICAgaWYgKGZpcnN0ID09PSBzZWNvbmQpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBvdXQucHVzaChbZmlyc3QsIHNlY29uZF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU3VidHJhY3RGcm9tQm90aFNpZGVzID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9Qcm9kdWN0XCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvU3VtXCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgUmVsYXRpb25hbERlcml2YXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vUmVsYXRpb25hbERlcml2YXRpb25SdWxlXCIpO1xuY2xhc3MgU3VidHJhY3RGcm9tQm90aFNpZGVzIGV4dGVuZHMgUmVsYXRpb25hbERlcml2YXRpb25SdWxlXzEuUmVsYXRpb25hbERlcml2YXRpb25SdWxlIHtcbiAgICBhcHBseUltcGwoZXF1YXRpb24pIHtcbiAgICAgICAgY29uc3Qgb3V0ID0gW107XG4gICAgICAgIGNvbnN0IGNvbWJpbmF0aW9ucyA9IGNhcnRlc2lhblByb2R1Y3QoZXF1YXRpb24pO1xuICAgICAgICAvLyBJZiBvbmUgaXMgYWRkaXRpb24sIHN1YnRyYWN0IGZyb20gYm90aCBzaWRlc1xuICAgICAgICAvLyBIZXJlIHdlIGZpbHRlciBzbyB0aGF0IG9ubHkgcGFpcnMgd2hlcmUgdGhlIGZpcnN0IGV4cHJlc3Npb24gaXNcbiAgICAgICAgLy8gYSBzdW0gYXJlIG9wZXJhdGVkIG9uLiBUaGlzIHdvcmtzIGJlY2F1c2UgY29tYmluYXRpb25zIGlzIHN5bWV0cmljLlxuICAgICAgICAvLyBOb3cgZm9yIGVhY2ggcGFpciB3ZSBvbmx5IGhhdmUgdG8gZGVhbCB3aXRoIHRoZSBmaXJzdCBleHAgYmVpbmcgc3VtLlxuICAgICAgICBjb21iaW5hdGlvbnMuZmlsdGVyKHBhaXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHBhaXJbMF0gaW5zdGFuY2VvZiBTdW1fMS5TdW07XG4gICAgICAgIH0pLmZvckVhY2gocGFpciA9PiB7XG4gICAgICAgICAgICBjb25zdCBzID0gcGFpclswXTtcbiAgICAgICAgICAgIGNvbnN0IG90aGVyID0gcGFpclsxXTtcbiAgICAgICAgICAgIC8vIFNvbWUgU3VtcyBoYXZlIG11bHRpcGxlIHRlcm1zXG4gICAgICAgICAgICBzLnRlcm1zLmZpbHRlcih0ZXJtID0+ICEodGVybSBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0ICYmIHRlcm0uaXNOZWdhdGlvbikpXG4gICAgICAgICAgICAgICAgLmZvckVhY2godGVybSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgb3RoZXIgaXMgaXRzZWxmIGEgc3VtLCB3ZSB3aWxsIGJyZWFrIGl0IGFwYXJ0XG4gICAgICAgICAgICAgICAgLy8gaW50byB0ZXJtcyBzbyB0aGF0IHdlIGNhbiBjb21iaW5lIGludGVnZXIgdGVybXMgaW4gdGhlXG4gICAgICAgICAgICAgICAgLy8gZmluYWwgcmVzdWx0IGFuZCBhdm9pZFxuICAgICAgICAgICAgICAgIC8vIHggKyAyICsgMiA9IHkgKyAyID0+IHggKyAyID0geSArIDIgLSAyXG4gICAgICAgICAgICAgICAgLy8gTm90ZTogV2Ugb25seSBkbyB0aGlzIHRvIGludGVnZXIgdGVybXMsIGJlY2F1c2UgdGhhdCdzXG4gICAgICAgICAgICAgICAgLy8gc28gb2J2aW91cyBhbmQgY291bGRuJ3QgcG9zc2libHkgbmVlZCB0byBiZSBleHBsYWluZWQgZnVydGhlci5cbiAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCBkbyBpdCB0byB2YXJpYWJsZSB0ZXJtcy4gVGhlIGZvbGxvd2luZyBpcyBjb3JyZWN0IGJlaGF2aW9yOlxuICAgICAgICAgICAgICAgIC8vIHggKyBhICsgYSA9IHkgKyBhID0+IHggKyBhID0geSArIGEgLSBhXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBkaXN0aW5jdGlvbiBpcyBkZWJhdGFibGUuIFdoeSBzaG91bGRuJ3QgdGhlIGxlZnQgaGFuZFxuICAgICAgICAgICAgICAgIC8vIG9mIHRoZSBsYXN0IGRlZHVjdGlvbiBiZSB4ICsgYSArIGEgLSBhPyBCeSBkb2luZyB0aGlzLCBcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm9kdWNlIGEgbXVjaCBtb3JlIGNvbXBsaWNhdGVkIGFuZCBleHBlbnNpdmUgZ3JhcGguIFxuICAgICAgICAgICAgICAgIGxldCBzZWNvbmQ7XG4gICAgICAgICAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgU3VtXzEuU3VtKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZCA9IFsuLi5vdGhlci50ZXJtc107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWNvbmQgPSBbb3RoZXJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBjbGFpbSA9IHsgbjogcy53aXRob3V0KHRlcm0pLCBuMTogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bUludHVpdGl2ZSkoLi4uc2Vjb25kLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubmVnYXRpdmUpKHRlcm0pKSwgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsIH07XG4gICAgICAgICAgICAgICAgb3V0LnB1c2gobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQobmV3IFNldChbcywgb3RoZXJdKSwgY2xhaW0sIFwiYT1iICYgYz1kID0+IGEtYyA9IGItZFwiKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxufVxuZXhwb3J0cy5TdWJ0cmFjdEZyb21Cb3RoU2lkZXMgPSBTdWJ0cmFjdEZyb21Cb3RoU2lkZXM7XG4vKipcbiAqIEdldHMgdGhlIGFudGktcmVmbGV4aXZlIGNsb3N1cmUgb2YgdGhlIHJlbGF0aW9uIEEgeCBBLlxuICogSXQncyBzeW1tZXRyaWMgYW5kIHRyYW5zaXRpdmUuXG4gKlxuICogQHBhcmFtIHNldFxuICovXG5mdW5jdGlvbiBjYXJ0ZXNpYW5Qcm9kdWN0KHNldCkge1xuICAgIGNvbnN0IG91dCA9IFtdO1xuICAgIGZvciAoY29uc3QgZmlyc3Qgb2Ygc2V0KSB7XG4gICAgICAgIGZvciAoY29uc3Qgc2Vjb25kIG9mIHNldCkge1xuICAgICAgICAgICAgaWYgKGZpcnN0ID09PSBzZWNvbmQpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBvdXQucHVzaChbZmlyc3QsIHNlY29uZF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZXF1aXYgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgRGVyaXZhdGl2ZV8xID0gcmVxdWlyZShcIi4uL2V4cHJlc3Npb25zL0Rlcml2YXRpdmVcIik7XG5jb25zdCBFeHBvbmVudF8xID0gcmVxdWlyZShcIi4uL2V4cHJlc3Npb25zL0V4cG9uZW50XCIpO1xuY29uc3QgRnJhY3Rpb25fMSA9IHJlcXVpcmUoXCIuLi9leHByZXNzaW9ucy9GcmFjdGlvblwiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuLi9leHByZXNzaW9ucy9JbnRlZ2VyXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4uL2V4cHJlc3Npb25zL1Byb2R1Y3RcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuLi9leHByZXNzaW9ucy9TdW1cIik7XG5jb25zdCBWYXJpYWJsZV8xID0gcmVxdWlyZShcIi4uL2V4cHJlc3Npb25zL1ZhcmlhYmxlXCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuLyoqXG4gKiBHZXRzIGFsbCBlcXVpdmFsZW50cyBvZiB0aGUgZ2l2ZW4gZXhwcmVzc2lvblxuICogY2hlY2tpbmcgaXQncyBjaGlsZHJlbidzIGVxdWl2YWxlbnRzLlxuICpcbiAqIChhICsgYSkgKyAoYiArIGIpXG4gKiAtPiAoMmEpICsgKGIgKyBiKSB3aXRoIGluZmVyZW5jZSBhICsgYSA9IDJhXG4gKiBAcGFyYW0gZXhwXG4gKiBAcGFyYW0gZGlyZWN0RXF1aXZhbGVudHMgRnVuY3Rpb24gdGhhdCB3aWxsIHByb2R1Y2UgZXF1aXZhbGVudCBleHByZXNzaW9uc1xuICogICAgICAgIHdpdGhvdXQgcmVjdXJzaW9uLlxuICogQHJldHVybnMgQXJyYXkgb2YgaW5mZXJlbmNlcyB0byBlcXVpdmFsZW50IGV4cHJlc3Npb25zLlxuICovXG5mdW5jdGlvbiBlcXVpdihleHAsIGRpcmVjdEVxdWl2YWxlbnRzKSB7XG4gICAgaWYgKGV4cCBpbnN0YW5jZW9mIFZhcmlhYmxlXzEuVmFyaWFibGUgfHwgZXhwIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpXG4gICAgICAgIHJldHVybiBbXTtcbiAgICBlbHNlXG4gICAgICAgIHN3aXRjaCAoZXhwLmNsYXNzKSB7XG4gICAgICAgICAgICBjYXNlIFN1bV8xLlN1bVR5cGU6IHJldHVybiBzdW1FcXVpdihleHAsIGRpcmVjdEVxdWl2YWxlbnRzKTtcbiAgICAgICAgICAgIGNhc2UgUHJvZHVjdF8xLlByb2R1Y3RUeXBlOiByZXR1cm4gcHJvZHVjdEVxdWl2KGV4cCwgZGlyZWN0RXF1aXZhbGVudHMpO1xuICAgICAgICAgICAgY2FzZSBFeHBvbmVudF8xLkV4cG9uZW50VHlwZTogcmV0dXJuIGV4cG9uZW50RXF1aXYoZXhwLCBkaXJlY3RFcXVpdmFsZW50cyk7XG4gICAgICAgICAgICBjYXNlIEZyYWN0aW9uXzEuRnJhY3Rpb25UeXBlOiByZXR1cm4gZnJhY3Rpb25FcXVpdihleHAsIGRpcmVjdEVxdWl2YWxlbnRzKTtcbiAgICAgICAgICAgIGNhc2UgRGVyaXZhdGl2ZV8xLkRlcml2YXRpdmVUeXBlOiByZXR1cm4gZGVyaXZhdGl2ZUVxdWl2KGV4cCwgZGlyZWN0RXF1aXZhbGVudHMpO1xuICAgICAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIGZvciBcIiArIGV4cC5jbGFzcyk7XG4gICAgICAgIH1cbn1cbmV4cG9ydHMuZXF1aXYgPSBlcXVpdjtcbi8qKlxuICogR2V0cyBhbGwgZXF1aXZhbGVudHMgb2YgdGhlIGdpdmVuIGV4cHJlc3Npb25cbiAqIGJ5IHN3YXBwaW5nIG91dCBpdCdzIGNoaWxkcmVuIGluZGl2aWR1YWxseS5cbiAqXG4gKiAoYSArIGEpICsgKGIgKyBiKVxuICogLT4gKDJhKSArIChiICsgYikgd2l0aCBpbmZlcmVuY2UgYSArIGEgPSAyYVxuICogQHBhcmFtIGV4cFxuICogQHJldHVybnMgQXJyYXkgb2YgaW5mZXJlbmNlcyB0byBlcXVpdmFsZW50IGV4cHJlc3Npb25zLlxuICovXG5mdW5jdGlvbiBzdW1FcXVpdihleHAsIGRpcmVjdEVxdWl2YWxlbnRzKSB7XG4gICAgY29uc3QgZXF1aXZhbGVudFN1bXMgPSBuZXcgU2V0KCk7XG4gICAgLy8gQWRkIHRvcCBsZXZlbCBlcXVpdmFsZW50c1xuICAgIGRpcmVjdEVxdWl2YWxlbnRzKGV4cCkuZm9yRWFjaChpbmYgPT4ge1xuICAgICAgICBlcXVpdmFsZW50U3Vtcy5hZGQoaW5mKTtcbiAgICB9KTtcbiAgICAvLyBGaW5kIGVxdWl2YWxlbnRzIGZvciBlYWNoIHRlcm1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4cC50ZXJtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0ZXJtID0gZXhwLnRlcm1zW2ldO1xuICAgICAgICAvLyBTdWJzdGl0dXRlIHRlcm0gZm9yIGVhY2ggZXF1aXZhbGVudFxuICAgICAgICBlcXVpdih0ZXJtLCBkaXJlY3RFcXVpdmFsZW50cykuZm9yRWFjaChhID0+IHtcbiAgICAgICAgICAgIGVxdWl2YWxlbnRTdW1zLmFkZChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICAgICAgbjE6IHN3YXAoZXhwLCBpLCBhLmNsYWltLm4xKVxuICAgICAgICAgICAgfSwgYS5hcmd1bWVudCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3dhcChzLCBpLCBlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1zID0gWy4uLnMudGVybXNdO1xuICAgICAgICB0ZXJtc1tpXSA9IGU7XG4gICAgICAgIHJldHVybiAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtKSguLi50ZXJtcyk7XG4gICAgfVxuICAgIHJldHVybiBbLi4uZXF1aXZhbGVudFN1bXNdO1xufVxuZnVuY3Rpb24gcHJvZHVjdEVxdWl2KGV4cCwgZGlyZWN0RXF1aXZhbGVudHMpIHtcbiAgICBjb25zdCBlcXVpdmFsZW50UHJvZHVjdHMgPSBuZXcgU2V0KCk7XG4gICAgLy8gQWRkIHRvcCBsZXZlbCBlcXVpdmFsZW50c1xuICAgIGRpcmVjdEVxdWl2YWxlbnRzKGV4cCkuZm9yRWFjaChpbmYgPT4ge1xuICAgICAgICBlcXVpdmFsZW50UHJvZHVjdHMuYWRkKGluZik7XG4gICAgfSk7XG4gICAgLy8gRmluZCBlcXVpdmFsZW50cyBmb3IgZWFjaCB0ZXJtXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleHAuZmFjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBmYWN0b3IgPSBleHAuZmFjdG9yc1tpXTtcbiAgICAgICAgLy8gU3Vic3RpdHV0ZSB0ZXJtIGZvciBlYWNoIGVxdWl2YWxlbnRcbiAgICAgICAgZXF1aXYoZmFjdG9yLCBkaXJlY3RFcXVpdmFsZW50cykuZm9yRWFjaChhbHQgPT4ge1xuICAgICAgICAgICAgZXF1aXZhbGVudFByb2R1Y3RzLmFkZChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICAgICAgbjE6IHN3YXAoZXhwLCBpLCBhbHQuY2xhaW0ubjEpLFxuICAgICAgICAgICAgfSwgYWx0LmFyZ3VtZW50KSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzd2FwKHMsIGksIGUpIHtcbiAgICAgICAgY29uc3QgdGVybXMgPSBbLi4ucy5mYWN0b3JzXTtcbiAgICAgICAgdGVybXNbaV0gPSBlO1xuICAgICAgICByZXR1cm4gKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3QpKC4uLnRlcm1zKTtcbiAgICB9XG4gICAgcmV0dXJuIFsuLi5lcXVpdmFsZW50UHJvZHVjdHNdO1xufVxuZnVuY3Rpb24gZXhwb25lbnRFcXVpdihleHAsIGRpcmVjdEVxdWl2YWxlbnRzKSB7XG4gICAgY29uc3QgZXF1aXZhbGVudHMgPSBuZXcgU2V0KCk7XG4gICAgLy8gQWRkIHRvcCBsZXZlbCBlcXVpdmFsZW50c1xuICAgIGRpcmVjdEVxdWl2YWxlbnRzKGV4cCkuZm9yRWFjaChpbmYgPT4ge1xuICAgICAgICBlcXVpdmFsZW50cy5hZGQoaW5mKTtcbiAgICB9KTtcbiAgICBlcXVpdihleHAuYmFzZSwgZGlyZWN0RXF1aXZhbGVudHMpLmZvckVhY2goYWx0ID0+IHtcbiAgICAgICAgZXF1aXZhbGVudHMuYWRkKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogRXhwb25lbnRfMS5FeHBvbmVudC5vZihhbHQuY2xhaW0ubjEsIGV4cC5wb3dlcilcbiAgICAgICAgfSwgYWx0LmFyZ3VtZW50KSk7XG4gICAgfSk7XG4gICAgZXF1aXYoZXhwLnBvd2VyLCBkaXJlY3RFcXVpdmFsZW50cykuZm9yRWFjaChhbHQgPT4ge1xuICAgICAgICBlcXVpdmFsZW50cy5hZGQobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgIG4xOiBFeHBvbmVudF8xLkV4cG9uZW50Lm9mKGV4cC5iYXNlLCBhbHQuY2xhaW0ubjEpLFxuICAgICAgICB9LCBhbHQuYXJndW1lbnQpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gWy4uLmVxdWl2YWxlbnRzXTtcbn1cbmZ1bmN0aW9uIGZyYWN0aW9uRXF1aXYoZXhwLCBkaXJlY3RFcXVpdmFsZW50cykge1xuICAgIGNvbnN0IGVxdWl2YWxlbnRzID0gbmV3IFNldCgpO1xuICAgIC8vIEFkZCB0b3AgbGV2ZWwgZXF1aXZhbGVudHNcbiAgICBkaXJlY3RFcXVpdmFsZW50cyhleHApLmZvckVhY2goaW5mID0+IHtcbiAgICAgICAgZXF1aXZhbGVudHMuYWRkKGluZik7XG4gICAgfSk7XG4gICAgZXF1aXYoZXhwLm51bWVyYXRvciwgZGlyZWN0RXF1aXZhbGVudHMpLmZvckVhY2goYWx0ID0+IHtcbiAgICAgICAgZXF1aXZhbGVudHMuYWRkKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihhbHQuY2xhaW0ubjEsIGV4cC5kZW5vbWluYXRvcilcbiAgICAgICAgfSwgYWx0LmFyZ3VtZW50KSk7XG4gICAgfSk7XG4gICAgZXF1aXYoZXhwLmRlbm9taW5hdG9yLCBkaXJlY3RFcXVpdmFsZW50cykuZm9yRWFjaChhbHQgPT4ge1xuICAgICAgICBlcXVpdmFsZW50cy5hZGQobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgIG4xOiBGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKGV4cC5udW1lcmF0b3IsIGFsdC5jbGFpbS5uMSksXG4gICAgICAgIH0sIGFsdC5hcmd1bWVudCkpO1xuICAgIH0pO1xuICAgIHJldHVybiBbLi4uZXF1aXZhbGVudHNdO1xufVxuZnVuY3Rpb24gZGVyaXZhdGl2ZUVxdWl2KGV4cCwgZGlyZWN0RXF1aXZhbGVudHMpIHtcbiAgICBjb25zdCBlcXVpdmFsZW50cyA9IG5ldyBTZXQoKTtcbiAgICAvLyBBZGQgdG9wIGxldmVsIGVxdWl2YWxlbnRzXG4gICAgZGlyZWN0RXF1aXZhbGVudHMoZXhwKS5mb3JFYWNoKGluZiA9PiB7XG4gICAgICAgIGVxdWl2YWxlbnRzLmFkZChpbmYpO1xuICAgIH0pO1xuICAgIGVxdWl2KGV4cC5leHAsIGRpcmVjdEVxdWl2YWxlbnRzKS5mb3JFYWNoKGFsdCA9PiB7XG4gICAgICAgIGVxdWl2YWxlbnRzLmFkZChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgbjE6IERlcml2YXRpdmVfMS5EZXJpdmF0aXZlLm9mKGFsdC5jbGFpbS5uMSwgZXhwLnJlbGF0aXZlVG8pXG4gICAgICAgIH0sIGFsdC5hcmd1bWVudCkpO1xuICAgIH0pO1xuICAgIGVxdWl2KGV4cC5yZWxhdGl2ZVRvLCBkaXJlY3RFcXVpdmFsZW50cykuZm9yRWFjaChhbHQgPT4ge1xuICAgICAgICBlcXVpdmFsZW50cy5hZGQobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgIG4xOiBEZXJpdmF0aXZlXzEuRGVyaXZhdGl2ZS5vZihleHAuZXhwLCBhbHQuY2xhaW0ubjEpLFxuICAgICAgICB9LCBhbHQuYXJndW1lbnQpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gWy4uLmVxdWl2YWxlbnRzXTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5BZGRpdGl2ZUlkZW50aXR5ID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9JbnRlZ2VyXCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvU3VtXCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG4vKipcbiAqIEFueXRoaW5nIHBsdXMgMCBpcyBhbnl0aGluZ1xuICovXG5jbGFzcyBBZGRpdGl2ZUlkZW50aXR5IGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gZXhwIGluc3RhbmNlb2YgU3VtXzEuU3VtO1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGNvbnN0IHRlcm1zV2l0aG91dFplcm8gPSBleHAudGVybXMuZmlsdGVyKHQgPT4gISh0IGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIgJiYgdC52YWx1ZSA9PSAwKSk7XG4gICAgICAgIGlmICh0ZXJtc1dpdGhvdXRaZXJvLmxlbmd0aCA9PSBleHAudGVybXMubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuICgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKSgpO1xuICAgICAgICByZXR1cm4gKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bU9yTm90KSguLi50ZXJtc1dpdGhvdXRaZXJvKVxuICAgICAgICB9LCBcIkFkZGl0aXZlIGlkZW50aXR5XCIpKTtcbiAgICB9XG59XG5leHBvcnRzLkFkZGl0aXZlSWRlbnRpdHkgPSBBZGRpdGl2ZUlkZW50aXR5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFzc29jaWF0aXZlUHJvcGVydHlPZlByb2R1Y3RzQW5kU3VtcyA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vQXJndW1lbnRcIik7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db252ZW5pZW50RXhwcmVzc2lvbnNcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvUHJvZHVjdFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL1N1bVwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9UaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYlwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuLyoqXG4gKiBGbGF0dGVucyBwcm9kdWN0cyBpbiBwcm9kdWN0cyBhbmQgc3VtcyBpbiBzdW1zXG4gKi9cbmNsYXNzIEFzc29jaWF0aXZlUHJvcGVydHlPZlByb2R1Y3RzQW5kU3VtcyBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGV4cCBpbnN0YW5jZW9mIFN1bV8xLlN1bSB8fCBleHAgaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdDtcbiAgICB9XG4gICAgYXBwbHlJbXBsKGV4cCkge1xuICAgICAgICBpZiAoZXhwIGluc3RhbmNlb2YgU3VtXzEuU3VtKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdUZXJtcyA9IGV4cC50ZXJtcy5tYXAodCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBTdW1fMS5TdW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi50LnRlcm1zXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFt0XTtcbiAgICAgICAgICAgIH0pLmZsYXQoKTtcbiAgICAgICAgICAgIGlmIChuZXdUZXJtcy5sZW5ndGggPT0gZXhwLnRlcm1zLmxlbmd0aClcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNldCgpO1xuICAgICAgICAgICAgcmV0dXJuICgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICAgICAgbjE6ICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKC4uLm5ld1Rlcm1zKVxuICAgICAgICAgICAgfSwgXCJBc3NvY2lhdGl2ZSBwcm9wZXJ0eSBvZiBhZGRpdGlvblwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZXhwLmlzTmVnYXRpb24pXG4gICAgICAgICAgICAgICAgcmV0dXJuICgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKSgpO1xuICAgICAgICAgICAgY29uc3QgbmV3RmFjdG9ycyA9IGV4cC5mYWN0b3JzLm1hcCh0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodCBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4udC5mYWN0b3JzXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFt0XTtcbiAgICAgICAgICAgIH0pLmZsYXQoKTtcbiAgICAgICAgICAgIGlmIChuZXdGYWN0b3JzLmxlbmd0aCA9PSBleHAuZmFjdG9ycy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTZXQoKTtcbiAgICAgICAgICAgIHJldHVybiAoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgICAgIG4xOiAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdCkoLi4ubmV3RmFjdG9ycylcbiAgICAgICAgICAgIH0sIFwiQXNzb2NpYXRpdmUgcHJvcGVydHkgb2YgbXVsdGlwbGljYXRpb25cIikpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5Bc3NvY2lhdGl2ZVByb3BlcnR5T2ZQcm9kdWN0c0FuZFN1bXMgPSBBc3NvY2lhdGl2ZVByb3BlcnR5T2ZQcm9kdWN0c0FuZFN1bXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ2FuY2VsTmVnYXRpdmVzID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9Qcm9kdWN0XCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMiA9IHJlcXVpcmUoXCIuLi8uLi9Db252ZW5pZW50RXhwcmVzc2lvbnNcIik7XG4vKipcbiAqIE1ha2VzIHN1cmUgYSBwcm9kdWN0IGRvZXNuJ3QgY29udGFpbiBhbnkgbmVnYXRpb25zLlxuICogVGhlIHByb2R1Y3QgaXMgZWl0aGVyIGEgbmVnYXRpb24gb3Igbm90LlxuICovXG5jbGFzcyBDYW5jZWxOZWdhdGl2ZXMgZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAgaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdDtcbiAgICB9XG4gICAgYXBwbHlJbXBsKGV4cCkge1xuICAgICAgICBjb25zdCBwcm9kdWN0ID0gZXhwO1xuICAgICAgICBjb25zdCBuZWdhdGVkRmFjdG9ycyA9IFtdO1xuICAgICAgICBjb25zdCBvdGhlcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBmIG9mIHByb2R1Y3QuZmFjdG9ycykge1xuICAgICAgICAgICAgaWYgKGYgaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCAmJiBmLmlzTmVnYXRpb24pIHtcbiAgICAgICAgICAgICAgICBuZWdhdGVkRmFjdG9ycy5wdXNoKGYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3RoZXJzLnB1c2goZik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5lZ2F0ZWRGYWN0b3JzLmxlbmd0aCA8IDEpXG4gICAgICAgICAgICByZXR1cm4gKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdElzTmVnYXRpdmUgPSBuZWdhdGVkRmFjdG9ycy5sZW5ndGggJSAyID09IDE7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9ICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMi5wcm9kdWN0KSguLi5uZWdhdGVkRmFjdG9ycywgLi4ub3RoZXJzKTtcbiAgICAgICAgY29uc3QgbmVnYXRlZFJlc3VsdCA9IHJlc3VsdElzTmVnYXRpdmUgPyAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubmVnYXRpdmUpKHJlc3VsdCkgOiByZXN1bHQ7XG4gICAgICAgIHJldHVybiAoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgIG4xOiBuZWdhdGVkUmVzdWx0XG4gICAgICAgIH0sIFwiQ2FuY2VsIG5lZ2F0aXZlc1wiKSk7XG4gICAgfVxufVxuZXhwb3J0cy5DYW5jZWxOZWdhdGl2ZXMgPSBDYW5jZWxOZWdhdGl2ZXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29tYmluZUNvbW1vbkZhY3RvcnNNdWx0aXBsaWNhdGlvbiA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vQXJndW1lbnRcIik7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db252ZW5pZW50RXhwcmVzc2lvbnNcIik7XG5jb25zdCBFeHBvbmVudF8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL0V4cG9uZW50XCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL1Byb2R1Y3RcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9TdW1cIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi8uLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xID0gcmVxdWlyZShcIi4uLy4uL3V0aWwvVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJcIik7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbi8qKlxuICogQ29tYmluZXMgbGlrZSBmYWN0b3JzIGFuZCBleHBvbmVudHMgd2l0aCBsaWtlIGJhc2VzLlxuICovXG5jbGFzcyBDb21iaW5lQ29tbW9uRmFjdG9yc011bHRpcGxpY2F0aW9uIGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gZXhwIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3RcbiAgICAgICAgICAgICYmICFleHAuaXNSZWR1Y2libGU7XG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IGV4cDtcbiAgICAgICAgY29uc3QgdW5pcXVlQmFzZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgZmFjdG9yIG9mIHByb2R1Y3QuZmFjdG9ycykge1xuICAgICAgICAgICAgaWYgKGZhY3RvciBpbnN0YW5jZW9mIEV4cG9uZW50XzEuRXhwb25lbnQpXG4gICAgICAgICAgICAgICAgdW5pcXVlQmFzZXMuYWRkKGZhY3Rvci5iYXNlKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB1bmlxdWVCYXNlcy5hZGQoZmFjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlcXVpdmFsZW50RXhwcmVzc2lvbnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIC8vIEZvciBldmVyeSB1bmlxdWUgZmFjdG9yXG4gICAgICAgIGZvciAoY29uc3QgYmFzZSBvZiB1bmlxdWVCYXNlcykge1xuICAgICAgICAgICAgbGV0IHBvd2VyVGVybXMgPSBbXTtcbiAgICAgICAgICAgIGxldCByZW1haW5pbmdGYWN0b3JzID0gW107XG4gICAgICAgICAgICAvLyBDb3VudCB0aGUgbnVtYmVyIG9mIHRpbWVzIGl0IG9jY3VycyBpbiB0aGUgcHJvZHVjdFxuICAgICAgICAgICAgLy8gQ29sbGVjdCB0aGUgb3RoZXIgZmFjdG9ycyBpbiBhIGxpc3RcbiAgICAgICAgICAgIGZvciAoY29uc3QgZiBvZiBwcm9kdWN0LmZhY3RvcnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZiBpbnN0YW5jZW9mIEV4cG9uZW50XzEuRXhwb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGYuYmFzZSA9PT0gYmFzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvd2VyVGVybXMucHVzaChmLnBvd2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmID09PSBiYXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3dlclRlcm1zLnB1c2goKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nRmFjdG9ycy5wdXNoKGYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gT3JkZXIgdGhlIHBvd2VyIHRlcm1zIGNvcnJlY3RseVxuICAgICAgICAgICAgcG93ZXJUZXJtcyA9ICgwLCBTdW1fMS5vcmRlclRlcm1zKSguLi5wb3dlclRlcm1zKTtcbiAgICAgICAgICAgIC8vIElmIGl0IG9jY3VyZWQgbXVsdGlwbGUgdGltZXMsIGNyZWF0ZSBhIG5ldyBleHBvbmVudFxuICAgICAgICAgICAgLy8gVG8gY29tYmluZSB0aGUgcmVwZWF0c1xuICAgICAgICAgICAgaWYgKHBvd2VyVGVybXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cG9uZW50ID0gRXhwb25lbnRfMS5FeHBvbmVudC5vZihiYXNlLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtKSguLi5wb3dlclRlcm1zKSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlbWFpbmluZ0ZhY3RvcnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZXF1aXZhbGVudEV4cHJlc3Npb25zLmFkZChleHBvbmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBJbnNlcnQgdGhlIG5ldyBleHBvbmVudCBhdCB0aGUgY29ycmVjdCBwbGFjZSBpbiB0aGUgbmV3IHByb2R1Y3RcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaW5zZXJ0Q29ycmVjdGx5KGFyciwgZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBpY2sgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoMCwgUHJvZHVjdF8xLmZhY3Rvck9yZGVyKShlbCwgYXJyW2ldKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDAsIGVsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRDb3JyZWN0bHkocmVtYWluaW5nRmFjdG9ycywgZXhwb25lbnQpO1xuICAgICAgICAgICAgICAgICAgICBlcXVpdmFsZW50RXhwcmVzc2lvbnMuYWRkKFByb2R1Y3RfMS5Qcm9kdWN0Lm9mKHJlbWFpbmluZ0ZhY3RvcnMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHVybiB0aGUgZXF1aXZhbGVudCBleHByZXNzaW9ucyBpbnRvIGluZmVyZW5jZXNcbiAgICAgICAgbGV0IGluZmVyZW5jZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGVxdWl2YWxlbnRFeHByZXNzaW9ucy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgaW5mZXJlbmNlcy5hZGQobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKHByb2R1Y3QpLCB7XG4gICAgICAgICAgICAgICAgbjogcHJvZHVjdCxcbiAgICAgICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICAgICAgbjE6IGUsXG4gICAgICAgICAgICB9LCBcIkNvbWJpbmUgY29tbW9uIGZhY3RvcnMgbXVsdGlwbGljYXRpb25cIikpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGluZmVyZW5jZXM7XG4gICAgfVxufVxuZXhwb3J0cy5Db21iaW5lQ29tbW9uRmFjdG9yc011bHRpcGxpY2F0aW9uID0gQ29tYmluZUNvbW1vbkZhY3RvcnNNdWx0aXBsaWNhdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Db21iaW5lQ29tbW9uVGVybXNBZGRpdGlvbiA9IHZvaWQgMDtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vQXJndW1lbnRcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvUHJvZHVjdFwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvU3VtXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuLyoqXG4gKiBhICsgYSA9IDJhXG4gKiAyYSAtIGEgPSBhICAodGhpcyBtZWFucyB3ZSBoYXZlIHRvIGNoZWNrIGZvciBuZWdhdGlvbnMpXG4gKlxuICogKGJjKWEgKyA3YSA9ICg3ICsgYmMpYVxuICpcbiAqIEJ1dCBub3RcbiAqIDEgKyAxID0gMigxKVxuICovXG5jbGFzcyBDb21iaW5lQ29tbW9uVGVybXNBZGRpdGlvbiBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGV4cCBpbnN0YW5jZW9mIFN1bV8xLlN1bVxuICAgICAgICAgICAgJiYgIWV4cC5pc1JlZHVjaWJsZTtcbiAgICB9XG4gICAgYXBwbHlJbXBsKGV4cCkge1xuICAgICAgICBjb25zdCBzdW0gPSBleHA7XG4gICAgICAgIGNvbnN0IHVuaXF1ZUZhY3RvcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBuZXcgU2V0KCk7XG4gICAgICAgIC8vIEZpbmQgYWxsIHVuaXF1ZSBmYWN0b3JzIGluIGFsbCB0ZXJtc1xuICAgICAgICAvLyBEb24ndCBjb25zaWRlciB0aGUgLTEgaW4gbmVnYXRpb25zXG4gICAgICAgIC8vIENvbnNpZGVyIHRoZSBmYWN0b3JzIG9mIG5lZ2F0ZWQgcHJvZHVjdHMgc2VwYXJhdGVseVxuICAgICAgICBmb3IgKGNvbnN0IHRlcm0gb2Ygc3VtLnRlcm1zKSB7XG4gICAgICAgICAgICBpZiAodGVybSBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlcm0uaXNOZWdhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlcm0ubmVnYXRpb24gaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuYWRkQWxsKSh1bmlxdWVGYWN0b3JzLCAuLi50ZXJtLm5lZ2F0aW9uLmZhY3RvcnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXF1ZUZhY3RvcnMuYWRkKHRlcm0ubmVnYXRpb24pO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuYWRkQWxsKSh1bmlxdWVGYWN0b3JzLCAuLi50ZXJtLmZhY3RvcnMpOyAvL1RPRE86IENhcHR1cmUgYWxsIGNvbWJpbmF0aW9ucyBvZiBmYWN0b3JzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdW5pcXVlRmFjdG9ycy5hZGQodGVybSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ3JlYXRlIGFuIGFyZ3VtZW50IGZvciBwdWxsaW5nIG91dCBlYWNoIGZhY3RvclxuICAgICAgICBmb3IgKGNvbnN0IGZhY3RvciBvZiB1bmlxdWVGYWN0b3JzKSB7XG4gICAgICAgICAgICAvLyBEb24ndCB3YXN0ZSB0aW1lIHdpdGggdW5oZWFsdGh5IGZhY3RvcnNcbiAgICAgICAgICAgIGlmIChmYWN0b3IuaXNSZWR1Y2libGVPckludClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIEZpZ3VyZSBvdXQgd2hpY2ggdGVybXMgY29udGFpbiBpdFxuICAgICAgICAgICAgY29uc3QgcmVsYXZlbnRUZXJtcyA9IFtdO1xuICAgICAgICAgICAgY29uc3Qgb3RoZXJUZXJtcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCB0ZXJtIG9mIHN1bS50ZXJtcykge1xuICAgICAgICAgICAgICAgIGlmICh0ZXJtIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlcm0uaXNOZWdhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQncyBhIG5lZ2F0aW9uLCBjaGVjayBpZiB0aGUgbmVnYXRpb24gaGFzIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVybS5uZWdhdGlvbiA9PT0gZmFjdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF2ZW50VGVybXMucHVzaCh0ZXJtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRlcm0ubmVnYXRpb24gaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5oYXMpKHRlcm0ubmVnYXRpb24uZmFjdG9ycywgZmFjdG9yKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXZlbnRUZXJtcy5wdXNoKHRlcm0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJUZXJtcy5wdXNoKHRlcm0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLmhhcykodGVybS5mYWN0b3JzLCBmYWN0b3IpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXZlbnRUZXJtcy5wdXNoKHRlcm0pO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlclRlcm1zLnB1c2godGVybSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGVybSA9PT0gZmFjdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXZlbnRUZXJtcy5wdXNoKFByb2R1Y3RfMS5Qcm9kdWN0Lm9mKFsoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgxKSwgdGVybV0pKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJUZXJtcy5wdXNoKHRlcm0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFB1bGwgaXQgb3V0IG9mIHRob3NlIHRlcm1zXG4gICAgICAgICAgICBjb25zdCBjb2VmZmljaWVudHMgPSBbXTtcbiAgICAgICAgICAgIGlmIChyZWxhdmVudFRlcm1zLmxlbmd0aCA8IDIpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRlcm0gb2YgcmVsYXZlbnRUZXJtcykge1xuICAgICAgICAgICAgICAgIGlmICh0ZXJtLmlzTmVnYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlcm0ubmVnYXRpb24gaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29lZmZpY2llbnRzLnB1c2goKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm5lZ2F0aXZlKSh0ZXJtLm5lZ2F0aW9uLndpdGhvdXQoZmFjdG9yKSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZWZmaWNpZW50cy5wdXNoKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5uZWdhdGl2ZSkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvZWZmaWNpZW50cy5wdXNoKHRlcm0ud2l0aG91dChmYWN0b3IpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwdWxsZWQgPSAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtT3JOb3QpKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5vcmRlcmVkUHJvZHVjdCkoU3VtXzEuU3VtLm9mKGNvZWZmaWNpZW50cyksIGZhY3RvciksIC4uLm90aGVyVGVybXMpO1xuICAgICAgICAgICAgYXJncy5hZGQobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgICAgIG4xOiBwdWxsZWRcbiAgICAgICAgICAgIH0sIFwiQ29tYmluZSBsaWtlIHRlcm1zXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJncztcbiAgICB9XG59XG5leHBvcnRzLkNvbWJpbmVDb21tb25UZXJtc0FkZGl0aW9uID0gQ29tYmluZUNvbW1vblRlcm1zQWRkaXRpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29tYmluZUludGVnZXJGYWN0b3JzID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9JbnRlZ2VyXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL1Byb2R1Y3RcIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi8uLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xID0gcmVxdWlyZShcIi4uLy4uL3V0aWwvVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJcIik7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbi8qKlxuICogUHJvZHVjdHMgd2l0aCBzZXZlcmFsIGludGVnZXIgdGVybXMgYXJlIHNpbXBsaWZpZWQgdG8gb25seSBpbmNsdWRlIDFcbiAqL1xuY2xhc3MgQ29tYmluZUludGVnZXJGYWN0b3JzIGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gZXhwIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3Q7XG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgY29uc3QgcCA9IGV4cDtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nRmFjdG9ycyA9IFtdO1xuICAgICAgICBsZXQgY29lZmZpY2llbnQgPSAxO1xuICAgICAgICBmb3IgKGNvbnN0IGYgb2YgcC5mYWN0b3JzKSB7XG4gICAgICAgICAgICBpZiAoZiBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKSB7XG4gICAgICAgICAgICAgICAgY29lZmZpY2llbnQgKj0gZi52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZW1haW5pbmdGYWN0b3JzLnB1c2goZik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHAuZmFjdG9ycy5sZW5ndGggLSByZW1haW5pbmdGYWN0b3JzLmxlbmd0aCA8IDIpXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNldCgpO1xuICAgICAgICByZXR1cm4gKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3RPck5vdCkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoY29lZmZpY2llbnQpLCAuLi5yZW1haW5pbmdGYWN0b3JzKVxuICAgICAgICB9LCBcIk11bHRpcGx5IGludGVnZXIgdGVybXNcIikpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29tYmluZUludGVnZXJGYWN0b3JzID0gQ29tYmluZUludGVnZXJGYWN0b3JzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRpdmlkZUZyYWN0aW9ucyA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vQXJndW1lbnRcIik7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db252ZW5pZW50RXhwcmVzc2lvbnNcIik7XG5jb25zdCBFeHBvbmVudF8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL0V4cG9uZW50XCIpO1xuY29uc3QgRnJhY3Rpb25fMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9GcmFjdGlvblwiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9Qcm9kdWN0XCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG5jbGFzcyBEaXZpZGVGcmFjdGlvbnMgZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAgaW5zdGFuY2VvZiBGcmFjdGlvbl8xLkZyYWN0aW9uXG4gICAgICAgICAgICAmJiBleHAubnVtZXJhdG9yIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3RcbiAgICAgICAgICAgICYmIGV4cC5kZW5vbWluYXRvciBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0O1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGNvbnN0IGZyYWMgPSBleHA7XG4gICAgICAgIGNvbnN0IG51bSA9IGZyYWMubnVtZXJhdG9yO1xuICAgICAgICBjb25zdCBkZW4gPSBmcmFjLmRlbm9taW5hdG9yO1xuICAgICAgICAvLyBUYWtlIHRoZSBmYWN0b3JzIG9mIHRoZSBuZWdhdGlvbiBvZiBhbnkgbmVnYXRpb25zXG4gICAgICAgIGNvbnN0IG51bUZhY3RvcnMgPSBudW0uaXNOZWdhdGlvbiA/XG4gICAgICAgICAgICBudW0ubmVnYXRpb24gaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCA/XG4gICAgICAgICAgICAgICAgbnVtLm5lZ2F0aW9uLmZhY3RvcnMgLy8gR2V0IGZhY3RvcnMgaWYgdGhlIG5lZ2F0aW9uIGlzIGEgcHJvZHVjdFxuICAgICAgICAgICAgICAgIDogW251bS5uZWdhdGlvbl0gLy8gSWYgbmVnYXRpb24gaXNuJ3QgYSBwcm9kdWN0LCByZXR1cm4gdGhlIG5lZ2F0aW9uIGFzIGEgbGlzdCBvZiAxXG4gICAgICAgICAgICA6IG51bS5mYWN0b3JzOyAvLyBJZiBub3QgYSBuZWdhdGlvbiwgcmV0dXJuIHRoZSBmYWN0b3JzXG4gICAgICAgIGNvbnN0IGRlbkZhY3RvcnMgPSAhZGVuLmlzTmVnYXRpb24gPyBkZW4uZmFjdG9yc1xuICAgICAgICAgICAgOiBkZW4ubmVnYXRpb24gaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCA/XG4gICAgICAgICAgICAgICAgZGVuLm5lZ2F0aW9uLmZhY3RvcnNcbiAgICAgICAgICAgICAgICA6IFtkZW4ubmVnYXRpb25dO1xuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgYW55IHJlcGVhdHMsIGdpdmUgdXBcbiAgICAgICAgaWYgKG5ldyBTZXQobnVtRmFjdG9ycykuc2l6ZSA8IG51bUZhY3RvcnMubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuICgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKSgpO1xuICAgICAgICBpZiAobmV3IFNldChkZW5GYWN0b3JzKS5zaXplIDwgZGVuRmFjdG9ycy5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKCk7XG4gICAgICAgIC8vIFRyZWF0IGV2ZXJ5IGZhY3RvciBhcyBhbiBleHBvbmVudFxuICAgICAgICBjb25zdCBudW1FeHBvbmVudHMgPSBudW1GYWN0b3JzLm1hcChmID0+IHtcbiAgICAgICAgICAgIGlmIChmIGluc3RhbmNlb2YgRXhwb25lbnRfMS5FeHBvbmVudClcbiAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gRXhwb25lbnRfMS5FeHBvbmVudC5vZihmLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgxKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBkZW5FeHBvbmVudHMgPSBkZW5GYWN0b3JzLm1hcChmID0+IHtcbiAgICAgICAgICAgIGlmIChmIGluc3RhbmNlb2YgRXhwb25lbnRfMS5FeHBvbmVudClcbiAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gRXhwb25lbnRfMS5FeHBvbmVudC5vZihmLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgxKSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBGb3IgZWFjaCBkZW4gZXhwb25lbnQgYmFzZSwgY3JlYXRlIGFuIG92ZXJhbGwgc3VtIG9mIHRoZSBwb3dlcnNcbiAgICAgICAgY29uc3QgbnVtRXhwb25lbnRQb3dlcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIG51bUV4cG9uZW50cy5mb3JFYWNoKGV4cG9uZW50ID0+IHtcbiAgICAgICAgICAgIGlmICghbnVtRXhwb25lbnRQb3dlcnMuaGFzKGV4cG9uZW50LmJhc2UpKVxuICAgICAgICAgICAgICAgIG51bUV4cG9uZW50UG93ZXJzLnNldChleHBvbmVudC5iYXNlLCBbXSk7XG4gICAgICAgICAgICBudW1FeHBvbmVudFBvd2Vycy5nZXQoZXhwb25lbnQuYmFzZSkucHVzaChleHBvbmVudC5wb3dlcik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBkZW5FeHBvbmVudFBvd2VycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgZGVuRXhwb25lbnRzLmZvckVhY2goZXhwb25lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKCFkZW5FeHBvbmVudFBvd2Vycy5oYXMoZXhwb25lbnQuYmFzZSkpXG4gICAgICAgICAgICAgICAgZGVuRXhwb25lbnRQb3dlcnMuc2V0KGV4cG9uZW50LmJhc2UsIFtdKTtcbiAgICAgICAgICAgIGRlbkV4cG9uZW50UG93ZXJzLmdldChleHBvbmVudC5iYXNlKS5wdXNoKGV4cG9uZW50LnBvd2VyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEFueSBiYXNlIHdoaWNoIGlzIGluIHRoZSBudW1lcmF0b3IgYW5kIGRlbm9taW5hdG9yXG4gICAgICAgIC8vIHdpbGwgb25seSBiZSBpbiB0aGUgbnVtZXJhdG9yXG4gICAgICAgIGNvbnN0IG5ld051bUV4cG9uZW50UG93ZXJzID0gbmV3IE1hcChudW1FeHBvbmVudFBvd2Vycyk7XG4gICAgICAgIGNvbnN0IG5ld0RlbkV4cG9uZW50UG93ZXJzID0gbmV3IE1hcChkZW5FeHBvbmVudFBvd2Vycyk7XG4gICAgICAgIGRlbkV4cG9uZW50UG93ZXJzLmZvckVhY2goKHBvd2VycywgYmFzZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG51bUV4cG9uZW50UG93ZXJzLmhhcyhiYXNlKSkge1xuICAgICAgICAgICAgICAgIG5ld051bUV4cG9uZW50UG93ZXJzLmdldChiYXNlKS5wdXNoKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5uZWdhdGl2ZSkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bU9yTm90KSguLi5wb3dlcnMpKSk7XG4gICAgICAgICAgICAgICAgbmV3RGVuRXhwb25lbnRQb3dlcnMuZGVsZXRlKGJhc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gR2V0IHRoZSBuZXcgZmFjdG9ycyBmb3IgdGhlIG51bWVyYXRvciBhbmQgZGVub21pbmF0b3JcbiAgICAgICAgY29uc3QgbmV3TnVtRXhwb25lbnRzID0gW107XG4gICAgICAgIG5ld051bUV4cG9uZW50UG93ZXJzLmZvckVhY2goKHBvd2VycywgYmFzZSkgPT4ge1xuICAgICAgICAgICAgbmV3TnVtRXhwb25lbnRzLnB1c2goRXhwb25lbnRfMS5FeHBvbmVudC5vZihiYXNlLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtT3JOb3QpKC4uLnBvd2VycykpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG5ld0RlbkV4cG9uZW50cyA9IFtdO1xuICAgICAgICBuZXdEZW5FeHBvbmVudFBvd2Vycy5mb3JFYWNoKChwb3dlcnMsIGJhc2UpID0+IHtcbiAgICAgICAgICAgIG5ld0RlbkV4cG9uZW50cy5wdXNoKEV4cG9uZW50XzEuRXhwb25lbnQub2YoYmFzZSwgKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bU9yTm90KSguLi5wb3dlcnMpKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0b3AgPSAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdE9yTm90KSguLi5uZXdOdW1FeHBvbmVudHMpO1xuICAgICAgICBjb25zdCBib3R0b20gPSBuZXdEZW5FeHBvbmVudHMubGVuZ3RoICE9IDAgPyAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdE9yTm90KSguLi5uZXdEZW5FeHBvbmVudHMpIDogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSk7XG4gICAgICAgIC8vIFByZXNlcnZlIHRoZSBuZWdhdGlvbnMgcmVtb3ZlZCBlYXJsaWVyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YobnVtLmlzTmVnYXRpb24gPyAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubmVnYXRpdmUpKHRvcCkgOiB0b3AsIGRlbi5pc05lZ2F0aW9uID8gKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm5lZ2F0aXZlKShib3R0b20pIDogYm90dG9tKTtcbiAgICAgICAgcmV0dXJuICgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgbjE6IHJlc3VsdFxuICAgICAgICB9LCBcIkNhbmNlbCBvdXQgZnJhY3Rpb25zXCIpKTtcbiAgICB9XG59XG5leHBvcnRzLkRpdmlkZUZyYWN0aW9ucyA9IERpdmlkZUZyYWN0aW9ucztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5EaXZpc2lvbklkZW50aXR5ID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IEZyYWN0aW9uXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvRnJhY3Rpb25cIik7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvSW50ZWdlclwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9UaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYlwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuLyoqXG4gKiBBbnl0aGluZyBkaXZpZGVkIGJ5IDEgaXMgdGhlIG51bWVyYXRvclxuICovXG5jbGFzcyBEaXZpc2lvbklkZW50aXR5IGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gZXhwIGluc3RhbmNlb2YgRnJhY3Rpb25fMS5GcmFjdGlvblxuICAgICAgICAgICAgJiYgZXhwLmRlbm9taW5hdG9yIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXJcbiAgICAgICAgICAgICYmIGV4cC5kZW5vbWluYXRvci52YWx1ZSA9PSAxO1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGNvbnN0IGZyYWMgPSBleHA7XG4gICAgICAgIHJldHVybiAoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGZyYWMpLCB7XG4gICAgICAgICAgICBuOiBmcmFjLFxuICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgbjE6IGZyYWMubnVtZXJhdG9yLFxuICAgICAgICB9LCBcIkRpdmlzaW9uIGlkZW50aXR5IGlzIDFcIikpO1xuICAgIH1cbn1cbmV4cG9ydHMuRGl2aXNpb25JZGVudGl0eSA9IERpdmlzaW9uSWRlbnRpdHk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXZhbHVhdGVTdW1zID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9JbnRlZ2VyXCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvU3VtXCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG4vKipcbiAqIENvbWJpbmUgYW55IGludGVnZXIgdGVybXMgaW4gU3Vtcy5cbiAqIGEgKyAyICsgMiArIDI9IGEgKyA0XG4gKiAyIC0gMiA9IDBcbiAqXG4gKiBDb21iaW5lcyBhbGwgb2YgdGhlbSBhdCBvbmNlIG5vIG1hdHRlciBob3cgbWFueSB0ZXJtcyB0aGVyZSBhcmUuXG4gKlxuICovXG5jbGFzcyBFdmFsdWF0ZVN1bXMgZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAgaW5zdGFuY2VvZiBTdW1fMS5TdW07XG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgY29uc3Qgc3VtID0gZXhwO1xuICAgICAgICBjb25zdCBpbnRlZ2VyVGVybXMgPSBbLi4uc3VtLnRlcm1zXS5maWx0ZXIodCA9PiB0IGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpO1xuICAgICAgICBpZiAoaW50ZWdlclRlcm1zLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHJldHVybiAoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdJbnQgPSBpbnRlZ2VyVGVybXMubWFwKGUgPT4gZSkucmVkdWNlKChhLCBiKSA9PiBJbnRlZ2VyXzEuSW50ZWdlci5vZihhLnZhbHVlICsgYi52YWx1ZSkpO1xuICAgICAgICBjb25zdCBvdGhlclRlcm1zID0gWy4uLnN1bS50ZXJtc10uZmlsdGVyKHQgPT4gISh0IGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpKTtcbiAgICAgICAgcmV0dXJuICgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoc3VtKSwge1xuICAgICAgICAgICAgbjogc3VtLFxuICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgbjE6ICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW1Pck5vdCkoLi4ub3RoZXJUZXJtcywgbmV3SW50KVxuICAgICAgICB9LCBcIkV2YWx1YXRlZCBBZGRpdGlvblwiKSk7XG4gICAgfVxufVxuZXhwb3J0cy5FdmFsdWF0ZVN1bXMgPSBFdmFsdWF0ZVN1bXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXhwb25lbnRUb1plcm8gPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgRXhwb25lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9FeHBvbmVudFwiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9JbnRlZ2VyXCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG5jbGFzcyBFeHBvbmVudFRvWmVybyBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGV4cCBpbnN0YW5jZW9mIEV4cG9uZW50XzEuRXhwb25lbnRcbiAgICAgICAgICAgICYmIGV4cC5wb3dlciBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyXG4gICAgICAgICAgICAmJiBleHAucG93ZXIudmFsdWUgPT0gMDtcbiAgICB9XG4gICAgYXBwbHlJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSlcbiAgICAgICAgfSwgXCJBbnl0aGluZyB0byB6ZXJvIGlzIHplcm9cIikpO1xuICAgIH1cbn1cbmV4cG9ydHMuRXhwb25lbnRUb1plcm8gPSBFeHBvbmVudFRvWmVybztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FeHBvbmVudGlhbElkZW50aXR5ID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IEV4cG9uZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvRXhwb25lbnRcIik7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvSW50ZWdlclwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9UaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYlwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuLyoqXG4gKiBBbnl0aGluZyB0byB0aGUgZmlyc3QgaXMganVzdCB0aGF0IHRoaW5nLlxuICogVHVybnMgYW55IGV4cG9uZW50IHdpdGggYSBwb3dlciBvZiAxIHRvIHRoYXQgdGhpbmcuXG4gKi9cbmNsYXNzIEV4cG9uZW50aWFsSWRlbnRpdHkgZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAgaW5zdGFuY2VvZiBFeHBvbmVudF8xLkV4cG9uZW50XG4gICAgICAgICAgICAmJiBleHAucG93ZXIgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlclxuICAgICAgICAgICAgJiYgZXhwLnBvd2VyLnZhbHVlID09IDE7XG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgY29uc3QgZSA9IGV4cDtcbiAgICAgICAgcmV0dXJuICgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZSksIHtcbiAgICAgICAgICAgIG46IGUsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogZS5iYXNlLFxuICAgICAgICB9LCBcIkV4cG9uZW50aWFsIElkZW50aXR5IGlzIDFcIikpO1xuICAgIH1cbn1cbmV4cG9ydHMuRXhwb25lbnRpYWxJZGVudGl0eSA9IEV4cG9uZW50aWFsSWRlbnRpdHk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTXVsdGlwbGljYXRpdmVJZGVudGl0eSA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vQXJndW1lbnRcIik7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db252ZW5pZW50RXhwcmVzc2lvbnNcIik7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvSW50ZWdlclwiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9Qcm9kdWN0XCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG4vKipcbiAqIDF4ID0geFxuICogMSoxeCA9IDFcbiAqL1xuY2xhc3MgTXVsdGlwbGljYXRpdmVJZGVudGl0eSBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGV4cCBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0XG4gICAgICAgICAgICAmJiBuZXcgU2V0KGV4cC5mYWN0b3JzKS5oYXMoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSkpO1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGNvbnN0IHAgPSBleHA7XG4gICAgICAgIGNvbnN0IG5ld0ZhY3RvcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBmYWN0b3Igb2YgcC5mYWN0b3JzKSB7XG4gICAgICAgICAgICBpZiAoZmFjdG9yIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIgJiYgZmFjdG9yLnZhbHVlID09IDEpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBuZXdGYWN0b3JzLnB1c2goZmFjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3RPck5vdCkoLi4ubmV3RmFjdG9ycylcbiAgICAgICAgfSwgXCJNdWx0aXBsaWNhdGl2ZSBJZGVudGl0eVwiKSk7XG4gICAgfVxufVxuZXhwb3J0cy5NdWx0aXBsaWNhdGl2ZUlkZW50aXR5ID0gTXVsdGlwbGljYXRpdmVJZGVudGl0eTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NdWx0aXBseUV4cG9uZW50UG93ZXJzID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IEV4cG9uZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvRXhwb25lbnRcIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi8uLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xID0gcmVxdWlyZShcIi4uLy4uL3V0aWwvVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJcIik7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbmNsYXNzIE11bHRpcGx5RXhwb25lbnRQb3dlcnMgZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAgaW5zdGFuY2VvZiBFeHBvbmVudF8xLkV4cG9uZW50XG4gICAgICAgICAgICAmJiBleHAuYmFzZSBpbnN0YW5jZW9mIEV4cG9uZW50XzEuRXhwb25lbnQ7XG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgY29uc3Qgb3V0ZXIgPSBleHA7XG4gICAgICAgIGNvbnN0IGlubmVyID0gb3V0ZXIuYmFzZTtcbiAgICAgICAgcmV0dXJuICgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgbjE6IEV4cG9uZW50XzEuRXhwb25lbnQub2YoaW5uZXIuYmFzZSwgKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3QpKGlubmVyLnBvd2VyLCBvdXRlci5wb3dlcikpXG4gICAgICAgIH0sIFwiRXhwb25lbnRzIHRvIGV4cG9uZW50cyBtdWx0aXBseVwiKSk7XG4gICAgfVxufVxuZXhwb3J0cy5NdWx0aXBseUV4cG9uZW50UG93ZXJzID0gTXVsdGlwbHlFeHBvbmVudFBvd2VycztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5PcmRlclN1bXMgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvU3VtXCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG4vKipcbiAqIFR1cm5zIHN1bXMgdGhhdCBhcmUgdW5oZWFsdGh5IGJlY2F1c2UgdGhlaXIgdGVybSBvcmRlclxuICogaXMgd3JvbmcgaW50byBjb3JyZWN0bHkgb3JkZXJlZCBzdW1zLlxuICovXG5jbGFzcyBPcmRlclN1bXMgZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAgaW5zdGFuY2VvZiBTdW1fMS5TdW0gJiYgKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm9yZGVyZWRTdW0pKGV4cCkgIT09IGV4cDtcbiAgICB9XG4gICAgYXBwbHlJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gbmV3IFNldChbbmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgICAgIG4xOiAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEub3JkZXJlZFN1bSkoZXhwKSxcbiAgICAgICAgICAgIH0sIFwiUmVvcmRlcmVkXCIpXSk7XG4gICAgfVxufVxuZXhwb3J0cy5PcmRlclN1bXMgPSBPcmRlclN1bXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUG93ZXJSdWxlID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IERlcml2YXRpdmVfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9EZXJpdmF0aXZlXCIpO1xuY29uc3QgRXhwb25lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9FeHBvbmVudFwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9UaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYlwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuLyoqXG4gKiBEZXJpdmVzIHVzaW5nIHRoZSBwb3dlciBydWxlXG4gKi9cbmNsYXNzIFBvd2VyUnVsZSBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGV4cCBpbnN0YW5jZW9mIERlcml2YXRpdmVfMS5EZXJpdmF0aXZlXG4gICAgICAgICAgICAmJiAoKGV4cC5leHAgaW5zdGFuY2VvZiBFeHBvbmVudF8xLkV4cG9uZW50XG4gICAgICAgICAgICAgICAgJiYgZXhwLmV4cC5iYXNlID09PSBleHAucmVsYXRpdmVUb1xuICAgICAgICAgICAgICAgICYmIGV4cC5leHAucG93ZXIuaXNDb25zdGFudClcbiAgICAgICAgICAgICAgICB8fCAoZXhwLmV4cCA9PT0gZXhwLnJlbGF0aXZlVG8pKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV2Uga25vdzpcbiAgICAgKiBleHAgaXMgYSBEZXJpdmF0aXZlIG9mIGFuIEV4cG9uZW50IHdpdGggYSBjb25zdGFudCBwb3dlclxuICAgICAqIHRoZSBleHBvbmVudCdzIGJhc2UgaXMgdGhlIHNhbWUgYXMgd2hhdCB0aGUgZGVyaXZhdGl2ZSBpcyByZWxhdGl2ZSB0b1xuICAgICAqL1xuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgY29uc3QgZCA9IGV4cDtcbiAgICAgICAgbGV0IGV4cG9uZW50O1xuICAgICAgICBpZiAoZC5leHAgaW5zdGFuY2VvZiBFeHBvbmVudF8xLkV4cG9uZW50KSB7XG4gICAgICAgICAgICBleHBvbmVudCA9IGQuZXhwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXhwb25lbnQgPSBFeHBvbmVudF8xLkV4cG9uZW50Lm9mKGQuZXhwLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgxKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3QpKGV4cG9uZW50LnBvd2VyLCBFeHBvbmVudF8xLkV4cG9uZW50Lm9mKGV4cG9uZW50LmJhc2UsICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW1JbnR1aXRpdmUpKGV4cG9uZW50LnBvd2VyLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubmVnYXRpdmUpKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDEpKSkpKTtcbiAgICAgICAgcmV0dXJuICgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgbjE6IHJlc3VsdFxuICAgICAgICB9LCBcIlBvd2VyIHJ1bGVcIikpO1xuICAgIH1cbn1cbmV4cG9ydHMuUG93ZXJSdWxlID0gUG93ZXJSdWxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlByb2R1Y3RSdWxlID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IERlcml2YXRpdmVfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9EZXJpdmF0aXZlXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL1Byb2R1Y3RcIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi8uLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xID0gcmVxdWlyZShcIi4uLy4uL3V0aWwvVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJcIik7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbi8qKlxuICogRGVyaXZhdGl2ZXMgb2YgcHJvZHVjdHNcbiAqXG4gKiBPbmx5IG9wZXJhdGVzIG9uIGRlcml2YXRpdmVzIG9mIHByb2R1Y3RzIHdoZXJlIGFsbCBmYWN0b3JzIGFyZSBub3QgY29uc3RhbnQuXG4gKi9cbmNsYXNzIFByb2R1Y3RSdWxlIGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gZXhwIGluc3RhbmNlb2YgRGVyaXZhdGl2ZV8xLkRlcml2YXRpdmVcbiAgICAgICAgICAgICYmIGV4cC5leHAgaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdFxuICAgICAgICAgICAgLy8gQ29udGFpbnMgbm8gY29uc3RhbnQgZmFjdG9yc1xuICAgICAgICAgICAgJiYgIWV4cC5leHAuZmFjdG9ycy5tYXAoZiA9PiBmLmlzQ29uc3RhbnQpLnJlZHVjZSgoYSwgYikgPT4gYSB8fCBiKTtcbiAgICAgICAgLy8gQ29udGFpbnMgbm8gZGVyaXZhdGl2ZXMgVE9ETzogRmluZCBhIGJldHRlciBzb2x1dGlvbiB0byBsb29wIGd1YXJkaW5nXG4gICAgICAgIC8vJiYgIWV4cC5leHAuZmFjdG9ycy5tYXA8Ym9vbGVhbj4oZiA9PiBmIGluc3RhbmNlb2YgRGVyaXZhdGl2ZSkucmVkdWNlKChhLCBiKSA9PiBhIHx8IGIpXG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgY29uc3QgZCA9IGV4cDtcbiAgICAgICAgY29uc3QgcCA9IGQuZXhwO1xuICAgICAgICBjb25zdCBmYWN0b3JzID0gcC5mYWN0b3JzO1xuICAgICAgICAvLyBGb3IgZWFjaCBmYWN0b3IsIGNyZWF0ZSBhIHByb2R1Y3QgY29udGFpbmluZyBpdHMgZGVyaXZhdGl2ZSBhbmQgdGhlIG90aGVyIGZhY3RvcnNcbiAgICAgICAgY29uc3QgdGVybXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmYWN0b3JzLmxlbmd0aDsgaSsrKSB7IC8vIGkgaXMgdGhlIGZhY3RvciB0byBkZXJpdmF0aXplICh3aGF0IHRlcm0gd2UncmUgb24pXG4gICAgICAgICAgICBjb25zdCBmYWN0b3JUb0Rlcml2YXRpemUgPSBmYWN0b3JzW2ldO1xuICAgICAgICAgICAgY29uc3QgcEZhY3RvcnMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZmFjdG9yIG9mIGZhY3RvcnMpIHsgLy8gYSBpcyB0aGUgdGhlIGZhY3RvciB3ZSdyZSBvblxuICAgICAgICAgICAgICAgIGlmIChmYWN0b3IgPT09IGZhY3RvclRvRGVyaXZhdGl6ZSlcbiAgICAgICAgICAgICAgICAgICAgcEZhY3RvcnMucHVzaChEZXJpdmF0aXZlXzEuRGVyaXZhdGl2ZS5vZihmYWN0b3IsIGQucmVsYXRpdmVUbykpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcEZhY3RvcnMucHVzaChmYWN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGVybXMucHVzaCgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdCkoLi4ucEZhY3RvcnMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShkKSwge1xuICAgICAgICAgICAgbjogZCxcbiAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgIG4xOiAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtKSguLi50ZXJtcylcbiAgICAgICAgfSwgXCJQcm9kdWN0IFJ1bGVcIikpO1xuICAgIH1cbn1cbmV4cG9ydHMuUHJvZHVjdFJ1bGUgPSBQcm9kdWN0UnVsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QdWxsQ29uc3RhbnRzRnJvbURlcml2YXRpdmVzID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IERlcml2YXRpdmVfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9EZXJpdmF0aXZlXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL1Byb2R1Y3RcIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi8uLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xID0gcmVxdWlyZShcIi4uLy4uL3V0aWwvVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJcIik7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbmNsYXNzIFB1bGxDb25zdGFudHNGcm9tRGVyaXZhdGl2ZXMgZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAgaW5zdGFuY2VvZiBEZXJpdmF0aXZlXzEuRGVyaXZhdGl2ZVxuICAgICAgICAgICAgJiYgZXhwLmV4cCBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0O1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGNvbnN0IGQgPSBleHA7XG4gICAgICAgIGNvbnN0IHAgPSBkLmV4cDtcbiAgICAgICAgY29uc3QgY29uc3RGYWN0b3JzID0gcC5mYWN0b3JzLmZpbHRlcihmID0+IGYuaXNDb25zdGFudCk7XG4gICAgICAgIGNvbnN0IG91dCA9IG5ldyBTZXQ7XG4gICAgICAgIGZvciAoY29uc3QgZmFjdG9yIG9mIGNvbnN0RmFjdG9ycykge1xuICAgICAgICAgICAgb3V0LmFkZChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZCksIHtcbiAgICAgICAgICAgICAgICBuOiBkLFxuICAgICAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgICAgICBuMTogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3RBbmROb3RUaW1lc09uZSkoZmFjdG9yLCBEZXJpdmF0aXZlXzEuRGVyaXZhdGl2ZS5vZigoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdE9yTm90KSguLi4oMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucmVtb3ZlTmV3KShwLmZhY3RvcnMsIGZhY3RvcikpLCBkLnJlbGF0aXZlVG8pKVxuICAgICAgICAgICAgfSwgXCJQdWxsIGNvbnN0YW50IGZhY3RvciBmcm9tIGRlcml2YXRpdmVcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxufVxuZXhwb3J0cy5QdWxsQ29uc3RhbnRzRnJvbURlcml2YXRpdmVzID0gUHVsbENvbnN0YW50c0Zyb21EZXJpdmF0aXZlcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RdW90aWVudFJ1bGUgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgRGVyaXZhdGl2ZV8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL0Rlcml2YXRpdmVcIik7XG5jb25zdCBFeHBvbmVudF8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL0V4cG9uZW50XCIpO1xuY29uc3QgRnJhY3Rpb25fMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9GcmFjdGlvblwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9UaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYlwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuY2xhc3MgUXVvdGllbnRSdWxlIGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gZXhwIGluc3RhbmNlb2YgRGVyaXZhdGl2ZV8xLkRlcml2YXRpdmVcbiAgICAgICAgICAgICYmIGV4cC5leHAgaW5zdGFuY2VvZiBGcmFjdGlvbl8xLkZyYWN0aW9uO1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGNvbnN0IGQgPSBleHA7XG4gICAgICAgIGNvbnN0IGEgPSBkLmV4cC5udW1lcmF0b3I7XG4gICAgICAgIGNvbnN0IGIgPSBkLmV4cC5kZW5vbWluYXRvcjtcbiAgICAgICAgcmV0dXJuICgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgbjE6IEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bSkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3QpKERlcml2YXRpdmVfMS5EZXJpdmF0aXZlLm9mKGEsIGQucmVsYXRpdmVUbyksIGIpLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubmVnYXRpdmUpKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5wcm9kdWN0KShhLCBEZXJpdmF0aXZlXzEuRGVyaXZhdGl2ZS5vZihiLCBkLnJlbGF0aXZlVG8pKSkpLCBFeHBvbmVudF8xLkV4cG9uZW50Lm9mKGIsICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDIpKSlcbiAgICAgICAgfSwgXCJRdW90aWVudCBSdWxlXCIpKTtcbiAgICB9XG59XG5leHBvcnRzLlF1b3RpZW50UnVsZSA9IFF1b3RpZW50UnVsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TdW1Db2VmZmljaWVudHNPZkFkZGVkVGVybXMgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgSW50ZWdlcl8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL0ludGVnZXJcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvUHJvZHVjdFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL1N1bVwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9UaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYlwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuLyoqXG4gKiBUYWtlcyBzdW1zIG9mIHNldmVyYWwgYWRkZWQgcHJvZHVjdHMgYW5kIGNvbWJpbmVzIG9uZXMgdGhhdCBvbmx5XG4gKiBoYXZlIGRpZmZlcmVudCBjb2VmZmljaWVudHMuXG4gKlxuICogYSArIDJhID0gM2FcbiAqIGEgLSAyYSA9IC0xYVxuICovXG5jbGFzcyBTdW1Db2VmZmljaWVudHNPZkFkZGVkVGVybXMgZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAgaW5zdGFuY2VvZiBTdW1fMS5TdW07XG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgY29uc3QgdGVybXMgPSBleHAudGVybXM7XG4gICAgICAgIC8vIFNwbGl0IHRoZSB0ZXJtcyBpbnRvIHByb2R1Y3QgYW5kIG5vdCBwcm9kdWN0c1xuICAgICAgICBjb25zdCBwcm9kdWN0VGVybXMgPSBbXTtcbiAgICAgICAgY29uc3Qgbm9uUHJvZHVjdFRlcm1zID0gW107XG4gICAgICAgIGZvciAoY29uc3QgdGVybSBvZiB0ZXJtcykge1xuICAgICAgICAgICAgaWYgKHRlcm0gaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCAmJiB0ZXJtLmZhY3RvcnNbMF0gaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcikge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUZXJtcy5wdXNoKHRlcm0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9uUHJvZHVjdFRlcm1zLnB1c2godGVybSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gU29ydCB0aGUgcHJvZHVjdCB0ZXJtcyBpbnRvIGdyb3VwcyBvZiBjb21tb24gZmFjdG9yc1xuICAgICAgICBjb25zdCBncm91cHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIGZvciAoY29uc3QgdGVybSBvZiBwcm9kdWN0VGVybXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gdGVybS5mYWN0b3JzWzBdO1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IFsuLi50ZXJtLmZhY3RvcnNdO1xuICAgICAgICAgICAgdGVtcC5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICBjb25zdCBncm91cCA9ICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5wcm9kdWN0T3JOb3QpKC4uLnRlbXApO1xuICAgICAgICAgICAgaWYgKCFncm91cHMuaGFzKGdyb3VwKSlcbiAgICAgICAgICAgICAgICBncm91cHMuc2V0KGdyb3VwLCB7IGNvZWZmaWNpZW50OiBmaXJzdC52YWx1ZSwgbW9yZVRoYW5PbmU6IGZhbHNlIH0pO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBzLmdldChncm91cCkuY29lZmZpY2llbnQgKz0gZmlyc3QudmFsdWU7XG4gICAgICAgICAgICAgICAgZ3JvdXBzLmdldChncm91cCkubW9yZVRoYW5PbmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEZvciBldmVyeSBncm91cCB3aXRoIG1vcmUgdGhhbiBvbmUgcHJvZHVjdCwgcHJvZHVjZSBhIG5ldyBhcmd1bWVudFxuICAgICAgICBjb25zdCBvdXQgPSBuZXcgU2V0KCk7XG4gICAgICAgIGdyb3Vwcy5mb3JFYWNoKChvYmosIGdyb3VwKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9iai5tb3JlVGhhbk9uZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0VGVybXNOb3RDb21iaW5lZCA9IHByb2R1Y3RUZXJtcy5maWx0ZXIodCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IFsuLi50LmZhY3RvcnNdO1xuICAgICAgICAgICAgICAgIHRlbXAuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlcm1XaXRob3V0TGVhZGluZ0NvZWZmaWNpZW50ID0gKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3RPck5vdCkoLi4udGVtcCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdyb3VwICE9PSB0ZXJtV2l0aG91dExlYWRpbmdDb2VmZmljaWVudDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgb3V0LmFkZChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICAgICAgbjE6ICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW1Pck5vdCkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3RBbmROb3RUaW1lc09uZSkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkob2JqLmNvZWZmaWNpZW50KSwgZ3JvdXApLCAuLi5ub25Qcm9kdWN0VGVybXMsIC4uLnByb2R1Y3RUZXJtc05vdENvbWJpbmVkKVxuICAgICAgICAgICAgfSwgXCJDb21iaW5pbmcgbGlrZSB0ZXJtc1wiKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbn1cbmV4cG9ydHMuU3VtQ29lZmZpY2llbnRzT2ZBZGRlZFRlcm1zID0gU3VtQ29lZmZpY2llbnRzT2ZBZGRlZFRlcm1zO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVTdWJzdGl0dXRpb24gPSB2b2lkIDA7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbmNsYXNzIFVTdWJzdGl0dXRpb24gZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTsgLy9leHAgaW5zdGFuY2VvZiBJbnRlZ3JhbFxuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZFwiKTtcbiAgICB9XG59XG5leHBvcnRzLlVTdWJzdGl0dXRpb24gPSBVU3Vic3RpdHV0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRlcml2YXRpdmVUeXBlID0gZXhwb3J0cy5EZXJpdmF0aXZlID0gdm9pZCAwO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvblwiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuL0ludGVnZXJcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi9Qcm9kdWN0XCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi9TdW1cIik7XG4vKipcbiAqXG4gKi9cbmNsYXNzIERlcml2YXRpdmUgZXh0ZW5kcyBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbiB7XG4gICAgc3RhdGljIG9mKGV4cCwgcmVsYXRpdmVUbykge1xuICAgICAgICBjb25zdCBoYXNoID0gZXhwLmhhc2ggKyByZWxhdGl2ZVRvLmhhc2g7XG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZXMuaGFzKGhhc2gpKVxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXMuc2V0KGhhc2gsIG5ldyBEZXJpdmF0aXZlKGV4cCwgcmVsYXRpdmVUbykpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXMuZ2V0KGhhc2gpO1xuICAgIH1cbiAgICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0cnVjdG9yKGV4cCwgcmVsYXRpdmVUbykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmV4cCA9IGV4cDtcbiAgICAgICAgdGhpcy5yZWxhdGl2ZVRvID0gcmVsYXRpdmVUbztcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLmV4cCk7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5yZWxhdGl2ZVRvKTtcbiAgICAgICAgdGhpcy5pc1JlZHVjaWJsZSA9IGZhbHNlOyAvL1RPRE86IERldGVybWluZSBpZiBhIGRlcml2YXRpdmUgaXMgcmVkdWNpYmxlXG4gICAgICAgIHRoaXMuaXNDb25zdGFudCA9IGZhbHNlOyAvLyBUT0RPOiBEZXRlcm1pbmUgaWYgYSBkZXJpdmF0aXZlIGlzIGNvbnN0YW50XG4gICAgICAgIHRoaXMuY2hpbGRDb3VudCA9IDIgKyBleHAuY2hpbGRDb3VudCArIHJlbGF0aXZlVG8uY2hpbGRDb3VudDtcbiAgICAgICAgbGV0IGlzSGVhbHRoeSA9IHRydWU7XG4gICAgICAgIGlmIChleHAuaXNDb25zdGFudClcbiAgICAgICAgICAgIGlzSGVhbHRoeSA9IGZhbHNlO1xuICAgICAgICBpZiAoZXhwIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3QpIHtcbiAgICAgICAgICAgIG5ldyBTZXQoZXhwLmZhY3RvcnMpLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlciB8fCBlIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3QgJiYgZS5pc05lZ2F0aW9uICYmIGUubmVnYXRpb24pXG4gICAgICAgICAgICAgICAgICAgIGlzSGVhbHRoeSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vVE9ETzogVGhlcmUgYXJlIGEgbG90IG1vcmUgcG9zc2libGl0aWVzIHRoYW4gdGhpc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0hlYWx0aHkgPSBpc0hlYWx0aHk7XG4gICAgfVxuICAgIGV4cDtcbiAgICByZWxhdGl2ZVRvO1xuICAgIGlzUmVkdWNpYmxlO1xuICAgIGNsYXNzID0gZXhwb3J0cy5EZXJpdmF0aXZlVHlwZTtcbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwiZC9kXCIgKyB0aGlzLnJlbGF0aXZlVG8udG9TdHJpbmcoKSArIFwiKFwiICsgdGhpcy5leHAudG9TdHJpbmcoKSArIFwiKVwiO1xuICAgIH1cbiAgICBnZXQgaGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xhc3MgKyB0aGlzLmV4cC5oYXNoICsgdGhpcy5yZWxhdGl2ZVRvLmhhc2g7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIDEuIGV4cCBpc24ndCBhIGNvbnN0YW50XG4gICAgICogMi4gSWYgZXhwIGlzIHByb2R1Y3QsIGl0IGNvbnRhaW5zIG5vIGNvbnN0YW50cy5cbiAgICAgKi9cbiAgICBpc0hlYWx0aHk7XG4gICAgdG9NYXRoWE1MKCkge1xuICAgICAgICBmdW5jdGlvbiB3cmFwSWZOZWVkZWQoZXhwKSB7XG4gICAgICAgICAgICBpZiAoZXhwLmNsYXNzID09IFN1bV8xLlN1bVR5cGUgfHwgZXhwLmNsYXNzID09IFByb2R1Y3RfMS5Qcm9kdWN0VHlwZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8bW8+KDwvbW8+XCIgKyBleHAudG9NYXRoWE1MKCkgKyBcIjxtbz4pPC9tbz5cIjtcbiAgICAgICAgICAgIHJldHVybiBleHAudG9NYXRoWE1MKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiPG1mcmFjPjxtbj5kPC9tbj48bXJvdz48bW4+ZDwvbW4+XCIgKyB3cmFwSWZOZWVkZWQodGhpcy5yZWxhdGl2ZVRvKSArIFwiPC9tcm93PjwvbWZyYWM+XCIgKyB3cmFwSWZOZWVkZWQodGhpcy5leHApO1xuICAgIH1cbiAgICBpc0NvbnN0YW50O1xuICAgIGNoaWxkQ291bnQ7XG59XG5leHBvcnRzLkRlcml2YXRpdmUgPSBEZXJpdmF0aXZlO1xuZXhwb3J0cy5EZXJpdmF0aXZlVHlwZSA9IFwiRGVyaXZhdGl2ZVwiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkV4cG9uZW50VHlwZSA9IGV4cG9ydHMuRXhwb25lbnQgPSB2b2lkIDA7XG5jb25zdCBNYXRoTUxIZWxwZXJzXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9NYXRoTUxIZWxwZXJzXCIpO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvblwiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuL1Byb2R1Y3RcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuL1N1bVwiKTtcbmNsYXNzIEV4cG9uZW50IGV4dGVuZHMgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24ge1xuICAgIHN0YXRpYyBvZihiYXNlLCBwb3dlcikge1xuICAgICAgICBjb25zdCBoYXNoID0gYmFzZS5oYXNoICsgcG93ZXIuaGFzaDtcbiAgICAgICAgaWYgKCFFeHBvbmVudC5pbnN0YW5jZXMuaGFzKGhhc2gpKSB7XG4gICAgICAgICAgICBFeHBvbmVudC5pbnN0YW5jZXMuc2V0KGhhc2gsIG5ldyBFeHBvbmVudChiYXNlLCBwb3dlcikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBFeHBvbmVudC5pbnN0YW5jZXMuZ2V0KGhhc2gpO1xuICAgIH1cbiAgICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IE1hcCgpO1xuICAgIGNsYXNzID0gZXhwb3J0cy5FeHBvbmVudFR5cGU7XG4gICAgdG9NYXRoWE1MKCkge1xuICAgICAgICBmdW5jdGlvbiB3cmFwSWZOZWVkZWQoZXhwKSB7XG4gICAgICAgICAgICBpZiAoZXhwLmNsYXNzID09IFN1bV8xLlN1bVR5cGUgfHwgZXhwLmNsYXNzID09IFByb2R1Y3RfMS5Qcm9kdWN0VHlwZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gKDAsIE1hdGhNTEhlbHBlcnNfMS5pblJvdykoKDAsIE1hdGhNTEhlbHBlcnNfMS5pblBhcmVuKShleHAudG9NYXRoWE1MKCkpKTtcbiAgICAgICAgICAgIHJldHVybiBleHAudG9NYXRoWE1MKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiPG1zdXA+XCIgKyB3cmFwSWZOZWVkZWQodGhpcy5iYXNlKSArICgwLCBNYXRoTUxIZWxwZXJzXzEuaW5Sb3cpKHRoaXMucG93ZXIudG9NYXRoWE1MKCkpICsgXCI8L21zdXA+XCI7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCIoXCIgKyB0aGlzLmJhc2UgKyBcIileKFwiICsgdGhpcy5wb3dlciArIFwiKVwiO1xuICAgIH1cbiAgICBnZXQgaGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIFwiRXhwb25lbnRcIiArIHRoaXMuYmFzZS5oYXNoICsgdGhpcy5wb3dlci5oYXNoO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcihiYXNlLCBwb3dlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmJhc2UgPSBiYXNlO1xuICAgICAgICB0aGlzLnBvd2VyID0gcG93ZXI7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5iYXNlKTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLnBvd2VyKTtcbiAgICAgICAgLy8gVGhlIGludGVnZXJzIGFyZSBjbG9zZWQgb3ZlciBleHBvbmVudGlhdGlvblxuICAgICAgICB0aGlzLmlzUmVkdWNpYmxlID0gKGJhc2UuaXNSZWR1Y2libGVPckludCkgJiYgKHBvd2VyLmlzUmVkdWNpYmxlT3JJbnQpOyAvLyAmJiBNYXRoLnBvdyhiYXNlLnJlZHVjZWQudmFsdWUsIHBvd2VyLnJlZHVjZWQudmFsdWUpICUgMSA9PSAwXG4gICAgICAgIHRoaXMuaXNIZWFsdGh5ID0gIXRoaXMuaXNSZWR1Y2libGU7XG4gICAgICAgIHRoaXMuaXNDb25zdGFudCA9IGJhc2UuaXNDb25zdGFudCAmJiBwb3dlci5pc0NvbnN0YW50O1xuICAgICAgICB0aGlzLmNoaWxkQ291bnQgPSAyICsgYmFzZS5jaGlsZENvdW50ICsgcG93ZXIuY2hpbGRDb3VudDtcbiAgICB9XG4gICAgYmFzZTtcbiAgICBwb3dlcjtcbiAgICBpc1JlZHVjaWJsZTtcbiAgICBpc0hlYWx0aHk7XG4gICAgaXNDb25zdGFudDtcbiAgICBjaGlsZENvdW50O1xufVxuZXhwb3J0cy5FeHBvbmVudCA9IEV4cG9uZW50O1xuZXhwb3J0cy5FeHBvbmVudFR5cGUgPSBcIkV4cG9uZW50XCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXhwcmVzc2lvbiA9IHZvaWQgMDtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuL0ludGVnZXJcIik7XG5jb25zdCBNYXRoRWxlbWVudF8xID0gcmVxdWlyZShcIi4vTWF0aEVsZW1lbnRcIik7XG4vKipcbiAqIEJhc2Ugb2YgYWxsIG1hdGhlbWF0aWNhbCBleHByZXNzaW9ucy5cbiAqIEFsbCBjaGlsZHJlbiBzaG91bGQgaW1wbGVtZW50IGZseS13aGVlbCBwYXR0ZXJuLlxuICogQWxsIGNoaWxkcmVuIHNob3VsZCBiZSBpbW11dGFibGUuXG4gKi9cbmNsYXNzIEV4cHJlc3Npb24gZXh0ZW5kcyBNYXRoRWxlbWVudF8xLk1hdGhFbGVtZW50IHtcbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBleHByZXNzaW9uIGlzIHJlZHVjaWJsZSBvciBpcyBhbiBpbnRlZ2VyLlxuICAgICAqL1xuICAgIGdldCBpc1JlZHVjaWJsZU9ySW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1JlZHVjaWJsZSB8fCB0aGlzLmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZTtcbiAgICB9XG59XG5leHBvcnRzLkV4cHJlc3Npb24gPSBFeHByZXNzaW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkZyYWN0aW9uVHlwZSA9IGV4cG9ydHMuRnJhY3Rpb24gPSB2b2lkIDA7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uXCIpO1xuY2xhc3MgRnJhY3Rpb24gZXh0ZW5kcyBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbiB7XG4gICAgc3RhdGljIG9mKG51bWVyYXRvciwgZGVub21pbmF0b3IpIHtcbiAgICAgICAgY29uc3QgaGFzaCA9IG51bWVyYXRvci5oYXNoICsgZGVub21pbmF0b3IuaGFzaDtcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlLmhhcyhoYXNoKSlcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0KGhhc2gsIG5ldyBGcmFjdGlvbihudW1lcmF0b3IsIGRlbm9taW5hdG9yKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmdldChoYXNoKTtcbiAgICB9XG4gICAgc3RhdGljIGluc3RhbmNlID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0cnVjdG9yKG51bSwgZGVub20pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5udW1lcmF0b3IgPSBudW07XG4gICAgICAgIHRoaXMuZGVub21pbmF0b3IgPSBkZW5vbTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLm51bWVyYXRvcik7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5kZW5vbWluYXRvcik7XG4gICAgICAgIC8qXG4gICAgICAgIEEgZnJhY3Rpb24gaXMgcmVkdWNpYmxlIGlmIHRoZSBkZW5vbSB8IG51bS5cbiAgICAgICAgICAgIDw9PiBudW0gPSBrICogZGVub20gd2hlcmUgayBpcyBhbiBpbnRlZ2VyLlxuXG4gICAgICAgIFRoaXMgbWFrZXMgcHJvdmluZyByZWR1Y2liaWxpdHkgaGFyZC5cbiAgICAgICAgVE9ETzogRGVjaWRlIGlmIGl0J3Mgd29ydGggaW1wbGVtZW50aW5nIHJlZHVjaWJpbGl0eSBmb3IgRnJhY3Rpb25zXG4gICAgICAgICovXG4gICAgICAgIHRoaXMuaXNSZWR1Y2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0hlYWx0aHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzQ29uc3RhbnQgPSBudW0uaXNDb25zdGFudCAmJiBkZW5vbS5pc0NvbnN0YW50O1xuICAgICAgICB0aGlzLmNoaWxkQ291bnQgPSAyICsgbnVtLmNoaWxkQ291bnQgKyBkZW5vbS5jaGlsZENvdW50O1xuICAgIH1cbiAgICBudW1lcmF0b3I7XG4gICAgZGVub21pbmF0b3I7XG4gICAgaXNSZWR1Y2libGU7XG4gICAgY2xhc3MgPSBleHBvcnRzLkZyYWN0aW9uVHlwZTtcbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtZXJhdG9yLnRvU3RyaW5nKCkgKyBcIiAvIFwiICsgdGhpcy5kZW5vbWluYXRvci50b1N0cmluZygpO1xuICAgIH1cbiAgICBnZXQgaGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIGV4cG9ydHMuRnJhY3Rpb25UeXBlICsgdGhpcy5udW1lcmF0b3IuaGFzaCArIHRoaXMuZGVub21pbmF0b3IuaGFzaDtcbiAgICB9XG4gICAgaXNIZWFsdGh5O1xuICAgIGlzQ29uc3RhbnQ7XG4gICAgdG9NYXRoWE1MKCkge1xuICAgICAgICByZXR1cm4gXCI8bWZyYWM+PG1yb3c+XCIgKyB0aGlzLm51bWVyYXRvci50b01hdGhYTUwoKSArIFwiPC9tcm93Pjxtcm93PlwiICsgdGhpcy5kZW5vbWluYXRvci50b01hdGhYTUwoKSArIFwiPC9tcm93PjwvbWZyYWM+XCI7XG4gICAgfVxuICAgIGNoaWxkQ291bnQ7XG59XG5leHBvcnRzLkZyYWN0aW9uID0gRnJhY3Rpb247XG5leHBvcnRzLkZyYWN0aW9uVHlwZSA9IFwiRnJhY3Rpb25cIjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JbnRlZ2VyVHlwZSA9IGV4cG9ydHMuSW50ZWdlciA9IHZvaWQgMDtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4uL3V0aWwvYXNzZXJ0XCIpO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvblwiKTtcbi8qKlxuICogSW50ZWdlclxuICogUG9zaXRpdmUgb3IgbmVnYXRpdmVcbiAqL1xuY2xhc3MgSW50ZWdlciBleHRlbmRzIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uIHtcbiAgICBzdGF0aWMgb2YodmFsdWUpIHtcbiAgICAgICAgaWYgKCFJbnRlZ2VyLmluc3RhbmNlcy5oYXModmFsdWUpKSB7XG4gICAgICAgICAgICBJbnRlZ2VyLmluc3RhbmNlcy5zZXQodmFsdWUsIG5ldyBJbnRlZ2VyKHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEludGVnZXIuaW5zdGFuY2VzLmdldCh2YWx1ZSk7XG4gICAgfVxuICAgIHN0YXRpYyBpbnN0YW5jZXMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLnZhbHVlICUgMSA9PSAwLCBcIkNyZWF0aW5nIG5vbi1pbnRlZ2VyIGludGVnZXIgXCIgKyB0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMgQSBwb3NpdGl2ZSB2ZXJzaW9uIG9mIHRoaXMgaW50ZWdlci5cbiAgICAgKi9cbiAgICBidXRQb3NpdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIEludGVnZXIub2YoTWF0aC5hYnModGhpcy52YWx1ZSkpO1xuICAgIH1cbiAgICBjbGFzcyA9IGV4cG9ydHMuSW50ZWdlclR5cGU7XG4gICAgdG9NYXRoWE1MKCkge1xuICAgICAgICByZXR1cm4gXCI8bW4+XCIgKyB0aGlzLnZhbHVlICsgXCI8L21uPlwiO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIgKyB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICBnZXQgaGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIFwiTnVtYmVyRXhwXCIgKyB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICB2YWx1ZTtcbiAgICBpc1JlZHVjaWJsZSA9IGZhbHNlO1xuICAgIGlzSGVhbHRoeSA9IHRydWU7XG4gICAgaXNDb25zdGFudCA9IHRydWU7XG4gICAgY2hpbGRDb3VudCA9IDA7XG59XG5leHBvcnRzLkludGVnZXIgPSBJbnRlZ2VyO1xuZXhwb3J0cy5JbnRlZ2VyVHlwZSA9IFwiSW50ZWdlclwiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkludGVncmFsVHlwZSA9IGV4cG9ydHMuSW50ZWdyYWwgPSB2b2lkIDA7XG5jb25zdCBNYXRoTUxIZWxwZXJzXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9NYXRoTUxIZWxwZXJzXCIpO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvblwiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuL1Byb2R1Y3RcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuL1N1bVwiKTtcbi8qKlxuICogQW4gaW5kZWZpbmF0ZSBpbnRlZ3JhbCAoZm9yIG5vdykuXG4gKiBUT0RPOiBTaG91bGQgd2Ugc2VwYXJhdGUgZGVmaW5hdGUvaW5kZWZpbmF0ZSBpbnRlZ3JhbHM/XG4gKi9cbmNsYXNzIEludGVncmFsIGV4dGVuZHMgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24ge1xuICAgIHN0YXRpYyBvZihpbnRlZ3JhbmQsIHJlbGF0aXZlVG8pIHtcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlcy5oYXMoaW50ZWdyYW5kLmhhc2ggKyByZWxhdGl2ZVRvLmhhc2gpKVxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXMuc2V0KGludGVncmFuZC5oYXNoICsgcmVsYXRpdmVUby5oYXNoLCBuZXcgSW50ZWdyYWwoaW50ZWdyYW5kLCByZWxhdGl2ZVRvKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlcy5nZXQoaW50ZWdyYW5kLmhhc2ggKyByZWxhdGl2ZVRvLmhhc2gpO1xuICAgIH1cbiAgICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0cnVjdG9yKGludGVncmFuZCwgcmVsYXRpdmVUbykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmludGVncmFuZCA9IGludGVncmFuZDtcbiAgICAgICAgdGhpcy5yZWxhdGl2ZVRvID0gcmVsYXRpdmVUbztcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLmludGVncmFuZCk7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5yZWxhdGl2ZVRvKTtcbiAgICAgICAgdGhpcy5pc1JlZHVjaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzSGVhbHRoeSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNDb25zdGFudCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNoaWxkQ291bnQgPSAyICsgaW50ZWdyYW5kLmNoaWxkQ291bnQgKyByZWxhdGl2ZVRvLmNoaWxkQ291bnQ7XG4gICAgfVxuICAgIGludGVncmFuZDtcbiAgICByZWxhdGl2ZVRvO1xuICAgIGlzUmVkdWNpYmxlO1xuICAgIGNsYXNzID0gZXhwb3J0cy5JbnRlZ3JhbFR5cGU7XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBcIuKIq1wiICsgdGhpcy5pbnRlZ3JhbmQudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgZ2V0IGhhc2goKSB7XG4gICAgICAgIHJldHVybiBcIuKIq1wiICsgdGhpcy5pbnRlZ3JhbmQudG9TdHJpbmcoKSArIHRoaXMucmVsYXRpdmVUby50b1N0cmluZygpO1xuICAgIH1cbiAgICBpc0hlYWx0aHk7XG4gICAgaXNDb25zdGFudDtcbiAgICB0b01hdGhYTUwoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHdyYXBJZk5lZWRlZChleHApIHtcbiAgICAgICAgICAgIGlmIChleHAuY2xhc3MgPT0gU3VtXzEuU3VtVHlwZSB8fCBleHAuY2xhc3MgPT0gUHJvZHVjdF8xLlByb2R1Y3RUeXBlKVxuICAgICAgICAgICAgICAgIHJldHVybiAoMCwgTWF0aE1MSGVscGVyc18xLmluUGFyZW4pKGV4cC50b01hdGhYTUwoKSk7XG4gICAgICAgICAgICByZXR1cm4gZXhwLnRvTWF0aFhNTCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIjxtcm93Pjxtbz7iiKs8L21vPlwiICsgd3JhcElmTmVlZGVkKHRoaXMuaW50ZWdyYW5kKSArIFwiPG1uPmQ8L21uPlwiICsgd3JhcElmTmVlZGVkKHRoaXMucmVsYXRpdmVUbykgKyBcIjwvbXJvdz5cIjtcbiAgICB9XG4gICAgY2hpbGRDb3VudDtcbn1cbmV4cG9ydHMuSW50ZWdyYWwgPSBJbnRlZ3JhbDtcbmV4cG9ydHMuSW50ZWdyYWxUeXBlID0gXCJJbnRlZ3JhbFwiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1hdGhFbGVtZW50ID0gdm9pZCAwO1xuLyoqXG4gKiBDYW4gYmUgZXhwcmVzc2VkIHdpdGggTWF0aE1MXG4gKi9cbmNsYXNzIE1hdGhFbGVtZW50IHtcbn1cbmV4cG9ydHMuTWF0aEVsZW1lbnQgPSBNYXRoRWxlbWVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mYWN0b3JPcmRlciA9IGV4cG9ydHMuUHJvZHVjdFR5cGUgPSBleHBvcnRzLlByb2R1Y3QgPSB2b2lkIDA7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2Fzc2VydFwiKTtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuL0V4cHJlc3Npb25cIik7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi9JbnRlZ2VyXCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi9TdW1cIik7XG4vKipcbiAqIEEgbWF0aGVtYXRpY2FsIHByb2R1Y3Qgd2l0aCAyIG9yIG1vcmUgZmFjdG9ycy5cbiAqL1xuY2xhc3MgUHJvZHVjdCBleHRlbmRzIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uIHtcbiAgICAvKipcbiAgICAgKiBGb3IgZWZmaWNpZW5jeSwgcHJvZHVjdHMgYXJlIGNvbXBhcmVkIGJ5IHJlZmVyZW5jZS5cbiAgICAgKiBIZXJlIHdlIGVuc3VyZSA9PT0gPD0+ID09XG4gICAgICogQHBhcmFtIGZhY3RvcnNcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHN0YXRpYyBvZihmYWN0b3JzKSB7XG4gICAgICAgIGNvbnN0IGhhc2ggPSBmYWN0b3JzLm1hcChlID0+IGUuaGFzaCkuam9pbihcIlwiKTtcbiAgICAgICAgaWYgKCFQcm9kdWN0Lmluc3RhbmNlcy5oYXMoaGFzaCkpXG4gICAgICAgICAgICBQcm9kdWN0Lmluc3RhbmNlcy5zZXQoaGFzaCwgbmV3IFByb2R1Y3QoZmFjdG9ycykpO1xuICAgICAgICByZXR1cm4gUHJvZHVjdC5pbnN0YW5jZXMuZ2V0KGhhc2gpO1xuICAgIH1cbiAgICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0cnVjdG9yKGZhY3RvcnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkoZmFjdG9ycy5sZW5ndGggPj0gMiwgXCJDcmVhdGluZyBwcm9kdWN0IHdpdGggbGVzcyB0aGFuIDIgZmFjdG9ycy5cIik7XG4gICAgICAgIHRoaXMuZmFjdG9ycyA9IGZhY3RvcnM7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5mYWN0b3JzKTtcbiAgICAgICAgbGV0IHJlZHVjaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZmFjdG9ycy5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgICAgcmVkdWNpYmxlICYmPSBmLmlzUmVkdWNpYmxlIHx8IGYuY2xhc3MgPT0gSW50ZWdlcl8xLkludGVnZXJUeXBlO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhlIGludGVnZXJzIGFyZSBjbG9zZWQgb3ZlciBtdWx0aXBsaWNhdGlvblxuICAgICAgICB0aGlzLmlzUmVkdWNpYmxlID0gcmVkdWNpYmxlO1xuICAgICAgICBsZXQgaGVhbHRoeSA9IHRydWU7XG4gICAgICAgIGhlYWx0aHkgJiY9IHRoaXMubnVtTmVnYXRpdmVzKCkgPCAyO1xuICAgICAgICB0aGlzLmlzSGVhbHRoeSA9IGhlYWx0aHk7XG4gICAgICAgIGxldCBpc05lZ2F0aW9uID0gZmFjdG9ycy5sZW5ndGggPT0gMjtcbiAgICAgICAgaXNOZWdhdGlvbiAmJj0gZmFjdG9ycy5maWx0ZXIoZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyICYmIGUudmFsdWUgPT0gLTE7XG4gICAgICAgIH0pLmxlbmd0aCA9PSAxO1xuICAgICAgICB0aGlzLmlzTmVnYXRpb24gPSBpc05lZ2F0aW9uO1xuICAgICAgICB0aGlzLmlzQ29uc3RhbnQgPSB0aGlzLmZhY3RvcnMubWFwKGYgPT4gZi5pc0NvbnN0YW50KS5yZWR1Y2UoKGEsIGIpID0+IGEgJiYgYik7XG4gICAgICAgIHRoaXMuY2hpbGRDb3VudCA9IGZhY3RvcnMubGVuZ3RoICsgZmFjdG9ycy5tYXAoZiA9PiBmLmNoaWxkQ291bnQpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC0gKHRoaXMuaXNOZWdhdGlvbiA/IDEgOiAwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGlzIHByb2R1Y3QgaXMganVzdFxuICAgICAqIC0xICogYW5vdGhlciBleHByZXNzaW9uLlxuICAgICAqL1xuICAgIGlzTmVnYXRpb247XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB2YWx1ZSB0aGF0IHRoaXMgcHJvZHVjdCBpcyBuZWdhdGluZ1xuICAgICAqIC0xICogZXhwIHJldHVybnMgZXhwLlxuICAgICAqIEB0aHJvd3MgaWYgcHJvZHVjdCBpc24ndCBhIG5lZ2F0aW9uLlxuICAgICAqL1xuICAgIGdldCBuZWdhdGlvbigpIHtcbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5pc05lZ2F0aW9uLCBcIlRyeWluZyB0byBnZXQgbmVnYXRpb24gZnJvbSBub24tbmVnYXRpbmcgc3VtXCIpO1xuICAgICAgICBpZiAodGhpcy5mYWN0b3JzWzBdLmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZSAmJiB0aGlzLmZhY3RvcnNbMF0udmFsdWUgPT0gLTEpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mYWN0b3JzWzFdO1xuICAgICAgICByZXR1cm4gdGhpcy5mYWN0b3JzWzBdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbmV3IEV4cHJlc3Npb24gd2l0aG91dCB0aGUgZ2l2ZW4gZmFjdG9yLlxuICAgICAqIElmIHRoZSBwcm9kdWN0IGNvbnRhaW5zIHRoZSBmYWN0b3IgbXVsdGlwbGUgdGltZXMsXG4gICAgICogb25seSByZW1vdmVzIG9uZS4gSWYgaXQgZG9lc24ndCBjb250YWluIHRoZSBmYWN0b3IsXG4gICAgICogcmV0dXJucyBpdHNlbGYuXG4gICAgICogQHBhcmFtIGV4cCBBIGZhY3RvciBpbiB0aGlzIHByb2R1Y3QuXG4gICAgICovXG4gICAgd2l0aG91dChleHApIHtcbiAgICAgICAgY29uc3QgbmV3RmFjdG9ycyA9IFsuLi50aGlzLmZhY3RvcnNdO1xuICAgICAgICBjb25zdCBpbmRleCA9IG5ld0ZhY3RvcnMuZmluZEluZGV4KCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSBleHA7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5kZXggPT0gLTEpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgbmV3RmFjdG9ycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBpZiAobmV3RmFjdG9ycy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3RmFjdG9yc1swXTsgLy8gR2F1cmFudGVlZCB0aGVyZSdzIG9uZSB0ZXJtIGhlcmVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvZHVjdC5vZihuZXdGYWN0b3JzKTtcbiAgICB9XG4gICAgdG9NYXRoWE1MKCkge1xuICAgICAgICBsZXQgb3V0ID0gXCJcIjtcbiAgICAgICAgZnVuY3Rpb24gd3JhcElmTmVlZGVkKGV4cCkge1xuICAgICAgICAgICAgaWYgKGV4cC5jbGFzcyA9PSBleHBvcnRzLlByb2R1Y3RUeXBlIHx8IGV4cC5jbGFzcyA9PSBTdW1fMS5TdW1UeXBlKVxuICAgICAgICAgICAgICAgIHJldHVybiBcIjxtbz4oPC9tbz5cIiArIGV4cC50b01hdGhYTUwoKSArIFwiPG1vPik8L21vPlwiO1xuICAgICAgICAgICAgcmV0dXJuIGV4cC50b01hdGhYTUwoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFaXRoZXIgdGhpcyBpcyBhIG5lZ2F0aW9uLCBvciBhIGxpc3Qgb2YgcHJvZHVjdHNcbiAgICAgICAgLy8gRmlyc3QgdGhlIG5lZ2F0aW9uIGNhc2UuLi5cbiAgICAgICAgaWYgKHRoaXMuaXNOZWdhdGlvbikge1xuICAgICAgICAgICAgb3V0ICs9IFwiPG1vPi08L21vPlwiO1xuICAgICAgICAgICAgb3V0ICs9IHdyYXBJZk5lZWRlZCh0aGlzLm5lZ2F0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgaXQncyBhIGxpc3Qgb2YgcHJvZHVjdHMuLi5cbiAgICAgICAgY29uc3QgZmlyc3RGYWN0b3IgPSB0aGlzLmZhY3RvcnNbMF07XG4gICAgICAgIG91dCArPSB3cmFwSWZOZWVkZWQoZmlyc3RGYWN0b3IpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuZmFjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGZhY3RvciA9IHRoaXMuZmFjdG9yc1tpXTtcbiAgICAgICAgICAgIGxldCBuZWVkc0RvdCA9IChmYWN0b3IuY2xhc3MgPT0gSW50ZWdlcl8xLkludGVnZXJUeXBlICYmIHRoaXMuZmFjdG9yc1tpIC0gMV0uY2xhc3MgPT0gSW50ZWdlcl8xLkludGVnZXJUeXBlKVxuICAgICAgICAgICAgICAgIHx8IChmYWN0b3IgaW5zdGFuY2VvZiBQcm9kdWN0ICYmIGZhY3Rvci5pc05lZ2F0aW9uKSAvLyBJZiB0aGVyZSdzIGEgbmVnYXRpdmUgc2lnbiwgZ2V0IGEgZG90XG4gICAgICAgICAgICAgICAgfHwgKGZhY3RvciBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyICYmIGZhY3Rvci52YWx1ZSA8IDEpO1xuICAgICAgICAgICAgaWYgKG5lZWRzRG90KVxuICAgICAgICAgICAgICAgIG91dCArPSBcIjxtbz7CtzwvbW8+XCI7XG4gICAgICAgICAgICBvdXQgKz0gd3JhcElmTmVlZGVkKGZhY3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMgTnVtYmVyIG9mIG5lZ2F0aXZlIGludGVnZXIgcHJvZHVjdHMuXG4gICAgICovXG4gICAgbnVtTmVnYXRpdmVzKCkge1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICB0aGlzLmZhY3RvcnMuZm9yRWFjaChmID0+IHtcbiAgICAgICAgICAgIGlmIChmIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpXG4gICAgICAgICAgICAgICAgaWYgKGYudmFsdWUgPCAwKVxuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgbGV0IG91dCA9IFwiXCI7XG4gICAgICAgIGZvciAoY29uc3QgZXhwIG9mIHRoaXMuZmFjdG9ycykge1xuICAgICAgICAgICAgaWYgKGV4cCBpbnN0YW5jZW9mIFByb2R1Y3QpIHtcbiAgICAgICAgICAgICAgICBvdXQgKz0gXCIoXCIgKyBleHAudG9TdHJpbmcoKSArIFwiKVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IGV4cC50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0ICs9IFwiwrdcIjtcbiAgICAgICAgfVxuICAgICAgICBvdXQgPSBvdXQuc3Vic3RyaW5nKDAsIG91dC5sZW5ndGggLSAxKTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgZ2V0IGhhc2goKSB7XG4gICAgICAgIHJldHVybiBcIlByb2R1Y3RcIiArIHRoaXMuZmFjdG9ycy5tYXAoZSA9PiBlLmhhc2gpLmpvaW4oKTtcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgMiBlbGVtZW50cywgb3JkZXIgbWF0dGVyc1xuICAgIGZhY3RvcnM7XG4gICAgY2xhc3MgPSBleHBvcnRzLlByb2R1Y3RUeXBlO1xuICAgIGlzUmVkdWNpYmxlO1xuICAgIC8qKlxuICAgICAqIE9ubHkgMSBuZWdhdGl2ZSBpbnRlZ2VyXG4gICAgICogSW50ZWdlciBmYWN0b3JzIGFyZSBmaXJzdFxuICAgICAqIE5vIGZhY3RvciBlcXVhbHMgMVxuICAgICAqL1xuICAgIGlzSGVhbHRoeTtcbiAgICBpc0NvbnN0YW50O1xuICAgIGNoaWxkQ291bnQ7XG59XG5leHBvcnRzLlByb2R1Y3QgPSBQcm9kdWN0O1xuZXhwb3J0cy5Qcm9kdWN0VHlwZSA9IFwiUHJvZHVjdFwiO1xuLyoqXG4gKiBDYW4gYmUgdXNlZCBpbiBhcnJheS5zb3J0KCkgdG8gZ2V0IHByb3Blcmx5IG9yZGVyZWQgcHJvZHVjdHMuXG4gKlxuICogQHBhcmFtIGFcbiAqIEBwYXJhbSBiXG4gKiBAcmV0dXJucyBQb3NpdGl2ZSBpZiBhIHNob3VsZCBiZSBhZnRlciBiXG4gKi9cbmZ1bmN0aW9uIGZhY3Rvck9yZGVyKGEsIGIpIHtcbiAgICBpZiAoYSBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyICYmIGIgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcilcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKGEgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcikge1xuICAgICAgICByZXR1cm4gYUZpcnN0O1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn1cbmV4cG9ydHMuZmFjdG9yT3JkZXIgPSBmYWN0b3JPcmRlcjtcbmNvbnN0IGFGaXJzdCA9IDE7XG5jb25zdCBhQWZ0ZXIgPSAtMTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5vcmRlclRlcm1zID0gZXhwb3J0cy5TdW1UeXBlID0gZXhwb3J0cy5TdW0gPSB2b2lkIDA7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2Fzc2VydFwiKTtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuL0V4cHJlc3Npb25cIik7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi9JbnRlZ2VyXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4vUHJvZHVjdFwiKTtcbmNvbnN0IFZhcmlhYmxlXzEgPSByZXF1aXJlKFwiLi9WYXJpYWJsZVwiKTtcbi8qKlxuICogRXhwcmVzc2lvbiByZXByZXNlbnRpbmcgdGhlIHN1bSBvZiAyIG9yIG1vcmUgdGVybXMuXG4gKi9cbmNsYXNzIFN1bSBleHRlbmRzIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uIHtcbiAgICAvKipcbiAgICAgKiBGYWN0b3J5IG1ldGhvZCBjb25zbnRydWN0b3IuXG4gICAgICogQHBhcmFtIHRlcm1zIENvbnRhaW5zIGF0IGxlYXN0IDIgZWxlbWVudHNcbiAgICAgKi9cbiAgICBzdGF0aWMgb2YodGVybXMpIHtcbiAgICAgICAgY29uc3QgaGFzaCA9IHRlcm1zLm1hcCh0ID0+IHQuaGFzaCkuam9pbihcIlwiKTtcbiAgICAgICAgaWYgKCFTdW0uaW5zdGFuY2VzLmhhcyhoYXNoKSkge1xuICAgICAgICAgICAgU3VtLmluc3RhbmNlcy5zZXQoaGFzaCwgbmV3IFN1bSh0ZXJtcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdW0uaW5zdGFuY2VzLmdldChoYXNoKTtcbiAgICB9XG4gICAgc3RhdGljIGluc3RhbmNlcyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdHJ1Y3Rvcih0ZXJtcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0ZXJtcy5sZW5ndGggPj0gMiwgXCJDcmVhdGluZyBzdW0gd2l0aCBsZXNzIHRoYW4gMiB0ZXJtcy5cIik7XG4gICAgICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgICAgICAgdGhpcy5pc1JlZHVjaWJsZSA9IHRoaXMudGVybXMubWFwKHQgPT4gdC5pc1JlZHVjaWJsZSB8fCB0LmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZSkucmVkdWNlKChhLCBiKSA9PiBhICYmIGIpO1xuICAgICAgICB0aGlzLmlzSGVhbHRoeSA9IHRoaXMuZGV0ZXJtaW5lSGVhbHRoKCk7XG4gICAgICAgIHRoaXMuaXNDb25zdGFudCA9IHRoaXMudGVybXMubWFwKHQgPT4gdC5pc0NvbnN0YW50KS5yZWR1Y2UoKGEsIGIpID0+IGEgJiYgYik7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy50ZXJtcyk7XG4gICAgICAgIHRoaXMuY2hpbGRDb3VudCA9IHRlcm1zLmxlbmd0aCArIHRlcm1zLm1hcCh0ID0+IHQuY2hpbGRDb3VudCkucmVkdWNlKChhLCBiKSA9PiBhICsgYik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBuZXcgRXhwcmVzc2lvbiB3aXRob3V0IHRoZSBnaXZlbiB0ZXJtLlxuICAgICAqIElmIHRoZSBzdW0gY29udGFpbnMgdGhlIHRlcm0gbXVsdGlwbGUgdGltZXMsXG4gICAgICogb25seSByZW1vdmVzIG9uZS4gSWYgaXQgZG9lc24ndCBjb250YWluIHRoZSB0ZXJtLFxuICAgICAqIHJldHVybnMgaXRzZWxmLlxuICAgICAqIEBwYXJhbSB0ZXJtIEEgdGVybSBpbiB0aGlzIHN1bS5cbiAgICAgKi9cbiAgICB3aXRob3V0KHRlcm0pIHtcbiAgICAgICAgY29uc3QgbmV3VGVybXMgPSBbLi4udGhpcy50ZXJtc107XG4gICAgICAgIGNvbnN0IGluZGV4ID0gbmV3VGVybXMuZmluZEluZGV4KCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSB0ZXJtO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGluZGV4ID09IC0xKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIG5ld1Rlcm1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGlmIChuZXdUZXJtcy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3VGVybXNbMF07IC8vIEdhdXJhbnRlZWQgdGhlcmUncyBvbmUgdGVybSBoZXJlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFN1bS5vZihuZXdUZXJtcyk7XG4gICAgfVxuICAgIHRvTWF0aFhNTCgpIHtcbiAgICAgICAgZnVuY3Rpb24gd3JhcElmTmVlZGVkKGV4cCkge1xuICAgICAgICAgICAgaWYgKGV4cC5jbGFzcyA9PSBleHBvcnRzLlN1bVR5cGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPG1vPig8L21vPlwiICsgZXhwLnRvTWF0aFhNTCgpICsgXCI8bW8+KTwvbW8+XCI7XG4gICAgICAgICAgICByZXR1cm4gZXhwLnRvTWF0aFhNTCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBvdXQgPSB3cmFwSWZOZWVkZWQodGhpcy50ZXJtc1swXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy50ZXJtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGVybSA9IHRoaXMudGVybXNbaV07XG4gICAgICAgICAgICAvLyBTdWJ0cmFjdCBuZWdhdGl2ZSB0ZXJtcyBpbnN0ZWFkIG9mIGFkZGluZyBuZWdhdGl2ZXNcbiAgICAgICAgICAgIGlmICh0ZXJtIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3QgJiYgdGVybS5pc05lZ2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IFwiPG1vPi08L21vPlwiICsgd3JhcElmTmVlZGVkKHRlcm0ubmVnYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGVybSBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyICYmIHRlcm0udmFsdWUgPCAwKSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IFwiPG1vPi08L21vPlwiICsgd3JhcElmTmVlZGVkKHRlcm0uYnV0UG9zaXRpdmUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXQgKz0gXCI8bW8+KzwvbW8+XCIgKyB3cmFwSWZOZWVkZWQodGhpcy50ZXJtc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGxldCBvdXQgPSBcIlwiO1xuICAgICAgICBmb3IgKGNvbnN0IGV4cCBvZiB0aGlzLnRlcm1zKSB7XG4gICAgICAgICAgICBvdXQgKz0gZXhwLnRvU3RyaW5nKCkgKyBcIitcIjtcbiAgICAgICAgfVxuICAgICAgICBvdXQgPSBvdXQuc3Vic3RyaW5nKDAsIG91dC5sZW5ndGggLSAxKTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgZ2V0IGhhc2goKSB7XG4gICAgICAgIHJldHVybiBcIlN1bVwiICsgdGhpcy50ZXJtcy5tYXAoZSA9PiBlLmhhc2gpLmpvaW4oKTtcbiAgICB9XG4gICAgY2xhc3MgPSBleHBvcnRzLlN1bVR5cGU7XG4gICAgLyoqXG4gICAgICogT3JkZXJlZCwgaW1tdXRhYmxlXG4gICAgICovXG4gICAgdGVybXM7XG4gICAgaXNSZWR1Y2libGU7XG4gICAgLyoqXG4gICAgICogRmlndXJlIG91dCBpZiB3ZSdyZSBoZWFsdGh5LlxuICAgICAqL1xuICAgIGRldGVybWluZUhlYWx0aCgpIHtcbiAgICAgICAgaWYgKHRoaXMudGVybXMuZmlsdGVyKHQgPT4gdC5pc1JlZHVjaWJsZSB8fCB0IGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpLmxlbmd0aCA+IDEpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHRoaXMudGVybXMuZm9yRWFjaCh0ID0+IHtcbiAgICAgICAgICAgIGlmICh0IGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpXG4gICAgICAgICAgICAgICAgaWYgKHQudmFsdWUgPT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50ZXJtcy5mb3JFYWNoKHRlcm0gPT4ge1xuICAgICAgICAgICAgaWYgKCF0ZXJtLmlzSGVhbHRoeSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjb3JyZWN0T3JkZXJpbmcgPSBvcmRlclRlcm1zKC4uLnRoaXMudGVybXMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGVybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRlcm1zW2ldICE9PSBjb3JyZWN0T3JkZXJpbmdbaV0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vVE9ETzogQ2hlY2sgY29uZGl0aW9uIDNcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgc3VtIGlzIGhlYWx0aHkgaWZmOlxuICAgICAqXG4gICAgICogMS4gQ29udGFpbnMgYSBtYXggb2YgMSByZWR1Y2libGUgdGVybS5cbiAgICAgKiAyLiBQcm9kdWN0cyB3aXRoIGludGVnZXIgY29lZmZpY2llbnRzIGFyZSBjb21iaW5lZC5cbiAgICAgKiAgYSArIDJhID0gM2EsXG4gICAgICogIGEgKyAtYSA9IDBcbiAgICAgKiAzLiBObyB0ZXJtIGlzIDBcbiAgICAgKiA0LiBBbGwgdGVybXMgYXJlIGhlYWx0aHkuXG4gICAgICogNS4gVGVybXMgYXJlIG9yZGVyZWQgY29ycmVjdGx5LlxuICAgICAqL1xuICAgIGlzSGVhbHRoeTtcbiAgICBpc0NvbnN0YW50O1xuICAgIGNoaWxkQ291bnQ7XG59XG5leHBvcnRzLlN1bSA9IFN1bTtcbmV4cG9ydHMuU3VtVHlwZSA9IFwiU3VtXCI7XG4vKipcbiAqIFJldHVybnMgdGhlIGdpdmVuIHRlcm1zIG9yZGVyZWQgY29ycmVjdGx5IHRvXG4gKiBiZSBwbGFjZWQgaW4gYSBTdW0uIEFsdGVycyB0aGUgZ2l2ZW4gYXJyYXkuXG4gKiBAcGFyYW0gdGVybXNcbiAqL1xuZnVuY3Rpb24gb3JkZXJUZXJtcyguLi50ZXJtcykge1xuICAgIC8vIEEgbm90ZSBhYm91dCB0aGUgc29ydCBmdW5jdGlvbiBiYyB0aGUgZG9jdW1lbnRhdGlvbiBpcyBjcnlwdGljXG4gICAgLy8gSWYgYSBzaG91bGQgYmUgcHV0IGJlZm9yZSBiIGluIHRoZSBzdW0sIHJldHVybiBhIG5lZ2F0aXZlIHZhbHVlXG4gICAgcmV0dXJuIHRlcm1zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgLy8gVmFyaWFibGVzIGJlZm9yZSBJbnRlZ2Vyc1xuICAgICAgICBpZiAoYS5jbGFzcyA9PSBJbnRlZ2VyXzEuSW50ZWdlclR5cGUgJiYgKGIuY2xhc3MgPT0gVmFyaWFibGVfMS5WYXJpYWJsZVR5cGUgfHwgKGIgaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCAmJiBiLmlzTmVnYXRpb24gJiYgYi5uZWdhdGlvbi5jbGFzcyA9PSBWYXJpYWJsZV8xLlZhcmlhYmxlVHlwZSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGEuY2xhc3MgPT0gVmFyaWFibGVfMS5WYXJpYWJsZVR5cGUgfHwgKGEgaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCAmJiBhLmlzTmVnYXRpb24gJiYgYS5uZWdhdGlvbi5jbGFzcyA9PSBWYXJpYWJsZV8xLlZhcmlhYmxlVHlwZSkpICYmIGIuY2xhc3MgPT0gSW50ZWdlcl8xLkludGVnZXJUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG59XG5leHBvcnRzLm9yZGVyVGVybXMgPSBvcmRlclRlcm1zO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlZhcmlhYmxlVHlwZSA9IGV4cG9ydHMuVmFyaWFibGUgPSB2b2lkIDA7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uXCIpO1xuY2xhc3MgVmFyaWFibGUgZXh0ZW5kcyBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbiB7XG4gICAgc3RhdGljIG9mKHN5bWJvbCkge1xuICAgICAgICBpZiAoVmFyaWFibGUuaW5zdGFuY2VzLmdldChzeW1ib2wpID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgVmFyaWFibGUuaW5zdGFuY2VzLnNldChzeW1ib2wsIG5ldyBWYXJpYWJsZShzeW1ib2wpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gVmFyaWFibGUuaW5zdGFuY2VzLmdldChzeW1ib2wpO1xuICAgIH1cbiAgICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0cnVjdG9yKHN5bWJvbCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN5bWJvbCA9IHN5bWJvbDtcbiAgICB9XG4gICAgY2xhc3MgPSBleHBvcnRzLlZhcmlhYmxlVHlwZTtcbiAgICB0b01hdGhYTUwoKSB7XG4gICAgICAgIHJldHVybiBcIjxtaT5cIiArIHRoaXMuc3ltYm9sICsgXCI8L21pPlwiO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ltYm9sO1xuICAgIH1cbiAgICBnZXQgaGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIFwiVmFyaWFibGVcIiArIHRoaXMuc3ltYm9sO1xuICAgIH1cbiAgICBzeW1ib2w7XG4gICAgaXNSZWR1Y2libGUgPSBmYWxzZTtcbiAgICBpc0hlYWx0aHkgPSB0cnVlO1xuICAgIGlzQ29uc3RhbnQgPSBmYWxzZTtcbiAgICBjaGlsZENvdW50ID0gMDtcbn1cbmV4cG9ydHMuVmFyaWFibGUgPSBWYXJpYWJsZTtcbmV4cG9ydHMuVmFyaWFibGVUeXBlID0gXCJWYXJpYWJsZVwiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFyZ3VtZW50Tm9kZVZpZXcgPSB2b2lkIDA7XG5jb25zdCBHcmFwaE5vZGVWaWV3XzEgPSByZXF1aXJlKFwiLi9HcmFwaE5vZGVWaWV3XCIpO1xuLyoqXG4gKiBSZXByZXNlbnRzIGFuIGFyZ3VtZW50IG5vZGUuXG4gKi9cbmNsYXNzIEFyZ3VtZW50Tm9kZVZpZXcgZXh0ZW5kcyBHcmFwaE5vZGVWaWV3XzEuR3JhcGhOb2RlVmlldyB7XG4gICAgY29uc3RydWN0b3IoYXJnKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYXJndW1lbnQgPSBhcmc7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gdGhpcy5hcmd1bWVudC5hcmd1bWVudDtcbiAgICB9XG4gICAgYXJndW1lbnQ7XG59XG5leHBvcnRzLkFyZ3VtZW50Tm9kZVZpZXcgPSBBcmd1bWVudE5vZGVWaWV3O1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYXJndW1lbnQtbm9kZXZpZXdcIiwgQXJndW1lbnROb2RlVmlldywgeyBleHRlbmRzOiBcImRpdlwiIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkVkZ2VWaWV3ID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi9Bcmd1bWVudFwiKTtcbmNvbnN0IFVJUHJlZmVyZW5jZXNfMSA9IHJlcXVpcmUoXCIuL1VJUHJlZmVyZW5jZXNcIik7XG5jb25zdCBHcmFwaF8xID0gcmVxdWlyZShcIi4uL0dyYXBoXCIpO1xuLyoqXG4gKiBSZXByZXNlbnRzIGFuIGVkZ2UgaW4gYSBncmFwaC5cbiAqL1xuY2xhc3MgRWRnZVZpZXcgZXh0ZW5kcyBIVE1MUGFyYWdyYXBoRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3Iob3duZXIsIGVkZ2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgICAgICB0aGlzLmVkZ2UgPSBlZGdlLmU7XG4gICAgICAgIHRoaXMuZmlyc3QgPSBlZGdlLm47XG4gICAgICAgIHRoaXMuc2Vjb25kID0gZWRnZS5uMTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLmVkZ2UpO1xuICAgICAgICB0aGlzLnN0eWxlLndpZHRoID0gXCJmaXQtY29udGVudFwiO1xuICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IFwiZml0LWNvbnRlbnRcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5wYWRkaW5nID0gXCIwXCI7XG4gICAgICAgIHRoaXMuc3R5bGUuekluZGV4ID0gXCItMlwiO1xuICAgICAgICB0aGlzLnN0eWxlLm1hcmdpbiA9IFwiMFwiO1xuICAgICAgICB0aGlzLnN0eWxlLndoaXRlU3BhY2UgPSBcIm5vd3JhcFwiO1xuICAgICAgICB0aGlzLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gVUlQcmVmZXJlbmNlc18xLnVpUHJlZmVyZW5jZXMuZWRnZUVxdWFsc0JhY2tncm91bmRDb2xvcjtcbiAgICAgICAgdGhpcy5zdHlsZS51c2VyU2VsZWN0ID0gXCJub25lXCI7XG4gICAgICAgIFVJUHJlZmVyZW5jZXNfMS51aVByZWZlcmVuY2VzLm9uVXBkYXRlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gVUlQcmVmZXJlbmNlc18xLnVpUHJlZmVyZW5jZXMuZWRnZUVxdWFsc0JhY2tncm91bmRDb2xvcjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMub3duZXIuZWRnZUNsaWNrZWQodGhpcywgZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZXZlbnQgPT4ge1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyByb3RhdGlvbiBhbmdsZSBvZiB2aWV3IHdoaWxlIGFsc29cbiAgICAgKiBsZXR0aW5nIGl0IGtub3cgdGhlIGFuZ2xlIGhhcyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSByYWRcbiAgICAgKi9cbiAgICBzZXRBbmdsZShyYWQpIHtcbiAgICAgICAgdGhpcy5zdHlsZS5yb3RhdGUgPSBcIlwiICsgcmFkICsgXCJyYWRcIjtcbiAgICAgICAgLy90aGlzLnRleHRDb250ZW50ID0gXCJcIiArIChyYWQgKiAyICogTWF0aC5QSSAvIDM2MCkudG9GaXhlZCgyKSArIFwiZGVnXCJcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBlbGVtZW50IHNjcmVlbiB3aWR0aCBhbmQgZW5zdXJlcyB0ZXh0IGZpdHNcbiAgICAgKiBpbnNpZGUgdGhlIGVkZ2UuXG4gICAgICovXG4gICAgc2V0IHdpZHRoKHZhbCkge1xuICAgICAgICBzdXBlci5zdHlsZS53aWR0aCA9IHZhbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gZWxlbWVudCBpcyBjb25uY3RlZCB0byB0aGUgRE9NLlxuICAgICAqL1xuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBpZiAodGhpcy5lZGdlIGluc3RhbmNlb2YgQXJndW1lbnRfMS5Bcmd1bWVudCkge1xuICAgICAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9IFwiXCIgKyB0aGlzLmVkZ2UuY2xhaW0ucjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmVkZ2UgaW5zdGFuY2VvZiBHcmFwaF8xLkdpdmVuRWRnZSkge1xuICAgICAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9IFwiXCIgKyB0aGlzLmVkZ2UucjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQgZm9yIFwiICsgdGhpcy5lZGdlKTtcbiAgICB9XG4gICAgb3duZXI7XG4gICAgZWRnZTtcbiAgICBmaXJzdDtcbiAgICBzZWNvbmQ7XG59XG5leHBvcnRzLkVkZ2VWaWV3ID0gRWRnZVZpZXc7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJlZGdlLXZpZXdcIiwgRWRnZVZpZXcsIHsgZXh0ZW5kczogXCJwXCIgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRWRpdGFibGVNYXRoVmlldyA9IHZvaWQgMDtcbi8qKlxuICogRGlzcGxheXMgbWF0aCBhbmQgaXMgZWRpdGFibGUuXG4gKi9cbmNsYXNzIEVkaXRhYmxlTWF0aFZpZXcgZXh0ZW5kcyBIVE1MRGl2RWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIH1cbiAgICBzZXQgdmFsdWUoZSkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IGU7XG4gICAgICAgIHRoaXMuaW5uZXJIVE1MID0gXCI8bWF0aCBkaXNwbGF5PSdibG9jayc+XCIgKyAoZT8udG9NYXRoWE1MKCkgPz8gXCJcIikgKyBcIjwvbWF0aD5cIjtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChsID0+IGwodGhpcy5fdmFsdWUpKTtcbiAgICAgICAgTWF0aEpheC50eXBlc2V0KFt0aGlzXSk7XG4gICAgfVxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBMaXN0ZW5lciB3aWxsIGJlIGNhbGxlZCB3aGVuZXZlciB0aGUgbWF0aFxuICAgICAqIGluIHRoZSB2aWV3IGlzIGVkaXRlZC5cbiAgICAgKiBAcGFyYW0gbFxuICAgICAqL1xuICAgIGFkZEVkaXRMaXN0ZW5lcihsKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobCk7XG4gICAgfVxuICAgIGxpc3RlbmVycyA9IFtdO1xuICAgIF92YWx1ZSA9IG51bGw7XG59XG5leHBvcnRzLkVkaXRhYmxlTWF0aFZpZXcgPSBFZGl0YWJsZU1hdGhWaWV3O1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiZWRpdGFibGUtbWF0aHZpZXdcIiwgRWRpdGFibGVNYXRoVmlldywgeyBleHRlbmRzOiBcImRpdlwiIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkV4cGxhbmF0aW9uUG9wdXAgPSB2b2lkIDA7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi4vZXhwcmVzc2lvbnMvRXhwcmVzc2lvblwiKTtcbmNvbnN0IE1hdGhNTEhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuLi91dGlsL01hdGhNTEhlbHBlcnNcIik7XG5jbGFzcyBFeHBsYW5hdGlvblBvcHVwIGV4dGVuZHMgSFRNTERpdkVsZW1lbnQge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGFyZ1xuICAgICAqIEBwYXJhbSBvbkNsb3NlIENhbGxlZCBhZnRlciB1c2VyIGNsaWNrcyBjbG9zZSBidXR0b24uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYXJnLCBvbkNsb3NlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYXJnID0gYXJnO1xuICAgICAgICB0aGlzLm9uQ2xvc2UgPSBvbkNsb3NlO1xuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2InKTtcbiAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uQ2xvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDbG9zZVwiO1xuICAgICAgICBjbG9zZUJ1dHRvbi5zdHlsZS51c2VyU2VsZWN0ID0gXCJub25lXCI7XG4gICAgICAgIGNsb3NlQnV0dG9uLnN0eWxlLmZsb2F0ID0gXCJyaWdodFwiO1xuICAgICAgICB0aGlzLmFwcGVuZChjbG9zZUJ1dHRvbik7XG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGV4dC5pbm5lckhUTUwgPSBhcmcuYXJndW1lbnQgKyBcIjxicj5cIjtcbiAgICAgICAgaWYgKGFyZy5jbGFpbS5uIGluc3RhbmNlb2YgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24gJiYgYXJnLmNsYWltLm4xIGluc3RhbmNlb2YgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24pXG4gICAgICAgICAgICB0ZXh0LmlubmVySFRNTCArPSAoMCwgTWF0aE1MSGVscGVyc18xLmluTWF0aEJsb2NrKSgoMCwgTWF0aE1MSGVscGVyc18xLmluUm93KShhcmcuY2xhaW0ubi50b01hdGhYTUwoKSArIFwiIDxtbz5cIiArIGFyZy5jbGFpbS5yICsgXCI8L21vPiBcIiArIGFyZy5jbGFpbS5uMS50b01hdGhYTUwoKSkpICsgXCI8YnI+IERlcml2ZWQgZnJvbTogPGJyPlwiO1xuICAgICAgICBmb3IgKGNvbnN0IGdyb3VuZCBvZiBhcmcuZ3JvdW5kcykge1xuICAgICAgICAgICAgaWYgKGdyb3VuZCBpbnN0YW5jZW9mIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uKVxuICAgICAgICAgICAgICAgIHRleHQuaW5uZXJIVE1MICs9ICgwLCBNYXRoTUxIZWxwZXJzXzEuaW5NYXRoKShncm91bmQudG9NYXRoWE1MKCkpICsgXCI8YnI+XCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcHBlbmQodGV4dCk7XG4gICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGJsYWNrXCI7XG4gICAgICAgIHRoaXMuc3R5bGUuYm94U2hhZG93ID0gXCIwLjNjaCAwLjNjaCAwLjZjaCByZ2JhKDAsIDAsIDAsIDAuNSlcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5wYWRkaW5nID0gXCIxY2hcIjtcbiAgICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IFwiZml0LWNvbnRlbnRcIjtcbiAgICAgICAgdGhpcy5zdHlsZS56SW5kZXggPSBcIjE1XCI7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBNYXRoSmF4LnR5cGVzZXQoW3RoaXNdKTtcbiAgICB9XG4gICAgYXJnO1xuICAgIG9uQ2xvc2U7XG59XG5leHBvcnRzLkV4cGxhbmF0aW9uUG9wdXAgPSBFeHBsYW5hdGlvblBvcHVwO1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiZXhwbGFuYXRpb24tcG9wdXBcIiwgRXhwbGFuYXRpb25Qb3B1cCwgeyBleHRlbmRzOiBcImRpdlwiIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkV4cHJlc3Npb25Ob2RlVmlldyA9IHZvaWQgMDtcbmNvbnN0IEVkaXRhYmxlTWF0aFZpZXdfMSA9IHJlcXVpcmUoXCIuL0VkaXRhYmxlTWF0aFZpZXdcIik7XG5jb25zdCBHcmFwaE5vZGVWaWV3XzEgPSByZXF1aXJlKFwiLi9HcmFwaE5vZGVWaWV3XCIpO1xuLyoqXG4gKiBBIGdyYXBoIG5vZGUgdmlldyBmb3IgZXhwcmVzc2lvbiBub2Rlcy5cbiAqL1xuY2xhc3MgRXhwcmVzc2lvbk5vZGVWaWV3IGV4dGVuZHMgR3JhcGhOb2RlVmlld18xLkdyYXBoTm9kZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKG5vZGUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICAgICAgdGhpcy5lZGl0YWJsZU1hdGhWaWV3ID0gbmV3IEVkaXRhYmxlTWF0aFZpZXdfMS5FZGl0YWJsZU1hdGhWaWV3KCk7XG4gICAgICAgIHRoaXMuZWRpdGFibGVNYXRoVmlldy52YWx1ZSA9IHRoaXMubm9kZTtcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmVkaXRhYmxlTWF0aFZpZXcpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5vZGUudG9TdHJpbmcoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB9XG4gICAgbm9kZTtcbiAgICBlZGl0YWJsZU1hdGhWaWV3O1xufVxuZXhwb3J0cy5FeHByZXNzaW9uTm9kZVZpZXcgPSBFeHByZXNzaW9uTm9kZVZpZXc7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJleHByZXNzaW9uLW5vZGV2aWV3XCIsIEV4cHJlc3Npb25Ob2RlVmlldywgeyBleHRlbmRzOiBcImRpdlwiIH0pO1xuY29uc3QgY29sb3JVbmhlYWx0aHlOb2RlcyA9IHRydWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR3JhcGhOb2RlVmlldyA9IHZvaWQgMDtcbi8qKlxuICogQW4gaHRtbCBlbGVtZW50IHRoYXQgcmVwcmVzZW50cyBhIG1hdGggZ3JhcGggbm9kZS5cbiAqL1xuY2xhc3MgR3JhcGhOb2RlVmlldyBleHRlbmRzIEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgLy90aGlzLnN0eWxlLmJvcmRlciA9IFwiYmx1ZSBkb3R0ZWQgMC4yY2hcIlxuICAgICAgICB0aGlzLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMWNoXCI7XG4gICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJsaWdodGJsdWVcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5wYWRkaW5nID0gXCIxY2hcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5wYWRkaW5nVG9wID0gXCIwXCI7XG4gICAgICAgIHRoaXMuc3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiMFwiO1xuICAgICAgICB0aGlzLnN0eWxlLndpZHRoID0gXCJmaXQtY29udGVudFwiO1xuICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IFwiZml0LWNvbnRlbnRcIjtcbiAgICAgICAgdGhpcy5zdHlsZS53aGl0ZVNwYWNlID0gXCJub3dyYXBcIjtcbiAgICAgICAgdGhpcy5zdHlsZS56SW5kZXggPSBcIjVcIjtcbiAgICB9XG4gICAgc2V0IGJhY2tncm91bmRDb2xvcih2YWx1ZSkge1xuICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHZhbHVlO1xuICAgIH1cbn1cbmV4cG9ydHMuR3JhcGhOb2RlVmlldyA9IEdyYXBoTm9kZVZpZXc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudWlQcmVmZXJlbmNlcyA9IHZvaWQgMDtcbmNsYXNzIFVJUHJlZmVyZW5jZXMge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBGdW5jdGlvbiBjYWxsZWQgd2hlbmV2ZXIgYSB1aSBwcmVmZXJlbmNlXG4gICAgICogaXMgY2hhbmdlZC5cbiAgICAgKi9cbiAgICBvblVwZGF0ZShjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgLy8gR2V0dGVycyBhbmQgU2V0dGVyc1xuICAgIC8qKlxuICAgICAqIEJhY2tncm91bmQgY29sb3Igb2YgYSBncmFwaCBlZGdlIGRlbm90aW5nXG4gICAgICogZXF1YWxpdHkgYmV0d2VlbiB0d28gZXhwcmVzc2lvbnMuXG4gICAgICogQ3NzIHZhbHVlLlxuICAgICAqL1xuICAgIGdldCBlZGdlRXF1YWxzQmFja2dyb3VuZENvbG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZWRnZUVxdWFsc0JhY2tncm91bmRDb2xvcjtcbiAgICB9XG4gICAgc2V0IGVkZ2VFcXVhbHNCYWNrZ3JvdW5kQ29sb3IodmFsKSB7XG4gICAgICAgIHRoaXMuX2VkZ2VFcXVhbHNCYWNrZ3JvdW5kQ29sb3IgPSB2YWw7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLmZvckVhY2goYyA9PiBjKCkpO1xuICAgIH1cbiAgICAvLyBQcmVmZXJlbmNlIFZhbHVlc1xuICAgIF9lZGdlRXF1YWxzQmFja2dyb3VuZENvbG9yID0gXCJub25lXCI7XG4gICAgY2FsbGJhY2tzID0gW107XG59XG5leHBvcnRzLnVpUHJlZmVyZW5jZXMgPSBuZXcgVUlQcmVmZXJlbmNlcygpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLldlYkdyYXBoVmlldyA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vQXJndW1lbnRcIik7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi4vZXhwcmVzc2lvbnMvRXhwcmVzc2lvblwiKTtcbmNvbnN0IEdyYXBoTWluaXB1bGF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HcmFwaE1pbmlwdWxhdG9yXCIpO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi4vdXRpbC9hc3NlcnRcIik7XG5jb25zdCBUb3VjaEdlc3R1cmVSZWNvZ25pemVyXzEgPSByZXF1aXJlKFwiLi4vLi4vVG91Y2hHZXN0dXJlUmVjb2duaXplclwiKTtcbmNvbnN0IEVkZ2VWaWV3XzEgPSByZXF1aXJlKFwiLi9FZGdlVmlld1wiKTtcbmNvbnN0IEV4cHJlc3Npb25Ob2RlVmlld18xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvbk5vZGVWaWV3XCIpO1xuY29uc3QgQXJndW1lbnROb2RlVmlld18xID0gcmVxdWlyZShcIi4vQXJndW1lbnROb2RlVmlld1wiKTtcbmNvbnN0IEV4cGxhbmF0aW9uUG9wdXBfMSA9IHJlcXVpcmUoXCIuL0V4cGxhbmF0aW9uUG9wdXBcIik7XG4vKipcbiAqIEEgdWkgZWxlbWVudCB0aGF0IHdpbGwgZGlzcGxheSBhIG1hdGggZ3JhcGggaW4gYSB3ZWIuXG4gKi9cbmNsYXNzIFdlYkdyYXBoVmlldyBleHRlbmRzIEhUTUxEaXZFbGVtZW50IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZ3JhcGggTXVzdCBiZSBmdWxseSBjb25uZWN0ZWQuXG4gICAgICogQHBhcmFtIHJvb3RzIE5vbi1lbXB0eS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihncmFwaCwgcm9vdHMsIGNvbmZpZyA9IHVuZGVmaW5lZCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmdyYXBoID0gZ3JhcGg7XG4gICAgICAgIHRoaXMubm9kZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IDA7XG4gICAgICAgIHRoaXMub2Zmc2V0WSA9IDA7XG4gICAgICAgIHRoaXMubm9kZVBvc2l0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5lZGdlUG9zaXRpb25zID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmVkZ2VzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJvb3ROb2RlcyA9IG5ldyBTZXQocm9vdHMpO1xuICAgICAgICB0aGlzLnJpbmdFbGVtZW50cyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5yaW5nUG9zaXRpb25zID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmV4cGxhbmF0aW9uUG9wdXBzID0gW107XG4gICAgICAgIGlmIChjb25maWcgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dBcmd1bWVudHMgPSBjb25maWcuc2hvd0FyZ3VtZW50cztcbiAgICAgICAgICAgIHRoaXMuZHJhd0VkZ2VMaW5lcyA9IGNvbmZpZy5kcmF3RWRnZUxpbmVzO1xuICAgICAgICAgICAgdGhpcy5kZWJ1Z0Nvcm5lckVuYWJsZWQgPSBjb25maWcuZGVidWdDb3JuZXJFbmFibGVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3R5bGUuY2xpcFBhdGggPSBcInBvbHlnb24oMCUgMCUsIDEwMCUgMCUsIDEwMCUgMTAwJSwgMCUgMTAwJSlcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRvdWNoRG93biA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1vdXNlRG93bilcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0aGlzLm9mZnNldFggKz0gZXZlbnQubW92ZW1lbnRYIC8gdGhpcy5zY2FsZTtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0WSArPSBldmVudC5tb3ZlbWVudFkgLyB0aGlzLnNjYWxlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVPZmZzZXQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb3VzZVBvcyA9IFBvaW50KGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xuICAgICAgICAgICAgY29uc3QgcHJlTW91c2VQb3MgPSB0aGlzLmdldEludGVybmFsUG9zKG1vdXNlUG9zKTtcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlRGVsdGEgPSBNYXRoLnBvdygwLjgsIGV2ZW50LmRlbHRhWSAvIDM2MCk7XG4gICAgICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGVEZWx0YSAqIHRoaXMuc2NhbGU7XG4gICAgICAgICAgICBjb25zdCBwb3N0TW91c2VQb3MgPSB0aGlzLmdldEludGVybmFsUG9zKG1vdXNlUG9zKTtcbiAgICAgICAgICAgIGNvbnN0IGludFhEaWZmID0gcG9zdE1vdXNlUG9zLnggLSBwcmVNb3VzZVBvcy54O1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkludGVybmFsIFggQ2hhbmdlIHVuZGVyIG1vdXNlIFwiICsgaW50WERpZmYpXG4gICAgICAgICAgICAvLyBBZGp1c3Qgb2Zmc2V0IHNvIHRoYXQgY29udGVudCB1bmRlciB0aGUgbW91c2UgZG9lc24ndCBtb3ZlXG4gICAgICAgICAgICAvL3RoaXMub2Zmc2V0WCArPSBpbnRYRGlmZlxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkNvcnJlY3RlZCBYIENoYW5nZSB1bmRlciBtb3VzZSBcIiArICh0aGlzLmdldEludGVybmFsUG9zKG1vdXNlUG9zKS54IC0gcHJlTW91c2VQb3MueCkpXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9mZnNldCgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdlc3R1cmVSZWNvZ25pemVyID0gbmV3IFRvdWNoR2VzdHVyZVJlY29nbml6ZXJfMS5Ub3VjaEdlc3R1cmVSZWNvZ25pemVyKCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZG93blwiLCB0aGlzLmdlc3R1cmVSZWNvZ25pemVyLnByb2Nlc3NUb3VjaERvd24pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLmdlc3R1cmVSZWNvZ25pemVyLnByb2Nlc3NUb3VjaEVuZCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsIHRoaXMuZ2VzdHVyZVJlY29nbml6ZXIucHJvY2Vzc1RvdWNoQ2FuY2VsKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMuZ2VzdHVyZVJlY29nbml6ZXIucHJvY2Vzc1RvdWNoTW92ZSk7XG4gICAgICAgIHRoaXMuZ2VzdHVyZVJlY29nbml6ZXIuYWRkUGluY2hMaXN0ZW5lcigoY2VudGVyLCBzY2FsZURlbHRhLCBmaW5nZXJzKSA9PiB7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlcE9rKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCBhIGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyB0aGUgY29sb3Igb2YgYSBub2RlLlxuICAgICAqIEBwYXJhbSBjb2xvckZuXG4gICAgICovXG4gICAgc2V0Tm9kZUNvbG9yaW5nU2NoZW1lKGNvbG9yRm4pIHtcbiAgICAgICAgdGhpcy5ub2RlQ29sb3JGbiA9IGNvbG9yRm47XG4gICAgICAgIHRoaXMucHJvcG9nYXRlU2V0dGluZ3NUb05vZGVzKCk7XG4gICAgfVxuICAgIG5vZGVDb2xvckZuID0gKG4pID0+IFwibGlnaHRibHVlXCI7XG4gICAgcHJvcG9nYXRlU2V0dGluZ3NUb05vZGVzKCkge1xuICAgICAgICB0aGlzLm5vZGVzLmZvckVhY2goKHZpZXcsIG5vZGUpID0+IHtcbiAgICAgICAgICAgIHZpZXcuYmFja2dyb3VuZENvbG9yID0gdGhpcy5ub2RlQ29sb3JGbihub2RlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgaWYgdGhlIHZpZXcgc2hvdWxkIHNob3cgYXJndW1lbnQgbm9kZXMgYXMgbm9kZXMuXG4gICAgICogRmFsc2UgYnkgZGVmYXVsdC5cbiAgICAgKiBAcGFyYW0gdmFsXG4gICAgICovXG4gICAgc2V0U2hvd0FyZ3VtZW50cyh2YWwpIHtcbiAgICAgICAgdGhpcy5zaG93QXJndW1lbnRzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZWFkR3JhcGgoKTtcbiAgICAgICAgdGhpcy5hcnJhbmdlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlT2Zmc2V0KCk7XG4gICAgfVxuICAgIGdldCBjZW50ZXIoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB0aGlzLm9mZnNldFdpZHRoIC8gMixcbiAgICAgICAgICAgIHk6IHRoaXMub2Zmc2V0SGVpZ2h0IC8gMixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRm9sbG93cyB0aGUgc2hvd0FyZ3VtZW50IHNldHRpbmcuXG4gICAgICogUG9wdWxhdGVzIHRoaXMubm9kZXMsIHRoaXMuZWRnZXMsXG4gICAgICogYWRkcyB0aGUgY3JlYXRlZCB2aWV3cyB0byB0aGUgc2hhZG93IGRvbVxuICAgICAqIHRvIG1hdGNoIHRoZSBncmFwaC5cbiAgICAgKiBSZW1vdmVzIGFueSBwcmUtZXhpc3RpbmcgZWxlbWVudHMgZnJvbSB0aGUgc2hhZG93IGRvbS5cbiAgICAgKi9cbiAgICByZWFkR3JhcGgoKSB7XG4gICAgICAgIC8vIENsZWFyIGV4aXN0aW5nXG4gICAgICAgIHRoaXMubm9kZXMuZm9yRWFjaCgodmlldywgbm9kZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh2aWV3KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubm9kZXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5lZGdlcy5mb3JFYWNoKCh2aWV3LCBlZGdlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHZpZXcpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lZGdlcy5jbGVhcigpO1xuICAgICAgICAvLyBGZXRjaCBub2Rlc1xuICAgICAgICB0aGlzLmdyYXBoLmdldE5vZGVzKCkuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2aWV3ID0gbmV3IEV4cHJlc3Npb25Ob2RlVmlld18xLkV4cHJlc3Npb25Ob2RlVmlldyhub2RlKTtcbiAgICAgICAgICAgICAgICB2aWV3LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZXMuc2V0KG5vZGUsIHZpZXcpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kKHZpZXcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIEFyZ3VtZW50XzEuQXJndW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2hvd0FyZ3VtZW50cylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgQXJndW1lbnROb2RlVmlld18xLkFyZ3VtZW50Tm9kZVZpZXcobm9kZSk7XG4gICAgICAgICAgICAgICAgdmlldy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzLnNldChub2RlLCB2aWV3KTtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZCh2aWV3KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHcmFwaCBjb250YWlucyBub2RlIFdlYkdyYXBoVmlldyBjYW4ndCBwcm9jZXNzLlwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEZldGNoIGVkZ2VzXG4gICAgICAgIEdyYXBoTWluaXB1bGF0b3JfMS5HcmFwaE1pbmlwdWxhdG9yLmRyb3BTeW1tZXRyaWModGhpcy5ncmFwaC5nZXRFZGdlcygpKS5maWx0ZXIoZWRnZSA9PiB7XG4gICAgICAgICAgICAvLyBPbmx5IGNvbnNpZGVyIGVkZ2VzIGZvciB3aGljaCB3ZSBoYXZlIGJvdGggZW5kcG9pbnRzIG9uIHRoZSB2aWV3XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2Rlcy5oYXMoZWRnZS5uKSAmJiB0aGlzLm5vZGVzLmhhcyhlZGdlLm4xKTtcbiAgICAgICAgfSkuZm9yRWFjaChlZGdlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgRWRnZVZpZXdfMS5FZGdlVmlldyh0aGlzLCBlZGdlKTtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICB0aGlzLmVkZ2VzLnNldChlZGdlLCB2aWV3KTtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kKHZpZXcpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcm9wb2dhdGVTZXR0aW5nc1RvTm9kZXMoKTtcbiAgICAgICAgaWYgKHRoaXMuZGVidWdDb3JuZXJFbmFibGVkKSB7XG4gICAgICAgICAgICBjb25zdCBjb3JuZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjb3JuZXIuaW5uZXJIVE1MID0gXCJHcmFwaCBOb2RlczogXCIgKyB0aGlzLmdyYXBoLmdldE5vZGVzKCkuc2l6ZSArIFwiPGJyPlwiXG4gICAgICAgICAgICAgICAgKyBcIlZpc2libGUgTm9kZXM6IFwiICsgdGhpcy5ub2Rlcy5zaXplICsgXCI8YnI+XCJcbiAgICAgICAgICAgICAgICArIFwiR3JhcGggRWRnZXM6IFwiICsgdGhpcy5ncmFwaC5nZXRFZGdlcygpLnNpemUgKyBcIjxicj5cIlxuICAgICAgICAgICAgICAgICsgXCJWaXNpYmxlIEVkZ2VzOiBcIiArIHRoaXMuZWRnZXMuc2l6ZSArIFwiPGJyPlwiO1xuICAgICAgICAgICAgY29ybmVyLnN0eWxlLnpJbmRleCA9IFwiMTAwXCI7XG4gICAgICAgICAgICBjb3JuZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgY29ybmVyLnN0eWxlLndpZHRoID0gXCJmaXQtY29udGVudFwiO1xuICAgICAgICAgICAgY29ybmVyLnN0eWxlLm1hcmdpbiA9IFwiMFwiO1xuICAgICAgICAgICAgY29ybmVyLnN0eWxlLnBhZGRpbmcgPSBcIjFjaFwiO1xuICAgICAgICAgICAgY29ybmVyLnN0eWxlLmJvcmRlciA9IFwiYmxhY2sgMXB4IHNvbGlkXCI7XG4gICAgICAgICAgICBjb3JuZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZChjb3JuZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVwT2soKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMucmVhZEdyYXBoKCk7XG4gICAgICAgIHRoaXMuYXJyYW5nZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZU9mZnNldCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQaWNrIHBsYWNlcyBmb3IgYWxsIHRoZSBub2Rlcy9lZGdlcyBvbiB0aGUgc2NyZWVuLlxuICAgICAqIFBvcHVsYXRlcyB0aGUgcG9zaXRpb24qIHJlcCB2YXJzLlxuICAgICAqL1xuICAgIGFycmFuZ2UoKSB7XG4gICAgICAgIHRoaXMubm9kZVBvc2l0aW9ucy5jbGVhcigpO1xuICAgICAgICB0aGlzLmVkZ2VQb3NpdGlvbnMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yaW5nUG9zaXRpb25zLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucmluZ0VsZW1lbnRzLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yaW5nRWxlbWVudHMuY2xlYXIoKTtcbiAgICAgICAgLy8gUGxhY2Ugbm9kZXMgb24gYSBzZXJpZXMgb2YgcmluZ3MgZnJvbSB0aGUgY2VudGVyIHVzaW5nIHRoZWlyIGRlcHRoIGluIHRoZSBncmFwaFxuICAgICAgICBjb25zdCBsZXZlbHMgPSBHcmFwaE1pbmlwdWxhdG9yXzEuR3JhcGhNaW5pcHVsYXRvci5nZXRMZXZlbHModGhpcy5ncmFwaCwgdGhpcy5yb290Tm9kZXMsIChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIEFyZ3VtZW50XzEuQXJndW1lbnQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0FyZ3VtZW50cztcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOZXcgdHlwZSBvZiBub2RlXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IG1heERlcHRoID0gMDtcbiAgICAgICAgbGV2ZWxzLmZvckVhY2goKF8sIGRlcHRoKSA9PiB7XG4gICAgICAgICAgICBtYXhEZXB0aCA9IE1hdGgubWF4KG1heERlcHRoLCBkZXB0aCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjZW50ZXIgPSB7IHg6ICh0aGlzLmNsaWVudFdpZHRoIC8gMiksIHk6IHRoaXMuY2xpZW50SGVpZ2h0IC8gMiB9O1xuICAgICAgICBsZXQgbGFzdFJhZGl1cyA9IDA7IC8vcHhcbiAgICAgICAgZm9yIChsZXQgZGVwdGggPSAwOyBkZXB0aCA8IG1heERlcHRoICsgMTsgZGVwdGgrKykge1xuICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBsZXZlbHMuZ2V0KGRlcHRoKTtcbiAgICAgICAgICAgIC8vIE9yZ2FuaXplIHRoZSByb290IG5vZGVzIG9uIGEgY2lyY2xlIGFyb3VuZCB0aGUgY2VudGVyXG4gICAgICAgICAgICBjb25zdCBzdGVwU2l6ZSA9ICgyICogTWF0aC5QSSkgLyBub2Rlcy5zaXplO1xuICAgICAgICAgICAgLy8gVGhlIHN0YXJ0aW5nIGFuZ3VsYXIgb2Zmc2V0IHRvIGFkZCB0aGUgc3RlcHNpemUgdG9cbiAgICAgICAgICAgIC8vIE1ha2luZyBpdCBub24temVybyBzdG9wcyB0aGluZ3MgZnJvbSBhbGlnbmluZ1xuICAgICAgICAgICAgY29uc3Qgc3RlcE9mZnNldCA9IChNYXRoLlBJIC8gMy41KSAqIGRlcHRoO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxjdWxhdGluZyB0aGUgcmFkaXVzIG9mIHRoZSBjaXJjbGVcbiAgICAgICAgICAgICAqIFN1cHBvc2UgZXZlcnkgcm9vdCBub2RlIG9uIHRoZSBzdGFydGluZyBjaXJjbGUgcmVxdWlyZXNcbiAgICAgICAgICAgICAqIGEgY2lyY3VsYXIgc3BhY2UgdG8gYmUgZHJhd24gd2l0aCByYWRpdXMgbm9kZVJhZGl1c1xuICAgICAgICAgICAgICogQSBzdGFydGluZyBjaXJjbGUgd2l0aCBuIG9mIHRoZXNlIG5vZGVzIHdvdWxkIHJlcXVpcmUgYVxuICAgICAgICAgICAgICogY2lyY3VtZmVyZW5jZSBvZiBuICogMm5vZGVSYWRpdXMuXG4gICAgICAgICAgICAgKiBUaGUgY2lyY3VtZmVyZW5jZSBvZiBhIGNpcmNsZSBjYW4gYmUgZXhwcmVzc2VkXG4gICAgICAgICAgICAgKiBhcyAyKnBpKnJcbiAgICAgICAgICAgICAqID0+IHIgPSBuICogMiAqIHNtYWxsUiAvICgyICogcGkpXG4gICAgICAgICAgICAgKiAgICAgID0gbiAqIHNtYWxsUiAvIHBpXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnN0IG5vZGVSYWRpdXMgPSA3MDsgLy8gcGl4ZWxzXG4gICAgICAgICAgICBsZXQgcmFkaXVzID0gTWF0aC5tYXgobm9kZXMuc2l6ZSAqIG5vZGVSYWRpdXMgLyBNYXRoLlBJLCBsYXN0UmFkaXVzICsgKDMgKiBub2RlUmFkaXVzKSk7XG4gICAgICAgICAgICBpZiAoZGVwdGggPT0gMCAmJiBub2Rlcy5zaXplID09IDEpXG4gICAgICAgICAgICAgICAgcmFkaXVzID0gMDtcbiAgICAgICAgICAgIGxhc3RSYWRpdXMgPSByYWRpdXM7XG4gICAgICAgICAgICBjb25zdCBucyA9IFsuLi5ub2Rlc107IC8vIFRPRE8sIGFzc2lnbiBhIG1lYW5pbmdmdWwgb3JkZXJpbmdcbiAgICAgICAgICAgIG5zLmZvckVhY2goKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmlldyA9IHRoaXMubm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICAgICAgICAgIC8vdmlldy5zdHlsZS53aWR0aCA9IFwiXCIgKyBzbWFsbFIgKyBcInB4XCJcbiAgICAgICAgICAgICAgICAvL3ZpZXcuc3R5bGUuaGVpZ2h0ID0gXCJcIiArIHNtYWxsUiArIFwicHhcIlxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgY2FydGVzaWFuIHBvaW50IGZyb20gdGhlIHJhZGl1cyBhbmQgYW5nbGVcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gcmFkaXVzICogTWF0aC5jb3Moc3RlcFNpemUgKiBpbmRleCArIHN0ZXBPZmZzZXQpICsgY2VudGVyLng7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IHJhZGl1cyAqIE1hdGguc2luKHN0ZXBTaXplICogaW5kZXggKyBzdGVwT2Zmc2V0KSArIGNlbnRlci55O1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZVBvc2l0aW9ucy5zZXQodmlldywgUG9pbnQoeCwgeSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCByaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHJpbmcuc3R5bGUuYm9yZGVyID0gXCJsaWdodGdyYXkgc29saWQgMC4zY2hcIjtcbiAgICAgICAgICAgIHJpbmcuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMDAlXCI7XG4gICAgICAgICAgICByaW5nLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgcmluZy5zdHlsZS56SW5kZXggPSBcIi0xMFwiO1xuICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChyaW5nKTtcbiAgICAgICAgICAgIHRoaXMucmluZ0VsZW1lbnRzLmFkZChyaW5nKTtcbiAgICAgICAgICAgIHRoaXMucmluZ1Bvc2l0aW9ucy5zZXQocmluZywgeyByYWRpdXM6IHJhZGl1cyB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBOb3cgYXJhbmdlIHRoZSBlZGdlc1xuICAgICAgICB0aGlzLmVkZ2VzLmZvckVhY2goKHZpZXcsIGVkZ2UpID0+IHtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIG1pZGRsZSBvZiB0aGUgdHdvIGVuZHB0c1xuICAgICAgICAgICAgY29uc3QgZmlyc3RYID0gdGhpcy5ub2RlUG9zaXRpb25zLmdldCh0aGlzLm5vZGVzLmdldChlZGdlLm4pKS54O1xuICAgICAgICAgICAgY29uc3QgZmlyc3RZID0gdGhpcy5ub2RlUG9zaXRpb25zLmdldCh0aGlzLm5vZGVzLmdldChlZGdlLm4pKS55O1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kWCA9IHRoaXMubm9kZVBvc2l0aW9ucy5nZXQodGhpcy5ub2Rlcy5nZXQoZWRnZS5uMSkpLng7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmRZID0gdGhpcy5ub2RlUG9zaXRpb25zLmdldCh0aGlzLm5vZGVzLmdldChlZGdlLm4xKSkueTtcbiAgICAgICAgICAgIGNvbnN0IHggPSAoZmlyc3RYICsgc2Vjb25kWCkgLyAyO1xuICAgICAgICAgICAgY29uc3QgeSA9IChmaXJzdFkgKyBzZWNvbmRZKSAvIDI7XG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoc2Vjb25kWSAtIGZpcnN0WSwgc2Vjb25kWCAtIGZpcnN0WCk7XG4gICAgICAgICAgICB0aGlzLmVkZ2VQb3NpdGlvbnMuc2V0KHZpZXcsIHsgeDogeCwgeTogeSwgYW5nbGU6IGFuZ2xlIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZXBPaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGRyYXcgcG9zaXRpb24gb2YgdGhlIG5vZGVzIG9uIHRoZSBzY3JlZW5cbiAgICAgKiB0byBtYXRjaCB0aGUgb2Zmc2V0IGluIHJlcC4gQXNzdW1lcyBhbGwgdmlld3MgaGF2ZSBhIHBvc2l0aW9uXG4gICAgICogc3RvcmVkIGluIHRoZSByZXAuIENhbGwgYXJyYW5nZSgpIGZpcnN0LlxuICAgICAqIEFsc28gYXBwbGllcyB0aGUgc2NhbGUgZmFjdG9yIHRvIHRoZSBmaW5hbCBkcmF3IHBvc2l0aW9ucyxcbiAgICAgKiBpbnZpc2libGUgdG8gZXZlcnlvbmUgZWxzZS5cbiAgICAgKi9cbiAgICB1cGRhdGVPZmZzZXQoKSB7XG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHRoaXMuY2VudGVyO1xuICAgICAgICBjb25zdCBzY2FsZSA9IHRoaXMuc2NhbGU7XG4gICAgICAgIGZ1bmN0aW9uIGFwcGx5U2NhbGUoaSkge1xuICAgICAgICAgICAgcmV0dXJuIFBvaW50KCgoaS54KSAtIGNlbnRlci54KSAqIHNjYWxlICsgY2VudGVyLngsICgoaS55KSAtIGNlbnRlci55KSAqIHNjYWxlICsgY2VudGVyLnkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZVBvc2l0aW9ucy5mb3JFYWNoKChwb3MsIHZpZXcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFkanVzdGVkID0gYXBwbHlTY2FsZSh7XG4gICAgICAgICAgICAgICAgeDogcG9zLnggKyB0aGlzLm9mZnNldFgsXG4gICAgICAgICAgICAgICAgeTogcG9zLnkgKyB0aGlzLm9mZnNldFksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUubGVmdCA9IFwiXCIgKyAoYWRqdXN0ZWQueCAtICgwLjUgKiB2aWV3Lm9mZnNldFdpZHRoKSkgKyBcInB4XCI7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLnRvcCA9IFwiXCIgKyAoYWRqdXN0ZWQueSAtICgwLjUgKiB2aWV3Lm9mZnNldEhlaWdodCkpICsgXCJweFwiO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lZGdlUG9zaXRpb25zLmZvckVhY2goKHBvcywgdmlldykgPT4ge1xuICAgICAgICAgICAgdmlldy5zZXRBbmdsZShwb3MuYW5nbGUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZHJhd0VkZ2VMaW5lcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0UG9zID0gdGhpcy5ub2RlUG9zaXRpb25zLmdldCh0aGlzLm5vZGVzLmdldCh2aWV3LmZpcnN0KSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kUG9zID0gdGhpcy5ub2RlUG9zaXRpb25zLmdldCh0aGlzLm5vZGVzLmdldCh2aWV3LnNlY29uZCkpO1xuICAgICAgICAgICAgICAgIHZpZXcud2lkdGggPSBcIlwiICsgKHNjYWxlICogTWF0aC5oeXBvdChzZWNvbmRQb3MueCAtIGZpcnN0UG9zLngsIHNlY29uZFBvcy55IC0gZmlyc3RQb3MueSkpICsgXCJweFwiO1xuICAgICAgICAgICAgICAgIHZpZXcuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJibGFjayAwLjFjaCBzb2xpZFwiO1xuICAgICAgICAgICAgICAgIHZpZXcuc3R5bGUuYm9yZGVyVG9wID0gXCJibGFjayAwLjFjaCBzb2xpZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlldy53aWR0aCA9IFwiZml0LWNvbnRlbnRcIjtcbiAgICAgICAgICAgICAgICB2aWV3LnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIHZpZXcuc3R5bGUuYm9yZGVyVG9wID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhZGp1c3RlZCA9IGFwcGx5U2NhbGUoe1xuICAgICAgICAgICAgICAgIHg6IHBvcy54ICsgdGhpcy5vZmZzZXRYLFxuICAgICAgICAgICAgICAgIHk6IHBvcy55ICsgdGhpcy5vZmZzZXRZLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLmxlZnQgPSBcIlwiICsgKGFkanVzdGVkLnggLSAoMC41ICogdmlldy5vZmZzZXRXaWR0aCkpICsgXCJweFwiO1xuICAgICAgICAgICAgdmlldy5zdHlsZS50b3AgPSBcIlwiICsgKGFkanVzdGVkLnkgLSAoMC41ICogdmlldy5vZmZzZXRIZWlnaHQpKSArIFwicHhcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIE92ZXJsYXkgZWxlbWVudHMgY2hhbmdlIHNpemUgd2l0aCBzY2FsZVxuICAgICAgICB0aGlzLnJpbmdQb3NpdGlvbnMuZm9yRWFjaCgocG9zLCB2aWV3KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhZGp1c3RlZENlbnRlclBvcyA9IGFwcGx5U2NhbGUoe1xuICAgICAgICAgICAgICAgIHg6IGNlbnRlci54ICsgdGhpcy5vZmZzZXRYLFxuICAgICAgICAgICAgICAgIHk6IGNlbnRlci55ICsgdGhpcy5vZmZzZXRZLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLmxlZnQgPSBcIlwiICsgKGFkanVzdGVkQ2VudGVyUG9zLnggLSAocG9zLnJhZGl1cyAqIHNjYWxlKSkgKyBcInB4XCI7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLnRvcCA9IFwiXCIgKyAoYWRqdXN0ZWRDZW50ZXJQb3MueSAtIChwb3MucmFkaXVzICogc2NhbGUpKSArIFwicHhcIjtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUud2lkdGggPSBcIlwiICsgcG9zLnJhZGl1cyAqIDIgKiBzY2FsZSArIFwicHhcIjtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUuYXNwZWN0UmF0aW8gPSBcIjFcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZXhwbGFuYXRpb25Qb3B1cHMuZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmlldyA9IHZhbC5lO1xuICAgICAgICAgICAgY29uc3QgcG9zID0gdmFsLnBvcztcbiAgICAgICAgICAgIGNvbnN0IGFkanVzdGVkID0gYXBwbHlTY2FsZSh7XG4gICAgICAgICAgICAgICAgeDogcG9zLnggKyB0aGlzLm9mZnNldFgsXG4gICAgICAgICAgICAgICAgeTogcG9zLnkgKyB0aGlzLm9mZnNldFksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUubGVmdCA9IFwiXCIgKyAoYWRqdXN0ZWQueCAtICgwLjUgKiB2aWV3Lm9mZnNldFdpZHRoKSkgKyBcInB4XCI7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLnRvcCA9IFwiXCIgKyAoYWRqdXN0ZWQueSAtICgwLjUgKiB2aWV3Lm9mZnNldEhlaWdodCkpICsgXCJweFwiO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZXBPaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNYXAgZnJvbSByZWxhdGl2ZSBzY3JlZW4gY29vcmRpbmF0ZXMgKHdoZXJlIHRsIG9mIHRoaXMgdmlldyBpcyAoMCwwKSlcbiAgICAgKiB0byB0aGUgaW50ZXJuYWwgY29vcmRpbmF0ZSBzeXN0ZW0gd2UncmUgdXNpbmcuXG4gICAgICovXG4gICAgZ2V0SW50ZXJuYWxQb3MocGl4ZWxQb3MpIHtcbiAgICAgICAgY29uc3QgY2VudGVyID0gdGhpcy5jZW50ZXI7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gdGhpcy5zY2FsZTtcbiAgICAgICAgcmV0dXJuIFBvaW50KChwaXhlbFBvcy54IC0gY2VudGVyLngpIC8gc2NhbGUgKyBjZW50ZXIueCAtIHRoaXMub2Zmc2V0WCwgKHBpeGVsUG9zLnkgLSBjZW50ZXIueSkgLyBzY2FsZSArIGNlbnRlci55IC0gdGhpcy5vZmZzZXRZKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVhY3QgdG8gYW4gZWRnZSBiZWluZyBjbGlja2VkLlxuICAgICAqIEBwYXJhbSB2aWV3IEluIHRoaXMgdmlld1xuICAgICAqIEBwYXJhbSBldmVudCBUaGUgY2xpY2sgZXZlbnRcbiAgICAgKi9cbiAgICBlZGdlQ2xpY2tlZCh2aWV3LCBldmVudCkge1xuICAgICAgICAvLyBUT0RPOiBEb24ndCBhbGxvdyBkdXBsaWF0ZSBleHBsYW5hdGlvbiBwb3B1cHNcbiAgICAgICAgaWYgKHZpZXcuZWRnZSBpbnN0YW5jZW9mIEFyZ3VtZW50XzEuQXJndW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvcHVwID0gbmV3IEV4cGxhbmF0aW9uUG9wdXBfMS5FeHBsYW5hdGlvblBvcHVwKHZpZXcuZWRnZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQocG9wdXApO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5leHBsYW5hdGlvblBvcHVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5leHBsYW5hdGlvblBvcHVwc1tpXS5lID09PSBwb3B1cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBsYW5hdGlvblBvcHVwcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCByZWFsdGl2ZVggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgcmVsYXRpdmVZID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgLy9UT0RPOiBUaGUgcG9zaXRpb24gaXNuJ3QgY29ycmVjdFxuICAgICAgICAgICAgLy9UT0RPOiBBbGdvcml0aG0gZm9yIHBpY2tpbmcgd2hlcmUgd2Ugc2hvdWxkIHB1dCB0aGUgcG9wdXAgc28gaXQgc3RheXMgb3V0XG4gICAgICAgICAgICAvLyBvZiB0aGUgd2F5IG9mIHRoZSBncmFwaFxuICAgICAgICAgICAgdGhpcy5leHBsYW5hdGlvblBvcHVwcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBlOiBwb3B1cCxcbiAgICAgICAgICAgICAgICBwb3M6IHRoaXMuZ2V0SW50ZXJuYWxQb3MoUG9pbnQocmVhbHRpdmVYLCByZWxhdGl2ZVkpKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcG9wdXAuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZChwb3B1cCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9mZnNldCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlcE9rKCkge1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLnJvb3ROb2Rlcy5zaXplID4gMCk7XG4gICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKEdyYXBoTWluaXB1bGF0b3JfMS5HcmFwaE1pbmlwdWxhdG9yLmlzQ29ubmVjdGVkKHRoaXMuZ3JhcGgpLCBcIkdyYXBoIG5vdCBjb25uZWN0ZWRcIik7XG4gICAgfVxuICAgIGdyYXBoO1xuICAgIG5vZGVzO1xuICAgIC8vIFRoZSBQb3NpdGlvbiBvZiB0aGUgY2VudGVyIG9mIHRoZSBub2RlLlxuICAgIG5vZGVQb3NpdGlvbnM7XG4gICAgZWRnZXM7XG4gICAgZWRnZVBvc2l0aW9ucztcbiAgICAvLyBBbXQgdG8gYWRkIHRvIGxlZnQgY29vcmRpbmF0ZVxuICAgIG9mZnNldFg7XG4gICAgLy8gQWRkZWQgdG8gdG9wIGNvb3JkaW5hdGUgb2Ygbm9kZXNcbiAgICBvZmZzZXRZO1xuICAgIC8vIGlmIHRoZSBtb3VzZSBpcyBkb3duXG4gICAgbW91c2VEb3duID0gZmFsc2U7XG4gICAgdG91Y2hEb3duID0gZmFsc2U7XG4gICAgc2NhbGUgPSAxO1xuICAgIHJvb3ROb2RlcztcbiAgICByaW5nRWxlbWVudHM7XG4gICAgcmluZ1Bvc2l0aW9ucztcbiAgICAvKipcbiAgICAgKiBQb3NpdGlvbiBvZiB0b3AgbGVmdCBvZiBwb3B1cFxuICAgICAqL1xuICAgIGV4cGxhbmF0aW9uUG9wdXBzO1xuICAgIGdlc3R1cmVSZWNvZ25pemVyO1xuICAgIC8vIElmIHRoZSBncmFwaCBzaG91bGQgZHJhdyBhcmd1bWVudCBub2Rlcy5cbiAgICBzaG93QXJndW1lbnRzID0gZmFsc2U7XG4gICAgZHJhd0VkZ2VMaW5lcyA9IGZhbHNlO1xuICAgIGRlYnVnQ29ybmVyRW5hYmxlZCA9IGZhbHNlO1xuICAgIHJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKF8gPT4ge1xuICAgICAgICB0aGlzLmFycmFuZ2UoKTtcbiAgICAgICAgdGhpcy51cGRhdGVPZmZzZXQoKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuV2ViR3JhcGhWaWV3ID0gV2ViR3JhcGhWaWV3O1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwid2ViLWdyYXBodmlld1wiLCBXZWJHcmFwaFZpZXcsIHsgZXh0ZW5kczogXCJkaXZcIiB9KTtcbmZ1bmN0aW9uIFBvaW50KHgsIHksIGFuZ2xlID0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKGFuZ2xlID09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5LFxuICAgICAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IHgsXG4gICAgICAgIHk6IHksXG4gICAgICAgIGFuZ2xlOiBhbmdsZSxcbiAgICB9O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlID0gdm9pZCAwO1xuLyoqXG4gKiBQYXJzZXMgaHVtYW4gd3JpdHRlbiwgdXRmLTggdHlwZSBtYXRoIGV4cHJlc3Npb25zXG4gKiBpbnRvIGFjdHVhbCBtYXRoLlxuICogQHBhcmFtIGlucHV0XG4gKi9cbmZ1bmN0aW9uIHBhcnNlKGlucHV0KSB7XG4gICAgY29uc3Qgb3V0ID0gW107XG4gICAgY29uc29sZS5sb2coXCJJbnB1dDogXCIgKyBpbnB1dCk7XG4gICAgY29uc3QgZmluZEV4cHJlc3Npb25zID0gL1swLTlhLXpBLVpdKy87XG4gICAgY29uc3QgZmluZE9wZXJhdG9ycyA9IC9bXFwrXFwtXFwqXFwvXFxeXS87XG4gICAgY29uc29sZS5sb2coZmluZEV4cHJlc3Npb25zKTtcbiAgICBjb25zdCBzcGxpdCA9IGlucHV0LnNwbGl0KGZpbmRFeHByZXNzaW9ucyk7XG4gICAgY29uc29sZS5sb2coc3BsaXQpO1xuICAgIHJldHVybiBvdXQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG5mdW5jdGlvbiBwYXJzZUV4cHJlc3Npb24oaW5wdXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWRcIik7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaW5NYXRoQmxvY2sgPSBleHBvcnRzLmluTWF0aCA9IGV4cG9ydHMuaW5Sb3cgPSBleHBvcnRzLmluUGFyZW4gPSB2b2lkIDA7XG4vKipcbiAqIFdyYXBzIHRoZSBnaXZlbiBtYXRobWwgc3RyaW5nIGluIG1hdGhtbCBwYXJlbnRoYXNlcy5cbiAqIEBwYXJhbSBzdHJcbiAqL1xuZnVuY3Rpb24gaW5QYXJlbihzdHIpIHtcbiAgICByZXR1cm4gXCI8bW8+KDwvbW8+XCIgKyBzdHIgKyBcIjxtbz4pPC9tbz5cIjtcbn1cbmV4cG9ydHMuaW5QYXJlbiA9IGluUGFyZW47XG4vKipcbiAqIFB1dHMgdGhlIGdpdmVuIG1hdGhtbCBleHByZXNzaW9uIGluIGEgcm93IHNvIHRoYXRcbiAqIGl0IGRvZXNuJ3QgZ2V0IGRpdmlkZWQgYnkgbWF0aGpheC5cbiAqIEBwYXJhbSBzdHJcbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIGluUm93KHN0cikge1xuICAgIHJldHVybiBcIjxtcm93PlwiICsgc3RyICsgXCI8L21yb3c+XCI7XG59XG5leHBvcnRzLmluUm93ID0gaW5Sb3c7XG4vKipcbiAqIFdyYXBzIHRoZSBnaXZlbiBzdHJpbmcgaW4gPG1hdGg+PC9tYXRoPlxuICogQHBhcmFtIHN0clxuICovXG5mdW5jdGlvbiBpbk1hdGgoc3RyKSB7XG4gICAgcmV0dXJuIFwiPG1hdGg+XCIgKyBzdHIgKyBcIjwvbWF0aD5cIjtcbn1cbmV4cG9ydHMuaW5NYXRoID0gaW5NYXRoO1xuLyoqXG4gKiBXcmFwcyB0aGUgZ2l2ZW4gc3RyaW5nIGluIDxtYXRoIGRpc3BsYXk9J2Jsb2NrJz48L21hdGg+XG4gKiBAcGFyYW0gc3RyXG4gKi9cbmZ1bmN0aW9uIGluTWF0aEJsb2NrKHN0cikge1xuICAgIHJldHVybiBcIjxtYXRoIGRpc3BsYXk9J2Jsb2NrJz5cIiArIHN0ciArIFwiPC9tYXRoPlwiO1xufVxuZXhwb3J0cy5pbk1hdGhCbG9jayA9IGluTWF0aEJsb2NrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhcyA9IGV4cG9ydHMuYWRkQWxsID0gZXhwb3J0cy5zZXRPZiA9IHZvaWQgMDtcbmZ1bmN0aW9uIHNldE9mKC4uLmFycikge1xuICAgIGNvbnN0IG91dCA9IG5ldyBTZXQoKTtcbiAgICBhcnIuZm9yRWFjaChlID0+IG91dC5hZGQoZSkpO1xuICAgIHJldHVybiBvdXQ7XG59XG5leHBvcnRzLnNldE9mID0gc2V0T2Y7XG4vKipcbiAqIEFkZHMgdGhlIGdpdmVuIGVsZW1lbnRzIHRvIHRoZSBnaXZlbiBjb2xsZWN0aW9uXG4gKiBAcGFyYW0gY29sbGVjdGlvblxuICogQHBhcmFtIGVsZW1lbnRzXG4gKi9cbmZ1bmN0aW9uIGFkZEFsbChjb2xsZWN0aW9uLCAuLi5lbGVtZW50cykge1xuICAgIGZvciAoY29uc3QgZSBvZiBlbGVtZW50cykge1xuICAgICAgICBjb2xsZWN0aW9uLmFkZChlKTtcbiAgICB9XG59XG5leHBvcnRzLmFkZEFsbCA9IGFkZEFsbDtcbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBlbGVtZW50IGlzIGluIHRoZSBnaXZlbiBjb2xsZWN0aW9uXG4gKiB1c2luZyByZWZlcmVuY2lhbCBlcXVhbGl0eS5cbiAqIEBwYXJhbSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0gZWxlbWVudFxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgY29sbGVjdGlvbiBoYXMgdGhlIGVsZW1lbnQsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZnVuY3Rpb24gaGFzKGNvbGxlY3Rpb24sIGVsZW1lbnQpIHtcbiAgICBmb3IgKGNvbnN0IGUgb2YgY29sbGVjdGlvbikge1xuICAgICAgICBpZiAoZSA9PT0gZWxlbWVudClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmhhcyA9IGhhcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5hc3NlcnQgPSB2b2lkIDA7XG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gZXhwcmVzc2lvbiBldmFsdWF0ZWQgdG8gdHJ1ZS4gSWYgbm90LCB0aHJvd3MgZXJyb3JcbiAqIHdpdGggdGhlIG1lc3NhZ2UgZ2l2ZW4uXG4gKiBAcGFyYW0gbXNnIERpc3BsYXllZCBpZiB0aGUgZXhwcmVzc2lvbiBpcyBmYWxzZS4gRGVmYXVsdHMgdG8gXCJGYWlsZWQgQXNzZXJ0XCJcbiAqL1xuZnVuY3Rpb24gYXNzZXJ0KGV4cCwgbXNnID0gXCJGYWlsZWQgYXNzZXJ0XCIpIHtcbiAgICBpZiAoIWV4cClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG59XG5leHBvcnRzLmFzc2VydCA9IGFzc2VydDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFByaW1hcnlQYWdlTG9hZGVyXzEgPSByZXF1aXJlKFwiLi9QcmltYXJ5UGFnZUxvYWRlclwiKTtcbmNvbnN0IEV4cHJlc3Npb25UZXN0UGFnZUxvYWRlcl8xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvblRlc3RQYWdlTG9hZGVyXCIpO1xud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAgKiBQb3B1bGF0ZSBodG1sIGVsZW1lbnRzIGJ5IHRoZWlyIGNsYXNzLlxuICAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmNsYXNzTGlzdDtcbiAgICAgICAgaWYgKGNsYXNzZXMuY29udGFpbnMoJ2V4cHJlc3Npb25UZXN0UGFnZScpKSB7XG4gICAgICAgICAgICAoMCwgRXhwcmVzc2lvblRlc3RQYWdlTG9hZGVyXzEubG9hZEV4cHJlc3Npb25zVGVzdFBhZ2UpKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2xhc3Nlcy5jb250YWlucygncHJpbWFyeUludGVncmF0b3InKSkge1xuICAgICAgICAgICAgKDAsIFByaW1hcnlQYWdlTG9hZGVyXzEubG9hZFByaW1hcnlQYWdlKSgpO1xuICAgICAgICB9XG4gICAgfSwgMTAwKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=