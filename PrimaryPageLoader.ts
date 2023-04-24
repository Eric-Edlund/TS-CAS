import { a, b, c, fraction, num, product, sum, v } from "./mathlib/ConvenientExpressions";
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

NoContextExpressionSimplificationRule.rules.add(new CombineCommonTermsAddition())
NoContextExpressionSimplificationRule.rules.add(new CombineCommonTermsMultiplication())
NoContextExpressionSimplificationRule.rules.add(new EvaluateSums())
NoContextExpressionSimplificationRule.rules.add(new OrderSums())
NoContextExpressionSimplificationRule.rules.add(new ReduceReducibles())

/**
 * Called after DOM is loaded.
 * Substitutes the body element in the document
 * with the primary integrator view.
 * @returns 
 */
export function loadPrimaryPage(): void {

    //const root = Derivative.of(sum(a, a, product(num(2), b)), a)
    const root = sum(sum(a, a), product(a, a))
    const otherRoot = sum(product(b, c), a)
    const graph = new Graph().addRelationship(
        root,
        otherRoot,
        Relationship.Equal)

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

    const graphView = new WebGraphView(graph, new Set([root, otherRoot]), config)
    graphView.setNodeColoringScheme(n => {
        if (n instanceof Expression) {
            if (!deriver.isSimplified(n)) return "gray"
            else if (!n.isHealthy) return "lightred"
            else return "lightblue"
        }
        return "black"
    })
    graphView.setAttribute("id", "web-graphview")
    out.appendChild(graphView)

}