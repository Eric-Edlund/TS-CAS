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
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ./mathlib/derivations/NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
const CombineCommonTermsAddition_1 = __webpack_require__(/*! ./mathlib/derivations/simplifications/CombineCommonTermsAddition */ "./mathlib/derivations/simplifications/CombineCommonTermsAddition.ts");
const CombineCommonFactorsMultiplication_1 = __webpack_require__(/*! ./mathlib/derivations/simplifications/CombineCommonFactorsMultiplication */ "./mathlib/derivations/simplifications/CombineCommonFactorsMultiplication.ts");
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
const Exponent_1 = __webpack_require__(/*! ./mathlib/expressions/Exponent */ "./mathlib/expressions/Exponent.ts");
const ExponentialIdentity_1 = __webpack_require__(/*! ./mathlib/derivations/simplifications/ExponentialIdentity */ "./mathlib/derivations/simplifications/ExponentialIdentity.ts");
const AssociativePropertyOfProductsAndSums_1 = __webpack_require__(/*! ./mathlib/derivations/simplifications/AssociativePropertyOfProductsAndSums */ "./mathlib/derivations/simplifications/AssociativePropertyOfProductsAndSums.ts");
const CombineIntegerFactors_1 = __webpack_require__(/*! ./mathlib/derivations/simplifications/CombineIntegerFactors */ "./mathlib/derivations/simplifications/CombineIntegerFactors.ts");
const ProductRule_1 = __webpack_require__(/*! ./mathlib/derivations/simplifications/ProductRule */ "./mathlib/derivations/simplifications/ProductRule.ts");
const MultiplyExponentPowers_1 = __webpack_require__(/*! ./mathlib/derivations/simplifications/MultiplyExponentPowers */ "./mathlib/derivations/simplifications/MultiplyExponentPowers.ts");
const QuotientRule_1 = __webpack_require__(/*! ./mathlib/derivations/simplifications/QuotientRule */ "./mathlib/derivations/simplifications/QuotientRule.ts");
const Fraction_1 = __webpack_require__(/*! ./mathlib/expressions/Fraction */ "./mathlib/expressions/Fraction.ts");
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new CombineCommonTermsAddition_1.CombineCommonTermsAddition());
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new CombineCommonFactorsMultiplication_1.CombineCommonFactorsMultiplication());
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new EvaluateSums_1.EvaluateSums());
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new OrderSums_1.OrderSums());
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new ReduceReducibles_1.ReduceReducibles());
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new SumCoefficientsOfAddedTerms_1.SumCoefficientsOfAddedTerms());
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new USubstitution_1.USubstitution());
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new PowerRule_1.PowerRule());
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new PullConstantsFromDerivatives_1.PullConstantsFromDerivatives());
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new ExponentialIdentity_1.ExponentialIdentity());
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new AssociativePropertyOfProductsAndSums_1.AssociativePropertyOfProductsAndSums());
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new CombineIntegerFactors_1.CombineIntegerFactors());
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new ProductRule_1.ProductRule());
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new MultiplyExponentPowers_1.MultiplyExponentPowers());
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new QuotientRule_1.QuotientRule());
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
        //if (unchecked.length > 0) this.simplifyNoContext()
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
        //console.log(this.constructor.name + " on " + exp.toString())
        const result = this.applyImpl(exp);
        result.forEach(e => {
            (0, assert_1.assert)(e != null && e != undefined);
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
            const powerTerms = [];
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
        console.log("Trying expression " + exp.toString() + " \n checking values " + [...uniqueFactors]);
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
            console.log("Checking " + factor + ", which is in " + relaventTerms + " \nbut not " + otherTerms);
            // Pull it out of those terms
            const coefficients = [];
            if (relaventTerms.length < 2)
                continue;
            for (const term of relaventTerms) {
                if (term.isNegation) {
                    coefficients.push((0, ConvenientExpressions_1.negative)(term.negation.without(factor)));
                }
                else {
                    coefficients.push(term.without(factor));
                }
            }
            const pulled = (0, ConvenientExpressions_1.sumOrNot)((0, ConvenientExpressions_1.orderedProduct)(Sum_1.Sum.of(coefficients), factor), ...otherTerms);
            console.log("-> " + pulled + "\nFrom " + coefficients + "\n" + factor.toString() + "\n" + otherTerms);
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
        const out = new Set();
        const integerTerms = [...sum.terms].filter(t => t instanceof Integer_1.Integer);
        if (integerTerms.length == 0) {
            return out;
        }
        const newInt = integerTerms.map(e => e).reduce((a, b) => Integer_1.Integer.of(a.value + b.value));
        const otherTerms = [...sum.terms].filter(t => !(t instanceof Integer_1.Integer));
        let result;
        if (otherTerms.length == 0) {
            result = new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(sum), {
                n: sum,
                r: Relationship_1.Relationship.Equal,
                n1: newInt
            }, "Evaluated Addition");
        }
        else {
            result = new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(sum), {
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
        return !exp.isHealthy && exp.class === Sum_1.SumType;
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

/***/ "./mathlib/derivations/simplifications/ReduceReducibles.ts":
/*!*****************************************************************!*\
  !*** ./mathlib/derivations/simplifications/ReduceReducibles.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReduceReducibles = void 0;
const Argument_1 = __webpack_require__(/*! ../../Argument */ "./mathlib/Argument.ts");
const Relationship_1 = __webpack_require__(/*! ../../Relationship */ "./mathlib/Relationship.ts");
const ThingsThatShouldBeInTheStdLib_1 = __webpack_require__(/*! ../../util/ThingsThatShouldBeInTheStdLib */ "./mathlib/util/ThingsThatShouldBeInTheStdLib.ts");
const NoContextExpressionSimplificationRule_1 = __webpack_require__(/*! ../NoContextExpressionSimplificationRule */ "./mathlib/derivations/NoContextExpressionSimplificationRule.ts");
class ReduceReducibles extends NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule {
    appliesImpl(exp) {
        return exp.isReducible;
    }
    applyImpl(exp) {
        return new Set([new Argument_1.Argument((0, ThingsThatShouldBeInTheStdLib_1.setOf)(exp), {
                n: exp,
                r: Relationship_1.Relationship.Equal,
                n1: exp.reduced
            }, "Reduced")]);
    }
}
exports.ReduceReducibles = ReduceReducibles;


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
        this.isReducible = (base.isReducibleOrInt) && (power.isReducibleOrInt) && Math.pow(base.reduced.value, power.reduced.value) % 1 == 0;
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
        return this;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUJBQW1CLG1CQUFPLENBQUMseUNBQVk7QUFDdkMsaUJBQWlCLG1CQUFPLENBQUMsK0NBQWU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsK0JBQStCO0FBQ3pELGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LHdFQUFzQjtBQUMzRCwyQkFBMkIsbUJBQU8sQ0FBQyxvRUFBb0I7QUFDdkQsMkJBQTJCLG1CQUFPLENBQUMsb0VBQW9CO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7Ozs7Ozs7Ozs7O0FDcENOO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELFdBQVcsR0FBRyxjQUFjLEdBQUcsYUFBYTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOzs7Ozs7Ozs7OztBQ2xDRTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7Ozs7OztVQ1pkO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsNEJBQTRCLG1CQUFPLENBQUMsbURBQXFCO0FBQ3pELG1DQUFtQyxtQkFBTyxDQUFDLGlFQUE0QjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vRXhwcmVzc2lvblRlc3RQYWdlTG9hZGVyLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9QcmltYXJ5UGFnZUxvYWRlci50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vVG91Y2hHZXN0dXJlUmVjb2duaXplci50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9Bcmd1bWVudC50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9Db252ZW5pZW50RXhwcmVzc2lvbnMudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvR3JhcGgudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvR3JhcGhNaW5pcHVsYXRvci50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9SZWxhdGlvbnNoaXAudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvRGVyaXZlci50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL1JlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZS50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9hbGdlYnJhL0RpdmlkZU9uQm90aFNpZGVzLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL2FsZ2VicmEvU3VidHJhY3RGcm9tQm90aFNpZGVzLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3JlY3Vyc2lvbi50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvQXNzb2NpYXRpdmVQcm9wZXJ0eU9mUHJvZHVjdHNBbmRTdW1zLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9Db21iaW5lQ29tbW9uRmFjdG9yc011bHRpcGxpY2F0aW9uLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9Db21iaW5lQ29tbW9uVGVybXNBZGRpdGlvbi50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvQ29tYmluZUludGVnZXJGYWN0b3JzLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9FdmFsdWF0ZVN1bXMudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL0V4cG9uZW50aWFsSWRlbnRpdHkudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL011bHRpcGx5RXhwb25lbnRQb3dlcnMudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL09yZGVyU3Vtcy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvUG93ZXJSdWxlLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9Qcm9kdWN0UnVsZS50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvUHVsbENvbnN0YW50c0Zyb21EZXJpdmF0aXZlcy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvUXVvdGllbnRSdWxlLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9SZWR1Y2VSZWR1Y2libGVzLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9TdW1Db2VmZmljaWVudHNPZkFkZGVkVGVybXMudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL1VTdWJzdGl0dXRpb24udHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvRGVyaXZhdGl2ZS50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9leHByZXNzaW9ucy9FeHBvbmVudC50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9leHByZXNzaW9ucy9FeHByZXNzaW9uLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2V4cHJlc3Npb25zL0ZyYWN0aW9uLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2V4cHJlc3Npb25zL0ludGVnZXIudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvSW50ZWdyYWwudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvTWF0aEVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvUHJvZHVjdC50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9leHByZXNzaW9ucy9TdW0udHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvVmFyaWFibGUudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdWllbGVtZW50cy9Bcmd1bWVudE5vZGVWaWV3LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3VpZWxlbWVudHMvRWRnZVZpZXcudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdWllbGVtZW50cy9FZGl0YWJsZU1hdGhWaWV3LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3VpZWxlbWVudHMvRXhwbGFuYXRpb25Qb3B1cC50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi91aWVsZW1lbnRzL0V4cHJlc3Npb25Ob2RlVmlldy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi91aWVsZW1lbnRzL0dyYXBoTm9kZVZpZXcudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdWllbGVtZW50cy9VSVByZWZlcmVuY2VzLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3VpZWxlbWVudHMvV2ViR3JhcGhWaWV3LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3VzZXJpbnB1dC9QYXJzZXIudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdXRpbC9NYXRoTUxIZWxwZXJzLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3V0aWwvVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWIudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdXRpbC9hc3NlcnQudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubG9hZEV4cHJlc3Npb25zVGVzdFBhZ2UgPSB2b2lkIDA7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgRGVyaXZhdGl2ZV8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9leHByZXNzaW9ucy9EZXJpdmF0aXZlXCIpO1xuY29uc3QgRXhwb25lbnRfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZXhwcmVzc2lvbnMvRXhwb25lbnRcIik7XG5jb25zdCBGcmFjdGlvbl8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9leHByZXNzaW9ucy9GcmFjdGlvblwiKTtcbmNvbnN0IEludGVncmFsXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2V4cHJlc3Npb25zL0ludGVncmFsXCIpO1xuY29uc3QgRWRpdGFibGVNYXRoVmlld18xID0gcmVxdWlyZShcIi4vbWF0aGxpYi91aWVsZW1lbnRzL0VkaXRhYmxlTWF0aFZpZXdcIik7XG4vKipcbiAqIENhbGxlZCBhZnRlciB0aGUgZG9tIGlzIGxvYWRlZC5cbiAqIFBvcHVsYXRlcyB0aGUgYm9keSBlbGVtZW50IG9mIHRoZSBkb2N1bWVudFxuICogd2l0aCB0aGUgdGVzdCBleHByZXNzaW9ucyBwYWdlXG4gKi9cbmZ1bmN0aW9uIGxvYWRFeHByZXNzaW9uc1Rlc3RQYWdlKCkge1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICAgIGZ1bmN0aW9uIHAoY29udGVudCkge1xuICAgICAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBlLmlubmVyVGV4dCA9IGNvbnRlbnQ7XG4gICAgICAgIHBhZ2UuYXBwZW5kKGUpO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdmlldyhleHApIHtcbiAgICAgICAgY29uc3QgZSA9IG5ldyBFZGl0YWJsZU1hdGhWaWV3XzEuRWRpdGFibGVNYXRoVmlldygpO1xuICAgICAgICBlLnZhbHVlID0gZXhwO1xuICAgICAgICBwYWdlLmFwcGVuZChlKTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIHAoXCJUaGUgc3VtIG9mIGEsIGEsIGFuZCBhXCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bSkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSkpO1xuICAgIHAoXCJJbnRlZ3JhbCBvZiBhIG92ZXIgYiB3aXRoIHJlc3BlY3QgdG8gY1wiKTtcbiAgICB2aWV3KEludGVncmFsXzEuSW50ZWdyYWwub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5iKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYykpO1xuICAgIHAoXCJJbnRlZ3JhbCBvZiAoYSBvdmVyIGEpIG92ZXIgYiB3aXRoIHJlc3BlY3QgdG8gY1wiKTtcbiAgICB2aWV3KEludGVncmFsXzEuSW50ZWdyYWwub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5iKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYykpO1xuICAgIHAoXCJJbnRlZ3JhbCBvZiAoKGEgb3ZlciBhKSBvdmVyIGEpIG92ZXIgYiB3aXRoIHJlc3BlY3QgdG8gY1wiKTtcbiAgICB2aWV3KEludGVncmFsXzEuSW50ZWdyYWwub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5iKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYykpO1xuICAgIHAoXCJJbnRlZ3JhbCBvZiAoKChhIG92ZXIgYSkgb3ZlciBhKSBvdmVyIGEpIG92ZXIgYiB3aXRoIHJlc3BlY3QgdG8gY1wiKTtcbiAgICB2aWV3KEludGVncmFsXzEuSW50ZWdyYWwub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5iKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYykpO1xuICAgIHAoXCJJbnRlZ3JhbCBvZiAoKCgoYSBvdmVyIGEpIG92ZXIgYSkgb3ZlciBhKSBvdmVyIGEpIG92ZXIgYiB3aXRoIHJlc3BlY3QgdG8gY1wiKTtcbiAgICB2aWV3KEludGVncmFsXzEuSW50ZWdyYWwub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5iKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYykpO1xuICAgIHAoXCJcIik7XG4gICAgdmlldygoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuaW50KShGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5uZWdhdGl2ZSkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYiksIEV4cG9uZW50XzEuRXhwb25lbnQub2YoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bSkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSksIEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSksICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDIpKSkpLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdCkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMiksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCkpO1xuICAgIHAoXCJQcm9kdWN0IG9mIHggYW5kIHlcIik7XG4gICAgdmlldygoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdCkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueSkpO1xuICAgIHAoXCJQcm9kdWN0IG9mICh4LTEpLCAtMSBhbmQgeVwiKTtcbiAgICB2aWV3KCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5wcm9kdWN0KSgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtKShDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54LCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubmVnYXRpdmUpKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDEpKSksICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKC0xKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueSkpO1xuICAgIHAoXCJOZWdhdGlvbiBvZiB4IChSZXBlZCBhcyB0aGUgcHJvcGR1Y3Qgb2YgLTEgYW5kIHgpXCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm5lZ2F0aXZlKShDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54KSk7XG4gICAgcChcIlN1bSBvZiB4IGFuZCAteFwiKTtcbiAgICB2aWV3KCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKENvbnZlbmllbnRFeHByZXNzaW9uc18xLngsICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5uZWdhdGl2ZSkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCkpKTtcbiAgICBwKFwiU3VtIG9mIC14IGFuZCB4XCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bSkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm5lZ2F0aXZlKShDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54KSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCkpO1xuICAgIHAoXCJEZXJpdmF0aXZlIG9mIHRoZSBzcXVhcmUgb2YgeCB3aXRoIHJlc3BlY3QgdG8geFwiKTtcbiAgICB2aWV3KERlcml2YXRpdmVfMS5EZXJpdmF0aXZlLm9mKEV4cG9uZW50XzEuRXhwb25lbnQub2YoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCwgKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMikpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54KSk7XG4gICAgcChcIkRlcml2YXRpdmUgKCh4XjIpIC0gMikgd2l0aCByZXNwZWN0IHRvIHhcIik7XG4gICAgdmlldyhEZXJpdmF0aXZlXzEuRGVyaXZhdGl2ZS5vZihFeHBvbmVudF8xLkV4cG9uZW50Lm9mKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKENvbnZlbmllbnRFeHByZXNzaW9uc18xLngsICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKC0yKSksICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDIpKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCkpO1xuICAgIHAoXCJcIik7XG4gICAgdmlldygoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgxKSk7XG4gICAgcChcIlwiKTtcbiAgICB2aWV3KCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDEpKTtcbiAgICBwKFwiXCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSkpO1xuICAgIHAoXCJcIik7XG4gICAgdmlldygoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgxKSk7XG59XG5leHBvcnRzLmxvYWRFeHByZXNzaW9uc1Rlc3RQYWdlID0gbG9hZEV4cHJlc3Npb25zVGVzdFBhZ2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubG9hZFByaW1hcnlQYWdlID0gdm9pZCAwO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IFBhcnNlcl8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi91c2VyaW5wdXQvUGFyc2VyXCIpO1xuY29uc3QgV2ViR3JhcGhWaWV3XzEgPSByZXF1aXJlKFwiLi9tYXRobGliL3VpZWxlbWVudHMvV2ViR3JhcGhWaWV3XCIpO1xuY29uc3QgR3JhcGhfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvR3JhcGhcIik7XG5jb25zdCBEZXJpdmVyXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL0Rlcml2ZXJcIik7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG5jb25zdCBDb21iaW5lQ29tbW9uVGVybXNBZGRpdGlvbl8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvQ29tYmluZUNvbW1vblRlcm1zQWRkaXRpb25cIik7XG5jb25zdCBDb21iaW5lQ29tbW9uRmFjdG9yc011bHRpcGxpY2F0aW9uXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9Db21iaW5lQ29tbW9uRmFjdG9yc011bHRpcGxpY2F0aW9uXCIpO1xuY29uc3QgRXZhbHVhdGVTdW1zXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9FdmFsdWF0ZVN1bXNcIik7XG5jb25zdCBPcmRlclN1bXNfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL09yZGVyU3Vtc1wiKTtcbmNvbnN0IFJlZHVjZVJlZHVjaWJsZXNfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL1JlZHVjZVJlZHVjaWJsZXNcIik7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2V4cHJlc3Npb25zL0V4cHJlc3Npb25cIik7XG5jb25zdCBSZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZGVyaXZhdGlvbnMvUmVsYXRpb25hbERlcml2YXRpb25SdWxlXCIpO1xuY29uc3QgU3VidHJhY3RGcm9tQm90aFNpZGVzXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL2FsZ2VicmEvU3VidHJhY3RGcm9tQm90aFNpZGVzXCIpO1xuY29uc3QgRGl2aWRlT25Cb3RoU2lkZXNfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZGVyaXZhdGlvbnMvYWxnZWJyYS9EaXZpZGVPbkJvdGhTaWRlc1wiKTtcbmNvbnN0IFZhcmlhYmxlXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2V4cHJlc3Npb25zL1ZhcmlhYmxlXCIpO1xuY29uc3QgU3VtQ29lZmZpY2llbnRzT2ZBZGRlZFRlcm1zXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9TdW1Db2VmZmljaWVudHNPZkFkZGVkVGVybXNcIik7XG5jb25zdCBVU3Vic3RpdHV0aW9uXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9VU3Vic3RpdHV0aW9uXCIpO1xuY29uc3QgUG93ZXJSdWxlXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9Qb3dlclJ1bGVcIik7XG5jb25zdCBQdWxsQ29uc3RhbnRzRnJvbURlcml2YXRpdmVzXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9QdWxsQ29uc3RhbnRzRnJvbURlcml2YXRpdmVzXCIpO1xuY29uc3QgRGVyaXZhdGl2ZV8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9leHByZXNzaW9ucy9EZXJpdmF0aXZlXCIpO1xuY29uc3QgRXhwb25lbnRfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZXhwcmVzc2lvbnMvRXhwb25lbnRcIik7XG5jb25zdCBFeHBvbmVudGlhbElkZW50aXR5XzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9FeHBvbmVudGlhbElkZW50aXR5XCIpO1xuY29uc3QgQXNzb2NpYXRpdmVQcm9wZXJ0eU9mUHJvZHVjdHNBbmRTdW1zXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9Bc3NvY2lhdGl2ZVByb3BlcnR5T2ZQcm9kdWN0c0FuZFN1bXNcIik7XG5jb25zdCBDb21iaW5lSW50ZWdlckZhY3RvcnNfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL0NvbWJpbmVJbnRlZ2VyRmFjdG9yc1wiKTtcbmNvbnN0IFByb2R1Y3RSdWxlXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9Qcm9kdWN0UnVsZVwiKTtcbmNvbnN0IE11bHRpcGx5RXhwb25lbnRQb3dlcnNfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL011bHRpcGx5RXhwb25lbnRQb3dlcnNcIik7XG5jb25zdCBRdW90aWVudFJ1bGVfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL1F1b3RpZW50UnVsZVwiKTtcbmNvbnN0IEZyYWN0aW9uXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2V4cHJlc3Npb25zL0ZyYWN0aW9uXCIpO1xuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUucnVsZXMuYWRkKG5ldyBDb21iaW5lQ29tbW9uVGVybXNBZGRpdGlvbl8xLkNvbWJpbmVDb21tb25UZXJtc0FkZGl0aW9uKCkpO1xuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUucnVsZXMuYWRkKG5ldyBDb21iaW5lQ29tbW9uRmFjdG9yc011bHRpcGxpY2F0aW9uXzEuQ29tYmluZUNvbW1vbkZhY3RvcnNNdWx0aXBsaWNhdGlvbigpKTtcbk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlLnJ1bGVzLmFkZChuZXcgRXZhbHVhdGVTdW1zXzEuRXZhbHVhdGVTdW1zKCkpO1xuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUucnVsZXMuYWRkKG5ldyBPcmRlclN1bXNfMS5PcmRlclN1bXMoKSk7XG5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZS5ydWxlcy5hZGQobmV3IFJlZHVjZVJlZHVjaWJsZXNfMS5SZWR1Y2VSZWR1Y2libGVzKCkpO1xuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUucnVsZXMuYWRkKG5ldyBTdW1Db2VmZmljaWVudHNPZkFkZGVkVGVybXNfMS5TdW1Db2VmZmljaWVudHNPZkFkZGVkVGVybXMoKSk7XG5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZS5ydWxlcy5hZGQobmV3IFVTdWJzdGl0dXRpb25fMS5VU3Vic3RpdHV0aW9uKCkpO1xuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUucnVsZXMuYWRkKG5ldyBQb3dlclJ1bGVfMS5Qb3dlclJ1bGUoKSk7XG5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZS5ydWxlcy5hZGQobmV3IFB1bGxDb25zdGFudHNGcm9tRGVyaXZhdGl2ZXNfMS5QdWxsQ29uc3RhbnRzRnJvbURlcml2YXRpdmVzKCkpO1xuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUucnVsZXMuYWRkKG5ldyBFeHBvbmVudGlhbElkZW50aXR5XzEuRXhwb25lbnRpYWxJZGVudGl0eSgpKTtcbk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlLnJ1bGVzLmFkZChuZXcgQXNzb2NpYXRpdmVQcm9wZXJ0eU9mUHJvZHVjdHNBbmRTdW1zXzEuQXNzb2NpYXRpdmVQcm9wZXJ0eU9mUHJvZHVjdHNBbmRTdW1zKCkpO1xuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUucnVsZXMuYWRkKG5ldyBDb21iaW5lSW50ZWdlckZhY3RvcnNfMS5Db21iaW5lSW50ZWdlckZhY3RvcnMoKSk7XG5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZS5ydWxlcy5hZGQobmV3IFByb2R1Y3RSdWxlXzEuUHJvZHVjdFJ1bGUoKSk7XG5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZS5ydWxlcy5hZGQobmV3IE11bHRpcGx5RXhwb25lbnRQb3dlcnNfMS5NdWx0aXBseUV4cG9uZW50UG93ZXJzKCkpO1xuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUucnVsZXMuYWRkKG5ldyBRdW90aWVudFJ1bGVfMS5RdW90aWVudFJ1bGUoKSk7XG5SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGVfMS5SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGUucnVsZXMuYWRkKG5ldyBTdWJ0cmFjdEZyb21Cb3RoU2lkZXNfMS5TdWJ0cmFjdEZyb21Cb3RoU2lkZXMoKSk7XG5SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGVfMS5SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGUucnVsZXMuYWRkKG5ldyBEaXZpZGVPbkJvdGhTaWRlc18xLkRpdmlkZU9uQm90aFNpZGVzKCkpO1xuLyoqXG4gKiBDYWxsZWQgYWZ0ZXIgRE9NIGlzIGxvYWRlZC5cbiAqIFN1YnN0aXR1dGVzIHRoZSBib2R5IGVsZW1lbnQgaW4gdGhlIGRvY3VtZW50XG4gKiB3aXRoIHRoZSBwcmltYXJ5IGludGVncmF0b3Igdmlldy5cbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIGxvYWRQcmltYXJ5UGFnZSgpIHtcbiAgICAvL2NvbnN0IHJvb3QgPSBEZXJpdmF0aXZlLm9mKHN1bShhLCBhLCBwcm9kdWN0KG51bSgyKSwgYikpLCBhKVxuICAgIC8vY29uc3Qgcm9vdCA9IERlcml2YXRpdmUub2YocHJvZHVjdChudW0oMyksIEV4cG9uZW50Lm9mKHgsIG51bSgyKSksIEV4cG9uZW50Lm9mKHgsIG51bSgzKSkpLCB4KVxuICAgIC8vY29uc3Qgcm9vdCA9IHByb2R1Y3QoRXhwb25lbnQub2YoeCwgbnVtKDMpKSwgRXhwb25lbnQub2YoeCwgbnVtKDQpKSwgeCwgeClcbiAgICBjb25zdCByb290ID0gRGVyaXZhdGl2ZV8xLkRlcml2YXRpdmUub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihFeHBvbmVudF8xLkV4cG9uZW50Lm9mKENvbnZlbmllbnRFeHByZXNzaW9uc18xLngsICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDIpKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLngpO1xuICAgIGNvbnN0IGdyYXBoID0gbmV3IEdyYXBoXzEuR3JhcGgoKS5hZGROb2RlKHJvb3QpO1xuICAgIGNvbnN0IGRlcml2ZXIgPSBuZXcgRGVyaXZlcl8xLkRlcml2ZXIoZ3JhcGgpO1xuICAgIGRlcml2ZXIuZXhwYW5kKCk7XG4gICAgLy9jb25zb2xlLmxvZyhcIlJlc3VsdDogXCIgKyBncmFwaClcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRcIik7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+IHtcbiAgICAgICAgKDAsIFBhcnNlcl8xLnBhcnNlKShpbnB1dC52YWx1ZSk7XG4gICAgfSk7XG4gICAgY29uc3Qgb3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXRib3hcIik7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICBzaG93QXJndW1lbnRzOiBmYWxzZSxcbiAgICAgICAgZHJhd0VkZ2VMaW5lczogdHJ1ZSxcbiAgICAgICAgZGVidWdDb3JuZXJFbmFibGVkOiB0cnVlLFxuICAgIH07XG4gICAgY29uc3QgZ3JhcGhWaWV3ID0gbmV3IFdlYkdyYXBoVmlld18xLldlYkdyYXBoVmlldyhncmFwaCwgbmV3IFNldChbcm9vdF0pLCBjb25maWcpO1xuICAgIGdyYXBoVmlldy5zZXROb2RlQ29sb3JpbmdTY2hlbWUobiA9PiB7XG4gICAgICAgIGlmIChuIGluc3RhbmNlb2YgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24pIHtcbiAgICAgICAgICAgIGlmICghZGVyaXZlci5pc1NpbXBsaWZpZWQobikpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibGlnaHRncmF5XCI7XG4gICAgICAgICAgICBlbHNlIGlmICghbi5pc0hlYWx0aHkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibGlnaHRyZWRcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKG4gaW5zdGFuY2VvZiBWYXJpYWJsZV8xLlZhcmlhYmxlKVxuICAgICAgICAgICAgICAgIHJldHVybiBcIm9yYW5nZVwiO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBcImxpZ2h0Ymx1ZVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcImJsYWNrXCI7XG4gICAgfSk7XG4gICAgZ3JhcGhWaWV3LnNldEF0dHJpYnV0ZShcImlkXCIsIFwid2ViLWdyYXBodmlld1wiKTtcbiAgICBvdXQuYXBwZW5kQ2hpbGQoZ3JhcGhWaWV3KTtcbn1cbmV4cG9ydHMubG9hZFByaW1hcnlQYWdlID0gbG9hZFByaW1hcnlQYWdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRvdWNoR2VzdHVyZVJlY29nbml6ZXIgPSB2b2lkIDA7XG4vKipcbiAqIEludGVycHJldCBjb21wbGljYXRlZCB0b3VjaCBnZXN0dXJlIGRhdGEuXG4gKi9cbmNsYXNzIFRvdWNoR2VzdHVyZVJlY29nbml6ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1vdmVMaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy5waW5jaExpc3RlbmVycyA9IFtdO1xuICAgIH1cbiAgICBhZGRNb3ZlTGlzdGVuZXIoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5tb3ZlTGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIGEgcGluY2ggZ2VzdHVyZSBoYXMgYmVlbiBkZXRlY3RlZC5cbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgVGFrZXMgYSBjZW50ZXIgY29vcmRpbmF0ZSB0aGF0J3MgdGhlIGF2ZXJhZ2Ugb2YgdGhlIGZpbmdlciBwb3NpdGlvbnMsXG4gICAgICogICAgICAgICAgICAgIHRoZSBjaGFuZ2UgaW4gc2NhbGUgc2luY2UgdGhlIGxhc3QgY2FsbCBvbiAoMCwgaW5maW5pdHkpIHdoZXJlIDEgaXMgbm8gY2hhbmdlLFxuICAgICAqICAgICAgICAgICAgICBhbmQgdGhlIG51bWJlciBvZiBmaW5nZXJzIGluIHRoZSBnZXN0dXJlIChhbiBpbnRlZ2VyKS5cbiAgICAgKi9cbiAgICBhZGRQaW5jaExpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMucGluY2hMaXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNob3VsZCB0YWtlIGFsbCB0b3VjaCBldmVudHMgZnJvbSB0aGUgdmlldyB1c2luZyBpdC5cbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBwcm9jZXNzVG91Y2hEb3duKGV2ZW50KSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNob3VsZCB0YWtlIGFsbCB0b3VjaCBldmVudHMgZnJvbSB0aGUgdmlldyB1c2luZyBpdC5cbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBwcm9jZXNzVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGZvciAoY29uc3QgY2hhbmdlZCBvZiBldmVudC5jaGFuZ2VkVG91Y2hlcykge1xuICAgICAgICAgICAgY2hhbmdlZC5jbGllbnRYO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNob3VsZCB0YWtlIGFsbCB0b3VjaCBldmVudHMgZnJvbSB0aGUgdmlldyB1c2luZyBpdC5cbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBwcm9jZXNzVG91Y2hFbmQoZXZlbnQpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2hvdWxkIHRha2UgYWxsIHRvdWNoIGV2ZW50cyBmcm9tIHRoZSB2aWV3IHVzaW5nIGl0LlxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHByb2Nlc3NUb3VjaENhbmNlbChldmVudCkge1xuICAgIH1cbiAgICAvL3ByaXZhdGUgbGFzdFg6IE1hcDxUb3VjaFxuICAgIG1vdmVMaXN0ZW5lcnM7XG4gICAgcGluY2hMaXN0ZW5lcnM7XG59XG5leHBvcnRzLlRvdWNoR2VzdHVyZVJlY29nbml6ZXIgPSBUb3VjaEdlc3R1cmVSZWNvZ25pemVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFyZ3VtZW50ID0gdm9pZCAwO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi91dGlsL2Fzc2VydFwiKTtcbi8qKlxuICogQ29ubmVjdHMgb25lIG9yIG1vcmUgbm9kZXMgKGdyb3VuZHMpIHRvIG9uZSBvciBtb3JlIG5vZGVzIChjbGFpbXMpLlxuICogQ29udGFpbnMgYW4gZXhwbGFuYXRpb24vYXJndW1lbnQgZm9yIHRoZSBjb25uZWN0aW9uLlxuICovXG5jbGFzcyBBcmd1bWVudCB7XG4gICAgY29uc3RydWN0b3IoZ3JvdW5kcywgY2xhaW0sIGFyZ3VtZW50KSB7XG4gICAgICAgIHRoaXMuZ3JvdW5kcyA9IGdyb3VuZHM7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5ncm91bmRzKTtcbiAgICAgICAgdGhpcy5jbGFpbSA9IGNsYWltO1xuICAgICAgICB0aGlzLmFyZ3VtZW50ID0gYXJndW1lbnQ7XG4gICAgICAgIHRoaXMucmVwT2soKTtcbiAgICB9XG4gICAgZXhwcmVzc2lvbkVkZ2UgPSB0cnVlO1xuICAgIGdldCByZWxhdGlvbnNoaXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsYWltLnI7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCJBcmd1bWVudCBcIiArIHRoaXMuY2xhaW0ucjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHdvIG91dCBtYXRoIGdyYXBoIG5vZGVzIHRoYXQgYXJlIHJlbGF0ZWQgYnkgdGhpcyBBcnVnbWVudC5cbiAgICAgKi9cbiAgICBjbGFpbTtcbiAgICAvKipcbiAgICAgKiBUaGUgZXhwbGFuYXRpb24gdGhhdCBjb25uZWN0cyB0aGUgYXJndW1lbnQncyBncm91bmRzIHRvXG4gICAgICogaXQncyBjbGFpbWVkIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIHRoZSB0d28gb3V0IG5vZGVzLlxuICAgICAqXG4gICAgICovXG4gICAgYXJndW1lbnQ7XG4gICAgLyoqXG4gICAgICogTm9kZXMgdGhhdCBoYXZlIGFuIGVkZ2UgcG9pbnRpbmcgdG8gdGhpcyBhcmd1bWVudC5cbiAgICAgKi9cbiAgICBncm91bmRzO1xuICAgIHJlcE9rKCkge1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLmdyb3VuZHMgIT0gbnVsbCk7XG4gICAgICAgIGZvciAoY29uc3QgZ3JvdW5kIG9mIHRoaXMuZ3JvdW5kcykge1xuICAgICAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkoZ3JvdW5kICE9IG51bGwgJiYgZ3JvdW5kICE9IHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5jbGFpbS5uICE9IG51bGwgJiYgdGhpcy5jbGFpbS5uICE9IHVuZGVmaW5lZCk7XG4gICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMuY2xhaW0ubjEgIT0gbnVsbCAmJiB0aGlzLmNsYWltLm4xICE9IHVuZGVmaW5lZCk7XG4gICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMuY2xhaW0uciAhPSB1bmRlZmluZWQgJiYgdGhpcy5jbGFpbS5yICE9IG51bGwpO1xuICAgIH1cbn1cbmV4cG9ydHMuQXJndW1lbnQgPSBBcmd1bWVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy55ID0gZXhwb3J0cy54ID0gZXhwb3J0cy5mID0gZXhwb3J0cy5lID0gZXhwb3J0cy5kID0gZXhwb3J0cy5jID0gZXhwb3J0cy5iID0gZXhwb3J0cy5hID0gZXhwb3J0cy5wcm9kdWN0QW5kTm90VGltZXNPbmUgPSBleHBvcnRzLnByb2R1Y3RPck5vdCA9IGV4cG9ydHMuZXF1aXZhbGVuY2VBcmd1bWVudCA9IGV4cG9ydHMuaW50ID0gZXhwb3J0cy52ID0gZXhwb3J0cy5udW0gPSBleHBvcnRzLm5lZ2F0aXZlID0gZXhwb3J0cy5wcm9kdWN0ID0gZXhwb3J0cy5yZW1vdmVOZXcgPSBleHBvcnRzLnJlbW92ZSA9IGV4cG9ydHMub3JkZXJlZFByb2R1Y3QgPSBleHBvcnRzLnN1bU9yTm90ID0gZXhwb3J0cy5zdW1JbnR1aXRpdmUgPSBleHBvcnRzLnN1bUV2YWxJbnRlZ2VyVGVybXMgPSBleHBvcnRzLm9yZGVyZWRTdW0gPSBleHBvcnRzLnN1bSA9IGV4cG9ydHMuZnJhY3Rpb24gPSB2b2lkIDA7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi9leHByZXNzaW9ucy9JbnRlZ2VyXCIpO1xuY29uc3QgRnJhY3Rpb25fMSA9IHJlcXVpcmUoXCIuL2V4cHJlc3Npb25zL0ZyYWN0aW9uXCIpO1xuY29uc3QgSW50ZWdyYWxfMSA9IHJlcXVpcmUoXCIuL2V4cHJlc3Npb25zL0ludGVncmFsXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4vZXhwcmVzc2lvbnMvUHJvZHVjdFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4vZXhwcmVzc2lvbnMvU3VtXCIpO1xuY29uc3QgVmFyaWFibGVfMSA9IHJlcXVpcmUoXCIuL2V4cHJlc3Npb25zL1ZhcmlhYmxlXCIpO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuL0FyZ3VtZW50XCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0XCIpO1xuZnVuY3Rpb24gZnJhY3Rpb24obnVtLCBkZW4pIHtcbiAgICByZXR1cm4gRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihudW0sIGRlbik7XG59XG5leHBvcnRzLmZyYWN0aW9uID0gZnJhY3Rpb247XG4vKipcbiAqIEEgY29udmVuaWVuY2UgbWV0aG9kIGZvciBTdW0ub2YoKVxuICovXG5mdW5jdGlvbiBzdW0oLi4udGVybXMpIHtcbiAgICByZXR1cm4gU3VtXzEuU3VtLm9mKHRlcm1zKTtcbn1cbmV4cG9ydHMuc3VtID0gc3VtO1xuLyoqXG4gKiBHZXRzIHRoZSBjb3JyZWN0bHkgb3JkZXJlZCBzdW0gb2YgdGhlIGdpdmVuIHN1bS5cbiAqIDEgKyBhID0gYSArIDFcbiAqIEZvbGxvd3MgdGhlIHNwZWMgZ2l2ZW4gaW4gdGhlIFN1bS50cyBmaWxlLlxuICogQHBhcmFtIHN1bVxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gb3JkZXJlZFN1bShzdW0pIHtcbiAgICBjb25zdCBvcmRlcmVkID0gKDAsIFN1bV8xLm9yZGVyVGVybXMpKC4uLnN1bS50ZXJtcyk7XG4gICAgcmV0dXJuIFN1bV8xLlN1bS5vZihvcmRlcmVkKTtcbn1cbmV4cG9ydHMub3JkZXJlZFN1bSA9IG9yZGVyZWRTdW07XG4vKipcbiAqIFJldHVybnMgdGhlIHN1bSBvZiB0aGUgZ2l2ZW4gdGVybXMsIGV2YWx1YXRpbmcgYW55IGludGVnZXIgdGVybXMuXG4gKiBQdXRzIGZpbmFsIGNvbnN0YW50IGludGVnZXIgYXMgdGhlIGxhc3QgdGVybS5cbiAqIElmIHRoZSByZXN1bHQgaXMgYSBzdW0sIGl0IHdpbGwgbm90IGhhdmUgdGhlIGludGVnZXIgMCBhcyBhIHRlcm0uXG4gKiBJZiBhbGwgZ2l2ZW4gdGVybXMgc3VtIHRvIHplcm8sIHRoZSBpbnRlZ2VyIHplcm8gd2lsbCBiZSByZXR1cm5lZC5cbiAqIEBwYXJhbSB0ZXJtc1xuICovXG5mdW5jdGlvbiBzdW1FdmFsSW50ZWdlclRlcm1zKC4uLnRlcm1zKSB7XG4gICAgY29uc3QgaW50ZWdlcnMgPSB0ZXJtcy5maWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpLmxlbmd0aDtcbiAgICBpZiAoaW50ZWdlcnMgPCAyKVxuICAgICAgICByZXR1cm4gc3VtKC4uLnRlcm1zKTtcbiAgICBjb25zdCBub25JbnRUZXJtcyA9IHRlcm1zLmZpbHRlcihlID0+ICEoZSBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKSk7XG4gICAgY29uc3QgaW50VGVybSA9IHRlcm1zLmZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcilcbiAgICAgICAgLm1hcChlID0+IGUpXG4gICAgICAgIC5yZWR1Y2UoKGEsIGIpID0+IG51bShhLnZhbHVlICsgYi52YWx1ZSkpO1xuICAgIGlmIChpbnRUZXJtLnZhbHVlID09IDApIHtcbiAgICAgICAgaWYgKG5vbkludFRlcm1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBzdW0oLi4ubm9uSW50VGVybXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5vbkludFRlcm1zLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9uSW50VGVybXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaW50VGVybTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKG5vbkludFRlcm1zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gaW50VGVybTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzdW0oLi4ubm9uSW50VGVybXMsIGludFRlcm0pO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5zdW1FdmFsSW50ZWdlclRlcm1zID0gc3VtRXZhbEludGVnZXJUZXJtcztcbi8qKlxuICogUmV0dXJucyB0aGUgc3VtIG9mIHRoZSBnaXZlbiB0ZXJtcy4gRXZhbHVhdGVzIGFueVxuICogaW50ZWdlciB0ZXJtcy4gQWRkaXRpb25hbGx5IGNhbmNlbHMgb3V0IGFueSBwb3NpdGl2ZVxuICogbmVnYXRpdmUgdGVybXMuXG4gKlxuICogU2ltcGxpZmllc1xuICogIHggKyBhIC0gYSA9IHhcbiAqIHggKyBhYiAtIGFiID0geFxuICogeCArIDJhYiAtIDJhYiA9IHhcbiAqIGEgLSBhID0gMFxuICpcbiAqIERvZXNuJ3QgYWZmZWN0XG4gKiAgeCArIDJhIC0gYVxuICogQHBhcmFtIHRlcm1zXG4gKi9cbmZ1bmN0aW9uIHN1bUludHVpdGl2ZSguLi50ZXJtcykge1xuICAgIGNvbnN0IGludEV2YWwgPSBzdW1FdmFsSW50ZWdlclRlcm1zKC4uLnRlcm1zKTtcbiAgICBpZiAoaW50RXZhbC5jbGFzcyAhPSBTdW1fMS5TdW1UeXBlKVxuICAgICAgICByZXR1cm4gaW50RXZhbDtcbiAgICB0ZXJtcyA9IFsuLi5pbnRFdmFsLnRlcm1zXTtcbiAgICAvLyBGaW5kIG9wcG9zaXRlIHBhaXJzXG4gICAgLy8gVGhleSB3aWxsIHRha2UgdGhlIGZvcm1cbiAgICAvLyAgICAgIGV4cCArIC0xICogZXhwXG4gICAgLy8gSSBhc3N1bWUgaGVyZSB0aGF0IHRoZSBvbmx5IHdheSB0byBub3RhdGVcbiAgICAvLyBuZWdhdGl2aXR5IGlzIGJ5IG11bHRpcGx5aW5nIGJ5IC0xXG4gICAgdGVybXM6IGZvciAoY29uc3QgdCBvZiB0ZXJtcykge1xuICAgICAgICBjb25zdCBvdGhlclRlcm1zID0gWy4uLnRlcm1zXTtcbiAgICAgICAgcmVtb3ZlKG90aGVyVGVybXMsIHQpO1xuICAgICAgICBmb3IgKGNvbnN0IG90aGVyIG9mIG90aGVyVGVybXMpIHtcbiAgICAgICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG90aGVyLmlzTmVnYXRpb24gJiYgb3RoZXIubmVnYXRpb24gPT09IHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlKHRlcm1zLCBvdGhlcik7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZSh0ZXJtcywgdCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIHRlcm1zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodGVybXMubGVuZ3RoID09IDApXG4gICAgICAgIHJldHVybiBJbnRlZ2VyXzEuSW50ZWdlci5vZigwKTtcbiAgICBlbHNlIGlmICh0ZXJtcy5sZW5ndGggPT0gMSlcbiAgICAgICAgcmV0dXJuIHRlcm1zWzBdO1xuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIHN1bSguLi50ZXJtcyk7XG59XG5leHBvcnRzLnN1bUludHVpdGl2ZSA9IHN1bUludHVpdGl2ZTtcbmZ1bmN0aW9uIHN1bU9yTm90KC4uLnRlcm1zKSB7XG4gICAgaWYgKHRlcm1zLmxlbmd0aCA9PSAxKVxuICAgICAgICByZXR1cm4gdGVybXNbMF07XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gc3VtKC4uLnRlcm1zKTtcbn1cbmV4cG9ydHMuc3VtT3JOb3QgPSBzdW1Pck5vdDtcbi8qKlxuICogUHJvZHVjZXMgYSBwcm9kdWN0IGZyb20gdGhlIGdpdmVuIGZhY3RvcnNcbiAqIHdoZXJlIHRoZSBmYWN0b3JzIGFyZSBvcmRlcmVkIGFjY29yZGluZyB0byBjb252ZW50aW9uLlxuICogQHBhcmFtIGZhY3RvcnMgQXQgbGVhc3QgMlxuICovXG5mdW5jdGlvbiBvcmRlcmVkUHJvZHVjdCguLi5mYWN0b3JzKSB7XG4gICAgZmFjdG9ycy5zb3J0KFByb2R1Y3RfMS5mYWN0b3JPcmRlcik7XG4gICAgcmV0dXJuIHByb2R1Y3QoLi4uZmFjdG9ycyk7XG59XG5leHBvcnRzLm9yZGVyZWRQcm9kdWN0ID0gb3JkZXJlZFByb2R1Y3Q7XG4vKipcbiAqIFJlbW92ZXMgdGhlIGZpcnN0IGluc3RhbmNlIG9mIHRoZSBnaXZlblxuICogZWxlbWVudCBmcm9tIHRoZSBhcnJheS4gUmVhbGx5IHNob3VsZCBiZVxuICogcGFydCBvZiB0aGUgc3RkIGxpYnJhcnkuIElkZW50aWZpZXMgb2JqZWN0XG4gKiB3aXRoIHJlZmVyZW5jaWFsIGVxdWFsaXR5LlxuICogQHBhcmFtIGFycmF5XG4gKiBAcGFyYW0gZWxlbWVudFxuICovXG5mdW5jdGlvbiByZW1vdmUoYXJyYXksIGVsZW1lbnQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhcnJheVtpXSA9PT0gZWxlbWVudCkge1xuICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5yZW1vdmUgPSByZW1vdmU7XG4vKipcbiAqIEdldHMgYSBuZXcgYXJyYXkgd2l0aG91dCB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgdGhlIGdpdmVuXG4gKiBlbGVtZW50LiBSZWFsbHkgc2hvdWxkIGJlXG4gKiBwYXJ0IG9mIHRoZSBzdGQgbGlicmFyeS4gSWRlbnRpZmllcyBvYmplY3RcbiAqIHdpdGggcmVmZXJlbmNpYWwgZXF1YWxpdHkuXG4gKiBAcGFyYW0gYXJyYXlcbiAqIEBwYXJhbSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZU5ldyhhcnJheSwgZWxlbWVudCkge1xuICAgIGNvbnN0IGlucHV0ID0gWy4uLmFycmF5XTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpbnB1dFtpXSA9PT0gZWxlbWVudCkge1xuICAgICAgICAgICAgaW5wdXQuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIkdpdmVuIGFycmF5IGRvZXNuJ3QgY29udGFpbiBlbGVtZW50IFwiICsgZWxlbWVudCk7XG59XG5leHBvcnRzLnJlbW92ZU5ldyA9IHJlbW92ZU5ldztcbmZ1bmN0aW9uIHByb2R1Y3QoLi4uZmFjdG9ycykge1xuICAgIGZhY3RvcnMuZm9yRWFjaChmID0+ICgwLCBhc3NlcnRfMS5hc3NlcnQpKGYgIT0gbnVsbCAmJiBmICE9IHVuZGVmaW5lZCwgXCJNYWtpbmcgcHJvZHVjdCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkIGZhY3RvclwiKSk7XG4gICAgcmV0dXJuIFByb2R1Y3RfMS5Qcm9kdWN0Lm9mKGZhY3RvcnMpO1xufVxuZXhwb3J0cy5wcm9kdWN0ID0gcHJvZHVjdDtcbmZ1bmN0aW9uIG5lZ2F0aXZlKGV4cHJlc3Npb24pIHtcbiAgICBpZiAoZXhwcmVzc2lvbiBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKVxuICAgICAgICByZXR1cm4gSW50ZWdlcl8xLkludGVnZXIub2YoLWV4cHJlc3Npb24udmFsdWUpO1xuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIFByb2R1Y3RfMS5Qcm9kdWN0Lm9mKFtJbnRlZ2VyXzEuSW50ZWdlci5vZigtMSksIGV4cHJlc3Npb25dKTtcbn1cbmV4cG9ydHMubmVnYXRpdmUgPSBuZWdhdGl2ZTtcbmZ1bmN0aW9uIG51bSh2YWwpIHtcbiAgICByZXR1cm4gSW50ZWdlcl8xLkludGVnZXIub2YodmFsKTtcbn1cbmV4cG9ydHMubnVtID0gbnVtO1xuZnVuY3Rpb24gdihzeW1ib2wpIHtcbiAgICByZXR1cm4gVmFyaWFibGVfMS5WYXJpYWJsZS5vZihzeW1ib2wpO1xufVxuZXhwb3J0cy52ID0gdjtcbmZ1bmN0aW9uIGludChpbnRlZ3JhbmQsIHJlc3BlY3RUbykge1xuICAgIHJldHVybiBJbnRlZ3JhbF8xLkludGVncmFsLm9mKGludGVncmFuZCwgcmVzcGVjdFRvKTtcbn1cbmV4cG9ydHMuaW50ID0gaW50O1xuZnVuY3Rpb24gZXF1aXZhbGVuY2VBcmd1bWVudChmaXJzdCwgc2Vjb25kLCBleHBsYW5hdGlvbikge1xuICAgIHJldHVybiBuZXcgQXJndW1lbnRfMS5Bcmd1bWVudChzZXRPZihmaXJzdCksIHtcbiAgICAgICAgbjogZmlyc3QsXG4gICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgbjE6IHNlY29uZCxcbiAgICB9LCBleHBsYW5hdGlvbik7XG59XG5leHBvcnRzLmVxdWl2YWxlbmNlQXJndW1lbnQgPSBlcXVpdmFsZW5jZUFyZ3VtZW50O1xuLyoqXG4gKlxuICogQHJldHVybnMgVGhlIHByb2R1Y3Qgb2YgdGhlIGdpdmVuIGZhY3RvcnMsIG9yIHRoZSBvbmx5IGZhY3RvciBnaXZlblxuICogaWYgb25seSBvbmUgZ2l2ZW4uIFRocm93cyBpZiBubyBleHByZXNzaW9ucyBhcmUgZ2l2ZW4uXG4gKi9cbmZ1bmN0aW9uIHByb2R1Y3RPck5vdCguLi5leHByZXNzaW9ucykge1xuICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKGV4cHJlc3Npb25zLmxlbmd0aCA+IDApO1xuICAgIGlmIChleHByZXNzaW9ucy5sZW5ndGggPT0gMSlcbiAgICAgICAgcmV0dXJuIGV4cHJlc3Npb25zWzBdO1xuICAgIHJldHVybiBwcm9kdWN0KC4uLmV4cHJlc3Npb25zKTtcbn1cbmV4cG9ydHMucHJvZHVjdE9yTm90ID0gcHJvZHVjdE9yTm90O1xuLyoqXG4gKiBAcmV0dXJucyBUaGUgcHJvZHVjdCBvZiB0aGUgZ2l2ZW4gdGVybXMgZXhsY3VkaW5nIHRoZSBmaXJzdCBpZlxuICogICAgICAgICAgaXQncyBvbmUuIElmIHRoZSByZXN1bHRpbmcgdGVybXMgbGlzdCBpcyBvbmx5IG9uZSB0ZXJtLFxuICogICAgICAgICAgcmV0dXJucyB0aGUgb25seSB0ZXJtLlxuICovXG5mdW5jdGlvbiBwcm9kdWN0QW5kTm90VGltZXNPbmUoLi4uZXhwcmVzc2lvbnMpIHtcbiAgICBpZiAoZXhwcmVzc2lvbnNbMF0gaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlciAmJiBleHByZXNzaW9uc1swXS52YWx1ZSA9PSAxKSB7XG4gICAgICAgIGV4cHJlc3Npb25zLnNoaWZ0KCk7XG4gICAgICAgIHJldHVybiBwcm9kdWN0T3JOb3QoLi4uZXhwcmVzc2lvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvZHVjdE9yTm90KC4uLmV4cHJlc3Npb25zKTtcbn1cbmV4cG9ydHMucHJvZHVjdEFuZE5vdFRpbWVzT25lID0gcHJvZHVjdEFuZE5vdFRpbWVzT25lO1xuZnVuY3Rpb24gc2V0T2YoLi4uZXhwcmVzc2lvbnMpIHtcbiAgICBjb25zdCBvdXQgPSBuZXcgU2V0KCk7XG4gICAgZXhwcmVzc2lvbnMuZm9yRWFjaChlID0+IG91dC5hZGQoZSkpO1xuICAgIHJldHVybiBvdXQ7XG59XG5leHBvcnRzLmEgPSB2KCdhJyk7XG5leHBvcnRzLmIgPSB2KCdiJyk7XG5leHBvcnRzLmMgPSB2KCdjJyk7XG5leHBvcnRzLmQgPSB2KCdkJyk7XG5leHBvcnRzLmUgPSB2KCdlJyk7XG5leHBvcnRzLmYgPSB2KCdmJyk7XG5leHBvcnRzLnggPSB2KCd4Jyk7XG5leHBvcnRzLnkgPSB2KCd5Jyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2l2ZW5FZGdlID0gZXhwb3J0cy5Bcmd1bWVudEVkZ2UgPSBleHBvcnRzLkdyYXBoID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuL0FyZ3VtZW50XCIpO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi91dGlsL2Fzc2VydFwiKTtcbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgZ3JhcGggb2YgZXhwcmVzc2lvbnMgYW5kIHN0YXRlbWVudHNcbiAqIGluY2x1ZGluZyBldmVyeXRoaW5nIHdlIGtub3cgYWJvdXQgYSBwcm9ibGVtLlxuICogQ29ubmVjdHMgR3JhcGhOb2RlcyB2aWEgSW5mZXJlbmNlcyBmb3IgZWRnZXMuXG4gKlxuICogSXQncyBhIGRpZ3JhcGguXG4gKi9cbmNsYXNzIEdyYXBoIHtcbiAgICAvKipcbiAgICAgKiBBZGRzIGFuIGV4cHJlc3Npb24gdG8gdGhlIHByb2JsZW0uXG4gICAgICogQHBhcmFtIG5vZGVcbiAgICAgKiBAcmV0dXJucyB0aGUgc2FtZSBncmFwaCBmb3IgY2hhaW5pbmcuXG4gICAgICovXG4gICAgYWRkTm9kZShub2RlKSB7XG4gICAgICAgIHRoaXMubm9kZXMuYWRkKG5vZGUpO1xuICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEFyZ3VtZW50XzEuQXJndW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQXJndW1lbnQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXBPaygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkIGEgcmVsYXRpb25zaGlwIGJldHdlZW4gdHdvIGVsZW1lbnRzIGdpdmVuIGJ5IHRoZSB1c2VyIHRvIHRoZSBncmFwaC5cbiAgICAgKiBTaG91bGQgbm90IGJlIGNhbGxlZCB0byBhZGQgZGVyaXZlZCB0cnV0aHMgYmMgdGhpcyB3b24ndCBzdG9yZSBhbiBleHBsYW5hdGlvbi5cbiAgICAgKiBBZGRzIGdpdmVuIG5vZGVzIGlmIHRoZXkgYXJlbid0IGFscmVhZHkgb24gdGhlIGdyYXBoLlxuICAgICAqIEBwYXJhbSBuXG4gICAgICogQHBhcmFtIG4xXG4gICAgICogQHBhcmFtIHJcbiAgICAgKiBAcmV0dXJucyBzZWxmIGZvciBjaGFpbmluZ1xuICAgICAqL1xuICAgIGFkZFJlbGF0aW9uc2hpcChuLCBuMSwgcikge1xuICAgICAgICB0aGlzLmFkZE5vZGUobik7XG4gICAgICAgIHRoaXMuYWRkTm9kZShuMSk7XG4gICAgICAgIC8vIERlZmluZWQgYm90aCB3YXlzIGJlY2F1c2UgdGhlIHVzZXIgaXMgZ2l2aW5nIGl0XG4gICAgICAgIHRoaXMuYWRkRWRnZShuLCBuMSwgbmV3IEdpdmVuRWRnZShyKSk7XG4gICAgICAgIHRoaXMuYWRkRWRnZShuMSwgbiwgbmV3IEdpdmVuRWRnZShyKSk7XG4gICAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbihuLCBuMSk7XG4gICAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbihuMSwgbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgbm9kZSByZXByZXNlbnRpbmcgYW4gYWN1bXVsYXRpb24gb2YgZmFjdHNcbiAgICAgKiB0aGF0IGxlYWRzIHRvIGEgY29uY2x1c2lvbi5cbiAgICAgKiBAcGFyYW0gYVxuICAgICAqIEByZXR1cm5zIHRoZSBzYW1lIGdyYXBoIGZvciBjaGFpbmluZy5cbiAgICAgKi9cbiAgICBhZGRBcmd1bWVudChhKSB7XG4gICAgICAgIHRoaXMubm9kZXMuYWRkKGEpO1xuICAgICAgICAvLyBBZGQgdGhlIGdyb3VuZHNcbiAgICAgICAgZm9yIChjb25zdCBncm91bmQgb2YgYS5ncm91bmRzKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVzLmFkZChncm91bmQpO1xuICAgICAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKGdyb3VuZCwgYSk7XG4gICAgICAgICAgICB0aGlzLmFkZEVkZ2UoZ3JvdW5kLCBhLCBBcmd1bWVudEVkZ2UuVG8pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCB0aGUgY2xhaW1cbiAgICAgICAgY29uc3QgY2xhaW0gPSBhLmNsYWltO1xuICAgICAgICB0aGlzLmFkZE5vZGUoY2xhaW0ubik7XG4gICAgICAgIHRoaXMuYWRkTm9kZShjbGFpbS5uMSk7XG4gICAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbihhLCBjbGFpbS5uKTtcbiAgICAgICAgdGhpcy5hZGRFZGdlKGEsIGNsYWltLm4sIEFyZ3VtZW50RWRnZS5Gcm9tKTtcbiAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKGEsIGNsYWltLm4xKTtcbiAgICAgICAgdGhpcy5hZGRFZGdlKGEsIGNsYWltLm4xLCBBcmd1bWVudEVkZ2UuRnJvbSk7XG4gICAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbihjbGFpbS5uLCBjbGFpbS5uMSk7XG4gICAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbihjbGFpbS5uMSwgY2xhaW0ubik7XG4gICAgICAgIHRoaXMuYWRkRWRnZShjbGFpbS5uLCBjbGFpbS5uMSwgYSk7XG4gICAgICAgIHRoaXMuYWRkRWRnZShjbGFpbS5uMSwgY2xhaW0ubiwgYSk7XG4gICAgICAgIHRoaXMucmVwT2soKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHRoZSBzYW1lIGdyYXBoIGZvciBjaGFpbmluZy5cbiAgICAgKi9cbiAgICBhZGRBcmd1bWVudHMoLi4uYSkge1xuICAgICAgICBhLmZvckVhY2goYXJnID0+IHRoaXMuYWRkQXJndW1lbnQoYXJnKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG5laWdoYm9ycyBvZiBhIG5vZGUuXG4gICAgICogQHBhcmFtIG5vZGVcbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIE5vZGVzIHRoYXQgYXJlIGFkamFjZW50IHRvIHRoaXMgbm9kZSwgZnJvbSB0aGlzIG5vZGUsIG9yIGVpdGhlci5cbiAgICAgKiBAcmV0dXJucyBVbmRlZmluZWQgaWYgdGhlIG5vZGUgaXNuJ3QgaW4gdGhpcyBncmFwaC4gT3RoZXJ3aXNlLCBhIHNldCBvZiBjb25uZWN0ZWQgbm9kZXMuXG4gICAgICogICAgICAgICAgSWYgdGhlIG5vZGUgaXMgaW4gdGhlIGdyYXBoIGJ1dCBpc24ndCBjb25uZWN0ZWQgdG8gYW55dGhpbmcsIHJldHVybnMgZW1wdHkgc2V0LlxuICAgICAqL1xuICAgIGdldE5laWdoYm9ycyhub2RlLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKCF0aGlzLm5vZGVzLmhhcyhub2RlKSlcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJvdXRcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTZXQodGhpcy5jb25uZWN0aW9ucy5nZXQobm9kZSkpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhZGphY2VudFRvID0gbmV3IFNldCgpO1xuICAgICAgICBmb3IgKGNvbnN0IG4gb2YgdGhpcy5ub2Rlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbnMuZ2V0KG4pPy5oYXMobm9kZSkpXG4gICAgICAgICAgICAgICAgYWRqYWNlbnRUby5hZGQobik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcImluXCIpXG4gICAgICAgICAgICByZXR1cm4gYWRqYWNlbnRUbztcbiAgICAgICAgZm9yIChjb25zdCBuIG9mIHRoaXMuY29ubmVjdGlvbnMuZ2V0KG5vZGUpID8/IFtdKVxuICAgICAgICAgICAgYWRqYWNlbnRUby5hZGQobik7XG4gICAgICAgIHJldHVybiBhZGphY2VudFRvO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHRoZSBudW1iZXIgb2YgZWRnZXMgdGhpcyBub2RlIGhhcy5cbiAgICAgKiBAcGFyYW0gbm9kZSBUaGUgbm9kZSBiZWluZyBjb25zZGVyZWQuXG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiBDb3VudCBvbmx5IHRoZSBlZGdlcyBnb2luZyB0b3dhcmRzIHRoaXMgbm9kZSwgYXdheSBmcm9tXG4gICAgICogICAgICAgICAgaXQsIG9yIGJvdGguXG4gICAgICogQHJldHVybnMgPj0gMCwgdW5kZWZpbmVkIGlmIHRoZSBnaXZlbiBub2RlIGlzbid0IGluIHRoZSBncmFwaC5cbiAgICAgKi9cbiAgICBnZXREZWdyZWUobm9kZSwgZGlyZWN0aW9uKSB7XG4gICAgICAgIGlmICghdGhpcy5ub2Rlcy5oYXMobm9kZSkpXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwib3V0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb25zLmdldChub2RlKT8uc2l6ZSA/PyAwO1xuICAgICAgICB9XG4gICAgICAgIGxldCBkZWdJbiA9IDA7XG4gICAgICAgIHRoaXMubm9kZXMuZm9yRWFjaChuID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25zLmdldChuKSA9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbnMuZ2V0KG4pLmhhcyhub2RlKSlcbiAgICAgICAgICAgICAgICBkZWdJbisrO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcImluXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWdJbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVnSW4gKyAodGhpcy5jb25uZWN0aW9ucy5nZXQobm9kZSk/LnNpemUgPz8gMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBuIE5vZGUgaW4gdGhlIGdyYXBoLlxuICAgICAqIEBwYXJhbSBuMSBJbiB0aGUgZ3JhcGguXG4gICAgICogQHJldHVybnMgVW5kZWZpbmVkIGlmIGVpdGhlciBub2RlIGlzbid0IGluIHRoZSBncmFwaCBvciB0aGV5J3JlIG5vdFxuICAgICAqIGNvbm5lY3RlZC5cbiAgICAgKi9cbiAgICBnZXRFZGdlKG4sIG4xKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVkZ2VzLmdldChuKT8uZ2V0KG4xKTtcbiAgICB9XG4gICAgY29udGFpbnMobm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2Rlcy5oYXMobm9kZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIEEgbmV3IHNldCBjb250YWluaW5nIGFsbCB0aGUgbm9kZXMgaW4gdGhlIGdyYXBoXG4gICAgICovXG4gICAgZ2V0Tm9kZXMoKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2V0KHRoaXMubm9kZXMpO1xuICAgIH1cbiAgICBnZXRFZGdlcygpIHtcbiAgICAgICAgY29uc3Qgb3V0ID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLmVkZ2VzLmZvckVhY2goKG1hcCwgZmlyc3QpID0+IHtcbiAgICAgICAgICAgIG1hcC5mb3JFYWNoKChlZGdlLCBzZWNvbmQpID0+IHtcbiAgICAgICAgICAgICAgICBvdXQuYWRkKHsgbjogZmlyc3QsIG4xOiBzZWNvbmQsIGU6IGVkZ2UgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIG51bU5vZGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2Rlcy5zaXplO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGFsbCBncmFwaCBub2RlcyBhbmQgZWRnZXMgdG8gdGhpcyBvbmUuXG4gICAgICogQHBhcmFtIGdyYXBoXG4gICAgICogQHJldHVybnMgdGhlIHNhbWUgZ3JhcGggZm9yIGNoYWluaW5nLlxuICAgICAqL1xuICAgIGFkZEdyYXBoKGdyYXBoKSB7XG4gICAgICAgIGdyYXBoLm5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vZGVzLmFkZChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGdyYXBoLmVkZ2VzLmZvckVhY2goKG1hcCwgbm9kZTEpID0+IHtcbiAgICAgICAgICAgIG1hcC5mb3JFYWNoKChlZGdlLCBub2RlMikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlZGdlIGluc3RhbmNlb2YgQXJndW1lbnRfMS5Bcmd1bWVudClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRBcmd1bWVudChlZGdlKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlZGdlID09IFwic3VwcG9ydHNcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVkZ2Uobm9kZTEsIG5vZGUyLCBBcmd1bWVudEVkZ2UuVG8pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbm5lY3Rpb24obm9kZTEsIG5vZGUyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZWRnZSA9PSBcImNsYWltc1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRWRnZShub2RlMSwgbm9kZTIsIEFyZ3VtZW50RWRnZS5Gcm9tKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKG5vZGUxLCBub2RlMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBFZGdlIFR5cGVcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVwT2soKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBsZXQgb3V0ID0gXCJHcmFwaChWID0ge1wiO1xuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgdGhpcy5ub2Rlcykge1xuICAgICAgICAgICAgb3V0ICs9IG5vZGUudG9TdHJpbmcoKSArIFwiLFwiO1xuICAgICAgICB9XG4gICAgICAgIG91dCA9IG91dC5zdWJzdHJpbmcoMCwgb3V0Lmxlbmd0aCAtIDEpICsgXCJ9LCBFID0ge1wiO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLmZvckVhY2goKHNldCwgc3JjKSA9PiB7XG4gICAgICAgICAgICBzZXQuZm9yRWFjaChkZXN0ID0+IHtcbiAgICAgICAgICAgICAgICBvdXQgKz0gc3JjLnRvU3RyaW5nKCkgKyBcIiAtPiBcIiArIGRlc3QudG9TdHJpbmcoKSArIFwiLCBcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgb3V0ICs9IFwifSBFZGdlIENvdW50OiBcIiArIHRoaXMuY29ubmVjdGlvbnMuc2l6ZTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgYWRkQ29ubmVjdGlvbihuLCBuMSkge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9ucy5nZXQobikgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9ucy5zZXQobiwgbmV3IFNldCgpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLmdldChuKS5hZGQobjEpO1xuICAgIH1cbiAgICBhZGRFZGdlKG4sIG4xLCBlKSB7XG4gICAgICAgIGlmICh0aGlzLmVkZ2VzLmdldChuKSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZWRnZXMuc2V0KG4sIG5ldyBNYXAoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lZGdlcy5nZXQobikuc2V0KG4xLCBlKTtcbiAgICB9XG4gICAgcmVwT2soKSB7XG4gICAgICAgIHRoaXMubm9kZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT0gdW5kZWZpbmVkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEFsbCBjb25uZWN0aW9ucy9lZGdlcyBoYXZlIG5vZGVzXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5ub2Rlcy5oYXMoa2V5KSk7XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKG4gPT4ge1xuICAgICAgICAgICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMubm9kZXMuaGFzKG4pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lZGdlcy5mb3JFYWNoKChtYXAsIGZpcnN0KSA9PiB7XG4gICAgICAgICAgICBtYXAuZm9yRWFjaCgoZWRnZSwgc2Vjb25kKSA9PiB7XG4gICAgICAgICAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5ub2Rlcy5oYXMoZmlyc3QpKTtcbiAgICAgICAgICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLm5vZGVzLmhhcyhzZWNvbmQpKTtcbiAgICAgICAgICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLmNvbm5lY3Rpb25zLmdldChmaXJzdCkuaGFzKHNlY29uZCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBub2RlcyA9IG5ldyBTZXQoKTtcbiAgICAvLyBRdWlja2x5IGFjY2VzcyBhbGwgY29ubmVjdGlvbnMgb2YgYSBub2RlXG4gICAgY29ubmVjdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgLy8gRGV0ZXJtaW5lIHRoZSB0eXBlIG9mIGNvbm5lY3Rpb24gYmV0d2VlbiB0d28gbm9kZXNcbiAgICBlZGdlcyA9IG5ldyBNYXAoKTtcbn1cbmV4cG9ydHMuR3JhcGggPSBHcmFwaDtcbnZhciBBcmd1bWVudEVkZ2U7XG4oZnVuY3Rpb24gKEFyZ3VtZW50RWRnZSkge1xuICAgIEFyZ3VtZW50RWRnZVtcIlRvXCJdID0gXCJzdXBwb3J0c1wiO1xuICAgIEFyZ3VtZW50RWRnZVtcIkZyb21cIl0gPSBcImNsYWltc1wiO1xufSkoQXJndW1lbnRFZGdlID0gZXhwb3J0cy5Bcmd1bWVudEVkZ2UgfHwgKGV4cG9ydHMuQXJndW1lbnRFZGdlID0ge30pKTtcbi8qKlxuICogQ29tbXVuaWNhdGVzIGEgcmVsYXRpb25oaXAgZ2l2ZW4gYnkgdGhlIHVzZXIuXG4gKi9cbmNsYXNzIEdpdmVuRWRnZSB7XG4gICAgY29uc3RydWN0b3Iocikge1xuICAgICAgICB0aGlzLnIgPSByO1xuICAgIH1cbiAgICByO1xufVxuZXhwb3J0cy5HaXZlbkVkZ2UgPSBHaXZlbkVkZ2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR3JhcGhNaW5pcHVsYXRvciA9IHZvaWQgMDtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4vdXRpbC9hc3NlcnRcIik7XG4vKipcbiAqIFRvb2wgdG8gZG8gb3BlcmF0aW9ucyBvbiBncmFwaHMuXG4gKi9cbmNsYXNzIEdyYXBoTWluaXB1bGF0b3Ige1xuICAgIC8qKlxuICAgICAqIEZpbmQgbm9kZXMgb2YgY29tcG9uZW50cyBvZiBhIGdyYXBoIHdoZXJlIG9ubHkgZWRnZXMgZm9yIHdoaWNoXG4gICAgICogdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHJldHVybnMgdHJ1ZSBhcmUgY29uc2lkZXJlZC5cbiAgICAgKiBAcGFyYW1cbiAgICAgKiBAcGFyYW0gaXNDb25uZWN0ZWRcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q29tcG9uZW50Tm9kZXMoaW5wdXQsIGlzQ29ubmVjdGVkKSB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVkTm9kZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBpbnB1dC5nZXROb2RlcygpKSB7XG4gICAgICAgICAgICBpZiAoaW5jbHVkZWROb2Rlcy5oYXMobm9kZSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEFsbENvbm5lY3RlZChuKSB7XG4gICAgICAgICAgICAgICAgaW5jbHVkZWROb2Rlcy5hZGQobik7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5oYXMobikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wb25lbnQuYWRkKG4pO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbmVpZ2hib3Igb2YgaW5wdXQuZ2V0TmVpZ2hib3JzKG4sIFwiYm90aFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzQ29ubmVjdGVkKGlucHV0LmdldEVkZ2UobiwgbmVpZ2hib3IpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBnZXRBbGxDb25uZWN0ZWQobmVpZ2hib3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnZXRBbGxDb25uZWN0ZWQobm9kZSk7XG4gICAgICAgICAgICBjb21wb25lbnQuYWRkKG5vZGUpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5hZGQoY29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KShpbmNsdWRlZE5vZGVzLnNpemUgPT0gaW5wdXQubnVtTm9kZXMoKSk7XG4gICAgICAgIC8vIEFzc2VydCBjb21wb25lbnRzIGFyZSBwYWlyd2lzZSBkaXNqb2ludCBvZiBwcm9ibGVtcyBzaG93IHVwXG4gICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIGV2ZXJ5IGVkZ2UgaW4gdGhlIGdyYXBoLlxuICAgICAqIEBwYXJhbSBpbnB1dFxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgc3RhdGljIGdldFJlbGF0aW9ucyhpbnB1dCkge1xuICAgICAgICBjb25zdCBvdXQgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIGlucHV0LmdldE5vZGVzKCkpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgb3RoZXIgb2YgaW5wdXQuZ2V0TmVpZ2hib3JzKG5vZGUsIFwib3V0XCIpKSB7XG4gICAgICAgICAgICAgICAgb3V0LnB1c2goeyBmaXJzdDogbm9kZSwgc2Vjb25kOiBvdGhlciwgZTogaW5wdXQuZ2V0RWRnZShub2RlLCBvdGhlcikgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBncmFwaCBpbnRvIHNldHMgb2ZcbiAgICAgKiBub2RlcyBncm91cGVkIGJ5IGRlcHRoIGZyb20gYSBjZW50ZXIgbm9kZS5cbiAgICAgKiBBc3N1bWVzIHRoZSBncmFwaCBpcyBjb25uZWN0ZWQuXG4gICAgICogQHBhcmFtIHJvb3ROb2RlcyBDb250YWlucyBhdCBsZWFzdCBvbmUgbm9kZSBpbiB0aGUgZ3JhcGguXG4gICAgICogQHBhcmFtIGNvdW50IEZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyBpZiBhbnkgZ2l2ZW4gbm9kZSBzaG91bGQgYmVcbiAgICAgKiBpbmNsdWRlZCBpbiB0aGUgZGVwdGggY291bnQuIERlZmF1bHRzIHRvIGNvdW50aW5nIGFsbCBub2Rlcy4gTm9kZXMgdGhhdFxuICAgICAqIGFyZW4ndCBpbmNsdWRlZCB3b24ndCBiZSBpbiB0aGUgcmV0dXJuZWQgdmFsdWUuXG4gICAgICogQHJldHVybnMgTWFwIGZyb20gZGVwdGggaW4gZ3JhcGggdG8gYSBzZXQgb2Ygbm9kZXMgYXQgdGhhdCBkZXB0aC5cbiAgICAgKlxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRMZXZlbHMoaW5wdXQsIHJvb3ROb2RlcywgY291bnQgPSAoKSA9PiB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHJvb3RzID0gbmV3IFNldChyb290Tm9kZXMpO1xuICAgICAgICBjb25zdCBkZXB0aHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWN1cnNpdmVseSBtYXBzIG91dCBhbGwgbm9kZXMgaW4gdGhlIGdyYXBoLFxuICAgICAgICAgKiBwdXR0aW4gdGhlbSBpbiB0aGUgZGVwdGhzIG1hcC5cbiAgICAgICAgICogQHBhcmFtIG5vZGVcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIG1hcE5vZGUobm9kZSwgZGVwdGggPSAwKSB7XG4gICAgICAgICAgICBpZiAocm9vdHMuaGFzKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgZGVwdGggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRlcHRoIDwgKGRlcHRocy5nZXQobm9kZSkgPz8gTnVtYmVyLk1BWF9WQUxVRSkpIHtcbiAgICAgICAgICAgICAgICBkZXB0aHMuc2V0KG5vZGUsIGRlcHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5laWdoYm9ycyA9IFsuLi5pbnB1dC5nZXROZWlnaGJvcnMobm9kZSwgXCJib3RoXCIpXTtcbiAgICAgICAgICAgIG5laWdoYm9ycy5maWx0ZXIodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgZm91bmQgYSBzaG9ydGVyIHBhdGggdG8gaXQgb3IgdGhlcmUgd2FzIG5vIGZvdW5kIHBhdGggdG8gaXRcbiAgICAgICAgICAgICAgICByZXR1cm4gKGRlcHRocy5nZXQodmFsdWUpID09IHVuZGVmaW5lZCB8fCBkZXB0aHMuZ2V0KHZhbHVlKSA+IGRlcHRoKSAmJiB2YWx1ZSAhPT0gbm9kZTtcbiAgICAgICAgICAgIH0pLmZvckVhY2gobiA9PiB7XG4gICAgICAgICAgICAgICAgbWFwTm9kZShuLCBjb3VudChub2RlKSA/IGRlcHRoICsgMSA6IGRlcHRoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIG1hcE5vZGUoWy4uLnJvb3RzXVswXSk7XG4gICAgICAgIGNvbnN0IG91dCA9IG5ldyBNYXAoKTtcbiAgICAgICAgZGVwdGhzLmZvckVhY2goKGRlcHRoLCBub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNvdW50KG5vZGUpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlmIChvdXQuZ2V0KGRlcHRoKSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBvdXQuc2V0KGRlcHRoLCBuZXcgU2V0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0LmdldChkZXB0aCkuYWRkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgZ2l2ZW4gZ3JhcGggaXMgY29ubmVjdGVkLCBtZWFuaW5nIHRoYXRcbiAgICAgKiBpdCdzIHBvc3NpYmxlIHRvIHRyYXZlcnNlIGJldHdlZW4gYW55IHR3byBub2RlcyBvbiB0aGUgZ3JhcGguXG4gICAgICovXG4gICAgc3RhdGljIGlzQ29ubmVjdGVkKGlucHV0KSB7XG4gICAgICAgIC8vIENoZWNrIGV2ZXJ5IG5vZGUgaGFzIGEgZGVncmVlIG9mIDEgb3IgbW9yZSBvciBncmFwaCBvbmx5IGhhcyAxIG9yIDAgZWxlbWVudHNcbiAgICAgICAgcmV0dXJuIFsuLi5pbnB1dC5nZXROb2RlcygpXS5tYXAobm9kZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQuZ2V0RGVncmVlKG5vZGUsIFwiYm90aFwiKSA+IDA7XG4gICAgICAgIH0pLnJlZHVjZSgoYSwgYikgPT4gYSAmJiBiKSB8fCBpbnB1dC5udW1Ob2RlcygpIDwgMjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRmlsdGVycyBlZGdlcyBsaXN0IHJldHVybmluZyBhIGxpc3Qgd2hlcmUgb25seSBvbmUgZWRnZVxuICAgICAqIGZyb20gYW55IGVkZ2UgbG9vcHMgaXMgaW5jbHVkZWQuXG4gICAgICogRm9yIGV4YW1wbGUgaWYgdGhlIGlucHV0IGVkZ2VzIGFyZSBhIC0+IGIgYW5kIGIgLT4gYSxcbiAgICAgKiB0aGUgcmVzdWx0IHdpbGwgb25seSBjb250YWluIGEgLT4gYi5cbiAgICAgKiBAcGFyYW0gZWRnZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgZHJvcFN5bW1ldHJpYyhlZGdlcykge1xuICAgICAgICBjb25zdCBvdXQgPSBbXTtcbiAgICAgICAgZnVuY3Rpb24gYWxyZWFkeUhhcyhlZGdlKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGUgb2Ygb3V0KVxuICAgICAgICAgICAgICAgIGlmIChlZGdlLm4gPT0gZS5uMSAmJiBlZGdlLm4xID09IGUubilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBlZGdlIG9mIGVkZ2VzKSB7XG4gICAgICAgICAgICBpZiAoIWFscmVhZHlIYXMoZWRnZSkpXG4gICAgICAgICAgICAgICAgb3V0LnB1c2goZWRnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG59XG5leHBvcnRzLkdyYXBoTWluaXB1bGF0b3IgPSBHcmFwaE1pbmlwdWxhdG9yO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlbGF0aW9uc2hpcCA9IHZvaWQgMDtcbi8qKlxuICogQSB3YXkgaW4gd2hpY2ggMiBleHByZXNzaW9ucyBjYW4gYmUgcmVsYXRlZC5cbiAqL1xudmFyIFJlbGF0aW9uc2hpcDtcbihmdW5jdGlvbiAoUmVsYXRpb25zaGlwKSB7XG4gICAgUmVsYXRpb25zaGlwW1wiRXF1YWxcIl0gPSBcIj1cIjtcbn0pKFJlbGF0aW9uc2hpcCA9IGV4cG9ydHMuUmVsYXRpb25zaGlwIHx8IChleHBvcnRzLlJlbGF0aW9uc2hpcCA9IHt9KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRGVyaXZlciA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vQXJndW1lbnRcIik7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi4vZXhwcmVzc2lvbnMvRXhwcmVzc2lvblwiKTtcbmNvbnN0IEdyYXBoXzEgPSByZXF1aXJlKFwiLi4vR3JhcGhcIik7XG5jb25zdCBHcmFwaE1pbmlwdWxhdG9yXzEgPSByZXF1aXJlKFwiLi4vR3JhcGhNaW5pcHVsYXRvclwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG5jb25zdCByZWN1cnNpb25fMSA9IHJlcXVpcmUoXCIuL3JlY3Vyc2lvblwiKTtcbmNvbnN0IFJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4vUmVsYXRpb25hbERlcml2YXRpb25SdWxlXCIpO1xuLyoqXG4gKiBIb2xkcyBhIHNpbmdsZSBncmFwaCBhbmQgZXhwYW5kcyBpdCB1c2luZyBydWxlcy5cbiAqL1xuY2xhc3MgRGVyaXZlciB7XG4gICAgLyoqXG4gICAgICogR2l2ZSBpdCB0aGUgZ3JhcGggeW91J3JlIGdvaW5nIHRvIGV4cGFuZC5cbiAgICAgKiBAcGFyYW0gZ3JhcGhcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihncmFwaCkge1xuICAgICAgICB0aGlzLmdyYXBoID0gZ3JhcGg7XG4gICAgICAgIHRoaXMuc2ltcGxpZmllZEluSXNvbGF0aW9uID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLm5vdFNpbXBsaWZpYWJsZSA9IG5ldyBTZXQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXhwYW5kcyB0aGUgZ3JhcGggYXJiaXRyYXJpbHkuXG4gICAgICogVGhpcyBmdW5jdGlvbiBpcyBzdGlsbCBwb29ybHkgZGVmaW5lZCxcbiAgICAgKiB2ZXJ5IGV4cGVyZW1lbnRhbC5cbiAgICAgKi9cbiAgICBleHBhbmQoKSB7XG4gICAgICAgIC8vIFNpbXBsaWZ5IGFsbCB0aGUgZXhwcmVzc2lvbnMgdXNpbmcgdGhlIGNvbnRleHRsZXNzIHNpbXBsaWZ5aW5nIHJ1bGVzXG4gICAgICAgIC8vIERvIHRoaXMgdW50aWwgdGhlcmUncyBub3RoaW5nIG1vcmUgdG8gc2ltcGxpZnlcbiAgICAgICAgdGhpcy5zaW1wbGlmeU5vQ29udGV4dCgpO1xuICAgICAgICB0aGlzLnNpbXBsaWZ5Tm9Db250ZXh0KCk7XG4gICAgICAgIHRoaXMuc2ltcGxpZnlOb0NvbnRleHQoKTtcbiAgICAgICAgdGhpcy5zaW1wbGlmeU5vQ29udGV4dCgpO1xuICAgICAgICB0aGlzLnNpbXBsaWZ5Tm9Db250ZXh0KCk7XG4gICAgICAgIHRoaXMuc2ltcGxpZnlOb0NvbnRleHQoKTtcbiAgICAgICAgdGhpcy5zaW1wbGlmeU5vQ29udGV4dCgpO1xuICAgICAgICB0aGlzLnNpbXBsaWZ5Tm9Db250ZXh0KCk7XG4gICAgICAgIHRoaXMuc2ltcGxpZnlOb0NvbnRleHQoKTtcbiAgICAgICAgdGhpcy5zaW1wbGlmeU5vQ29udGV4dCgpO1xuICAgICAgICAvL3RoaXMuYWxnZWJyYWljRXhwYW5zaW9uKClcbiAgICAgICAgLy90aGlzLmFsZ2VicmFpY0V4cGFuc2lvbigpXG4gICAgICAgIC8vdGhpcy5zaW1wbGlmeU5vQ29udGV4dCgpXG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IG1ha2VzIHN1cmUgdGhhdCBldmVyeSBub2RlIGluIHRoZSBncmFwaFxuICAgICAqIGlzIGVpdGhlciBzaW1wbGlmaWVkIChtZWFuaW5nIHRoZXJlIGlzIG5vIGNvbnRleHRsZXNzXG4gICAgICogcnVsZSB0aGF0IGNhbiBzaW1wbGlmeSBpdCBmdXJ0aGVyKSBvciBpcyBtYXJrZWQgZG93blxuICAgICAqIGFzIHVuc2ltcGxpZmlhYmxlLlxuICAgICAqL1xuICAgIHNpbXBsaWZ5Tm9Db250ZXh0KCkge1xuICAgICAgICBjb25zdCBydWxlcyA9IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlLnJ1bGVzO1xuICAgICAgICBjb25zdCB1bmNoZWNrZWQgPSBbLi4udGhpcy5ncmFwaC5nZXROb2RlcygpXS5maWx0ZXIobiA9PiBuIGluc3RhbmNlb2YgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24pXG4gICAgICAgICAgICAubWFwKG4gPT4gbilcbiAgICAgICAgICAgIC5maWx0ZXIoZSA9PiAhdGhpcy5zaW1wbGlmaWVkSW5Jc29sYXRpb24uaGFzKGUpKTtcbiAgICAgICAgdW5jaGVja2VkLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaW1wbGlmaWNhdGlvbnMgPSAoMCwgcmVjdXJzaW9uXzEuZXF1aXYpKGUsIGNvbnRleHRsZXNzU2ltcGxpZmljYXRpb25zRm4pO1xuICAgICAgICAgICAgdGhpcy5zaW1wbGlmaWVkSW5Jc29sYXRpb24uYWRkKGUpO1xuICAgICAgICAgICAgaWYgKHNpbXBsaWZpY2F0aW9ucy5sZW5ndGggPT0gMClcbiAgICAgICAgICAgICAgICB0aGlzLm5vdFNpbXBsaWZpYWJsZS5hZGQoZSk7XG4gICAgICAgICAgICBzaW1wbGlmaWNhdGlvbnMuZm9yRWFjaChhID0+IHRoaXMuZ3JhcGguYWRkQXJndW1lbnQoYSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy9pZiAodW5jaGVja2VkLmxlbmd0aCA+IDApIHRoaXMuc2ltcGxpZnlOb0NvbnRleHQoKVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBFeHBhbmRzIHRoZSBncmFwaCB1c2luZyBhbGdlYnJhIHJ1bGVzLlxuICAgICAqIE9ubHkgc2ltcGxpZmllZCBydWxlcyBhcmUgdXNlZC5cbiAgICAgKi9cbiAgICBhbGdlYnJhaWNFeHBhbnNpb24oKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVzID0gWy4uLlJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZV8xLlJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZS5ydWxlc107XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBbLi4uR3JhcGhNaW5pcHVsYXRvcl8xLkdyYXBoTWluaXB1bGF0b3IuZ2V0Q29tcG9uZW50Tm9kZXModGhpcy5ncmFwaCwgZWRnZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChlZGdlIGluc3RhbmNlb2YgQXJndW1lbnRfMS5Bcmd1bWVudCAmJiBlZGdlLnJlbGF0aW9uc2hpcCA9PSBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwpXG4gICAgICAgICAgICAgICAgICAgIHx8IChlZGdlIGluc3RhbmNlb2YgR3JhcGhfMS5HaXZlbkVkZ2UgJiYgZWRnZS5yID09IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCk7XG4gICAgICAgICAgICB9KV07XG4gICAgICAgIGNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXF1YXRpb24gPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uICYmIHRoaXMubm90U2ltcGxpZmlhYmxlLmhhcyhub2RlKSlcbiAgICAgICAgICAgICAgICAgICAgZXF1YXRpb24ucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJ1bGVzLmZvckVhY2gociA9PiB7XG4gICAgICAgICAgICAgICAgci5hcHBseShzZXRPZiguLi5lcXVhdGlvbikpLmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGguYWRkQXJndW1lbnQoYSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdyYXBoO1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gZXhwcmVzc2lvbiBpcyBpbiB0aGUgZ3JhcGhcbiAgICAgKiBhbmQgaGFzIGFscmVhZHkgaGFkIHRoZSBjb250ZXh0bGVzcyBzaW1wbGlmaWNhdGlvbiBvcGVyYXRpb25zXG4gICAgICogZG9uZSB0byBpdCBhbmQgY2Fubm90IGJlIGZ1cnRoZXIgc2ltcGxpZmllZC5cbiAgICAgKi9cbiAgICBpc1NpbXBsaWZpZWQoZXhwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdFNpbXBsaWZpYWJsZS5oYXMoZXhwKTtcbiAgICB9XG4gICAgLy8gQSBzZXQgb2Ygbm9kZXMgaW4gdGhlIGdyYXBoIHdoaWNoIGhhdmUgaGFkIGFsbCBzaW1wbGlmaWNhdGlvbiBcbiAgICAvLyBvcGVyYXRpb25zIGRvbmUgdG8gdGhlbS5cbiAgICBzaW1wbGlmaWVkSW5Jc29sYXRpb247XG4gICAgLy8gVGhlIHNldCBvZiBub2RlcyBpbiB0aGUgZ3JhcGggdGhhdCBoYXZlIGhhZCBjb250ZXh0bGVzc1xuICAgIC8vIHNpbXBsaWZpY2F0aW9uIG9wZXJhdGlvbnMgcnVuIG9uIHRoZW0gYW5kIGFyZW4ndCBmdXJ0aGVyXG4gICAgLy8gc2ltcGxpZmlhYmxlXG4gICAgbm90U2ltcGxpZmlhYmxlO1xufVxuZXhwb3J0cy5EZXJpdmVyID0gRGVyaXZlcjtcbi8qKlxuICogRmluZHMgZXF1aXZhbGVudHMgb2YgdGhlIGdpdmVuIGV4cHJlc3Npb25cbiAqIHVzaW5nIHJ1bGVzIG9mIGluZmVyZW5jZS4gTm90IHJlY3Vyc2l2ZS5cbiAqIEBwYXJhbSBleHBcbiAqL1xuY29uc3QgY29udGV4dGxlc3NTaW1wbGlmaWNhdGlvbnNGbiA9IGZ1bmN0aW9uIGRpcmVjdEVxdWl2YWxlbnRzKGV4cCkge1xuICAgIGNvbnN0IHJ1bGVzID0gWy4uLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlLnJ1bGVzXTtcbiAgICBjb25zdCBvdXQgPSBuZXcgU2V0KCk7XG4gICAgcnVsZXMuZmlsdGVyKHIgPT4gci5hcHBsaWVzKGV4cCkpLmZvckVhY2gocnVsZSA9PiB7XG4gICAgICAgIHJ1bGUuYXBwbHkoZXhwKS5mb3JFYWNoKGkgPT4ge1xuICAgICAgICAgICAgb3V0LmFkZChpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG91dDtcbn07XG5mdW5jdGlvbiBzZXRPZiguLi5hcnIpIHtcbiAgICBjb25zdCBvdXQgPSBuZXcgU2V0KCk7XG4gICAgYXJyLmZvckVhY2goZSA9PiBvdXQuYWRkKGUpKTtcbiAgICByZXR1cm4gb3V0O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUgPSB2b2lkIDA7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2Fzc2VydFwiKTtcbi8qKlxuICogQSBydWxlIHRoYXQgdGFrZXMgYW4gZXhwcmVzc2lvbiBhbmQgcHJvZHVjZXMgYW4gZXF1aXZhbGVudCBleHByZXNzaW9uLlxuICogRXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZXMgY2FuIHVzZSByZWZsZWN0aW9uIHRvIGRldGVybWluZSB3aGF0XG4gKiB0eXBlIG9mIGV4cHJlc3Npb24gdGhleSdyZSBnaXZlbiwgYnV0IHNob3VsZCB1c2UgZXhwcmVzc2lvbiBzcGVjaWZpY1xuICogZnVuY3Rpb25zIG9uIHN1Yi1leHByZXNzaW9ucy4gVGhlc2UgcnVsZXMgd2lsbCBiZSByZWN1cnNpdmVseSB1c2VkXG4gKiB0byBkZXJpdmUgc2ltcGxpZmllZCBleHByZXNzaW9ucy5cbiAqXG4gKiBUaGVzZSBydWxlcyBhcmUgYWxzbyBjb250ZXh0bGVzczogdGhleSdyZSBvbmx5IGdpdmVuIHRoZSBleHByZXNzaW9uLFxuICogbm8gb3RoZXIgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHByb2JsZW0uXG4gKi9cbmNsYXNzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIC8qKlxuICAgICAqIEFsbCBzdWJjbGFzc2VzIHNob3VsZCByZWdpc3RlciB0aGVtc2VsdmVzIGluIHRoaXMgbGlzdC5cbiAgICAgKi9cbiAgICBzdGF0aWMgcnVsZXMgPSBuZXcgU2V0KCk7XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoaXMgcnVsZSBjYW4gZmluZCBlcXVpdmFsZW50cyBmb3IgdGhlXG4gICAgICogZ2l2ZW4gZXhwcmVzc2lvbi4gT25seSBjYWxsIGFwcGx5KCkgaWYgdHJ1ZS5cbiAgICAgKi9cbiAgICBhcHBsaWVzKGV4cCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcHBsaWVzSW1wbChleHApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9kdWNlcyBhIHNldCBvZiBleHByZXNzaW9ucyB0aGF0IGFyZSBlcXVpdmFsZW50IHRvXG4gICAgICogdGhlIGdpdmVuIG9uZS4gT25seSBjYWxsIGlmIHRoZSBnaXZlbiBleHByZXNzaW9uXG4gICAgICogcGFzc2VkIHRoZSBhcHBsaWVzKCkgdGVzdC5cbiAgICAgKiBAcGFyYW0gZXhwIFRoZSBleHByZXNzaW9uIHRvIGZpbmQgYW4gZXF1aXZhbGVudCBmb3IuXG4gICAgICogQHJldHVybnMgU2V0IG9mIGVxdWl2YWxlbnQgZXhwcmVzc2lvbnMuXG4gICAgICovXG4gICAgYXBwbHkoZXhwKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgb24gXCIgKyBleHAudG9TdHJpbmcoKSlcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5hcHBseUltcGwoZXhwKTtcbiAgICAgICAgcmVzdWx0LmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KShlICE9IG51bGwgJiYgZSAhPSB1bmRlZmluZWQpO1xuICAgICAgICAgICAgLy9pZiAodGhpcy5jb25zdHJ1Y3Rvci5uYW1lID09IFwiQ29tYmluZUNvbW1vblRlcm1zTXVsdGlwbGljYXRpb25cIilcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5jb25zdHJ1Y3Rvci5uYW1lICsgZXhwLnRvU3RyaW5nKCkgKyBcIlxcbiAtPiBcIiArIGUuY2xhaW0ubjEudG9TdHJpbmcoKSlcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuZXhwb3J0cy5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlID0gTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGUgPSB2b2lkIDA7XG4vKipcbiAqIFByb2R1Y2VzIHRydXRocyBmcm9tIGEgc2V0IG9mIGVxdWl2YWxlbnQgZXhwcmVzc2lvbnMuXG4gKi9cbmNsYXNzIFJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZSB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXF1YXRpb24gQSBzZXQgb2YgZXhwcmVzc2lvbnMgd2hpY2ggYXJlIGVxdWFsLlxuICAgICAqL1xuICAgIGFwcGx5KGVxdWF0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcGx5SW1wbChlcXVhdGlvbik7XG4gICAgfVxuICAgIHN0YXRpYyBydWxlcyA9IG5ldyBTZXQoKTtcbn1cbmV4cG9ydHMuUmVsYXRpb25hbERlcml2YXRpb25SdWxlID0gUmVsYXRpb25hbERlcml2YXRpb25SdWxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRpdmlkZU9uQm90aFNpZGVzID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9Qcm9kdWN0XCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgUmVsYXRpb25hbERlcml2YXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vUmVsYXRpb25hbERlcml2YXRpb25SdWxlXCIpO1xuY2xhc3MgRGl2aWRlT25Cb3RoU2lkZXMgZXh0ZW5kcyBSZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGVfMS5SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGUge1xuICAgIGFwcGx5SW1wbChlcXVhdGlvbikge1xuICAgICAgICBjb25zdCBvdXQgPSBbXTtcbiAgICAgICAgY29uc3QgY29tYmluYXRpb25zID0gY2FydGVzaWFuUHJvZHVjdChlcXVhdGlvbik7XG4gICAgICAgIGNvbWJpbmF0aW9ucy5maWx0ZXIocGFpciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcGFpclswXSBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0O1xuICAgICAgICB9KS5mb3JFYWNoKHBhaXIgPT4ge1xuICAgICAgICAgICAgY29uc3QgcCA9IHBhaXJbMF07XG4gICAgICAgICAgICBjb25zdCBvdGhlciA9IHBhaXJbMV07XG4gICAgICAgICAgICAvLyBTb21lIHByb2R1Y3RzIGhhdmUgbXVsdGlwbGUgZmFjdG9yc1xuICAgICAgICAgICAgcC5mYWN0b3JzLmZvckVhY2goZmFjdG9yID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2Vjb25kO1xuICAgICAgICAgICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZCA9IFsuLi5vdGhlci5mYWN0b3JzXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZCA9IFtvdGhlcl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGNsYWltID0geyBuOiBwLndpdGhvdXQoZmFjdG9yKSwgbjE6ICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5mcmFjdGlvbikoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3RPck5vdCkoLi4uc2Vjb25kKSwgZmFjdG9yKSwgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsIH07XG4gICAgICAgICAgICAgICAgb3V0LnB1c2gobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQobmV3IFNldChbcCwgb3RoZXJdKSwgY2xhaW0sIFwiYT1iICYgYz1kID0+IGEvYyA9IGIvZFwiKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxufVxuZXhwb3J0cy5EaXZpZGVPbkJvdGhTaWRlcyA9IERpdmlkZU9uQm90aFNpZGVzO1xuLyoqXG4gKiBHZXRzIHRoZSBhbnRpLXJlZmxleGl2ZSBjbG9zdXJlIG9mIHRoZSByZWxhdGlvbiBBIHggQS5cbiAqIEl0J3Mgc3ltbWV0cmljIGFuZCB0cmFuc2l0aXZlLlxuICpcbiAqIEBwYXJhbSBzZXRcbiAqL1xuZnVuY3Rpb24gY2FydGVzaWFuUHJvZHVjdChzZXQpIHtcbiAgICBjb25zdCBvdXQgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGZpcnN0IG9mIHNldCkge1xuICAgICAgICBmb3IgKGNvbnN0IHNlY29uZCBvZiBzZXQpIHtcbiAgICAgICAgICAgIGlmIChmaXJzdCA9PT0gc2Vjb25kKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgb3V0LnB1c2goW2ZpcnN0LCBzZWNvbmRdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlN1YnRyYWN0RnJvbUJvdGhTaWRlcyA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vQXJndW1lbnRcIik7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db252ZW5pZW50RXhwcmVzc2lvbnNcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvUHJvZHVjdFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL1N1bVwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IFJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL1JlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZVwiKTtcbmNsYXNzIFN1YnRyYWN0RnJvbUJvdGhTaWRlcyBleHRlbmRzIFJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZV8xLlJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZSB7XG4gICAgYXBwbHlJbXBsKGVxdWF0aW9uKSB7XG4gICAgICAgIGNvbnN0IG91dCA9IFtdO1xuICAgICAgICBjb25zdCBjb21iaW5hdGlvbnMgPSBjYXJ0ZXNpYW5Qcm9kdWN0KGVxdWF0aW9uKTtcbiAgICAgICAgLy8gSWYgb25lIGlzIGFkZGl0aW9uLCBzdWJ0cmFjdCBmcm9tIGJvdGggc2lkZXNcbiAgICAgICAgLy8gSGVyZSB3ZSBmaWx0ZXIgc28gdGhhdCBvbmx5IHBhaXJzIHdoZXJlIHRoZSBmaXJzdCBleHByZXNzaW9uIGlzXG4gICAgICAgIC8vIGEgc3VtIGFyZSBvcGVyYXRlZCBvbi4gVGhpcyB3b3JrcyBiZWNhdXNlIGNvbWJpbmF0aW9ucyBpcyBzeW1ldHJpYy5cbiAgICAgICAgLy8gTm93IGZvciBlYWNoIHBhaXIgd2Ugb25seSBoYXZlIHRvIGRlYWwgd2l0aCB0aGUgZmlyc3QgZXhwIGJlaW5nIHN1bS5cbiAgICAgICAgY29tYmluYXRpb25zLmZpbHRlcihwYWlyID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwYWlyWzBdIGluc3RhbmNlb2YgU3VtXzEuU3VtO1xuICAgICAgICB9KS5mb3JFYWNoKHBhaXIgPT4ge1xuICAgICAgICAgICAgY29uc3QgcyA9IHBhaXJbMF07XG4gICAgICAgICAgICBjb25zdCBvdGhlciA9IHBhaXJbMV07XG4gICAgICAgICAgICAvLyBTb21lIFN1bXMgaGF2ZSBtdWx0aXBsZSB0ZXJtc1xuICAgICAgICAgICAgcy50ZXJtcy5maWx0ZXIodGVybSA9PiAhKHRlcm0gaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCAmJiB0ZXJtLmlzTmVnYXRpb24pKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKHRlcm0gPT4ge1xuICAgICAgICAgICAgICAgIC8vIElmIG90aGVyIGlzIGl0c2VsZiBhIHN1bSwgd2Ugd2lsbCBicmVhayBpdCBhcGFydFxuICAgICAgICAgICAgICAgIC8vIGludG8gdGVybXMgc28gdGhhdCB3ZSBjYW4gY29tYmluZSBpbnRlZ2VyIHRlcm1zIGluIHRoZVxuICAgICAgICAgICAgICAgIC8vIGZpbmFsIHJlc3VsdCBhbmQgYXZvaWRcbiAgICAgICAgICAgICAgICAvLyB4ICsgMiArIDIgPSB5ICsgMiA9PiB4ICsgMiA9IHkgKyAyIC0gMlxuICAgICAgICAgICAgICAgIC8vIE5vdGU6IFdlIG9ubHkgZG8gdGhpcyB0byBpbnRlZ2VyIHRlcm1zLCBiZWNhdXNlIHRoYXQnc1xuICAgICAgICAgICAgICAgIC8vIHNvIG9idmlvdXMgYW5kIGNvdWxkbid0IHBvc3NpYmx5IG5lZWQgdG8gYmUgZXhwbGFpbmVkIGZ1cnRoZXIuXG4gICAgICAgICAgICAgICAgLy8gV2UgZG9uJ3QgZG8gaXQgdG8gdmFyaWFibGUgdGVybXMuIFRoZSBmb2xsb3dpbmcgaXMgY29ycmVjdCBiZWhhdmlvcjpcbiAgICAgICAgICAgICAgICAvLyB4ICsgYSArIGEgPSB5ICsgYSA9PiB4ICsgYSA9IHkgKyBhIC0gYVxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFRoaXMgZGlzdGluY3Rpb24gaXMgZGViYXRhYmxlLiBXaHkgc2hvdWxkbid0IHRoZSBsZWZ0IGhhbmRcbiAgICAgICAgICAgICAgICAvLyBvZiB0aGUgbGFzdCBkZWR1Y3Rpb24gYmUgeCArIGEgKyBhIC0gYT8gQnkgZG9pbmcgdGhpcywgXG4gICAgICAgICAgICAgICAgLy8gd2UgcHJvZHVjZSBhIG11Y2ggbW9yZSBjb21wbGljYXRlZCBhbmQgZXhwZW5zaXZlIGdyYXBoLiBcbiAgICAgICAgICAgICAgICBsZXQgc2Vjb25kO1xuICAgICAgICAgICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIFN1bV8xLlN1bSkge1xuICAgICAgICAgICAgICAgICAgICBzZWNvbmQgPSBbLi4ub3RoZXIudGVybXNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kID0gW290aGVyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgY2xhaW0gPSB7IG46IHMud2l0aG91dCh0ZXJtKSwgbjE6ICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW1JbnR1aXRpdmUpKC4uLnNlY29uZCwgKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm5lZ2F0aXZlKSh0ZXJtKSksIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCB9O1xuICAgICAgICAgICAgICAgIG91dC5wdXNoKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KG5ldyBTZXQoW3MsIG90aGVyXSksIGNsYWltLCBcImE9YiAmIGM9ZCA9PiBhLWMgPSBiLWRcIikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbn1cbmV4cG9ydHMuU3VidHJhY3RGcm9tQm90aFNpZGVzID0gU3VidHJhY3RGcm9tQm90aFNpZGVzO1xuLyoqXG4gKiBHZXRzIHRoZSBhbnRpLXJlZmxleGl2ZSBjbG9zdXJlIG9mIHRoZSByZWxhdGlvbiBBIHggQS5cbiAqIEl0J3Mgc3ltbWV0cmljIGFuZCB0cmFuc2l0aXZlLlxuICpcbiAqIEBwYXJhbSBzZXRcbiAqL1xuZnVuY3Rpb24gY2FydGVzaWFuUHJvZHVjdChzZXQpIHtcbiAgICBjb25zdCBvdXQgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGZpcnN0IG9mIHNldCkge1xuICAgICAgICBmb3IgKGNvbnN0IHNlY29uZCBvZiBzZXQpIHtcbiAgICAgICAgICAgIGlmIChmaXJzdCA9PT0gc2Vjb25kKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgb3V0LnB1c2goW2ZpcnN0LCBzZWNvbmRdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmVxdWl2ID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IERlcml2YXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9leHByZXNzaW9ucy9EZXJpdmF0aXZlXCIpO1xuY29uc3QgRXhwb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9leHByZXNzaW9ucy9FeHBvbmVudFwiKTtcbmNvbnN0IEZyYWN0aW9uXzEgPSByZXF1aXJlKFwiLi4vZXhwcmVzc2lvbnMvRnJhY3Rpb25cIik7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi4vZXhwcmVzc2lvbnMvSW50ZWdlclwiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuLi9leHByZXNzaW9ucy9Qcm9kdWN0XCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi4vZXhwcmVzc2lvbnMvU3VtXCIpO1xuY29uc3QgVmFyaWFibGVfMSA9IHJlcXVpcmUoXCIuLi9leHByZXNzaW9ucy9WYXJpYWJsZVwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9UaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYlwiKTtcbi8qKlxuICogR2V0cyBhbGwgZXF1aXZhbGVudHMgb2YgdGhlIGdpdmVuIGV4cHJlc3Npb25cbiAqIGNoZWNraW5nIGl0J3MgY2hpbGRyZW4ncyBlcXVpdmFsZW50cy5cbiAqXG4gKiAoYSArIGEpICsgKGIgKyBiKVxuICogLT4gKDJhKSArIChiICsgYikgd2l0aCBpbmZlcmVuY2UgYSArIGEgPSAyYVxuICogQHBhcmFtIGV4cFxuICogQHBhcmFtIGRpcmVjdEVxdWl2YWxlbnRzIEZ1bmN0aW9uIHRoYXQgd2lsbCBwcm9kdWNlIGVxdWl2YWxlbnQgZXhwcmVzc2lvbnNcbiAqICAgICAgICB3aXRob3V0IHJlY3Vyc2lvbi5cbiAqIEByZXR1cm5zIEFycmF5IG9mIGluZmVyZW5jZXMgdG8gZXF1aXZhbGVudCBleHByZXNzaW9ucy5cbiAqL1xuZnVuY3Rpb24gZXF1aXYoZXhwLCBkaXJlY3RFcXVpdmFsZW50cykge1xuICAgIGlmIChleHAgaW5zdGFuY2VvZiBWYXJpYWJsZV8xLlZhcmlhYmxlIHx8IGV4cCBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKVxuICAgICAgICByZXR1cm4gW107XG4gICAgZWxzZVxuICAgICAgICBzd2l0Y2ggKGV4cC5jbGFzcykge1xuICAgICAgICAgICAgY2FzZSBTdW1fMS5TdW1UeXBlOiByZXR1cm4gc3VtRXF1aXYoZXhwLCBkaXJlY3RFcXVpdmFsZW50cyk7XG4gICAgICAgICAgICBjYXNlIFByb2R1Y3RfMS5Qcm9kdWN0VHlwZTogcmV0dXJuIHByb2R1Y3RFcXVpdihleHAsIGRpcmVjdEVxdWl2YWxlbnRzKTtcbiAgICAgICAgICAgIGNhc2UgRXhwb25lbnRfMS5FeHBvbmVudFR5cGU6IHJldHVybiBleHBvbmVudEVxdWl2KGV4cCwgZGlyZWN0RXF1aXZhbGVudHMpO1xuICAgICAgICAgICAgY2FzZSBGcmFjdGlvbl8xLkZyYWN0aW9uVHlwZTogcmV0dXJuIGZyYWN0aW9uRXF1aXYoZXhwLCBkaXJlY3RFcXVpdmFsZW50cyk7XG4gICAgICAgICAgICBjYXNlIERlcml2YXRpdmVfMS5EZXJpdmF0aXZlVHlwZTogcmV0dXJuIGRlcml2YXRpdmVFcXVpdihleHAsIGRpcmVjdEVxdWl2YWxlbnRzKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCBmb3IgXCIgKyBleHAuY2xhc3MpO1xuICAgICAgICB9XG59XG5leHBvcnRzLmVxdWl2ID0gZXF1aXY7XG4vKipcbiAqIEdldHMgYWxsIGVxdWl2YWxlbnRzIG9mIHRoZSBnaXZlbiBleHByZXNzaW9uXG4gKiBieSBzd2FwcGluZyBvdXQgaXQncyBjaGlsZHJlbiBpbmRpdmlkdWFsbHkuXG4gKlxuICogKGEgKyBhKSArIChiICsgYilcbiAqIC0+ICgyYSkgKyAoYiArIGIpIHdpdGggaW5mZXJlbmNlIGEgKyBhID0gMmFcbiAqIEBwYXJhbSBleHBcbiAqIEByZXR1cm5zIEFycmF5IG9mIGluZmVyZW5jZXMgdG8gZXF1aXZhbGVudCBleHByZXNzaW9ucy5cbiAqL1xuZnVuY3Rpb24gc3VtRXF1aXYoZXhwLCBkaXJlY3RFcXVpdmFsZW50cykge1xuICAgIGNvbnN0IGVxdWl2YWxlbnRTdW1zID0gbmV3IFNldCgpO1xuICAgIC8vIEFkZCB0b3AgbGV2ZWwgZXF1aXZhbGVudHNcbiAgICBkaXJlY3RFcXVpdmFsZW50cyhleHApLmZvckVhY2goaW5mID0+IHtcbiAgICAgICAgZXF1aXZhbGVudFN1bXMuYWRkKGluZik7XG4gICAgfSk7XG4gICAgLy8gRmluZCBlcXVpdmFsZW50cyBmb3IgZWFjaCB0ZXJtXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleHAudGVybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGVybSA9IGV4cC50ZXJtc1tpXTtcbiAgICAgICAgLy8gU3Vic3RpdHV0ZSB0ZXJtIGZvciBlYWNoIGVxdWl2YWxlbnRcbiAgICAgICAgZXF1aXYodGVybSwgZGlyZWN0RXF1aXZhbGVudHMpLmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICBlcXVpdmFsZW50U3Vtcy5hZGQobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgICAgIG4xOiBzd2FwKGV4cCwgaSwgYS5jbGFpbS5uMSlcbiAgICAgICAgICAgIH0sIGEuYXJndW1lbnQpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN3YXAocywgaSwgZSkge1xuICAgICAgICBjb25zdCB0ZXJtcyA9IFsuLi5zLnRlcm1zXTtcbiAgICAgICAgdGVybXNbaV0gPSBlO1xuICAgICAgICByZXR1cm4gKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bSkoLi4udGVybXMpO1xuICAgIH1cbiAgICByZXR1cm4gWy4uLmVxdWl2YWxlbnRTdW1zXTtcbn1cbmZ1bmN0aW9uIHByb2R1Y3RFcXVpdihleHAsIGRpcmVjdEVxdWl2YWxlbnRzKSB7XG4gICAgY29uc3QgZXF1aXZhbGVudFByb2R1Y3RzID0gbmV3IFNldCgpO1xuICAgIC8vIEFkZCB0b3AgbGV2ZWwgZXF1aXZhbGVudHNcbiAgICBkaXJlY3RFcXVpdmFsZW50cyhleHApLmZvckVhY2goaW5mID0+IHtcbiAgICAgICAgZXF1aXZhbGVudFByb2R1Y3RzLmFkZChpbmYpO1xuICAgIH0pO1xuICAgIC8vIEZpbmQgZXF1aXZhbGVudHMgZm9yIGVhY2ggdGVybVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwLmZhY3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZmFjdG9yID0gZXhwLmZhY3RvcnNbaV07XG4gICAgICAgIC8vIFN1YnN0aXR1dGUgdGVybSBmb3IgZWFjaCBlcXVpdmFsZW50XG4gICAgICAgIGVxdWl2KGZhY3RvciwgZGlyZWN0RXF1aXZhbGVudHMpLmZvckVhY2goYWx0ID0+IHtcbiAgICAgICAgICAgIGVxdWl2YWxlbnRQcm9kdWN0cy5hZGQobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgICAgIG4xOiBzd2FwKGV4cCwgaSwgYWx0LmNsYWltLm4xKSxcbiAgICAgICAgICAgIH0sIGFsdC5hcmd1bWVudCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3dhcChzLCBpLCBlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1zID0gWy4uLnMuZmFjdG9yc107XG4gICAgICAgIHRlcm1zW2ldID0gZTtcbiAgICAgICAgcmV0dXJuICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5wcm9kdWN0KSguLi50ZXJtcyk7XG4gICAgfVxuICAgIHJldHVybiBbLi4uZXF1aXZhbGVudFByb2R1Y3RzXTtcbn1cbmZ1bmN0aW9uIGV4cG9uZW50RXF1aXYoZXhwLCBkaXJlY3RFcXVpdmFsZW50cykge1xuICAgIGNvbnN0IGVxdWl2YWxlbnRzID0gbmV3IFNldCgpO1xuICAgIC8vIEFkZCB0b3AgbGV2ZWwgZXF1aXZhbGVudHNcbiAgICBkaXJlY3RFcXVpdmFsZW50cyhleHApLmZvckVhY2goaW5mID0+IHtcbiAgICAgICAgZXF1aXZhbGVudHMuYWRkKGluZik7XG4gICAgfSk7XG4gICAgZXF1aXYoZXhwLmJhc2UsIGRpcmVjdEVxdWl2YWxlbnRzKS5mb3JFYWNoKGFsdCA9PiB7XG4gICAgICAgIGVxdWl2YWxlbnRzLmFkZChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgbjE6IEV4cG9uZW50XzEuRXhwb25lbnQub2YoYWx0LmNsYWltLm4xLCBleHAucG93ZXIpXG4gICAgICAgIH0sIGFsdC5hcmd1bWVudCkpO1xuICAgIH0pO1xuICAgIGVxdWl2KGV4cC5wb3dlciwgZGlyZWN0RXF1aXZhbGVudHMpLmZvckVhY2goYWx0ID0+IHtcbiAgICAgICAgZXF1aXZhbGVudHMuYWRkKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogRXhwb25lbnRfMS5FeHBvbmVudC5vZihleHAuYmFzZSwgYWx0LmNsYWltLm4xKSxcbiAgICAgICAgfSwgYWx0LmFyZ3VtZW50KSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFsuLi5lcXVpdmFsZW50c107XG59XG5mdW5jdGlvbiBmcmFjdGlvbkVxdWl2KGV4cCwgZGlyZWN0RXF1aXZhbGVudHMpIHtcbiAgICBjb25zdCBlcXVpdmFsZW50cyA9IG5ldyBTZXQoKTtcbiAgICAvLyBBZGQgdG9wIGxldmVsIGVxdWl2YWxlbnRzXG4gICAgZGlyZWN0RXF1aXZhbGVudHMoZXhwKS5mb3JFYWNoKGluZiA9PiB7XG4gICAgICAgIGVxdWl2YWxlbnRzLmFkZChpbmYpO1xuICAgIH0pO1xuICAgIGVxdWl2KGV4cC5udW1lcmF0b3IsIGRpcmVjdEVxdWl2YWxlbnRzKS5mb3JFYWNoKGFsdCA9PiB7XG4gICAgICAgIGVxdWl2YWxlbnRzLmFkZChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgbjE6IEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoYWx0LmNsYWltLm4xLCBleHAuZGVub21pbmF0b3IpXG4gICAgICAgIH0sIGFsdC5hcmd1bWVudCkpO1xuICAgIH0pO1xuICAgIGVxdWl2KGV4cC5kZW5vbWluYXRvciwgZGlyZWN0RXF1aXZhbGVudHMpLmZvckVhY2goYWx0ID0+IHtcbiAgICAgICAgZXF1aXZhbGVudHMuYWRkKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihleHAubnVtZXJhdG9yLCBhbHQuY2xhaW0ubjEpLFxuICAgICAgICB9LCBhbHQuYXJndW1lbnQpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gWy4uLmVxdWl2YWxlbnRzXTtcbn1cbmZ1bmN0aW9uIGRlcml2YXRpdmVFcXVpdihleHAsIGRpcmVjdEVxdWl2YWxlbnRzKSB7XG4gICAgY29uc3QgZXF1aXZhbGVudHMgPSBuZXcgU2V0KCk7XG4gICAgLy8gQWRkIHRvcCBsZXZlbCBlcXVpdmFsZW50c1xuICAgIGRpcmVjdEVxdWl2YWxlbnRzKGV4cCkuZm9yRWFjaChpbmYgPT4ge1xuICAgICAgICBlcXVpdmFsZW50cy5hZGQoaW5mKTtcbiAgICB9KTtcbiAgICBlcXVpdihleHAuZXhwLCBkaXJlY3RFcXVpdmFsZW50cykuZm9yRWFjaChhbHQgPT4ge1xuICAgICAgICBlcXVpdmFsZW50cy5hZGQobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgIG4xOiBEZXJpdmF0aXZlXzEuRGVyaXZhdGl2ZS5vZihhbHQuY2xhaW0ubjEsIGV4cC5yZWxhdGl2ZVRvKVxuICAgICAgICB9LCBhbHQuYXJndW1lbnQpKTtcbiAgICB9KTtcbiAgICBlcXVpdihleHAucmVsYXRpdmVUbywgZGlyZWN0RXF1aXZhbGVudHMpLmZvckVhY2goYWx0ID0+IHtcbiAgICAgICAgZXF1aXZhbGVudHMuYWRkKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogRGVyaXZhdGl2ZV8xLkRlcml2YXRpdmUub2YoZXhwLmV4cCwgYWx0LmNsYWltLm4xKSxcbiAgICAgICAgfSwgYWx0LmFyZ3VtZW50KSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFsuLi5lcXVpdmFsZW50c107XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQXNzb2NpYXRpdmVQcm9wZXJ0eU9mUHJvZHVjdHNBbmRTdW1zID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9Qcm9kdWN0XCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvU3VtXCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG4vKipcbiAqIEZsYXR0ZW5zIHByb2R1Y3RzIGluIHByb2R1Y3RzIGFuZCBzdW1zIGluIHN1bXNcbiAqL1xuY2xhc3MgQXNzb2NpYXRpdmVQcm9wZXJ0eU9mUHJvZHVjdHNBbmRTdW1zIGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gZXhwIGluc3RhbmNlb2YgU3VtXzEuU3VtIHx8IGV4cCBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0O1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGlmIChleHAgaW5zdGFuY2VvZiBTdW1fMS5TdW0pIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rlcm1zID0gZXhwLnRlcm1zLm1hcCh0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodCBpbnN0YW5jZW9mIFN1bV8xLlN1bSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLnQudGVybXNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gW3RdO1xuICAgICAgICAgICAgfSkuZmxhdCgpO1xuICAgICAgICAgICAgaWYgKG5ld1Rlcm1zLmxlbmd0aCA9PSBleHAudGVybXMubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU2V0KCk7XG4gICAgICAgICAgICByZXR1cm4gKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgICAgICBuMTogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bSkoLi4ubmV3VGVybXMpXG4gICAgICAgICAgICB9LCBcIkFzc29jaWF0aXZlIHByb3BlcnR5IG9mIGFkZGl0aW9uXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChleHAuaXNOZWdhdGlvbilcbiAgICAgICAgICAgICAgICByZXR1cm4gKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKCk7XG4gICAgICAgICAgICBjb25zdCBuZXdGYWN0b3JzID0gZXhwLmZhY3RvcnMubWFwKHQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0IGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi50LmZhY3RvcnNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gW3RdO1xuICAgICAgICAgICAgfSkuZmxhdCgpO1xuICAgICAgICAgICAgaWYgKG5ld0ZhY3RvcnMubGVuZ3RoID09IGV4cC5mYWN0b3JzLmxlbmd0aClcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNldCgpO1xuICAgICAgICAgICAgcmV0dXJuICgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICAgICAgbjE6ICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5wcm9kdWN0KSguLi5uZXdGYWN0b3JzKVxuICAgICAgICAgICAgfSwgXCJBc3NvY2lhdGl2ZSBwcm9wZXJ0eSBvZiBtdWx0aXBsaWNhdGlvblwiKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkFzc29jaWF0aXZlUHJvcGVydHlPZlByb2R1Y3RzQW5kU3VtcyA9IEFzc29jaWF0aXZlUHJvcGVydHlPZlByb2R1Y3RzQW5kU3VtcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Db21iaW5lQ29tbW9uRmFjdG9yc011bHRpcGxpY2F0aW9uID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IEV4cG9uZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvRXhwb25lbnRcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvUHJvZHVjdFwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9UaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYlwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuLyoqXG4gKiBDb21iaW5lcyBsaWtlIGZhY3RvcnMgYW5kIGV4cG9uZW50cyB3aXRoIGxpa2UgYmFzZXMuXG4gKi9cbmNsYXNzIENvbWJpbmVDb21tb25GYWN0b3JzTXVsdGlwbGljYXRpb24gZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAgaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdFxuICAgICAgICAgICAgJiYgIWV4cC5pc1JlZHVjaWJsZTtcbiAgICB9XG4gICAgYXBwbHlJbXBsKGV4cCkge1xuICAgICAgICBjb25zdCBwcm9kdWN0ID0gZXhwO1xuICAgICAgICBjb25zdCB1bmlxdWVCYXNlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBmYWN0b3Igb2YgcHJvZHVjdC5mYWN0b3JzKSB7XG4gICAgICAgICAgICBpZiAoZmFjdG9yIGluc3RhbmNlb2YgRXhwb25lbnRfMS5FeHBvbmVudClcbiAgICAgICAgICAgICAgICB1bmlxdWVCYXNlcy5hZGQoZmFjdG9yLmJhc2UpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHVuaXF1ZUJhc2VzLmFkZChmYWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVxdWl2YWxlbnRFeHByZXNzaW9ucyA9IG5ldyBTZXQoKTtcbiAgICAgICAgLy8gRm9yIGV2ZXJ5IHVuaXF1ZSBmYWN0b3JcbiAgICAgICAgZm9yIChjb25zdCBiYXNlIG9mIHVuaXF1ZUJhc2VzKSB7XG4gICAgICAgICAgICBjb25zdCBwb3dlclRlcm1zID0gW107XG4gICAgICAgICAgICBsZXQgcmVtYWluaW5nRmFjdG9ycyA9IFtdO1xuICAgICAgICAgICAgLy8gQ291bnQgdGhlIG51bWJlciBvZiB0aW1lcyBpdCBvY2N1cnMgaW4gdGhlIHByb2R1Y3RcbiAgICAgICAgICAgIC8vIENvbGxlY3QgdGhlIG90aGVyIGZhY3RvcnMgaW4gYSBsaXN0XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGYgb2YgcHJvZHVjdC5mYWN0b3JzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGYgaW5zdGFuY2VvZiBFeHBvbmVudF8xLkV4cG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmLmJhc2UgPT09IGJhc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3dlclRlcm1zLnB1c2goZi5wb3dlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZiA9PT0gYmFzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG93ZXJUZXJtcy5wdXNoKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDEpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZ0ZhY3RvcnMucHVzaChmKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGl0IG9jY3VyZWQgbXVsdGlwbGUgdGltZXMsIGNyZWF0ZSBhIG5ldyBleHBvbmVudFxuICAgICAgICAgICAgLy8gVG8gY29tYmluZSB0aGUgcmVwZWF0c1xuICAgICAgICAgICAgaWYgKHBvd2VyVGVybXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cG9uZW50ID0gRXhwb25lbnRfMS5FeHBvbmVudC5vZihiYXNlLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtKSguLi5wb3dlclRlcm1zKSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlbWFpbmluZ0ZhY3RvcnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZXF1aXZhbGVudEV4cHJlc3Npb25zLmFkZChleHBvbmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBJbnNlcnQgdGhlIG5ldyBleHBvbmVudCBhdCB0aGUgY29ycmVjdCBwbGFjZSBpbiB0aGUgbmV3IHByb2R1Y3RcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaW5zZXJ0Q29ycmVjdGx5KGFyciwgZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBpY2sgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoMCwgUHJvZHVjdF8xLmZhY3Rvck9yZGVyKShlbCwgYXJyW2ldKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDAsIGVsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRDb3JyZWN0bHkocmVtYWluaW5nRmFjdG9ycywgZXhwb25lbnQpO1xuICAgICAgICAgICAgICAgICAgICBlcXVpdmFsZW50RXhwcmVzc2lvbnMuYWRkKFByb2R1Y3RfMS5Qcm9kdWN0Lm9mKHJlbWFpbmluZ0ZhY3RvcnMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHVybiB0aGUgZXF1aXZhbGVudCBleHByZXNzaW9ucyBpbnRvIGluZmVyZW5jZXNcbiAgICAgICAgbGV0IGluZmVyZW5jZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGVxdWl2YWxlbnRFeHByZXNzaW9ucy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgaW5mZXJlbmNlcy5hZGQobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKHByb2R1Y3QpLCB7XG4gICAgICAgICAgICAgICAgbjogcHJvZHVjdCxcbiAgICAgICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICAgICAgbjE6IGUsXG4gICAgICAgICAgICB9LCBcIkNvbWJpbmUgY29tbW9uIGZhY3RvcnMgbXVsdGlwbGljYXRpb25cIikpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGluZmVyZW5jZXM7XG4gICAgfVxufVxuZXhwb3J0cy5Db21iaW5lQ29tbW9uRmFjdG9yc011bHRpcGxpY2F0aW9uID0gQ29tYmluZUNvbW1vbkZhY3RvcnNNdWx0aXBsaWNhdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Db21iaW5lQ29tbW9uVGVybXNBZGRpdGlvbiA9IHZvaWQgMDtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vQXJndW1lbnRcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvUHJvZHVjdFwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvU3VtXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuLyoqXG4gKiBhICsgYSA9IDJhXG4gKiAyYSAtIGEgPSBhICAodGhpcyBtZWFucyB3ZSBoYXZlIHRvIGNoZWNrIGZvciBuZWdhdGlvbnMpXG4gKlxuICogKGJjKWEgKyA3YSA9ICg3ICsgYmMpYVxuICpcbiAqIEJ1dCBub3RcbiAqIDEgKyAxID0gMigxKVxuICovXG5jbGFzcyBDb21iaW5lQ29tbW9uVGVybXNBZGRpdGlvbiBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGV4cCBpbnN0YW5jZW9mIFN1bV8xLlN1bVxuICAgICAgICAgICAgJiYgIWV4cC5pc1JlZHVjaWJsZTtcbiAgICB9XG4gICAgYXBwbHlJbXBsKGV4cCkge1xuICAgICAgICBjb25zdCBzdW0gPSBleHA7XG4gICAgICAgIGNvbnN0IHVuaXF1ZUZhY3RvcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBuZXcgU2V0KCk7XG4gICAgICAgIC8vIEZpbmQgYWxsIHVuaXF1ZSBmYWN0b3JzIGluIGFsbCB0ZXJtc1xuICAgICAgICAvLyBEb24ndCBjb25zaWRlciB0aGUgLTEgaW4gbmVnYXRpb25zXG4gICAgICAgIC8vIENvbnNpZGVyIHRoZSBmYWN0b3JzIG9mIG5lZ2F0ZWQgcHJvZHVjdHMgc2VwYXJhdGVseVxuICAgICAgICBmb3IgKGNvbnN0IHRlcm0gb2Ygc3VtLnRlcm1zKSB7XG4gICAgICAgICAgICBpZiAodGVybSBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlcm0uaXNOZWdhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlcm0ubmVnYXRpb24gaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuYWRkQWxsKSh1bmlxdWVGYWN0b3JzLCAuLi50ZXJtLm5lZ2F0aW9uLmZhY3RvcnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXF1ZUZhY3RvcnMuYWRkKHRlcm0ubmVnYXRpb24pO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuYWRkQWxsKSh1bmlxdWVGYWN0b3JzLCAuLi50ZXJtLmZhY3RvcnMpOyAvL1RPRE86IENhcHR1cmUgYWxsIGNvbWJpbmF0aW9ucyBvZiBmYWN0b3JzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdW5pcXVlRmFjdG9ycy5hZGQodGVybSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJUcnlpbmcgZXhwcmVzc2lvbiBcIiArIGV4cC50b1N0cmluZygpICsgXCIgXFxuIGNoZWNraW5nIHZhbHVlcyBcIiArIFsuLi51bmlxdWVGYWN0b3JzXSk7XG4gICAgICAgIC8vIENyZWF0ZSBhbiBhcmd1bWVudCBmb3IgcHVsbGluZyBvdXQgZWFjaCBmYWN0b3JcbiAgICAgICAgZm9yIChjb25zdCBmYWN0b3Igb2YgdW5pcXVlRmFjdG9ycykge1xuICAgICAgICAgICAgLy8gRG9uJ3Qgd2FzdGUgdGltZSB3aXRoIHVuaGVhbHRoeSBmYWN0b3JzXG4gICAgICAgICAgICBpZiAoZmFjdG9yLmlzUmVkdWNpYmxlT3JJbnQpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAvLyBGaWd1cmUgb3V0IHdoaWNoIHRlcm1zIGNvbnRhaW4gaXRcbiAgICAgICAgICAgIGNvbnN0IHJlbGF2ZW50VGVybXMgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IG90aGVyVGVybXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGVybSBvZiBzdW0udGVybXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGVybSBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXJtLmlzTmVnYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0J3MgYSBuZWdhdGlvbiwgY2hlY2sgaWYgdGhlIG5lZ2F0aW9uIGhhcyBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlcm0ubmVnYXRpb24gPT09IGZhY3RvcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxhdmVudFRlcm1zLnB1c2godGVybSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0ZXJtLm5lZ2F0aW9uIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuaGFzKSh0ZXJtLm5lZ2F0aW9uLmZhY3RvcnMsIGZhY3RvcikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF2ZW50VGVybXMucHVzaCh0ZXJtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyVGVybXMucHVzaCh0ZXJtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5oYXMpKHRlcm0uZmFjdG9ycywgZmFjdG9yKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF2ZW50VGVybXMucHVzaCh0ZXJtKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJUZXJtcy5wdXNoKHRlcm0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlcm0gPT09IGZhY3RvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF2ZW50VGVybXMucHVzaChQcm9kdWN0XzEuUHJvZHVjdC5vZihbKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSksIHRlcm1dKSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyVGVybXMucHVzaCh0ZXJtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoZWNraW5nIFwiICsgZmFjdG9yICsgXCIsIHdoaWNoIGlzIGluIFwiICsgcmVsYXZlbnRUZXJtcyArIFwiIFxcbmJ1dCBub3QgXCIgKyBvdGhlclRlcm1zKTtcbiAgICAgICAgICAgIC8vIFB1bGwgaXQgb3V0IG9mIHRob3NlIHRlcm1zXG4gICAgICAgICAgICBjb25zdCBjb2VmZmljaWVudHMgPSBbXTtcbiAgICAgICAgICAgIGlmIChyZWxhdmVudFRlcm1zLmxlbmd0aCA8IDIpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRlcm0gb2YgcmVsYXZlbnRUZXJtcykge1xuICAgICAgICAgICAgICAgIGlmICh0ZXJtLmlzTmVnYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY29lZmZpY2llbnRzLnB1c2goKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm5lZ2F0aXZlKSh0ZXJtLm5lZ2F0aW9uLndpdGhvdXQoZmFjdG9yKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29lZmZpY2llbnRzLnB1c2godGVybS53aXRob3V0KGZhY3RvcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHB1bGxlZCA9ICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW1Pck5vdCkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm9yZGVyZWRQcm9kdWN0KShTdW1fMS5TdW0ub2YoY29lZmZpY2llbnRzKSwgZmFjdG9yKSwgLi4ub3RoZXJUZXJtcyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0+IFwiICsgcHVsbGVkICsgXCJcXG5Gcm9tIFwiICsgY29lZmZpY2llbnRzICsgXCJcXG5cIiArIGZhY3Rvci50b1N0cmluZygpICsgXCJcXG5cIiArIG90aGVyVGVybXMpO1xuICAgICAgICAgICAgYXJncy5hZGQobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgICAgIG4xOiBwdWxsZWRcbiAgICAgICAgICAgIH0sIFwiQ29tYmluZSBsaWtlIHRlcm1zXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJncztcbiAgICB9XG59XG5leHBvcnRzLkNvbWJpbmVDb21tb25UZXJtc0FkZGl0aW9uID0gQ29tYmluZUNvbW1vblRlcm1zQWRkaXRpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29tYmluZUludGVnZXJGYWN0b3JzID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9JbnRlZ2VyXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL1Byb2R1Y3RcIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi8uLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xID0gcmVxdWlyZShcIi4uLy4uL3V0aWwvVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJcIik7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbi8qKlxuICogUHJvZHVjdHMgd2l0aCBzZXZlcmFsIGludGVnZXIgdGVybXMgYXJlIHNpbXBsaWZpZWQgdG8gb25seSBpbmNsdWRlIDFcbiAqL1xuY2xhc3MgQ29tYmluZUludGVnZXJGYWN0b3JzIGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gZXhwIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3Q7XG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgY29uc3QgcCA9IGV4cDtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nRmFjdG9ycyA9IFtdO1xuICAgICAgICBsZXQgY29lZmZpY2llbnQgPSAxO1xuICAgICAgICBmb3IgKGNvbnN0IGYgb2YgcC5mYWN0b3JzKSB7XG4gICAgICAgICAgICBpZiAoZiBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKSB7XG4gICAgICAgICAgICAgICAgY29lZmZpY2llbnQgKj0gZi52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZW1haW5pbmdGYWN0b3JzLnB1c2goZik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHAuZmFjdG9ycy5sZW5ndGggLSByZW1haW5pbmdGYWN0b3JzLmxlbmd0aCA8IDIpXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNldCgpO1xuICAgICAgICByZXR1cm4gKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3RPck5vdCkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoY29lZmZpY2llbnQpLCAuLi5yZW1haW5pbmdGYWN0b3JzKVxuICAgICAgICB9LCBcIk11bHRpcGx5IGludGVnZXIgdGVybXNcIikpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29tYmluZUludGVnZXJGYWN0b3JzID0gQ29tYmluZUludGVnZXJGYWN0b3JzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkV2YWx1YXRlU3VtcyA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vQXJndW1lbnRcIik7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvSW50ZWdlclwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL1N1bVwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9UaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYlwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuLyoqXG4gKiBDb21iaW5lIGFueSBpbnRlZ2VyIHRlcm1zIGluIFN1bXMuXG4gKiBhICsgMiArIDIgKyAyPSBhICsgNFxuICogMiAtIDIgPSAwXG4gKlxuICogQ29tYmluZXMgYWxsIG9mIHRoZW0gYXQgb25jZSBubyBtYXR0ZXIgaG93IG1hbnkgdGVybXMgdGhlcmUgYXJlLlxuICpcbiAqL1xuY2xhc3MgRXZhbHVhdGVTdW1zIGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gZXhwIGluc3RhbmNlb2YgU3VtXzEuU3VtO1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGNvbnN0IHN1bSA9IGV4cDtcbiAgICAgICAgY29uc3Qgb3V0ID0gbmV3IFNldCgpO1xuICAgICAgICBjb25zdCBpbnRlZ2VyVGVybXMgPSBbLi4uc3VtLnRlcm1zXS5maWx0ZXIodCA9PiB0IGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpO1xuICAgICAgICBpZiAoaW50ZWdlclRlcm1zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0ludCA9IGludGVnZXJUZXJtcy5tYXAoZSA9PiBlKS5yZWR1Y2UoKGEsIGIpID0+IEludGVnZXJfMS5JbnRlZ2VyLm9mKGEudmFsdWUgKyBiLnZhbHVlKSk7XG4gICAgICAgIGNvbnN0IG90aGVyVGVybXMgPSBbLi4uc3VtLnRlcm1zXS5maWx0ZXIodCA9PiAhKHQgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcikpO1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICBpZiAob3RoZXJUZXJtcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKHN1bSksIHtcbiAgICAgICAgICAgICAgICBuOiBzdW0sXG4gICAgICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgICAgIG4xOiBuZXdJbnRcbiAgICAgICAgICAgIH0sIFwiRXZhbHVhdGVkIEFkZGl0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKHN1bSksIHtcbiAgICAgICAgICAgICAgICBuOiBzdW0sXG4gICAgICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgICAgIG4xOiBTdW1fMS5TdW0ub2Yob3RoZXJUZXJtcy5jb25jYXQobmV3SW50KSksXG4gICAgICAgICAgICB9LCBcIkV2YWx1YXRlZCBBZGRpdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBvdXQuYWRkKHJlc3VsdCk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxufVxuZXhwb3J0cy5FdmFsdWF0ZVN1bXMgPSBFdmFsdWF0ZVN1bXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXhwb25lbnRpYWxJZGVudGl0eSA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vQXJndW1lbnRcIik7XG5jb25zdCBFeHBvbmVudF8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL0V4cG9uZW50XCIpO1xuY29uc3QgSW50ZWdlcl8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL0ludGVnZXJcIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi8uLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xID0gcmVxdWlyZShcIi4uLy4uL3V0aWwvVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJcIik7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbi8qKlxuICogQW55dGhpbmcgdG8gdGhlIGZpcnN0IGlzIGp1c3QgdGhhdCB0aGluZy5cbiAqIFR1cm5zIGFueSBleHBvbmVudCB3aXRoIGEgcG93ZXIgb2YgMSB0byB0aGF0IHRoaW5nLlxuICovXG5jbGFzcyBFeHBvbmVudGlhbElkZW50aXR5IGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gZXhwIGluc3RhbmNlb2YgRXhwb25lbnRfMS5FeHBvbmVudFxuICAgICAgICAgICAgJiYgZXhwLnBvd2VyIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXJcbiAgICAgICAgICAgICYmIGV4cC5wb3dlci52YWx1ZSA9PSAxO1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGNvbnN0IGUgPSBleHA7XG4gICAgICAgIHJldHVybiAoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGUpLCB7XG4gICAgICAgICAgICBuOiBlLFxuICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgbjE6IGUuYmFzZSxcbiAgICAgICAgfSwgXCJFeHBvbmVudGlhbCBJZGVudGl0eSBpcyAxXCIpKTtcbiAgICB9XG59XG5leHBvcnRzLkV4cG9uZW50aWFsSWRlbnRpdHkgPSBFeHBvbmVudGlhbElkZW50aXR5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk11bHRpcGx5RXhwb25lbnRQb3dlcnMgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgRXhwb25lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9FeHBvbmVudFwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9UaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYlwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuY2xhc3MgTXVsdGlwbHlFeHBvbmVudFBvd2VycyBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGV4cCBpbnN0YW5jZW9mIEV4cG9uZW50XzEuRXhwb25lbnRcbiAgICAgICAgICAgICYmIGV4cC5iYXNlIGluc3RhbmNlb2YgRXhwb25lbnRfMS5FeHBvbmVudDtcbiAgICB9XG4gICAgYXBwbHlJbXBsKGV4cCkge1xuICAgICAgICBjb25zdCBvdXRlciA9IGV4cDtcbiAgICAgICAgY29uc3QgaW5uZXIgPSBvdXRlci5iYXNlO1xuICAgICAgICByZXR1cm4gKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogRXhwb25lbnRfMS5FeHBvbmVudC5vZihpbm5lci5iYXNlLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdCkoaW5uZXIucG93ZXIsIG91dGVyLnBvd2VyKSlcbiAgICAgICAgfSwgXCJFeHBvbmVudHMgdG8gZXhwb25lbnRzIG11bHRpcGx5XCIpKTtcbiAgICB9XG59XG5leHBvcnRzLk11bHRpcGx5RXhwb25lbnRQb3dlcnMgPSBNdWx0aXBseUV4cG9uZW50UG93ZXJzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk9yZGVyU3VtcyA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vQXJndW1lbnRcIik7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db252ZW5pZW50RXhwcmVzc2lvbnNcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9TdW1cIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi8uLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xID0gcmVxdWlyZShcIi4uLy4uL3V0aWwvVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJcIik7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbi8qKlxuICogVHVybnMgc3VtcyB0aGF0IGFyZSB1bmhlYWx0aHkgYmVjYXVzZSB0aGVpciB0ZXJtIG9yZGVyXG4gKiBpcyB3cm9uZyBpbnRvIGNvcnJlY3RseSBvcmRlcmVkIHN1bXMuXG4gKi9cbmNsYXNzIE9yZGVyU3VtcyBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuICFleHAuaXNIZWFsdGh5ICYmIGV4cC5jbGFzcyA9PT0gU3VtXzEuU3VtVHlwZTtcbiAgICB9XG4gICAgYXBwbHlJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gbmV3IFNldChbbmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgICAgIG4xOiAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEub3JkZXJlZFN1bSkoZXhwKSxcbiAgICAgICAgICAgIH0sIFwiUmVvcmRlcmVkXCIpXSk7XG4gICAgfVxufVxuZXhwb3J0cy5PcmRlclN1bXMgPSBPcmRlclN1bXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUG93ZXJSdWxlID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IERlcml2YXRpdmVfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9EZXJpdmF0aXZlXCIpO1xuY29uc3QgRXhwb25lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9FeHBvbmVudFwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9UaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYlwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuLyoqXG4gKiBEZXJpdmVzIHVzaW5nIHRoZSBwb3dlciBydWxlXG4gKi9cbmNsYXNzIFBvd2VyUnVsZSBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGV4cCBpbnN0YW5jZW9mIERlcml2YXRpdmVfMS5EZXJpdmF0aXZlXG4gICAgICAgICAgICAmJiAoKGV4cC5leHAgaW5zdGFuY2VvZiBFeHBvbmVudF8xLkV4cG9uZW50XG4gICAgICAgICAgICAgICAgJiYgZXhwLmV4cC5iYXNlID09PSBleHAucmVsYXRpdmVUb1xuICAgICAgICAgICAgICAgICYmIGV4cC5leHAucG93ZXIuaXNDb25zdGFudClcbiAgICAgICAgICAgICAgICB8fCAoZXhwLmV4cCA9PT0gZXhwLnJlbGF0aXZlVG8pKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV2Uga25vdzpcbiAgICAgKiBleHAgaXMgYSBEZXJpdmF0aXZlIG9mIGFuIEV4cG9uZW50IHdpdGggYSBjb25zdGFudCBwb3dlclxuICAgICAqIHRoZSBleHBvbmVudCdzIGJhc2UgaXMgdGhlIHNhbWUgYXMgd2hhdCB0aGUgZGVyaXZhdGl2ZSBpcyByZWxhdGl2ZSB0b1xuICAgICAqL1xuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgY29uc3QgZCA9IGV4cDtcbiAgICAgICAgbGV0IGV4cG9uZW50O1xuICAgICAgICBpZiAoZC5leHAgaW5zdGFuY2VvZiBFeHBvbmVudF8xLkV4cG9uZW50KSB7XG4gICAgICAgICAgICBleHBvbmVudCA9IGQuZXhwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXhwb25lbnQgPSBFeHBvbmVudF8xLkV4cG9uZW50Lm9mKGQuZXhwLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgxKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3QpKGV4cG9uZW50LnBvd2VyLCBFeHBvbmVudF8xLkV4cG9uZW50Lm9mKGV4cG9uZW50LmJhc2UsICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW1JbnR1aXRpdmUpKGV4cG9uZW50LnBvd2VyLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubmVnYXRpdmUpKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDEpKSkpKTtcbiAgICAgICAgcmV0dXJuICgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgbjE6IHJlc3VsdFxuICAgICAgICB9LCBcIlBvd2VyIHJ1bGVcIikpO1xuICAgIH1cbn1cbmV4cG9ydHMuUG93ZXJSdWxlID0gUG93ZXJSdWxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlByb2R1Y3RSdWxlID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IERlcml2YXRpdmVfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9EZXJpdmF0aXZlXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL1Byb2R1Y3RcIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi8uLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xID0gcmVxdWlyZShcIi4uLy4uL3V0aWwvVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJcIik7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbi8qKlxuICogRGVyaXZhdGl2ZXMgb2YgcHJvZHVjdHNcbiAqXG4gKiBPbmx5IG9wZXJhdGVzIG9uIGRlcml2YXRpdmVzIG9mIHByb2R1Y3RzIHdoZXJlIGFsbCBmYWN0b3JzIGFyZSBub3QgY29uc3RhbnQuXG4gKi9cbmNsYXNzIFByb2R1Y3RSdWxlIGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gZXhwIGluc3RhbmNlb2YgRGVyaXZhdGl2ZV8xLkRlcml2YXRpdmVcbiAgICAgICAgICAgICYmIGV4cC5leHAgaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdFxuICAgICAgICAgICAgLy8gQ29udGFpbnMgbm8gY29uc3RhbnQgZmFjdG9yc1xuICAgICAgICAgICAgJiYgIWV4cC5leHAuZmFjdG9ycy5tYXAoZiA9PiBmLmlzQ29uc3RhbnQpLnJlZHVjZSgoYSwgYikgPT4gYSB8fCBiKTtcbiAgICAgICAgLy8gQ29udGFpbnMgbm8gZGVyaXZhdGl2ZXMgVE9ETzogRmluZCBhIGJldHRlciBzb2x1dGlvbiB0byBsb29wIGd1YXJkaW5nXG4gICAgICAgIC8vJiYgIWV4cC5leHAuZmFjdG9ycy5tYXA8Ym9vbGVhbj4oZiA9PiBmIGluc3RhbmNlb2YgRGVyaXZhdGl2ZSkucmVkdWNlKChhLCBiKSA9PiBhIHx8IGIpXG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgY29uc3QgZCA9IGV4cDtcbiAgICAgICAgY29uc3QgcCA9IGQuZXhwO1xuICAgICAgICBjb25zdCBmYWN0b3JzID0gcC5mYWN0b3JzO1xuICAgICAgICAvLyBGb3IgZWFjaCBmYWN0b3IsIGNyZWF0ZSBhIHByb2R1Y3QgY29udGFpbmluZyBpdHMgZGVyaXZhdGl2ZSBhbmQgdGhlIG90aGVyIGZhY3RvcnNcbiAgICAgICAgY29uc3QgdGVybXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmYWN0b3JzLmxlbmd0aDsgaSsrKSB7IC8vIGkgaXMgdGhlIGZhY3RvciB0byBkZXJpdmF0aXplICh3aGF0IHRlcm0gd2UncmUgb24pXG4gICAgICAgICAgICBjb25zdCBmYWN0b3JUb0Rlcml2YXRpemUgPSBmYWN0b3JzW2ldO1xuICAgICAgICAgICAgY29uc3QgcEZhY3RvcnMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZmFjdG9yIG9mIGZhY3RvcnMpIHsgLy8gYSBpcyB0aGUgdGhlIGZhY3RvciB3ZSdyZSBvblxuICAgICAgICAgICAgICAgIGlmIChmYWN0b3IgPT09IGZhY3RvclRvRGVyaXZhdGl6ZSlcbiAgICAgICAgICAgICAgICAgICAgcEZhY3RvcnMucHVzaChEZXJpdmF0aXZlXzEuRGVyaXZhdGl2ZS5vZihmYWN0b3IsIGQucmVsYXRpdmVUbykpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcEZhY3RvcnMucHVzaChmYWN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGVybXMucHVzaCgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdCkoLi4ucEZhY3RvcnMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShkKSwge1xuICAgICAgICAgICAgbjogZCxcbiAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgIG4xOiAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtKSguLi50ZXJtcylcbiAgICAgICAgfSwgXCJQcm9kdWN0IFJ1bGVcIikpO1xuICAgIH1cbn1cbmV4cG9ydHMuUHJvZHVjdFJ1bGUgPSBQcm9kdWN0UnVsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QdWxsQ29uc3RhbnRzRnJvbURlcml2YXRpdmVzID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IERlcml2YXRpdmVfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9EZXJpdmF0aXZlXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL1Byb2R1Y3RcIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi8uLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xID0gcmVxdWlyZShcIi4uLy4uL3V0aWwvVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJcIik7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbmNsYXNzIFB1bGxDb25zdGFudHNGcm9tRGVyaXZhdGl2ZXMgZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAgaW5zdGFuY2VvZiBEZXJpdmF0aXZlXzEuRGVyaXZhdGl2ZVxuICAgICAgICAgICAgJiYgZXhwLmV4cCBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0O1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGNvbnN0IGQgPSBleHA7XG4gICAgICAgIGNvbnN0IHAgPSBkLmV4cDtcbiAgICAgICAgY29uc3QgY29uc3RGYWN0b3JzID0gcC5mYWN0b3JzLmZpbHRlcihmID0+IGYuaXNDb25zdGFudCk7XG4gICAgICAgIGNvbnN0IG91dCA9IG5ldyBTZXQ7XG4gICAgICAgIGZvciAoY29uc3QgZmFjdG9yIG9mIGNvbnN0RmFjdG9ycykge1xuICAgICAgICAgICAgb3V0LmFkZChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZCksIHtcbiAgICAgICAgICAgICAgICBuOiBkLFxuICAgICAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgICAgICBuMTogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3RBbmROb3RUaW1lc09uZSkoZmFjdG9yLCBEZXJpdmF0aXZlXzEuRGVyaXZhdGl2ZS5vZigoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdE9yTm90KSguLi4oMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucmVtb3ZlTmV3KShwLmZhY3RvcnMsIGZhY3RvcikpLCBkLnJlbGF0aXZlVG8pKVxuICAgICAgICAgICAgfSwgXCJQdWxsIGNvbnN0YW50IGZhY3RvciBmcm9tIGRlcml2YXRpdmVcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxufVxuZXhwb3J0cy5QdWxsQ29uc3RhbnRzRnJvbURlcml2YXRpdmVzID0gUHVsbENvbnN0YW50c0Zyb21EZXJpdmF0aXZlcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RdW90aWVudFJ1bGUgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgRGVyaXZhdGl2ZV8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL0Rlcml2YXRpdmVcIik7XG5jb25zdCBFeHBvbmVudF8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL0V4cG9uZW50XCIpO1xuY29uc3QgRnJhY3Rpb25fMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9GcmFjdGlvblwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9UaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYlwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuY2xhc3MgUXVvdGllbnRSdWxlIGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gZXhwIGluc3RhbmNlb2YgRGVyaXZhdGl2ZV8xLkRlcml2YXRpdmVcbiAgICAgICAgICAgICYmIGV4cC5leHAgaW5zdGFuY2VvZiBGcmFjdGlvbl8xLkZyYWN0aW9uO1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGNvbnN0IGQgPSBleHA7XG4gICAgICAgIGNvbnN0IGEgPSBkLmV4cC5udW1lcmF0b3I7XG4gICAgICAgIGNvbnN0IGIgPSBkLmV4cC5kZW5vbWluYXRvcjtcbiAgICAgICAgcmV0dXJuICgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgbjE6IEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bSkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3QpKERlcml2YXRpdmVfMS5EZXJpdmF0aXZlLm9mKGEsIGQucmVsYXRpdmVUbyksIGIpLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubmVnYXRpdmUpKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5wcm9kdWN0KShhLCBEZXJpdmF0aXZlXzEuRGVyaXZhdGl2ZS5vZihiLCBkLnJlbGF0aXZlVG8pKSkpLCBFeHBvbmVudF8xLkV4cG9uZW50Lm9mKGIsICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDIpKSlcbiAgICAgICAgfSwgXCJRdW90aWVudCBSdWxlXCIpKTtcbiAgICB9XG59XG5leHBvcnRzLlF1b3RpZW50UnVsZSA9IFF1b3RpZW50UnVsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5SZWR1Y2VSZWR1Y2libGVzID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9UaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYlwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuY2xhc3MgUmVkdWNlUmVkdWNpYmxlcyBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGV4cC5pc1JlZHVjaWJsZTtcbiAgICB9XG4gICAgYXBwbHlJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gbmV3IFNldChbbmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgICAgIG4xOiBleHAucmVkdWNlZFxuICAgICAgICAgICAgfSwgXCJSZWR1Y2VkXCIpXSk7XG4gICAgfVxufVxuZXhwb3J0cy5SZWR1Y2VSZWR1Y2libGVzID0gUmVkdWNlUmVkdWNpYmxlcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TdW1Db2VmZmljaWVudHNPZkFkZGVkVGVybXMgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgSW50ZWdlcl8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL0ludGVnZXJcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvUHJvZHVjdFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL1N1bVwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9UaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYlwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuLyoqXG4gKiBUYWtlcyBzdW1zIG9mIHNldmVyYWwgYWRkZWQgcHJvZHVjdHMgYW5kIGNvbWJpbmVzIG9uZXMgdGhhdCBvbmx5XG4gKiBoYXZlIGRpZmZlcmVudCBjb2VmZmljaWVudHMuXG4gKlxuICogYSArIDJhID0gM2FcbiAqIGEgLSAyYSA9IC0xYVxuICovXG5jbGFzcyBTdW1Db2VmZmljaWVudHNPZkFkZGVkVGVybXMgZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAgaW5zdGFuY2VvZiBTdW1fMS5TdW07XG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgY29uc3QgdGVybXMgPSBleHAudGVybXM7XG4gICAgICAgIC8vIFNwbGl0IHRoZSB0ZXJtcyBpbnRvIHByb2R1Y3QgYW5kIG5vdCBwcm9kdWN0c1xuICAgICAgICBjb25zdCBwcm9kdWN0VGVybXMgPSBbXTtcbiAgICAgICAgY29uc3Qgbm9uUHJvZHVjdFRlcm1zID0gW107XG4gICAgICAgIGZvciAoY29uc3QgdGVybSBvZiB0ZXJtcykge1xuICAgICAgICAgICAgaWYgKHRlcm0gaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCAmJiB0ZXJtLmZhY3RvcnNbMF0gaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcikge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUZXJtcy5wdXNoKHRlcm0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9uUHJvZHVjdFRlcm1zLnB1c2godGVybSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gU29ydCB0aGUgcHJvZHVjdCB0ZXJtcyBpbnRvIGdyb3VwcyBvZiBjb21tb24gZmFjdG9yc1xuICAgICAgICBjb25zdCBncm91cHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIGZvciAoY29uc3QgdGVybSBvZiBwcm9kdWN0VGVybXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gdGVybS5mYWN0b3JzWzBdO1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IFsuLi50ZXJtLmZhY3RvcnNdO1xuICAgICAgICAgICAgdGVtcC5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICBjb25zdCBncm91cCA9ICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5wcm9kdWN0T3JOb3QpKC4uLnRlbXApO1xuICAgICAgICAgICAgaWYgKCFncm91cHMuaGFzKGdyb3VwKSlcbiAgICAgICAgICAgICAgICBncm91cHMuc2V0KGdyb3VwLCB7IGNvZWZmaWNpZW50OiBmaXJzdC52YWx1ZSwgbW9yZVRoYW5PbmU6IGZhbHNlIH0pO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBzLmdldChncm91cCkuY29lZmZpY2llbnQgKz0gZmlyc3QudmFsdWU7XG4gICAgICAgICAgICAgICAgZ3JvdXBzLmdldChncm91cCkubW9yZVRoYW5PbmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEZvciBldmVyeSBncm91cCB3aXRoIG1vcmUgdGhhbiBvbmUgcHJvZHVjdCwgcHJvZHVjZSBhIG5ldyBhcmd1bWVudFxuICAgICAgICBjb25zdCBvdXQgPSBuZXcgU2V0KCk7XG4gICAgICAgIGdyb3Vwcy5mb3JFYWNoKChvYmosIGdyb3VwKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9iai5tb3JlVGhhbk9uZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0VGVybXNOb3RDb21iaW5lZCA9IHByb2R1Y3RUZXJtcy5maWx0ZXIodCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IFsuLi50LmZhY3RvcnNdO1xuICAgICAgICAgICAgICAgIHRlbXAuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlcm1XaXRob3V0TGVhZGluZ0NvZWZmaWNpZW50ID0gKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3RPck5vdCkoLi4udGVtcCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdyb3VwICE9PSB0ZXJtV2l0aG91dExlYWRpbmdDb2VmZmljaWVudDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgb3V0LmFkZChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICAgICAgbjE6ICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW1Pck5vdCkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3RBbmROb3RUaW1lc09uZSkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkob2JqLmNvZWZmaWNpZW50KSwgZ3JvdXApLCAuLi5ub25Qcm9kdWN0VGVybXMsIC4uLnByb2R1Y3RUZXJtc05vdENvbWJpbmVkKVxuICAgICAgICAgICAgfSwgXCJDb21iaW5pbmcgbGlrZSB0ZXJtc1wiKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbn1cbmV4cG9ydHMuU3VtQ29lZmZpY2llbnRzT2ZBZGRlZFRlcm1zID0gU3VtQ29lZmZpY2llbnRzT2ZBZGRlZFRlcm1zO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVTdWJzdGl0dXRpb24gPSB2b2lkIDA7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbmNsYXNzIFVTdWJzdGl0dXRpb24gZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTsgLy9leHAgaW5zdGFuY2VvZiBJbnRlZ3JhbFxuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZFwiKTtcbiAgICB9XG59XG5leHBvcnRzLlVTdWJzdGl0dXRpb24gPSBVU3Vic3RpdHV0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRlcml2YXRpdmVUeXBlID0gZXhwb3J0cy5EZXJpdmF0aXZlID0gdm9pZCAwO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvblwiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuL0ludGVnZXJcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi9Qcm9kdWN0XCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi9TdW1cIik7XG4vKipcbiAqXG4gKi9cbmNsYXNzIERlcml2YXRpdmUgZXh0ZW5kcyBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbiB7XG4gICAgc3RhdGljIG9mKGV4cCwgcmVsYXRpdmVUbykge1xuICAgICAgICBjb25zdCBoYXNoID0gZXhwLmhhc2ggKyByZWxhdGl2ZVRvLmhhc2g7XG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZXMuaGFzKGhhc2gpKVxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXMuc2V0KGhhc2gsIG5ldyBEZXJpdmF0aXZlKGV4cCwgcmVsYXRpdmVUbykpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXMuZ2V0KGhhc2gpO1xuICAgIH1cbiAgICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0cnVjdG9yKGV4cCwgcmVsYXRpdmVUbykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmV4cCA9IGV4cDtcbiAgICAgICAgdGhpcy5yZWxhdGl2ZVRvID0gcmVsYXRpdmVUbztcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLmV4cCk7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5yZWxhdGl2ZVRvKTtcbiAgICAgICAgdGhpcy5pc1JlZHVjaWJsZSA9IGZhbHNlOyAvL1RPRE86IERldGVybWluZSBpZiBhIGRlcml2YXRpdmUgaXMgcmVkdWNpYmxlXG4gICAgICAgIHRoaXMuaXNDb25zdGFudCA9IGZhbHNlOyAvLyBUT0RPOiBEZXRlcm1pbmUgaWYgYSBkZXJpdmF0aXZlIGlzIGNvbnN0YW50XG4gICAgICAgIHRoaXMuY2hpbGRDb3VudCA9IDIgKyBleHAuY2hpbGRDb3VudCArIHJlbGF0aXZlVG8uY2hpbGRDb3VudDtcbiAgICAgICAgbGV0IGlzSGVhbHRoeSA9IHRydWU7XG4gICAgICAgIGlmIChleHAuaXNDb25zdGFudClcbiAgICAgICAgICAgIGlzSGVhbHRoeSA9IGZhbHNlO1xuICAgICAgICBpZiAoZXhwIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3QpIHtcbiAgICAgICAgICAgIG5ldyBTZXQoZXhwLmZhY3RvcnMpLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlciB8fCBlIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3QgJiYgZS5pc05lZ2F0aW9uICYmIGUubmVnYXRpb24pXG4gICAgICAgICAgICAgICAgICAgIGlzSGVhbHRoeSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vVE9ETzogVGhlcmUgYXJlIGEgbG90IG1vcmUgcG9zc2libGl0aWVzIHRoYW4gdGhpc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0hlYWx0aHkgPSBpc0hlYWx0aHk7XG4gICAgfVxuICAgIGV4cDtcbiAgICByZWxhdGl2ZVRvO1xuICAgIGdldCByZWR1Y2VkKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLiBOb3Qgc3VyZSBpZiBkZXJpdmF0aXZlcyBzaG91bGQgYmUgcmVkdWNpYmxlLlwiKTtcbiAgICB9XG4gICAgaXNSZWR1Y2libGU7XG4gICAgY2xhc3MgPSBleHBvcnRzLkRlcml2YXRpdmVUeXBlO1xuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCJkL2RcIiArIHRoaXMucmVsYXRpdmVUby50b1N0cmluZygpICsgXCIoXCIgKyB0aGlzLmV4cC50b1N0cmluZygpICsgXCIpXCI7XG4gICAgfVxuICAgIGdldCBoYXNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGFzcyArIHRoaXMuZXhwLmhhc2ggKyB0aGlzLnJlbGF0aXZlVG8uaGFzaDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogMS4gZXhwIGlzbid0IGEgY29uc3RhbnRcbiAgICAgKiAyLiBJZiBleHAgaXMgcHJvZHVjdCwgaXQgY29udGFpbnMgbm8gY29uc3RhbnRzLlxuICAgICAqL1xuICAgIGlzSGVhbHRoeTtcbiAgICB0b01hdGhYTUwoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHdyYXBJZk5lZWRlZChleHApIHtcbiAgICAgICAgICAgIGlmIChleHAuY2xhc3MgPT0gU3VtXzEuU3VtVHlwZSB8fCBleHAuY2xhc3MgPT0gUHJvZHVjdF8xLlByb2R1Y3RUeXBlKVxuICAgICAgICAgICAgICAgIHJldHVybiBcIjxtbz4oPC9tbz5cIiArIGV4cC50b01hdGhYTUwoKSArIFwiPG1vPik8L21vPlwiO1xuICAgICAgICAgICAgcmV0dXJuIGV4cC50b01hdGhYTUwoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCI8bWZyYWM+PG1uPmQ8L21uPjxtcm93Pjxtbj5kPC9tbj5cIiArIHdyYXBJZk5lZWRlZCh0aGlzLnJlbGF0aXZlVG8pICsgXCI8L21yb3c+PC9tZnJhYz5cIiArIHdyYXBJZk5lZWRlZCh0aGlzLmV4cCk7XG4gICAgfVxuICAgIGlzQ29uc3RhbnQ7XG4gICAgY2hpbGRDb3VudDtcbn1cbmV4cG9ydHMuRGVyaXZhdGl2ZSA9IERlcml2YXRpdmU7XG5leHBvcnRzLkRlcml2YXRpdmVUeXBlID0gXCJEZXJpdmF0aXZlXCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXhwb25lbnRUeXBlID0gZXhwb3J0cy5FeHBvbmVudCA9IHZvaWQgMDtcbmNvbnN0IE1hdGhNTEhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuLi91dGlsL01hdGhNTEhlbHBlcnNcIik7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uXCIpO1xuY29uc3QgSW50ZWdlcl8xID0gcmVxdWlyZShcIi4vSW50ZWdlclwiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuL1Byb2R1Y3RcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuL1N1bVwiKTtcbmNsYXNzIEV4cG9uZW50IGV4dGVuZHMgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24ge1xuICAgIHN0YXRpYyBvZihiYXNlLCBwb3dlcikge1xuICAgICAgICBjb25zdCBoYXNoID0gYmFzZS5oYXNoICsgcG93ZXIuaGFzaDtcbiAgICAgICAgaWYgKCFFeHBvbmVudC5pbnN0YW5jZXMuaGFzKGhhc2gpKSB7XG4gICAgICAgICAgICBFeHBvbmVudC5pbnN0YW5jZXMuc2V0KGhhc2gsIG5ldyBFeHBvbmVudChiYXNlLCBwb3dlcikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBFeHBvbmVudC5pbnN0YW5jZXMuZ2V0KGhhc2gpO1xuICAgIH1cbiAgICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IE1hcCgpO1xuICAgIGNsYXNzID0gZXhwb3J0cy5FeHBvbmVudFR5cGU7XG4gICAgdG9NYXRoWE1MKCkge1xuICAgICAgICBmdW5jdGlvbiB3cmFwSWZOZWVkZWQoZXhwKSB7XG4gICAgICAgICAgICBpZiAoZXhwLmNsYXNzID09IFN1bV8xLlN1bVR5cGUgfHwgZXhwLmNsYXNzID09IFByb2R1Y3RfMS5Qcm9kdWN0VHlwZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gKDAsIE1hdGhNTEhlbHBlcnNfMS5pblJvdykoKDAsIE1hdGhNTEhlbHBlcnNfMS5pblBhcmVuKShleHAudG9NYXRoWE1MKCkpKTtcbiAgICAgICAgICAgIHJldHVybiBleHAudG9NYXRoWE1MKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiPG1zdXA+XCIgKyB3cmFwSWZOZWVkZWQodGhpcy5iYXNlKSArICgwLCBNYXRoTUxIZWxwZXJzXzEuaW5Sb3cpKHRoaXMucG93ZXIudG9NYXRoWE1MKCkpICsgXCI8L21zdXA+XCI7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCIoXCIgKyB0aGlzLmJhc2UgKyBcIileKFwiICsgdGhpcy5wb3dlciArIFwiKVwiO1xuICAgIH1cbiAgICBnZXQgaGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIFwiRXhwb25lbnRcIiArIHRoaXMuYmFzZS5oYXNoICsgdGhpcy5wb3dlci5oYXNoO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcihiYXNlLCBwb3dlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmJhc2UgPSBiYXNlO1xuICAgICAgICB0aGlzLnBvd2VyID0gcG93ZXI7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5iYXNlKTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLnBvd2VyKTtcbiAgICAgICAgLy8gVGhlIGludGVnZXJzIGFyZSBjbG9zZWQgb3ZlciBleHBvbmVudGlhdGlvblxuICAgICAgICB0aGlzLmlzUmVkdWNpYmxlID0gKGJhc2UuaXNSZWR1Y2libGVPckludCkgJiYgKHBvd2VyLmlzUmVkdWNpYmxlT3JJbnQpICYmIE1hdGgucG93KGJhc2UucmVkdWNlZC52YWx1ZSwgcG93ZXIucmVkdWNlZC52YWx1ZSkgJSAxID09IDA7XG4gICAgICAgIHRoaXMuaXNIZWFsdGh5ID0gIXRoaXMuaXNSZWR1Y2libGU7XG4gICAgICAgIHRoaXMuaXNDb25zdGFudCA9IGJhc2UuaXNDb25zdGFudCAmJiBwb3dlci5pc0NvbnN0YW50O1xuICAgICAgICB0aGlzLmNoaWxkQ291bnQgPSAyICsgYmFzZS5jaGlsZENvdW50ICsgcG93ZXIuY2hpbGRDb3VudDtcbiAgICB9XG4gICAgYmFzZTtcbiAgICBwb3dlcjtcbiAgICBpc1JlZHVjaWJsZTtcbiAgICBpc0hlYWx0aHk7XG4gICAgZ2V0IHJlZHVjZWQoKSB7XG4gICAgICAgIHJldHVybiBJbnRlZ2VyXzEuSW50ZWdlci5vZihNYXRoLnBvdyh0aGlzLmJhc2UucmVkdWNlZC52YWx1ZSwgdGhpcy5wb3dlci5yZWR1Y2VkLnZhbHVlKSk7XG4gICAgfVxuICAgIGlzQ29uc3RhbnQ7XG4gICAgY2hpbGRDb3VudDtcbn1cbmV4cG9ydHMuRXhwb25lbnQgPSBFeHBvbmVudDtcbmV4cG9ydHMuRXhwb25lbnRUeXBlID0gXCJFeHBvbmVudFwiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkV4cHJlc3Npb24gPSB2b2lkIDA7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi9JbnRlZ2VyXCIpO1xuY29uc3QgTWF0aEVsZW1lbnRfMSA9IHJlcXVpcmUoXCIuL01hdGhFbGVtZW50XCIpO1xuLyoqXG4gKiBCYXNlIG9mIGFsbCBtYXRoZW1hdGljYWwgZXhwcmVzc2lvbnMuXG4gKiBBbGwgY2hpbGRyZW4gc2hvdWxkIGltcGxlbWVudCBmbHktd2hlZWwgcGF0dGVybi5cbiAqIEFsbCBjaGlsZHJlbiBzaG91bGQgYmUgaW1tdXRhYmxlLlxuICovXG5jbGFzcyBFeHByZXNzaW9uIGV4dGVuZHMgTWF0aEVsZW1lbnRfMS5NYXRoRWxlbWVudCB7XG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgZXhwcmVzc2lvbiBpcyByZWR1Y2libGUgb3IgaXMgYW4gaW50ZWdlci5cbiAgICAgKi9cbiAgICBnZXQgaXNSZWR1Y2libGVPckludCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNSZWR1Y2libGUgfHwgdGhpcy5jbGFzcyA9PSBJbnRlZ2VyXzEuSW50ZWdlclR5cGU7XG4gICAgfVxufVxuZXhwb3J0cy5FeHByZXNzaW9uID0gRXhwcmVzc2lvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5GcmFjdGlvblR5cGUgPSBleHBvcnRzLkZyYWN0aW9uID0gdm9pZCAwO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvblwiKTtcbmNsYXNzIEZyYWN0aW9uIGV4dGVuZHMgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24ge1xuICAgIHN0YXRpYyBvZihudW1lcmF0b3IsIGRlbm9taW5hdG9yKSB7XG4gICAgICAgIGNvbnN0IGhhc2ggPSBudW1lcmF0b3IuaGFzaCArIGRlbm9taW5hdG9yLmhhc2g7XG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZS5oYXMoaGFzaCkpXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNldChoYXNoLCBuZXcgRnJhY3Rpb24obnVtZXJhdG9yLCBkZW5vbWluYXRvcikpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5nZXQoaGFzaCk7XG4gICAgfVxuICAgIHN0YXRpYyBpbnN0YW5jZSA9IG5ldyBNYXAoKTtcbiAgICBjb25zdHJ1Y3RvcihudW0sIGRlbm9tKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubnVtZXJhdG9yID0gbnVtO1xuICAgICAgICB0aGlzLmRlbm9taW5hdG9yID0gZGVub207XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5udW1lcmF0b3IpO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMuZGVub21pbmF0b3IpO1xuICAgICAgICAvKlxuICAgICAgICBBIGZyYWN0aW9uIGlzIHJlZHVjaWJsZSBpZiB0aGUgZGVub20gfCBudW0uXG4gICAgICAgICAgICA8PT4gbnVtID0gayAqIGRlbm9tIHdoZXJlIGsgaXMgYW4gaW50ZWdlci5cblxuICAgICAgICBUaGlzIG1ha2VzIHByb3ZpbmcgcmVkdWNpYmlsaXR5IGhhcmQuXG4gICAgICAgIFRPRE86IERlY2lkZSBpZiBpdCdzIHdvcnRoIGltcGxlbWVudGluZyByZWR1Y2liaWxpdHkgZm9yIEZyYWN0aW9uc1xuICAgICAgICAqL1xuICAgICAgICB0aGlzLmlzUmVkdWNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNIZWFsdGh5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0NvbnN0YW50ID0gbnVtLmlzQ29uc3RhbnQgJiYgZGVub20uaXNDb25zdGFudDtcbiAgICAgICAgdGhpcy5jaGlsZENvdW50ID0gMiArIG51bS5jaGlsZENvdW50ICsgZGVub20uY2hpbGRDb3VudDtcbiAgICB9XG4gICAgbnVtZXJhdG9yO1xuICAgIGRlbm9taW5hdG9yO1xuICAgIGdldCByZWR1Y2VkKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgaXNSZWR1Y2libGU7XG4gICAgY2xhc3MgPSBleHBvcnRzLkZyYWN0aW9uVHlwZTtcbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtZXJhdG9yLnRvU3RyaW5nKCkgKyBcIiAvIFwiICsgdGhpcy5kZW5vbWluYXRvci50b1N0cmluZygpO1xuICAgIH1cbiAgICBnZXQgaGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIGV4cG9ydHMuRnJhY3Rpb25UeXBlICsgdGhpcy5udW1lcmF0b3IuaGFzaCArIHRoaXMuZGVub21pbmF0b3IuaGFzaDtcbiAgICB9XG4gICAgaXNIZWFsdGh5O1xuICAgIGlzQ29uc3RhbnQ7XG4gICAgdG9NYXRoWE1MKCkge1xuICAgICAgICByZXR1cm4gXCI8bWZyYWM+PG1yb3c+XCIgKyB0aGlzLm51bWVyYXRvci50b01hdGhYTUwoKSArIFwiPC9tcm93Pjxtcm93PlwiICsgdGhpcy5kZW5vbWluYXRvci50b01hdGhYTUwoKSArIFwiPC9tcm93PjwvbWZyYWM+XCI7XG4gICAgfVxuICAgIGNoaWxkQ291bnQ7XG59XG5leHBvcnRzLkZyYWN0aW9uID0gRnJhY3Rpb247XG5leHBvcnRzLkZyYWN0aW9uVHlwZSA9IFwiRnJhY3Rpb25cIjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JbnRlZ2VyVHlwZSA9IGV4cG9ydHMuSW50ZWdlciA9IHZvaWQgMDtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4uL3V0aWwvYXNzZXJ0XCIpO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvblwiKTtcbi8qKlxuICogSW50ZWdlclxuICogUG9zaXRpdmUgb3IgbmVnYXRpdmVcbiAqL1xuY2xhc3MgSW50ZWdlciBleHRlbmRzIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uIHtcbiAgICBzdGF0aWMgb2YodmFsdWUpIHtcbiAgICAgICAgaWYgKCFJbnRlZ2VyLmluc3RhbmNlcy5oYXModmFsdWUpKSB7XG4gICAgICAgICAgICBJbnRlZ2VyLmluc3RhbmNlcy5zZXQodmFsdWUsIG5ldyBJbnRlZ2VyKHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEludGVnZXIuaW5zdGFuY2VzLmdldCh2YWx1ZSk7XG4gICAgfVxuICAgIHN0YXRpYyBpbnN0YW5jZXMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLnZhbHVlICUgMSA9PSAwLCBcIkNyZWF0aW5nIG5vbi1pbnRlZ2VyIGludGVnZXIgXCIgKyB0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMgQSBwb3NpdGl2ZSB2ZXJzaW9uIG9mIHRoaXMgaW50ZWdlci5cbiAgICAgKi9cbiAgICBidXRQb3NpdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIEludGVnZXIub2YoTWF0aC5hYnModGhpcy52YWx1ZSkpO1xuICAgIH1cbiAgICBjbGFzcyA9IGV4cG9ydHMuSW50ZWdlclR5cGU7XG4gICAgdG9NYXRoWE1MKCkge1xuICAgICAgICByZXR1cm4gXCI8bW4+XCIgKyB0aGlzLnZhbHVlICsgXCI8L21uPlwiO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIgKyB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICBnZXQgaGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIFwiTnVtYmVyRXhwXCIgKyB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICB2YWx1ZTtcbiAgICBpc1JlZHVjaWJsZSA9IGZhbHNlO1xuICAgIGdldCByZWR1Y2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaXNIZWFsdGh5ID0gdHJ1ZTtcbiAgICBpc0NvbnN0YW50ID0gdHJ1ZTtcbiAgICBjaGlsZENvdW50ID0gMDtcbn1cbmV4cG9ydHMuSW50ZWdlciA9IEludGVnZXI7XG5leHBvcnRzLkludGVnZXJUeXBlID0gXCJJbnRlZ2VyXCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSW50ZWdyYWxUeXBlID0gZXhwb3J0cy5JbnRlZ3JhbCA9IHZvaWQgMDtcbmNvbnN0IE1hdGhNTEhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuLi91dGlsL01hdGhNTEhlbHBlcnNcIik7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4vUHJvZHVjdFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4vU3VtXCIpO1xuLyoqXG4gKiBBbiBpbmRlZmluYXRlIGludGVncmFsIChmb3Igbm93KS5cbiAqIFRPRE86IFNob3VsZCB3ZSBzZXBhcmF0ZSBkZWZpbmF0ZS9pbmRlZmluYXRlIGludGVncmFscz9cbiAqL1xuY2xhc3MgSW50ZWdyYWwgZXh0ZW5kcyBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbiB7XG4gICAgc3RhdGljIG9mKGludGVncmFuZCwgcmVsYXRpdmVUbykge1xuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2VzLmhhcyhpbnRlZ3JhbmQuaGFzaCArIHJlbGF0aXZlVG8uaGFzaCkpXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlcy5zZXQoaW50ZWdyYW5kLmhhc2ggKyByZWxhdGl2ZVRvLmhhc2gsIG5ldyBJbnRlZ3JhbChpbnRlZ3JhbmQsIHJlbGF0aXZlVG8pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzLmdldChpbnRlZ3JhbmQuaGFzaCArIHJlbGF0aXZlVG8uaGFzaCk7XG4gICAgfVxuICAgIHN0YXRpYyBpbnN0YW5jZXMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3RydWN0b3IoaW50ZWdyYW5kLCByZWxhdGl2ZVRvKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaW50ZWdyYW5kID0gaW50ZWdyYW5kO1xuICAgICAgICB0aGlzLnJlbGF0aXZlVG8gPSByZWxhdGl2ZVRvO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMuaW50ZWdyYW5kKTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLnJlbGF0aXZlVG8pO1xuICAgICAgICB0aGlzLmlzUmVkdWNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNIZWFsdGh5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0NvbnN0YW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hpbGRDb3VudCA9IDIgKyBpbnRlZ3JhbmQuY2hpbGRDb3VudCArIHJlbGF0aXZlVG8uY2hpbGRDb3VudDtcbiAgICB9XG4gICAgaW50ZWdyYW5kO1xuICAgIHJlbGF0aXZlVG87XG4gICAgZ2V0IHJlZHVjZWQoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuIE5vdCBzdXJlIGhvdyB0aGlzIHdvcmtzIHdpdGggSW50ZWdyYWxzLlwiKTtcbiAgICB9XG4gICAgaXNSZWR1Y2libGU7XG4gICAgY2xhc3MgPSBleHBvcnRzLkludGVncmFsVHlwZTtcbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwi4oirXCIgKyB0aGlzLmludGVncmFuZC50b1N0cmluZygpO1xuICAgIH1cbiAgICBnZXQgaGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIFwi4oirXCIgKyB0aGlzLmludGVncmFuZC50b1N0cmluZygpICsgdGhpcy5yZWxhdGl2ZVRvLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlzSGVhbHRoeTtcbiAgICBpc0NvbnN0YW50O1xuICAgIHRvTWF0aFhNTCgpIHtcbiAgICAgICAgZnVuY3Rpb24gd3JhcElmTmVlZGVkKGV4cCkge1xuICAgICAgICAgICAgaWYgKGV4cC5jbGFzcyA9PSBTdW1fMS5TdW1UeXBlIHx8IGV4cC5jbGFzcyA9PSBQcm9kdWN0XzEuUHJvZHVjdFR5cGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuICgwLCBNYXRoTUxIZWxwZXJzXzEuaW5QYXJlbikoZXhwLnRvTWF0aFhNTCgpKTtcbiAgICAgICAgICAgIHJldHVybiBleHAudG9NYXRoWE1MKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiPG1yb3c+PG1vPuKIqzwvbW8+XCIgKyB3cmFwSWZOZWVkZWQodGhpcy5pbnRlZ3JhbmQpICsgXCI8bW4+ZDwvbW4+XCIgKyB3cmFwSWZOZWVkZWQodGhpcy5yZWxhdGl2ZVRvKSArIFwiPC9tcm93PlwiO1xuICAgIH1cbiAgICBjaGlsZENvdW50O1xufVxuZXhwb3J0cy5JbnRlZ3JhbCA9IEludGVncmFsO1xuZXhwb3J0cy5JbnRlZ3JhbFR5cGUgPSBcIkludGVncmFsXCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWF0aEVsZW1lbnQgPSB2b2lkIDA7XG4vKipcbiAqIENhbiBiZSBleHByZXNzZWQgd2l0aCBNYXRoTUxcbiAqL1xuY2xhc3MgTWF0aEVsZW1lbnQge1xufVxuZXhwb3J0cy5NYXRoRWxlbWVudCA9IE1hdGhFbGVtZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmZhY3Rvck9yZGVyID0gZXhwb3J0cy5Qcm9kdWN0VHlwZSA9IGV4cG9ydHMuUHJvZHVjdCA9IHZvaWQgMDtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4uL3V0aWwvYXNzZXJ0XCIpO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvblwiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuL0ludGVnZXJcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuL1N1bVwiKTtcbi8qKlxuICogQSBtYXRoZW1hdGljYWwgcHJvZHVjdCB3aXRoIDIgb3IgbW9yZSBmYWN0b3JzLlxuICovXG5jbGFzcyBQcm9kdWN0IGV4dGVuZHMgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24ge1xuICAgIC8qKlxuICAgICAqIEZvciBlZmZpY2llbmN5LCBwcm9kdWN0cyBhcmUgY29tcGFyZWQgYnkgcmVmZXJlbmNlLlxuICAgICAqIEhlcmUgd2UgZW5zdXJlID09PSA8PT4gPT1cbiAgICAgKiBAcGFyYW0gZmFjdG9yc1xuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgc3RhdGljIG9mKGZhY3RvcnMpIHtcbiAgICAgICAgY29uc3QgaGFzaCA9IGZhY3RvcnMubWFwKGUgPT4gZS5oYXNoKS5qb2luKFwiXCIpO1xuICAgICAgICBpZiAoIVByb2R1Y3QuaW5zdGFuY2VzLmhhcyhoYXNoKSlcbiAgICAgICAgICAgIFByb2R1Y3QuaW5zdGFuY2VzLnNldChoYXNoLCBuZXcgUHJvZHVjdChmYWN0b3JzKSk7XG4gICAgICAgIHJldHVybiBQcm9kdWN0Lmluc3RhbmNlcy5nZXQoaGFzaCk7XG4gICAgfVxuICAgIHN0YXRpYyBpbnN0YW5jZXMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3RydWN0b3IoZmFjdG9ycykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KShmYWN0b3JzLmxlbmd0aCA+PSAyLCBcIkNyZWF0aW5nIHByb2R1Y3Qgd2l0aCBsZXNzIHRoYW4gMiBmYWN0b3JzLlwiKTtcbiAgICAgICAgdGhpcy5mYWN0b3JzID0gZmFjdG9ycztcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLmZhY3RvcnMpO1xuICAgICAgICBsZXQgcmVkdWNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mYWN0b3JzLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgICByZWR1Y2libGUgJiY9IGYuaXNSZWR1Y2libGUgfHwgZi5jbGFzcyA9PSBJbnRlZ2VyXzEuSW50ZWdlclR5cGU7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUaGUgaW50ZWdlcnMgYXJlIGNsb3NlZCBvdmVyIG11bHRpcGxpY2F0aW9uXG4gICAgICAgIHRoaXMuaXNSZWR1Y2libGUgPSByZWR1Y2libGU7XG4gICAgICAgIGxldCBoZWFsdGh5ID0gdHJ1ZTtcbiAgICAgICAgaGVhbHRoeSAmJj0gdGhpcy5udW1OZWdhdGl2ZXMoKSA8IDI7XG4gICAgICAgIHRoaXMuaXNIZWFsdGh5ID0gaGVhbHRoeTtcbiAgICAgICAgbGV0IGlzTmVnYXRpb24gPSBmYWN0b3JzLmxlbmd0aCA9PSAyO1xuICAgICAgICBpc05lZ2F0aW9uICYmPSBmYWN0b3JzLmZpbHRlcihlID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIgJiYgZS52YWx1ZSA9PSAtMTtcbiAgICAgICAgfSkubGVuZ3RoID09IDE7XG4gICAgICAgIHRoaXMuaXNOZWdhdGlvbiA9IGlzTmVnYXRpb247XG4gICAgICAgIHRoaXMuaXNDb25zdGFudCA9IHRoaXMuZmFjdG9ycy5tYXAoZiA9PiBmLmlzQ29uc3RhbnQpLnJlZHVjZSgoYSwgYikgPT4gYSAmJiBiKTtcbiAgICAgICAgdGhpcy5jaGlsZENvdW50ID0gZmFjdG9ycy5sZW5ndGggKyBmYWN0b3JzLm1hcChmID0+IGYuY2hpbGRDb3VudCkucmVkdWNlKChhLCBiKSA9PiBhICsgYikgLSAodGhpcy5pc05lZ2F0aW9uID8gMSA6IDApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoaXMgcHJvZHVjdCBpcyBqdXN0XG4gICAgICogLTEgKiBhbm90aGVyIGV4cHJlc3Npb24uXG4gICAgICovXG4gICAgaXNOZWdhdGlvbjtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHZhbHVlIHRoYXQgdGhpcyBwcm9kdWN0IGlzIG5lZ2F0aW5nXG4gICAgICogLTEgKiBleHAgcmV0dXJucyBleHAuXG4gICAgICogQHRocm93cyBpZiBwcm9kdWN0IGlzbid0IGEgbmVnYXRpb24uXG4gICAgICovXG4gICAgZ2V0IG5lZ2F0aW9uKCkge1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLmlzTmVnYXRpb24sIFwiVHJ5aW5nIHRvIGdldCBuZWdhdGlvbiBmcm9tIG5vbi1uZWdhdGluZyBzdW1cIik7XG4gICAgICAgIGlmICh0aGlzLmZhY3RvcnNbMF0uY2xhc3MgPT0gSW50ZWdlcl8xLkludGVnZXJUeXBlICYmIHRoaXMuZmFjdG9yc1swXS52YWx1ZSA9PSAtMSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZhY3RvcnNbMV07XG4gICAgICAgIHJldHVybiB0aGlzLmZhY3RvcnNbMF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBuZXcgRXhwcmVzc2lvbiB3aXRob3V0IHRoZSBnaXZlbiBmYWN0b3IuXG4gICAgICogSWYgdGhlIHByb2R1Y3QgY29udGFpbnMgdGhlIGZhY3RvciBtdWx0aXBsZSB0aW1lcyxcbiAgICAgKiBvbmx5IHJlbW92ZXMgb25lLiBJZiBpdCBkb2Vzbid0IGNvbnRhaW4gdGhlIGZhY3RvcixcbiAgICAgKiByZXR1cm5zIGl0c2VsZi5cbiAgICAgKiBAcGFyYW0gZXhwIEEgZmFjdG9yIGluIHRoaXMgcHJvZHVjdC5cbiAgICAgKi9cbiAgICB3aXRob3V0KGV4cCkge1xuICAgICAgICBjb25zdCBuZXdGYWN0b3JzID0gWy4uLnRoaXMuZmFjdG9yc107XG4gICAgICAgIGNvbnN0IGluZGV4ID0gbmV3RmFjdG9ycy5maW5kSW5kZXgoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IGV4cDtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpbmRleCA9PSAtMSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBuZXdGYWN0b3JzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGlmIChuZXdGYWN0b3JzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXdGYWN0b3JzWzBdOyAvLyBHYXVyYW50ZWVkIHRoZXJlJ3Mgb25lIHRlcm0gaGVyZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9kdWN0Lm9mKG5ld0ZhY3RvcnMpO1xuICAgIH1cbiAgICB0b01hdGhYTUwoKSB7XG4gICAgICAgIGxldCBvdXQgPSBcIlwiO1xuICAgICAgICBmdW5jdGlvbiB3cmFwSWZOZWVkZWQoZXhwKSB7XG4gICAgICAgICAgICBpZiAoZXhwLmNsYXNzID09IGV4cG9ydHMuUHJvZHVjdFR5cGUgfHwgZXhwLmNsYXNzID09IFN1bV8xLlN1bVR5cGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPG1vPig8L21vPlwiICsgZXhwLnRvTWF0aFhNTCgpICsgXCI8bW8+KTwvbW8+XCI7XG4gICAgICAgICAgICByZXR1cm4gZXhwLnRvTWF0aFhNTCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVpdGhlciB0aGlzIGlzIGEgbmVnYXRpb24sIG9yIGEgbGlzdCBvZiBwcm9kdWN0c1xuICAgICAgICAvLyBGaXJzdCB0aGUgbmVnYXRpb24gY2FzZS4uLlxuICAgICAgICBpZiAodGhpcy5pc05lZ2F0aW9uKSB7XG4gICAgICAgICAgICBvdXQgKz0gXCI8bW8+LTwvbW8+XCI7XG4gICAgICAgICAgICBvdXQgKz0gd3JhcElmTmVlZGVkKHRoaXMubmVnYXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBpdCdzIGEgbGlzdCBvZiBwcm9kdWN0cy4uLlxuICAgICAgICBjb25zdCBmaXJzdEZhY3RvciA9IHRoaXMuZmFjdG9yc1swXTtcbiAgICAgICAgb3V0ICs9IHdyYXBJZk5lZWRlZChmaXJzdEZhY3Rvcik7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5mYWN0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZmFjdG9yID0gdGhpcy5mYWN0b3JzW2ldO1xuICAgICAgICAgICAgbGV0IG5lZWRzRG90ID0gKGZhY3Rvci5jbGFzcyA9PSBJbnRlZ2VyXzEuSW50ZWdlclR5cGUgJiYgdGhpcy5mYWN0b3JzW2kgLSAxXS5jbGFzcyA9PSBJbnRlZ2VyXzEuSW50ZWdlclR5cGUpXG4gICAgICAgICAgICAgICAgfHwgKGZhY3RvciBpbnN0YW5jZW9mIFByb2R1Y3QgJiYgZmFjdG9yLmlzTmVnYXRpb24pIC8vIElmIHRoZXJlJ3MgYSBuZWdhdGl2ZSBzaWduLCBnZXQgYSBkb3RcbiAgICAgICAgICAgICAgICB8fCAoZmFjdG9yIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIgJiYgZmFjdG9yLnZhbHVlIDwgMSk7XG4gICAgICAgICAgICBpZiAobmVlZHNEb3QpXG4gICAgICAgICAgICAgICAgb3V0ICs9IFwiPG1vPsK3PC9tbz5cIjtcbiAgICAgICAgICAgIG91dCArPSB3cmFwSWZOZWVkZWQoZmFjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyBOdW1iZXIgb2YgbmVnYXRpdmUgaW50ZWdlciBwcm9kdWN0cy5cbiAgICAgKi9cbiAgICBudW1OZWdhdGl2ZXMoKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIHRoaXMuZmFjdG9ycy5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgICAgaWYgKGYgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcilcbiAgICAgICAgICAgICAgICBpZiAoZi52YWx1ZSA8IDApXG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBsZXQgb3V0ID0gXCJcIjtcbiAgICAgICAgZm9yIChjb25zdCBleHAgb2YgdGhpcy5mYWN0b3JzKSB7XG4gICAgICAgICAgICBpZiAoZXhwIGluc3RhbmNlb2YgUHJvZHVjdCkge1xuICAgICAgICAgICAgICAgIG91dCArPSBcIihcIiArIGV4cC50b1N0cmluZygpICsgXCIpXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXQgKz0gZXhwLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXQgKz0gXCLCt1wiO1xuICAgICAgICB9XG4gICAgICAgIG91dCA9IG91dC5zdWJzdHJpbmcoMCwgb3V0Lmxlbmd0aCAtIDEpO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICBnZXQgaGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIFwiUHJvZHVjdFwiICsgdGhpcy5mYWN0b3JzLm1hcChlID0+IGUuaGFzaCkuam9pbigpO1xuICAgIH1cbiAgICAvLyBBdCBsZWFzdCAyIGVsZW1lbnRzLCBvcmRlciBtYXR0ZXJzXG4gICAgZmFjdG9ycztcbiAgICBjbGFzcyA9IGV4cG9ydHMuUHJvZHVjdFR5cGU7XG4gICAgaXNSZWR1Y2libGU7XG4gICAgZ2V0IHJlZHVjZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZhY3RvcnMubWFwKGUgPT4gZS5yZWR1Y2VkKS5yZWR1Y2UoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBJbnRlZ2VyXzEuSW50ZWdlci5vZihhLnJlZHVjZWQudmFsdWUgKiBiLnJlZHVjZWQudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT25seSAxIG5lZ2F0aXZlIGludGVnZXJcbiAgICAgKiBJbnRlZ2VyIGZhY3RvcnMgYXJlIGZpcnN0XG4gICAgICogTm8gZmFjdG9yIGVxdWFscyAxXG4gICAgICovXG4gICAgaXNIZWFsdGh5O1xuICAgIGlzQ29uc3RhbnQ7XG4gICAgY2hpbGRDb3VudDtcbn1cbmV4cG9ydHMuUHJvZHVjdCA9IFByb2R1Y3Q7XG5leHBvcnRzLlByb2R1Y3RUeXBlID0gXCJQcm9kdWN0XCI7XG4vKipcbiAqIENhbiBiZSB1c2VkIGluIGFycmF5LnNvcnQoKSB0byBnZXQgcHJvcGVybHkgb3JkZXJlZCBwcm9kdWN0cy5cbiAqXG4gKiBAcGFyYW0gYVxuICogQHBhcmFtIGJcbiAqIEByZXR1cm5zIFBvc2l0aXZlIGlmIGEgc2hvdWxkIGJlIGFmdGVyIGJcbiAqL1xuZnVuY3Rpb24gZmFjdG9yT3JkZXIoYSwgYikge1xuICAgIGlmIChhIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIgJiYgYiBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAoYSBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKSB7XG4gICAgICAgIHJldHVybiBhRmlyc3Q7XG4gICAgfVxuICAgIHJldHVybiAwO1xufVxuZXhwb3J0cy5mYWN0b3JPcmRlciA9IGZhY3Rvck9yZGVyO1xuY29uc3QgYUZpcnN0ID0gMTtcbmNvbnN0IGFBZnRlciA9IC0xO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm9yZGVyVGVybXMgPSBleHBvcnRzLlN1bVR5cGUgPSBleHBvcnRzLlN1bSA9IHZvaWQgMDtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4uL3V0aWwvYXNzZXJ0XCIpO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvblwiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuL0ludGVnZXJcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi9Qcm9kdWN0XCIpO1xuY29uc3QgVmFyaWFibGVfMSA9IHJlcXVpcmUoXCIuL1ZhcmlhYmxlXCIpO1xuLyoqXG4gKiBFeHByZXNzaW9uIHJlcHJlc2VudGluZyB0aGUgc3VtIG9mIDIgb3IgbW9yZSB0ZXJtcy5cbiAqL1xuY2xhc3MgU3VtIGV4dGVuZHMgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24ge1xuICAgIC8qKlxuICAgICAqIEZhY3RvcnkgbWV0aG9kIGNvbnNudHJ1Y3Rvci5cbiAgICAgKiBAcGFyYW0gdGVybXMgQ29udGFpbnMgYXQgbGVhc3QgMiBlbGVtZW50c1xuICAgICAqL1xuICAgIHN0YXRpYyBvZih0ZXJtcykge1xuICAgICAgICBjb25zdCBoYXNoID0gdGVybXMubWFwKHQgPT4gdC5oYXNoKS5qb2luKFwiXCIpO1xuICAgICAgICBpZiAoIVN1bS5pbnN0YW5jZXMuaGFzKGhhc2gpKSB7XG4gICAgICAgICAgICBTdW0uaW5zdGFuY2VzLnNldChoYXNoLCBuZXcgU3VtKHRlcm1zKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFN1bS5pbnN0YW5jZXMuZ2V0KGhhc2gpO1xuICAgIH1cbiAgICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0cnVjdG9yKHRlcm1zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRlcm1zLmxlbmd0aCA+PSAyLCBcIkNyZWF0aW5nIHN1bSB3aXRoIGxlc3MgdGhhbiAyIHRlcm1zLlwiKTtcbiAgICAgICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICAgICAgICB0aGlzLmlzUmVkdWNpYmxlID0gdGhpcy50ZXJtcy5tYXAodCA9PiB0LmlzUmVkdWNpYmxlIHx8IHQuY2xhc3MgPT0gSW50ZWdlcl8xLkludGVnZXJUeXBlKS5yZWR1Y2UoKGEsIGIpID0+IGEgJiYgYik7XG4gICAgICAgIHRoaXMuaXNIZWFsdGh5ID0gdGhpcy5kZXRlcm1pbmVIZWFsdGgoKTtcbiAgICAgICAgdGhpcy5pc0NvbnN0YW50ID0gdGhpcy50ZXJtcy5tYXAodCA9PiB0LmlzQ29uc3RhbnQpLnJlZHVjZSgoYSwgYikgPT4gYSAmJiBiKTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLnRlcm1zKTtcbiAgICAgICAgdGhpcy5jaGlsZENvdW50ID0gdGVybXMubGVuZ3RoICsgdGVybXMubWFwKHQgPT4gdC5jaGlsZENvdW50KS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIG5ldyBFeHByZXNzaW9uIHdpdGhvdXQgdGhlIGdpdmVuIHRlcm0uXG4gICAgICogSWYgdGhlIHN1bSBjb250YWlucyB0aGUgdGVybSBtdWx0aXBsZSB0aW1lcyxcbiAgICAgKiBvbmx5IHJlbW92ZXMgb25lLiBJZiBpdCBkb2Vzbid0IGNvbnRhaW4gdGhlIHRlcm0sXG4gICAgICogcmV0dXJucyBpdHNlbGYuXG4gICAgICogQHBhcmFtIHRlcm0gQSB0ZXJtIGluIHRoaXMgc3VtLlxuICAgICAqL1xuICAgIHdpdGhvdXQodGVybSkge1xuICAgICAgICBjb25zdCBuZXdUZXJtcyA9IFsuLi50aGlzLnRlcm1zXTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBuZXdUZXJtcy5maW5kSW5kZXgoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IHRlcm07XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5kZXggPT0gLTEpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgbmV3VGVybXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgaWYgKG5ld1Rlcm1zLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXdUZXJtc1swXTsgLy8gR2F1cmFudGVlZCB0aGVyZSdzIG9uZSB0ZXJtIGhlcmVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU3VtLm9mKG5ld1Rlcm1zKTtcbiAgICB9XG4gICAgdG9NYXRoWE1MKCkge1xuICAgICAgICBmdW5jdGlvbiB3cmFwSWZOZWVkZWQoZXhwKSB7XG4gICAgICAgICAgICBpZiAoZXhwLmNsYXNzID09IGV4cG9ydHMuU3VtVHlwZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8bW8+KDwvbW8+XCIgKyBleHAudG9NYXRoWE1MKCkgKyBcIjxtbz4pPC9tbz5cIjtcbiAgICAgICAgICAgIHJldHVybiBleHAudG9NYXRoWE1MKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG91dCA9IHdyYXBJZk5lZWRlZCh0aGlzLnRlcm1zWzBdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLnRlcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtc1tpXTtcbiAgICAgICAgICAgIC8vIFN1YnRyYWN0IG5lZ2F0aXZlIHRlcm1zIGluc3RlYWQgb2YgYWRkaW5nIG5lZ2F0aXZlc1xuICAgICAgICAgICAgaWYgKHRlcm0gaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCAmJiB0ZXJtLmlzTmVnYXRpb24pIHtcbiAgICAgICAgICAgICAgICBvdXQgKz0gXCI8bW8+LTwvbW8+XCIgKyB3cmFwSWZOZWVkZWQodGVybS5uZWdhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0ZXJtIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIgJiYgdGVybS52YWx1ZSA8IDApIHtcbiAgICAgICAgICAgICAgICBvdXQgKz0gXCI8bW8+LTwvbW8+XCIgKyB3cmFwSWZOZWVkZWQodGVybS5idXRQb3NpdGl2ZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dCArPSBcIjxtbz4rPC9tbz5cIiArIHdyYXBJZk5lZWRlZCh0aGlzLnRlcm1zW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgbGV0IG91dCA9IFwiXCI7XG4gICAgICAgIGZvciAoY29uc3QgZXhwIG9mIHRoaXMudGVybXMpIHtcbiAgICAgICAgICAgIG91dCArPSBleHAudG9TdHJpbmcoKSArIFwiK1wiO1xuICAgICAgICB9XG4gICAgICAgIG91dCA9IG91dC5zdWJzdHJpbmcoMCwgb3V0Lmxlbmd0aCAtIDEpO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICBnZXQgaGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIFwiU3VtXCIgKyB0aGlzLnRlcm1zLm1hcChlID0+IGUuaGFzaCkuam9pbigpO1xuICAgIH1cbiAgICBjbGFzcyA9IGV4cG9ydHMuU3VtVHlwZTtcbiAgICAvKipcbiAgICAgKiBPcmRlcmVkLCBpbW11dGFibGVcbiAgICAgKi9cbiAgICB0ZXJtcztcbiAgICBpc1JlZHVjaWJsZTtcbiAgICBnZXQgcmVkdWNlZCgpIHtcbiAgICAgICAgcmV0dXJuIEludGVnZXJfMS5JbnRlZ2VyLm9mKHRoaXMudGVybXMubWFwKHQgPT4gdC5yZWR1Y2VkLnZhbHVlKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpZ3VyZSBvdXQgaWYgd2UncmUgaGVhbHRoeS5cbiAgICAgKi9cbiAgICBkZXRlcm1pbmVIZWFsdGgoKSB7XG4gICAgICAgIGlmICh0aGlzLnRlcm1zLmZpbHRlcih0ID0+IHQuaXNSZWR1Y2libGUgfHwgdCBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKS5sZW5ndGggPiAxKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0aGlzLnRlcm1zLmZvckVhY2godCA9PiB7XG4gICAgICAgICAgICBpZiAodCBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKVxuICAgICAgICAgICAgICAgIGlmICh0LnZhbHVlID09IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGVybXMuZm9yRWFjaCh0ZXJtID0+IHtcbiAgICAgICAgICAgIGlmICghdGVybS5pc0hlYWx0aHkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY29ycmVjdE9yZGVyaW5nID0gb3JkZXJUZXJtcyguLi50aGlzLnRlcm1zKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRlcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50ZXJtc1tpXSAhPT0gY29ycmVjdE9yZGVyaW5nW2ldKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvL1RPRE86IENoZWNrIGNvbmRpdGlvbiAzXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHN1bSBpcyBoZWFsdGh5IGlmZjpcbiAgICAgKlxuICAgICAqIDEuIENvbnRhaW5zIGEgbWF4IG9mIDEgcmVkdWNpYmxlIHRlcm0uXG4gICAgICogMi4gUHJvZHVjdHMgd2l0aCBpbnRlZ2VyIGNvZWZmaWNpZW50cyBhcmUgY29tYmluZWQuXG4gICAgICogIGEgKyAyYSA9IDNhLFxuICAgICAqICBhICsgLWEgPSAwXG4gICAgICogMy4gTm8gdGVybSBpcyAwXG4gICAgICogNC4gQWxsIHRlcm1zIGFyZSBoZWFsdGh5LlxuICAgICAqIDUuIFRlcm1zIGFyZSBvcmRlcmVkIGNvcnJlY3RseS5cbiAgICAgKi9cbiAgICBpc0hlYWx0aHk7XG4gICAgaXNDb25zdGFudDtcbiAgICBjaGlsZENvdW50O1xufVxuZXhwb3J0cy5TdW0gPSBTdW07XG5leHBvcnRzLlN1bVR5cGUgPSBcIlN1bVwiO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBnaXZlbiB0ZXJtcyBvcmRlcmVkIGNvcnJlY3RseSB0b1xuICogYmUgcGxhY2VkIGluIGEgU3VtLiBBbHRlcnMgdGhlIGdpdmVuIGFycmF5LlxuICogQHBhcmFtIHRlcm1zXG4gKi9cbmZ1bmN0aW9uIG9yZGVyVGVybXMoLi4udGVybXMpIHtcbiAgICAvLyBBIG5vdGUgYWJvdXQgdGhlIHNvcnQgZnVuY3Rpb24gYmMgdGhlIGRvY3VtZW50YXRpb24gaXMgY3J5cHRpY1xuICAgIC8vIElmIGEgc2hvdWxkIGJlIHB1dCBiZWZvcmUgYiBpbiB0aGUgc3VtLCByZXR1cm4gYSBuZWdhdGl2ZSB2YWx1ZVxuICAgIHJldHVybiB0ZXJtcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIC8vIFZhcmlhYmxlcyBiZWZvcmUgSW50ZWdlcnNcbiAgICAgICAgaWYgKGEuY2xhc3MgPT0gSW50ZWdlcl8xLkludGVnZXJUeXBlICYmIChiLmNsYXNzID09IFZhcmlhYmxlXzEuVmFyaWFibGVUeXBlIHx8IChiIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3QgJiYgYi5pc05lZ2F0aW9uICYmIGIubmVnYXRpb24uY2xhc3MgPT0gVmFyaWFibGVfMS5WYXJpYWJsZVR5cGUpKSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChhLmNsYXNzID09IFZhcmlhYmxlXzEuVmFyaWFibGVUeXBlIHx8IChhIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3QgJiYgYS5pc05lZ2F0aW9uICYmIGEubmVnYXRpb24uY2xhc3MgPT0gVmFyaWFibGVfMS5WYXJpYWJsZVR5cGUpKSAmJiBiLmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pO1xufVxuZXhwb3J0cy5vcmRlclRlcm1zID0gb3JkZXJUZXJtcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5WYXJpYWJsZVR5cGUgPSBleHBvcnRzLlZhcmlhYmxlID0gdm9pZCAwO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvblwiKTtcbmNsYXNzIFZhcmlhYmxlIGV4dGVuZHMgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24ge1xuICAgIHN0YXRpYyBvZihzeW1ib2wpIHtcbiAgICAgICAgaWYgKFZhcmlhYmxlLmluc3RhbmNlcy5nZXQoc3ltYm9sKSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIFZhcmlhYmxlLmluc3RhbmNlcy5zZXQoc3ltYm9sLCBuZXcgVmFyaWFibGUoc3ltYm9sKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFZhcmlhYmxlLmluc3RhbmNlcy5nZXQoc3ltYm9sKTtcbiAgICB9XG4gICAgc3RhdGljIGluc3RhbmNlcyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdHJ1Y3RvcihzeW1ib2wpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zeW1ib2wgPSBzeW1ib2w7XG4gICAgfVxuICAgIGNsYXNzID0gZXhwb3J0cy5WYXJpYWJsZVR5cGU7XG4gICAgdG9NYXRoWE1MKCkge1xuICAgICAgICByZXR1cm4gXCI8bWk+XCIgKyB0aGlzLnN5bWJvbCArIFwiPC9taT5cIjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN5bWJvbDtcbiAgICB9XG4gICAgZ2V0IGhhc2goKSB7XG4gICAgICAgIHJldHVybiBcIlZhcmlhYmxlXCIgKyB0aGlzLnN5bWJvbDtcbiAgICB9XG4gICAgc3ltYm9sO1xuICAgIGlzUmVkdWNpYmxlID0gZmFsc2U7XG4gICAgZ2V0IHJlZHVjZWQoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlZhcmlhYmxlcyBjYW4ndCBiZSByZWR1Y2VkIHRvIGludGVnZXJzLlwiKTtcbiAgICB9XG4gICAgaXNIZWFsdGh5ID0gdHJ1ZTtcbiAgICBpc0NvbnN0YW50ID0gZmFsc2U7XG4gICAgY2hpbGRDb3VudCA9IDA7XG59XG5leHBvcnRzLlZhcmlhYmxlID0gVmFyaWFibGU7XG5leHBvcnRzLlZhcmlhYmxlVHlwZSA9IFwiVmFyaWFibGVcIjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Bcmd1bWVudE5vZGVWaWV3ID0gdm9pZCAwO1xuY29uc3QgR3JhcGhOb2RlVmlld18xID0gcmVxdWlyZShcIi4vR3JhcGhOb2RlVmlld1wiKTtcbi8qKlxuICogUmVwcmVzZW50cyBhbiBhcmd1bWVudCBub2RlLlxuICovXG5jbGFzcyBBcmd1bWVudE5vZGVWaWV3IGV4dGVuZHMgR3JhcGhOb2RlVmlld18xLkdyYXBoTm9kZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGFyZykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFyZ3VtZW50ID0gYXJnO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9IHRoaXMuYXJndW1lbnQuYXJndW1lbnQ7XG4gICAgfVxuICAgIGFyZ3VtZW50O1xufVxuZXhwb3J0cy5Bcmd1bWVudE5vZGVWaWV3ID0gQXJndW1lbnROb2RlVmlldztcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImFyZ3VtZW50LW5vZGV2aWV3XCIsIEFyZ3VtZW50Tm9kZVZpZXcsIHsgZXh0ZW5kczogXCJkaXZcIiB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FZGdlVmlldyA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vQXJndW1lbnRcIik7XG5jb25zdCBVSVByZWZlcmVuY2VzXzEgPSByZXF1aXJlKFwiLi9VSVByZWZlcmVuY2VzXCIpO1xuY29uc3QgR3JhcGhfMSA9IHJlcXVpcmUoXCIuLi9HcmFwaFwiKTtcbi8qKlxuICogUmVwcmVzZW50cyBhbiBlZGdlIGluIGEgZ3JhcGguXG4gKi9cbmNsYXNzIEVkZ2VWaWV3IGV4dGVuZHMgSFRNTFBhcmFncmFwaEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKG93bmVyLCBlZGdlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICAgICAgdGhpcy5lZGdlID0gZWRnZS5lO1xuICAgICAgICB0aGlzLmZpcnN0ID0gZWRnZS5uO1xuICAgICAgICB0aGlzLnNlY29uZCA9IGVkZ2UubjE7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5lZGdlKTtcbiAgICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IFwiZml0LWNvbnRlbnRcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBcImZpdC1jb250ZW50XCI7XG4gICAgICAgIHRoaXMuc3R5bGUucGFkZGluZyA9IFwiMFwiO1xuICAgICAgICB0aGlzLnN0eWxlLnpJbmRleCA9IFwiLTJcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcbiAgICAgICAgdGhpcy5zdHlsZS53aGl0ZVNwYWNlID0gXCJub3dyYXBcIjtcbiAgICAgICAgdGhpcy5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFVJUHJlZmVyZW5jZXNfMS51aVByZWZlcmVuY2VzLmVkZ2VFcXVhbHNCYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIHRoaXMuc3R5bGUudXNlclNlbGVjdCA9IFwibm9uZVwiO1xuICAgICAgICBVSVByZWZlcmVuY2VzXzEudWlQcmVmZXJlbmNlcy5vblVwZGF0ZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFVJUHJlZmVyZW5jZXNfMS51aVByZWZlcmVuY2VzLmVkZ2VFcXVhbHNCYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLm93bmVyLmVkZ2VDbGlja2VkKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGV2ZW50ID0+IHtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgcm90YXRpb24gYW5nbGUgb2YgdmlldyB3aGlsZSBhbHNvXG4gICAgICogbGV0dGluZyBpdCBrbm93IHRoZSBhbmdsZSBoYXMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0gcmFkXG4gICAgICovXG4gICAgc2V0QW5nbGUocmFkKSB7XG4gICAgICAgIHRoaXMuc3R5bGUucm90YXRlID0gXCJcIiArIHJhZCArIFwicmFkXCI7XG4gICAgICAgIC8vdGhpcy50ZXh0Q29udGVudCA9IFwiXCIgKyAocmFkICogMiAqIE1hdGguUEkgLyAzNjApLnRvRml4ZWQoMikgKyBcImRlZ1wiXG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgZWxlbWVudCBzY3JlZW4gd2lkdGggYW5kIGVuc3VyZXMgdGV4dCBmaXRzXG4gICAgICogaW5zaWRlIHRoZSBlZGdlLlxuICAgICAqL1xuICAgIHNldCB3aWR0aCh2YWwpIHtcbiAgICAgICAgc3VwZXIuc3R5bGUud2lkdGggPSB2YWw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGVsZW1lbnQgaXMgY29ubmN0ZWQgdG8gdGhlIERPTS5cbiAgICAgKi9cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuZWRnZSBpbnN0YW5jZW9mIEFyZ3VtZW50XzEuQXJndW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBcIlwiICsgdGhpcy5lZGdlLmNsYWltLnI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5lZGdlIGluc3RhbmNlb2YgR3JhcGhfMS5HaXZlbkVkZ2UpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBcIlwiICsgdGhpcy5lZGdlLnI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIGZvciBcIiArIHRoaXMuZWRnZSk7XG4gICAgfVxuICAgIG93bmVyO1xuICAgIGVkZ2U7XG4gICAgZmlyc3Q7XG4gICAgc2Vjb25kO1xufVxuZXhwb3J0cy5FZGdlVmlldyA9IEVkZ2VWaWV3O1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiZWRnZS12aWV3XCIsIEVkZ2VWaWV3LCB7IGV4dGVuZHM6IFwicFwiIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkVkaXRhYmxlTWF0aFZpZXcgPSB2b2lkIDA7XG4vKipcbiAqIERpc3BsYXlzIG1hdGggYW5kIGlzIGVkaXRhYmxlLlxuICovXG5jbGFzcyBFZGl0YWJsZU1hdGhWaWV3IGV4dGVuZHMgSFRNTERpdkVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB9XG4gICAgc2V0IHZhbHVlKGUpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBlO1xuICAgICAgICB0aGlzLmlubmVySFRNTCA9IFwiPG1hdGggZGlzcGxheT0nYmxvY2snPlwiICsgKGU/LnRvTWF0aFhNTCgpID8/IFwiXCIpICsgXCI8L21hdGg+XCI7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2gobCA9PiBsKHRoaXMuX3ZhbHVlKSk7XG4gICAgICAgIE1hdGhKYXgudHlwZXNldChbdGhpc10pO1xuICAgIH1cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTGlzdGVuZXIgd2lsbCBiZSBjYWxsZWQgd2hlbmV2ZXIgdGhlIG1hdGhcbiAgICAgKiBpbiB0aGUgdmlldyBpcyBlZGl0ZWQuXG4gICAgICogQHBhcmFtIGxcbiAgICAgKi9cbiAgICBhZGRFZGl0TGlzdGVuZXIobCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGwpO1xuICAgIH1cbiAgICBsaXN0ZW5lcnMgPSBbXTtcbiAgICBfdmFsdWUgPSBudWxsO1xufVxuZXhwb3J0cy5FZGl0YWJsZU1hdGhWaWV3ID0gRWRpdGFibGVNYXRoVmlldztcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImVkaXRhYmxlLW1hdGh2aWV3XCIsIEVkaXRhYmxlTWF0aFZpZXcsIHsgZXh0ZW5kczogXCJkaXZcIiB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FeHBsYW5hdGlvblBvcHVwID0gdm9pZCAwO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4uL2V4cHJlc3Npb25zL0V4cHJlc3Npb25cIik7XG5jb25zdCBNYXRoTUxIZWxwZXJzXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9NYXRoTUxIZWxwZXJzXCIpO1xuY2xhc3MgRXhwbGFuYXRpb25Qb3B1cCBleHRlbmRzIEhUTUxEaXZFbGVtZW50IHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcmdcbiAgICAgKiBAcGFyYW0gb25DbG9zZSBDYWxsZWQgYWZ0ZXIgdXNlciBjbGlja3MgY2xvc2UgYnV0dG9uLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGFyZywgb25DbG9zZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFyZyA9IGFyZztcbiAgICAgICAgdGhpcy5vbkNsb3NlID0gb25DbG9zZTtcbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdiJyk7XG4gICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2xvc2VcIjtcbiAgICAgICAgY2xvc2VCdXR0b24uc3R5bGUudXNlclNlbGVjdCA9IFwibm9uZVwiO1xuICAgICAgICBjbG9zZUJ1dHRvbi5zdHlsZS5mbG9hdCA9IFwicmlnaHRcIjtcbiAgICAgICAgdGhpcy5hcHBlbmQoY2xvc2VCdXR0b24pO1xuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRleHQuaW5uZXJIVE1MID0gYXJnLmFyZ3VtZW50ICsgXCI8YnI+XCI7XG4gICAgICAgIGlmIChhcmcuY2xhaW0ubiBpbnN0YW5jZW9mIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uICYmIGFyZy5jbGFpbS5uMSBpbnN0YW5jZW9mIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uKVxuICAgICAgICAgICAgdGV4dC5pbm5lckhUTUwgKz0gKDAsIE1hdGhNTEhlbHBlcnNfMS5pbk1hdGhCbG9jaykoKDAsIE1hdGhNTEhlbHBlcnNfMS5pblJvdykoYXJnLmNsYWltLm4udG9NYXRoWE1MKCkgKyBcIiA8bW8+XCIgKyBhcmcuY2xhaW0uciArIFwiPC9tbz4gXCIgKyBhcmcuY2xhaW0ubjEudG9NYXRoWE1MKCkpKSArIFwiPGJyPiBEZXJpdmVkIGZyb206IDxicj5cIjtcbiAgICAgICAgZm9yIChjb25zdCBncm91bmQgb2YgYXJnLmdyb3VuZHMpIHtcbiAgICAgICAgICAgIGlmIChncm91bmQgaW5zdGFuY2VvZiBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbilcbiAgICAgICAgICAgICAgICB0ZXh0LmlubmVySFRNTCArPSAoMCwgTWF0aE1MSGVscGVyc18xLmluTWF0aCkoZ3JvdW5kLnRvTWF0aFhNTCgpKSArIFwiPGJyPlwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXBwZW5kKHRleHQpO1xuICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBibGFja1wiO1xuICAgICAgICB0aGlzLnN0eWxlLmJveFNoYWRvdyA9IFwiMC4zY2ggMC4zY2ggMC42Y2ggcmdiYSgwLCAwLCAwLCAwLjUpXCI7XG4gICAgICAgIHRoaXMuc3R5bGUucGFkZGluZyA9IFwiMWNoXCI7XG4gICAgICAgIHRoaXMuc3R5bGUud2lkdGggPSBcImZpdC1jb250ZW50XCI7XG4gICAgICAgIHRoaXMuc3R5bGUuekluZGV4ID0gXCIxNVwiO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgTWF0aEpheC50eXBlc2V0KFt0aGlzXSk7XG4gICAgfVxuICAgIGFyZztcbiAgICBvbkNsb3NlO1xufVxuZXhwb3J0cy5FeHBsYW5hdGlvblBvcHVwID0gRXhwbGFuYXRpb25Qb3B1cDtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImV4cGxhbmF0aW9uLXBvcHVwXCIsIEV4cGxhbmF0aW9uUG9wdXAsIHsgZXh0ZW5kczogXCJkaXZcIiB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FeHByZXNzaW9uTm9kZVZpZXcgPSB2b2lkIDA7XG5jb25zdCBFZGl0YWJsZU1hdGhWaWV3XzEgPSByZXF1aXJlKFwiLi9FZGl0YWJsZU1hdGhWaWV3XCIpO1xuY29uc3QgR3JhcGhOb2RlVmlld18xID0gcmVxdWlyZShcIi4vR3JhcGhOb2RlVmlld1wiKTtcbi8qKlxuICogQSBncmFwaCBub2RlIHZpZXcgZm9yIGV4cHJlc3Npb24gbm9kZXMuXG4gKi9cbmNsYXNzIEV4cHJlc3Npb25Ob2RlVmlldyBleHRlbmRzIEdyYXBoTm9kZVZpZXdfMS5HcmFwaE5vZGVWaWV3IHtcbiAgICBjb25zdHJ1Y3Rvcihub2RlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgICAgIHRoaXMuZWRpdGFibGVNYXRoVmlldyA9IG5ldyBFZGl0YWJsZU1hdGhWaWV3XzEuRWRpdGFibGVNYXRoVmlldygpO1xuICAgICAgICB0aGlzLmVkaXRhYmxlTWF0aFZpZXcudmFsdWUgPSB0aGlzLm5vZGU7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5lZGl0YWJsZU1hdGhWaWV3KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ub2RlLnRvU3RyaW5nKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgfVxuICAgIG5vZGU7XG4gICAgZWRpdGFibGVNYXRoVmlldztcbn1cbmV4cG9ydHMuRXhwcmVzc2lvbk5vZGVWaWV3ID0gRXhwcmVzc2lvbk5vZGVWaWV3O1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiZXhwcmVzc2lvbi1ub2Rldmlld1wiLCBFeHByZXNzaW9uTm9kZVZpZXcsIHsgZXh0ZW5kczogXCJkaXZcIiB9KTtcbmNvbnN0IGNvbG9yVW5oZWFsdGh5Tm9kZXMgPSB0cnVlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdyYXBoTm9kZVZpZXcgPSB2b2lkIDA7XG4vKipcbiAqIEFuIGh0bWwgZWxlbWVudCB0aGF0IHJlcHJlc2VudHMgYSBtYXRoIGdyYXBoIG5vZGUuXG4gKi9cbmNsYXNzIEdyYXBoTm9kZVZpZXcgZXh0ZW5kcyBIVE1MRGl2RWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIC8vdGhpcy5zdHlsZS5ib3JkZXIgPSBcImJsdWUgZG90dGVkIDAuMmNoXCJcbiAgICAgICAgdGhpcy5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjFjaFwiO1xuICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibGlnaHRibHVlXCI7XG4gICAgICAgIHRoaXMuc3R5bGUucGFkZGluZyA9IFwiMWNoXCI7XG4gICAgICAgIHRoaXMuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xuICAgICAgICB0aGlzLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjBcIjtcbiAgICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IFwiZml0LWNvbnRlbnRcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBcImZpdC1jb250ZW50XCI7XG4gICAgICAgIHRoaXMuc3R5bGUud2hpdGVTcGFjZSA9IFwibm93cmFwXCI7XG4gICAgICAgIHRoaXMuc3R5bGUuekluZGV4ID0gXCI1XCI7XG4gICAgfVxuICAgIHNldCBiYWNrZ3JvdW5kQ29sb3IodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB2YWx1ZTtcbiAgICB9XG59XG5leHBvcnRzLkdyYXBoTm9kZVZpZXcgPSBHcmFwaE5vZGVWaWV3O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVpUHJlZmVyZW5jZXMgPSB2b2lkIDA7XG5jbGFzcyBVSVByZWZlcmVuY2VzIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgRnVuY3Rpb24gY2FsbGVkIHdoZW5ldmVyIGEgdWkgcHJlZmVyZW5jZVxuICAgICAqIGlzIGNoYW5nZWQuXG4gICAgICovXG4gICAgb25VcGRhdGUoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgfVxuICAgIC8vIEdldHRlcnMgYW5kIFNldHRlcnNcbiAgICAvKipcbiAgICAgKiBCYWNrZ3JvdW5kIGNvbG9yIG9mIGEgZ3JhcGggZWRnZSBkZW5vdGluZ1xuICAgICAqIGVxdWFsaXR5IGJldHdlZW4gdHdvIGV4cHJlc3Npb25zLlxuICAgICAqIENzcyB2YWx1ZS5cbiAgICAgKi9cbiAgICBnZXQgZWRnZUVxdWFsc0JhY2tncm91bmRDb2xvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VkZ2VFcXVhbHNCYWNrZ3JvdW5kQ29sb3I7XG4gICAgfVxuICAgIHNldCBlZGdlRXF1YWxzQmFja2dyb3VuZENvbG9yKHZhbCkge1xuICAgICAgICB0aGlzLl9lZGdlRXF1YWxzQmFja2dyb3VuZENvbG9yID0gdmFsO1xuICAgICAgICB0aGlzLmNhbGxiYWNrcy5mb3JFYWNoKGMgPT4gYygpKTtcbiAgICB9XG4gICAgLy8gUHJlZmVyZW5jZSBWYWx1ZXNcbiAgICBfZWRnZUVxdWFsc0JhY2tncm91bmRDb2xvciA9IFwibm9uZVwiO1xuICAgIGNhbGxiYWNrcyA9IFtdO1xufVxuZXhwb3J0cy51aVByZWZlcmVuY2VzID0gbmV3IFVJUHJlZmVyZW5jZXMoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5XZWJHcmFwaFZpZXcgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uL0FyZ3VtZW50XCIpO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4uL2V4cHJlc3Npb25zL0V4cHJlc3Npb25cIik7XG5jb25zdCBHcmFwaE1pbmlwdWxhdG9yXzEgPSByZXF1aXJlKFwiLi4vR3JhcGhNaW5pcHVsYXRvclwiKTtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4uL3V0aWwvYXNzZXJ0XCIpO1xuY29uc3QgVG91Y2hHZXN0dXJlUmVjb2duaXplcl8xID0gcmVxdWlyZShcIi4uLy4uL1RvdWNoR2VzdHVyZVJlY29nbml6ZXJcIik7XG5jb25zdCBFZGdlVmlld18xID0gcmVxdWlyZShcIi4vRWRnZVZpZXdcIik7XG5jb25zdCBFeHByZXNzaW9uTm9kZVZpZXdfMSA9IHJlcXVpcmUoXCIuL0V4cHJlc3Npb25Ob2RlVmlld1wiKTtcbmNvbnN0IEFyZ3VtZW50Tm9kZVZpZXdfMSA9IHJlcXVpcmUoXCIuL0FyZ3VtZW50Tm9kZVZpZXdcIik7XG5jb25zdCBFeHBsYW5hdGlvblBvcHVwXzEgPSByZXF1aXJlKFwiLi9FeHBsYW5hdGlvblBvcHVwXCIpO1xuLyoqXG4gKiBBIHVpIGVsZW1lbnQgdGhhdCB3aWxsIGRpc3BsYXkgYSBtYXRoIGdyYXBoIGluIGEgd2ViLlxuICovXG5jbGFzcyBXZWJHcmFwaFZpZXcgZXh0ZW5kcyBIVE1MRGl2RWxlbWVudCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGdyYXBoIE11c3QgYmUgZnVsbHkgY29ubmVjdGVkLlxuICAgICAqIEBwYXJhbSByb290cyBOb24tZW1wdHkuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZ3JhcGgsIHJvb3RzLCBjb25maWcgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5ncmFwaCA9IGdyYXBoO1xuICAgICAgICB0aGlzLm5vZGVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLm9mZnNldFggPSAwO1xuICAgICAgICB0aGlzLm9mZnNldFkgPSAwO1xuICAgICAgICB0aGlzLm5vZGVQb3NpdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZWRnZVBvc2l0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5lZGdlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yb290Tm9kZXMgPSBuZXcgU2V0KHJvb3RzKTtcbiAgICAgICAgdGhpcy5yaW5nRWxlbWVudHMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMucmluZ1Bvc2l0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5leHBsYW5hdGlvblBvcHVwcyA9IFtdO1xuICAgICAgICBpZiAoY29uZmlnICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zaG93QXJndW1lbnRzID0gY29uZmlnLnNob3dBcmd1bWVudHM7XG4gICAgICAgICAgICB0aGlzLmRyYXdFZGdlTGluZXMgPSBjb25maWcuZHJhd0VkZ2VMaW5lcztcbiAgICAgICAgICAgIHRoaXMuZGVidWdDb3JuZXJFbmFibGVkID0gY29uZmlnLmRlYnVnQ29ybmVyRW5hYmxlZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0eWxlLmNsaXBQYXRoID0gXCJwb2x5Z29uKDAlIDAlLCAxMDAlIDAlLCAxMDAlIDEwMCUsIDAlIDEwMCUpXCI7XG4gICAgICAgIHRoaXMuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgICAgIHRoaXMuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50b3VjaERvd24gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5tb3VzZURvd24pXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXRYICs9IGV2ZW50Lm1vdmVtZW50WCAvIHRoaXMuc2NhbGU7XG4gICAgICAgICAgICB0aGlzLm9mZnNldFkgKz0gZXZlbnQubW92ZW1lbnRZIC8gdGhpcy5zY2FsZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT2Zmc2V0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcyk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW91c2VQb3MgPSBQb2ludChldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcbiAgICAgICAgICAgIGNvbnN0IHByZU1vdXNlUG9zID0gdGhpcy5nZXRJbnRlcm5hbFBvcyhtb3VzZVBvcyk7XG4gICAgICAgICAgICBjb25zdCBzY2FsZURlbHRhID0gTWF0aC5wb3coMC44LCBldmVudC5kZWx0YVkgLyAzNjApO1xuICAgICAgICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlRGVsdGEgKiB0aGlzLnNjYWxlO1xuICAgICAgICAgICAgY29uc3QgcG9zdE1vdXNlUG9zID0gdGhpcy5nZXRJbnRlcm5hbFBvcyhtb3VzZVBvcyk7XG4gICAgICAgICAgICBjb25zdCBpbnRYRGlmZiA9IHBvc3RNb3VzZVBvcy54IC0gcHJlTW91c2VQb3MueDtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJJbnRlcm5hbCBYIENoYW5nZSB1bmRlciBtb3VzZSBcIiArIGludFhEaWZmKVxuICAgICAgICAgICAgLy8gQWRqdXN0IG9mZnNldCBzbyB0aGF0IGNvbnRlbnQgdW5kZXIgdGhlIG1vdXNlIGRvZXNuJ3QgbW92ZVxuICAgICAgICAgICAgLy90aGlzLm9mZnNldFggKz0gaW50WERpZmZcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJDb3JyZWN0ZWQgWCBDaGFuZ2UgdW5kZXIgbW91c2UgXCIgKyAodGhpcy5nZXRJbnRlcm5hbFBvcyhtb3VzZVBvcykueCAtIHByZU1vdXNlUG9zLngpKVxuICAgICAgICAgICAgdGhpcy51cGRhdGVPZmZzZXQoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nZXN0dXJlUmVjb2duaXplciA9IG5ldyBUb3VjaEdlc3R1cmVSZWNvZ25pemVyXzEuVG91Y2hHZXN0dXJlUmVjb2duaXplcigpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGRvd25cIiwgdGhpcy5nZXN0dXJlUmVjb2duaXplci5wcm9jZXNzVG91Y2hEb3duKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5nZXN0dXJlUmVjb2duaXplci5wcm9jZXNzVG91Y2hFbmQpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCB0aGlzLmdlc3R1cmVSZWNvZ25pemVyLnByb2Nlc3NUb3VjaENhbmNlbCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLmdlc3R1cmVSZWNvZ25pemVyLnByb2Nlc3NUb3VjaE1vdmUpO1xuICAgICAgICB0aGlzLmdlc3R1cmVSZWNvZ25pemVyLmFkZFBpbmNoTGlzdGVuZXIoKGNlbnRlciwgc2NhbGVEZWx0YSwgZmluZ2VycykgPT4ge1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZXBPaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgYSBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgdGhlIGNvbG9yIG9mIGEgbm9kZS5cbiAgICAgKiBAcGFyYW0gY29sb3JGblxuICAgICAqL1xuICAgIHNldE5vZGVDb2xvcmluZ1NjaGVtZShjb2xvckZuKSB7XG4gICAgICAgIHRoaXMubm9kZUNvbG9yRm4gPSBjb2xvckZuO1xuICAgICAgICB0aGlzLnByb3BvZ2F0ZVNldHRpbmdzVG9Ob2RlcygpO1xuICAgIH1cbiAgICBub2RlQ29sb3JGbiA9IChuKSA9PiBcImxpZ2h0Ymx1ZVwiO1xuICAgIHByb3BvZ2F0ZVNldHRpbmdzVG9Ob2RlcygpIHtcbiAgICAgICAgdGhpcy5ub2Rlcy5mb3JFYWNoKCh2aWV3LCBub2RlKSA9PiB7XG4gICAgICAgICAgICB2aWV3LmJhY2tncm91bmRDb2xvciA9IHRoaXMubm9kZUNvbG9yRm4obm9kZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGlmIHRoZSB2aWV3IHNob3VsZCBzaG93IGFyZ3VtZW50IG5vZGVzIGFzIG5vZGVzLlxuICAgICAqIEZhbHNlIGJ5IGRlZmF1bHQuXG4gICAgICogQHBhcmFtIHZhbFxuICAgICAqL1xuICAgIHNldFNob3dBcmd1bWVudHModmFsKSB7XG4gICAgICAgIHRoaXMuc2hvd0FyZ3VtZW50cyA9IHRydWU7XG4gICAgICAgIHRoaXMucmVhZEdyYXBoKCk7XG4gICAgICAgIHRoaXMuYXJyYW5nZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZU9mZnNldCgpO1xuICAgIH1cbiAgICBnZXQgY2VudGVyKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdGhpcy5vZmZzZXRXaWR0aCAvIDIsXG4gICAgICAgICAgICB5OiB0aGlzLm9mZnNldEhlaWdodCAvIDIsXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZvbGxvd3MgdGhlIHNob3dBcmd1bWVudCBzZXR0aW5nLlxuICAgICAqIFBvcHVsYXRlcyB0aGlzLm5vZGVzLCB0aGlzLmVkZ2VzLFxuICAgICAqIGFkZHMgdGhlIGNyZWF0ZWQgdmlld3MgdG8gdGhlIHNoYWRvdyBkb21cbiAgICAgKiB0byBtYXRjaCB0aGUgZ3JhcGguXG4gICAgICogUmVtb3ZlcyBhbnkgcHJlLWV4aXN0aW5nIGVsZW1lbnRzIGZyb20gdGhlIHNoYWRvdyBkb20uXG4gICAgICovXG4gICAgcmVhZEdyYXBoKCkge1xuICAgICAgICAvLyBDbGVhciBleGlzdGluZ1xuICAgICAgICB0aGlzLm5vZGVzLmZvckVhY2goKHZpZXcsIG5vZGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodmlldyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm5vZGVzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuZWRnZXMuZm9yRWFjaCgodmlldywgZWRnZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh2aWV3KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWRnZXMuY2xlYXIoKTtcbiAgICAgICAgLy8gRmV0Y2ggbm9kZXNcbiAgICAgICAgdGhpcy5ncmFwaC5nZXROb2RlcygpLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmlldyA9IG5ldyBFeHByZXNzaW9uTm9kZVZpZXdfMS5FeHByZXNzaW9uTm9kZVZpZXcobm9kZSk7XG4gICAgICAgICAgICAgICAgdmlldy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzLnNldChub2RlLCB2aWV3KTtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZCh2aWV3KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBBcmd1bWVudF8xLkFyZ3VtZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNob3dBcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBjb25zdCB2aWV3ID0gbmV3IEFyZ3VtZW50Tm9kZVZpZXdfMS5Bcmd1bWVudE5vZGVWaWV3KG5vZGUpO1xuICAgICAgICAgICAgICAgIHZpZXcuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rlcy5zZXQobm9kZSwgdmlldyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmQodmlldyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR3JhcGggY29udGFpbnMgbm9kZSBXZWJHcmFwaFZpZXcgY2FuJ3QgcHJvY2Vzcy5cIik7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBGZXRjaCBlZGdlc1xuICAgICAgICBHcmFwaE1pbmlwdWxhdG9yXzEuR3JhcGhNaW5pcHVsYXRvci5kcm9wU3ltbWV0cmljKHRoaXMuZ3JhcGguZ2V0RWRnZXMoKSkuZmlsdGVyKGVkZ2UgPT4ge1xuICAgICAgICAgICAgLy8gT25seSBjb25zaWRlciBlZGdlcyBmb3Igd2hpY2ggd2UgaGF2ZSBib3RoIGVuZHBvaW50cyBvbiB0aGUgdmlld1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZXMuaGFzKGVkZ2UubikgJiYgdGhpcy5ub2Rlcy5oYXMoZWRnZS5uMSk7XG4gICAgICAgIH0pLmZvckVhY2goZWRnZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gbmV3IEVkZ2VWaWV3XzEuRWRnZVZpZXcodGhpcywgZWRnZSk7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgdGhpcy5lZGdlcy5zZXQoZWRnZSwgdmlldyk7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZCh2aWV3KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvcG9nYXRlU2V0dGluZ3NUb05vZGVzKCk7XG4gICAgICAgIGlmICh0aGlzLmRlYnVnQ29ybmVyRW5hYmxlZCkge1xuICAgICAgICAgICAgY29uc3QgY29ybmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgY29ybmVyLmlubmVySFRNTCA9IFwiR3JhcGggTm9kZXM6IFwiICsgdGhpcy5ncmFwaC5nZXROb2RlcygpLnNpemUgKyBcIjxicj5cIlxuICAgICAgICAgICAgICAgICsgXCJWaXNpYmxlIE5vZGVzOiBcIiArIHRoaXMubm9kZXMuc2l6ZSArIFwiPGJyPlwiXG4gICAgICAgICAgICAgICAgKyBcIkdyYXBoIEVkZ2VzOiBcIiArIHRoaXMuZ3JhcGguZ2V0RWRnZXMoKS5zaXplICsgXCI8YnI+XCJcbiAgICAgICAgICAgICAgICArIFwiVmlzaWJsZSBFZGdlczogXCIgKyB0aGlzLmVkZ2VzLnNpemUgKyBcIjxicj5cIjtcbiAgICAgICAgICAgIGNvcm5lci5zdHlsZS56SW5kZXggPSBcIjEwMFwiO1xuICAgICAgICAgICAgY29ybmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIGNvcm5lci5zdHlsZS53aWR0aCA9IFwiZml0LWNvbnRlbnRcIjtcbiAgICAgICAgICAgIGNvcm5lci5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcbiAgICAgICAgICAgIGNvcm5lci5zdHlsZS5wYWRkaW5nID0gXCIxY2hcIjtcbiAgICAgICAgICAgIGNvcm5lci5zdHlsZS5ib3JkZXIgPSBcImJsYWNrIDFweCBzb2xpZFwiO1xuICAgICAgICAgICAgY29ybmVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgdGhpcy5hcHBlbmQoY29ybmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcE9rKCk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLnJlYWRHcmFwaCgpO1xuICAgICAgICB0aGlzLmFycmFuZ2UoKTtcbiAgICAgICAgdGhpcy51cGRhdGVPZmZzZXQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGljayBwbGFjZXMgZm9yIGFsbCB0aGUgbm9kZXMvZWRnZXMgb24gdGhlIHNjcmVlbi5cbiAgICAgKiBQb3B1bGF0ZXMgdGhlIHBvc2l0aW9uKiByZXAgdmFycy5cbiAgICAgKi9cbiAgICBhcnJhbmdlKCkge1xuICAgICAgICB0aGlzLm5vZGVQb3NpdGlvbnMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5lZGdlUG9zaXRpb25zLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucmluZ1Bvc2l0aW9ucy5jbGVhcigpO1xuICAgICAgICB0aGlzLnJpbmdFbGVtZW50cy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZChlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmluZ0VsZW1lbnRzLmNsZWFyKCk7XG4gICAgICAgIC8vIFBsYWNlIG5vZGVzIG9uIGEgc2VyaWVzIG9mIHJpbmdzIGZyb20gdGhlIGNlbnRlciB1c2luZyB0aGVpciBkZXB0aCBpbiB0aGUgZ3JhcGhcbiAgICAgICAgY29uc3QgbGV2ZWxzID0gR3JhcGhNaW5pcHVsYXRvcl8xLkdyYXBoTWluaXB1bGF0b3IuZ2V0TGV2ZWxzKHRoaXMuZ3JhcGgsIHRoaXMucm9vdE5vZGVzLCAobm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbilcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBBcmd1bWVudF8xLkFyZ3VtZW50KVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dBcmd1bWVudHM7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTmV3IHR5cGUgb2Ygbm9kZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBtYXhEZXB0aCA9IDA7XG4gICAgICAgIGxldmVscy5mb3JFYWNoKChfLCBkZXB0aCkgPT4ge1xuICAgICAgICAgICAgbWF4RGVwdGggPSBNYXRoLm1heChtYXhEZXB0aCwgZGVwdGgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY2VudGVyID0geyB4OiAodGhpcy5jbGllbnRXaWR0aCAvIDIpLCB5OiB0aGlzLmNsaWVudEhlaWdodCAvIDIgfTtcbiAgICAgICAgbGV0IGxhc3RSYWRpdXMgPSAwOyAvL3B4XG4gICAgICAgIGZvciAobGV0IGRlcHRoID0gMDsgZGVwdGggPCBtYXhEZXB0aCArIDE7IGRlcHRoKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gbGV2ZWxzLmdldChkZXB0aCk7XG4gICAgICAgICAgICAvLyBPcmdhbml6ZSB0aGUgcm9vdCBub2RlcyBvbiBhIGNpcmNsZSBhcm91bmQgdGhlIGNlbnRlclxuICAgICAgICAgICAgY29uc3Qgc3RlcFNpemUgPSAoMiAqIE1hdGguUEkpIC8gbm9kZXMuc2l6ZTtcbiAgICAgICAgICAgIC8vIFRoZSBzdGFydGluZyBhbmd1bGFyIG9mZnNldCB0byBhZGQgdGhlIHN0ZXBzaXplIHRvXG4gICAgICAgICAgICAvLyBNYWtpbmcgaXQgbm9uLXplcm8gc3RvcHMgdGhpbmdzIGZyb20gYWxpZ25pbmdcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBPZmZzZXQgPSAoTWF0aC5QSSAvIDMuNSkgKiBkZXB0aDtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsY3VsYXRpbmcgdGhlIHJhZGl1cyBvZiB0aGUgY2lyY2xlXG4gICAgICAgICAgICAgKiBTdXBwb3NlIGV2ZXJ5IHJvb3Qgbm9kZSBvbiB0aGUgc3RhcnRpbmcgY2lyY2xlIHJlcXVpcmVzXG4gICAgICAgICAgICAgKiBhIGNpcmN1bGFyIHNwYWNlIHRvIGJlIGRyYXduIHdpdGggcmFkaXVzIG5vZGVSYWRpdXNcbiAgICAgICAgICAgICAqIEEgc3RhcnRpbmcgY2lyY2xlIHdpdGggbiBvZiB0aGVzZSBub2RlcyB3b3VsZCByZXF1aXJlIGFcbiAgICAgICAgICAgICAqIGNpcmN1bWZlcmVuY2Ugb2YgbiAqIDJub2RlUmFkaXVzLlxuICAgICAgICAgICAgICogVGhlIGNpcmN1bWZlcmVuY2Ugb2YgYSBjaXJjbGUgY2FuIGJlIGV4cHJlc3NlZFxuICAgICAgICAgICAgICogYXMgMipwaSpyXG4gICAgICAgICAgICAgKiA9PiByID0gbiAqIDIgKiBzbWFsbFIgLyAoMiAqIHBpKVxuICAgICAgICAgICAgICogICAgICA9IG4gKiBzbWFsbFIgLyBwaVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdCBub2RlUmFkaXVzID0gNzA7IC8vIHBpeGVsc1xuICAgICAgICAgICAgbGV0IHJhZGl1cyA9IE1hdGgubWF4KG5vZGVzLnNpemUgKiBub2RlUmFkaXVzIC8gTWF0aC5QSSwgbGFzdFJhZGl1cyArICgzICogbm9kZVJhZGl1cykpO1xuICAgICAgICAgICAgaWYgKGRlcHRoID09IDAgJiYgbm9kZXMuc2l6ZSA9PSAxKVxuICAgICAgICAgICAgICAgIHJhZGl1cyA9IDA7XG4gICAgICAgICAgICBsYXN0UmFkaXVzID0gcmFkaXVzO1xuICAgICAgICAgICAgY29uc3QgbnMgPSBbLi4ubm9kZXNdOyAvLyBUT0RPLCBhc3NpZ24gYSBtZWFuaW5nZnVsIG9yZGVyaW5nXG4gICAgICAgICAgICBucy5mb3JFYWNoKChub2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLm5vZGVzLmdldChub2RlKTtcbiAgICAgICAgICAgICAgICAvL3ZpZXcuc3R5bGUud2lkdGggPSBcIlwiICsgc21hbGxSICsgXCJweFwiXG4gICAgICAgICAgICAgICAgLy92aWV3LnN0eWxlLmhlaWdodCA9IFwiXCIgKyBzbWFsbFIgKyBcInB4XCJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNhcnRlc2lhbiBwb2ludCBmcm9tIHRoZSByYWRpdXMgYW5kIGFuZ2xlXG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IHJhZGl1cyAqIE1hdGguY29zKHN0ZXBTaXplICogaW5kZXggKyBzdGVwT2Zmc2V0KSArIGNlbnRlci54O1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSByYWRpdXMgKiBNYXRoLnNpbihzdGVwU2l6ZSAqIGluZGV4ICsgc3RlcE9mZnNldCkgKyBjZW50ZXIueTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVQb3NpdGlvbnMuc2V0KHZpZXcsIFBvaW50KHgsIHkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgcmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICByaW5nLnN0eWxlLmJvcmRlciA9IFwibGlnaHRncmF5IHNvbGlkIDAuM2NoXCI7XG4gICAgICAgICAgICByaW5nLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgcmluZy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgIHJpbmcuc3R5bGUuekluZGV4ID0gXCItMTBcIjtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQocmluZyk7XG4gICAgICAgICAgICB0aGlzLnJpbmdFbGVtZW50cy5hZGQocmluZyk7XG4gICAgICAgICAgICB0aGlzLnJpbmdQb3NpdGlvbnMuc2V0KHJpbmcsIHsgcmFkaXVzOiByYWRpdXMgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm93IGFyYW5nZSB0aGUgZWRnZXNcbiAgICAgICAgdGhpcy5lZGdlcy5mb3JFYWNoKCh2aWV3LCBlZGdlKSA9PiB7XG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBtaWRkbGUgb2YgdGhlIHR3byBlbmRwdHNcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0WCA9IHRoaXMubm9kZVBvc2l0aW9ucy5nZXQodGhpcy5ub2Rlcy5nZXQoZWRnZS5uKSkueDtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0WSA9IHRoaXMubm9kZVBvc2l0aW9ucy5nZXQodGhpcy5ub2Rlcy5nZXQoZWRnZS5uKSkueTtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZFggPSB0aGlzLm5vZGVQb3NpdGlvbnMuZ2V0KHRoaXMubm9kZXMuZ2V0KGVkZ2UubjEpKS54O1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kWSA9IHRoaXMubm9kZVBvc2l0aW9ucy5nZXQodGhpcy5ub2Rlcy5nZXQoZWRnZS5uMSkpLnk7XG4gICAgICAgICAgICBjb25zdCB4ID0gKGZpcnN0WCArIHNlY29uZFgpIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IHkgPSAoZmlyc3RZICsgc2Vjb25kWSkgLyAyO1xuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKHNlY29uZFkgLSBmaXJzdFksIHNlY29uZFggLSBmaXJzdFgpO1xuICAgICAgICAgICAgdGhpcy5lZGdlUG9zaXRpb25zLnNldCh2aWV3LCB7IHg6IHgsIHk6IHksIGFuZ2xlOiBhbmdsZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVwT2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBkcmF3IHBvc2l0aW9uIG9mIHRoZSBub2RlcyBvbiB0aGUgc2NyZWVuXG4gICAgICogdG8gbWF0Y2ggdGhlIG9mZnNldCBpbiByZXAuIEFzc3VtZXMgYWxsIHZpZXdzIGhhdmUgYSBwb3NpdGlvblxuICAgICAqIHN0b3JlZCBpbiB0aGUgcmVwLiBDYWxsIGFycmFuZ2UoKSBmaXJzdC5cbiAgICAgKiBBbHNvIGFwcGxpZXMgdGhlIHNjYWxlIGZhY3RvciB0byB0aGUgZmluYWwgZHJhdyBwb3NpdGlvbnMsXG4gICAgICogaW52aXNpYmxlIHRvIGV2ZXJ5b25lIGVsc2UuXG4gICAgICovXG4gICAgdXBkYXRlT2Zmc2V0KCkge1xuICAgICAgICBjb25zdCBjZW50ZXIgPSB0aGlzLmNlbnRlcjtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLnNjYWxlO1xuICAgICAgICBmdW5jdGlvbiBhcHBseVNjYWxlKGkpIHtcbiAgICAgICAgICAgIHJldHVybiBQb2ludCgoKGkueCkgLSBjZW50ZXIueCkgKiBzY2FsZSArIGNlbnRlci54LCAoKGkueSkgLSBjZW50ZXIueSkgKiBzY2FsZSArIGNlbnRlci55KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGVQb3NpdGlvbnMuZm9yRWFjaCgocG9zLCB2aWV3KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhZGp1c3RlZCA9IGFwcGx5U2NhbGUoe1xuICAgICAgICAgICAgICAgIHg6IHBvcy54ICsgdGhpcy5vZmZzZXRYLFxuICAgICAgICAgICAgICAgIHk6IHBvcy55ICsgdGhpcy5vZmZzZXRZLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLmxlZnQgPSBcIlwiICsgKGFkanVzdGVkLnggLSAoMC41ICogdmlldy5vZmZzZXRXaWR0aCkpICsgXCJweFwiO1xuICAgICAgICAgICAgdmlldy5zdHlsZS50b3AgPSBcIlwiICsgKGFkanVzdGVkLnkgLSAoMC41ICogdmlldy5vZmZzZXRIZWlnaHQpKSArIFwicHhcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWRnZVBvc2l0aW9ucy5mb3JFYWNoKChwb3MsIHZpZXcpID0+IHtcbiAgICAgICAgICAgIHZpZXcuc2V0QW5nbGUocG9zLmFuZ2xlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmRyYXdFZGdlTGluZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdFBvcyA9IHRoaXMubm9kZVBvc2l0aW9ucy5nZXQodGhpcy5ub2Rlcy5nZXQodmlldy5maXJzdCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZFBvcyA9IHRoaXMubm9kZVBvc2l0aW9ucy5nZXQodGhpcy5ub2Rlcy5nZXQodmlldy5zZWNvbmQpKTtcbiAgICAgICAgICAgICAgICB2aWV3LndpZHRoID0gXCJcIiArIChzY2FsZSAqIE1hdGguaHlwb3Qoc2Vjb25kUG9zLnggLSBmaXJzdFBvcy54LCBzZWNvbmRQb3MueSAtIGZpcnN0UG9zLnkpKSArIFwicHhcIjtcbiAgICAgICAgICAgICAgICB2aWV3LnN0eWxlLmJvcmRlckJvdHRvbSA9IFwiYmxhY2sgMC4xY2ggc29saWRcIjtcbiAgICAgICAgICAgICAgICB2aWV3LnN0eWxlLmJvcmRlclRvcCA9IFwiYmxhY2sgMC4xY2ggc29saWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZXcud2lkdGggPSBcImZpdC1jb250ZW50XCI7XG4gICAgICAgICAgICAgICAgdmlldy5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICB2aWV3LnN0eWxlLmJvcmRlclRvcCA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYWRqdXN0ZWQgPSBhcHBseVNjYWxlKHtcbiAgICAgICAgICAgICAgICB4OiBwb3MueCArIHRoaXMub2Zmc2V0WCxcbiAgICAgICAgICAgICAgICB5OiBwb3MueSArIHRoaXMub2Zmc2V0WSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmlldy5zdHlsZS5sZWZ0ID0gXCJcIiArIChhZGp1c3RlZC54IC0gKDAuNSAqIHZpZXcub2Zmc2V0V2lkdGgpKSArIFwicHhcIjtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUudG9wID0gXCJcIiArIChhZGp1c3RlZC55IC0gKDAuNSAqIHZpZXcub2Zmc2V0SGVpZ2h0KSkgKyBcInB4XCI7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBPdmVybGF5IGVsZW1lbnRzIGNoYW5nZSBzaXplIHdpdGggc2NhbGVcbiAgICAgICAgdGhpcy5yaW5nUG9zaXRpb25zLmZvckVhY2goKHBvcywgdmlldykgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWRqdXN0ZWRDZW50ZXJQb3MgPSBhcHBseVNjYWxlKHtcbiAgICAgICAgICAgICAgICB4OiBjZW50ZXIueCArIHRoaXMub2Zmc2V0WCxcbiAgICAgICAgICAgICAgICB5OiBjZW50ZXIueSArIHRoaXMub2Zmc2V0WSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmlldy5zdHlsZS5sZWZ0ID0gXCJcIiArIChhZGp1c3RlZENlbnRlclBvcy54IC0gKHBvcy5yYWRpdXMgKiBzY2FsZSkpICsgXCJweFwiO1xuICAgICAgICAgICAgdmlldy5zdHlsZS50b3AgPSBcIlwiICsgKGFkanVzdGVkQ2VudGVyUG9zLnkgLSAocG9zLnJhZGl1cyAqIHNjYWxlKSkgKyBcInB4XCI7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLndpZHRoID0gXCJcIiArIHBvcy5yYWRpdXMgKiAyICogc2NhbGUgKyBcInB4XCI7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLmFzcGVjdFJhdGlvID0gXCIxXCI7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmV4cGxhbmF0aW9uUG9wdXBzLmZvckVhY2godmFsID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZpZXcgPSB2YWwuZTtcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHZhbC5wb3M7XG4gICAgICAgICAgICBjb25zdCBhZGp1c3RlZCA9IGFwcGx5U2NhbGUoe1xuICAgICAgICAgICAgICAgIHg6IHBvcy54ICsgdGhpcy5vZmZzZXRYLFxuICAgICAgICAgICAgICAgIHk6IHBvcy55ICsgdGhpcy5vZmZzZXRZLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLmxlZnQgPSBcIlwiICsgKGFkanVzdGVkLnggLSAoMC41ICogdmlldy5vZmZzZXRXaWR0aCkpICsgXCJweFwiO1xuICAgICAgICAgICAgdmlldy5zdHlsZS50b3AgPSBcIlwiICsgKGFkanVzdGVkLnkgLSAoMC41ICogdmlldy5vZmZzZXRIZWlnaHQpKSArIFwicHhcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVwT2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWFwIGZyb20gcmVsYXRpdmUgc2NyZWVuIGNvb3JkaW5hdGVzICh3aGVyZSB0bCBvZiB0aGlzIHZpZXcgaXMgKDAsMCkpXG4gICAgICogdG8gdGhlIGludGVybmFsIGNvb3JkaW5hdGUgc3lzdGVtIHdlJ3JlIHVzaW5nLlxuICAgICAqL1xuICAgIGdldEludGVybmFsUG9zKHBpeGVsUG9zKSB7XG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHRoaXMuY2VudGVyO1xuICAgICAgICBjb25zdCBzY2FsZSA9IHRoaXMuc2NhbGU7XG4gICAgICAgIHJldHVybiBQb2ludCgocGl4ZWxQb3MueCAtIGNlbnRlci54KSAvIHNjYWxlICsgY2VudGVyLnggLSB0aGlzLm9mZnNldFgsIChwaXhlbFBvcy55IC0gY2VudGVyLnkpIC8gc2NhbGUgKyBjZW50ZXIueSAtIHRoaXMub2Zmc2V0WSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlYWN0IHRvIGFuIGVkZ2UgYmVpbmcgY2xpY2tlZC5cbiAgICAgKiBAcGFyYW0gdmlldyBJbiB0aGlzIHZpZXdcbiAgICAgKiBAcGFyYW0gZXZlbnQgVGhlIGNsaWNrIGV2ZW50XG4gICAgICovXG4gICAgZWRnZUNsaWNrZWQodmlldywgZXZlbnQpIHtcbiAgICAgICAgLy8gVE9ETzogRG9uJ3QgYWxsb3cgZHVwbGlhdGUgZXhwbGFuYXRpb24gcG9wdXBzXG4gICAgICAgIGlmICh2aWV3LmVkZ2UgaW5zdGFuY2VvZiBBcmd1bWVudF8xLkFyZ3VtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBwb3B1cCA9IG5ldyBFeHBsYW5hdGlvblBvcHVwXzEuRXhwbGFuYXRpb25Qb3B1cCh2aWV3LmVkZ2UsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHBvcHVwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZXhwbGFuYXRpb25Qb3B1cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZXhwbGFuYXRpb25Qb3B1cHNbaV0uZSA9PT0gcG9wdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwbGFuYXRpb25Qb3B1cHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgcmVhbHRpdmVYID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0aXZlWSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIC8vVE9ETzogVGhlIHBvc2l0aW9uIGlzbid0IGNvcnJlY3RcbiAgICAgICAgICAgIC8vVE9ETzogQWxnb3JpdGhtIGZvciBwaWNraW5nIHdoZXJlIHdlIHNob3VsZCBwdXQgdGhlIHBvcHVwIHNvIGl0IHN0YXlzIG91dFxuICAgICAgICAgICAgLy8gb2YgdGhlIHdheSBvZiB0aGUgZ3JhcGhcbiAgICAgICAgICAgIHRoaXMuZXhwbGFuYXRpb25Qb3B1cHMucHVzaCh7XG4gICAgICAgICAgICAgICAgZTogcG9wdXAsXG4gICAgICAgICAgICAgICAgcG9zOiB0aGlzLmdldEludGVybmFsUG9zKFBvaW50KHJlYWx0aXZlWCwgcmVsYXRpdmVZKSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBvcHVwLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgdGhpcy5hcHBlbmQocG9wdXApO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVPZmZzZXQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXBPaygpIHtcbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5yb290Tm9kZXMuc2l6ZSA+IDApO1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KShHcmFwaE1pbmlwdWxhdG9yXzEuR3JhcGhNaW5pcHVsYXRvci5pc0Nvbm5lY3RlZCh0aGlzLmdyYXBoKSwgXCJHcmFwaCBub3QgY29ubmVjdGVkXCIpO1xuICAgIH1cbiAgICBncmFwaDtcbiAgICBub2RlcztcbiAgICAvLyBUaGUgUG9zaXRpb24gb2YgdGhlIGNlbnRlciBvZiB0aGUgbm9kZS5cbiAgICBub2RlUG9zaXRpb25zO1xuICAgIGVkZ2VzO1xuICAgIGVkZ2VQb3NpdGlvbnM7XG4gICAgLy8gQW10IHRvIGFkZCB0byBsZWZ0IGNvb3JkaW5hdGVcbiAgICBvZmZzZXRYO1xuICAgIC8vIEFkZGVkIHRvIHRvcCBjb29yZGluYXRlIG9mIG5vZGVzXG4gICAgb2Zmc2V0WTtcbiAgICAvLyBpZiB0aGUgbW91c2UgaXMgZG93blxuICAgIG1vdXNlRG93biA9IGZhbHNlO1xuICAgIHRvdWNoRG93biA9IGZhbHNlO1xuICAgIHNjYWxlID0gMTtcbiAgICByb290Tm9kZXM7XG4gICAgcmluZ0VsZW1lbnRzO1xuICAgIHJpbmdQb3NpdGlvbnM7XG4gICAgLyoqXG4gICAgICogUG9zaXRpb24gb2YgdG9wIGxlZnQgb2YgcG9wdXBcbiAgICAgKi9cbiAgICBleHBsYW5hdGlvblBvcHVwcztcbiAgICBnZXN0dXJlUmVjb2duaXplcjtcbiAgICAvLyBJZiB0aGUgZ3JhcGggc2hvdWxkIGRyYXcgYXJndW1lbnQgbm9kZXMuXG4gICAgc2hvd0FyZ3VtZW50cyA9IGZhbHNlO1xuICAgIGRyYXdFZGdlTGluZXMgPSBmYWxzZTtcbiAgICBkZWJ1Z0Nvcm5lckVuYWJsZWQgPSBmYWxzZTtcbiAgICByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihfID0+IHtcbiAgICAgICAgdGhpcy5hcnJhbmdlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlT2Zmc2V0KCk7XG4gICAgfSk7XG59XG5leHBvcnRzLldlYkdyYXBoVmlldyA9IFdlYkdyYXBoVmlldztcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIndlYi1ncmFwaHZpZXdcIiwgV2ViR3JhcGhWaWV3LCB7IGV4dGVuZHM6IFwiZGl2XCIgfSk7XG5mdW5jdGlvbiBQb2ludCh4LCB5LCBhbmdsZSA9IHVuZGVmaW5lZCkge1xuICAgIGlmIChhbmdsZSA9PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogeSxcbiAgICAgICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiB4LFxuICAgICAgICB5OiB5LFxuICAgICAgICBhbmdsZTogYW5nbGUsXG4gICAgfTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXJzZSA9IHZvaWQgMDtcbi8qKlxuICogUGFyc2VzIGh1bWFuIHdyaXR0ZW4sIHV0Zi04IHR5cGUgbWF0aCBleHByZXNzaW9uc1xuICogaW50byBhY3R1YWwgbWF0aC5cbiAqIEBwYXJhbSBpbnB1dFxuICovXG5mdW5jdGlvbiBwYXJzZShpbnB1dCkge1xuICAgIGNvbnN0IG91dCA9IFtdO1xuICAgIGNvbnNvbGUubG9nKFwiSW5wdXQ6IFwiICsgaW5wdXQpO1xuICAgIGNvbnN0IGZpbmRFeHByZXNzaW9ucyA9IC9bMC05YS16QS1aXSsvO1xuICAgIGNvbnN0IGZpbmRPcGVyYXRvcnMgPSAvW1xcK1xcLVxcKlxcL1xcXl0vO1xuICAgIGNvbnNvbGUubG9nKGZpbmRFeHByZXNzaW9ucyk7XG4gICAgY29uc3Qgc3BsaXQgPSBpbnB1dC5zcGxpdChmaW5kRXhwcmVzc2lvbnMpO1xuICAgIGNvbnNvbGUubG9nKHNwbGl0KTtcbiAgICByZXR1cm4gb3V0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuZnVuY3Rpb24gcGFyc2VFeHByZXNzaW9uKGlucHV0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkXCIpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmluTWF0aEJsb2NrID0gZXhwb3J0cy5pbk1hdGggPSBleHBvcnRzLmluUm93ID0gZXhwb3J0cy5pblBhcmVuID0gdm9pZCAwO1xuLyoqXG4gKiBXcmFwcyB0aGUgZ2l2ZW4gbWF0aG1sIHN0cmluZyBpbiBtYXRobWwgcGFyZW50aGFzZXMuXG4gKiBAcGFyYW0gc3RyXG4gKi9cbmZ1bmN0aW9uIGluUGFyZW4oc3RyKSB7XG4gICAgcmV0dXJuIFwiPG1vPig8L21vPlwiICsgc3RyICsgXCI8bW8+KTwvbW8+XCI7XG59XG5leHBvcnRzLmluUGFyZW4gPSBpblBhcmVuO1xuLyoqXG4gKiBQdXRzIHRoZSBnaXZlbiBtYXRobWwgZXhwcmVzc2lvbiBpbiBhIHJvdyBzbyB0aGF0XG4gKiBpdCBkb2Vzbid0IGdldCBkaXZpZGVkIGJ5IG1hdGhqYXguXG4gKiBAcGFyYW0gc3RyXG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiBpblJvdyhzdHIpIHtcbiAgICByZXR1cm4gXCI8bXJvdz5cIiArIHN0ciArIFwiPC9tcm93PlwiO1xufVxuZXhwb3J0cy5pblJvdyA9IGluUm93O1xuLyoqXG4gKiBXcmFwcyB0aGUgZ2l2ZW4gc3RyaW5nIGluIDxtYXRoPjwvbWF0aD5cbiAqIEBwYXJhbSBzdHJcbiAqL1xuZnVuY3Rpb24gaW5NYXRoKHN0cikge1xuICAgIHJldHVybiBcIjxtYXRoPlwiICsgc3RyICsgXCI8L21hdGg+XCI7XG59XG5leHBvcnRzLmluTWF0aCA9IGluTWF0aDtcbi8qKlxuICogV3JhcHMgdGhlIGdpdmVuIHN0cmluZyBpbiA8bWF0aCBkaXNwbGF5PSdibG9jayc+PC9tYXRoPlxuICogQHBhcmFtIHN0clxuICovXG5mdW5jdGlvbiBpbk1hdGhCbG9jayhzdHIpIHtcbiAgICByZXR1cm4gXCI8bWF0aCBkaXNwbGF5PSdibG9jayc+XCIgKyBzdHIgKyBcIjwvbWF0aD5cIjtcbn1cbmV4cG9ydHMuaW5NYXRoQmxvY2sgPSBpbk1hdGhCbG9jaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYXMgPSBleHBvcnRzLmFkZEFsbCA9IGV4cG9ydHMuc2V0T2YgPSB2b2lkIDA7XG5mdW5jdGlvbiBzZXRPZiguLi5hcnIpIHtcbiAgICBjb25zdCBvdXQgPSBuZXcgU2V0KCk7XG4gICAgYXJyLmZvckVhY2goZSA9PiBvdXQuYWRkKGUpKTtcbiAgICByZXR1cm4gb3V0O1xufVxuZXhwb3J0cy5zZXRPZiA9IHNldE9mO1xuLyoqXG4gKiBBZGRzIHRoZSBnaXZlbiBlbGVtZW50cyB0byB0aGUgZ2l2ZW4gY29sbGVjdGlvblxuICogQHBhcmFtIGNvbGxlY3Rpb25cbiAqIEBwYXJhbSBlbGVtZW50c1xuICovXG5mdW5jdGlvbiBhZGRBbGwoY29sbGVjdGlvbiwgLi4uZWxlbWVudHMpIHtcbiAgICBmb3IgKGNvbnN0IGUgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgY29sbGVjdGlvbi5hZGQoZSk7XG4gICAgfVxufVxuZXhwb3J0cy5hZGRBbGwgPSBhZGRBbGw7XG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gZWxlbWVudCBpcyBpbiB0aGUgZ2l2ZW4gY29sbGVjdGlvblxuICogdXNpbmcgcmVmZXJlbmNpYWwgZXF1YWxpdHkuXG4gKiBAcGFyYW0gY29sbGVjdGlvblxuICogQHBhcmFtIGVsZW1lbnRcbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGNvbGxlY3Rpb24gaGFzIHRoZSBlbGVtZW50LCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmZ1bmN0aW9uIGhhcyhjb2xsZWN0aW9uLCBlbGVtZW50KSB7XG4gICAgZm9yIChjb25zdCBlIG9mIGNvbGxlY3Rpb24pIHtcbiAgICAgICAgaWYgKGUgPT09IGVsZW1lbnQpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5oYXMgPSBoYXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuYXNzZXJ0ID0gdm9pZCAwO1xuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGV4cHJlc3Npb24gZXZhbHVhdGVkIHRvIHRydWUuIElmIG5vdCwgdGhyb3dzIGVycm9yXG4gKiB3aXRoIHRoZSBtZXNzYWdlIGdpdmVuLlxuICogQHBhcmFtIG1zZyBEaXNwbGF5ZWQgaWYgdGhlIGV4cHJlc3Npb24gaXMgZmFsc2UuIERlZmF1bHRzIHRvIFwiRmFpbGVkIEFzc2VydFwiXG4gKi9cbmZ1bmN0aW9uIGFzc2VydChleHAsIG1zZyA9IFwiRmFpbGVkIGFzc2VydFwiKSB7XG4gICAgaWYgKCFleHApXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xufVxuZXhwb3J0cy5hc3NlcnQgPSBhc3NlcnQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBQcmltYXJ5UGFnZUxvYWRlcl8xID0gcmVxdWlyZShcIi4vUHJpbWFyeVBhZ2VMb2FkZXJcIik7XG5jb25zdCBFeHByZXNzaW9uVGVzdFBhZ2VMb2FkZXJfMSA9IHJlcXVpcmUoXCIuL0V4cHJlc3Npb25UZXN0UGFnZUxvYWRlclwiKTtcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgICogUG9wdWxhdGUgaHRtbCBlbGVtZW50cyBieSB0aGVpciBjbGFzcy5cbiAgICAgICAgICAqL1xuICAgICAgICBjb25zdCBjbGFzc2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5jbGFzc0xpc3Q7XG4gICAgICAgIGlmIChjbGFzc2VzLmNvbnRhaW5zKCdleHByZXNzaW9uVGVzdFBhZ2UnKSkge1xuICAgICAgICAgICAgKDAsIEV4cHJlc3Npb25UZXN0UGFnZUxvYWRlcl8xLmxvYWRFeHByZXNzaW9uc1Rlc3RQYWdlKSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNsYXNzZXMuY29udGFpbnMoJ3ByaW1hcnlJbnRlZ3JhdG9yJykpIHtcbiAgICAgICAgICAgICgwLCBQcmltYXJ5UGFnZUxvYWRlcl8xLmxvYWRQcmltYXJ5UGFnZSkoKTtcbiAgICAgICAgfVxuICAgIH0sIDEwMCk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9