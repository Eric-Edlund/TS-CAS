import { a, b, c, fraction, num, product, sum, v, x } from "./mathlib/ConvenientExpressions";
import { parse } from "./mathlib/userinput/Parser";
import { WebGraphView, WebGraphViewInitSettings } from "./mathlib/uielements/WebGraphView";
import { Graph } from "./mathlib/Graph";
import { Relationship } from "./mathlib/Relationship";
import { Deriver } from "./mathlib/derivations/Deriver";
import { NoContextExpressionSimplificationRule } from "./mathlib/derivations/NoContextExpressionSimplificationRule";
import { CombineCommonTermsAddition } from "./mathlib/derivations/simplifications/CombineCommonTermsAddition";
import { CombineCommonTermsMultiplication } from "./mathlib/derivations/simplifications/CombineCommonTermsMultiplication";
import { EvaluateSums } from "./mathlib/derivations/simplifications/EvaluateSums";
import { OrderSums } from "./mathlib/derivations/simplifications/OrderSums";
import { ReduceReducibles } from "./mathlib/derivations/simplifications/ReduceReducibles";
import { Expression } from "./mathlib/expressions/Expression";
import { RelationalDerivationRule } from "./mathlib/derivations/RelationalDerivationRule";
import { SubtractFromBothSides } from "./mathlib/derivations/algebra/SubtractFromBothSides";
import { DivideOnBothSides } from "./mathlib/derivations/algebra/DivideOnBothSides";
import { Variable } from "./mathlib/expressions/Variable";
import { SumCoefficientsOfAddedTerms } from "./mathlib/derivations/simplifications/SumCoefficientsOfAddedTerms";
import { USubstitution } from "./mathlib/derivations/simplifications/USubstitution";
import { PowerRule } from "./mathlib/derivations/simplifications/PowerRule";
import { PullConstantsFromDerivatives } from "./mathlib/derivations/simplifications/PullConstantsFromDerivatives";
import { Derivative } from "./mathlib/expressions/Derivative";
import { Exponent } from "./mathlib/expressions/Exponent";
import { ExponentToTheFirst } from "./mathlib/derivations/simplifications/ExponentToTheFirst";
import { AssociativePropertyOfProductsAndSums } from "./mathlib/derivations/simplifications/AssociativePropertyOfProductsAndSums";

NoContextExpressionSimplificationRule.rules.add(new CombineCommonTermsAddition())
NoContextExpressionSimplificationRule.rules.add(new CombineCommonTermsMultiplication())
NoContextExpressionSimplificationRule.rules.add(new EvaluateSums())
NoContextExpressionSimplificationRule.rules.add(new OrderSums())
NoContextExpressionSimplificationRule.rules.add(new ReduceReducibles())
NoContextExpressionSimplificationRule.rules.add(new SumCoefficientsOfAddedTerms())
NoContextExpressionSimplificationRule.rules.add(new USubstitution())
NoContextExpressionSimplificationRule.rules.add(new PowerRule())
NoContextExpressionSimplificationRule.rules.add(new PullConstantsFromDerivatives())
NoContextExpressionSimplificationRule.rules.add(new ExponentToTheFirst())
NoContextExpressionSimplificationRule.rules.add(new AssociativePropertyOfProductsAndSums())

RelationalDerivationRule.rules.add(new SubtractFromBothSides())
RelationalDerivationRule.rules.add(new DivideOnBothSides())

/**
 * Called after DOM is loaded.
 * Substitutes the body element in the document
 * with the primary integrator view.
 * @returns 
 */
export function loadPrimaryPage(): void {

    //const root = Derivative.of(sum(a, a, product(num(2), b)), a)
    const root = Derivative.of(product(num(3), Exponent.of(x, num(2))), x)
    const graph = new Graph().addNode(root)

    const deriver = new Deriver(graph)
    deriver.expand()

    //console.log("Result: " + graph)

    const input = document.getElementById("input")
    input!.addEventListener("keyup", () => {
        parse((input! as HTMLTextAreaElement).value)
    })


    const out = document.getElementById("outputbox")!;

    const config: WebGraphViewInitSettings = {
        showArguments: false,
        drawEdgeLines: true,
    }

    const graphView = new WebGraphView(graph, new Set([root]), config)
    graphView.setNodeColoringScheme(n => {
        if (n instanceof Expression) {
            if (!deriver.isSimplified(n)) return "lightgray"
            else if (!n.isHealthy) return "lightred"
            else if (n instanceof Variable) return "orange"
            else return "lightblue"
        }
        return "black"
    })
    graphView.setAttribute("id", "web-graphview")
    out.appendChild(graphView)

}