/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./PrimaryPageLoader.ts":
/*!******************************!*\
  !*** ./PrimaryPageLoader.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadPrimaryPage = void 0;
const AlgebraDoer_1 = __webpack_require__(/*! ./mathlib/AlgebraDoer */ "./mathlib/AlgebraDoer.ts");
const ConvenientExpressions_1 = __webpack_require__(/*! ./mathlib/ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const EquivalenceFinder_1 = __webpack_require__(/*! ./mathlib/EquivalenceFinder */ "./mathlib/EquivalenceFinder.ts");
const Parser_1 = __webpack_require__(/*! ./mathlib/userinput/Parser */ "./mathlib/userinput/Parser.ts");
const WebGraphView_1 = __webpack_require__(/*! ./mathlib/uielements/WebGraphView */ "./mathlib/uielements/WebGraphView.ts");
const Integral_1 = __webpack_require__(/*! ./mathlib/expressions/Integral */ "./mathlib/expressions/Integral.ts");
const Fraction_1 = __webpack_require__(/*! ./mathlib/expressions/Fraction */ "./mathlib/expressions/Fraction.ts");
const Graph_1 = __webpack_require__(/*! ./mathlib/Graph */ "./mathlib/Graph.ts");
function loadPrimaryPage() {
    if (!document.getElementsByTagName('body')[0].classList.contains('primaryIntegrator'))
        return;
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
    graph.addGraph(EquivalenceFinder_1.EquivalenceFinder.expand(graph));
    graph.addGraph(AlgebraDoer_1.AlgebraDoer.expand(graph));
    graph.addGraph(EquivalenceFinder_1.EquivalenceFinder.expand(graph));
    graph.addGraph(AlgebraDoer_1.AlgebraDoer.expand(graph));
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

/***/ "./mathlib/AlgebraDoer.ts":
/*!********************************!*\
  !*** ./mathlib/AlgebraDoer.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AlgebraDoer = void 0;
const Argument_1 = __webpack_require__(/*! ./Argument */ "./mathlib/Argument.ts");
const ConvenientExpressions_1 = __webpack_require__(/*! ./ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const Sum_1 = __webpack_require__(/*! ./expressions/Sum */ "./mathlib/expressions/Sum.ts");
const Graph_1 = __webpack_require__(/*! ./Graph */ "./mathlib/Graph.ts");
const GraphMinipulator_1 = __webpack_require__(/*! ./GraphMinipulator */ "./mathlib/GraphMinipulator.ts");
const Inference_1 = __webpack_require__(/*! ./Inference */ "./mathlib/Inference.ts");
const Relationship_1 = __webpack_require__(/*! ./Relationship */ "./mathlib/Relationship.ts");
/**
 * Uses algebra to expand a graph.
 */
class AlgebraDoer {
    /**
     * Create a new graph containing only expansions from the
     * given one.
     * @param input
     */
    static expand(input) {
        return subtractFromBothSides(input);
    }
}
exports.AlgebraDoer = AlgebraDoer;
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

/***/ "./mathlib/EquivalenceFinder.ts":
/*!**************************************!*\
  !*** ./mathlib/EquivalenceFinder.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EquivalenceFinder = void 0;
const ConvenientExpressions_1 = __webpack_require__(/*! ./ConvenientExpressions */ "./mathlib/ConvenientExpressions.ts");
const Exponent_1 = __webpack_require__(/*! ./expressions/Exponent */ "./mathlib/expressions/Exponent.ts");
const Expression_1 = __webpack_require__(/*! ./expressions/Expression */ "./mathlib/expressions/Expression.ts");
const Integer_1 = __webpack_require__(/*! ./expressions/Integer */ "./mathlib/expressions/Integer.ts");
const Product_1 = __webpack_require__(/*! ./expressions/Product */ "./mathlib/expressions/Product.ts");
const Sum_1 = __webpack_require__(/*! ./expressions/Sum */ "./mathlib/expressions/Sum.ts");
const Graph_1 = __webpack_require__(/*! ./Graph */ "./mathlib/Graph.ts");
const Inference_1 = __webpack_require__(/*! ./Inference */ "./mathlib/Inference.ts");
const assert_1 = __webpack_require__(/*! ./util/assert */ "./mathlib/util/assert.ts");
/**
 * Given an expression, this class can derive other
 * equivalent expressions.
 */
class EquivalenceFinder {
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
exports.EquivalenceFinder = EquivalenceFinder;
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
        //console.log("Simplifying via Addition " + sum.toString())
        //console.log("Found " + integerTerms.length + " integer terms")
        //integerTerms.forEach(t => console.log(t))
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

/***/ "./mathlib/MathMLHelpers.ts":
/*!**********************************!*\
  !*** ./mathlib/MathMLHelpers.ts ***!
  \**********************************/
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

/***/ "./mathlib/expressions/Exponent.ts":
/*!*****************************************!*\
  !*** ./mathlib/expressions/Exponent.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Exponent = void 0;
const MathMLHelpers_1 = __webpack_require__(/*! ../MathMLHelpers */ "./mathlib/MathMLHelpers.ts");
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
const MathMLHelpers_1 = __webpack_require__(/*! ../MathMLHelpers */ "./mathlib/MathMLHelpers.ts");
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
/**
 * Populate html elements by their class.
 */
//loadExpressionsTestPages()
(0, PrimaryPageLoader_1.loadPrimaryPage)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG1CQUFPLENBQUMsMkNBQWE7QUFDekMsaUJBQWlCLG1CQUFPLENBQUMsK0NBQWU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FB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LFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QseUJBQXlCO0FBQ3pCLDRCQUE0QjtBQUM1Qiw0QkFBNEIsc0JBQXNCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywwQkFBMEI7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywwQkFBMEI7QUFDckUsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsdURBQXVELGdCQUFnQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDelRhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3JCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7Ozs7OztVQ1pkO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsNEJBQTRCLG1CQUFPLENBQUMsbURBQXFCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vUHJpbWFyeVBhZ2VMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL1RvdWNoR2VzdHVyZVJlY29nbml6ZXIudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvQWxnZWJyYURvZXIudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvQXJndW1lbnQudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvQ29udmVuaWVudEV4cHJlc3Npb25zLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL0VxdWl2YWxlbmNlRmluZGVyLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL0dyYXBoLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL0dyYXBoTWluaXB1bGF0b3IudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvSW5mZXJlbmNlLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL01hdGhNTEhlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvUmVsYXRpb25zaGlwLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2V4cHJlc3Npb25zL0V4cG9uZW50LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2V4cHJlc3Npb25zL0V4cHJlc3Npb24udHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvRnJhY3Rpb24udHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvZXhwcmVzc2lvbnMvSW50ZWdlci50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9leHByZXNzaW9ucy9JbnRlZ3JhbC50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9leHByZXNzaW9ucy9NYXRoRWxlbWVudC50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9leHByZXNzaW9ucy9Qcm9kdWN0LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL2V4cHJlc3Npb25zL1N1bS50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi9leHByZXNzaW9ucy9WYXJpYWJsZS50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi91aWVsZW1lbnRzL0FyZ3VtZW50Tm9kZVZpZXcudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdWllbGVtZW50cy9FZGdlVmlldy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi91aWVsZW1lbnRzL0VkaXRhYmxlTWF0aFZpZXcudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdWllbGVtZW50cy9FeHByZXNzaW9uTm9kZVZpZXcudHMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21hdGhsaWIvdWllbGVtZW50cy9HcmFwaE5vZGVWaWV3LnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3VpZWxlbWVudHMvVUlQcmVmZXJlbmNlcy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi91aWVsZW1lbnRzL1dlYkdyYXBoVmlldy50cyIsIndlYnBhY2s6Ly9pbnRlZ3JhdG9yLy4vbWF0aGxpYi91c2VyaW5wdXQvUGFyc2VyLnRzIiwid2VicGFjazovL2ludGVncmF0b3IvLi9tYXRobGliL3V0aWwvYXNzZXJ0LnRzIiwid2VicGFjazovL2ludGVncmF0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRvci8uL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmxvYWRQcmltYXJ5UGFnZSA9IHZvaWQgMDtcbmNvbnN0IEFsZ2VicmFEb2VyXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL0FsZ2VicmFEb2VyXCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IEVxdWl2YWxlbmNlRmluZGVyXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL0VxdWl2YWxlbmNlRmluZGVyXCIpO1xuY29uc3QgUGFyc2VyXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL3VzZXJpbnB1dC9QYXJzZXJcIik7XG5jb25zdCBXZWJHcmFwaFZpZXdfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvdWllbGVtZW50cy9XZWJHcmFwaFZpZXdcIik7XG5jb25zdCBJbnRlZ3JhbF8xID0gcmVxdWlyZShcIi4vbWF0aGxpYi9leHByZXNzaW9ucy9JbnRlZ3JhbFwiKTtcbmNvbnN0IEZyYWN0aW9uXzEgPSByZXF1aXJlKFwiLi9tYXRobGliL2V4cHJlc3Npb25zL0ZyYWN0aW9uXCIpO1xuY29uc3QgR3JhcGhfMSA9IHJlcXVpcmUoXCIuL21hdGhsaWIvR3JhcGhcIik7XG5mdW5jdGlvbiBsb2FkUHJpbWFyeVBhZ2UoKSB7XG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmNsYXNzTGlzdC5jb250YWlucygncHJpbWFyeUludGVncmF0b3InKSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGdyYXBoID0gbmV3IEdyYXBoXzEuR3JhcGgoKTtcbiAgICAvKlxuICAgIGNvbnN0IGxlZnQgPSBzdW0odigneCcpLCBudW0oMiksIG51bSgyKSlcbiAgICBjb25zdCByaWdodCA9IHN1bSh2KCd5JyksIG51bSgyKSlcbiAgICBncmFwaC5hZGROb2RlKGxlZnQpXG4gICAgZ3JhcGguYWRkTm9kZShyaWdodClcbiAgICBncmFwaC5hZGRJbmZlcmVuY2UobmV3IEluZmVyZW5jZShsZWZ0LCByaWdodCwgXCJHaXZlbiBieSBwcm9ibGVtXCIpKVxuICAgICovXG4gICAgLy9jb25zdCByb290ID0gRGVyaXZhdGl2ZS5vZihzdW0oYSwgYSwgcHJvZHVjdChudW0oMiksIGIpKSwgYSlcbiAgICBjb25zdCByb290ID0gSW50ZWdyYWxfMS5JbnRlZ3JhbC5vZigoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuZnJhY3Rpb24pKEZyYWN0aW9uXzEuRnJhY3Rpb24ub2YoQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEuYSksIENvbnZlbmllbnRFeHByZXNzaW9uc18xLmIpLCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMS5jKTtcbiAgICBncmFwaC5hZGROb2RlKHJvb3QpO1xuICAgIGdyYXBoLmFkZEdyYXBoKEVxdWl2YWxlbmNlRmluZGVyXzEuRXF1aXZhbGVuY2VGaW5kZXIuZXhwYW5kKGdyYXBoKSk7XG4gICAgZ3JhcGguYWRkR3JhcGgoQWxnZWJyYURvZXJfMS5BbGdlYnJhRG9lci5leHBhbmQoZ3JhcGgpKTtcbiAgICBncmFwaC5hZGRHcmFwaChFcXVpdmFsZW5jZUZpbmRlcl8xLkVxdWl2YWxlbmNlRmluZGVyLmV4cGFuZChncmFwaCkpO1xuICAgIGdyYXBoLmFkZEdyYXBoKEFsZ2VicmFEb2VyXzEuQWxnZWJyYURvZXIuZXhwYW5kKGdyYXBoKSk7XG4gICAgLy9jb25zb2xlLmxvZyhcIlJlc3VsdDogXCIgKyBncmFwaClcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRcIik7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+IHtcbiAgICAgICAgKDAsIFBhcnNlcl8xLnBhcnNlKShpbnB1dC52YWx1ZSk7XG4gICAgfSk7XG4gICAgY29uc3Qgb3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXRib3hcIik7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICBzaG93QXJndW1lbnRzOiBmYWxzZSxcbiAgICAgICAgZHJhd0VkZ2VMaW5lczogZmFsc2UsXG4gICAgfTtcbiAgICBjb25zdCBncmFwaFZpZXcgPSBuZXcgV2ViR3JhcGhWaWV3XzEuV2ViR3JhcGhWaWV3KGdyYXBoLCBuZXcgU2V0KFtyb290XSksIGNvbmZpZyk7XG4gICAgZ3JhcGhWaWV3LnNldEF0dHJpYnV0ZShcImlkXCIsIFwid2ViLWdyYXBodmlld1wiKTtcbiAgICBvdXQuYXBwZW5kQ2hpbGQoZ3JhcGhWaWV3KTtcbn1cbmV4cG9ydHMubG9hZFByaW1hcnlQYWdlID0gbG9hZFByaW1hcnlQYWdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRvdWNoR2VzdHVyZVJlY29nbml6ZXIgPSB2b2lkIDA7XG4vKipcbiAqIEludGVycHJldCBjb21wbGljYXRlZCB0b3VjaCBnZXN0dXJlIGRhdGEuXG4gKi9cbmNsYXNzIFRvdWNoR2VzdHVyZVJlY29nbml6ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1vdmVMaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy5waW5jaExpc3RlbmVycyA9IFtdO1xuICAgIH1cbiAgICBhZGRNb3ZlTGlzdGVuZXIoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5tb3ZlTGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIGEgcGluY2ggZ2VzdHVyZSBoYXMgYmVlbiBkZXRlY3RlZC5cbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgVGFrZXMgYSBjZW50ZXIgY29vcmRpbmF0ZSB0aGF0J3MgdGhlIGF2ZXJhZ2Ugb2YgdGhlIGZpbmdlciBwb3NpdGlvbnMsXG4gICAgICogICAgICAgICAgICAgIHRoZSBjaGFuZ2UgaW4gc2NhbGUgc2luY2UgdGhlIGxhc3QgY2FsbCBvbiAoMCwgaW5maW5pdHkpIHdoZXJlIDEgaXMgbm8gY2hhbmdlLFxuICAgICAqICAgICAgICAgICAgICBhbmQgdGhlIG51bWJlciBvZiBmaW5nZXJzIGluIHRoZSBnZXN0dXJlIChhbiBpbnRlZ2VyKS5cbiAgICAgKi9cbiAgICBhZGRQaW5jaExpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMucGluY2hMaXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNob3VsZCB0YWtlIGFsbCB0b3VjaCBldmVudHMgZnJvbSB0aGUgdmlldyB1c2luZyBpdC5cbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBwcm9jZXNzVG91Y2hEb3duKGV2ZW50KSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNob3VsZCB0YWtlIGFsbCB0b3VjaCBldmVudHMgZnJvbSB0aGUgdmlldyB1c2luZyBpdC5cbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBwcm9jZXNzVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGZvciAoY29uc3QgY2hhbmdlZCBvZiBldmVudC5jaGFuZ2VkVG91Y2hlcykge1xuICAgICAgICAgICAgY2hhbmdlZC5jbGllbnRYO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNob3VsZCB0YWtlIGFsbCB0b3VjaCBldmVudHMgZnJvbSB0aGUgdmlldyB1c2luZyBpdC5cbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBwcm9jZXNzVG91Y2hFbmQoZXZlbnQpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2hvdWxkIHRha2UgYWxsIHRvdWNoIGV2ZW50cyBmcm9tIHRoZSB2aWV3IHVzaW5nIGl0LlxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHByb2Nlc3NUb3VjaENhbmNlbChldmVudCkge1xuICAgIH1cbiAgICAvL3ByaXZhdGUgbGFzdFg6IE1hcDxUb3VjaFxuICAgIG1vdmVMaXN0ZW5lcnM7XG4gICAgcGluY2hMaXN0ZW5lcnM7XG59XG5leHBvcnRzLlRvdWNoR2VzdHVyZVJlY29nbml6ZXIgPSBUb3VjaEdlc3R1cmVSZWNvZ25pemVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFsZ2VicmFEb2VyID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuL0FyZ3VtZW50XCIpO1xuY29uc3QgQ29udmVuaWVudEV4cHJlc3Npb25zXzEgPSByZXF1aXJlKFwiLi9Db252ZW5pZW50RXhwcmVzc2lvbnNcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuL2V4cHJlc3Npb25zL1N1bVwiKTtcbmNvbnN0IEdyYXBoXzEgPSByZXF1aXJlKFwiLi9HcmFwaFwiKTtcbmNvbnN0IEdyYXBoTWluaXB1bGF0b3JfMSA9IHJlcXVpcmUoXCIuL0dyYXBoTWluaXB1bGF0b3JcIik7XG5jb25zdCBJbmZlcmVuY2VfMSA9IHJlcXVpcmUoXCIuL0luZmVyZW5jZVwiKTtcbmNvbnN0IFJlbGF0aW9uc2hpcF8xID0gcmVxdWlyZShcIi4vUmVsYXRpb25zaGlwXCIpO1xuLyoqXG4gKiBVc2VzIGFsZ2VicmEgdG8gZXhwYW5kIGEgZ3JhcGguXG4gKi9cbmNsYXNzIEFsZ2VicmFEb2VyIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgZ3JhcGggY29udGFpbmluZyBvbmx5IGV4cGFuc2lvbnMgZnJvbSB0aGVcbiAgICAgKiBnaXZlbiBvbmUuXG4gICAgICogQHBhcmFtIGlucHV0XG4gICAgICovXG4gICAgc3RhdGljIGV4cGFuZChpbnB1dCkge1xuICAgICAgICByZXR1cm4gc3VidHJhY3RGcm9tQm90aFNpZGVzKGlucHV0KTtcbiAgICB9XG59XG5leHBvcnRzLkFsZ2VicmFEb2VyID0gQWxnZWJyYURvZXI7XG4vKipcbiAqIENyZWF0ZSBhIG5ldyBncmFwaCBjb250YWluaW5nIG9ubHkgZXhwYW5zaW9ucyBmcm9tIHRoZVxuICogZ2l2ZW4gb25lLiBSZXN1bHRpbmcgZ3JhcGggbWF5IG5vdCBiZSBjb25uZWN0ZWQuIFRoZSByZXN1bHRcbiAqIHVuaW9uZWQgd2l0aCB0aGUgaW5wdXQgd2lsbCBiZSBjb25uZWN0ZWQuXG4gKiB4ID0geSArIDJcbiAqID0+IHggLSAyID0geVxuICogQHBhcmFtIGlucHV0XG4gKi9cbmZ1bmN0aW9uIHN1YnRyYWN0RnJvbUJvdGhTaWRlcyhpbnB1dCkge1xuICAgIC8vIEdldCB0aGUgY29tcG9uZW50cyBvZiB0aGUgZ3JhcGggd2hpY2ggYXJlIGVxdWFsXG4gICAgY29uc3QgZXF1YWxzID0gR3JhcGhNaW5pcHVsYXRvcl8xLkdyYXBoTWluaXB1bGF0b3IuZ2V0Q29tcG9uZW50Tm9kZXMoaW5wdXQsIChlKSA9PiB7XG4gICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgSW5mZXJlbmNlXzEuSW5mZXJlbmNlICYmIGUucmVsYXRpb25zaGlwID09IFJlbGF0aW9uc2hpcF8xLlJlbGF0aW9uc2hpcC5FcXVhbDtcbiAgICB9KTtcbiAgICAvLyBGaWx0ZXIgb3V0IHVuaGVhbHRoeSBleHByZXNzaW9uc1xuICAgIGVxdWFscy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWx0aHkgPSBbLi4uY29tcG9uZW50XS5maWx0ZXIoZSA9PiBlLmlzSGVhbHRoeSk7XG4gICAgICAgIGNvbXBvbmVudC5jbGVhcigpO1xuICAgICAgICBoZWFsdGh5LmZvckVhY2goZSA9PiBjb21wb25lbnQuYWRkKGUpKTtcbiAgICB9KTtcbiAgICBjb25zdCBvdXQgPSBuZXcgR3JhcGhfMS5HcmFwaCgpO1xuICAgIGVxdWFscy5mb3JFYWNoKGVxdWF0aW9uID0+IHtcbiAgICAgICAgY29uc3QgYXJncyA9IHN1YkZyb21Cb3RoU2lkZXMoZXF1YXRpb24pO1xuICAgICAgICBhcmdzLmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICBvdXQuYWRkQXJndW1lbnQoYSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIEdldCBhIGxpc3Qgb2YgY29uY2x1c2lvbnMgdGhhdCBjYW4gYmUgZHJhd25cbiAqIGZyb20gdGhlIGVxdWFsaXR5IG9mIHRoZSBleHByZXNzaW9ucyBnaXZlbi5cbiAqIEBwYXJhbSBlcXVhdGlvblxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gc3ViRnJvbUJvdGhTaWRlcyhlcXVhdGlvbikge1xuICAgIGNvbnN0IG91dCA9IFtdO1xuICAgIGNvbnN0IGNvbWJpbmF0aW9ucyA9IGNhcnRlc2lhblByb2R1Y3QoZXF1YXRpb24pO1xuICAgIC8vIElmIG9uZSBpcyBhZGRpdGlvbiwgc3VidHJhY3QgZnJvbSBib3RoIHNpZGVzXG4gICAgLy8gSGVyZSB3ZSBmaWx0ZXIgc28gdGhhdCBvbmx5IHBhaXJzIHdoZXJlIHRoZSBmaXJzdCBleHByZXNzaW9uIGlzXG4gICAgLy8gYSBzdW0gYXJlIG9wZXJhdGVkIG9uLiBUaGlzIHdvcmtzIGJlY2F1c2UgY29tYmluYXRpb25zIGlzIHN5bWV0cmljLlxuICAgIC8vIE5vdyBmb3IgZWFjaCBwYWlyIHdlIG9ubHkgaGF2ZSB0byBkZWFsIHdpdGggdGhlIGZpcnN0IGV4cCBiZWluZyBzdW0uXG4gICAgY29tYmluYXRpb25zLmZpbHRlcihwYWlyID0+IHtcbiAgICAgICAgcmV0dXJuIHBhaXJbMF0gaW5zdGFuY2VvZiBTdW1fMS5TdW07XG4gICAgfSkuZm9yRWFjaChwYWlyID0+IHtcbiAgICAgICAgY29uc3QgcyA9IHBhaXJbMF07XG4gICAgICAgIGNvbnN0IG90aGVyID0gcGFpclsxXTtcbiAgICAgICAgLy8gU29tZSBTdW1zIGhhdmUgbXVsdGlwbGUgdGVybXNcbiAgICAgICAgcy50ZXJtcy5mb3JFYWNoKHRlcm0gPT4ge1xuICAgICAgICAgICAgLy8gSWYgb3RoZXIgaXMgaXRzZWxmIGEgc3VtLCB3ZSB3aWxsIGJyZWFrIGl0IGFwYXJ0XG4gICAgICAgICAgICAvLyBpbnRvIHRlcm1zIHNvIHRoYXQgd2UgY2FuIGNvbWJpbmUgaW50ZWdlciB0ZXJtcyBpbiB0aGVcbiAgICAgICAgICAgIC8vIGZpbmFsIHJlc3VsdCBhbmQgYXZvaWRcbiAgICAgICAgICAgIC8vIHggKyAyICsgMiA9IHkgKyAyID0+IHggKyAyID0geSArIDIgLSAyXG4gICAgICAgICAgICAvLyBOb3RlOiBXZSBvbmx5IGRvIHRoaXMgdG8gaW50ZWdlciB0ZXJtcywgYmVjYXVzZSB0aGF0J3NcbiAgICAgICAgICAgIC8vIHNvIG9idmlvdXMgYW5kIGNvdWxkbid0IHBvc3NpYmx5IG5lZWQgdG8gYmUgZXhwbGFpbmVkIGZ1cnRoZXIuXG4gICAgICAgICAgICAvLyBXZSBkb24ndCBkbyBpdCB0byB2YXJpYWJsZSB0ZXJtcy4gVGhlIGZvbGxvd2luZyBpcyBjb3JyZWN0IGJlaGF2aW9yOlxuICAgICAgICAgICAgLy8geCArIGEgKyBhID0geSArIGEgPT4geCArIGEgPSB5ICsgYSAtIGFcbiAgICAgICAgICAgIC8vIFRPRE86IFRoaXMgZGlzdGluY3Rpb24gaXMgZGViYXRhYmxlLiBXaHkgc2hvdWxkbid0IHRoZSBsZWZ0IGhhbmRcbiAgICAgICAgICAgIC8vIG9mIHRoZSBsYXN0IGRlZHVjdGlvbiBiZSB4ICsgYSArIGEgLSBhPyBCeSBkb2luZyB0aGlzLCBcbiAgICAgICAgICAgIC8vIHdlIHByb2R1Y2UgYSBtdWNoIG1vcmUgY29tcGxpY2F0ZWQgYW5kIGV4cGVuc2l2ZSBncmFwaC4gXG4gICAgICAgICAgICBsZXQgc2Vjb25kO1xuICAgICAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgU3VtXzEuU3VtKSB7XG4gICAgICAgICAgICAgICAgc2Vjb25kID0gWy4uLm90aGVyLnRlcm1zXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlY29uZCA9IFtvdGhlcl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjbGFpbSA9IHsgbjogcy53aXRob3V0KHRlcm0pLCBuMTogKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLnN1bUludHVpdGl2ZSkoLi4uc2Vjb25kLCAoMCwgQ29udmVuaWVudEV4cHJlc3Npb25zXzEubmVnYXRpdmUpKHRlcm0pKSwgcjogUmVsYXRpb25zaGlwXzEuUmVsYXRpb25zaGlwLkVxdWFsIH07XG4gICAgICAgICAgICBvdXQucHVzaChuZXcgQXJndW1lbnRfMS5Bcmd1bWVudChuZXcgU2V0KFtzLCBvdGhlcl0pLCBjbGFpbSwgXCJhPWIgJiBjPWQgPT4gYS1jID0gYi1kXCIpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogR2V0cyB0aGUgYW50aS1yZWZsZXhpdmUgY2xvc3VyZSBvZiB0aGUgcmVsYXRpb24gQSB4IEEuXG4gKiBJdCdzIHN5bW1ldHJpYyBhbmQgdHJhbnNpdGl2ZS5cbiAqXG4gKiBAcGFyYW0gc2V0XG4gKi9cbmZ1bmN0aW9uIGNhcnRlc2lhblByb2R1Y3Qoc2V0KSB7XG4gICAgY29uc3Qgb3V0ID0gW107XG4gICAgZm9yIChjb25zdCBmaXJzdCBvZiBzZXQpIHtcbiAgICAgICAgZm9yIChjb25zdCBzZWNvbmQgb2Ygc2V0KSB7XG4gICAgICAgICAgICBpZiAoZmlyc3QgPT09IHNlY29uZClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIG91dC5wdXNoKFtmaXJzdCwgc2Vjb25kXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Bcmd1bWVudCA9IHZvaWQgMDtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4vdXRpbC9hc3NlcnRcIik7XG4vKipcbiAqIEhhcyBzZXZlcmFsIGRlcGVuZGFuY2llcyBhbmQgZHJhd3MgZXhhdGx5IDEuXG4gKiBDb21tdW5pY2F0ZXMgc2V2ZXJhbCBOb2RlcyBhcmUgYWxsIHJlcXVpcmVkIHRvIHByb3ZlIHdoYXRcbiAqIGNvbWVzIGFmdGVyIHRoaXMgb25lLlxuICovXG5jbGFzcyBBcmd1bWVudCB7XG4gICAgY29uc3RydWN0b3IoZ3JvdW5kcywgY2xhaW0sIGFyZ3VtZW50KSB7XG4gICAgICAgIHRoaXMuX2dyb3VuZHMgPSBncm91bmRzO1xuICAgICAgICB0aGlzLmNsYWltID0gY2xhaW07XG4gICAgICAgIHRoaXMuYXJndW1lbnQgPSBhcmd1bWVudDtcbiAgICAgICAgdGhpcy5yZXBPaygpO1xuICAgIH1cbiAgICBleHByZXNzaW9uRWRnZSA9IHRydWU7XG4gICAgZ2V0IHJlbGF0aW9uc2hpcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xhaW0ucjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBcIkFyZ3VtZW50IFwiICsgdGhpcy5jbGFpbS5yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgbm9kZXMgdGhpcyBhcmd1bWVudCBkcmF3cyBmcm9tLlxuICAgICAqIDIgb3IgbW9yZS5cbiAgICAgKi9cbiAgICBnZXQgZ3JvdW5kcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyb3VuZHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFR3byBvdXQgbWF0aCBncmFwaCBub2RlcyB0aGF0IGFyZSByZWxhdGVkIGJ5IHRoaXMgQXJ1Z21lbnQuXG4gICAgICovXG4gICAgY2xhaW07XG4gICAgLyoqXG4gICAgICogVGhlIGV4cGxhbmF0aW9uIHRoYXQgY29ubmVjdHMgdGhlIGFyZ3VtZW50J3MgZ3JvdW5kcyB0b1xuICAgICAqIGl0J3MgY2xhaW1lZCByZWxhdGlvbnNoaXAgYmV0d2VlbiB0aGUgdHdvIG91dCBub2Rlcy5cbiAgICAgKlxuICAgICAqL1xuICAgIGFyZ3VtZW50O1xuICAgIF9ncm91bmRzO1xuICAgIHJlcE9rKCkge1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLl9ncm91bmRzICE9IG51bGwpO1xuICAgICAgICBmb3IgKGNvbnN0IGdyb3VuZCBvZiB0aGlzLmdyb3VuZHMpIHtcbiAgICAgICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKGdyb3VuZCAhPSBudWxsICYmIGdyb3VuZCAhPSB1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMuY2xhaW0ubiAhPSBudWxsICYmIHRoaXMuY2xhaW0ubiAhPSB1bmRlZmluZWQpO1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLmNsYWltLm4xICE9IG51bGwgJiYgdGhpcy5jbGFpbS5uMSAhPSB1bmRlZmluZWQpO1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLmNsYWltLnIgIT0gdW5kZWZpbmVkICYmIHRoaXMuY2xhaW0uciAhPSBudWxsKTtcbiAgICB9XG59XG5leHBvcnRzLkFyZ3VtZW50ID0gQXJndW1lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMueSA9IGV4cG9ydHMueCA9IGV4cG9ydHMuZiA9IGV4cG9ydHMuZSA9IGV4cG9ydHMuZCA9IGV4cG9ydHMuYyA9IGV4cG9ydHMuYiA9IGV4cG9ydHMuYSA9IGV4cG9ydHMuaW50ID0gZXhwb3J0cy52ID0gZXhwb3J0cy5udW0gPSBleHBvcnRzLm5lZ2F0aXZlID0gZXhwb3J0cy5wcm9kdWN0ID0gZXhwb3J0cy5zdW1JbnR1aXRpdmUgPSBleHBvcnRzLnN1bUV2YWxJbnRlZ2VyVGVybXMgPSBleHBvcnRzLm9yZGVyZWRTdW0gPSBleHBvcnRzLnN1bSA9IGV4cG9ydHMuZnJhY3Rpb24gPSB2b2lkIDA7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi9leHByZXNzaW9ucy9JbnRlZ2VyXCIpO1xuY29uc3QgRnJhY3Rpb25fMSA9IHJlcXVpcmUoXCIuL2V4cHJlc3Npb25zL0ZyYWN0aW9uXCIpO1xuY29uc3QgSW50ZWdyYWxfMSA9IHJlcXVpcmUoXCIuL2V4cHJlc3Npb25zL0ludGVncmFsXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4vZXhwcmVzc2lvbnMvUHJvZHVjdFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4vZXhwcmVzc2lvbnMvU3VtXCIpO1xuY29uc3QgVmFyaWFibGVfMSA9IHJlcXVpcmUoXCIuL2V4cHJlc3Npb25zL1ZhcmlhYmxlXCIpO1xuZnVuY3Rpb24gZnJhY3Rpb24obnVtLCBkZW4pIHtcbiAgICByZXR1cm4gRnJhY3Rpb25fMS5GcmFjdGlvbi5vZihudW0sIGRlbik7XG59XG5leHBvcnRzLmZyYWN0aW9uID0gZnJhY3Rpb247XG4vKipcbiAqIEEgY29udmVuaWVuY2UgbWV0aG9kIGZvciBTdW0ub2YoKVxuICovXG5mdW5jdGlvbiBzdW0oLi4udGVybXMpIHtcbiAgICByZXR1cm4gU3VtXzEuU3VtLm9mKHRlcm1zKTtcbn1cbmV4cG9ydHMuc3VtID0gc3VtO1xuLyoqXG4gKiBHZXRzIHRoZSBjb3JyZWN0bHkgb3JkZXJlZCBzdW0gb2YgdGhlIGdpdmVuIHN1bS5cbiAqIDEgKyBhID0gYSArIDFcbiAqIEZvbGxvd3MgdGhlIHNwZWMgZ2l2ZW4gaW4gdGhlIFN1bS50cyBmaWxlLlxuICogQHBhcmFtIHN1bVxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gb3JkZXJlZFN1bShzdW0pIHtcbiAgICBjb25zdCBvcmRlcmVkID0gKDAsIFN1bV8xLm9yZGVyVGVybXMpKC4uLnN1bS50ZXJtcyk7XG4gICAgcmV0dXJuIFN1bV8xLlN1bS5vZihvcmRlcmVkKTtcbn1cbmV4cG9ydHMub3JkZXJlZFN1bSA9IG9yZGVyZWRTdW07XG4vKipcbiAqIFJldHVybnMgdGhlIHN1bSBvZiB0aGUgZ2l2ZW4gdGVybXMsIGV2YWx1YXRpbmcgYW55IGludGVnZXIgdGVybXMuXG4gKiBQdXRzIGZpbmFsIGNvbnN0YW50IGludGVnZXIgYXMgdGhlIGxhc3QgdGVybS5cbiAqIElmIHRoZSByZXN1bHQgaXMgYSBzdW0sIGl0IHdpbGwgbm90IGhhdmUgdGhlIGludGVnZXIgMCBhcyBhIHRlcm0uXG4gKiBJZiBhbGwgZ2l2ZW4gdGVybXMgc3VtIHRvIHplcm8sIHRoZSBpbnRlZ2VyIHplcm8gd2lsbCBiZSByZXR1cm5lZC5cbiAqIEBwYXJhbSB0ZXJtc1xuICovXG5mdW5jdGlvbiBzdW1FdmFsSW50ZWdlclRlcm1zKC4uLnRlcm1zKSB7XG4gICAgY29uc3QgaW50ZWdlcnMgPSB0ZXJtcy5maWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpLmxlbmd0aDtcbiAgICBpZiAoaW50ZWdlcnMgPCAyKVxuICAgICAgICByZXR1cm4gc3VtKC4uLnRlcm1zKTtcbiAgICBjb25zdCBub25JbnRUZXJtcyA9IHRlcm1zLmZpbHRlcihlID0+ICEoZSBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKSk7XG4gICAgY29uc3QgaW50VGVybSA9IHRlcm1zLmZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcilcbiAgICAgICAgLm1hcChlID0+IGUpXG4gICAgICAgIC5yZWR1Y2UoKGEsIGIpID0+IG51bShhLnZhbHVlICsgYi52YWx1ZSkpO1xuICAgIGlmIChpbnRUZXJtLnZhbHVlID09IDApIHtcbiAgICAgICAgaWYgKG5vbkludFRlcm1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBzdW0oLi4ubm9uSW50VGVybXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5vbkludFRlcm1zLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9uSW50VGVybXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaW50VGVybTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKG5vbkludFRlcm1zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gaW50VGVybTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzdW0oLi4ubm9uSW50VGVybXMsIGludFRlcm0pO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5zdW1FdmFsSW50ZWdlclRlcm1zID0gc3VtRXZhbEludGVnZXJUZXJtcztcbi8qKlxuICogUmV0dXJucyB0aGUgc3VtIG9mIHRoZSBnaXZlbiB0ZXJtcy4gRXZhbHVhdGVzIGFueVxuICogaW50ZWdlciB0ZXJtcy4gQWRkaXRpb25hbGx5IGNhbmNlbHMgb3V0IGFueSBwb3NpdGl2ZVxuICogbmVnYXRpdmUgdGVybXMuXG4gKlxuICogU2ltcGxpZmllc1xuICogIHggKyBhIC0gYSA9IHhcbiAqIHggKyBhYiAtIGFiID0geFxuICogeCArIDJhYiAtIDJhYiA9IHhcbiAqIGEgLSBhID0gMFxuICpcbiAqIERvZXNuJ3QgYWZmZWN0XG4gKiAgeCArIDJhIC0gYVxuICogQHBhcmFtIHRlcm1zXG4gKi9cbmZ1bmN0aW9uIHN1bUludHVpdGl2ZSguLi50ZXJtcykge1xuICAgIGNvbnN0IGludEV2YWwgPSBzdW1FdmFsSW50ZWdlclRlcm1zKC4uLnRlcm1zKTtcbiAgICBpZiAoaW50RXZhbC5jbGFzcyAhPSBTdW1fMS5TdW1UeXBlKVxuICAgICAgICByZXR1cm4gaW50RXZhbDtcbiAgICB0ZXJtcyA9IGludEV2YWwudGVybXM7XG4gICAgLy8gRmluZCBvcHBvc2l0ZSBwYWlyc1xuICAgIC8vIFRoZXkgd2lsbCB0YWtlIHRoZSBmb3JtXG4gICAgLy8gICAgICBleHAgKyAtMSAqIGV4cFxuICAgIC8vIEkgYXNzdW1lIGhlcmUgdGhhdCB0aGUgb25seSB3YXkgdG8gbm90YXRlXG4gICAgLy8gbmVnYXRpdml0eSBpcyBieSBtdWx0aXBseWluZyBieSAtMVxuICAgIHRlcm1zOiBmb3IgKGNvbnN0IHQgb2YgdGVybXMpIHtcbiAgICAgICAgY29uc3Qgb3RoZXJUZXJtcyA9IFsuLi50ZXJtc107XG4gICAgICAgIHJlbW92ZShvdGhlclRlcm1zLCB0KTtcbiAgICAgICAgZm9yIChjb25zdCBvdGhlciBvZiBvdGhlclRlcm1zKSB7XG4gICAgICAgICAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBQcm9kdWN0XzEuUHJvZHVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChvdGhlci5pc05lZ2F0aW9uICYmIG90aGVyLm5lZ2F0aW9uID09IHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlKHRlcm1zLCBvdGhlcik7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZSh0ZXJtcywgdCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIHRlcm1zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodGVybXMubGVuZ3RoID09IDApXG4gICAgICAgIHJldHVybiBJbnRlZ2VyXzEuSW50ZWdlci5vZigwKTtcbiAgICBlbHNlIGlmICh0ZXJtcy5sZW5ndGggPT0gMSlcbiAgICAgICAgcmV0dXJuIHRlcm1zWzBdO1xuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIHN1bSguLi50ZXJtcyk7XG59XG5leHBvcnRzLnN1bUludHVpdGl2ZSA9IHN1bUludHVpdGl2ZTtcbi8qKlxuICogUmVtb3ZlcyB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgdGhlIGdpdmVuXG4gKiBlbGVtZW50IGZyb20gdGhlIGFycmF5LiBSZWFsbHkgc2hvdWxkIGJlXG4gKiBwYXJ0IG9mIHRoZSBzdGQgbGlicmFyeS4gSWRlbnRpZmllcyBvYmplY3RcbiAqIHdpdGggcmVmZXJlbmNpYWwgZXF1YWxpdHkuXG4gKiBAcGFyYW0gYXJyYXlcbiAqIEBwYXJhbSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZShhcnJheSwgZWxlbWVudCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFycmF5W2ldID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBwcm9kdWN0KC4uLmZhY3RvcnMpIHtcbiAgICByZXR1cm4gUHJvZHVjdF8xLlByb2R1Y3Qub2YoZmFjdG9ycyk7XG59XG5leHBvcnRzLnByb2R1Y3QgPSBwcm9kdWN0O1xuZnVuY3Rpb24gbmVnYXRpdmUoZXhwcmVzc2lvbikge1xuICAgIGlmIChleHByZXNzaW9uIGluc3RhbmNlb2YgSW50ZWdlcl8xLkludGVnZXIpXG4gICAgICAgIHJldHVybiBJbnRlZ2VyXzEuSW50ZWdlci5vZigtZXhwcmVzc2lvbi52YWx1ZSk7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gUHJvZHVjdF8xLlByb2R1Y3Qub2YoW0ludGVnZXJfMS5JbnRlZ2VyLm9mKC0xKSwgZXhwcmVzc2lvbl0pO1xufVxuZXhwb3J0cy5uZWdhdGl2ZSA9IG5lZ2F0aXZlO1xuZnVuY3Rpb24gbnVtKHZhbCkge1xuICAgIHJldHVybiBJbnRlZ2VyXzEuSW50ZWdlci5vZih2YWwpO1xufVxuZXhwb3J0cy5udW0gPSBudW07XG5mdW5jdGlvbiB2KHN5bWJvbCkge1xuICAgIHJldHVybiBWYXJpYWJsZV8xLlZhcmlhYmxlLm9mKHN5bWJvbCk7XG59XG5leHBvcnRzLnYgPSB2O1xuZnVuY3Rpb24gaW50KGludGVncmFuZCwgcmVzcGVjdFRvKSB7XG4gICAgcmV0dXJuIEludGVncmFsXzEuSW50ZWdyYWwub2YoaW50ZWdyYW5kLCByZXNwZWN0VG8pO1xufVxuZXhwb3J0cy5pbnQgPSBpbnQ7XG5leHBvcnRzLmEgPSB2KCdhJyk7XG5leHBvcnRzLmIgPSB2KCdiJyk7XG5leHBvcnRzLmMgPSB2KCdjJyk7XG5leHBvcnRzLmQgPSB2KCdkJyk7XG5leHBvcnRzLmUgPSB2KCdlJyk7XG5leHBvcnRzLmYgPSB2KCdmJyk7XG5leHBvcnRzLnggPSB2KCd4Jyk7XG5leHBvcnRzLnkgPSB2KCd5Jyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXF1aXZhbGVuY2VGaW5kZXIgPSB2b2lkIDA7XG5jb25zdCBDb252ZW5pZW50RXhwcmVzc2lvbnNfMSA9IHJlcXVpcmUoXCIuL0NvbnZlbmllbnRFeHByZXNzaW9uc1wiKTtcbmNvbnN0IEV4cG9uZW50XzEgPSByZXF1aXJlKFwiLi9leHByZXNzaW9ucy9FeHBvbmVudFwiKTtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuL2V4cHJlc3Npb25zL0V4cHJlc3Npb25cIik7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi9leHByZXNzaW9ucy9JbnRlZ2VyXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4vZXhwcmVzc2lvbnMvUHJvZHVjdFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4vZXhwcmVzc2lvbnMvU3VtXCIpO1xuY29uc3QgR3JhcGhfMSA9IHJlcXVpcmUoXCIuL0dyYXBoXCIpO1xuY29uc3QgSW5mZXJlbmNlXzEgPSByZXF1aXJlKFwiLi9JbmZlcmVuY2VcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0XCIpO1xuLyoqXG4gKiBHaXZlbiBhbiBleHByZXNzaW9uLCB0aGlzIGNsYXNzIGNhbiBkZXJpdmUgb3RoZXJcbiAqIGVxdWl2YWxlbnQgZXhwcmVzc2lvbnMuXG4gKi9cbmNsYXNzIEVxdWl2YWxlbmNlRmluZGVyIHtcbiAgICAvKipcbiAgICAgKiBQcm9kdWNlcyBhIGdyYXBoIGNvbnRhaW5pbmcgZXhwcmVzc2lvbnNcbiAgICAgKiBlcXVpdmFsZW50IHRvIHRoZSBvbmUgZ2l2ZW4gd2l0aCB0aGVpclxuICAgICAqIGRlcml2YXRpb25zLlxuICAgICAqIE9ubHkgZ29lcyAxIGluZmVyZW5jZSBkZWVwLlxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5kRXF1aXZhbGVudHNGb3IoZXhwKSB7XG4gICAgICAgIGxldCBvdXQgPSBuZXcgR3JhcGhfMS5HcmFwaCgpO1xuICAgICAgICBmb3IgKGNvbnN0IHJ1bGUgb2YgcnVsZXNPZkluZmVyZW5jZSkge1xuICAgICAgICAgICAgaWYgKHJ1bGUuYXBwbGllcyhleHApKSB7XG4gICAgICAgICAgICAgICAgLy8gRm9yIGRlYnVnaW5nIGJyb2tlbiBydWxlc1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocnVsZS5uYW1lKVxuICAgICAgICAgICAgICAgIG91dC5hZGRJbmZlcmVuY2VzKHJ1bGUuYXBwbHkoZXhwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgc3RhdGljIGV4cGFuZChpbnB1dCkge1xuICAgICAgICBsZXQgb3V0ID0gbmV3IEdyYXBoXzEuR3JhcGgoKTtcbiAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIGlucHV0LmdldE5vZGVzKCkpIHtcbiAgICAgICAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbikpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBydWxlc09mSW5mZXJlbmNlLmZpbHRlcihyID0+IHIuYXBwbGllcyhub2RlKSkuZm9yRWFjaChydWxlID0+IHtcbiAgICAgICAgICAgICAgICBvdXQuYWRkSW5mZXJlbmNlcyhydWxlLmFwcGx5KG5vZGUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxufVxuZXhwb3J0cy5FcXVpdmFsZW5jZUZpbmRlciA9IEVxdWl2YWxlbmNlRmluZGVyO1xuY2xhc3MgUnVsZU9mSW5mZXJlbmNlIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzZXQgb2YgaW5mZXJlbmNlcyB0aGlzXG4gICAgICogcnVsZSBjcmVhdGVzLiBPbmx5IGNhbGxlZCBpZiBhcHBsaWVzKCkgaXMgdHJ1ZS5cbiAgICAgKi9cbiAgICBhcHBseShleHApIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5hcHBseUltcGwoZXhwKTtcbiAgICAgICAgcmVzdWx0LmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KShlICE9IG51bGwgJiYgZSAhPSB1bmRlZmluZWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4vKipcbiAqIGEgKyBhID0gMmFcbiAqXG4gKiBCdXQgbm90XG4gKiAxICsgMSA9IDIoMSlcbiAqL1xuY2xhc3MgQ29tYmluZUNvbW1vblRlcm1zQWRkaXRpb24gZXh0ZW5kcyBSdWxlT2ZJbmZlcmVuY2Uge1xuICAgIG5hbWUgPSBcIkNvbWJpbmUgQ29tbW9uIFRlcm1zIChBZGRpdGlvbilcIjtcbiAgICBhcHBsaWVzKGV4cCkge1xuICAgICAgICBpZiAoIShleHAgaW5zdGFuY2VvZiBTdW1fMS5TdW0pKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoZXhwLnJlZHVjaWJsZU9ySW50KVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBzdW0gPSBleHA7XG4gICAgICAgIGlmIChuZXcgU2V0KHN1bS50ZXJtcykuc2l6ZSA8IHN1bS50ZXJtcy5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIGxldCBlcXVpdmFsZW50RXhwcmVzc2lvbnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGNvbnN0IHN1bSA9IGV4cDtcbiAgICAgICAgY29uc3QgdW5pcXVlVGVybXMgPSBuZXcgU2V0KHN1bS50ZXJtcyk7XG4gICAgICAgIC8vIFN1cHBvc2UgdGhlIHN1bSBpcyBhICsgYSArIGJcbiAgICAgICAgLy8gRm9yIGV2ZXJ5IHVuaXF1ZSB0ZXJtIGluIHthLCBifVxuICAgICAgICBmb3IgKGNvbnN0IHVuaXF1ZVRlcm0gb2YgdW5pcXVlVGVybXMpIHtcbiAgICAgICAgICAgIC8vIEF2b2lkIHVuaGVhbHRoeSBleHByZXNzaW9uc1xuICAgICAgICAgICAgaWYgKHVuaXF1ZVRlcm0ucmVkdWNpYmxlT3JJbnQpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBsZXQgcmVtYWluaW5nVGVybXMgPSBbXTtcbiAgICAgICAgICAgIGxldCBvY2N1cmFuY2VzID0gMDtcbiAgICAgICAgICAgIC8vIENvdW50IHRoZSBudW1iZXIgb2YgdGltZXMgaXQgb2NjdXJzIGluIHRoZSBzdW0sXG4gICAgICAgICAgICAvLyBjb2xsZWN0aW5nIGFsbCBvdGhlciB0ZXJtcy5cbiAgICAgICAgICAgIGZvciAoY29uc3QgdCBvZiBzdW0udGVybXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodCA9PSB1bmlxdWVUZXJtKSB7XG4gICAgICAgICAgICAgICAgICAgIG9jY3VyYW5jZXMrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZ1Rlcm1zLnB1c2godCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgaXQgb2NjdXJlcyBtdWx0aXBsZSB0aW1lcywgY3JlYXRlIGEgbmV3IHN1bVxuICAgICAgICAgICAgLy8gZXhwcmVzc2lvbiB3aXRoIHRoYXQgdGVybSBjb21iaW5lZFxuICAgICAgICAgICAgaWYgKG9jY3VyYW5jZXMgPiAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IFByb2R1Y3RfMS5Qcm9kdWN0Lm9mKFt1bmlxdWVUZXJtLCBJbnRlZ2VyXzEuSW50ZWdlci5vZihvY2N1cmFuY2VzKV0pO1xuICAgICAgICAgICAgICAgIGlmIChyZW1haW5pbmdUZXJtcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBlcXVpdmFsZW50RXhwcmVzc2lvbnMuYWRkKHByb2R1Y3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nVGVybXMucHVzaChwcm9kdWN0KTtcbiAgICAgICAgICAgICAgICAgICAgZXF1aXZhbGVudEV4cHJlc3Npb25zLmFkZChTdW1fMS5TdW0ub2YocmVtYWluaW5nVGVybXMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHVybiB0aGUgZXF1aXZhbGVudCBleHByZXNzaW9ucyBpbnRvIGluZmVyZW5jZXNcbiAgICAgICAgbGV0IGluZmVyZW5jZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGVxdWl2YWxlbnRFeHByZXNzaW9ucy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgaW5mZXJlbmNlcy5hZGQobmV3IEluZmVyZW5jZV8xLkluZmVyZW5jZShzdW0sIGUsIFwiRGlzdHJpYnV0aXZlIHByb3BlcnR5IG9mIG11bHRpcGxpY2F0aW9uXCIpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBpbmZlcmVuY2VzO1xuICAgIH1cbn1cbmNsYXNzIENvbWJpbmVDb21tb25UZXJtc011bHRpcGxpY2F0aW9uIGV4dGVuZHMgUnVsZU9mSW5mZXJlbmNlIHtcbiAgICBuYW1lID0gXCJDb21iaW5lQ29tbW9uVGVybXMgKE11bHRpcGxpY2F0aW9uKVwiO1xuICAgIGFwcGxpZXMoZXhwKSB7XG4gICAgICAgIGlmICghKGV4cCBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0KSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGV4cC5pc1JlZHVjaWJsZSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IGV4cDtcbiAgICAgICAgaWYgKG5ldyBTZXQocHJvZHVjdC5mYWN0b3JzKS5zaXplIDwgcHJvZHVjdC5mYWN0b3JzLmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgbGV0IGVxdWl2YWxlbnRFeHByZXNzaW9ucyA9IG5ldyBTZXQoKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IGV4cDtcbiAgICAgICAgY29uc3QgdW5pcXVlRmFjdG9ycyA9IG5ldyBTZXQocHJvZHVjdC5mYWN0b3JzKTtcbiAgICAgICAgLy8gU3VwcG9zZSB0aGUgcHJvZHVjdCBpcyBhICogYSAqIGJcbiAgICAgICAgLy8gRm9yIGV2ZXJ5IHVuaXF1ZSBmYWN0b3Ige2EsIGJ9XG4gICAgICAgIGZvciAoY29uc3QgdW5pcXVlRmFjdG9yIG9mIHVuaXF1ZUZhY3RvcnMpIHtcbiAgICAgICAgICAgIGxldCBvY2N1cmFuY2VzID0gMDtcbiAgICAgICAgICAgIGxldCByZW1haW5pbmdGYWN0b3JzID0gW107XG4gICAgICAgICAgICAvLyBDb3VudCB0aGUgbnVtYmVyIG9mIHRpbWVzIGl0IG9jY3VycyBpbiB0aGUgcHJvZHVjdCxcbiAgICAgICAgICAgIC8vIGNvbGxlY3RpbmcgYWxsIG90aGVyIGZhY3RvcnMuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHQgb2YgcHJvZHVjdC5mYWN0b3JzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHQgPT0gdW5pcXVlRmFjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9jY3VyYW5jZXMrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZ0ZhY3RvcnMucHVzaCh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBpdCBvY2N1cmVzIG11bHRpcGxlIHRpbWVzLCBjcmVhdGUgYSBuZXcgc3VtXG4gICAgICAgICAgICAvLyBleHByZXNzaW9uIHdpdGggdGhhdCB0ZXJtIGNvbWJpbmVkXG4gICAgICAgICAgICBpZiAob2NjdXJhbmNlcyA+IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBleHBvbmVudCA9IEV4cG9uZW50XzEuRXhwb25lbnQub2YodW5pcXVlRmFjdG9yLCBJbnRlZ2VyXzEuSW50ZWdlci5vZihvY2N1cmFuY2VzKSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlbWFpbmluZ0ZhY3RvcnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZXF1aXZhbGVudEV4cHJlc3Npb25zLmFkZChleHBvbmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW1haW5pbmdGYWN0b3JzLnB1c2gocHJvZHVjdCk7XG4gICAgICAgICAgICAgICAgICAgIGVxdWl2YWxlbnRFeHByZXNzaW9ucy5hZGQoUHJvZHVjdF8xLlByb2R1Y3Qub2YocmVtYWluaW5nRmFjdG9ycykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUdXJuIHRoZSBlcXVpdmFsZW50IGV4cHJlc3Npb25zIGludG8gaW5mZXJlbmNlc1xuICAgICAgICBsZXQgaW5mZXJlbmNlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgZXF1aXZhbGVudEV4cHJlc3Npb25zLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBpbmZlcmVuY2VzLmFkZChuZXcgSW5mZXJlbmNlXzEuSW5mZXJlbmNlKHByb2R1Y3QsIGUsIFwiRXhwb25lbnRpYWwgcnVsZSBmb3IgbXVsdGlwbHlpbmcgZXF1YWwgYmFzZXNcIikpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGluZmVyZW5jZXM7XG4gICAgfVxufVxuLyoqXG4gKiBDb21iaW5lIGFueSBpbnRlZ2VyIHRlcm1zIGluIFN1bXMuXG4gKiBhICsgMiArIDIgKyAyPSBhICsgNFxuICogMiAtIDIgPSAwXG4gKlxuICogQ29tYmluZXMgYWxsIG9mIHRoZW0gYXQgb25jZSBubyBtYXR0ZXIgaG93IG1hbnkgdGVybXMgdGhlcmUgYXJlLlxuICpcbiAqL1xuY2xhc3MgRXZhbHVhdGVTdW1zIGV4dGVuZHMgUnVsZU9mSW5mZXJlbmNlIHtcbiAgICBuYW1lID0gXCJBZGRpdGlvblwiO1xuICAgIGFwcGxpZXMoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAgaW5zdGFuY2VvZiBTdW1fMS5TdW07XG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgY29uc3Qgc3VtID0gZXhwO1xuICAgICAgICBjb25zdCBvdXQgPSBuZXcgU2V0KCk7XG4gICAgICAgIGNvbnN0IGludGVnZXJUZXJtcyA9IFsuLi5zdW0udGVybXNdLmZpbHRlcih0ID0+IHQgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlcik7XG4gICAgICAgIGlmIChpbnRlZ2VyVGVybXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3SW50ID0gaW50ZWdlclRlcm1zLm1hcChlID0+IGUpLnJlZHVjZSgoYSwgYikgPT4gSW50ZWdlcl8xLkludGVnZXIub2YoYS52YWx1ZSArIGIudmFsdWUpKTtcbiAgICAgICAgY29uc3Qgb3RoZXJUZXJtcyA9IFsuLi5zdW0udGVybXNdLmZpbHRlcih0ID0+ICEodCBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJTaW1wbGlmeWluZyB2aWEgQWRkaXRpb24gXCIgKyBzdW0udG9TdHJpbmcoKSlcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIkZvdW5kIFwiICsgaW50ZWdlclRlcm1zLmxlbmd0aCArIFwiIGludGVnZXIgdGVybXNcIilcbiAgICAgICAgLy9pbnRlZ2VyVGVybXMuZm9yRWFjaCh0ID0+IGNvbnNvbGUubG9nKHQpKVxuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICBpZiAob3RoZXJUZXJtcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEluZmVyZW5jZV8xLkluZmVyZW5jZShzdW0sIG5ld0ludCwgXCJFdmFsdWF0ZWQgQWRkaXRpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgSW5mZXJlbmNlXzEuSW5mZXJlbmNlKHN1bSwgU3VtXzEuU3VtLm9mKG90aGVyVGVybXMuY29uY2F0KG5ld0ludCkpLCBcIkV2YWx1YXRlZCBBZGRpdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBvdXQuYWRkKHJlc3VsdCk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxufVxuY2xhc3MgUmVkdWNlUmVkdWNpYmxlcyBleHRlbmRzIFJ1bGVPZkluZmVyZW5jZSB7XG4gICAgbmFtZSA9IFwiRXZhbHVhdGUgUmVkdWNpYmxlc1wiO1xuICAgIGFwcGxpZXMoZXhwKSB7XG4gICAgICAgIHJldHVybiBleHAuaXNSZWR1Y2libGU7XG4gICAgfVxuICAgIGFwcGx5SW1wbChleHApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZXQoW25ldyBJbmZlcmVuY2VfMS5JbmZlcmVuY2UoZXhwLCBleHAucmVkdWNlZCwgXCJSZWR1Y2VkXCIpXSk7XG4gICAgfVxufVxuLyoqXG4gKiBUdXJucyBzdW1zIHRoYXQgYXJlIHVuaGVhbHRoeSBiZWNhdXNlIHRoZWlyIHRlcm0gb3JkZXJcbiAqIGlzIHdyb25nIGludG8gY29ycmVjdGx5IG9yZGVyZWQgc3Vtcy5cbiAqL1xuY2xhc3MgT3JkZXJTdW1zIGV4dGVuZHMgUnVsZU9mSW5mZXJlbmNlIHtcbiAgICBuYW1lID0gXCJSZW9yZGVyIFN1bXNcIjtcbiAgICBhcHBsaWVzKGV4cCkge1xuICAgICAgICByZXR1cm4gIWV4cC5pc0hlYWx0aHkgJiYgZXhwIGluc3RhbmNlb2YgU3VtXzEuU3VtO1xuICAgIH1cbiAgICBhcHBseUltcGwoZXhwKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2V0KFtuZXcgSW5mZXJlbmNlXzEuSW5mZXJlbmNlKGV4cCwgKDAsIENvbnZlbmllbnRFeHByZXNzaW9uc18xLm9yZGVyZWRTdW0pKGV4cCksIFwiUmVvcmRlcmVkXCIpXSk7XG4gICAgfVxufVxubGV0IHJ1bGVzT2ZJbmZlcmVuY2UgPSBbXG4gICAgbmV3IENvbWJpbmVDb21tb25UZXJtc0FkZGl0aW9uKCksXG4gICAgbmV3IENvbWJpbmVDb21tb25UZXJtc011bHRpcGxpY2F0aW9uKCksXG4gICAgbmV3IEV2YWx1YXRlU3VtcygpLFxuICAgIG5ldyBSZWR1Y2VSZWR1Y2libGVzKCksXG4gICAgbmV3IE9yZGVyU3VtcygpLFxuXTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Bcmd1bWVudEVkZ2UgPSBleHBvcnRzLkdyYXBoID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuL0FyZ3VtZW50XCIpO1xuY29uc3QgSW5mZXJlbmNlXzEgPSByZXF1aXJlKFwiLi9JbmZlcmVuY2VcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0XCIpO1xuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBncmFwaCBvZiBleHByZXNzaW9ucyBhbmQgc3RhdGVtZW50c1xuICogaW5jbHVkaW5nIGV2ZXJ5dGhpbmcgd2Uga25vdyBhYm91dCBhIHByb2JsZW0uXG4gKiBDb25uZWN0cyBHcmFwaE5vZGVzIHZpYSBJbmZlcmVuY2VzIGZvciBlZGdlcy5cbiAqXG4gKiBJdCdzIGEgZGlncmFwaC5cbiAqL1xuY2xhc3MgR3JhcGgge1xuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gZXhwcmVzc2lvbiB0byB0aGUgcHJvYmxlbS5cbiAgICAgKiBAcGFyYW0gbm9kZVxuICAgICAqL1xuICAgIGFkZE5vZGUobm9kZSkge1xuICAgICAgICB0aGlzLm5vZGVzLmFkZChub2RlKTtcbiAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBBcmd1bWVudF8xLkFyZ3VtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBhID0gbm9kZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZ3JvdW5kIG9mIGEuZ3JvdW5kcykge1xuICAgICAgICAgICAgICAgIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXBPaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGFuIGluZmVyZW5jZSB0byB0aGUgZ3JhcGguXG4gICAgICogQWRkcyBib3RoIGVuZHBvaW50cyBvZiB0aGUgaW5mZXJlbmNlIHRvIHRoZSBncmFwaC5cbiAgICAgKiBAcGFyYW0gaVxuICAgICAqL1xuICAgIGFkZEluZmVyZW5jZShpKSB7XG4gICAgICAgIHRoaXMuYWRkRWRnZShpLmZpcnN0LCBpLnNlY29uZCwgaSk7XG4gICAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbihpLmZpcnN0LCBpLnNlY29uZCk7XG4gICAgICAgIHRoaXMubm9kZXMuYWRkKGkuZmlyc3QpO1xuICAgICAgICB0aGlzLm5vZGVzLmFkZChpLnNlY29uZCk7XG4gICAgICAgIHRoaXMucmVwT2soKTtcbiAgICB9XG4gICAgYWRkSW5mZXJlbmNlcyhsaXN0KSB7XG4gICAgICAgIGZvciAoY29uc3QgaSBvZiBsaXN0KVxuICAgICAgICAgICAgdGhpcy5hZGRJbmZlcmVuY2UoaSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBub2RlIHJlcHJlc2VudGluZyBhbiBhY3VtdWxhdGlvbiBvZiBmYWN0c1xuICAgICAqIHRoYXQgbGVhZHMgdG8gYSBjb25jbHVzaW9uLlxuICAgICAqIEBwYXJhbSBhXG4gICAgICovXG4gICAgYWRkQXJndW1lbnQoYSkge1xuICAgICAgICB0aGlzLm5vZGVzLmFkZChhKTtcbiAgICAgICAgLy8gQWRkIHRoZSBncm91bmRzXG4gICAgICAgIGZvciAoY29uc3QgZ3JvdW5kIG9mIGEuZ3JvdW5kcykge1xuICAgICAgICAgICAgdGhpcy5ub2Rlcy5hZGQoZ3JvdW5kKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbihncm91bmQsIGEpO1xuICAgICAgICAgICAgdGhpcy5hZGRFZGdlKGdyb3VuZCwgYSwgQXJndW1lbnRFZGdlLlRvKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgdGhlIGNsYWltXG4gICAgICAgIGNvbnN0IGNsYWltID0gYS5jbGFpbTtcbiAgICAgICAgdGhpcy5hZGROb2RlKGNsYWltLm4pO1xuICAgICAgICB0aGlzLmFkZE5vZGUoY2xhaW0ubjEpO1xuICAgICAgICB0aGlzLmFkZENvbm5lY3Rpb24oYSwgY2xhaW0ubik7XG4gICAgICAgIHRoaXMuYWRkRWRnZShhLCBjbGFpbS5uLCBBcmd1bWVudEVkZ2UuRnJvbSk7XG4gICAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbihhLCBjbGFpbS5uMSk7XG4gICAgICAgIHRoaXMuYWRkRWRnZShhLCBjbGFpbS5uMSwgQXJndW1lbnRFZGdlLkZyb20pO1xuICAgICAgICB0aGlzLmFkZENvbm5lY3Rpb24oY2xhaW0ubiwgY2xhaW0ubjEpO1xuICAgICAgICB0aGlzLmFkZENvbm5lY3Rpb24oY2xhaW0ubjEsIGNsYWltLm4pO1xuICAgICAgICB0aGlzLmFkZEVkZ2UoY2xhaW0ubiwgY2xhaW0ubjEsIGEpO1xuICAgICAgICB0aGlzLmFkZEVkZ2UoY2xhaW0ubjEsIGNsYWltLm4sIGEpO1xuICAgICAgICB0aGlzLnJlcE9rKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbmVpZ2hib3JzIG9mIGEgbm9kZS5cbiAgICAgKiBAcGFyYW0gbm9kZVxuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24gTm9kZXMgdGhhdCBhcmUgYWRqYWNlbnQgdG8gdGhpcyBub2RlLCBmcm9tIHRoaXMgbm9kZSwgb3IgZWl0aGVyLlxuICAgICAqIEByZXR1cm5zIFVuZGVmaW5lZCBpZiB0aGUgbm9kZSBpc24ndCBpbiB0aGlzIGdyYXBoLiBPdGhlcndpc2UsIGEgc2V0IG9mIGNvbm5lY3RlZCBub2Rlcy5cbiAgICAgKiAgICAgICAgICBJZiB0aGUgbm9kZSBpcyBpbiB0aGUgZ3JhcGggYnV0IGlzbid0IGNvbm5lY3RlZCB0byBhbnl0aGluZywgcmV0dXJucyBlbXB0eSBzZXQuXG4gICAgICovXG4gICAgZ2V0TmVpZ2hib3JzKG5vZGUsIGRpcmVjdGlvbikge1xuICAgICAgICBpZiAoIXRoaXMubm9kZXMuaGFzKG5vZGUpKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcIm91dFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNldCh0aGlzLmNvbm5lY3Rpb25zLmdldChub2RlKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFkamFjZW50VG8gPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgbiBvZiB0aGlzLm5vZGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9ucy5nZXQobik/Lmhhcyhub2RlKSlcbiAgICAgICAgICAgICAgICBhZGphY2VudFRvLmFkZChuKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwiaW5cIilcbiAgICAgICAgICAgIHJldHVybiBhZGphY2VudFRvO1xuICAgICAgICBmb3IgKGNvbnN0IG4gb2YgdGhpcy5jb25uZWN0aW9ucy5nZXQobm9kZSkgPz8gW10pXG4gICAgICAgICAgICBhZGphY2VudFRvLmFkZChuKTtcbiAgICAgICAgcmV0dXJuIGFkamFjZW50VG87XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgdGhlIG51bWJlciBvZiBlZGdlcyB0aGlzIG5vZGUgaGFzLlxuICAgICAqIEBwYXJhbSBub2RlIFRoZSBub2RlIGJlaW5nIGNvbnNkZXJlZC5cbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIENvdW50IG9ubHkgdGhlIGVkZ2VzIGdvaW5nIHRvd2FyZHMgdGhpcyBub2RlLCBhd2F5IGZyb21cbiAgICAgKiAgICAgICAgICBpdCwgb3IgYm90aC5cbiAgICAgKiBAcmV0dXJucyA+PSAwLCB1bmRlZmluZWQgaWYgdGhlIGdpdmVuIG5vZGUgaXNuJ3QgaW4gdGhlIGdyYXBoLlxuICAgICAqL1xuICAgIGdldERlZ3JlZShub2RlLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKCF0aGlzLm5vZGVzLmhhcyhub2RlKSlcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJvdXRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbnMuZ2V0KG5vZGUpPy5zaXplID8/IDA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRlZ0luID0gMDtcbiAgICAgICAgdGhpcy5ub2Rlcy5mb3JFYWNoKG4gPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbnMuZ2V0KG4pID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9ucy5nZXQobikuaGFzKG5vZGUpKVxuICAgICAgICAgICAgICAgIGRlZ0luKys7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwiaW5cIikge1xuICAgICAgICAgICAgcmV0dXJuIGRlZ0luO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWdJbiArICh0aGlzLmNvbm5lY3Rpb25zLmdldChub2RlKT8uc2l6ZSA/PyAwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIG4gTm9kZSBpbiB0aGUgZ3JhcGguXG4gICAgICogQHBhcmFtIG4xIEluIHRoZSBncmFwaC5cbiAgICAgKiBAcmV0dXJucyBVbmRlZmluZWQgaWYgZWl0aGVyIG5vZGUgaXNuJ3QgaW4gdGhlIGdyYXBoIG9yIHRoZXkncmUgbm90XG4gICAgICogY29ubmVjdGVkLlxuICAgICAqL1xuICAgIGdldEVkZ2UobiwgbjEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWRnZXMuZ2V0KG4pPy5nZXQobjEpO1xuICAgIH1cbiAgICBjb250YWlucyhub2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVzLmhhcyhub2RlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMgQW4gaXRlcmFibGUgb2YgYWxsIHRoZSBub2RlcyBpbiB0aGUgZ3JhcGguXG4gICAgICovXG4gICAgZ2V0Tm9kZXMoKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2V0KHRoaXMubm9kZXMpO1xuICAgIH1cbiAgICBnZXRFZGdlcygpIHtcbiAgICAgICAgY29uc3Qgb3V0ID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLmVkZ2VzLmZvckVhY2goKG1hcCwgZmlyc3QpID0+IHtcbiAgICAgICAgICAgIG1hcC5mb3JFYWNoKChlZGdlLCBzZWNvbmQpID0+IHtcbiAgICAgICAgICAgICAgICBvdXQuYWRkKHsgbjogZmlyc3QsIG4xOiBzZWNvbmQsIGU6IGVkZ2UgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIG51bU5vZGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2Rlcy5zaXplO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGFsbCBncmFwaCBub2RlcyBhbmQgZWRnZXMgdG8gdGhpcyBvbmUuXG4gICAgICogQHBhcmFtIGdyYXBoXG4gICAgICovXG4gICAgYWRkR3JhcGgoZ3JhcGgpIHtcbiAgICAgICAgZ3JhcGgubm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9kZXMuYWRkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgZ3JhcGguZWRnZXMuZm9yRWFjaCgobWFwLCBub2RlMSkgPT4ge1xuICAgICAgICAgICAgbWFwLmZvckVhY2goKGVkZ2UsIG5vZGUyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVkZ2UgaW5zdGFuY2VvZiBJbmZlcmVuY2VfMS5JbmZlcmVuY2UpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkSW5mZXJlbmNlKGVkZ2UpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVkZ2UgaW5zdGFuY2VvZiBBcmd1bWVudF8xLkFyZ3VtZW50KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEFyZ3VtZW50KGVkZ2UpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVkZ2UgPT0gXCJzdXBwb3J0c1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRWRnZShub2RlMSwgbm9kZTIsIEFyZ3VtZW50RWRnZS5Ubyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbihub2RlMSwgbm9kZTIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlZGdlID09IFwiY2xhaW1zXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFZGdlKG5vZGUxLCBub2RlMiwgQXJndW1lbnRFZGdlLkZyb20pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbm5lY3Rpb24obm9kZTEsIG5vZGUyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIEVkZ2UgVHlwZVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZXBPaygpO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgbGV0IG91dCA9IFwiR3JhcGgoViA9IHtcIjtcbiAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIHRoaXMubm9kZXMpIHtcbiAgICAgICAgICAgIG91dCArPSBub2RlLnRvU3RyaW5nKCkgKyBcIixcIjtcbiAgICAgICAgfVxuICAgICAgICBvdXQgPSBvdXQuc3Vic3RyaW5nKDAsIG91dC5sZW5ndGggLSAxKSArIFwifSwgRSA9IHtcIjtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucy5mb3JFYWNoKChzZXQsIHNyYykgPT4ge1xuICAgICAgICAgICAgc2V0LmZvckVhY2goZGVzdCA9PiB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IHNyYy50b1N0cmluZygpICsgXCIgLT4gXCIgKyBkZXN0LnRvU3RyaW5nKCkgKyBcIiwgXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIG91dCArPSBcIn0gRWRnZSBDb3VudDogXCIgKyB0aGlzLmNvbm5lY3Rpb25zLnNpemU7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIGFkZENvbm5lY3Rpb24obiwgbjEpIHtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbnMuZ2V0KG4pID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbnMuc2V0KG4sIG5ldyBTZXQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucy5nZXQobikuYWRkKG4xKTtcbiAgICB9XG4gICAgYWRkRWRnZShuLCBuMSwgZSkge1xuICAgICAgICBpZiAodGhpcy5lZGdlcy5nZXQobikgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmVkZ2VzLnNldChuLCBuZXcgTWFwKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWRnZXMuZ2V0KG4pLnNldChuMSwgZSk7XG4gICAgfVxuICAgIHJlcE9rKCkge1xuICAgICAgICB0aGlzLm5vZGVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9IHVuZGVmaW5lZCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBBbGwgY29ubmVjdGlvbnMvZWRnZXMgaGF2ZSBub2Rlc1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMubm9kZXMuaGFzKGtleSkpO1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChuID0+IHtcbiAgICAgICAgICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLm5vZGVzLmhhcyhuKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWRnZXMuZm9yRWFjaCgobWFwLCBmaXJzdCkgPT4ge1xuICAgICAgICAgICAgbWFwLmZvckVhY2goKGVkZ2UsIHNlY29uZCkgPT4ge1xuICAgICAgICAgICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMubm9kZXMuaGFzKGZpcnN0KSk7XG4gICAgICAgICAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5ub2Rlcy5oYXMoc2Vjb25kKSk7XG4gICAgICAgICAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5jb25uZWN0aW9ucy5nZXQoZmlyc3QpLmhhcyhzZWNvbmQpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbm9kZXMgPSBuZXcgU2V0KCk7XG4gICAgLy8gUXVpY2tseSBhY2Nlc3MgYWxsIGNvbm5lY3Rpb25zIG9mIGEgbm9kZVxuICAgIGNvbm5lY3Rpb25zID0gbmV3IE1hcCgpO1xuICAgIC8vIERldGVybWluZSB0aGUgdHlwZSBvZiBjb25uZWN0aW9uIGJldHdlZW4gdHdvIG5vZGVzXG4gICAgZWRnZXMgPSBuZXcgTWFwKCk7XG59XG5leHBvcnRzLkdyYXBoID0gR3JhcGg7XG52YXIgQXJndW1lbnRFZGdlO1xuKGZ1bmN0aW9uIChBcmd1bWVudEVkZ2UpIHtcbiAgICBBcmd1bWVudEVkZ2VbXCJUb1wiXSA9IFwic3VwcG9ydHNcIjtcbiAgICBBcmd1bWVudEVkZ2VbXCJGcm9tXCJdID0gXCJjbGFpbXNcIjtcbn0pKEFyZ3VtZW50RWRnZSA9IGV4cG9ydHMuQXJndW1lbnRFZGdlIHx8IChleHBvcnRzLkFyZ3VtZW50RWRnZSA9IHt9KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR3JhcGhNaW5pcHVsYXRvciA9IHZvaWQgMDtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4vdXRpbC9hc3NlcnRcIik7XG4vKipcbiAqIFRvb2wgdG8gZG8gb3BlcmF0aW9ucyBvbiBncmFwaHMuXG4gKi9cbmNsYXNzIEdyYXBoTWluaXB1bGF0b3Ige1xuICAgIC8qKlxuICAgICAqIEZpbmQgbm9kZXMgb2YgY29tcG9uZW50cyBvZiBhIGdyYXBoIHdoZXJlIG9ubHkgZWRnZXMgZm9yIHdoaWNoXG4gICAgICogdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHJldHVybnMgdHJ1ZSBhcmUgY29uc2lkZXJlZC5cbiAgICAgKiBAcGFyYW1cbiAgICAgKiBAcGFyYW0gaXNDb25uZWN0ZWRcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q29tcG9uZW50Tm9kZXMoaW5wdXQsIGlzQ29ubmVjdGVkKSB7XG4gICAgICAgIGxldCBpbmNsdWRlZE5vZGVzID0gbmV3IFNldCgpO1xuICAgICAgICBsZXQgY29tcG9uZW50cyA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIGlucHV0LmdldE5vZGVzKCkpIHtcbiAgICAgICAgICAgIGlmIChpbmNsdWRlZE5vZGVzLmhhcyhub2RlKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0QWxsQ29ubmVjdGVkKG4pIHtcbiAgICAgICAgICAgICAgICBpbmNsdWRlZE5vZGVzLmFkZChuKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50LmhhcyhuKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5hZGQobik7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBuZWlnaGJvciBvZiBpbnB1dC5nZXROZWlnaGJvcnMobiwgXCJib3RoXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNDb25uZWN0ZWQoaW5wdXQuZ2V0RWRnZShuLCBuZWlnaGJvcikpKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIGdldEFsbENvbm5lY3RlZChuZWlnaGJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdldEFsbENvbm5lY3RlZChub2RlKTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5hZGQobm9kZSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFkZChjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKGluY2x1ZGVkTm9kZXMuc2l6ZSA9PSBpbnB1dC5udW1Ob2RlcygpKTtcbiAgICAgICAgLy8gQXNzZXJ0IGNvbXBvbmVudHMgYXJlIHBhaXJ3aXNlIGRpc2pvaW50IG9mIHByb2JsZW1zIHNob3cgdXBcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgZXZlcnkgZWRnZSBpbiB0aGUgZ3JhcGguXG4gICAgICogQHBhcmFtIGlucHV0XG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UmVsYXRpb25zKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IG91dCA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgaW5wdXQuZ2V0Tm9kZXMoKSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBvdGhlciBvZiBpbnB1dC5nZXROZWlnaGJvcnMobm9kZSwgXCJvdXRcIikpIHtcbiAgICAgICAgICAgICAgICBvdXQucHVzaCh7IGZpcnN0OiBub2RlLCBzZWNvbmQ6IG90aGVyLCBlOiBpbnB1dC5nZXRFZGdlKG5vZGUsIG90aGVyKSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIGdyYXBoIGludG8gc2V0cyBvZlxuICAgICAqIG5vZGVzIGdyb3VwZWQgYnkgZGVwdGggZnJvbSBhIGNlbnRlciBub2RlLlxuICAgICAqIEFzc3VtZXMgdGhlIGdyYXBoIGlzIGNvbm5lY3RlZC5cbiAgICAgKiBAcGFyYW0gcm9vdE5vZGVzIENvbnRhaW5zIGF0IGxlYXN0IG9uZSBub2RlIGluIHRoZSBncmFwaC5cbiAgICAgKiBAcGFyYW0gY291bnQgRnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIGlmIGFueSBnaXZlbiBub2RlIHNob3VsZCBiZVxuICAgICAqIGluY2x1ZGVkIGluIHRoZSBkZXB0aCBjb3VudC4gRGVmYXVsdHMgdG8gY291bnRpbmcgYWxsIG5vZGVzLiBOb2RlcyB0aGF0XG4gICAgICogYXJlbid0IGluY2x1ZGVkIHdvbid0IGJlIGluIHRoZSByZXR1cm5lZCB2YWx1ZS5cbiAgICAgKiBAcmV0dXJucyBNYXAgZnJvbSBkZXB0aCBpbiBncmFwaCB0byBhIHNldCBvZiBub2RlcyBhdCB0aGF0IGRlcHRoLlxuICAgICAqXG4gICAgICovXG4gICAgc3RhdGljIGdldExldmVscyhpbnB1dCwgcm9vdE5vZGVzLCBjb3VudCA9ICgpID0+IHRydWUpIHtcbiAgICAgICAgY29uc3Qgcm9vdHMgPSBuZXcgU2V0KHJvb3ROb2Rlcyk7XG4gICAgICAgIGNvbnN0IGRlcHRocyA9IG5ldyBNYXAoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlY3Vyc2l2ZWx5IG1hcHMgb3V0IGFsbCBub2RlcyBpbiB0aGUgZ3JhcGgsXG4gICAgICAgICAqIHB1dHRpbiB0aGVtIGluIHRoZSBkZXB0aHMgbWFwLlxuICAgICAgICAgKiBAcGFyYW0gbm9kZVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gbWFwTm9kZShub2RlLCBkZXB0aCA9IDApIHtcbiAgICAgICAgICAgIGlmIChyb290cy5oYXMobm9kZSkpIHtcbiAgICAgICAgICAgICAgICBkZXB0aCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGVwdGggPCAoZGVwdGhzLmdldChub2RlKSA/PyBOdW1iZXIuTUFYX1ZBTFVFKSkge1xuICAgICAgICAgICAgICAgIGRlcHRocy5zZXQobm9kZSwgZGVwdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmVpZ2hib3JzID0gWy4uLmlucHV0LmdldE5laWdoYm9ycyhub2RlLCBcImJvdGhcIildO1xuICAgICAgICAgICAgbmVpZ2hib3JzLmZpbHRlcih2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBmb3VuZCBhIHNob3J0ZXIgcGF0aCB0byBpdCBvciB0aGVyZSB3YXMgbm8gZm91bmQgcGF0aCB0byBpdFxuICAgICAgICAgICAgICAgIHJldHVybiAoZGVwdGhzLmdldCh2YWx1ZSkgPT0gdW5kZWZpbmVkIHx8IGRlcHRocy5nZXQodmFsdWUpID4gZGVwdGgpICYmIHZhbHVlICE9PSBub2RlO1xuICAgICAgICAgICAgfSkuZm9yRWFjaChuID0+IHtcbiAgICAgICAgICAgICAgICBtYXBOb2RlKG4sIGNvdW50KG5vZGUpID8gZGVwdGggKyAxIDogZGVwdGgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbWFwTm9kZShbLi4ucm9vdHNdWzBdKTtcbiAgICAgICAgY29uc3Qgb3V0ID0gbmV3IE1hcCgpO1xuICAgICAgICBkZXB0aHMuZm9yRWFjaCgoZGVwdGgsIG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmICghY291bnQobm9kZSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKG91dC5nZXQoZGVwdGgpID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG91dC5zZXQoZGVwdGgsIG5ldyBTZXQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXQuZ2V0KGRlcHRoKS5hZGQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBnaXZlbiBncmFwaCBpcyBjb25uZWN0ZWQsIG1lYW5pbmcgdGhhdFxuICAgICAqIGl0J3MgcG9zc2libGUgdG8gdHJhdmVyc2UgYmV0d2VlbiBhbnkgdHdvIG5vZGVzIG9uIHRoZSBncmFwaC5cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNDb25uZWN0ZWQoaW5wdXQpIHtcbiAgICAgICAgLy8gQ2hlY2sgZXZlcnkgbm9kZSBoYXMgYSBkZWdyZWUgb2YgMSBvciBtb3JlIG9yIGdyYXBoIG9ubHkgaGFzIDEgb3IgMCBlbGVtZW50c1xuICAgICAgICByZXR1cm4gWy4uLmlucHV0LmdldE5vZGVzKCldLm1hcChub2RlID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC5nZXREZWdyZWUobm9kZSwgXCJib3RoXCIpID4gMDtcbiAgICAgICAgfSkucmVkdWNlKChhLCBiKSA9PiBhICYmIGIpIHx8IGlucHV0Lm51bU5vZGVzKCkgPCAyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGaWx0ZXJzIGVkZ2VzIGxpc3QgcmV0dXJuaW5nIGEgbGlzdCB3aGVyZSBvbmx5IG9uZSBlZGdlXG4gICAgICogZnJvbSBhbnkgZWRnZSBsb29wcyBpcyBpbmNsdWRlZC5cbiAgICAgKiBGb3IgZXhhbXBsZSBpZiB0aGUgaW5wdXQgZWRnZXMgYXJlIGEgLT4gYiBhbmQgYiAtPiBhLFxuICAgICAqIHRoZSByZXN1bHQgd2lsbCBvbmx5IGNvbnRhaW4gYSAtPiBiLlxuICAgICAqIEBwYXJhbSBlZGdlc1xuICAgICAqL1xuICAgIHN0YXRpYyBkcm9wU3ltbWV0cmljKGVkZ2VzKSB7XG4gICAgICAgIGNvbnN0IG91dCA9IFtdO1xuICAgICAgICBmdW5jdGlvbiBhbHJlYWR5SGFzKGVkZ2UpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZSBvZiBvdXQpXG4gICAgICAgICAgICAgICAgaWYgKGVkZ2UubiA9PSBlLm4xICYmIGVkZ2UubjEgPT0gZS5uKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGVkZ2Ugb2YgZWRnZXMpIHtcbiAgICAgICAgICAgIGlmICghYWxyZWFkeUhhcyhlZGdlKSlcbiAgICAgICAgICAgICAgICBvdXQucHVzaChlZGdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbn1cbmV4cG9ydHMuR3JhcGhNaW5pcHVsYXRvciA9IEdyYXBoTWluaXB1bGF0b3I7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSW5mZXJlbmNlID0gdm9pZCAwO1xuY29uc3QgUmVsYXRpb25zaGlwXzEgPSByZXF1aXJlKFwiLi9SZWxhdGlvbnNoaXBcIik7XG4vKipcbiAqIENvbm5lY3RzIHR3byBleHByZXNzaW9ucyB3aXRoIGFuIGV4cGxhbmF0aW9uLlxuICogSW4gb25lIGRpcmVjdGlvbi4gQSBkaXJlY3RlZCBlZGdlLlxuICovXG5jbGFzcyBJbmZlcmVuY2Uge1xuICAgIGNvbnN0cnVjdG9yKGV4cDEsIGV4cDIsIGV4cGxhbmF0aW9uKSB7XG4gICAgICAgIHRoaXMuZXhwbGFuYXRpb24gPSBleHBsYW5hdGlvbjtcbiAgICAgICAgdGhpcy5maXJzdCA9IGV4cDE7XG4gICAgICAgIHRoaXMuc2Vjb25kID0gZXhwMjtcbiAgICAgICAgdGhpcy5yZWxhdGlvbnNoaXAgPSBSZWxhdGlvbnNoaXBfMS5SZWxhdGlvbnNoaXAuRXF1YWw7XG4gICAgfVxuICAgIGV4cGxhbmF0aW9uO1xuICAgIGZpcnN0O1xuICAgIHNlY29uZDtcbiAgICByZWxhdGlvbnNoaXA7XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbGF0aW9uc2hpcDtcbiAgICB9XG4gICAgZXhwcmVzc2lvbkVkZ2UgPSB0cnVlO1xufVxuZXhwb3J0cy5JbmZlcmVuY2UgPSBJbmZlcmVuY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaW5Sb3cgPSBleHBvcnRzLmluUGFyZW4gPSB2b2lkIDA7XG4vKipcbiAqIFdyYXBzIHRoZSBnaXZlbiBtYXRobWwgc3RyaW5nIGluIG1hdGhtbCBwYXJlbnRoYXNlcy5cbiAqIEBwYXJhbSBzdHJcbiAqL1xuZnVuY3Rpb24gaW5QYXJlbihzdHIpIHtcbiAgICByZXR1cm4gXCI8bW8+KDwvbW8+XCIgKyBzdHIgKyBcIjxtbz4pPC9tbz5cIjtcbn1cbmV4cG9ydHMuaW5QYXJlbiA9IGluUGFyZW47XG4vKipcbiAqIFB1dHMgdGhlIGdpdmVuIG1hdGhtbCBleHByZXNzaW9uIGluIGEgcm93IHNvIHRoYXRcbiAqIGl0IGRvZXNuJ3QgZ2V0IGRpdmlkZWQgYnkgbWF0aGpheC5cbiAqIEBwYXJhbSBzdHJcbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIGluUm93KHN0cikge1xuICAgIHJldHVybiBcIjxtcm93PlwiICsgc3RyICsgXCI8L21yb3c+XCI7XG59XG5leHBvcnRzLmluUm93ID0gaW5Sb3c7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUmVsYXRpb25zaGlwID0gdm9pZCAwO1xuLyoqXG4gKiBBIHdheSBpbiB3aGljaCAyIGV4cHJlc3Npb25zIGNhbiBiZSByZWxhdGVkLlxuICovXG52YXIgUmVsYXRpb25zaGlwO1xuKGZ1bmN0aW9uIChSZWxhdGlvbnNoaXApIHtcbiAgICBSZWxhdGlvbnNoaXBbXCJFcXVhbFwiXSA9IFwiPVwiO1xufSkoUmVsYXRpb25zaGlwID0gZXhwb3J0cy5SZWxhdGlvbnNoaXAgfHwgKGV4cG9ydHMuUmVsYXRpb25zaGlwID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FeHBvbmVudCA9IHZvaWQgMDtcbmNvbnN0IE1hdGhNTEhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuLi9NYXRoTUxIZWxwZXJzXCIpO1xuY29uc3QgRXhwcmVzc2lvbl8xID0gcmVxdWlyZShcIi4vRXhwcmVzc2lvblwiKTtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuL0ludGVnZXJcIik7XG5jb25zdCBQcm9kdWN0XzEgPSByZXF1aXJlKFwiLi9Qcm9kdWN0XCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi9TdW1cIik7XG5jbGFzcyBFeHBvbmVudCBleHRlbmRzIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uIHtcbiAgICBzdGF0aWMgb2YoYmFzZSwgcG93ZXIpIHtcbiAgICAgICAgaWYgKCFFeHBvbmVudC5pbnN0YW5jZXMuaGFzKGJhc2UpKSB7XG4gICAgICAgICAgICBFeHBvbmVudC5pbnN0YW5jZXMuc2V0KGJhc2UsIG5ldyBNYXAoKSk7XG4gICAgICAgICAgICBpZiAoIUV4cG9uZW50Lmluc3RhbmNlcy5nZXQoYmFzZSkuaGFzKHBvd2VyKSkge1xuICAgICAgICAgICAgICAgIEV4cG9uZW50Lmluc3RhbmNlcy5nZXQoYmFzZSkuc2V0KHBvd2VyLCBuZXcgRXhwb25lbnQoYmFzZSwgcG93ZXIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRXhwb25lbnQuaW5zdGFuY2VzLmdldChiYXNlKS5nZXQocG93ZXIpO1xuICAgIH1cbiAgICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IE1hcCgpO1xuICAgIGNsYXNzID0gXCJFeHBvbmVudFwiO1xuICAgIHRvTWF0aFhNTCgpIHtcbiAgICAgICAgZnVuY3Rpb24gd3JhcElmTmVlZGVkKGV4cCkge1xuICAgICAgICAgICAgaWYgKGV4cC5jbGFzcyA9PSBTdW1fMS5TdW1UeXBlIHx8IGV4cC5jbGFzcyA9PSBQcm9kdWN0XzEuUHJvZHVjdFR5cGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuICgwLCBNYXRoTUxIZWxwZXJzXzEuaW5Sb3cpKCgwLCBNYXRoTUxIZWxwZXJzXzEuaW5QYXJlbikoZXhwLnRvTWF0aFhNTCgpKSk7XG4gICAgICAgICAgICByZXR1cm4gZXhwLnRvTWF0aFhNTCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIjxtc3VwPlwiICsgd3JhcElmTmVlZGVkKHRoaXMuYmFzZSkgKyB0aGlzLnBvd2VyLnRvTWF0aFhNTCgpICsgXCI8L21zdXA+XCI7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCIoXCIgKyB0aGlzLmJhc2UgKyBcIileKFwiICsgdGhpcy5wb3dlciArIFwiKVwiO1xuICAgIH1cbiAgICBnZXQgaGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIFwiRXhwb25lbnRcIiArIHRoaXMuYmFzZS5oYXNoICsgdGhpcy5wb3dlci5oYXNoO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcihiYXNlLCBwb3dlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmJhc2UgPSBiYXNlO1xuICAgICAgICB0aGlzLnBvd2VyID0gcG93ZXI7XG4gICAgICAgIC8vIFRoZSBpbnRlZ2VycyBhcmUgY2xvc2VkIG92ZXIgZXhwb25lbnRpYXRpb25cbiAgICAgICAgdGhpcy5pc1JlZHVjaWJsZSA9IChiYXNlLmlzUmVkdWNpYmxlIHx8IGJhc2UuY2xhc3MgPT0gSW50ZWdlcl8xLkludGVnZXJUeXBlKSAmJiAocG93ZXIuaXNSZWR1Y2libGUgfHwgcG93ZXIuY2xhc3MgPT0gSW50ZWdlcl8xLkludGVnZXJUeXBlKSAmJiBNYXRoLnBvdyhiYXNlLnJlZHVjZWQudmFsdWUsIHBvd2VyLnJlZHVjZWQudmFsdWUpICUgMSA9PSAwO1xuICAgICAgICB0aGlzLmlzSGVhbHRoeSA9ICF0aGlzLmlzUmVkdWNpYmxlO1xuICAgICAgICB0aGlzLmlzQ29uc3RhbnQgPSBiYXNlLmlzQ29uc3RhbnQgJiYgcG93ZXIuaXNDb25zdGFudDtcbiAgICB9XG4gICAgYmFzZTtcbiAgICBwb3dlcjtcbiAgICBpc1JlZHVjaWJsZTtcbiAgICBpc0hlYWx0aHk7XG4gICAgZ2V0IHJlZHVjZWQoKSB7XG4gICAgICAgIHJldHVybiBJbnRlZ2VyXzEuSW50ZWdlci5vZihNYXRoLnBvdyh0aGlzLmJhc2UucmVkdWNlZC52YWx1ZSwgdGhpcy5wb3dlci5yZWR1Y2VkLnZhbHVlKSk7XG4gICAgfVxuICAgIGlzQ29uc3RhbnQ7XG59XG5leHBvcnRzLkV4cG9uZW50ID0gRXhwb25lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXhwcmVzc2lvbiA9IHZvaWQgMDtcbmNvbnN0IEludGVnZXJfMSA9IHJlcXVpcmUoXCIuL0ludGVnZXJcIik7XG5jb25zdCBNYXRoRWxlbWVudF8xID0gcmVxdWlyZShcIi4vTWF0aEVsZW1lbnRcIik7XG4vKipcbiAqIEJhc2Ugb2YgYWxsIG1hdGhlbWF0aWNhbCBleHByZXNzaW9ucy5cbiAqIEFsbCBjaGlsZHJlbiBzaG91bGQgaW1wbGVtZW50IGZseS13aGVlbCBwYXR0ZXJuLlxuICovXG5jbGFzcyBFeHByZXNzaW9uIGV4dGVuZHMgTWF0aEVsZW1lbnRfMS5NYXRoRWxlbWVudCB7XG4gICAgZ2V0IHJlZHVjaWJsZU9ySW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1JlZHVjaWJsZSB8fCB0aGlzLmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZTtcbiAgICB9XG59XG5leHBvcnRzLkV4cHJlc3Npb24gPSBFeHByZXNzaW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkZyYWN0aW9uVHlwZSA9IGV4cG9ydHMuRnJhY3Rpb24gPSB2b2lkIDA7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uXCIpO1xuY2xhc3MgRnJhY3Rpb24gZXh0ZW5kcyBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbiB7XG4gICAgc3RhdGljIG9mKG51bWVyYXRvciwgZGVub21pbmF0b3IpIHtcbiAgICAgICAgY29uc3QgaGFzaCA9IG51bWVyYXRvci5oYXNoICsgZGVub21pbmF0b3IuaGFzaDtcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlLmhhcyhoYXNoKSlcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0KGhhc2gsIG5ldyBGcmFjdGlvbihudW1lcmF0b3IsIGRlbm9taW5hdG9yKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmdldChoYXNoKTtcbiAgICB9XG4gICAgc3RhdGljIGluc3RhbmNlID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0cnVjdG9yKG51bSwgZGVub20pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5udW1lcmF0b3IgPSBudW07XG4gICAgICAgIHRoaXMuZGVub21pbmF0b3IgPSBkZW5vbTtcbiAgICAgICAgLypcbiAgICAgICAgQSBmcmFjdGlvbiBpcyByZWR1Y2libGUgaWYgdGhlIGRlbm9tIHwgbnVtLlxuICAgICAgICAgICAgPD0+IG51bSA9IGsgKiBkZW5vbSB3aGVyZSBrIGlzIGFuIGludGVnZXIuXG5cbiAgICAgICAgVGhpcyBtYWtlcyBwcm92aW5nIHJlZHVjaWJpbGl0eSBoYXJkLlxuICAgICAgICBUT0RPOiBEZWNpZGUgaWYgaXQncyB3b3J0aCBpbXBsZW1lbnRpbmcgcmVkdWNpYmlsaXR5IGZvciBGcmFjdGlvbnNcbiAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pc1JlZHVjaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzSGVhbHRoeSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNDb25zdGFudCA9IG51bS5pc0NvbnN0YW50ICYmIGRlbm9tLmlzQ29uc3RhbnQ7XG4gICAgfVxuICAgIG51bWVyYXRvcjtcbiAgICBkZW5vbWluYXRvcjtcbiAgICBnZXQgcmVkdWNlZCgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIGlzUmVkdWNpYmxlO1xuICAgIGNsYXNzID0gZXhwb3J0cy5GcmFjdGlvblR5cGU7XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm51bWVyYXRvci50b1N0cmluZygpICsgXCIgLyBcIiArIHRoaXMuZGVub21pbmF0b3IudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgZ2V0IGhhc2goKSB7XG4gICAgICAgIHJldHVybiBleHBvcnRzLkZyYWN0aW9uVHlwZSArIHRoaXMubnVtZXJhdG9yLmhhc2ggKyB0aGlzLmRlbm9taW5hdG9yLmhhc2g7XG4gICAgfVxuICAgIGlzSGVhbHRoeTtcbiAgICBpc0NvbnN0YW50O1xuICAgIHRvTWF0aFhNTCgpIHtcbiAgICAgICAgcmV0dXJuIFwiPG1mcmFjPjxtcm93PlwiICsgdGhpcy5udW1lcmF0b3IudG9NYXRoWE1MKCkgKyBcIjwvbXJvdz48bXJvdz5cIiArIHRoaXMuZGVub21pbmF0b3IudG9NYXRoWE1MKCkgKyBcIjwvbXJvdz48L21mcmFjPlwiO1xuICAgIH1cbn1cbmV4cG9ydHMuRnJhY3Rpb24gPSBGcmFjdGlvbjtcbmV4cG9ydHMuRnJhY3Rpb25UeXBlID0gXCJGcmFjdGlvblwiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkludGVnZXJUeXBlID0gZXhwb3J0cy5JbnRlZ2VyID0gdm9pZCAwO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi4vdXRpbC9hc3NlcnRcIik7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uXCIpO1xuLyoqXG4gKiBJbnRlZ2VyXG4gKiBQb3NpdGl2ZSBvciBuZWdhdGl2ZVxuICovXG5jbGFzcyBJbnRlZ2VyIGV4dGVuZHMgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24ge1xuICAgIHN0YXRpYyBvZih2YWx1ZSkge1xuICAgICAgICBpZiAoIUludGVnZXIuaW5zdGFuY2VzLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIEludGVnZXIuaW5zdGFuY2VzLnNldCh2YWx1ZSwgbmV3IEludGVnZXIodmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSW50ZWdlci5pbnN0YW5jZXMuZ2V0KHZhbHVlKTtcbiAgICB9XG4gICAgc3RhdGljIGluc3RhbmNlcyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICgwLCBhc3NlcnRfMS5hc3NlcnQpKHRoaXMudmFsdWUgJSAxID09IDAsIFwiQ3JlYXRpbmcgbm9uLWludGVnZXIgaW50ZWdlciBcIiArIHRoaXMudmFsdWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyBBIHBvc2l0aXZlIHZlcnNpb24gb2YgdGhpcyBpbnRlZ2VyLlxuICAgICAqL1xuICAgIGJ1dFBvc2l0aXZlKCkge1xuICAgICAgICByZXR1cm4gSW50ZWdlci5vZihNYXRoLmFicyh0aGlzLnZhbHVlKSk7XG4gICAgfVxuICAgIGNsYXNzID0gZXhwb3J0cy5JbnRlZ2VyVHlwZTtcbiAgICB0b01hdGhYTUwoKSB7XG4gICAgICAgIHJldHVybiBcIjxtbj5cIiArIHRoaXMudmFsdWUgKyBcIjwvbW4+XCI7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCJcIiArIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIGdldCBoYXNoKCkge1xuICAgICAgICByZXR1cm4gXCJOdW1iZXJFeHBcIiArIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHZhbHVlO1xuICAgIGlzUmVkdWNpYmxlID0gZmFsc2U7XG4gICAgZ2V0IHJlZHVjZWQoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludGVnZXJzIGFyZW4ndCByZWR1Y2libGUuXCIpO1xuICAgIH1cbiAgICBpc0hlYWx0aHkgPSB0cnVlO1xuICAgIGlzQ29uc3RhbnQgPSB0cnVlO1xufVxuZXhwb3J0cy5JbnRlZ2VyID0gSW50ZWdlcjtcbmV4cG9ydHMuSW50ZWdlclR5cGUgPSBcIkludGVnZXJcIjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JbnRlZ3JhbFR5cGUgPSBleHBvcnRzLkludGVncmFsID0gdm9pZCAwO1xuY29uc3QgTWF0aE1MSGVscGVyc18xID0gcmVxdWlyZShcIi4uL01hdGhNTEhlbHBlcnNcIik7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uXCIpO1xuY29uc3QgUHJvZHVjdF8xID0gcmVxdWlyZShcIi4vUHJvZHVjdFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4vU3VtXCIpO1xuLyoqXG4gKiBBbiBpbmRlZmluYXRlIGludGVncmFsIChmb3Igbm93KS5cbiAqIFRPRE86IFNob3VsZCB3ZSBzZXBhcmF0ZSBkZWZpbmF0ZS9pbmRlZmluYXRlIGludGVncmFscz9cbiAqL1xuY2xhc3MgSW50ZWdyYWwgZXh0ZW5kcyBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbiB7XG4gICAgc3RhdGljIG9mKGludGVncmFuZCwgcmVsYXRpdmVUbykge1xuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2VzLmhhcyhpbnRlZ3JhbmQuaGFzaCArIHJlbGF0aXZlVG8uaGFzaCkpXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlcy5zZXQoaW50ZWdyYW5kLmhhc2ggKyByZWxhdGl2ZVRvLmhhc2gsIG5ldyBJbnRlZ3JhbChpbnRlZ3JhbmQsIHJlbGF0aXZlVG8pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzLmdldChpbnRlZ3JhbmQuaGFzaCArIHJlbGF0aXZlVG8uaGFzaCk7XG4gICAgfVxuICAgIHN0YXRpYyBpbnN0YW5jZXMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3RydWN0b3IoaW50ZWdyYW5kLCByZWxhdGl2ZVRvKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaW50ZWdyYW5kID0gaW50ZWdyYW5kO1xuICAgICAgICB0aGlzLnJlbGF0aXZlVG8gPSByZWxhdGl2ZVRvO1xuICAgICAgICB0aGlzLmlzUmVkdWNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNIZWFsdGh5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0NvbnN0YW50ID0gZmFsc2U7XG4gICAgfVxuICAgIGludGVncmFuZDtcbiAgICByZWxhdGl2ZVRvO1xuICAgIGdldCByZWR1Y2VkKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLiBOb3Qgc3VyZSBob3cgdGhpcyB3b3JrcyB3aXRoIEludGVncmFscy5cIik7XG4gICAgfVxuICAgIGlzUmVkdWNpYmxlO1xuICAgIGNsYXNzID0gZXhwb3J0cy5JbnRlZ3JhbFR5cGU7XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBcIuKIq1wiICsgdGhpcy5pbnRlZ3JhbmQudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgZ2V0IGhhc2goKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBpc0hlYWx0aHk7XG4gICAgaXNDb25zdGFudDtcbiAgICB0b01hdGhYTUwoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHdyYXBJZk5lZWRlZChleHApIHtcbiAgICAgICAgICAgIGlmIChleHAuY2xhc3MgPT0gU3VtXzEuU3VtVHlwZSB8fCBleHAuY2xhc3MgPT0gUHJvZHVjdF8xLlByb2R1Y3RUeXBlKVxuICAgICAgICAgICAgICAgIHJldHVybiAoMCwgTWF0aE1MSGVscGVyc18xLmluUGFyZW4pKGV4cC50b01hdGhYTUwoKSk7XG4gICAgICAgICAgICByZXR1cm4gZXhwLnRvTWF0aFhNTCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIjxtcm93Pjxtbz7iiKs8L21vPlwiICsgd3JhcElmTmVlZGVkKHRoaXMuaW50ZWdyYW5kKSArIFwiPG1uPmQ8L21uPlwiICsgd3JhcElmTmVlZGVkKHRoaXMucmVsYXRpdmVUbykgKyBcIjwvbXJvdz5cIjtcbiAgICB9XG59XG5leHBvcnRzLkludGVncmFsID0gSW50ZWdyYWw7XG5leHBvcnRzLkludGVncmFsVHlwZSA9IFwiSW50ZWdyYWxcIjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NYXRoRWxlbWVudCA9IHZvaWQgMDtcbi8qKlxuICogQ2FuIGJlIGV4cHJlc3NlZCB3aXRoIE1hdGhNTFxuICovXG5jbGFzcyBNYXRoRWxlbWVudCB7XG59XG5leHBvcnRzLk1hdGhFbGVtZW50ID0gTWF0aEVsZW1lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUHJvZHVjdFR5cGUgPSBleHBvcnRzLlByb2R1Y3QgPSB2b2lkIDA7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2Fzc2VydFwiKTtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuL0V4cHJlc3Npb25cIik7XG5jb25zdCBJbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi9JbnRlZ2VyXCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi9TdW1cIik7XG4vKipcbiAqIEEgbWF0aGVtYXRpY2FsIHByb2R1Y3Qgd2l0aCAyIG9yIG1vcmUgZmFjdG9ycy5cbiAqL1xuY2xhc3MgUHJvZHVjdCBleHRlbmRzIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uIHtcbiAgICAvKipcbiAgICAgKiBGb3IgZWZmaWNpZW5jeSwgcHJvZHVjdHMgYXJlIGNvbXBhcmVkIGJ5IHJlZmVyZW5jZS5cbiAgICAgKiBIZXJlIHdlIGVuc3VyZSA9PT0gPD0+ID09XG4gICAgICogQHBhcmFtIGZhY3RvcnNcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHN0YXRpYyBvZihmYWN0b3JzKSB7XG4gICAgICAgIGNvbnN0IGhhc2ggPSBmYWN0b3JzLm1hcChlID0+IGUuaGFzaCkuam9pbihcIlwiKTtcbiAgICAgICAgaWYgKCFQcm9kdWN0Lmluc3RhbmNlcy5oYXMoaGFzaCkpXG4gICAgICAgICAgICBQcm9kdWN0Lmluc3RhbmNlcy5zZXQoaGFzaCwgbmV3IFByb2R1Y3QoZmFjdG9ycykpO1xuICAgICAgICByZXR1cm4gUHJvZHVjdC5pbnN0YW5jZXMuZ2V0KGhhc2gpO1xuICAgIH1cbiAgICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0cnVjdG9yKGZhY3RvcnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkoZmFjdG9ycy5sZW5ndGggPj0gMiwgXCJDcmVhdGluZyBwcm9kdWN0IHdpdGggbGVzcyB0aGFuIDIgZmFjdG9ycy5cIik7XG4gICAgICAgIHRoaXMuZmFjdG9ycyA9IGZhY3RvcnM7XG4gICAgICAgIGxldCByZWR1Y2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmZhY3RvcnMuZm9yRWFjaChmID0+IHtcbiAgICAgICAgICAgIHJlZHVjaWJsZSAmJj0gZi5pc1JlZHVjaWJsZSB8fCBmLmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoZSBpbnRlZ2VycyBhcmUgY2xvc2VkIG92ZXIgbXVsdGlwbGljYXRpb25cbiAgICAgICAgdGhpcy5pc1JlZHVjaWJsZSA9IHJlZHVjaWJsZTtcbiAgICAgICAgbGV0IGhlYWx0aHkgPSB0cnVlO1xuICAgICAgICBoZWFsdGh5ICYmPSB0aGlzLm51bU5lZ2F0aXZlcygpID4gMTtcbiAgICAgICAgdGhpcy5pc0hlYWx0aHkgPSBoZWFsdGh5O1xuICAgICAgICBsZXQgaXNOZWdhdGlvbiA9IGZhY3RvcnMubGVuZ3RoID09IDI7XG4gICAgICAgIGlzTmVnYXRpb24gJiY9IGZhY3RvcnMuZmlsdGVyKGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlciAmJiBlLnZhbHVlID09IC0xO1xuICAgICAgICB9KS5sZW5ndGggPT0gMTtcbiAgICAgICAgdGhpcy5pc05lZ2F0aW9uID0gaXNOZWdhdGlvbjtcbiAgICAgICAgdGhpcy5pc0NvbnN0YW50ID0gdGhpcy5mYWN0b3JzLm1hcChmID0+IGYuaXNDb25zdGFudCkucmVkdWNlKChhLCBiKSA9PiBhICYmIGIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoaXMgcHJvZHVjdCBpcyBqdXN0XG4gICAgICogLTEgKiBhbm90aGVyIGV4cHJlc3Npb24uXG4gICAgICovXG4gICAgaXNOZWdhdGlvbjtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHZhbHVlIHRoYXQgdGhpcyBwcm9kdWN0IGlzIG5lZ2F0aW5nXG4gICAgICogLTEgKiBleHAgcmV0dXJucyBleHAuXG4gICAgICogQHRocm93cyBpZiBwcm9kdWN0IGlzbid0IGEgbmVnYXRpb24uXG4gICAgICovXG4gICAgZ2V0IG5lZ2F0aW9uKCkge1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KSh0aGlzLmlzTmVnYXRpb24sIFwiVHJ5aW5nIHRvIGdldCBuZWdhdGlvbiBmcm9tIG5vbi1uZWdhdGluZyBzdW1cIik7XG4gICAgICAgIGlmICh0aGlzLmZhY3RvcnNbMF0uY2xhc3MgPT0gSW50ZWdlcl8xLkludGVnZXJUeXBlICYmIHRoaXMuZmFjdG9yc1swXS52YWx1ZSA9PSAtMSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZhY3RvcnNbMV07XG4gICAgICAgIHJldHVybiB0aGlzLmZhY3RvcnNbMF07XG4gICAgfVxuICAgIHRvTWF0aFhNTCgpIHtcbiAgICAgICAgbGV0IG91dCA9IFwiXCI7XG4gICAgICAgIGZ1bmN0aW9uIHdyYXBJZk5lZWRlZChleHApIHtcbiAgICAgICAgICAgIGlmIChleHAuY2xhc3MgPT0gZXhwb3J0cy5Qcm9kdWN0VHlwZSB8fCBleHAuY2xhc3MgPT0gU3VtXzEuU3VtVHlwZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8bW8+KDwvbW8+XCIgKyBleHAudG9NYXRoWE1MKCkgKyBcIjxtbz4pPC9tbz5cIjtcbiAgICAgICAgICAgIHJldHVybiBleHAudG9NYXRoWE1MKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRWl0aGVyIHRoaXMgaXMgYSBuZWdhdGlvbiwgb3IgYSBsaXN0IG9mIHByb2R1Y3RzXG4gICAgICAgIC8vIEZpcnN0IHRoZSBuZWdhdGlvbiBjYXNlLi4uXG4gICAgICAgIGlmICh0aGlzLmlzTmVnYXRpb24pIHtcbiAgICAgICAgICAgIG91dCArPSBcIjxtbz4tPC9tbz5cIjtcbiAgICAgICAgICAgIG91dCArPSB3cmFwSWZOZWVkZWQodGhpcy5uZWdhdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGl0J3MgYSBsaXN0IG9mIHByb2R1Y3RzLi4uXG4gICAgICAgIGNvbnN0IGZpcnN0RmFjdG9yID0gdGhpcy5mYWN0b3JzWzBdO1xuICAgICAgICBvdXQgKz0gd3JhcElmTmVlZGVkKGZpcnN0RmFjdG9yKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmZhY3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBmYWN0b3IgPSB0aGlzLmZhY3RvcnNbaV07XG4gICAgICAgICAgICBsZXQgbmVlZHNEb3QgPSAoZmFjdG9yLmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZSAmJiB0aGlzLmZhY3RvcnNbaSAtIDFdLmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZSlcbiAgICAgICAgICAgICAgICB8fCAoZmFjdG9yIGluc3RhbmNlb2YgUHJvZHVjdCAmJiBmYWN0b3IuaXNOZWdhdGlvbikgLy8gSWYgdGhlcmUncyBhIG5lZ2F0aXZlIHNpZ24sIGdldCBhIGRvdFxuICAgICAgICAgICAgICAgIHx8IChmYWN0b3IgaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlciAmJiBmYWN0b3IudmFsdWUgPCAxKTtcbiAgICAgICAgICAgIGlmIChuZWVkc0RvdClcbiAgICAgICAgICAgICAgICBvdXQgKz0gXCI8bW8+wrc8L21vPlwiO1xuICAgICAgICAgICAgb3V0ICs9IHdyYXBJZk5lZWRlZChmYWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIE51bWJlciBvZiBuZWdhdGl2ZSBpbnRlZ2VyIHByb2R1Y3RzLlxuICAgICAqL1xuICAgIG51bU5lZ2F0aXZlcygpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5mYWN0b3JzLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgICBpZiAoZiBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKVxuICAgICAgICAgICAgICAgIGlmIChmLnZhbHVlIDwgMClcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGxldCBvdXQgPSBcIlwiO1xuICAgICAgICBmb3IgKGNvbnN0IGV4cCBvZiB0aGlzLmZhY3RvcnMpIHtcbiAgICAgICAgICAgIGlmIChleHAgaW5zdGFuY2VvZiBQcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IFwiKFwiICsgZXhwLnRvU3RyaW5nKCkgKyBcIilcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dCArPSBleHAudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91dCArPSBcIsK3XCI7XG4gICAgICAgIH1cbiAgICAgICAgb3V0ID0gb3V0LnN1YnN0cmluZygwLCBvdXQubGVuZ3RoIC0gMSk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIGdldCBoYXNoKCkge1xuICAgICAgICByZXR1cm4gXCJQcm9kdWN0XCIgKyB0aGlzLmZhY3RvcnMubWFwKGUgPT4gZS5oYXNoKS5qb2luKCk7XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IDIgZWxlbWVudHMsIG9yZGVyIG1hdHRlcnNcbiAgICBmYWN0b3JzO1xuICAgIGNsYXNzID0gZXhwb3J0cy5Qcm9kdWN0VHlwZTtcbiAgICBpc1JlZHVjaWJsZTtcbiAgICBnZXQgcmVkdWNlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFjdG9ycy5tYXAoZSA9PiBlLnJlZHVjZWQpLnJlZHVjZSgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIEludGVnZXJfMS5JbnRlZ2VyLm9mKGEucmVkdWNlZC52YWx1ZSAqIGIucmVkdWNlZC52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPbmx5IDEgbmVnYXRpdmUgaW50ZWdlclxuICAgICAqIEludGVnZXIgZmFjdG9ycyBhcmUgZmlyc3RcbiAgICAgKiBObyBmYWN0b3IgZXF1YWxzIDFcbiAgICAgKi9cbiAgICBpc0hlYWx0aHk7XG4gICAgaXNDb25zdGFudDtcbn1cbmV4cG9ydHMuUHJvZHVjdCA9IFByb2R1Y3Q7XG5leHBvcnRzLlByb2R1Y3RUeXBlID0gXCJQcm9kdWN0XCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMub3JkZXJUZXJtcyA9IGV4cG9ydHMuU3VtVHlwZSA9IGV4cG9ydHMuU3VtID0gdm9pZCAwO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi4vdXRpbC9hc3NlcnRcIik7XG5jb25zdCBFeHByZXNzaW9uXzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uXCIpO1xuY29uc3QgSW50ZWdlcl8xID0gcmVxdWlyZShcIi4vSW50ZWdlclwiKTtcbmNvbnN0IFByb2R1Y3RfMSA9IHJlcXVpcmUoXCIuL1Byb2R1Y3RcIik7XG5jb25zdCBWYXJpYWJsZV8xID0gcmVxdWlyZShcIi4vVmFyaWFibGVcIik7XG4vKipcbiAqIEV4cHJlc3Npb24gcmVwcmVzZW50aW5nIHRoZSBzdW0gb2YgMiBvciBtb3JlIHRlcm1zLlxuICovXG5jbGFzcyBTdW0gZXh0ZW5kcyBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbiB7XG4gICAgLyoqXG4gICAgICogRmFjdG9yeSBtZXRob2QgY29uc250cnVjdG9yLlxuICAgICAqIEBwYXJhbSB0ZXJtcyBDb250YWlucyBhdCBsZWFzdCAyIGVsZW1lbnRzXG4gICAgICovXG4gICAgc3RhdGljIG9mKHRlcm1zKSB7XG4gICAgICAgIGNvbnN0IGhhc2ggPSB0ZXJtcy5tYXAodCA9PiB0Lmhhc2gpLmpvaW4oXCJcIik7XG4gICAgICAgIGlmICghU3VtLmluc3RhbmNlcy5oYXMoaGFzaCkpIHtcbiAgICAgICAgICAgIFN1bS5pbnN0YW5jZXMuc2V0KGhhc2gsIG5ldyBTdW0odGVybXMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU3VtLmluc3RhbmNlcy5nZXQoaGFzaCk7XG4gICAgfVxuICAgIHN0YXRpYyBpbnN0YW5jZXMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3RydWN0b3IodGVybXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGVybXMubGVuZ3RoID49IDIsIFwiQ3JlYXRpbmcgc3VtIHdpdGggbGVzcyB0aGFuIDIgdGVybXMuXCIpO1xuICAgICAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gICAgICAgIHRoaXMuaXNSZWR1Y2libGUgPSB0aGlzLnRlcm1zLm1hcCh0ID0+IHQuaXNSZWR1Y2libGUgfHwgdC5jbGFzcyA9PSBJbnRlZ2VyXzEuSW50ZWdlclR5cGUpLnJlZHVjZSgoYSwgYikgPT4gYSAmJiBiKTtcbiAgICAgICAgdGhpcy5pc0hlYWx0aHkgPSB0aGlzLmRldGVybWluZUhlYWx0aCgpO1xuICAgICAgICB0aGlzLmlzQ29uc3RhbnQgPSB0aGlzLnRlcm1zLm1hcCh0ID0+IHQuaXNDb25zdGFudCkucmVkdWNlKChhLCBiKSA9PiBhICYmIGIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbmV3IEV4cHJlc3Npb24gd2l0aG91dCB0aGUgZ2l2ZW4gdGVybS5cbiAgICAgKiBJZiB0aGUgc3VtIGNvbnRhaW5zIHRoZSB0ZXJtIG11bHRpcGxlIHRpbWVzLFxuICAgICAqIG9ubHkgcmVtb3ZlcyBvbmUuIElmIGl0IGRvZXNuJ3QgY29udGFpbiB0aGUgdGVybSxcbiAgICAgKiByZXR1cm5zIGl0c2VsZi5cbiAgICAgKiBAcGFyYW0gdGVybSBBIHRlcm0gaW4gdGhpcyBzdW0uXG4gICAgICovXG4gICAgd2l0aG91dCh0ZXJtKSB7XG4gICAgICAgIGNvbnN0IG5ld1Rlcm1zID0gWy4uLnRoaXMudGVybXNdO1xuICAgICAgICBjb25zdCBpbmRleCA9IG5ld1Rlcm1zLmZpbmRJbmRleCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gdGVybTtcbiAgICAgICAgfSk7XG4gICAgICAgIG5ld1Rlcm1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGlmIChuZXdUZXJtcy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ld1Rlcm1zWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdW0ub2YobmV3VGVybXMpO1xuICAgIH1cbiAgICB0b01hdGhYTUwoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHdyYXBJZk5lZWRlZChleHApIHtcbiAgICAgICAgICAgIGlmIChleHAuY2xhc3MgPT0gZXhwb3J0cy5TdW1UeXBlKVxuICAgICAgICAgICAgICAgIHJldHVybiBcIjxtbz4oPC9tbz5cIiArIGV4cC50b01hdGhYTUwoKSArIFwiPG1vPik8L21vPlwiO1xuICAgICAgICAgICAgcmV0dXJuIGV4cC50b01hdGhYTUwoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgb3V0ID0gd3JhcElmTmVlZGVkKHRoaXMudGVybXNbMF0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMudGVybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm1zW2ldO1xuICAgICAgICAgICAgLy8gU3VidHJhY3QgbmVnYXRpdmUgdGVybXMgaW5zdGVhZCBvZiBhZGRpbmcgbmVnYXRpdmVzXG4gICAgICAgICAgICBpZiAodGVybSBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0ICYmIHRlcm0uaXNOZWdhdGlvbikge1xuICAgICAgICAgICAgICAgIG91dCArPSBcIjxtbz4tPC9tbz5cIiArIHdyYXBJZk5lZWRlZCh0ZXJtLm5lZ2F0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRlcm0gaW5zdGFuY2VvZiBJbnRlZ2VyXzEuSW50ZWdlciAmJiB0ZXJtLnZhbHVlIDwgMCkge1xuICAgICAgICAgICAgICAgIG91dCArPSBcIjxtbz4tPC9tbz5cIiArIHdyYXBJZk5lZWRlZCh0ZXJtLmJ1dFBvc2l0aXZlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IFwiPG1vPis8L21vPlwiICsgd3JhcElmTmVlZGVkKHRoaXMudGVybXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBsZXQgb3V0ID0gXCJcIjtcbiAgICAgICAgZm9yIChjb25zdCBleHAgb2YgdGhpcy50ZXJtcykge1xuICAgICAgICAgICAgb3V0ICs9IGV4cC50b1N0cmluZygpICsgXCIrXCI7XG4gICAgICAgIH1cbiAgICAgICAgb3V0ID0gb3V0LnN1YnN0cmluZygwLCBvdXQubGVuZ3RoIC0gMSk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIGdldCBoYXNoKCkge1xuICAgICAgICByZXR1cm4gXCJTdW1cIiArIHRoaXMudGVybXMubWFwKGUgPT4gZS5oYXNoKS5qb2luKCk7XG4gICAgfVxuICAgIGNsYXNzID0gZXhwb3J0cy5TdW1UeXBlO1xuICAgIC8qKlxuICAgICAqIE9yZGVyZWQsIGRvbid0IGNoYW5nZSBpdC5cbiAgICAgKi9cbiAgICB0ZXJtcztcbiAgICBpc1JlZHVjaWJsZTtcbiAgICBnZXQgcmVkdWNlZCgpIHtcbiAgICAgICAgcmV0dXJuIEludGVnZXJfMS5JbnRlZ2VyLm9mKHRoaXMudGVybXMubWFwKHQgPT4gdC5yZWR1Y2VkLnZhbHVlKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpZ3VyZSBvdXQgaWYgd2UncmUgaGVhbHRoeS5cbiAgICAgKi9cbiAgICBkZXRlcm1pbmVIZWFsdGgoKSB7XG4gICAgICAgIGlmICh0aGlzLnRlcm1zLmZpbHRlcih0ID0+IHQuaXNSZWR1Y2libGUgfHwgdCBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKS5sZW5ndGggPiAxKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0aGlzLnRlcm1zLmZvckVhY2godCA9PiB7XG4gICAgICAgICAgICBpZiAodCBpbnN0YW5jZW9mIEludGVnZXJfMS5JbnRlZ2VyKVxuICAgICAgICAgICAgICAgIGlmICh0LnZhbHVlID09IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGVybXMuZm9yRWFjaCh0ZXJtID0+IHtcbiAgICAgICAgICAgIGlmICghdGVybS5pc0hlYWx0aHkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY29ycmVjdE9yZGVyaW5nID0gb3JkZXJUZXJtcyguLi50aGlzLnRlcm1zKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRlcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50ZXJtc1tpXSAhPT0gY29ycmVjdE9yZGVyaW5nW2ldKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvL1RPRE86IENoZWNrIGNvbmRpdGlvbiAzXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHN1bSBpcyBoZWFsdGh5IGlmZjpcbiAgICAgKlxuICAgICAqIDEuIENvbnRhaW5zIGEgbWF4IG9mIDEgcmVkdWNpYmxlIHRlcm0uXG4gICAgICogMi4gUHJvZHVjdHMgd2l0aCBpbnRlZ2VyIGNvZWZmaWNpZW50cyBhcmUgY29tYmluZWQuXG4gICAgICogIGEgKyAyYSA9IDNhLFxuICAgICAqICBhICsgLWEgPSAwXG4gICAgICogMy4gTm8gdGVybSBpcyAwXG4gICAgICogNC4gQWxsIHRlcm1zIGFyZSBoZWFsdGh5LlxuICAgICAqIDUuIFRlcm1zIGFyZSBvcmRlcmVkIGNvcnJlY3RseS5cbiAgICAgKi9cbiAgICBpc0hlYWx0aHk7XG4gICAgaXNDb25zdGFudDtcbn1cbmV4cG9ydHMuU3VtID0gU3VtO1xuZXhwb3J0cy5TdW1UeXBlID0gXCJTdW1cIjtcbi8qKlxuICogUmV0dXJucyB0aGUgZ2l2ZW4gdGVybXMgb3JkZXJlZCBjb3JyZWN0bHkgdG9cbiAqIGJlIHBsYWNlZCBpbiBhIFN1bS4gQWx0ZXJzIHRoZSBnaXZlbiBhcnJheS5cbiAqIEBwYXJhbSB0ZXJtc1xuICovXG5mdW5jdGlvbiBvcmRlclRlcm1zKC4uLnRlcm1zKSB7XG4gICAgLy8gQSBub3RlIGFib3V0IHRoZSBzb3J0IGZ1bmN0aW9uIGJjIHRoZSBkb2N1bWVudGF0aW9uIGlzIGNyeXB0aWNcbiAgICAvLyBJZiBhIHNob3VsZCBiZSBwdXQgYmVmb3JlIGIgaW4gdGhlIHN1bSwgcmV0dXJuIGEgbmVnYXRpdmUgdmFsdWVcbiAgICByZXR1cm4gdGVybXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAvLyBWYXJpYWJsZXMgYmVmb3JlIEludGVnZXJzXG4gICAgICAgIGlmIChhLmNsYXNzID09IEludGVnZXJfMS5JbnRlZ2VyVHlwZSAmJiAoYi5jbGFzcyA9PSBWYXJpYWJsZV8xLlZhcmlhYmxlVHlwZSB8fCAoYiBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0ICYmIGIuaXNOZWdhdGlvbiAmJiBiLm5lZ2F0aW9uLmNsYXNzID09IFZhcmlhYmxlXzEuVmFyaWFibGVUeXBlKSkpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoYS5jbGFzcyA9PSBWYXJpYWJsZV8xLlZhcmlhYmxlVHlwZSB8fCAoYSBpbnN0YW5jZW9mIFByb2R1Y3RfMS5Qcm9kdWN0ICYmIGEuaXNOZWdhdGlvbiAmJiBhLm5lZ2F0aW9uLmNsYXNzID09IFZhcmlhYmxlXzEuVmFyaWFibGVUeXBlKSkgJiYgYi5jbGFzcyA9PSBJbnRlZ2VyXzEuSW50ZWdlclR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9KTtcbn1cbmV4cG9ydHMub3JkZXJUZXJtcyA9IG9yZGVyVGVybXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVmFyaWFibGVUeXBlID0gZXhwb3J0cy5WYXJpYWJsZSA9IHZvaWQgMDtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuL0V4cHJlc3Npb25cIik7XG5jbGFzcyBWYXJpYWJsZSBleHRlbmRzIEV4cHJlc3Npb25fMS5FeHByZXNzaW9uIHtcbiAgICBzdGF0aWMgb2Yoc3ltYm9sKSB7XG4gICAgICAgIGlmIChWYXJpYWJsZS5pbnN0YW5jZXMuZ2V0KHN5bWJvbCkgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBWYXJpYWJsZS5pbnN0YW5jZXMuc2V0KHN5bWJvbCwgbmV3IFZhcmlhYmxlKHN5bWJvbCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBWYXJpYWJsZS5pbnN0YW5jZXMuZ2V0KHN5bWJvbCk7XG4gICAgfVxuICAgIHN0YXRpYyBpbnN0YW5jZXMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3RydWN0b3Ioc3ltYm9sKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3ltYm9sID0gc3ltYm9sO1xuICAgIH1cbiAgICBjbGFzcyA9IGV4cG9ydHMuVmFyaWFibGVUeXBlO1xuICAgIHRvTWF0aFhNTCgpIHtcbiAgICAgICAgcmV0dXJuIFwiPG1pPlwiICsgdGhpcy5zeW1ib2wgKyBcIjwvbWk+XCI7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zeW1ib2w7XG4gICAgfVxuICAgIGdldCBoYXNoKCkge1xuICAgICAgICByZXR1cm4gXCJWYXJpYWJsZVwiICsgdGhpcy5zeW1ib2w7XG4gICAgfVxuICAgIHN5bWJvbDtcbiAgICBpc1JlZHVjaWJsZSA9IGZhbHNlO1xuICAgIGdldCByZWR1Y2VkKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJWYXJpYWJsZXMgY2FuJ3QgYmUgcmVkdWNlZCB0byBpbnRlZ2Vycy5cIik7XG4gICAgfVxuICAgIGlzSGVhbHRoeSA9IHRydWU7XG4gICAgaXNDb25zdGFudCA9IGZhbHNlO1xufVxuZXhwb3J0cy5WYXJpYWJsZSA9IFZhcmlhYmxlO1xuZXhwb3J0cy5WYXJpYWJsZVR5cGUgPSBcIlZhcmlhYmxlXCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQXJndW1lbnROb2RlVmlldyA9IHZvaWQgMDtcbmNvbnN0IEdyYXBoTm9kZVZpZXdfMSA9IHJlcXVpcmUoXCIuL0dyYXBoTm9kZVZpZXdcIik7XG4vKipcbiAqIFJlcHJlc2VudHMgYW4gYXJndW1lbnQgbm9kZS5cbiAqL1xuY2xhc3MgQXJndW1lbnROb2RlVmlldyBleHRlbmRzIEdyYXBoTm9kZVZpZXdfMS5HcmFwaE5vZGVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihhcmcpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hcmd1bWVudCA9IGFyZztcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSB0aGlzLmFyZ3VtZW50LmFyZ3VtZW50O1xuICAgIH1cbiAgICBhcmd1bWVudDtcbn1cbmV4cG9ydHMuQXJndW1lbnROb2RlVmlldyA9IEFyZ3VtZW50Tm9kZVZpZXc7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJhcmd1bWVudC1ub2Rldmlld1wiLCBBcmd1bWVudE5vZGVWaWV3LCB7IGV4dGVuZHM6IFwiZGl2XCIgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRWRnZVZpZXcgPSB2b2lkIDA7XG5jb25zdCBBcmd1bWVudF8xID0gcmVxdWlyZShcIi4uL0FyZ3VtZW50XCIpO1xuY29uc3QgSW5mZXJlbmNlXzEgPSByZXF1aXJlKFwiLi4vSW5mZXJlbmNlXCIpO1xuY29uc3QgVUlQcmVmZXJlbmNlc18xID0gcmVxdWlyZShcIi4vVUlQcmVmZXJlbmNlc1wiKTtcbi8qKlxuICogUmVwcmVzZW50cyBhbiBlZGdlIGluIGEgZ3JhcGguXG4gKi9cbmNsYXNzIEVkZ2VWaWV3IGV4dGVuZHMgSFRNTFBhcmFncmFwaEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVkZ2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lZGdlID0gZWRnZS5lO1xuICAgICAgICB0aGlzLmZpcnN0ID0gZWRnZS5uO1xuICAgICAgICB0aGlzLnNlY29uZCA9IGVkZ2UubjE7XG4gICAgICAgIHRoaXMuc3R5bGUud2lkdGggPSBcImZpdC1jb250ZW50XCI7XG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gXCJmaXQtY29udGVudFwiO1xuICAgICAgICB0aGlzLnN0eWxlLnBhZGRpbmcgPSBcIjBcIjtcbiAgICAgICAgdGhpcy5zdHlsZS56SW5kZXggPSBcIi0yXCI7XG4gICAgICAgIHRoaXMuc3R5bGUubWFyZ2luID0gXCIwXCI7XG4gICAgICAgIHRoaXMuc3R5bGUud2hpdGVTcGFjZSA9IFwibm93cmFwXCI7XG4gICAgICAgIHRoaXMuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBVSVByZWZlcmVuY2VzXzEudWlQcmVmZXJlbmNlcy5lZGdlRXF1YWxzQmFja2dyb3VuZENvbG9yO1xuICAgICAgICBVSVByZWZlcmVuY2VzXzEudWlQcmVmZXJlbmNlcy5vblVwZGF0ZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFVJUHJlZmVyZW5jZXNfMS51aVByZWZlcmVuY2VzLmVkZ2VFcXVhbHNCYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBldmVudCA9PiB7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHJvdGF0aW9uIGFuZ2xlIG9mIHZpZXcgd2hpbGUgYWxzb1xuICAgICAqIGxldHRpbmcgaXQga25vdyB0aGUgYW5nbGUgaGFzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHJhZFxuICAgICAqL1xuICAgIHNldEFuZ2xlKHJhZCkge1xuICAgICAgICB0aGlzLnN0eWxlLnJvdGF0ZSA9IFwiXCIgKyByYWQgKyBcInJhZFwiO1xuICAgICAgICAvL3RoaXMudGV4dENvbnRlbnQgPSBcIlwiICsgKHJhZCAqIDIgKiBNYXRoLlBJIC8gMzYwKS50b0ZpeGVkKDIpICsgXCJkZWdcIlxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGVsZW1lbnQgc2NyZWVuIHdpZHRoIGFuZCBlbnN1cmVzIHRleHQgZml0c1xuICAgICAqIGluc2lkZSB0aGUgZWRnZS5cbiAgICAgKi9cbiAgICBzZXQgd2lkdGgodmFsKSB7XG4gICAgICAgIHN1cGVyLnN0eWxlLndpZHRoID0gdmFsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBlbGVtZW50IGlzIGNvbm5jdGVkIHRvIHRoZSBET00uXG4gICAgICovXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmVkZ2UgaW5zdGFuY2VvZiBJbmZlcmVuY2VfMS5JbmZlcmVuY2UpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBcIlwiICsgdGhpcy5lZGdlLnJlbGF0aW9uc2hpcDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmVkZ2UgaW5zdGFuY2VvZiBBcmd1bWVudF8xLkFyZ3VtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gXCJcIiArIHRoaXMuZWRnZS5jbGFpbS5yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9IFwiJ1wiICsgdGhpcy5maXJzdC50b1N0cmluZygpICsgXCInIC0+ICdcIiArIHRoaXMuc2Vjb25kLnRvU3RyaW5nKCkgKyBcIidcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlZGdlO1xuICAgIGZpcnN0O1xuICAgIHNlY29uZDtcbn1cbmV4cG9ydHMuRWRnZVZpZXcgPSBFZGdlVmlldztcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImVkZ2Utdmlld1wiLCBFZGdlVmlldywgeyBleHRlbmRzOiBcInBcIiB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FZGl0YWJsZU1hdGhWaWV3ID0gdm9pZCAwO1xuLyoqXG4gKiBEaXNwbGF5cyBtYXRoIGFuZCBpcyBlZGl0YWJsZS5cbiAqL1xuY2xhc3MgRWRpdGFibGVNYXRoVmlldyBleHRlbmRzIEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgfVxuICAgIHNldCB2YWx1ZShlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gZTtcbiAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBcIjxtYXRoIGRpc3BsYXk9J2Jsb2NrJz5cIiArIChlPy50b01hdGhYTUwoKSA/PyBcIlwiKSArIFwiPC9tYXRoPlwiO1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGwgPT4gbCh0aGlzLl92YWx1ZSkpO1xuICAgICAgICBNYXRoSmF4LnR5cGVzZXQoW3RoaXNdKTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExpc3RlbmVyIHdpbGwgYmUgY2FsbGVkIHdoZW5ldmVyIHRoZSBtYXRoXG4gICAgICogaW4gdGhlIHZpZXcgaXMgZWRpdGVkLlxuICAgICAqIEBwYXJhbSBsXG4gICAgICovXG4gICAgYWRkRWRpdExpc3RlbmVyKGwpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsKTtcbiAgICB9XG4gICAgbGlzdGVuZXJzID0gW107XG4gICAgX3ZhbHVlID0gbnVsbDtcbn1cbmV4cG9ydHMuRWRpdGFibGVNYXRoVmlldyA9IEVkaXRhYmxlTWF0aFZpZXc7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJlZGl0YWJsZS1tYXRodmlld1wiLCBFZGl0YWJsZU1hdGhWaWV3LCB7IGV4dGVuZHM6IFwiZGl2XCIgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXhwcmVzc2lvbk5vZGVWaWV3ID0gdm9pZCAwO1xuY29uc3QgRWRpdGFibGVNYXRoVmlld18xID0gcmVxdWlyZShcIi4vRWRpdGFibGVNYXRoVmlld1wiKTtcbmNvbnN0IEdyYXBoTm9kZVZpZXdfMSA9IHJlcXVpcmUoXCIuL0dyYXBoTm9kZVZpZXdcIik7XG4vKipcbiAqIEEgZ3JhcGggbm9kZSB2aWV3IGZvciBleHByZXNzaW9uIG5vZGVzLlxuICovXG5jbGFzcyBFeHByZXNzaW9uTm9kZVZpZXcgZXh0ZW5kcyBHcmFwaE5vZGVWaWV3XzEuR3JhcGhOb2RlVmlldyB7XG4gICAgY29uc3RydWN0b3Iobm9kZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgICAgICB0aGlzLmVkaXRhYmxlTWF0aFZpZXcgPSBuZXcgRWRpdGFibGVNYXRoVmlld18xLkVkaXRhYmxlTWF0aFZpZXcoKTtcbiAgICAgICAgdGhpcy5lZGl0YWJsZU1hdGhWaWV3LnZhbHVlID0gdGhpcy5ub2RlO1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuZWRpdGFibGVNYXRoVmlldyk7XG4gICAgICAgIGlmICghbm9kZS5pc0hlYWx0aHkpXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB9XG4gICAgbm9kZTtcbiAgICBlZGl0YWJsZU1hdGhWaWV3O1xufVxuZXhwb3J0cy5FeHByZXNzaW9uTm9kZVZpZXcgPSBFeHByZXNzaW9uTm9kZVZpZXc7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJleHByZXNzaW9uLW5vZGV2aWV3XCIsIEV4cHJlc3Npb25Ob2RlVmlldywgeyBleHRlbmRzOiBcImRpdlwiIH0pO1xuY29uc3QgY29sb3JVbmhlYWx0aHlOb2RlcyA9IHRydWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR3JhcGhOb2RlVmlldyA9IHZvaWQgMDtcbi8qKlxuICogQW4gaHRtbCBlbGVtZW50IHRoYXQgcmVwcmVzZW50cyBhIG1hdGggZ3JhcGggbm9kZS5cbiAqL1xuY2xhc3MgR3JhcGhOb2RlVmlldyBleHRlbmRzIEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgLy90aGlzLnN0eWxlLmJvcmRlciA9IFwiYmx1ZSBkb3R0ZWQgMC4yY2hcIlxuICAgICAgICB0aGlzLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMWNoXCI7XG4gICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJsaWdodGJsdWVcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5wYWRkaW5nID0gXCIxY2hcIjtcbiAgICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IFwiZml0LWNvbnRlbnRcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBcImZpdC1jb250ZW50XCI7XG4gICAgICAgIHRoaXMuc3R5bGUud2hpdGVTcGFjZSA9IFwibm93cmFwXCI7XG4gICAgfVxufVxuZXhwb3J0cy5HcmFwaE5vZGVWaWV3ID0gR3JhcGhOb2RlVmlldztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51aVByZWZlcmVuY2VzID0gdm9pZCAwO1xuY2xhc3MgVUlQcmVmZXJlbmNlcyB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIEZ1bmN0aW9uIGNhbGxlZCB3aGVuZXZlciBhIHVpIHByZWZlcmVuY2VcbiAgICAgKiBpcyBjaGFuZ2VkLlxuICAgICAqL1xuICAgIG9uVXBkYXRlKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgIH1cbiAgICAvLyBHZXR0ZXJzIGFuZCBTZXR0ZXJzXG4gICAgLyoqXG4gICAgICogQmFja2dyb3VuZCBjb2xvciBvZiBhIGdyYXBoIGVkZ2UgZGVub3RpbmdcbiAgICAgKiBlcXVhbGl0eSBiZXR3ZWVuIHR3byBleHByZXNzaW9ucy5cbiAgICAgKiBDc3MgdmFsdWUuXG4gICAgICovXG4gICAgZ2V0IGVkZ2VFcXVhbHNCYWNrZ3JvdW5kQ29sb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lZGdlRXF1YWxzQmFja2dyb3VuZENvbG9yO1xuICAgIH1cbiAgICBzZXQgZWRnZUVxdWFsc0JhY2tncm91bmRDb2xvcih2YWwpIHtcbiAgICAgICAgdGhpcy5fZWRnZUVxdWFsc0JhY2tncm91bmRDb2xvciA9IHZhbDtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MuZm9yRWFjaChjID0+IGMoKSk7XG4gICAgfVxuICAgIC8vIFByZWZlcmVuY2UgVmFsdWVzXG4gICAgX2VkZ2VFcXVhbHNCYWNrZ3JvdW5kQ29sb3IgPSBcIm5vbmVcIjtcbiAgICBjYWxsYmFja3MgPSBbXTtcbn1cbmV4cG9ydHMudWlQcmVmZXJlbmNlcyA9IG5ldyBVSVByZWZlcmVuY2VzKCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuV2ViR3JhcGhWaWV3ID0gdm9pZCAwO1xuY29uc3QgQXJndW1lbnRfMSA9IHJlcXVpcmUoXCIuLi9Bcmd1bWVudFwiKTtcbmNvbnN0IEV4cHJlc3Npb25fMSA9IHJlcXVpcmUoXCIuLi9leHByZXNzaW9ucy9FeHByZXNzaW9uXCIpO1xuY29uc3QgR3JhcGhNaW5pcHVsYXRvcl8xID0gcmVxdWlyZShcIi4uL0dyYXBoTWluaXB1bGF0b3JcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2Fzc2VydFwiKTtcbmNvbnN0IFRvdWNoR2VzdHVyZVJlY29nbml6ZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9Ub3VjaEdlc3R1cmVSZWNvZ25pemVyXCIpO1xuY29uc3QgRWRnZVZpZXdfMSA9IHJlcXVpcmUoXCIuL0VkZ2VWaWV3XCIpO1xuY29uc3QgRXhwcmVzc2lvbk5vZGVWaWV3XzEgPSByZXF1aXJlKFwiLi9FeHByZXNzaW9uTm9kZVZpZXdcIik7XG5jb25zdCBBcmd1bWVudE5vZGVWaWV3XzEgPSByZXF1aXJlKFwiLi9Bcmd1bWVudE5vZGVWaWV3XCIpO1xuLyoqXG4gKiBBIHVpIGVsZW1lbnQgdGhhdCB3aWxsIGRpc3BsYXkgYSBtYXRoIGdyYXBoIGluIGEgd2ViLlxuICovXG5jbGFzcyBXZWJHcmFwaFZpZXcgZXh0ZW5kcyBIVE1MRGl2RWxlbWVudCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGdyYXBoIE11c3QgYmUgZnVsbHkgY29ubmVjdGVkLlxuICAgICAqIEBwYXJhbSByb290cyBOb24tZW1wdHkuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZ3JhcGgsIHJvb3RzLCBjb25maWcgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5ncmFwaCA9IGdyYXBoO1xuICAgICAgICB0aGlzLm5vZGVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLm9mZnNldFggPSAwO1xuICAgICAgICB0aGlzLm9mZnNldFkgPSAwO1xuICAgICAgICB0aGlzLm5vZGVQb3NpdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZWRnZVBvc2l0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5lZGdlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yb290Tm9kZXMgPSBuZXcgU2V0KHJvb3RzKTtcbiAgICAgICAgdGhpcy5yaW5nRWxlbWVudHMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMucmluZ1Bvc2l0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAgICAgaWYgKGNvbmZpZyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0FyZ3VtZW50cyA9IGNvbmZpZy5zaG93QXJndW1lbnRzO1xuICAgICAgICAgICAgdGhpcy5kcmF3RWRnZUxpbmVzID0gY29uZmlnLmRyYXdFZGdlTGluZXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHlsZS5jbGlwUGF0aCA9IFwicG9seWdvbigwJSAwJSwgMTAwJSAwJSwgMTAwJSAxMDAlLCAwJSAxMDAlKVwiO1xuICAgICAgICB0aGlzLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgICAgICB0aGlzLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudG91Y2hEb3duID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubW91c2VEb3duKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0WCArPSBldmVudC5tb3ZlbWVudFggLyB0aGlzLnNjYWxlO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXRZICs9IGV2ZW50Lm1vdmVtZW50WSAvIHRoaXMuc2NhbGU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9mZnNldCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlID0gTWF0aC5wb3coMC44LCBldmVudC5kZWx0YVkgLyAzNjApICogdGhpcy5zY2FsZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT2Zmc2V0KCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2VzdHVyZVJlY29nbml6ZXIgPSBuZXcgVG91Y2hHZXN0dXJlUmVjb2duaXplcl8xLlRvdWNoR2VzdHVyZVJlY29nbml6ZXIoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hkb3duXCIsIHRoaXMuZ2VzdHVyZVJlY29nbml6ZXIucHJvY2Vzc1RvdWNoRG93bik7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuZ2VzdHVyZVJlY29nbml6ZXIucHJvY2Vzc1RvdWNoRW5kKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgdGhpcy5nZXN0dXJlUmVjb2duaXplci5wcm9jZXNzVG91Y2hDYW5jZWwpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5nZXN0dXJlUmVjb2duaXplci5wcm9jZXNzVG91Y2hNb3ZlKTtcbiAgICAgICAgdGhpcy5nZXN0dXJlUmVjb2duaXplci5hZGRQaW5jaExpc3RlbmVyKChjZW50ZXIsIHNjYWxlRGVsdGEsIGZpbmdlcnMpID0+IHtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVwT2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBpZiB0aGUgdmlldyBzaG91bGQgc2hvdyBhcmd1bWVudCBub2RlcyBhcyBub2Rlcy5cbiAgICAgKiBGYWxzZSBieSBkZWZhdWx0LlxuICAgICAqIEBwYXJhbSB2YWxcbiAgICAgKi9cbiAgICBzZXRTaG93QXJndW1lbnRzKHZhbCkge1xuICAgICAgICB0aGlzLnNob3dBcmd1bWVudHMgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlYWRHcmFwaCgpO1xuICAgICAgICB0aGlzLmFycmFuZ2UoKTtcbiAgICAgICAgdGhpcy51cGRhdGVPZmZzZXQoKTtcbiAgICB9XG4gICAgZ2V0IGNlbnRlcigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHRoaXMub2Zmc2V0V2lkdGggLyAyLFxuICAgICAgICAgICAgeTogdGhpcy5vZmZzZXRIZWlnaHQgLyAyLFxuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGb2xsb3dzIHRoZSBzaG93QXJndW1lbnQgc2V0dGluZy5cbiAgICAgKiBQb3B1bGF0ZXMgdGhpcy5ub2RlcywgdGhpcy5lZGdlcyxcbiAgICAgKiBhZGRzIHRoZSBjcmVhdGVkIHZpZXdzIHRvIHRoZSBzaGFkb3cgZG9tXG4gICAgICogdG8gbWF0Y2ggdGhlIGdyYXBoLlxuICAgICAqIFJlbW92ZXMgYW55IHByZS1leGlzdGluZyBlbGVtZW50cyBmcm9tIHRoZSBzaGFkb3cgZG9tLlxuICAgICAqL1xuICAgIHJlYWRHcmFwaCgpIHtcbiAgICAgICAgLy8gQ2xlYXIgZXhpc3RpbmdcbiAgICAgICAgdGhpcy5ub2Rlcy5mb3JFYWNoKCh2aWV3LCBub2RlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHZpZXcpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ub2Rlcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmVkZ2VzLmZvckVhY2goKHZpZXcsIGVkZ2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodmlldyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVkZ2VzLmNsZWFyKCk7XG4gICAgICAgIC8vIEZldGNoIG5vZGVzXG4gICAgICAgIHRoaXMuZ3JhcGguZ2V0Tm9kZXMoKS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBFeHByZXNzaW9uXzEuRXhwcmVzc2lvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgRXhwcmVzc2lvbk5vZGVWaWV3XzEuRXhwcmVzc2lvbk5vZGVWaWV3KG5vZGUpO1xuICAgICAgICAgICAgICAgIHZpZXcuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rlcy5zZXQobm9kZSwgdmlldyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmQodmlldyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgQXJndW1lbnRfMS5Bcmd1bWVudCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zaG93QXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgY29uc3QgdmlldyA9IG5ldyBBcmd1bWVudE5vZGVWaWV3XzEuQXJndW1lbnROb2RlVmlldyhub2RlKTtcbiAgICAgICAgICAgICAgICB2aWV3LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZXMuc2V0KG5vZGUsIHZpZXcpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kKHZpZXcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdyYXBoIGNvbnRhaW5zIG5vZGUgV2ViR3JhcGhWaWV3IGNhbid0IHByb2Nlc3MuXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gRmV0Y2ggZWRnZXNcbiAgICAgICAgR3JhcGhNaW5pcHVsYXRvcl8xLkdyYXBoTWluaXB1bGF0b3IuZHJvcFN5bW1ldHJpYyh0aGlzLmdyYXBoLmdldEVkZ2VzKCkpLmZpbHRlcihlZGdlID0+IHtcbiAgICAgICAgICAgIC8vIE9ubHkgY29uc2lkZXIgZWRnZXMgZm9yIHdoaWNoIHdlIGhhdmUgYm90aCBlbmRwb2ludHMgb24gdGhlIHZpZXdcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVzLmhhcyhlZGdlLm4pICYmIHRoaXMubm9kZXMuaGFzKGVkZ2UubjEpO1xuICAgICAgICB9KS5mb3JFYWNoKGVkZ2UgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmlldyA9IG5ldyBFZGdlVmlld18xLkVkZ2VWaWV3KGVkZ2UpO1xuICAgICAgICAgICAgdmlldy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgIHRoaXMuZWRnZXMuc2V0KGVkZ2UsIHZpZXcpO1xuICAgICAgICAgICAgdGhpcy5hcHBlbmQodmlldyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlcE9rKCk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLnJlYWRHcmFwaCgpO1xuICAgICAgICB0aGlzLmFycmFuZ2UoKTtcbiAgICAgICAgdGhpcy51cGRhdGVPZmZzZXQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGljayBwbGFjZXMgZm9yIGFsbCB0aGUgbm9kZXMvZWRnZXMgb24gdGhlIHNjcmVlbi5cbiAgICAgKiBQb3B1bGF0ZXMgdGhlIHBvc2l0aW9uXyogcmVwIHZhcnMuXG4gICAgICovXG4gICAgYXJyYW5nZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlUG9zaXRpb25zLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuZWRnZVBvc2l0aW9ucy5jbGVhcigpO1xuICAgICAgICB0aGlzLnJpbmdQb3NpdGlvbnMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yaW5nRWxlbWVudHMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQoZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJpbmdFbGVtZW50cy5jbGVhcigpO1xuICAgICAgICAvLyBQbGFjZSBub2RlcyBvbiBhIHNlcmllcyBvZiByaW5ncyBmcm9tIHRoZSBjZW50ZXIgdXNpbmcgdGhlaXIgZGVwdGggaW4gdGhlIGdyYXBoXG4gICAgICAgIGNvbnN0IGxldmVscyA9IEdyYXBoTWluaXB1bGF0b3JfMS5HcmFwaE1pbmlwdWxhdG9yLmdldExldmVscyh0aGlzLmdyYXBoLCB0aGlzLnJvb3ROb2RlcywgKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgRXhwcmVzc2lvbl8xLkV4cHJlc3Npb24pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgQXJndW1lbnRfMS5Bcmd1bWVudClcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93QXJndW1lbnRzO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5ldyB0eXBlIG9mIG5vZGVcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgbWF4RGVwdGggPSAwO1xuICAgICAgICBsZXZlbHMuZm9yRWFjaCgoXywgZGVwdGgpID0+IHtcbiAgICAgICAgICAgIG1heERlcHRoID0gTWF0aC5tYXgobWF4RGVwdGgsIGRlcHRoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHsgeDogKHRoaXMuY2xpZW50V2lkdGggLyAyKSwgeTogdGhpcy5jbGllbnRIZWlnaHQgLyAyIH07XG4gICAgICAgIGxldCBsYXN0UmFkaXVzID0gMDsgLy9weFxuICAgICAgICBmb3IgKGxldCBkZXB0aCA9IDA7IGRlcHRoIDwgbWF4RGVwdGggKyAxOyBkZXB0aCsrKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlcyA9IGxldmVscy5nZXQoZGVwdGgpO1xuICAgICAgICAgICAgLy8gT3JnYW5pemUgdGhlIHJvb3Qgbm9kZXMgb24gYSBjaXJjbGUgYXJvdW5kIHRoZSBjZW50ZXJcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBTaXplID0gKDIgKiBNYXRoLlBJKSAvIG5vZGVzLnNpemU7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGN1bGF0aW5nIHRoZSByYWRpdXMgb2YgdGhlIGNpcmNsZVxuICAgICAgICAgICAgICogU3VwcG9zZSBldmVyeSByb290IG5vZGUgb24gdGhlIHN0YXJ0aW5nIGNpcmNsZSByZXF1aXJlc1xuICAgICAgICAgICAgICogYSBjaXJjdWxhciBzcGFjZSB0byBiZSBkcmF3biB3aXRoIHJhZGl1cyBub2RlUmFkaXVzXG4gICAgICAgICAgICAgKiBBIHN0YXJ0aW5nIGNpcmNsZSB3aXRoIG4gb2YgdGhlc2Ugbm9kZXMgd291bGQgcmVxdWlyZSBhXG4gICAgICAgICAgICAgKiBjaXJjdW1mZXJlbmNlIG9mIG4gKiAybm9kZVJhZGl1cy5cbiAgICAgICAgICAgICAqIFRoZSBjaXJjdW1mZXJlbmNlIG9mIGEgY2lyY2xlIGNhbiBiZSBleHByZXNzZWRcbiAgICAgICAgICAgICAqIGFzIDIqcGkqclxuICAgICAgICAgICAgICogPT4gciA9IG4gKiAyICogc21hbGxSIC8gKDIgKiBwaSlcbiAgICAgICAgICAgICAqICAgICAgPSBuICogc21hbGxSIC8gcGlcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY29uc3Qgbm9kZVJhZGl1cyA9IDcwOyAvLyBwaXhlbHNcbiAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgubWF4KG5vZGVzLnNpemUgKiBub2RlUmFkaXVzIC8gTWF0aC5QSSwgbGFzdFJhZGl1cyArICgzICogbm9kZVJhZGl1cykpO1xuICAgICAgICAgICAgbGFzdFJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgICAgIGNvbnN0IG5zID0gWy4uLm5vZGVzXTsgLy8gVE9ETywgYXNzaWduIGEgbWVhbmluZ2Z1bCBvcmRlcmluZ1xuICAgICAgICAgICAgbnMuZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5ub2Rlcy5nZXQobm9kZSk7XG4gICAgICAgICAgICAgICAgLy92aWV3LnN0eWxlLndpZHRoID0gXCJcIiArIHNtYWxsUiArIFwicHhcIlxuICAgICAgICAgICAgICAgIC8vdmlldy5zdHlsZS5oZWlnaHQgPSBcIlwiICsgc21hbGxSICsgXCJweFwiXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjYXJ0ZXNpYW4gcG9pbnQgZnJvbSB0aGUgcmFkaXVzIGFuZCBhbmdsZVxuICAgICAgICAgICAgICAgIGNvbnN0IHggPSByYWRpdXMgKiBNYXRoLmNvcyhzdGVwU2l6ZSAqIGluZGV4KSArIGNlbnRlci54O1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSByYWRpdXMgKiBNYXRoLnNpbihzdGVwU2l6ZSAqIGluZGV4KSArIGNlbnRlci55O1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZVBvc2l0aW9ucy5zZXQodmlldywgUG9pbnQoeCwgeSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCByaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHJpbmcuc3R5bGUud2lkdGggPSBcIlwiICsgKDIgKiByYWRpdXMpICsgXCJweFwiO1xuICAgICAgICAgICAgcmluZy5zdHlsZS5oZWlnaHQgPSBcIlwiICsgKDIgKiByYWRpdXMpICsgXCJweFwiO1xuICAgICAgICAgICAgcmluZy5zdHlsZS5ib3JkZXIgPSBcImxpZ2h0Z3JheSBzb2xpZCAwLjNjaFwiO1xuICAgICAgICAgICAgcmluZy5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwMCVcIjtcbiAgICAgICAgICAgIHJpbmcuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICByaW5nLnN0eWxlLnpJbmRleCA9IFwiLTEwXCI7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHJpbmcpO1xuICAgICAgICAgICAgdGhpcy5yaW5nRWxlbWVudHMuYWRkKHJpbmcpO1xuICAgICAgICAgICAgdGhpcy5yaW5nUG9zaXRpb25zLnNldChyaW5nLCB7IHg6IGNlbnRlci54LCB5OiBjZW50ZXIueSB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBOb3cgYXJhbmdlIHRoZSBlZGdlc1xuICAgICAgICB0aGlzLmVkZ2VzLmZvckVhY2goKHZpZXcsIGVkZ2UpID0+IHtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIG1pZGRsZSBvZiB0aGUgdHdvIGVuZHB0c1xuICAgICAgICAgICAgY29uc3QgZmlyc3RYID0gdGhpcy5ub2RlUG9zaXRpb25zLmdldCh0aGlzLm5vZGVzLmdldChlZGdlLm4pKS54O1xuICAgICAgICAgICAgY29uc3QgZmlyc3RZID0gdGhpcy5ub2RlUG9zaXRpb25zLmdldCh0aGlzLm5vZGVzLmdldChlZGdlLm4pKS55O1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kWCA9IHRoaXMubm9kZVBvc2l0aW9ucy5nZXQodGhpcy5ub2Rlcy5nZXQoZWRnZS5uMSkpLng7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmRZID0gdGhpcy5ub2RlUG9zaXRpb25zLmdldCh0aGlzLm5vZGVzLmdldChlZGdlLm4xKSkueTtcbiAgICAgICAgICAgIGNvbnN0IHggPSAoZmlyc3RYICsgc2Vjb25kWCkgLyAyO1xuICAgICAgICAgICAgY29uc3QgeSA9IChmaXJzdFkgKyBzZWNvbmRZKSAvIDI7XG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoc2Vjb25kWSAtIGZpcnN0WSwgc2Vjb25kWCAtIGZpcnN0WCk7XG4gICAgICAgICAgICB0aGlzLmVkZ2VQb3NpdGlvbnMuc2V0KHZpZXcsIHsgeDogeCwgeTogeSwgYW5nbGU6IGFuZ2xlIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZXBPaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGRyYXcgcG9zaXRpb24gb2YgdGhlIG5vZGVzIG9uIHRoZSBzY3JlZW5cbiAgICAgKiB0byBtYXRjaCB0aGUgb2Zmc2V0IGluIHJlcC4gQXNzdW1lcyBhbGwgdmlld3MgaGF2ZSBhIHBvc2l0aW9uXG4gICAgICogc3RvcmVkIGluIHRoZSByZXAuIENhbGwgYXJyYW5nZSgpIGZpcnN0LlxuICAgICAqIEFsc28gYXBwbGllcyB0aGUgc2NhbGUgZmFjdG9yIHRvIHRoZSBmaW5hbCBkcmF3IHBvc2l0aW9ucyxcbiAgICAgKiBpbnZpc2libGUgdG8gZXZlcnlvbmUgZWxzZS5cbiAgICAgKi9cbiAgICB1cGRhdGVPZmZzZXQoKSB7XG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHRoaXMuY2VudGVyO1xuICAgICAgICBjb25zdCBzY2FsZSA9IHRoaXMuc2NhbGU7XG4gICAgICAgIGZ1bmN0aW9uIGFwcGx5U2NhbGUoaSkge1xuICAgICAgICAgICAgcmV0dXJuIFBvaW50KCgoaS54KSAtIGNlbnRlci54KSAqIHNjYWxlICsgY2VudGVyLngsICgoaS55KSAtIGNlbnRlci55KSAqIHNjYWxlICsgY2VudGVyLnkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZVBvc2l0aW9ucy5mb3JFYWNoKChwb3MsIHZpZXcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFkanVzdGVkID0gYXBwbHlTY2FsZSh7XG4gICAgICAgICAgICAgICAgeDogcG9zLnggKyB0aGlzLm9mZnNldFgsXG4gICAgICAgICAgICAgICAgeTogcG9zLnkgKyB0aGlzLm9mZnNldFksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUubGVmdCA9IFwiXCIgKyAoYWRqdXN0ZWQueCAtICgwLjUgKiB2aWV3Lm9mZnNldFdpZHRoKSkgKyBcInB4XCI7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLnRvcCA9IFwiXCIgKyAoYWRqdXN0ZWQueSAtICgwLjUgKiB2aWV3Lm9mZnNldEhlaWdodCkpICsgXCJweFwiO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lZGdlUG9zaXRpb25zLmZvckVhY2goKHBvcywgdmlldykgPT4ge1xuICAgICAgICAgICAgdmlldy5zZXRBbmdsZShwb3MuYW5nbGUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZHJhd0VkZ2VMaW5lcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0UG9zID0gdGhpcy5ub2RlUG9zaXRpb25zLmdldCh0aGlzLm5vZGVzLmdldCh2aWV3LmZpcnN0KSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kUG9zID0gdGhpcy5ub2RlUG9zaXRpb25zLmdldCh0aGlzLm5vZGVzLmdldCh2aWV3LnNlY29uZCkpO1xuICAgICAgICAgICAgICAgIHZpZXcud2lkdGggPSBcIlwiICsgKHNjYWxlICogTWF0aC5oeXBvdChzZWNvbmRQb3MueCAtIGZpcnN0UG9zLngsIHNlY29uZFBvcy55IC0gZmlyc3RQb3MueSkpICsgXCJweFwiO1xuICAgICAgICAgICAgICAgIHZpZXcuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJibGFjayAwLjFjaCBzb2xpZFwiO1xuICAgICAgICAgICAgICAgIHZpZXcuc3R5bGUuYm9yZGVyVG9wID0gXCJibGFjayAwLjFjaCBzb2xpZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlldy53aWR0aCA9IFwiZml0LWNvbnRlbnRcIjtcbiAgICAgICAgICAgICAgICB2aWV3LnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIHZpZXcuc3R5bGUuYm9yZGVyVG9wID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhZGp1c3RlZCA9IGFwcGx5U2NhbGUoe1xuICAgICAgICAgICAgICAgIHg6IHBvcy54ICsgdGhpcy5vZmZzZXRYLFxuICAgICAgICAgICAgICAgIHk6IHBvcy55ICsgdGhpcy5vZmZzZXRZLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLmxlZnQgPSBcIlwiICsgKGFkanVzdGVkLnggLSAoMC41ICogdmlldy5vZmZzZXRXaWR0aCkpICsgXCJweFwiO1xuICAgICAgICAgICAgdmlldy5zdHlsZS50b3AgPSBcIlwiICsgKGFkanVzdGVkLnkgLSAoMC41ICogdmlldy5vZmZzZXRIZWlnaHQpKSArIFwicHhcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIE92ZXJsYXkgZWxlbWVudHMgY2hhbmdlIHNpemUgd2l0aCBzY2FsZVxuICAgICAgICB0aGlzLnJpbmdQb3NpdGlvbnMuZm9yRWFjaCgocG9zLCB2aWV3KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhZGp1c3RlZFBvcyA9IGFwcGx5U2NhbGUoe1xuICAgICAgICAgICAgICAgIHg6IHBvcy54ICsgdGhpcy5vZmZzZXRYIC0gKDAuNSAqIHZpZXcub2Zmc2V0V2lkdGgpLFxuICAgICAgICAgICAgICAgIHk6IHBvcy55ICsgdGhpcy5vZmZzZXRZIC0gKDAuNSAqIHZpZXcub2Zmc2V0SGVpZ2h0KSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmlldy5zdHlsZS5sZWZ0ID0gXCJcIiArIGFkanVzdGVkUG9zLnggKyBcInB4XCI7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLnRvcCA9IFwiXCIgKyBhZGp1c3RlZFBvcy55ICsgXCJweFwiO1xuICAgICAgICAgICAgdmlldy5zdHlsZS5zY2FsZSA9IFwiXCIgKyB0aGlzLnNjYWxlO1xuICAgICAgICAgICAgdmlldy5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBcIjAgMFwiO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZXBPaygpO1xuICAgIH1cbiAgICByZXBPaygpIHtcbiAgICAgICAgKDAsIGFzc2VydF8xLmFzc2VydCkodGhpcy5yb290Tm9kZXMuc2l6ZSA+IDApO1xuICAgICAgICAoMCwgYXNzZXJ0XzEuYXNzZXJ0KShHcmFwaE1pbmlwdWxhdG9yXzEuR3JhcGhNaW5pcHVsYXRvci5pc0Nvbm5lY3RlZCh0aGlzLmdyYXBoKSwgXCJHcmFwaCBub3QgY29ubmVjdGVkXCIpO1xuICAgIH1cbiAgICBncmFwaDtcbiAgICBub2RlcztcbiAgICAvLyBUaGUgUG9zaXRpb24gb2YgdGhlIGNlbnRlciBvZiB0aGUgbm9kZS5cbiAgICBub2RlUG9zaXRpb25zO1xuICAgIGVkZ2VzO1xuICAgIGVkZ2VQb3NpdGlvbnM7XG4gICAgLy8gQW10IHRvIGFkZCB0byBsZWZ0IGNvb3JkaW5hdGVcbiAgICBvZmZzZXRYO1xuICAgIC8vIEFkZGVkIHRvIHRvcCBjb29yZGluYXRlIG9mIG5vZGVzXG4gICAgb2Zmc2V0WTtcbiAgICAvLyBpZiB0aGUgbW91c2UgaXMgZG93blxuICAgIG1vdXNlRG93biA9IGZhbHNlO1xuICAgIHRvdWNoRG93biA9IGZhbHNlO1xuICAgIHNjYWxlID0gMTtcbiAgICByb290Tm9kZXM7XG4gICAgcmluZ0VsZW1lbnRzO1xuICAgIHJpbmdQb3NpdGlvbnM7XG4gICAgZ2VzdHVyZVJlY29nbml6ZXI7XG4gICAgLy8gSWYgdGhlIGdyYXBoIHNob3VsZCBkcmF3IGFyZ3VtZW50IG5vZGVzLlxuICAgIHNob3dBcmd1bWVudHMgPSBmYWxzZTtcbiAgICBkcmF3RWRnZUxpbmVzID0gZmFsc2U7XG59XG5leHBvcnRzLldlYkdyYXBoVmlldyA9IFdlYkdyYXBoVmlldztcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIndlYi1ncmFwaHZpZXdcIiwgV2ViR3JhcGhWaWV3LCB7IGV4dGVuZHM6IFwiZGl2XCIgfSk7XG5mdW5jdGlvbiBQb2ludCh4LCB5LCBhbmdsZSA9IHVuZGVmaW5lZCkge1xuICAgIGlmIChhbmdsZSA9PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogeSxcbiAgICAgICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiB4LFxuICAgICAgICB5OiB5LFxuICAgICAgICBhbmdsZTogYW5nbGUsXG4gICAgfTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXJzZSA9IHZvaWQgMDtcbi8qKlxuICogUGFyc2VzIGh1bWFuIHdyaXR0ZW4sIHV0Zi04IHR5cGUgbWF0aCBleHByZXNzaW9uc1xuICogaW50byBhY3R1YWwgbWF0aC5cbiAqIEBwYXJhbSBpbnB1dFxuICovXG5mdW5jdGlvbiBwYXJzZShpbnB1dCkge1xuICAgIGNvbnN0IG91dCA9IFtdO1xuICAgIGNvbnNvbGUubG9nKFwiSW5wdXQ6IFwiICsgaW5wdXQpO1xuICAgIGNvbnN0IGZpbmRFeHByZXNzaW9ucyA9IC9bMC05YS16QS1aXSsvO1xuICAgIGNvbnN0IGZpbmRPcGVyYXRvcnMgPSAvW1xcK1xcLVxcKlxcL1xcXl0vO1xuICAgIGNvbnNvbGUubG9nKGZpbmRFeHByZXNzaW9ucyk7XG4gICAgY29uc3Qgc3BsaXQgPSBpbnB1dC5zcGxpdChmaW5kRXhwcmVzc2lvbnMpO1xuICAgIGNvbnNvbGUubG9nKHNwbGl0KTtcbiAgICByZXR1cm4gb3V0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuZnVuY3Rpb24gcGFyc2VFeHByZXNzaW9uKGlucHV0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkXCIpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFzc2VydCA9IHZvaWQgMDtcbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBleHByZXNzaW9uIGV2YWx1YXRlZCB0byB0cnVlLiBJZiBub3QsIHRocm93cyBlcnJvclxuICogd2l0aCB0aGUgbWVzc2FnZSBnaXZlbi5cbiAqIEBwYXJhbSBtc2cgRGlzcGxheWVkIGlmIHRoZSBleHByZXNzaW9uIGlzIGZhbHNlLiBEZWZhdWx0cyB0byBcIkZhaWxlZCBBc3NlcnRcIlxuICovXG5mdW5jdGlvbiBhc3NlcnQoZXhwLCBtc2cgPSBcIkZhaWxlZCBhc3NlcnRcIikge1xuICAgIGlmICghZXhwKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbn1cbmV4cG9ydHMuYXNzZXJ0ID0gYXNzZXJ0O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUHJpbWFyeVBhZ2VMb2FkZXJfMSA9IHJlcXVpcmUoXCIuL1ByaW1hcnlQYWdlTG9hZGVyXCIpO1xuLyoqXG4gKiBQb3B1bGF0ZSBodG1sIGVsZW1lbnRzIGJ5IHRoZWlyIGNsYXNzLlxuICovXG4vL2xvYWRFeHByZXNzaW9uc1Rlc3RQYWdlcygpXG4oMCwgUHJpbWFyeVBhZ2VMb2FkZXJfMS5sb2FkUHJpbWFyeVBhZ2UpKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=