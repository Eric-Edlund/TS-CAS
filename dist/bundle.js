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
const Relationship_1 = __webpack_require__(/*! ./mathlib/Relationship */ "./mathlib/Relationship.ts");
const Deriver_1 = __webpack_require__(/*! ./mathlib/derivations/Deriver */ "./mathlib/derivations/Deriver.ts");
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ./mathlib/derivations/NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
const CombineCommonTermsAddition_1 = __webpack_require__(/*! ./mathlib/derivations/simplifications/CombineCommonTermsAddition */ "./mathlib/derivations/simplifications/CombineCommonTermsAddition.ts");
const CombineCommonTermsMultiplication_1 = __webpack_require__(/*! ./mathlib/derivations/simplifications/CombineCommonTermsMultiplication */ "./mathlib/derivations/simplifications/CombineCommonTermsMultiplication.ts");
const EvaluateSums_1 = __webpack_require__(/*! ./mathlib/derivations/simplifications/EvaluateSums */ "./mathlib/derivations/simplifications/EvaluateSums.ts");
const OrderSums_1 = __webpack_require__(/*! ./mathlib/derivations/simplifications/OrderSums */ "./mathlib/derivations/simplifications/OrderSums.ts");
const ReduceReducibles_1 = __webpack_require__(/*! ./mathlib/derivations/simplifications/ReduceReducibles */ "./mathlib/derivations/simplifications/ReduceReducibles.ts");
const Expression_1 = __webpack_require__(/*! ./mathlib/expressions/Expression */ "./mathlib/expressions/Expression.ts");
const RelationalDerivationRule_1 = __webpack_require__(/*! ./mathlib/derivations/RelationalDerivationRule */ "./mathlib/derivations/RelationalDerivationRule.ts");
const SubtractFromBothSides_1 = __webpack_require__(/*! ./mathlib/derivations/algebra/SubtractFromBothSides */ "./mathlib/derivations/algebra/SubtractFromBothSides.ts");
const DivideOnBothSides_1 = __webpack_require__(/*! ./mathlib/derivations/algebra/DivideOnBothSides */ "./mathlib/derivations/algebra/DivideOnBothSides.ts");
const Variable_1 = __webpack_require__(/*! ./mathlib/expressions/Variable */ "./mathlib/expressions/Variable.ts");
const SumCoefficientsOfAddedTerms_1 = __webpack_require__(/*! ./mathlib/derivations/simplifications/SumCoefficientsOfAddedTerms */ "./mathlib/derivations/simplifications/SumCoefficientsOfAddedTerms.ts");
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new CombineCommonTermsAddition_1.CombineCommonTermsAddition());
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new CombineCommonTermsMultiplication_1.CombineCommonTermsMultiplication());
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new EvaluateSums_1.EvaluateSums());
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new OrderSums_1.OrderSums());
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new ReduceReducibles_1.ReduceReducibles());
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new SumCoefficientsOfAddedTerms_1.SumCoefficientsOfAddedTerms());
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
    const root = (0, ConvenientExpressions_1.sum)((0, ConvenientExpressions_1.sum)(ConvenientExpressions_1.a, ConvenientExpressions_1.a), (0, ConvenientExpressions_1.product)(ConvenientExpressions_1.a, ConvenientExpressions_1.a));
    const otherRoot = (0, ConvenientExpressions_1.sum)((0, ConvenientExpressions_1.product)(ConvenientExpressions_1.b, ConvenientExpressions_1.c), ConvenientExpressions_1.a);
    const graph = new Graph_1.Graph().addRelationship(root, otherRoot, Relationship_1.Relationship.Equal);
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
    };
    const graphView = new WebGraphView_1.WebGraphView(graph, new Set([root, otherRoot]), config);
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
exports.y = exports.x = exports.f = exports.e = exports.d = exports.c = exports.b = exports.a = exports.productAndNotTimesOne = exports.productOrNot = exports.equivalenceArgument = exports.int = exports.v = exports.num = exports.negative = exports.product = exports.orderedProduct = exports.sumOrNot = exports.sumIntuitive = exports.sumEvalIntegerTerms = exports.orderedSum = exports.sum = exports.fraction = void 0;
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
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ./NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
const recursion_1 = __webpack_require__(/*! ./recursion */ "./mathlib/derivations/recursion.ts");
const RelationalDerivationRule_1 = __webpack_require__(/*! ./RelationalDerivationRule */ "./mathlib/derivations/RelationalDerivationRule.ts");
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
        this.algebraicExpansion();
        this.simplifyNoContext();
        this.algebraicExpansion();
        this.simplifyNoContext();
    }
    /**
     * Recursively makes sure that every node in the graph
     * is either simplified (meaning there is no contextless
     * rule that can simplify it further) or is marked down
     * as unsimplifiable.
     */
    simplifyNoContext() {
        const rules = NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules;
        const unchecked = [...this.graph.getNodes()].filter(n => n instanceof Expression_1.Expression)
            .map(n => n)
            .filter(e => !this.simplifiedInIsolation.has(e));
        unchecked.forEach(e => {
            const simplifications = (0, recursion_1.equiv)(e, contextlessSimplificationsFn);
            this.simplifiedInIsolation.add(e);
            if (simplifications.length == 0)
                this.notSimplifiable.add(e);
            simplifications.forEach(a => this.graph.addArgument(a));
        });
        if (unchecked.length > 0)
            this.simplifyNoContext();
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
                r.apply(setOf(...equation)).forEach(a => {
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
 * Finds equivalents of the given expression
 * using rules of inference. Not recursive.
 * @param exp
 */
const contextlessSimplificationsFn = function directEquivalents(exp) {
    const rules = [...NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules];
    const out = new Set();
    rules.filter(r => r.applies(exp)).forEach(rule => {
        rule.apply(exp).forEach(i => {
            out.add(i);
        });
    });
    return out;
};
function setOf(...arr) {
    const out = new Set();
    arr.forEach(e => out.add(e));
    return out;
}


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
     * All subclasses should register themselves in this list.
     */
    static rules = new Set();
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
     * @returns Set of equivalent expressions.
     */
    apply(exp) {
        const result = this.applyImpl(exp);
        result.forEach(e => {
            (0, assert_1.assert)(e != null && e != undefined);
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
const Exponent_1 = __webpack_require__(/*! ../expressions/Exponent */ "./mathlib/expressions/Exponent.ts");
const Fraction_1 = __webpack_require__(/*! ../expressions/Fraction */ "./mathlib/expressions/Fraction.ts");
const Integer_1 = __webpack_require__(/*! ../expressions/Integer */ "./mathlib/expressions/Integer.ts");
const Product_1 = __webpack_require__(/*! ../expressions/Product */ "./mathlib/expressions/Product.ts");
const Sum_1 = __webpack_require__(/*! ../expressions/Sum */ "./mathlib/expressions/Sum.ts");
const Variable_1 = __webpack_require__(/*! ../expressions/Variable */ "./mathlib/expressions/Variable.ts");
const Relationship_1 = __webpack_require__(/*! ../Relationship */ "./mathlib/Relationship.ts");
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
            default: throw new Error("Not implemented " + exp.class);
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
            equivalentSums.add(new Argument_1.Argument(setOf(exp), {
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
            equivalentProducts.add(new Argument_1.Argument(setOf(exp), {
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
        equivalents.add(new Argument_1.Argument(setOf(exp), {
            n: exp,
            r: Relationship_1.Relationship.Equal,
            n1: Exponent_1.Exponent.of(alt.claim.n1, exp.power)
        }, alt.argument));
    });
    equiv(exp.power, directEquivalents).forEach(alt => {
        equivalents.add(new Argument_1.Argument(setOf(exp), {
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
        equivalents.add(new Argument_1.Argument(setOf(exp), {
            n: exp,
            r: Relationship_1.Relationship.Equal,
            n1: Fraction_1.Fraction.of(alt.claim.n1, exp.denominator)
        }, alt.argument));
    });
    equiv(exp.denominator, directEquivalents).forEach(alt => {
        equivalents.add(new Argument_1.Argument(setOf(exp), {
            n: exp,
            r: Relationship_1.Relationship.Equal,
            n1: Fraction_1.Fraction.of(exp.numerator, alt.claim.n1),
        }, alt.argument));
    });
    return [...equivalents];
}
function setOf(...arr) {
    const out = new Set();
    arr.forEach(e => out.add(e));
    return out;
}


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
const Relationship_1 = __webpack_require__(/*! ../../Relationship */ "./mathlib/Relationship.ts");
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ../NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
const Sum_1 = __webpack_require__(/*! ../../expressions/Sum */ "./mathlib/expressions/Sum.ts");
/**
 * a + a = 2a
 *
 * But not
 * 1 + 1 = 2(1)
 */
class CombineCommonTermsAddition extends NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule {
    appliesImpl(exp) {
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
                const product = (0, ConvenientExpressions_1.orderedProduct)(...[(0, ConvenientExpressions_1.num)(occurances), uniqueTerm]);
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
            inferences.add(new Argument_1.Argument(setOf(sum), {
                n: sum,
                r: Relationship_1.Relationship.Equal,
                n1: e,
            }, "Distributive property of multiplication"));
        });
        return inferences;
    }
}
exports.CombineCommonTermsAddition = CombineCommonTermsAddition;
function setOf(...arr) {
    const out = new Set();
    arr.forEach(e => out.add(e));
    return out;
}


/***/ }),

/***/ "./mathlib/derivations/simplifications/CombineCommonTermsMultiplication.ts":
/*!*********************************************************************************!*\
  !*** ./mathlib/derivations/simplifications/CombineCommonTermsMultiplication.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CombineCommonTermsMultiplication = void 0;
const Argument_1 = __webpack_require__(/*! ../../Argument */ "./mathlib/Argument.ts");
const Exponent_1 = __webpack_require__(/*! ../../expressions/Exponent */ "./mathlib/expressions/Exponent.ts");
const Integer_1 = __webpack_require__(/*! ../../expressions/Integer */ "./mathlib/expressions/Integer.ts");
const Product_1 = __webpack_require__(/*! ../../expressions/Product */ "./mathlib/expressions/Product.ts");
const Relationship_1 = __webpack_require__(/*! ../../Relationship */ "./mathlib/Relationship.ts");
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ../NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
class CombineCommonTermsMultiplication extends NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule {
    appliesImpl(exp) {
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
            inferences.add(new Argument_1.Argument(setOf(product), {
                n: product,
                r: Relationship_1.Relationship.Equal,
                n1: e,
            }, "Exponential rule for multiplying equal bases"));
        });
        return inferences;
    }
}
exports.CombineCommonTermsMultiplication = CombineCommonTermsMultiplication;
function setOf(...arr) {
    const out = new Set();
    arr.forEach(e => out.add(e));
    return out;
}


/***/ }),

/***/ "./mathlib/derivations/simplifications/EvaluateSums.ts":
/*!*************************************************************!*\
  !*** ./mathlib/derivations/simplifications/EvaluateSums.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EvaluateSums = void 0;
const Argument_1 = __webpack_require__(/*! ../../Argument */ "./mathlib/Argument.ts");
const Integer_1 = __webpack_require__(/*! ../../expressions/Integer */ "./mathlib/expressions/Integer.ts");
const Sum_1 = __webpack_require__(/*! ../../expressions/Sum */ "./mathlib/expressions/Sum.ts");
const Relationship_1 = __webpack_require__(/*! ../../Relationship */ "./mathlib/Relationship.ts");
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
        const out = new Set();
        const integerTerms = [...sum.terms].filter(t => t instanceof Integer_1.Integer);
        if (integerTerms.length == 0) {
            return out;
        }
        const newInt = integerTerms.map(e => e).reduce((a, b) => Integer_1.Integer.of(a.value + b.value));
        const otherTerms = [...sum.terms].filter(t => !(t instanceof Integer_1.Integer));
        let result;
        if (otherTerms.length == 0) {
            result = new Argument_1.Argument(setOf(sum), {
                n: sum,
                r: Relationship_1.Relationship.Equal,
                n1: newInt
            }, "Evaluated Addition");
        }
        else {
            result = new Argument_1.Argument(setOf(sum), {
                n: sum,
                r: Relationship_1.Relationship.Equal,
                n1: Sum_1.Sum.of(otherTerms.concat(newInt)),
            }, "Evaluated Addition");
        }
        out.add(result);
        return out;
    }
}
exports.EvaluateSums = EvaluateSums;
function setOf(...arr) {
    const out = new Set();
    arr.forEach(e => out.add(e));
    return out;
}


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
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ../NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
/**
 * Turns sums that are unhealthy because their term order
 * is wrong into correctly ordered sums.
 */
class OrderSums extends NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule {
    appliesImpl(exp) {
        return !exp.isHealthy && exp.class === Sum_1.SumType;
    }
    applyImpl(exp) {
        return new Set([new Argument_1.Argument(setOf(exp), {
                n: exp,
                r: Relationship_1.Relationship.Equal,
                n1: (0, ConvenientExpressions_1.orderedSum)(exp),
            }, "Reordered")]);
    }
}
exports.OrderSums = OrderSums;
function setOf(...arr) {
    const out = new Set();
    arr.forEach(e => out.add(e));
    return out;
}


/***/ }),

/***/ "./mathlib/derivations/simplifications/ReduceReducibles.ts":
/*!*****************************************************************!*\
  !*** ./mathlib/derivations/simplifications/ReduceReducibles.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReduceReducibles = void 0;
const Argument_1 = __webpack_require__(/*! ../../Argument */ "./mathlib/Argument.ts");
const Relationship_1 = __webpack_require__(/*! ../../Relationship */ "./mathlib/Relationship.ts");
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ../NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
class ReduceReducibles extends NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule {
    appliesImpl(exp) {
        return exp.isReducible;
    }
    applyImpl(exp) {
        return new Set([new Argument_1.Argument(setOf(exp), {
                n: exp,
                r: Relationship_1.Relationship.Equal,
                n1: exp.reduced
            }, "Reduced")]);
    }
}
exports.ReduceReducibles = ReduceReducibles;
function setOf(...arr) {
    const out = new Set();
    arr.forEach(e => out.add(e));
    return out;
}


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
            out.add(new Argument_1.Argument(setOf(exp), {
                n: exp,
                r: Relationship_1.Relationship.Equal,
                n1: (0, ConvenientExpressions_1.sumOrNot)((0, ConvenientExpressions_1.productAndNotTimesOne)((0, ConvenientExpressions_1.num)(obj.coefficient), group), ...nonProductTerms, ...productTermsNotCombined)
            }, "Combining like terms"));
        });
        out.forEach(a => {
            console.log("Yielded " + a.claim.n1.toString());
        });
        return out;
    }
}
exports.SumCoefficientsOfAddedTerms = SumCoefficientsOfAddedTerms;
function setOf(...arr) {
    const out = new Set();
    arr.forEach(e => out.add(e));
    return out;
}


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
    class = exports.ExponentType;
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
        Object.freeze(this.base);
        Object.freeze(this.power);
        // The integers are closed over exponentiation
        this.isReducible = (base.isReducible || base.class == Integer_1.IntegerType) && (power.isReducible || power.class == Integer_1.IntegerType) && Math.pow(base.reduced.value, power.reduced.value) % 1 == 0;
        this.isHealthy = !this.isReducible;
        this.isConstant = base.isConstant && power.isConstant;
        this.childCount = 2 + base.childCount + power.childCount;
    }
    base;
    power;
    isReducible;
    isHealthy;
    get reduced() {
        return Integer_1.Integer.of(Math.pow(this.base.reduced.value, this.power.reduced.value));
    }
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
    get reduced() {
        throw new Error("Integers aren't reducible.");
    }
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
    get reduced() {
        throw new Error("Method not implemented. Not sure how this works with Integrals.");
    }
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
    childCount;
}
exports.Product = Product;
exports.ProductType = "Product";
/**
 * Can be used in array.sort() to get properly ordered products
 * @param a
 * @param b
 */
function factorOrder(a, b) {
    return 0; //TODO: Implement
}
exports.factorOrder = factorOrder;


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
    get reduced() {
        throw new Error("Variables can't be reduced to integers.");
    }
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
        this.style.width = "300px";
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
            const stepOffset = (Math.PI / nodes.size) * depth;
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
    getInternalPos(p) {
        const center = this.center;
        const scale = this.scale;
        //TODO: Verify this is correct
        return Point((p.x - center.x) / scale + center.x, (p.y - center.y) / scale + center.y);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekIsNEJBQTRCO0FBQzVCLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywwQkFBMEI7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywwQkFBMEI7QUFDckUsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsbUNBQW1DO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsdURBQXVELGdCQUFnQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdllhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3JCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBbUIsR0FBRyxjQUFjLEdBQUcsYUFBYSxHQUFHLGVBQWU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1COzs7Ozs7Ozs7OztBQ3BDTjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7Ozs7OztVQ1pkO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsNEJBQTRCLG1CQUFPLENBQUMsbURBQXFCO0FBQ3pELG1DQUFtQyxtQkFBTyxDQUFDLGlFQUE0QjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVncmF0b3IvLi9FeHByZXNzaW9uVGVzdFBhZ2VMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL1ByaW1hcnlQYWdlTG9hZGVyLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9Ub3VjaEdlc3R1cmVSZWNvZ25pemVyLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL0FyZ3VtZW50LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL0NvbnZlbmllbnRFeHByZXNzaW9ucy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9HcmFwaC50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9HcmFwaE1pbmlwdWxhdG9yLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL1JlbGF0aW9uc2hpcC50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9EZXJpdmVyLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvUmVsYXRpb25hbERlcml2YXRpb25SdWxlLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL2FsZ2VicmEvRGl2aWRlT25Cb3RoU2lkZXMudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvYWxnZWJyYS9TdWJ0cmFjdEZyb21Cb3RoU2lkZXMudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvcmVjdXJzaW9uLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9Db21iaW5lQ29tbW9uVGVybXNBZGRpdGlvbi50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvQ29tYmluZUNvbW1vblRlcm1zTXVsdGlwbGljYXRpb24udHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL0V2YWx1YXRlU3Vtcy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvT3JkZXJTdW1zLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9SZWR1Y2VSZWR1Y2libGVzLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9TdW1Db2VmZmljaWVudHNPZkFkZGVkVGVybXMudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvRGVyaXZhdGl2ZS50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9leHByZXNzaW9ucy9FeHBvbmVudC50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9leHByZXNzaW9ucy9FeHByZXNzaW9uLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2V4cHJlc3Npb25zL0ZyYWN0aW9uLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2V4cHJlc3Npb25zL0ludGVnZXIudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvSW50ZWdyYWwudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvTWF0aEVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvUHJvZHVjdC50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9leHByZXNzaW9ucy9TdW0udHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvVmFyaWFibGUudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdWllbGVtZW50cy9Bcmd1bWVudE5vZGVWaWV3LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3VpZWxlbWVudHMvRWRnZVZpZXcudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdWllbGVtZW50cy9FZGl0YWJsZU1hdGhWaWV3LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3VpZWxlbWVudHMvRXhwbGFuYXRpb25Qb3B1cC50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi91aWVsZW1lbnRzL0V4cHJlc3Npb25Ob2RlVmlldy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi91aWVsZW1lbnRzL0dyYXBoTm9kZVZpZXcudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdWllbGVtZW50cy9VSVByZWZlcmVuY2VzLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3VpZWxlbWVudHMvV2ViR3JhcGhWaWV3LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3VzZXJpbnB1dC9QYXJzZXIudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdXRpbC9NYXRoTUxIZWxwZXJzLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3V0aWwvYXNzZXJ0LnRzIiwid2VicGFjazovL2ludGVncmF0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmxvYWRFeHByZXNzaW9uc1Rlc3RQYWdlID0gdm9pZCAwO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IERlcml2YXRpdmVfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZXhwcmVzc2lvbnMvRGVyaXZhdGl2ZVwiKTtcbmNvbnN0IEV4cG9uZW50XzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2V4cHJlc3Npb25zL0V4cG9uZW50XCIpO1xuY29uc3QgRnJhY3Rpb25fMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZXhwcmVzc2lvbnMvRnJhY3Rpb25cIik7XG5jb25zdCBJbnRlZ3JhbF8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9leHByZXNzaW9ucy9JbnRlZ3JhbFwiKTtcbmNvbnN0IEVkaXRhYmxlTWF0aFZpZXdfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvdWllbGVtZW50cy9FZGl0YWJsZU1hdGhWaWV3XCIpO1xuLyoqXG4gKiBDYWxsZWQgYWZ0ZXIgdGhlIGRvbSBpcyBsb2FkZWQuXG4gKiBQb3B1bGF0ZXMgdGhlIGJvZHkgZWxlbWVudCBvZiB0aGUgZG9jdW1lbnRcbiAqIHdpdGggdGhlIHRlc3QgZXhwcmVzc2lvbnMgcGFnZVxuICovXG5mdW5jdGlvbiBsb2FkRXhwcmVzc2lvbnNUZXN0UGFnZSgpIHtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbiAgICBmdW5jdGlvbiBwKGNvbnRlbnQpIHtcbiAgICAgICAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZS5pbm5lclRleHQgPSBjb250ZW50O1xuICAgICAgICBwYWdlLmFwcGVuZChlKTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHZpZXcoZXhwKSB7XG4gICAgICAgIGNvbnN0IGUgPSBuZXcgRWRpdGFibGVNYXRoVmlld18xLkVkaXRhYmxlTWF0aFZpZXcoKTtcbiAgICAgICAgZS52YWx1ZSA9IGV4cDtcbiAgICAgICAgcGFnZS5hcHBlbmQoZSk7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBwKFwiVGhlIHN1bSBvZiBhLCBhLCBhbmQgYVwiKTtcbiAgICB2aWV3KCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpKTtcbiAgICBwKFwiSW50ZWdyYWwgb2YgYSBvdmVyIGIgd2l0aCByZXNwZWN0IHRvIGNcIik7XG4gICAgdmlldyhJbnRlZ3JhbF8xLkludGVncmFsLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYiksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmMpKTtcbiAgICBwKFwiSW50ZWdyYWwgb2YgKGEgb3ZlciBhKSBvdmVyIGIgd2l0aCByZXNwZWN0IHRvIGNcIik7XG4gICAgdmlldyhJbnRlZ3JhbF8xLkludGVncmFsLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYiksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmMpKTtcbiAgICBwKFwiSW50ZWdyYWwgb2YgKChhIG92ZXIgYSkgb3ZlciBhKSBvdmVyIGIgd2l0aCByZXNwZWN0IHRvIGNcIik7XG4gICAgdmlldyhJbnRlZ3JhbF8xLkludGVncmFsLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYiksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmMpKTtcbiAgICBwKFwiSW50ZWdyYWwgb2YgKCgoYSBvdmVyIGEpIG92ZXIgYSkgb3ZlciBhKSBvdmVyIGIgd2l0aCByZXNwZWN0IHRvIGNcIik7XG4gICAgdmlldyhJbnRlZ3JhbF8xLkludGVncmFsLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYiksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmMpKTtcbiAgICBwKFwiSW50ZWdyYWwgb2YgKCgoKGEgb3ZlciBhKSBvdmVyIGEpIG92ZXIgYSkgb3ZlciBhKSBvdmVyIGIgd2l0aCByZXNwZWN0IHRvIGNcIik7XG4gICAgdmlldyhJbnRlZ3JhbF8xLkludGVncmFsLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYiksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmMpKTtcbiAgICBwKFwiXCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmludCkoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZigoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtKSgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubmVnYXRpdmUpKENvbnZlbmllbnRFeHByZXNzaW9uc18xLmIpLCBFeHBvbmVudF8xLkV4cG9uZW50Lm9mKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKENvbnZlbmllbnRFeHByZXNzaW9uc18xLngsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDEpLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgyKSkpKSwgKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3QpKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDIpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hKSksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLngpKTtcbiAgICBwKFwiUHJvZHVjdCBvZiB4IGFuZCB5XCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3QpKENvbnZlbmllbnRFeHByZXNzaW9uc18xLngsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnkpKTtcbiAgICBwKFwiUHJvZHVjdCBvZiAoeC0xKSwgLTEgYW5kIHlcIik7XG4gICAgdmlldygoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdCkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bSkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCwgKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm5lZ2F0aXZlKSgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgxKSkpLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgtMSksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnkpKTtcbiAgICBwKFwiTmVnYXRpb24gb2YgeCAoUmVwZWQgYXMgdGhlIHByb3BkdWN0IG9mIC0xIGFuZCB4KVwiKTtcbiAgICB2aWV3KCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5uZWdhdGl2ZSkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCkpO1xuICAgIHAoXCJTdW0gb2YgeCBhbmQgLXhcIik7XG4gICAgdmlldygoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtKShDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54LCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubmVnYXRpdmUpKENvbnZlbmllbnRFeHByZXNzaW9uc18xLngpKSk7XG4gICAgcChcIlN1bSBvZiAteCBhbmQgeFwiKTtcbiAgICB2aWV3KCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5uZWdhdGl2ZSkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLngpKTtcbiAgICBwKFwiRGVyaXZhdGl2ZSBvZiB0aGUgc3F1YXJlIG9mIHggd2l0aCByZXNwZWN0IHRvIHhcIik7XG4gICAgdmlldyhEZXJpdmF0aXZlXzEuRGVyaXZhdGl2ZS5vZihFeHBvbmVudF8xLkV4cG9uZW50Lm9mKENvbnZlbmllbnRFeHByZXNzaW9uc18xLngsICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDIpKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCkpO1xuICAgIHAoXCJEZXJpdmF0aXZlICgoeF4yKSAtIDIpIHdpdGggcmVzcGVjdCB0byB4XCIpO1xuICAgIHZpZXcoRGVyaXZhdGl2ZV8xLkRlcml2YXRpdmUub2YoRXhwb25lbnRfMS5FeHBvbmVudC5vZigoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtKShDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54LCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgtMikpLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgyKSksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLngpKTtcbiAgICBwKFwiXCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSkpO1xuICAgIHAoXCJcIik7XG4gICAgdmlldygoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgxKSk7XG4gICAgcChcIlwiKTtcbiAgICB2aWV3KCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDEpKTtcbiAgICBwKFwiXCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSkpO1xufVxuZXhwb3J0cy5sb2FkRXhwcmVzc2lvbnNUZXN0UGFnZSA9IGxvYWRFeHByZXNzaW9uc1Rlc3RQYWdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmxvYWRQcmltYXJ5UGFnZSA9IHZvaWQgMDtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9Db252ZW5pZW50RXhwcmVzc2lvbnNcIik7XG5jb25zdCBQYXJzZXJfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvdXNlcmlucHV0L1BhcnNlclwiKTtcbmNvbnN0IFdlYkdyYXBoVmlld18xID0gcmVxdWlyZShcIi4vbWF0aGxpYi91aWVsZW1lbnRzL1dlYkdyYXBoVmlld1wiKTtcbmNvbnN0IEdyYXBoXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL0dyYXBoXCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IERlcml2ZXJfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZGVyaXZhdGlvbnMvRGVyaXZlclwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZGVyaXZhdGlvbnMvTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbmNvbnN0IENvbWJpbmVDb21tb25UZXJtc0FkZGl0aW9uXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9Db21iaW5lQ29tbW9uVGVybXNBZGRpdGlvblwiKTtcbmNvbnN0IENvbWJpbmVDb21tb25UZXJtc011bHRpcGxpY2F0aW9uXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9Db21iaW5lQ29tbW9uVGVybXNNdWx0aXBsaWNhdGlvblwiKTtcbmNvbnN0IEV2YWx1YXRlU3Vtc18xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvRXZhbHVhdGVTdW1zXCIpO1xuY29uc3QgT3JkZXJTdW1zXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9PcmRlclN1bXNcIik7XG5jb25zdCBSZWR1Y2VSZWR1Y2libGVzXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9SZWR1Y2VSZWR1Y2libGVzXCIpO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9leHByZXNzaW9ucy9FeHByZXNzaW9uXCIpO1xuY29uc3QgUmVsYXRpb25hbERlcml2YXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL1JlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZVwiKTtcbmNvbnN0IFN1YnRyYWN0RnJvbUJvdGhTaWRlc18xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9kZXJpdmF0aW9ucy9hbGdlYnJhL1N1YnRyYWN0RnJvbUJvdGhTaWRlc1wiKTtcbmNvbnN0IERpdmlkZU9uQm90aFNpZGVzXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL2FsZ2VicmEvRGl2aWRlT25Cb3RoU2lkZXNcIik7XG5jb25zdCBWYXJpYWJsZV8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9leHByZXNzaW9ucy9WYXJpYWJsZVwiKTtcbmNvbnN0IFN1bUNvZWZmaWNpZW50c09mQWRkZWRUZXJtc18xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvU3VtQ29lZmZpY2llbnRzT2ZBZGRlZFRlcm1zXCIpO1xuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUucnVsZXMuYWRkKG5ldyBDb21iaW5lQ29tbW9uVGVybXNBZGRpdGlvbl8xLkNvbWJpbmVDb21tb25UZXJtc0FkZGl0aW9uKCkpO1xuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUucnVsZXMuYWRkKG5ldyBDb21iaW5lQ29tbW9uVGVybXNNdWx0aXBsaWNhdGlvbl8xLkNvbWJpbmVDb21tb25UZXJtc011bHRpcGxpY2F0aW9uKCkpO1xuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUucnVsZXMuYWRkKG5ldyBFdmFsdWF0ZVN1bXNfMS5FdmFsdWF0ZVN1bXMoKSk7XG5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZS5ydWxlcy5hZGQobmV3IE9yZGVyU3Vtc18xLk9yZGVyU3VtcygpKTtcbk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlLnJ1bGVzLmFkZChuZXcgUmVkdWNlUmVkdWNpYmxlc18xLlJlZHVjZVJlZHVjaWJsZXMoKSk7XG5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZS5ydWxlcy5hZGQobmV3IFN1bUNvZWZmaWNpZW50c09mQWRkZWRUZXJtc18xLlN1bUNvZWZmaWNpZW50c09mQWRkZWRUZXJtcygpKTtcblJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZV8xLlJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZS5ydWxlcy5hZGQobmV3IFN1YnRyYWN0RnJvbUJvdGhTaWRlc18xLlN1YnRyYWN0RnJvbUJvdGhTaWRlcygpKTtcblJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZV8xLlJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZS5ydWxlcy5hZGQobmV3IERpdmlkZU9uQm90aFNpZGVzXzEuRGl2aWRlT25Cb3RoU2lkZXMoKSk7XG4vKipcbiAqIENhbGxlZCBhZnRlciBET00gaXMgbG9hZGVkLlxuICogU3Vic3RpdHV0ZXMgdGhlIGJvZHkgZWxlbWVudCBpbiB0aGUgZG9jdW1lbnRcbiAqIHdpdGggdGhlIHByaW1hcnkgaW50ZWdyYXRvciB2aWV3LlxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gbG9hZFByaW1hcnlQYWdlKCkge1xuICAgIC8vY29uc3Qgcm9vdCA9IERlcml2YXRpdmUub2Yoc3VtKGEsIGEsIHByb2R1Y3QobnVtKDIpLCBiKSksIGEpXG4gICAgY29uc3Qgcm9vdCA9ICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdCkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSkpO1xuICAgIGNvbnN0IG90aGVyUm9vdCA9ICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5wcm9kdWN0KShDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5iLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5jKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSk7XG4gICAgY29uc3QgZ3JhcGggPSBuZXcgR3JhcGhfMS5HcmFwaCgpLmFkZFJlbGF0aW9uc2hpcChyb290LCBvdGhlclJvb3QsIFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCk7XG4gICAgY29uc3QgZGVyaXZlciA9IG5ldyBEZXJpdmVyXzEuRGVyaXZlcihncmFwaCk7XG4gICAgZGVyaXZlci5leHBhbmQoKTtcbiAgICAvL2NvbnNvbGUubG9nKFwiUmVzdWx0OiBcIiArIGdyYXBoKVxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4ge1xuICAgICAgICAoMCwgUGFyc2VyXzEucGFyc2UpKGlucHV0LnZhbHVlKTtcbiAgICB9KTtcbiAgICBjb25zdCBvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dGJveFwiKTtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgIHNob3dBcmd1bWVudHM6IGZhbHNlLFxuICAgICAgICBkcmF3RWRnZUxpbmVzOiB0cnVlLFxuICAgIH07XG4gICAgY29uc3QgZ3JhcGhWaWV3ID0gbmV3IFdlYkdyYXBoVmlld18xLldlYkdyYXBoVmlldyhncmFwaCwgbmV3IFNldChbcm9vdCwgb3RoZXJSb290XSksIGNvbmZpZyk7XG4gICAgZ3JhcGhWaWV3LnNldE5vZGVDb2xvcmluZ1NjaGVtZShuID0+IHtcbiAgICAgICAgaWYgKG4gaW5zdGFuY2VvZiBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbikge1xuICAgICAgICAgICAgaWYgKCFkZXJpdmVyLmlzU2ltcGxpZmllZChuKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJsaWdodGdyYXlcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKCFuLmlzSGVhbHRoeSlcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJsaWdodHJlZFwiO1xuICAgICAgICAgICAgZWxzZSBpZiAobiBpbnN0YW5jZW9mIFZhcmlhYmxlXzEuVmFyaWFibGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwib3JhbmdlXCI7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibGlnaHRibHVlXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiYmxhY2tcIjtcbiAgICB9KTtcbiAgICBncmFwaFZpZXcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWItZ3JhcGh2aWV3XCIpO1xuICAgIG91dC5hcHBlbmRDaGlsZChncmFwaFZpZXcpO1xufVxuZXhwb3J0cy5sb2FkUHJpbWFyeVBhZ2UgPSBsb2FkUHJpbWFyeVBhZ2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVG91Y2hHZXN0dXJlUmVjb2duaXplciA9IHZvaWQgMDtcbi8qKlxuICogSW50ZXJwcmV0IGNvbXBsaWNhdGVkIHRvdWNoIGdlc3R1cmUgZGF0YS5cbiAqL1xuY2xhc3MgVG91Y2hHZXN0dXJlUmVjb2duaXplciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubW92ZUxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLnBpbmNoTGlzdGVuZXJzID0gW107XG4gICAgfVxuICAgIGFkZE1vdmVMaXN0ZW5lcihjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm1vdmVMaXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gYSBwaW5jaCBnZXN0dXJlIGhhcyBiZWVuIGRldGVjdGVkLlxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBUYWtlcyBhIGNlbnRlciBjb29yZGluYXRlIHRoYXQncyB0aGUgYXZlcmFnZSBvZiB0aGUgZmluZ2VyIHBvc2l0aW9ucyxcbiAgICAgKiAgICAgICAgICAgICAgdGhlIGNoYW5nZSBpbiBzY2FsZSBzaW5jZSB0aGUgbGFzdCBjYWxsIG9uICgwLCBpbmZpbml0eSkgd2hlcmUgMSBpcyBubyBjaGFuZ2UsXG4gICAgICogICAgICAgICAgICAgIGFuZCB0aGUgbnVtYmVyIG9mIGZpbmdlcnMgaW4gdGhlIGdlc3R1cmUgKGFuIGludGVnZXIpLlxuICAgICAqL1xuICAgIGFkZFBpbmNoTGlzdGVuZXIoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5waW5jaExpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2hvdWxkIHRha2UgYWxsIHRvdWNoIGV2ZW50cyBmcm9tIHRoZSB2aWV3IHVzaW5nIGl0LlxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHByb2Nlc3NUb3VjaERvd24oZXZlbnQpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2hvdWxkIHRha2UgYWxsIHRvdWNoIGV2ZW50cyBmcm9tIHRoZSB2aWV3IHVzaW5nIGl0LlxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHByb2Nlc3NUb3VjaE1vdmUoZXZlbnQpIHtcbiAgICAgICAgZm9yIChjb25zdCBjaGFuZ2VkIG9mIGV2ZW50LmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICAgICAgICBjaGFuZ2VkLmNsaWVudFg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU2hvdWxkIHRha2UgYWxsIHRvdWNoIGV2ZW50cyBmcm9tIHRoZSB2aWV3IHVzaW5nIGl0LlxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHByb2Nlc3NUb3VjaEVuZChldmVudCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTaG91bGQgdGFrZSBhbGwgdG91Y2ggZXZlbnRzIGZyb20gdGhlIHZpZXcgdXNpbmcgaXQuXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICovXG4gICAgcHJvY2Vzc1RvdWNoQ2FuY2VsKGV2ZW50KSB7XG4gICAgfVxuICAgIC8vcHJpdmF0ZSBsYXN0WDogTWFwPFRvdWNoXG4gICAgbW92ZUxpc3RlbmVycztcbiAgICBwaW5jaExpc3RlbmVycztcbn1cbmV4cG9ydHMuVG91Y2hHZXN0dXJlUmVjb2duaXplciA9IFRvdWNoR2VzdHVyZVJlY29nbml6ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQXJndW1lbnQgPSB2b2lkIDA7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0XCIpO1xuLyoqXG4gKiBDb25uZWN0cyBvbmUgb3IgbW9yZSBub2RlcyAoZ3JvdW5kcykgdG8gb25lIG9yIG1vcmUgbm9kZXMgKGNsYWltcykuXG4gKiBDb250YWlucyBhbiBleHBsYW5hdGlvbi9hcmd1bWVudCBmb3IgdGhlIGNvbm5lY3Rpb24uXG4gKi9cbmNsYXNzIEFyZ3VtZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihncm91bmRzLCBjbGFpbSwgYXJndW1lbnQpIHtcbiAgICAgICAgdGhpcy5ncm91bmRzID0gZ3JvdW5kcztcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLmdyb3VuZHMpO1xuICAgICAgICB0aGlzLmNsYWltID0gY2xhaW07XG4gICAgICAgIHRoaXMuYXJndW1lbnQgPSBhcmd1bWVudDtcbiAgICAgICAgdGhpcy5yZXBPaygpO1xuICAgIH1cbiAgICBleHByZXNzaW9uRWRnZSA9IHRydWU7XG4gICAgZ2V0IHJlbGF0aW9uc2hpcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xhaW0ucjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBcIkFyZ3VtZW50IFwiICsgdGhpcy5jbGFpbS5yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUd28gb3V0IG1hdGggZ3JhcGggbm9kZXMgdGhhdCBhcmUgcmVsYXRlZCBieSB0aGlzIEFydWdtZW50LlxuICAgICAqL1xuICAgIGNsYWltO1xuICAgIC8qKlxuICAgICAqIFRoZSBleHBsYW5hdGlvbiB0aGF0IGNvbm5lY3RzIHRoZSBhcmd1bWVudCdzIGdyb3VuZHMgdG9cbiAgICAgKiBpdCdzIGNsYWltZWQgcmVsYXRpb25zaGlwIGJldHdlZW4gdGhlIHR3byBvdXQgbm9kZXMuXG4gICAgICpcbiAgICAgKi9cbiAgICBhcmd1bWVudDtcbiAgICAvKipcbiAgICAgKiBOb2RlcyB0aGF0IGhhdmUgYW4gZWRnZSBwb2ludGluZyB0byB0aGlzIGFyZ3VtZW50LlxuICAgICAqL1xuICAgIGdyb3VuZHM7XG4gICAgcmVwT2soKSB7XG4gICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMuZ3JvdW5kcyAhPSBudWxsKTtcbiAgICAgICAgZm9yIChjb25zdCBncm91bmQgb2YgdGhpcy5ncm91bmRzKSB7XG4gICAgICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KShncm91bmQgIT0gbnVsbCAmJiBncm91bmQgIT0gdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLmNsYWltLm4gIT0gbnVsbCAmJiB0aGlzLmNsYWltLm4gIT0gdW5kZWZpbmVkKTtcbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5jbGFpbS5uMSAhPSBudWxsICYmIHRoaXMuY2xhaW0ubjEgIT0gdW5kZWZpbmVkKTtcbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5jbGFpbS5yICE9IHVuZGVmaW5lZCAmJiB0aGlzLmNsYWltLnIgIT0gbnVsbCk7XG4gICAgfVxufVxuZXhwb3J0cy5Bcmd1bWVudCA9IEFyZ3VtZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnkgPSBleHBvcnRzLnggPSBleHBvcnRzLmYgPSBleHBvcnRzLmUgPSBleHBvcnRzLmQgPSBleHBvcnRzLmMgPSBleHBvcnRzLmIgPSBleHBvcnRzLmEgPSBleHBvcnRzLnByb2R1Y3RBbmROb3RUaW1lc09uZSA9IGV4cG9ydHMucHJvZHVjdE9yTm90ID0gZXhwb3J0cy5lcXVpdmFsZW5jZUFyZ3VtZW50ID0gZXhwb3J0cy5pbnQgPSBleHBvcnRzLnYgPSBleHBvcnRzLm51bSA9IGV4cG9ydHMubmVnYXRpdmUgPSBleHBvcnRzLnByb2R1Y3QgPSBleHBvcnRzLm9yZGVyZWRQcm9kdWN0ID0gZXhwb3J0cy5zdW1Pck5vdCA9IGV4cG9ydHMuc3VtSW50dWl0aXZlID0gZXhwb3J0cy5zdW1FdmFsSW50ZWdlclRlcm1zID0gZXhwb3J0cy5vcmRlcmVkU3VtID0gZXhwb3J0cy5zdW0gPSBleHBvcnRzLmZyYWN0aW9uID0gdm9pZCAwO1xuY29uc3QgSW50ZWdlcl8xID0gcmVxdWlyZShcIi4vZXhwcmVzc2lvbnMvSW50ZWdlclwiKTtcbmNvbnN0IEZyYWN0aW9uXzEgPSByZXF1aXJlKFwiLi9leHByZXNzaW9ucy9GcmFjdGlvblwiKTtcbmNvbnN0IEludGVncmFsXzEgPSByZXF1aXJlKFwiLi9leHByZXNzaW9ucy9JbnRlZ3JhbFwiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuL2V4cHJlc3Npb25zL1Byb2R1Y3RcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuL2V4cHJlc3Npb25zL1N1bVwiKTtcbmNvbnN0IFZhcmlhYmxlXzEgPSByZXF1aXJlKFwiLi9leHByZXNzaW9ucy9WYXJpYWJsZVwiKTtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi9Bcmd1bWVudFwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi91dGlsL2Fzc2VydFwiKTtcbmZ1bmN0aW9uIGZyYWN0aW9uKG51bSwgZGVuKSB7XG4gICAgcmV0dXJuIEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YobnVtLCBkZW4pO1xufVxuZXhwb3J0cy5mcmFjdGlvbiA9IGZyYWN0aW9uO1xuLyoqXG4gKiBBIGNvbnZlbmllbmNlIG1ldGhvZCBmb3IgU3VtLm9mKClcbiAqL1xuZnVuY3Rpb24gc3VtKC4uLnRlcm1zKSB7XG4gICAgcmV0dXJuIFN1bV8xLlN1bS5vZih0ZXJtcyk7XG59XG5leHBvcnRzLnN1bSA9IHN1bTtcbi8qKlxuICogR2V0cyB0aGUgY29ycmVjdGx5IG9yZGVyZWQgc3VtIG9mIHRoZSBnaXZlbiBzdW0uXG4gKiAxICsgYSA9IGEgKyAxXG4gKiBGb2xsb3dzIHRoZSBzcGVjIGdpdmVuIGluIHRoZSBTdW0udHMgZmlsZS5cbiAqIEBwYXJhbSBzdW1cbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIG9yZGVyZWRTdW0oc3VtKSB7XG4gICAgY29uc3Qgb3JkZXJlZCA9ICgwLCBTdW1fMS5vcmRlclRlcm1zKSguLi5zdW0udGVybXMpO1xuICAgIHJldHVybiBTdW1fMS5TdW0ub2Yob3JkZXJlZCk7XG59XG5leHBvcnRzLm9yZGVyZWRTdW0gPSBvcmRlcmVkU3VtO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBzdW0gb2YgdGhlIGdpdmVuIHRlcm1zLCBldmFsdWF0aW5nIGFueSBpbnRlZ2VyIHRlcm1zLlxuICogUHV0cyBmaW5hbCBjb25zdGFudCBpbnRlZ2VyIGFzIHRoZSBsYXN0IHRlcm0uXG4gKiBJZiB0aGUgcmVzdWx0IGlzIGEgc3VtLCBpdCB3aWxsIG5vdCBoYXZlIHRoZSBpbnRlZ2VyIDAgYXMgYSB0ZXJtLlxuICogSWYgYWxsIGdpdmVuIHRlcm1zIHN1bSB0byB6ZXJvLCB0aGUgaW50ZWdlciB6ZXJvIHdpbGwgYmUgcmV0dXJuZWQuXG4gKiBAcGFyYW0gdGVybXNcbiAqL1xuZnVuY3Rpb24gc3VtRXZhbEludGVnZXJUZXJtcyguLi50ZXJtcykge1xuICAgIGNvbnN0IGludGVnZXJzID0gdGVybXMuZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKS5sZW5ndGg7XG4gICAgaWYgKGludGVnZXJzIDwgMilcbiAgICAgICAgcmV0dXJuIHN1bSguLi50ZXJtcyk7XG4gICAgY29uc3Qgbm9uSW50VGVybXMgPSB0ZXJtcy5maWx0ZXIoZSA9PiAhKGUgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcikpO1xuICAgIGNvbnN0IGludFRlcm0gPSB0ZXJtcy5maWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpXG4gICAgICAgIC5tYXAoZSA9PiBlKVxuICAgICAgICAucmVkdWNlKChhLCBiKSA9PiBudW0oYS52YWx1ZSArIGIudmFsdWUpKTtcbiAgICBpZiAoaW50VGVybS52YWx1ZSA9PSAwKSB7XG4gICAgICAgIGlmIChub25JbnRUZXJtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gc3VtKC4uLm5vbkludFRlcm1zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChub25JbnRUZXJtcy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vbkludFRlcm1zWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGludFRlcm07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChub25JbnRUZXJtcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGludFRlcm07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3VtKC4uLm5vbkludFRlcm1zLCBpbnRUZXJtKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuc3VtRXZhbEludGVnZXJUZXJtcyA9IHN1bUV2YWxJbnRlZ2VyVGVybXM7XG4vKipcbiAqIFJldHVybnMgdGhlIHN1bSBvZiB0aGUgZ2l2ZW4gdGVybXMuIEV2YWx1YXRlcyBhbnlcbiAqIGludGVnZXIgdGVybXMuIEFkZGl0aW9uYWxseSBjYW5jZWxzIG91dCBhbnkgcG9zaXRpdmVcbiAqIG5lZ2F0aXZlIHRlcm1zLlxuICpcbiAqIFNpbXBsaWZpZXNcbiAqICB4ICsgYSAtIGEgPSB4XG4gKiB4ICsgYWIgLSBhYiA9IHhcbiAqIHggKyAyYWIgLSAyYWIgPSB4XG4gKiBhIC0gYSA9IDBcbiAqXG4gKiBEb2Vzbid0IGFmZmVjdFxuICogIHggKyAyYSAtIGFcbiAqIEBwYXJhbSB0ZXJtc1xuICovXG5mdW5jdGlvbiBzdW1JbnR1aXRpdmUoLi4udGVybXMpIHtcbiAgICBjb25zdCBpbnRFdmFsID0gc3VtRXZhbEludGVnZXJUZXJtcyguLi50ZXJtcyk7XG4gICAgaWYgKGludEV2YWwuY2xhc3MgIT0gU3VtXzEuU3VtVHlwZSlcbiAgICAgICAgcmV0dXJuIGludEV2YWw7XG4gICAgdGVybXMgPSBbLi4uaW50RXZhbC50ZXJtc107XG4gICAgLy8gRmluZCBvcHBvc2l0ZSBwYWlyc1xuICAgIC8vIFRoZXkgd2lsbCB0YWtlIHRoZSBmb3JtXG4gICAgLy8gICAgICBleHAgKyAtMSAqIGV4cFxuICAgIC8vIEkgYXNzdW1lIGhlcmUgdGhhdCB0aGUgb25seSB3YXkgdG8gbm90YXRlXG4gICAgLy8gbmVnYXRpdml0eSBpcyBieSBtdWx0aXBseWluZyBieSAtMVxuICAgIHRlcm1zOiBmb3IgKGNvbnN0IHQgb2YgdGVybXMpIHtcbiAgICAgICAgY29uc3Qgb3RoZXJUZXJtcyA9IFsuLi50ZXJtc107XG4gICAgICAgIHJlbW92ZShvdGhlclRlcm1zLCB0KTtcbiAgICAgICAgZm9yIChjb25zdCBvdGhlciBvZiBvdGhlclRlcm1zKSB7XG4gICAgICAgICAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChvdGhlci5pc05lZ2F0aW9uICYmIG90aGVyLm5lZ2F0aW9uID09PSB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZSh0ZXJtcywgb3RoZXIpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmUodGVybXMsIHQpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZSB0ZXJtcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRlcm1zLmxlbmd0aCA9PSAwKVxuICAgICAgICByZXR1cm4gSW50ZWdlcl8xLkludGVnZXIub2YoMCk7XG4gICAgZWxzZSBpZiAodGVybXMubGVuZ3RoID09IDEpXG4gICAgICAgIHJldHVybiB0ZXJtc1swXTtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBzdW0oLi4udGVybXMpO1xufVxuZXhwb3J0cy5zdW1JbnR1aXRpdmUgPSBzdW1JbnR1aXRpdmU7XG5mdW5jdGlvbiBzdW1Pck5vdCguLi50ZXJtcykge1xuICAgIGlmICh0ZXJtcy5sZW5ndGggPT0gMSlcbiAgICAgICAgcmV0dXJuIHRlcm1zWzBdO1xuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIHN1bSguLi50ZXJtcyk7XG59XG5leHBvcnRzLnN1bU9yTm90ID0gc3VtT3JOb3Q7XG4vKipcbiAqIFByb2R1Y2VzIGEgcHJvZHVjdCBmcm9tIHRoZSBnaXZlbiBmYWN0b3JzXG4gKiB3aGVyZSB0aGUgZmFjdG9ycyBhcmUgb3JkZXJlZCBhY2NvcmRpbmcgdG8gY29udmVudGlvbi5cbiAqIEBwYXJhbSBmYWN0b3JzIEF0IGxlYXN0IDJcbiAqL1xuZnVuY3Rpb24gb3JkZXJlZFByb2R1Y3QoLi4uZmFjdG9ycykge1xuICAgIGZhY3RvcnMuc29ydChQcm9kdWN0XzEuZmFjdG9yT3JkZXIpO1xuICAgIHJldHVybiBwcm9kdWN0KC4uLmZhY3RvcnMpO1xufVxuZXhwb3J0cy5vcmRlcmVkUHJvZHVjdCA9IG9yZGVyZWRQcm9kdWN0O1xuLyoqXG4gKiBSZW1vdmVzIHRoZSBmaXJzdCBpbnN0YW5jZSBvZiB0aGUgZ2l2ZW5cbiAqIGVsZW1lbnQgZnJvbSB0aGUgYXJyYXkuIFJlYWxseSBzaG91bGQgYmVcbiAqIHBhcnQgb2YgdGhlIHN0ZCBsaWJyYXJ5LiBJZGVudGlmaWVzIG9iamVjdFxuICogd2l0aCByZWZlcmVuY2lhbCBlcXVhbGl0eS5cbiAqIEBwYXJhbSBhcnJheVxuICogQHBhcmFtIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlKGFycmF5LCBlbGVtZW50KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYXJyYXlbaV0gPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGFycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHByb2R1Y3QoLi4uZmFjdG9ycykge1xuICAgIHJldHVybiBQcm9kdWN0XzEuUHJvZHVjdC5vZihmYWN0b3JzKTtcbn1cbmV4cG9ydHMucHJvZHVjdCA9IHByb2R1Y3Q7XG5mdW5jdGlvbiBuZWdhdGl2ZShleHByZXNzaW9uKSB7XG4gICAgaWYgKGV4cHJlc3Npb24gaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcilcbiAgICAgICAgcmV0dXJuIEludGVnZXJfMS5JbnRlZ2VyLm9mKC1leHByZXNzaW9uLnZhbHVlKTtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBQcm9kdWN0XzEuUHJvZHVjdC5vZihbSW50ZWdlcl8xLkludGVnZXIub2YoLTEpLCBleHByZXNzaW9uXSk7XG59XG5leHBvcnRzLm5lZ2F0aXZlID0gbmVnYXRpdmU7XG5mdW5jdGlvbiBudW0odmFsKSB7XG4gICAgcmV0dXJuIEludGVnZXJfMS5JbnRlZ2VyLm9mKHZhbCk7XG59XG5leHBvcnRzLm51bSA9IG51bTtcbmZ1bmN0aW9uIHYoc3ltYm9sKSB7XG4gICAgcmV0dXJuIFZhcmlhYmxlXzEuVmFyaWFibGUub2Yoc3ltYm9sKTtcbn1cbmV4cG9ydHMudiA9IHY7XG5mdW5jdGlvbiBpbnQoaW50ZWdyYW5kLCByZXNwZWN0VG8pIHtcbiAgICByZXR1cm4gSW50ZWdyYWxfMS5JbnRlZ3JhbC5vZihpbnRlZ3JhbmQsIHJlc3BlY3RUbyk7XG59XG5leHBvcnRzLmludCA9IGludDtcbmZ1bmN0aW9uIGVxdWl2YWxlbmNlQXJndW1lbnQoZmlyc3QsIHNlY29uZCwgZXhwbGFuYXRpb24pIHtcbiAgICByZXR1cm4gbmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoc2V0T2YoZmlyc3QpLCB7XG4gICAgICAgIG46IGZpcnN0LFxuICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgIG4xOiBzZWNvbmQsXG4gICAgfSwgZXhwbGFuYXRpb24pO1xufVxuZXhwb3J0cy5lcXVpdmFsZW5jZUFyZ3VtZW50ID0gZXF1aXZhbGVuY2VBcmd1bWVudDtcbi8qKlxuICpcbiAqIEByZXR1cm5zIFRoZSBwcm9kdWN0IG9mIHRoZSBnaXZlbiBmYWN0b3JzLCBvciB0aGUgb25seSBmYWN0b3IgZ2l2ZW5cbiAqIGlmIG9ubHkgb25lIGdpdmVuLiBUaHJvd3MgaWYgbm8gZXhwcmVzc2lvbnMgYXJlIGdpdmVuLlxuICovXG5mdW5jdGlvbiBwcm9kdWN0T3JOb3QoLi4uZXhwcmVzc2lvbnMpIHtcbiAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KShleHByZXNzaW9ucy5sZW5ndGggPiAwKTtcbiAgICBpZiAoZXhwcmVzc2lvbnMubGVuZ3RoID09IDEpXG4gICAgICAgIHJldHVybiBleHByZXNzaW9uc1swXTtcbiAgICByZXR1cm4gcHJvZHVjdCguLi5leHByZXNzaW9ucyk7XG59XG5leHBvcnRzLnByb2R1Y3RPck5vdCA9IHByb2R1Y3RPck5vdDtcbi8qKlxuICogQHJldHVybnMgVGhlIHByb2R1Y3Qgb2YgdGhlIGdpdmVuIHRlcm1zIGV4bGN1ZGluZyB0aGUgZmlyc3QgaWZcbiAqICAgICAgICAgIGl0J3Mgb25lLiBJZiB0aGUgcmVzdWx0aW5nIHRlcm1zIGxpc3QgaXMgb25seSBvbmUgdGVybSxcbiAqICAgICAgICAgIHJldHVybnMgdGhlIG9ubHkgdGVybS5cbiAqL1xuZnVuY3Rpb24gcHJvZHVjdEFuZE5vdFRpbWVzT25lKC4uLmV4cHJlc3Npb25zKSB7XG4gICAgaWYgKGV4cHJlc3Npb25zWzBdIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIgJiYgZXhwcmVzc2lvbnNbMF0udmFsdWUgPT0gMSkge1xuICAgICAgICBleHByZXNzaW9ucy5zaGlmdCgpO1xuICAgICAgICByZXR1cm4gcHJvZHVjdE9yTm90KC4uLmV4cHJlc3Npb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb2R1Y3RPck5vdCguLi5leHByZXNzaW9ucyk7XG59XG5leHBvcnRzLnByb2R1Y3RBbmROb3RUaW1lc09uZSA9IHByb2R1Y3RBbmROb3RUaW1lc09uZTtcbmZ1bmN0aW9uIHNldE9mKC4uLmV4cHJlc3Npb25zKSB7XG4gICAgY29uc3Qgb3V0ID0gbmV3IFNldCgpO1xuICAgIGV4cHJlc3Npb25zLmZvckVhY2goZSA9PiBvdXQuYWRkKGUpKTtcbiAgICByZXR1cm4gb3V0O1xufVxuZXhwb3J0cy5hID0gdignYScpO1xuZXhwb3J0cy5iID0gdignYicpO1xuZXhwb3J0cy5jID0gdignYycpO1xuZXhwb3J0cy5kID0gdignZCcpO1xuZXhwb3J0cy5lID0gdignZScpO1xuZXhwb3J0cy5mID0gdignZicpO1xuZXhwb3J0cy54ID0gdigneCcpO1xuZXhwb3J0cy55ID0gdigneScpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdpdmVuRWRnZSA9IGV4cG9ydHMuQXJndW1lbnRFZGdlID0gZXhwb3J0cy5HcmFwaCA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi9Bcmd1bWVudFwiKTtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4vdXRpbC9hc3NlcnRcIik7XG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIGdyYXBoIG9mIGV4cHJlc3Npb25zIGFuZCBzdGF0ZW1lbnRzXG4gKiBpbmNsdWRpbmcgZXZlcnl0aGluZyB3ZSBrbm93IGFib3V0IGEgcHJvYmxlbS5cbiAqIENvbm5lY3RzIEdyYXBoTm9kZXMgdmlhIEluZmVyZW5jZXMgZm9yIGVkZ2VzLlxuICpcbiAqIEl0J3MgYSBkaWdyYXBoLlxuICovXG5jbGFzcyBHcmFwaCB7XG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBleHByZXNzaW9uIHRvIHRoZSBwcm9ibGVtLlxuICAgICAqIEBwYXJhbSBub2RlXG4gICAgICogQHJldHVybnMgdGhlIHNhbWUgZ3JhcGggZm9yIGNoYWluaW5nLlxuICAgICAqL1xuICAgIGFkZE5vZGUobm9kZSkge1xuICAgICAgICB0aGlzLm5vZGVzLmFkZChub2RlKTtcbiAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBBcmd1bWVudF8xLkFyZ3VtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmFkZEFyZ3VtZW50KG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVwT2soKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZCBhIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIHR3byBlbGVtZW50cyBnaXZlbiBieSB0aGUgdXNlciB0byB0aGUgZ3JhcGguXG4gICAgICogU2hvdWxkIG5vdCBiZSBjYWxsZWQgdG8gYWRkIGRlcml2ZWQgdHJ1dGhzIGJjIHRoaXMgd29uJ3Qgc3RvcmUgYW4gZXhwbGFuYXRpb24uXG4gICAgICogQWRkcyBnaXZlbiBub2RlcyBpZiB0aGV5IGFyZW4ndCBhbHJlYWR5IG9uIHRoZSBncmFwaC5cbiAgICAgKiBAcGFyYW0gblxuICAgICAqIEBwYXJhbSBuMVxuICAgICAqIEBwYXJhbSByXG4gICAgICogQHJldHVybnMgc2VsZiBmb3IgY2hhaW5pbmdcbiAgICAgKi9cbiAgICBhZGRSZWxhdGlvbnNoaXAobiwgbjEsIHIpIHtcbiAgICAgICAgdGhpcy5hZGROb2RlKG4pO1xuICAgICAgICB0aGlzLmFkZE5vZGUobjEpO1xuICAgICAgICAvLyBEZWZpbmVkIGJvdGggd2F5cyBiZWNhdXNlIHRoZSB1c2VyIGlzIGdpdmluZyBpdFxuICAgICAgICB0aGlzLmFkZEVkZ2UobiwgbjEsIG5ldyBHaXZlbkVkZ2UocikpO1xuICAgICAgICB0aGlzLmFkZEVkZ2UobjEsIG4sIG5ldyBHaXZlbkVkZ2UocikpO1xuICAgICAgICB0aGlzLmFkZENvbm5lY3Rpb24obiwgbjEpO1xuICAgICAgICB0aGlzLmFkZENvbm5lY3Rpb24objEsIG4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIG5vZGUgcmVwcmVzZW50aW5nIGFuIGFjdW11bGF0aW9uIG9mIGZhY3RzXG4gICAgICogdGhhdCBsZWFkcyB0byBhIGNvbmNsdXNpb24uXG4gICAgICogQHBhcmFtIGFcbiAgICAgKiBAcmV0dXJucyB0aGUgc2FtZSBncmFwaCBmb3IgY2hhaW5pbmcuXG4gICAgICovXG4gICAgYWRkQXJndW1lbnQoYSkge1xuICAgICAgICB0aGlzLm5vZGVzLmFkZChhKTtcbiAgICAgICAgLy8gQWRkIHRoZSBncm91bmRzXG4gICAgICAgIGZvciAoY29uc3QgZ3JvdW5kIG9mIGEuZ3JvdW5kcykge1xuICAgICAgICAgICAgdGhpcy5ub2Rlcy5hZGQoZ3JvdW5kKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbihncm91bmQsIGEpO1xuICAgICAgICAgICAgdGhpcy5hZGRFZGdlKGdyb3VuZCwgYSwgQXJndW1lbnRFZGdlLlRvKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgdGhlIGNsYWltXG4gICAgICAgIGNvbnN0IGNsYWltID0gYS5jbGFpbTtcbiAgICAgICAgdGhpcy5hZGROb2RlKGNsYWltLm4pO1xuICAgICAgICB0aGlzLmFkZE5vZGUoY2xhaW0ubjEpO1xuICAgICAgICB0aGlzLmFkZENvbm5lY3Rpb24oYSwgY2xhaW0ubik7XG4gICAgICAgIHRoaXMuYWRkRWRnZShhLCBjbGFpbS5uLCBBcmd1bWVudEVkZ2UuRnJvbSk7XG4gICAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbihhLCBjbGFpbS5uMSk7XG4gICAgICAgIHRoaXMuYWRkRWRnZShhLCBjbGFpbS5uMSwgQXJndW1lbnRFZGdlLkZyb20pO1xuICAgICAgICB0aGlzLmFkZENvbm5lY3Rpb24oY2xhaW0ubiwgY2xhaW0ubjEpO1xuICAgICAgICB0aGlzLmFkZENvbm5lY3Rpb24oY2xhaW0ubjEsIGNsYWltLm4pO1xuICAgICAgICB0aGlzLmFkZEVkZ2UoY2xhaW0ubiwgY2xhaW0ubjEsIGEpO1xuICAgICAgICB0aGlzLmFkZEVkZ2UoY2xhaW0ubjEsIGNsYWltLm4sIGEpO1xuICAgICAgICB0aGlzLnJlcE9rKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB0aGUgc2FtZSBncmFwaCBmb3IgY2hhaW5pbmcuXG4gICAgICovXG4gICAgYWRkQXJndW1lbnRzKC4uLmEpIHtcbiAgICAgICAgYS5mb3JFYWNoKGFyZyA9PiB0aGlzLmFkZEFyZ3VtZW50KGFyZykpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBuZWlnaGJvcnMgb2YgYSBub2RlLlxuICAgICAqIEBwYXJhbSBub2RlXG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiBOb2RlcyB0aGF0IGFyZSBhZGphY2VudCB0byB0aGlzIG5vZGUsIGZyb20gdGhpcyBub2RlLCBvciBlaXRoZXIuXG4gICAgICogQHJldHVybnMgVW5kZWZpbmVkIGlmIHRoZSBub2RlIGlzbid0IGluIHRoaXMgZ3JhcGguIE90aGVyd2lzZSwgYSBzZXQgb2YgY29ubmVjdGVkIG5vZGVzLlxuICAgICAqICAgICAgICAgIElmIHRoZSBub2RlIGlzIGluIHRoZSBncmFwaCBidXQgaXNuJ3QgY29ubmVjdGVkIHRvIGFueXRoaW5nLCByZXR1cm5zIGVtcHR5IHNldC5cbiAgICAgKi9cbiAgICBnZXROZWlnaGJvcnMobm9kZSwgZGlyZWN0aW9uKSB7XG4gICAgICAgIGlmICghdGhpcy5ub2Rlcy5oYXMobm9kZSkpXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwib3V0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2V0KHRoaXMuY29ubmVjdGlvbnMuZ2V0KG5vZGUpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYWRqYWNlbnRUbyA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBuIG9mIHRoaXMubm9kZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25zLmdldChuKT8uaGFzKG5vZGUpKVxuICAgICAgICAgICAgICAgIGFkamFjZW50VG8uYWRkKG4pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJpblwiKVxuICAgICAgICAgICAgcmV0dXJuIGFkamFjZW50VG87XG4gICAgICAgIGZvciAoY29uc3QgbiBvZiB0aGlzLmNvbm5lY3Rpb25zLmdldChub2RlKSA/PyBbXSlcbiAgICAgICAgICAgIGFkamFjZW50VG8uYWRkKG4pO1xuICAgICAgICByZXR1cm4gYWRqYWNlbnRUbztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB0aGUgbnVtYmVyIG9mIGVkZ2VzIHRoaXMgbm9kZSBoYXMuXG4gICAgICogQHBhcmFtIG5vZGUgVGhlIG5vZGUgYmVpbmcgY29uc2RlcmVkLlxuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24gQ291bnQgb25seSB0aGUgZWRnZXMgZ29pbmcgdG93YXJkcyB0aGlzIG5vZGUsIGF3YXkgZnJvbVxuICAgICAqICAgICAgICAgIGl0LCBvciBib3RoLlxuICAgICAqIEByZXR1cm5zID49IDAsIHVuZGVmaW5lZCBpZiB0aGUgZ2l2ZW4gbm9kZSBpc24ndCBpbiB0aGUgZ3JhcGguXG4gICAgICovXG4gICAgZ2V0RGVncmVlKG5vZGUsIGRpcmVjdGlvbikge1xuICAgICAgICBpZiAoIXRoaXMubm9kZXMuaGFzKG5vZGUpKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcIm91dFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9ucy5nZXQobm9kZSk/LnNpemUgPz8gMDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGVnSW4gPSAwO1xuICAgICAgICB0aGlzLm5vZGVzLmZvckVhY2gobiA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9ucy5nZXQobikgPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25zLmdldChuKS5oYXMobm9kZSkpXG4gICAgICAgICAgICAgICAgZGVnSW4rKztcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJpblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVnSW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZ0luICsgKHRoaXMuY29ubmVjdGlvbnMuZ2V0KG5vZGUpPy5zaXplID8/IDApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbiBOb2RlIGluIHRoZSBncmFwaC5cbiAgICAgKiBAcGFyYW0gbjEgSW4gdGhlIGdyYXBoLlxuICAgICAqIEByZXR1cm5zIFVuZGVmaW5lZCBpZiBlaXRoZXIgbm9kZSBpc24ndCBpbiB0aGUgZ3JhcGggb3IgdGhleSdyZSBub3RcbiAgICAgKiBjb25uZWN0ZWQuXG4gICAgICovXG4gICAgZ2V0RWRnZShuLCBuMSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lZGdlcy5nZXQobik/LmdldChuMSk7XG4gICAgfVxuICAgIGNvbnRhaW5zKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZXMuaGFzKG5vZGUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyBBIG5ldyBzZXQgY29udGFpbmluZyBhbGwgdGhlIG5vZGVzIGluIHRoZSBncmFwaFxuICAgICAqL1xuICAgIGdldE5vZGVzKCkge1xuICAgICAgICByZXR1cm4gbmV3IFNldCh0aGlzLm5vZGVzKTtcbiAgICB9XG4gICAgZ2V0RWRnZXMoKSB7XG4gICAgICAgIGNvbnN0IG91dCA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5lZGdlcy5mb3JFYWNoKChtYXAsIGZpcnN0KSA9PiB7XG4gICAgICAgICAgICBtYXAuZm9yRWFjaCgoZWRnZSwgc2Vjb25kKSA9PiB7XG4gICAgICAgICAgICAgICAgb3V0LmFkZCh7IG46IGZpcnN0LCBuMTogc2Vjb25kLCBlOiBlZGdlIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICBudW1Ob2RlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZXMuc2l6ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhbGwgZ3JhcGggbm9kZXMgYW5kIGVkZ2VzIHRvIHRoaXMgb25lLlxuICAgICAqIEBwYXJhbSBncmFwaFxuICAgICAqIEByZXR1cm5zIHRoZSBzYW1lIGdyYXBoIGZvciBjaGFpbmluZy5cbiAgICAgKi9cbiAgICBhZGRHcmFwaChncmFwaCkge1xuICAgICAgICBncmFwaC5ub2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub2Rlcy5hZGQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBncmFwaC5lZGdlcy5mb3JFYWNoKChtYXAsIG5vZGUxKSA9PiB7XG4gICAgICAgICAgICBtYXAuZm9yRWFjaCgoZWRnZSwgbm9kZTIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWRnZSBpbnN0YW5jZW9mIEFyZ3VtZW50XzEuQXJndW1lbnQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQXJndW1lbnQoZWRnZSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZWRnZSA9PSBcInN1cHBvcnRzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFZGdlKG5vZGUxLCBub2RlMiwgQXJndW1lbnRFZGdlLlRvKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKG5vZGUxLCBub2RlMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVkZ2UgPT0gXCJjbGFpbXNcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVkZ2Uobm9kZTEsIG5vZGUyLCBBcmd1bWVudEVkZ2UuRnJvbSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbihub2RlMSwgbm9kZTIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gRWRnZSBUeXBlXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlcE9rKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgbGV0IG91dCA9IFwiR3JhcGgoViA9IHtcIjtcbiAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIHRoaXMubm9kZXMpIHtcbiAgICAgICAgICAgIG91dCArPSBub2RlLnRvU3RyaW5nKCkgKyBcIixcIjtcbiAgICAgICAgfVxuICAgICAgICBvdXQgPSBvdXQuc3Vic3RyaW5nKDAsIG91dC5sZW5ndGggLSAxKSArIFwifSwgRSA9IHtcIjtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucy5mb3JFYWNoKChzZXQsIHNyYykgPT4ge1xuICAgICAgICAgICAgc2V0LmZvckVhY2goZGVzdCA9PiB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IHNyYy50b1N0cmluZygpICsgXCIgLT4gXCIgKyBkZXN0LnRvU3RyaW5nKCkgKyBcIiwgXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIG91dCArPSBcIn0gRWRnZSBDb3VudDogXCIgKyB0aGlzLmNvbm5lY3Rpb25zLnNpemU7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIGFkZENvbm5lY3Rpb24obiwgbjEpIHtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbnMuZ2V0KG4pID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbnMuc2V0KG4sIG5ldyBTZXQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucy5nZXQobikuYWRkKG4xKTtcbiAgICB9XG4gICAgYWRkRWRnZShuLCBuMSwgZSkge1xuICAgICAgICBpZiAodGhpcy5lZGdlcy5nZXQobikgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmVkZ2VzLnNldChuLCBuZXcgTWFwKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWRnZXMuZ2V0KG4pLnNldChuMSwgZSk7XG4gICAgfVxuICAgIHJlcE9rKCkge1xuICAgICAgICB0aGlzLm5vZGVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9IHVuZGVmaW5lZCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBBbGwgY29ubmVjdGlvbnMvZWRnZXMgaGF2ZSBub2Rlc1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMubm9kZXMuaGFzKGtleSkpO1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChuID0+IHtcbiAgICAgICAgICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLm5vZGVzLmhhcyhuKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWRnZXMuZm9yRWFjaCgobWFwLCBmaXJzdCkgPT4ge1xuICAgICAgICAgICAgbWFwLmZvckVhY2goKGVkZ2UsIHNlY29uZCkgPT4ge1xuICAgICAgICAgICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMubm9kZXMuaGFzKGZpcnN0KSk7XG4gICAgICAgICAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5ub2Rlcy5oYXMoc2Vjb25kKSk7XG4gICAgICAgICAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5jb25uZWN0aW9ucy5nZXQoZmlyc3QpLmhhcyhzZWNvbmQpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbm9kZXMgPSBuZXcgU2V0KCk7XG4gICAgLy8gUXVpY2tseSBhY2Nlc3MgYWxsIGNvbm5lY3Rpb25zIG9mIGEgbm9kZVxuICAgIGNvbm5lY3Rpb25zID0gbmV3IE1hcCgpO1xuICAgIC8vIERldGVybWluZSB0aGUgdHlwZSBvZiBjb25uZWN0aW9uIGJldHdlZW4gdHdvIG5vZGVzXG4gICAgZWRnZXMgPSBuZXcgTWFwKCk7XG59XG5leHBvcnRzLkdyYXBoID0gR3JhcGg7XG52YXIgQXJndW1lbnRFZGdlO1xuKGZ1bmN0aW9uIChBcmd1bWVudEVkZ2UpIHtcbiAgICBBcmd1bWVudEVkZ2VbXCJUb1wiXSA9IFwic3VwcG9ydHNcIjtcbiAgICBBcmd1bWVudEVkZ2VbXCJGcm9tXCJdID0gXCJjbGFpbXNcIjtcbn0pKEFyZ3VtZW50RWRnZSA9IGV4cG9ydHMuQXJndW1lbnRFZGdlIHx8IChleHBvcnRzLkFyZ3VtZW50RWRnZSA9IHt9KSk7XG4vKipcbiAqIENvbW11bmljYXRlcyBhIHJlbGF0aW9uaGlwIGdpdmVuIGJ5IHRoZSB1c2VyLlxuICovXG5jbGFzcyBHaXZlbkVkZ2Uge1xuICAgIGNvbnN0cnVjdG9yKHIpIHtcbiAgICAgICAgdGhpcy5yID0gcjtcbiAgICB9XG4gICAgcjtcbn1cbmV4cG9ydHMuR2l2ZW5FZGdlID0gR2l2ZW5FZGdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdyYXBoTWluaXB1bGF0b3IgPSB2b2lkIDA7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0XCIpO1xuLyoqXG4gKiBUb29sIHRvIGRvIG9wZXJhdGlvbnMgb24gZ3JhcGhzLlxuICovXG5jbGFzcyBHcmFwaE1pbmlwdWxhdG9yIHtcbiAgICAvKipcbiAgICAgKiBGaW5kIG5vZGVzIG9mIGNvbXBvbmVudHMgb2YgYSBncmFwaCB3aGVyZSBvbmx5IGVkZ2VzIGZvciB3aGljaFxuICAgICAqIHRoZSBjYWxsYmFjayBmdW5jdGlvbiByZXR1cm5zIHRydWUgYXJlIGNvbnNpZGVyZWQuXG4gICAgICogQHBhcmFtXG4gICAgICogQHBhcmFtIGlzQ29ubmVjdGVkXG4gICAgICovXG4gICAgc3RhdGljIGdldENvbXBvbmVudE5vZGVzKGlucHV0LCBpc0Nvbm5lY3RlZCkge1xuICAgICAgICBjb25zdCBpbmNsdWRlZE5vZGVzID0gbmV3IFNldCgpO1xuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gbmV3IFNldCgpO1xuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgaW5wdXQuZ2V0Tm9kZXMoKSkge1xuICAgICAgICAgICAgaWYgKGluY2x1ZGVkTm9kZXMuaGFzKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRBbGxDb25uZWN0ZWQobikge1xuICAgICAgICAgICAgICAgIGluY2x1ZGVkTm9kZXMuYWRkKG4pO1xuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQuaGFzKG4pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmFkZChuKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5laWdoYm9yIG9mIGlucHV0LmdldE5laWdoYm9ycyhuLCBcImJvdGhcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0Nvbm5lY3RlZChpbnB1dC5nZXRFZGdlKG4sIG5laWdoYm9yKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgZ2V0QWxsQ29ubmVjdGVkKG5laWdoYm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2V0QWxsQ29ubmVjdGVkKG5vZGUpO1xuICAgICAgICAgICAgY29tcG9uZW50LmFkZChub2RlKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYWRkKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkoaW5jbHVkZWROb2Rlcy5zaXplID09IGlucHV0Lm51bU5vZGVzKCkpO1xuICAgICAgICAvLyBBc3NlcnQgY29tcG9uZW50cyBhcmUgcGFpcndpc2UgZGlzam9pbnQgb2YgcHJvYmxlbXMgc2hvdyB1cFxuICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyBldmVyeSBlZGdlIGluIHRoZSBncmFwaC5cbiAgICAgKiBAcGFyYW0gaW5wdXRcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRSZWxhdGlvbnMoaW5wdXQpIHtcbiAgICAgICAgY29uc3Qgb3V0ID0gW107XG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBpbnB1dC5nZXROb2RlcygpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG90aGVyIG9mIGlucHV0LmdldE5laWdoYm9ycyhub2RlLCBcIm91dFwiKSkge1xuICAgICAgICAgICAgICAgIG91dC5wdXNoKHsgZmlyc3Q6IG5vZGUsIHNlY29uZDogb3RoZXIsIGU6IGlucHV0LmdldEVkZ2Uobm9kZSwgb3RoZXIpIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgZ3JhcGggaW50byBzZXRzIG9mXG4gICAgICogbm9kZXMgZ3JvdXBlZCBieSBkZXB0aCBmcm9tIGEgY2VudGVyIG5vZGUuXG4gICAgICogQXNzdW1lcyB0aGUgZ3JhcGggaXMgY29ubmVjdGVkLlxuICAgICAqIEBwYXJhbSByb290Tm9kZXMgQ29udGFpbnMgYXQgbGVhc3Qgb25lIG5vZGUgaW4gdGhlIGdyYXBoLlxuICAgICAqIEBwYXJhbSBjb3VudCBGdW5jdGlvbiB0aGF0IGRldGVybWluZXMgaWYgYW55IGdpdmVuIG5vZGUgc2hvdWxkIGJlXG4gICAgICogaW5jbHVkZWQgaW4gdGhlIGRlcHRoIGNvdW50LiBEZWZhdWx0cyB0byBjb3VudGluZyBhbGwgbm9kZXMuIE5vZGVzIHRoYXRcbiAgICAgKiBhcmVuJ3QgaW5jbHVkZWQgd29uJ3QgYmUgaW4gdGhlIHJldHVybmVkIHZhbHVlLlxuICAgICAqIEByZXR1cm5zIE1hcCBmcm9tIGRlcHRoIGluIGdyYXBoIHRvIGEgc2V0IG9mIG5vZGVzIGF0IHRoYXQgZGVwdGguXG4gICAgICpcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0TGV2ZWxzKGlucHV0LCByb290Tm9kZXMsIGNvdW50ID0gKCkgPT4gdHJ1ZSkge1xuICAgICAgICBjb25zdCByb290cyA9IG5ldyBTZXQocm9vdE5vZGVzKTtcbiAgICAgICAgY29uc3QgZGVwdGhzID0gbmV3IE1hcCgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVjdXJzaXZlbHkgbWFwcyBvdXQgYWxsIG5vZGVzIGluIHRoZSBncmFwaCxcbiAgICAgICAgICogcHV0dGluIHRoZW0gaW4gdGhlIGRlcHRocyBtYXAuXG4gICAgICAgICAqIEBwYXJhbSBub2RlXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBtYXBOb2RlKG5vZGUsIGRlcHRoID0gMCkge1xuICAgICAgICAgICAgaWYgKHJvb3RzLmhhcyhub2RlKSkge1xuICAgICAgICAgICAgICAgIGRlcHRoID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZXB0aCA8IChkZXB0aHMuZ2V0KG5vZGUpID8/IE51bWJlci5NQVhfVkFMVUUpKSB7XG4gICAgICAgICAgICAgICAgZGVwdGhzLnNldChub2RlLCBkZXB0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZWlnaGJvcnMgPSBbLi4uaW5wdXQuZ2V0TmVpZ2hib3JzKG5vZGUsIFwiYm90aFwiKV07XG4gICAgICAgICAgICBuZWlnaGJvcnMuZmlsdGVyKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGZvdW5kIGEgc2hvcnRlciBwYXRoIHRvIGl0IG9yIHRoZXJlIHdhcyBubyBmb3VuZCBwYXRoIHRvIGl0XG4gICAgICAgICAgICAgICAgcmV0dXJuIChkZXB0aHMuZ2V0KHZhbHVlKSA9PSB1bmRlZmluZWQgfHwgZGVwdGhzLmdldCh2YWx1ZSkgPiBkZXB0aCkgJiYgdmFsdWUgIT09IG5vZGU7XG4gICAgICAgICAgICB9KS5mb3JFYWNoKG4gPT4ge1xuICAgICAgICAgICAgICAgIG1hcE5vZGUobiwgY291bnQobm9kZSkgPyBkZXB0aCArIDEgOiBkZXB0aCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBtYXBOb2RlKFsuLi5yb290c11bMF0pO1xuICAgICAgICBjb25zdCBvdXQgPSBuZXcgTWFwKCk7XG4gICAgICAgIGRlcHRocy5mb3JFYWNoKChkZXB0aCwgbm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjb3VudChub2RlKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiAob3V0LmdldChkZXB0aCkgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgb3V0LnNldChkZXB0aCwgbmV3IFNldCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91dC5nZXQoZGVwdGgpLmFkZChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgdGhlIGdpdmVuIGdyYXBoIGlzIGNvbm5lY3RlZCwgbWVhbmluZyB0aGF0XG4gICAgICogaXQncyBwb3NzaWJsZSB0byB0cmF2ZXJzZSBiZXR3ZWVuIGFueSB0d28gbm9kZXMgb24gdGhlIGdyYXBoLlxuICAgICAqL1xuICAgIHN0YXRpYyBpc0Nvbm5lY3RlZChpbnB1dCkge1xuICAgICAgICAvLyBDaGVjayBldmVyeSBub2RlIGhhcyBhIGRlZ3JlZSBvZiAxIG9yIG1vcmUgb3IgZ3JhcGggb25seSBoYXMgMSBvciAwIGVsZW1lbnRzXG4gICAgICAgIHJldHVybiBbLi4uaW5wdXQuZ2V0Tm9kZXMoKV0ubWFwKG5vZGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0LmdldERlZ3JlZShub2RlLCBcImJvdGhcIikgPiAwO1xuICAgICAgICB9KS5yZWR1Y2UoKGEsIGIpID0+IGEgJiYgYikgfHwgaW5wdXQubnVtTm9kZXMoKSA8IDI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpbHRlcnMgZWRnZXMgbGlzdCByZXR1cm5pbmcgYSBsaXN0IHdoZXJlIG9ubHkgb25lIGVkZ2VcbiAgICAgKiBmcm9tIGFueSBlZGdlIGxvb3BzIGlzIGluY2x1ZGVkLlxuICAgICAqIEZvciBleGFtcGxlIGlmIHRoZSBpbnB1dCBlZGdlcyBhcmUgYSAtPiBiIGFuZCBiIC0+IGEsXG4gICAgICogdGhlIHJlc3VsdCB3aWxsIG9ubHkgY29udGFpbiBhIC0+IGIuXG4gICAgICogQHBhcmFtIGVkZ2VzXG4gICAgICovXG4gICAgc3RhdGljIGRyb3BTeW1tZXRyaWMoZWRnZXMpIHtcbiAgICAgICAgY29uc3Qgb3V0ID0gW107XG4gICAgICAgIGZ1bmN0aW9uIGFscmVhZHlIYXMoZWRnZSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlIG9mIG91dClcbiAgICAgICAgICAgICAgICBpZiAoZWRnZS5uID09IGUubjEgJiYgZWRnZS5uMSA9PSBlLm4pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgZWRnZSBvZiBlZGdlcykge1xuICAgICAgICAgICAgaWYgKCFhbHJlYWR5SGFzKGVkZ2UpKVxuICAgICAgICAgICAgICAgIG91dC5wdXNoKGVkZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxufVxuZXhwb3J0cy5HcmFwaE1pbmlwdWxhdG9yID0gR3JhcGhNaW5pcHVsYXRvcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5SZWxhdGlvbnNoaXAgPSB2b2lkIDA7XG4vKipcbiAqIEEgd2F5IGluIHdoaWNoIDIgZXhwcmVzc2lvbnMgY2FuIGJlIHJlbGF0ZWQuXG4gKi9cbnZhciBSZWxhdGlvbnNoaXA7XG4oZnVuY3Rpb24gKFJlbGF0aW9uc2hpcCkge1xuICAgIFJlbGF0aW9uc2hpcFtcIkVxdWFsXCJdID0gXCI9XCI7XG59KShSZWxhdGlvbnNoaXAgPSBleHBvcnRzLlJlbGF0aW9uc2hpcCB8fCAoZXhwb3J0cy5SZWxhdGlvbnNoaXAgPSB7fSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRlcml2ZXIgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uL0FyZ3VtZW50XCIpO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4uL2V4cHJlc3Npb25zL0V4cHJlc3Npb25cIik7XG5jb25zdCBHcmFwaF8xID0gcmVxdWlyZShcIi4uL0dyYXBoXCIpO1xuY29uc3QgR3JhcGhNaW5pcHVsYXRvcl8xID0gcmVxdWlyZShcIi4uL0dyYXBoTWluaXB1bGF0b3JcIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuY29uc3QgcmVjdXJzaW9uXzEgPSByZXF1aXJlKFwiLi9yZWN1cnNpb25cIik7XG5jb25zdCBSZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuL1JlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZVwiKTtcbi8qKlxuICogSG9sZHMgYSBzaW5nbGUgZ3JhcGggYW5kIGV4cGFuZHMgaXQgdXNpbmcgcnVsZXMuXG4gKi9cbmNsYXNzIERlcml2ZXIge1xuICAgIC8qKlxuICAgICAqIEdpdmUgaXQgdGhlIGdyYXBoIHlvdSdyZSBnb2luZyB0byBleHBhbmQuXG4gICAgICogQHBhcmFtIGdyYXBoXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZ3JhcGgpIHtcbiAgICAgICAgdGhpcy5ncmFwaCA9IGdyYXBoO1xuICAgICAgICB0aGlzLnNpbXBsaWZpZWRJbklzb2xhdGlvbiA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5ub3RTaW1wbGlmaWFibGUgPSBuZXcgU2V0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV4cGFuZHMgdGhlIGdyYXBoIGFyYml0cmFyaWx5LlxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgc3RpbGwgcG9vcmx5IGRlZmluZWQsXG4gICAgICogdmVyeSBleHBlcmVtZW50YWwuXG4gICAgICovXG4gICAgZXhwYW5kKCkge1xuICAgICAgICAvLyBTaW1wbGlmeSBhbGwgdGhlIGV4cHJlc3Npb25zIHVzaW5nIHRoZSBjb250ZXh0bGVzcyBzaW1wbGlmeWluZyBydWxlc1xuICAgICAgICAvLyBEbyB0aGlzIHVudGlsIHRoZXJlJ3Mgbm90aGluZyBtb3JlIHRvIHNpbXBsaWZ5XG4gICAgICAgIHRoaXMuc2ltcGxpZnlOb0NvbnRleHQoKTtcbiAgICAgICAgdGhpcy5hbGdlYnJhaWNFeHBhbnNpb24oKTtcbiAgICAgICAgdGhpcy5zaW1wbGlmeU5vQ29udGV4dCgpO1xuICAgICAgICB0aGlzLmFsZ2VicmFpY0V4cGFuc2lvbigpO1xuICAgICAgICB0aGlzLnNpbXBsaWZ5Tm9Db250ZXh0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IG1ha2VzIHN1cmUgdGhhdCBldmVyeSBub2RlIGluIHRoZSBncmFwaFxuICAgICAqIGlzIGVpdGhlciBzaW1wbGlmaWVkIChtZWFuaW5nIHRoZXJlIGlzIG5vIGNvbnRleHRsZXNzXG4gICAgICogcnVsZSB0aGF0IGNhbiBzaW1wbGlmeSBpdCBmdXJ0aGVyKSBvciBpcyBtYXJrZWQgZG93blxuICAgICAqIGFzIHVuc2ltcGxpZmlhYmxlLlxuICAgICAqL1xuICAgIHNpbXBsaWZ5Tm9Db250ZXh0KCkge1xuICAgICAgICBjb25zdCBydWxlcyA9IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlLnJ1bGVzO1xuICAgICAgICBjb25zdCB1bmNoZWNrZWQgPSBbLi4udGhpcy5ncmFwaC5nZXROb2RlcygpXS5maWx0ZXIobiA9PiBuIGluc3RhbmNlb2YgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24pXG4gICAgICAgICAgICAubWFwKG4gPT4gbilcbiAgICAgICAgICAgIC5maWx0ZXIoZSA9PiAhdGhpcy5zaW1wbGlmaWVkSW5Jc29sYXRpb24uaGFzKGUpKTtcbiAgICAgICAgdW5jaGVja2VkLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaW1wbGlmaWNhdGlvbnMgPSAoMCwgcmVjdXJzaW9uXzEuZXF1aXYpKGUsIGNvbnRleHRsZXNzU2ltcGxpZmljYXRpb25zRm4pO1xuICAgICAgICAgICAgdGhpcy5zaW1wbGlmaWVkSW5Jc29sYXRpb24uYWRkKGUpO1xuICAgICAgICAgICAgaWYgKHNpbXBsaWZpY2F0aW9ucy5sZW5ndGggPT0gMClcbiAgICAgICAgICAgICAgICB0aGlzLm5vdFNpbXBsaWZpYWJsZS5hZGQoZSk7XG4gICAgICAgICAgICBzaW1wbGlmaWNhdGlvbnMuZm9yRWFjaChhID0+IHRoaXMuZ3JhcGguYWRkQXJndW1lbnQoYSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHVuY2hlY2tlZC5sZW5ndGggPiAwKVxuICAgICAgICAgICAgdGhpcy5zaW1wbGlmeU5vQ29udGV4dCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFeHBhbmRzIHRoZSBncmFwaCB1c2luZyBhbGdlYnJhIHJ1bGVzLlxuICAgICAqIE9ubHkgc2ltcGxpZmllZCBydWxlcyBhcmUgdXNlZC5cbiAgICAgKi9cbiAgICBhbGdlYnJhaWNFeHBhbnNpb24oKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVzID0gWy4uLlJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZV8xLlJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZS5ydWxlc107XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBbLi4uR3JhcGhNaW5pcHVsYXRvcl8xLkdyYXBoTWluaXB1bGF0b3IuZ2V0Q29tcG9uZW50Tm9kZXModGhpcy5ncmFwaCwgZWRnZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChlZGdlIGluc3RhbmNlb2YgQXJndW1lbnRfMS5Bcmd1bWVudCAmJiBlZGdlLnJlbGF0aW9uc2hpcCA9PSBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwpXG4gICAgICAgICAgICAgICAgICAgIHx8IChlZGdlIGluc3RhbmNlb2YgR3JhcGhfMS5HaXZlbkVkZ2UgJiYgZWRnZS5yID09IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCk7XG4gICAgICAgICAgICB9KV07XG4gICAgICAgIGNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXF1YXRpb24gPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uICYmIHRoaXMubm90U2ltcGxpZmlhYmxlLmhhcyhub2RlKSlcbiAgICAgICAgICAgICAgICAgICAgZXF1YXRpb24ucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJ1bGVzLmZvckVhY2gociA9PiB7XG4gICAgICAgICAgICAgICAgci5hcHBseShzZXRPZiguLi5lcXVhdGlvbikpLmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGguYWRkQXJndW1lbnQoYSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdyYXBoO1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gZXhwcmVzc2lvbiBpcyBpbiB0aGUgZ3JhcGhcbiAgICAgKiBhbmQgaGFzIGFscmVhZHkgaGFkIHRoZSBjb250ZXh0bGVzcyBzaW1wbGlmaWNhdGlvbiBvcGVyYXRpb25zXG4gICAgICogZG9uZSB0byBpdCBhbmQgY2Fubm90IGJlIGZ1cnRoZXIgc2ltcGxpZmllZC5cbiAgICAgKi9cbiAgICBpc1NpbXBsaWZpZWQoZXhwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdFNpbXBsaWZpYWJsZS5oYXMoZXhwKTtcbiAgICB9XG4gICAgLy8gQSBzZXQgb2Ygbm9kZXMgaW4gdGhlIGdyYXBoIHdoaWNoIGhhdmUgaGFkIGFsbCBzaW1wbGlmaWNhdGlvbiBcbiAgICAvLyBvcGVyYXRpb25zIGRvbmUgdG8gdGhlbS5cbiAgICBzaW1wbGlmaWVkSW5Jc29sYXRpb247XG4gICAgLy8gVGhlIHNldCBvZiBub2RlcyBpbiB0aGUgZ3JhcGggdGhhdCBoYXZlIGhhZCBjb250ZXh0bGVzc1xuICAgIC8vIHNpbXBsaWZpY2F0aW9uIG9wZXJhdGlvbnMgcnVuIG9uIHRoZW0gYW5kIGFyZW4ndCBmdXJ0aGVyXG4gICAgLy8gc2ltcGxpZmlhYmxlXG4gICAgbm90U2ltcGxpZmlhYmxlO1xufVxuZXhwb3J0cy5EZXJpdmVyID0gRGVyaXZlcjtcbi8qKlxuICogRmluZHMgZXF1aXZhbGVudHMgb2YgdGhlIGdpdmVuIGV4cHJlc3Npb25cbiAqIHVzaW5nIHJ1bGVzIG9mIGluZmVyZW5jZS4gTm90IHJlY3Vyc2l2ZS5cbiAqIEBwYXJhbSBleHBcbiAqL1xuY29uc3QgY29udGV4dGxlc3NTaW1wbGlmaWNhdGlvbnNGbiA9IGZ1bmN0aW9uIGRpcmVjdEVxdWl2YWxlbnRzKGV4cCkge1xuICAgIGNvbnN0IHJ1bGVzID0gWy4uLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlLnJ1bGVzXTtcbiAgICBjb25zdCBvdXQgPSBuZXcgU2V0KCk7XG4gICAgcnVsZXMuZmlsdGVyKHIgPT4gci5hcHBsaWVzKGV4cCkpLmZvckVhY2gocnVsZSA9PiB7XG4gICAgICAgIHJ1bGUuYXBwbHkoZXhwKS5mb3JFYWNoKGkgPT4ge1xuICAgICAgICAgICAgb3V0LmFkZChpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG91dDtcbn07XG5mdW5jdGlvbiBzZXRPZiguLi5hcnIpIHtcbiAgICBjb25zdCBvdXQgPSBuZXcgU2V0KCk7XG4gICAgYXJyLmZvckVhY2goZSA9PiBvdXQuYWRkKGUpKTtcbiAgICByZXR1cm4gb3V0O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUgPSB2b2lkIDA7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2Fzc2VydFwiKTtcbi8qKlxuICogQSBydWxlIHRoYXQgdGFrZXMgYW4gZXhwcmVzc2lvbiBhbmQgcHJvZHVjZXMgYW4gZXF1aXZhbGVudCBleHByZXNzaW9uLlxuICogRXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZXMgY2FuIHVzZSByZWZsZWN0aW9uIHRvIGRldGVybWluZSB3aGF0XG4gKiB0eXBlIG9mIGV4cHJlc3Npb24gdGhleSdyZSBnaXZlbiwgYnV0IHNob3VsZCB1c2UgZXhwcmVzc2lvbiBzcGVjaWZpY1xuICogZnVuY3Rpb25zIG9uIHN1Yi1leHByZXNzaW9ucy4gVGhlc2UgcnVsZXMgd2lsbCBiZSByZWN1cnNpdmVseSB1c2VkXG4gKiB0byBkZXJpdmUgc2ltcGxpZmllZCBleHByZXNzaW9ucy5cbiAqXG4gKiBUaGVzZSBydWxlcyBhcmUgYWxzbyBjb250ZXh0bGVzczogdGhleSdyZSBvbmx5IGdpdmVuIHRoZSBleHByZXNzaW9uLFxuICogbm8gb3RoZXIgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHByb2JsZW0uXG4gKi9cbmNsYXNzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIC8qKlxuICAgICAqIEFsbCBzdWJjbGFzc2VzIHNob3VsZCByZWdpc3RlciB0aGVtc2VsdmVzIGluIHRoaXMgbGlzdC5cbiAgICAgKi9cbiAgICBzdGF0aWMgcnVsZXMgPSBuZXcgU2V0KCk7XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoaXMgcnVsZSBjYW4gZmluZCBlcXVpdmFsZW50cyBmb3IgdGhlXG4gICAgICogZ2l2ZW4gZXhwcmVzc2lvbi4gT25seSBjYWxsIGFwcGx5KCkgaWYgdHJ1ZS5cbiAgICAgKi9cbiAgICBhcHBsaWVzKGV4cCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcHBsaWVzSW1wbChleHApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9kdWNlcyBhIHNldCBvZiBleHByZXNzaW9ucyB0aGF0IGFyZSBlcXVpdmFsZW50IHRvXG4gICAgICogdGhlIGdpdmVuIG9uZS4gT25seSBjYWxsIGlmIHRoZSBnaXZlbiBleHByZXNzaW9uXG4gICAgICogcGFzc2VkIHRoZSBhcHBsaWVzKCkgdGVzdC5cbiAgICAgKiBAcGFyYW0gZXhwIFRoZSBleHByZXNzaW9uIHRvIGZpbmQgYW4gZXF1aXZhbGVudCBmb3IuXG4gICAgICogQHJldHVybnMgU2V0IG9mIGVxdWl2YWxlbnQgZXhwcmVzc2lvbnMuXG4gICAgICovXG4gICAgYXBwbHkoZXhwKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuYXBwbHlJbXBsKGV4cCk7XG4gICAgICAgIHJlc3VsdC5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkoZSAhPSBudWxsICYmIGUgIT0gdW5kZWZpbmVkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuZXhwb3J0cy5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlID0gTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGUgPSB2b2lkIDA7XG4vKipcbiAqIFByb2R1Y2VzIHRydXRocyBmcm9tIGEgc2V0IG9mIGVxdWl2YWxlbnQgZXhwcmVzc2lvbnMuXG4gKi9cbmNsYXNzIFJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZSB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXF1YXRpb24gQSBzZXQgb2YgZXhwcmVzc2lvbnMgd2hpY2ggYXJlIGVxdWFsLlxuICAgICAqL1xuICAgIGFwcGx5KGVxdWF0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcGx5SW1wbChlcXVhdGlvbik7XG4gICAgfVxuICAgIHN0YXRpYyBydWxlcyA9IG5ldyBTZXQoKTtcbn1cbmV4cG9ydHMuUmVsYXRpb25hbERlcml2YXRpb25SdWxlID0gUmVsYXRpb25hbERlcml2YXRpb25SdWxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRpdmlkZU9uQm90aFNpZGVzID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9Qcm9kdWN0XCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgUmVsYXRpb25hbERlcml2YXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vUmVsYXRpb25hbERlcml2YXRpb25SdWxlXCIpO1xuY2xhc3MgRGl2aWRlT25Cb3RoU2lkZXMgZXh0ZW5kcyBSZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGVfMS5SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGUge1xuICAgIGFwcGx5SW1wbChlcXVhdGlvbikge1xuICAgICAgICBjb25zdCBvdXQgPSBbXTtcbiAgICAgICAgY29uc3QgY29tYmluYXRpb25zID0gY2FydGVzaWFuUHJvZHVjdChlcXVhdGlvbik7XG4gICAgICAgIGNvbWJpbmF0aW9ucy5maWx0ZXIocGFpciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcGFpclswXSBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0O1xuICAgICAgICB9KS5mb3JFYWNoKHBhaXIgPT4ge1xuICAgICAgICAgICAgY29uc3QgcCA9IHBhaXJbMF07XG4gICAgICAgICAgICBjb25zdCBvdGhlciA9IHBhaXJbMV07XG4gICAgICAgICAgICAvLyBTb21lIHByb2R1Y3RzIGhhdmUgbXVsdGlwbGUgZmFjdG9yc1xuICAgICAgICAgICAgcC5mYWN0b3JzLmZvckVhY2goZmFjdG9yID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2Vjb25kO1xuICAgICAgICAgICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZCA9IFsuLi5vdGhlci5mYWN0b3JzXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZCA9IFtvdGhlcl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGNsYWltID0geyBuOiBwLndpdGhvdXQoZmFjdG9yKSwgbjE6ICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5mcmFjdGlvbikoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3RPck5vdCkoLi4uc2Vjb25kKSwgZmFjdG9yKSwgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsIH07XG4gICAgICAgICAgICAgICAgb3V0LnB1c2gobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQobmV3IFNldChbcCwgb3RoZXJdKSwgY2xhaW0sIFwiYT1iICYgYz1kID0+IGEvYyA9IGIvZFwiKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxufVxuZXhwb3J0cy5EaXZpZGVPbkJvdGhTaWRlcyA9IERpdmlkZU9uQm90aFNpZGVzO1xuLyoqXG4gKiBHZXRzIHRoZSBhbnRpLXJlZmxleGl2ZSBjbG9zdXJlIG9mIHRoZSByZWxhdGlvbiBBIHggQS5cbiAqIEl0J3Mgc3ltbWV0cmljIGFuZCB0cmFuc2l0aXZlLlxuICpcbiAqIEBwYXJhbSBzZXRcbiAqL1xuZnVuY3Rpb24gY2FydGVzaWFuUHJvZHVjdChzZXQpIHtcbiAgICBjb25zdCBvdXQgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGZpcnN0IG9mIHNldCkge1xuICAgICAgICBmb3IgKGNvbnN0IHNlY29uZCBvZiBzZXQpIHtcbiAgICAgICAgICAgIGlmIChmaXJzdCA9PT0gc2Vjb25kKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgb3V0LnB1c2goW2ZpcnN0LCBzZWNvbmRdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlN1YnRyYWN0RnJvbUJvdGhTaWRlcyA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vQXJndW1lbnRcIik7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db252ZW5pZW50RXhwcmVzc2lvbnNcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvUHJvZHVjdFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL1N1bVwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IFJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL1JlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZVwiKTtcbmNsYXNzIFN1YnRyYWN0RnJvbUJvdGhTaWRlcyBleHRlbmRzIFJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZV8xLlJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZSB7XG4gICAgYXBwbHlJbXBsKGVxdWF0aW9uKSB7XG4gICAgICAgIGNvbnN0IG91dCA9IFtdO1xuICAgICAgICBjb25zdCBjb21iaW5hdGlvbnMgPSBjYXJ0ZXNpYW5Qcm9kdWN0KGVxdWF0aW9uKTtcbiAgICAgICAgLy8gSWYgb25lIGlzIGFkZGl0aW9uLCBzdWJ0cmFjdCBmcm9tIGJvdGggc2lkZXNcbiAgICAgICAgLy8gSGVyZSB3ZSBmaWx0ZXIgc28gdGhhdCBvbmx5IHBhaXJzIHdoZXJlIHRoZSBmaXJzdCBleHByZXNzaW9uIGlzXG4gICAgICAgIC8vIGEgc3VtIGFyZSBvcGVyYXRlZCBvbi4gVGhpcyB3b3JrcyBiZWNhdXNlIGNvbWJpbmF0aW9ucyBpcyBzeW1ldHJpYy5cbiAgICAgICAgLy8gTm93IGZvciBlYWNoIHBhaXIgd2Ugb25seSBoYXZlIHRvIGRlYWwgd2l0aCB0aGUgZmlyc3QgZXhwIGJlaW5nIHN1bS5cbiAgICAgICAgY29tYmluYXRpb25zLmZpbHRlcihwYWlyID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwYWlyWzBdIGluc3RhbmNlb2YgU3VtXzEuU3VtO1xuICAgICAgICB9KS5mb3JFYWNoKHBhaXIgPT4ge1xuICAgICAgICAgICAgY29uc3QgcyA9IHBhaXJbMF07XG4gICAgICAgICAgICBjb25zdCBvdGhlciA9IHBhaXJbMV07XG4gICAgICAgICAgICAvLyBTb21lIFN1bXMgaGF2ZSBtdWx0aXBsZSB0ZXJtc1xuICAgICAgICAgICAgcy50ZXJtcy5maWx0ZXIodGVybSA9PiAhKHRlcm0gaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCAmJiB0ZXJtLmlzTmVnYXRpb24pKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKHRlcm0gPT4ge1xuICAgICAgICAgICAgICAgIC8vIElmIG90aGVyIGlzIGl0c2VsZiBhIHN1bSwgd2Ugd2lsbCBicmVhayBpdCBhcGFydFxuICAgICAgICAgICAgICAgIC8vIGludG8gdGVybXMgc28gdGhhdCB3ZSBjYW4gY29tYmluZSBpbnRlZ2VyIHRlcm1zIGluIHRoZVxuICAgICAgICAgICAgICAgIC8vIGZpbmFsIHJlc3VsdCBhbmQgYXZvaWRcbiAgICAgICAgICAgICAgICAvLyB4ICsgMiArIDIgPSB5ICsgMiA9PiB4ICsgMiA9IHkgKyAyIC0gMlxuICAgICAgICAgICAgICAgIC8vIE5vdGU6IFdlIG9ubHkgZG8gdGhpcyB0byBpbnRlZ2VyIHRlcm1zLCBiZWNhdXNlIHRoYXQnc1xuICAgICAgICAgICAgICAgIC8vIHNvIG9idmlvdXMgYW5kIGNvdWxkbid0IHBvc3NpYmx5IG5lZWQgdG8gYmUgZXhwbGFpbmVkIGZ1cnRoZXIuXG4gICAgICAgICAgICAgICAgLy8gV2UgZG9uJ3QgZG8gaXQgdG8gdmFyaWFibGUgdGVybXMuIFRoZSBmb2xsb3dpbmcgaXMgY29ycmVjdCBiZWhhdmlvcjpcbiAgICAgICAgICAgICAgICAvLyB4ICsgYSArIGEgPSB5ICsgYSA9PiB4ICsgYSA9IHkgKyBhIC0gYVxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFRoaXMgZGlzdGluY3Rpb24gaXMgZGViYXRhYmxlLiBXaHkgc2hvdWxkbid0IHRoZSBsZWZ0IGhhbmRcbiAgICAgICAgICAgICAgICAvLyBvZiB0aGUgbGFzdCBkZWR1Y3Rpb24gYmUgeCArIGEgKyBhIC0gYT8gQnkgZG9pbmcgdGhpcywgXG4gICAgICAgICAgICAgICAgLy8gd2UgcHJvZHVjZSBhIG11Y2ggbW9yZSBjb21wbGljYXRlZCBhbmQgZXhwZW5zaXZlIGdyYXBoLiBcbiAgICAgICAgICAgICAgICBsZXQgc2Vjb25kO1xuICAgICAgICAgICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIFN1bV8xLlN1bSkge1xuICAgICAgICAgICAgICAgICAgICBzZWNvbmQgPSBbLi4ub3RoZXIudGVybXNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kID0gW290aGVyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgY2xhaW0gPSB7IG46IHMud2l0aG91dCh0ZXJtKSwgbjE6ICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW1JbnR1aXRpdmUpKC4uLnNlY29uZCwgKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm5lZ2F0aXZlKSh0ZXJtKSksIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCB9O1xuICAgICAgICAgICAgICAgIG91dC5wdXNoKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KG5ldyBTZXQoW3MsIG90aGVyXSksIGNsYWltLCBcImE9YiAmIGM9ZCA9PiBhLWMgPSBiLWRcIikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbn1cbmV4cG9ydHMuU3VidHJhY3RGcm9tQm90aFNpZGVzID0gU3VidHJhY3RGcm9tQm90aFNpZGVzO1xuLyoqXG4gKiBHZXRzIHRoZSBhbnRpLXJlZmxleGl2ZSBjbG9zdXJlIG9mIHRoZSByZWxhdGlvbiBBIHggQS5cbiAqIEl0J3Mgc3ltbWV0cmljIGFuZCB0cmFuc2l0aXZlLlxuICpcbiAqIEBwYXJhbSBzZXRcbiAqL1xuZnVuY3Rpb24gY2FydGVzaWFuUHJvZHVjdChzZXQpIHtcbiAgICBjb25zdCBvdXQgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGZpcnN0IG9mIHNldCkge1xuICAgICAgICBmb3IgKGNvbnN0IHNlY29uZCBvZiBzZXQpIHtcbiAgICAgICAgICAgIGlmIChmaXJzdCA9PT0gc2Vjb25kKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgb3V0LnB1c2goW2ZpcnN0LCBzZWNvbmRdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmVxdWl2ID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IEV4cG9uZW50XzEgPSByZXF1aXJlKFwiLi4vZXhwcmVzc2lvbnMvRXhwb25lbnRcIik7XG5jb25zdCBGcmFjdGlvbl8xID0gcmVxdWlyZShcIi4uL2V4cHJlc3Npb25zL0ZyYWN0aW9uXCIpO1xuY29uc3QgSW50ZWdlcl8xID0gcmVxdWlyZShcIi4uL2V4cHJlc3Npb25zL0ludGVnZXJcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi4vZXhwcmVzc2lvbnMvUHJvZHVjdFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4uL2V4cHJlc3Npb25zL1N1bVwiKTtcbmNvbnN0IFZhcmlhYmxlXzEgPSByZXF1aXJlKFwiLi4vZXhwcmVzc2lvbnMvVmFyaWFibGVcIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi9SZWxhdGlvbnNoaXBcIik7XG4vKipcbiAqIEdldHMgYWxsIGVxdWl2YWxlbnRzIG9mIHRoZSBnaXZlbiBleHByZXNzaW9uXG4gKiBjaGVja2luZyBpdCdzIGNoaWxkcmVuJ3MgZXF1aXZhbGVudHMuXG4gKlxuICogKGEgKyBhKSArIChiICsgYilcbiAqIC0+ICgyYSkgKyAoYiArIGIpIHdpdGggaW5mZXJlbmNlIGEgKyBhID0gMmFcbiAqIEBwYXJhbSBleHBcbiAqIEBwYXJhbSBkaXJlY3RFcXVpdmFsZW50cyBGdW5jdGlvbiB0aGF0IHdpbGwgcHJvZHVjZSBlcXVpdmFsZW50IGV4cHJlc3Npb25zXG4gKiAgICAgICAgd2l0aG91dCByZWN1cnNpb24uXG4gKiBAcmV0dXJucyBBcnJheSBvZiBpbmZlcmVuY2VzIHRvIGVxdWl2YWxlbnQgZXhwcmVzc2lvbnMuXG4gKi9cbmZ1bmN0aW9uIGVxdWl2KGV4cCwgZGlyZWN0RXF1aXZhbGVudHMpIHtcbiAgICBpZiAoZXhwIGluc3RhbmNlb2YgVmFyaWFibGVfMS5WYXJpYWJsZSB8fCBleHAgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcilcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIGVsc2VcbiAgICAgICAgc3dpdGNoIChleHAuY2xhc3MpIHtcbiAgICAgICAgICAgIGNhc2UgU3VtXzEuU3VtVHlwZTogcmV0dXJuIHN1bUVxdWl2KGV4cCwgZGlyZWN0RXF1aXZhbGVudHMpO1xuICAgICAgICAgICAgY2FzZSBQcm9kdWN0XzEuUHJvZHVjdFR5cGU6IHJldHVybiBwcm9kdWN0RXF1aXYoZXhwLCBkaXJlY3RFcXVpdmFsZW50cyk7XG4gICAgICAgICAgICBjYXNlIEV4cG9uZW50XzEuRXhwb25lbnRUeXBlOiByZXR1cm4gZXhwb25lbnRFcXVpdihleHAsIGRpcmVjdEVxdWl2YWxlbnRzKTtcbiAgICAgICAgICAgIGNhc2UgRnJhY3Rpb25fMS5GcmFjdGlvblR5cGU6IHJldHVybiBmcmFjdGlvbkVxdWl2KGV4cCwgZGlyZWN0RXF1aXZhbGVudHMpO1xuICAgICAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIFwiICsgZXhwLmNsYXNzKTtcbiAgICAgICAgfVxufVxuZXhwb3J0cy5lcXVpdiA9IGVxdWl2O1xuLyoqXG4gKiBHZXRzIGFsbCBlcXVpdmFsZW50cyBvZiB0aGUgZ2l2ZW4gZXhwcmVzc2lvblxuICogYnkgc3dhcHBpbmcgb3V0IGl0J3MgY2hpbGRyZW4gaW5kaXZpZHVhbGx5LlxuICpcbiAqIChhICsgYSkgKyAoYiArIGIpXG4gKiAtPiAoMmEpICsgKGIgKyBiKSB3aXRoIGluZmVyZW5jZSBhICsgYSA9IDJhXG4gKiBAcGFyYW0gZXhwXG4gKiBAcmV0dXJucyBBcnJheSBvZiBpbmZlcmVuY2VzIHRvIGVxdWl2YWxlbnQgZXhwcmVzc2lvbnMuXG4gKi9cbmZ1bmN0aW9uIHN1bUVxdWl2KGV4cCwgZGlyZWN0RXF1aXZhbGVudHMpIHtcbiAgICBjb25zdCBlcXVpdmFsZW50U3VtcyA9IG5ldyBTZXQoKTtcbiAgICAvLyBBZGQgdG9wIGxldmVsIGVxdWl2YWxlbnRzXG4gICAgZGlyZWN0RXF1aXZhbGVudHMoZXhwKS5mb3JFYWNoKGluZiA9PiB7XG4gICAgICAgIGVxdWl2YWxlbnRTdW1zLmFkZChpbmYpO1xuICAgIH0pO1xuICAgIC8vIEZpbmQgZXF1aXZhbGVudHMgZm9yIGVhY2ggdGVybVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwLnRlcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRlcm0gPSBleHAudGVybXNbaV07XG4gICAgICAgIC8vIFN1YnN0aXR1dGUgdGVybSBmb3IgZWFjaCBlcXVpdmFsZW50XG4gICAgICAgIGVxdWl2KHRlcm0sIGRpcmVjdEVxdWl2YWxlbnRzKS5mb3JFYWNoKGEgPT4ge1xuICAgICAgICAgICAgZXF1aXZhbGVudFN1bXMuYWRkKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KHNldE9mKGV4cCksIHtcbiAgICAgICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgICAgIG4xOiBzd2FwKGV4cCwgaSwgYS5jbGFpbS5uMSlcbiAgICAgICAgICAgIH0sIGEuYXJndW1lbnQpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN3YXAocywgaSwgZSkge1xuICAgICAgICBjb25zdCB0ZXJtcyA9IFsuLi5zLnRlcm1zXTtcbiAgICAgICAgdGVybXNbaV0gPSBlO1xuICAgICAgICByZXR1cm4gKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bSkoLi4udGVybXMpO1xuICAgIH1cbiAgICByZXR1cm4gWy4uLmVxdWl2YWxlbnRTdW1zXTtcbn1cbmZ1bmN0aW9uIHByb2R1Y3RFcXVpdihleHAsIGRpcmVjdEVxdWl2YWxlbnRzKSB7XG4gICAgY29uc3QgZXF1aXZhbGVudFByb2R1Y3RzID0gbmV3IFNldCgpO1xuICAgIC8vIEFkZCB0b3AgbGV2ZWwgZXF1aXZhbGVudHNcbiAgICBkaXJlY3RFcXVpdmFsZW50cyhleHApLmZvckVhY2goaW5mID0+IHtcbiAgICAgICAgZXF1aXZhbGVudFByb2R1Y3RzLmFkZChpbmYpO1xuICAgIH0pO1xuICAgIC8vIEZpbmQgZXF1aXZhbGVudHMgZm9yIGVhY2ggdGVybVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwLmZhY3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZmFjdG9yID0gZXhwLmZhY3RvcnNbaV07XG4gICAgICAgIC8vIFN1YnN0aXR1dGUgdGVybSBmb3IgZWFjaCBlcXVpdmFsZW50XG4gICAgICAgIGVxdWl2KGZhY3RvciwgZGlyZWN0RXF1aXZhbGVudHMpLmZvckVhY2goYWx0ID0+IHtcbiAgICAgICAgICAgIGVxdWl2YWxlbnRQcm9kdWN0cy5hZGQobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoc2V0T2YoZXhwKSwge1xuICAgICAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICAgICAgbjE6IHN3YXAoZXhwLCBpLCBhbHQuY2xhaW0ubjEpLFxuICAgICAgICAgICAgfSwgYWx0LmFyZ3VtZW50KSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzd2FwKHMsIGksIGUpIHtcbiAgICAgICAgY29uc3QgdGVybXMgPSBbLi4ucy5mYWN0b3JzXTtcbiAgICAgICAgdGVybXNbaV0gPSBlO1xuICAgICAgICByZXR1cm4gKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3QpKC4uLnRlcm1zKTtcbiAgICB9XG4gICAgcmV0dXJuIFsuLi5lcXVpdmFsZW50UHJvZHVjdHNdO1xufVxuZnVuY3Rpb24gZXhwb25lbnRFcXVpdihleHAsIGRpcmVjdEVxdWl2YWxlbnRzKSB7XG4gICAgY29uc3QgZXF1aXZhbGVudHMgPSBuZXcgU2V0KCk7XG4gICAgLy8gQWRkIHRvcCBsZXZlbCBlcXVpdmFsZW50c1xuICAgIGRpcmVjdEVxdWl2YWxlbnRzKGV4cCkuZm9yRWFjaChpbmYgPT4ge1xuICAgICAgICBlcXVpdmFsZW50cy5hZGQoaW5mKTtcbiAgICB9KTtcbiAgICBlcXVpdihleHAuYmFzZSwgZGlyZWN0RXF1aXZhbGVudHMpLmZvckVhY2goYWx0ID0+IHtcbiAgICAgICAgZXF1aXZhbGVudHMuYWRkKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KHNldE9mKGV4cCksIHtcbiAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgIG4xOiBFeHBvbmVudF8xLkV4cG9uZW50Lm9mKGFsdC5jbGFpbS5uMSwgZXhwLnBvd2VyKVxuICAgICAgICB9LCBhbHQuYXJndW1lbnQpKTtcbiAgICB9KTtcbiAgICBlcXVpdihleHAucG93ZXIsIGRpcmVjdEVxdWl2YWxlbnRzKS5mb3JFYWNoKGFsdCA9PiB7XG4gICAgICAgIGVxdWl2YWxlbnRzLmFkZChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudChzZXRPZihleHApLCB7XG4gICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogRXhwb25lbnRfMS5FeHBvbmVudC5vZihleHAuYmFzZSwgYWx0LmNsYWltLm4xKSxcbiAgICAgICAgfSwgYWx0LmFyZ3VtZW50KSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFsuLi5lcXVpdmFsZW50c107XG59XG5mdW5jdGlvbiBmcmFjdGlvbkVxdWl2KGV4cCwgZGlyZWN0RXF1aXZhbGVudHMpIHtcbiAgICBjb25zdCBlcXVpdmFsZW50cyA9IG5ldyBTZXQoKTtcbiAgICAvLyBBZGQgdG9wIGxldmVsIGVxdWl2YWxlbnRzXG4gICAgZGlyZWN0RXF1aXZhbGVudHMoZXhwKS5mb3JFYWNoKGluZiA9PiB7XG4gICAgICAgIGVxdWl2YWxlbnRzLmFkZChpbmYpO1xuICAgIH0pO1xuICAgIGVxdWl2KGV4cC5udW1lcmF0b3IsIGRpcmVjdEVxdWl2YWxlbnRzKS5mb3JFYWNoKGFsdCA9PiB7XG4gICAgICAgIGVxdWl2YWxlbnRzLmFkZChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudChzZXRPZihleHApLCB7XG4gICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihhbHQuY2xhaW0ubjEsIGV4cC5kZW5vbWluYXRvcilcbiAgICAgICAgfSwgYWx0LmFyZ3VtZW50KSk7XG4gICAgfSk7XG4gICAgZXF1aXYoZXhwLmRlbm9taW5hdG9yLCBkaXJlY3RFcXVpdmFsZW50cykuZm9yRWFjaChhbHQgPT4ge1xuICAgICAgICBlcXVpdmFsZW50cy5hZGQobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoc2V0T2YoZXhwKSwge1xuICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgbjE6IEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoZXhwLm51bWVyYXRvciwgYWx0LmNsYWltLm4xKSxcbiAgICAgICAgfSwgYWx0LmFyZ3VtZW50KSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFsuLi5lcXVpdmFsZW50c107XG59XG5mdW5jdGlvbiBzZXRPZiguLi5hcnIpIHtcbiAgICBjb25zdCBvdXQgPSBuZXcgU2V0KCk7XG4gICAgYXJyLmZvckVhY2goZSA9PiBvdXQuYWRkKGUpKTtcbiAgICByZXR1cm4gb3V0O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNvbWJpbmVDb21tb25UZXJtc0FkZGl0aW9uID0gdm9pZCAwO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvU3VtXCIpO1xuLyoqXG4gKiBhICsgYSA9IDJhXG4gKlxuICogQnV0IG5vdFxuICogMSArIDEgPSAyKDEpXG4gKi9cbmNsYXNzIENvbWJpbmVDb21tb25UZXJtc0FkZGl0aW9uIGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICBpZiAoIShleHAgaW5zdGFuY2VvZiBTdW1fMS5TdW0pKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoZXhwLnJlZHVjaWJsZU9ySW50KVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBzdW0gPSBleHA7XG4gICAgICAgIGlmIChuZXcgU2V0KHN1bS50ZXJtcykuc2l6ZSA8IHN1bS50ZXJtcy5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGxldCBlcXVpdmFsZW50RXhwcmVzc2lvbnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGNvbnN0IHN1bSA9IGV4cDtcbiAgICAgICAgY29uc3QgdW5pcXVlVGVybXMgPSBuZXcgU2V0KHN1bS50ZXJtcyk7XG4gICAgICAgIC8vIFN1cHBvc2UgdGhlIHN1bSBpcyBhICsgYSArIGJcbiAgICAgICAgLy8gRm9yIGV2ZXJ5IHVuaXF1ZSB0ZXJtIGluIHthLCBifVxuICAgICAgICBmb3IgKGNvbnN0IHVuaXF1ZVRlcm0gb2YgdW5pcXVlVGVybXMpIHtcbiAgICAgICAgICAgIC8vIEF2b2lkIHVuaGVhbHRoeSBleHByZXNzaW9uc1xuICAgICAgICAgICAgaWYgKHVuaXF1ZVRlcm0ucmVkdWNpYmxlT3JJbnQpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBsZXQgcmVtYWluaW5nVGVybXMgPSBbXTtcbiAgICAgICAgICAgIGxldCBvY2N1cmFuY2VzID0gMDtcbiAgICAgICAgICAgIC8vIENvdW50IHRoZSBudW1iZXIgb2YgdGltZXMgaXQgb2NjdXJzIGluIHRoZSBzdW0sXG4gICAgICAgICAgICAvLyBjb2xsZWN0aW5nIGFsbCBvdGhlciB0ZXJtcy5cbiAgICAgICAgICAgIGZvciAoY29uc3QgdCBvZiBzdW0udGVybXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodCA9PSB1bmlxdWVUZXJtKSB7XG4gICAgICAgICAgICAgICAgICAgIG9jY3VyYW5jZXMrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZ1Rlcm1zLnB1c2godCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgaXQgb2NjdXJlcyBtdWx0aXBsZSB0aW1lcywgY3JlYXRlIGEgbmV3IHN1bVxuICAgICAgICAgICAgLy8gZXhwcmVzc2lvbiB3aXRoIHRoYXQgdGVybSBjb21iaW5lZFxuICAgICAgICAgICAgaWYgKG9jY3VyYW5jZXMgPiAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9ICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5vcmRlcmVkUHJvZHVjdCkoLi4uWygwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKG9jY3VyYW5jZXMpLCB1bmlxdWVUZXJtXSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlbWFpbmluZ1Rlcm1zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVxdWl2YWxlbnRFeHByZXNzaW9ucy5hZGQocHJvZHVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW1haW5pbmdUZXJtcy5wdXNoKHByb2R1Y3QpO1xuICAgICAgICAgICAgICAgICAgICBlcXVpdmFsZW50RXhwcmVzc2lvbnMuYWRkKFN1bV8xLlN1bS5vZihyZW1haW5pbmdUZXJtcykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUdXJuIHRoZSBlcXVpdmFsZW50IGV4cHJlc3Npb25zIGludG8gaW5mZXJlbmNlc1xuICAgICAgICBsZXQgaW5mZXJlbmNlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgZXF1aXZhbGVudEV4cHJlc3Npb25zLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBpbmZlcmVuY2VzLmFkZChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudChzZXRPZihzdW0pLCB7XG4gICAgICAgICAgICAgICAgbjogc3VtLFxuICAgICAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgICAgICBuMTogZSxcbiAgICAgICAgICAgIH0sIFwiRGlzdHJpYnV0aXZlIHByb3BlcnR5IG9mIG11bHRpcGxpY2F0aW9uXCIpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBpbmZlcmVuY2VzO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29tYmluZUNvbW1vblRlcm1zQWRkaXRpb24gPSBDb21iaW5lQ29tbW9uVGVybXNBZGRpdGlvbjtcbmZ1bmN0aW9uIHNldE9mKC4uLmFycikge1xuICAgIGNvbnN0IG91dCA9IG5ldyBTZXQoKTtcbiAgICBhcnIuZm9yRWFjaChlID0+IG91dC5hZGQoZSkpO1xuICAgIHJldHVybiBvdXQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29tYmluZUNvbW1vblRlcm1zTXVsdGlwbGljYXRpb24gPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgRXhwb25lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9FeHBvbmVudFwiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9JbnRlZ2VyXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL1Byb2R1Y3RcIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi8uLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbmNsYXNzIENvbWJpbmVDb21tb25UZXJtc011bHRpcGxpY2F0aW9uIGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICBpZiAoIShleHAgaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChleHAuaXNSZWR1Y2libGUpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBleHA7XG4gICAgICAgIGlmIChuZXcgU2V0KHByb2R1Y3QuZmFjdG9ycykuc2l6ZSA8IHByb2R1Y3QuZmFjdG9ycy5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGxldCBlcXVpdmFsZW50RXhwcmVzc2lvbnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBleHA7XG4gICAgICAgIGNvbnN0IHVuaXF1ZUZhY3RvcnMgPSBuZXcgU2V0KHByb2R1Y3QuZmFjdG9ycyk7XG4gICAgICAgIC8vIFN1cHBvc2UgdGhlIHByb2R1Y3QgaXMgYSAqIGEgKiBiXG4gICAgICAgIC8vIEZvciBldmVyeSB1bmlxdWUgZmFjdG9yIHthLCBifVxuICAgICAgICBmb3IgKGNvbnN0IHVuaXF1ZUZhY3RvciBvZiB1bmlxdWVGYWN0b3JzKSB7XG4gICAgICAgICAgICBsZXQgb2NjdXJhbmNlcyA9IDA7XG4gICAgICAgICAgICBsZXQgcmVtYWluaW5nRmFjdG9ycyA9IFtdO1xuICAgICAgICAgICAgLy8gQ291bnQgdGhlIG51bWJlciBvZiB0aW1lcyBpdCBvY2N1cnMgaW4gdGhlIHByb2R1Y3QsXG4gICAgICAgICAgICAvLyBjb2xsZWN0aW5nIGFsbCBvdGhlciBmYWN0b3JzLlxuICAgICAgICAgICAgZm9yIChjb25zdCB0IG9mIHByb2R1Y3QuZmFjdG9ycykge1xuICAgICAgICAgICAgICAgIGlmICh0ID09IHVuaXF1ZUZhY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICBvY2N1cmFuY2VzKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW1haW5pbmdGYWN0b3JzLnB1c2godCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgaXQgb2NjdXJlcyBtdWx0aXBsZSB0aW1lcywgY3JlYXRlIGEgbmV3IHN1bVxuICAgICAgICAgICAgLy8gZXhwcmVzc2lvbiB3aXRoIHRoYXQgdGVybSBjb21iaW5lZFxuICAgICAgICAgICAgaWYgKG9jY3VyYW5jZXMgPiAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhwb25lbnQgPSBFeHBvbmVudF8xLkV4cG9uZW50Lm9mKHVuaXF1ZUZhY3RvciwgSW50ZWdlcl8xLkludGVnZXIub2Yob2NjdXJhbmNlcykpO1xuICAgICAgICAgICAgICAgIGlmIChyZW1haW5pbmdGYWN0b3JzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVxdWl2YWxlbnRFeHByZXNzaW9ucy5hZGQoZXhwb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nRmFjdG9ycy5wdXNoKHByb2R1Y3QpO1xuICAgICAgICAgICAgICAgICAgICBlcXVpdmFsZW50RXhwcmVzc2lvbnMuYWRkKFByb2R1Y3RfMS5Qcm9kdWN0Lm9mKHJlbWFpbmluZ0ZhY3RvcnMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHVybiB0aGUgZXF1aXZhbGVudCBleHByZXNzaW9ucyBpbnRvIGluZmVyZW5jZXNcbiAgICAgICAgbGV0IGluZmVyZW5jZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGVxdWl2YWxlbnRFeHByZXNzaW9ucy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgaW5mZXJlbmNlcy5hZGQobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoc2V0T2YocHJvZHVjdCksIHtcbiAgICAgICAgICAgICAgICBuOiBwcm9kdWN0LFxuICAgICAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgICAgICBuMTogZSxcbiAgICAgICAgICAgIH0sIFwiRXhwb25lbnRpYWwgcnVsZSBmb3IgbXVsdGlwbHlpbmcgZXF1YWwgYmFzZXNcIikpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGluZmVyZW5jZXM7XG4gICAgfVxufVxuZXhwb3J0cy5Db21iaW5lQ29tbW9uVGVybXNNdWx0aXBsaWNhdGlvbiA9IENvbWJpbmVDb21tb25UZXJtc011bHRpcGxpY2F0aW9uO1xuZnVuY3Rpb24gc2V0T2YoLi4uYXJyKSB7XG4gICAgY29uc3Qgb3V0ID0gbmV3IFNldCgpO1xuICAgIGFyci5mb3JFYWNoKGUgPT4gb3V0LmFkZChlKSk7XG4gICAgcmV0dXJuIG91dDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FdmFsdWF0ZVN1bXMgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgSW50ZWdlcl8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL0ludGVnZXJcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9TdW1cIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi8uLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbi8qKlxuICogQ29tYmluZSBhbnkgaW50ZWdlciB0ZXJtcyBpbiBTdW1zLlxuICogYSArIDIgKyAyICsgMj0gYSArIDRcbiAqIDIgLSAyID0gMFxuICpcbiAqIENvbWJpbmVzIGFsbCBvZiB0aGVtIGF0IG9uY2Ugbm8gbWF0dGVyIGhvdyBtYW55IHRlcm1zIHRoZXJlIGFyZS5cbiAqXG4gKi9cbmNsYXNzIEV2YWx1YXRlU3VtcyBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGV4cCBpbnN0YW5jZW9mIFN1bV8xLlN1bTtcbiAgICB9XG4gICAgYXBwbHlJbXBsKGV4cCkge1xuICAgICAgICBjb25zdCBzdW0gPSBleHA7XG4gICAgICAgIGNvbnN0IG91dCA9IG5ldyBTZXQoKTtcbiAgICAgICAgY29uc3QgaW50ZWdlclRlcm1zID0gWy4uLnN1bS50ZXJtc10uZmlsdGVyKHQgPT4gdCBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKTtcbiAgICAgICAgaWYgKGludGVnZXJUZXJtcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdJbnQgPSBpbnRlZ2VyVGVybXMubWFwKGUgPT4gZSkucmVkdWNlKChhLCBiKSA9PiBJbnRlZ2VyXzEuSW50ZWdlci5vZihhLnZhbHVlICsgYi52YWx1ZSkpO1xuICAgICAgICBjb25zdCBvdGhlclRlcm1zID0gWy4uLnN1bS50ZXJtc10uZmlsdGVyKHQgPT4gISh0IGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpKTtcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgaWYgKG90aGVyVGVybXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KHNldE9mKHN1bSksIHtcbiAgICAgICAgICAgICAgICBuOiBzdW0sXG4gICAgICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgICAgIG4xOiBuZXdJbnRcbiAgICAgICAgICAgIH0sIFwiRXZhbHVhdGVkIEFkZGl0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoc2V0T2Yoc3VtKSwge1xuICAgICAgICAgICAgICAgIG46IHN1bSxcbiAgICAgICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICAgICAgbjE6IFN1bV8xLlN1bS5vZihvdGhlclRlcm1zLmNvbmNhdChuZXdJbnQpKSxcbiAgICAgICAgICAgIH0sIFwiRXZhbHVhdGVkIEFkZGl0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIG91dC5hZGQocmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG59XG5leHBvcnRzLkV2YWx1YXRlU3VtcyA9IEV2YWx1YXRlU3VtcztcbmZ1bmN0aW9uIHNldE9mKC4uLmFycikge1xuICAgIGNvbnN0IG91dCA9IG5ldyBTZXQoKTtcbiAgICBhcnIuZm9yRWFjaChlID0+IG91dC5hZGQoZSkpO1xuICAgIHJldHVybiBvdXQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuT3JkZXJTdW1zID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL1N1bVwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuLyoqXG4gKiBUdXJucyBzdW1zIHRoYXQgYXJlIHVuaGVhbHRoeSBiZWNhdXNlIHRoZWlyIHRlcm0gb3JkZXJcbiAqIGlzIHdyb25nIGludG8gY29ycmVjdGx5IG9yZGVyZWQgc3Vtcy5cbiAqL1xuY2xhc3MgT3JkZXJTdW1zIGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gIWV4cC5pc0hlYWx0aHkgJiYgZXhwLmNsYXNzID09PSBTdW1fMS5TdW1UeXBlO1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2V0KFtuZXcgQXJndW1lbnRfMS5Bcmd1bWVudChzZXRPZihleHApLCB7XG4gICAgICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgICAgICBuMTogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm9yZGVyZWRTdW0pKGV4cCksXG4gICAgICAgICAgICB9LCBcIlJlb3JkZXJlZFwiKV0pO1xuICAgIH1cbn1cbmV4cG9ydHMuT3JkZXJTdW1zID0gT3JkZXJTdW1zO1xuZnVuY3Rpb24gc2V0T2YoLi4uYXJyKSB7XG4gICAgY29uc3Qgb3V0ID0gbmV3IFNldCgpO1xuICAgIGFyci5mb3JFYWNoKGUgPT4gb3V0LmFkZChlKSk7XG4gICAgcmV0dXJuIG91dDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5SZWR1Y2VSZWR1Y2libGVzID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuY2xhc3MgUmVkdWNlUmVkdWNpYmxlcyBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGV4cC5pc1JlZHVjaWJsZTtcbiAgICB9XG4gICAgYXBwbHlJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gbmV3IFNldChbbmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoc2V0T2YoZXhwKSwge1xuICAgICAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICAgICAgbjE6IGV4cC5yZWR1Y2VkXG4gICAgICAgICAgICB9LCBcIlJlZHVjZWRcIildKTtcbiAgICB9XG59XG5leHBvcnRzLlJlZHVjZVJlZHVjaWJsZXMgPSBSZWR1Y2VSZWR1Y2libGVzO1xuZnVuY3Rpb24gc2V0T2YoLi4uYXJyKSB7XG4gICAgY29uc3Qgb3V0ID0gbmV3IFNldCgpO1xuICAgIGFyci5mb3JFYWNoKGUgPT4gb3V0LmFkZChlKSk7XG4gICAgcmV0dXJuIG91dDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TdW1Db2VmZmljaWVudHNPZkFkZGVkVGVybXMgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgSW50ZWdlcl8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL0ludGVnZXJcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvUHJvZHVjdFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL1N1bVwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuLyoqXG4gKiBUYWtlcyBzdW1zIG9mIHNldmVyYWwgYWRkZWQgcHJvZHVjdHMgYW5kIGNvbWJpbmVzIG9uZXMgdGhhdCBvbmx5XG4gKiBoYXZlIGRpZmZlcmVudCBjb2VmZmljaWVudHMuXG4gKlxuICogYSArIDJhID0gM2FcbiAqIGEgLSAyYSA9IC0xYVxuICovXG5jbGFzcyBTdW1Db2VmZmljaWVudHNPZkFkZGVkVGVybXMgZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAgaW5zdGFuY2VvZiBTdW1fMS5TdW07XG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgY29uc3QgdGVybXMgPSBleHAudGVybXM7XG4gICAgICAgIC8vIFNwbGl0IHRoZSB0ZXJtcyBpbnRvIHByb2R1Y3QgYW5kIG5vdCBwcm9kdWN0c1xuICAgICAgICBjb25zdCBwcm9kdWN0VGVybXMgPSBbXTtcbiAgICAgICAgY29uc3Qgbm9uUHJvZHVjdFRlcm1zID0gW107XG4gICAgICAgIGZvciAoY29uc3QgdGVybSBvZiB0ZXJtcykge1xuICAgICAgICAgICAgaWYgKHRlcm0gaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCAmJiB0ZXJtLmZhY3RvcnNbMF0gaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcikge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUZXJtcy5wdXNoKHRlcm0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9uUHJvZHVjdFRlcm1zLnB1c2godGVybSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gU29ydCB0aGUgcHJvZHVjdCB0ZXJtcyBpbnRvIGdyb3VwcyBvZiBjb21tb24gZmFjdG9yc1xuICAgICAgICBjb25zdCBncm91cHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIGZvciAoY29uc3QgdGVybSBvZiBwcm9kdWN0VGVybXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gdGVybS5mYWN0b3JzWzBdO1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IFsuLi50ZXJtLmZhY3RvcnNdO1xuICAgICAgICAgICAgdGVtcC5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICBjb25zdCBncm91cCA9ICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5wcm9kdWN0T3JOb3QpKC4uLnRlbXApO1xuICAgICAgICAgICAgaWYgKCFncm91cHMuaGFzKGdyb3VwKSlcbiAgICAgICAgICAgICAgICBncm91cHMuc2V0KGdyb3VwLCB7IGNvZWZmaWNpZW50OiBmaXJzdC52YWx1ZSwgbW9yZVRoYW5PbmU6IGZhbHNlIH0pO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBzLmdldChncm91cCkuY29lZmZpY2llbnQgKz0gZmlyc3QudmFsdWU7XG4gICAgICAgICAgICAgICAgZ3JvdXBzLmdldChncm91cCkubW9yZVRoYW5PbmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEZvciBldmVyeSBncm91cCB3aXRoIG1vcmUgdGhhbiBvbmUgcHJvZHVjdCwgcHJvZHVjZSBhIG5ldyBhcmd1bWVudFxuICAgICAgICBjb25zdCBvdXQgPSBuZXcgU2V0KCk7XG4gICAgICAgIGdyb3Vwcy5mb3JFYWNoKChvYmosIGdyb3VwKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9iai5tb3JlVGhhbk9uZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0VGVybXNOb3RDb21iaW5lZCA9IHByb2R1Y3RUZXJtcy5maWx0ZXIodCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IFsuLi50LmZhY3RvcnNdO1xuICAgICAgICAgICAgICAgIHRlbXAuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlcm1XaXRob3V0TGVhZGluZ0NvZWZmaWNpZW50ID0gKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3RPck5vdCkoLi4udGVtcCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdyb3VwICE9PSB0ZXJtV2l0aG91dExlYWRpbmdDb2VmZmljaWVudDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgb3V0LmFkZChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudChzZXRPZihleHApLCB7XG4gICAgICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgICAgICBuMTogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bU9yTm90KSgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdEFuZE5vdFRpbWVzT25lKSgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKShvYmouY29lZmZpY2llbnQpLCBncm91cCksIC4uLm5vblByb2R1Y3RUZXJtcywgLi4ucHJvZHVjdFRlcm1zTm90Q29tYmluZWQpXG4gICAgICAgICAgICB9LCBcIkNvbWJpbmluZyBsaWtlIHRlcm1zXCIpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG91dC5mb3JFYWNoKGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJZaWVsZGVkIFwiICsgYS5jbGFpbS5uMS50b1N0cmluZygpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxufVxuZXhwb3J0cy5TdW1Db2VmZmljaWVudHNPZkFkZGVkVGVybXMgPSBTdW1Db2VmZmljaWVudHNPZkFkZGVkVGVybXM7XG5mdW5jdGlvbiBzZXRPZiguLi5hcnIpIHtcbiAgICBjb25zdCBvdXQgPSBuZXcgU2V0KCk7XG4gICAgYXJyLmZvckVhY2goZSA9PiBvdXQuYWRkKGUpKTtcbiAgICByZXR1cm4gb3V0O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRlcml2YXRpdmVUeXBlID0gZXhwb3J0cy5EZXJpdmF0aXZlID0gdm9pZCAwO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvblwiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuL0ludGVnZXJcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi9Qcm9kdWN0XCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi9TdW1cIik7XG4vKipcbiAqXG4gKi9cbmNsYXNzIERlcml2YXRpdmUgZXh0ZW5kcyBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbiB7XG4gICAgc3RhdGljIG9mKGV4cCwgcmVsYXRpdmVUbykge1xuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2VzLmhhcyhleHAuaGFzaCkpXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlcy5zZXQoZXhwLmhhc2ggKyByZWxhdGl2ZVRvLmhhc2gsIG5ldyBEZXJpdmF0aXZlKGV4cCwgcmVsYXRpdmVUbykpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXMuZ2V0KGV4cC5oYXNoICsgcmVsYXRpdmVUby5oYXNoKTtcbiAgICB9XG4gICAgc3RhdGljIGluc3RhbmNlcyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdHJ1Y3RvcihleHAsIHJlbGF0aXZlVG8pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5leHAgPSBleHA7XG4gICAgICAgIHRoaXMucmVsYXRpdmVUbyA9IHJlbGF0aXZlVG87XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5leHApO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMucmVsYXRpdmVUbyk7XG4gICAgICAgIHRoaXMuaXNSZWR1Y2libGUgPSBmYWxzZTsgLy9UT0RPOiBEZXRlcm1pbmUgaWYgYSBkZXJpdmF0aXZlIGlzIHJlZHVjaWJsZVxuICAgICAgICB0aGlzLmlzQ29uc3RhbnQgPSBmYWxzZTsgLy8gVE9ETzogRGV0ZXJtaW5lIGlmIGEgZGVyaXZhdGl2ZSBpcyBjb25zdGFudFxuICAgICAgICB0aGlzLmNoaWxkQ291bnQgPSAyICsgZXhwLmNoaWxkQ291bnQgKyByZWxhdGl2ZVRvLmNoaWxkQ291bnQ7XG4gICAgICAgIGxldCBpc0hlYWx0aHkgPSB0cnVlO1xuICAgICAgICBpZiAoZXhwLmlzQ29uc3RhbnQpXG4gICAgICAgICAgICBpc0hlYWx0aHkgPSBmYWxzZTtcbiAgICAgICAgaWYgKGV4cCBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0KSB7XG4gICAgICAgICAgICBuZXcgU2V0KGV4cC5mYWN0b3JzKS5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIgfHwgZSBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0ICYmIGUuaXNOZWdhdGlvbiAmJiBlLm5lZ2F0aW9uKVxuICAgICAgICAgICAgICAgICAgICBpc0hlYWx0aHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvL1RPRE86IFRoZXJlIGFyZSBhIGxvdCBtb3JlIHBvc3NpYmxpdGllcyB0aGFuIHRoaXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNIZWFsdGh5ID0gaXNIZWFsdGh5O1xuICAgIH1cbiAgICBleHA7XG4gICAgcmVsYXRpdmVUbztcbiAgICBnZXQgcmVkdWNlZCgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4gTm90IHN1cmUgaWYgZGVyaXZhdGl2ZXMgc2hvdWxkIGJlIHJlZHVjaWJsZS5cIik7XG4gICAgfVxuICAgIGlzUmVkdWNpYmxlO1xuICAgIGNsYXNzID0gZXhwb3J0cy5EZXJpdmF0aXZlVHlwZTtcbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwiZC9kXCIgKyB0aGlzLnJlbGF0aXZlVG8udG9TdHJpbmcoKSArIFwiKFwiICsgdGhpcy5leHAudG9TdHJpbmcoKSArIFwiKVwiO1xuICAgIH1cbiAgICBnZXQgaGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xhc3MgKyB0aGlzLmV4cC5oYXNoICsgdGhpcy5yZWxhdGl2ZVRvLmhhc2g7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIDEuIGV4cCBpc24ndCBhIGNvbnN0YW50XG4gICAgICogMi4gSWYgZXhwIGlzIHByb2R1Y3QsIGl0IGNvbnRhaW5zIG5vIGNvbnN0YW50cy5cbiAgICAgKi9cbiAgICBpc0hlYWx0aHk7XG4gICAgdG9NYXRoWE1MKCkge1xuICAgICAgICBmdW5jdGlvbiB3cmFwSWZOZWVkZWQoZXhwKSB7XG4gICAgICAgICAgICBpZiAoZXhwLmNsYXNzID09IFN1bV8xLlN1bVR5cGUgfHwgZXhwLmNsYXNzID09IFByb2R1Y3RfMS5Qcm9kdWN0VHlwZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8bW8+KDwvbW8+XCIgKyBleHAudG9NYXRoWE1MKCkgKyBcIjxtbz4pPC9tbz5cIjtcbiAgICAgICAgICAgIHJldHVybiBleHAudG9NYXRoWE1MKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiPG1mcmFjPjxtbj5kPC9tbj48bXJvdz48bW4+ZDwvbW4+XCIgKyB3cmFwSWZOZWVkZWQodGhpcy5yZWxhdGl2ZVRvKSArIFwiPC9tcm93PjwvbWZyYWM+XCIgKyB3cmFwSWZOZWVkZWQodGhpcy5leHApO1xuICAgIH1cbiAgICBpc0NvbnN0YW50O1xuICAgIGNoaWxkQ291bnQ7XG59XG5leHBvcnRzLkRlcml2YXRpdmUgPSBEZXJpdmF0aXZlO1xuZXhwb3J0cy5EZXJpdmF0aXZlVHlwZSA9IFwiRGVyaXZhdGl2ZVwiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkV4cG9uZW50VHlwZSA9IGV4cG9ydHMuRXhwb25lbnQgPSB2b2lkIDA7XG5jb25zdCBNYXRoTUxIZWxwZXJzXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9NYXRoTUxIZWxwZXJzXCIpO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvblwiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuL0ludGVnZXJcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi9Qcm9kdWN0XCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi9TdW1cIik7XG5jbGFzcyBFeHBvbmVudCBleHRlbmRzIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uIHtcbiAgICBzdGF0aWMgb2YoYmFzZSwgcG93ZXIpIHtcbiAgICAgICAgaWYgKCFFeHBvbmVudC5pbnN0YW5jZXMuaGFzKGJhc2UpKSB7XG4gICAgICAgICAgICBFeHBvbmVudC5pbnN0YW5jZXMuc2V0KGJhc2UsIG5ldyBNYXAoKSk7XG4gICAgICAgICAgICBpZiAoIUV4cG9uZW50Lmluc3RhbmNlcy5nZXQoYmFzZSkuaGFzKHBvd2VyKSkge1xuICAgICAgICAgICAgICAgIEV4cG9uZW50Lmluc3RhbmNlcy5nZXQoYmFzZSkuc2V0KHBvd2VyLCBuZXcgRXhwb25lbnQoYmFzZSwgcG93ZXIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRXhwb25lbnQuaW5zdGFuY2VzLmdldChiYXNlKS5nZXQocG93ZXIpO1xuICAgIH1cbiAgICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IE1hcCgpO1xuICAgIGNsYXNzID0gZXhwb3J0cy5FeHBvbmVudFR5cGU7XG4gICAgdG9NYXRoWE1MKCkge1xuICAgICAgICBmdW5jdGlvbiB3cmFwSWZOZWVkZWQoZXhwKSB7XG4gICAgICAgICAgICBpZiAoZXhwLmNsYXNzID09IFN1bV8xLlN1bVR5cGUgfHwgZXhwLmNsYXNzID09IFByb2R1Y3RfMS5Qcm9kdWN0VHlwZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gKDAsIE1hdGhNTEhlbHBlcnNfMS5pblJvdykoKDAsIE1hdGhNTEhlbHBlcnNfMS5pblBhcmVuKShleHAudG9NYXRoWE1MKCkpKTtcbiAgICAgICAgICAgIHJldHVybiBleHAudG9NYXRoWE1MKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiPG1zdXA+XCIgKyB3cmFwSWZOZWVkZWQodGhpcy5iYXNlKSArIHRoaXMucG93ZXIudG9NYXRoWE1MKCkgKyBcIjwvbXN1cD5cIjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBcIihcIiArIHRoaXMuYmFzZSArIFwiKV4oXCIgKyB0aGlzLnBvd2VyICsgXCIpXCI7XG4gICAgfVxuICAgIGdldCBoYXNoKCkge1xuICAgICAgICByZXR1cm4gXCJFeHBvbmVudFwiICsgdGhpcy5iYXNlLmhhc2ggKyB0aGlzLnBvd2VyLmhhc2g7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKGJhc2UsIHBvd2VyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYmFzZSA9IGJhc2U7XG4gICAgICAgIHRoaXMucG93ZXIgPSBwb3dlcjtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLmJhc2UpO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMucG93ZXIpO1xuICAgICAgICAvLyBUaGUgaW50ZWdlcnMgYXJlIGNsb3NlZCBvdmVyIGV4cG9uZW50aWF0aW9uXG4gICAgICAgIHRoaXMuaXNSZWR1Y2libGUgPSAoYmFzZS5pc1JlZHVjaWJsZSB8fCBiYXNlLmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZSkgJiYgKHBvd2VyLmlzUmVkdWNpYmxlIHx8IHBvd2VyLmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZSkgJiYgTWF0aC5wb3coYmFzZS5yZWR1Y2VkLnZhbHVlLCBwb3dlci5yZWR1Y2VkLnZhbHVlKSAlIDEgPT0gMDtcbiAgICAgICAgdGhpcy5pc0hlYWx0aHkgPSAhdGhpcy5pc1JlZHVjaWJsZTtcbiAgICAgICAgdGhpcy5pc0NvbnN0YW50ID0gYmFzZS5pc0NvbnN0YW50ICYmIHBvd2VyLmlzQ29uc3RhbnQ7XG4gICAgICAgIHRoaXMuY2hpbGRDb3VudCA9IDIgKyBiYXNlLmNoaWxkQ291bnQgKyBwb3dlci5jaGlsZENvdW50O1xuICAgIH1cbiAgICBiYXNlO1xuICAgIHBvd2VyO1xuICAgIGlzUmVkdWNpYmxlO1xuICAgIGlzSGVhbHRoeTtcbiAgICBnZXQgcmVkdWNlZCgpIHtcbiAgICAgICAgcmV0dXJuIEludGVnZXJfMS5JbnRlZ2VyLm9mKE1hdGgucG93KHRoaXMuYmFzZS5yZWR1Y2VkLnZhbHVlLCB0aGlzLnBvd2VyLnJlZHVjZWQudmFsdWUpKTtcbiAgICB9XG4gICAgaXNDb25zdGFudDtcbiAgICBjaGlsZENvdW50O1xufVxuZXhwb3J0cy5FeHBvbmVudCA9IEV4cG9uZW50O1xuZXhwb3J0cy5FeHBvbmVudFR5cGUgPSBcIkV4cG9uZW50XCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXhwcmVzc2lvbiA9IHZvaWQgMDtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuL0ludGVnZXJcIik7XG5jb25zdCBNYXRoRWxlbWVudF8xID0gcmVxdWlyZShcIi4vTWF0aEVsZW1lbnRcIik7XG4vKipcbiAqIEJhc2Ugb2YgYWxsIG1hdGhlbWF0aWNhbCBleHByZXNzaW9ucy5cbiAqIEFsbCBjaGlsZHJlbiBzaG91bGQgaW1wbGVtZW50IGZseS13aGVlbCBwYXR0ZXJuLlxuICogQWxsIGNoaWxkcmVuIHNob3VsZCBiZSBpbW11dGFibGUuXG4gKi9cbmNsYXNzIEV4cHJlc3Npb24gZXh0ZW5kcyBNYXRoRWxlbWVudF8xLk1hdGhFbGVtZW50IHtcbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBleHByZXNzaW9uIGlzIHJlZHVjaWJsZSBvciBpcyBhbiBpbnRlZ2VyLlxuICAgICAqL1xuICAgIGdldCByZWR1Y2libGVPckludCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNSZWR1Y2libGUgfHwgdGhpcy5jbGFzcyA9PSBJbnRlZ2VyXzEuSW50ZWdlclR5cGU7XG4gICAgfVxufVxuZXhwb3J0cy5FeHByZXNzaW9uID0gRXhwcmVzc2lvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5GcmFjdGlvblR5cGUgPSBleHBvcnRzLkZyYWN0aW9uID0gdm9pZCAwO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvblwiKTtcbmNsYXNzIEZyYWN0aW9uIGV4dGVuZHMgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24ge1xuICAgIHN0YXRpYyBvZihudW1lcmF0b3IsIGRlbm9taW5hdG9yKSB7XG4gICAgICAgIGNvbnN0IGhhc2ggPSBudW1lcmF0b3IuaGFzaCArIGRlbm9taW5hdG9yLmhhc2g7XG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZS5oYXMoaGFzaCkpXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNldChoYXNoLCBuZXcgRnJhY3Rpb24obnVtZXJhdG9yLCBkZW5vbWluYXRvcikpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5nZXQoaGFzaCk7XG4gICAgfVxuICAgIHN0YXRpYyBpbnN0YW5jZSA9IG5ldyBNYXAoKTtcbiAgICBjb25zdHJ1Y3RvcihudW0sIGRlbm9tKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubnVtZXJhdG9yID0gbnVtO1xuICAgICAgICB0aGlzLmRlbm9taW5hdG9yID0gZGVub207XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5udW1lcmF0b3IpO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMuZGVub21pbmF0b3IpO1xuICAgICAgICAvKlxuICAgICAgICBBIGZyYWN0aW9uIGlzIHJlZHVjaWJsZSBpZiB0aGUgZGVub20gfCBudW0uXG4gICAgICAgICAgICA8PT4gbnVtID0gayAqIGRlbm9tIHdoZXJlIGsgaXMgYW4gaW50ZWdlci5cblxuICAgICAgICBUaGlzIG1ha2VzIHByb3ZpbmcgcmVkdWNpYmlsaXR5IGhhcmQuXG4gICAgICAgIFRPRE86IERlY2lkZSBpZiBpdCdzIHdvcnRoIGltcGxlbWVudGluZyByZWR1Y2liaWxpdHkgZm9yIEZyYWN0aW9uc1xuICAgICAgICAqL1xuICAgICAgICB0aGlzLmlzUmVkdWNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNIZWFsdGh5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0NvbnN0YW50ID0gbnVtLmlzQ29uc3RhbnQgJiYgZGVub20uaXNDb25zdGFudDtcbiAgICAgICAgdGhpcy5jaGlsZENvdW50ID0gMiArIG51bS5jaGlsZENvdW50ICsgZGVub20uY2hpbGRDb3VudDtcbiAgICB9XG4gICAgbnVtZXJhdG9yO1xuICAgIGRlbm9taW5hdG9yO1xuICAgIGdldCByZWR1Y2VkKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgaXNSZWR1Y2libGU7XG4gICAgY2xhc3MgPSBleHBvcnRzLkZyYWN0aW9uVHlwZTtcbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtZXJhdG9yLnRvU3RyaW5nKCkgKyBcIiAvIFwiICsgdGhpcy5kZW5vbWluYXRvci50b1N0cmluZygpO1xuICAgIH1cbiAgICBnZXQgaGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIGV4cG9ydHMuRnJhY3Rpb25UeXBlICsgdGhpcy5udW1lcmF0b3IuaGFzaCArIHRoaXMuZGVub21pbmF0b3IuaGFzaDtcbiAgICB9XG4gICAgaXNIZWFsdGh5O1xuICAgIGlzQ29uc3RhbnQ7XG4gICAgdG9NYXRoWE1MKCkge1xuICAgICAgICByZXR1cm4gXCI8bWZyYWM+PG1yb3c+XCIgKyB0aGlzLm51bWVyYXRvci50b01hdGhYTUwoKSArIFwiPC9tcm93Pjxtcm93PlwiICsgdGhpcy5kZW5vbWluYXRvci50b01hdGhYTUwoKSArIFwiPC9tcm93PjwvbWZyYWM+XCI7XG4gICAgfVxuICAgIGNoaWxkQ291bnQ7XG59XG5leHBvcnRzLkZyYWN0aW9uID0gRnJhY3Rpb247XG5leHBvcnRzLkZyYWN0aW9uVHlwZSA9IFwiRnJhY3Rpb25cIjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JbnRlZ2VyVHlwZSA9IGV4cG9ydHMuSW50ZWdlciA9IHZvaWQgMDtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4uL3V0aWwvYXNzZXJ0XCIpO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvblwiKTtcbi8qKlxuICogSW50ZWdlclxuICogUG9zaXRpdmUgb3IgbmVnYXRpdmVcbiAqL1xuY2xhc3MgSW50ZWdlciBleHRlbmRzIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uIHtcbiAgICBzdGF0aWMgb2YodmFsdWUpIHtcbiAgICAgICAgaWYgKCFJbnRlZ2VyLmluc3RhbmNlcy5oYXModmFsdWUpKSB7XG4gICAgICAgICAgICBJbnRlZ2VyLmluc3RhbmNlcy5zZXQodmFsdWUsIG5ldyBJbnRlZ2VyKHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEludGVnZXIuaW5zdGFuY2VzLmdldCh2YWx1ZSk7XG4gICAgfVxuICAgIHN0YXRpYyBpbnN0YW5jZXMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLnZhbHVlICUgMSA9PSAwLCBcIkNyZWF0aW5nIG5vbi1pbnRlZ2VyIGludGVnZXIgXCIgKyB0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMgQSBwb3NpdGl2ZSB2ZXJzaW9uIG9mIHRoaXMgaW50ZWdlci5cbiAgICAgKi9cbiAgICBidXRQb3NpdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIEludGVnZXIub2YoTWF0aC5hYnModGhpcy52YWx1ZSkpO1xuICAgIH1cbiAgICBjbGFzcyA9IGV4cG9ydHMuSW50ZWdlclR5cGU7XG4gICAgdG9NYXRoWE1MKCkge1xuICAgICAgICByZXR1cm4gXCI8bW4+XCIgKyB0aGlzLnZhbHVlICsgXCI8L21uPlwiO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIgKyB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICBnZXQgaGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIFwiTnVtYmVyRXhwXCIgKyB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICB2YWx1ZTtcbiAgICBpc1JlZHVjaWJsZSA9IGZhbHNlO1xuICAgIGdldCByZWR1Y2VkKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnRlZ2VycyBhcmVuJ3QgcmVkdWNpYmxlLlwiKTtcbiAgICB9XG4gICAgaXNIZWFsdGh5ID0gdHJ1ZTtcbiAgICBpc0NvbnN0YW50ID0gdHJ1ZTtcbiAgICBjaGlsZENvdW50ID0gMDtcbn1cbmV4cG9ydHMuSW50ZWdlciA9IEludGVnZXI7XG5leHBvcnRzLkludGVnZXJUeXBlID0gXCJJbnRlZ2VyXCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSW50ZWdyYWxUeXBlID0gZXhwb3J0cy5JbnRlZ3JhbCA9IHZvaWQgMDtcbmNvbnN0IE1hdGhNTEhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuLi91dGlsL01hdGhNTEhlbHBlcnNcIik7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4vUHJvZHVjdFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4vU3VtXCIpO1xuLyoqXG4gKiBBbiBpbmRlZmluYXRlIGludGVncmFsIChmb3Igbm93KS5cbiAqIFRPRE86IFNob3VsZCB3ZSBzZXBhcmF0ZSBkZWZpbmF0ZS9pbmRlZmluYXRlIGludGVncmFscz9cbiAqL1xuY2xhc3MgSW50ZWdyYWwgZXh0ZW5kcyBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbiB7XG4gICAgc3RhdGljIG9mKGludGVncmFuZCwgcmVsYXRpdmVUbykge1xuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2VzLmhhcyhpbnRlZ3JhbmQuaGFzaCArIHJlbGF0aXZlVG8uaGFzaCkpXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlcy5zZXQoaW50ZWdyYW5kLmhhc2ggKyByZWxhdGl2ZVRvLmhhc2gsIG5ldyBJbnRlZ3JhbChpbnRlZ3JhbmQsIHJlbGF0aXZlVG8pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzLmdldChpbnRlZ3JhbmQuaGFzaCArIHJlbGF0aXZlVG8uaGFzaCk7XG4gICAgfVxuICAgIHN0YXRpYyBpbnN0YW5jZXMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3RydWN0b3IoaW50ZWdyYW5kLCByZWxhdGl2ZVRvKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaW50ZWdyYW5kID0gaW50ZWdyYW5kO1xuICAgICAgICB0aGlzLnJlbGF0aXZlVG8gPSByZWxhdGl2ZVRvO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMuaW50ZWdyYW5kKTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLnJlbGF0aXZlVG8pO1xuICAgICAgICB0aGlzLmlzUmVkdWNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNIZWFsdGh5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0NvbnN0YW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hpbGRDb3VudCA9IDIgKyBpbnRlZ3JhbmQuY2hpbGRDb3VudCArIHJlbGF0aXZlVG8uY2hpbGRDb3VudDtcbiAgICB9XG4gICAgaW50ZWdyYW5kO1xuICAgIHJlbGF0aXZlVG87XG4gICAgZ2V0IHJlZHVjZWQoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuIE5vdCBzdXJlIGhvdyB0aGlzIHdvcmtzIHdpdGggSW50ZWdyYWxzLlwiKTtcbiAgICB9XG4gICAgaXNSZWR1Y2libGU7XG4gICAgY2xhc3MgPSBleHBvcnRzLkludGVncmFsVHlwZTtcbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwi4oirXCIgKyB0aGlzLmludGVncmFuZC50b1N0cmluZygpO1xuICAgIH1cbiAgICBnZXQgaGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIFwi4oirXCIgKyB0aGlzLmludGVncmFuZC50b1N0cmluZygpICsgdGhpcy5yZWxhdGl2ZVRvLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlzSGVhbHRoeTtcbiAgICBpc0NvbnN0YW50O1xuICAgIHRvTWF0aFhNTCgpIHtcbiAgICAgICAgZnVuY3Rpb24gd3JhcElmTmVlZGVkKGV4cCkge1xuICAgICAgICAgICAgaWYgKGV4cC5jbGFzcyA9PSBTdW1fMS5TdW1UeXBlIHx8IGV4cC5jbGFzcyA9PSBQcm9kdWN0XzEuUHJvZHVjdFR5cGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuICgwLCBNYXRoTUxIZWxwZXJzXzEuaW5QYXJlbikoZXhwLnRvTWF0aFhNTCgpKTtcbiAgICAgICAgICAgIHJldHVybiBleHAudG9NYXRoWE1MKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiPG1yb3c+PG1vPuKIqzwvbW8+XCIgKyB3cmFwSWZOZWVkZWQodGhpcy5pbnRlZ3JhbmQpICsgXCI8bW4+ZDwvbW4+XCIgKyB3cmFwSWZOZWVkZWQodGhpcy5yZWxhdGl2ZVRvKSArIFwiPC9tcm93PlwiO1xuICAgIH1cbiAgICBjaGlsZENvdW50O1xufVxuZXhwb3J0cy5JbnRlZ3JhbCA9IEludGVncmFsO1xuZXhwb3J0cy5JbnRlZ3JhbFR5cGUgPSBcIkludGVncmFsXCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWF0aEVsZW1lbnQgPSB2b2lkIDA7XG4vKipcbiAqIENhbiBiZSBleHByZXNzZWQgd2l0aCBNYXRoTUxcbiAqL1xuY2xhc3MgTWF0aEVsZW1lbnQge1xufVxuZXhwb3J0cy5NYXRoRWxlbWVudCA9IE1hdGhFbGVtZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmZhY3Rvck9yZGVyID0gZXhwb3J0cy5Qcm9kdWN0VHlwZSA9IGV4cG9ydHMuUHJvZHVjdCA9IHZvaWQgMDtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4uL3V0aWwvYXNzZXJ0XCIpO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvblwiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuL0ludGVnZXJcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuL1N1bVwiKTtcbi8qKlxuICogQSBtYXRoZW1hdGljYWwgcHJvZHVjdCB3aXRoIDIgb3IgbW9yZSBmYWN0b3JzLlxuICovXG5jbGFzcyBQcm9kdWN0IGV4dGVuZHMgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24ge1xuICAgIC8qKlxuICAgICAqIEZvciBlZmZpY2llbmN5LCBwcm9kdWN0cyBhcmUgY29tcGFyZWQgYnkgcmVmZXJlbmNlLlxuICAgICAqIEhlcmUgd2UgZW5zdXJlID09PSA8PT4gPT1cbiAgICAgKiBAcGFyYW0gZmFjdG9yc1xuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgc3RhdGljIG9mKGZhY3RvcnMpIHtcbiAgICAgICAgY29uc3QgaGFzaCA9IGZhY3RvcnMubWFwKGUgPT4gZS5oYXNoKS5qb2luKFwiXCIpO1xuICAgICAgICBpZiAoIVByb2R1Y3QuaW5zdGFuY2VzLmhhcyhoYXNoKSlcbiAgICAgICAgICAgIFByb2R1Y3QuaW5zdGFuY2VzLnNldChoYXNoLCBuZXcgUHJvZHVjdChmYWN0b3JzKSk7XG4gICAgICAgIHJldHVybiBQcm9kdWN0Lmluc3RhbmNlcy5nZXQoaGFzaCk7XG4gICAgfVxuICAgIHN0YXRpYyBpbnN0YW5jZXMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3RydWN0b3IoZmFjdG9ycykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KShmYWN0b3JzLmxlbmd0aCA+PSAyLCBcIkNyZWF0aW5nIHByb2R1Y3Qgd2l0aCBsZXNzIHRoYW4gMiBmYWN0b3JzLlwiKTtcbiAgICAgICAgdGhpcy5mYWN0b3JzID0gZmFjdG9ycztcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLmZhY3RvcnMpO1xuICAgICAgICBsZXQgcmVkdWNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mYWN0b3JzLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgICByZWR1Y2libGUgJiY9IGYuaXNSZWR1Y2libGUgfHwgZi5jbGFzcyA9PSBJbnRlZ2VyXzEuSW50ZWdlclR5cGU7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUaGUgaW50ZWdlcnMgYXJlIGNsb3NlZCBvdmVyIG11bHRpcGxpY2F0aW9uXG4gICAgICAgIHRoaXMuaXNSZWR1Y2libGUgPSByZWR1Y2libGU7XG4gICAgICAgIGxldCBoZWFsdGh5ID0gdHJ1ZTtcbiAgICAgICAgaGVhbHRoeSAmJj0gdGhpcy5udW1OZWdhdGl2ZXMoKSA8IDI7XG4gICAgICAgIHRoaXMuaXNIZWFsdGh5ID0gaGVhbHRoeTtcbiAgICAgICAgbGV0IGlzTmVnYXRpb24gPSBmYWN0b3JzLmxlbmd0aCA9PSAyO1xuICAgICAgICBpc05lZ2F0aW9uICYmPSBmYWN0b3JzLmZpbHRlcihlID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIgJiYgZS52YWx1ZSA9PSAtMTtcbiAgICAgICAgfSkubGVuZ3RoID09IDE7XG4gICAgICAgIHRoaXMuaXNOZWdhdGlvbiA9IGlzTmVnYXRpb247XG4gICAgICAgIHRoaXMuaXNDb25zdGFudCA9IHRoaXMuZmFjdG9ycy5tYXAoZiA9PiBmLmlzQ29uc3RhbnQpLnJlZHVjZSgoYSwgYikgPT4gYSAmJiBiKTtcbiAgICAgICAgdGhpcy5jaGlsZENvdW50ID0gZmFjdG9ycy5sZW5ndGggKyBmYWN0b3JzLm1hcChmID0+IGYuY2hpbGRDb3VudCkucmVkdWNlKChhLCBiKSA9PiBhICsgYikgLSAodGhpcy5pc05lZ2F0aW9uID8gMSA6IDApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoaXMgcHJvZHVjdCBpcyBqdXN0XG4gICAgICogLTEgKiBhbm90aGVyIGV4cHJlc3Npb24uXG4gICAgICovXG4gICAgaXNOZWdhdGlvbjtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHZhbHVlIHRoYXQgdGhpcyBwcm9kdWN0IGlzIG5lZ2F0aW5nXG4gICAgICogLTEgKiBleHAgcmV0dXJucyBleHAuXG4gICAgICogQHRocm93cyBpZiBwcm9kdWN0IGlzbid0IGEgbmVnYXRpb24uXG4gICAgICovXG4gICAgZ2V0IG5lZ2F0aW9uKCkge1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLmlzTmVnYXRpb24sIFwiVHJ5aW5nIHRvIGdldCBuZWdhdGlvbiBmcm9tIG5vbi1uZWdhdGluZyBzdW1cIik7XG4gICAgICAgIGlmICh0aGlzLmZhY3RvcnNbMF0uY2xhc3MgPT0gSW50ZWdlcl8xLkludGVnZXJUeXBlICYmIHRoaXMuZmFjdG9yc1swXS52YWx1ZSA9PSAtMSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZhY3RvcnNbMV07XG4gICAgICAgIHJldHVybiB0aGlzLmZhY3RvcnNbMF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBuZXcgRXhwcmVzc2lvbiB3aXRob3V0IHRoZSBnaXZlbiBmYWN0b3IuXG4gICAgICogSWYgdGhlIHByb2R1Y3QgY29udGFpbnMgdGhlIGZhY3RvciBtdWx0aXBsZSB0aW1lcyxcbiAgICAgKiBvbmx5IHJlbW92ZXMgb25lLiBJZiBpdCBkb2Vzbid0IGNvbnRhaW4gdGhlIGZhY3RvcixcbiAgICAgKiByZXR1cm5zIGl0c2VsZi5cbiAgICAgKiBAcGFyYW0gZXhwIEEgZmFjdG9yIGluIHRoaXMgcHJvZHVjdC5cbiAgICAgKi9cbiAgICB3aXRob3V0KGV4cCkge1xuICAgICAgICBjb25zdCBuZXdGYWN0b3JzID0gWy4uLnRoaXMuZmFjdG9yc107XG4gICAgICAgIGNvbnN0IGluZGV4ID0gbmV3RmFjdG9ycy5maW5kSW5kZXgoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IGV4cDtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpbmRleCA9PSAtMSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBuZXdGYWN0b3JzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGlmIChuZXdGYWN0b3JzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXdGYWN0b3JzWzBdOyAvLyBHYXVyYW50ZWVkIHRoZXJlJ3Mgb25lIHRlcm0gaGVyZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9kdWN0Lm9mKG5ld0ZhY3RvcnMpO1xuICAgIH1cbiAgICB0b01hdGhYTUwoKSB7XG4gICAgICAgIGxldCBvdXQgPSBcIlwiO1xuICAgICAgICBmdW5jdGlvbiB3cmFwSWZOZWVkZWQoZXhwKSB7XG4gICAgICAgICAgICBpZiAoZXhwLmNsYXNzID09IGV4cG9ydHMuUHJvZHVjdFR5cGUgfHwgZXhwLmNsYXNzID09IFN1bV8xLlN1bVR5cGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPG1vPig8L21vPlwiICsgZXhwLnRvTWF0aFhNTCgpICsgXCI8bW8+KTwvbW8+XCI7XG4gICAgICAgICAgICByZXR1cm4gZXhwLnRvTWF0aFhNTCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVpdGhlciB0aGlzIGlzIGEgbmVnYXRpb24sIG9yIGEgbGlzdCBvZiBwcm9kdWN0c1xuICAgICAgICAvLyBGaXJzdCB0aGUgbmVnYXRpb24gY2FzZS4uLlxuICAgICAgICBpZiAodGhpcy5pc05lZ2F0aW9uKSB7XG4gICAgICAgICAgICBvdXQgKz0gXCI8bW8+LTwvbW8+XCI7XG4gICAgICAgICAgICBvdXQgKz0gd3JhcElmTmVlZGVkKHRoaXMubmVnYXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBpdCdzIGEgbGlzdCBvZiBwcm9kdWN0cy4uLlxuICAgICAgICBjb25zdCBmaXJzdEZhY3RvciA9IHRoaXMuZmFjdG9yc1swXTtcbiAgICAgICAgb3V0ICs9IHdyYXBJZk5lZWRlZChmaXJzdEZhY3Rvcik7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5mYWN0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZmFjdG9yID0gdGhpcy5mYWN0b3JzW2ldO1xuICAgICAgICAgICAgbGV0IG5lZWRzRG90ID0gKGZhY3Rvci5jbGFzcyA9PSBJbnRlZ2VyXzEuSW50ZWdlclR5cGUgJiYgdGhpcy5mYWN0b3JzW2kgLSAxXS5jbGFzcyA9PSBJbnRlZ2VyXzEuSW50ZWdlclR5cGUpXG4gICAgICAgICAgICAgICAgfHwgKGZhY3RvciBpbnN0YW5jZW9mIFByb2R1Y3QgJiYgZmFjdG9yLmlzTmVnYXRpb24pIC8vIElmIHRoZXJlJ3MgYSBuZWdhdGl2ZSBzaWduLCBnZXQgYSBkb3RcbiAgICAgICAgICAgICAgICB8fCAoZmFjdG9yIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIgJiYgZmFjdG9yLnZhbHVlIDwgMSk7XG4gICAgICAgICAgICBpZiAobmVlZHNEb3QpXG4gICAgICAgICAgICAgICAgb3V0ICs9IFwiPG1vPsK3PC9tbz5cIjtcbiAgICAgICAgICAgIG91dCArPSB3cmFwSWZOZWVkZWQoZmFjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyBOdW1iZXIgb2YgbmVnYXRpdmUgaW50ZWdlciBwcm9kdWN0cy5cbiAgICAgKi9cbiAgICBudW1OZWdhdGl2ZXMoKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIHRoaXMuZmFjdG9ycy5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgICAgaWYgKGYgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcilcbiAgICAgICAgICAgICAgICBpZiAoZi52YWx1ZSA8IDApXG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBsZXQgb3V0ID0gXCJcIjtcbiAgICAgICAgZm9yIChjb25zdCBleHAgb2YgdGhpcy5mYWN0b3JzKSB7XG4gICAgICAgICAgICBpZiAoZXhwIGluc3RhbmNlb2YgUHJvZHVjdCkge1xuICAgICAgICAgICAgICAgIG91dCArPSBcIihcIiArIGV4cC50b1N0cmluZygpICsgXCIpXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXQgKz0gZXhwLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXQgKz0gXCLCt1wiO1xuICAgICAgICB9XG4gICAgICAgIG91dCA9IG91dC5zdWJzdHJpbmcoMCwgb3V0Lmxlbmd0aCAtIDEpO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICBnZXQgaGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIFwiUHJvZHVjdFwiICsgdGhpcy5mYWN0b3JzLm1hcChlID0+IGUuaGFzaCkuam9pbigpO1xuICAgIH1cbiAgICAvLyBBdCBsZWFzdCAyIGVsZW1lbnRzLCBvcmRlciBtYXR0ZXJzXG4gICAgZmFjdG9ycztcbiAgICBjbGFzcyA9IGV4cG9ydHMuUHJvZHVjdFR5cGU7XG4gICAgaXNSZWR1Y2libGU7XG4gICAgZ2V0IHJlZHVjZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZhY3RvcnMubWFwKGUgPT4gZS5yZWR1Y2VkKS5yZWR1Y2UoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBJbnRlZ2VyXzEuSW50ZWdlci5vZihhLnJlZHVjZWQudmFsdWUgKiBiLnJlZHVjZWQudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT25seSAxIG5lZ2F0aXZlIGludGVnZXJcbiAgICAgKiBJbnRlZ2VyIGZhY3RvcnMgYXJlIGZpcnN0XG4gICAgICogTm8gZmFjdG9yIGVxdWFscyAxXG4gICAgICovXG4gICAgaXNIZWFsdGh5O1xuICAgIGlzQ29uc3RhbnQ7XG4gICAgY2hpbGRDb3VudDtcbn1cbmV4cG9ydHMuUHJvZHVjdCA9IFByb2R1Y3Q7XG5leHBvcnRzLlByb2R1Y3RUeXBlID0gXCJQcm9kdWN0XCI7XG4vKipcbiAqIENhbiBiZSB1c2VkIGluIGFycmF5LnNvcnQoKSB0byBnZXQgcHJvcGVybHkgb3JkZXJlZCBwcm9kdWN0c1xuICogQHBhcmFtIGFcbiAqIEBwYXJhbSBiXG4gKi9cbmZ1bmN0aW9uIGZhY3Rvck9yZGVyKGEsIGIpIHtcbiAgICByZXR1cm4gMDsgLy9UT0RPOiBJbXBsZW1lbnRcbn1cbmV4cG9ydHMuZmFjdG9yT3JkZXIgPSBmYWN0b3JPcmRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5vcmRlclRlcm1zID0gZXhwb3J0cy5TdW1UeXBlID0gZXhwb3J0cy5TdW0gPSB2b2lkIDA7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2Fzc2VydFwiKTtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuL0V4cHJlc3Npb25cIik7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi9JbnRlZ2VyXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4vUHJvZHVjdFwiKTtcbmNvbnN0IFZhcmlhYmxlXzEgPSByZXF1aXJlKFwiLi9WYXJpYWJsZVwiKTtcbi8qKlxuICogRXhwcmVzc2lvbiByZXByZXNlbnRpbmcgdGhlIHN1bSBvZiAyIG9yIG1vcmUgdGVybXMuXG4gKi9cbmNsYXNzIFN1bSBleHRlbmRzIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uIHtcbiAgICAvKipcbiAgICAgKiBGYWN0b3J5IG1ldGhvZCBjb25zbnRydWN0b3IuXG4gICAgICogQHBhcmFtIHRlcm1zIENvbnRhaW5zIGF0IGxlYXN0IDIgZWxlbWVudHNcbiAgICAgKi9cbiAgICBzdGF0aWMgb2YodGVybXMpIHtcbiAgICAgICAgY29uc3QgaGFzaCA9IHRlcm1zLm1hcCh0ID0+IHQuaGFzaCkuam9pbihcIlwiKTtcbiAgICAgICAgaWYgKCFTdW0uaW5zdGFuY2VzLmhhcyhoYXNoKSkge1xuICAgICAgICAgICAgU3VtLmluc3RhbmNlcy5zZXQoaGFzaCwgbmV3IFN1bSh0ZXJtcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdW0uaW5zdGFuY2VzLmdldChoYXNoKTtcbiAgICB9XG4gICAgc3RhdGljIGluc3RhbmNlcyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdHJ1Y3Rvcih0ZXJtcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0ZXJtcy5sZW5ndGggPj0gMiwgXCJDcmVhdGluZyBzdW0gd2l0aCBsZXNzIHRoYW4gMiB0ZXJtcy5cIik7XG4gICAgICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgICAgICAgdGhpcy5pc1JlZHVjaWJsZSA9IHRoaXMudGVybXMubWFwKHQgPT4gdC5pc1JlZHVjaWJsZSB8fCB0LmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZSkucmVkdWNlKChhLCBiKSA9PiBhICYmIGIpO1xuICAgICAgICB0aGlzLmlzSGVhbHRoeSA9IHRoaXMuZGV0ZXJtaW5lSGVhbHRoKCk7XG4gICAgICAgIHRoaXMuaXNDb25zdGFudCA9IHRoaXMudGVybXMubWFwKHQgPT4gdC5pc0NvbnN0YW50KS5yZWR1Y2UoKGEsIGIpID0+IGEgJiYgYik7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy50ZXJtcyk7XG4gICAgICAgIHRoaXMuY2hpbGRDb3VudCA9IHRlcm1zLmxlbmd0aCArIHRlcm1zLm1hcCh0ID0+IHQuY2hpbGRDb3VudCkucmVkdWNlKChhLCBiKSA9PiBhICsgYik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBuZXcgRXhwcmVzc2lvbiB3aXRob3V0IHRoZSBnaXZlbiB0ZXJtLlxuICAgICAqIElmIHRoZSBzdW0gY29udGFpbnMgdGhlIHRlcm0gbXVsdGlwbGUgdGltZXMsXG4gICAgICogb25seSByZW1vdmVzIG9uZS4gSWYgaXQgZG9lc24ndCBjb250YWluIHRoZSB0ZXJtLFxuICAgICAqIHJldHVybnMgaXRzZWxmLlxuICAgICAqIEBwYXJhbSB0ZXJtIEEgdGVybSBpbiB0aGlzIHN1bS5cbiAgICAgKi9cbiAgICB3aXRob3V0KHRlcm0pIHtcbiAgICAgICAgY29uc3QgbmV3VGVybXMgPSBbLi4udGhpcy50ZXJtc107XG4gICAgICAgIGNvbnN0IGluZGV4ID0gbmV3VGVybXMuZmluZEluZGV4KCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSB0ZXJtO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGluZGV4ID09IC0xKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIG5ld1Rlcm1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGlmIChuZXdUZXJtcy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3VGVybXNbMF07IC8vIEdhdXJhbnRlZWQgdGhlcmUncyBvbmUgdGVybSBoZXJlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFN1bS5vZihuZXdUZXJtcyk7XG4gICAgfVxuICAgIHRvTWF0aFhNTCgpIHtcbiAgICAgICAgZnVuY3Rpb24gd3JhcElmTmVlZGVkKGV4cCkge1xuICAgICAgICAgICAgaWYgKGV4cC5jbGFzcyA9PSBleHBvcnRzLlN1bVR5cGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPG1vPig8L21vPlwiICsgZXhwLnRvTWF0aFhNTCgpICsgXCI8bW8+KTwvbW8+XCI7XG4gICAgICAgICAgICByZXR1cm4gZXhwLnRvTWF0aFhNTCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBvdXQgPSB3cmFwSWZOZWVkZWQodGhpcy50ZXJtc1swXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy50ZXJtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGVybSA9IHRoaXMudGVybXNbaV07XG4gICAgICAgICAgICAvLyBTdWJ0cmFjdCBuZWdhdGl2ZSB0ZXJtcyBpbnN0ZWFkIG9mIGFkZGluZyBuZWdhdGl2ZXNcbiAgICAgICAgICAgIGlmICh0ZXJtIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3QgJiYgdGVybS5pc05lZ2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IFwiPG1vPi08L21vPlwiICsgd3JhcElmTmVlZGVkKHRlcm0ubmVnYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGVybSBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyICYmIHRlcm0udmFsdWUgPCAwKSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IFwiPG1vPi08L21vPlwiICsgd3JhcElmTmVlZGVkKHRlcm0uYnV0UG9zaXRpdmUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXQgKz0gXCI8bW8+KzwvbW8+XCIgKyB3cmFwSWZOZWVkZWQodGhpcy50ZXJtc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGxldCBvdXQgPSBcIlwiO1xuICAgICAgICBmb3IgKGNvbnN0IGV4cCBvZiB0aGlzLnRlcm1zKSB7XG4gICAgICAgICAgICBvdXQgKz0gZXhwLnRvU3RyaW5nKCkgKyBcIitcIjtcbiAgICAgICAgfVxuICAgICAgICBvdXQgPSBvdXQuc3Vic3RyaW5nKDAsIG91dC5sZW5ndGggLSAxKTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgZ2V0IGhhc2goKSB7XG4gICAgICAgIHJldHVybiBcIlN1bVwiICsgdGhpcy50ZXJtcy5tYXAoZSA9PiBlLmhhc2gpLmpvaW4oKTtcbiAgICB9XG4gICAgY2xhc3MgPSBleHBvcnRzLlN1bVR5cGU7XG4gICAgLyoqXG4gICAgICogT3JkZXJlZCwgaW1tdXRhYmxlXG4gICAgICovXG4gICAgdGVybXM7XG4gICAgaXNSZWR1Y2libGU7XG4gICAgZ2V0IHJlZHVjZWQoKSB7XG4gICAgICAgIHJldHVybiBJbnRlZ2VyXzEuSW50ZWdlci5vZih0aGlzLnRlcm1zLm1hcCh0ID0+IHQucmVkdWNlZC52YWx1ZSkucmVkdWNlKChhLCBiKSA9PiBhICsgYikpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGaWd1cmUgb3V0IGlmIHdlJ3JlIGhlYWx0aHkuXG4gICAgICovXG4gICAgZGV0ZXJtaW5lSGVhbHRoKCkge1xuICAgICAgICBpZiAodGhpcy50ZXJtcy5maWx0ZXIodCA9PiB0LmlzUmVkdWNpYmxlIHx8IHQgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcikubGVuZ3RoID4gMSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGhpcy50ZXJtcy5mb3JFYWNoKHQgPT4ge1xuICAgICAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcilcbiAgICAgICAgICAgICAgICBpZiAodC52YWx1ZSA9PSAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRlcm1zLmZvckVhY2godGVybSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRlcm0uaXNIZWFsdGh5KVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNvcnJlY3RPcmRlcmluZyA9IG9yZGVyVGVybXMoLi4udGhpcy50ZXJtcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50ZXJtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMudGVybXNbaV0gIT09IGNvcnJlY3RPcmRlcmluZ1tpXSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy9UT0RPOiBDaGVjayBjb25kaXRpb24gM1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBzdW0gaXMgaGVhbHRoeSBpZmY6XG4gICAgICpcbiAgICAgKiAxLiBDb250YWlucyBhIG1heCBvZiAxIHJlZHVjaWJsZSB0ZXJtLlxuICAgICAqIDIuIFByb2R1Y3RzIHdpdGggaW50ZWdlciBjb2VmZmljaWVudHMgYXJlIGNvbWJpbmVkLlxuICAgICAqICBhICsgMmEgPSAzYSxcbiAgICAgKiAgYSArIC1hID0gMFxuICAgICAqIDMuIE5vIHRlcm0gaXMgMFxuICAgICAqIDQuIEFsbCB0ZXJtcyBhcmUgaGVhbHRoeS5cbiAgICAgKiA1LiBUZXJtcyBhcmUgb3JkZXJlZCBjb3JyZWN0bHkuXG4gICAgICovXG4gICAgaXNIZWFsdGh5O1xuICAgIGlzQ29uc3RhbnQ7XG4gICAgY2hpbGRDb3VudDtcbn1cbmV4cG9ydHMuU3VtID0gU3VtO1xuZXhwb3J0cy5TdW1UeXBlID0gXCJTdW1cIjtcbi8qKlxuICogUmV0dXJucyB0aGUgZ2l2ZW4gdGVybXMgb3JkZXJlZCBjb3JyZWN0bHkgdG9cbiAqIGJlIHBsYWNlZCBpbiBhIFN1bS4gQWx0ZXJzIHRoZSBnaXZlbiBhcnJheS5cbiAqIEBwYXJhbSB0ZXJtc1xuICovXG5mdW5jdGlvbiBvcmRlclRlcm1zKC4uLnRlcm1zKSB7XG4gICAgLy8gQSBub3RlIGFib3V0IHRoZSBzb3J0IGZ1bmN0aW9uIGJjIHRoZSBkb2N1bWVudGF0aW9uIGlzIGNyeXB0aWNcbiAgICAvLyBJZiBhIHNob3VsZCBiZSBwdXQgYmVmb3JlIGIgaW4gdGhlIHN1bSwgcmV0dXJuIGEgbmVnYXRpdmUgdmFsdWVcbiAgICByZXR1cm4gdGVybXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAvLyBWYXJpYWJsZXMgYmVmb3JlIEludGVnZXJzXG4gICAgICAgIGlmIChhLmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZSAmJiAoYi5jbGFzcyA9PSBWYXJpYWJsZV8xLlZhcmlhYmxlVHlwZSB8fCAoYiBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0ICYmIGIuaXNOZWdhdGlvbiAmJiBiLm5lZ2F0aW9uLmNsYXNzID09IFZhcmlhYmxlXzEuVmFyaWFibGVUeXBlKSkpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoYS5jbGFzcyA9PSBWYXJpYWJsZV8xLlZhcmlhYmxlVHlwZSB8fCAoYSBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0ICYmIGEuaXNOZWdhdGlvbiAmJiBhLm5lZ2F0aW9uLmNsYXNzID09IFZhcmlhYmxlXzEuVmFyaWFibGVUeXBlKSkgJiYgYi5jbGFzcyA9PSBJbnRlZ2VyXzEuSW50ZWdlclR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9KTtcbn1cbmV4cG9ydHMub3JkZXJUZXJtcyA9IG9yZGVyVGVybXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVmFyaWFibGVUeXBlID0gZXhwb3J0cy5WYXJpYWJsZSA9IHZvaWQgMDtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuL0V4cHJlc3Npb25cIik7XG5jbGFzcyBWYXJpYWJsZSBleHRlbmRzIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uIHtcbiAgICBzdGF0aWMgb2Yoc3ltYm9sKSB7XG4gICAgICAgIGlmIChWYXJpYWJsZS5pbnN0YW5jZXMuZ2V0KHN5bWJvbCkgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBWYXJpYWJsZS5pbnN0YW5jZXMuc2V0KHN5bWJvbCwgbmV3IFZhcmlhYmxlKHN5bWJvbCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBWYXJpYWJsZS5pbnN0YW5jZXMuZ2V0KHN5bWJvbCk7XG4gICAgfVxuICAgIHN0YXRpYyBpbnN0YW5jZXMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3RydWN0b3Ioc3ltYm9sKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3ltYm9sID0gc3ltYm9sO1xuICAgIH1cbiAgICBjbGFzcyA9IGV4cG9ydHMuVmFyaWFibGVUeXBlO1xuICAgIHRvTWF0aFhNTCgpIHtcbiAgICAgICAgcmV0dXJuIFwiPG1pPlwiICsgdGhpcy5zeW1ib2wgKyBcIjwvbWk+XCI7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zeW1ib2w7XG4gICAgfVxuICAgIGdldCBoYXNoKCkge1xuICAgICAgICByZXR1cm4gXCJWYXJpYWJsZVwiICsgdGhpcy5zeW1ib2w7XG4gICAgfVxuICAgIHN5bWJvbDtcbiAgICBpc1JlZHVjaWJsZSA9IGZhbHNlO1xuICAgIGdldCByZWR1Y2VkKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJWYXJpYWJsZXMgY2FuJ3QgYmUgcmVkdWNlZCB0byBpbnRlZ2Vycy5cIik7XG4gICAgfVxuICAgIGlzSGVhbHRoeSA9IHRydWU7XG4gICAgaXNDb25zdGFudCA9IGZhbHNlO1xuICAgIGNoaWxkQ291bnQgPSAwO1xufVxuZXhwb3J0cy5WYXJpYWJsZSA9IFZhcmlhYmxlO1xuZXhwb3J0cy5WYXJpYWJsZVR5cGUgPSBcIlZhcmlhYmxlXCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQXJndW1lbnROb2RlVmlldyA9IHZvaWQgMDtcbmNvbnN0IEdyYXBoTm9kZVZpZXdfMSA9IHJlcXVpcmUoXCIuL0dyYXBoTm9kZVZpZXdcIik7XG4vKipcbiAqIFJlcHJlc2VudHMgYW4gYXJndW1lbnQgbm9kZS5cbiAqL1xuY2xhc3MgQXJndW1lbnROb2RlVmlldyBleHRlbmRzIEdyYXBoTm9kZVZpZXdfMS5HcmFwaE5vZGVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihhcmcpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hcmd1bWVudCA9IGFyZztcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSB0aGlzLmFyZ3VtZW50LmFyZ3VtZW50O1xuICAgIH1cbiAgICBhcmd1bWVudDtcbn1cbmV4cG9ydHMuQXJndW1lbnROb2RlVmlldyA9IEFyZ3VtZW50Tm9kZVZpZXc7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJhcmd1bWVudC1ub2Rldmlld1wiLCBBcmd1bWVudE5vZGVWaWV3LCB7IGV4dGVuZHM6IFwiZGl2XCIgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRWRnZVZpZXcgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uL0FyZ3VtZW50XCIpO1xuY29uc3QgVUlQcmVmZXJlbmNlc18xID0gcmVxdWlyZShcIi4vVUlQcmVmZXJlbmNlc1wiKTtcbmNvbnN0IEdyYXBoXzEgPSByZXF1aXJlKFwiLi4vR3JhcGhcIik7XG4vKipcbiAqIFJlcHJlc2VudHMgYW4gZWRnZSBpbiBhIGdyYXBoLlxuICovXG5jbGFzcyBFZGdlVmlldyBleHRlbmRzIEhUTUxQYXJhZ3JhcGhFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihvd25lciwgZWRnZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgICAgIHRoaXMuZWRnZSA9IGVkZ2UuZTtcbiAgICAgICAgdGhpcy5maXJzdCA9IGVkZ2UubjtcbiAgICAgICAgdGhpcy5zZWNvbmQgPSBlZGdlLm4xO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMuZWRnZSk7XG4gICAgICAgIHRoaXMuc3R5bGUud2lkdGggPSBcImZpdC1jb250ZW50XCI7XG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gXCJmaXQtY29udGVudFwiO1xuICAgICAgICB0aGlzLnN0eWxlLnBhZGRpbmcgPSBcIjBcIjtcbiAgICAgICAgdGhpcy5zdHlsZS56SW5kZXggPSBcIi0yXCI7XG4gICAgICAgIHRoaXMuc3R5bGUubWFyZ2luID0gXCIwXCI7XG4gICAgICAgIHRoaXMuc3R5bGUud2hpdGVTcGFjZSA9IFwibm93cmFwXCI7XG4gICAgICAgIHRoaXMuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBVSVByZWZlcmVuY2VzXzEudWlQcmVmZXJlbmNlcy5lZGdlRXF1YWxzQmFja2dyb3VuZENvbG9yO1xuICAgICAgICB0aGlzLnN0eWxlLnVzZXJTZWxlY3QgPSBcIm5vbmVcIjtcbiAgICAgICAgVUlQcmVmZXJlbmNlc18xLnVpUHJlZmVyZW5jZXMub25VcGRhdGUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBVSVByZWZlcmVuY2VzXzEudWlQcmVmZXJlbmNlcy5lZGdlRXF1YWxzQmFja2dyb3VuZENvbG9yO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5vd25lci5lZGdlQ2xpY2tlZCh0aGlzLCBldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBldmVudCA9PiB7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHJvdGF0aW9uIGFuZ2xlIG9mIHZpZXcgd2hpbGUgYWxzb1xuICAgICAqIGxldHRpbmcgaXQga25vdyB0aGUgYW5nbGUgaGFzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHJhZFxuICAgICAqL1xuICAgIHNldEFuZ2xlKHJhZCkge1xuICAgICAgICB0aGlzLnN0eWxlLnJvdGF0ZSA9IFwiXCIgKyByYWQgKyBcInJhZFwiO1xuICAgICAgICAvL3RoaXMudGV4dENvbnRlbnQgPSBcIlwiICsgKHJhZCAqIDIgKiBNYXRoLlBJIC8gMzYwKS50b0ZpeGVkKDIpICsgXCJkZWdcIlxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGVsZW1lbnQgc2NyZWVuIHdpZHRoIGFuZCBlbnN1cmVzIHRleHQgZml0c1xuICAgICAqIGluc2lkZSB0aGUgZWRnZS5cbiAgICAgKi9cbiAgICBzZXQgd2lkdGgodmFsKSB7XG4gICAgICAgIHN1cGVyLnN0eWxlLndpZHRoID0gdmFsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBlbGVtZW50IGlzIGNvbm5jdGVkIHRvIHRoZSBET00uXG4gICAgICovXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmVkZ2UgaW5zdGFuY2VvZiBBcmd1bWVudF8xLkFyZ3VtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gXCJcIiArIHRoaXMuZWRnZS5jbGFpbS5yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZWRnZSBpbnN0YW5jZW9mIEdyYXBoXzEuR2l2ZW5FZGdlKSB7XG4gICAgICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gXCJcIiArIHRoaXMuZWRnZS5yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCBmb3IgXCIgKyB0aGlzLmVkZ2UpO1xuICAgIH1cbiAgICBvd25lcjtcbiAgICBlZGdlO1xuICAgIGZpcnN0O1xuICAgIHNlY29uZDtcbn1cbmV4cG9ydHMuRWRnZVZpZXcgPSBFZGdlVmlldztcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImVkZ2Utdmlld1wiLCBFZGdlVmlldywgeyBleHRlbmRzOiBcInBcIiB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FZGl0YWJsZU1hdGhWaWV3ID0gdm9pZCAwO1xuLyoqXG4gKiBEaXNwbGF5cyBtYXRoIGFuZCBpcyBlZGl0YWJsZS5cbiAqL1xuY2xhc3MgRWRpdGFibGVNYXRoVmlldyBleHRlbmRzIEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgfVxuICAgIHNldCB2YWx1ZShlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gZTtcbiAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBcIjxtYXRoIGRpc3BsYXk9J2Jsb2NrJz5cIiArIChlPy50b01hdGhYTUwoKSA/PyBcIlwiKSArIFwiPC9tYXRoPlwiO1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGwgPT4gbCh0aGlzLl92YWx1ZSkpO1xuICAgICAgICBNYXRoSmF4LnR5cGVzZXQoW3RoaXNdKTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExpc3RlbmVyIHdpbGwgYmUgY2FsbGVkIHdoZW5ldmVyIHRoZSBtYXRoXG4gICAgICogaW4gdGhlIHZpZXcgaXMgZWRpdGVkLlxuICAgICAqIEBwYXJhbSBsXG4gICAgICovXG4gICAgYWRkRWRpdExpc3RlbmVyKGwpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsKTtcbiAgICB9XG4gICAgbGlzdGVuZXJzID0gW107XG4gICAgX3ZhbHVlID0gbnVsbDtcbn1cbmV4cG9ydHMuRWRpdGFibGVNYXRoVmlldyA9IEVkaXRhYmxlTWF0aFZpZXc7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJlZGl0YWJsZS1tYXRodmlld1wiLCBFZGl0YWJsZU1hdGhWaWV3LCB7IGV4dGVuZHM6IFwiZGl2XCIgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXhwbGFuYXRpb25Qb3B1cCA9IHZvaWQgMDtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuLi9leHByZXNzaW9ucy9FeHByZXNzaW9uXCIpO1xuY29uc3QgTWF0aE1MSGVscGVyc18xID0gcmVxdWlyZShcIi4uL3V0aWwvTWF0aE1MSGVscGVyc1wiKTtcbmNsYXNzIEV4cGxhbmF0aW9uUG9wdXAgZXh0ZW5kcyBIVE1MRGl2RWxlbWVudCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJnXG4gICAgICogQHBhcmFtIG9uQ2xvc2UgQ2FsbGVkIGFmdGVyIHVzZXIgY2xpY2tzIGNsb3NlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihhcmcsIG9uQ2xvc2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hcmcgPSBhcmc7XG4gICAgICAgIHRoaXMub25DbG9zZSA9IG9uQ2xvc2U7XG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYicpO1xuICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25DbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSBcIkNsb3NlXCI7XG4gICAgICAgIGNsb3NlQnV0dG9uLnN0eWxlLnVzZXJTZWxlY3QgPSBcIm5vbmVcIjtcbiAgICAgICAgY2xvc2VCdXR0b24uc3R5bGUuZmxvYXQgPSBcInJpZ2h0XCI7XG4gICAgICAgIHRoaXMuYXBwZW5kKGNsb3NlQnV0dG9uKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZXh0LmlubmVySFRNTCA9IGFyZy5hcmd1bWVudCArIFwiPGJyPlwiO1xuICAgICAgICBpZiAoYXJnLmNsYWltLm4gaW5zdGFuY2VvZiBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbiAmJiBhcmcuY2xhaW0ubjEgaW5zdGFuY2VvZiBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbilcbiAgICAgICAgICAgIHRleHQuaW5uZXJIVE1MICs9ICgwLCBNYXRoTUxIZWxwZXJzXzEuaW5NYXRoQmxvY2spKCgwLCBNYXRoTUxIZWxwZXJzXzEuaW5Sb3cpKGFyZy5jbGFpbS5uLnRvTWF0aFhNTCgpICsgXCIgPG1vPlwiICsgYXJnLmNsYWltLnIgKyBcIjwvbW8+IFwiICsgYXJnLmNsYWltLm4xLnRvTWF0aFhNTCgpKSkgKyBcIjxicj4gRGVyaXZlZCBmcm9tOiA8YnI+XCI7XG4gICAgICAgIGZvciAoY29uc3QgZ3JvdW5kIG9mIGFyZy5ncm91bmRzKSB7XG4gICAgICAgICAgICBpZiAoZ3JvdW5kIGluc3RhbmNlb2YgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24pXG4gICAgICAgICAgICAgICAgdGV4dC5pbm5lckhUTUwgKz0gKDAsIE1hdGhNTEhlbHBlcnNfMS5pbk1hdGgpKGdyb3VuZC50b01hdGhYTUwoKSkgKyBcIjxicj5cIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFwcGVuZCh0ZXh0KTtcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5ib3hTaGFkb3cgPSBcIjAuM2NoIDAuM2NoIDAuNmNoIHJnYmEoMCwgMCwgMCwgMC41KVwiO1xuICAgICAgICB0aGlzLnN0eWxlLnBhZGRpbmcgPSBcIjFjaFwiO1xuICAgICAgICB0aGlzLnN0eWxlLndpZHRoID0gXCIzMDBweFwiO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgTWF0aEpheC50eXBlc2V0KFt0aGlzXSk7XG4gICAgfVxuICAgIGFyZztcbiAgICBvbkNsb3NlO1xufVxuZXhwb3J0cy5FeHBsYW5hdGlvblBvcHVwID0gRXhwbGFuYXRpb25Qb3B1cDtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImV4cGxhbmF0aW9uLXBvcHVwXCIsIEV4cGxhbmF0aW9uUG9wdXAsIHsgZXh0ZW5kczogXCJkaXZcIiB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FeHByZXNzaW9uTm9kZVZpZXcgPSB2b2lkIDA7XG5jb25zdCBFZGl0YWJsZU1hdGhWaWV3XzEgPSByZXF1aXJlKFwiLi9FZGl0YWJsZU1hdGhWaWV3XCIpO1xuY29uc3QgR3JhcGhOb2RlVmlld18xID0gcmVxdWlyZShcIi4vR3JhcGhOb2RlVmlld1wiKTtcbi8qKlxuICogQSBncmFwaCBub2RlIHZpZXcgZm9yIGV4cHJlc3Npb24gbm9kZXMuXG4gKi9cbmNsYXNzIEV4cHJlc3Npb25Ob2RlVmlldyBleHRlbmRzIEdyYXBoTm9kZVZpZXdfMS5HcmFwaE5vZGVWaWV3IHtcbiAgICBjb25zdHJ1Y3Rvcihub2RlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgICAgIHRoaXMuZWRpdGFibGVNYXRoVmlldyA9IG5ldyBFZGl0YWJsZU1hdGhWaWV3XzEuRWRpdGFibGVNYXRoVmlldygpO1xuICAgICAgICB0aGlzLmVkaXRhYmxlTWF0aFZpZXcudmFsdWUgPSB0aGlzLm5vZGU7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5lZGl0YWJsZU1hdGhWaWV3KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ub2RlLnRvU3RyaW5nKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgfVxuICAgIG5vZGU7XG4gICAgZWRpdGFibGVNYXRoVmlldztcbn1cbmV4cG9ydHMuRXhwcmVzc2lvbk5vZGVWaWV3ID0gRXhwcmVzc2lvbk5vZGVWaWV3O1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiZXhwcmVzc2lvbi1ub2Rldmlld1wiLCBFeHByZXNzaW9uTm9kZVZpZXcsIHsgZXh0ZW5kczogXCJkaXZcIiB9KTtcbmNvbnN0IGNvbG9yVW5oZWFsdGh5Tm9kZXMgPSB0cnVlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdyYXBoTm9kZVZpZXcgPSB2b2lkIDA7XG4vKipcbiAqIEFuIGh0bWwgZWxlbWVudCB0aGF0IHJlcHJlc2VudHMgYSBtYXRoIGdyYXBoIG5vZGUuXG4gKi9cbmNsYXNzIEdyYXBoTm9kZVZpZXcgZXh0ZW5kcyBIVE1MRGl2RWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIC8vdGhpcy5zdHlsZS5ib3JkZXIgPSBcImJsdWUgZG90dGVkIDAuMmNoXCJcbiAgICAgICAgdGhpcy5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjFjaFwiO1xuICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibGlnaHRibHVlXCI7XG4gICAgICAgIHRoaXMuc3R5bGUucGFkZGluZyA9IFwiMWNoXCI7XG4gICAgICAgIHRoaXMuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xuICAgICAgICB0aGlzLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjBcIjtcbiAgICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IFwiZml0LWNvbnRlbnRcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBcImZpdC1jb250ZW50XCI7XG4gICAgICAgIHRoaXMuc3R5bGUud2hpdGVTcGFjZSA9IFwibm93cmFwXCI7XG4gICAgfVxuICAgIHNldCBiYWNrZ3JvdW5kQ29sb3IodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB2YWx1ZTtcbiAgICB9XG59XG5leHBvcnRzLkdyYXBoTm9kZVZpZXcgPSBHcmFwaE5vZGVWaWV3O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVpUHJlZmVyZW5jZXMgPSB2b2lkIDA7XG5jbGFzcyBVSVByZWZlcmVuY2VzIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgRnVuY3Rpb24gY2FsbGVkIHdoZW5ldmVyIGEgdWkgcHJlZmVyZW5jZVxuICAgICAqIGlzIGNoYW5nZWQuXG4gICAgICovXG4gICAgb25VcGRhdGUoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgfVxuICAgIC8vIEdldHRlcnMgYW5kIFNldHRlcnNcbiAgICAvKipcbiAgICAgKiBCYWNrZ3JvdW5kIGNvbG9yIG9mIGEgZ3JhcGggZWRnZSBkZW5vdGluZ1xuICAgICAqIGVxdWFsaXR5IGJldHdlZW4gdHdvIGV4cHJlc3Npb25zLlxuICAgICAqIENzcyB2YWx1ZS5cbiAgICAgKi9cbiAgICBnZXQgZWRnZUVxdWFsc0JhY2tncm91bmRDb2xvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VkZ2VFcXVhbHNCYWNrZ3JvdW5kQ29sb3I7XG4gICAgfVxuICAgIHNldCBlZGdlRXF1YWxzQmFja2dyb3VuZENvbG9yKHZhbCkge1xuICAgICAgICB0aGlzLl9lZGdlRXF1YWxzQmFja2dyb3VuZENvbG9yID0gdmFsO1xuICAgICAgICB0aGlzLmNhbGxiYWNrcy5mb3JFYWNoKGMgPT4gYygpKTtcbiAgICB9XG4gICAgLy8gUHJlZmVyZW5jZSBWYWx1ZXNcbiAgICBfZWRnZUVxdWFsc0JhY2tncm91bmRDb2xvciA9IFwibm9uZVwiO1xuICAgIGNhbGxiYWNrcyA9IFtdO1xufVxuZXhwb3J0cy51aVByZWZlcmVuY2VzID0gbmV3IFVJUHJlZmVyZW5jZXMoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5XZWJHcmFwaFZpZXcgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uL0FyZ3VtZW50XCIpO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4uL2V4cHJlc3Npb25zL0V4cHJlc3Npb25cIik7XG5jb25zdCBHcmFwaE1pbmlwdWxhdG9yXzEgPSByZXF1aXJlKFwiLi4vR3JhcGhNaW5pcHVsYXRvclwiKTtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4uL3V0aWwvYXNzZXJ0XCIpO1xuY29uc3QgVG91Y2hHZXN0dXJlUmVjb2duaXplcl8xID0gcmVxdWlyZShcIi4uLy4uL1RvdWNoR2VzdHVyZVJlY29nbml6ZXJcIik7XG5jb25zdCBFZGdlVmlld18xID0gcmVxdWlyZShcIi4vRWRnZVZpZXdcIik7XG5jb25zdCBFeHByZXNzaW9uTm9kZVZpZXdfMSA9IHJlcXVpcmUoXCIuL0V4cHJlc3Npb25Ob2RlVmlld1wiKTtcbmNvbnN0IEFyZ3VtZW50Tm9kZVZpZXdfMSA9IHJlcXVpcmUoXCIuL0FyZ3VtZW50Tm9kZVZpZXdcIik7XG5jb25zdCBFeHBsYW5hdGlvblBvcHVwXzEgPSByZXF1aXJlKFwiLi9FeHBsYW5hdGlvblBvcHVwXCIpO1xuLyoqXG4gKiBBIHVpIGVsZW1lbnQgdGhhdCB3aWxsIGRpc3BsYXkgYSBtYXRoIGdyYXBoIGluIGEgd2ViLlxuICovXG5jbGFzcyBXZWJHcmFwaFZpZXcgZXh0ZW5kcyBIVE1MRGl2RWxlbWVudCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGdyYXBoIE11c3QgYmUgZnVsbHkgY29ubmVjdGVkLlxuICAgICAqIEBwYXJhbSByb290cyBOb24tZW1wdHkuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZ3JhcGgsIHJvb3RzLCBjb25maWcgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5ncmFwaCA9IGdyYXBoO1xuICAgICAgICB0aGlzLm5vZGVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLm9mZnNldFggPSAwO1xuICAgICAgICB0aGlzLm9mZnNldFkgPSAwO1xuICAgICAgICB0aGlzLm5vZGVQb3NpdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZWRnZVBvc2l0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5lZGdlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yb290Tm9kZXMgPSBuZXcgU2V0KHJvb3RzKTtcbiAgICAgICAgdGhpcy5yaW5nRWxlbWVudHMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMucmluZ1Bvc2l0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5leHBsYW5hdGlvblBvcHVwcyA9IFtdO1xuICAgICAgICBpZiAoY29uZmlnICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zaG93QXJndW1lbnRzID0gY29uZmlnLnNob3dBcmd1bWVudHM7XG4gICAgICAgICAgICB0aGlzLmRyYXdFZGdlTGluZXMgPSBjb25maWcuZHJhd0VkZ2VMaW5lcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0eWxlLmNsaXBQYXRoID0gXCJwb2x5Z29uKDAlIDAlLCAxMDAlIDAlLCAxMDAlIDEwMCUsIDAlIDEwMCUpXCI7XG4gICAgICAgIHRoaXMuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgICAgIHRoaXMuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50b3VjaERvd24gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5tb3VzZURvd24pXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXRYICs9IGV2ZW50Lm1vdmVtZW50WCAvIHRoaXMuc2NhbGU7XG4gICAgICAgICAgICB0aGlzLm9mZnNldFkgKz0gZXZlbnQubW92ZW1lbnRZIC8gdGhpcy5zY2FsZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT2Zmc2V0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUgPSBNYXRoLnBvdygwLjgsIGV2ZW50LmRlbHRhWSAvIDM2MCkgKiB0aGlzLnNjYWxlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVPZmZzZXQoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nZXN0dXJlUmVjb2duaXplciA9IG5ldyBUb3VjaEdlc3R1cmVSZWNvZ25pemVyXzEuVG91Y2hHZXN0dXJlUmVjb2duaXplcigpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGRvd25cIiwgdGhpcy5nZXN0dXJlUmVjb2duaXplci5wcm9jZXNzVG91Y2hEb3duKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5nZXN0dXJlUmVjb2duaXplci5wcm9jZXNzVG91Y2hFbmQpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCB0aGlzLmdlc3R1cmVSZWNvZ25pemVyLnByb2Nlc3NUb3VjaENhbmNlbCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLmdlc3R1cmVSZWNvZ25pemVyLnByb2Nlc3NUb3VjaE1vdmUpO1xuICAgICAgICB0aGlzLmdlc3R1cmVSZWNvZ25pemVyLmFkZFBpbmNoTGlzdGVuZXIoKGNlbnRlciwgc2NhbGVEZWx0YSwgZmluZ2VycykgPT4ge1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZXBPaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgYSBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgdGhlIGNvbG9yIG9mIGEgbm9kZS5cbiAgICAgKiBAcGFyYW0gY29sb3JGblxuICAgICAqL1xuICAgIHNldE5vZGVDb2xvcmluZ1NjaGVtZShjb2xvckZuKSB7XG4gICAgICAgIHRoaXMubm9kZUNvbG9yRm4gPSBjb2xvckZuO1xuICAgICAgICB0aGlzLnByb3BvZ2F0ZVNldHRpbmdzVG9Ob2RlcygpO1xuICAgIH1cbiAgICBub2RlQ29sb3JGbiA9IChuKSA9PiBcImxpZ2h0Ymx1ZVwiO1xuICAgIHByb3BvZ2F0ZVNldHRpbmdzVG9Ob2RlcygpIHtcbiAgICAgICAgdGhpcy5ub2Rlcy5mb3JFYWNoKCh2aWV3LCBub2RlKSA9PiB7XG4gICAgICAgICAgICB2aWV3LmJhY2tncm91bmRDb2xvciA9IHRoaXMubm9kZUNvbG9yRm4obm9kZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGlmIHRoZSB2aWV3IHNob3VsZCBzaG93IGFyZ3VtZW50IG5vZGVzIGFzIG5vZGVzLlxuICAgICAqIEZhbHNlIGJ5IGRlZmF1bHQuXG4gICAgICogQHBhcmFtIHZhbFxuICAgICAqL1xuICAgIHNldFNob3dBcmd1bWVudHModmFsKSB7XG4gICAgICAgIHRoaXMuc2hvd0FyZ3VtZW50cyA9IHRydWU7XG4gICAgICAgIHRoaXMucmVhZEdyYXBoKCk7XG4gICAgICAgIHRoaXMuYXJyYW5nZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZU9mZnNldCgpO1xuICAgIH1cbiAgICBnZXQgY2VudGVyKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdGhpcy5vZmZzZXRXaWR0aCAvIDIsXG4gICAgICAgICAgICB5OiB0aGlzLm9mZnNldEhlaWdodCAvIDIsXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZvbGxvd3MgdGhlIHNob3dBcmd1bWVudCBzZXR0aW5nLlxuICAgICAqIFBvcHVsYXRlcyB0aGlzLm5vZGVzLCB0aGlzLmVkZ2VzLFxuICAgICAqIGFkZHMgdGhlIGNyZWF0ZWQgdmlld3MgdG8gdGhlIHNoYWRvdyBkb21cbiAgICAgKiB0byBtYXRjaCB0aGUgZ3JhcGguXG4gICAgICogUmVtb3ZlcyBhbnkgcHJlLWV4aXN0aW5nIGVsZW1lbnRzIGZyb20gdGhlIHNoYWRvdyBkb20uXG4gICAgICovXG4gICAgcmVhZEdyYXBoKCkge1xuICAgICAgICAvLyBDbGVhciBleGlzdGluZ1xuICAgICAgICB0aGlzLm5vZGVzLmZvckVhY2goKHZpZXcsIG5vZGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodmlldyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm5vZGVzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuZWRnZXMuZm9yRWFjaCgodmlldywgZWRnZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh2aWV3KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWRnZXMuY2xlYXIoKTtcbiAgICAgICAgLy8gRmV0Y2ggbm9kZXNcbiAgICAgICAgdGhpcy5ncmFwaC5nZXROb2RlcygpLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmlldyA9IG5ldyBFeHByZXNzaW9uTm9kZVZpZXdfMS5FeHByZXNzaW9uTm9kZVZpZXcobm9kZSk7XG4gICAgICAgICAgICAgICAgdmlldy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzLnNldChub2RlLCB2aWV3KTtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZCh2aWV3KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBBcmd1bWVudF8xLkFyZ3VtZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNob3dBcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBjb25zdCB2aWV3ID0gbmV3IEFyZ3VtZW50Tm9kZVZpZXdfMS5Bcmd1bWVudE5vZGVWaWV3KG5vZGUpO1xuICAgICAgICAgICAgICAgIHZpZXcuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rlcy5zZXQobm9kZSwgdmlldyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmQodmlldyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR3JhcGggY29udGFpbnMgbm9kZSBXZWJHcmFwaFZpZXcgY2FuJ3QgcHJvY2Vzcy5cIik7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBGZXRjaCBlZGdlc1xuICAgICAgICBHcmFwaE1pbmlwdWxhdG9yXzEuR3JhcGhNaW5pcHVsYXRvci5kcm9wU3ltbWV0cmljKHRoaXMuZ3JhcGguZ2V0RWRnZXMoKSkuZmlsdGVyKGVkZ2UgPT4ge1xuICAgICAgICAgICAgLy8gT25seSBjb25zaWRlciBlZGdlcyBmb3Igd2hpY2ggd2UgaGF2ZSBib3RoIGVuZHBvaW50cyBvbiB0aGUgdmlld1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZXMuaGFzKGVkZ2UubikgJiYgdGhpcy5ub2Rlcy5oYXMoZWRnZS5uMSk7XG4gICAgICAgIH0pLmZvckVhY2goZWRnZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gbmV3IEVkZ2VWaWV3XzEuRWRnZVZpZXcodGhpcywgZWRnZSk7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgdGhpcy5lZGdlcy5zZXQoZWRnZSwgdmlldyk7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZCh2aWV3KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvcG9nYXRlU2V0dGluZ3NUb05vZGVzKCk7XG4gICAgICAgIHRoaXMucmVwT2soKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMucmVhZEdyYXBoKCk7XG4gICAgICAgIHRoaXMuYXJyYW5nZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZU9mZnNldCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQaWNrIHBsYWNlcyBmb3IgYWxsIHRoZSBub2Rlcy9lZGdlcyBvbiB0aGUgc2NyZWVuLlxuICAgICAqIFBvcHVsYXRlcyB0aGUgcG9zaXRpb24qIHJlcCB2YXJzLlxuICAgICAqL1xuICAgIGFycmFuZ2UoKSB7XG4gICAgICAgIHRoaXMubm9kZVBvc2l0aW9ucy5jbGVhcigpO1xuICAgICAgICB0aGlzLmVkZ2VQb3NpdGlvbnMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yaW5nUG9zaXRpb25zLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucmluZ0VsZW1lbnRzLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yaW5nRWxlbWVudHMuY2xlYXIoKTtcbiAgICAgICAgLy8gUGxhY2Ugbm9kZXMgb24gYSBzZXJpZXMgb2YgcmluZ3MgZnJvbSB0aGUgY2VudGVyIHVzaW5nIHRoZWlyIGRlcHRoIGluIHRoZSBncmFwaFxuICAgICAgICBjb25zdCBsZXZlbHMgPSBHcmFwaE1pbmlwdWxhdG9yXzEuR3JhcGhNaW5pcHVsYXRvci5nZXRMZXZlbHModGhpcy5ncmFwaCwgdGhpcy5yb290Tm9kZXMsIChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIEFyZ3VtZW50XzEuQXJndW1lbnQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0FyZ3VtZW50cztcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOZXcgdHlwZSBvZiBub2RlXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IG1heERlcHRoID0gMDtcbiAgICAgICAgbGV2ZWxzLmZvckVhY2goKF8sIGRlcHRoKSA9PiB7XG4gICAgICAgICAgICBtYXhEZXB0aCA9IE1hdGgubWF4KG1heERlcHRoLCBkZXB0aCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjZW50ZXIgPSB7IHg6ICh0aGlzLmNsaWVudFdpZHRoIC8gMiksIHk6IHRoaXMuY2xpZW50SGVpZ2h0IC8gMiB9O1xuICAgICAgICBsZXQgbGFzdFJhZGl1cyA9IDA7IC8vcHhcbiAgICAgICAgZm9yIChsZXQgZGVwdGggPSAwOyBkZXB0aCA8IG1heERlcHRoICsgMTsgZGVwdGgrKykge1xuICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBsZXZlbHMuZ2V0KGRlcHRoKTtcbiAgICAgICAgICAgIC8vIE9yZ2FuaXplIHRoZSByb290IG5vZGVzIG9uIGEgY2lyY2xlIGFyb3VuZCB0aGUgY2VudGVyXG4gICAgICAgICAgICBjb25zdCBzdGVwU2l6ZSA9ICgyICogTWF0aC5QSSkgLyBub2Rlcy5zaXplO1xuICAgICAgICAgICAgLy8gVGhlIHN0YXJ0aW5nIGFuZ3VsYXIgb2Zmc2V0IHRvIGFkZCB0aGUgc3RlcHNpemUgdG9cbiAgICAgICAgICAgIC8vIE1ha2luZyBpdCBub24temVybyBzdG9wcyB0aGluZ3MgZnJvbSBhbGlnbmluZ1xuICAgICAgICAgICAgY29uc3Qgc3RlcE9mZnNldCA9IChNYXRoLlBJIC8gbm9kZXMuc2l6ZSkgKiBkZXB0aDtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsY3VsYXRpbmcgdGhlIHJhZGl1cyBvZiB0aGUgY2lyY2xlXG4gICAgICAgICAgICAgKiBTdXBwb3NlIGV2ZXJ5IHJvb3Qgbm9kZSBvbiB0aGUgc3RhcnRpbmcgY2lyY2xlIHJlcXVpcmVzXG4gICAgICAgICAgICAgKiBhIGNpcmN1bGFyIHNwYWNlIHRvIGJlIGRyYXduIHdpdGggcmFkaXVzIG5vZGVSYWRpdXNcbiAgICAgICAgICAgICAqIEEgc3RhcnRpbmcgY2lyY2xlIHdpdGggbiBvZiB0aGVzZSBub2RlcyB3b3VsZCByZXF1aXJlIGFcbiAgICAgICAgICAgICAqIGNpcmN1bWZlcmVuY2Ugb2YgbiAqIDJub2RlUmFkaXVzLlxuICAgICAgICAgICAgICogVGhlIGNpcmN1bWZlcmVuY2Ugb2YgYSBjaXJjbGUgY2FuIGJlIGV4cHJlc3NlZFxuICAgICAgICAgICAgICogYXMgMipwaSpyXG4gICAgICAgICAgICAgKiA9PiByID0gbiAqIDIgKiBzbWFsbFIgLyAoMiAqIHBpKVxuICAgICAgICAgICAgICogICAgICA9IG4gKiBzbWFsbFIgLyBwaVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdCBub2RlUmFkaXVzID0gNzA7IC8vIHBpeGVsc1xuICAgICAgICAgICAgbGV0IHJhZGl1cyA9IE1hdGgubWF4KG5vZGVzLnNpemUgKiBub2RlUmFkaXVzIC8gTWF0aC5QSSwgbGFzdFJhZGl1cyArICgzICogbm9kZVJhZGl1cykpO1xuICAgICAgICAgICAgaWYgKGRlcHRoID09IDAgJiYgbm9kZXMuc2l6ZSA9PSAxKVxuICAgICAgICAgICAgICAgIHJhZGl1cyA9IDA7XG4gICAgICAgICAgICBsYXN0UmFkaXVzID0gcmFkaXVzO1xuICAgICAgICAgICAgY29uc3QgbnMgPSBbLi4ubm9kZXNdOyAvLyBUT0RPLCBhc3NpZ24gYSBtZWFuaW5nZnVsIG9yZGVyaW5nXG4gICAgICAgICAgICBucy5mb3JFYWNoKChub2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLm5vZGVzLmdldChub2RlKTtcbiAgICAgICAgICAgICAgICAvL3ZpZXcuc3R5bGUud2lkdGggPSBcIlwiICsgc21hbGxSICsgXCJweFwiXG4gICAgICAgICAgICAgICAgLy92aWV3LnN0eWxlLmhlaWdodCA9IFwiXCIgKyBzbWFsbFIgKyBcInB4XCJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNhcnRlc2lhbiBwb2ludCBmcm9tIHRoZSByYWRpdXMgYW5kIGFuZ2xlXG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IHJhZGl1cyAqIE1hdGguY29zKHN0ZXBTaXplICogaW5kZXggKyBzdGVwT2Zmc2V0KSArIGNlbnRlci54O1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSByYWRpdXMgKiBNYXRoLnNpbihzdGVwU2l6ZSAqIGluZGV4ICsgc3RlcE9mZnNldCkgKyBjZW50ZXIueTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVQb3NpdGlvbnMuc2V0KHZpZXcsIFBvaW50KHgsIHkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgcmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICByaW5nLnN0eWxlLndpZHRoID0gXCJcIiArICgyICogcmFkaXVzKSArIFwicHhcIjtcbiAgICAgICAgICAgIHJpbmcuc3R5bGUuaGVpZ2h0ID0gXCJcIiArICgyICogcmFkaXVzKSArIFwicHhcIjtcbiAgICAgICAgICAgIHJpbmcuc3R5bGUuYm9yZGVyID0gXCJsaWdodGdyYXkgc29saWQgMC4zY2hcIjtcbiAgICAgICAgICAgIHJpbmcuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMDAlXCI7XG4gICAgICAgICAgICByaW5nLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgcmluZy5zdHlsZS56SW5kZXggPSBcIi0xMFwiO1xuICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChyaW5nKTtcbiAgICAgICAgICAgIHRoaXMucmluZ0VsZW1lbnRzLmFkZChyaW5nKTtcbiAgICAgICAgICAgIHRoaXMucmluZ1Bvc2l0aW9ucy5zZXQocmluZywgeyB4OiBjZW50ZXIueCwgeTogY2VudGVyLnkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm93IGFyYW5nZSB0aGUgZWRnZXNcbiAgICAgICAgdGhpcy5lZGdlcy5mb3JFYWNoKCh2aWV3LCBlZGdlKSA9PiB7XG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBtaWRkbGUgb2YgdGhlIHR3byBlbmRwdHNcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0WCA9IHRoaXMubm9kZVBvc2l0aW9ucy5nZXQodGhpcy5ub2Rlcy5nZXQoZWRnZS5uKSkueDtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0WSA9IHRoaXMubm9kZVBvc2l0aW9ucy5nZXQodGhpcy5ub2Rlcy5nZXQoZWRnZS5uKSkueTtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZFggPSB0aGlzLm5vZGVQb3NpdGlvbnMuZ2V0KHRoaXMubm9kZXMuZ2V0KGVkZ2UubjEpKS54O1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kWSA9IHRoaXMubm9kZVBvc2l0aW9ucy5nZXQodGhpcy5ub2Rlcy5nZXQoZWRnZS5uMSkpLnk7XG4gICAgICAgICAgICBjb25zdCB4ID0gKGZpcnN0WCArIHNlY29uZFgpIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IHkgPSAoZmlyc3RZICsgc2Vjb25kWSkgLyAyO1xuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKHNlY29uZFkgLSBmaXJzdFksIHNlY29uZFggLSBmaXJzdFgpO1xuICAgICAgICAgICAgdGhpcy5lZGdlUG9zaXRpb25zLnNldCh2aWV3LCB7IHg6IHgsIHk6IHksIGFuZ2xlOiBhbmdsZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVwT2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBkcmF3IHBvc2l0aW9uIG9mIHRoZSBub2RlcyBvbiB0aGUgc2NyZWVuXG4gICAgICogdG8gbWF0Y2ggdGhlIG9mZnNldCBpbiByZXAuIEFzc3VtZXMgYWxsIHZpZXdzIGhhdmUgYSBwb3NpdGlvblxuICAgICAqIHN0b3JlZCBpbiB0aGUgcmVwLiBDYWxsIGFycmFuZ2UoKSBmaXJzdC5cbiAgICAgKiBBbHNvIGFwcGxpZXMgdGhlIHNjYWxlIGZhY3RvciB0byB0aGUgZmluYWwgZHJhdyBwb3NpdGlvbnMsXG4gICAgICogaW52aXNpYmxlIHRvIGV2ZXJ5b25lIGVsc2UuXG4gICAgICovXG4gICAgdXBkYXRlT2Zmc2V0KCkge1xuICAgICAgICBjb25zdCBjZW50ZXIgPSB0aGlzLmNlbnRlcjtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLnNjYWxlO1xuICAgICAgICBmdW5jdGlvbiBhcHBseVNjYWxlKGkpIHtcbiAgICAgICAgICAgIHJldHVybiBQb2ludCgoKGkueCkgLSBjZW50ZXIueCkgKiBzY2FsZSArIGNlbnRlci54LCAoKGkueSkgLSBjZW50ZXIueSkgKiBzY2FsZSArIGNlbnRlci55KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGVQb3NpdGlvbnMuZm9yRWFjaCgocG9zLCB2aWV3KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhZGp1c3RlZCA9IGFwcGx5U2NhbGUoe1xuICAgICAgICAgICAgICAgIHg6IHBvcy54ICsgdGhpcy5vZmZzZXRYLFxuICAgICAgICAgICAgICAgIHk6IHBvcy55ICsgdGhpcy5vZmZzZXRZLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLmxlZnQgPSBcIlwiICsgKGFkanVzdGVkLnggLSAoMC41ICogdmlldy5vZmZzZXRXaWR0aCkpICsgXCJweFwiO1xuICAgICAgICAgICAgdmlldy5zdHlsZS50b3AgPSBcIlwiICsgKGFkanVzdGVkLnkgLSAoMC41ICogdmlldy5vZmZzZXRIZWlnaHQpKSArIFwicHhcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWRnZVBvc2l0aW9ucy5mb3JFYWNoKChwb3MsIHZpZXcpID0+IHtcbiAgICAgICAgICAgIHZpZXcuc2V0QW5nbGUocG9zLmFuZ2xlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmRyYXdFZGdlTGluZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdFBvcyA9IHRoaXMubm9kZVBvc2l0aW9ucy5nZXQodGhpcy5ub2Rlcy5nZXQodmlldy5maXJzdCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZFBvcyA9IHRoaXMubm9kZVBvc2l0aW9ucy5nZXQodGhpcy5ub2Rlcy5nZXQodmlldy5zZWNvbmQpKTtcbiAgICAgICAgICAgICAgICB2aWV3LndpZHRoID0gXCJcIiArIChzY2FsZSAqIE1hdGguaHlwb3Qoc2Vjb25kUG9zLnggLSBmaXJzdFBvcy54LCBzZWNvbmRQb3MueSAtIGZpcnN0UG9zLnkpKSArIFwicHhcIjtcbiAgICAgICAgICAgICAgICB2aWV3LnN0eWxlLmJvcmRlckJvdHRvbSA9IFwiYmxhY2sgMC4xY2ggc29saWRcIjtcbiAgICAgICAgICAgICAgICB2aWV3LnN0eWxlLmJvcmRlclRvcCA9IFwiYmxhY2sgMC4xY2ggc29saWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZXcud2lkdGggPSBcImZpdC1jb250ZW50XCI7XG4gICAgICAgICAgICAgICAgdmlldy5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICB2aWV3LnN0eWxlLmJvcmRlclRvcCA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYWRqdXN0ZWQgPSBhcHBseVNjYWxlKHtcbiAgICAgICAgICAgICAgICB4OiBwb3MueCArIHRoaXMub2Zmc2V0WCxcbiAgICAgICAgICAgICAgICB5OiBwb3MueSArIHRoaXMub2Zmc2V0WSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmlldy5zdHlsZS5sZWZ0ID0gXCJcIiArIChhZGp1c3RlZC54IC0gKDAuNSAqIHZpZXcub2Zmc2V0V2lkdGgpKSArIFwicHhcIjtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUudG9wID0gXCJcIiArIChhZGp1c3RlZC55IC0gKDAuNSAqIHZpZXcub2Zmc2V0SGVpZ2h0KSkgKyBcInB4XCI7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBPdmVybGF5IGVsZW1lbnRzIGNoYW5nZSBzaXplIHdpdGggc2NhbGVcbiAgICAgICAgdGhpcy5yaW5nUG9zaXRpb25zLmZvckVhY2goKHBvcywgdmlldykgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWRqdXN0ZWRQb3MgPSBhcHBseVNjYWxlKHtcbiAgICAgICAgICAgICAgICB4OiBwb3MueCArIHRoaXMub2Zmc2V0WCAtICgwLjUgKiB2aWV3Lm9mZnNldFdpZHRoKSxcbiAgICAgICAgICAgICAgICB5OiBwb3MueSArIHRoaXMub2Zmc2V0WSAtICgwLjUgKiB2aWV3Lm9mZnNldEhlaWdodCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUubGVmdCA9IFwiXCIgKyBhZGp1c3RlZFBvcy54ICsgXCJweFwiO1xuICAgICAgICAgICAgdmlldy5zdHlsZS50b3AgPSBcIlwiICsgYWRqdXN0ZWRQb3MueSArIFwicHhcIjtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUuc2NhbGUgPSBcIlwiICsgdGhpcy5zY2FsZTtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gXCIwIDBcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZXhwbGFuYXRpb25Qb3B1cHMuZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmlldyA9IHZhbC5lO1xuICAgICAgICAgICAgY29uc3QgcG9zID0gdmFsLnBvcztcbiAgICAgICAgICAgIGNvbnN0IGFkanVzdGVkID0gYXBwbHlTY2FsZSh7XG4gICAgICAgICAgICAgICAgeDogcG9zLnggKyB0aGlzLm9mZnNldFgsXG4gICAgICAgICAgICAgICAgeTogcG9zLnkgKyB0aGlzLm9mZnNldFksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUubGVmdCA9IFwiXCIgKyAoYWRqdXN0ZWQueCAtICgwLjUgKiB2aWV3Lm9mZnNldFdpZHRoKSkgKyBcInB4XCI7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLnRvcCA9IFwiXCIgKyAoYWRqdXN0ZWQueSAtICgwLjUgKiB2aWV3Lm9mZnNldEhlaWdodCkpICsgXCJweFwiO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZXBPaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNYXAgZnJvbSByZWxhdGl2ZSBzY3JlZW4gY29vcmRpbmF0ZXMgKHdoZXJlIHRsIG9mIHRoaXMgdmlldyBpcyAoMCwwKSlcbiAgICAgKiB0byB0aGUgaW50ZXJuYWwgY29vcmRpbmF0ZSBzeXN0ZW0gd2UncmUgdXNpbmcuXG4gICAgICovXG4gICAgZ2V0SW50ZXJuYWxQb3MocCkge1xuICAgICAgICBjb25zdCBjZW50ZXIgPSB0aGlzLmNlbnRlcjtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLnNjYWxlO1xuICAgICAgICAvL1RPRE86IFZlcmlmeSB0aGlzIGlzIGNvcnJlY3RcbiAgICAgICAgcmV0dXJuIFBvaW50KChwLnggLSBjZW50ZXIueCkgLyBzY2FsZSArIGNlbnRlci54LCAocC55IC0gY2VudGVyLnkpIC8gc2NhbGUgKyBjZW50ZXIueSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlYWN0IHRvIGFuIGVkZ2UgYmVpbmcgY2xpY2tlZC5cbiAgICAgKiBAcGFyYW0gdmlldyBJbiB0aGlzIHZpZXdcbiAgICAgKiBAcGFyYW0gZXZlbnQgVGhlIGNsaWNrIGV2ZW50XG4gICAgICovXG4gICAgZWRnZUNsaWNrZWQodmlldywgZXZlbnQpIHtcbiAgICAgICAgLy8gVE9ETzogRG9uJ3QgYWxsb3cgZHVwbGlhdGUgZXhwbGFuYXRpb24gcG9wdXBzXG4gICAgICAgIGlmICh2aWV3LmVkZ2UgaW5zdGFuY2VvZiBBcmd1bWVudF8xLkFyZ3VtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBwb3B1cCA9IG5ldyBFeHBsYW5hdGlvblBvcHVwXzEuRXhwbGFuYXRpb25Qb3B1cCh2aWV3LmVkZ2UsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHBvcHVwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZXhwbGFuYXRpb25Qb3B1cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZXhwbGFuYXRpb25Qb3B1cHNbaV0uZSA9PT0gcG9wdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwbGFuYXRpb25Qb3B1cHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgcmVhbHRpdmVYID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0aXZlWSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIC8vVE9ETzogVGhlIHBvc2l0aW9uIGlzbid0IGNvcnJlY3RcbiAgICAgICAgICAgIC8vVE9ETzogQWxnb3JpdGhtIGZvciBwaWNraW5nIHdoZXJlIHdlIHNob3VsZCBwdXQgdGhlIHBvcHVwIHNvIGl0IHN0YXlzIG91dFxuICAgICAgICAgICAgLy8gb2YgdGhlIHdheSBvZiB0aGUgZ3JhcGhcbiAgICAgICAgICAgIHRoaXMuZXhwbGFuYXRpb25Qb3B1cHMucHVzaCh7XG4gICAgICAgICAgICAgICAgZTogcG9wdXAsXG4gICAgICAgICAgICAgICAgcG9zOiB0aGlzLmdldEludGVybmFsUG9zKFBvaW50KHJlYWx0aXZlWCwgcmVsYXRpdmVZKSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBvcHVwLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgdGhpcy5hcHBlbmQocG9wdXApO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVPZmZzZXQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXBPaygpIHtcbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5yb290Tm9kZXMuc2l6ZSA+IDApO1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KShHcmFwaE1pbmlwdWxhdG9yXzEuR3JhcGhNaW5pcHVsYXRvci5pc0Nvbm5lY3RlZCh0aGlzLmdyYXBoKSwgXCJHcmFwaCBub3QgY29ubmVjdGVkXCIpO1xuICAgIH1cbiAgICBncmFwaDtcbiAgICBub2RlcztcbiAgICAvLyBUaGUgUG9zaXRpb24gb2YgdGhlIGNlbnRlciBvZiB0aGUgbm9kZS5cbiAgICBub2RlUG9zaXRpb25zO1xuICAgIGVkZ2VzO1xuICAgIGVkZ2VQb3NpdGlvbnM7XG4gICAgLy8gQW10IHRvIGFkZCB0byBsZWZ0IGNvb3JkaW5hdGVcbiAgICBvZmZzZXRYO1xuICAgIC8vIEFkZGVkIHRvIHRvcCBjb29yZGluYXRlIG9mIG5vZGVzXG4gICAgb2Zmc2V0WTtcbiAgICAvLyBpZiB0aGUgbW91c2UgaXMgZG93blxuICAgIG1vdXNlRG93biA9IGZhbHNlO1xuICAgIHRvdWNoRG93biA9IGZhbHNlO1xuICAgIHNjYWxlID0gMTtcbiAgICByb290Tm9kZXM7XG4gICAgcmluZ0VsZW1lbnRzO1xuICAgIHJpbmdQb3NpdGlvbnM7XG4gICAgLyoqXG4gICAgICogUG9zaXRpb24gb2YgdG9wIGxlZnQgb2YgcG9wdXBcbiAgICAgKi9cbiAgICBleHBsYW5hdGlvblBvcHVwcztcbiAgICBnZXN0dXJlUmVjb2duaXplcjtcbiAgICAvLyBJZiB0aGUgZ3JhcGggc2hvdWxkIGRyYXcgYXJndW1lbnQgbm9kZXMuXG4gICAgc2hvd0FyZ3VtZW50cyA9IGZhbHNlO1xuICAgIGRyYXdFZGdlTGluZXMgPSBmYWxzZTtcbn1cbmV4cG9ydHMuV2ViR3JhcGhWaWV3ID0gV2ViR3JhcGhWaWV3O1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwid2ViLWdyYXBodmlld1wiLCBXZWJHcmFwaFZpZXcsIHsgZXh0ZW5kczogXCJkaXZcIiB9KTtcbmZ1bmN0aW9uIFBvaW50KHgsIHksIGFuZ2xlID0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKGFuZ2xlID09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5LFxuICAgICAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IHgsXG4gICAgICAgIHk6IHksXG4gICAgICAgIGFuZ2xlOiBhbmdsZSxcbiAgICB9O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlID0gdm9pZCAwO1xuLyoqXG4gKiBQYXJzZXMgaHVtYW4gd3JpdHRlbiwgdXRmLTggdHlwZSBtYXRoIGV4cHJlc3Npb25zXG4gKiBpbnRvIGFjdHVhbCBtYXRoLlxuICogQHBhcmFtIGlucHV0XG4gKi9cbmZ1bmN0aW9uIHBhcnNlKGlucHV0KSB7XG4gICAgY29uc3Qgb3V0ID0gW107XG4gICAgY29uc29sZS5sb2coXCJJbnB1dDogXCIgKyBpbnB1dCk7XG4gICAgY29uc3QgZmluZEV4cHJlc3Npb25zID0gL1swLTlhLXpBLVpdKy87XG4gICAgY29uc3QgZmluZE9wZXJhdG9ycyA9IC9bXFwrXFwtXFwqXFwvXFxeXS87XG4gICAgY29uc29sZS5sb2coZmluZEV4cHJlc3Npb25zKTtcbiAgICBjb25zdCBzcGxpdCA9IGlucHV0LnNwbGl0KGZpbmRFeHByZXNzaW9ucyk7XG4gICAgY29uc29sZS5sb2coc3BsaXQpO1xuICAgIHJldHVybiBvdXQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG5mdW5jdGlvbiBwYXJzZUV4cHJlc3Npb24oaW5wdXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWRcIik7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaW5NYXRoQmxvY2sgPSBleHBvcnRzLmluTWF0aCA9IGV4cG9ydHMuaW5Sb3cgPSBleHBvcnRzLmluUGFyZW4gPSB2b2lkIDA7XG4vKipcbiAqIFdyYXBzIHRoZSBnaXZlbiBtYXRobWwgc3RyaW5nIGluIG1hdGhtbCBwYXJlbnRoYXNlcy5cbiAqIEBwYXJhbSBzdHJcbiAqL1xuZnVuY3Rpb24gaW5QYXJlbihzdHIpIHtcbiAgICByZXR1cm4gXCI8bW8+KDwvbW8+XCIgKyBzdHIgKyBcIjxtbz4pPC9tbz5cIjtcbn1cbmV4cG9ydHMuaW5QYXJlbiA9IGluUGFyZW47XG4vKipcbiAqIFB1dHMgdGhlIGdpdmVuIG1hdGhtbCBleHByZXNzaW9uIGluIGEgcm93IHNvIHRoYXRcbiAqIGl0IGRvZXNuJ3QgZ2V0IGRpdmlkZWQgYnkgbWF0aGpheC5cbiAqIEBwYXJhbSBzdHJcbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIGluUm93KHN0cikge1xuICAgIHJldHVybiBcIjxtcm93PlwiICsgc3RyICsgXCI8L21yb3c+XCI7XG59XG5leHBvcnRzLmluUm93ID0gaW5Sb3c7XG4vKipcbiAqIFdyYXBzIHRoZSBnaXZlbiBzdHJpbmcgaW4gPG1hdGg+PC9tYXRoPlxuICogQHBhcmFtIHN0clxuICovXG5mdW5jdGlvbiBpbk1hdGgoc3RyKSB7XG4gICAgcmV0dXJuIFwiPG1hdGg+XCIgKyBzdHIgKyBcIjwvbWF0aD5cIjtcbn1cbmV4cG9ydHMuaW5NYXRoID0gaW5NYXRoO1xuLyoqXG4gKiBXcmFwcyB0aGUgZ2l2ZW4gc3RyaW5nIGluIDxtYXRoIGRpc3BsYXk9J2Jsb2NrJz48L21hdGg+XG4gKiBAcGFyYW0gc3RyXG4gKi9cbmZ1bmN0aW9uIGluTWF0aEJsb2NrKHN0cikge1xuICAgIHJldHVybiBcIjxtYXRoIGRpc3BsYXk9J2Jsb2NrJz5cIiArIHN0ciArIFwiPC9tYXRoPlwiO1xufVxuZXhwb3J0cy5pbk1hdGhCbG9jayA9IGluTWF0aEJsb2NrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFzc2VydCA9IHZvaWQgMDtcbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBleHByZXNzaW9uIGV2YWx1YXRlZCB0byB0cnVlLiBJZiBub3QsIHRocm93cyBlcnJvclxuICogd2l0aCB0aGUgbWVzc2FnZSBnaXZlbi5cbiAqIEBwYXJhbSBtc2cgRGlzcGxheWVkIGlmIHRoZSBleHByZXNzaW9uIGlzIGZhbHNlLiBEZWZhdWx0cyB0byBcIkZhaWxlZCBBc3NlcnRcIlxuICovXG5mdW5jdGlvbiBhc3NlcnQoZXhwLCBtc2cgPSBcIkZhaWxlZCBhc3NlcnRcIikge1xuICAgIGlmICghZXhwKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbn1cbmV4cG9ydHMuYXNzZXJ0ID0gYXNzZXJ0O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUHJpbWFyeVBhZ2VMb2FkZXJfMSA9IHJlcXVpcmUoXCIuL1ByaW1hcnlQYWdlTG9hZGVyXCIpO1xuY29uc3QgRXhwcmVzc2lvblRlc3RQYWdlTG9hZGVyXzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uVGVzdFBhZ2VMb2FkZXJcIik7XG4vKipcbiAqIFBvcHVsYXRlIGh0bWwgZWxlbWVudHMgYnkgdGhlaXIgY2xhc3MuXG4gKi9cbmNvbnN0IGNsYXNzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmNsYXNzTGlzdDtcbmlmIChjbGFzc2VzLmNvbnRhaW5zKCdleHByZXNzaW9uVGVzdFBhZ2UnKSkge1xuICAgICgwLCBFeHByZXNzaW9uVGVzdFBhZ2VMb2FkZXJfMS5sb2FkRXhwcmVzc2lvbnNUZXN0UGFnZSkoKTtcbn1cbmVsc2UgaWYgKGNsYXNzZXMuY29udGFpbnMoJ3ByaW1hcnlJbnRlZ3JhdG9yJykpIHtcbiAgICAoMCwgUHJpbWFyeVBhZ2VMb2FkZXJfMS5sb2FkUHJpbWFyeVBhZ2UpKCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=