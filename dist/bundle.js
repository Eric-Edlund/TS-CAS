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
const USubstitution_1 = __webpack_require__(/*! ./mathlib/derivations/simplifications/USubstitution */ "./mathlib/derivations/simplifications/USubstitution.ts");
const PowerRule_1 = __webpack_require__(/*! ./mathlib/derivations/simplifications/PowerRule */ "./mathlib/derivations/simplifications/PowerRule.ts");
const PullConstantsFromDerivatives_1 = __webpack_require__(/*! ./mathlib/derivations/simplifications/PullConstantsFromDerivatives */ "./mathlib/derivations/simplifications/PullConstantsFromDerivatives.ts");
const Derivative_1 = __webpack_require__(/*! ./mathlib/expressions/Derivative */ "./mathlib/expressions/Derivative.ts");
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new CombineCommonTermsAddition_1.CombineCommonTermsAddition());
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new CombineCommonTermsMultiplication_1.CombineCommonTermsMultiplication());
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new EvaluateSums_1.EvaluateSums());
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new OrderSums_1.OrderSums());
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new ReduceReducibles_1.ReduceReducibles());
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new SumCoefficientsOfAddedTerms_1.SumCoefficientsOfAddedTerms());
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new USubstitution_1.USubstitution());
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new PowerRule_1.PowerRule());
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new PullConstantsFromDerivatives_1.PullConstantsFromDerivatives());
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
    const otherRoot = Derivative_1.Derivative.of((0, ConvenientExpressions_1.product)((0, ConvenientExpressions_1.num)(1), ConvenientExpressions_1.x), ConvenientExpressions_1.x);
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
            && exp.exp instanceof Exponent_1.Exponent
            && exp.exp.base === exp.relativeTo
            && exp.exp.power.isConstant;
    }
    applyImpl(exp) {
        const d = exp;
        const exponent = d.exp;
        const result = (0, ConvenientExpressions_1.product)(exponent.power, Exponent_1.Exponent.of(exponent.base, (0, ConvenientExpressions_1.num)(exponent.power.value - 1)));
        return (0, ThingsThatShouldBeInTheStdLib_1.setOf)(new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(exp), {
            n: exp,
            r: Relationship_1.Relationship.Equal,
            n1: result
        }, "Power rule"));
    }
}
exports.PowerRule = PowerRule;


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
exports.setOf = void 0;
function setOf(...arr) {
    const out = new Set();
    arr.forEach(e => out.add(e));
    return out;
}
exports.setOf = setOf;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwrQkFBK0I7QUFDL0IsZ0NBQWdDLG1CQUFPLENBQUMsMkVBQWlDO0FBQ3pFLHFCQUFxQixtQkFBTyxDQUFDLDZFQUFrQztBQUMvRCxtQkFBbUIsbUJBQU8sQ0FBQyx5RUFBZ0M7QUFDM0QsbUJBQW1CLG1CQUFPLENBQUMseUVBQWdDO0FBQzNELG1CQUFtQixtQkFBTyxDQUFDLHlFQUFnQztBQUMzRCwyQkFBMkIsbUJBQU8sQ0FBQyx1RkFBdUM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjs7Ozs7Ozs7Ozs7QUNqRWxCO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHVCQUF1QjtBQUN2QixnQ0FBZ0MsbUJBQU8sQ0FBQywyRUFBaUM7QUFDekUsaUJBQWlCLG1CQUFPLENBQUMsaUVBQTRCO0FBQ3JELHVCQUF1QixtQkFBTyxDQUFDLCtFQUFtQztBQUNsRSxnQkFBZ0IsbUJBQU8sQ0FBQywyQ0FBaUI7QUFDekMsdUJBQXVCLG1CQUFPLENBQUMseURBQXdCO0FBQ3ZELGtCQUFrQixtQkFBTyxDQUFDLHVFQUErQjtBQUN6RCxnREFBZ0QsbUJBQU8sQ0FBQyxtSUFBNkQ7QUFDckgscUNBQXFDLG1CQUFPLENBQUMsNklBQWtFO0FBQy9HLDJDQUEyQyxtQkFBTyxDQUFDLHlKQUF3RTtBQUMzSCx1QkFBdUIsbUJBQU8sQ0FBQyxpSEFBb0Q7QUFDbkYsb0JBQW9CLG1CQUFPLENBQUMsMkdBQWlEO0FBQzdFLDJCQUEyQixtQkFBTyxDQUFDLHlIQUF3RDtBQUMzRixxQkFBcUIsbUJBQU8sQ0FBQyw2RUFBa0M7QUFDL0QsbUNBQW1DLG1CQUFPLENBQUMseUdBQWdEO0FBQzNGLGdDQUFnQyxtQkFBTyxDQUFDLG1IQUFxRDtBQUM3Riw0QkFBNEIsbUJBQU8sQ0FBQywyR0FBaUQ7QUFDckYsbUJBQW1CLG1CQUFPLENBQUMseUVBQWdDO0FBQzNELHNDQUFzQyxtQkFBTyxDQUFDLCtJQUFtRTtBQUNqSCx3QkFBd0IsbUJBQU8sQ0FBQyxtSEFBcUQ7QUFDckYsb0JBQW9CLG1CQUFPLENBQUMsMkdBQWlEO0FBQzdFLHVDQUF1QyxtQkFBTyxDQUFDLGlKQUFvRTtBQUNuSCxxQkFBcUIsbUJBQU8sQ0FBQyw2RUFBa0M7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qjs7Ozs7Ozs7Ozs7QUM1RVY7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qjs7Ozs7Ozs7Ozs7QUN0RGpCO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdCQUFnQjtBQUNoQixpQkFBaUIsbUJBQU8sQ0FBQywrQ0FBZTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7Ozs7Ozs7Ozs7QUMvQ0g7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsU0FBUyxHQUFHLFNBQVMsR0FBRyxTQUFTLEdBQUcsU0FBUyxHQUFHLFNBQVMsR0FBRyxTQUFTLEdBQUcsU0FBUyxHQUFHLFNBQVMsR0FBRyw2QkFBNkIsR0FBRyxvQkFBb0IsR0FBRywyQkFBMkIsR0FBRyxXQUFXLEdBQUcsU0FBUyxHQUFHLFdBQVcsR0FBRyxnQkFBZ0IsR0FBRyxlQUFlLEdBQUcsaUJBQWlCLEdBQUcsY0FBYyxHQUFHLHNCQUFzQixHQUFHLGdCQUFnQixHQUFHLG9CQUFvQixHQUFHLDJCQUEyQixHQUFHLGtCQUFrQixHQUFHLFdBQVcsR0FBRyxnQkFBZ0I7QUFDM2Isa0JBQWtCLG1CQUFPLENBQUMsK0RBQXVCO0FBQ2pELG1CQUFtQixtQkFBTyxDQUFDLGlFQUF3QjtBQUNuRCxtQkFBbUIsbUJBQU8sQ0FBQyxpRUFBd0I7QUFDbkQsa0JBQWtCLG1CQUFPLENBQUMsK0RBQXVCO0FBQ2pELGNBQWMsbUJBQU8sQ0FBQyx1REFBbUI7QUFDekMsbUJBQW1CLG1CQUFPLENBQUMsaUVBQXdCO0FBQ25ELG1CQUFtQixtQkFBTyxDQUFDLHlDQUFZO0FBQ3ZDLHVCQUF1QixtQkFBTyxDQUFDLGlEQUFnQjtBQUMvQyxpQkFBaUIsbUJBQU8sQ0FBQywrQ0FBZTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsU0FBUztBQUNULFNBQVM7QUFDVCxTQUFTO0FBQ1QsU0FBUztBQUNULFNBQVM7QUFDVCxTQUFTO0FBQ1QsU0FBUzs7Ozs7Ozs7Ozs7QUM5T0k7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUJBQWlCLEdBQUcsb0JBQW9CLEdBQUcsYUFBYTtBQUN4RCxtQkFBbUIsbUJBQU8sQ0FBQyx5Q0FBWTtBQUN2QyxpQkFBaUIsbUJBQU8sQ0FBQywrQ0FBZTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwrQkFBK0I7QUFDekQsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsT0FBTztBQUMxRDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekIsNEJBQTRCO0FBQzVCLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGdCQUFnQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDBCQUEwQjtBQUNyRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsbUNBQW1DO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsdURBQXVELGdCQUFnQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDN1lhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3JCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBbUIsR0FBRyxjQUFjLEdBQUcsYUFBYSxHQUFHLGVBQWU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1COzs7Ozs7Ozs7OztBQ3BDTjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7Ozs7Ozs7Ozs7O0FDUkE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7Ozs7Ozs7VUNaZDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDRCQUE0QixtQkFBTyxDQUFDLG1EQUFxQjtBQUN6RCxtQ0FBbUMsbUJBQU8sQ0FBQyxpRUFBNEI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vRXhwcmVzc2lvblRlc3RQYWdlTG9hZGVyLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9QcmltYXJ5UGFnZUxvYWRlci50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vVG91Y2hHZXN0dXJlUmVjb2duaXplci50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9Bcmd1bWVudC50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9Db252ZW5pZW50RXhwcmVzc2lvbnMudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvR3JhcGgudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvR3JhcGhNaW5pcHVsYXRvci50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9SZWxhdGlvbnNoaXAudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvRGVyaXZlci50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL1JlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZS50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9hbGdlYnJhL0RpdmlkZU9uQm90aFNpZGVzLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL2FsZ2VicmEvU3VidHJhY3RGcm9tQm90aFNpZGVzLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3JlY3Vyc2lvbi50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvQ29tYmluZUNvbW1vblRlcm1zQWRkaXRpb24udHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL0NvbWJpbmVDb21tb25UZXJtc011bHRpcGxpY2F0aW9uLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9FdmFsdWF0ZVN1bXMudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL09yZGVyU3Vtcy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvUG93ZXJSdWxlLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9QdWxsQ29uc3RhbnRzRnJvbURlcml2YXRpdmVzLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9SZWR1Y2VSZWR1Y2libGVzLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9TdW1Db2VmZmljaWVudHNPZkFkZGVkVGVybXMudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL1VTdWJzdGl0dXRpb24udHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvRGVyaXZhdGl2ZS50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9leHByZXNzaW9ucy9FeHBvbmVudC50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9leHByZXNzaW9ucy9FeHByZXNzaW9uLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2V4cHJlc3Npb25zL0ZyYWN0aW9uLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2V4cHJlc3Npb25zL0ludGVnZXIudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvSW50ZWdyYWwudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvTWF0aEVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvUHJvZHVjdC50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9leHByZXNzaW9ucy9TdW0udHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvVmFyaWFibGUudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdWllbGVtZW50cy9Bcmd1bWVudE5vZGVWaWV3LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3VpZWxlbWVudHMvRWRnZVZpZXcudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdWllbGVtZW50cy9FZGl0YWJsZU1hdGhWaWV3LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3VpZWxlbWVudHMvRXhwbGFuYXRpb25Qb3B1cC50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi91aWVsZW1lbnRzL0V4cHJlc3Npb25Ob2RlVmlldy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi91aWVsZW1lbnRzL0dyYXBoTm9kZVZpZXcudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdWllbGVtZW50cy9VSVByZWZlcmVuY2VzLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3VpZWxlbWVudHMvV2ViR3JhcGhWaWV3LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3VzZXJpbnB1dC9QYXJzZXIudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdXRpbC9NYXRoTUxIZWxwZXJzLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3V0aWwvVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWIudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdXRpbC9hc3NlcnQudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubG9hZEV4cHJlc3Npb25zVGVzdFBhZ2UgPSB2b2lkIDA7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgRGVyaXZhdGl2ZV8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9leHByZXNzaW9ucy9EZXJpdmF0aXZlXCIpO1xuY29uc3QgRXhwb25lbnRfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZXhwcmVzc2lvbnMvRXhwb25lbnRcIik7XG5jb25zdCBGcmFjdGlvbl8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9leHByZXNzaW9ucy9GcmFjdGlvblwiKTtcbmNvbnN0IEludGVncmFsXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2V4cHJlc3Npb25zL0ludGVncmFsXCIpO1xuY29uc3QgRWRpdGFibGVNYXRoVmlld18xID0gcmVxdWlyZShcIi4vbWF0aGxpYi91aWVsZW1lbnRzL0VkaXRhYmxlTWF0aFZpZXdcIik7XG4vKipcbiAqIENhbGxlZCBhZnRlciB0aGUgZG9tIGlzIGxvYWRlZC5cbiAqIFBvcHVsYXRlcyB0aGUgYm9keSBlbGVtZW50IG9mIHRoZSBkb2N1bWVudFxuICogd2l0aCB0aGUgdGVzdCBleHByZXNzaW9ucyBwYWdlXG4gKi9cbmZ1bmN0aW9uIGxvYWRFeHByZXNzaW9uc1Rlc3RQYWdlKCkge1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICAgIGZ1bmN0aW9uIHAoY29udGVudCkge1xuICAgICAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBlLmlubmVyVGV4dCA9IGNvbnRlbnQ7XG4gICAgICAgIHBhZ2UuYXBwZW5kKGUpO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdmlldyhleHApIHtcbiAgICAgICAgY29uc3QgZSA9IG5ldyBFZGl0YWJsZU1hdGhWaWV3XzEuRWRpdGFibGVNYXRoVmlldygpO1xuICAgICAgICBlLnZhbHVlID0gZXhwO1xuICAgICAgICBwYWdlLmFwcGVuZChlKTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIHAoXCJUaGUgc3VtIG9mIGEsIGEsIGFuZCBhXCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bSkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSkpO1xuICAgIHAoXCJJbnRlZ3JhbCBvZiBhIG92ZXIgYiB3aXRoIHJlc3BlY3QgdG8gY1wiKTtcbiAgICB2aWV3KEludGVncmFsXzEuSW50ZWdyYWwub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5iKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYykpO1xuICAgIHAoXCJJbnRlZ3JhbCBvZiAoYSBvdmVyIGEpIG92ZXIgYiB3aXRoIHJlc3BlY3QgdG8gY1wiKTtcbiAgICB2aWV3KEludGVncmFsXzEuSW50ZWdyYWwub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5iKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYykpO1xuICAgIHAoXCJJbnRlZ3JhbCBvZiAoKGEgb3ZlciBhKSBvdmVyIGEpIG92ZXIgYiB3aXRoIHJlc3BlY3QgdG8gY1wiKTtcbiAgICB2aWV3KEludGVncmFsXzEuSW50ZWdyYWwub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5iKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYykpO1xuICAgIHAoXCJJbnRlZ3JhbCBvZiAoKChhIG92ZXIgYSkgb3ZlciBhKSBvdmVyIGEpIG92ZXIgYiB3aXRoIHJlc3BlY3QgdG8gY1wiKTtcbiAgICB2aWV3KEludGVncmFsXzEuSW50ZWdyYWwub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5iKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYykpO1xuICAgIHAoXCJJbnRlZ3JhbCBvZiAoKCgoYSBvdmVyIGEpIG92ZXIgYSkgb3ZlciBhKSBvdmVyIGEpIG92ZXIgYiB3aXRoIHJlc3BlY3QgdG8gY1wiKTtcbiAgICB2aWV3KEludGVncmFsXzEuSW50ZWdyYWwub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5iKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYykpO1xuICAgIHAoXCJcIik7XG4gICAgdmlldygoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuaW50KShGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5uZWdhdGl2ZSkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYiksIEV4cG9uZW50XzEuRXhwb25lbnQub2YoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bSkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSksIEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSksICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDIpKSkpLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdCkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMiksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCkpO1xuICAgIHAoXCJQcm9kdWN0IG9mIHggYW5kIHlcIik7XG4gICAgdmlldygoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdCkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueSkpO1xuICAgIHAoXCJQcm9kdWN0IG9mICh4LTEpLCAtMSBhbmQgeVwiKTtcbiAgICB2aWV3KCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5wcm9kdWN0KSgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtKShDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54LCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubmVnYXRpdmUpKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDEpKSksICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKC0xKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueSkpO1xuICAgIHAoXCJOZWdhdGlvbiBvZiB4IChSZXBlZCBhcyB0aGUgcHJvcGR1Y3Qgb2YgLTEgYW5kIHgpXCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm5lZ2F0aXZlKShDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54KSk7XG4gICAgcChcIlN1bSBvZiB4IGFuZCAteFwiKTtcbiAgICB2aWV3KCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKENvbnZlbmllbnRFeHByZXNzaW9uc18xLngsICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5uZWdhdGl2ZSkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCkpKTtcbiAgICBwKFwiU3VtIG9mIC14IGFuZCB4XCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bSkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm5lZ2F0aXZlKShDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54KSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCkpO1xuICAgIHAoXCJEZXJpdmF0aXZlIG9mIHRoZSBzcXVhcmUgb2YgeCB3aXRoIHJlc3BlY3QgdG8geFwiKTtcbiAgICB2aWV3KERlcml2YXRpdmVfMS5EZXJpdmF0aXZlLm9mKEV4cG9uZW50XzEuRXhwb25lbnQub2YoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCwgKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMikpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54KSk7XG4gICAgcChcIkRlcml2YXRpdmUgKCh4XjIpIC0gMikgd2l0aCByZXNwZWN0IHRvIHhcIik7XG4gICAgdmlldyhEZXJpdmF0aXZlXzEuRGVyaXZhdGl2ZS5vZihFeHBvbmVudF8xLkV4cG9uZW50Lm9mKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKENvbnZlbmllbnRFeHByZXNzaW9uc18xLngsICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKC0yKSksICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDIpKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCkpO1xuICAgIHAoXCJcIik7XG4gICAgdmlldygoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgxKSk7XG4gICAgcChcIlwiKTtcbiAgICB2aWV3KCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDEpKTtcbiAgICBwKFwiXCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSkpO1xuICAgIHAoXCJcIik7XG4gICAgdmlldygoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgxKSk7XG59XG5leHBvcnRzLmxvYWRFeHByZXNzaW9uc1Rlc3RQYWdlID0gbG9hZEV4cHJlc3Npb25zVGVzdFBhZ2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubG9hZFByaW1hcnlQYWdlID0gdm9pZCAwO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IFBhcnNlcl8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi91c2VyaW5wdXQvUGFyc2VyXCIpO1xuY29uc3QgV2ViR3JhcGhWaWV3XzEgPSByZXF1aXJlKFwiLi9tYXRobGliL3VpZWxlbWVudHMvV2ViR3JhcGhWaWV3XCIpO1xuY29uc3QgR3JhcGhfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvR3JhcGhcIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgRGVyaXZlcl8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9kZXJpdmF0aW9ucy9EZXJpdmVyXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9kZXJpdmF0aW9ucy9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuY29uc3QgQ29tYmluZUNvbW1vblRlcm1zQWRkaXRpb25fMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL0NvbWJpbmVDb21tb25UZXJtc0FkZGl0aW9uXCIpO1xuY29uc3QgQ29tYmluZUNvbW1vblRlcm1zTXVsdGlwbGljYXRpb25fMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL0NvbWJpbmVDb21tb25UZXJtc011bHRpcGxpY2F0aW9uXCIpO1xuY29uc3QgRXZhbHVhdGVTdW1zXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9FdmFsdWF0ZVN1bXNcIik7XG5jb25zdCBPcmRlclN1bXNfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL09yZGVyU3Vtc1wiKTtcbmNvbnN0IFJlZHVjZVJlZHVjaWJsZXNfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL1JlZHVjZVJlZHVjaWJsZXNcIik7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2V4cHJlc3Npb25zL0V4cHJlc3Npb25cIik7XG5jb25zdCBSZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZGVyaXZhdGlvbnMvUmVsYXRpb25hbERlcml2YXRpb25SdWxlXCIpO1xuY29uc3QgU3VidHJhY3RGcm9tQm90aFNpZGVzXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL2FsZ2VicmEvU3VidHJhY3RGcm9tQm90aFNpZGVzXCIpO1xuY29uc3QgRGl2aWRlT25Cb3RoU2lkZXNfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZGVyaXZhdGlvbnMvYWxnZWJyYS9EaXZpZGVPbkJvdGhTaWRlc1wiKTtcbmNvbnN0IFZhcmlhYmxlXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2V4cHJlc3Npb25zL1ZhcmlhYmxlXCIpO1xuY29uc3QgU3VtQ29lZmZpY2llbnRzT2ZBZGRlZFRlcm1zXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9TdW1Db2VmZmljaWVudHNPZkFkZGVkVGVybXNcIik7XG5jb25zdCBVU3Vic3RpdHV0aW9uXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9VU3Vic3RpdHV0aW9uXCIpO1xuY29uc3QgUG93ZXJSdWxlXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9Qb3dlclJ1bGVcIik7XG5jb25zdCBQdWxsQ29uc3RhbnRzRnJvbURlcml2YXRpdmVzXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9QdWxsQ29uc3RhbnRzRnJvbURlcml2YXRpdmVzXCIpO1xuY29uc3QgRGVyaXZhdGl2ZV8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9leHByZXNzaW9ucy9EZXJpdmF0aXZlXCIpO1xuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUucnVsZXMuYWRkKG5ldyBDb21iaW5lQ29tbW9uVGVybXNBZGRpdGlvbl8xLkNvbWJpbmVDb21tb25UZXJtc0FkZGl0aW9uKCkpO1xuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUucnVsZXMuYWRkKG5ldyBDb21iaW5lQ29tbW9uVGVybXNNdWx0aXBsaWNhdGlvbl8xLkNvbWJpbmVDb21tb25UZXJtc011bHRpcGxpY2F0aW9uKCkpO1xuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUucnVsZXMuYWRkKG5ldyBFdmFsdWF0ZVN1bXNfMS5FdmFsdWF0ZVN1bXMoKSk7XG5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZS5ydWxlcy5hZGQobmV3IE9yZGVyU3Vtc18xLk9yZGVyU3VtcygpKTtcbk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlLnJ1bGVzLmFkZChuZXcgUmVkdWNlUmVkdWNpYmxlc18xLlJlZHVjZVJlZHVjaWJsZXMoKSk7XG5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZS5ydWxlcy5hZGQobmV3IFN1bUNvZWZmaWNpZW50c09mQWRkZWRUZXJtc18xLlN1bUNvZWZmaWNpZW50c09mQWRkZWRUZXJtcygpKTtcbk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlLnJ1bGVzLmFkZChuZXcgVVN1YnN0aXR1dGlvbl8xLlVTdWJzdGl0dXRpb24oKSk7XG5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZS5ydWxlcy5hZGQobmV3IFBvd2VyUnVsZV8xLlBvd2VyUnVsZSgpKTtcbk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlLnJ1bGVzLmFkZChuZXcgUHVsbENvbnN0YW50c0Zyb21EZXJpdmF0aXZlc18xLlB1bGxDb25zdGFudHNGcm9tRGVyaXZhdGl2ZXMoKSk7XG5SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGVfMS5SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGUucnVsZXMuYWRkKG5ldyBTdWJ0cmFjdEZyb21Cb3RoU2lkZXNfMS5TdWJ0cmFjdEZyb21Cb3RoU2lkZXMoKSk7XG5SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGVfMS5SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGUucnVsZXMuYWRkKG5ldyBEaXZpZGVPbkJvdGhTaWRlc18xLkRpdmlkZU9uQm90aFNpZGVzKCkpO1xuLyoqXG4gKiBDYWxsZWQgYWZ0ZXIgRE9NIGlzIGxvYWRlZC5cbiAqIFN1YnN0aXR1dGVzIHRoZSBib2R5IGVsZW1lbnQgaW4gdGhlIGRvY3VtZW50XG4gKiB3aXRoIHRoZSBwcmltYXJ5IGludGVncmF0b3Igdmlldy5cbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIGxvYWRQcmltYXJ5UGFnZSgpIHtcbiAgICAvL2NvbnN0IHJvb3QgPSBEZXJpdmF0aXZlLm9mKHN1bShhLCBhLCBwcm9kdWN0KG51bSgyKSwgYikpLCBhKVxuICAgIGNvbnN0IHJvb3QgPSAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtKSgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtKShDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hKSwgKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3QpKENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpKTtcbiAgICBjb25zdCBvdGhlclJvb3QgPSBEZXJpdmF0aXZlXzEuRGVyaXZhdGl2ZS5vZigoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdCkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLngpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54KTtcbiAgICBjb25zdCBncmFwaCA9IG5ldyBHcmFwaF8xLkdyYXBoKCkuYWRkUmVsYXRpb25zaGlwKHJvb3QsIG90aGVyUm9vdCwgUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsKTtcbiAgICBjb25zdCBkZXJpdmVyID0gbmV3IERlcml2ZXJfMS5EZXJpdmVyKGdyYXBoKTtcbiAgICBkZXJpdmVyLmV4cGFuZCgpO1xuICAgIC8vY29uc29sZS5sb2coXCJSZXN1bHQ6IFwiICsgZ3JhcGgpXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0XCIpO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiB7XG4gICAgICAgICgwLCBQYXJzZXJfMS5wYXJzZSkoaW5wdXQudmFsdWUpO1xuICAgIH0pO1xuICAgIGNvbnN0IG91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0Ym94XCIpO1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgc2hvd0FyZ3VtZW50czogZmFsc2UsXG4gICAgICAgIGRyYXdFZGdlTGluZXM6IHRydWUsXG4gICAgfTtcbiAgICBjb25zdCBncmFwaFZpZXcgPSBuZXcgV2ViR3JhcGhWaWV3XzEuV2ViR3JhcGhWaWV3KGdyYXBoLCBuZXcgU2V0KFtyb290LCBvdGhlclJvb3RdKSwgY29uZmlnKTtcbiAgICBncmFwaFZpZXcuc2V0Tm9kZUNvbG9yaW5nU2NoZW1lKG4gPT4ge1xuICAgICAgICBpZiAobiBpbnN0YW5jZW9mIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uKSB7XG4gICAgICAgICAgICBpZiAoIWRlcml2ZXIuaXNTaW1wbGlmaWVkKG4pKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImxpZ2h0Z3JheVwiO1xuICAgICAgICAgICAgZWxzZSBpZiAoIW4uaXNIZWFsdGh5KVxuICAgICAgICAgICAgICAgIHJldHVybiBcImxpZ2h0cmVkXCI7XG4gICAgICAgICAgICBlbHNlIGlmIChuIGluc3RhbmNlb2YgVmFyaWFibGVfMS5WYXJpYWJsZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJvcmFuZ2VcIjtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJsaWdodGJsdWVcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJibGFja1wiO1xuICAgIH0pO1xuICAgIGdyYXBoVmlldy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndlYi1ncmFwaHZpZXdcIik7XG4gICAgb3V0LmFwcGVuZENoaWxkKGdyYXBoVmlldyk7XG59XG5leHBvcnRzLmxvYWRQcmltYXJ5UGFnZSA9IGxvYWRQcmltYXJ5UGFnZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Ub3VjaEdlc3R1cmVSZWNvZ25pemVyID0gdm9pZCAwO1xuLyoqXG4gKiBJbnRlcnByZXQgY29tcGxpY2F0ZWQgdG91Y2ggZ2VzdHVyZSBkYXRhLlxuICovXG5jbGFzcyBUb3VjaEdlc3R1cmVSZWNvZ25pemVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tb3ZlTGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMucGluY2hMaXN0ZW5lcnMgPSBbXTtcbiAgICB9XG4gICAgYWRkTW92ZUxpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMubW92ZUxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiBhIHBpbmNoIGdlc3R1cmUgaGFzIGJlZW4gZGV0ZWN0ZWQuXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIFRha2VzIGEgY2VudGVyIGNvb3JkaW5hdGUgdGhhdCdzIHRoZSBhdmVyYWdlIG9mIHRoZSBmaW5nZXIgcG9zaXRpb25zLFxuICAgICAqICAgICAgICAgICAgICB0aGUgY2hhbmdlIGluIHNjYWxlIHNpbmNlIHRoZSBsYXN0IGNhbGwgb24gKDAsIGluZmluaXR5KSB3aGVyZSAxIGlzIG5vIGNoYW5nZSxcbiAgICAgKiAgICAgICAgICAgICAgYW5kIHRoZSBudW1iZXIgb2YgZmluZ2VycyBpbiB0aGUgZ2VzdHVyZSAoYW4gaW50ZWdlcikuXG4gICAgICovXG4gICAgYWRkUGluY2hMaXN0ZW5lcihjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnBpbmNoTGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTaG91bGQgdGFrZSBhbGwgdG91Y2ggZXZlbnRzIGZyb20gdGhlIHZpZXcgdXNpbmcgaXQuXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICovXG4gICAgcHJvY2Vzc1RvdWNoRG93bihldmVudCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTaG91bGQgdGFrZSBhbGwgdG91Y2ggZXZlbnRzIGZyb20gdGhlIHZpZXcgdXNpbmcgaXQuXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICovXG4gICAgcHJvY2Vzc1RvdWNoTW92ZShldmVudCkge1xuICAgICAgICBmb3IgKGNvbnN0IGNoYW5nZWQgb2YgZXZlbnQuY2hhbmdlZFRvdWNoZXMpIHtcbiAgICAgICAgICAgIGNoYW5nZWQuY2xpZW50WDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTaG91bGQgdGFrZSBhbGwgdG91Y2ggZXZlbnRzIGZyb20gdGhlIHZpZXcgdXNpbmcgaXQuXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICovXG4gICAgcHJvY2Vzc1RvdWNoRW5kKGV2ZW50KSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNob3VsZCB0YWtlIGFsbCB0b3VjaCBldmVudHMgZnJvbSB0aGUgdmlldyB1c2luZyBpdC5cbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBwcm9jZXNzVG91Y2hDYW5jZWwoZXZlbnQpIHtcbiAgICB9XG4gICAgLy9wcml2YXRlIGxhc3RYOiBNYXA8VG91Y2hcbiAgICBtb3ZlTGlzdGVuZXJzO1xuICAgIHBpbmNoTGlzdGVuZXJzO1xufVxuZXhwb3J0cy5Ub3VjaEdlc3R1cmVSZWNvZ25pemVyID0gVG91Y2hHZXN0dXJlUmVjb2duaXplcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Bcmd1bWVudCA9IHZvaWQgMDtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4vdXRpbC9hc3NlcnRcIik7XG4vKipcbiAqIENvbm5lY3RzIG9uZSBvciBtb3JlIG5vZGVzIChncm91bmRzKSB0byBvbmUgb3IgbW9yZSBub2RlcyAoY2xhaW1zKS5cbiAqIENvbnRhaW5zIGFuIGV4cGxhbmF0aW9uL2FyZ3VtZW50IGZvciB0aGUgY29ubmVjdGlvbi5cbiAqL1xuY2xhc3MgQXJndW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKGdyb3VuZHMsIGNsYWltLCBhcmd1bWVudCkge1xuICAgICAgICB0aGlzLmdyb3VuZHMgPSBncm91bmRzO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMuZ3JvdW5kcyk7XG4gICAgICAgIHRoaXMuY2xhaW0gPSBjbGFpbTtcbiAgICAgICAgdGhpcy5hcmd1bWVudCA9IGFyZ3VtZW50O1xuICAgICAgICB0aGlzLnJlcE9rKCk7XG4gICAgfVxuICAgIGV4cHJlc3Npb25FZGdlID0gdHJ1ZTtcbiAgICBnZXQgcmVsYXRpb25zaGlwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGFpbS5yO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwiQXJndW1lbnQgXCIgKyB0aGlzLmNsYWltLnI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFR3byBvdXQgbWF0aCBncmFwaCBub2RlcyB0aGF0IGFyZSByZWxhdGVkIGJ5IHRoaXMgQXJ1Z21lbnQuXG4gICAgICovXG4gICAgY2xhaW07XG4gICAgLyoqXG4gICAgICogVGhlIGV4cGxhbmF0aW9uIHRoYXQgY29ubmVjdHMgdGhlIGFyZ3VtZW50J3MgZ3JvdW5kcyB0b1xuICAgICAqIGl0J3MgY2xhaW1lZCByZWxhdGlvbnNoaXAgYmV0d2VlbiB0aGUgdHdvIG91dCBub2Rlcy5cbiAgICAgKlxuICAgICAqL1xuICAgIGFyZ3VtZW50O1xuICAgIC8qKlxuICAgICAqIE5vZGVzIHRoYXQgaGF2ZSBhbiBlZGdlIHBvaW50aW5nIHRvIHRoaXMgYXJndW1lbnQuXG4gICAgICovXG4gICAgZ3JvdW5kcztcbiAgICByZXBPaygpIHtcbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5ncm91bmRzICE9IG51bGwpO1xuICAgICAgICBmb3IgKGNvbnN0IGdyb3VuZCBvZiB0aGlzLmdyb3VuZHMpIHtcbiAgICAgICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKGdyb3VuZCAhPSBudWxsICYmIGdyb3VuZCAhPSB1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMuY2xhaW0ubiAhPSBudWxsICYmIHRoaXMuY2xhaW0ubiAhPSB1bmRlZmluZWQpO1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLmNsYWltLm4xICE9IG51bGwgJiYgdGhpcy5jbGFpbS5uMSAhPSB1bmRlZmluZWQpO1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLmNsYWltLnIgIT0gdW5kZWZpbmVkICYmIHRoaXMuY2xhaW0uciAhPSBudWxsKTtcbiAgICB9XG59XG5leHBvcnRzLkFyZ3VtZW50ID0gQXJndW1lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMueSA9IGV4cG9ydHMueCA9IGV4cG9ydHMuZiA9IGV4cG9ydHMuZSA9IGV4cG9ydHMuZCA9IGV4cG9ydHMuYyA9IGV4cG9ydHMuYiA9IGV4cG9ydHMuYSA9IGV4cG9ydHMucHJvZHVjdEFuZE5vdFRpbWVzT25lID0gZXhwb3J0cy5wcm9kdWN0T3JOb3QgPSBleHBvcnRzLmVxdWl2YWxlbmNlQXJndW1lbnQgPSBleHBvcnRzLmludCA9IGV4cG9ydHMudiA9IGV4cG9ydHMubnVtID0gZXhwb3J0cy5uZWdhdGl2ZSA9IGV4cG9ydHMucHJvZHVjdCA9IGV4cG9ydHMucmVtb3ZlTmV3ID0gZXhwb3J0cy5yZW1vdmUgPSBleHBvcnRzLm9yZGVyZWRQcm9kdWN0ID0gZXhwb3J0cy5zdW1Pck5vdCA9IGV4cG9ydHMuc3VtSW50dWl0aXZlID0gZXhwb3J0cy5zdW1FdmFsSW50ZWdlclRlcm1zID0gZXhwb3J0cy5vcmRlcmVkU3VtID0gZXhwb3J0cy5zdW0gPSBleHBvcnRzLmZyYWN0aW9uID0gdm9pZCAwO1xuY29uc3QgSW50ZWdlcl8xID0gcmVxdWlyZShcIi4vZXhwcmVzc2lvbnMvSW50ZWdlclwiKTtcbmNvbnN0IEZyYWN0aW9uXzEgPSByZXF1aXJlKFwiLi9leHByZXNzaW9ucy9GcmFjdGlvblwiKTtcbmNvbnN0IEludGVncmFsXzEgPSByZXF1aXJlKFwiLi9leHByZXNzaW9ucy9JbnRlZ3JhbFwiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuL2V4cHJlc3Npb25zL1Byb2R1Y3RcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuL2V4cHJlc3Npb25zL1N1bVwiKTtcbmNvbnN0IFZhcmlhYmxlXzEgPSByZXF1aXJlKFwiLi9leHByZXNzaW9ucy9WYXJpYWJsZVwiKTtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi9Bcmd1bWVudFwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi91dGlsL2Fzc2VydFwiKTtcbmZ1bmN0aW9uIGZyYWN0aW9uKG51bSwgZGVuKSB7XG4gICAgcmV0dXJuIEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YobnVtLCBkZW4pO1xufVxuZXhwb3J0cy5mcmFjdGlvbiA9IGZyYWN0aW9uO1xuLyoqXG4gKiBBIGNvbnZlbmllbmNlIG1ldGhvZCBmb3IgU3VtLm9mKClcbiAqL1xuZnVuY3Rpb24gc3VtKC4uLnRlcm1zKSB7XG4gICAgcmV0dXJuIFN1bV8xLlN1bS5vZih0ZXJtcyk7XG59XG5leHBvcnRzLnN1bSA9IHN1bTtcbi8qKlxuICogR2V0cyB0aGUgY29ycmVjdGx5IG9yZGVyZWQgc3VtIG9mIHRoZSBnaXZlbiBzdW0uXG4gKiAxICsgYSA9IGEgKyAxXG4gKiBGb2xsb3dzIHRoZSBzcGVjIGdpdmVuIGluIHRoZSBTdW0udHMgZmlsZS5cbiAqIEBwYXJhbSBzdW1cbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIG9yZGVyZWRTdW0oc3VtKSB7XG4gICAgY29uc3Qgb3JkZXJlZCA9ICgwLCBTdW1fMS5vcmRlclRlcm1zKSguLi5zdW0udGVybXMpO1xuICAgIHJldHVybiBTdW1fMS5TdW0ub2Yob3JkZXJlZCk7XG59XG5leHBvcnRzLm9yZGVyZWRTdW0gPSBvcmRlcmVkU3VtO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBzdW0gb2YgdGhlIGdpdmVuIHRlcm1zLCBldmFsdWF0aW5nIGFueSBpbnRlZ2VyIHRlcm1zLlxuICogUHV0cyBmaW5hbCBjb25zdGFudCBpbnRlZ2VyIGFzIHRoZSBsYXN0IHRlcm0uXG4gKiBJZiB0aGUgcmVzdWx0IGlzIGEgc3VtLCBpdCB3aWxsIG5vdCBoYXZlIHRoZSBpbnRlZ2VyIDAgYXMgYSB0ZXJtLlxuICogSWYgYWxsIGdpdmVuIHRlcm1zIHN1bSB0byB6ZXJvLCB0aGUgaW50ZWdlciB6ZXJvIHdpbGwgYmUgcmV0dXJuZWQuXG4gKiBAcGFyYW0gdGVybXNcbiAqL1xuZnVuY3Rpb24gc3VtRXZhbEludGVnZXJUZXJtcyguLi50ZXJtcykge1xuICAgIGNvbnN0IGludGVnZXJzID0gdGVybXMuZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKS5sZW5ndGg7XG4gICAgaWYgKGludGVnZXJzIDwgMilcbiAgICAgICAgcmV0dXJuIHN1bSguLi50ZXJtcyk7XG4gICAgY29uc3Qgbm9uSW50VGVybXMgPSB0ZXJtcy5maWx0ZXIoZSA9PiAhKGUgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcikpO1xuICAgIGNvbnN0IGludFRlcm0gPSB0ZXJtcy5maWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpXG4gICAgICAgIC5tYXAoZSA9PiBlKVxuICAgICAgICAucmVkdWNlKChhLCBiKSA9PiBudW0oYS52YWx1ZSArIGIudmFsdWUpKTtcbiAgICBpZiAoaW50VGVybS52YWx1ZSA9PSAwKSB7XG4gICAgICAgIGlmIChub25JbnRUZXJtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gc3VtKC4uLm5vbkludFRlcm1zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChub25JbnRUZXJtcy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vbkludFRlcm1zWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGludFRlcm07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChub25JbnRUZXJtcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGludFRlcm07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3VtKC4uLm5vbkludFRlcm1zLCBpbnRUZXJtKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuc3VtRXZhbEludGVnZXJUZXJtcyA9IHN1bUV2YWxJbnRlZ2VyVGVybXM7XG4vKipcbiAqIFJldHVybnMgdGhlIHN1bSBvZiB0aGUgZ2l2ZW4gdGVybXMuIEV2YWx1YXRlcyBhbnlcbiAqIGludGVnZXIgdGVybXMuIEFkZGl0aW9uYWxseSBjYW5jZWxzIG91dCBhbnkgcG9zaXRpdmVcbiAqIG5lZ2F0aXZlIHRlcm1zLlxuICpcbiAqIFNpbXBsaWZpZXNcbiAqICB4ICsgYSAtIGEgPSB4XG4gKiB4ICsgYWIgLSBhYiA9IHhcbiAqIHggKyAyYWIgLSAyYWIgPSB4XG4gKiBhIC0gYSA9IDBcbiAqXG4gKiBEb2Vzbid0IGFmZmVjdFxuICogIHggKyAyYSAtIGFcbiAqIEBwYXJhbSB0ZXJtc1xuICovXG5mdW5jdGlvbiBzdW1JbnR1aXRpdmUoLi4udGVybXMpIHtcbiAgICBjb25zdCBpbnRFdmFsID0gc3VtRXZhbEludGVnZXJUZXJtcyguLi50ZXJtcyk7XG4gICAgaWYgKGludEV2YWwuY2xhc3MgIT0gU3VtXzEuU3VtVHlwZSlcbiAgICAgICAgcmV0dXJuIGludEV2YWw7XG4gICAgdGVybXMgPSBbLi4uaW50RXZhbC50ZXJtc107XG4gICAgLy8gRmluZCBvcHBvc2l0ZSBwYWlyc1xuICAgIC8vIFRoZXkgd2lsbCB0YWtlIHRoZSBmb3JtXG4gICAgLy8gICAgICBleHAgKyAtMSAqIGV4cFxuICAgIC8vIEkgYXNzdW1lIGhlcmUgdGhhdCB0aGUgb25seSB3YXkgdG8gbm90YXRlXG4gICAgLy8gbmVnYXRpdml0eSBpcyBieSBtdWx0aXBseWluZyBieSAtMVxuICAgIHRlcm1zOiBmb3IgKGNvbnN0IHQgb2YgdGVybXMpIHtcbiAgICAgICAgY29uc3Qgb3RoZXJUZXJtcyA9IFsuLi50ZXJtc107XG4gICAgICAgIHJlbW92ZShvdGhlclRlcm1zLCB0KTtcbiAgICAgICAgZm9yIChjb25zdCBvdGhlciBvZiBvdGhlclRlcm1zKSB7XG4gICAgICAgICAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChvdGhlci5pc05lZ2F0aW9uICYmIG90aGVyLm5lZ2F0aW9uID09PSB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZSh0ZXJtcywgb3RoZXIpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmUodGVybXMsIHQpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZSB0ZXJtcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRlcm1zLmxlbmd0aCA9PSAwKVxuICAgICAgICByZXR1cm4gSW50ZWdlcl8xLkludGVnZXIub2YoMCk7XG4gICAgZWxzZSBpZiAodGVybXMubGVuZ3RoID09IDEpXG4gICAgICAgIHJldHVybiB0ZXJtc1swXTtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBzdW0oLi4udGVybXMpO1xufVxuZXhwb3J0cy5zdW1JbnR1aXRpdmUgPSBzdW1JbnR1aXRpdmU7XG5mdW5jdGlvbiBzdW1Pck5vdCguLi50ZXJtcykge1xuICAgIGlmICh0ZXJtcy5sZW5ndGggPT0gMSlcbiAgICAgICAgcmV0dXJuIHRlcm1zWzBdO1xuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIHN1bSguLi50ZXJtcyk7XG59XG5leHBvcnRzLnN1bU9yTm90ID0gc3VtT3JOb3Q7XG4vKipcbiAqIFByb2R1Y2VzIGEgcHJvZHVjdCBmcm9tIHRoZSBnaXZlbiBmYWN0b3JzXG4gKiB3aGVyZSB0aGUgZmFjdG9ycyBhcmUgb3JkZXJlZCBhY2NvcmRpbmcgdG8gY29udmVudGlvbi5cbiAqIEBwYXJhbSBmYWN0b3JzIEF0IGxlYXN0IDJcbiAqL1xuZnVuY3Rpb24gb3JkZXJlZFByb2R1Y3QoLi4uZmFjdG9ycykge1xuICAgIGZhY3RvcnMuc29ydChQcm9kdWN0XzEuZmFjdG9yT3JkZXIpO1xuICAgIHJldHVybiBwcm9kdWN0KC4uLmZhY3RvcnMpO1xufVxuZXhwb3J0cy5vcmRlcmVkUHJvZHVjdCA9IG9yZGVyZWRQcm9kdWN0O1xuLyoqXG4gKiBSZW1vdmVzIHRoZSBmaXJzdCBpbnN0YW5jZSBvZiB0aGUgZ2l2ZW5cbiAqIGVsZW1lbnQgZnJvbSB0aGUgYXJyYXkuIFJlYWxseSBzaG91bGQgYmVcbiAqIHBhcnQgb2YgdGhlIHN0ZCBsaWJyYXJ5LiBJZGVudGlmaWVzIG9iamVjdFxuICogd2l0aCByZWZlcmVuY2lhbCBlcXVhbGl0eS5cbiAqIEBwYXJhbSBhcnJheVxuICogQHBhcmFtIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlKGFycmF5LCBlbGVtZW50KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYXJyYXlbaV0gPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGFycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMucmVtb3ZlID0gcmVtb3ZlO1xuLyoqXG4gKiBHZXRzIGEgbmV3IGFycmF5IHdpdGhvdXQgdGhlIGZpcnN0IGluc3RhbmNlIG9mIHRoZSBnaXZlblxuICogZWxlbWVudC4gUmVhbGx5IHNob3VsZCBiZVxuICogcGFydCBvZiB0aGUgc3RkIGxpYnJhcnkuIElkZW50aWZpZXMgb2JqZWN0XG4gKiB3aXRoIHJlZmVyZW5jaWFsIGVxdWFsaXR5LlxuICogQHBhcmFtIGFycmF5XG4gKiBAcGFyYW0gZWxlbWVudFxuICovXG5mdW5jdGlvbiByZW1vdmVOZXcoYXJyYXksIGVsZW1lbnQpIHtcbiAgICBjb25zdCBpbnB1dCA9IFsuLi5hcnJheV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaW5wdXRbaV0gPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlucHV0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJHaXZlbiBhcnJheSBkb2Vzbid0IGNvbnRhaW4gZWxlbWVudCBcIiArIGVsZW1lbnQpO1xufVxuZXhwb3J0cy5yZW1vdmVOZXcgPSByZW1vdmVOZXc7XG5mdW5jdGlvbiBwcm9kdWN0KC4uLmZhY3RvcnMpIHtcbiAgICByZXR1cm4gUHJvZHVjdF8xLlByb2R1Y3Qub2YoZmFjdG9ycyk7XG59XG5leHBvcnRzLnByb2R1Y3QgPSBwcm9kdWN0O1xuZnVuY3Rpb24gbmVnYXRpdmUoZXhwcmVzc2lvbikge1xuICAgIGlmIChleHByZXNzaW9uIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpXG4gICAgICAgIHJldHVybiBJbnRlZ2VyXzEuSW50ZWdlci5vZigtZXhwcmVzc2lvbi52YWx1ZSk7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gUHJvZHVjdF8xLlByb2R1Y3Qub2YoW0ludGVnZXJfMS5JbnRlZ2VyLm9mKC0xKSwgZXhwcmVzc2lvbl0pO1xufVxuZXhwb3J0cy5uZWdhdGl2ZSA9IG5lZ2F0aXZlO1xuZnVuY3Rpb24gbnVtKHZhbCkge1xuICAgIHJldHVybiBJbnRlZ2VyXzEuSW50ZWdlci5vZih2YWwpO1xufVxuZXhwb3J0cy5udW0gPSBudW07XG5mdW5jdGlvbiB2KHN5bWJvbCkge1xuICAgIHJldHVybiBWYXJpYWJsZV8xLlZhcmlhYmxlLm9mKHN5bWJvbCk7XG59XG5leHBvcnRzLnYgPSB2O1xuZnVuY3Rpb24gaW50KGludGVncmFuZCwgcmVzcGVjdFRvKSB7XG4gICAgcmV0dXJuIEludGVncmFsXzEuSW50ZWdyYWwub2YoaW50ZWdyYW5kLCByZXNwZWN0VG8pO1xufVxuZXhwb3J0cy5pbnQgPSBpbnQ7XG5mdW5jdGlvbiBlcXVpdmFsZW5jZUFyZ3VtZW50KGZpcnN0LCBzZWNvbmQsIGV4cGxhbmF0aW9uKSB7XG4gICAgcmV0dXJuIG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KHNldE9mKGZpcnN0KSwge1xuICAgICAgICBuOiBmaXJzdCxcbiAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICBuMTogc2Vjb25kLFxuICAgIH0sIGV4cGxhbmF0aW9uKTtcbn1cbmV4cG9ydHMuZXF1aXZhbGVuY2VBcmd1bWVudCA9IGVxdWl2YWxlbmNlQXJndW1lbnQ7XG4vKipcbiAqXG4gKiBAcmV0dXJucyBUaGUgcHJvZHVjdCBvZiB0aGUgZ2l2ZW4gZmFjdG9ycywgb3IgdGhlIG9ubHkgZmFjdG9yIGdpdmVuXG4gKiBpZiBvbmx5IG9uZSBnaXZlbi4gVGhyb3dzIGlmIG5vIGV4cHJlc3Npb25zIGFyZSBnaXZlbi5cbiAqL1xuZnVuY3Rpb24gcHJvZHVjdE9yTm90KC4uLmV4cHJlc3Npb25zKSB7XG4gICAgKDAsIGFzc2VydF8xLmFzc2VydCkoZXhwcmVzc2lvbnMubGVuZ3RoID4gMCk7XG4gICAgaWYgKGV4cHJlc3Npb25zLmxlbmd0aCA9PSAxKVxuICAgICAgICByZXR1cm4gZXhwcmVzc2lvbnNbMF07XG4gICAgcmV0dXJuIHByb2R1Y3QoLi4uZXhwcmVzc2lvbnMpO1xufVxuZXhwb3J0cy5wcm9kdWN0T3JOb3QgPSBwcm9kdWN0T3JOb3Q7XG4vKipcbiAqIEByZXR1cm5zIFRoZSBwcm9kdWN0IG9mIHRoZSBnaXZlbiB0ZXJtcyBleGxjdWRpbmcgdGhlIGZpcnN0IGlmXG4gKiAgICAgICAgICBpdCdzIG9uZS4gSWYgdGhlIHJlc3VsdGluZyB0ZXJtcyBsaXN0IGlzIG9ubHkgb25lIHRlcm0sXG4gKiAgICAgICAgICByZXR1cm5zIHRoZSBvbmx5IHRlcm0uXG4gKi9cbmZ1bmN0aW9uIHByb2R1Y3RBbmROb3RUaW1lc09uZSguLi5leHByZXNzaW9ucykge1xuICAgIGlmIChleHByZXNzaW9uc1swXSBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyICYmIGV4cHJlc3Npb25zWzBdLnZhbHVlID09IDEpIHtcbiAgICAgICAgZXhwcmVzc2lvbnMuc2hpZnQoKTtcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RPck5vdCguLi5leHByZXNzaW9ucyk7XG4gICAgfVxuICAgIHJldHVybiBwcm9kdWN0T3JOb3QoLi4uZXhwcmVzc2lvbnMpO1xufVxuZXhwb3J0cy5wcm9kdWN0QW5kTm90VGltZXNPbmUgPSBwcm9kdWN0QW5kTm90VGltZXNPbmU7XG5mdW5jdGlvbiBzZXRPZiguLi5leHByZXNzaW9ucykge1xuICAgIGNvbnN0IG91dCA9IG5ldyBTZXQoKTtcbiAgICBleHByZXNzaW9ucy5mb3JFYWNoKGUgPT4gb3V0LmFkZChlKSk7XG4gICAgcmV0dXJuIG91dDtcbn1cbmV4cG9ydHMuYSA9IHYoJ2EnKTtcbmV4cG9ydHMuYiA9IHYoJ2InKTtcbmV4cG9ydHMuYyA9IHYoJ2MnKTtcbmV4cG9ydHMuZCA9IHYoJ2QnKTtcbmV4cG9ydHMuZSA9IHYoJ2UnKTtcbmV4cG9ydHMuZiA9IHYoJ2YnKTtcbmV4cG9ydHMueCA9IHYoJ3gnKTtcbmV4cG9ydHMueSA9IHYoJ3knKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HaXZlbkVkZ2UgPSBleHBvcnRzLkFyZ3VtZW50RWRnZSA9IGV4cG9ydHMuR3JhcGggPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4vQXJndW1lbnRcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0XCIpO1xuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBncmFwaCBvZiBleHByZXNzaW9ucyBhbmQgc3RhdGVtZW50c1xuICogaW5jbHVkaW5nIGV2ZXJ5dGhpbmcgd2Uga25vdyBhYm91dCBhIHByb2JsZW0uXG4gKiBDb25uZWN0cyBHcmFwaE5vZGVzIHZpYSBJbmZlcmVuY2VzIGZvciBlZGdlcy5cbiAqXG4gKiBJdCdzIGEgZGlncmFwaC5cbiAqL1xuY2xhc3MgR3JhcGgge1xuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gZXhwcmVzc2lvbiB0byB0aGUgcHJvYmxlbS5cbiAgICAgKiBAcGFyYW0gbm9kZVxuICAgICAqIEByZXR1cm5zIHRoZSBzYW1lIGdyYXBoIGZvciBjaGFpbmluZy5cbiAgICAgKi9cbiAgICBhZGROb2RlKG5vZGUpIHtcbiAgICAgICAgdGhpcy5ub2Rlcy5hZGQobm9kZSk7XG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgQXJndW1lbnRfMS5Bcmd1bWVudCkge1xuICAgICAgICAgICAgdGhpcy5hZGRBcmd1bWVudChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcE9rKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGQgYSByZWxhdGlvbnNoaXAgYmV0d2VlbiB0d28gZWxlbWVudHMgZ2l2ZW4gYnkgdGhlIHVzZXIgdG8gdGhlIGdyYXBoLlxuICAgICAqIFNob3VsZCBub3QgYmUgY2FsbGVkIHRvIGFkZCBkZXJpdmVkIHRydXRocyBiYyB0aGlzIHdvbid0IHN0b3JlIGFuIGV4cGxhbmF0aW9uLlxuICAgICAqIEFkZHMgZ2l2ZW4gbm9kZXMgaWYgdGhleSBhcmVuJ3QgYWxyZWFkeSBvbiB0aGUgZ3JhcGguXG4gICAgICogQHBhcmFtIG5cbiAgICAgKiBAcGFyYW0gbjFcbiAgICAgKiBAcGFyYW0gclxuICAgICAqIEByZXR1cm5zIHNlbGYgZm9yIGNoYWluaW5nXG4gICAgICovXG4gICAgYWRkUmVsYXRpb25zaGlwKG4sIG4xLCByKSB7XG4gICAgICAgIHRoaXMuYWRkTm9kZShuKTtcbiAgICAgICAgdGhpcy5hZGROb2RlKG4xKTtcbiAgICAgICAgLy8gRGVmaW5lZCBib3RoIHdheXMgYmVjYXVzZSB0aGUgdXNlciBpcyBnaXZpbmcgaXRcbiAgICAgICAgdGhpcy5hZGRFZGdlKG4sIG4xLCBuZXcgR2l2ZW5FZGdlKHIpKTtcbiAgICAgICAgdGhpcy5hZGRFZGdlKG4xLCBuLCBuZXcgR2l2ZW5FZGdlKHIpKTtcbiAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKG4sIG4xKTtcbiAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKG4xLCBuKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBub2RlIHJlcHJlc2VudGluZyBhbiBhY3VtdWxhdGlvbiBvZiBmYWN0c1xuICAgICAqIHRoYXQgbGVhZHMgdG8gYSBjb25jbHVzaW9uLlxuICAgICAqIEBwYXJhbSBhXG4gICAgICogQHJldHVybnMgdGhlIHNhbWUgZ3JhcGggZm9yIGNoYWluaW5nLlxuICAgICAqL1xuICAgIGFkZEFyZ3VtZW50KGEpIHtcbiAgICAgICAgdGhpcy5ub2Rlcy5hZGQoYSk7XG4gICAgICAgIC8vIEFkZCB0aGUgZ3JvdW5kc1xuICAgICAgICBmb3IgKGNvbnN0IGdyb3VuZCBvZiBhLmdyb3VuZHMpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZXMuYWRkKGdyb3VuZCk7XG4gICAgICAgICAgICB0aGlzLmFkZENvbm5lY3Rpb24oZ3JvdW5kLCBhKTtcbiAgICAgICAgICAgIHRoaXMuYWRkRWRnZShncm91bmQsIGEsIEFyZ3VtZW50RWRnZS5Ubyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIHRoZSBjbGFpbVxuICAgICAgICBjb25zdCBjbGFpbSA9IGEuY2xhaW07XG4gICAgICAgIHRoaXMuYWRkTm9kZShjbGFpbS5uKTtcbiAgICAgICAgdGhpcy5hZGROb2RlKGNsYWltLm4xKTtcbiAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKGEsIGNsYWltLm4pO1xuICAgICAgICB0aGlzLmFkZEVkZ2UoYSwgY2xhaW0ubiwgQXJndW1lbnRFZGdlLkZyb20pO1xuICAgICAgICB0aGlzLmFkZENvbm5lY3Rpb24oYSwgY2xhaW0ubjEpO1xuICAgICAgICB0aGlzLmFkZEVkZ2UoYSwgY2xhaW0ubjEsIEFyZ3VtZW50RWRnZS5Gcm9tKTtcbiAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKGNsYWltLm4sIGNsYWltLm4xKTtcbiAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKGNsYWltLm4xLCBjbGFpbS5uKTtcbiAgICAgICAgdGhpcy5hZGRFZGdlKGNsYWltLm4sIGNsYWltLm4xLCBhKTtcbiAgICAgICAgdGhpcy5hZGRFZGdlKGNsYWltLm4xLCBjbGFpbS5uLCBhKTtcbiAgICAgICAgdGhpcy5yZXBPaygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMgdGhlIHNhbWUgZ3JhcGggZm9yIGNoYWluaW5nLlxuICAgICAqL1xuICAgIGFkZEFyZ3VtZW50cyguLi5hKSB7XG4gICAgICAgIGEuZm9yRWFjaChhcmcgPT4gdGhpcy5hZGRBcmd1bWVudChhcmcpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbmVpZ2hib3JzIG9mIGEgbm9kZS5cbiAgICAgKiBAcGFyYW0gbm9kZVxuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24gTm9kZXMgdGhhdCBhcmUgYWRqYWNlbnQgdG8gdGhpcyBub2RlLCBmcm9tIHRoaXMgbm9kZSwgb3IgZWl0aGVyLlxuICAgICAqIEByZXR1cm5zIFVuZGVmaW5lZCBpZiB0aGUgbm9kZSBpc24ndCBpbiB0aGlzIGdyYXBoLiBPdGhlcndpc2UsIGEgc2V0IG9mIGNvbm5lY3RlZCBub2Rlcy5cbiAgICAgKiAgICAgICAgICBJZiB0aGUgbm9kZSBpcyBpbiB0aGUgZ3JhcGggYnV0IGlzbid0IGNvbm5lY3RlZCB0byBhbnl0aGluZywgcmV0dXJucyBlbXB0eSBzZXQuXG4gICAgICovXG4gICAgZ2V0TmVpZ2hib3JzKG5vZGUsIGRpcmVjdGlvbikge1xuICAgICAgICBpZiAoIXRoaXMubm9kZXMuaGFzKG5vZGUpKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcIm91dFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNldCh0aGlzLmNvbm5lY3Rpb25zLmdldChub2RlKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFkamFjZW50VG8gPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgbiBvZiB0aGlzLm5vZGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9ucy5nZXQobik/Lmhhcyhub2RlKSlcbiAgICAgICAgICAgICAgICBhZGphY2VudFRvLmFkZChuKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwiaW5cIilcbiAgICAgICAgICAgIHJldHVybiBhZGphY2VudFRvO1xuICAgICAgICBmb3IgKGNvbnN0IG4gb2YgdGhpcy5jb25uZWN0aW9ucy5nZXQobm9kZSkgPz8gW10pXG4gICAgICAgICAgICBhZGphY2VudFRvLmFkZChuKTtcbiAgICAgICAgcmV0dXJuIGFkamFjZW50VG87XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgdGhlIG51bWJlciBvZiBlZGdlcyB0aGlzIG5vZGUgaGFzLlxuICAgICAqIEBwYXJhbSBub2RlIFRoZSBub2RlIGJlaW5nIGNvbnNkZXJlZC5cbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIENvdW50IG9ubHkgdGhlIGVkZ2VzIGdvaW5nIHRvd2FyZHMgdGhpcyBub2RlLCBhd2F5IGZyb21cbiAgICAgKiAgICAgICAgICBpdCwgb3IgYm90aC5cbiAgICAgKiBAcmV0dXJucyA+PSAwLCB1bmRlZmluZWQgaWYgdGhlIGdpdmVuIG5vZGUgaXNuJ3QgaW4gdGhlIGdyYXBoLlxuICAgICAqL1xuICAgIGdldERlZ3JlZShub2RlLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKCF0aGlzLm5vZGVzLmhhcyhub2RlKSlcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJvdXRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbnMuZ2V0KG5vZGUpPy5zaXplID8/IDA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRlZ0luID0gMDtcbiAgICAgICAgdGhpcy5ub2Rlcy5mb3JFYWNoKG4gPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbnMuZ2V0KG4pID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9ucy5nZXQobikuaGFzKG5vZGUpKVxuICAgICAgICAgICAgICAgIGRlZ0luKys7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwiaW5cIikge1xuICAgICAgICAgICAgcmV0dXJuIGRlZ0luO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWdJbiArICh0aGlzLmNvbm5lY3Rpb25zLmdldChub2RlKT8uc2l6ZSA/PyAwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIG4gTm9kZSBpbiB0aGUgZ3JhcGguXG4gICAgICogQHBhcmFtIG4xIEluIHRoZSBncmFwaC5cbiAgICAgKiBAcmV0dXJucyBVbmRlZmluZWQgaWYgZWl0aGVyIG5vZGUgaXNuJ3QgaW4gdGhlIGdyYXBoIG9yIHRoZXkncmUgbm90XG4gICAgICogY29ubmVjdGVkLlxuICAgICAqL1xuICAgIGdldEVkZ2UobiwgbjEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWRnZXMuZ2V0KG4pPy5nZXQobjEpO1xuICAgIH1cbiAgICBjb250YWlucyhub2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVzLmhhcyhub2RlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMgQSBuZXcgc2V0IGNvbnRhaW5pbmcgYWxsIHRoZSBub2RlcyBpbiB0aGUgZ3JhcGhcbiAgICAgKi9cbiAgICBnZXROb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZXQodGhpcy5ub2Rlcyk7XG4gICAgfVxuICAgIGdldEVkZ2VzKCkge1xuICAgICAgICBjb25zdCBvdXQgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuZWRnZXMuZm9yRWFjaCgobWFwLCBmaXJzdCkgPT4ge1xuICAgICAgICAgICAgbWFwLmZvckVhY2goKGVkZ2UsIHNlY29uZCkgPT4ge1xuICAgICAgICAgICAgICAgIG91dC5hZGQoeyBuOiBmaXJzdCwgbjE6IHNlY29uZCwgZTogZWRnZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgbnVtTm9kZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVzLnNpemU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYWxsIGdyYXBoIG5vZGVzIGFuZCBlZGdlcyB0byB0aGlzIG9uZS5cbiAgICAgKiBAcGFyYW0gZ3JhcGhcbiAgICAgKiBAcmV0dXJucyB0aGUgc2FtZSBncmFwaCBmb3IgY2hhaW5pbmcuXG4gICAgICovXG4gICAgYWRkR3JhcGgoZ3JhcGgpIHtcbiAgICAgICAgZ3JhcGgubm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9kZXMuYWRkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgZ3JhcGguZWRnZXMuZm9yRWFjaCgobWFwLCBub2RlMSkgPT4ge1xuICAgICAgICAgICAgbWFwLmZvckVhY2goKGVkZ2UsIG5vZGUyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVkZ2UgaW5zdGFuY2VvZiBBcmd1bWVudF8xLkFyZ3VtZW50KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEFyZ3VtZW50KGVkZ2UpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVkZ2UgPT0gXCJzdXBwb3J0c1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRWRnZShub2RlMSwgbm9kZTIsIEFyZ3VtZW50RWRnZS5Ubyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbihub2RlMSwgbm9kZTIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlZGdlID09IFwiY2xhaW1zXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFZGdlKG5vZGUxLCBub2RlMiwgQXJndW1lbnRFZGdlLkZyb20pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbm5lY3Rpb24obm9kZTEsIG5vZGUyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIEVkZ2UgVHlwZVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZXBPaygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGxldCBvdXQgPSBcIkdyYXBoKFYgPSB7XCI7XG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XG4gICAgICAgICAgICBvdXQgKz0gbm9kZS50b1N0cmluZygpICsgXCIsXCI7XG4gICAgICAgIH1cbiAgICAgICAgb3V0ID0gb3V0LnN1YnN0cmluZygwLCBvdXQubGVuZ3RoIC0gMSkgKyBcIn0sIEUgPSB7XCI7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnMuZm9yRWFjaCgoc2V0LCBzcmMpID0+IHtcbiAgICAgICAgICAgIHNldC5mb3JFYWNoKGRlc3QgPT4ge1xuICAgICAgICAgICAgICAgIG91dCArPSBzcmMudG9TdHJpbmcoKSArIFwiIC0+IFwiICsgZGVzdC50b1N0cmluZygpICsgXCIsIFwiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBvdXQgKz0gXCJ9IEVkZ2UgQ291bnQ6IFwiICsgdGhpcy5jb25uZWN0aW9ucy5zaXplO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICBhZGRDb25uZWN0aW9uKG4sIG4xKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25zLmdldChuKSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLnNldChuLCBuZXcgU2V0KCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnMuZ2V0KG4pLmFkZChuMSk7XG4gICAgfVxuICAgIGFkZEVkZ2UobiwgbjEsIGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZWRnZXMuZ2V0KG4pID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lZGdlcy5zZXQobiwgbmV3IE1hcCgpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVkZ2VzLmdldChuKS5zZXQobjEsIGUpO1xuICAgIH1cbiAgICByZXBPaygpIHtcbiAgICAgICAgdGhpcy5ub2Rlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPSB1bmRlZmluZWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQWxsIGNvbm5lY3Rpb25zL2VkZ2VzIGhhdmUgbm9kZXNcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLm5vZGVzLmhhcyhrZXkpKTtcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2gobiA9PiB7XG4gICAgICAgICAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5ub2Rlcy5oYXMobikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVkZ2VzLmZvckVhY2goKG1hcCwgZmlyc3QpID0+IHtcbiAgICAgICAgICAgIG1hcC5mb3JFYWNoKChlZGdlLCBzZWNvbmQpID0+IHtcbiAgICAgICAgICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLm5vZGVzLmhhcyhmaXJzdCkpO1xuICAgICAgICAgICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMubm9kZXMuaGFzKHNlY29uZCkpO1xuICAgICAgICAgICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMuY29ubmVjdGlvbnMuZ2V0KGZpcnN0KS5oYXMoc2Vjb25kKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vZGVzID0gbmV3IFNldCgpO1xuICAgIC8vIFF1aWNrbHkgYWNjZXNzIGFsbCBjb25uZWN0aW9ucyBvZiBhIG5vZGVcbiAgICBjb25uZWN0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAvLyBEZXRlcm1pbmUgdGhlIHR5cGUgb2YgY29ubmVjdGlvbiBiZXR3ZWVuIHR3byBub2Rlc1xuICAgIGVkZ2VzID0gbmV3IE1hcCgpO1xufVxuZXhwb3J0cy5HcmFwaCA9IEdyYXBoO1xudmFyIEFyZ3VtZW50RWRnZTtcbihmdW5jdGlvbiAoQXJndW1lbnRFZGdlKSB7XG4gICAgQXJndW1lbnRFZGdlW1wiVG9cIl0gPSBcInN1cHBvcnRzXCI7XG4gICAgQXJndW1lbnRFZGdlW1wiRnJvbVwiXSA9IFwiY2xhaW1zXCI7XG59KShBcmd1bWVudEVkZ2UgPSBleHBvcnRzLkFyZ3VtZW50RWRnZSB8fCAoZXhwb3J0cy5Bcmd1bWVudEVkZ2UgPSB7fSkpO1xuLyoqXG4gKiBDb21tdW5pY2F0ZXMgYSByZWxhdGlvbmhpcCBnaXZlbiBieSB0aGUgdXNlci5cbiAqL1xuY2xhc3MgR2l2ZW5FZGdlIHtcbiAgICBjb25zdHJ1Y3RvcihyKSB7XG4gICAgICAgIHRoaXMuciA9IHI7XG4gICAgfVxuICAgIHI7XG59XG5leHBvcnRzLkdpdmVuRWRnZSA9IEdpdmVuRWRnZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HcmFwaE1pbmlwdWxhdG9yID0gdm9pZCAwO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi91dGlsL2Fzc2VydFwiKTtcbi8qKlxuICogVG9vbCB0byBkbyBvcGVyYXRpb25zIG9uIGdyYXBocy5cbiAqL1xuY2xhc3MgR3JhcGhNaW5pcHVsYXRvciB7XG4gICAgLyoqXG4gICAgICogRmluZCBub2RlcyBvZiBjb21wb25lbnRzIG9mIGEgZ3JhcGggd2hlcmUgb25seSBlZGdlcyBmb3Igd2hpY2hcbiAgICAgKiB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gcmV0dXJucyB0cnVlIGFyZSBjb25zaWRlcmVkLlxuICAgICAqIEBwYXJhbVxuICAgICAqIEBwYXJhbSBpc0Nvbm5lY3RlZFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDb21wb25lbnROb2RlcyhpbnB1dCwgaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgY29uc3QgaW5jbHVkZWROb2RlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIGlucHV0LmdldE5vZGVzKCkpIHtcbiAgICAgICAgICAgIGlmIChpbmNsdWRlZE5vZGVzLmhhcyhub2RlKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0QWxsQ29ubmVjdGVkKG4pIHtcbiAgICAgICAgICAgICAgICBpbmNsdWRlZE5vZGVzLmFkZChuKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50LmhhcyhuKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5hZGQobik7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBuZWlnaGJvciBvZiBpbnB1dC5nZXROZWlnaGJvcnMobiwgXCJib3RoXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNDb25uZWN0ZWQoaW5wdXQuZ2V0RWRnZShuLCBuZWlnaGJvcikpKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIGdldEFsbENvbm5lY3RlZChuZWlnaGJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdldEFsbENvbm5lY3RlZChub2RlKTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5hZGQobm9kZSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFkZChjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKGluY2x1ZGVkTm9kZXMuc2l6ZSA9PSBpbnB1dC5udW1Ob2RlcygpKTtcbiAgICAgICAgLy8gQXNzZXJ0IGNvbXBvbmVudHMgYXJlIHBhaXJ3aXNlIGRpc2pvaW50IG9mIHByb2JsZW1zIHNob3cgdXBcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgZXZlcnkgZWRnZSBpbiB0aGUgZ3JhcGguXG4gICAgICogQHBhcmFtIGlucHV0XG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UmVsYXRpb25zKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IG91dCA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgaW5wdXQuZ2V0Tm9kZXMoKSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBvdGhlciBvZiBpbnB1dC5nZXROZWlnaGJvcnMobm9kZSwgXCJvdXRcIikpIHtcbiAgICAgICAgICAgICAgICBvdXQucHVzaCh7IGZpcnN0OiBub2RlLCBzZWNvbmQ6IG90aGVyLCBlOiBpbnB1dC5nZXRFZGdlKG5vZGUsIG90aGVyKSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIGdyYXBoIGludG8gc2V0cyBvZlxuICAgICAqIG5vZGVzIGdyb3VwZWQgYnkgZGVwdGggZnJvbSBhIGNlbnRlciBub2RlLlxuICAgICAqIEFzc3VtZXMgdGhlIGdyYXBoIGlzIGNvbm5lY3RlZC5cbiAgICAgKiBAcGFyYW0gcm9vdE5vZGVzIENvbnRhaW5zIGF0IGxlYXN0IG9uZSBub2RlIGluIHRoZSBncmFwaC5cbiAgICAgKiBAcGFyYW0gY291bnQgRnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIGlmIGFueSBnaXZlbiBub2RlIHNob3VsZCBiZVxuICAgICAqIGluY2x1ZGVkIGluIHRoZSBkZXB0aCBjb3VudC4gRGVmYXVsdHMgdG8gY291bnRpbmcgYWxsIG5vZGVzLiBOb2RlcyB0aGF0XG4gICAgICogYXJlbid0IGluY2x1ZGVkIHdvbid0IGJlIGluIHRoZSByZXR1cm5lZCB2YWx1ZS5cbiAgICAgKiBAcmV0dXJucyBNYXAgZnJvbSBkZXB0aCBpbiBncmFwaCB0byBhIHNldCBvZiBub2RlcyBhdCB0aGF0IGRlcHRoLlxuICAgICAqXG4gICAgICovXG4gICAgc3RhdGljIGdldExldmVscyhpbnB1dCwgcm9vdE5vZGVzLCBjb3VudCA9ICgpID0+IHRydWUpIHtcbiAgICAgICAgY29uc3Qgcm9vdHMgPSBuZXcgU2V0KHJvb3ROb2Rlcyk7XG4gICAgICAgIGNvbnN0IGRlcHRocyA9IG5ldyBNYXAoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlY3Vyc2l2ZWx5IG1hcHMgb3V0IGFsbCBub2RlcyBpbiB0aGUgZ3JhcGgsXG4gICAgICAgICAqIHB1dHRpbiB0aGVtIGluIHRoZSBkZXB0aHMgbWFwLlxuICAgICAgICAgKiBAcGFyYW0gbm9kZVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gbWFwTm9kZShub2RlLCBkZXB0aCA9IDApIHtcbiAgICAgICAgICAgIGlmIChyb290cy5oYXMobm9kZSkpIHtcbiAgICAgICAgICAgICAgICBkZXB0aCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGVwdGggPCAoZGVwdGhzLmdldChub2RlKSA/PyBOdW1iZXIuTUFYX1ZBTFVFKSkge1xuICAgICAgICAgICAgICAgIGRlcHRocy5zZXQobm9kZSwgZGVwdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmVpZ2hib3JzID0gWy4uLmlucHV0LmdldE5laWdoYm9ycyhub2RlLCBcImJvdGhcIildO1xuICAgICAgICAgICAgbmVpZ2hib3JzLmZpbHRlcih2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBmb3VuZCBhIHNob3J0ZXIgcGF0aCB0byBpdCBvciB0aGVyZSB3YXMgbm8gZm91bmQgcGF0aCB0byBpdFxuICAgICAgICAgICAgICAgIHJldHVybiAoZGVwdGhzLmdldCh2YWx1ZSkgPT0gdW5kZWZpbmVkIHx8IGRlcHRocy5nZXQodmFsdWUpID4gZGVwdGgpICYmIHZhbHVlICE9PSBub2RlO1xuICAgICAgICAgICAgfSkuZm9yRWFjaChuID0+IHtcbiAgICAgICAgICAgICAgICBtYXBOb2RlKG4sIGNvdW50KG5vZGUpID8gZGVwdGggKyAxIDogZGVwdGgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbWFwTm9kZShbLi4ucm9vdHNdWzBdKTtcbiAgICAgICAgY29uc3Qgb3V0ID0gbmV3IE1hcCgpO1xuICAgICAgICBkZXB0aHMuZm9yRWFjaCgoZGVwdGgsIG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmICghY291bnQobm9kZSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKG91dC5nZXQoZGVwdGgpID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG91dC5zZXQoZGVwdGgsIG5ldyBTZXQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXQuZ2V0KGRlcHRoKS5hZGQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBnaXZlbiBncmFwaCBpcyBjb25uZWN0ZWQsIG1lYW5pbmcgdGhhdFxuICAgICAqIGl0J3MgcG9zc2libGUgdG8gdHJhdmVyc2UgYmV0d2VlbiBhbnkgdHdvIG5vZGVzIG9uIHRoZSBncmFwaC5cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNDb25uZWN0ZWQoaW5wdXQpIHtcbiAgICAgICAgLy8gQ2hlY2sgZXZlcnkgbm9kZSBoYXMgYSBkZWdyZWUgb2YgMSBvciBtb3JlIG9yIGdyYXBoIG9ubHkgaGFzIDEgb3IgMCBlbGVtZW50c1xuICAgICAgICByZXR1cm4gWy4uLmlucHV0LmdldE5vZGVzKCldLm1hcChub2RlID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC5nZXREZWdyZWUobm9kZSwgXCJib3RoXCIpID4gMDtcbiAgICAgICAgfSkucmVkdWNlKChhLCBiKSA9PiBhICYmIGIpIHx8IGlucHV0Lm51bU5vZGVzKCkgPCAyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGaWx0ZXJzIGVkZ2VzIGxpc3QgcmV0dXJuaW5nIGEgbGlzdCB3aGVyZSBvbmx5IG9uZSBlZGdlXG4gICAgICogZnJvbSBhbnkgZWRnZSBsb29wcyBpcyBpbmNsdWRlZC5cbiAgICAgKiBGb3IgZXhhbXBsZSBpZiB0aGUgaW5wdXQgZWRnZXMgYXJlIGEgLT4gYiBhbmQgYiAtPiBhLFxuICAgICAqIHRoZSByZXN1bHQgd2lsbCBvbmx5IGNvbnRhaW4gYSAtPiBiLlxuICAgICAqIEBwYXJhbSBlZGdlc1xuICAgICAqL1xuICAgIHN0YXRpYyBkcm9wU3ltbWV0cmljKGVkZ2VzKSB7XG4gICAgICAgIGNvbnN0IG91dCA9IFtdO1xuICAgICAgICBmdW5jdGlvbiBhbHJlYWR5SGFzKGVkZ2UpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZSBvZiBvdXQpXG4gICAgICAgICAgICAgICAgaWYgKGVkZ2UubiA9PSBlLm4xICYmIGVkZ2UubjEgPT0gZS5uKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGVkZ2Ugb2YgZWRnZXMpIHtcbiAgICAgICAgICAgIGlmICghYWxyZWFkeUhhcyhlZGdlKSlcbiAgICAgICAgICAgICAgICBvdXQucHVzaChlZGdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbn1cbmV4cG9ydHMuR3JhcGhNaW5pcHVsYXRvciA9IEdyYXBoTWluaXB1bGF0b3I7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUmVsYXRpb25zaGlwID0gdm9pZCAwO1xuLyoqXG4gKiBBIHdheSBpbiB3aGljaCAyIGV4cHJlc3Npb25zIGNhbiBiZSByZWxhdGVkLlxuICovXG52YXIgUmVsYXRpb25zaGlwO1xuKGZ1bmN0aW9uIChSZWxhdGlvbnNoaXApIHtcbiAgICBSZWxhdGlvbnNoaXBbXCJFcXVhbFwiXSA9IFwiPVwiO1xufSkoUmVsYXRpb25zaGlwID0gZXhwb3J0cy5SZWxhdGlvbnNoaXAgfHwgKGV4cG9ydHMuUmVsYXRpb25zaGlwID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5EZXJpdmVyID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi9Bcmd1bWVudFwiKTtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuLi9leHByZXNzaW9ucy9FeHByZXNzaW9uXCIpO1xuY29uc3QgR3JhcGhfMSA9IHJlcXVpcmUoXCIuLi9HcmFwaFwiKTtcbmNvbnN0IEdyYXBoTWluaXB1bGF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HcmFwaE1pbmlwdWxhdG9yXCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4vTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbmNvbnN0IHJlY3Vyc2lvbl8xID0gcmVxdWlyZShcIi4vcmVjdXJzaW9uXCIpO1xuY29uc3QgUmVsYXRpb25hbERlcml2YXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi9SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGVcIik7XG4vKipcbiAqIEhvbGRzIGEgc2luZ2xlIGdyYXBoIGFuZCBleHBhbmRzIGl0IHVzaW5nIHJ1bGVzLlxuICovXG5jbGFzcyBEZXJpdmVyIHtcbiAgICAvKipcbiAgICAgKiBHaXZlIGl0IHRoZSBncmFwaCB5b3UncmUgZ29pbmcgdG8gZXhwYW5kLlxuICAgICAqIEBwYXJhbSBncmFwaFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGdyYXBoKSB7XG4gICAgICAgIHRoaXMuZ3JhcGggPSBncmFwaDtcbiAgICAgICAgdGhpcy5zaW1wbGlmaWVkSW5Jc29sYXRpb24gPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMubm90U2ltcGxpZmlhYmxlID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFeHBhbmRzIHRoZSBncmFwaCBhcmJpdHJhcmlseS5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIHN0aWxsIHBvb3JseSBkZWZpbmVkLFxuICAgICAqIHZlcnkgZXhwZXJlbWVudGFsLlxuICAgICAqL1xuICAgIGV4cGFuZCgpIHtcbiAgICAgICAgLy8gU2ltcGxpZnkgYWxsIHRoZSBleHByZXNzaW9ucyB1c2luZyB0aGUgY29udGV4dGxlc3Mgc2ltcGxpZnlpbmcgcnVsZXNcbiAgICAgICAgLy8gRG8gdGhpcyB1bnRpbCB0aGVyZSdzIG5vdGhpbmcgbW9yZSB0byBzaW1wbGlmeVxuICAgICAgICB0aGlzLnNpbXBsaWZ5Tm9Db250ZXh0KCk7XG4gICAgICAgIHRoaXMuYWxnZWJyYWljRXhwYW5zaW9uKCk7XG4gICAgICAgIHRoaXMuc2ltcGxpZnlOb0NvbnRleHQoKTtcbiAgICAgICAgdGhpcy5hbGdlYnJhaWNFeHBhbnNpb24oKTtcbiAgICAgICAgdGhpcy5zaW1wbGlmeU5vQ29udGV4dCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWN1cnNpdmVseSBtYWtlcyBzdXJlIHRoYXQgZXZlcnkgbm9kZSBpbiB0aGUgZ3JhcGhcbiAgICAgKiBpcyBlaXRoZXIgc2ltcGxpZmllZCAobWVhbmluZyB0aGVyZSBpcyBubyBjb250ZXh0bGVzc1xuICAgICAqIHJ1bGUgdGhhdCBjYW4gc2ltcGxpZnkgaXQgZnVydGhlcikgb3IgaXMgbWFya2VkIGRvd25cbiAgICAgKiBhcyB1bnNpbXBsaWZpYWJsZS5cbiAgICAgKi9cbiAgICBzaW1wbGlmeU5vQ29udGV4dCgpIHtcbiAgICAgICAgY29uc3QgcnVsZXMgPSBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZS5ydWxlcztcbiAgICAgICAgY29uc3QgdW5jaGVja2VkID0gWy4uLnRoaXMuZ3JhcGguZ2V0Tm9kZXMoKV0uZmlsdGVyKG4gPT4gbiBpbnN0YW5jZW9mIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uKVxuICAgICAgICAgICAgLm1hcChuID0+IG4pXG4gICAgICAgICAgICAuZmlsdGVyKGUgPT4gIXRoaXMuc2ltcGxpZmllZEluSXNvbGF0aW9uLmhhcyhlKSk7XG4gICAgICAgIHVuY2hlY2tlZC5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2ltcGxpZmljYXRpb25zID0gKDAsIHJlY3Vyc2lvbl8xLmVxdWl2KShlLCBjb250ZXh0bGVzc1NpbXBsaWZpY2F0aW9uc0ZuKTtcbiAgICAgICAgICAgIHRoaXMuc2ltcGxpZmllZEluSXNvbGF0aW9uLmFkZChlKTtcbiAgICAgICAgICAgIGlmIChzaW1wbGlmaWNhdGlvbnMubGVuZ3RoID09IDApXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RTaW1wbGlmaWFibGUuYWRkKGUpO1xuICAgICAgICAgICAgc2ltcGxpZmljYXRpb25zLmZvckVhY2goYSA9PiB0aGlzLmdyYXBoLmFkZEFyZ3VtZW50KGEpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh1bmNoZWNrZWQubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHRoaXMuc2ltcGxpZnlOb0NvbnRleHQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXhwYW5kcyB0aGUgZ3JhcGggdXNpbmcgYWxnZWJyYSBydWxlcy5cbiAgICAgKiBPbmx5IHNpbXBsaWZpZWQgcnVsZXMgYXJlIHVzZWQuXG4gICAgICovXG4gICAgYWxnZWJyYWljRXhwYW5zaW9uKCkge1xuICAgICAgICBjb25zdCBydWxlcyA9IFsuLi5SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGVfMS5SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGUucnVsZXNdO1xuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gWy4uLkdyYXBoTWluaXB1bGF0b3JfMS5HcmFwaE1pbmlwdWxhdG9yLmdldENvbXBvbmVudE5vZGVzKHRoaXMuZ3JhcGgsIGVkZ2UgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoZWRnZSBpbnN0YW5jZW9mIEFyZ3VtZW50XzEuQXJndW1lbnQgJiYgZWRnZS5yZWxhdGlvbnNoaXAgPT0gUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsKVxuICAgICAgICAgICAgICAgICAgICB8fCAoZWRnZSBpbnN0YW5jZW9mIEdyYXBoXzEuR2l2ZW5FZGdlICYmIGVkZ2UuciA9PSBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwpO1xuICAgICAgICAgICAgfSldO1xuICAgICAgICBjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVxdWF0aW9uID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbiAmJiB0aGlzLm5vdFNpbXBsaWZpYWJsZS5oYXMobm9kZSkpXG4gICAgICAgICAgICAgICAgICAgIGVxdWF0aW9uLnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBydWxlcy5mb3JFYWNoKHIgPT4ge1xuICAgICAgICAgICAgICAgIHIuYXBwbHkoc2V0T2YoLi4uZXF1YXRpb24pKS5mb3JFYWNoKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoLmFkZEFyZ3VtZW50KGEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBncmFwaDtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIGV4cHJlc3Npb24gaXMgaW4gdGhlIGdyYXBoXG4gICAgICogYW5kIGhhcyBhbHJlYWR5IGhhZCB0aGUgY29udGV4dGxlc3Mgc2ltcGxpZmljYXRpb24gb3BlcmF0aW9uc1xuICAgICAqIGRvbmUgdG8gaXQgYW5kIGNhbm5vdCBiZSBmdXJ0aGVyIHNpbXBsaWZpZWQuXG4gICAgICovXG4gICAgaXNTaW1wbGlmaWVkKGV4cCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RTaW1wbGlmaWFibGUuaGFzKGV4cCk7XG4gICAgfVxuICAgIC8vIEEgc2V0IG9mIG5vZGVzIGluIHRoZSBncmFwaCB3aGljaCBoYXZlIGhhZCBhbGwgc2ltcGxpZmljYXRpb24gXG4gICAgLy8gb3BlcmF0aW9ucyBkb25lIHRvIHRoZW0uXG4gICAgc2ltcGxpZmllZEluSXNvbGF0aW9uO1xuICAgIC8vIFRoZSBzZXQgb2Ygbm9kZXMgaW4gdGhlIGdyYXBoIHRoYXQgaGF2ZSBoYWQgY29udGV4dGxlc3NcbiAgICAvLyBzaW1wbGlmaWNhdGlvbiBvcGVyYXRpb25zIHJ1biBvbiB0aGVtIGFuZCBhcmVuJ3QgZnVydGhlclxuICAgIC8vIHNpbXBsaWZpYWJsZVxuICAgIG5vdFNpbXBsaWZpYWJsZTtcbn1cbmV4cG9ydHMuRGVyaXZlciA9IERlcml2ZXI7XG4vKipcbiAqIEZpbmRzIGVxdWl2YWxlbnRzIG9mIHRoZSBnaXZlbiBleHByZXNzaW9uXG4gKiB1c2luZyBydWxlcyBvZiBpbmZlcmVuY2UuIE5vdCByZWN1cnNpdmUuXG4gKiBAcGFyYW0gZXhwXG4gKi9cbmNvbnN0IGNvbnRleHRsZXNzU2ltcGxpZmljYXRpb25zRm4gPSBmdW5jdGlvbiBkaXJlY3RFcXVpdmFsZW50cyhleHApIHtcbiAgICBjb25zdCBydWxlcyA9IFsuLi5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZS5ydWxlc107XG4gICAgY29uc3Qgb3V0ID0gbmV3IFNldCgpO1xuICAgIHJ1bGVzLmZpbHRlcihyID0+IHIuYXBwbGllcyhleHApKS5mb3JFYWNoKHJ1bGUgPT4ge1xuICAgICAgICBydWxlLmFwcGx5KGV4cCkuZm9yRWFjaChpID0+IHtcbiAgICAgICAgICAgIG91dC5hZGQoaSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBvdXQ7XG59O1xuZnVuY3Rpb24gc2V0T2YoLi4uYXJyKSB7XG4gICAgY29uc3Qgb3V0ID0gbmV3IFNldCgpO1xuICAgIGFyci5mb3JFYWNoKGUgPT4gb3V0LmFkZChlKSk7XG4gICAgcmV0dXJuIG91dDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlID0gdm9pZCAwO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi4vdXRpbC9hc3NlcnRcIik7XG4vKipcbiAqIEEgcnVsZSB0aGF0IHRha2VzIGFuIGV4cHJlc3Npb24gYW5kIHByb2R1Y2VzIGFuIGVxdWl2YWxlbnQgZXhwcmVzc2lvbi5cbiAqIEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVzIGNhbiB1c2UgcmVmbGVjdGlvbiB0byBkZXRlcm1pbmUgd2hhdFxuICogdHlwZSBvZiBleHByZXNzaW9uIHRoZXkncmUgZ2l2ZW4sIGJ1dCBzaG91bGQgdXNlIGV4cHJlc3Npb24gc3BlY2lmaWNcbiAqIGZ1bmN0aW9ucyBvbiBzdWItZXhwcmVzc2lvbnMuIFRoZXNlIHJ1bGVzIHdpbGwgYmUgcmVjdXJzaXZlbHkgdXNlZFxuICogdG8gZGVyaXZlIHNpbXBsaWZpZWQgZXhwcmVzc2lvbnMuXG4gKlxuICogVGhlc2UgcnVsZXMgYXJlIGFsc28gY29udGV4dGxlc3M6IHRoZXkncmUgb25seSBnaXZlbiB0aGUgZXhwcmVzc2lvbixcbiAqIG5vIG90aGVyIGluZm9ybWF0aW9uIGFib3V0IHRoZSBwcm9ibGVtLlxuICovXG5jbGFzcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICAvKipcbiAgICAgKiBBbGwgc3ViY2xhc3NlcyBzaG91bGQgcmVnaXN0ZXIgdGhlbXNlbHZlcyBpbiB0aGlzIGxpc3QuXG4gICAgICovXG4gICAgc3RhdGljIHJ1bGVzID0gbmV3IFNldCgpO1xuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGlzIHJ1bGUgY2FuIGZpbmQgZXF1aXZhbGVudHMgZm9yIHRoZVxuICAgICAqIGdpdmVuIGV4cHJlc3Npb24uIE9ubHkgY2FsbCBhcHBseSgpIGlmIHRydWUuXG4gICAgICovXG4gICAgYXBwbGllcyhleHApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwbGllc0ltcGwoZXhwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvZHVjZXMgYSBzZXQgb2YgZXhwcmVzc2lvbnMgdGhhdCBhcmUgZXF1aXZhbGVudCB0b1xuICAgICAqIHRoZSBnaXZlbiBvbmUuIE9ubHkgY2FsbCBpZiB0aGUgZ2l2ZW4gZXhwcmVzc2lvblxuICAgICAqIHBhc3NlZCB0aGUgYXBwbGllcygpIHRlc3QuXG4gICAgICogQHBhcmFtIGV4cCBUaGUgZXhwcmVzc2lvbiB0byBmaW5kIGFuIGVxdWl2YWxlbnQgZm9yLlxuICAgICAqIEByZXR1cm5zIFNldCBvZiBlcXVpdmFsZW50IGV4cHJlc3Npb25zLlxuICAgICAqL1xuICAgIGFwcGx5KGV4cCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmFwcGx5SW1wbChleHApO1xuICAgICAgICByZXN1bHQuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKGUgIT0gbnVsbCAmJiBlICE9IHVuZGVmaW5lZCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbmV4cG9ydHMuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSA9IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUmVsYXRpb25hbERlcml2YXRpb25SdWxlID0gdm9pZCAwO1xuLyoqXG4gKiBQcm9kdWNlcyB0cnV0aHMgZnJvbSBhIHNldCBvZiBlcXVpdmFsZW50IGV4cHJlc3Npb25zLlxuICovXG5jbGFzcyBSZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGUge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGVxdWF0aW9uIEEgc2V0IG9mIGV4cHJlc3Npb25zIHdoaWNoIGFyZSBlcXVhbC5cbiAgICAgKi9cbiAgICBhcHBseShlcXVhdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5hcHBseUltcGwoZXF1YXRpb24pO1xuICAgIH1cbiAgICBzdGF0aWMgcnVsZXMgPSBuZXcgU2V0KCk7XG59XG5leHBvcnRzLlJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZSA9IFJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5EaXZpZGVPbkJvdGhTaWRlcyA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vQXJndW1lbnRcIik7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db252ZW5pZW50RXhwcmVzc2lvbnNcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvUHJvZHVjdFwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IFJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL1JlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZVwiKTtcbmNsYXNzIERpdmlkZU9uQm90aFNpZGVzIGV4dGVuZHMgUmVsYXRpb25hbERlcml2YXRpb25SdWxlXzEuUmVsYXRpb25hbERlcml2YXRpb25SdWxlIHtcbiAgICBhcHBseUltcGwoZXF1YXRpb24pIHtcbiAgICAgICAgY29uc3Qgb3V0ID0gW107XG4gICAgICAgIGNvbnN0IGNvbWJpbmF0aW9ucyA9IGNhcnRlc2lhblByb2R1Y3QoZXF1YXRpb24pO1xuICAgICAgICBjb21iaW5hdGlvbnMuZmlsdGVyKHBhaXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHBhaXJbMF0gaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdDtcbiAgICAgICAgfSkuZm9yRWFjaChwYWlyID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBwYWlyWzBdO1xuICAgICAgICAgICAgY29uc3Qgb3RoZXIgPSBwYWlyWzFdO1xuICAgICAgICAgICAgLy8gU29tZSBwcm9kdWN0cyBoYXZlIG11bHRpcGxlIGZhY3RvcnNcbiAgICAgICAgICAgIHAuZmFjdG9ycy5mb3JFYWNoKGZhY3RvciA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNlY29uZDtcbiAgICAgICAgICAgICAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCkge1xuICAgICAgICAgICAgICAgICAgICBzZWNvbmQgPSBbLi4ub3RoZXIuZmFjdG9yc107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWNvbmQgPSBbb3RoZXJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBjbGFpbSA9IHsgbjogcC53aXRob3V0KGZhY3RvciksIG4xOiAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuZnJhY3Rpb24pKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5wcm9kdWN0T3JOb3QpKC4uLnNlY29uZCksIGZhY3RvciksIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCB9O1xuICAgICAgICAgICAgICAgIG91dC5wdXNoKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KG5ldyBTZXQoW3AsIG90aGVyXSksIGNsYWltLCBcImE9YiAmIGM9ZCA9PiBhL2MgPSBiL2RcIikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbn1cbmV4cG9ydHMuRGl2aWRlT25Cb3RoU2lkZXMgPSBEaXZpZGVPbkJvdGhTaWRlcztcbi8qKlxuICogR2V0cyB0aGUgYW50aS1yZWZsZXhpdmUgY2xvc3VyZSBvZiB0aGUgcmVsYXRpb24gQSB4IEEuXG4gKiBJdCdzIHN5bW1ldHJpYyBhbmQgdHJhbnNpdGl2ZS5cbiAqXG4gKiBAcGFyYW0gc2V0XG4gKi9cbmZ1bmN0aW9uIGNhcnRlc2lhblByb2R1Y3Qoc2V0KSB7XG4gICAgY29uc3Qgb3V0ID0gW107XG4gICAgZm9yIChjb25zdCBmaXJzdCBvZiBzZXQpIHtcbiAgICAgICAgZm9yIChjb25zdCBzZWNvbmQgb2Ygc2V0KSB7XG4gICAgICAgICAgICBpZiAoZmlyc3QgPT09IHNlY29uZClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIG91dC5wdXNoKFtmaXJzdCwgc2Vjb25kXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TdWJ0cmFjdEZyb21Cb3RoU2lkZXMgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL1Byb2R1Y3RcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9TdW1cIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi8uLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBSZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGVcIik7XG5jbGFzcyBTdWJ0cmFjdEZyb21Cb3RoU2lkZXMgZXh0ZW5kcyBSZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGVfMS5SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGUge1xuICAgIGFwcGx5SW1wbChlcXVhdGlvbikge1xuICAgICAgICBjb25zdCBvdXQgPSBbXTtcbiAgICAgICAgY29uc3QgY29tYmluYXRpb25zID0gY2FydGVzaWFuUHJvZHVjdChlcXVhdGlvbik7XG4gICAgICAgIC8vIElmIG9uZSBpcyBhZGRpdGlvbiwgc3VidHJhY3QgZnJvbSBib3RoIHNpZGVzXG4gICAgICAgIC8vIEhlcmUgd2UgZmlsdGVyIHNvIHRoYXQgb25seSBwYWlycyB3aGVyZSB0aGUgZmlyc3QgZXhwcmVzc2lvbiBpc1xuICAgICAgICAvLyBhIHN1bSBhcmUgb3BlcmF0ZWQgb24uIFRoaXMgd29ya3MgYmVjYXVzZSBjb21iaW5hdGlvbnMgaXMgc3ltZXRyaWMuXG4gICAgICAgIC8vIE5vdyBmb3IgZWFjaCBwYWlyIHdlIG9ubHkgaGF2ZSB0byBkZWFsIHdpdGggdGhlIGZpcnN0IGV4cCBiZWluZyBzdW0uXG4gICAgICAgIGNvbWJpbmF0aW9ucy5maWx0ZXIocGFpciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcGFpclswXSBpbnN0YW5jZW9mIFN1bV8xLlN1bTtcbiAgICAgICAgfSkuZm9yRWFjaChwYWlyID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHMgPSBwYWlyWzBdO1xuICAgICAgICAgICAgY29uc3Qgb3RoZXIgPSBwYWlyWzFdO1xuICAgICAgICAgICAgLy8gU29tZSBTdW1zIGhhdmUgbXVsdGlwbGUgdGVybXNcbiAgICAgICAgICAgIHMudGVybXMuZmlsdGVyKHRlcm0gPT4gISh0ZXJtIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3QgJiYgdGVybS5pc05lZ2F0aW9uKSlcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCh0ZXJtID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBvdGhlciBpcyBpdHNlbGYgYSBzdW0sIHdlIHdpbGwgYnJlYWsgaXQgYXBhcnRcbiAgICAgICAgICAgICAgICAvLyBpbnRvIHRlcm1zIHNvIHRoYXQgd2UgY2FuIGNvbWJpbmUgaW50ZWdlciB0ZXJtcyBpbiB0aGVcbiAgICAgICAgICAgICAgICAvLyBmaW5hbCByZXN1bHQgYW5kIGF2b2lkXG4gICAgICAgICAgICAgICAgLy8geCArIDIgKyAyID0geSArIDIgPT4geCArIDIgPSB5ICsgMiAtIDJcbiAgICAgICAgICAgICAgICAvLyBOb3RlOiBXZSBvbmx5IGRvIHRoaXMgdG8gaW50ZWdlciB0ZXJtcywgYmVjYXVzZSB0aGF0J3NcbiAgICAgICAgICAgICAgICAvLyBzbyBvYnZpb3VzIGFuZCBjb3VsZG4ndCBwb3NzaWJseSBuZWVkIHRvIGJlIGV4cGxhaW5lZCBmdXJ0aGVyLlxuICAgICAgICAgICAgICAgIC8vIFdlIGRvbid0IGRvIGl0IHRvIHZhcmlhYmxlIHRlcm1zLiBUaGUgZm9sbG93aW5nIGlzIGNvcnJlY3QgYmVoYXZpb3I6XG4gICAgICAgICAgICAgICAgLy8geCArIGEgKyBhID0geSArIGEgPT4geCArIGEgPSB5ICsgYSAtIGFcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBUaGlzIGRpc3RpbmN0aW9uIGlzIGRlYmF0YWJsZS4gV2h5IHNob3VsZG4ndCB0aGUgbGVmdCBoYW5kXG4gICAgICAgICAgICAgICAgLy8gb2YgdGhlIGxhc3QgZGVkdWN0aW9uIGJlIHggKyBhICsgYSAtIGE/IEJ5IGRvaW5nIHRoaXMsIFxuICAgICAgICAgICAgICAgIC8vIHdlIHByb2R1Y2UgYSBtdWNoIG1vcmUgY29tcGxpY2F0ZWQgYW5kIGV4cGVuc2l2ZSBncmFwaC4gXG4gICAgICAgICAgICAgICAgbGV0IHNlY29uZDtcbiAgICAgICAgICAgICAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBTdW1fMS5TdW0pIHtcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kID0gWy4uLm90aGVyLnRlcm1zXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZCA9IFtvdGhlcl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGNsYWltID0geyBuOiBzLndpdGhvdXQodGVybSksIG4xOiAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtSW50dWl0aXZlKSguLi5zZWNvbmQsICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5uZWdhdGl2ZSkodGVybSkpLCByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwgfTtcbiAgICAgICAgICAgICAgICBvdXQucHVzaChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudChuZXcgU2V0KFtzLCBvdGhlcl0pLCBjbGFpbSwgXCJhPWIgJiBjPWQgPT4gYS1jID0gYi1kXCIpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG59XG5leHBvcnRzLlN1YnRyYWN0RnJvbUJvdGhTaWRlcyA9IFN1YnRyYWN0RnJvbUJvdGhTaWRlcztcbi8qKlxuICogR2V0cyB0aGUgYW50aS1yZWZsZXhpdmUgY2xvc3VyZSBvZiB0aGUgcmVsYXRpb24gQSB4IEEuXG4gKiBJdCdzIHN5bW1ldHJpYyBhbmQgdHJhbnNpdGl2ZS5cbiAqXG4gKiBAcGFyYW0gc2V0XG4gKi9cbmZ1bmN0aW9uIGNhcnRlc2lhblByb2R1Y3Qoc2V0KSB7XG4gICAgY29uc3Qgb3V0ID0gW107XG4gICAgZm9yIChjb25zdCBmaXJzdCBvZiBzZXQpIHtcbiAgICAgICAgZm9yIChjb25zdCBzZWNvbmQgb2Ygc2V0KSB7XG4gICAgICAgICAgICBpZiAoZmlyc3QgPT09IHNlY29uZClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIG91dC5wdXNoKFtmaXJzdCwgc2Vjb25kXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5lcXVpdiA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vQXJndW1lbnRcIik7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMSA9IHJlcXVpcmUoXCIuLi9Db252ZW5pZW50RXhwcmVzc2lvbnNcIik7XG5jb25zdCBEZXJpdmF0aXZlXzEgPSByZXF1aXJlKFwiLi4vZXhwcmVzc2lvbnMvRGVyaXZhdGl2ZVwiKTtcbmNvbnN0IEV4cG9uZW50XzEgPSByZXF1aXJlKFwiLi4vZXhwcmVzc2lvbnMvRXhwb25lbnRcIik7XG5jb25zdCBGcmFjdGlvbl8xID0gcmVxdWlyZShcIi4uL2V4cHJlc3Npb25zL0ZyYWN0aW9uXCIpO1xuY29uc3QgSW50ZWdlcl8xID0gcmVxdWlyZShcIi4uL2V4cHJlc3Npb25zL0ludGVnZXJcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi4vZXhwcmVzc2lvbnMvUHJvZHVjdFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4uL2V4cHJlc3Npb25zL1N1bVwiKTtcbmNvbnN0IFZhcmlhYmxlXzEgPSByZXF1aXJlKFwiLi4vZXhwcmVzc2lvbnMvVmFyaWFibGVcIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xID0gcmVxdWlyZShcIi4uL3V0aWwvVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJcIik7XG4vKipcbiAqIEdldHMgYWxsIGVxdWl2YWxlbnRzIG9mIHRoZSBnaXZlbiBleHByZXNzaW9uXG4gKiBjaGVja2luZyBpdCdzIGNoaWxkcmVuJ3MgZXF1aXZhbGVudHMuXG4gKlxuICogKGEgKyBhKSArIChiICsgYilcbiAqIC0+ICgyYSkgKyAoYiArIGIpIHdpdGggaW5mZXJlbmNlIGEgKyBhID0gMmFcbiAqIEBwYXJhbSBleHBcbiAqIEBwYXJhbSBkaXJlY3RFcXVpdmFsZW50cyBGdW5jdGlvbiB0aGF0IHdpbGwgcHJvZHVjZSBlcXVpdmFsZW50IGV4cHJlc3Npb25zXG4gKiAgICAgICAgd2l0aG91dCByZWN1cnNpb24uXG4gKiBAcmV0dXJucyBBcnJheSBvZiBpbmZlcmVuY2VzIHRvIGVxdWl2YWxlbnQgZXhwcmVzc2lvbnMuXG4gKi9cbmZ1bmN0aW9uIGVxdWl2KGV4cCwgZGlyZWN0RXF1aXZhbGVudHMpIHtcbiAgICBpZiAoZXhwIGluc3RhbmNlb2YgVmFyaWFibGVfMS5WYXJpYWJsZSB8fCBleHAgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcilcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIGVsc2VcbiAgICAgICAgc3dpdGNoIChleHAuY2xhc3MpIHtcbiAgICAgICAgICAgIGNhc2UgU3VtXzEuU3VtVHlwZTogcmV0dXJuIHN1bUVxdWl2KGV4cCwgZGlyZWN0RXF1aXZhbGVudHMpO1xuICAgICAgICAgICAgY2FzZSBQcm9kdWN0XzEuUHJvZHVjdFR5cGU6IHJldHVybiBwcm9kdWN0RXF1aXYoZXhwLCBkaXJlY3RFcXVpdmFsZW50cyk7XG4gICAgICAgICAgICBjYXNlIEV4cG9uZW50XzEuRXhwb25lbnRUeXBlOiByZXR1cm4gZXhwb25lbnRFcXVpdihleHAsIGRpcmVjdEVxdWl2YWxlbnRzKTtcbiAgICAgICAgICAgIGNhc2UgRnJhY3Rpb25fMS5GcmFjdGlvblR5cGU6IHJldHVybiBmcmFjdGlvbkVxdWl2KGV4cCwgZGlyZWN0RXF1aXZhbGVudHMpO1xuICAgICAgICAgICAgY2FzZSBEZXJpdmF0aXZlXzEuRGVyaXZhdGl2ZVR5cGU6IHJldHVybiBkZXJpdmF0aXZlRXF1aXYoZXhwLCBkaXJlY3RFcXVpdmFsZW50cyk7XG4gICAgICAgICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQgZm9yIFwiICsgZXhwLmNsYXNzKTtcbiAgICAgICAgfVxufVxuZXhwb3J0cy5lcXVpdiA9IGVxdWl2O1xuLyoqXG4gKiBHZXRzIGFsbCBlcXVpdmFsZW50cyBvZiB0aGUgZ2l2ZW4gZXhwcmVzc2lvblxuICogYnkgc3dhcHBpbmcgb3V0IGl0J3MgY2hpbGRyZW4gaW5kaXZpZHVhbGx5LlxuICpcbiAqIChhICsgYSkgKyAoYiArIGIpXG4gKiAtPiAoMmEpICsgKGIgKyBiKSB3aXRoIGluZmVyZW5jZSBhICsgYSA9IDJhXG4gKiBAcGFyYW0gZXhwXG4gKiBAcmV0dXJucyBBcnJheSBvZiBpbmZlcmVuY2VzIHRvIGVxdWl2YWxlbnQgZXhwcmVzc2lvbnMuXG4gKi9cbmZ1bmN0aW9uIHN1bUVxdWl2KGV4cCwgZGlyZWN0RXF1aXZhbGVudHMpIHtcbiAgICBjb25zdCBlcXVpdmFsZW50U3VtcyA9IG5ldyBTZXQoKTtcbiAgICAvLyBBZGQgdG9wIGxldmVsIGVxdWl2YWxlbnRzXG4gICAgZGlyZWN0RXF1aXZhbGVudHMoZXhwKS5mb3JFYWNoKGluZiA9PiB7XG4gICAgICAgIGVxdWl2YWxlbnRTdW1zLmFkZChpbmYpO1xuICAgIH0pO1xuICAgIC8vIEZpbmQgZXF1aXZhbGVudHMgZm9yIGVhY2ggdGVybVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwLnRlcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRlcm0gPSBleHAudGVybXNbaV07XG4gICAgICAgIC8vIFN1YnN0aXR1dGUgdGVybSBmb3IgZWFjaCBlcXVpdmFsZW50XG4gICAgICAgIGVxdWl2KHRlcm0sIGRpcmVjdEVxdWl2YWxlbnRzKS5mb3JFYWNoKGEgPT4ge1xuICAgICAgICAgICAgZXF1aXZhbGVudFN1bXMuYWRkKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgICAgICBuMTogc3dhcChleHAsIGksIGEuY2xhaW0ubjEpXG4gICAgICAgICAgICB9LCBhLmFyZ3VtZW50KSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzd2FwKHMsIGksIGUpIHtcbiAgICAgICAgY29uc3QgdGVybXMgPSBbLi4ucy50ZXJtc107XG4gICAgICAgIHRlcm1zW2ldID0gZTtcbiAgICAgICAgcmV0dXJuICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKC4uLnRlcm1zKTtcbiAgICB9XG4gICAgcmV0dXJuIFsuLi5lcXVpdmFsZW50U3Vtc107XG59XG5mdW5jdGlvbiBwcm9kdWN0RXF1aXYoZXhwLCBkaXJlY3RFcXVpdmFsZW50cykge1xuICAgIGNvbnN0IGVxdWl2YWxlbnRQcm9kdWN0cyA9IG5ldyBTZXQoKTtcbiAgICAvLyBBZGQgdG9wIGxldmVsIGVxdWl2YWxlbnRzXG4gICAgZGlyZWN0RXF1aXZhbGVudHMoZXhwKS5mb3JFYWNoKGluZiA9PiB7XG4gICAgICAgIGVxdWl2YWxlbnRQcm9kdWN0cy5hZGQoaW5mKTtcbiAgICB9KTtcbiAgICAvLyBGaW5kIGVxdWl2YWxlbnRzIGZvciBlYWNoIHRlcm1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4cC5mYWN0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGZhY3RvciA9IGV4cC5mYWN0b3JzW2ldO1xuICAgICAgICAvLyBTdWJzdGl0dXRlIHRlcm0gZm9yIGVhY2ggZXF1aXZhbGVudFxuICAgICAgICBlcXVpdihmYWN0b3IsIGRpcmVjdEVxdWl2YWxlbnRzKS5mb3JFYWNoKGFsdCA9PiB7XG4gICAgICAgICAgICBlcXVpdmFsZW50UHJvZHVjdHMuYWRkKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgICAgICBuMTogc3dhcChleHAsIGksIGFsdC5jbGFpbS5uMSksXG4gICAgICAgICAgICB9LCBhbHQuYXJndW1lbnQpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN3YXAocywgaSwgZSkge1xuICAgICAgICBjb25zdCB0ZXJtcyA9IFsuLi5zLmZhY3RvcnNdO1xuICAgICAgICB0ZXJtc1tpXSA9IGU7XG4gICAgICAgIHJldHVybiAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdCkoLi4udGVybXMpO1xuICAgIH1cbiAgICByZXR1cm4gWy4uLmVxdWl2YWxlbnRQcm9kdWN0c107XG59XG5mdW5jdGlvbiBleHBvbmVudEVxdWl2KGV4cCwgZGlyZWN0RXF1aXZhbGVudHMpIHtcbiAgICBjb25zdCBlcXVpdmFsZW50cyA9IG5ldyBTZXQoKTtcbiAgICAvLyBBZGQgdG9wIGxldmVsIGVxdWl2YWxlbnRzXG4gICAgZGlyZWN0RXF1aXZhbGVudHMoZXhwKS5mb3JFYWNoKGluZiA9PiB7XG4gICAgICAgIGVxdWl2YWxlbnRzLmFkZChpbmYpO1xuICAgIH0pO1xuICAgIGVxdWl2KGV4cC5iYXNlLCBkaXJlY3RFcXVpdmFsZW50cykuZm9yRWFjaChhbHQgPT4ge1xuICAgICAgICBlcXVpdmFsZW50cy5hZGQobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgIG4xOiBFeHBvbmVudF8xLkV4cG9uZW50Lm9mKGFsdC5jbGFpbS5uMSwgZXhwLnBvd2VyKVxuICAgICAgICB9LCBhbHQuYXJndW1lbnQpKTtcbiAgICB9KTtcbiAgICBlcXVpdihleHAucG93ZXIsIGRpcmVjdEVxdWl2YWxlbnRzKS5mb3JFYWNoKGFsdCA9PiB7XG4gICAgICAgIGVxdWl2YWxlbnRzLmFkZChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgbjE6IEV4cG9uZW50XzEuRXhwb25lbnQub2YoZXhwLmJhc2UsIGFsdC5jbGFpbS5uMSksXG4gICAgICAgIH0sIGFsdC5hcmd1bWVudCkpO1xuICAgIH0pO1xuICAgIHJldHVybiBbLi4uZXF1aXZhbGVudHNdO1xufVxuZnVuY3Rpb24gZnJhY3Rpb25FcXVpdihleHAsIGRpcmVjdEVxdWl2YWxlbnRzKSB7XG4gICAgY29uc3QgZXF1aXZhbGVudHMgPSBuZXcgU2V0KCk7XG4gICAgLy8gQWRkIHRvcCBsZXZlbCBlcXVpdmFsZW50c1xuICAgIGRpcmVjdEVxdWl2YWxlbnRzKGV4cCkuZm9yRWFjaChpbmYgPT4ge1xuICAgICAgICBlcXVpdmFsZW50cy5hZGQoaW5mKTtcbiAgICB9KTtcbiAgICBlcXVpdihleHAubnVtZXJhdG9yLCBkaXJlY3RFcXVpdmFsZW50cykuZm9yRWFjaChhbHQgPT4ge1xuICAgICAgICBlcXVpdmFsZW50cy5hZGQobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgIG4xOiBGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKGFsdC5jbGFpbS5uMSwgZXhwLmRlbm9taW5hdG9yKVxuICAgICAgICB9LCBhbHQuYXJndW1lbnQpKTtcbiAgICB9KTtcbiAgICBlcXVpdihleHAuZGVub21pbmF0b3IsIGRpcmVjdEVxdWl2YWxlbnRzKS5mb3JFYWNoKGFsdCA9PiB7XG4gICAgICAgIGVxdWl2YWxlbnRzLmFkZChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgbjE6IEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoZXhwLm51bWVyYXRvciwgYWx0LmNsYWltLm4xKSxcbiAgICAgICAgfSwgYWx0LmFyZ3VtZW50KSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFsuLi5lcXVpdmFsZW50c107XG59XG5mdW5jdGlvbiBkZXJpdmF0aXZlRXF1aXYoZXhwLCBkaXJlY3RFcXVpdmFsZW50cykge1xuICAgIGNvbnN0IGVxdWl2YWxlbnRzID0gbmV3IFNldCgpO1xuICAgIC8vIEFkZCB0b3AgbGV2ZWwgZXF1aXZhbGVudHNcbiAgICBkaXJlY3RFcXVpdmFsZW50cyhleHApLmZvckVhY2goaW5mID0+IHtcbiAgICAgICAgZXF1aXZhbGVudHMuYWRkKGluZik7XG4gICAgfSk7XG4gICAgZXF1aXYoZXhwLmV4cCwgZGlyZWN0RXF1aXZhbGVudHMpLmZvckVhY2goYWx0ID0+IHtcbiAgICAgICAgZXF1aXZhbGVudHMuYWRkKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogRGVyaXZhdGl2ZV8xLkRlcml2YXRpdmUub2YoYWx0LmNsYWltLm4xLCBleHAucmVsYXRpdmVUbylcbiAgICAgICAgfSwgYWx0LmFyZ3VtZW50KSk7XG4gICAgfSk7XG4gICAgZXF1aXYoZXhwLnJlbGF0aXZlVG8sIGRpcmVjdEVxdWl2YWxlbnRzKS5mb3JFYWNoKGFsdCA9PiB7XG4gICAgICAgIGVxdWl2YWxlbnRzLmFkZChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgbjE6IERlcml2YXRpdmVfMS5EZXJpdmF0aXZlLm9mKGV4cC5leHAsIGFsdC5jbGFpbS5uMSksXG4gICAgICAgIH0sIGFsdC5hcmd1bWVudCkpO1xuICAgIH0pO1xuICAgIHJldHVybiBbLi4uZXF1aXZhbGVudHNdO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNvbWJpbmVDb21tb25UZXJtc0FkZGl0aW9uID0gdm9pZCAwO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvU3VtXCIpO1xuLyoqXG4gKiBhICsgYSA9IDJhXG4gKlxuICogQnV0IG5vdFxuICogMSArIDEgPSAyKDEpXG4gKi9cbmNsYXNzIENvbWJpbmVDb21tb25UZXJtc0FkZGl0aW9uIGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICBpZiAoIShleHAgaW5zdGFuY2VvZiBTdW1fMS5TdW0pKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoZXhwLnJlZHVjaWJsZU9ySW50KVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBzdW0gPSBleHA7XG4gICAgICAgIGlmIChuZXcgU2V0KHN1bS50ZXJtcykuc2l6ZSA8IHN1bS50ZXJtcy5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGxldCBlcXVpdmFsZW50RXhwcmVzc2lvbnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGNvbnN0IHN1bSA9IGV4cDtcbiAgICAgICAgY29uc3QgdW5pcXVlVGVybXMgPSBuZXcgU2V0KHN1bS50ZXJtcyk7XG4gICAgICAgIC8vIFN1cHBvc2UgdGhlIHN1bSBpcyBhICsgYSArIGJcbiAgICAgICAgLy8gRm9yIGV2ZXJ5IHVuaXF1ZSB0ZXJtIGluIHthLCBifVxuICAgICAgICBmb3IgKGNvbnN0IHVuaXF1ZVRlcm0gb2YgdW5pcXVlVGVybXMpIHtcbiAgICAgICAgICAgIC8vIEF2b2lkIHVuaGVhbHRoeSBleHByZXNzaW9uc1xuICAgICAgICAgICAgaWYgKHVuaXF1ZVRlcm0ucmVkdWNpYmxlT3JJbnQpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBsZXQgcmVtYWluaW5nVGVybXMgPSBbXTtcbiAgICAgICAgICAgIGxldCBvY2N1cmFuY2VzID0gMDtcbiAgICAgICAgICAgIC8vIENvdW50IHRoZSBudW1iZXIgb2YgdGltZXMgaXQgb2NjdXJzIGluIHRoZSBzdW0sXG4gICAgICAgICAgICAvLyBjb2xsZWN0aW5nIGFsbCBvdGhlciB0ZXJtcy5cbiAgICAgICAgICAgIGZvciAoY29uc3QgdCBvZiBzdW0udGVybXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodCA9PSB1bmlxdWVUZXJtKSB7XG4gICAgICAgICAgICAgICAgICAgIG9jY3VyYW5jZXMrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZ1Rlcm1zLnB1c2godCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgaXQgb2NjdXJlcyBtdWx0aXBsZSB0aW1lcywgY3JlYXRlIGEgbmV3IHN1bVxuICAgICAgICAgICAgLy8gZXhwcmVzc2lvbiB3aXRoIHRoYXQgdGVybSBjb21iaW5lZFxuICAgICAgICAgICAgaWYgKG9jY3VyYW5jZXMgPiAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9ICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5vcmRlcmVkUHJvZHVjdCkoLi4uWygwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKG9jY3VyYW5jZXMpLCB1bmlxdWVUZXJtXSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlbWFpbmluZ1Rlcm1zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVxdWl2YWxlbnRFeHByZXNzaW9ucy5hZGQocHJvZHVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW1haW5pbmdUZXJtcy5wdXNoKHByb2R1Y3QpO1xuICAgICAgICAgICAgICAgICAgICBlcXVpdmFsZW50RXhwcmVzc2lvbnMuYWRkKFN1bV8xLlN1bS5vZihyZW1haW5pbmdUZXJtcykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUdXJuIHRoZSBlcXVpdmFsZW50IGV4cHJlc3Npb25zIGludG8gaW5mZXJlbmNlc1xuICAgICAgICBsZXQgaW5mZXJlbmNlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgZXF1aXZhbGVudEV4cHJlc3Npb25zLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBpbmZlcmVuY2VzLmFkZChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudChzZXRPZihzdW0pLCB7XG4gICAgICAgICAgICAgICAgbjogc3VtLFxuICAgICAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgICAgICBuMTogZSxcbiAgICAgICAgICAgIH0sIFwiRGlzdHJpYnV0aXZlIHByb3BlcnR5IG9mIG11bHRpcGxpY2F0aW9uXCIpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBpbmZlcmVuY2VzO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29tYmluZUNvbW1vblRlcm1zQWRkaXRpb24gPSBDb21iaW5lQ29tbW9uVGVybXNBZGRpdGlvbjtcbmZ1bmN0aW9uIHNldE9mKC4uLmFycikge1xuICAgIGNvbnN0IG91dCA9IG5ldyBTZXQoKTtcbiAgICBhcnIuZm9yRWFjaChlID0+IG91dC5hZGQoZSkpO1xuICAgIHJldHVybiBvdXQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29tYmluZUNvbW1vblRlcm1zTXVsdGlwbGljYXRpb24gPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgRXhwb25lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9FeHBvbmVudFwiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9JbnRlZ2VyXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL1Byb2R1Y3RcIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi8uLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbmNsYXNzIENvbWJpbmVDb21tb25UZXJtc011bHRpcGxpY2F0aW9uIGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICBpZiAoIShleHAgaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChleHAuaXNSZWR1Y2libGUpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBleHA7XG4gICAgICAgIGlmIChuZXcgU2V0KHByb2R1Y3QuZmFjdG9ycykuc2l6ZSA8IHByb2R1Y3QuZmFjdG9ycy5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGxldCBlcXVpdmFsZW50RXhwcmVzc2lvbnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBleHA7XG4gICAgICAgIGNvbnN0IHVuaXF1ZUZhY3RvcnMgPSBuZXcgU2V0KHByb2R1Y3QuZmFjdG9ycyk7XG4gICAgICAgIC8vIFN1cHBvc2UgdGhlIHByb2R1Y3QgaXMgYSAqIGEgKiBiXG4gICAgICAgIC8vIEZvciBldmVyeSB1bmlxdWUgZmFjdG9yIHthLCBifVxuICAgICAgICBmb3IgKGNvbnN0IHVuaXF1ZUZhY3RvciBvZiB1bmlxdWVGYWN0b3JzKSB7XG4gICAgICAgICAgICBsZXQgb2NjdXJhbmNlcyA9IDA7XG4gICAgICAgICAgICBsZXQgcmVtYWluaW5nRmFjdG9ycyA9IFtdO1xuICAgICAgICAgICAgLy8gQ291bnQgdGhlIG51bWJlciBvZiB0aW1lcyBpdCBvY2N1cnMgaW4gdGhlIHByb2R1Y3QsXG4gICAgICAgICAgICAvLyBjb2xsZWN0aW5nIGFsbCBvdGhlciBmYWN0b3JzLlxuICAgICAgICAgICAgZm9yIChjb25zdCB0IG9mIHByb2R1Y3QuZmFjdG9ycykge1xuICAgICAgICAgICAgICAgIGlmICh0ID09IHVuaXF1ZUZhY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICBvY2N1cmFuY2VzKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW1haW5pbmdGYWN0b3JzLnB1c2godCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgaXQgb2NjdXJlcyBtdWx0aXBsZSB0aW1lcywgY3JlYXRlIGEgbmV3IHN1bVxuICAgICAgICAgICAgLy8gZXhwcmVzc2lvbiB3aXRoIHRoYXQgdGVybSBjb21iaW5lZFxuICAgICAgICAgICAgaWYgKG9jY3VyYW5jZXMgPiAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhwb25lbnQgPSBFeHBvbmVudF8xLkV4cG9uZW50Lm9mKHVuaXF1ZUZhY3RvciwgSW50ZWdlcl8xLkludGVnZXIub2Yob2NjdXJhbmNlcykpO1xuICAgICAgICAgICAgICAgIGlmIChyZW1haW5pbmdGYWN0b3JzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVxdWl2YWxlbnRFeHByZXNzaW9ucy5hZGQoZXhwb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nRmFjdG9ycy5wdXNoKHByb2R1Y3QpO1xuICAgICAgICAgICAgICAgICAgICBlcXVpdmFsZW50RXhwcmVzc2lvbnMuYWRkKFByb2R1Y3RfMS5Qcm9kdWN0Lm9mKHJlbWFpbmluZ0ZhY3RvcnMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHVybiB0aGUgZXF1aXZhbGVudCBleHByZXNzaW9ucyBpbnRvIGluZmVyZW5jZXNcbiAgICAgICAgbGV0IGluZmVyZW5jZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGVxdWl2YWxlbnRFeHByZXNzaW9ucy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgaW5mZXJlbmNlcy5hZGQobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoc2V0T2YocHJvZHVjdCksIHtcbiAgICAgICAgICAgICAgICBuOiBwcm9kdWN0LFxuICAgICAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgICAgICBuMTogZSxcbiAgICAgICAgICAgIH0sIFwiRXhwb25lbnRpYWwgcnVsZSBmb3IgbXVsdGlwbHlpbmcgZXF1YWwgYmFzZXNcIikpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGluZmVyZW5jZXM7XG4gICAgfVxufVxuZXhwb3J0cy5Db21iaW5lQ29tbW9uVGVybXNNdWx0aXBsaWNhdGlvbiA9IENvbWJpbmVDb21tb25UZXJtc011bHRpcGxpY2F0aW9uO1xuZnVuY3Rpb24gc2V0T2YoLi4uYXJyKSB7XG4gICAgY29uc3Qgb3V0ID0gbmV3IFNldCgpO1xuICAgIGFyci5mb3JFYWNoKGUgPT4gb3V0LmFkZChlKSk7XG4gICAgcmV0dXJuIG91dDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FdmFsdWF0ZVN1bXMgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgSW50ZWdlcl8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL0ludGVnZXJcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9TdW1cIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi8uLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbi8qKlxuICogQ29tYmluZSBhbnkgaW50ZWdlciB0ZXJtcyBpbiBTdW1zLlxuICogYSArIDIgKyAyICsgMj0gYSArIDRcbiAqIDIgLSAyID0gMFxuICpcbiAqIENvbWJpbmVzIGFsbCBvZiB0aGVtIGF0IG9uY2Ugbm8gbWF0dGVyIGhvdyBtYW55IHRlcm1zIHRoZXJlIGFyZS5cbiAqXG4gKi9cbmNsYXNzIEV2YWx1YXRlU3VtcyBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGV4cCBpbnN0YW5jZW9mIFN1bV8xLlN1bTtcbiAgICB9XG4gICAgYXBwbHlJbXBsKGV4cCkge1xuICAgICAgICBjb25zdCBzdW0gPSBleHA7XG4gICAgICAgIGNvbnN0IG91dCA9IG5ldyBTZXQoKTtcbiAgICAgICAgY29uc3QgaW50ZWdlclRlcm1zID0gWy4uLnN1bS50ZXJtc10uZmlsdGVyKHQgPT4gdCBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKTtcbiAgICAgICAgaWYgKGludGVnZXJUZXJtcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdJbnQgPSBpbnRlZ2VyVGVybXMubWFwKGUgPT4gZSkucmVkdWNlKChhLCBiKSA9PiBJbnRlZ2VyXzEuSW50ZWdlci5vZihhLnZhbHVlICsgYi52YWx1ZSkpO1xuICAgICAgICBjb25zdCBvdGhlclRlcm1zID0gWy4uLnN1bS50ZXJtc10uZmlsdGVyKHQgPT4gISh0IGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpKTtcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgaWYgKG90aGVyVGVybXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KHNldE9mKHN1bSksIHtcbiAgICAgICAgICAgICAgICBuOiBzdW0sXG4gICAgICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgICAgIG4xOiBuZXdJbnRcbiAgICAgICAgICAgIH0sIFwiRXZhbHVhdGVkIEFkZGl0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoc2V0T2Yoc3VtKSwge1xuICAgICAgICAgICAgICAgIG46IHN1bSxcbiAgICAgICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICAgICAgbjE6IFN1bV8xLlN1bS5vZihvdGhlclRlcm1zLmNvbmNhdChuZXdJbnQpKSxcbiAgICAgICAgICAgIH0sIFwiRXZhbHVhdGVkIEFkZGl0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIG91dC5hZGQocmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG59XG5leHBvcnRzLkV2YWx1YXRlU3VtcyA9IEV2YWx1YXRlU3VtcztcbmZ1bmN0aW9uIHNldE9mKC4uLmFycikge1xuICAgIGNvbnN0IG91dCA9IG5ldyBTZXQoKTtcbiAgICBhcnIuZm9yRWFjaChlID0+IG91dC5hZGQoZSkpO1xuICAgIHJldHVybiBvdXQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuT3JkZXJTdW1zID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL1N1bVwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuLyoqXG4gKiBUdXJucyBzdW1zIHRoYXQgYXJlIHVuaGVhbHRoeSBiZWNhdXNlIHRoZWlyIHRlcm0gb3JkZXJcbiAqIGlzIHdyb25nIGludG8gY29ycmVjdGx5IG9yZGVyZWQgc3Vtcy5cbiAqL1xuY2xhc3MgT3JkZXJTdW1zIGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gIWV4cC5pc0hlYWx0aHkgJiYgZXhwLmNsYXNzID09PSBTdW1fMS5TdW1UeXBlO1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2V0KFtuZXcgQXJndW1lbnRfMS5Bcmd1bWVudChzZXRPZihleHApLCB7XG4gICAgICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgICAgICBuMTogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm9yZGVyZWRTdW0pKGV4cCksXG4gICAgICAgICAgICB9LCBcIlJlb3JkZXJlZFwiKV0pO1xuICAgIH1cbn1cbmV4cG9ydHMuT3JkZXJTdW1zID0gT3JkZXJTdW1zO1xuZnVuY3Rpb24gc2V0T2YoLi4uYXJyKSB7XG4gICAgY29uc3Qgb3V0ID0gbmV3IFNldCgpO1xuICAgIGFyci5mb3JFYWNoKGUgPT4gb3V0LmFkZChlKSk7XG4gICAgcmV0dXJuIG91dDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Qb3dlclJ1bGUgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgRGVyaXZhdGl2ZV8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL0Rlcml2YXRpdmVcIik7XG5jb25zdCBFeHBvbmVudF8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL0V4cG9uZW50XCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG4vKipcbiAqIERlcml2ZXMgdXNpbmcgdGhlIHBvd2VyIHJ1bGVcbiAqL1xuY2xhc3MgUG93ZXJSdWxlIGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gZXhwIGluc3RhbmNlb2YgRGVyaXZhdGl2ZV8xLkRlcml2YXRpdmVcbiAgICAgICAgICAgICYmIGV4cC5leHAgaW5zdGFuY2VvZiBFeHBvbmVudF8xLkV4cG9uZW50XG4gICAgICAgICAgICAmJiBleHAuZXhwLmJhc2UgPT09IGV4cC5yZWxhdGl2ZVRvXG4gICAgICAgICAgICAmJiBleHAuZXhwLnBvd2VyLmlzQ29uc3RhbnQ7XG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgY29uc3QgZCA9IGV4cDtcbiAgICAgICAgY29uc3QgZXhwb25lbnQgPSBkLmV4cDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3QpKGV4cG9uZW50LnBvd2VyLCBFeHBvbmVudF8xLkV4cG9uZW50Lm9mKGV4cG9uZW50LmJhc2UsICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKGV4cG9uZW50LnBvd2VyLnZhbHVlIC0gMSkpKTtcbiAgICAgICAgcmV0dXJuICgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgbjE6IHJlc3VsdFxuICAgICAgICB9LCBcIlBvd2VyIHJ1bGVcIikpO1xuICAgIH1cbn1cbmV4cG9ydHMuUG93ZXJSdWxlID0gUG93ZXJSdWxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlB1bGxDb25zdGFudHNGcm9tRGVyaXZhdGl2ZXMgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgRGVyaXZhdGl2ZV8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL0Rlcml2YXRpdmVcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvUHJvZHVjdFwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9UaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYlwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuY2xhc3MgUHVsbENvbnN0YW50c0Zyb21EZXJpdmF0aXZlcyBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGV4cCBpbnN0YW5jZW9mIERlcml2YXRpdmVfMS5EZXJpdmF0aXZlXG4gICAgICAgICAgICAmJiBleHAuZXhwIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3Q7XG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgY29uc3QgZCA9IGV4cDtcbiAgICAgICAgY29uc3QgcCA9IGQuZXhwO1xuICAgICAgICBjb25zdCBjb25zdEZhY3RvcnMgPSBwLmZhY3RvcnMuZmlsdGVyKGYgPT4gZi5pc0NvbnN0YW50KTtcbiAgICAgICAgY29uc3Qgb3V0ID0gbmV3IFNldDtcbiAgICAgICAgZm9yIChjb25zdCBmYWN0b3Igb2YgY29uc3RGYWN0b3JzKSB7XG4gICAgICAgICAgICBvdXQuYWRkKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShkKSwge1xuICAgICAgICAgICAgICAgIG46IGQsXG4gICAgICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgICAgIG4xOiAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdEFuZE5vdFRpbWVzT25lKShmYWN0b3IsIERlcml2YXRpdmVfMS5EZXJpdmF0aXZlLm9mKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5wcm9kdWN0T3JOb3QpKC4uLigwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5yZW1vdmVOZXcpKHAuZmFjdG9ycywgZmFjdG9yKSksIGQucmVsYXRpdmVUbykpXG4gICAgICAgICAgICB9LCBcIlB1bGwgY29uc3RhbnQgZmFjdG9yIGZyb20gZGVyaXZhdGl2ZVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG59XG5leHBvcnRzLlB1bGxDb25zdGFudHNGcm9tRGVyaXZhdGl2ZXMgPSBQdWxsQ29uc3RhbnRzRnJvbURlcml2YXRpdmVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlZHVjZVJlZHVjaWJsZXMgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG5jbGFzcyBSZWR1Y2VSZWR1Y2libGVzIGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gZXhwLmlzUmVkdWNpYmxlO1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2V0KFtuZXcgQXJndW1lbnRfMS5Bcmd1bWVudChzZXRPZihleHApLCB7XG4gICAgICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgICAgICBuMTogZXhwLnJlZHVjZWRcbiAgICAgICAgICAgIH0sIFwiUmVkdWNlZFwiKV0pO1xuICAgIH1cbn1cbmV4cG9ydHMuUmVkdWNlUmVkdWNpYmxlcyA9IFJlZHVjZVJlZHVjaWJsZXM7XG5mdW5jdGlvbiBzZXRPZiguLi5hcnIpIHtcbiAgICBjb25zdCBvdXQgPSBuZXcgU2V0KCk7XG4gICAgYXJyLmZvckVhY2goZSA9PiBvdXQuYWRkKGUpKTtcbiAgICByZXR1cm4gb3V0O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlN1bUNvZWZmaWNpZW50c09mQWRkZWRUZXJtcyA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vQXJndW1lbnRcIik7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db252ZW5pZW50RXhwcmVzc2lvbnNcIik7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvSW50ZWdlclwiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9Qcm9kdWN0XCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvU3VtXCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG4vKipcbiAqIFRha2VzIHN1bXMgb2Ygc2V2ZXJhbCBhZGRlZCBwcm9kdWN0cyBhbmQgY29tYmluZXMgb25lcyB0aGF0IG9ubHlcbiAqIGhhdmUgZGlmZmVyZW50IGNvZWZmaWNpZW50cy5cbiAqXG4gKiBhICsgMmEgPSAzYVxuICogYSAtIDJhID0gLTFhXG4gKi9cbmNsYXNzIFN1bUNvZWZmaWNpZW50c09mQWRkZWRUZXJtcyBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGV4cCBpbnN0YW5jZW9mIFN1bV8xLlN1bTtcbiAgICB9XG4gICAgYXBwbHlJbXBsKGV4cCkge1xuICAgICAgICBjb25zdCB0ZXJtcyA9IGV4cC50ZXJtcztcbiAgICAgICAgLy8gU3BsaXQgdGhlIHRlcm1zIGludG8gcHJvZHVjdCBhbmQgbm90IHByb2R1Y3RzXG4gICAgICAgIGNvbnN0IHByb2R1Y3RUZXJtcyA9IFtdO1xuICAgICAgICBjb25zdCBub25Qcm9kdWN0VGVybXMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCB0ZXJtIG9mIHRlcm1zKSB7XG4gICAgICAgICAgICBpZiAodGVybSBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0ICYmIHRlcm0uZmFjdG9yc1swXSBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRlcm1zLnB1c2godGVybSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBub25Qcm9kdWN0VGVybXMucHVzaCh0ZXJtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBTb3J0IHRoZSBwcm9kdWN0IHRlcm1zIGludG8gZ3JvdXBzIG9mIGNvbW1vbiBmYWN0b3JzXG4gICAgICAgIGNvbnN0IGdyb3VwcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgZm9yIChjb25zdCB0ZXJtIG9mIHByb2R1Y3RUZXJtcykge1xuICAgICAgICAgICAgY29uc3QgZmlyc3QgPSB0ZXJtLmZhY3RvcnNbMF07XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gWy4uLnRlcm0uZmFjdG9yc107XG4gICAgICAgICAgICB0ZW1wLnNwbGljZSgwLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3RPck5vdCkoLi4udGVtcCk7XG4gICAgICAgICAgICBpZiAoIWdyb3Vwcy5oYXMoZ3JvdXApKVxuICAgICAgICAgICAgICAgIGdyb3Vwcy5zZXQoZ3JvdXAsIHsgY29lZmZpY2llbnQ6IGZpcnN0LnZhbHVlLCBtb3JlVGhhbk9uZTogZmFsc2UgfSk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBncm91cHMuZ2V0KGdyb3VwKS5jb2VmZmljaWVudCArPSBmaXJzdC52YWx1ZTtcbiAgICAgICAgICAgICAgICBncm91cHMuZ2V0KGdyb3VwKS5tb3JlVGhhbk9uZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRm9yIGV2ZXJ5IGdyb3VwIHdpdGggbW9yZSB0aGFuIG9uZSBwcm9kdWN0LCBwcm9kdWNlIGEgbmV3IGFyZ3VtZW50XG4gICAgICAgIGNvbnN0IG91dCA9IG5ldyBTZXQoKTtcbiAgICAgICAgZ3JvdXBzLmZvckVhY2goKG9iaiwgZ3JvdXApID0+IHtcbiAgICAgICAgICAgIGlmICghb2JqLm1vcmVUaGFuT25lKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RUZXJtc05vdENvbWJpbmVkID0gcHJvZHVjdFRlcm1zLmZpbHRlcih0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0gWy4uLnQuZmFjdG9yc107XG4gICAgICAgICAgICAgICAgdGVtcC5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVybVdpdGhvdXRMZWFkaW5nQ29lZmZpY2llbnQgPSAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdE9yTm90KSguLi50ZW1wKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXAgIT09IHRlcm1XaXRob3V0TGVhZGluZ0NvZWZmaWNpZW50O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBvdXQuYWRkKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KHNldE9mKGV4cCksIHtcbiAgICAgICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgICAgIG4xOiAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtT3JOb3QpKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5wcm9kdWN0QW5kTm90VGltZXNPbmUpKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKG9iai5jb2VmZmljaWVudCksIGdyb3VwKSwgLi4ubm9uUHJvZHVjdFRlcm1zLCAuLi5wcm9kdWN0VGVybXNOb3RDb21iaW5lZClcbiAgICAgICAgICAgIH0sIFwiQ29tYmluaW5nIGxpa2UgdGVybXNcIikpO1xuICAgICAgICB9KTtcbiAgICAgICAgb3V0LmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIllpZWxkZWQgXCIgKyBhLmNsYWltLm4xLnRvU3RyaW5nKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG59XG5leHBvcnRzLlN1bUNvZWZmaWNpZW50c09mQWRkZWRUZXJtcyA9IFN1bUNvZWZmaWNpZW50c09mQWRkZWRUZXJtcztcbmZ1bmN0aW9uIHNldE9mKC4uLmFycikge1xuICAgIGNvbnN0IG91dCA9IG5ldyBTZXQoKTtcbiAgICBhcnIuZm9yRWFjaChlID0+IG91dC5hZGQoZSkpO1xuICAgIHJldHVybiBvdXQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVVN1YnN0aXR1dGlvbiA9IHZvaWQgMDtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuY2xhc3MgVVN1YnN0aXR1dGlvbiBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvL2V4cCBpbnN0YW5jZW9mIEludGVncmFsXG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkXCIpO1xuICAgIH1cbn1cbmV4cG9ydHMuVVN1YnN0aXR1dGlvbiA9IFVTdWJzdGl0dXRpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRGVyaXZhdGl2ZVR5cGUgPSBleHBvcnRzLkRlcml2YXRpdmUgPSB2b2lkIDA7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uXCIpO1xuY29uc3QgSW50ZWdlcl8xID0gcmVxdWlyZShcIi4vSW50ZWdlclwiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuL1Byb2R1Y3RcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuL1N1bVwiKTtcbi8qKlxuICpcbiAqL1xuY2xhc3MgRGVyaXZhdGl2ZSBleHRlbmRzIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uIHtcbiAgICBzdGF0aWMgb2YoZXhwLCByZWxhdGl2ZVRvKSB7XG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZXMuaGFzKGV4cC5oYXNoKSlcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzLnNldChleHAuaGFzaCArIHJlbGF0aXZlVG8uaGFzaCwgbmV3IERlcml2YXRpdmUoZXhwLCByZWxhdGl2ZVRvKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlcy5nZXQoZXhwLmhhc2ggKyByZWxhdGl2ZVRvLmhhc2gpO1xuICAgIH1cbiAgICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0cnVjdG9yKGV4cCwgcmVsYXRpdmVUbykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmV4cCA9IGV4cDtcbiAgICAgICAgdGhpcy5yZWxhdGl2ZVRvID0gcmVsYXRpdmVUbztcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLmV4cCk7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5yZWxhdGl2ZVRvKTtcbiAgICAgICAgdGhpcy5pc1JlZHVjaWJsZSA9IGZhbHNlOyAvL1RPRE86IERldGVybWluZSBpZiBhIGRlcml2YXRpdmUgaXMgcmVkdWNpYmxlXG4gICAgICAgIHRoaXMuaXNDb25zdGFudCA9IGZhbHNlOyAvLyBUT0RPOiBEZXRlcm1pbmUgaWYgYSBkZXJpdmF0aXZlIGlzIGNvbnN0YW50XG4gICAgICAgIHRoaXMuY2hpbGRDb3VudCA9IDIgKyBleHAuY2hpbGRDb3VudCArIHJlbGF0aXZlVG8uY2hpbGRDb3VudDtcbiAgICAgICAgbGV0IGlzSGVhbHRoeSA9IHRydWU7XG4gICAgICAgIGlmIChleHAuaXNDb25zdGFudClcbiAgICAgICAgICAgIGlzSGVhbHRoeSA9IGZhbHNlO1xuICAgICAgICBpZiAoZXhwIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3QpIHtcbiAgICAgICAgICAgIG5ldyBTZXQoZXhwLmZhY3RvcnMpLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlciB8fCBlIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3QgJiYgZS5pc05lZ2F0aW9uICYmIGUubmVnYXRpb24pXG4gICAgICAgICAgICAgICAgICAgIGlzSGVhbHRoeSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vVE9ETzogVGhlcmUgYXJlIGEgbG90IG1vcmUgcG9zc2libGl0aWVzIHRoYW4gdGhpc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0hlYWx0aHkgPSBpc0hlYWx0aHk7XG4gICAgfVxuICAgIGV4cDtcbiAgICByZWxhdGl2ZVRvO1xuICAgIGdldCByZWR1Y2VkKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLiBOb3Qgc3VyZSBpZiBkZXJpdmF0aXZlcyBzaG91bGQgYmUgcmVkdWNpYmxlLlwiKTtcbiAgICB9XG4gICAgaXNSZWR1Y2libGU7XG4gICAgY2xhc3MgPSBleHBvcnRzLkRlcml2YXRpdmVUeXBlO1xuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCJkL2RcIiArIHRoaXMucmVsYXRpdmVUby50b1N0cmluZygpICsgXCIoXCIgKyB0aGlzLmV4cC50b1N0cmluZygpICsgXCIpXCI7XG4gICAgfVxuICAgIGdldCBoYXNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGFzcyArIHRoaXMuZXhwLmhhc2ggKyB0aGlzLnJlbGF0aXZlVG8uaGFzaDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogMS4gZXhwIGlzbid0IGEgY29uc3RhbnRcbiAgICAgKiAyLiBJZiBleHAgaXMgcHJvZHVjdCwgaXQgY29udGFpbnMgbm8gY29uc3RhbnRzLlxuICAgICAqL1xuICAgIGlzSGVhbHRoeTtcbiAgICB0b01hdGhYTUwoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHdyYXBJZk5lZWRlZChleHApIHtcbiAgICAgICAgICAgIGlmIChleHAuY2xhc3MgPT0gU3VtXzEuU3VtVHlwZSB8fCBleHAuY2xhc3MgPT0gUHJvZHVjdF8xLlByb2R1Y3RUeXBlKVxuICAgICAgICAgICAgICAgIHJldHVybiBcIjxtbz4oPC9tbz5cIiArIGV4cC50b01hdGhYTUwoKSArIFwiPG1vPik8L21vPlwiO1xuICAgICAgICAgICAgcmV0dXJuIGV4cC50b01hdGhYTUwoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCI8bWZyYWM+PG1uPmQ8L21uPjxtcm93Pjxtbj5kPC9tbj5cIiArIHdyYXBJZk5lZWRlZCh0aGlzLnJlbGF0aXZlVG8pICsgXCI8L21yb3c+PC9tZnJhYz5cIiArIHdyYXBJZk5lZWRlZCh0aGlzLmV4cCk7XG4gICAgfVxuICAgIGlzQ29uc3RhbnQ7XG4gICAgY2hpbGRDb3VudDtcbn1cbmV4cG9ydHMuRGVyaXZhdGl2ZSA9IERlcml2YXRpdmU7XG5leHBvcnRzLkRlcml2YXRpdmVUeXBlID0gXCJEZXJpdmF0aXZlXCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXhwb25lbnRUeXBlID0gZXhwb3J0cy5FeHBvbmVudCA9IHZvaWQgMDtcbmNvbnN0IE1hdGhNTEhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuLi91dGlsL01hdGhNTEhlbHBlcnNcIik7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uXCIpO1xuY29uc3QgSW50ZWdlcl8xID0gcmVxdWlyZShcIi4vSW50ZWdlclwiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuL1Byb2R1Y3RcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuL1N1bVwiKTtcbmNsYXNzIEV4cG9uZW50IGV4dGVuZHMgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24ge1xuICAgIHN0YXRpYyBvZihiYXNlLCBwb3dlcikge1xuICAgICAgICBpZiAoIUV4cG9uZW50Lmluc3RhbmNlcy5oYXMoYmFzZSkpIHtcbiAgICAgICAgICAgIEV4cG9uZW50Lmluc3RhbmNlcy5zZXQoYmFzZSwgbmV3IE1hcCgpKTtcbiAgICAgICAgICAgIGlmICghRXhwb25lbnQuaW5zdGFuY2VzLmdldChiYXNlKS5oYXMocG93ZXIpKSB7XG4gICAgICAgICAgICAgICAgRXhwb25lbnQuaW5zdGFuY2VzLmdldChiYXNlKS5zZXQocG93ZXIsIG5ldyBFeHBvbmVudChiYXNlLCBwb3dlcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBFeHBvbmVudC5pbnN0YW5jZXMuZ2V0KGJhc2UpLmdldChwb3dlcik7XG4gICAgfVxuICAgIHN0YXRpYyBpbnN0YW5jZXMgPSBuZXcgTWFwKCk7XG4gICAgY2xhc3MgPSBleHBvcnRzLkV4cG9uZW50VHlwZTtcbiAgICB0b01hdGhYTUwoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHdyYXBJZk5lZWRlZChleHApIHtcbiAgICAgICAgICAgIGlmIChleHAuY2xhc3MgPT0gU3VtXzEuU3VtVHlwZSB8fCBleHAuY2xhc3MgPT0gUHJvZHVjdF8xLlByb2R1Y3RUeXBlKVxuICAgICAgICAgICAgICAgIHJldHVybiAoMCwgTWF0aE1MSGVscGVyc18xLmluUm93KSgoMCwgTWF0aE1MSGVscGVyc18xLmluUGFyZW4pKGV4cC50b01hdGhYTUwoKSkpO1xuICAgICAgICAgICAgcmV0dXJuIGV4cC50b01hdGhYTUwoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCI8bXN1cD5cIiArIHdyYXBJZk5lZWRlZCh0aGlzLmJhc2UpICsgdGhpcy5wb3dlci50b01hdGhYTUwoKSArIFwiPC9tc3VwPlwiO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwiKFwiICsgdGhpcy5iYXNlICsgXCIpXihcIiArIHRoaXMucG93ZXIgKyBcIilcIjtcbiAgICB9XG4gICAgZ2V0IGhhc2goKSB7XG4gICAgICAgIHJldHVybiBcIkV4cG9uZW50XCIgKyB0aGlzLmJhc2UuaGFzaCArIHRoaXMucG93ZXIuaGFzaDtcbiAgICB9XG4gICAgY29uc3RydWN0b3IoYmFzZSwgcG93ZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5iYXNlID0gYmFzZTtcbiAgICAgICAgdGhpcy5wb3dlciA9IHBvd2VyO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMuYmFzZSk7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5wb3dlcik7XG4gICAgICAgIC8vIFRoZSBpbnRlZ2VycyBhcmUgY2xvc2VkIG92ZXIgZXhwb25lbnRpYXRpb25cbiAgICAgICAgdGhpcy5pc1JlZHVjaWJsZSA9IChiYXNlLmlzUmVkdWNpYmxlIHx8IGJhc2UuY2xhc3MgPT0gSW50ZWdlcl8xLkludGVnZXJUeXBlKSAmJiAocG93ZXIuaXNSZWR1Y2libGUgfHwgcG93ZXIuY2xhc3MgPT0gSW50ZWdlcl8xLkludGVnZXJUeXBlKSAmJiBNYXRoLnBvdyhiYXNlLnJlZHVjZWQudmFsdWUsIHBvd2VyLnJlZHVjZWQudmFsdWUpICUgMSA9PSAwO1xuICAgICAgICB0aGlzLmlzSGVhbHRoeSA9ICF0aGlzLmlzUmVkdWNpYmxlO1xuICAgICAgICB0aGlzLmlzQ29uc3RhbnQgPSBiYXNlLmlzQ29uc3RhbnQgJiYgcG93ZXIuaXNDb25zdGFudDtcbiAgICAgICAgdGhpcy5jaGlsZENvdW50ID0gMiArIGJhc2UuY2hpbGRDb3VudCArIHBvd2VyLmNoaWxkQ291bnQ7XG4gICAgfVxuICAgIGJhc2U7XG4gICAgcG93ZXI7XG4gICAgaXNSZWR1Y2libGU7XG4gICAgaXNIZWFsdGh5O1xuICAgIGdldCByZWR1Y2VkKCkge1xuICAgICAgICByZXR1cm4gSW50ZWdlcl8xLkludGVnZXIub2YoTWF0aC5wb3codGhpcy5iYXNlLnJlZHVjZWQudmFsdWUsIHRoaXMucG93ZXIucmVkdWNlZC52YWx1ZSkpO1xuICAgIH1cbiAgICBpc0NvbnN0YW50O1xuICAgIGNoaWxkQ291bnQ7XG59XG5leHBvcnRzLkV4cG9uZW50ID0gRXhwb25lbnQ7XG5leHBvcnRzLkV4cG9uZW50VHlwZSA9IFwiRXhwb25lbnRcIjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FeHByZXNzaW9uID0gdm9pZCAwO1xuY29uc3QgSW50ZWdlcl8xID0gcmVxdWlyZShcIi4vSW50ZWdlclwiKTtcbmNvbnN0IE1hdGhFbGVtZW50XzEgPSByZXF1aXJlKFwiLi9NYXRoRWxlbWVudFwiKTtcbi8qKlxuICogQmFzZSBvZiBhbGwgbWF0aGVtYXRpY2FsIGV4cHJlc3Npb25zLlxuICogQWxsIGNoaWxkcmVuIHNob3VsZCBpbXBsZW1lbnQgZmx5LXdoZWVsIHBhdHRlcm4uXG4gKiBBbGwgY2hpbGRyZW4gc2hvdWxkIGJlIGltbXV0YWJsZS5cbiAqL1xuY2xhc3MgRXhwcmVzc2lvbiBleHRlbmRzIE1hdGhFbGVtZW50XzEuTWF0aEVsZW1lbnQge1xuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGV4cHJlc3Npb24gaXMgcmVkdWNpYmxlIG9yIGlzIGFuIGludGVnZXIuXG4gICAgICovXG4gICAgZ2V0IHJlZHVjaWJsZU9ySW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1JlZHVjaWJsZSB8fCB0aGlzLmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZTtcbiAgICB9XG59XG5leHBvcnRzLkV4cHJlc3Npb24gPSBFeHByZXNzaW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkZyYWN0aW9uVHlwZSA9IGV4cG9ydHMuRnJhY3Rpb24gPSB2b2lkIDA7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uXCIpO1xuY2xhc3MgRnJhY3Rpb24gZXh0ZW5kcyBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbiB7XG4gICAgc3RhdGljIG9mKG51bWVyYXRvciwgZGVub21pbmF0b3IpIHtcbiAgICAgICAgY29uc3QgaGFzaCA9IG51bWVyYXRvci5oYXNoICsgZGVub21pbmF0b3IuaGFzaDtcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlLmhhcyhoYXNoKSlcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0KGhhc2gsIG5ldyBGcmFjdGlvbihudW1lcmF0b3IsIGRlbm9taW5hdG9yKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmdldChoYXNoKTtcbiAgICB9XG4gICAgc3RhdGljIGluc3RhbmNlID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0cnVjdG9yKG51bSwgZGVub20pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5udW1lcmF0b3IgPSBudW07XG4gICAgICAgIHRoaXMuZGVub21pbmF0b3IgPSBkZW5vbTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLm51bWVyYXRvcik7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5kZW5vbWluYXRvcik7XG4gICAgICAgIC8qXG4gICAgICAgIEEgZnJhY3Rpb24gaXMgcmVkdWNpYmxlIGlmIHRoZSBkZW5vbSB8IG51bS5cbiAgICAgICAgICAgIDw9PiBudW0gPSBrICogZGVub20gd2hlcmUgayBpcyBhbiBpbnRlZ2VyLlxuXG4gICAgICAgIFRoaXMgbWFrZXMgcHJvdmluZyByZWR1Y2liaWxpdHkgaGFyZC5cbiAgICAgICAgVE9ETzogRGVjaWRlIGlmIGl0J3Mgd29ydGggaW1wbGVtZW50aW5nIHJlZHVjaWJpbGl0eSBmb3IgRnJhY3Rpb25zXG4gICAgICAgICovXG4gICAgICAgIHRoaXMuaXNSZWR1Y2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0hlYWx0aHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzQ29uc3RhbnQgPSBudW0uaXNDb25zdGFudCAmJiBkZW5vbS5pc0NvbnN0YW50O1xuICAgICAgICB0aGlzLmNoaWxkQ291bnQgPSAyICsgbnVtLmNoaWxkQ291bnQgKyBkZW5vbS5jaGlsZENvdW50O1xuICAgIH1cbiAgICBudW1lcmF0b3I7XG4gICAgZGVub21pbmF0b3I7XG4gICAgZ2V0IHJlZHVjZWQoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBpc1JlZHVjaWJsZTtcbiAgICBjbGFzcyA9IGV4cG9ydHMuRnJhY3Rpb25UeXBlO1xuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5udW1lcmF0b3IudG9TdHJpbmcoKSArIFwiIC8gXCIgKyB0aGlzLmRlbm9taW5hdG9yLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGdldCBoYXNoKCkge1xuICAgICAgICByZXR1cm4gZXhwb3J0cy5GcmFjdGlvblR5cGUgKyB0aGlzLm51bWVyYXRvci5oYXNoICsgdGhpcy5kZW5vbWluYXRvci5oYXNoO1xuICAgIH1cbiAgICBpc0hlYWx0aHk7XG4gICAgaXNDb25zdGFudDtcbiAgICB0b01hdGhYTUwoKSB7XG4gICAgICAgIHJldHVybiBcIjxtZnJhYz48bXJvdz5cIiArIHRoaXMubnVtZXJhdG9yLnRvTWF0aFhNTCgpICsgXCI8L21yb3c+PG1yb3c+XCIgKyB0aGlzLmRlbm9taW5hdG9yLnRvTWF0aFhNTCgpICsgXCI8L21yb3c+PC9tZnJhYz5cIjtcbiAgICB9XG4gICAgY2hpbGRDb3VudDtcbn1cbmV4cG9ydHMuRnJhY3Rpb24gPSBGcmFjdGlvbjtcbmV4cG9ydHMuRnJhY3Rpb25UeXBlID0gXCJGcmFjdGlvblwiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkludGVnZXJUeXBlID0gZXhwb3J0cy5JbnRlZ2VyID0gdm9pZCAwO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi4vdXRpbC9hc3NlcnRcIik7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uXCIpO1xuLyoqXG4gKiBJbnRlZ2VyXG4gKiBQb3NpdGl2ZSBvciBuZWdhdGl2ZVxuICovXG5jbGFzcyBJbnRlZ2VyIGV4dGVuZHMgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24ge1xuICAgIHN0YXRpYyBvZih2YWx1ZSkge1xuICAgICAgICBpZiAoIUludGVnZXIuaW5zdGFuY2VzLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIEludGVnZXIuaW5zdGFuY2VzLnNldCh2YWx1ZSwgbmV3IEludGVnZXIodmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSW50ZWdlci5pbnN0YW5jZXMuZ2V0KHZhbHVlKTtcbiAgICB9XG4gICAgc3RhdGljIGluc3RhbmNlcyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMudmFsdWUgJSAxID09IDAsIFwiQ3JlYXRpbmcgbm9uLWludGVnZXIgaW50ZWdlciBcIiArIHRoaXMudmFsdWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyBBIHBvc2l0aXZlIHZlcnNpb24gb2YgdGhpcyBpbnRlZ2VyLlxuICAgICAqL1xuICAgIGJ1dFBvc2l0aXZlKCkge1xuICAgICAgICByZXR1cm4gSW50ZWdlci5vZihNYXRoLmFicyh0aGlzLnZhbHVlKSk7XG4gICAgfVxuICAgIGNsYXNzID0gZXhwb3J0cy5JbnRlZ2VyVHlwZTtcbiAgICB0b01hdGhYTUwoKSB7XG4gICAgICAgIHJldHVybiBcIjxtbj5cIiArIHRoaXMudmFsdWUgKyBcIjwvbW4+XCI7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCJcIiArIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIGdldCBoYXNoKCkge1xuICAgICAgICByZXR1cm4gXCJOdW1iZXJFeHBcIiArIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHZhbHVlO1xuICAgIGlzUmVkdWNpYmxlID0gZmFsc2U7XG4gICAgZ2V0IHJlZHVjZWQoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludGVnZXJzIGFyZW4ndCByZWR1Y2libGUuXCIpO1xuICAgIH1cbiAgICBpc0hlYWx0aHkgPSB0cnVlO1xuICAgIGlzQ29uc3RhbnQgPSB0cnVlO1xuICAgIGNoaWxkQ291bnQgPSAwO1xufVxuZXhwb3J0cy5JbnRlZ2VyID0gSW50ZWdlcjtcbmV4cG9ydHMuSW50ZWdlclR5cGUgPSBcIkludGVnZXJcIjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JbnRlZ3JhbFR5cGUgPSBleHBvcnRzLkludGVncmFsID0gdm9pZCAwO1xuY29uc3QgTWF0aE1MSGVscGVyc18xID0gcmVxdWlyZShcIi4uL3V0aWwvTWF0aE1MSGVscGVyc1wiKTtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuL0V4cHJlc3Npb25cIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi9Qcm9kdWN0XCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi9TdW1cIik7XG4vKipcbiAqIEFuIGluZGVmaW5hdGUgaW50ZWdyYWwgKGZvciBub3cpLlxuICogVE9ETzogU2hvdWxkIHdlIHNlcGFyYXRlIGRlZmluYXRlL2luZGVmaW5hdGUgaW50ZWdyYWxzP1xuICovXG5jbGFzcyBJbnRlZ3JhbCBleHRlbmRzIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uIHtcbiAgICBzdGF0aWMgb2YoaW50ZWdyYW5kLCByZWxhdGl2ZVRvKSB7XG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZXMuaGFzKGludGVncmFuZC5oYXNoICsgcmVsYXRpdmVUby5oYXNoKSlcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzLnNldChpbnRlZ3JhbmQuaGFzaCArIHJlbGF0aXZlVG8uaGFzaCwgbmV3IEludGVncmFsKGludGVncmFuZCwgcmVsYXRpdmVUbykpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXMuZ2V0KGludGVncmFuZC5oYXNoICsgcmVsYXRpdmVUby5oYXNoKTtcbiAgICB9XG4gICAgc3RhdGljIGluc3RhbmNlcyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdHJ1Y3RvcihpbnRlZ3JhbmQsIHJlbGF0aXZlVG8pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pbnRlZ3JhbmQgPSBpbnRlZ3JhbmQ7XG4gICAgICAgIHRoaXMucmVsYXRpdmVUbyA9IHJlbGF0aXZlVG87XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5pbnRlZ3JhbmQpO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMucmVsYXRpdmVUbyk7XG4gICAgICAgIHRoaXMuaXNSZWR1Y2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0hlYWx0aHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzQ29uc3RhbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jaGlsZENvdW50ID0gMiArIGludGVncmFuZC5jaGlsZENvdW50ICsgcmVsYXRpdmVUby5jaGlsZENvdW50O1xuICAgIH1cbiAgICBpbnRlZ3JhbmQ7XG4gICAgcmVsYXRpdmVUbztcbiAgICBnZXQgcmVkdWNlZCgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4gTm90IHN1cmUgaG93IHRoaXMgd29ya3Mgd2l0aCBJbnRlZ3JhbHMuXCIpO1xuICAgIH1cbiAgICBpc1JlZHVjaWJsZTtcbiAgICBjbGFzcyA9IGV4cG9ydHMuSW50ZWdyYWxUeXBlO1xuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCLiiKtcIiArIHRoaXMuaW50ZWdyYW5kLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGdldCBoYXNoKCkge1xuICAgICAgICByZXR1cm4gXCLiiKtcIiArIHRoaXMuaW50ZWdyYW5kLnRvU3RyaW5nKCkgKyB0aGlzLnJlbGF0aXZlVG8udG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaXNIZWFsdGh5O1xuICAgIGlzQ29uc3RhbnQ7XG4gICAgdG9NYXRoWE1MKCkge1xuICAgICAgICBmdW5jdGlvbiB3cmFwSWZOZWVkZWQoZXhwKSB7XG4gICAgICAgICAgICBpZiAoZXhwLmNsYXNzID09IFN1bV8xLlN1bVR5cGUgfHwgZXhwLmNsYXNzID09IFByb2R1Y3RfMS5Qcm9kdWN0VHlwZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gKDAsIE1hdGhNTEhlbHBlcnNfMS5pblBhcmVuKShleHAudG9NYXRoWE1MKCkpO1xuICAgICAgICAgICAgcmV0dXJuIGV4cC50b01hdGhYTUwoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCI8bXJvdz48bW8+4oirPC9tbz5cIiArIHdyYXBJZk5lZWRlZCh0aGlzLmludGVncmFuZCkgKyBcIjxtbj5kPC9tbj5cIiArIHdyYXBJZk5lZWRlZCh0aGlzLnJlbGF0aXZlVG8pICsgXCI8L21yb3c+XCI7XG4gICAgfVxuICAgIGNoaWxkQ291bnQ7XG59XG5leHBvcnRzLkludGVncmFsID0gSW50ZWdyYWw7XG5leHBvcnRzLkludGVncmFsVHlwZSA9IFwiSW50ZWdyYWxcIjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NYXRoRWxlbWVudCA9IHZvaWQgMDtcbi8qKlxuICogQ2FuIGJlIGV4cHJlc3NlZCB3aXRoIE1hdGhNTFxuICovXG5jbGFzcyBNYXRoRWxlbWVudCB7XG59XG5leHBvcnRzLk1hdGhFbGVtZW50ID0gTWF0aEVsZW1lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZmFjdG9yT3JkZXIgPSBleHBvcnRzLlByb2R1Y3RUeXBlID0gZXhwb3J0cy5Qcm9kdWN0ID0gdm9pZCAwO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi4vdXRpbC9hc3NlcnRcIik7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uXCIpO1xuY29uc3QgSW50ZWdlcl8xID0gcmVxdWlyZShcIi4vSW50ZWdlclwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4vU3VtXCIpO1xuLyoqXG4gKiBBIG1hdGhlbWF0aWNhbCBwcm9kdWN0IHdpdGggMiBvciBtb3JlIGZhY3RvcnMuXG4gKi9cbmNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbiB7XG4gICAgLyoqXG4gICAgICogRm9yIGVmZmljaWVuY3ksIHByb2R1Y3RzIGFyZSBjb21wYXJlZCBieSByZWZlcmVuY2UuXG4gICAgICogSGVyZSB3ZSBlbnN1cmUgPT09IDw9PiA9PVxuICAgICAqIEBwYXJhbSBmYWN0b3JzXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBzdGF0aWMgb2YoZmFjdG9ycykge1xuICAgICAgICBjb25zdCBoYXNoID0gZmFjdG9ycy5tYXAoZSA9PiBlLmhhc2gpLmpvaW4oXCJcIik7XG4gICAgICAgIGlmICghUHJvZHVjdC5pbnN0YW5jZXMuaGFzKGhhc2gpKVxuICAgICAgICAgICAgUHJvZHVjdC5pbnN0YW5jZXMuc2V0KGhhc2gsIG5ldyBQcm9kdWN0KGZhY3RvcnMpKTtcbiAgICAgICAgcmV0dXJuIFByb2R1Y3QuaW5zdGFuY2VzLmdldChoYXNoKTtcbiAgICB9XG4gICAgc3RhdGljIGluc3RhbmNlcyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdHJ1Y3RvcihmYWN0b3JzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKGZhY3RvcnMubGVuZ3RoID49IDIsIFwiQ3JlYXRpbmcgcHJvZHVjdCB3aXRoIGxlc3MgdGhhbiAyIGZhY3RvcnMuXCIpO1xuICAgICAgICB0aGlzLmZhY3RvcnMgPSBmYWN0b3JzO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMuZmFjdG9ycyk7XG4gICAgICAgIGxldCByZWR1Y2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmZhY3RvcnMuZm9yRWFjaChmID0+IHtcbiAgICAgICAgICAgIHJlZHVjaWJsZSAmJj0gZi5pc1JlZHVjaWJsZSB8fCBmLmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoZSBpbnRlZ2VycyBhcmUgY2xvc2VkIG92ZXIgbXVsdGlwbGljYXRpb25cbiAgICAgICAgdGhpcy5pc1JlZHVjaWJsZSA9IHJlZHVjaWJsZTtcbiAgICAgICAgbGV0IGhlYWx0aHkgPSB0cnVlO1xuICAgICAgICBoZWFsdGh5ICYmPSB0aGlzLm51bU5lZ2F0aXZlcygpIDwgMjtcbiAgICAgICAgdGhpcy5pc0hlYWx0aHkgPSBoZWFsdGh5O1xuICAgICAgICBsZXQgaXNOZWdhdGlvbiA9IGZhY3RvcnMubGVuZ3RoID09IDI7XG4gICAgICAgIGlzTmVnYXRpb24gJiY9IGZhY3RvcnMuZmlsdGVyKGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlciAmJiBlLnZhbHVlID09IC0xO1xuICAgICAgICB9KS5sZW5ndGggPT0gMTtcbiAgICAgICAgdGhpcy5pc05lZ2F0aW9uID0gaXNOZWdhdGlvbjtcbiAgICAgICAgdGhpcy5pc0NvbnN0YW50ID0gdGhpcy5mYWN0b3JzLm1hcChmID0+IGYuaXNDb25zdGFudCkucmVkdWNlKChhLCBiKSA9PiBhICYmIGIpO1xuICAgICAgICB0aGlzLmNoaWxkQ291bnQgPSBmYWN0b3JzLmxlbmd0aCArIGZhY3RvcnMubWFwKGYgPT4gZi5jaGlsZENvdW50KS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSAtICh0aGlzLmlzTmVnYXRpb24gPyAxIDogMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhpcyBwcm9kdWN0IGlzIGp1c3RcbiAgICAgKiAtMSAqIGFub3RoZXIgZXhwcmVzc2lvbi5cbiAgICAgKi9cbiAgICBpc05lZ2F0aW9uO1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdmFsdWUgdGhhdCB0aGlzIHByb2R1Y3QgaXMgbmVnYXRpbmdcbiAgICAgKiAtMSAqIGV4cCByZXR1cm5zIGV4cC5cbiAgICAgKiBAdGhyb3dzIGlmIHByb2R1Y3QgaXNuJ3QgYSBuZWdhdGlvbi5cbiAgICAgKi9cbiAgICBnZXQgbmVnYXRpb24oKSB7XG4gICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMuaXNOZWdhdGlvbiwgXCJUcnlpbmcgdG8gZ2V0IG5lZ2F0aW9uIGZyb20gbm9uLW5lZ2F0aW5nIHN1bVwiKTtcbiAgICAgICAgaWYgKHRoaXMuZmFjdG9yc1swXS5jbGFzcyA9PSBJbnRlZ2VyXzEuSW50ZWdlclR5cGUgJiYgdGhpcy5mYWN0b3JzWzBdLnZhbHVlID09IC0xKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmFjdG9yc1sxXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFjdG9yc1swXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIG5ldyBFeHByZXNzaW9uIHdpdGhvdXQgdGhlIGdpdmVuIGZhY3Rvci5cbiAgICAgKiBJZiB0aGUgcHJvZHVjdCBjb250YWlucyB0aGUgZmFjdG9yIG11bHRpcGxlIHRpbWVzLFxuICAgICAqIG9ubHkgcmVtb3ZlcyBvbmUuIElmIGl0IGRvZXNuJ3QgY29udGFpbiB0aGUgZmFjdG9yLFxuICAgICAqIHJldHVybnMgaXRzZWxmLlxuICAgICAqIEBwYXJhbSBleHAgQSBmYWN0b3IgaW4gdGhpcyBwcm9kdWN0LlxuICAgICAqL1xuICAgIHdpdGhvdXQoZXhwKSB7XG4gICAgICAgIGNvbnN0IG5ld0ZhY3RvcnMgPSBbLi4udGhpcy5mYWN0b3JzXTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBuZXdGYWN0b3JzLmZpbmRJbmRleCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gZXhwO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGluZGV4ID09IC0xKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIG5ld0ZhY3RvcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgaWYgKG5ld0ZhY3RvcnMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgcmV0dXJuIG5ld0ZhY3RvcnNbMF07IC8vIEdhdXJhbnRlZWQgdGhlcmUncyBvbmUgdGVybSBoZXJlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb2R1Y3Qub2YobmV3RmFjdG9ycyk7XG4gICAgfVxuICAgIHRvTWF0aFhNTCgpIHtcbiAgICAgICAgbGV0IG91dCA9IFwiXCI7XG4gICAgICAgIGZ1bmN0aW9uIHdyYXBJZk5lZWRlZChleHApIHtcbiAgICAgICAgICAgIGlmIChleHAuY2xhc3MgPT0gZXhwb3J0cy5Qcm9kdWN0VHlwZSB8fCBleHAuY2xhc3MgPT0gU3VtXzEuU3VtVHlwZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8bW8+KDwvbW8+XCIgKyBleHAudG9NYXRoWE1MKCkgKyBcIjxtbz4pPC9tbz5cIjtcbiAgICAgICAgICAgIHJldHVybiBleHAudG9NYXRoWE1MKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRWl0aGVyIHRoaXMgaXMgYSBuZWdhdGlvbiwgb3IgYSBsaXN0IG9mIHByb2R1Y3RzXG4gICAgICAgIC8vIEZpcnN0IHRoZSBuZWdhdGlvbiBjYXNlLi4uXG4gICAgICAgIGlmICh0aGlzLmlzTmVnYXRpb24pIHtcbiAgICAgICAgICAgIG91dCArPSBcIjxtbz4tPC9tbz5cIjtcbiAgICAgICAgICAgIG91dCArPSB3cmFwSWZOZWVkZWQodGhpcy5uZWdhdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGl0J3MgYSBsaXN0IG9mIHByb2R1Y3RzLi4uXG4gICAgICAgIGNvbnN0IGZpcnN0RmFjdG9yID0gdGhpcy5mYWN0b3JzWzBdO1xuICAgICAgICBvdXQgKz0gd3JhcElmTmVlZGVkKGZpcnN0RmFjdG9yKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmZhY3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBmYWN0b3IgPSB0aGlzLmZhY3RvcnNbaV07XG4gICAgICAgICAgICBsZXQgbmVlZHNEb3QgPSAoZmFjdG9yLmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZSAmJiB0aGlzLmZhY3RvcnNbaSAtIDFdLmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZSlcbiAgICAgICAgICAgICAgICB8fCAoZmFjdG9yIGluc3RhbmNlb2YgUHJvZHVjdCAmJiBmYWN0b3IuaXNOZWdhdGlvbikgLy8gSWYgdGhlcmUncyBhIG5lZ2F0aXZlIHNpZ24sIGdldCBhIGRvdFxuICAgICAgICAgICAgICAgIHx8IChmYWN0b3IgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlciAmJiBmYWN0b3IudmFsdWUgPCAxKTtcbiAgICAgICAgICAgIGlmIChuZWVkc0RvdClcbiAgICAgICAgICAgICAgICBvdXQgKz0gXCI8bW8+wrc8L21vPlwiO1xuICAgICAgICAgICAgb3V0ICs9IHdyYXBJZk5lZWRlZChmYWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIE51bWJlciBvZiBuZWdhdGl2ZSBpbnRlZ2VyIHByb2R1Y3RzLlxuICAgICAqL1xuICAgIG51bU5lZ2F0aXZlcygpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5mYWN0b3JzLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgICBpZiAoZiBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKVxuICAgICAgICAgICAgICAgIGlmIChmLnZhbHVlIDwgMClcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGxldCBvdXQgPSBcIlwiO1xuICAgICAgICBmb3IgKGNvbnN0IGV4cCBvZiB0aGlzLmZhY3RvcnMpIHtcbiAgICAgICAgICAgIGlmIChleHAgaW5zdGFuY2VvZiBQcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IFwiKFwiICsgZXhwLnRvU3RyaW5nKCkgKyBcIilcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dCArPSBleHAudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91dCArPSBcIsK3XCI7XG4gICAgICAgIH1cbiAgICAgICAgb3V0ID0gb3V0LnN1YnN0cmluZygwLCBvdXQubGVuZ3RoIC0gMSk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIGdldCBoYXNoKCkge1xuICAgICAgICByZXR1cm4gXCJQcm9kdWN0XCIgKyB0aGlzLmZhY3RvcnMubWFwKGUgPT4gZS5oYXNoKS5qb2luKCk7XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IDIgZWxlbWVudHMsIG9yZGVyIG1hdHRlcnNcbiAgICBmYWN0b3JzO1xuICAgIGNsYXNzID0gZXhwb3J0cy5Qcm9kdWN0VHlwZTtcbiAgICBpc1JlZHVjaWJsZTtcbiAgICBnZXQgcmVkdWNlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFjdG9ycy5tYXAoZSA9PiBlLnJlZHVjZWQpLnJlZHVjZSgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIEludGVnZXJfMS5JbnRlZ2VyLm9mKGEucmVkdWNlZC52YWx1ZSAqIGIucmVkdWNlZC52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPbmx5IDEgbmVnYXRpdmUgaW50ZWdlclxuICAgICAqIEludGVnZXIgZmFjdG9ycyBhcmUgZmlyc3RcbiAgICAgKiBObyBmYWN0b3IgZXF1YWxzIDFcbiAgICAgKi9cbiAgICBpc0hlYWx0aHk7XG4gICAgaXNDb25zdGFudDtcbiAgICBjaGlsZENvdW50O1xufVxuZXhwb3J0cy5Qcm9kdWN0ID0gUHJvZHVjdDtcbmV4cG9ydHMuUHJvZHVjdFR5cGUgPSBcIlByb2R1Y3RcIjtcbi8qKlxuICogQ2FuIGJlIHVzZWQgaW4gYXJyYXkuc29ydCgpIHRvIGdldCBwcm9wZXJseSBvcmRlcmVkIHByb2R1Y3RzXG4gKiBAcGFyYW0gYVxuICogQHBhcmFtIGJcbiAqL1xuZnVuY3Rpb24gZmFjdG9yT3JkZXIoYSwgYikge1xuICAgIHJldHVybiAwOyAvL1RPRE86IEltcGxlbWVudFxufVxuZXhwb3J0cy5mYWN0b3JPcmRlciA9IGZhY3Rvck9yZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm9yZGVyVGVybXMgPSBleHBvcnRzLlN1bVR5cGUgPSBleHBvcnRzLlN1bSA9IHZvaWQgMDtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4uL3V0aWwvYXNzZXJ0XCIpO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvblwiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuL0ludGVnZXJcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi9Qcm9kdWN0XCIpO1xuY29uc3QgVmFyaWFibGVfMSA9IHJlcXVpcmUoXCIuL1ZhcmlhYmxlXCIpO1xuLyoqXG4gKiBFeHByZXNzaW9uIHJlcHJlc2VudGluZyB0aGUgc3VtIG9mIDIgb3IgbW9yZSB0ZXJtcy5cbiAqL1xuY2xhc3MgU3VtIGV4dGVuZHMgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24ge1xuICAgIC8qKlxuICAgICAqIEZhY3RvcnkgbWV0aG9kIGNvbnNudHJ1Y3Rvci5cbiAgICAgKiBAcGFyYW0gdGVybXMgQ29udGFpbnMgYXQgbGVhc3QgMiBlbGVtZW50c1xuICAgICAqL1xuICAgIHN0YXRpYyBvZih0ZXJtcykge1xuICAgICAgICBjb25zdCBoYXNoID0gdGVybXMubWFwKHQgPT4gdC5oYXNoKS5qb2luKFwiXCIpO1xuICAgICAgICBpZiAoIVN1bS5pbnN0YW5jZXMuaGFzKGhhc2gpKSB7XG4gICAgICAgICAgICBTdW0uaW5zdGFuY2VzLnNldChoYXNoLCBuZXcgU3VtKHRlcm1zKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFN1bS5pbnN0YW5jZXMuZ2V0KGhhc2gpO1xuICAgIH1cbiAgICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0cnVjdG9yKHRlcm1zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRlcm1zLmxlbmd0aCA+PSAyLCBcIkNyZWF0aW5nIHN1bSB3aXRoIGxlc3MgdGhhbiAyIHRlcm1zLlwiKTtcbiAgICAgICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICAgICAgICB0aGlzLmlzUmVkdWNpYmxlID0gdGhpcy50ZXJtcy5tYXAodCA9PiB0LmlzUmVkdWNpYmxlIHx8IHQuY2xhc3MgPT0gSW50ZWdlcl8xLkludGVnZXJUeXBlKS5yZWR1Y2UoKGEsIGIpID0+IGEgJiYgYik7XG4gICAgICAgIHRoaXMuaXNIZWFsdGh5ID0gdGhpcy5kZXRlcm1pbmVIZWFsdGgoKTtcbiAgICAgICAgdGhpcy5pc0NvbnN0YW50ID0gdGhpcy50ZXJtcy5tYXAodCA9PiB0LmlzQ29uc3RhbnQpLnJlZHVjZSgoYSwgYikgPT4gYSAmJiBiKTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLnRlcm1zKTtcbiAgICAgICAgdGhpcy5jaGlsZENvdW50ID0gdGVybXMubGVuZ3RoICsgdGVybXMubWFwKHQgPT4gdC5jaGlsZENvdW50KS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIG5ldyBFeHByZXNzaW9uIHdpdGhvdXQgdGhlIGdpdmVuIHRlcm0uXG4gICAgICogSWYgdGhlIHN1bSBjb250YWlucyB0aGUgdGVybSBtdWx0aXBsZSB0aW1lcyxcbiAgICAgKiBvbmx5IHJlbW92ZXMgb25lLiBJZiBpdCBkb2Vzbid0IGNvbnRhaW4gdGhlIHRlcm0sXG4gICAgICogcmV0dXJucyBpdHNlbGYuXG4gICAgICogQHBhcmFtIHRlcm0gQSB0ZXJtIGluIHRoaXMgc3VtLlxuICAgICAqL1xuICAgIHdpdGhvdXQodGVybSkge1xuICAgICAgICBjb25zdCBuZXdUZXJtcyA9IFsuLi50aGlzLnRlcm1zXTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBuZXdUZXJtcy5maW5kSW5kZXgoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IHRlcm07XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5kZXggPT0gLTEpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgbmV3VGVybXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgaWYgKG5ld1Rlcm1zLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXdUZXJtc1swXTsgLy8gR2F1cmFudGVlZCB0aGVyZSdzIG9uZSB0ZXJtIGhlcmVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU3VtLm9mKG5ld1Rlcm1zKTtcbiAgICB9XG4gICAgdG9NYXRoWE1MKCkge1xuICAgICAgICBmdW5jdGlvbiB3cmFwSWZOZWVkZWQoZXhwKSB7XG4gICAgICAgICAgICBpZiAoZXhwLmNsYXNzID09IGV4cG9ydHMuU3VtVHlwZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8bW8+KDwvbW8+XCIgKyBleHAudG9NYXRoWE1MKCkgKyBcIjxtbz4pPC9tbz5cIjtcbiAgICAgICAgICAgIHJldHVybiBleHAudG9NYXRoWE1MKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG91dCA9IHdyYXBJZk5lZWRlZCh0aGlzLnRlcm1zWzBdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLnRlcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtc1tpXTtcbiAgICAgICAgICAgIC8vIFN1YnRyYWN0IG5lZ2F0aXZlIHRlcm1zIGluc3RlYWQgb2YgYWRkaW5nIG5lZ2F0aXZlc1xuICAgICAgICAgICAgaWYgKHRlcm0gaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCAmJiB0ZXJtLmlzTmVnYXRpb24pIHtcbiAgICAgICAgICAgICAgICBvdXQgKz0gXCI8bW8+LTwvbW8+XCIgKyB3cmFwSWZOZWVkZWQodGVybS5uZWdhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0ZXJtIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIgJiYgdGVybS52YWx1ZSA8IDApIHtcbiAgICAgICAgICAgICAgICBvdXQgKz0gXCI8bW8+LTwvbW8+XCIgKyB3cmFwSWZOZWVkZWQodGVybS5idXRQb3NpdGl2ZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dCArPSBcIjxtbz4rPC9tbz5cIiArIHdyYXBJZk5lZWRlZCh0aGlzLnRlcm1zW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgbGV0IG91dCA9IFwiXCI7XG4gICAgICAgIGZvciAoY29uc3QgZXhwIG9mIHRoaXMudGVybXMpIHtcbiAgICAgICAgICAgIG91dCArPSBleHAudG9TdHJpbmcoKSArIFwiK1wiO1xuICAgICAgICB9XG4gICAgICAgIG91dCA9IG91dC5zdWJzdHJpbmcoMCwgb3V0Lmxlbmd0aCAtIDEpO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICBnZXQgaGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIFwiU3VtXCIgKyB0aGlzLnRlcm1zLm1hcChlID0+IGUuaGFzaCkuam9pbigpO1xuICAgIH1cbiAgICBjbGFzcyA9IGV4cG9ydHMuU3VtVHlwZTtcbiAgICAvKipcbiAgICAgKiBPcmRlcmVkLCBpbW11dGFibGVcbiAgICAgKi9cbiAgICB0ZXJtcztcbiAgICBpc1JlZHVjaWJsZTtcbiAgICBnZXQgcmVkdWNlZCgpIHtcbiAgICAgICAgcmV0dXJuIEludGVnZXJfMS5JbnRlZ2VyLm9mKHRoaXMudGVybXMubWFwKHQgPT4gdC5yZWR1Y2VkLnZhbHVlKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpZ3VyZSBvdXQgaWYgd2UncmUgaGVhbHRoeS5cbiAgICAgKi9cbiAgICBkZXRlcm1pbmVIZWFsdGgoKSB7XG4gICAgICAgIGlmICh0aGlzLnRlcm1zLmZpbHRlcih0ID0+IHQuaXNSZWR1Y2libGUgfHwgdCBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKS5sZW5ndGggPiAxKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0aGlzLnRlcm1zLmZvckVhY2godCA9PiB7XG4gICAgICAgICAgICBpZiAodCBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKVxuICAgICAgICAgICAgICAgIGlmICh0LnZhbHVlID09IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGVybXMuZm9yRWFjaCh0ZXJtID0+IHtcbiAgICAgICAgICAgIGlmICghdGVybS5pc0hlYWx0aHkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY29ycmVjdE9yZGVyaW5nID0gb3JkZXJUZXJtcyguLi50aGlzLnRlcm1zKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRlcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50ZXJtc1tpXSAhPT0gY29ycmVjdE9yZGVyaW5nW2ldKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvL1RPRE86IENoZWNrIGNvbmRpdGlvbiAzXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHN1bSBpcyBoZWFsdGh5IGlmZjpcbiAgICAgKlxuICAgICAqIDEuIENvbnRhaW5zIGEgbWF4IG9mIDEgcmVkdWNpYmxlIHRlcm0uXG4gICAgICogMi4gUHJvZHVjdHMgd2l0aCBpbnRlZ2VyIGNvZWZmaWNpZW50cyBhcmUgY29tYmluZWQuXG4gICAgICogIGEgKyAyYSA9IDNhLFxuICAgICAqICBhICsgLWEgPSAwXG4gICAgICogMy4gTm8gdGVybSBpcyAwXG4gICAgICogNC4gQWxsIHRlcm1zIGFyZSBoZWFsdGh5LlxuICAgICAqIDUuIFRlcm1zIGFyZSBvcmRlcmVkIGNvcnJlY3RseS5cbiAgICAgKi9cbiAgICBpc0hlYWx0aHk7XG4gICAgaXNDb25zdGFudDtcbiAgICBjaGlsZENvdW50O1xufVxuZXhwb3J0cy5TdW0gPSBTdW07XG5leHBvcnRzLlN1bVR5cGUgPSBcIlN1bVwiO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBnaXZlbiB0ZXJtcyBvcmRlcmVkIGNvcnJlY3RseSB0b1xuICogYmUgcGxhY2VkIGluIGEgU3VtLiBBbHRlcnMgdGhlIGdpdmVuIGFycmF5LlxuICogQHBhcmFtIHRlcm1zXG4gKi9cbmZ1bmN0aW9uIG9yZGVyVGVybXMoLi4udGVybXMpIHtcbiAgICAvLyBBIG5vdGUgYWJvdXQgdGhlIHNvcnQgZnVuY3Rpb24gYmMgdGhlIGRvY3VtZW50YXRpb24gaXMgY3J5cHRpY1xuICAgIC8vIElmIGEgc2hvdWxkIGJlIHB1dCBiZWZvcmUgYiBpbiB0aGUgc3VtLCByZXR1cm4gYSBuZWdhdGl2ZSB2YWx1ZVxuICAgIHJldHVybiB0ZXJtcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIC8vIFZhcmlhYmxlcyBiZWZvcmUgSW50ZWdlcnNcbiAgICAgICAgaWYgKGEuY2xhc3MgPT0gSW50ZWdlcl8xLkludGVnZXJUeXBlICYmIChiLmNsYXNzID09IFZhcmlhYmxlXzEuVmFyaWFibGVUeXBlIHx8IChiIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3QgJiYgYi5pc05lZ2F0aW9uICYmIGIubmVnYXRpb24uY2xhc3MgPT0gVmFyaWFibGVfMS5WYXJpYWJsZVR5cGUpKSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChhLmNsYXNzID09IFZhcmlhYmxlXzEuVmFyaWFibGVUeXBlIHx8IChhIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3QgJiYgYS5pc05lZ2F0aW9uICYmIGEubmVnYXRpb24uY2xhc3MgPT0gVmFyaWFibGVfMS5WYXJpYWJsZVR5cGUpKSAmJiBiLmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pO1xufVxuZXhwb3J0cy5vcmRlclRlcm1zID0gb3JkZXJUZXJtcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5WYXJpYWJsZVR5cGUgPSBleHBvcnRzLlZhcmlhYmxlID0gdm9pZCAwO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvblwiKTtcbmNsYXNzIFZhcmlhYmxlIGV4dGVuZHMgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24ge1xuICAgIHN0YXRpYyBvZihzeW1ib2wpIHtcbiAgICAgICAgaWYgKFZhcmlhYmxlLmluc3RhbmNlcy5nZXQoc3ltYm9sKSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIFZhcmlhYmxlLmluc3RhbmNlcy5zZXQoc3ltYm9sLCBuZXcgVmFyaWFibGUoc3ltYm9sKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFZhcmlhYmxlLmluc3RhbmNlcy5nZXQoc3ltYm9sKTtcbiAgICB9XG4gICAgc3RhdGljIGluc3RhbmNlcyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdHJ1Y3RvcihzeW1ib2wpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zeW1ib2wgPSBzeW1ib2w7XG4gICAgfVxuICAgIGNsYXNzID0gZXhwb3J0cy5WYXJpYWJsZVR5cGU7XG4gICAgdG9NYXRoWE1MKCkge1xuICAgICAgICByZXR1cm4gXCI8bWk+XCIgKyB0aGlzLnN5bWJvbCArIFwiPC9taT5cIjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN5bWJvbDtcbiAgICB9XG4gICAgZ2V0IGhhc2goKSB7XG4gICAgICAgIHJldHVybiBcIlZhcmlhYmxlXCIgKyB0aGlzLnN5bWJvbDtcbiAgICB9XG4gICAgc3ltYm9sO1xuICAgIGlzUmVkdWNpYmxlID0gZmFsc2U7XG4gICAgZ2V0IHJlZHVjZWQoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlZhcmlhYmxlcyBjYW4ndCBiZSByZWR1Y2VkIHRvIGludGVnZXJzLlwiKTtcbiAgICB9XG4gICAgaXNIZWFsdGh5ID0gdHJ1ZTtcbiAgICBpc0NvbnN0YW50ID0gZmFsc2U7XG4gICAgY2hpbGRDb3VudCA9IDA7XG59XG5leHBvcnRzLlZhcmlhYmxlID0gVmFyaWFibGU7XG5leHBvcnRzLlZhcmlhYmxlVHlwZSA9IFwiVmFyaWFibGVcIjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Bcmd1bWVudE5vZGVWaWV3ID0gdm9pZCAwO1xuY29uc3QgR3JhcGhOb2RlVmlld18xID0gcmVxdWlyZShcIi4vR3JhcGhOb2RlVmlld1wiKTtcbi8qKlxuICogUmVwcmVzZW50cyBhbiBhcmd1bWVudCBub2RlLlxuICovXG5jbGFzcyBBcmd1bWVudE5vZGVWaWV3IGV4dGVuZHMgR3JhcGhOb2RlVmlld18xLkdyYXBoTm9kZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGFyZykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFyZ3VtZW50ID0gYXJnO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9IHRoaXMuYXJndW1lbnQuYXJndW1lbnQ7XG4gICAgfVxuICAgIGFyZ3VtZW50O1xufVxuZXhwb3J0cy5Bcmd1bWVudE5vZGVWaWV3ID0gQXJndW1lbnROb2RlVmlldztcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImFyZ3VtZW50LW5vZGV2aWV3XCIsIEFyZ3VtZW50Tm9kZVZpZXcsIHsgZXh0ZW5kczogXCJkaXZcIiB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FZGdlVmlldyA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vQXJndW1lbnRcIik7XG5jb25zdCBVSVByZWZlcmVuY2VzXzEgPSByZXF1aXJlKFwiLi9VSVByZWZlcmVuY2VzXCIpO1xuY29uc3QgR3JhcGhfMSA9IHJlcXVpcmUoXCIuLi9HcmFwaFwiKTtcbi8qKlxuICogUmVwcmVzZW50cyBhbiBlZGdlIGluIGEgZ3JhcGguXG4gKi9cbmNsYXNzIEVkZ2VWaWV3IGV4dGVuZHMgSFRNTFBhcmFncmFwaEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKG93bmVyLCBlZGdlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICAgICAgdGhpcy5lZGdlID0gZWRnZS5lO1xuICAgICAgICB0aGlzLmZpcnN0ID0gZWRnZS5uO1xuICAgICAgICB0aGlzLnNlY29uZCA9IGVkZ2UubjE7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5lZGdlKTtcbiAgICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IFwiZml0LWNvbnRlbnRcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBcImZpdC1jb250ZW50XCI7XG4gICAgICAgIHRoaXMuc3R5bGUucGFkZGluZyA9IFwiMFwiO1xuICAgICAgICB0aGlzLnN0eWxlLnpJbmRleCA9IFwiLTJcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcbiAgICAgICAgdGhpcy5zdHlsZS53aGl0ZVNwYWNlID0gXCJub3dyYXBcIjtcbiAgICAgICAgdGhpcy5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFVJUHJlZmVyZW5jZXNfMS51aVByZWZlcmVuY2VzLmVkZ2VFcXVhbHNCYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIHRoaXMuc3R5bGUudXNlclNlbGVjdCA9IFwibm9uZVwiO1xuICAgICAgICBVSVByZWZlcmVuY2VzXzEudWlQcmVmZXJlbmNlcy5vblVwZGF0ZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFVJUHJlZmVyZW5jZXNfMS51aVByZWZlcmVuY2VzLmVkZ2VFcXVhbHNCYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLm93bmVyLmVkZ2VDbGlja2VkKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGV2ZW50ID0+IHtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgcm90YXRpb24gYW5nbGUgb2YgdmlldyB3aGlsZSBhbHNvXG4gICAgICogbGV0dGluZyBpdCBrbm93IHRoZSBhbmdsZSBoYXMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0gcmFkXG4gICAgICovXG4gICAgc2V0QW5nbGUocmFkKSB7XG4gICAgICAgIHRoaXMuc3R5bGUucm90YXRlID0gXCJcIiArIHJhZCArIFwicmFkXCI7XG4gICAgICAgIC8vdGhpcy50ZXh0Q29udGVudCA9IFwiXCIgKyAocmFkICogMiAqIE1hdGguUEkgLyAzNjApLnRvRml4ZWQoMikgKyBcImRlZ1wiXG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgZWxlbWVudCBzY3JlZW4gd2lkdGggYW5kIGVuc3VyZXMgdGV4dCBmaXRzXG4gICAgICogaW5zaWRlIHRoZSBlZGdlLlxuICAgICAqL1xuICAgIHNldCB3aWR0aCh2YWwpIHtcbiAgICAgICAgc3VwZXIuc3R5bGUud2lkdGggPSB2YWw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGVsZW1lbnQgaXMgY29ubmN0ZWQgdG8gdGhlIERPTS5cbiAgICAgKi9cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuZWRnZSBpbnN0YW5jZW9mIEFyZ3VtZW50XzEuQXJndW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBcIlwiICsgdGhpcy5lZGdlLmNsYWltLnI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5lZGdlIGluc3RhbmNlb2YgR3JhcGhfMS5HaXZlbkVkZ2UpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBcIlwiICsgdGhpcy5lZGdlLnI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIGZvciBcIiArIHRoaXMuZWRnZSk7XG4gICAgfVxuICAgIG93bmVyO1xuICAgIGVkZ2U7XG4gICAgZmlyc3Q7XG4gICAgc2Vjb25kO1xufVxuZXhwb3J0cy5FZGdlVmlldyA9IEVkZ2VWaWV3O1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiZWRnZS12aWV3XCIsIEVkZ2VWaWV3LCB7IGV4dGVuZHM6IFwicFwiIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkVkaXRhYmxlTWF0aFZpZXcgPSB2b2lkIDA7XG4vKipcbiAqIERpc3BsYXlzIG1hdGggYW5kIGlzIGVkaXRhYmxlLlxuICovXG5jbGFzcyBFZGl0YWJsZU1hdGhWaWV3IGV4dGVuZHMgSFRNTERpdkVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB9XG4gICAgc2V0IHZhbHVlKGUpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBlO1xuICAgICAgICB0aGlzLmlubmVySFRNTCA9IFwiPG1hdGggZGlzcGxheT0nYmxvY2snPlwiICsgKGU/LnRvTWF0aFhNTCgpID8/IFwiXCIpICsgXCI8L21hdGg+XCI7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2gobCA9PiBsKHRoaXMuX3ZhbHVlKSk7XG4gICAgICAgIE1hdGhKYXgudHlwZXNldChbdGhpc10pO1xuICAgIH1cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTGlzdGVuZXIgd2lsbCBiZSBjYWxsZWQgd2hlbmV2ZXIgdGhlIG1hdGhcbiAgICAgKiBpbiB0aGUgdmlldyBpcyBlZGl0ZWQuXG4gICAgICogQHBhcmFtIGxcbiAgICAgKi9cbiAgICBhZGRFZGl0TGlzdGVuZXIobCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGwpO1xuICAgIH1cbiAgICBsaXN0ZW5lcnMgPSBbXTtcbiAgICBfdmFsdWUgPSBudWxsO1xufVxuZXhwb3J0cy5FZGl0YWJsZU1hdGhWaWV3ID0gRWRpdGFibGVNYXRoVmlldztcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImVkaXRhYmxlLW1hdGh2aWV3XCIsIEVkaXRhYmxlTWF0aFZpZXcsIHsgZXh0ZW5kczogXCJkaXZcIiB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FeHBsYW5hdGlvblBvcHVwID0gdm9pZCAwO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4uL2V4cHJlc3Npb25zL0V4cHJlc3Npb25cIik7XG5jb25zdCBNYXRoTUxIZWxwZXJzXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9NYXRoTUxIZWxwZXJzXCIpO1xuY2xhc3MgRXhwbGFuYXRpb25Qb3B1cCBleHRlbmRzIEhUTUxEaXZFbGVtZW50IHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcmdcbiAgICAgKiBAcGFyYW0gb25DbG9zZSBDYWxsZWQgYWZ0ZXIgdXNlciBjbGlja3MgY2xvc2UgYnV0dG9uLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGFyZywgb25DbG9zZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFyZyA9IGFyZztcbiAgICAgICAgdGhpcy5vbkNsb3NlID0gb25DbG9zZTtcbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdiJyk7XG4gICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2xvc2VcIjtcbiAgICAgICAgY2xvc2VCdXR0b24uc3R5bGUudXNlclNlbGVjdCA9IFwibm9uZVwiO1xuICAgICAgICBjbG9zZUJ1dHRvbi5zdHlsZS5mbG9hdCA9IFwicmlnaHRcIjtcbiAgICAgICAgdGhpcy5hcHBlbmQoY2xvc2VCdXR0b24pO1xuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRleHQuaW5uZXJIVE1MID0gYXJnLmFyZ3VtZW50ICsgXCI8YnI+XCI7XG4gICAgICAgIGlmIChhcmcuY2xhaW0ubiBpbnN0YW5jZW9mIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uICYmIGFyZy5jbGFpbS5uMSBpbnN0YW5jZW9mIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uKVxuICAgICAgICAgICAgdGV4dC5pbm5lckhUTUwgKz0gKDAsIE1hdGhNTEhlbHBlcnNfMS5pbk1hdGhCbG9jaykoKDAsIE1hdGhNTEhlbHBlcnNfMS5pblJvdykoYXJnLmNsYWltLm4udG9NYXRoWE1MKCkgKyBcIiA8bW8+XCIgKyBhcmcuY2xhaW0uciArIFwiPC9tbz4gXCIgKyBhcmcuY2xhaW0ubjEudG9NYXRoWE1MKCkpKSArIFwiPGJyPiBEZXJpdmVkIGZyb206IDxicj5cIjtcbiAgICAgICAgZm9yIChjb25zdCBncm91bmQgb2YgYXJnLmdyb3VuZHMpIHtcbiAgICAgICAgICAgIGlmIChncm91bmQgaW5zdGFuY2VvZiBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbilcbiAgICAgICAgICAgICAgICB0ZXh0LmlubmVySFRNTCArPSAoMCwgTWF0aE1MSGVscGVyc18xLmluTWF0aCkoZ3JvdW5kLnRvTWF0aFhNTCgpKSArIFwiPGJyPlwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXBwZW5kKHRleHQpO1xuICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBibGFja1wiO1xuICAgICAgICB0aGlzLnN0eWxlLmJveFNoYWRvdyA9IFwiMC4zY2ggMC4zY2ggMC42Y2ggcmdiYSgwLCAwLCAwLCAwLjUpXCI7XG4gICAgICAgIHRoaXMuc3R5bGUucGFkZGluZyA9IFwiMWNoXCI7XG4gICAgICAgIHRoaXMuc3R5bGUud2lkdGggPSBcIjMwMHB4XCI7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBNYXRoSmF4LnR5cGVzZXQoW3RoaXNdKTtcbiAgICB9XG4gICAgYXJnO1xuICAgIG9uQ2xvc2U7XG59XG5leHBvcnRzLkV4cGxhbmF0aW9uUG9wdXAgPSBFeHBsYW5hdGlvblBvcHVwO1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiZXhwbGFuYXRpb24tcG9wdXBcIiwgRXhwbGFuYXRpb25Qb3B1cCwgeyBleHRlbmRzOiBcImRpdlwiIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkV4cHJlc3Npb25Ob2RlVmlldyA9IHZvaWQgMDtcbmNvbnN0IEVkaXRhYmxlTWF0aFZpZXdfMSA9IHJlcXVpcmUoXCIuL0VkaXRhYmxlTWF0aFZpZXdcIik7XG5jb25zdCBHcmFwaE5vZGVWaWV3XzEgPSByZXF1aXJlKFwiLi9HcmFwaE5vZGVWaWV3XCIpO1xuLyoqXG4gKiBBIGdyYXBoIG5vZGUgdmlldyBmb3IgZXhwcmVzc2lvbiBub2Rlcy5cbiAqL1xuY2xhc3MgRXhwcmVzc2lvbk5vZGVWaWV3IGV4dGVuZHMgR3JhcGhOb2RlVmlld18xLkdyYXBoTm9kZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKG5vZGUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICAgICAgdGhpcy5lZGl0YWJsZU1hdGhWaWV3ID0gbmV3IEVkaXRhYmxlTWF0aFZpZXdfMS5FZGl0YWJsZU1hdGhWaWV3KCk7XG4gICAgICAgIHRoaXMuZWRpdGFibGVNYXRoVmlldy52YWx1ZSA9IHRoaXMubm9kZTtcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmVkaXRhYmxlTWF0aFZpZXcpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5vZGUudG9TdHJpbmcoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB9XG4gICAgbm9kZTtcbiAgICBlZGl0YWJsZU1hdGhWaWV3O1xufVxuZXhwb3J0cy5FeHByZXNzaW9uTm9kZVZpZXcgPSBFeHByZXNzaW9uTm9kZVZpZXc7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJleHByZXNzaW9uLW5vZGV2aWV3XCIsIEV4cHJlc3Npb25Ob2RlVmlldywgeyBleHRlbmRzOiBcImRpdlwiIH0pO1xuY29uc3QgY29sb3JVbmhlYWx0aHlOb2RlcyA9IHRydWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR3JhcGhOb2RlVmlldyA9IHZvaWQgMDtcbi8qKlxuICogQW4gaHRtbCBlbGVtZW50IHRoYXQgcmVwcmVzZW50cyBhIG1hdGggZ3JhcGggbm9kZS5cbiAqL1xuY2xhc3MgR3JhcGhOb2RlVmlldyBleHRlbmRzIEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgLy90aGlzLnN0eWxlLmJvcmRlciA9IFwiYmx1ZSBkb3R0ZWQgMC4yY2hcIlxuICAgICAgICB0aGlzLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMWNoXCI7XG4gICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJsaWdodGJsdWVcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5wYWRkaW5nID0gXCIxY2hcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5wYWRkaW5nVG9wID0gXCIwXCI7XG4gICAgICAgIHRoaXMuc3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiMFwiO1xuICAgICAgICB0aGlzLnN0eWxlLndpZHRoID0gXCJmaXQtY29udGVudFwiO1xuICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IFwiZml0LWNvbnRlbnRcIjtcbiAgICAgICAgdGhpcy5zdHlsZS53aGl0ZVNwYWNlID0gXCJub3dyYXBcIjtcbiAgICB9XG4gICAgc2V0IGJhY2tncm91bmRDb2xvcih2YWx1ZSkge1xuICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHZhbHVlO1xuICAgIH1cbn1cbmV4cG9ydHMuR3JhcGhOb2RlVmlldyA9IEdyYXBoTm9kZVZpZXc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudWlQcmVmZXJlbmNlcyA9IHZvaWQgMDtcbmNsYXNzIFVJUHJlZmVyZW5jZXMge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBGdW5jdGlvbiBjYWxsZWQgd2hlbmV2ZXIgYSB1aSBwcmVmZXJlbmNlXG4gICAgICogaXMgY2hhbmdlZC5cbiAgICAgKi9cbiAgICBvblVwZGF0ZShjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgLy8gR2V0dGVycyBhbmQgU2V0dGVyc1xuICAgIC8qKlxuICAgICAqIEJhY2tncm91bmQgY29sb3Igb2YgYSBncmFwaCBlZGdlIGRlbm90aW5nXG4gICAgICogZXF1YWxpdHkgYmV0d2VlbiB0d28gZXhwcmVzc2lvbnMuXG4gICAgICogQ3NzIHZhbHVlLlxuICAgICAqL1xuICAgIGdldCBlZGdlRXF1YWxzQmFja2dyb3VuZENvbG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZWRnZUVxdWFsc0JhY2tncm91bmRDb2xvcjtcbiAgICB9XG4gICAgc2V0IGVkZ2VFcXVhbHNCYWNrZ3JvdW5kQ29sb3IodmFsKSB7XG4gICAgICAgIHRoaXMuX2VkZ2VFcXVhbHNCYWNrZ3JvdW5kQ29sb3IgPSB2YWw7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLmZvckVhY2goYyA9PiBjKCkpO1xuICAgIH1cbiAgICAvLyBQcmVmZXJlbmNlIFZhbHVlc1xuICAgIF9lZGdlRXF1YWxzQmFja2dyb3VuZENvbG9yID0gXCJub25lXCI7XG4gICAgY2FsbGJhY2tzID0gW107XG59XG5leHBvcnRzLnVpUHJlZmVyZW5jZXMgPSBuZXcgVUlQcmVmZXJlbmNlcygpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLldlYkdyYXBoVmlldyA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vQXJndW1lbnRcIik7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi4vZXhwcmVzc2lvbnMvRXhwcmVzc2lvblwiKTtcbmNvbnN0IEdyYXBoTWluaXB1bGF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HcmFwaE1pbmlwdWxhdG9yXCIpO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi4vdXRpbC9hc3NlcnRcIik7XG5jb25zdCBUb3VjaEdlc3R1cmVSZWNvZ25pemVyXzEgPSByZXF1aXJlKFwiLi4vLi4vVG91Y2hHZXN0dXJlUmVjb2duaXplclwiKTtcbmNvbnN0IEVkZ2VWaWV3XzEgPSByZXF1aXJlKFwiLi9FZGdlVmlld1wiKTtcbmNvbnN0IEV4cHJlc3Npb25Ob2RlVmlld18xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvbk5vZGVWaWV3XCIpO1xuY29uc3QgQXJndW1lbnROb2RlVmlld18xID0gcmVxdWlyZShcIi4vQXJndW1lbnROb2RlVmlld1wiKTtcbmNvbnN0IEV4cGxhbmF0aW9uUG9wdXBfMSA9IHJlcXVpcmUoXCIuL0V4cGxhbmF0aW9uUG9wdXBcIik7XG4vKipcbiAqIEEgdWkgZWxlbWVudCB0aGF0IHdpbGwgZGlzcGxheSBhIG1hdGggZ3JhcGggaW4gYSB3ZWIuXG4gKi9cbmNsYXNzIFdlYkdyYXBoVmlldyBleHRlbmRzIEhUTUxEaXZFbGVtZW50IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZ3JhcGggTXVzdCBiZSBmdWxseSBjb25uZWN0ZWQuXG4gICAgICogQHBhcmFtIHJvb3RzIE5vbi1lbXB0eS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihncmFwaCwgcm9vdHMsIGNvbmZpZyA9IHVuZGVmaW5lZCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmdyYXBoID0gZ3JhcGg7XG4gICAgICAgIHRoaXMubm9kZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IDA7XG4gICAgICAgIHRoaXMub2Zmc2V0WSA9IDA7XG4gICAgICAgIHRoaXMubm9kZVBvc2l0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5lZGdlUG9zaXRpb25zID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmVkZ2VzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJvb3ROb2RlcyA9IG5ldyBTZXQocm9vdHMpO1xuICAgICAgICB0aGlzLnJpbmdFbGVtZW50cyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5yaW5nUG9zaXRpb25zID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmV4cGxhbmF0aW9uUG9wdXBzID0gW107XG4gICAgICAgIGlmIChjb25maWcgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dBcmd1bWVudHMgPSBjb25maWcuc2hvd0FyZ3VtZW50cztcbiAgICAgICAgICAgIHRoaXMuZHJhd0VkZ2VMaW5lcyA9IGNvbmZpZy5kcmF3RWRnZUxpbmVzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3R5bGUuY2xpcFBhdGggPSBcInBvbHlnb24oMCUgMCUsIDEwMCUgMCUsIDEwMCUgMTAwJSwgMCUgMTAwJSlcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRvdWNoRG93biA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1vdXNlRG93bilcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0aGlzLm9mZnNldFggKz0gZXZlbnQubW92ZW1lbnRYIC8gdGhpcy5zY2FsZTtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0WSArPSBldmVudC5tb3ZlbWVudFkgLyB0aGlzLnNjYWxlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVPZmZzZXQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW91c2VQb3MgPSBQb2ludChldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcbiAgICAgICAgICAgIGNvbnN0IHByZU1vdXNlUG9zID0gdGhpcy5nZXRJbnRlcm5hbFBvcyhtb3VzZVBvcyk7XG4gICAgICAgICAgICBjb25zdCBzY2FsZURlbHRhID0gTWF0aC5wb3coMC44LCBldmVudC5kZWx0YVkgLyAzNjApO1xuICAgICAgICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlRGVsdGEgKiB0aGlzLnNjYWxlO1xuICAgICAgICAgICAgY29uc3QgcG9zdE1vdXNlUG9zID0gdGhpcy5nZXRJbnRlcm5hbFBvcyhtb3VzZVBvcyk7XG4gICAgICAgICAgICBjb25zdCBpbnRYRGlmZiA9IHBvc3RNb3VzZVBvcy54IC0gcHJlTW91c2VQb3MueDtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJJbnRlcm5hbCBYIENoYW5nZSB1bmRlciBtb3VzZSBcIiArIGludFhEaWZmKVxuICAgICAgICAgICAgLy8gQWRqdXN0IG9mZnNldCBzbyB0aGF0IGNvbnRlbnQgdW5kZXIgdGhlIG1vdXNlIGRvZXNuJ3QgbW92ZVxuICAgICAgICAgICAgLy90aGlzLm9mZnNldFggKz0gaW50WERpZmZcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJDb3JyZWN0ZWQgWCBDaGFuZ2UgdW5kZXIgbW91c2UgXCIgKyAodGhpcy5nZXRJbnRlcm5hbFBvcyhtb3VzZVBvcykueCAtIHByZU1vdXNlUG9zLngpKVxuICAgICAgICAgICAgdGhpcy51cGRhdGVPZmZzZXQoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nZXN0dXJlUmVjb2duaXplciA9IG5ldyBUb3VjaEdlc3R1cmVSZWNvZ25pemVyXzEuVG91Y2hHZXN0dXJlUmVjb2duaXplcigpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGRvd25cIiwgdGhpcy5nZXN0dXJlUmVjb2duaXplci5wcm9jZXNzVG91Y2hEb3duKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5nZXN0dXJlUmVjb2duaXplci5wcm9jZXNzVG91Y2hFbmQpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCB0aGlzLmdlc3R1cmVSZWNvZ25pemVyLnByb2Nlc3NUb3VjaENhbmNlbCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLmdlc3R1cmVSZWNvZ25pemVyLnByb2Nlc3NUb3VjaE1vdmUpO1xuICAgICAgICB0aGlzLmdlc3R1cmVSZWNvZ25pemVyLmFkZFBpbmNoTGlzdGVuZXIoKGNlbnRlciwgc2NhbGVEZWx0YSwgZmluZ2VycykgPT4ge1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZXBPaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgYSBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgdGhlIGNvbG9yIG9mIGEgbm9kZS5cbiAgICAgKiBAcGFyYW0gY29sb3JGblxuICAgICAqL1xuICAgIHNldE5vZGVDb2xvcmluZ1NjaGVtZShjb2xvckZuKSB7XG4gICAgICAgIHRoaXMubm9kZUNvbG9yRm4gPSBjb2xvckZuO1xuICAgICAgICB0aGlzLnByb3BvZ2F0ZVNldHRpbmdzVG9Ob2RlcygpO1xuICAgIH1cbiAgICBub2RlQ29sb3JGbiA9IChuKSA9PiBcImxpZ2h0Ymx1ZVwiO1xuICAgIHByb3BvZ2F0ZVNldHRpbmdzVG9Ob2RlcygpIHtcbiAgICAgICAgdGhpcy5ub2Rlcy5mb3JFYWNoKCh2aWV3LCBub2RlKSA9PiB7XG4gICAgICAgICAgICB2aWV3LmJhY2tncm91bmRDb2xvciA9IHRoaXMubm9kZUNvbG9yRm4obm9kZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGlmIHRoZSB2aWV3IHNob3VsZCBzaG93IGFyZ3VtZW50IG5vZGVzIGFzIG5vZGVzLlxuICAgICAqIEZhbHNlIGJ5IGRlZmF1bHQuXG4gICAgICogQHBhcmFtIHZhbFxuICAgICAqL1xuICAgIHNldFNob3dBcmd1bWVudHModmFsKSB7XG4gICAgICAgIHRoaXMuc2hvd0FyZ3VtZW50cyA9IHRydWU7XG4gICAgICAgIHRoaXMucmVhZEdyYXBoKCk7XG4gICAgICAgIHRoaXMuYXJyYW5nZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZU9mZnNldCgpO1xuICAgIH1cbiAgICBnZXQgY2VudGVyKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdGhpcy5vZmZzZXRXaWR0aCAvIDIsXG4gICAgICAgICAgICB5OiB0aGlzLm9mZnNldEhlaWdodCAvIDIsXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZvbGxvd3MgdGhlIHNob3dBcmd1bWVudCBzZXR0aW5nLlxuICAgICAqIFBvcHVsYXRlcyB0aGlzLm5vZGVzLCB0aGlzLmVkZ2VzLFxuICAgICAqIGFkZHMgdGhlIGNyZWF0ZWQgdmlld3MgdG8gdGhlIHNoYWRvdyBkb21cbiAgICAgKiB0byBtYXRjaCB0aGUgZ3JhcGguXG4gICAgICogUmVtb3ZlcyBhbnkgcHJlLWV4aXN0aW5nIGVsZW1lbnRzIGZyb20gdGhlIHNoYWRvdyBkb20uXG4gICAgICovXG4gICAgcmVhZEdyYXBoKCkge1xuICAgICAgICAvLyBDbGVhciBleGlzdGluZ1xuICAgICAgICB0aGlzLm5vZGVzLmZvckVhY2goKHZpZXcsIG5vZGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodmlldyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm5vZGVzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuZWRnZXMuZm9yRWFjaCgodmlldywgZWRnZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh2aWV3KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWRnZXMuY2xlYXIoKTtcbiAgICAgICAgLy8gRmV0Y2ggbm9kZXNcbiAgICAgICAgdGhpcy5ncmFwaC5nZXROb2RlcygpLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmlldyA9IG5ldyBFeHByZXNzaW9uTm9kZVZpZXdfMS5FeHByZXNzaW9uTm9kZVZpZXcobm9kZSk7XG4gICAgICAgICAgICAgICAgdmlldy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzLnNldChub2RlLCB2aWV3KTtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZCh2aWV3KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBBcmd1bWVudF8xLkFyZ3VtZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNob3dBcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBjb25zdCB2aWV3ID0gbmV3IEFyZ3VtZW50Tm9kZVZpZXdfMS5Bcmd1bWVudE5vZGVWaWV3KG5vZGUpO1xuICAgICAgICAgICAgICAgIHZpZXcuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rlcy5zZXQobm9kZSwgdmlldyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmQodmlldyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR3JhcGggY29udGFpbnMgbm9kZSBXZWJHcmFwaFZpZXcgY2FuJ3QgcHJvY2Vzcy5cIik7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBGZXRjaCBlZGdlc1xuICAgICAgICBHcmFwaE1pbmlwdWxhdG9yXzEuR3JhcGhNaW5pcHVsYXRvci5kcm9wU3ltbWV0cmljKHRoaXMuZ3JhcGguZ2V0RWRnZXMoKSkuZmlsdGVyKGVkZ2UgPT4ge1xuICAgICAgICAgICAgLy8gT25seSBjb25zaWRlciBlZGdlcyBmb3Igd2hpY2ggd2UgaGF2ZSBib3RoIGVuZHBvaW50cyBvbiB0aGUgdmlld1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZXMuaGFzKGVkZ2UubikgJiYgdGhpcy5ub2Rlcy5oYXMoZWRnZS5uMSk7XG4gICAgICAgIH0pLmZvckVhY2goZWRnZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gbmV3IEVkZ2VWaWV3XzEuRWRnZVZpZXcodGhpcywgZWRnZSk7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgdGhpcy5lZGdlcy5zZXQoZWRnZSwgdmlldyk7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZCh2aWV3KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvcG9nYXRlU2V0dGluZ3NUb05vZGVzKCk7XG4gICAgICAgIHRoaXMucmVwT2soKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMucmVhZEdyYXBoKCk7XG4gICAgICAgIHRoaXMuYXJyYW5nZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZU9mZnNldCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQaWNrIHBsYWNlcyBmb3IgYWxsIHRoZSBub2Rlcy9lZGdlcyBvbiB0aGUgc2NyZWVuLlxuICAgICAqIFBvcHVsYXRlcyB0aGUgcG9zaXRpb24qIHJlcCB2YXJzLlxuICAgICAqL1xuICAgIGFycmFuZ2UoKSB7XG4gICAgICAgIHRoaXMubm9kZVBvc2l0aW9ucy5jbGVhcigpO1xuICAgICAgICB0aGlzLmVkZ2VQb3NpdGlvbnMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yaW5nUG9zaXRpb25zLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucmluZ0VsZW1lbnRzLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yaW5nRWxlbWVudHMuY2xlYXIoKTtcbiAgICAgICAgLy8gUGxhY2Ugbm9kZXMgb24gYSBzZXJpZXMgb2YgcmluZ3MgZnJvbSB0aGUgY2VudGVyIHVzaW5nIHRoZWlyIGRlcHRoIGluIHRoZSBncmFwaFxuICAgICAgICBjb25zdCBsZXZlbHMgPSBHcmFwaE1pbmlwdWxhdG9yXzEuR3JhcGhNaW5pcHVsYXRvci5nZXRMZXZlbHModGhpcy5ncmFwaCwgdGhpcy5yb290Tm9kZXMsIChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIEFyZ3VtZW50XzEuQXJndW1lbnQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0FyZ3VtZW50cztcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOZXcgdHlwZSBvZiBub2RlXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IG1heERlcHRoID0gMDtcbiAgICAgICAgbGV2ZWxzLmZvckVhY2goKF8sIGRlcHRoKSA9PiB7XG4gICAgICAgICAgICBtYXhEZXB0aCA9IE1hdGgubWF4KG1heERlcHRoLCBkZXB0aCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjZW50ZXIgPSB7IHg6ICh0aGlzLmNsaWVudFdpZHRoIC8gMiksIHk6IHRoaXMuY2xpZW50SGVpZ2h0IC8gMiB9O1xuICAgICAgICBsZXQgbGFzdFJhZGl1cyA9IDA7IC8vcHhcbiAgICAgICAgZm9yIChsZXQgZGVwdGggPSAwOyBkZXB0aCA8IG1heERlcHRoICsgMTsgZGVwdGgrKykge1xuICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBsZXZlbHMuZ2V0KGRlcHRoKTtcbiAgICAgICAgICAgIC8vIE9yZ2FuaXplIHRoZSByb290IG5vZGVzIG9uIGEgY2lyY2xlIGFyb3VuZCB0aGUgY2VudGVyXG4gICAgICAgICAgICBjb25zdCBzdGVwU2l6ZSA9ICgyICogTWF0aC5QSSkgLyBub2Rlcy5zaXplO1xuICAgICAgICAgICAgLy8gVGhlIHN0YXJ0aW5nIGFuZ3VsYXIgb2Zmc2V0IHRvIGFkZCB0aGUgc3RlcHNpemUgdG9cbiAgICAgICAgICAgIC8vIE1ha2luZyBpdCBub24temVybyBzdG9wcyB0aGluZ3MgZnJvbSBhbGlnbmluZ1xuICAgICAgICAgICAgY29uc3Qgc3RlcE9mZnNldCA9IChNYXRoLlBJIC8gbm9kZXMuc2l6ZSkgKiBkZXB0aDtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsY3VsYXRpbmcgdGhlIHJhZGl1cyBvZiB0aGUgY2lyY2xlXG4gICAgICAgICAgICAgKiBTdXBwb3NlIGV2ZXJ5IHJvb3Qgbm9kZSBvbiB0aGUgc3RhcnRpbmcgY2lyY2xlIHJlcXVpcmVzXG4gICAgICAgICAgICAgKiBhIGNpcmN1bGFyIHNwYWNlIHRvIGJlIGRyYXduIHdpdGggcmFkaXVzIG5vZGVSYWRpdXNcbiAgICAgICAgICAgICAqIEEgc3RhcnRpbmcgY2lyY2xlIHdpdGggbiBvZiB0aGVzZSBub2RlcyB3b3VsZCByZXF1aXJlIGFcbiAgICAgICAgICAgICAqIGNpcmN1bWZlcmVuY2Ugb2YgbiAqIDJub2RlUmFkaXVzLlxuICAgICAgICAgICAgICogVGhlIGNpcmN1bWZlcmVuY2Ugb2YgYSBjaXJjbGUgY2FuIGJlIGV4cHJlc3NlZFxuICAgICAgICAgICAgICogYXMgMipwaSpyXG4gICAgICAgICAgICAgKiA9PiByID0gbiAqIDIgKiBzbWFsbFIgLyAoMiAqIHBpKVxuICAgICAgICAgICAgICogICAgICA9IG4gKiBzbWFsbFIgLyBwaVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdCBub2RlUmFkaXVzID0gNzA7IC8vIHBpeGVsc1xuICAgICAgICAgICAgbGV0IHJhZGl1cyA9IE1hdGgubWF4KG5vZGVzLnNpemUgKiBub2RlUmFkaXVzIC8gTWF0aC5QSSwgbGFzdFJhZGl1cyArICgzICogbm9kZVJhZGl1cykpO1xuICAgICAgICAgICAgaWYgKGRlcHRoID09IDAgJiYgbm9kZXMuc2l6ZSA9PSAxKVxuICAgICAgICAgICAgICAgIHJhZGl1cyA9IDA7XG4gICAgICAgICAgICBsYXN0UmFkaXVzID0gcmFkaXVzO1xuICAgICAgICAgICAgY29uc3QgbnMgPSBbLi4ubm9kZXNdOyAvLyBUT0RPLCBhc3NpZ24gYSBtZWFuaW5nZnVsIG9yZGVyaW5nXG4gICAgICAgICAgICBucy5mb3JFYWNoKChub2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLm5vZGVzLmdldChub2RlKTtcbiAgICAgICAgICAgICAgICAvL3ZpZXcuc3R5bGUud2lkdGggPSBcIlwiICsgc21hbGxSICsgXCJweFwiXG4gICAgICAgICAgICAgICAgLy92aWV3LnN0eWxlLmhlaWdodCA9IFwiXCIgKyBzbWFsbFIgKyBcInB4XCJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNhcnRlc2lhbiBwb2ludCBmcm9tIHRoZSByYWRpdXMgYW5kIGFuZ2xlXG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IHJhZGl1cyAqIE1hdGguY29zKHN0ZXBTaXplICogaW5kZXggKyBzdGVwT2Zmc2V0KSArIGNlbnRlci54O1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSByYWRpdXMgKiBNYXRoLnNpbihzdGVwU2l6ZSAqIGluZGV4ICsgc3RlcE9mZnNldCkgKyBjZW50ZXIueTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVQb3NpdGlvbnMuc2V0KHZpZXcsIFBvaW50KHgsIHkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgcmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICByaW5nLnN0eWxlLmJvcmRlciA9IFwibGlnaHRncmF5IHNvbGlkIDAuM2NoXCI7XG4gICAgICAgICAgICByaW5nLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgcmluZy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgIHJpbmcuc3R5bGUuekluZGV4ID0gXCItMTBcIjtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQocmluZyk7XG4gICAgICAgICAgICB0aGlzLnJpbmdFbGVtZW50cy5hZGQocmluZyk7XG4gICAgICAgICAgICB0aGlzLnJpbmdQb3NpdGlvbnMuc2V0KHJpbmcsIHsgcmFkaXVzOiByYWRpdXMgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm93IGFyYW5nZSB0aGUgZWRnZXNcbiAgICAgICAgdGhpcy5lZGdlcy5mb3JFYWNoKCh2aWV3LCBlZGdlKSA9PiB7XG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBtaWRkbGUgb2YgdGhlIHR3byBlbmRwdHNcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0WCA9IHRoaXMubm9kZVBvc2l0aW9ucy5nZXQodGhpcy5ub2Rlcy5nZXQoZWRnZS5uKSkueDtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0WSA9IHRoaXMubm9kZVBvc2l0aW9ucy5nZXQodGhpcy5ub2Rlcy5nZXQoZWRnZS5uKSkueTtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZFggPSB0aGlzLm5vZGVQb3NpdGlvbnMuZ2V0KHRoaXMubm9kZXMuZ2V0KGVkZ2UubjEpKS54O1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kWSA9IHRoaXMubm9kZVBvc2l0aW9ucy5nZXQodGhpcy5ub2Rlcy5nZXQoZWRnZS5uMSkpLnk7XG4gICAgICAgICAgICBjb25zdCB4ID0gKGZpcnN0WCArIHNlY29uZFgpIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IHkgPSAoZmlyc3RZICsgc2Vjb25kWSkgLyAyO1xuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKHNlY29uZFkgLSBmaXJzdFksIHNlY29uZFggLSBmaXJzdFgpO1xuICAgICAgICAgICAgdGhpcy5lZGdlUG9zaXRpb25zLnNldCh2aWV3LCB7IHg6IHgsIHk6IHksIGFuZ2xlOiBhbmdsZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVwT2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBkcmF3IHBvc2l0aW9uIG9mIHRoZSBub2RlcyBvbiB0aGUgc2NyZWVuXG4gICAgICogdG8gbWF0Y2ggdGhlIG9mZnNldCBpbiByZXAuIEFzc3VtZXMgYWxsIHZpZXdzIGhhdmUgYSBwb3NpdGlvblxuICAgICAqIHN0b3JlZCBpbiB0aGUgcmVwLiBDYWxsIGFycmFuZ2UoKSBmaXJzdC5cbiAgICAgKiBBbHNvIGFwcGxpZXMgdGhlIHNjYWxlIGZhY3RvciB0byB0aGUgZmluYWwgZHJhdyBwb3NpdGlvbnMsXG4gICAgICogaW52aXNpYmxlIHRvIGV2ZXJ5b25lIGVsc2UuXG4gICAgICovXG4gICAgdXBkYXRlT2Zmc2V0KCkge1xuICAgICAgICBjb25zdCBjZW50ZXIgPSB0aGlzLmNlbnRlcjtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLnNjYWxlO1xuICAgICAgICBmdW5jdGlvbiBhcHBseVNjYWxlKGkpIHtcbiAgICAgICAgICAgIHJldHVybiBQb2ludCgoKGkueCkgLSBjZW50ZXIueCkgKiBzY2FsZSArIGNlbnRlci54LCAoKGkueSkgLSBjZW50ZXIueSkgKiBzY2FsZSArIGNlbnRlci55KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGVQb3NpdGlvbnMuZm9yRWFjaCgocG9zLCB2aWV3KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhZGp1c3RlZCA9IGFwcGx5U2NhbGUoe1xuICAgICAgICAgICAgICAgIHg6IHBvcy54ICsgdGhpcy5vZmZzZXRYLFxuICAgICAgICAgICAgICAgIHk6IHBvcy55ICsgdGhpcy5vZmZzZXRZLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLmxlZnQgPSBcIlwiICsgKGFkanVzdGVkLnggLSAoMC41ICogdmlldy5vZmZzZXRXaWR0aCkpICsgXCJweFwiO1xuICAgICAgICAgICAgdmlldy5zdHlsZS50b3AgPSBcIlwiICsgKGFkanVzdGVkLnkgLSAoMC41ICogdmlldy5vZmZzZXRIZWlnaHQpKSArIFwicHhcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWRnZVBvc2l0aW9ucy5mb3JFYWNoKChwb3MsIHZpZXcpID0+IHtcbiAgICAgICAgICAgIHZpZXcuc2V0QW5nbGUocG9zLmFuZ2xlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmRyYXdFZGdlTGluZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdFBvcyA9IHRoaXMubm9kZVBvc2l0aW9ucy5nZXQodGhpcy5ub2Rlcy5nZXQodmlldy5maXJzdCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZFBvcyA9IHRoaXMubm9kZVBvc2l0aW9ucy5nZXQodGhpcy5ub2Rlcy5nZXQodmlldy5zZWNvbmQpKTtcbiAgICAgICAgICAgICAgICB2aWV3LndpZHRoID0gXCJcIiArIChzY2FsZSAqIE1hdGguaHlwb3Qoc2Vjb25kUG9zLnggLSBmaXJzdFBvcy54LCBzZWNvbmRQb3MueSAtIGZpcnN0UG9zLnkpKSArIFwicHhcIjtcbiAgICAgICAgICAgICAgICB2aWV3LnN0eWxlLmJvcmRlckJvdHRvbSA9IFwiYmxhY2sgMC4xY2ggc29saWRcIjtcbiAgICAgICAgICAgICAgICB2aWV3LnN0eWxlLmJvcmRlclRvcCA9IFwiYmxhY2sgMC4xY2ggc29saWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZXcud2lkdGggPSBcImZpdC1jb250ZW50XCI7XG4gICAgICAgICAgICAgICAgdmlldy5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICB2aWV3LnN0eWxlLmJvcmRlclRvcCA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYWRqdXN0ZWQgPSBhcHBseVNjYWxlKHtcbiAgICAgICAgICAgICAgICB4OiBwb3MueCArIHRoaXMub2Zmc2V0WCxcbiAgICAgICAgICAgICAgICB5OiBwb3MueSArIHRoaXMub2Zmc2V0WSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmlldy5zdHlsZS5sZWZ0ID0gXCJcIiArIChhZGp1c3RlZC54IC0gKDAuNSAqIHZpZXcub2Zmc2V0V2lkdGgpKSArIFwicHhcIjtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUudG9wID0gXCJcIiArIChhZGp1c3RlZC55IC0gKDAuNSAqIHZpZXcub2Zmc2V0SGVpZ2h0KSkgKyBcInB4XCI7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBPdmVybGF5IGVsZW1lbnRzIGNoYW5nZSBzaXplIHdpdGggc2NhbGVcbiAgICAgICAgdGhpcy5yaW5nUG9zaXRpb25zLmZvckVhY2goKHBvcywgdmlldykgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWRqdXN0ZWRDZW50ZXJQb3MgPSBhcHBseVNjYWxlKHtcbiAgICAgICAgICAgICAgICB4OiBjZW50ZXIueCArIHRoaXMub2Zmc2V0WCxcbiAgICAgICAgICAgICAgICB5OiBjZW50ZXIueSArIHRoaXMub2Zmc2V0WSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmlldy5zdHlsZS5sZWZ0ID0gXCJcIiArIChhZGp1c3RlZENlbnRlclBvcy54IC0gKHBvcy5yYWRpdXMgKiBzY2FsZSkpICsgXCJweFwiO1xuICAgICAgICAgICAgdmlldy5zdHlsZS50b3AgPSBcIlwiICsgKGFkanVzdGVkQ2VudGVyUG9zLnkgLSAocG9zLnJhZGl1cyAqIHNjYWxlKSkgKyBcInB4XCI7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLndpZHRoID0gXCJcIiArIHBvcy5yYWRpdXMgKiAyICogc2NhbGUgKyBcInB4XCI7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLmFzcGVjdFJhdGlvID0gXCIxXCI7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmV4cGxhbmF0aW9uUG9wdXBzLmZvckVhY2godmFsID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZpZXcgPSB2YWwuZTtcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHZhbC5wb3M7XG4gICAgICAgICAgICBjb25zdCBhZGp1c3RlZCA9IGFwcGx5U2NhbGUoe1xuICAgICAgICAgICAgICAgIHg6IHBvcy54ICsgdGhpcy5vZmZzZXRYLFxuICAgICAgICAgICAgICAgIHk6IHBvcy55ICsgdGhpcy5vZmZzZXRZLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLmxlZnQgPSBcIlwiICsgKGFkanVzdGVkLnggLSAoMC41ICogdmlldy5vZmZzZXRXaWR0aCkpICsgXCJweFwiO1xuICAgICAgICAgICAgdmlldy5zdHlsZS50b3AgPSBcIlwiICsgKGFkanVzdGVkLnkgLSAoMC41ICogdmlldy5vZmZzZXRIZWlnaHQpKSArIFwicHhcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVwT2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWFwIGZyb20gcmVsYXRpdmUgc2NyZWVuIGNvb3JkaW5hdGVzICh3aGVyZSB0bCBvZiB0aGlzIHZpZXcgaXMgKDAsMCkpXG4gICAgICogdG8gdGhlIGludGVybmFsIGNvb3JkaW5hdGUgc3lzdGVtIHdlJ3JlIHVzaW5nLlxuICAgICAqL1xuICAgIGdldEludGVybmFsUG9zKHBpeGVsUG9zKSB7XG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHRoaXMuY2VudGVyO1xuICAgICAgICBjb25zdCBzY2FsZSA9IHRoaXMuc2NhbGU7XG4gICAgICAgIHJldHVybiBQb2ludCgocGl4ZWxQb3MueCAtIGNlbnRlci54KSAvIHNjYWxlICsgY2VudGVyLnggLSB0aGlzLm9mZnNldFgsIChwaXhlbFBvcy55IC0gY2VudGVyLnkpIC8gc2NhbGUgKyBjZW50ZXIueSAtIHRoaXMub2Zmc2V0WSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlYWN0IHRvIGFuIGVkZ2UgYmVpbmcgY2xpY2tlZC5cbiAgICAgKiBAcGFyYW0gdmlldyBJbiB0aGlzIHZpZXdcbiAgICAgKiBAcGFyYW0gZXZlbnQgVGhlIGNsaWNrIGV2ZW50XG4gICAgICovXG4gICAgZWRnZUNsaWNrZWQodmlldywgZXZlbnQpIHtcbiAgICAgICAgLy8gVE9ETzogRG9uJ3QgYWxsb3cgZHVwbGlhdGUgZXhwbGFuYXRpb24gcG9wdXBzXG4gICAgICAgIGlmICh2aWV3LmVkZ2UgaW5zdGFuY2VvZiBBcmd1bWVudF8xLkFyZ3VtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBwb3B1cCA9IG5ldyBFeHBsYW5hdGlvblBvcHVwXzEuRXhwbGFuYXRpb25Qb3B1cCh2aWV3LmVkZ2UsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHBvcHVwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZXhwbGFuYXRpb25Qb3B1cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZXhwbGFuYXRpb25Qb3B1cHNbaV0uZSA9PT0gcG9wdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwbGFuYXRpb25Qb3B1cHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgcmVhbHRpdmVYID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0aXZlWSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIC8vVE9ETzogVGhlIHBvc2l0aW9uIGlzbid0IGNvcnJlY3RcbiAgICAgICAgICAgIC8vVE9ETzogQWxnb3JpdGhtIGZvciBwaWNraW5nIHdoZXJlIHdlIHNob3VsZCBwdXQgdGhlIHBvcHVwIHNvIGl0IHN0YXlzIG91dFxuICAgICAgICAgICAgLy8gb2YgdGhlIHdheSBvZiB0aGUgZ3JhcGhcbiAgICAgICAgICAgIHRoaXMuZXhwbGFuYXRpb25Qb3B1cHMucHVzaCh7XG4gICAgICAgICAgICAgICAgZTogcG9wdXAsXG4gICAgICAgICAgICAgICAgcG9zOiB0aGlzLmdldEludGVybmFsUG9zKFBvaW50KHJlYWx0aXZlWCwgcmVsYXRpdmVZKSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBvcHVwLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgdGhpcy5hcHBlbmQocG9wdXApO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVPZmZzZXQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXBPaygpIHtcbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5yb290Tm9kZXMuc2l6ZSA+IDApO1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KShHcmFwaE1pbmlwdWxhdG9yXzEuR3JhcGhNaW5pcHVsYXRvci5pc0Nvbm5lY3RlZCh0aGlzLmdyYXBoKSwgXCJHcmFwaCBub3QgY29ubmVjdGVkXCIpO1xuICAgIH1cbiAgICBncmFwaDtcbiAgICBub2RlcztcbiAgICAvLyBUaGUgUG9zaXRpb24gb2YgdGhlIGNlbnRlciBvZiB0aGUgbm9kZS5cbiAgICBub2RlUG9zaXRpb25zO1xuICAgIGVkZ2VzO1xuICAgIGVkZ2VQb3NpdGlvbnM7XG4gICAgLy8gQW10IHRvIGFkZCB0byBsZWZ0IGNvb3JkaW5hdGVcbiAgICBvZmZzZXRYO1xuICAgIC8vIEFkZGVkIHRvIHRvcCBjb29yZGluYXRlIG9mIG5vZGVzXG4gICAgb2Zmc2V0WTtcbiAgICAvLyBpZiB0aGUgbW91c2UgaXMgZG93blxuICAgIG1vdXNlRG93biA9IGZhbHNlO1xuICAgIHRvdWNoRG93biA9IGZhbHNlO1xuICAgIHNjYWxlID0gMTtcbiAgICByb290Tm9kZXM7XG4gICAgcmluZ0VsZW1lbnRzO1xuICAgIHJpbmdQb3NpdGlvbnM7XG4gICAgLyoqXG4gICAgICogUG9zaXRpb24gb2YgdG9wIGxlZnQgb2YgcG9wdXBcbiAgICAgKi9cbiAgICBleHBsYW5hdGlvblBvcHVwcztcbiAgICBnZXN0dXJlUmVjb2duaXplcjtcbiAgICAvLyBJZiB0aGUgZ3JhcGggc2hvdWxkIGRyYXcgYXJndW1lbnQgbm9kZXMuXG4gICAgc2hvd0FyZ3VtZW50cyA9IGZhbHNlO1xuICAgIGRyYXdFZGdlTGluZXMgPSBmYWxzZTtcbn1cbmV4cG9ydHMuV2ViR3JhcGhWaWV3ID0gV2ViR3JhcGhWaWV3O1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwid2ViLWdyYXBodmlld1wiLCBXZWJHcmFwaFZpZXcsIHsgZXh0ZW5kczogXCJkaXZcIiB9KTtcbmZ1bmN0aW9uIFBvaW50KHgsIHksIGFuZ2xlID0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKGFuZ2xlID09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5LFxuICAgICAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IHgsXG4gICAgICAgIHk6IHksXG4gICAgICAgIGFuZ2xlOiBhbmdsZSxcbiAgICB9O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlID0gdm9pZCAwO1xuLyoqXG4gKiBQYXJzZXMgaHVtYW4gd3JpdHRlbiwgdXRmLTggdHlwZSBtYXRoIGV4cHJlc3Npb25zXG4gKiBpbnRvIGFjdHVhbCBtYXRoLlxuICogQHBhcmFtIGlucHV0XG4gKi9cbmZ1bmN0aW9uIHBhcnNlKGlucHV0KSB7XG4gICAgY29uc3Qgb3V0ID0gW107XG4gICAgY29uc29sZS5sb2coXCJJbnB1dDogXCIgKyBpbnB1dCk7XG4gICAgY29uc3QgZmluZEV4cHJlc3Npb25zID0gL1swLTlhLXpBLVpdKy87XG4gICAgY29uc3QgZmluZE9wZXJhdG9ycyA9IC9bXFwrXFwtXFwqXFwvXFxeXS87XG4gICAgY29uc29sZS5sb2coZmluZEV4cHJlc3Npb25zKTtcbiAgICBjb25zdCBzcGxpdCA9IGlucHV0LnNwbGl0KGZpbmRFeHByZXNzaW9ucyk7XG4gICAgY29uc29sZS5sb2coc3BsaXQpO1xuICAgIHJldHVybiBvdXQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG5mdW5jdGlvbiBwYXJzZUV4cHJlc3Npb24oaW5wdXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWRcIik7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaW5NYXRoQmxvY2sgPSBleHBvcnRzLmluTWF0aCA9IGV4cG9ydHMuaW5Sb3cgPSBleHBvcnRzLmluUGFyZW4gPSB2b2lkIDA7XG4vKipcbiAqIFdyYXBzIHRoZSBnaXZlbiBtYXRobWwgc3RyaW5nIGluIG1hdGhtbCBwYXJlbnRoYXNlcy5cbiAqIEBwYXJhbSBzdHJcbiAqL1xuZnVuY3Rpb24gaW5QYXJlbihzdHIpIHtcbiAgICByZXR1cm4gXCI8bW8+KDwvbW8+XCIgKyBzdHIgKyBcIjxtbz4pPC9tbz5cIjtcbn1cbmV4cG9ydHMuaW5QYXJlbiA9IGluUGFyZW47XG4vKipcbiAqIFB1dHMgdGhlIGdpdmVuIG1hdGhtbCBleHByZXNzaW9uIGluIGEgcm93IHNvIHRoYXRcbiAqIGl0IGRvZXNuJ3QgZ2V0IGRpdmlkZWQgYnkgbWF0aGpheC5cbiAqIEBwYXJhbSBzdHJcbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIGluUm93KHN0cikge1xuICAgIHJldHVybiBcIjxtcm93PlwiICsgc3RyICsgXCI8L21yb3c+XCI7XG59XG5leHBvcnRzLmluUm93ID0gaW5Sb3c7XG4vKipcbiAqIFdyYXBzIHRoZSBnaXZlbiBzdHJpbmcgaW4gPG1hdGg+PC9tYXRoPlxuICogQHBhcmFtIHN0clxuICovXG5mdW5jdGlvbiBpbk1hdGgoc3RyKSB7XG4gICAgcmV0dXJuIFwiPG1hdGg+XCIgKyBzdHIgKyBcIjwvbWF0aD5cIjtcbn1cbmV4cG9ydHMuaW5NYXRoID0gaW5NYXRoO1xuLyoqXG4gKiBXcmFwcyB0aGUgZ2l2ZW4gc3RyaW5nIGluIDxtYXRoIGRpc3BsYXk9J2Jsb2NrJz48L21hdGg+XG4gKiBAcGFyYW0gc3RyXG4gKi9cbmZ1bmN0aW9uIGluTWF0aEJsb2NrKHN0cikge1xuICAgIHJldHVybiBcIjxtYXRoIGRpc3BsYXk9J2Jsb2NrJz5cIiArIHN0ciArIFwiPC9tYXRoPlwiO1xufVxuZXhwb3J0cy5pbk1hdGhCbG9jayA9IGluTWF0aEJsb2NrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNldE9mID0gdm9pZCAwO1xuZnVuY3Rpb24gc2V0T2YoLi4uYXJyKSB7XG4gICAgY29uc3Qgb3V0ID0gbmV3IFNldCgpO1xuICAgIGFyci5mb3JFYWNoKGUgPT4gb3V0LmFkZChlKSk7XG4gICAgcmV0dXJuIG91dDtcbn1cbmV4cG9ydHMuc2V0T2YgPSBzZXRPZjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5hc3NlcnQgPSB2b2lkIDA7XG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gZXhwcmVzc2lvbiBldmFsdWF0ZWQgdG8gdHJ1ZS4gSWYgbm90LCB0aHJvd3MgZXJyb3JcbiAqIHdpdGggdGhlIG1lc3NhZ2UgZ2l2ZW4uXG4gKiBAcGFyYW0gbXNnIERpc3BsYXllZCBpZiB0aGUgZXhwcmVzc2lvbiBpcyBmYWxzZS4gRGVmYXVsdHMgdG8gXCJGYWlsZWQgQXNzZXJ0XCJcbiAqL1xuZnVuY3Rpb24gYXNzZXJ0KGV4cCwgbXNnID0gXCJGYWlsZWQgYXNzZXJ0XCIpIHtcbiAgICBpZiAoIWV4cClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG59XG5leHBvcnRzLmFzc2VydCA9IGFzc2VydDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFByaW1hcnlQYWdlTG9hZGVyXzEgPSByZXF1aXJlKFwiLi9QcmltYXJ5UGFnZUxvYWRlclwiKTtcbmNvbnN0IEV4cHJlc3Npb25UZXN0UGFnZUxvYWRlcl8xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvblRlc3RQYWdlTG9hZGVyXCIpO1xuLyoqXG4gKiBQb3B1bGF0ZSBodG1sIGVsZW1lbnRzIGJ5IHRoZWlyIGNsYXNzLlxuICovXG5jb25zdCBjbGFzc2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5jbGFzc0xpc3Q7XG5pZiAoY2xhc3Nlcy5jb250YWlucygnZXhwcmVzc2lvblRlc3RQYWdlJykpIHtcbiAgICAoMCwgRXhwcmVzc2lvblRlc3RQYWdlTG9hZGVyXzEubG9hZEV4cHJlc3Npb25zVGVzdFBhZ2UpKCk7XG59XG5lbHNlIGlmIChjbGFzc2VzLmNvbnRhaW5zKCdwcmltYXJ5SW50ZWdyYXRvcicpKSB7XG4gICAgKDAsIFByaW1hcnlQYWdlTG9hZGVyXzEubG9hZFByaW1hcnlQYWdlKSgpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9