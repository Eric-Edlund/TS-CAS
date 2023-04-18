import { AlgebraDoer } from "./mathlib/AlgebraDoer";
import { a, b, c, fraction, num, product, sum, v } from "./mathlib/ConvenientExpressions";
import { EquivalenceFinder } from "./mathlib/EquivalenceFinder";
import { parse } from "./mathlib/userinput/Parser";
import { WebGraphView, WebGraphViewInitSettings } from "./mathlib/uielements/WebGraphView";
import { Integral } from "./mathlib/expressions/Integral";
import { Fraction } from "./mathlib/expressions/Fraction";
import { Graph } from "./mathlib/Graph";
import { Expression } from "./mathlib/expressions/Expression";




export function loadPrimaryPage(): void {
    if (!document.getElementsByTagName('body')[0].classList.contains('primaryIntegrator')) return

    const graph = new Graph();
    /*
    const left = sum(v('x'), num(2), num(2))
    const right = sum(v('y'), num(2))
    graph.addNode(left)
    graph.addNode(right)
    graph.addInference(new Inference(left, right, "Given by problem"))
    */

    //const root = Derivative.of(sum(a, a, product(num(2), b)), a)
    const root = Integral.of(fraction(Fraction.of(a, a), b), c)
    graph.addNode(root)


    graph.addGraph(EquivalenceFinder.expand(graph))
    graph.addGraph(AlgebraDoer.expand(graph))
    graph.addGraph(EquivalenceFinder.expand(graph))
    graph.addGraph(AlgebraDoer.expand(graph))


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