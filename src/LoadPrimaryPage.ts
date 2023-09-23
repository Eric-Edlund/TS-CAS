import { a, b, negative, num, product, sum, x } from "./mathlib/ConvenientExpressions";
import { WebGraphView, WebGraphViewInitSettings } from "./mathlib/uielements/WebGraphView";
import { deriveExpand, wrapInGraph } from "./mathlib/derivations/Deriver";
import { Expression } from "./mathlib/expressions/Expression";
import { RelationalDerivationRule } from "./mathlib/derivations/RelationalDerivationRule";
import { SubtractFromBothSides } from "./mathlib/derivations/algebra/SubtractFromBothSides";
import { DivideOnBothSides } from "./mathlib/derivations/algebra/DivideOnBothSides";
import { Variable } from "./mathlib/expressions/Variable";
import { Product } from "./mathlib/expressions/Product";
import { Sum } from "./mathlib/expressions/Sum";
import { Interpreter } from "./mathlib/interpreting/Interpreter";
import { RULE_ID as Evaluate_Sums_Rule } from "./mathlib/derivations/simplifications/EvaluateSums";
import { setOf } from "./mathlib/util/ThingsThatShouldBeInTheStdLib";
import { parseExpression } from "./mathlib/userinput/AntlrMathParser";
import { Derivative } from "./mathlib/expressions/Derivative";
import { Integral } from "./mathlib/expressions/Integral";
import { Exponent } from "./mathlib/expressions/Exponent";


RelationalDerivationRule.rules.add(new SubtractFromBothSides())
RelationalDerivationRule.rules.add(new DivideOnBothSides())

/**
 * Called after DOM is loaded.
 * Substitutes the body element in the document
 * with the primary integrator view.
 */
export function loadPrimaryPage(): void {

    //product(sum(a, b), sum(a, negative(b)), a, a)
    let root: Expression | null = Integral.of(product(num(10), Exponent.of(x, num(2))), x)

    let derivationResult = deriveExpand(wrapInGraph(root), 30, true)
    const graph = derivationResult.graph

    const interpreter = new Interpreter({
        skips: setOf(
            Evaluate_Sums_Rule
        )
    })

    const input = document.getElementById("input") as HTMLTextAreaElement
    input!.addEventListener("keydown", (e) => {
        if (e.key !== "Enter") return
        e.preventDefault()

        input.value = input.value.trimEnd()

        try {
            root = parseExpression(input.value)
        } catch (e) {
            root = null;
            alert("Not a valid input")
            return
        }

        derivationResult = deriveExpand(wrapInGraph(root), 5, true)
        const graph = derivationResult.graph

        graphView.setGraph(graph, setOf(root))
    })


    const out = document.getElementById("outputbox")!;

    const config: WebGraphViewInitSettings = {
        showArguments: false,
        drawEdgeLines: true,
        debugCornerEnabled: true,
    }

    const graphView = new WebGraphView(graph, new Set([root]), interpreter, config)
    graphView.setNodeColoringScheme(n => {
        if (n instanceof Expression) {
            if (!derivationResult.isSimplified(n)) return "lightgray"

            if (n instanceof Product)
                if (derivationResult.passedFactoringSimplification.has(n)) return "coral"
            if (n instanceof Sum)
                if (derivationResult.passedPolynomialSimplification.has(n)) return "yellow"
            if (derivationResult.passedConvergentSimplification.has(n)) return "lightgreen"
            

            if (n instanceof Variable) return "orange"

            return "lightblue"
        }
        return "black"
    })
    graphView.setAttribute("id", "web-graphview")
    out.appendChild(graphView)

}