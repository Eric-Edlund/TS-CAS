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
const MultiplicativeIdentity_1 = __webpack_require__(/*! ./mathlib/derivations/simplifications/MultiplicativeIdentity */ "./mathlib/derivations/simplifications/MultiplicativeIdentity.ts");
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
NoContextExpressionSimplificationRule_1.NoContextExpressionSimplificationRule.rules.add(new MultiplicativeIdentity_1.MultiplicativeIdentity());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHlCQUF5QjtBQUN6Qiw0QkFBNEI7QUFDNUIsNEJBQTRCLHNCQUFzQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsZ0JBQWdCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMEJBQTBCO0FBQ3JFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxtQ0FBbUM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLG9CQUFvQjtBQUNwQix1REFBdUQsZ0JBQWdCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuYWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDckJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFtQixHQUFHLGNBQWMsR0FBRyxhQUFhLEdBQUcsZUFBZTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7Ozs7Ozs7Ozs7O0FDcENOO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELFdBQVcsR0FBRyxjQUFjLEdBQUcsYUFBYTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOzs7Ozs7Ozs7OztBQ2xDRTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7Ozs7OztVQ1pkO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsNEJBQTRCLG1CQUFPLENBQUMsbURBQXFCO0FBQ3pELG1DQUFtQyxtQkFBTyxDQUFDLGlFQUE0QjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vRXhwcmVzc2lvblRlc3RQYWdlTG9hZGVyLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9QcmltYXJ5UGFnZUxvYWRlci50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vVG91Y2hHZXN0dXJlUmVjb2duaXplci50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9Bcmd1bWVudC50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9Db252ZW5pZW50RXhwcmVzc2lvbnMudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvR3JhcGgudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvR3JhcGhNaW5pcHVsYXRvci50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9SZWxhdGlvbnNoaXAudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvRGVyaXZlci50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL1JlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZS50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9hbGdlYnJhL0RpdmlkZU9uQm90aFNpZGVzLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL2FsZ2VicmEvU3VidHJhY3RGcm9tQm90aFNpZGVzLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3JlY3Vyc2lvbi50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvQXNzb2NpYXRpdmVQcm9wZXJ0eU9mUHJvZHVjdHNBbmRTdW1zLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9Db21iaW5lQ29tbW9uRmFjdG9yc011bHRpcGxpY2F0aW9uLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9Db21iaW5lQ29tbW9uVGVybXNBZGRpdGlvbi50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvQ29tYmluZUludGVnZXJGYWN0b3JzLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9FdmFsdWF0ZVN1bXMudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL0V4cG9uZW50aWFsSWRlbnRpdHkudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL011bHRpcGxpY2F0aXZlSWRlbnRpdHkudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL011bHRpcGx5RXhwb25lbnRQb3dlcnMudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL09yZGVyU3Vtcy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvUG93ZXJSdWxlLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9Qcm9kdWN0UnVsZS50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvUHVsbENvbnN0YW50c0Zyb21EZXJpdmF0aXZlcy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvUXVvdGllbnRSdWxlLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9SZWR1Y2VSZWR1Y2libGVzLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9TdW1Db2VmZmljaWVudHNPZkFkZGVkVGVybXMudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL1VTdWJzdGl0dXRpb24udHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvRGVyaXZhdGl2ZS50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9leHByZXNzaW9ucy9FeHBvbmVudC50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9leHByZXNzaW9ucy9FeHByZXNzaW9uLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2V4cHJlc3Npb25zL0ZyYWN0aW9uLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2V4cHJlc3Npb25zL0ludGVnZXIudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvSW50ZWdyYWwudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvTWF0aEVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvUHJvZHVjdC50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9leHByZXNzaW9ucy9TdW0udHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvVmFyaWFibGUudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdWllbGVtZW50cy9Bcmd1bWVudE5vZGVWaWV3LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3VpZWxlbWVudHMvRWRnZVZpZXcudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdWllbGVtZW50cy9FZGl0YWJsZU1hdGhWaWV3LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3VpZWxlbWVudHMvRXhwbGFuYXRpb25Qb3B1cC50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi91aWVsZW1lbnRzL0V4cHJlc3Npb25Ob2RlVmlldy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi91aWVsZW1lbnRzL0dyYXBoTm9kZVZpZXcudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdWllbGVtZW50cy9VSVByZWZlcmVuY2VzLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3VpZWxlbWVudHMvV2ViR3JhcGhWaWV3LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3VzZXJpbnB1dC9QYXJzZXIudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdXRpbC9NYXRoTUxIZWxwZXJzLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3V0aWwvVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWIudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdXRpbC9hc3NlcnQudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubG9hZEV4cHJlc3Npb25zVGVzdFBhZ2UgPSB2b2lkIDA7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgRGVyaXZhdGl2ZV8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9leHByZXNzaW9ucy9EZXJpdmF0aXZlXCIpO1xuY29uc3QgRXhwb25lbnRfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZXhwcmVzc2lvbnMvRXhwb25lbnRcIik7XG5jb25zdCBGcmFjdGlvbl8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9leHByZXNzaW9ucy9GcmFjdGlvblwiKTtcbmNvbnN0IEludGVncmFsXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2V4cHJlc3Npb25zL0ludGVncmFsXCIpO1xuY29uc3QgRWRpdGFibGVNYXRoVmlld18xID0gcmVxdWlyZShcIi4vbWF0aGxpYi91aWVsZW1lbnRzL0VkaXRhYmxlTWF0aFZpZXdcIik7XG4vKipcbiAqIENhbGxlZCBhZnRlciB0aGUgZG9tIGlzIGxvYWRlZC5cbiAqIFBvcHVsYXRlcyB0aGUgYm9keSBlbGVtZW50IG9mIHRoZSBkb2N1bWVudFxuICogd2l0aCB0aGUgdGVzdCBleHByZXNzaW9ucyBwYWdlXG4gKi9cbmZ1bmN0aW9uIGxvYWRFeHByZXNzaW9uc1Rlc3RQYWdlKCkge1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICAgIGZ1bmN0aW9uIHAoY29udGVudCkge1xuICAgICAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBlLmlubmVyVGV4dCA9IGNvbnRlbnQ7XG4gICAgICAgIHBhZ2UuYXBwZW5kKGUpO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdmlldyhleHApIHtcbiAgICAgICAgY29uc3QgZSA9IG5ldyBFZGl0YWJsZU1hdGhWaWV3XzEuRWRpdGFibGVNYXRoVmlldygpO1xuICAgICAgICBlLnZhbHVlID0gZXhwO1xuICAgICAgICBwYWdlLmFwcGVuZChlKTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIHAoXCJUaGUgc3VtIG9mIGEsIGEsIGFuZCBhXCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bSkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSkpO1xuICAgIHAoXCJJbnRlZ3JhbCBvZiBhIG92ZXIgYiB3aXRoIHJlc3BlY3QgdG8gY1wiKTtcbiAgICB2aWV3KEludGVncmFsXzEuSW50ZWdyYWwub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5iKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYykpO1xuICAgIHAoXCJJbnRlZ3JhbCBvZiAoYSBvdmVyIGEpIG92ZXIgYiB3aXRoIHJlc3BlY3QgdG8gY1wiKTtcbiAgICB2aWV3KEludGVncmFsXzEuSW50ZWdyYWwub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5iKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYykpO1xuICAgIHAoXCJJbnRlZ3JhbCBvZiAoKGEgb3ZlciBhKSBvdmVyIGEpIG92ZXIgYiB3aXRoIHJlc3BlY3QgdG8gY1wiKTtcbiAgICB2aWV3KEludGVncmFsXzEuSW50ZWdyYWwub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5iKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYykpO1xuICAgIHAoXCJJbnRlZ3JhbCBvZiAoKChhIG92ZXIgYSkgb3ZlciBhKSBvdmVyIGEpIG92ZXIgYiB3aXRoIHJlc3BlY3QgdG8gY1wiKTtcbiAgICB2aWV3KEludGVncmFsXzEuSW50ZWdyYWwub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5iKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYykpO1xuICAgIHAoXCJJbnRlZ3JhbCBvZiAoKCgoYSBvdmVyIGEpIG92ZXIgYSkgb3ZlciBhKSBvdmVyIGEpIG92ZXIgYiB3aXRoIHJlc3BlY3QgdG8gY1wiKTtcbiAgICB2aWV3KEludGVncmFsXzEuSW50ZWdyYWwub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5hKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5iKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYykpO1xuICAgIHAoXCJcIik7XG4gICAgdmlldygoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuaW50KShGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5uZWdhdGl2ZSkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYiksIEV4cG9uZW50XzEuRXhwb25lbnQub2YoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bSkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSksIEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSksICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDIpKSkpLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdCkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMiksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmEpKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCkpO1xuICAgIHAoXCJQcm9kdWN0IG9mIHggYW5kIHlcIik7XG4gICAgdmlldygoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdCkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueSkpO1xuICAgIHAoXCJQcm9kdWN0IG9mICh4LTEpLCAtMSBhbmQgeVwiKTtcbiAgICB2aWV3KCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5wcm9kdWN0KSgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtKShDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54LCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubmVnYXRpdmUpKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDEpKSksICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKC0xKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueSkpO1xuICAgIHAoXCJOZWdhdGlvbiBvZiB4IChSZXBlZCBhcyB0aGUgcHJvcGR1Y3Qgb2YgLTEgYW5kIHgpXCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm5lZ2F0aXZlKShDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54KSk7XG4gICAgcChcIlN1bSBvZiB4IGFuZCAteFwiKTtcbiAgICB2aWV3KCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKENvbnZlbmllbnRFeHByZXNzaW9uc18xLngsICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5uZWdhdGl2ZSkoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCkpKTtcbiAgICBwKFwiU3VtIG9mIC14IGFuZCB4XCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bSkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm5lZ2F0aXZlKShDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54KSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCkpO1xuICAgIHAoXCJEZXJpdmF0aXZlIG9mIHRoZSBzcXVhcmUgb2YgeCB3aXRoIHJlc3BlY3QgdG8geFwiKTtcbiAgICB2aWV3KERlcml2YXRpdmVfMS5EZXJpdmF0aXZlLm9mKEV4cG9uZW50XzEuRXhwb25lbnQub2YoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCwgKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMikpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54KSk7XG4gICAgcChcIkRlcml2YXRpdmUgKCh4XjIpIC0gMikgd2l0aCByZXNwZWN0IHRvIHhcIik7XG4gICAgdmlldyhEZXJpdmF0aXZlXzEuRGVyaXZhdGl2ZS5vZihFeHBvbmVudF8xLkV4cG9uZW50Lm9mKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKENvbnZlbmllbnRFeHByZXNzaW9uc18xLngsICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKC0yKSksICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDIpKSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCkpO1xuICAgIHAoXCJcIik7XG4gICAgdmlldygoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgxKSk7XG4gICAgcChcIlwiKTtcbiAgICB2aWV3KCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDEpKTtcbiAgICBwKFwiXCIpO1xuICAgIHZpZXcoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSkpO1xuICAgIHAoXCJcIik7XG4gICAgdmlldygoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgxKSk7XG59XG5leHBvcnRzLmxvYWRFeHByZXNzaW9uc1Rlc3RQYWdlID0gbG9hZEV4cHJlc3Npb25zVGVzdFBhZ2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubG9hZFByaW1hcnlQYWdlID0gdm9pZCAwO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IFBhcnNlcl8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi91c2VyaW5wdXQvUGFyc2VyXCIpO1xuY29uc3QgV2ViR3JhcGhWaWV3XzEgPSByZXF1aXJlKFwiLi9tYXRobGliL3VpZWxlbWVudHMvV2ViR3JhcGhWaWV3XCIpO1xuY29uc3QgR3JhcGhfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvR3JhcGhcIik7XG5jb25zdCBEZXJpdmVyXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL0Rlcml2ZXJcIik7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG5jb25zdCBDb21iaW5lQ29tbW9uVGVybXNBZGRpdGlvbl8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvQ29tYmluZUNvbW1vblRlcm1zQWRkaXRpb25cIik7XG5jb25zdCBDb21iaW5lQ29tbW9uRmFjdG9yc011bHRpcGxpY2F0aW9uXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9Db21iaW5lQ29tbW9uRmFjdG9yc011bHRpcGxpY2F0aW9uXCIpO1xuY29uc3QgRXZhbHVhdGVTdW1zXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9FdmFsdWF0ZVN1bXNcIik7XG5jb25zdCBPcmRlclN1bXNfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL09yZGVyU3Vtc1wiKTtcbmNvbnN0IFJlZHVjZVJlZHVjaWJsZXNfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL1JlZHVjZVJlZHVjaWJsZXNcIik7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2V4cHJlc3Npb25zL0V4cHJlc3Npb25cIik7XG5jb25zdCBSZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZGVyaXZhdGlvbnMvUmVsYXRpb25hbERlcml2YXRpb25SdWxlXCIpO1xuY29uc3QgU3VidHJhY3RGcm9tQm90aFNpZGVzXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL2FsZ2VicmEvU3VidHJhY3RGcm9tQm90aFNpZGVzXCIpO1xuY29uc3QgRGl2aWRlT25Cb3RoU2lkZXNfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZGVyaXZhdGlvbnMvYWxnZWJyYS9EaXZpZGVPbkJvdGhTaWRlc1wiKTtcbmNvbnN0IFZhcmlhYmxlXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2V4cHJlc3Npb25zL1ZhcmlhYmxlXCIpO1xuY29uc3QgU3VtQ29lZmZpY2llbnRzT2ZBZGRlZFRlcm1zXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9TdW1Db2VmZmljaWVudHNPZkFkZGVkVGVybXNcIik7XG5jb25zdCBVU3Vic3RpdHV0aW9uXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9VU3Vic3RpdHV0aW9uXCIpO1xuY29uc3QgUG93ZXJSdWxlXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9Qb3dlclJ1bGVcIik7XG5jb25zdCBQdWxsQ29uc3RhbnRzRnJvbURlcml2YXRpdmVzXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9QdWxsQ29uc3RhbnRzRnJvbURlcml2YXRpdmVzXCIpO1xuY29uc3QgRGVyaXZhdGl2ZV8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9leHByZXNzaW9ucy9EZXJpdmF0aXZlXCIpO1xuY29uc3QgRXhwb25lbnRfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZXhwcmVzc2lvbnMvRXhwb25lbnRcIik7XG5jb25zdCBFeHBvbmVudGlhbElkZW50aXR5XzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9FeHBvbmVudGlhbElkZW50aXR5XCIpO1xuY29uc3QgQXNzb2NpYXRpdmVQcm9wZXJ0eU9mUHJvZHVjdHNBbmRTdW1zXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9Bc3NvY2lhdGl2ZVByb3BlcnR5T2ZQcm9kdWN0c0FuZFN1bXNcIik7XG5jb25zdCBDb21iaW5lSW50ZWdlckZhY3RvcnNfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL0NvbWJpbmVJbnRlZ2VyRmFjdG9yc1wiKTtcbmNvbnN0IFByb2R1Y3RSdWxlXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2Rlcml2YXRpb25zL3NpbXBsaWZpY2F0aW9ucy9Qcm9kdWN0UnVsZVwiKTtcbmNvbnN0IE11bHRpcGx5RXhwb25lbnRQb3dlcnNfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL011bHRpcGx5RXhwb25lbnRQb3dlcnNcIik7XG5jb25zdCBRdW90aWVudFJ1bGVfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvZGVyaXZhdGlvbnMvc2ltcGxpZmljYXRpb25zL1F1b3RpZW50UnVsZVwiKTtcbmNvbnN0IEZyYWN0aW9uXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2V4cHJlc3Npb25zL0ZyYWN0aW9uXCIpO1xuY29uc3QgTXVsdGlwbGljYXRpdmVJZGVudGl0eV8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9kZXJpdmF0aW9ucy9zaW1wbGlmaWNhdGlvbnMvTXVsdGlwbGljYXRpdmVJZGVudGl0eVwiKTtcbk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlLnJ1bGVzLmFkZChuZXcgQ29tYmluZUNvbW1vblRlcm1zQWRkaXRpb25fMS5Db21iaW5lQ29tbW9uVGVybXNBZGRpdGlvbigpKTtcbk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlLnJ1bGVzLmFkZChuZXcgQ29tYmluZUNvbW1vbkZhY3RvcnNNdWx0aXBsaWNhdGlvbl8xLkNvbWJpbmVDb21tb25GYWN0b3JzTXVsdGlwbGljYXRpb24oKSk7XG5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZS5ydWxlcy5hZGQobmV3IEV2YWx1YXRlU3Vtc18xLkV2YWx1YXRlU3VtcygpKTtcbk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlLnJ1bGVzLmFkZChuZXcgT3JkZXJTdW1zXzEuT3JkZXJTdW1zKCkpO1xuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUucnVsZXMuYWRkKG5ldyBSZWR1Y2VSZWR1Y2libGVzXzEuUmVkdWNlUmVkdWNpYmxlcygpKTtcbk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlLnJ1bGVzLmFkZChuZXcgU3VtQ29lZmZpY2llbnRzT2ZBZGRlZFRlcm1zXzEuU3VtQ29lZmZpY2llbnRzT2ZBZGRlZFRlcm1zKCkpO1xuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUucnVsZXMuYWRkKG5ldyBVU3Vic3RpdHV0aW9uXzEuVVN1YnN0aXR1dGlvbigpKTtcbk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlLnJ1bGVzLmFkZChuZXcgUG93ZXJSdWxlXzEuUG93ZXJSdWxlKCkpO1xuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUucnVsZXMuYWRkKG5ldyBQdWxsQ29uc3RhbnRzRnJvbURlcml2YXRpdmVzXzEuUHVsbENvbnN0YW50c0Zyb21EZXJpdmF0aXZlcygpKTtcbk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlLnJ1bGVzLmFkZChuZXcgRXhwb25lbnRpYWxJZGVudGl0eV8xLkV4cG9uZW50aWFsSWRlbnRpdHkoKSk7XG5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZS5ydWxlcy5hZGQobmV3IEFzc29jaWF0aXZlUHJvcGVydHlPZlByb2R1Y3RzQW5kU3Vtc18xLkFzc29jaWF0aXZlUHJvcGVydHlPZlByb2R1Y3RzQW5kU3VtcygpKTtcbk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlLnJ1bGVzLmFkZChuZXcgQ29tYmluZUludGVnZXJGYWN0b3JzXzEuQ29tYmluZUludGVnZXJGYWN0b3JzKCkpO1xuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUucnVsZXMuYWRkKG5ldyBQcm9kdWN0UnVsZV8xLlByb2R1Y3RSdWxlKCkpO1xuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUucnVsZXMuYWRkKG5ldyBNdWx0aXBseUV4cG9uZW50UG93ZXJzXzEuTXVsdGlwbHlFeHBvbmVudFBvd2VycygpKTtcbk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlLnJ1bGVzLmFkZChuZXcgUXVvdGllbnRSdWxlXzEuUXVvdGllbnRSdWxlKCkpO1xuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUucnVsZXMuYWRkKG5ldyBNdWx0aXBsaWNhdGl2ZUlkZW50aXR5XzEuTXVsdGlwbGljYXRpdmVJZGVudGl0eSgpKTtcblJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZV8xLlJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZS5ydWxlcy5hZGQobmV3IFN1YnRyYWN0RnJvbUJvdGhTaWRlc18xLlN1YnRyYWN0RnJvbUJvdGhTaWRlcygpKTtcblJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZV8xLlJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZS5ydWxlcy5hZGQobmV3IERpdmlkZU9uQm90aFNpZGVzXzEuRGl2aWRlT25Cb3RoU2lkZXMoKSk7XG4vKipcbiAqIENhbGxlZCBhZnRlciBET00gaXMgbG9hZGVkLlxuICogU3Vic3RpdHV0ZXMgdGhlIGJvZHkgZWxlbWVudCBpbiB0aGUgZG9jdW1lbnRcbiAqIHdpdGggdGhlIHByaW1hcnkgaW50ZWdyYXRvciB2aWV3LlxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gbG9hZFByaW1hcnlQYWdlKCkge1xuICAgIC8vY29uc3Qgcm9vdCA9IERlcml2YXRpdmUub2Yoc3VtKGEsIGEsIHByb2R1Y3QobnVtKDIpLCBiKSksIGEpXG4gICAgLy9jb25zdCByb290ID0gRGVyaXZhdGl2ZS5vZihwcm9kdWN0KG51bSgzKSwgRXhwb25lbnQub2YoeCwgbnVtKDIpKSwgRXhwb25lbnQub2YoeCwgbnVtKDMpKSksIHgpXG4gICAgLy9jb25zdCByb290ID0gcHJvZHVjdChFeHBvbmVudC5vZih4LCBudW0oMykpLCBFeHBvbmVudC5vZih4LCBudW0oNCkpLCB4LCB4KVxuICAgIGNvbnN0IHJvb3QgPSBEZXJpdmF0aXZlXzEuRGVyaXZhdGl2ZS5vZihGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKEV4cG9uZW50XzEuRXhwb25lbnQub2YoQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCwgKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMikpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS54KSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEueCk7XG4gICAgY29uc3QgZ3JhcGggPSBuZXcgR3JhcGhfMS5HcmFwaCgpLmFkZE5vZGUocm9vdCk7XG4gICAgY29uc3QgZGVyaXZlciA9IG5ldyBEZXJpdmVyXzEuRGVyaXZlcihncmFwaCk7XG4gICAgZGVyaXZlci5leHBhbmQoKTtcbiAgICAvL2NvbnNvbGUubG9nKFwiUmVzdWx0OiBcIiArIGdyYXBoKVxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4ge1xuICAgICAgICAoMCwgUGFyc2VyXzEucGFyc2UpKGlucHV0LnZhbHVlKTtcbiAgICB9KTtcbiAgICBjb25zdCBvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dGJveFwiKTtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgIHNob3dBcmd1bWVudHM6IGZhbHNlLFxuICAgICAgICBkcmF3RWRnZUxpbmVzOiB0cnVlLFxuICAgICAgICBkZWJ1Z0Nvcm5lckVuYWJsZWQ6IHRydWUsXG4gICAgfTtcbiAgICBjb25zdCBncmFwaFZpZXcgPSBuZXcgV2ViR3JhcGhWaWV3XzEuV2ViR3JhcGhWaWV3KGdyYXBoLCBuZXcgU2V0KFtyb290XSksIGNvbmZpZyk7XG4gICAgZ3JhcGhWaWV3LnNldE5vZGVDb2xvcmluZ1NjaGVtZShuID0+IHtcbiAgICAgICAgaWYgKG4gaW5zdGFuY2VvZiBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbikge1xuICAgICAgICAgICAgaWYgKCFkZXJpdmVyLmlzU2ltcGxpZmllZChuKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJsaWdodGdyYXlcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKCFuLmlzSGVhbHRoeSlcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJsaWdodHJlZFwiO1xuICAgICAgICAgICAgZWxzZSBpZiAobiBpbnN0YW5jZW9mIFZhcmlhYmxlXzEuVmFyaWFibGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwib3JhbmdlXCI7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibGlnaHRibHVlXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiYmxhY2tcIjtcbiAgICB9KTtcbiAgICBncmFwaFZpZXcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWItZ3JhcGh2aWV3XCIpO1xuICAgIG91dC5hcHBlbmRDaGlsZChncmFwaFZpZXcpO1xufVxuZXhwb3J0cy5sb2FkUHJpbWFyeVBhZ2UgPSBsb2FkUHJpbWFyeVBhZ2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVG91Y2hHZXN0dXJlUmVjb2duaXplciA9IHZvaWQgMDtcbi8qKlxuICogSW50ZXJwcmV0IGNvbXBsaWNhdGVkIHRvdWNoIGdlc3R1cmUgZGF0YS5cbiAqL1xuY2xhc3MgVG91Y2hHZXN0dXJlUmVjb2duaXplciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubW92ZUxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLnBpbmNoTGlzdGVuZXJzID0gW107XG4gICAgfVxuICAgIGFkZE1vdmVMaXN0ZW5lcihjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm1vdmVMaXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gYSBwaW5jaCBnZXN0dXJlIGhhcyBiZWVuIGRldGVjdGVkLlxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBUYWtlcyBhIGNlbnRlciBjb29yZGluYXRlIHRoYXQncyB0aGUgYXZlcmFnZSBvZiB0aGUgZmluZ2VyIHBvc2l0aW9ucyxcbiAgICAgKiAgICAgICAgICAgICAgdGhlIGNoYW5nZSBpbiBzY2FsZSBzaW5jZSB0aGUgbGFzdCBjYWxsIG9uICgwLCBpbmZpbml0eSkgd2hlcmUgMSBpcyBubyBjaGFuZ2UsXG4gICAgICogICAgICAgICAgICAgIGFuZCB0aGUgbnVtYmVyIG9mIGZpbmdlcnMgaW4gdGhlIGdlc3R1cmUgKGFuIGludGVnZXIpLlxuICAgICAqL1xuICAgIGFkZFBpbmNoTGlzdGVuZXIoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5waW5jaExpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2hvdWxkIHRha2UgYWxsIHRvdWNoIGV2ZW50cyBmcm9tIHRoZSB2aWV3IHVzaW5nIGl0LlxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHByb2Nlc3NUb3VjaERvd24oZXZlbnQpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2hvdWxkIHRha2UgYWxsIHRvdWNoIGV2ZW50cyBmcm9tIHRoZSB2aWV3IHVzaW5nIGl0LlxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHByb2Nlc3NUb3VjaE1vdmUoZXZlbnQpIHtcbiAgICAgICAgZm9yIChjb25zdCBjaGFuZ2VkIG9mIGV2ZW50LmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICAgICAgICBjaGFuZ2VkLmNsaWVudFg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU2hvdWxkIHRha2UgYWxsIHRvdWNoIGV2ZW50cyBmcm9tIHRoZSB2aWV3IHVzaW5nIGl0LlxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHByb2Nlc3NUb3VjaEVuZChldmVudCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTaG91bGQgdGFrZSBhbGwgdG91Y2ggZXZlbnRzIGZyb20gdGhlIHZpZXcgdXNpbmcgaXQuXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICovXG4gICAgcHJvY2Vzc1RvdWNoQ2FuY2VsKGV2ZW50KSB7XG4gICAgfVxuICAgIC8vcHJpdmF0ZSBsYXN0WDogTWFwPFRvdWNoXG4gICAgbW92ZUxpc3RlbmVycztcbiAgICBwaW5jaExpc3RlbmVycztcbn1cbmV4cG9ydHMuVG91Y2hHZXN0dXJlUmVjb2duaXplciA9IFRvdWNoR2VzdHVyZVJlY29nbml6ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQXJndW1lbnQgPSB2b2lkIDA7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0XCIpO1xuLyoqXG4gKiBDb25uZWN0cyBvbmUgb3IgbW9yZSBub2RlcyAoZ3JvdW5kcykgdG8gb25lIG9yIG1vcmUgbm9kZXMgKGNsYWltcykuXG4gKiBDb250YWlucyBhbiBleHBsYW5hdGlvbi9hcmd1bWVudCBmb3IgdGhlIGNvbm5lY3Rpb24uXG4gKi9cbmNsYXNzIEFyZ3VtZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihncm91bmRzLCBjbGFpbSwgYXJndW1lbnQpIHtcbiAgICAgICAgdGhpcy5ncm91bmRzID0gZ3JvdW5kcztcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLmdyb3VuZHMpO1xuICAgICAgICB0aGlzLmNsYWltID0gY2xhaW07XG4gICAgICAgIHRoaXMuYXJndW1lbnQgPSBhcmd1bWVudDtcbiAgICAgICAgdGhpcy5yZXBPaygpO1xuICAgIH1cbiAgICBleHByZXNzaW9uRWRnZSA9IHRydWU7XG4gICAgZ2V0IHJlbGF0aW9uc2hpcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xhaW0ucjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBcIkFyZ3VtZW50IFwiICsgdGhpcy5jbGFpbS5yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUd28gb3V0IG1hdGggZ3JhcGggbm9kZXMgdGhhdCBhcmUgcmVsYXRlZCBieSB0aGlzIEFydWdtZW50LlxuICAgICAqL1xuICAgIGNsYWltO1xuICAgIC8qKlxuICAgICAqIFRoZSBleHBsYW5hdGlvbiB0aGF0IGNvbm5lY3RzIHRoZSBhcmd1bWVudCdzIGdyb3VuZHMgdG9cbiAgICAgKiBpdCdzIGNsYWltZWQgcmVsYXRpb25zaGlwIGJldHdlZW4gdGhlIHR3byBvdXQgbm9kZXMuXG4gICAgICpcbiAgICAgKi9cbiAgICBhcmd1bWVudDtcbiAgICAvKipcbiAgICAgKiBOb2RlcyB0aGF0IGhhdmUgYW4gZWRnZSBwb2ludGluZyB0byB0aGlzIGFyZ3VtZW50LlxuICAgICAqL1xuICAgIGdyb3VuZHM7XG4gICAgcmVwT2soKSB7XG4gICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMuZ3JvdW5kcyAhPSBudWxsKTtcbiAgICAgICAgZm9yIChjb25zdCBncm91bmQgb2YgdGhpcy5ncm91bmRzKSB7XG4gICAgICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KShncm91bmQgIT0gbnVsbCAmJiBncm91bmQgIT0gdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLmNsYWltLm4gIT0gbnVsbCAmJiB0aGlzLmNsYWltLm4gIT0gdW5kZWZpbmVkKTtcbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5jbGFpbS5uMSAhPSBudWxsICYmIHRoaXMuY2xhaW0ubjEgIT0gdW5kZWZpbmVkKTtcbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5jbGFpbS5yICE9IHVuZGVmaW5lZCAmJiB0aGlzLmNsYWltLnIgIT0gbnVsbCk7XG4gICAgfVxufVxuZXhwb3J0cy5Bcmd1bWVudCA9IEFyZ3VtZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnkgPSBleHBvcnRzLnggPSBleHBvcnRzLmYgPSBleHBvcnRzLmUgPSBleHBvcnRzLmQgPSBleHBvcnRzLmMgPSBleHBvcnRzLmIgPSBleHBvcnRzLmEgPSBleHBvcnRzLnByb2R1Y3RBbmROb3RUaW1lc09uZSA9IGV4cG9ydHMucHJvZHVjdE9yTm90ID0gZXhwb3J0cy5lcXVpdmFsZW5jZUFyZ3VtZW50ID0gZXhwb3J0cy5pbnQgPSBleHBvcnRzLnYgPSBleHBvcnRzLm51bSA9IGV4cG9ydHMubmVnYXRpdmUgPSBleHBvcnRzLnByb2R1Y3QgPSBleHBvcnRzLnJlbW92ZU5ldyA9IGV4cG9ydHMucmVtb3ZlID0gZXhwb3J0cy5vcmRlcmVkUHJvZHVjdCA9IGV4cG9ydHMuc3VtT3JOb3QgPSBleHBvcnRzLnN1bUludHVpdGl2ZSA9IGV4cG9ydHMuc3VtRXZhbEludGVnZXJUZXJtcyA9IGV4cG9ydHMub3JkZXJlZFN1bSA9IGV4cG9ydHMuc3VtID0gZXhwb3J0cy5mcmFjdGlvbiA9IHZvaWQgMDtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuL2V4cHJlc3Npb25zL0ludGVnZXJcIik7XG5jb25zdCBGcmFjdGlvbl8xID0gcmVxdWlyZShcIi4vZXhwcmVzc2lvbnMvRnJhY3Rpb25cIik7XG5jb25zdCBJbnRlZ3JhbF8xID0gcmVxdWlyZShcIi4vZXhwcmVzc2lvbnMvSW50ZWdyYWxcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi9leHByZXNzaW9ucy9Qcm9kdWN0XCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi9leHByZXNzaW9ucy9TdW1cIik7XG5jb25zdCBWYXJpYWJsZV8xID0gcmVxdWlyZShcIi4vZXhwcmVzc2lvbnMvVmFyaWFibGVcIik7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4vQXJndW1lbnRcIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4vdXRpbC9hc3NlcnRcIik7XG5mdW5jdGlvbiBmcmFjdGlvbihudW0sIGRlbikge1xuICAgIHJldHVybiBGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKG51bSwgZGVuKTtcbn1cbmV4cG9ydHMuZnJhY3Rpb24gPSBmcmFjdGlvbjtcbi8qKlxuICogQSBjb252ZW5pZW5jZSBtZXRob2QgZm9yIFN1bS5vZigpXG4gKi9cbmZ1bmN0aW9uIHN1bSguLi50ZXJtcykge1xuICAgIHJldHVybiBTdW1fMS5TdW0ub2YodGVybXMpO1xufVxuZXhwb3J0cy5zdW0gPSBzdW07XG4vKipcbiAqIEdldHMgdGhlIGNvcnJlY3RseSBvcmRlcmVkIHN1bSBvZiB0aGUgZ2l2ZW4gc3VtLlxuICogMSArIGEgPSBhICsgMVxuICogRm9sbG93cyB0aGUgc3BlYyBnaXZlbiBpbiB0aGUgU3VtLnRzIGZpbGUuXG4gKiBAcGFyYW0gc3VtXG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiBvcmRlcmVkU3VtKHN1bSkge1xuICAgIGNvbnN0IG9yZGVyZWQgPSAoMCwgU3VtXzEub3JkZXJUZXJtcykoLi4uc3VtLnRlcm1zKTtcbiAgICByZXR1cm4gU3VtXzEuU3VtLm9mKG9yZGVyZWQpO1xufVxuZXhwb3J0cy5vcmRlcmVkU3VtID0gb3JkZXJlZFN1bTtcbi8qKlxuICogUmV0dXJucyB0aGUgc3VtIG9mIHRoZSBnaXZlbiB0ZXJtcywgZXZhbHVhdGluZyBhbnkgaW50ZWdlciB0ZXJtcy5cbiAqIFB1dHMgZmluYWwgY29uc3RhbnQgaW50ZWdlciBhcyB0aGUgbGFzdCB0ZXJtLlxuICogSWYgdGhlIHJlc3VsdCBpcyBhIHN1bSwgaXQgd2lsbCBub3QgaGF2ZSB0aGUgaW50ZWdlciAwIGFzIGEgdGVybS5cbiAqIElmIGFsbCBnaXZlbiB0ZXJtcyBzdW0gdG8gemVybywgdGhlIGludGVnZXIgemVybyB3aWxsIGJlIHJldHVybmVkLlxuICogQHBhcmFtIHRlcm1zXG4gKi9cbmZ1bmN0aW9uIHN1bUV2YWxJbnRlZ2VyVGVybXMoLi4udGVybXMpIHtcbiAgICBjb25zdCBpbnRlZ2VycyA9IHRlcm1zLmZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcikubGVuZ3RoO1xuICAgIGlmIChpbnRlZ2VycyA8IDIpXG4gICAgICAgIHJldHVybiBzdW0oLi4udGVybXMpO1xuICAgIGNvbnN0IG5vbkludFRlcm1zID0gdGVybXMuZmlsdGVyKGUgPT4gIShlIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpKTtcbiAgICBjb25zdCBpbnRUZXJtID0gdGVybXMuZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKVxuICAgICAgICAubWFwKGUgPT4gZSlcbiAgICAgICAgLnJlZHVjZSgoYSwgYikgPT4gbnVtKGEudmFsdWUgKyBiLnZhbHVlKSk7XG4gICAgaWYgKGludFRlcm0udmFsdWUgPT0gMCkge1xuICAgICAgICBpZiAobm9uSW50VGVybXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHN1bSguLi5ub25JbnRUZXJtcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobm9uSW50VGVybXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBub25JbnRUZXJtc1swXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpbnRUZXJtO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAobm9uSW50VGVybXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBpbnRUZXJtO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHN1bSguLi5ub25JbnRUZXJtcywgaW50VGVybSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLnN1bUV2YWxJbnRlZ2VyVGVybXMgPSBzdW1FdmFsSW50ZWdlclRlcm1zO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBzdW0gb2YgdGhlIGdpdmVuIHRlcm1zLiBFdmFsdWF0ZXMgYW55XG4gKiBpbnRlZ2VyIHRlcm1zLiBBZGRpdGlvbmFsbHkgY2FuY2VscyBvdXQgYW55IHBvc2l0aXZlXG4gKiBuZWdhdGl2ZSB0ZXJtcy5cbiAqXG4gKiBTaW1wbGlmaWVzXG4gKiAgeCArIGEgLSBhID0geFxuICogeCArIGFiIC0gYWIgPSB4XG4gKiB4ICsgMmFiIC0gMmFiID0geFxuICogYSAtIGEgPSAwXG4gKlxuICogRG9lc24ndCBhZmZlY3RcbiAqICB4ICsgMmEgLSBhXG4gKiBAcGFyYW0gdGVybXNcbiAqL1xuZnVuY3Rpb24gc3VtSW50dWl0aXZlKC4uLnRlcm1zKSB7XG4gICAgY29uc3QgaW50RXZhbCA9IHN1bUV2YWxJbnRlZ2VyVGVybXMoLi4udGVybXMpO1xuICAgIGlmIChpbnRFdmFsLmNsYXNzICE9IFN1bV8xLlN1bVR5cGUpXG4gICAgICAgIHJldHVybiBpbnRFdmFsO1xuICAgIHRlcm1zID0gWy4uLmludEV2YWwudGVybXNdO1xuICAgIC8vIEZpbmQgb3Bwb3NpdGUgcGFpcnNcbiAgICAvLyBUaGV5IHdpbGwgdGFrZSB0aGUgZm9ybVxuICAgIC8vICAgICAgZXhwICsgLTEgKiBleHBcbiAgICAvLyBJIGFzc3VtZSBoZXJlIHRoYXQgdGhlIG9ubHkgd2F5IHRvIG5vdGF0ZVxuICAgIC8vIG5lZ2F0aXZpdHkgaXMgYnkgbXVsdGlwbHlpbmcgYnkgLTFcbiAgICB0ZXJtczogZm9yIChjb25zdCB0IG9mIHRlcm1zKSB7XG4gICAgICAgIGNvbnN0IG90aGVyVGVybXMgPSBbLi4udGVybXNdO1xuICAgICAgICByZW1vdmUob3RoZXJUZXJtcywgdCk7XG4gICAgICAgIGZvciAoY29uc3Qgb3RoZXIgb2Ygb3RoZXJUZXJtcykge1xuICAgICAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3QpIHtcbiAgICAgICAgICAgICAgICBpZiAob3RoZXIuaXNOZWdhdGlvbiAmJiBvdGhlci5uZWdhdGlvbiA9PT0gdCkge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmUodGVybXMsIG90aGVyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlKHRlcm1zLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWUgdGVybXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0ZXJtcy5sZW5ndGggPT0gMClcbiAgICAgICAgcmV0dXJuIEludGVnZXJfMS5JbnRlZ2VyLm9mKDApO1xuICAgIGVsc2UgaWYgKHRlcm1zLmxlbmd0aCA9PSAxKVxuICAgICAgICByZXR1cm4gdGVybXNbMF07XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gc3VtKC4uLnRlcm1zKTtcbn1cbmV4cG9ydHMuc3VtSW50dWl0aXZlID0gc3VtSW50dWl0aXZlO1xuZnVuY3Rpb24gc3VtT3JOb3QoLi4udGVybXMpIHtcbiAgICBpZiAodGVybXMubGVuZ3RoID09IDEpXG4gICAgICAgIHJldHVybiB0ZXJtc1swXTtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBzdW0oLi4udGVybXMpO1xufVxuZXhwb3J0cy5zdW1Pck5vdCA9IHN1bU9yTm90O1xuLyoqXG4gKiBQcm9kdWNlcyBhIHByb2R1Y3QgZnJvbSB0aGUgZ2l2ZW4gZmFjdG9yc1xuICogd2hlcmUgdGhlIGZhY3RvcnMgYXJlIG9yZGVyZWQgYWNjb3JkaW5nIHRvIGNvbnZlbnRpb24uXG4gKiBAcGFyYW0gZmFjdG9ycyBBdCBsZWFzdCAyXG4gKi9cbmZ1bmN0aW9uIG9yZGVyZWRQcm9kdWN0KC4uLmZhY3RvcnMpIHtcbiAgICBmYWN0b3JzLnNvcnQoUHJvZHVjdF8xLmZhY3Rvck9yZGVyKTtcbiAgICByZXR1cm4gcHJvZHVjdCguLi5mYWN0b3JzKTtcbn1cbmV4cG9ydHMub3JkZXJlZFByb2R1Y3QgPSBvcmRlcmVkUHJvZHVjdDtcbi8qKlxuICogUmVtb3ZlcyB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgdGhlIGdpdmVuXG4gKiBlbGVtZW50IGZyb20gdGhlIGFycmF5LiBSZWFsbHkgc2hvdWxkIGJlXG4gKiBwYXJ0IG9mIHRoZSBzdGQgbGlicmFyeS4gSWRlbnRpZmllcyBvYmplY3RcbiAqIHdpdGggcmVmZXJlbmNpYWwgZXF1YWxpdHkuXG4gKiBAcGFyYW0gYXJyYXlcbiAqIEBwYXJhbSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZShhcnJheSwgZWxlbWVudCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFycmF5W2ldID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLnJlbW92ZSA9IHJlbW92ZTtcbi8qKlxuICogR2V0cyBhIG5ldyBhcnJheSB3aXRob3V0IHRoZSBmaXJzdCBpbnN0YW5jZSBvZiB0aGUgZ2l2ZW5cbiAqIGVsZW1lbnQuIFJlYWxseSBzaG91bGQgYmVcbiAqIHBhcnQgb2YgdGhlIHN0ZCBsaWJyYXJ5LiBJZGVudGlmaWVzIG9iamVjdFxuICogd2l0aCByZWZlcmVuY2lhbCBlcXVhbGl0eS5cbiAqIEBwYXJhbSBhcnJheVxuICogQHBhcmFtIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlTmV3KGFycmF5LCBlbGVtZW50KSB7XG4gICAgY29uc3QgaW5wdXQgPSBbLi4uYXJyYXldO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlucHV0W2ldID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgICBpbnB1dC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiR2l2ZW4gYXJyYXkgZG9lc24ndCBjb250YWluIGVsZW1lbnQgXCIgKyBlbGVtZW50KTtcbn1cbmV4cG9ydHMucmVtb3ZlTmV3ID0gcmVtb3ZlTmV3O1xuZnVuY3Rpb24gcHJvZHVjdCguLi5mYWN0b3JzKSB7XG4gICAgZmFjdG9ycy5mb3JFYWNoKGYgPT4gKDAsIGFzc2VydF8xLmFzc2VydCkoZiAhPSBudWxsICYmIGYgIT0gdW5kZWZpbmVkLCBcIk1ha2luZyBwcm9kdWN0IHdpdGggbnVsbCBvciB1bmRlZmluZWQgZmFjdG9yXCIpKTtcbiAgICByZXR1cm4gUHJvZHVjdF8xLlByb2R1Y3Qub2YoZmFjdG9ycyk7XG59XG5leHBvcnRzLnByb2R1Y3QgPSBwcm9kdWN0O1xuZnVuY3Rpb24gbmVnYXRpdmUoZXhwcmVzc2lvbikge1xuICAgIGlmIChleHByZXNzaW9uIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpXG4gICAgICAgIHJldHVybiBJbnRlZ2VyXzEuSW50ZWdlci5vZigtZXhwcmVzc2lvbi52YWx1ZSk7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gUHJvZHVjdF8xLlByb2R1Y3Qub2YoW0ludGVnZXJfMS5JbnRlZ2VyLm9mKC0xKSwgZXhwcmVzc2lvbl0pO1xufVxuZXhwb3J0cy5uZWdhdGl2ZSA9IG5lZ2F0aXZlO1xuZnVuY3Rpb24gbnVtKHZhbCkge1xuICAgIHJldHVybiBJbnRlZ2VyXzEuSW50ZWdlci5vZih2YWwpO1xufVxuZXhwb3J0cy5udW0gPSBudW07XG5mdW5jdGlvbiB2KHN5bWJvbCkge1xuICAgIHJldHVybiBWYXJpYWJsZV8xLlZhcmlhYmxlLm9mKHN5bWJvbCk7XG59XG5leHBvcnRzLnYgPSB2O1xuZnVuY3Rpb24gaW50KGludGVncmFuZCwgcmVzcGVjdFRvKSB7XG4gICAgcmV0dXJuIEludGVncmFsXzEuSW50ZWdyYWwub2YoaW50ZWdyYW5kLCByZXNwZWN0VG8pO1xufVxuZXhwb3J0cy5pbnQgPSBpbnQ7XG5mdW5jdGlvbiBlcXVpdmFsZW5jZUFyZ3VtZW50KGZpcnN0LCBzZWNvbmQsIGV4cGxhbmF0aW9uKSB7XG4gICAgcmV0dXJuIG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KHNldE9mKGZpcnN0KSwge1xuICAgICAgICBuOiBmaXJzdCxcbiAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICBuMTogc2Vjb25kLFxuICAgIH0sIGV4cGxhbmF0aW9uKTtcbn1cbmV4cG9ydHMuZXF1aXZhbGVuY2VBcmd1bWVudCA9IGVxdWl2YWxlbmNlQXJndW1lbnQ7XG4vKipcbiAqXG4gKiBAcmV0dXJucyBUaGUgcHJvZHVjdCBvZiB0aGUgZ2l2ZW4gZmFjdG9ycywgb3IgdGhlIG9ubHkgZmFjdG9yIGdpdmVuXG4gKiBpZiBvbmx5IG9uZSBnaXZlbi4gVGhyb3dzIGlmIG5vIGV4cHJlc3Npb25zIGFyZSBnaXZlbi5cbiAqL1xuZnVuY3Rpb24gcHJvZHVjdE9yTm90KC4uLmV4cHJlc3Npb25zKSB7XG4gICAgKDAsIGFzc2VydF8xLmFzc2VydCkoZXhwcmVzc2lvbnMubGVuZ3RoID4gMCk7XG4gICAgaWYgKGV4cHJlc3Npb25zLmxlbmd0aCA9PSAxKVxuICAgICAgICByZXR1cm4gZXhwcmVzc2lvbnNbMF07XG4gICAgcmV0dXJuIHByb2R1Y3QoLi4uZXhwcmVzc2lvbnMpO1xufVxuZXhwb3J0cy5wcm9kdWN0T3JOb3QgPSBwcm9kdWN0T3JOb3Q7XG4vKipcbiAqIEByZXR1cm5zIFRoZSBwcm9kdWN0IG9mIHRoZSBnaXZlbiB0ZXJtcyBleGxjdWRpbmcgdGhlIGZpcnN0IGlmXG4gKiAgICAgICAgICBpdCdzIG9uZS4gSWYgdGhlIHJlc3VsdGluZyB0ZXJtcyBsaXN0IGlzIG9ubHkgb25lIHRlcm0sXG4gKiAgICAgICAgICByZXR1cm5zIHRoZSBvbmx5IHRlcm0uXG4gKi9cbmZ1bmN0aW9uIHByb2R1Y3RBbmROb3RUaW1lc09uZSguLi5leHByZXNzaW9ucykge1xuICAgIGlmIChleHByZXNzaW9uc1swXSBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyICYmIGV4cHJlc3Npb25zWzBdLnZhbHVlID09IDEpIHtcbiAgICAgICAgZXhwcmVzc2lvbnMuc2hpZnQoKTtcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RPck5vdCguLi5leHByZXNzaW9ucyk7XG4gICAgfVxuICAgIHJldHVybiBwcm9kdWN0T3JOb3QoLi4uZXhwcmVzc2lvbnMpO1xufVxuZXhwb3J0cy5wcm9kdWN0QW5kTm90VGltZXNPbmUgPSBwcm9kdWN0QW5kTm90VGltZXNPbmU7XG5mdW5jdGlvbiBzZXRPZiguLi5leHByZXNzaW9ucykge1xuICAgIGNvbnN0IG91dCA9IG5ldyBTZXQoKTtcbiAgICBleHByZXNzaW9ucy5mb3JFYWNoKGUgPT4gb3V0LmFkZChlKSk7XG4gICAgcmV0dXJuIG91dDtcbn1cbmV4cG9ydHMuYSA9IHYoJ2EnKTtcbmV4cG9ydHMuYiA9IHYoJ2InKTtcbmV4cG9ydHMuYyA9IHYoJ2MnKTtcbmV4cG9ydHMuZCA9IHYoJ2QnKTtcbmV4cG9ydHMuZSA9IHYoJ2UnKTtcbmV4cG9ydHMuZiA9IHYoJ2YnKTtcbmV4cG9ydHMueCA9IHYoJ3gnKTtcbmV4cG9ydHMueSA9IHYoJ3knKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HaXZlbkVkZ2UgPSBleHBvcnRzLkFyZ3VtZW50RWRnZSA9IGV4cG9ydHMuR3JhcGggPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4vQXJndW1lbnRcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0XCIpO1xuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBncmFwaCBvZiBleHByZXNzaW9ucyBhbmQgc3RhdGVtZW50c1xuICogaW5jbHVkaW5nIGV2ZXJ5dGhpbmcgd2Uga25vdyBhYm91dCBhIHByb2JsZW0uXG4gKiBDb25uZWN0cyBHcmFwaE5vZGVzIHZpYSBJbmZlcmVuY2VzIGZvciBlZGdlcy5cbiAqXG4gKiBJdCdzIGEgZGlncmFwaC5cbiAqL1xuY2xhc3MgR3JhcGgge1xuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gZXhwcmVzc2lvbiB0byB0aGUgcHJvYmxlbS5cbiAgICAgKiBAcGFyYW0gbm9kZVxuICAgICAqIEByZXR1cm5zIHRoZSBzYW1lIGdyYXBoIGZvciBjaGFpbmluZy5cbiAgICAgKi9cbiAgICBhZGROb2RlKG5vZGUpIHtcbiAgICAgICAgdGhpcy5ub2Rlcy5hZGQobm9kZSk7XG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgQXJndW1lbnRfMS5Bcmd1bWVudCkge1xuICAgICAgICAgICAgdGhpcy5hZGRBcmd1bWVudChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcE9rKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGQgYSByZWxhdGlvbnNoaXAgYmV0d2VlbiB0d28gZWxlbWVudHMgZ2l2ZW4gYnkgdGhlIHVzZXIgdG8gdGhlIGdyYXBoLlxuICAgICAqIFNob3VsZCBub3QgYmUgY2FsbGVkIHRvIGFkZCBkZXJpdmVkIHRydXRocyBiYyB0aGlzIHdvbid0IHN0b3JlIGFuIGV4cGxhbmF0aW9uLlxuICAgICAqIEFkZHMgZ2l2ZW4gbm9kZXMgaWYgdGhleSBhcmVuJ3QgYWxyZWFkeSBvbiB0aGUgZ3JhcGguXG4gICAgICogQHBhcmFtIG5cbiAgICAgKiBAcGFyYW0gbjFcbiAgICAgKiBAcGFyYW0gclxuICAgICAqIEByZXR1cm5zIHNlbGYgZm9yIGNoYWluaW5nXG4gICAgICovXG4gICAgYWRkUmVsYXRpb25zaGlwKG4sIG4xLCByKSB7XG4gICAgICAgIHRoaXMuYWRkTm9kZShuKTtcbiAgICAgICAgdGhpcy5hZGROb2RlKG4xKTtcbiAgICAgICAgLy8gRGVmaW5lZCBib3RoIHdheXMgYmVjYXVzZSB0aGUgdXNlciBpcyBnaXZpbmcgaXRcbiAgICAgICAgdGhpcy5hZGRFZGdlKG4sIG4xLCBuZXcgR2l2ZW5FZGdlKHIpKTtcbiAgICAgICAgdGhpcy5hZGRFZGdlKG4xLCBuLCBuZXcgR2l2ZW5FZGdlKHIpKTtcbiAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKG4sIG4xKTtcbiAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKG4xLCBuKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBub2RlIHJlcHJlc2VudGluZyBhbiBhY3VtdWxhdGlvbiBvZiBmYWN0c1xuICAgICAqIHRoYXQgbGVhZHMgdG8gYSBjb25jbHVzaW9uLlxuICAgICAqIEBwYXJhbSBhXG4gICAgICogQHJldHVybnMgdGhlIHNhbWUgZ3JhcGggZm9yIGNoYWluaW5nLlxuICAgICAqL1xuICAgIGFkZEFyZ3VtZW50KGEpIHtcbiAgICAgICAgdGhpcy5ub2Rlcy5hZGQoYSk7XG4gICAgICAgIC8vIEFkZCB0aGUgZ3JvdW5kc1xuICAgICAgICBmb3IgKGNvbnN0IGdyb3VuZCBvZiBhLmdyb3VuZHMpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZXMuYWRkKGdyb3VuZCk7XG4gICAgICAgICAgICB0aGlzLmFkZENvbm5lY3Rpb24oZ3JvdW5kLCBhKTtcbiAgICAgICAgICAgIHRoaXMuYWRkRWRnZShncm91bmQsIGEsIEFyZ3VtZW50RWRnZS5Ubyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIHRoZSBjbGFpbVxuICAgICAgICBjb25zdCBjbGFpbSA9IGEuY2xhaW07XG4gICAgICAgIHRoaXMuYWRkTm9kZShjbGFpbS5uKTtcbiAgICAgICAgdGhpcy5hZGROb2RlKGNsYWltLm4xKTtcbiAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKGEsIGNsYWltLm4pO1xuICAgICAgICB0aGlzLmFkZEVkZ2UoYSwgY2xhaW0ubiwgQXJndW1lbnRFZGdlLkZyb20pO1xuICAgICAgICB0aGlzLmFkZENvbm5lY3Rpb24oYSwgY2xhaW0ubjEpO1xuICAgICAgICB0aGlzLmFkZEVkZ2UoYSwgY2xhaW0ubjEsIEFyZ3VtZW50RWRnZS5Gcm9tKTtcbiAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKGNsYWltLm4sIGNsYWltLm4xKTtcbiAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uKGNsYWltLm4xLCBjbGFpbS5uKTtcbiAgICAgICAgdGhpcy5hZGRFZGdlKGNsYWltLm4sIGNsYWltLm4xLCBhKTtcbiAgICAgICAgdGhpcy5hZGRFZGdlKGNsYWltLm4xLCBjbGFpbS5uLCBhKTtcbiAgICAgICAgdGhpcy5yZXBPaygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMgdGhlIHNhbWUgZ3JhcGggZm9yIGNoYWluaW5nLlxuICAgICAqL1xuICAgIGFkZEFyZ3VtZW50cyguLi5hKSB7XG4gICAgICAgIGEuZm9yRWFjaChhcmcgPT4gdGhpcy5hZGRBcmd1bWVudChhcmcpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbmVpZ2hib3JzIG9mIGEgbm9kZS5cbiAgICAgKiBAcGFyYW0gbm9kZVxuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24gTm9kZXMgdGhhdCBhcmUgYWRqYWNlbnQgdG8gdGhpcyBub2RlLCBmcm9tIHRoaXMgbm9kZSwgb3IgZWl0aGVyLlxuICAgICAqIEByZXR1cm5zIFVuZGVmaW5lZCBpZiB0aGUgbm9kZSBpc24ndCBpbiB0aGlzIGdyYXBoLiBPdGhlcndpc2UsIGEgc2V0IG9mIGNvbm5lY3RlZCBub2Rlcy5cbiAgICAgKiAgICAgICAgICBJZiB0aGUgbm9kZSBpcyBpbiB0aGUgZ3JhcGggYnV0IGlzbid0IGNvbm5lY3RlZCB0byBhbnl0aGluZywgcmV0dXJucyBlbXB0eSBzZXQuXG4gICAgICovXG4gICAgZ2V0TmVpZ2hib3JzKG5vZGUsIGRpcmVjdGlvbikge1xuICAgICAgICBpZiAoIXRoaXMubm9kZXMuaGFzKG5vZGUpKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcIm91dFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNldCh0aGlzLmNvbm5lY3Rpb25zLmdldChub2RlKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFkamFjZW50VG8gPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgbiBvZiB0aGlzLm5vZGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9ucy5nZXQobik/Lmhhcyhub2RlKSlcbiAgICAgICAgICAgICAgICBhZGphY2VudFRvLmFkZChuKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwiaW5cIilcbiAgICAgICAgICAgIHJldHVybiBhZGphY2VudFRvO1xuICAgICAgICBmb3IgKGNvbnN0IG4gb2YgdGhpcy5jb25uZWN0aW9ucy5nZXQobm9kZSkgPz8gW10pXG4gICAgICAgICAgICBhZGphY2VudFRvLmFkZChuKTtcbiAgICAgICAgcmV0dXJuIGFkamFjZW50VG87XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgdGhlIG51bWJlciBvZiBlZGdlcyB0aGlzIG5vZGUgaGFzLlxuICAgICAqIEBwYXJhbSBub2RlIFRoZSBub2RlIGJlaW5nIGNvbnNkZXJlZC5cbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIENvdW50IG9ubHkgdGhlIGVkZ2VzIGdvaW5nIHRvd2FyZHMgdGhpcyBub2RlLCBhd2F5IGZyb21cbiAgICAgKiAgICAgICAgICBpdCwgb3IgYm90aC5cbiAgICAgKiBAcmV0dXJucyA+PSAwLCB1bmRlZmluZWQgaWYgdGhlIGdpdmVuIG5vZGUgaXNuJ3QgaW4gdGhlIGdyYXBoLlxuICAgICAqL1xuICAgIGdldERlZ3JlZShub2RlLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKCF0aGlzLm5vZGVzLmhhcyhub2RlKSlcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJvdXRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbnMuZ2V0KG5vZGUpPy5zaXplID8/IDA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRlZ0luID0gMDtcbiAgICAgICAgdGhpcy5ub2Rlcy5mb3JFYWNoKG4gPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbnMuZ2V0KG4pID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9ucy5nZXQobikuaGFzKG5vZGUpKVxuICAgICAgICAgICAgICAgIGRlZ0luKys7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwiaW5cIikge1xuICAgICAgICAgICAgcmV0dXJuIGRlZ0luO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWdJbiArICh0aGlzLmNvbm5lY3Rpb25zLmdldChub2RlKT8uc2l6ZSA/PyAwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIG4gTm9kZSBpbiB0aGUgZ3JhcGguXG4gICAgICogQHBhcmFtIG4xIEluIHRoZSBncmFwaC5cbiAgICAgKiBAcmV0dXJucyBVbmRlZmluZWQgaWYgZWl0aGVyIG5vZGUgaXNuJ3QgaW4gdGhlIGdyYXBoIG9yIHRoZXkncmUgbm90XG4gICAgICogY29ubmVjdGVkLlxuICAgICAqL1xuICAgIGdldEVkZ2UobiwgbjEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWRnZXMuZ2V0KG4pPy5nZXQobjEpO1xuICAgIH1cbiAgICBjb250YWlucyhub2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVzLmhhcyhub2RlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMgQSBuZXcgc2V0IGNvbnRhaW5pbmcgYWxsIHRoZSBub2RlcyBpbiB0aGUgZ3JhcGhcbiAgICAgKi9cbiAgICBnZXROb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZXQodGhpcy5ub2Rlcyk7XG4gICAgfVxuICAgIGdldEVkZ2VzKCkge1xuICAgICAgICBjb25zdCBvdXQgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuZWRnZXMuZm9yRWFjaCgobWFwLCBmaXJzdCkgPT4ge1xuICAgICAgICAgICAgbWFwLmZvckVhY2goKGVkZ2UsIHNlY29uZCkgPT4ge1xuICAgICAgICAgICAgICAgIG91dC5hZGQoeyBuOiBmaXJzdCwgbjE6IHNlY29uZCwgZTogZWRnZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgbnVtTm9kZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVzLnNpemU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYWxsIGdyYXBoIG5vZGVzIGFuZCBlZGdlcyB0byB0aGlzIG9uZS5cbiAgICAgKiBAcGFyYW0gZ3JhcGhcbiAgICAgKiBAcmV0dXJucyB0aGUgc2FtZSBncmFwaCBmb3IgY2hhaW5pbmcuXG4gICAgICovXG4gICAgYWRkR3JhcGgoZ3JhcGgpIHtcbiAgICAgICAgZ3JhcGgubm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9kZXMuYWRkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgZ3JhcGguZWRnZXMuZm9yRWFjaCgobWFwLCBub2RlMSkgPT4ge1xuICAgICAgICAgICAgbWFwLmZvckVhY2goKGVkZ2UsIG5vZGUyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVkZ2UgaW5zdGFuY2VvZiBBcmd1bWVudF8xLkFyZ3VtZW50KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEFyZ3VtZW50KGVkZ2UpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVkZ2UgPT0gXCJzdXBwb3J0c1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRWRnZShub2RlMSwgbm9kZTIsIEFyZ3VtZW50RWRnZS5Ubyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbihub2RlMSwgbm9kZTIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlZGdlID09IFwiY2xhaW1zXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFZGdlKG5vZGUxLCBub2RlMiwgQXJndW1lbnRFZGdlLkZyb20pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbm5lY3Rpb24obm9kZTEsIG5vZGUyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIEVkZ2UgVHlwZVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZXBPaygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGxldCBvdXQgPSBcIkdyYXBoKFYgPSB7XCI7XG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XG4gICAgICAgICAgICBvdXQgKz0gbm9kZS50b1N0cmluZygpICsgXCIsXCI7XG4gICAgICAgIH1cbiAgICAgICAgb3V0ID0gb3V0LnN1YnN0cmluZygwLCBvdXQubGVuZ3RoIC0gMSkgKyBcIn0sIEUgPSB7XCI7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnMuZm9yRWFjaCgoc2V0LCBzcmMpID0+IHtcbiAgICAgICAgICAgIHNldC5mb3JFYWNoKGRlc3QgPT4ge1xuICAgICAgICAgICAgICAgIG91dCArPSBzcmMudG9TdHJpbmcoKSArIFwiIC0+IFwiICsgZGVzdC50b1N0cmluZygpICsgXCIsIFwiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBvdXQgKz0gXCJ9IEVkZ2UgQ291bnQ6IFwiICsgdGhpcy5jb25uZWN0aW9ucy5zaXplO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICBhZGRDb25uZWN0aW9uKG4sIG4xKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25zLmdldChuKSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLnNldChuLCBuZXcgU2V0KCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnMuZ2V0KG4pLmFkZChuMSk7XG4gICAgfVxuICAgIGFkZEVkZ2UobiwgbjEsIGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZWRnZXMuZ2V0KG4pID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lZGdlcy5zZXQobiwgbmV3IE1hcCgpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVkZ2VzLmdldChuKS5zZXQobjEsIGUpO1xuICAgIH1cbiAgICByZXBPaygpIHtcbiAgICAgICAgdGhpcy5ub2Rlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPSB1bmRlZmluZWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQWxsIGNvbm5lY3Rpb25zL2VkZ2VzIGhhdmUgbm9kZXNcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLm5vZGVzLmhhcyhrZXkpKTtcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2gobiA9PiB7XG4gICAgICAgICAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5ub2Rlcy5oYXMobikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVkZ2VzLmZvckVhY2goKG1hcCwgZmlyc3QpID0+IHtcbiAgICAgICAgICAgIG1hcC5mb3JFYWNoKChlZGdlLCBzZWNvbmQpID0+IHtcbiAgICAgICAgICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLm5vZGVzLmhhcyhmaXJzdCkpO1xuICAgICAgICAgICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMubm9kZXMuaGFzKHNlY29uZCkpO1xuICAgICAgICAgICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMuY29ubmVjdGlvbnMuZ2V0KGZpcnN0KS5oYXMoc2Vjb25kKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vZGVzID0gbmV3IFNldCgpO1xuICAgIC8vIFF1aWNrbHkgYWNjZXNzIGFsbCBjb25uZWN0aW9ucyBvZiBhIG5vZGVcbiAgICBjb25uZWN0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAvLyBEZXRlcm1pbmUgdGhlIHR5cGUgb2YgY29ubmVjdGlvbiBiZXR3ZWVuIHR3byBub2Rlc1xuICAgIGVkZ2VzID0gbmV3IE1hcCgpO1xufVxuZXhwb3J0cy5HcmFwaCA9IEdyYXBoO1xudmFyIEFyZ3VtZW50RWRnZTtcbihmdW5jdGlvbiAoQXJndW1lbnRFZGdlKSB7XG4gICAgQXJndW1lbnRFZGdlW1wiVG9cIl0gPSBcInN1cHBvcnRzXCI7XG4gICAgQXJndW1lbnRFZGdlW1wiRnJvbVwiXSA9IFwiY2xhaW1zXCI7XG59KShBcmd1bWVudEVkZ2UgPSBleHBvcnRzLkFyZ3VtZW50RWRnZSB8fCAoZXhwb3J0cy5Bcmd1bWVudEVkZ2UgPSB7fSkpO1xuLyoqXG4gKiBDb21tdW5pY2F0ZXMgYSByZWxhdGlvbmhpcCBnaXZlbiBieSB0aGUgdXNlci5cbiAqL1xuY2xhc3MgR2l2ZW5FZGdlIHtcbiAgICBjb25zdHJ1Y3RvcihyKSB7XG4gICAgICAgIHRoaXMuciA9IHI7XG4gICAgfVxuICAgIHI7XG59XG5leHBvcnRzLkdpdmVuRWRnZSA9IEdpdmVuRWRnZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HcmFwaE1pbmlwdWxhdG9yID0gdm9pZCAwO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi91dGlsL2Fzc2VydFwiKTtcbi8qKlxuICogVG9vbCB0byBkbyBvcGVyYXRpb25zIG9uIGdyYXBocy5cbiAqL1xuY2xhc3MgR3JhcGhNaW5pcHVsYXRvciB7XG4gICAgLyoqXG4gICAgICogRmluZCBub2RlcyBvZiBjb21wb25lbnRzIG9mIGEgZ3JhcGggd2hlcmUgb25seSBlZGdlcyBmb3Igd2hpY2hcbiAgICAgKiB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gcmV0dXJucyB0cnVlIGFyZSBjb25zaWRlcmVkLlxuICAgICAqIEBwYXJhbVxuICAgICAqIEBwYXJhbSBpc0Nvbm5lY3RlZFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDb21wb25lbnROb2RlcyhpbnB1dCwgaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgY29uc3QgaW5jbHVkZWROb2RlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIGlucHV0LmdldE5vZGVzKCkpIHtcbiAgICAgICAgICAgIGlmIChpbmNsdWRlZE5vZGVzLmhhcyhub2RlKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0QWxsQ29ubmVjdGVkKG4pIHtcbiAgICAgICAgICAgICAgICBpbmNsdWRlZE5vZGVzLmFkZChuKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50LmhhcyhuKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5hZGQobik7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBuZWlnaGJvciBvZiBpbnB1dC5nZXROZWlnaGJvcnMobiwgXCJib3RoXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNDb25uZWN0ZWQoaW5wdXQuZ2V0RWRnZShuLCBuZWlnaGJvcikpKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIGdldEFsbENvbm5lY3RlZChuZWlnaGJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdldEFsbENvbm5lY3RlZChub2RlKTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5hZGQobm9kZSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFkZChjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKGluY2x1ZGVkTm9kZXMuc2l6ZSA9PSBpbnB1dC5udW1Ob2RlcygpKTtcbiAgICAgICAgLy8gQXNzZXJ0IGNvbXBvbmVudHMgYXJlIHBhaXJ3aXNlIGRpc2pvaW50IG9mIHByb2JsZW1zIHNob3cgdXBcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgZXZlcnkgZWRnZSBpbiB0aGUgZ3JhcGguXG4gICAgICogQHBhcmFtIGlucHV0XG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UmVsYXRpb25zKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IG91dCA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgaW5wdXQuZ2V0Tm9kZXMoKSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBvdGhlciBvZiBpbnB1dC5nZXROZWlnaGJvcnMobm9kZSwgXCJvdXRcIikpIHtcbiAgICAgICAgICAgICAgICBvdXQucHVzaCh7IGZpcnN0OiBub2RlLCBzZWNvbmQ6IG90aGVyLCBlOiBpbnB1dC5nZXRFZGdlKG5vZGUsIG90aGVyKSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIGdyYXBoIGludG8gc2V0cyBvZlxuICAgICAqIG5vZGVzIGdyb3VwZWQgYnkgZGVwdGggZnJvbSBhIGNlbnRlciBub2RlLlxuICAgICAqIEFzc3VtZXMgdGhlIGdyYXBoIGlzIGNvbm5lY3RlZC5cbiAgICAgKiBAcGFyYW0gcm9vdE5vZGVzIENvbnRhaW5zIGF0IGxlYXN0IG9uZSBub2RlIGluIHRoZSBncmFwaC5cbiAgICAgKiBAcGFyYW0gY291bnQgRnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIGlmIGFueSBnaXZlbiBub2RlIHNob3VsZCBiZVxuICAgICAqIGluY2x1ZGVkIGluIHRoZSBkZXB0aCBjb3VudC4gRGVmYXVsdHMgdG8gY291bnRpbmcgYWxsIG5vZGVzLiBOb2RlcyB0aGF0XG4gICAgICogYXJlbid0IGluY2x1ZGVkIHdvbid0IGJlIGluIHRoZSByZXR1cm5lZCB2YWx1ZS5cbiAgICAgKiBAcmV0dXJucyBNYXAgZnJvbSBkZXB0aCBpbiBncmFwaCB0byBhIHNldCBvZiBub2RlcyBhdCB0aGF0IGRlcHRoLlxuICAgICAqXG4gICAgICovXG4gICAgc3RhdGljIGdldExldmVscyhpbnB1dCwgcm9vdE5vZGVzLCBjb3VudCA9ICgpID0+IHRydWUpIHtcbiAgICAgICAgY29uc3Qgcm9vdHMgPSBuZXcgU2V0KHJvb3ROb2Rlcyk7XG4gICAgICAgIGNvbnN0IGRlcHRocyA9IG5ldyBNYXAoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlY3Vyc2l2ZWx5IG1hcHMgb3V0IGFsbCBub2RlcyBpbiB0aGUgZ3JhcGgsXG4gICAgICAgICAqIHB1dHRpbiB0aGVtIGluIHRoZSBkZXB0aHMgbWFwLlxuICAgICAgICAgKiBAcGFyYW0gbm9kZVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gbWFwTm9kZShub2RlLCBkZXB0aCA9IDApIHtcbiAgICAgICAgICAgIGlmIChyb290cy5oYXMobm9kZSkpIHtcbiAgICAgICAgICAgICAgICBkZXB0aCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGVwdGggPCAoZGVwdGhzLmdldChub2RlKSA/PyBOdW1iZXIuTUFYX1ZBTFVFKSkge1xuICAgICAgICAgICAgICAgIGRlcHRocy5zZXQobm9kZSwgZGVwdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmVpZ2hib3JzID0gWy4uLmlucHV0LmdldE5laWdoYm9ycyhub2RlLCBcImJvdGhcIildO1xuICAgICAgICAgICAgbmVpZ2hib3JzLmZpbHRlcih2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBmb3VuZCBhIHNob3J0ZXIgcGF0aCB0byBpdCBvciB0aGVyZSB3YXMgbm8gZm91bmQgcGF0aCB0byBpdFxuICAgICAgICAgICAgICAgIHJldHVybiAoZGVwdGhzLmdldCh2YWx1ZSkgPT0gdW5kZWZpbmVkIHx8IGRlcHRocy5nZXQodmFsdWUpID4gZGVwdGgpICYmIHZhbHVlICE9PSBub2RlO1xuICAgICAgICAgICAgfSkuZm9yRWFjaChuID0+IHtcbiAgICAgICAgICAgICAgICBtYXBOb2RlKG4sIGNvdW50KG5vZGUpID8gZGVwdGggKyAxIDogZGVwdGgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbWFwTm9kZShbLi4ucm9vdHNdWzBdKTtcbiAgICAgICAgY29uc3Qgb3V0ID0gbmV3IE1hcCgpO1xuICAgICAgICBkZXB0aHMuZm9yRWFjaCgoZGVwdGgsIG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmICghY291bnQobm9kZSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKG91dC5nZXQoZGVwdGgpID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG91dC5zZXQoZGVwdGgsIG5ldyBTZXQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXQuZ2V0KGRlcHRoKS5hZGQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBnaXZlbiBncmFwaCBpcyBjb25uZWN0ZWQsIG1lYW5pbmcgdGhhdFxuICAgICAqIGl0J3MgcG9zc2libGUgdG8gdHJhdmVyc2UgYmV0d2VlbiBhbnkgdHdvIG5vZGVzIG9uIHRoZSBncmFwaC5cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNDb25uZWN0ZWQoaW5wdXQpIHtcbiAgICAgICAgLy8gQ2hlY2sgZXZlcnkgbm9kZSBoYXMgYSBkZWdyZWUgb2YgMSBvciBtb3JlIG9yIGdyYXBoIG9ubHkgaGFzIDEgb3IgMCBlbGVtZW50c1xuICAgICAgICByZXR1cm4gWy4uLmlucHV0LmdldE5vZGVzKCldLm1hcChub2RlID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC5nZXREZWdyZWUobm9kZSwgXCJib3RoXCIpID4gMDtcbiAgICAgICAgfSkucmVkdWNlKChhLCBiKSA9PiBhICYmIGIpIHx8IGlucHV0Lm51bU5vZGVzKCkgPCAyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGaWx0ZXJzIGVkZ2VzIGxpc3QgcmV0dXJuaW5nIGEgbGlzdCB3aGVyZSBvbmx5IG9uZSBlZGdlXG4gICAgICogZnJvbSBhbnkgZWRnZSBsb29wcyBpcyBpbmNsdWRlZC5cbiAgICAgKiBGb3IgZXhhbXBsZSBpZiB0aGUgaW5wdXQgZWRnZXMgYXJlIGEgLT4gYiBhbmQgYiAtPiBhLFxuICAgICAqIHRoZSByZXN1bHQgd2lsbCBvbmx5IGNvbnRhaW4gYSAtPiBiLlxuICAgICAqIEBwYXJhbSBlZGdlc1xuICAgICAqL1xuICAgIHN0YXRpYyBkcm9wU3ltbWV0cmljKGVkZ2VzKSB7XG4gICAgICAgIGNvbnN0IG91dCA9IFtdO1xuICAgICAgICBmdW5jdGlvbiBhbHJlYWR5SGFzKGVkZ2UpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZSBvZiBvdXQpXG4gICAgICAgICAgICAgICAgaWYgKGVkZ2UubiA9PSBlLm4xICYmIGVkZ2UubjEgPT0gZS5uKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGVkZ2Ugb2YgZWRnZXMpIHtcbiAgICAgICAgICAgIGlmICghYWxyZWFkeUhhcyhlZGdlKSlcbiAgICAgICAgICAgICAgICBvdXQucHVzaChlZGdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbn1cbmV4cG9ydHMuR3JhcGhNaW5pcHVsYXRvciA9IEdyYXBoTWluaXB1bGF0b3I7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUmVsYXRpb25zaGlwID0gdm9pZCAwO1xuLyoqXG4gKiBBIHdheSBpbiB3aGljaCAyIGV4cHJlc3Npb25zIGNhbiBiZSByZWxhdGVkLlxuICovXG52YXIgUmVsYXRpb25zaGlwO1xuKGZ1bmN0aW9uIChSZWxhdGlvbnNoaXApIHtcbiAgICBSZWxhdGlvbnNoaXBbXCJFcXVhbFwiXSA9IFwiPVwiO1xufSkoUmVsYXRpb25zaGlwID0gZXhwb3J0cy5SZWxhdGlvbnNoaXAgfHwgKGV4cG9ydHMuUmVsYXRpb25zaGlwID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5EZXJpdmVyID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi9Bcmd1bWVudFwiKTtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuLi9leHByZXNzaW9ucy9FeHByZXNzaW9uXCIpO1xuY29uc3QgR3JhcGhfMSA9IHJlcXVpcmUoXCIuLi9HcmFwaFwiKTtcbmNvbnN0IEdyYXBoTWluaXB1bGF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HcmFwaE1pbmlwdWxhdG9yXCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4vTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbmNvbnN0IHJlY3Vyc2lvbl8xID0gcmVxdWlyZShcIi4vcmVjdXJzaW9uXCIpO1xuY29uc3QgUmVsYXRpb25hbERlcml2YXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi9SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGVcIik7XG4vKipcbiAqIEhvbGRzIGEgc2luZ2xlIGdyYXBoIGFuZCBleHBhbmRzIGl0IHVzaW5nIHJ1bGVzLlxuICovXG5jbGFzcyBEZXJpdmVyIHtcbiAgICAvKipcbiAgICAgKiBHaXZlIGl0IHRoZSBncmFwaCB5b3UncmUgZ29pbmcgdG8gZXhwYW5kLlxuICAgICAqIEBwYXJhbSBncmFwaFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGdyYXBoKSB7XG4gICAgICAgIHRoaXMuZ3JhcGggPSBncmFwaDtcbiAgICAgICAgdGhpcy5zaW1wbGlmaWVkSW5Jc29sYXRpb24gPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMubm90U2ltcGxpZmlhYmxlID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFeHBhbmRzIHRoZSBncmFwaCBhcmJpdHJhcmlseS5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIHN0aWxsIHBvb3JseSBkZWZpbmVkLFxuICAgICAqIHZlcnkgZXhwZXJlbWVudGFsLlxuICAgICAqL1xuICAgIGV4cGFuZCgpIHtcbiAgICAgICAgLy8gU2ltcGxpZnkgYWxsIHRoZSBleHByZXNzaW9ucyB1c2luZyB0aGUgY29udGV4dGxlc3Mgc2ltcGxpZnlpbmcgcnVsZXNcbiAgICAgICAgLy8gRG8gdGhpcyB1bnRpbCB0aGVyZSdzIG5vdGhpbmcgbW9yZSB0byBzaW1wbGlmeVxuICAgICAgICB0aGlzLnNpbXBsaWZ5Tm9Db250ZXh0KCk7XG4gICAgICAgIHRoaXMuc2ltcGxpZnlOb0NvbnRleHQoKTtcbiAgICAgICAgdGhpcy5zaW1wbGlmeU5vQ29udGV4dCgpO1xuICAgICAgICB0aGlzLnNpbXBsaWZ5Tm9Db250ZXh0KCk7XG4gICAgICAgIHRoaXMuc2ltcGxpZnlOb0NvbnRleHQoKTtcbiAgICAgICAgdGhpcy5zaW1wbGlmeU5vQ29udGV4dCgpO1xuICAgICAgICB0aGlzLnNpbXBsaWZ5Tm9Db250ZXh0KCk7XG4gICAgICAgIHRoaXMuc2ltcGxpZnlOb0NvbnRleHQoKTtcbiAgICAgICAgdGhpcy5zaW1wbGlmeU5vQ29udGV4dCgpO1xuICAgICAgICB0aGlzLnNpbXBsaWZ5Tm9Db250ZXh0KCk7XG4gICAgICAgIHRoaXMuc2ltcGxpZnlOb0NvbnRleHQoKTtcbiAgICAgICAgdGhpcy5zaW1wbGlmeU5vQ29udGV4dCgpO1xuICAgICAgICB0aGlzLnNpbXBsaWZ5Tm9Db250ZXh0KCk7XG4gICAgICAgIHRoaXMuc2ltcGxpZnlOb0NvbnRleHQoKTtcbiAgICAgICAgdGhpcy5zaW1wbGlmeU5vQ29udGV4dCgpO1xuICAgICAgICB0aGlzLnNpbXBsaWZ5Tm9Db250ZXh0KCk7XG4gICAgICAgIHRoaXMuc2ltcGxpZnlOb0NvbnRleHQoKTtcbiAgICAgICAgdGhpcy5zaW1wbGlmeU5vQ29udGV4dCgpO1xuICAgICAgICB0aGlzLnNpbXBsaWZ5Tm9Db250ZXh0KCk7XG4gICAgICAgIC8vdGhpcy5hbGdlYnJhaWNFeHBhbnNpb24oKVxuICAgICAgICAvL3RoaXMuYWxnZWJyYWljRXhwYW5zaW9uKClcbiAgICAgICAgLy90aGlzLnNpbXBsaWZ5Tm9Db250ZXh0KClcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVjdXJzaXZlbHkgbWFrZXMgc3VyZSB0aGF0IGV2ZXJ5IG5vZGUgaW4gdGhlIGdyYXBoXG4gICAgICogaXMgZWl0aGVyIHNpbXBsaWZpZWQgKG1lYW5pbmcgdGhlcmUgaXMgbm8gY29udGV4dGxlc3NcbiAgICAgKiBydWxlIHRoYXQgY2FuIHNpbXBsaWZ5IGl0IGZ1cnRoZXIpIG9yIGlzIG1hcmtlZCBkb3duXG4gICAgICogYXMgdW5zaW1wbGlmaWFibGUuXG4gICAgICovXG4gICAgc2ltcGxpZnlOb0NvbnRleHQoKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVzID0gTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUucnVsZXM7XG4gICAgICAgIGNvbnN0IHVuY2hlY2tlZCA9IFsuLi50aGlzLmdyYXBoLmdldE5vZGVzKCldLmZpbHRlcihuID0+IG4gaW5zdGFuY2VvZiBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbilcbiAgICAgICAgICAgIC5tYXAobiA9PiBuKVxuICAgICAgICAgICAgLmZpbHRlcihlID0+ICF0aGlzLnNpbXBsaWZpZWRJbklzb2xhdGlvbi5oYXMoZSkpO1xuICAgICAgICB1bmNoZWNrZWQuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNpbXBsaWZpY2F0aW9ucyA9ICgwLCByZWN1cnNpb25fMS5lcXVpdikoZSwgY29udGV4dGxlc3NTaW1wbGlmaWNhdGlvbnNGbik7XG4gICAgICAgICAgICB0aGlzLnNpbXBsaWZpZWRJbklzb2xhdGlvbi5hZGQoZSk7XG4gICAgICAgICAgICBpZiAoc2ltcGxpZmljYXRpb25zLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgICAgIHRoaXMubm90U2ltcGxpZmlhYmxlLmFkZChlKTtcbiAgICAgICAgICAgIHNpbXBsaWZpY2F0aW9ucy5mb3JFYWNoKGEgPT4gdGhpcy5ncmFwaC5hZGRBcmd1bWVudChhKSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvL2lmICh1bmNoZWNrZWQubGVuZ3RoID4gMCkgdGhpcy5zaW1wbGlmeU5vQ29udGV4dCgpXG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV4cGFuZHMgdGhlIGdyYXBoIHVzaW5nIGFsZ2VicmEgcnVsZXMuXG4gICAgICogT25seSBzaW1wbGlmaWVkIHJ1bGVzIGFyZSB1c2VkLlxuICAgICAqL1xuICAgIGFsZ2VicmFpY0V4cGFuc2lvbigpIHtcbiAgICAgICAgY29uc3QgcnVsZXMgPSBbLi4uUmVsYXRpb25hbERlcml2YXRpb25SdWxlXzEuUmVsYXRpb25hbERlcml2YXRpb25SdWxlLnJ1bGVzXTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IFsuLi5HcmFwaE1pbmlwdWxhdG9yXzEuR3JhcGhNaW5pcHVsYXRvci5nZXRDb21wb25lbnROb2Rlcyh0aGlzLmdyYXBoLCBlZGdlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGVkZ2UgaW5zdGFuY2VvZiBBcmd1bWVudF8xLkFyZ3VtZW50ICYmIGVkZ2UucmVsYXRpb25zaGlwID09IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbClcbiAgICAgICAgICAgICAgICAgICAgfHwgKGVkZ2UgaW5zdGFuY2VvZiBHcmFwaF8xLkdpdmVuRWRnZSAmJiBlZGdlLnIgPT0gUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsKTtcbiAgICAgICAgICAgIH0pXTtcbiAgICAgICAgY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBlcXVhdGlvbiA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24gJiYgdGhpcy5ub3RTaW1wbGlmaWFibGUuaGFzKG5vZGUpKVxuICAgICAgICAgICAgICAgICAgICBlcXVhdGlvbi5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcnVsZXMuZm9yRWFjaChyID0+IHtcbiAgICAgICAgICAgICAgICByLmFwcGx5KHNldE9mKC4uLmVxdWF0aW9uKSkuZm9yRWFjaChhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaC5hZGRBcmd1bWVudChhKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ3JhcGg7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBleHByZXNzaW9uIGlzIGluIHRoZSBncmFwaFxuICAgICAqIGFuZCBoYXMgYWxyZWFkeSBoYWQgdGhlIGNvbnRleHRsZXNzIHNpbXBsaWZpY2F0aW9uIG9wZXJhdGlvbnNcbiAgICAgKiBkb25lIHRvIGl0IGFuZCBjYW5ub3QgYmUgZnVydGhlciBzaW1wbGlmaWVkLlxuICAgICAqL1xuICAgIGlzU2ltcGxpZmllZChleHApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm90U2ltcGxpZmlhYmxlLmhhcyhleHApO1xuICAgIH1cbiAgICAvLyBBIHNldCBvZiBub2RlcyBpbiB0aGUgZ3JhcGggd2hpY2ggaGF2ZSBoYWQgYWxsIHNpbXBsaWZpY2F0aW9uIFxuICAgIC8vIG9wZXJhdGlvbnMgZG9uZSB0byB0aGVtLlxuICAgIHNpbXBsaWZpZWRJbklzb2xhdGlvbjtcbiAgICAvLyBUaGUgc2V0IG9mIG5vZGVzIGluIHRoZSBncmFwaCB0aGF0IGhhdmUgaGFkIGNvbnRleHRsZXNzXG4gICAgLy8gc2ltcGxpZmljYXRpb24gb3BlcmF0aW9ucyBydW4gb24gdGhlbSBhbmQgYXJlbid0IGZ1cnRoZXJcbiAgICAvLyBzaW1wbGlmaWFibGVcbiAgICBub3RTaW1wbGlmaWFibGU7XG59XG5leHBvcnRzLkRlcml2ZXIgPSBEZXJpdmVyO1xuLyoqXG4gKiBGaW5kcyBlcXVpdmFsZW50cyBvZiB0aGUgZ2l2ZW4gZXhwcmVzc2lvblxuICogdXNpbmcgcnVsZXMgb2YgaW5mZXJlbmNlLiBOb3QgcmVjdXJzaXZlLlxuICogQHBhcmFtIGV4cFxuICovXG5jb25zdCBjb250ZXh0bGVzc1NpbXBsaWZpY2F0aW9uc0ZuID0gZnVuY3Rpb24gZGlyZWN0RXF1aXZhbGVudHMoZXhwKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbLi4uTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUucnVsZXNdO1xuICAgIGNvbnN0IG91dCA9IG5ldyBTZXQoKTtcbiAgICBydWxlcy5maWx0ZXIociA9PiByLmFwcGxpZXMoZXhwKSkuZm9yRWFjaChydWxlID0+IHtcbiAgICAgICAgcnVsZS5hcHBseShleHApLmZvckVhY2goaSA9PiB7XG4gICAgICAgICAgICBvdXQuYWRkKGkpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gb3V0O1xufTtcbmZ1bmN0aW9uIHNldE9mKC4uLmFycikge1xuICAgIGNvbnN0IG91dCA9IG5ldyBTZXQoKTtcbiAgICBhcnIuZm9yRWFjaChlID0+IG91dC5hZGQoZSkpO1xuICAgIHJldHVybiBvdXQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSA9IHZvaWQgMDtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4uL3V0aWwvYXNzZXJ0XCIpO1xuLyoqXG4gKiBBIHJ1bGUgdGhhdCB0YWtlcyBhbiBleHByZXNzaW9uIGFuZCBwcm9kdWNlcyBhbiBlcXVpdmFsZW50IGV4cHJlc3Npb24uXG4gKiBFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlcyBjYW4gdXNlIHJlZmxlY3Rpb24gdG8gZGV0ZXJtaW5lIHdoYXRcbiAqIHR5cGUgb2YgZXhwcmVzc2lvbiB0aGV5J3JlIGdpdmVuLCBidXQgc2hvdWxkIHVzZSBleHByZXNzaW9uIHNwZWNpZmljXG4gKiBmdW5jdGlvbnMgb24gc3ViLWV4cHJlc3Npb25zLiBUaGVzZSBydWxlcyB3aWxsIGJlIHJlY3Vyc2l2ZWx5IHVzZWRcbiAqIHRvIGRlcml2ZSBzaW1wbGlmaWVkIGV4cHJlc3Npb25zLlxuICpcbiAqIFRoZXNlIHJ1bGVzIGFyZSBhbHNvIGNvbnRleHRsZXNzOiB0aGV5J3JlIG9ubHkgZ2l2ZW4gdGhlIGV4cHJlc3Npb24sXG4gKiBubyBvdGhlciBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcHJvYmxlbS5cbiAqL1xuY2xhc3MgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgLyoqXG4gICAgICogQWxsIHN1YmNsYXNzZXMgc2hvdWxkIHJlZ2lzdGVyIHRoZW1zZWx2ZXMgaW4gdGhpcyBsaXN0LlxuICAgICAqL1xuICAgIHN0YXRpYyBydWxlcyA9IG5ldyBTZXQoKTtcbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhpcyBydWxlIGNhbiBmaW5kIGVxdWl2YWxlbnRzIGZvciB0aGVcbiAgICAgKiBnaXZlbiBleHByZXNzaW9uLiBPbmx5IGNhbGwgYXBwbHkoKSBpZiB0cnVlLlxuICAgICAqL1xuICAgIGFwcGxpZXMoZXhwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcGxpZXNJbXBsKGV4cCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByb2R1Y2VzIGEgc2V0IG9mIGV4cHJlc3Npb25zIHRoYXQgYXJlIGVxdWl2YWxlbnQgdG9cbiAgICAgKiB0aGUgZ2l2ZW4gb25lLiBPbmx5IGNhbGwgaWYgdGhlIGdpdmVuIGV4cHJlc3Npb25cbiAgICAgKiBwYXNzZWQgdGhlIGFwcGxpZXMoKSB0ZXN0LlxuICAgICAqIEBwYXJhbSBleHAgVGhlIGV4cHJlc3Npb24gdG8gZmluZCBhbiBlcXVpdmFsZW50IGZvci5cbiAgICAgKiBAcmV0dXJucyBTZXQgb2YgZXF1aXZhbGVudCBleHByZXNzaW9ucy5cbiAgICAgKi9cbiAgICBhcHBseShleHApIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiBvbiBcIiArIGV4cC50b1N0cmluZygpKVxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmFwcGx5SW1wbChleHApO1xuICAgICAgICByZXN1bHQuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKGUgIT0gbnVsbCAmJiBlICE9IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAvL2lmICh0aGlzLmNvbnN0cnVjdG9yLm5hbWUgPT0gXCJDb21iaW5lQ29tbW9uVGVybXNNdWx0aXBsaWNhdGlvblwiKVxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmNvbnN0cnVjdG9yLm5hbWUgKyBleHAudG9TdHJpbmcoKSArIFwiXFxuIC0+IFwiICsgZS5jbGFpbS5uMS50b1N0cmluZygpKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5leHBvcnRzLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUgPSBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZSA9IHZvaWQgMDtcbi8qKlxuICogUHJvZHVjZXMgdHJ1dGhzIGZyb20gYSBzZXQgb2YgZXF1aXZhbGVudCBleHByZXNzaW9ucy5cbiAqL1xuY2xhc3MgUmVsYXRpb25hbERlcml2YXRpb25SdWxlIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlcXVhdGlvbiBBIHNldCBvZiBleHByZXNzaW9ucyB3aGljaCBhcmUgZXF1YWwuXG4gICAgICovXG4gICAgYXBwbHkoZXF1YXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwbHlJbXBsKGVxdWF0aW9uKTtcbiAgICB9XG4gICAgc3RhdGljIHJ1bGVzID0gbmV3IFNldCgpO1xufVxuZXhwb3J0cy5SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGUgPSBSZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRGl2aWRlT25Cb3RoU2lkZXMgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL1Byb2R1Y3RcIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi8uLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBSZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9SZWxhdGlvbmFsRGVyaXZhdGlvblJ1bGVcIik7XG5jbGFzcyBEaXZpZGVPbkJvdGhTaWRlcyBleHRlbmRzIFJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZV8xLlJlbGF0aW9uYWxEZXJpdmF0aW9uUnVsZSB7XG4gICAgYXBwbHlJbXBsKGVxdWF0aW9uKSB7XG4gICAgICAgIGNvbnN0IG91dCA9IFtdO1xuICAgICAgICBjb25zdCBjb21iaW5hdGlvbnMgPSBjYXJ0ZXNpYW5Qcm9kdWN0KGVxdWF0aW9uKTtcbiAgICAgICAgY29tYmluYXRpb25zLmZpbHRlcihwYWlyID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwYWlyWzBdIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3Q7XG4gICAgICAgIH0pLmZvckVhY2gocGFpciA9PiB7XG4gICAgICAgICAgICBjb25zdCBwID0gcGFpclswXTtcbiAgICAgICAgICAgIGNvbnN0IG90aGVyID0gcGFpclsxXTtcbiAgICAgICAgICAgIC8vIFNvbWUgcHJvZHVjdHMgaGF2ZSBtdWx0aXBsZSBmYWN0b3JzXG4gICAgICAgICAgICBwLmZhY3RvcnMuZm9yRWFjaChmYWN0b3IgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzZWNvbmQ7XG4gICAgICAgICAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3QpIHtcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kID0gWy4uLm90aGVyLmZhY3RvcnNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kID0gW290aGVyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgY2xhaW0gPSB7IG46IHAud2l0aG91dChmYWN0b3IpLCBuMTogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmZyYWN0aW9uKSgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdE9yTm90KSguLi5zZWNvbmQpLCBmYWN0b3IpLCByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwgfTtcbiAgICAgICAgICAgICAgICBvdXQucHVzaChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudChuZXcgU2V0KFtwLCBvdGhlcl0pLCBjbGFpbSwgXCJhPWIgJiBjPWQgPT4gYS9jID0gYi9kXCIpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG59XG5leHBvcnRzLkRpdmlkZU9uQm90aFNpZGVzID0gRGl2aWRlT25Cb3RoU2lkZXM7XG4vKipcbiAqIEdldHMgdGhlIGFudGktcmVmbGV4aXZlIGNsb3N1cmUgb2YgdGhlIHJlbGF0aW9uIEEgeCBBLlxuICogSXQncyBzeW1tZXRyaWMgYW5kIHRyYW5zaXRpdmUuXG4gKlxuICogQHBhcmFtIHNldFxuICovXG5mdW5jdGlvbiBjYXJ0ZXNpYW5Qcm9kdWN0KHNldCkge1xuICAgIGNvbnN0IG91dCA9IFtdO1xuICAgIGZvciAoY29uc3QgZmlyc3Qgb2Ygc2V0KSB7XG4gICAgICAgIGZvciAoY29uc3Qgc2Vjb25kIG9mIHNldCkge1xuICAgICAgICAgICAgaWYgKGZpcnN0ID09PSBzZWNvbmQpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBvdXQucHVzaChbZmlyc3QsIHNlY29uZF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU3VidHJhY3RGcm9tQm90aFNpZGVzID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9Qcm9kdWN0XCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvU3VtXCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgUmVsYXRpb25hbERlcml2YXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vUmVsYXRpb25hbERlcml2YXRpb25SdWxlXCIpO1xuY2xhc3MgU3VidHJhY3RGcm9tQm90aFNpZGVzIGV4dGVuZHMgUmVsYXRpb25hbERlcml2YXRpb25SdWxlXzEuUmVsYXRpb25hbERlcml2YXRpb25SdWxlIHtcbiAgICBhcHBseUltcGwoZXF1YXRpb24pIHtcbiAgICAgICAgY29uc3Qgb3V0ID0gW107XG4gICAgICAgIGNvbnN0IGNvbWJpbmF0aW9ucyA9IGNhcnRlc2lhblByb2R1Y3QoZXF1YXRpb24pO1xuICAgICAgICAvLyBJZiBvbmUgaXMgYWRkaXRpb24sIHN1YnRyYWN0IGZyb20gYm90aCBzaWRlc1xuICAgICAgICAvLyBIZXJlIHdlIGZpbHRlciBzbyB0aGF0IG9ubHkgcGFpcnMgd2hlcmUgdGhlIGZpcnN0IGV4cHJlc3Npb24gaXNcbiAgICAgICAgLy8gYSBzdW0gYXJlIG9wZXJhdGVkIG9uLiBUaGlzIHdvcmtzIGJlY2F1c2UgY29tYmluYXRpb25zIGlzIHN5bWV0cmljLlxuICAgICAgICAvLyBOb3cgZm9yIGVhY2ggcGFpciB3ZSBvbmx5IGhhdmUgdG8gZGVhbCB3aXRoIHRoZSBmaXJzdCBleHAgYmVpbmcgc3VtLlxuICAgICAgICBjb21iaW5hdGlvbnMuZmlsdGVyKHBhaXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHBhaXJbMF0gaW5zdGFuY2VvZiBTdW1fMS5TdW07XG4gICAgICAgIH0pLmZvckVhY2gocGFpciA9PiB7XG4gICAgICAgICAgICBjb25zdCBzID0gcGFpclswXTtcbiAgICAgICAgICAgIGNvbnN0IG90aGVyID0gcGFpclsxXTtcbiAgICAgICAgICAgIC8vIFNvbWUgU3VtcyBoYXZlIG11bHRpcGxlIHRlcm1zXG4gICAgICAgICAgICBzLnRlcm1zLmZpbHRlcih0ZXJtID0+ICEodGVybSBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0ICYmIHRlcm0uaXNOZWdhdGlvbikpXG4gICAgICAgICAgICAgICAgLmZvckVhY2godGVybSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgb3RoZXIgaXMgaXRzZWxmIGEgc3VtLCB3ZSB3aWxsIGJyZWFrIGl0IGFwYXJ0XG4gICAgICAgICAgICAgICAgLy8gaW50byB0ZXJtcyBzbyB0aGF0IHdlIGNhbiBjb21iaW5lIGludGVnZXIgdGVybXMgaW4gdGhlXG4gICAgICAgICAgICAgICAgLy8gZmluYWwgcmVzdWx0IGFuZCBhdm9pZFxuICAgICAgICAgICAgICAgIC8vIHggKyAyICsgMiA9IHkgKyAyID0+IHggKyAyID0geSArIDIgLSAyXG4gICAgICAgICAgICAgICAgLy8gTm90ZTogV2Ugb25seSBkbyB0aGlzIHRvIGludGVnZXIgdGVybXMsIGJlY2F1c2UgdGhhdCdzXG4gICAgICAgICAgICAgICAgLy8gc28gb2J2aW91cyBhbmQgY291bGRuJ3QgcG9zc2libHkgbmVlZCB0byBiZSBleHBsYWluZWQgZnVydGhlci5cbiAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCBkbyBpdCB0byB2YXJpYWJsZSB0ZXJtcy4gVGhlIGZvbGxvd2luZyBpcyBjb3JyZWN0IGJlaGF2aW9yOlxuICAgICAgICAgICAgICAgIC8vIHggKyBhICsgYSA9IHkgKyBhID0+IHggKyBhID0geSArIGEgLSBhXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBkaXN0aW5jdGlvbiBpcyBkZWJhdGFibGUuIFdoeSBzaG91bGRuJ3QgdGhlIGxlZnQgaGFuZFxuICAgICAgICAgICAgICAgIC8vIG9mIHRoZSBsYXN0IGRlZHVjdGlvbiBiZSB4ICsgYSArIGEgLSBhPyBCeSBkb2luZyB0aGlzLCBcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm9kdWNlIGEgbXVjaCBtb3JlIGNvbXBsaWNhdGVkIGFuZCBleHBlbnNpdmUgZ3JhcGguIFxuICAgICAgICAgICAgICAgIGxldCBzZWNvbmQ7XG4gICAgICAgICAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgU3VtXzEuU3VtKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZCA9IFsuLi5vdGhlci50ZXJtc107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWNvbmQgPSBbb3RoZXJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBjbGFpbSA9IHsgbjogcy53aXRob3V0KHRlcm0pLCBuMTogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bUludHVpdGl2ZSkoLi4uc2Vjb25kLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubmVnYXRpdmUpKHRlcm0pKSwgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsIH07XG4gICAgICAgICAgICAgICAgb3V0LnB1c2gobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQobmV3IFNldChbcywgb3RoZXJdKSwgY2xhaW0sIFwiYT1iICYgYz1kID0+IGEtYyA9IGItZFwiKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxufVxuZXhwb3J0cy5TdWJ0cmFjdEZyb21Cb3RoU2lkZXMgPSBTdWJ0cmFjdEZyb21Cb3RoU2lkZXM7XG4vKipcbiAqIEdldHMgdGhlIGFudGktcmVmbGV4aXZlIGNsb3N1cmUgb2YgdGhlIHJlbGF0aW9uIEEgeCBBLlxuICogSXQncyBzeW1tZXRyaWMgYW5kIHRyYW5zaXRpdmUuXG4gKlxuICogQHBhcmFtIHNldFxuICovXG5mdW5jdGlvbiBjYXJ0ZXNpYW5Qcm9kdWN0KHNldCkge1xuICAgIGNvbnN0IG91dCA9IFtdO1xuICAgIGZvciAoY29uc3QgZmlyc3Qgb2Ygc2V0KSB7XG4gICAgICAgIGZvciAoY29uc3Qgc2Vjb25kIG9mIHNldCkge1xuICAgICAgICAgICAgaWYgKGZpcnN0ID09PSBzZWNvbmQpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBvdXQucHVzaChbZmlyc3QsIHNlY29uZF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZXF1aXYgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgRGVyaXZhdGl2ZV8xID0gcmVxdWlyZShcIi4uL2V4cHJlc3Npb25zL0Rlcml2YXRpdmVcIik7XG5jb25zdCBFeHBvbmVudF8xID0gcmVxdWlyZShcIi4uL2V4cHJlc3Npb25zL0V4cG9uZW50XCIpO1xuY29uc3QgRnJhY3Rpb25fMSA9IHJlcXVpcmUoXCIuLi9leHByZXNzaW9ucy9GcmFjdGlvblwiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuLi9leHByZXNzaW9ucy9JbnRlZ2VyXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4uL2V4cHJlc3Npb25zL1Byb2R1Y3RcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuLi9leHByZXNzaW9ucy9TdW1cIik7XG5jb25zdCBWYXJpYWJsZV8xID0gcmVxdWlyZShcIi4uL2V4cHJlc3Npb25zL1ZhcmlhYmxlXCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuLyoqXG4gKiBHZXRzIGFsbCBlcXVpdmFsZW50cyBvZiB0aGUgZ2l2ZW4gZXhwcmVzc2lvblxuICogY2hlY2tpbmcgaXQncyBjaGlsZHJlbidzIGVxdWl2YWxlbnRzLlxuICpcbiAqIChhICsgYSkgKyAoYiArIGIpXG4gKiAtPiAoMmEpICsgKGIgKyBiKSB3aXRoIGluZmVyZW5jZSBhICsgYSA9IDJhXG4gKiBAcGFyYW0gZXhwXG4gKiBAcGFyYW0gZGlyZWN0RXF1aXZhbGVudHMgRnVuY3Rpb24gdGhhdCB3aWxsIHByb2R1Y2UgZXF1aXZhbGVudCBleHByZXNzaW9uc1xuICogICAgICAgIHdpdGhvdXQgcmVjdXJzaW9uLlxuICogQHJldHVybnMgQXJyYXkgb2YgaW5mZXJlbmNlcyB0byBlcXVpdmFsZW50IGV4cHJlc3Npb25zLlxuICovXG5mdW5jdGlvbiBlcXVpdihleHAsIGRpcmVjdEVxdWl2YWxlbnRzKSB7XG4gICAgaWYgKGV4cCBpbnN0YW5jZW9mIFZhcmlhYmxlXzEuVmFyaWFibGUgfHwgZXhwIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpXG4gICAgICAgIHJldHVybiBbXTtcbiAgICBlbHNlXG4gICAgICAgIHN3aXRjaCAoZXhwLmNsYXNzKSB7XG4gICAgICAgICAgICBjYXNlIFN1bV8xLlN1bVR5cGU6IHJldHVybiBzdW1FcXVpdihleHAsIGRpcmVjdEVxdWl2YWxlbnRzKTtcbiAgICAgICAgICAgIGNhc2UgUHJvZHVjdF8xLlByb2R1Y3RUeXBlOiByZXR1cm4gcHJvZHVjdEVxdWl2KGV4cCwgZGlyZWN0RXF1aXZhbGVudHMpO1xuICAgICAgICAgICAgY2FzZSBFeHBvbmVudF8xLkV4cG9uZW50VHlwZTogcmV0dXJuIGV4cG9uZW50RXF1aXYoZXhwLCBkaXJlY3RFcXVpdmFsZW50cyk7XG4gICAgICAgICAgICBjYXNlIEZyYWN0aW9uXzEuRnJhY3Rpb25UeXBlOiByZXR1cm4gZnJhY3Rpb25FcXVpdihleHAsIGRpcmVjdEVxdWl2YWxlbnRzKTtcbiAgICAgICAgICAgIGNhc2UgRGVyaXZhdGl2ZV8xLkRlcml2YXRpdmVUeXBlOiByZXR1cm4gZGVyaXZhdGl2ZUVxdWl2KGV4cCwgZGlyZWN0RXF1aXZhbGVudHMpO1xuICAgICAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIGZvciBcIiArIGV4cC5jbGFzcyk7XG4gICAgICAgIH1cbn1cbmV4cG9ydHMuZXF1aXYgPSBlcXVpdjtcbi8qKlxuICogR2V0cyBhbGwgZXF1aXZhbGVudHMgb2YgdGhlIGdpdmVuIGV4cHJlc3Npb25cbiAqIGJ5IHN3YXBwaW5nIG91dCBpdCdzIGNoaWxkcmVuIGluZGl2aWR1YWxseS5cbiAqXG4gKiAoYSArIGEpICsgKGIgKyBiKVxuICogLT4gKDJhKSArIChiICsgYikgd2l0aCBpbmZlcmVuY2UgYSArIGEgPSAyYVxuICogQHBhcmFtIGV4cFxuICogQHJldHVybnMgQXJyYXkgb2YgaW5mZXJlbmNlcyB0byBlcXVpdmFsZW50IGV4cHJlc3Npb25zLlxuICovXG5mdW5jdGlvbiBzdW1FcXVpdihleHAsIGRpcmVjdEVxdWl2YWxlbnRzKSB7XG4gICAgY29uc3QgZXF1aXZhbGVudFN1bXMgPSBuZXcgU2V0KCk7XG4gICAgLy8gQWRkIHRvcCBsZXZlbCBlcXVpdmFsZW50c1xuICAgIGRpcmVjdEVxdWl2YWxlbnRzKGV4cCkuZm9yRWFjaChpbmYgPT4ge1xuICAgICAgICBlcXVpdmFsZW50U3Vtcy5hZGQoaW5mKTtcbiAgICB9KTtcbiAgICAvLyBGaW5kIGVxdWl2YWxlbnRzIGZvciBlYWNoIHRlcm1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4cC50ZXJtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0ZXJtID0gZXhwLnRlcm1zW2ldO1xuICAgICAgICAvLyBTdWJzdGl0dXRlIHRlcm0gZm9yIGVhY2ggZXF1aXZhbGVudFxuICAgICAgICBlcXVpdih0ZXJtLCBkaXJlY3RFcXVpdmFsZW50cykuZm9yRWFjaChhID0+IHtcbiAgICAgICAgICAgIGVxdWl2YWxlbnRTdW1zLmFkZChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICAgICAgbjE6IHN3YXAoZXhwLCBpLCBhLmNsYWltLm4xKVxuICAgICAgICAgICAgfSwgYS5hcmd1bWVudCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3dhcChzLCBpLCBlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1zID0gWy4uLnMudGVybXNdO1xuICAgICAgICB0ZXJtc1tpXSA9IGU7XG4gICAgICAgIHJldHVybiAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtKSguLi50ZXJtcyk7XG4gICAgfVxuICAgIHJldHVybiBbLi4uZXF1aXZhbGVudFN1bXNdO1xufVxuZnVuY3Rpb24gcHJvZHVjdEVxdWl2KGV4cCwgZGlyZWN0RXF1aXZhbGVudHMpIHtcbiAgICBjb25zdCBlcXVpdmFsZW50UHJvZHVjdHMgPSBuZXcgU2V0KCk7XG4gICAgLy8gQWRkIHRvcCBsZXZlbCBlcXVpdmFsZW50c1xuICAgIGRpcmVjdEVxdWl2YWxlbnRzKGV4cCkuZm9yRWFjaChpbmYgPT4ge1xuICAgICAgICBlcXVpdmFsZW50UHJvZHVjdHMuYWRkKGluZik7XG4gICAgfSk7XG4gICAgLy8gRmluZCBlcXVpdmFsZW50cyBmb3IgZWFjaCB0ZXJtXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleHAuZmFjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBmYWN0b3IgPSBleHAuZmFjdG9yc1tpXTtcbiAgICAgICAgLy8gU3Vic3RpdHV0ZSB0ZXJtIGZvciBlYWNoIGVxdWl2YWxlbnRcbiAgICAgICAgZXF1aXYoZmFjdG9yLCBkaXJlY3RFcXVpdmFsZW50cykuZm9yRWFjaChhbHQgPT4ge1xuICAgICAgICAgICAgZXF1aXZhbGVudFByb2R1Y3RzLmFkZChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICAgICAgbjE6IHN3YXAoZXhwLCBpLCBhbHQuY2xhaW0ubjEpLFxuICAgICAgICAgICAgfSwgYWx0LmFyZ3VtZW50KSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzd2FwKHMsIGksIGUpIHtcbiAgICAgICAgY29uc3QgdGVybXMgPSBbLi4ucy5mYWN0b3JzXTtcbiAgICAgICAgdGVybXNbaV0gPSBlO1xuICAgICAgICByZXR1cm4gKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3QpKC4uLnRlcm1zKTtcbiAgICB9XG4gICAgcmV0dXJuIFsuLi5lcXVpdmFsZW50UHJvZHVjdHNdO1xufVxuZnVuY3Rpb24gZXhwb25lbnRFcXVpdihleHAsIGRpcmVjdEVxdWl2YWxlbnRzKSB7XG4gICAgY29uc3QgZXF1aXZhbGVudHMgPSBuZXcgU2V0KCk7XG4gICAgLy8gQWRkIHRvcCBsZXZlbCBlcXVpdmFsZW50c1xuICAgIGRpcmVjdEVxdWl2YWxlbnRzKGV4cCkuZm9yRWFjaChpbmYgPT4ge1xuICAgICAgICBlcXVpdmFsZW50cy5hZGQoaW5mKTtcbiAgICB9KTtcbiAgICBlcXVpdihleHAuYmFzZSwgZGlyZWN0RXF1aXZhbGVudHMpLmZvckVhY2goYWx0ID0+IHtcbiAgICAgICAgZXF1aXZhbGVudHMuYWRkKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogRXhwb25lbnRfMS5FeHBvbmVudC5vZihhbHQuY2xhaW0ubjEsIGV4cC5wb3dlcilcbiAgICAgICAgfSwgYWx0LmFyZ3VtZW50KSk7XG4gICAgfSk7XG4gICAgZXF1aXYoZXhwLnBvd2VyLCBkaXJlY3RFcXVpdmFsZW50cykuZm9yRWFjaChhbHQgPT4ge1xuICAgICAgICBlcXVpdmFsZW50cy5hZGQobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgIG4xOiBFeHBvbmVudF8xLkV4cG9uZW50Lm9mKGV4cC5iYXNlLCBhbHQuY2xhaW0ubjEpLFxuICAgICAgICB9LCBhbHQuYXJndW1lbnQpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gWy4uLmVxdWl2YWxlbnRzXTtcbn1cbmZ1bmN0aW9uIGZyYWN0aW9uRXF1aXYoZXhwLCBkaXJlY3RFcXVpdmFsZW50cykge1xuICAgIGNvbnN0IGVxdWl2YWxlbnRzID0gbmV3IFNldCgpO1xuICAgIC8vIEFkZCB0b3AgbGV2ZWwgZXF1aXZhbGVudHNcbiAgICBkaXJlY3RFcXVpdmFsZW50cyhleHApLmZvckVhY2goaW5mID0+IHtcbiAgICAgICAgZXF1aXZhbGVudHMuYWRkKGluZik7XG4gICAgfSk7XG4gICAgZXF1aXYoZXhwLm51bWVyYXRvciwgZGlyZWN0RXF1aXZhbGVudHMpLmZvckVhY2goYWx0ID0+IHtcbiAgICAgICAgZXF1aXZhbGVudHMuYWRkKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihhbHQuY2xhaW0ubjEsIGV4cC5kZW5vbWluYXRvcilcbiAgICAgICAgfSwgYWx0LmFyZ3VtZW50KSk7XG4gICAgfSk7XG4gICAgZXF1aXYoZXhwLmRlbm9taW5hdG9yLCBkaXJlY3RFcXVpdmFsZW50cykuZm9yRWFjaChhbHQgPT4ge1xuICAgICAgICBlcXVpdmFsZW50cy5hZGQobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgIG4xOiBGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKGV4cC5udW1lcmF0b3IsIGFsdC5jbGFpbS5uMSksXG4gICAgICAgIH0sIGFsdC5hcmd1bWVudCkpO1xuICAgIH0pO1xuICAgIHJldHVybiBbLi4uZXF1aXZhbGVudHNdO1xufVxuZnVuY3Rpb24gZGVyaXZhdGl2ZUVxdWl2KGV4cCwgZGlyZWN0RXF1aXZhbGVudHMpIHtcbiAgICBjb25zdCBlcXVpdmFsZW50cyA9IG5ldyBTZXQoKTtcbiAgICAvLyBBZGQgdG9wIGxldmVsIGVxdWl2YWxlbnRzXG4gICAgZGlyZWN0RXF1aXZhbGVudHMoZXhwKS5mb3JFYWNoKGluZiA9PiB7XG4gICAgICAgIGVxdWl2YWxlbnRzLmFkZChpbmYpO1xuICAgIH0pO1xuICAgIGVxdWl2KGV4cC5leHAsIGRpcmVjdEVxdWl2YWxlbnRzKS5mb3JFYWNoKGFsdCA9PiB7XG4gICAgICAgIGVxdWl2YWxlbnRzLmFkZChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgbjE6IERlcml2YXRpdmVfMS5EZXJpdmF0aXZlLm9mKGFsdC5jbGFpbS5uMSwgZXhwLnJlbGF0aXZlVG8pXG4gICAgICAgIH0sIGFsdC5hcmd1bWVudCkpO1xuICAgIH0pO1xuICAgIGVxdWl2KGV4cC5yZWxhdGl2ZVRvLCBkaXJlY3RFcXVpdmFsZW50cykuZm9yRWFjaChhbHQgPT4ge1xuICAgICAgICBlcXVpdmFsZW50cy5hZGQobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgIG4xOiBEZXJpdmF0aXZlXzEuRGVyaXZhdGl2ZS5vZihleHAuZXhwLCBhbHQuY2xhaW0ubjEpLFxuICAgICAgICB9LCBhbHQuYXJndW1lbnQpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gWy4uLmVxdWl2YWxlbnRzXTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Bc3NvY2lhdGl2ZVByb3BlcnR5T2ZQcm9kdWN0c0FuZFN1bXMgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL1Byb2R1Y3RcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9TdW1cIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi8uLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xID0gcmVxdWlyZShcIi4uLy4uL3V0aWwvVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJcIik7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbi8qKlxuICogRmxhdHRlbnMgcHJvZHVjdHMgaW4gcHJvZHVjdHMgYW5kIHN1bXMgaW4gc3Vtc1xuICovXG5jbGFzcyBBc3NvY2lhdGl2ZVByb3BlcnR5T2ZQcm9kdWN0c0FuZFN1bXMgZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAgaW5zdGFuY2VvZiBTdW1fMS5TdW0gfHwgZXhwIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3Q7XG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgaWYgKGV4cCBpbnN0YW5jZW9mIFN1bV8xLlN1bSkge1xuICAgICAgICAgICAgY29uc3QgbmV3VGVybXMgPSBleHAudGVybXMubWFwKHQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0IGluc3RhbmNlb2YgU3VtXzEuU3VtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4udC50ZXJtc107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbdF07XG4gICAgICAgICAgICB9KS5mbGF0KCk7XG4gICAgICAgICAgICBpZiAobmV3VGVybXMubGVuZ3RoID09IGV4cC50ZXJtcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTZXQoKTtcbiAgICAgICAgICAgIHJldHVybiAoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgICAgIG4xOiAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtKSguLi5uZXdUZXJtcylcbiAgICAgICAgICAgIH0sIFwiQXNzb2NpYXRpdmUgcHJvcGVydHkgb2YgYWRkaXRpb25cIikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGV4cC5pc05lZ2F0aW9uKVxuICAgICAgICAgICAgICAgIHJldHVybiAoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0ZhY3RvcnMgPSBleHAuZmFjdG9ycy5tYXAodCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLnQuZmFjdG9yc107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbdF07XG4gICAgICAgICAgICB9KS5mbGF0KCk7XG4gICAgICAgICAgICBpZiAobmV3RmFjdG9ycy5sZW5ndGggPT0gZXhwLmZhY3RvcnMubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU2V0KCk7XG4gICAgICAgICAgICByZXR1cm4gKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgICAgICBuMTogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3QpKC4uLm5ld0ZhY3RvcnMpXG4gICAgICAgICAgICB9LCBcIkFzc29jaWF0aXZlIHByb3BlcnR5IG9mIG11bHRpcGxpY2F0aW9uXCIpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuQXNzb2NpYXRpdmVQcm9wZXJ0eU9mUHJvZHVjdHNBbmRTdW1zID0gQXNzb2NpYXRpdmVQcm9wZXJ0eU9mUHJvZHVjdHNBbmRTdW1zO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNvbWJpbmVDb21tb25GYWN0b3JzTXVsdGlwbGljYXRpb24gPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgRXhwb25lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9FeHBvbmVudFwiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9Qcm9kdWN0XCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG4vKipcbiAqIENvbWJpbmVzIGxpa2UgZmFjdG9ycyBhbmQgZXhwb25lbnRzIHdpdGggbGlrZSBiYXNlcy5cbiAqL1xuY2xhc3MgQ29tYmluZUNvbW1vbkZhY3RvcnNNdWx0aXBsaWNhdGlvbiBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGV4cCBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0XG4gICAgICAgICAgICAmJiAhZXhwLmlzUmVkdWNpYmxlO1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBleHA7XG4gICAgICAgIGNvbnN0IHVuaXF1ZUJhc2VzID0gbmV3IFNldCgpO1xuICAgICAgICBmb3IgKGNvbnN0IGZhY3RvciBvZiBwcm9kdWN0LmZhY3RvcnMpIHtcbiAgICAgICAgICAgIGlmIChmYWN0b3IgaW5zdGFuY2VvZiBFeHBvbmVudF8xLkV4cG9uZW50KVxuICAgICAgICAgICAgICAgIHVuaXF1ZUJhc2VzLmFkZChmYWN0b3IuYmFzZSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdW5pcXVlQmFzZXMuYWRkKGZhY3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXF1aXZhbGVudEV4cHJlc3Npb25zID0gbmV3IFNldCgpO1xuICAgICAgICAvLyBGb3IgZXZlcnkgdW5pcXVlIGZhY3RvclxuICAgICAgICBmb3IgKGNvbnN0IGJhc2Ugb2YgdW5pcXVlQmFzZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvd2VyVGVybXMgPSBbXTtcbiAgICAgICAgICAgIGxldCByZW1haW5pbmdGYWN0b3JzID0gW107XG4gICAgICAgICAgICAvLyBDb3VudCB0aGUgbnVtYmVyIG9mIHRpbWVzIGl0IG9jY3VycyBpbiB0aGUgcHJvZHVjdFxuICAgICAgICAgICAgLy8gQ29sbGVjdCB0aGUgb3RoZXIgZmFjdG9ycyBpbiBhIGxpc3RcbiAgICAgICAgICAgIGZvciAoY29uc3QgZiBvZiBwcm9kdWN0LmZhY3RvcnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZiBpbnN0YW5jZW9mIEV4cG9uZW50XzEuRXhwb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGYuYmFzZSA9PT0gYmFzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvd2VyVGVybXMucHVzaChmLnBvd2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmID09PSBiYXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3dlclRlcm1zLnB1c2goKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nRmFjdG9ycy5wdXNoKGYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgaXQgb2NjdXJlZCBtdWx0aXBsZSB0aW1lcywgY3JlYXRlIGEgbmV3IGV4cG9uZW50XG4gICAgICAgICAgICAvLyBUbyBjb21iaW5lIHRoZSByZXBlYXRzXG4gICAgICAgICAgICBpZiAocG93ZXJUZXJtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhwb25lbnQgPSBFeHBvbmVudF8xLkV4cG9uZW50Lm9mKGJhc2UsICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKC4uLnBvd2VyVGVybXMpKTtcbiAgICAgICAgICAgICAgICBpZiAocmVtYWluaW5nRmFjdG9ycy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBlcXVpdmFsZW50RXhwcmVzc2lvbnMuYWRkKGV4cG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEluc2VydCB0aGUgbmV3IGV4cG9uZW50IGF0IHRoZSBjb3JyZWN0IHBsYWNlIGluIHRoZSBuZXcgcHJvZHVjdFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBpbnNlcnRDb3JyZWN0bHkoYXJyLCBlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGljayBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgwLCBQcm9kdWN0XzEuZmFjdG9yT3JkZXIpKGVsLCBhcnJbaV0pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMCwgZWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluc2VydENvcnJlY3RseShyZW1haW5pbmdGYWN0b3JzLCBleHBvbmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGVxdWl2YWxlbnRFeHByZXNzaW9ucy5hZGQoUHJvZHVjdF8xLlByb2R1Y3Qub2YocmVtYWluaW5nRmFjdG9ycykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUdXJuIHRoZSBlcXVpdmFsZW50IGV4cHJlc3Npb25zIGludG8gaW5mZXJlbmNlc1xuICAgICAgICBsZXQgaW5mZXJlbmNlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgZXF1aXZhbGVudEV4cHJlc3Npb25zLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBpbmZlcmVuY2VzLmFkZChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikocHJvZHVjdCksIHtcbiAgICAgICAgICAgICAgICBuOiBwcm9kdWN0LFxuICAgICAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgICAgICBuMTogZSxcbiAgICAgICAgICAgIH0sIFwiQ29tYmluZSBjb21tb24gZmFjdG9ycyBtdWx0aXBsaWNhdGlvblwiKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaW5mZXJlbmNlcztcbiAgICB9XG59XG5leHBvcnRzLkNvbWJpbmVDb21tb25GYWN0b3JzTXVsdGlwbGljYXRpb24gPSBDb21iaW5lQ29tbW9uRmFjdG9yc011bHRpcGxpY2F0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNvbWJpbmVDb21tb25UZXJtc0FkZGl0aW9uID0gdm9pZCAwO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9Qcm9kdWN0XCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9TdW1cIik7XG5jb25zdCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xID0gcmVxdWlyZShcIi4uLy4uL3V0aWwvVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJcIik7XG4vKipcbiAqIGEgKyBhID0gMmFcbiAqIDJhIC0gYSA9IGEgICh0aGlzIG1lYW5zIHdlIGhhdmUgdG8gY2hlY2sgZm9yIG5lZ2F0aW9ucylcbiAqXG4gKiAoYmMpYSArIDdhID0gKDcgKyBiYylhXG4gKlxuICogQnV0IG5vdFxuICogMSArIDEgPSAyKDEpXG4gKi9cbmNsYXNzIENvbWJpbmVDb21tb25UZXJtc0FkZGl0aW9uIGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gZXhwIGluc3RhbmNlb2YgU3VtXzEuU3VtXG4gICAgICAgICAgICAmJiAhZXhwLmlzUmVkdWNpYmxlO1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGNvbnN0IHN1bSA9IGV4cDtcbiAgICAgICAgY29uc3QgdW5pcXVlRmFjdG9ycyA9IG5ldyBTZXQoKTtcbiAgICAgICAgY29uc3QgYXJncyA9IG5ldyBTZXQoKTtcbiAgICAgICAgLy8gRmluZCBhbGwgdW5pcXVlIGZhY3RvcnMgaW4gYWxsIHRlcm1zXG4gICAgICAgIC8vIERvbid0IGNvbnNpZGVyIHRoZSAtMSBpbiBuZWdhdGlvbnNcbiAgICAgICAgLy8gQ29uc2lkZXIgdGhlIGZhY3RvcnMgb2YgbmVnYXRlZCBwcm9kdWN0cyBzZXBhcmF0ZWx5XG4gICAgICAgIGZvciAoY29uc3QgdGVybSBvZiBzdW0udGVybXMpIHtcbiAgICAgICAgICAgIGlmICh0ZXJtIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3QpIHtcbiAgICAgICAgICAgICAgICBpZiAodGVybS5pc05lZ2F0aW9uKVxuICAgICAgICAgICAgICAgICAgICBpZiAodGVybS5uZWdhdGlvbiBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5hZGRBbGwpKHVuaXF1ZUZhY3RvcnMsIC4uLnRlcm0ubmVnYXRpb24uZmFjdG9ycyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlRmFjdG9ycy5hZGQodGVybS5uZWdhdGlvbik7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5hZGRBbGwpKHVuaXF1ZUZhY3RvcnMsIC4uLnRlcm0uZmFjdG9ycyk7IC8vVE9ETzogQ2FwdHVyZSBhbGwgY29tYmluYXRpb25zIG9mIGZhY3RvcnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB1bmlxdWVGYWN0b3JzLmFkZCh0ZXJtKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDcmVhdGUgYW4gYXJndW1lbnQgZm9yIHB1bGxpbmcgb3V0IGVhY2ggZmFjdG9yXG4gICAgICAgIGZvciAoY29uc3QgZmFjdG9yIG9mIHVuaXF1ZUZhY3RvcnMpIHtcbiAgICAgICAgICAgIC8vIERvbid0IHdhc3RlIHRpbWUgd2l0aCB1bmhlYWx0aHkgZmFjdG9yc1xuICAgICAgICAgICAgaWYgKGZhY3Rvci5pc1JlZHVjaWJsZU9ySW50KVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgLy8gRmlndXJlIG91dCB3aGljaCB0ZXJtcyBjb250YWluIGl0XG4gICAgICAgICAgICBjb25zdCByZWxhdmVudFRlcm1zID0gW107XG4gICAgICAgICAgICBjb25zdCBvdGhlclRlcm1zID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRlcm0gb2Ygc3VtLnRlcm1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlcm0gaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGVybS5pc05lZ2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCdzIGEgbmVnYXRpb24sIGNoZWNrIGlmIHRoZSBuZWdhdGlvbiBoYXMgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXJtLm5lZ2F0aW9uID09PSBmYWN0b3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXZlbnRUZXJtcy5wdXNoKHRlcm0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGVybS5uZWdhdGlvbiBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLmhhcykodGVybS5uZWdhdGlvbi5mYWN0b3JzLCBmYWN0b3IpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxhdmVudFRlcm1zLnB1c2godGVybSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlclRlcm1zLnB1c2godGVybSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuaGFzKSh0ZXJtLmZhY3RvcnMsIGZhY3RvcikpXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxhdmVudFRlcm1zLnB1c2godGVybSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyVGVybXMucHVzaCh0ZXJtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXJtID09PSBmYWN0b3IpXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxhdmVudFRlcm1zLnB1c2goUHJvZHVjdF8xLlByb2R1Y3Qub2YoWygwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKDEpLCB0ZXJtXSkpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlclRlcm1zLnB1c2godGVybSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHVsbCBpdCBvdXQgb2YgdGhvc2UgdGVybXNcbiAgICAgICAgICAgIGNvbnN0IGNvZWZmaWNpZW50cyA9IFtdO1xuICAgICAgICAgICAgaWYgKHJlbGF2ZW50VGVybXMubGVuZ3RoIDwgMilcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGVybSBvZiByZWxhdmVudFRlcm1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlcm0uaXNOZWdhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGVybS5uZWdhdGlvbiBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmZmljaWVudHMucHVzaCgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubmVnYXRpdmUpKHRlcm0ubmVnYXRpb24ud2l0aG91dChmYWN0b3IpKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29lZmZpY2llbnRzLnB1c2goKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm5lZ2F0aXZlKSgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgxKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29lZmZpY2llbnRzLnB1c2godGVybS53aXRob3V0KGZhY3RvcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHB1bGxlZCA9ICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW1Pck5vdCkoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm9yZGVyZWRQcm9kdWN0KShTdW1fMS5TdW0ub2YoY29lZmZpY2llbnRzKSwgZmFjdG9yKSwgLi4ub3RoZXJUZXJtcyk7XG4gICAgICAgICAgICBhcmdzLmFkZChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICAgICAgbjE6IHB1bGxlZFxuICAgICAgICAgICAgfSwgXCJDb21iaW5lIGxpa2UgdGVybXNcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcmdzO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29tYmluZUNvbW1vblRlcm1zQWRkaXRpb24gPSBDb21iaW5lQ29tbW9uVGVybXNBZGRpdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Db21iaW5lSW50ZWdlckZhY3RvcnMgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgSW50ZWdlcl8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL0ludGVnZXJcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvUHJvZHVjdFwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9UaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYlwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuLyoqXG4gKiBQcm9kdWN0cyB3aXRoIHNldmVyYWwgaW50ZWdlciB0ZXJtcyBhcmUgc2ltcGxpZmllZCB0byBvbmx5IGluY2x1ZGUgMVxuICovXG5jbGFzcyBDb21iaW5lSW50ZWdlckZhY3RvcnMgZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAgaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdDtcbiAgICB9XG4gICAgYXBwbHlJbXBsKGV4cCkge1xuICAgICAgICBjb25zdCBwID0gZXhwO1xuICAgICAgICBjb25zdCByZW1haW5pbmdGYWN0b3JzID0gW107XG4gICAgICAgIGxldCBjb2VmZmljaWVudCA9IDE7XG4gICAgICAgIGZvciAoY29uc3QgZiBvZiBwLmZhY3RvcnMpIHtcbiAgICAgICAgICAgIGlmIChmIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpIHtcbiAgICAgICAgICAgICAgICBjb2VmZmljaWVudCAqPSBmLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJlbWFpbmluZ0ZhY3RvcnMucHVzaChmKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocC5mYWN0b3JzLmxlbmd0aCAtIHJlbWFpbmluZ0ZhY3RvcnMubGVuZ3RoIDwgMilcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2V0KCk7XG4gICAgICAgIHJldHVybiAoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgIG4xOiAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdE9yTm90KSgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKShjb2VmZmljaWVudCksIC4uLnJlbWFpbmluZ0ZhY3RvcnMpXG4gICAgICAgIH0sIFwiTXVsdGlwbHkgaW50ZWdlciB0ZXJtc1wiKSk7XG4gICAgfVxufVxuZXhwb3J0cy5Db21iaW5lSW50ZWdlckZhY3RvcnMgPSBDb21iaW5lSW50ZWdlckZhY3RvcnM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXZhbHVhdGVTdW1zID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9JbnRlZ2VyXCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvU3VtXCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG4vKipcbiAqIENvbWJpbmUgYW55IGludGVnZXIgdGVybXMgaW4gU3Vtcy5cbiAqIGEgKyAyICsgMiArIDI9IGEgKyA0XG4gKiAyIC0gMiA9IDBcbiAqXG4gKiBDb21iaW5lcyBhbGwgb2YgdGhlbSBhdCBvbmNlIG5vIG1hdHRlciBob3cgbWFueSB0ZXJtcyB0aGVyZSBhcmUuXG4gKlxuICovXG5jbGFzcyBFdmFsdWF0ZVN1bXMgZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAgaW5zdGFuY2VvZiBTdW1fMS5TdW07XG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgY29uc3Qgc3VtID0gZXhwO1xuICAgICAgICBjb25zdCBvdXQgPSBuZXcgU2V0KCk7XG4gICAgICAgIGNvbnN0IGludGVnZXJUZXJtcyA9IFsuLi5zdW0udGVybXNdLmZpbHRlcih0ID0+IHQgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcik7XG4gICAgICAgIGlmIChpbnRlZ2VyVGVybXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3SW50ID0gaW50ZWdlclRlcm1zLm1hcChlID0+IGUpLnJlZHVjZSgoYSwgYikgPT4gSW50ZWdlcl8xLkludGVnZXIub2YoYS52YWx1ZSArIGIudmFsdWUpKTtcbiAgICAgICAgY29uc3Qgb3RoZXJUZXJtcyA9IFsuLi5zdW0udGVybXNdLmZpbHRlcih0ID0+ICEodCBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKSk7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIGlmIChvdGhlclRlcm1zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoc3VtKSwge1xuICAgICAgICAgICAgICAgIG46IHN1bSxcbiAgICAgICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICAgICAgbjE6IG5ld0ludFxuICAgICAgICAgICAgfSwgXCJFdmFsdWF0ZWQgQWRkaXRpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoc3VtKSwge1xuICAgICAgICAgICAgICAgIG46IHN1bSxcbiAgICAgICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICAgICAgbjE6IFN1bV8xLlN1bS5vZihvdGhlclRlcm1zLmNvbmNhdChuZXdJbnQpKSxcbiAgICAgICAgICAgIH0sIFwiRXZhbHVhdGVkIEFkZGl0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIG91dC5hZGQocmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG59XG5leHBvcnRzLkV2YWx1YXRlU3VtcyA9IEV2YWx1YXRlU3VtcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FeHBvbmVudGlhbElkZW50aXR5ID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IEV4cG9uZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvRXhwb25lbnRcIik7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvSW50ZWdlclwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4uLy4uL1JlbGF0aW9uc2hpcFwiKTtcbmNvbnN0IFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9UaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYlwiKTtcbmNvbnN0IE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMSA9IHJlcXVpcmUoXCIuLi9Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXCIpO1xuLyoqXG4gKiBBbnl0aGluZyB0byB0aGUgZmlyc3QgaXMganVzdCB0aGF0IHRoaW5nLlxuICogVHVybnMgYW55IGV4cG9uZW50IHdpdGggYSBwb3dlciBvZiAxIHRvIHRoYXQgdGhpbmcuXG4gKi9cbmNsYXNzIEV4cG9uZW50aWFsSWRlbnRpdHkgZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAgaW5zdGFuY2VvZiBFeHBvbmVudF8xLkV4cG9uZW50XG4gICAgICAgICAgICAmJiBleHAucG93ZXIgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlclxuICAgICAgICAgICAgJiYgZXhwLnBvd2VyLnZhbHVlID09IDE7XG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgY29uc3QgZSA9IGV4cDtcbiAgICAgICAgcmV0dXJuICgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZSksIHtcbiAgICAgICAgICAgIG46IGUsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogZS5iYXNlLFxuICAgICAgICB9LCBcIkV4cG9uZW50aWFsIElkZW50aXR5IGlzIDFcIikpO1xuICAgIH1cbn1cbmV4cG9ydHMuRXhwb25lbnRpYWxJZGVudGl0eSA9IEV4cG9uZW50aWFsSWRlbnRpdHk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTXVsdGlwbGljYXRpdmVJZGVudGl0eSA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vQXJndW1lbnRcIik7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db252ZW5pZW50RXhwcmVzc2lvbnNcIik7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvSW50ZWdlclwiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9Qcm9kdWN0XCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG4vKipcbiAqIDF4ID0geFxuICogMSoxeCA9IDFcbiAqL1xuY2xhc3MgTXVsdGlwbGljYXRpdmVJZGVudGl0eSBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGV4cCBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0XG4gICAgICAgICAgICAmJiBuZXcgU2V0KGV4cC5mYWN0b3JzKS5oYXMoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSkpO1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGNvbnN0IHAgPSBleHA7XG4gICAgICAgIGNvbnN0IG5ld0ZhY3RvcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBmYWN0b3Igb2YgcC5mYWN0b3JzKSB7XG4gICAgICAgICAgICBpZiAoZmFjdG9yIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIgJiYgZmFjdG9yLnZhbHVlID09IDEpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBuZXdGYWN0b3JzLnB1c2goZmFjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKG5ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3RPck5vdCkoLi4ubmV3RmFjdG9ycylcbiAgICAgICAgfSwgXCJNdWx0aXBsaWNhdGl2ZSBJZGVudGl0eVwiKSk7XG4gICAgfVxufVxuZXhwb3J0cy5NdWx0aXBsaWNhdGl2ZUlkZW50aXR5ID0gTXVsdGlwbGljYXRpdmVJZGVudGl0eTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NdWx0aXBseUV4cG9uZW50UG93ZXJzID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IEV4cG9uZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvRXhwb25lbnRcIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi8uLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xID0gcmVxdWlyZShcIi4uLy4uL3V0aWwvVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJcIik7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbmNsYXNzIE11bHRpcGx5RXhwb25lbnRQb3dlcnMgZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAgaW5zdGFuY2VvZiBFeHBvbmVudF8xLkV4cG9uZW50XG4gICAgICAgICAgICAmJiBleHAuYmFzZSBpbnN0YW5jZW9mIEV4cG9uZW50XzEuRXhwb25lbnQ7XG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgY29uc3Qgb3V0ZXIgPSBleHA7XG4gICAgICAgIGNvbnN0IGlubmVyID0gb3V0ZXIuYmFzZTtcbiAgICAgICAgcmV0dXJuICgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZXhwKSwge1xuICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgbjE6IEV4cG9uZW50XzEuRXhwb25lbnQub2YoaW5uZXIuYmFzZSwgKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3QpKGlubmVyLnBvd2VyLCBvdXRlci5wb3dlcikpXG4gICAgICAgIH0sIFwiRXhwb25lbnRzIHRvIGV4cG9uZW50cyBtdWx0aXBseVwiKSk7XG4gICAgfVxufVxuZXhwb3J0cy5NdWx0aXBseUV4cG9uZW50UG93ZXJzID0gTXVsdGlwbHlFeHBvbmVudFBvd2VycztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5PcmRlclN1bXMgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29udmVuaWVudEV4cHJlc3Npb25zXCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvU3VtXCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG4vKipcbiAqIFR1cm5zIHN1bXMgdGhhdCBhcmUgdW5oZWFsdGh5IGJlY2F1c2UgdGhlaXIgdGVybSBvcmRlclxuICogaXMgd3JvbmcgaW50byBjb3JyZWN0bHkgb3JkZXJlZCBzdW1zLlxuICovXG5jbGFzcyBPcmRlclN1bXMgZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiAhZXhwLmlzSGVhbHRoeSAmJiBleHAuY2xhc3MgPT09IFN1bV8xLlN1bVR5cGU7XG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZXQoW25ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgICAgICBuMTogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm9yZGVyZWRTdW0pKGV4cCksXG4gICAgICAgICAgICB9LCBcIlJlb3JkZXJlZFwiKV0pO1xuICAgIH1cbn1cbmV4cG9ydHMuT3JkZXJTdW1zID0gT3JkZXJTdW1zO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBvd2VyUnVsZSA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vQXJndW1lbnRcIik7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db252ZW5pZW50RXhwcmVzc2lvbnNcIik7XG5jb25zdCBEZXJpdmF0aXZlXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvRGVyaXZhdGl2ZVwiKTtcbmNvbnN0IEV4cG9uZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvRXhwb25lbnRcIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi8uLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xID0gcmVxdWlyZShcIi4uLy4uL3V0aWwvVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJcIik7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbi8qKlxuICogRGVyaXZlcyB1c2luZyB0aGUgcG93ZXIgcnVsZVxuICovXG5jbGFzcyBQb3dlclJ1bGUgZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAgaW5zdGFuY2VvZiBEZXJpdmF0aXZlXzEuRGVyaXZhdGl2ZVxuICAgICAgICAgICAgJiYgKChleHAuZXhwIGluc3RhbmNlb2YgRXhwb25lbnRfMS5FeHBvbmVudFxuICAgICAgICAgICAgICAgICYmIGV4cC5leHAuYmFzZSA9PT0gZXhwLnJlbGF0aXZlVG9cbiAgICAgICAgICAgICAgICAmJiBleHAuZXhwLnBvd2VyLmlzQ29uc3RhbnQpXG4gICAgICAgICAgICAgICAgfHwgKGV4cC5leHAgPT09IGV4cC5yZWxhdGl2ZVRvKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdlIGtub3c6XG4gICAgICogZXhwIGlzIGEgRGVyaXZhdGl2ZSBvZiBhbiBFeHBvbmVudCB3aXRoIGEgY29uc3RhbnQgcG93ZXJcbiAgICAgKiB0aGUgZXhwb25lbnQncyBiYXNlIGlzIHRoZSBzYW1lIGFzIHdoYXQgdGhlIGRlcml2YXRpdmUgaXMgcmVsYXRpdmUgdG9cbiAgICAgKi9cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGNvbnN0IGQgPSBleHA7XG4gICAgICAgIGxldCBleHBvbmVudDtcbiAgICAgICAgaWYgKGQuZXhwIGluc3RhbmNlb2YgRXhwb25lbnRfMS5FeHBvbmVudCkge1xuICAgICAgICAgICAgZXhwb25lbnQgPSBkLmV4cDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV4cG9uZW50ID0gRXhwb25lbnRfMS5FeHBvbmVudC5vZihkLmV4cCwgKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm51bSkoMSkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9ICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5wcm9kdWN0KShleHBvbmVudC5wb3dlciwgRXhwb25lbnRfMS5FeHBvbmVudC5vZihleHBvbmVudC5iYXNlLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtSW50dWl0aXZlKShleHBvbmVudC5wb3dlciwgKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm5lZ2F0aXZlKSgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgxKSkpKSk7XG4gICAgICAgIHJldHVybiAoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgIG4xOiByZXN1bHRcbiAgICAgICAgfSwgXCJQb3dlciBydWxlXCIpKTtcbiAgICB9XG59XG5leHBvcnRzLlBvd2VyUnVsZSA9IFBvd2VyUnVsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Qcm9kdWN0UnVsZSA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vQXJndW1lbnRcIik7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db252ZW5pZW50RXhwcmVzc2lvbnNcIik7XG5jb25zdCBEZXJpdmF0aXZlXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvRGVyaXZhdGl2ZVwiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9Qcm9kdWN0XCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG4vKipcbiAqIERlcml2YXRpdmVzIG9mIHByb2R1Y3RzXG4gKlxuICogT25seSBvcGVyYXRlcyBvbiBkZXJpdmF0aXZlcyBvZiBwcm9kdWN0cyB3aGVyZSBhbGwgZmFjdG9ycyBhcmUgbm90IGNvbnN0YW50LlxuICovXG5jbGFzcyBQcm9kdWN0UnVsZSBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGV4cCBpbnN0YW5jZW9mIERlcml2YXRpdmVfMS5EZXJpdmF0aXZlXG4gICAgICAgICAgICAmJiBleHAuZXhwIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3RcbiAgICAgICAgICAgIC8vIENvbnRhaW5zIG5vIGNvbnN0YW50IGZhY3RvcnNcbiAgICAgICAgICAgICYmICFleHAuZXhwLmZhY3RvcnMubWFwKGYgPT4gZi5pc0NvbnN0YW50KS5yZWR1Y2UoKGEsIGIpID0+IGEgfHwgYik7XG4gICAgICAgIC8vIENvbnRhaW5zIG5vIGRlcml2YXRpdmVzIFRPRE86IEZpbmQgYSBiZXR0ZXIgc29sdXRpb24gdG8gbG9vcCBndWFyZGluZ1xuICAgICAgICAvLyYmICFleHAuZXhwLmZhY3RvcnMubWFwPGJvb2xlYW4+KGYgPT4gZiBpbnN0YW5jZW9mIERlcml2YXRpdmUpLnJlZHVjZSgoYSwgYikgPT4gYSB8fCBiKVxuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGNvbnN0IGQgPSBleHA7XG4gICAgICAgIGNvbnN0IHAgPSBkLmV4cDtcbiAgICAgICAgY29uc3QgZmFjdG9ycyA9IHAuZmFjdG9ycztcbiAgICAgICAgLy8gRm9yIGVhY2ggZmFjdG9yLCBjcmVhdGUgYSBwcm9kdWN0IGNvbnRhaW5pbmcgaXRzIGRlcml2YXRpdmUgYW5kIHRoZSBvdGhlciBmYWN0b3JzXG4gICAgICAgIGNvbnN0IHRlcm1zID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmFjdG9ycy5sZW5ndGg7IGkrKykgeyAvLyBpIGlzIHRoZSBmYWN0b3IgdG8gZGVyaXZhdGl6ZSAod2hhdCB0ZXJtIHdlJ3JlIG9uKVxuICAgICAgICAgICAgY29uc3QgZmFjdG9yVG9EZXJpdmF0aXplID0gZmFjdG9yc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHBGYWN0b3JzID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGZhY3RvciBvZiBmYWN0b3JzKSB7IC8vIGEgaXMgdGhlIHRoZSBmYWN0b3Igd2UncmUgb25cbiAgICAgICAgICAgICAgICBpZiAoZmFjdG9yID09PSBmYWN0b3JUb0Rlcml2YXRpemUpXG4gICAgICAgICAgICAgICAgICAgIHBGYWN0b3JzLnB1c2goRGVyaXZhdGl2ZV8xLkRlcml2YXRpdmUub2YoZmFjdG9yLCBkLnJlbGF0aXZlVG8pKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHBGYWN0b3JzLnB1c2goZmFjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRlcm1zLnB1c2goKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3QpKC4uLnBGYWN0b3JzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShuZXcgQXJndW1lbnRfMS5Bcmd1bWVudCgoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikoZCksIHtcbiAgICAgICAgICAgIG46IGQsXG4gICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICBuMTogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bSkoLi4udGVybXMpXG4gICAgICAgIH0sIFwiUHJvZHVjdCBSdWxlXCIpKTtcbiAgICB9XG59XG5leHBvcnRzLlByb2R1Y3RSdWxlID0gUHJvZHVjdFJ1bGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUHVsbENvbnN0YW50c0Zyb21EZXJpdmF0aXZlcyA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vQXJndW1lbnRcIik7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db252ZW5pZW50RXhwcmVzc2lvbnNcIik7XG5jb25zdCBEZXJpdmF0aXZlXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvRGVyaXZhdGl2ZVwiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9Qcm9kdWN0XCIpO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi4vLi4vUmVsYXRpb25zaGlwXCIpO1xuY29uc3QgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL1RoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXCIpO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG5jbGFzcyBQdWxsQ29uc3RhbnRzRnJvbURlcml2YXRpdmVzIGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gZXhwIGluc3RhbmNlb2YgRGVyaXZhdGl2ZV8xLkRlcml2YXRpdmVcbiAgICAgICAgICAgICYmIGV4cC5leHAgaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdDtcbiAgICB9XG4gICAgYXBwbHlJbXBsKGV4cCkge1xuICAgICAgICBjb25zdCBkID0gZXhwO1xuICAgICAgICBjb25zdCBwID0gZC5leHA7XG4gICAgICAgIGNvbnN0IGNvbnN0RmFjdG9ycyA9IHAuZmFjdG9ycy5maWx0ZXIoZiA9PiBmLmlzQ29uc3RhbnQpO1xuICAgICAgICBjb25zdCBvdXQgPSBuZXcgU2V0O1xuICAgICAgICBmb3IgKGNvbnN0IGZhY3RvciBvZiBjb25zdEZhY3RvcnMpIHtcbiAgICAgICAgICAgIG91dC5hZGQobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGQpLCB7XG4gICAgICAgICAgICAgICAgbjogZCxcbiAgICAgICAgICAgICAgICByOiBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWwsXG4gICAgICAgICAgICAgICAgbjE6ICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5wcm9kdWN0QW5kTm90VGltZXNPbmUpKGZhY3RvciwgRGVyaXZhdGl2ZV8xLkRlcml2YXRpdmUub2YoKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnByb2R1Y3RPck5vdCkoLi4uKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnJlbW92ZU5ldykocC5mYWN0b3JzLCBmYWN0b3IpKSwgZC5yZWxhdGl2ZVRvKSlcbiAgICAgICAgICAgIH0sIFwiUHVsbCBjb25zdGFudCBmYWN0b3IgZnJvbSBkZXJpdmF0aXZlXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbn1cbmV4cG9ydHMuUHVsbENvbnN0YW50c0Zyb21EZXJpdmF0aXZlcyA9IFB1bGxDb25zdGFudHNGcm9tRGVyaXZhdGl2ZXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUXVvdGllbnRSdWxlID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IERlcml2YXRpdmVfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9EZXJpdmF0aXZlXCIpO1xuY29uc3QgRXhwb25lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9FeHBvbmVudFwiKTtcbmNvbnN0IEZyYWN0aW9uXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwcmVzc2lvbnMvRnJhY3Rpb25cIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi8uLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xID0gcmVxdWlyZShcIi4uLy4uL3V0aWwvVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJcIik7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbmNsYXNzIFF1b3RpZW50UnVsZSBleHRlbmRzIE5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVfMS5Ob0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlIHtcbiAgICBhcHBsaWVzSW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIGV4cCBpbnN0YW5jZW9mIERlcml2YXRpdmVfMS5EZXJpdmF0aXZlXG4gICAgICAgICAgICAmJiBleHAuZXhwIGluc3RhbmNlb2YgRnJhY3Rpb25fMS5GcmFjdGlvbjtcbiAgICB9XG4gICAgYXBwbHlJbXBsKGV4cCkge1xuICAgICAgICBjb25zdCBkID0gZXhwO1xuICAgICAgICBjb25zdCBhID0gZC5leHAubnVtZXJhdG9yO1xuICAgICAgICBjb25zdCBiID0gZC5leHAuZGVub21pbmF0b3I7XG4gICAgICAgIHJldHVybiAoMCwgVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJfMS5zZXRPZikobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgIG46IGV4cCxcbiAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgIG4xOiBGcmFjdGlvbl8xLkZyYWN0aW9uLm9mKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5zdW0pKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5wcm9kdWN0KShEZXJpdmF0aXZlXzEuRGVyaXZhdGl2ZS5vZihhLCBkLnJlbGF0aXZlVG8pLCBiKSwgKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm5lZ2F0aXZlKSgoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdCkoYSwgRGVyaXZhdGl2ZV8xLkRlcml2YXRpdmUub2YoYiwgZC5yZWxhdGl2ZVRvKSkpKSwgRXhwb25lbnRfMS5FeHBvbmVudC5vZihiLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubnVtKSgyKSkpXG4gICAgICAgIH0sIFwiUXVvdGllbnQgUnVsZVwiKSk7XG4gICAgfVxufVxuZXhwb3J0cy5RdW90aWVudFJ1bGUgPSBRdW90aWVudFJ1bGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUmVkdWNlUmVkdWNpYmxlcyA9IHZvaWQgMDtcbmNvbnN0IEFyZ3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vQXJndW1lbnRcIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi8uLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xID0gcmVxdWlyZShcIi4uLy4uL3V0aWwvVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJcIik7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbmNsYXNzIFJlZHVjZVJlZHVjaWJsZXMgZXh0ZW5kcyBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEuTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZSB7XG4gICAgYXBwbGllc0ltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAuaXNSZWR1Y2libGU7XG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZXQoW25ldyBBcmd1bWVudF8xLkFyZ3VtZW50KCgwLCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xLnNldE9mKShleHApLCB7XG4gICAgICAgICAgICAgICAgbjogZXhwLFxuICAgICAgICAgICAgICAgIHI6IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbCxcbiAgICAgICAgICAgICAgICBuMTogZXhwLnJlZHVjZWRcbiAgICAgICAgICAgIH0sIFwiUmVkdWNlZFwiKV0pO1xuICAgIH1cbn1cbmV4cG9ydHMuUmVkdWNlUmVkdWNpYmxlcyA9IFJlZHVjZVJlZHVjaWJsZXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU3VtQ29lZmZpY2llbnRzT2ZBZGRlZFRlcm1zID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Bcmd1bWVudFwiKTtcbmNvbnN0IENvbnZlbmllbnRFeHByZXNzaW9uc18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9JbnRlZ2VyXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4uLy4uL2V4cHJlc3Npb25zL1Byb2R1Y3RcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuLi8uLi9leHByZXNzaW9ucy9TdW1cIik7XG5jb25zdCBSZWxhdGlvbnNoaXBfMSA9IHJlcXVpcmUoXCIuLi8uLi9SZWxhdGlvbnNoaXBcIik7XG5jb25zdCBUaGluZ3NUaGF0U2hvdWxkQmVJblRoZVN0ZExpYl8xID0gcmVxdWlyZShcIi4uLy4uL3V0aWwvVGhpbmdzVGhhdFNob3VsZEJlSW5UaGVTdGRMaWJcIik7XG5jb25zdCBOb0NvbnRleHRFeHByZXNzaW9uU2ltcGxpZmljYXRpb25SdWxlXzEgPSByZXF1aXJlKFwiLi4vTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZVwiKTtcbi8qKlxuICogVGFrZXMgc3VtcyBvZiBzZXZlcmFsIGFkZGVkIHByb2R1Y3RzIGFuZCBjb21iaW5lcyBvbmVzIHRoYXQgb25seVxuICogaGF2ZSBkaWZmZXJlbnQgY29lZmZpY2llbnRzLlxuICpcbiAqIGEgKyAyYSA9IDNhXG4gKiBhIC0gMmEgPSAtMWFcbiAqL1xuY2xhc3MgU3VtQ29lZmZpY2llbnRzT2ZBZGRlZFRlcm1zIGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gZXhwIGluc3RhbmNlb2YgU3VtXzEuU3VtO1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGNvbnN0IHRlcm1zID0gZXhwLnRlcm1zO1xuICAgICAgICAvLyBTcGxpdCB0aGUgdGVybXMgaW50byBwcm9kdWN0IGFuZCBub3QgcHJvZHVjdHNcbiAgICAgICAgY29uc3QgcHJvZHVjdFRlcm1zID0gW107XG4gICAgICAgIGNvbnN0IG5vblByb2R1Y3RUZXJtcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHRlcm0gb2YgdGVybXMpIHtcbiAgICAgICAgICAgIGlmICh0ZXJtIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3QgJiYgdGVybS5mYWN0b3JzWzBdIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGVybXMucHVzaCh0ZXJtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vblByb2R1Y3RUZXJtcy5wdXNoKHRlcm0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFNvcnQgdGhlIHByb2R1Y3QgdGVybXMgaW50byBncm91cHMgb2YgY29tbW9uIGZhY3RvcnNcbiAgICAgICAgY29uc3QgZ3JvdXBzID0gbmV3IE1hcCgpO1xuICAgICAgICBmb3IgKGNvbnN0IHRlcm0gb2YgcHJvZHVjdFRlcm1zKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdCA9IHRlcm0uZmFjdG9yc1swXTtcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBbLi4udGVybS5mYWN0b3JzXTtcbiAgICAgICAgICAgIHRlbXAuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEucHJvZHVjdE9yTm90KSguLi50ZW1wKTtcbiAgICAgICAgICAgIGlmICghZ3JvdXBzLmhhcyhncm91cCkpXG4gICAgICAgICAgICAgICAgZ3JvdXBzLnNldChncm91cCwgeyBjb2VmZmljaWVudDogZmlyc3QudmFsdWUsIG1vcmVUaGFuT25lOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdyb3Vwcy5nZXQoZ3JvdXApLmNvZWZmaWNpZW50ICs9IGZpcnN0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGdyb3Vwcy5nZXQoZ3JvdXApLm1vcmVUaGFuT25lID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBGb3IgZXZlcnkgZ3JvdXAgd2l0aCBtb3JlIHRoYW4gb25lIHByb2R1Y3QsIHByb2R1Y2UgYSBuZXcgYXJndW1lbnRcbiAgICAgICAgY29uc3Qgb3V0ID0gbmV3IFNldCgpO1xuICAgICAgICBncm91cHMuZm9yRWFjaCgob2JqLCBncm91cCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFvYmoubW9yZVRoYW5PbmUpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdFRlcm1zTm90Q29tYmluZWQgPSBwcm9kdWN0VGVybXMuZmlsdGVyKHQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBbLi4udC5mYWN0b3JzXTtcbiAgICAgICAgICAgICAgICB0ZW1wLnNwbGljZSgwLCAxKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXJtV2l0aG91dExlYWRpbmdDb2VmZmljaWVudCA9ICgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5wcm9kdWN0T3JOb3QpKC4uLnRlbXApO1xuICAgICAgICAgICAgICAgIHJldHVybiBncm91cCAhPT0gdGVybVdpdGhvdXRMZWFkaW5nQ29lZmZpY2llbnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG91dC5hZGQobmV3IEFyZ3VtZW50XzEuQXJndW1lbnQoKDAsIFRoaW5nc1RoYXRTaG91bGRCZUluVGhlU3RkTGliXzEuc2V0T2YpKGV4cCksIHtcbiAgICAgICAgICAgICAgICBuOiBleHAsXG4gICAgICAgICAgICAgICAgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsLFxuICAgICAgICAgICAgICAgIG4xOiAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuc3VtT3JOb3QpKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5wcm9kdWN0QW5kTm90VGltZXNPbmUpKCgwLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5udW0pKG9iai5jb2VmZmljaWVudCksIGdyb3VwKSwgLi4ubm9uUHJvZHVjdFRlcm1zLCAuLi5wcm9kdWN0VGVybXNOb3RDb21iaW5lZClcbiAgICAgICAgICAgIH0sIFwiQ29tYmluaW5nIGxpa2UgdGVybXNcIikpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG59XG5leHBvcnRzLlN1bUNvZWZmaWNpZW50c09mQWRkZWRUZXJtcyA9IFN1bUNvZWZmaWNpZW50c09mQWRkZWRUZXJtcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5VU3Vic3RpdHV0aW9uID0gdm9pZCAwO1xuY29uc3QgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xID0gcmVxdWlyZShcIi4uL05vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGVcIik7XG5jbGFzcyBVU3Vic3RpdHV0aW9uIGV4dGVuZHMgTm9Db250ZXh0RXhwcmVzc2lvblNpbXBsaWZpY2F0aW9uUnVsZV8xLk5vQ29udGV4dEV4cHJlc3Npb25TaW1wbGlmaWNhdGlvblJ1bGUge1xuICAgIGFwcGxpZXNJbXBsKGV4cCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vZXhwIGluc3RhbmNlb2YgSW50ZWdyYWxcbiAgICB9XG4gICAgYXBwbHlJbXBsKGV4cCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWRcIik7XG4gICAgfVxufVxuZXhwb3J0cy5VU3Vic3RpdHV0aW9uID0gVVN1YnN0aXR1dGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5EZXJpdmF0aXZlVHlwZSA9IGV4cG9ydHMuRGVyaXZhdGl2ZSA9IHZvaWQgMDtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuL0V4cHJlc3Npb25cIik7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi9JbnRlZ2VyXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4vUHJvZHVjdFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4vU3VtXCIpO1xuLyoqXG4gKlxuICovXG5jbGFzcyBEZXJpdmF0aXZlIGV4dGVuZHMgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24ge1xuICAgIHN0YXRpYyBvZihleHAsIHJlbGF0aXZlVG8pIHtcbiAgICAgICAgY29uc3QgaGFzaCA9IGV4cC5oYXNoICsgcmVsYXRpdmVUby5oYXNoO1xuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2VzLmhhcyhoYXNoKSlcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzLnNldChoYXNoLCBuZXcgRGVyaXZhdGl2ZShleHAsIHJlbGF0aXZlVG8pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzLmdldChoYXNoKTtcbiAgICB9XG4gICAgc3RhdGljIGluc3RhbmNlcyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdHJ1Y3RvcihleHAsIHJlbGF0aXZlVG8pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5leHAgPSBleHA7XG4gICAgICAgIHRoaXMucmVsYXRpdmVUbyA9IHJlbGF0aXZlVG87XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5leHApO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMucmVsYXRpdmVUbyk7XG4gICAgICAgIHRoaXMuaXNSZWR1Y2libGUgPSBmYWxzZTsgLy9UT0RPOiBEZXRlcm1pbmUgaWYgYSBkZXJpdmF0aXZlIGlzIHJlZHVjaWJsZVxuICAgICAgICB0aGlzLmlzQ29uc3RhbnQgPSBmYWxzZTsgLy8gVE9ETzogRGV0ZXJtaW5lIGlmIGEgZGVyaXZhdGl2ZSBpcyBjb25zdGFudFxuICAgICAgICB0aGlzLmNoaWxkQ291bnQgPSAyICsgZXhwLmNoaWxkQ291bnQgKyByZWxhdGl2ZVRvLmNoaWxkQ291bnQ7XG4gICAgICAgIGxldCBpc0hlYWx0aHkgPSB0cnVlO1xuICAgICAgICBpZiAoZXhwLmlzQ29uc3RhbnQpXG4gICAgICAgICAgICBpc0hlYWx0aHkgPSBmYWxzZTtcbiAgICAgICAgaWYgKGV4cCBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0KSB7XG4gICAgICAgICAgICBuZXcgU2V0KGV4cC5mYWN0b3JzKS5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIgfHwgZSBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0ICYmIGUuaXNOZWdhdGlvbiAmJiBlLm5lZ2F0aW9uKVxuICAgICAgICAgICAgICAgICAgICBpc0hlYWx0aHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvL1RPRE86IFRoZXJlIGFyZSBhIGxvdCBtb3JlIHBvc3NpYmxpdGllcyB0aGFuIHRoaXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNIZWFsdGh5ID0gaXNIZWFsdGh5O1xuICAgIH1cbiAgICBleHA7XG4gICAgcmVsYXRpdmVUbztcbiAgICBnZXQgcmVkdWNlZCgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4gTm90IHN1cmUgaWYgZGVyaXZhdGl2ZXMgc2hvdWxkIGJlIHJlZHVjaWJsZS5cIik7XG4gICAgfVxuICAgIGlzUmVkdWNpYmxlO1xuICAgIGNsYXNzID0gZXhwb3J0cy5EZXJpdmF0aXZlVHlwZTtcbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwiZC9kXCIgKyB0aGlzLnJlbGF0aXZlVG8udG9TdHJpbmcoKSArIFwiKFwiICsgdGhpcy5leHAudG9TdHJpbmcoKSArIFwiKVwiO1xuICAgIH1cbiAgICBnZXQgaGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xhc3MgKyB0aGlzLmV4cC5oYXNoICsgdGhpcy5yZWxhdGl2ZVRvLmhhc2g7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIDEuIGV4cCBpc24ndCBhIGNvbnN0YW50XG4gICAgICogMi4gSWYgZXhwIGlzIHByb2R1Y3QsIGl0IGNvbnRhaW5zIG5vIGNvbnN0YW50cy5cbiAgICAgKi9cbiAgICBpc0hlYWx0aHk7XG4gICAgdG9NYXRoWE1MKCkge1xuICAgICAgICBmdW5jdGlvbiB3cmFwSWZOZWVkZWQoZXhwKSB7XG4gICAgICAgICAgICBpZiAoZXhwLmNsYXNzID09IFN1bV8xLlN1bVR5cGUgfHwgZXhwLmNsYXNzID09IFByb2R1Y3RfMS5Qcm9kdWN0VHlwZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8bW8+KDwvbW8+XCIgKyBleHAudG9NYXRoWE1MKCkgKyBcIjxtbz4pPC9tbz5cIjtcbiAgICAgICAgICAgIHJldHVybiBleHAudG9NYXRoWE1MKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiPG1mcmFjPjxtbj5kPC9tbj48bXJvdz48bW4+ZDwvbW4+XCIgKyB3cmFwSWZOZWVkZWQodGhpcy5yZWxhdGl2ZVRvKSArIFwiPC9tcm93PjwvbWZyYWM+XCIgKyB3cmFwSWZOZWVkZWQodGhpcy5leHApO1xuICAgIH1cbiAgICBpc0NvbnN0YW50O1xuICAgIGNoaWxkQ291bnQ7XG59XG5leHBvcnRzLkRlcml2YXRpdmUgPSBEZXJpdmF0aXZlO1xuZXhwb3J0cy5EZXJpdmF0aXZlVHlwZSA9IFwiRGVyaXZhdGl2ZVwiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkV4cG9uZW50VHlwZSA9IGV4cG9ydHMuRXhwb25lbnQgPSB2b2lkIDA7XG5jb25zdCBNYXRoTUxIZWxwZXJzXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9NYXRoTUxIZWxwZXJzXCIpO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvblwiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuL0ludGVnZXJcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi9Qcm9kdWN0XCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi9TdW1cIik7XG5jbGFzcyBFeHBvbmVudCBleHRlbmRzIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uIHtcbiAgICBzdGF0aWMgb2YoYmFzZSwgcG93ZXIpIHtcbiAgICAgICAgY29uc3QgaGFzaCA9IGJhc2UuaGFzaCArIHBvd2VyLmhhc2g7XG4gICAgICAgIGlmICghRXhwb25lbnQuaW5zdGFuY2VzLmhhcyhoYXNoKSkge1xuICAgICAgICAgICAgRXhwb25lbnQuaW5zdGFuY2VzLnNldChoYXNoLCBuZXcgRXhwb25lbnQoYmFzZSwgcG93ZXIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRXhwb25lbnQuaW5zdGFuY2VzLmdldChoYXNoKTtcbiAgICB9XG4gICAgc3RhdGljIGluc3RhbmNlcyA9IG5ldyBNYXAoKTtcbiAgICBjbGFzcyA9IGV4cG9ydHMuRXhwb25lbnRUeXBlO1xuICAgIHRvTWF0aFhNTCgpIHtcbiAgICAgICAgZnVuY3Rpb24gd3JhcElmTmVlZGVkKGV4cCkge1xuICAgICAgICAgICAgaWYgKGV4cC5jbGFzcyA9PSBTdW1fMS5TdW1UeXBlIHx8IGV4cC5jbGFzcyA9PSBQcm9kdWN0XzEuUHJvZHVjdFR5cGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuICgwLCBNYXRoTUxIZWxwZXJzXzEuaW5Sb3cpKCgwLCBNYXRoTUxIZWxwZXJzXzEuaW5QYXJlbikoZXhwLnRvTWF0aFhNTCgpKSk7XG4gICAgICAgICAgICByZXR1cm4gZXhwLnRvTWF0aFhNTCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIjxtc3VwPlwiICsgd3JhcElmTmVlZGVkKHRoaXMuYmFzZSkgKyAoMCwgTWF0aE1MSGVscGVyc18xLmluUm93KSh0aGlzLnBvd2VyLnRvTWF0aFhNTCgpKSArIFwiPC9tc3VwPlwiO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwiKFwiICsgdGhpcy5iYXNlICsgXCIpXihcIiArIHRoaXMucG93ZXIgKyBcIilcIjtcbiAgICB9XG4gICAgZ2V0IGhhc2goKSB7XG4gICAgICAgIHJldHVybiBcIkV4cG9uZW50XCIgKyB0aGlzLmJhc2UuaGFzaCArIHRoaXMucG93ZXIuaGFzaDtcbiAgICB9XG4gICAgY29uc3RydWN0b3IoYmFzZSwgcG93ZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5iYXNlID0gYmFzZTtcbiAgICAgICAgdGhpcy5wb3dlciA9IHBvd2VyO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMuYmFzZSk7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5wb3dlcik7XG4gICAgICAgIC8vIFRoZSBpbnRlZ2VycyBhcmUgY2xvc2VkIG92ZXIgZXhwb25lbnRpYXRpb25cbiAgICAgICAgdGhpcy5pc1JlZHVjaWJsZSA9IChiYXNlLmlzUmVkdWNpYmxlT3JJbnQpICYmIChwb3dlci5pc1JlZHVjaWJsZU9ySW50KSAmJiBNYXRoLnBvdyhiYXNlLnJlZHVjZWQudmFsdWUsIHBvd2VyLnJlZHVjZWQudmFsdWUpICUgMSA9PSAwO1xuICAgICAgICB0aGlzLmlzSGVhbHRoeSA9ICF0aGlzLmlzUmVkdWNpYmxlO1xuICAgICAgICB0aGlzLmlzQ29uc3RhbnQgPSBiYXNlLmlzQ29uc3RhbnQgJiYgcG93ZXIuaXNDb25zdGFudDtcbiAgICAgICAgdGhpcy5jaGlsZENvdW50ID0gMiArIGJhc2UuY2hpbGRDb3VudCArIHBvd2VyLmNoaWxkQ291bnQ7XG4gICAgfVxuICAgIGJhc2U7XG4gICAgcG93ZXI7XG4gICAgaXNSZWR1Y2libGU7XG4gICAgaXNIZWFsdGh5O1xuICAgIGdldCByZWR1Y2VkKCkge1xuICAgICAgICByZXR1cm4gSW50ZWdlcl8xLkludGVnZXIub2YoTWF0aC5wb3codGhpcy5iYXNlLnJlZHVjZWQudmFsdWUsIHRoaXMucG93ZXIucmVkdWNlZC52YWx1ZSkpO1xuICAgIH1cbiAgICBpc0NvbnN0YW50O1xuICAgIGNoaWxkQ291bnQ7XG59XG5leHBvcnRzLkV4cG9uZW50ID0gRXhwb25lbnQ7XG5leHBvcnRzLkV4cG9uZW50VHlwZSA9IFwiRXhwb25lbnRcIjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FeHByZXNzaW9uID0gdm9pZCAwO1xuY29uc3QgSW50ZWdlcl8xID0gcmVxdWlyZShcIi4vSW50ZWdlclwiKTtcbmNvbnN0IE1hdGhFbGVtZW50XzEgPSByZXF1aXJlKFwiLi9NYXRoRWxlbWVudFwiKTtcbi8qKlxuICogQmFzZSBvZiBhbGwgbWF0aGVtYXRpY2FsIGV4cHJlc3Npb25zLlxuICogQWxsIGNoaWxkcmVuIHNob3VsZCBpbXBsZW1lbnQgZmx5LXdoZWVsIHBhdHRlcm4uXG4gKiBBbGwgY2hpbGRyZW4gc2hvdWxkIGJlIGltbXV0YWJsZS5cbiAqL1xuY2xhc3MgRXhwcmVzc2lvbiBleHRlbmRzIE1hdGhFbGVtZW50XzEuTWF0aEVsZW1lbnQge1xuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGV4cHJlc3Npb24gaXMgcmVkdWNpYmxlIG9yIGlzIGFuIGludGVnZXIuXG4gICAgICovXG4gICAgZ2V0IGlzUmVkdWNpYmxlT3JJbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzUmVkdWNpYmxlIHx8IHRoaXMuY2xhc3MgPT0gSW50ZWdlcl8xLkludGVnZXJUeXBlO1xuICAgIH1cbn1cbmV4cG9ydHMuRXhwcmVzc2lvbiA9IEV4cHJlc3Npb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRnJhY3Rpb25UeXBlID0gZXhwb3J0cy5GcmFjdGlvbiA9IHZvaWQgMDtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuL0V4cHJlc3Npb25cIik7XG5jbGFzcyBGcmFjdGlvbiBleHRlbmRzIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uIHtcbiAgICBzdGF0aWMgb2YobnVtZXJhdG9yLCBkZW5vbWluYXRvcikge1xuICAgICAgICBjb25zdCBoYXNoID0gbnVtZXJhdG9yLmhhc2ggKyBkZW5vbWluYXRvci5oYXNoO1xuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2UuaGFzKGhhc2gpKVxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXQoaGFzaCwgbmV3IEZyYWN0aW9uKG51bWVyYXRvciwgZGVub21pbmF0b3IpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZ2V0KGhhc2gpO1xuICAgIH1cbiAgICBzdGF0aWMgaW5zdGFuY2UgPSBuZXcgTWFwKCk7XG4gICAgY29uc3RydWN0b3IobnVtLCBkZW5vbSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm51bWVyYXRvciA9IG51bTtcbiAgICAgICAgdGhpcy5kZW5vbWluYXRvciA9IGRlbm9tO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMubnVtZXJhdG9yKTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLmRlbm9taW5hdG9yKTtcbiAgICAgICAgLypcbiAgICAgICAgQSBmcmFjdGlvbiBpcyByZWR1Y2libGUgaWYgdGhlIGRlbm9tIHwgbnVtLlxuICAgICAgICAgICAgPD0+IG51bSA9IGsgKiBkZW5vbSB3aGVyZSBrIGlzIGFuIGludGVnZXIuXG5cbiAgICAgICAgVGhpcyBtYWtlcyBwcm92aW5nIHJlZHVjaWJpbGl0eSBoYXJkLlxuICAgICAgICBUT0RPOiBEZWNpZGUgaWYgaXQncyB3b3J0aCBpbXBsZW1lbnRpbmcgcmVkdWNpYmlsaXR5IGZvciBGcmFjdGlvbnNcbiAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pc1JlZHVjaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzSGVhbHRoeSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNDb25zdGFudCA9IG51bS5pc0NvbnN0YW50ICYmIGRlbm9tLmlzQ29uc3RhbnQ7XG4gICAgICAgIHRoaXMuY2hpbGRDb3VudCA9IDIgKyBudW0uY2hpbGRDb3VudCArIGRlbm9tLmNoaWxkQ291bnQ7XG4gICAgfVxuICAgIG51bWVyYXRvcjtcbiAgICBkZW5vbWluYXRvcjtcbiAgICBnZXQgcmVkdWNlZCgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIGlzUmVkdWNpYmxlO1xuICAgIGNsYXNzID0gZXhwb3J0cy5GcmFjdGlvblR5cGU7XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm51bWVyYXRvci50b1N0cmluZygpICsgXCIgLyBcIiArIHRoaXMuZGVub21pbmF0b3IudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgZ2V0IGhhc2goKSB7XG4gICAgICAgIHJldHVybiBleHBvcnRzLkZyYWN0aW9uVHlwZSArIHRoaXMubnVtZXJhdG9yLmhhc2ggKyB0aGlzLmRlbm9taW5hdG9yLmhhc2g7XG4gICAgfVxuICAgIGlzSGVhbHRoeTtcbiAgICBpc0NvbnN0YW50O1xuICAgIHRvTWF0aFhNTCgpIHtcbiAgICAgICAgcmV0dXJuIFwiPG1mcmFjPjxtcm93PlwiICsgdGhpcy5udW1lcmF0b3IudG9NYXRoWE1MKCkgKyBcIjwvbXJvdz48bXJvdz5cIiArIHRoaXMuZGVub21pbmF0b3IudG9NYXRoWE1MKCkgKyBcIjwvbXJvdz48L21mcmFjPlwiO1xuICAgIH1cbiAgICBjaGlsZENvdW50O1xufVxuZXhwb3J0cy5GcmFjdGlvbiA9IEZyYWN0aW9uO1xuZXhwb3J0cy5GcmFjdGlvblR5cGUgPSBcIkZyYWN0aW9uXCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSW50ZWdlclR5cGUgPSBleHBvcnRzLkludGVnZXIgPSB2b2lkIDA7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2Fzc2VydFwiKTtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuL0V4cHJlc3Npb25cIik7XG4vKipcbiAqIEludGVnZXJcbiAqIFBvc2l0aXZlIG9yIG5lZ2F0aXZlXG4gKi9cbmNsYXNzIEludGVnZXIgZXh0ZW5kcyBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbiB7XG4gICAgc3RhdGljIG9mKHZhbHVlKSB7XG4gICAgICAgIGlmICghSW50ZWdlci5pbnN0YW5jZXMuaGFzKHZhbHVlKSkge1xuICAgICAgICAgICAgSW50ZWdlci5pbnN0YW5jZXMuc2V0KHZhbHVlLCBuZXcgSW50ZWdlcih2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBJbnRlZ2VyLmluc3RhbmNlcy5nZXQodmFsdWUpO1xuICAgIH1cbiAgICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy52YWx1ZSAlIDEgPT0gMCwgXCJDcmVhdGluZyBub24taW50ZWdlciBpbnRlZ2VyIFwiICsgdGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIEEgcG9zaXRpdmUgdmVyc2lvbiBvZiB0aGlzIGludGVnZXIuXG4gICAgICovXG4gICAgYnV0UG9zaXRpdmUoKSB7XG4gICAgICAgIHJldHVybiBJbnRlZ2VyLm9mKE1hdGguYWJzKHRoaXMudmFsdWUpKTtcbiAgICB9XG4gICAgY2xhc3MgPSBleHBvcnRzLkludGVnZXJUeXBlO1xuICAgIHRvTWF0aFhNTCgpIHtcbiAgICAgICAgcmV0dXJuIFwiPG1uPlwiICsgdGhpcy52YWx1ZSArIFwiPC9tbj5cIjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBcIlwiICsgdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGhhc2goKSB7XG4gICAgICAgIHJldHVybiBcIk51bWJlckV4cFwiICsgdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgdmFsdWU7XG4gICAgaXNSZWR1Y2libGUgPSBmYWxzZTtcbiAgICBnZXQgcmVkdWNlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGlzSGVhbHRoeSA9IHRydWU7XG4gICAgaXNDb25zdGFudCA9IHRydWU7XG4gICAgY2hpbGRDb3VudCA9IDA7XG59XG5leHBvcnRzLkludGVnZXIgPSBJbnRlZ2VyO1xuZXhwb3J0cy5JbnRlZ2VyVHlwZSA9IFwiSW50ZWdlclwiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkludGVncmFsVHlwZSA9IGV4cG9ydHMuSW50ZWdyYWwgPSB2b2lkIDA7XG5jb25zdCBNYXRoTUxIZWxwZXJzXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9NYXRoTUxIZWxwZXJzXCIpO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvblwiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuL1Byb2R1Y3RcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuL1N1bVwiKTtcbi8qKlxuICogQW4gaW5kZWZpbmF0ZSBpbnRlZ3JhbCAoZm9yIG5vdykuXG4gKiBUT0RPOiBTaG91bGQgd2Ugc2VwYXJhdGUgZGVmaW5hdGUvaW5kZWZpbmF0ZSBpbnRlZ3JhbHM/XG4gKi9cbmNsYXNzIEludGVncmFsIGV4dGVuZHMgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24ge1xuICAgIHN0YXRpYyBvZihpbnRlZ3JhbmQsIHJlbGF0aXZlVG8pIHtcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlcy5oYXMoaW50ZWdyYW5kLmhhc2ggKyByZWxhdGl2ZVRvLmhhc2gpKVxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXMuc2V0KGludGVncmFuZC5oYXNoICsgcmVsYXRpdmVUby5oYXNoLCBuZXcgSW50ZWdyYWwoaW50ZWdyYW5kLCByZWxhdGl2ZVRvKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlcy5nZXQoaW50ZWdyYW5kLmhhc2ggKyByZWxhdGl2ZVRvLmhhc2gpO1xuICAgIH1cbiAgICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0cnVjdG9yKGludGVncmFuZCwgcmVsYXRpdmVUbykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmludGVncmFuZCA9IGludGVncmFuZDtcbiAgICAgICAgdGhpcy5yZWxhdGl2ZVRvID0gcmVsYXRpdmVUbztcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLmludGVncmFuZCk7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5yZWxhdGl2ZVRvKTtcbiAgICAgICAgdGhpcy5pc1JlZHVjaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzSGVhbHRoeSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNDb25zdGFudCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNoaWxkQ291bnQgPSAyICsgaW50ZWdyYW5kLmNoaWxkQ291bnQgKyByZWxhdGl2ZVRvLmNoaWxkQ291bnQ7XG4gICAgfVxuICAgIGludGVncmFuZDtcbiAgICByZWxhdGl2ZVRvO1xuICAgIGdldCByZWR1Y2VkKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLiBOb3Qgc3VyZSBob3cgdGhpcyB3b3JrcyB3aXRoIEludGVncmFscy5cIik7XG4gICAgfVxuICAgIGlzUmVkdWNpYmxlO1xuICAgIGNsYXNzID0gZXhwb3J0cy5JbnRlZ3JhbFR5cGU7XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBcIuKIq1wiICsgdGhpcy5pbnRlZ3JhbmQudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgZ2V0IGhhc2goKSB7XG4gICAgICAgIHJldHVybiBcIuKIq1wiICsgdGhpcy5pbnRlZ3JhbmQudG9TdHJpbmcoKSArIHRoaXMucmVsYXRpdmVUby50b1N0cmluZygpO1xuICAgIH1cbiAgICBpc0hlYWx0aHk7XG4gICAgaXNDb25zdGFudDtcbiAgICB0b01hdGhYTUwoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHdyYXBJZk5lZWRlZChleHApIHtcbiAgICAgICAgICAgIGlmIChleHAuY2xhc3MgPT0gU3VtXzEuU3VtVHlwZSB8fCBleHAuY2xhc3MgPT0gUHJvZHVjdF8xLlByb2R1Y3RUeXBlKVxuICAgICAgICAgICAgICAgIHJldHVybiAoMCwgTWF0aE1MSGVscGVyc18xLmluUGFyZW4pKGV4cC50b01hdGhYTUwoKSk7XG4gICAgICAgICAgICByZXR1cm4gZXhwLnRvTWF0aFhNTCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIjxtcm93Pjxtbz7iiKs8L21vPlwiICsgd3JhcElmTmVlZGVkKHRoaXMuaW50ZWdyYW5kKSArIFwiPG1uPmQ8L21uPlwiICsgd3JhcElmTmVlZGVkKHRoaXMucmVsYXRpdmVUbykgKyBcIjwvbXJvdz5cIjtcbiAgICB9XG4gICAgY2hpbGRDb3VudDtcbn1cbmV4cG9ydHMuSW50ZWdyYWwgPSBJbnRlZ3JhbDtcbmV4cG9ydHMuSW50ZWdyYWxUeXBlID0gXCJJbnRlZ3JhbFwiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1hdGhFbGVtZW50ID0gdm9pZCAwO1xuLyoqXG4gKiBDYW4gYmUgZXhwcmVzc2VkIHdpdGggTWF0aE1MXG4gKi9cbmNsYXNzIE1hdGhFbGVtZW50IHtcbn1cbmV4cG9ydHMuTWF0aEVsZW1lbnQgPSBNYXRoRWxlbWVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mYWN0b3JPcmRlciA9IGV4cG9ydHMuUHJvZHVjdFR5cGUgPSBleHBvcnRzLlByb2R1Y3QgPSB2b2lkIDA7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2Fzc2VydFwiKTtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuL0V4cHJlc3Npb25cIik7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi9JbnRlZ2VyXCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi9TdW1cIik7XG4vKipcbiAqIEEgbWF0aGVtYXRpY2FsIHByb2R1Y3Qgd2l0aCAyIG9yIG1vcmUgZmFjdG9ycy5cbiAqL1xuY2xhc3MgUHJvZHVjdCBleHRlbmRzIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uIHtcbiAgICAvKipcbiAgICAgKiBGb3IgZWZmaWNpZW5jeSwgcHJvZHVjdHMgYXJlIGNvbXBhcmVkIGJ5IHJlZmVyZW5jZS5cbiAgICAgKiBIZXJlIHdlIGVuc3VyZSA9PT0gPD0+ID09XG4gICAgICogQHBhcmFtIGZhY3RvcnNcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHN0YXRpYyBvZihmYWN0b3JzKSB7XG4gICAgICAgIGNvbnN0IGhhc2ggPSBmYWN0b3JzLm1hcChlID0+IGUuaGFzaCkuam9pbihcIlwiKTtcbiAgICAgICAgaWYgKCFQcm9kdWN0Lmluc3RhbmNlcy5oYXMoaGFzaCkpXG4gICAgICAgICAgICBQcm9kdWN0Lmluc3RhbmNlcy5zZXQoaGFzaCwgbmV3IFByb2R1Y3QoZmFjdG9ycykpO1xuICAgICAgICByZXR1cm4gUHJvZHVjdC5pbnN0YW5jZXMuZ2V0KGhhc2gpO1xuICAgIH1cbiAgICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0cnVjdG9yKGZhY3RvcnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkoZmFjdG9ycy5sZW5ndGggPj0gMiwgXCJDcmVhdGluZyBwcm9kdWN0IHdpdGggbGVzcyB0aGFuIDIgZmFjdG9ycy5cIik7XG4gICAgICAgIHRoaXMuZmFjdG9ycyA9IGZhY3RvcnM7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5mYWN0b3JzKTtcbiAgICAgICAgbGV0IHJlZHVjaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZmFjdG9ycy5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgICAgcmVkdWNpYmxlICYmPSBmLmlzUmVkdWNpYmxlIHx8IGYuY2xhc3MgPT0gSW50ZWdlcl8xLkludGVnZXJUeXBlO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhlIGludGVnZXJzIGFyZSBjbG9zZWQgb3ZlciBtdWx0aXBsaWNhdGlvblxuICAgICAgICB0aGlzLmlzUmVkdWNpYmxlID0gcmVkdWNpYmxlO1xuICAgICAgICBsZXQgaGVhbHRoeSA9IHRydWU7XG4gICAgICAgIGhlYWx0aHkgJiY9IHRoaXMubnVtTmVnYXRpdmVzKCkgPCAyO1xuICAgICAgICB0aGlzLmlzSGVhbHRoeSA9IGhlYWx0aHk7XG4gICAgICAgIGxldCBpc05lZ2F0aW9uID0gZmFjdG9ycy5sZW5ndGggPT0gMjtcbiAgICAgICAgaXNOZWdhdGlvbiAmJj0gZmFjdG9ycy5maWx0ZXIoZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyICYmIGUudmFsdWUgPT0gLTE7XG4gICAgICAgIH0pLmxlbmd0aCA9PSAxO1xuICAgICAgICB0aGlzLmlzTmVnYXRpb24gPSBpc05lZ2F0aW9uO1xuICAgICAgICB0aGlzLmlzQ29uc3RhbnQgPSB0aGlzLmZhY3RvcnMubWFwKGYgPT4gZi5pc0NvbnN0YW50KS5yZWR1Y2UoKGEsIGIpID0+IGEgJiYgYik7XG4gICAgICAgIHRoaXMuY2hpbGRDb3VudCA9IGZhY3RvcnMubGVuZ3RoICsgZmFjdG9ycy5tYXAoZiA9PiBmLmNoaWxkQ291bnQpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC0gKHRoaXMuaXNOZWdhdGlvbiA/IDEgOiAwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGlzIHByb2R1Y3QgaXMganVzdFxuICAgICAqIC0xICogYW5vdGhlciBleHByZXNzaW9uLlxuICAgICAqL1xuICAgIGlzTmVnYXRpb247XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB2YWx1ZSB0aGF0IHRoaXMgcHJvZHVjdCBpcyBuZWdhdGluZ1xuICAgICAqIC0xICogZXhwIHJldHVybnMgZXhwLlxuICAgICAqIEB0aHJvd3MgaWYgcHJvZHVjdCBpc24ndCBhIG5lZ2F0aW9uLlxuICAgICAqL1xuICAgIGdldCBuZWdhdGlvbigpIHtcbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5pc05lZ2F0aW9uLCBcIlRyeWluZyB0byBnZXQgbmVnYXRpb24gZnJvbSBub24tbmVnYXRpbmcgc3VtXCIpO1xuICAgICAgICBpZiAodGhpcy5mYWN0b3JzWzBdLmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZSAmJiB0aGlzLmZhY3RvcnNbMF0udmFsdWUgPT0gLTEpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mYWN0b3JzWzFdO1xuICAgICAgICByZXR1cm4gdGhpcy5mYWN0b3JzWzBdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbmV3IEV4cHJlc3Npb24gd2l0aG91dCB0aGUgZ2l2ZW4gZmFjdG9yLlxuICAgICAqIElmIHRoZSBwcm9kdWN0IGNvbnRhaW5zIHRoZSBmYWN0b3IgbXVsdGlwbGUgdGltZXMsXG4gICAgICogb25seSByZW1vdmVzIG9uZS4gSWYgaXQgZG9lc24ndCBjb250YWluIHRoZSBmYWN0b3IsXG4gICAgICogcmV0dXJucyBpdHNlbGYuXG4gICAgICogQHBhcmFtIGV4cCBBIGZhY3RvciBpbiB0aGlzIHByb2R1Y3QuXG4gICAgICovXG4gICAgd2l0aG91dChleHApIHtcbiAgICAgICAgY29uc3QgbmV3RmFjdG9ycyA9IFsuLi50aGlzLmZhY3RvcnNdO1xuICAgICAgICBjb25zdCBpbmRleCA9IG5ld0ZhY3RvcnMuZmluZEluZGV4KCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSBleHA7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5kZXggPT0gLTEpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgbmV3RmFjdG9ycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBpZiAobmV3RmFjdG9ycy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3RmFjdG9yc1swXTsgLy8gR2F1cmFudGVlZCB0aGVyZSdzIG9uZSB0ZXJtIGhlcmVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvZHVjdC5vZihuZXdGYWN0b3JzKTtcbiAgICB9XG4gICAgdG9NYXRoWE1MKCkge1xuICAgICAgICBsZXQgb3V0ID0gXCJcIjtcbiAgICAgICAgZnVuY3Rpb24gd3JhcElmTmVlZGVkKGV4cCkge1xuICAgICAgICAgICAgaWYgKGV4cC5jbGFzcyA9PSBleHBvcnRzLlByb2R1Y3RUeXBlIHx8IGV4cC5jbGFzcyA9PSBTdW1fMS5TdW1UeXBlKVxuICAgICAgICAgICAgICAgIHJldHVybiBcIjxtbz4oPC9tbz5cIiArIGV4cC50b01hdGhYTUwoKSArIFwiPG1vPik8L21vPlwiO1xuICAgICAgICAgICAgcmV0dXJuIGV4cC50b01hdGhYTUwoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFaXRoZXIgdGhpcyBpcyBhIG5lZ2F0aW9uLCBvciBhIGxpc3Qgb2YgcHJvZHVjdHNcbiAgICAgICAgLy8gRmlyc3QgdGhlIG5lZ2F0aW9uIGNhc2UuLi5cbiAgICAgICAgaWYgKHRoaXMuaXNOZWdhdGlvbikge1xuICAgICAgICAgICAgb3V0ICs9IFwiPG1vPi08L21vPlwiO1xuICAgICAgICAgICAgb3V0ICs9IHdyYXBJZk5lZWRlZCh0aGlzLm5lZ2F0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgaXQncyBhIGxpc3Qgb2YgcHJvZHVjdHMuLi5cbiAgICAgICAgY29uc3QgZmlyc3RGYWN0b3IgPSB0aGlzLmZhY3RvcnNbMF07XG4gICAgICAgIG91dCArPSB3cmFwSWZOZWVkZWQoZmlyc3RGYWN0b3IpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuZmFjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGZhY3RvciA9IHRoaXMuZmFjdG9yc1tpXTtcbiAgICAgICAgICAgIGxldCBuZWVkc0RvdCA9IChmYWN0b3IuY2xhc3MgPT0gSW50ZWdlcl8xLkludGVnZXJUeXBlICYmIHRoaXMuZmFjdG9yc1tpIC0gMV0uY2xhc3MgPT0gSW50ZWdlcl8xLkludGVnZXJUeXBlKVxuICAgICAgICAgICAgICAgIHx8IChmYWN0b3IgaW5zdGFuY2VvZiBQcm9kdWN0ICYmIGZhY3Rvci5pc05lZ2F0aW9uKSAvLyBJZiB0aGVyZSdzIGEgbmVnYXRpdmUgc2lnbiwgZ2V0IGEgZG90XG4gICAgICAgICAgICAgICAgfHwgKGZhY3RvciBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyICYmIGZhY3Rvci52YWx1ZSA8IDEpO1xuICAgICAgICAgICAgaWYgKG5lZWRzRG90KVxuICAgICAgICAgICAgICAgIG91dCArPSBcIjxtbz7CtzwvbW8+XCI7XG4gICAgICAgICAgICBvdXQgKz0gd3JhcElmTmVlZGVkKGZhY3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMgTnVtYmVyIG9mIG5lZ2F0aXZlIGludGVnZXIgcHJvZHVjdHMuXG4gICAgICovXG4gICAgbnVtTmVnYXRpdmVzKCkge1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICB0aGlzLmZhY3RvcnMuZm9yRWFjaChmID0+IHtcbiAgICAgICAgICAgIGlmIChmIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpXG4gICAgICAgICAgICAgICAgaWYgKGYudmFsdWUgPCAwKVxuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgbGV0IG91dCA9IFwiXCI7XG4gICAgICAgIGZvciAoY29uc3QgZXhwIG9mIHRoaXMuZmFjdG9ycykge1xuICAgICAgICAgICAgaWYgKGV4cCBpbnN0YW5jZW9mIFByb2R1Y3QpIHtcbiAgICAgICAgICAgICAgICBvdXQgKz0gXCIoXCIgKyBleHAudG9TdHJpbmcoKSArIFwiKVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IGV4cC50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0ICs9IFwiwrdcIjtcbiAgICAgICAgfVxuICAgICAgICBvdXQgPSBvdXQuc3Vic3RyaW5nKDAsIG91dC5sZW5ndGggLSAxKTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgZ2V0IGhhc2goKSB7XG4gICAgICAgIHJldHVybiBcIlByb2R1Y3RcIiArIHRoaXMuZmFjdG9ycy5tYXAoZSA9PiBlLmhhc2gpLmpvaW4oKTtcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgMiBlbGVtZW50cywgb3JkZXIgbWF0dGVyc1xuICAgIGZhY3RvcnM7XG4gICAgY2xhc3MgPSBleHBvcnRzLlByb2R1Y3RUeXBlO1xuICAgIGlzUmVkdWNpYmxlO1xuICAgIGdldCByZWR1Y2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mYWN0b3JzLm1hcChlID0+IGUucmVkdWNlZCkucmVkdWNlKChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gSW50ZWdlcl8xLkludGVnZXIub2YoYS5yZWR1Y2VkLnZhbHVlICogYi5yZWR1Y2VkLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE9ubHkgMSBuZWdhdGl2ZSBpbnRlZ2VyXG4gICAgICogSW50ZWdlciBmYWN0b3JzIGFyZSBmaXJzdFxuICAgICAqIE5vIGZhY3RvciBlcXVhbHMgMVxuICAgICAqL1xuICAgIGlzSGVhbHRoeTtcbiAgICBpc0NvbnN0YW50O1xuICAgIGNoaWxkQ291bnQ7XG59XG5leHBvcnRzLlByb2R1Y3QgPSBQcm9kdWN0O1xuZXhwb3J0cy5Qcm9kdWN0VHlwZSA9IFwiUHJvZHVjdFwiO1xuLyoqXG4gKiBDYW4gYmUgdXNlZCBpbiBhcnJheS5zb3J0KCkgdG8gZ2V0IHByb3Blcmx5IG9yZGVyZWQgcHJvZHVjdHMuXG4gKlxuICogQHBhcmFtIGFcbiAqIEBwYXJhbSBiXG4gKiBAcmV0dXJucyBQb3NpdGl2ZSBpZiBhIHNob3VsZCBiZSBhZnRlciBiXG4gKi9cbmZ1bmN0aW9uIGZhY3Rvck9yZGVyKGEsIGIpIHtcbiAgICBpZiAoYSBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyICYmIGIgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcilcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKGEgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcikge1xuICAgICAgICByZXR1cm4gYUZpcnN0O1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn1cbmV4cG9ydHMuZmFjdG9yT3JkZXIgPSBmYWN0b3JPcmRlcjtcbmNvbnN0IGFGaXJzdCA9IDE7XG5jb25zdCBhQWZ0ZXIgPSAtMTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5vcmRlclRlcm1zID0gZXhwb3J0cy5TdW1UeXBlID0gZXhwb3J0cy5TdW0gPSB2b2lkIDA7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2Fzc2VydFwiKTtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuL0V4cHJlc3Npb25cIik7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi9JbnRlZ2VyXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4vUHJvZHVjdFwiKTtcbmNvbnN0IFZhcmlhYmxlXzEgPSByZXF1aXJlKFwiLi9WYXJpYWJsZVwiKTtcbi8qKlxuICogRXhwcmVzc2lvbiByZXByZXNlbnRpbmcgdGhlIHN1bSBvZiAyIG9yIG1vcmUgdGVybXMuXG4gKi9cbmNsYXNzIFN1bSBleHRlbmRzIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uIHtcbiAgICAvKipcbiAgICAgKiBGYWN0b3J5IG1ldGhvZCBjb25zbnRydWN0b3IuXG4gICAgICogQHBhcmFtIHRlcm1zIENvbnRhaW5zIGF0IGxlYXN0IDIgZWxlbWVudHNcbiAgICAgKi9cbiAgICBzdGF0aWMgb2YodGVybXMpIHtcbiAgICAgICAgY29uc3QgaGFzaCA9IHRlcm1zLm1hcCh0ID0+IHQuaGFzaCkuam9pbihcIlwiKTtcbiAgICAgICAgaWYgKCFTdW0uaW5zdGFuY2VzLmhhcyhoYXNoKSkge1xuICAgICAgICAgICAgU3VtLmluc3RhbmNlcy5zZXQoaGFzaCwgbmV3IFN1bSh0ZXJtcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdW0uaW5zdGFuY2VzLmdldChoYXNoKTtcbiAgICB9XG4gICAgc3RhdGljIGluc3RhbmNlcyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdHJ1Y3Rvcih0ZXJtcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0ZXJtcy5sZW5ndGggPj0gMiwgXCJDcmVhdGluZyBzdW0gd2l0aCBsZXNzIHRoYW4gMiB0ZXJtcy5cIik7XG4gICAgICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgICAgICAgdGhpcy5pc1JlZHVjaWJsZSA9IHRoaXMudGVybXMubWFwKHQgPT4gdC5pc1JlZHVjaWJsZSB8fCB0LmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZSkucmVkdWNlKChhLCBiKSA9PiBhICYmIGIpO1xuICAgICAgICB0aGlzLmlzSGVhbHRoeSA9IHRoaXMuZGV0ZXJtaW5lSGVhbHRoKCk7XG4gICAgICAgIHRoaXMuaXNDb25zdGFudCA9IHRoaXMudGVybXMubWFwKHQgPT4gdC5pc0NvbnN0YW50KS5yZWR1Y2UoKGEsIGIpID0+IGEgJiYgYik7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy50ZXJtcyk7XG4gICAgICAgIHRoaXMuY2hpbGRDb3VudCA9IHRlcm1zLmxlbmd0aCArIHRlcm1zLm1hcCh0ID0+IHQuY2hpbGRDb3VudCkucmVkdWNlKChhLCBiKSA9PiBhICsgYik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBuZXcgRXhwcmVzc2lvbiB3aXRob3V0IHRoZSBnaXZlbiB0ZXJtLlxuICAgICAqIElmIHRoZSBzdW0gY29udGFpbnMgdGhlIHRlcm0gbXVsdGlwbGUgdGltZXMsXG4gICAgICogb25seSByZW1vdmVzIG9uZS4gSWYgaXQgZG9lc24ndCBjb250YWluIHRoZSB0ZXJtLFxuICAgICAqIHJldHVybnMgaXRzZWxmLlxuICAgICAqIEBwYXJhbSB0ZXJtIEEgdGVybSBpbiB0aGlzIHN1bS5cbiAgICAgKi9cbiAgICB3aXRob3V0KHRlcm0pIHtcbiAgICAgICAgY29uc3QgbmV3VGVybXMgPSBbLi4udGhpcy50ZXJtc107XG4gICAgICAgIGNvbnN0IGluZGV4ID0gbmV3VGVybXMuZmluZEluZGV4KCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSB0ZXJtO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGluZGV4ID09IC0xKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIG5ld1Rlcm1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGlmIChuZXdUZXJtcy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3VGVybXNbMF07IC8vIEdhdXJhbnRlZWQgdGhlcmUncyBvbmUgdGVybSBoZXJlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFN1bS5vZihuZXdUZXJtcyk7XG4gICAgfVxuICAgIHRvTWF0aFhNTCgpIHtcbiAgICAgICAgZnVuY3Rpb24gd3JhcElmTmVlZGVkKGV4cCkge1xuICAgICAgICAgICAgaWYgKGV4cC5jbGFzcyA9PSBleHBvcnRzLlN1bVR5cGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPG1vPig8L21vPlwiICsgZXhwLnRvTWF0aFhNTCgpICsgXCI8bW8+KTwvbW8+XCI7XG4gICAgICAgICAgICByZXR1cm4gZXhwLnRvTWF0aFhNTCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBvdXQgPSB3cmFwSWZOZWVkZWQodGhpcy50ZXJtc1swXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy50ZXJtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGVybSA9IHRoaXMudGVybXNbaV07XG4gICAgICAgICAgICAvLyBTdWJ0cmFjdCBuZWdhdGl2ZSB0ZXJtcyBpbnN0ZWFkIG9mIGFkZGluZyBuZWdhdGl2ZXNcbiAgICAgICAgICAgIGlmICh0ZXJtIGluc3RhbmNlb2YgUHJvZHVjdF8xLlByb2R1Y3QgJiYgdGVybS5pc05lZ2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IFwiPG1vPi08L21vPlwiICsgd3JhcElmTmVlZGVkKHRlcm0ubmVnYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGVybSBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyICYmIHRlcm0udmFsdWUgPCAwKSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IFwiPG1vPi08L21vPlwiICsgd3JhcElmTmVlZGVkKHRlcm0uYnV0UG9zaXRpdmUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXQgKz0gXCI8bW8+KzwvbW8+XCIgKyB3cmFwSWZOZWVkZWQodGhpcy50ZXJtc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGxldCBvdXQgPSBcIlwiO1xuICAgICAgICBmb3IgKGNvbnN0IGV4cCBvZiB0aGlzLnRlcm1zKSB7XG4gICAgICAgICAgICBvdXQgKz0gZXhwLnRvU3RyaW5nKCkgKyBcIitcIjtcbiAgICAgICAgfVxuICAgICAgICBvdXQgPSBvdXQuc3Vic3RyaW5nKDAsIG91dC5sZW5ndGggLSAxKTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgZ2V0IGhhc2goKSB7XG4gICAgICAgIHJldHVybiBcIlN1bVwiICsgdGhpcy50ZXJtcy5tYXAoZSA9PiBlLmhhc2gpLmpvaW4oKTtcbiAgICB9XG4gICAgY2xhc3MgPSBleHBvcnRzLlN1bVR5cGU7XG4gICAgLyoqXG4gICAgICogT3JkZXJlZCwgaW1tdXRhYmxlXG4gICAgICovXG4gICAgdGVybXM7XG4gICAgaXNSZWR1Y2libGU7XG4gICAgZ2V0IHJlZHVjZWQoKSB7XG4gICAgICAgIHJldHVybiBJbnRlZ2VyXzEuSW50ZWdlci5vZih0aGlzLnRlcm1zLm1hcCh0ID0+IHQucmVkdWNlZC52YWx1ZSkucmVkdWNlKChhLCBiKSA9PiBhICsgYikpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGaWd1cmUgb3V0IGlmIHdlJ3JlIGhlYWx0aHkuXG4gICAgICovXG4gICAgZGV0ZXJtaW5lSGVhbHRoKCkge1xuICAgICAgICBpZiAodGhpcy50ZXJtcy5maWx0ZXIodCA9PiB0LmlzUmVkdWNpYmxlIHx8IHQgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcikubGVuZ3RoID4gMSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGhpcy50ZXJtcy5mb3JFYWNoKHQgPT4ge1xuICAgICAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcilcbiAgICAgICAgICAgICAgICBpZiAodC52YWx1ZSA9PSAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRlcm1zLmZvckVhY2godGVybSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRlcm0uaXNIZWFsdGh5KVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNvcnJlY3RPcmRlcmluZyA9IG9yZGVyVGVybXMoLi4udGhpcy50ZXJtcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50ZXJtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMudGVybXNbaV0gIT09IGNvcnJlY3RPcmRlcmluZ1tpXSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy9UT0RPOiBDaGVjayBjb25kaXRpb24gM1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBzdW0gaXMgaGVhbHRoeSBpZmY6XG4gICAgICpcbiAgICAgKiAxLiBDb250YWlucyBhIG1heCBvZiAxIHJlZHVjaWJsZSB0ZXJtLlxuICAgICAqIDIuIFByb2R1Y3RzIHdpdGggaW50ZWdlciBjb2VmZmljaWVudHMgYXJlIGNvbWJpbmVkLlxuICAgICAqICBhICsgMmEgPSAzYSxcbiAgICAgKiAgYSArIC1hID0gMFxuICAgICAqIDMuIE5vIHRlcm0gaXMgMFxuICAgICAqIDQuIEFsbCB0ZXJtcyBhcmUgaGVhbHRoeS5cbiAgICAgKiA1LiBUZXJtcyBhcmUgb3JkZXJlZCBjb3JyZWN0bHkuXG4gICAgICovXG4gICAgaXNIZWFsdGh5O1xuICAgIGlzQ29uc3RhbnQ7XG4gICAgY2hpbGRDb3VudDtcbn1cbmV4cG9ydHMuU3VtID0gU3VtO1xuZXhwb3J0cy5TdW1UeXBlID0gXCJTdW1cIjtcbi8qKlxuICogUmV0dXJucyB0aGUgZ2l2ZW4gdGVybXMgb3JkZXJlZCBjb3JyZWN0bHkgdG9cbiAqIGJlIHBsYWNlZCBpbiBhIFN1bS4gQWx0ZXJzIHRoZSBnaXZlbiBhcnJheS5cbiAqIEBwYXJhbSB0ZXJtc1xuICovXG5mdW5jdGlvbiBvcmRlclRlcm1zKC4uLnRlcm1zKSB7XG4gICAgLy8gQSBub3RlIGFib3V0IHRoZSBzb3J0IGZ1bmN0aW9uIGJjIHRoZSBkb2N1bWVudGF0aW9uIGlzIGNyeXB0aWNcbiAgICAvLyBJZiBhIHNob3VsZCBiZSBwdXQgYmVmb3JlIGIgaW4gdGhlIHN1bSwgcmV0dXJuIGEgbmVnYXRpdmUgdmFsdWVcbiAgICByZXR1cm4gdGVybXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAvLyBWYXJpYWJsZXMgYmVmb3JlIEludGVnZXJzXG4gICAgICAgIGlmIChhLmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZSAmJiAoYi5jbGFzcyA9PSBWYXJpYWJsZV8xLlZhcmlhYmxlVHlwZSB8fCAoYiBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0ICYmIGIuaXNOZWdhdGlvbiAmJiBiLm5lZ2F0aW9uLmNsYXNzID09IFZhcmlhYmxlXzEuVmFyaWFibGVUeXBlKSkpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoYS5jbGFzcyA9PSBWYXJpYWJsZV8xLlZhcmlhYmxlVHlwZSB8fCAoYSBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0ICYmIGEuaXNOZWdhdGlvbiAmJiBhLm5lZ2F0aW9uLmNsYXNzID09IFZhcmlhYmxlXzEuVmFyaWFibGVUeXBlKSkgJiYgYi5jbGFzcyA9PSBJbnRlZ2VyXzEuSW50ZWdlclR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9KTtcbn1cbmV4cG9ydHMub3JkZXJUZXJtcyA9IG9yZGVyVGVybXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVmFyaWFibGVUeXBlID0gZXhwb3J0cy5WYXJpYWJsZSA9IHZvaWQgMDtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuL0V4cHJlc3Npb25cIik7XG5jbGFzcyBWYXJpYWJsZSBleHRlbmRzIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uIHtcbiAgICBzdGF0aWMgb2Yoc3ltYm9sKSB7XG4gICAgICAgIGlmIChWYXJpYWJsZS5pbnN0YW5jZXMuZ2V0KHN5bWJvbCkgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBWYXJpYWJsZS5pbnN0YW5jZXMuc2V0KHN5bWJvbCwgbmV3IFZhcmlhYmxlKHN5bWJvbCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBWYXJpYWJsZS5pbnN0YW5jZXMuZ2V0KHN5bWJvbCk7XG4gICAgfVxuICAgIHN0YXRpYyBpbnN0YW5jZXMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3RydWN0b3Ioc3ltYm9sKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3ltYm9sID0gc3ltYm9sO1xuICAgIH1cbiAgICBjbGFzcyA9IGV4cG9ydHMuVmFyaWFibGVUeXBlO1xuICAgIHRvTWF0aFhNTCgpIHtcbiAgICAgICAgcmV0dXJuIFwiPG1pPlwiICsgdGhpcy5zeW1ib2wgKyBcIjwvbWk+XCI7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zeW1ib2w7XG4gICAgfVxuICAgIGdldCBoYXNoKCkge1xuICAgICAgICByZXR1cm4gXCJWYXJpYWJsZVwiICsgdGhpcy5zeW1ib2w7XG4gICAgfVxuICAgIHN5bWJvbDtcbiAgICBpc1JlZHVjaWJsZSA9IGZhbHNlO1xuICAgIGdldCByZWR1Y2VkKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJWYXJpYWJsZXMgY2FuJ3QgYmUgcmVkdWNlZCB0byBpbnRlZ2Vycy5cIik7XG4gICAgfVxuICAgIGlzSGVhbHRoeSA9IHRydWU7XG4gICAgaXNDb25zdGFudCA9IGZhbHNlO1xuICAgIGNoaWxkQ291bnQgPSAwO1xufVxuZXhwb3J0cy5WYXJpYWJsZSA9IFZhcmlhYmxlO1xuZXhwb3J0cy5WYXJpYWJsZVR5cGUgPSBcIlZhcmlhYmxlXCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQXJndW1lbnROb2RlVmlldyA9IHZvaWQgMDtcbmNvbnN0IEdyYXBoTm9kZVZpZXdfMSA9IHJlcXVpcmUoXCIuL0dyYXBoTm9kZVZpZXdcIik7XG4vKipcbiAqIFJlcHJlc2VudHMgYW4gYXJndW1lbnQgbm9kZS5cbiAqL1xuY2xhc3MgQXJndW1lbnROb2RlVmlldyBleHRlbmRzIEdyYXBoTm9kZVZpZXdfMS5HcmFwaE5vZGVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihhcmcpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hcmd1bWVudCA9IGFyZztcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSB0aGlzLmFyZ3VtZW50LmFyZ3VtZW50O1xuICAgIH1cbiAgICBhcmd1bWVudDtcbn1cbmV4cG9ydHMuQXJndW1lbnROb2RlVmlldyA9IEFyZ3VtZW50Tm9kZVZpZXc7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJhcmd1bWVudC1ub2Rldmlld1wiLCBBcmd1bWVudE5vZGVWaWV3LCB7IGV4dGVuZHM6IFwiZGl2XCIgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRWRnZVZpZXcgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uL0FyZ3VtZW50XCIpO1xuY29uc3QgVUlQcmVmZXJlbmNlc18xID0gcmVxdWlyZShcIi4vVUlQcmVmZXJlbmNlc1wiKTtcbmNvbnN0IEdyYXBoXzEgPSByZXF1aXJlKFwiLi4vR3JhcGhcIik7XG4vKipcbiAqIFJlcHJlc2VudHMgYW4gZWRnZSBpbiBhIGdyYXBoLlxuICovXG5jbGFzcyBFZGdlVmlldyBleHRlbmRzIEhUTUxQYXJhZ3JhcGhFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihvd25lciwgZWRnZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgICAgIHRoaXMuZWRnZSA9IGVkZ2UuZTtcbiAgICAgICAgdGhpcy5maXJzdCA9IGVkZ2UubjtcbiAgICAgICAgdGhpcy5zZWNvbmQgPSBlZGdlLm4xO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMuZWRnZSk7XG4gICAgICAgIHRoaXMuc3R5bGUud2lkdGggPSBcImZpdC1jb250ZW50XCI7XG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gXCJmaXQtY29udGVudFwiO1xuICAgICAgICB0aGlzLnN0eWxlLnBhZGRpbmcgPSBcIjBcIjtcbiAgICAgICAgdGhpcy5zdHlsZS56SW5kZXggPSBcIi0yXCI7XG4gICAgICAgIHRoaXMuc3R5bGUubWFyZ2luID0gXCIwXCI7XG4gICAgICAgIHRoaXMuc3R5bGUud2hpdGVTcGFjZSA9IFwibm93cmFwXCI7XG4gICAgICAgIHRoaXMuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBVSVByZWZlcmVuY2VzXzEudWlQcmVmZXJlbmNlcy5lZGdlRXF1YWxzQmFja2dyb3VuZENvbG9yO1xuICAgICAgICB0aGlzLnN0eWxlLnVzZXJTZWxlY3QgPSBcIm5vbmVcIjtcbiAgICAgICAgVUlQcmVmZXJlbmNlc18xLnVpUHJlZmVyZW5jZXMub25VcGRhdGUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBVSVByZWZlcmVuY2VzXzEudWlQcmVmZXJlbmNlcy5lZGdlRXF1YWxzQmFja2dyb3VuZENvbG9yO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5vd25lci5lZGdlQ2xpY2tlZCh0aGlzLCBldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBldmVudCA9PiB7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHJvdGF0aW9uIGFuZ2xlIG9mIHZpZXcgd2hpbGUgYWxzb1xuICAgICAqIGxldHRpbmcgaXQga25vdyB0aGUgYW5nbGUgaGFzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHJhZFxuICAgICAqL1xuICAgIHNldEFuZ2xlKHJhZCkge1xuICAgICAgICB0aGlzLnN0eWxlLnJvdGF0ZSA9IFwiXCIgKyByYWQgKyBcInJhZFwiO1xuICAgICAgICAvL3RoaXMudGV4dENvbnRlbnQgPSBcIlwiICsgKHJhZCAqIDIgKiBNYXRoLlBJIC8gMzYwKS50b0ZpeGVkKDIpICsgXCJkZWdcIlxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGVsZW1lbnQgc2NyZWVuIHdpZHRoIGFuZCBlbnN1cmVzIHRleHQgZml0c1xuICAgICAqIGluc2lkZSB0aGUgZWRnZS5cbiAgICAgKi9cbiAgICBzZXQgd2lkdGgodmFsKSB7XG4gICAgICAgIHN1cGVyLnN0eWxlLndpZHRoID0gdmFsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBlbGVtZW50IGlzIGNvbm5jdGVkIHRvIHRoZSBET00uXG4gICAgICovXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmVkZ2UgaW5zdGFuY2VvZiBBcmd1bWVudF8xLkFyZ3VtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gXCJcIiArIHRoaXMuZWRnZS5jbGFpbS5yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZWRnZSBpbnN0YW5jZW9mIEdyYXBoXzEuR2l2ZW5FZGdlKSB7XG4gICAgICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gXCJcIiArIHRoaXMuZWRnZS5yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCBmb3IgXCIgKyB0aGlzLmVkZ2UpO1xuICAgIH1cbiAgICBvd25lcjtcbiAgICBlZGdlO1xuICAgIGZpcnN0O1xuICAgIHNlY29uZDtcbn1cbmV4cG9ydHMuRWRnZVZpZXcgPSBFZGdlVmlldztcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImVkZ2Utdmlld1wiLCBFZGdlVmlldywgeyBleHRlbmRzOiBcInBcIiB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FZGl0YWJsZU1hdGhWaWV3ID0gdm9pZCAwO1xuLyoqXG4gKiBEaXNwbGF5cyBtYXRoIGFuZCBpcyBlZGl0YWJsZS5cbiAqL1xuY2xhc3MgRWRpdGFibGVNYXRoVmlldyBleHRlbmRzIEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgfVxuICAgIHNldCB2YWx1ZShlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gZTtcbiAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBcIjxtYXRoIGRpc3BsYXk9J2Jsb2NrJz5cIiArIChlPy50b01hdGhYTUwoKSA/PyBcIlwiKSArIFwiPC9tYXRoPlwiO1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGwgPT4gbCh0aGlzLl92YWx1ZSkpO1xuICAgICAgICBNYXRoSmF4LnR5cGVzZXQoW3RoaXNdKTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExpc3RlbmVyIHdpbGwgYmUgY2FsbGVkIHdoZW5ldmVyIHRoZSBtYXRoXG4gICAgICogaW4gdGhlIHZpZXcgaXMgZWRpdGVkLlxuICAgICAqIEBwYXJhbSBsXG4gICAgICovXG4gICAgYWRkRWRpdExpc3RlbmVyKGwpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsKTtcbiAgICB9XG4gICAgbGlzdGVuZXJzID0gW107XG4gICAgX3ZhbHVlID0gbnVsbDtcbn1cbmV4cG9ydHMuRWRpdGFibGVNYXRoVmlldyA9IEVkaXRhYmxlTWF0aFZpZXc7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJlZGl0YWJsZS1tYXRodmlld1wiLCBFZGl0YWJsZU1hdGhWaWV3LCB7IGV4dGVuZHM6IFwiZGl2XCIgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXhwbGFuYXRpb25Qb3B1cCA9IHZvaWQgMDtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuLi9leHByZXNzaW9ucy9FeHByZXNzaW9uXCIpO1xuY29uc3QgTWF0aE1MSGVscGVyc18xID0gcmVxdWlyZShcIi4uL3V0aWwvTWF0aE1MSGVscGVyc1wiKTtcbmNsYXNzIEV4cGxhbmF0aW9uUG9wdXAgZXh0ZW5kcyBIVE1MRGl2RWxlbWVudCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJnXG4gICAgICogQHBhcmFtIG9uQ2xvc2UgQ2FsbGVkIGFmdGVyIHVzZXIgY2xpY2tzIGNsb3NlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihhcmcsIG9uQ2xvc2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hcmcgPSBhcmc7XG4gICAgICAgIHRoaXMub25DbG9zZSA9IG9uQ2xvc2U7XG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYicpO1xuICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25DbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSBcIkNsb3NlXCI7XG4gICAgICAgIGNsb3NlQnV0dG9uLnN0eWxlLnVzZXJTZWxlY3QgPSBcIm5vbmVcIjtcbiAgICAgICAgY2xvc2VCdXR0b24uc3R5bGUuZmxvYXQgPSBcInJpZ2h0XCI7XG4gICAgICAgIHRoaXMuYXBwZW5kKGNsb3NlQnV0dG9uKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZXh0LmlubmVySFRNTCA9IGFyZy5hcmd1bWVudCArIFwiPGJyPlwiO1xuICAgICAgICBpZiAoYXJnLmNsYWltLm4gaW5zdGFuY2VvZiBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbiAmJiBhcmcuY2xhaW0ubjEgaW5zdGFuY2VvZiBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbilcbiAgICAgICAgICAgIHRleHQuaW5uZXJIVE1MICs9ICgwLCBNYXRoTUxIZWxwZXJzXzEuaW5NYXRoQmxvY2spKCgwLCBNYXRoTUxIZWxwZXJzXzEuaW5Sb3cpKGFyZy5jbGFpbS5uLnRvTWF0aFhNTCgpICsgXCIgPG1vPlwiICsgYXJnLmNsYWltLnIgKyBcIjwvbW8+IFwiICsgYXJnLmNsYWltLm4xLnRvTWF0aFhNTCgpKSkgKyBcIjxicj4gRGVyaXZlZCBmcm9tOiA8YnI+XCI7XG4gICAgICAgIGZvciAoY29uc3QgZ3JvdW5kIG9mIGFyZy5ncm91bmRzKSB7XG4gICAgICAgICAgICBpZiAoZ3JvdW5kIGluc3RhbmNlb2YgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24pXG4gICAgICAgICAgICAgICAgdGV4dC5pbm5lckhUTUwgKz0gKDAsIE1hdGhNTEhlbHBlcnNfMS5pbk1hdGgpKGdyb3VuZC50b01hdGhYTUwoKSkgKyBcIjxicj5cIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFwcGVuZCh0ZXh0KTtcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5ib3hTaGFkb3cgPSBcIjAuM2NoIDAuM2NoIDAuNmNoIHJnYmEoMCwgMCwgMCwgMC41KVwiO1xuICAgICAgICB0aGlzLnN0eWxlLnBhZGRpbmcgPSBcIjFjaFwiO1xuICAgICAgICB0aGlzLnN0eWxlLndpZHRoID0gXCJmaXQtY29udGVudFwiO1xuICAgICAgICB0aGlzLnN0eWxlLnpJbmRleCA9IFwiMTVcIjtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIE1hdGhKYXgudHlwZXNldChbdGhpc10pO1xuICAgIH1cbiAgICBhcmc7XG4gICAgb25DbG9zZTtcbn1cbmV4cG9ydHMuRXhwbGFuYXRpb25Qb3B1cCA9IEV4cGxhbmF0aW9uUG9wdXA7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJleHBsYW5hdGlvbi1wb3B1cFwiLCBFeHBsYW5hdGlvblBvcHVwLCB7IGV4dGVuZHM6IFwiZGl2XCIgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXhwcmVzc2lvbk5vZGVWaWV3ID0gdm9pZCAwO1xuY29uc3QgRWRpdGFibGVNYXRoVmlld18xID0gcmVxdWlyZShcIi4vRWRpdGFibGVNYXRoVmlld1wiKTtcbmNvbnN0IEdyYXBoTm9kZVZpZXdfMSA9IHJlcXVpcmUoXCIuL0dyYXBoTm9kZVZpZXdcIik7XG4vKipcbiAqIEEgZ3JhcGggbm9kZSB2aWV3IGZvciBleHByZXNzaW9uIG5vZGVzLlxuICovXG5jbGFzcyBFeHByZXNzaW9uTm9kZVZpZXcgZXh0ZW5kcyBHcmFwaE5vZGVWaWV3XzEuR3JhcGhOb2RlVmlldyB7XG4gICAgY29uc3RydWN0b3Iobm9kZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgICAgICB0aGlzLmVkaXRhYmxlTWF0aFZpZXcgPSBuZXcgRWRpdGFibGVNYXRoVmlld18xLkVkaXRhYmxlTWF0aFZpZXcoKTtcbiAgICAgICAgdGhpcy5lZGl0YWJsZU1hdGhWaWV3LnZhbHVlID0gdGhpcy5ub2RlO1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuZWRpdGFibGVNYXRoVmlldyk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubm9kZS50b1N0cmluZygpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIH1cbiAgICBub2RlO1xuICAgIGVkaXRhYmxlTWF0aFZpZXc7XG59XG5leHBvcnRzLkV4cHJlc3Npb25Ob2RlVmlldyA9IEV4cHJlc3Npb25Ob2RlVmlldztcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImV4cHJlc3Npb24tbm9kZXZpZXdcIiwgRXhwcmVzc2lvbk5vZGVWaWV3LCB7IGV4dGVuZHM6IFwiZGl2XCIgfSk7XG5jb25zdCBjb2xvclVuaGVhbHRoeU5vZGVzID0gdHJ1ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HcmFwaE5vZGVWaWV3ID0gdm9pZCAwO1xuLyoqXG4gKiBBbiBodG1sIGVsZW1lbnQgdGhhdCByZXByZXNlbnRzIGEgbWF0aCBncmFwaCBub2RlLlxuICovXG5jbGFzcyBHcmFwaE5vZGVWaWV3IGV4dGVuZHMgSFRNTERpdkVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvL3RoaXMuc3R5bGUuYm9yZGVyID0gXCJibHVlIGRvdHRlZCAwLjJjaFwiXG4gICAgICAgIHRoaXMuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxY2hcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImxpZ2h0Ymx1ZVwiO1xuICAgICAgICB0aGlzLnN0eWxlLnBhZGRpbmcgPSBcIjFjaFwiO1xuICAgICAgICB0aGlzLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5wYWRkaW5nQm90dG9tID0gXCIwXCI7XG4gICAgICAgIHRoaXMuc3R5bGUud2lkdGggPSBcImZpdC1jb250ZW50XCI7XG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gXCJmaXQtY29udGVudFwiO1xuICAgICAgICB0aGlzLnN0eWxlLndoaXRlU3BhY2UgPSBcIm5vd3JhcFwiO1xuICAgICAgICB0aGlzLnN0eWxlLnpJbmRleCA9IFwiNVwiO1xuICAgIH1cbiAgICBzZXQgYmFja2dyb3VuZENvbG9yKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdmFsdWU7XG4gICAgfVxufVxuZXhwb3J0cy5HcmFwaE5vZGVWaWV3ID0gR3JhcGhOb2RlVmlldztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51aVByZWZlcmVuY2VzID0gdm9pZCAwO1xuY2xhc3MgVUlQcmVmZXJlbmNlcyB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIEZ1bmN0aW9uIGNhbGxlZCB3aGVuZXZlciBhIHVpIHByZWZlcmVuY2VcbiAgICAgKiBpcyBjaGFuZ2VkLlxuICAgICAqL1xuICAgIG9uVXBkYXRlKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgIH1cbiAgICAvLyBHZXR0ZXJzIGFuZCBTZXR0ZXJzXG4gICAgLyoqXG4gICAgICogQmFja2dyb3VuZCBjb2xvciBvZiBhIGdyYXBoIGVkZ2UgZGVub3RpbmdcbiAgICAgKiBlcXVhbGl0eSBiZXR3ZWVuIHR3byBleHByZXNzaW9ucy5cbiAgICAgKiBDc3MgdmFsdWUuXG4gICAgICovXG4gICAgZ2V0IGVkZ2VFcXVhbHNCYWNrZ3JvdW5kQ29sb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lZGdlRXF1YWxzQmFja2dyb3VuZENvbG9yO1xuICAgIH1cbiAgICBzZXQgZWRnZUVxdWFsc0JhY2tncm91bmRDb2xvcih2YWwpIHtcbiAgICAgICAgdGhpcy5fZWRnZUVxdWFsc0JhY2tncm91bmRDb2xvciA9IHZhbDtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MuZm9yRWFjaChjID0+IGMoKSk7XG4gICAgfVxuICAgIC8vIFByZWZlcmVuY2UgVmFsdWVzXG4gICAgX2VkZ2VFcXVhbHNCYWNrZ3JvdW5kQ29sb3IgPSBcIm5vbmVcIjtcbiAgICBjYWxsYmFja3MgPSBbXTtcbn1cbmV4cG9ydHMudWlQcmVmZXJlbmNlcyA9IG5ldyBVSVByZWZlcmVuY2VzKCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuV2ViR3JhcGhWaWV3ID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi9Bcmd1bWVudFwiKTtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuLi9leHByZXNzaW9ucy9FeHByZXNzaW9uXCIpO1xuY29uc3QgR3JhcGhNaW5pcHVsYXRvcl8xID0gcmVxdWlyZShcIi4uL0dyYXBoTWluaXB1bGF0b3JcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2Fzc2VydFwiKTtcbmNvbnN0IFRvdWNoR2VzdHVyZVJlY29nbml6ZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9Ub3VjaEdlc3R1cmVSZWNvZ25pemVyXCIpO1xuY29uc3QgRWRnZVZpZXdfMSA9IHJlcXVpcmUoXCIuL0VkZ2VWaWV3XCIpO1xuY29uc3QgRXhwcmVzc2lvbk5vZGVWaWV3XzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uTm9kZVZpZXdcIik7XG5jb25zdCBBcmd1bWVudE5vZGVWaWV3XzEgPSByZXF1aXJlKFwiLi9Bcmd1bWVudE5vZGVWaWV3XCIpO1xuY29uc3QgRXhwbGFuYXRpb25Qb3B1cF8xID0gcmVxdWlyZShcIi4vRXhwbGFuYXRpb25Qb3B1cFwiKTtcbi8qKlxuICogQSB1aSBlbGVtZW50IHRoYXQgd2lsbCBkaXNwbGF5IGEgbWF0aCBncmFwaCBpbiBhIHdlYi5cbiAqL1xuY2xhc3MgV2ViR3JhcGhWaWV3IGV4dGVuZHMgSFRNTERpdkVsZW1lbnQge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBncmFwaCBNdXN0IGJlIGZ1bGx5IGNvbm5lY3RlZC5cbiAgICAgKiBAcGFyYW0gcm9vdHMgTm9uLWVtcHR5LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGdyYXBoLCByb290cywgY29uZmlnID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZ3JhcGggPSBncmFwaDtcbiAgICAgICAgdGhpcy5ub2RlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gMDtcbiAgICAgICAgdGhpcy5vZmZzZXRZID0gMDtcbiAgICAgICAgdGhpcy5ub2RlUG9zaXRpb25zID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmVkZ2VQb3NpdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZWRnZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucm9vdE5vZGVzID0gbmV3IFNldChyb290cyk7XG4gICAgICAgIHRoaXMucmluZ0VsZW1lbnRzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLnJpbmdQb3NpdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZXhwbGFuYXRpb25Qb3B1cHMgPSBbXTtcbiAgICAgICAgaWYgKGNvbmZpZyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0FyZ3VtZW50cyA9IGNvbmZpZy5zaG93QXJndW1lbnRzO1xuICAgICAgICAgICAgdGhpcy5kcmF3RWRnZUxpbmVzID0gY29uZmlnLmRyYXdFZGdlTGluZXM7XG4gICAgICAgICAgICB0aGlzLmRlYnVnQ29ybmVyRW5hYmxlZCA9IGNvbmZpZy5kZWJ1Z0Nvcm5lckVuYWJsZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHlsZS5jbGlwUGF0aCA9IFwicG9seWdvbigwJSAwJSwgMTAwJSAwJSwgMTAwJSAxMDAlLCAwJSAxMDAlKVwiO1xuICAgICAgICB0aGlzLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgICAgICB0aGlzLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudG91Y2hEb3duID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubW91c2VEb3duKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0WCArPSBldmVudC5tb3ZlbWVudFggLyB0aGlzLnNjYWxlO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXRZICs9IGV2ZW50Lm1vdmVtZW50WSAvIHRoaXMuc2NhbGU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9mZnNldCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1vdXNlUG9zID0gUG9pbnQoZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XG4gICAgICAgICAgICBjb25zdCBwcmVNb3VzZVBvcyA9IHRoaXMuZ2V0SW50ZXJuYWxQb3MobW91c2VQb3MpO1xuICAgICAgICAgICAgY29uc3Qgc2NhbGVEZWx0YSA9IE1hdGgucG93KDAuOCwgZXZlbnQuZGVsdGFZIC8gMzYwKTtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZURlbHRhICogdGhpcy5zY2FsZTtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RNb3VzZVBvcyA9IHRoaXMuZ2V0SW50ZXJuYWxQb3MobW91c2VQb3MpO1xuICAgICAgICAgICAgY29uc3QgaW50WERpZmYgPSBwb3N0TW91c2VQb3MueCAtIHByZU1vdXNlUG9zLng7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiSW50ZXJuYWwgWCBDaGFuZ2UgdW5kZXIgbW91c2UgXCIgKyBpbnRYRGlmZilcbiAgICAgICAgICAgIC8vIEFkanVzdCBvZmZzZXQgc28gdGhhdCBjb250ZW50IHVuZGVyIHRoZSBtb3VzZSBkb2Vzbid0IG1vdmVcbiAgICAgICAgICAgIC8vdGhpcy5vZmZzZXRYICs9IGludFhEaWZmXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiQ29ycmVjdGVkIFggQ2hhbmdlIHVuZGVyIG1vdXNlIFwiICsgKHRoaXMuZ2V0SW50ZXJuYWxQb3MobW91c2VQb3MpLnggLSBwcmVNb3VzZVBvcy54KSlcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT2Zmc2V0KCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2VzdHVyZVJlY29nbml6ZXIgPSBuZXcgVG91Y2hHZXN0dXJlUmVjb2duaXplcl8xLlRvdWNoR2VzdHVyZVJlY29nbml6ZXIoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hkb3duXCIsIHRoaXMuZ2VzdHVyZVJlY29nbml6ZXIucHJvY2Vzc1RvdWNoRG93bik7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuZ2VzdHVyZVJlY29nbml6ZXIucHJvY2Vzc1RvdWNoRW5kKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgdGhpcy5nZXN0dXJlUmVjb2duaXplci5wcm9jZXNzVG91Y2hDYW5jZWwpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5nZXN0dXJlUmVjb2duaXplci5wcm9jZXNzVG91Y2hNb3ZlKTtcbiAgICAgICAgdGhpcy5nZXN0dXJlUmVjb2duaXplci5hZGRQaW5jaExpc3RlbmVyKChjZW50ZXIsIHNjYWxlRGVsdGEsIGZpbmdlcnMpID0+IHtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVwT2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IGEgZnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIHRoZSBjb2xvciBvZiBhIG5vZGUuXG4gICAgICogQHBhcmFtIGNvbG9yRm5cbiAgICAgKi9cbiAgICBzZXROb2RlQ29sb3JpbmdTY2hlbWUoY29sb3JGbikge1xuICAgICAgICB0aGlzLm5vZGVDb2xvckZuID0gY29sb3JGbjtcbiAgICAgICAgdGhpcy5wcm9wb2dhdGVTZXR0aW5nc1RvTm9kZXMoKTtcbiAgICB9XG4gICAgbm9kZUNvbG9yRm4gPSAobikgPT4gXCJsaWdodGJsdWVcIjtcbiAgICBwcm9wb2dhdGVTZXR0aW5nc1RvTm9kZXMoKSB7XG4gICAgICAgIHRoaXMubm9kZXMuZm9yRWFjaCgodmlldywgbm9kZSkgPT4ge1xuICAgICAgICAgICAgdmlldy5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLm5vZGVDb2xvckZuKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBpZiB0aGUgdmlldyBzaG91bGQgc2hvdyBhcmd1bWVudCBub2RlcyBhcyBub2Rlcy5cbiAgICAgKiBGYWxzZSBieSBkZWZhdWx0LlxuICAgICAqIEBwYXJhbSB2YWxcbiAgICAgKi9cbiAgICBzZXRTaG93QXJndW1lbnRzKHZhbCkge1xuICAgICAgICB0aGlzLnNob3dBcmd1bWVudHMgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlYWRHcmFwaCgpO1xuICAgICAgICB0aGlzLmFycmFuZ2UoKTtcbiAgICAgICAgdGhpcy51cGRhdGVPZmZzZXQoKTtcbiAgICB9XG4gICAgZ2V0IGNlbnRlcigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHRoaXMub2Zmc2V0V2lkdGggLyAyLFxuICAgICAgICAgICAgeTogdGhpcy5vZmZzZXRIZWlnaHQgLyAyLFxuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGb2xsb3dzIHRoZSBzaG93QXJndW1lbnQgc2V0dGluZy5cbiAgICAgKiBQb3B1bGF0ZXMgdGhpcy5ub2RlcywgdGhpcy5lZGdlcyxcbiAgICAgKiBhZGRzIHRoZSBjcmVhdGVkIHZpZXdzIHRvIHRoZSBzaGFkb3cgZG9tXG4gICAgICogdG8gbWF0Y2ggdGhlIGdyYXBoLlxuICAgICAqIFJlbW92ZXMgYW55IHByZS1leGlzdGluZyBlbGVtZW50cyBmcm9tIHRoZSBzaGFkb3cgZG9tLlxuICAgICAqL1xuICAgIHJlYWRHcmFwaCgpIHtcbiAgICAgICAgLy8gQ2xlYXIgZXhpc3RpbmdcbiAgICAgICAgdGhpcy5ub2Rlcy5mb3JFYWNoKCh2aWV3LCBub2RlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHZpZXcpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ub2Rlcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmVkZ2VzLmZvckVhY2goKHZpZXcsIGVkZ2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodmlldyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVkZ2VzLmNsZWFyKCk7XG4gICAgICAgIC8vIEZldGNoIG5vZGVzXG4gICAgICAgIHRoaXMuZ3JhcGguZ2V0Tm9kZXMoKS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgRXhwcmVzc2lvbk5vZGVWaWV3XzEuRXhwcmVzc2lvbk5vZGVWaWV3KG5vZGUpO1xuICAgICAgICAgICAgICAgIHZpZXcuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rlcy5zZXQobm9kZSwgdmlldyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmQodmlldyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgQXJndW1lbnRfMS5Bcmd1bWVudCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zaG93QXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgY29uc3QgdmlldyA9IG5ldyBBcmd1bWVudE5vZGVWaWV3XzEuQXJndW1lbnROb2RlVmlldyhub2RlKTtcbiAgICAgICAgICAgICAgICB2aWV3LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZXMuc2V0KG5vZGUsIHZpZXcpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kKHZpZXcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdyYXBoIGNvbnRhaW5zIG5vZGUgV2ViR3JhcGhWaWV3IGNhbid0IHByb2Nlc3MuXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gRmV0Y2ggZWRnZXNcbiAgICAgICAgR3JhcGhNaW5pcHVsYXRvcl8xLkdyYXBoTWluaXB1bGF0b3IuZHJvcFN5bW1ldHJpYyh0aGlzLmdyYXBoLmdldEVkZ2VzKCkpLmZpbHRlcihlZGdlID0+IHtcbiAgICAgICAgICAgIC8vIE9ubHkgY29uc2lkZXIgZWRnZXMgZm9yIHdoaWNoIHdlIGhhdmUgYm90aCBlbmRwb2ludHMgb24gdGhlIHZpZXdcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVzLmhhcyhlZGdlLm4pICYmIHRoaXMubm9kZXMuaGFzKGVkZ2UubjEpO1xuICAgICAgICB9KS5mb3JFYWNoKGVkZ2UgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmlldyA9IG5ldyBFZGdlVmlld18xLkVkZ2VWaWV3KHRoaXMsIGVkZ2UpO1xuICAgICAgICAgICAgdmlldy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgIHRoaXMuZWRnZXMuc2V0KGVkZ2UsIHZpZXcpO1xuICAgICAgICAgICAgdGhpcy5hcHBlbmQodmlldyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BvZ2F0ZVNldHRpbmdzVG9Ob2RlcygpO1xuICAgICAgICBpZiAodGhpcy5kZWJ1Z0Nvcm5lckVuYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvcm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvcm5lci5pbm5lckhUTUwgPSBcIkdyYXBoIE5vZGVzOiBcIiArIHRoaXMuZ3JhcGguZ2V0Tm9kZXMoKS5zaXplICsgXCI8YnI+XCJcbiAgICAgICAgICAgICAgICArIFwiVmlzaWJsZSBOb2RlczogXCIgKyB0aGlzLm5vZGVzLnNpemUgKyBcIjxicj5cIlxuICAgICAgICAgICAgICAgICsgXCJHcmFwaCBFZGdlczogXCIgKyB0aGlzLmdyYXBoLmdldEVkZ2VzKCkuc2l6ZSArIFwiPGJyPlwiXG4gICAgICAgICAgICAgICAgKyBcIlZpc2libGUgRWRnZXM6IFwiICsgdGhpcy5lZGdlcy5zaXplICsgXCI8YnI+XCI7XG4gICAgICAgICAgICBjb3JuZXIuc3R5bGUuekluZGV4ID0gXCIxMDBcIjtcbiAgICAgICAgICAgIGNvcm5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICBjb3JuZXIuc3R5bGUud2lkdGggPSBcImZpdC1jb250ZW50XCI7XG4gICAgICAgICAgICBjb3JuZXIuc3R5bGUubWFyZ2luID0gXCIwXCI7XG4gICAgICAgICAgICBjb3JuZXIuc3R5bGUucGFkZGluZyA9IFwiMWNoXCI7XG4gICAgICAgICAgICBjb3JuZXIuc3R5bGUuYm9yZGVyID0gXCJibGFjayAxcHggc29saWRcIjtcbiAgICAgICAgICAgIGNvcm5lci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kKGNvcm5lcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXBPaygpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5yZWFkR3JhcGgoKTtcbiAgICAgICAgdGhpcy5hcnJhbmdlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlT2Zmc2V0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBpY2sgcGxhY2VzIGZvciBhbGwgdGhlIG5vZGVzL2VkZ2VzIG9uIHRoZSBzY3JlZW4uXG4gICAgICogUG9wdWxhdGVzIHRoZSBwb3NpdGlvbiogcmVwIHZhcnMuXG4gICAgICovXG4gICAgYXJyYW5nZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlUG9zaXRpb25zLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuZWRnZVBvc2l0aW9ucy5jbGVhcigpO1xuICAgICAgICB0aGlzLnJpbmdQb3NpdGlvbnMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yaW5nRWxlbWVudHMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQoZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJpbmdFbGVtZW50cy5jbGVhcigpO1xuICAgICAgICAvLyBQbGFjZSBub2RlcyBvbiBhIHNlcmllcyBvZiByaW5ncyBmcm9tIHRoZSBjZW50ZXIgdXNpbmcgdGhlaXIgZGVwdGggaW4gdGhlIGdyYXBoXG4gICAgICAgIGNvbnN0IGxldmVscyA9IEdyYXBoTWluaXB1bGF0b3JfMS5HcmFwaE1pbmlwdWxhdG9yLmdldExldmVscyh0aGlzLmdyYXBoLCB0aGlzLnJvb3ROb2RlcywgKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgQXJndW1lbnRfMS5Bcmd1bWVudClcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93QXJndW1lbnRzO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5ldyB0eXBlIG9mIG5vZGVcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgbWF4RGVwdGggPSAwO1xuICAgICAgICBsZXZlbHMuZm9yRWFjaCgoXywgZGVwdGgpID0+IHtcbiAgICAgICAgICAgIG1heERlcHRoID0gTWF0aC5tYXgobWF4RGVwdGgsIGRlcHRoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHsgeDogKHRoaXMuY2xpZW50V2lkdGggLyAyKSwgeTogdGhpcy5jbGllbnRIZWlnaHQgLyAyIH07XG4gICAgICAgIGxldCBsYXN0UmFkaXVzID0gMDsgLy9weFxuICAgICAgICBmb3IgKGxldCBkZXB0aCA9IDA7IGRlcHRoIDwgbWF4RGVwdGggKyAxOyBkZXB0aCsrKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlcyA9IGxldmVscy5nZXQoZGVwdGgpO1xuICAgICAgICAgICAgLy8gT3JnYW5pemUgdGhlIHJvb3Qgbm9kZXMgb24gYSBjaXJjbGUgYXJvdW5kIHRoZSBjZW50ZXJcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBTaXplID0gKDIgKiBNYXRoLlBJKSAvIG5vZGVzLnNpemU7XG4gICAgICAgICAgICAvLyBUaGUgc3RhcnRpbmcgYW5ndWxhciBvZmZzZXQgdG8gYWRkIHRoZSBzdGVwc2l6ZSB0b1xuICAgICAgICAgICAgLy8gTWFraW5nIGl0IG5vbi16ZXJvIHN0b3BzIHRoaW5ncyBmcm9tIGFsaWduaW5nXG4gICAgICAgICAgICBjb25zdCBzdGVwT2Zmc2V0ID0gKE1hdGguUEkgLyAzLjUpICogZGVwdGg7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGN1bGF0aW5nIHRoZSByYWRpdXMgb2YgdGhlIGNpcmNsZVxuICAgICAgICAgICAgICogU3VwcG9zZSBldmVyeSByb290IG5vZGUgb24gdGhlIHN0YXJ0aW5nIGNpcmNsZSByZXF1aXJlc1xuICAgICAgICAgICAgICogYSBjaXJjdWxhciBzcGFjZSB0byBiZSBkcmF3biB3aXRoIHJhZGl1cyBub2RlUmFkaXVzXG4gICAgICAgICAgICAgKiBBIHN0YXJ0aW5nIGNpcmNsZSB3aXRoIG4gb2YgdGhlc2Ugbm9kZXMgd291bGQgcmVxdWlyZSBhXG4gICAgICAgICAgICAgKiBjaXJjdW1mZXJlbmNlIG9mIG4gKiAybm9kZVJhZGl1cy5cbiAgICAgICAgICAgICAqIFRoZSBjaXJjdW1mZXJlbmNlIG9mIGEgY2lyY2xlIGNhbiBiZSBleHByZXNzZWRcbiAgICAgICAgICAgICAqIGFzIDIqcGkqclxuICAgICAgICAgICAgICogPT4gciA9IG4gKiAyICogc21hbGxSIC8gKDIgKiBwaSlcbiAgICAgICAgICAgICAqICAgICAgPSBuICogc21hbGxSIC8gcGlcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY29uc3Qgbm9kZVJhZGl1cyA9IDcwOyAvLyBwaXhlbHNcbiAgICAgICAgICAgIGxldCByYWRpdXMgPSBNYXRoLm1heChub2Rlcy5zaXplICogbm9kZVJhZGl1cyAvIE1hdGguUEksIGxhc3RSYWRpdXMgKyAoMyAqIG5vZGVSYWRpdXMpKTtcbiAgICAgICAgICAgIGlmIChkZXB0aCA9PSAwICYmIG5vZGVzLnNpemUgPT0gMSlcbiAgICAgICAgICAgICAgICByYWRpdXMgPSAwO1xuICAgICAgICAgICAgbGFzdFJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgICAgIGNvbnN0IG5zID0gWy4uLm5vZGVzXTsgLy8gVE9ETywgYXNzaWduIGEgbWVhbmluZ2Z1bCBvcmRlcmluZ1xuICAgICAgICAgICAgbnMuZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5ub2Rlcy5nZXQobm9kZSk7XG4gICAgICAgICAgICAgICAgLy92aWV3LnN0eWxlLndpZHRoID0gXCJcIiArIHNtYWxsUiArIFwicHhcIlxuICAgICAgICAgICAgICAgIC8vdmlldy5zdHlsZS5oZWlnaHQgPSBcIlwiICsgc21hbGxSICsgXCJweFwiXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjYXJ0ZXNpYW4gcG9pbnQgZnJvbSB0aGUgcmFkaXVzIGFuZCBhbmdsZVxuICAgICAgICAgICAgICAgIGNvbnN0IHggPSByYWRpdXMgKiBNYXRoLmNvcyhzdGVwU2l6ZSAqIGluZGV4ICsgc3RlcE9mZnNldCkgKyBjZW50ZXIueDtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gcmFkaXVzICogTWF0aC5zaW4oc3RlcFNpemUgKiBpbmRleCArIHN0ZXBPZmZzZXQpICsgY2VudGVyLnk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlUG9zaXRpb25zLnNldCh2aWV3LCBQb2ludCh4LCB5KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHJpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcmluZy5zdHlsZS5ib3JkZXIgPSBcImxpZ2h0Z3JheSBzb2xpZCAwLjNjaFwiO1xuICAgICAgICAgICAgcmluZy5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwMCVcIjtcbiAgICAgICAgICAgIHJpbmcuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICByaW5nLnN0eWxlLnpJbmRleCA9IFwiLTEwXCI7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHJpbmcpO1xuICAgICAgICAgICAgdGhpcy5yaW5nRWxlbWVudHMuYWRkKHJpbmcpO1xuICAgICAgICAgICAgdGhpcy5yaW5nUG9zaXRpb25zLnNldChyaW5nLCB7IHJhZGl1czogcmFkaXVzIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vdyBhcmFuZ2UgdGhlIGVkZ2VzXG4gICAgICAgIHRoaXMuZWRnZXMuZm9yRWFjaCgodmlldywgZWRnZSkgPT4ge1xuICAgICAgICAgICAgLy8gRmluZCB0aGUgbWlkZGxlIG9mIHRoZSB0d28gZW5kcHRzXG4gICAgICAgICAgICBjb25zdCBmaXJzdFggPSB0aGlzLm5vZGVQb3NpdGlvbnMuZ2V0KHRoaXMubm9kZXMuZ2V0KGVkZ2UubikpLng7XG4gICAgICAgICAgICBjb25zdCBmaXJzdFkgPSB0aGlzLm5vZGVQb3NpdGlvbnMuZ2V0KHRoaXMubm9kZXMuZ2V0KGVkZ2UubikpLnk7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmRYID0gdGhpcy5ub2RlUG9zaXRpb25zLmdldCh0aGlzLm5vZGVzLmdldChlZGdlLm4xKSkueDtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZFkgPSB0aGlzLm5vZGVQb3NpdGlvbnMuZ2V0KHRoaXMubm9kZXMuZ2V0KGVkZ2UubjEpKS55O1xuICAgICAgICAgICAgY29uc3QgeCA9IChmaXJzdFggKyBzZWNvbmRYKSAvIDI7XG4gICAgICAgICAgICBjb25zdCB5ID0gKGZpcnN0WSArIHNlY29uZFkpIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihzZWNvbmRZIC0gZmlyc3RZLCBzZWNvbmRYIC0gZmlyc3RYKTtcbiAgICAgICAgICAgIHRoaXMuZWRnZVBvc2l0aW9ucy5zZXQodmlldywgeyB4OiB4LCB5OiB5LCBhbmdsZTogYW5nbGUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlcE9rKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgZHJhdyBwb3NpdGlvbiBvZiB0aGUgbm9kZXMgb24gdGhlIHNjcmVlblxuICAgICAqIHRvIG1hdGNoIHRoZSBvZmZzZXQgaW4gcmVwLiBBc3N1bWVzIGFsbCB2aWV3cyBoYXZlIGEgcG9zaXRpb25cbiAgICAgKiBzdG9yZWQgaW4gdGhlIHJlcC4gQ2FsbCBhcnJhbmdlKCkgZmlyc3QuXG4gICAgICogQWxzbyBhcHBsaWVzIHRoZSBzY2FsZSBmYWN0b3IgdG8gdGhlIGZpbmFsIGRyYXcgcG9zaXRpb25zLFxuICAgICAqIGludmlzaWJsZSB0byBldmVyeW9uZSBlbHNlLlxuICAgICAqL1xuICAgIHVwZGF0ZU9mZnNldCgpIHtcbiAgICAgICAgY29uc3QgY2VudGVyID0gdGhpcy5jZW50ZXI7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gdGhpcy5zY2FsZTtcbiAgICAgICAgZnVuY3Rpb24gYXBwbHlTY2FsZShpKSB7XG4gICAgICAgICAgICByZXR1cm4gUG9pbnQoKChpLngpIC0gY2VudGVyLngpICogc2NhbGUgKyBjZW50ZXIueCwgKChpLnkpIC0gY2VudGVyLnkpICogc2NhbGUgKyBjZW50ZXIueSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlUG9zaXRpb25zLmZvckVhY2goKHBvcywgdmlldykgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWRqdXN0ZWQgPSBhcHBseVNjYWxlKHtcbiAgICAgICAgICAgICAgICB4OiBwb3MueCArIHRoaXMub2Zmc2V0WCxcbiAgICAgICAgICAgICAgICB5OiBwb3MueSArIHRoaXMub2Zmc2V0WSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmlldy5zdHlsZS5sZWZ0ID0gXCJcIiArIChhZGp1c3RlZC54IC0gKDAuNSAqIHZpZXcub2Zmc2V0V2lkdGgpKSArIFwicHhcIjtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUudG9wID0gXCJcIiArIChhZGp1c3RlZC55IC0gKDAuNSAqIHZpZXcub2Zmc2V0SGVpZ2h0KSkgKyBcInB4XCI7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVkZ2VQb3NpdGlvbnMuZm9yRWFjaCgocG9zLCB2aWV3KSA9PiB7XG4gICAgICAgICAgICB2aWV3LnNldEFuZ2xlKHBvcy5hbmdsZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5kcmF3RWRnZUxpbmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RQb3MgPSB0aGlzLm5vZGVQb3NpdGlvbnMuZ2V0KHRoaXMubm9kZXMuZ2V0KHZpZXcuZmlyc3QpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRQb3MgPSB0aGlzLm5vZGVQb3NpdGlvbnMuZ2V0KHRoaXMubm9kZXMuZ2V0KHZpZXcuc2Vjb25kKSk7XG4gICAgICAgICAgICAgICAgdmlldy53aWR0aCA9IFwiXCIgKyAoc2NhbGUgKiBNYXRoLmh5cG90KHNlY29uZFBvcy54IC0gZmlyc3RQb3MueCwgc2Vjb25kUG9zLnkgLSBmaXJzdFBvcy55KSkgKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgdmlldy5zdHlsZS5ib3JkZXJCb3R0b20gPSBcImJsYWNrIDAuMWNoIHNvbGlkXCI7XG4gICAgICAgICAgICAgICAgdmlldy5zdHlsZS5ib3JkZXJUb3AgPSBcImJsYWNrIDAuMWNoIHNvbGlkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2aWV3LndpZHRoID0gXCJmaXQtY29udGVudFwiO1xuICAgICAgICAgICAgICAgIHZpZXcuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgdmlldy5zdHlsZS5ib3JkZXJUb3AgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGFkanVzdGVkID0gYXBwbHlTY2FsZSh7XG4gICAgICAgICAgICAgICAgeDogcG9zLnggKyB0aGlzLm9mZnNldFgsXG4gICAgICAgICAgICAgICAgeTogcG9zLnkgKyB0aGlzLm9mZnNldFksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUubGVmdCA9IFwiXCIgKyAoYWRqdXN0ZWQueCAtICgwLjUgKiB2aWV3Lm9mZnNldFdpZHRoKSkgKyBcInB4XCI7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLnRvcCA9IFwiXCIgKyAoYWRqdXN0ZWQueSAtICgwLjUgKiB2aWV3Lm9mZnNldEhlaWdodCkpICsgXCJweFwiO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gT3ZlcmxheSBlbGVtZW50cyBjaGFuZ2Ugc2l6ZSB3aXRoIHNjYWxlXG4gICAgICAgIHRoaXMucmluZ1Bvc2l0aW9ucy5mb3JFYWNoKChwb3MsIHZpZXcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFkanVzdGVkQ2VudGVyUG9zID0gYXBwbHlTY2FsZSh7XG4gICAgICAgICAgICAgICAgeDogY2VudGVyLnggKyB0aGlzLm9mZnNldFgsXG4gICAgICAgICAgICAgICAgeTogY2VudGVyLnkgKyB0aGlzLm9mZnNldFksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUubGVmdCA9IFwiXCIgKyAoYWRqdXN0ZWRDZW50ZXJQb3MueCAtIChwb3MucmFkaXVzICogc2NhbGUpKSArIFwicHhcIjtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUudG9wID0gXCJcIiArIChhZGp1c3RlZENlbnRlclBvcy55IC0gKHBvcy5yYWRpdXMgKiBzY2FsZSkpICsgXCJweFwiO1xuICAgICAgICAgICAgdmlldy5zdHlsZS53aWR0aCA9IFwiXCIgKyBwb3MucmFkaXVzICogMiAqIHNjYWxlICsgXCJweFwiO1xuICAgICAgICAgICAgdmlldy5zdHlsZS5hc3BlY3RSYXRpbyA9IFwiMVwiO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5leHBsYW5hdGlvblBvcHVwcy5mb3JFYWNoKHZhbCA9PiB7XG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gdmFsLmU7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSB2YWwucG9zO1xuICAgICAgICAgICAgY29uc3QgYWRqdXN0ZWQgPSBhcHBseVNjYWxlKHtcbiAgICAgICAgICAgICAgICB4OiBwb3MueCArIHRoaXMub2Zmc2V0WCxcbiAgICAgICAgICAgICAgICB5OiBwb3MueSArIHRoaXMub2Zmc2V0WSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmlldy5zdHlsZS5sZWZ0ID0gXCJcIiArIChhZGp1c3RlZC54IC0gKDAuNSAqIHZpZXcub2Zmc2V0V2lkdGgpKSArIFwicHhcIjtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUudG9wID0gXCJcIiArIChhZGp1c3RlZC55IC0gKDAuNSAqIHZpZXcub2Zmc2V0SGVpZ2h0KSkgKyBcInB4XCI7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlcE9rKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1hcCBmcm9tIHJlbGF0aXZlIHNjcmVlbiBjb29yZGluYXRlcyAod2hlcmUgdGwgb2YgdGhpcyB2aWV3IGlzICgwLDApKVxuICAgICAqIHRvIHRoZSBpbnRlcm5hbCBjb29yZGluYXRlIHN5c3RlbSB3ZSdyZSB1c2luZy5cbiAgICAgKi9cbiAgICBnZXRJbnRlcm5hbFBvcyhwaXhlbFBvcykge1xuICAgICAgICBjb25zdCBjZW50ZXIgPSB0aGlzLmNlbnRlcjtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLnNjYWxlO1xuICAgICAgICByZXR1cm4gUG9pbnQoKHBpeGVsUG9zLnggLSBjZW50ZXIueCkgLyBzY2FsZSArIGNlbnRlci54IC0gdGhpcy5vZmZzZXRYLCAocGl4ZWxQb3MueSAtIGNlbnRlci55KSAvIHNjYWxlICsgY2VudGVyLnkgLSB0aGlzLm9mZnNldFkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWFjdCB0byBhbiBlZGdlIGJlaW5nIGNsaWNrZWQuXG4gICAgICogQHBhcmFtIHZpZXcgSW4gdGhpcyB2aWV3XG4gICAgICogQHBhcmFtIGV2ZW50IFRoZSBjbGljayBldmVudFxuICAgICAqL1xuICAgIGVkZ2VDbGlja2VkKHZpZXcsIGV2ZW50KSB7XG4gICAgICAgIC8vIFRPRE86IERvbid0IGFsbG93IGR1cGxpYXRlIGV4cGxhbmF0aW9uIHBvcHVwc1xuICAgICAgICBpZiAodmlldy5lZGdlIGluc3RhbmNlb2YgQXJndW1lbnRfMS5Bcmd1bWVudCkge1xuICAgICAgICAgICAgY29uc3QgcG9wdXAgPSBuZXcgRXhwbGFuYXRpb25Qb3B1cF8xLkV4cGxhbmF0aW9uUG9wdXAodmlldy5lZGdlLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZChwb3B1cCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmV4cGxhbmF0aW9uUG9wdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmV4cGxhbmF0aW9uUG9wdXBzW2ldLmUgPT09IHBvcHVwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGxhbmF0aW9uUG9wdXBzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlYWx0aXZlWCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCByZWxhdGl2ZVkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICAvL1RPRE86IFRoZSBwb3NpdGlvbiBpc24ndCBjb3JyZWN0XG4gICAgICAgICAgICAvL1RPRE86IEFsZ29yaXRobSBmb3IgcGlja2luZyB3aGVyZSB3ZSBzaG91bGQgcHV0IHRoZSBwb3B1cCBzbyBpdCBzdGF5cyBvdXRcbiAgICAgICAgICAgIC8vIG9mIHRoZSB3YXkgb2YgdGhlIGdyYXBoXG4gICAgICAgICAgICB0aGlzLmV4cGxhbmF0aW9uUG9wdXBzLnB1c2goe1xuICAgICAgICAgICAgICAgIGU6IHBvcHVwLFxuICAgICAgICAgICAgICAgIHBvczogdGhpcy5nZXRJbnRlcm5hbFBvcyhQb2ludChyZWFsdGl2ZVgsIHJlbGF0aXZlWSkpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwb3B1cC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kKHBvcHVwKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT2Zmc2V0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVwT2soKSB7XG4gICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMucm9vdE5vZGVzLnNpemUgPiAwKTtcbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkoR3JhcGhNaW5pcHVsYXRvcl8xLkdyYXBoTWluaXB1bGF0b3IuaXNDb25uZWN0ZWQodGhpcy5ncmFwaCksIFwiR3JhcGggbm90IGNvbm5lY3RlZFwiKTtcbiAgICB9XG4gICAgZ3JhcGg7XG4gICAgbm9kZXM7XG4gICAgLy8gVGhlIFBvc2l0aW9uIG9mIHRoZSBjZW50ZXIgb2YgdGhlIG5vZGUuXG4gICAgbm9kZVBvc2l0aW9ucztcbiAgICBlZGdlcztcbiAgICBlZGdlUG9zaXRpb25zO1xuICAgIC8vIEFtdCB0byBhZGQgdG8gbGVmdCBjb29yZGluYXRlXG4gICAgb2Zmc2V0WDtcbiAgICAvLyBBZGRlZCB0byB0b3AgY29vcmRpbmF0ZSBvZiBub2Rlc1xuICAgIG9mZnNldFk7XG4gICAgLy8gaWYgdGhlIG1vdXNlIGlzIGRvd25cbiAgICBtb3VzZURvd24gPSBmYWxzZTtcbiAgICB0b3VjaERvd24gPSBmYWxzZTtcbiAgICBzY2FsZSA9IDE7XG4gICAgcm9vdE5vZGVzO1xuICAgIHJpbmdFbGVtZW50cztcbiAgICByaW5nUG9zaXRpb25zO1xuICAgIC8qKlxuICAgICAqIFBvc2l0aW9uIG9mIHRvcCBsZWZ0IG9mIHBvcHVwXG4gICAgICovXG4gICAgZXhwbGFuYXRpb25Qb3B1cHM7XG4gICAgZ2VzdHVyZVJlY29nbml6ZXI7XG4gICAgLy8gSWYgdGhlIGdyYXBoIHNob3VsZCBkcmF3IGFyZ3VtZW50IG5vZGVzLlxuICAgIHNob3dBcmd1bWVudHMgPSBmYWxzZTtcbiAgICBkcmF3RWRnZUxpbmVzID0gZmFsc2U7XG4gICAgZGVidWdDb3JuZXJFbmFibGVkID0gZmFsc2U7XG4gICAgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoXyA9PiB7XG4gICAgICAgIHRoaXMuYXJyYW5nZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZU9mZnNldCgpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5XZWJHcmFwaFZpZXcgPSBXZWJHcmFwaFZpZXc7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ3ZWItZ3JhcGh2aWV3XCIsIFdlYkdyYXBoVmlldywgeyBleHRlbmRzOiBcImRpdlwiIH0pO1xuZnVuY3Rpb24gUG9pbnQoeCwgeSwgYW5nbGUgPSB1bmRlZmluZWQpIHtcbiAgICBpZiAoYW5nbGUgPT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHksXG4gICAgICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogeCxcbiAgICAgICAgeTogeSxcbiAgICAgICAgYW5nbGU6IGFuZ2xlLFxuICAgIH07XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGFyc2UgPSB2b2lkIDA7XG4vKipcbiAqIFBhcnNlcyBodW1hbiB3cml0dGVuLCB1dGYtOCB0eXBlIG1hdGggZXhwcmVzc2lvbnNcbiAqIGludG8gYWN0dWFsIG1hdGguXG4gKiBAcGFyYW0gaW5wdXRcbiAqL1xuZnVuY3Rpb24gcGFyc2UoaW5wdXQpIHtcbiAgICBjb25zdCBvdXQgPSBbXTtcbiAgICBjb25zb2xlLmxvZyhcIklucHV0OiBcIiArIGlucHV0KTtcbiAgICBjb25zdCBmaW5kRXhwcmVzc2lvbnMgPSAvWzAtOWEtekEtWl0rLztcbiAgICBjb25zdCBmaW5kT3BlcmF0b3JzID0gL1tcXCtcXC1cXCpcXC9cXF5dLztcbiAgICBjb25zb2xlLmxvZyhmaW5kRXhwcmVzc2lvbnMpO1xuICAgIGNvbnN0IHNwbGl0ID0gaW5wdXQuc3BsaXQoZmluZEV4cHJlc3Npb25zKTtcbiAgICBjb25zb2xlLmxvZyhzcGxpdCk7XG4gICAgcmV0dXJuIG91dDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbmZ1bmN0aW9uIHBhcnNlRXhwcmVzc2lvbihpbnB1dCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZFwiKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pbk1hdGhCbG9jayA9IGV4cG9ydHMuaW5NYXRoID0gZXhwb3J0cy5pblJvdyA9IGV4cG9ydHMuaW5QYXJlbiA9IHZvaWQgMDtcbi8qKlxuICogV3JhcHMgdGhlIGdpdmVuIG1hdGhtbCBzdHJpbmcgaW4gbWF0aG1sIHBhcmVudGhhc2VzLlxuICogQHBhcmFtIHN0clxuICovXG5mdW5jdGlvbiBpblBhcmVuKHN0cikge1xuICAgIHJldHVybiBcIjxtbz4oPC9tbz5cIiArIHN0ciArIFwiPG1vPik8L21vPlwiO1xufVxuZXhwb3J0cy5pblBhcmVuID0gaW5QYXJlbjtcbi8qKlxuICogUHV0cyB0aGUgZ2l2ZW4gbWF0aG1sIGV4cHJlc3Npb24gaW4gYSByb3cgc28gdGhhdFxuICogaXQgZG9lc24ndCBnZXQgZGl2aWRlZCBieSBtYXRoamF4LlxuICogQHBhcmFtIHN0clxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gaW5Sb3coc3RyKSB7XG4gICAgcmV0dXJuIFwiPG1yb3c+XCIgKyBzdHIgKyBcIjwvbXJvdz5cIjtcbn1cbmV4cG9ydHMuaW5Sb3cgPSBpblJvdztcbi8qKlxuICogV3JhcHMgdGhlIGdpdmVuIHN0cmluZyBpbiA8bWF0aD48L21hdGg+XG4gKiBAcGFyYW0gc3RyXG4gKi9cbmZ1bmN0aW9uIGluTWF0aChzdHIpIHtcbiAgICByZXR1cm4gXCI8bWF0aD5cIiArIHN0ciArIFwiPC9tYXRoPlwiO1xufVxuZXhwb3J0cy5pbk1hdGggPSBpbk1hdGg7XG4vKipcbiAqIFdyYXBzIHRoZSBnaXZlbiBzdHJpbmcgaW4gPG1hdGggZGlzcGxheT0nYmxvY2snPjwvbWF0aD5cbiAqIEBwYXJhbSBzdHJcbiAqL1xuZnVuY3Rpb24gaW5NYXRoQmxvY2soc3RyKSB7XG4gICAgcmV0dXJuIFwiPG1hdGggZGlzcGxheT0nYmxvY2snPlwiICsgc3RyICsgXCI8L21hdGg+XCI7XG59XG5leHBvcnRzLmluTWF0aEJsb2NrID0gaW5NYXRoQmxvY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFzID0gZXhwb3J0cy5hZGRBbGwgPSBleHBvcnRzLnNldE9mID0gdm9pZCAwO1xuZnVuY3Rpb24gc2V0T2YoLi4uYXJyKSB7XG4gICAgY29uc3Qgb3V0ID0gbmV3IFNldCgpO1xuICAgIGFyci5mb3JFYWNoKGUgPT4gb3V0LmFkZChlKSk7XG4gICAgcmV0dXJuIG91dDtcbn1cbmV4cG9ydHMuc2V0T2YgPSBzZXRPZjtcbi8qKlxuICogQWRkcyB0aGUgZ2l2ZW4gZWxlbWVudHMgdG8gdGhlIGdpdmVuIGNvbGxlY3Rpb25cbiAqIEBwYXJhbSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0gZWxlbWVudHNcbiAqL1xuZnVuY3Rpb24gYWRkQWxsKGNvbGxlY3Rpb24sIC4uLmVsZW1lbnRzKSB7XG4gICAgZm9yIChjb25zdCBlIG9mIGVsZW1lbnRzKSB7XG4gICAgICAgIGNvbGxlY3Rpb24uYWRkKGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuYWRkQWxsID0gYWRkQWxsO1xuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGVsZW1lbnQgaXMgaW4gdGhlIGdpdmVuIGNvbGxlY3Rpb25cbiAqIHVzaW5nIHJlZmVyZW5jaWFsIGVxdWFsaXR5LlxuICogQHBhcmFtIGNvbGxlY3Rpb25cbiAqIEBwYXJhbSBlbGVtZW50XG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBjb2xsZWN0aW9uIGhhcyB0aGUgZWxlbWVudCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5mdW5jdGlvbiBoYXMoY29sbGVjdGlvbiwgZWxlbWVudCkge1xuICAgIGZvciAoY29uc3QgZSBvZiBjb2xsZWN0aW9uKSB7XG4gICAgICAgIGlmIChlID09PSBlbGVtZW50KVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaGFzID0gaGFzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFzc2VydCA9IHZvaWQgMDtcbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBleHByZXNzaW9uIGV2YWx1YXRlZCB0byB0cnVlLiBJZiBub3QsIHRocm93cyBlcnJvclxuICogd2l0aCB0aGUgbWVzc2FnZSBnaXZlbi5cbiAqIEBwYXJhbSBtc2cgRGlzcGxheWVkIGlmIHRoZSBleHByZXNzaW9uIGlzIGZhbHNlLiBEZWZhdWx0cyB0byBcIkZhaWxlZCBBc3NlcnRcIlxuICovXG5mdW5jdGlvbiBhc3NlcnQoZXhwLCBtc2cgPSBcIkZhaWxlZCBhc3NlcnRcIikge1xuICAgIGlmICghZXhwKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbn1cbmV4cG9ydHMuYXNzZXJ0ID0gYXNzZXJ0O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUHJpbWFyeVBhZ2VMb2FkZXJfMSA9IHJlcXVpcmUoXCIuL1ByaW1hcnlQYWdlTG9hZGVyXCIpO1xuY29uc3QgRXhwcmVzc2lvblRlc3RQYWdlTG9hZGVyXzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uVGVzdFBhZ2VMb2FkZXJcIik7XG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICAqIFBvcHVsYXRlIGh0bWwgZWxlbWVudHMgYnkgdGhlaXIgY2xhc3MuXG4gICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uY2xhc3NMaXN0O1xuICAgICAgICBpZiAoY2xhc3Nlcy5jb250YWlucygnZXhwcmVzc2lvblRlc3RQYWdlJykpIHtcbiAgICAgICAgICAgICgwLCBFeHByZXNzaW9uVGVzdFBhZ2VMb2FkZXJfMS5sb2FkRXhwcmVzc2lvbnNUZXN0UGFnZSkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjbGFzc2VzLmNvbnRhaW5zKCdwcmltYXJ5SW50ZWdyYXRvcicpKSB7XG4gICAgICAgICAgICAoMCwgUHJpbWFyeVBhZ2VMb2FkZXJfMS5sb2FkUHJpbWFyeVBhZ2UpKCk7XG4gICAgICAgIH1cbiAgICB9LCAxMDApO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==