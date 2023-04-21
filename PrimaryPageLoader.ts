import { Algebra } from "./mathlib/derivations/Algebra";
import { a, b, c, fraction, num, product, sum, v } from "./mathlib/ConvenientExpressions";
import { parse } from "./mathlib/userinput/Parser";
import { WebGraphView, WebGraphViewInitSettings } from "./mathlib/uielements/WebGraphView";
import { Integral } from "./mathlib/expressions/Integral";
import { Fraction } from "./mathlib/expressions/Fraction";
import { Graph } from "./mathlib/Graph";
import { Expression } from "./mathlib/expressions/Expression";
import { Equivalence } from "./mathlib/derivations/equivalence/Equivalence";



/**
 * Called after DOM is loaded.
 * Substitutes the body element in the document
 * with the primary integrator view.
 * @returns 
 */
export function loadPrimaryPage(): void {

    //const root = Derivative.of(sum(a, a, product(num(2), b)), a)
    const root = sum(sum(a, a), product(a, a))
    const graph = new Graph().addNode(root)
    graph.addGraph(Equivalence.expandExperimental(graph))
        .addGraph(Equivalence.expandExperimental(graph))
        .addGraph(Equivalence.expandExperimental(graph))
        .addGraph(Equivalence.expandExperimental(graph))

    //graph.addGraph(Algebra.expand(graph))
    //graph.addGraph(Equivalence.expand(graph))
    //graph.addGraph(Algebra.expand(graph))


    //console.log("Result: " + graph)

    const input = document.getElementById("input")
    input!.addEventListener("keyup", () => {
        parse((input! as HTMLTextAreaElement).value)
    })


    const out = document.getElementById("outputbox")!;

    const config: WebGraphViewInitSettings = {
        showArguments: false,
        drawEdgeLines: false,
    }

    const graphView = new WebGraphView(graph, new Set([root]), config)
    graphView.setAttribute("id", "web-graphview")
    out.appendChild(graphView)

}