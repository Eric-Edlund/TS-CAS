import { render } from "solid-js/web"
import { MathView } from "./mathlib/uielements/EditableMathView"
import { Expression } from "./mathlib/expressions/Expression"
import { parseExpressionJSON } from "./mathlib/expressions-from-json"
import { CasWorkerMsg, IncrementalSimplifyResult } from "./CasWorkerTypes"
import { Accessor, Show, Suspense, createEffect, createSignal } from "solid-js"
import { Step, StepList } from "./components/StepList"
import { ExpressionInput } from "./components/ExpressionInput"

declare const M: any

const casWorker = new Worker("casWorker.js")

const [expression, setExpression] = createSignal<Expression | null>(null)
const [steps, setSteps] = createSignal<Step[]>([])
const [answer, setAnswer] = createSignal<Expression | null>(null)
const [working, setWorking] = createSignal(false)
const [showLoadBar, setShowLoadBar] = createSignal(false)

createEffect(() => {
    if (steps().length > 0) {
        setAnswer(steps()[steps().length - 1].expression)
    }
})

document.addEventListener("DOMContentLoaded", () => {
    const { mathInput: expressionInput, setFocused } = ExpressionInput({
        editCb: setExpression
    })
    render(() => expressionInput, document.getElementById("input")!)
    setFocused(true)
    window.addEventListener("keypress", () => {
        setFocused(true)
    })

    const answerSummary = document.getElementById(
        "answerSummary"
    )! as HTMLDivElement
    render(() => <MathViewSolid expression={answer} />, answerSummary)

    const stepListView = document.getElementById("stepsView")! as HTMLDivElement
    render(() => <StepList steps={steps} />, stepListView)

    const loadBar = document.getElementById("loadDiv")!
    createEffect(() => {
        if (working()) {
            setTimeout(() => {
                if (working()) {
                    setShowLoadBar(true)
                }
            }, 200)
        } else {
            setShowLoadBar(false)
        }
    })
    render(() => <Show when={showLoadBar()} ><div className="progress"><div className="indeterminate"></div></div></Show>, loadBar)

    casWorker.onmessage = (
        incrementalResult: MessageEvent<IncrementalSimplifyResult>
    ) => {
        const { steps: res, failed, forProblem, finished } = incrementalResult.data

        if (failed || forProblem != expression()?.toJSON()) {
            setWorking()
            return
        }

        const tmpSteps: Step[] = []

        // Contract Uninteresting Steps
        const UNINTERESTING_STEPS = new Set([
            "EvaluateSums", "MultiplicativeIdentity", "ExponentToOne"
        ])
        let i = 0;
        while (i+2 < res.length) {
            let argument = JSON.parse(JSON.stringify(res[i+1]))
            if (UNINTERESTING_STEPS.has(argument.rule_name)) {
                res.splice(i, 2)
                continue
            }
            i += 2
        }

        for (let i = 1; i + 1 < res.length; i += 2) {
            let argument = JSON.parse(JSON.stringify(res[i]))
            let expression = res[i + 1]

            tmpSteps.push({
                argument: argument,
                expression: parseExpressionJSON(expression)
            })
        }

        if (failed || finished) {
            setWorking(false)
        }

        setSteps(tmpSteps)
    }

    createEffect(() => {
        if (expression() === null) {
            setWorking(false)
            casWorker.postMessage({
                cancel: true
            })
            return
        }

        setWorking(true)

        console.log("Parsed " + expression()!.toJSON())

        casWorker.postMessage({
            expressionJson: expression()!.toJSON(),
            operation: "simplify"
        } as CasWorkerMsg)
    })

    var elems = document.querySelectorAll(".sidenav")
    M.Sidenav.init(elems, {})

})

interface MathViewSolidProps {
    expression: Accessor<Expression | null>
}

function MathViewSolid({ expression }: MathViewSolidProps) {
    return <>{new MathView(expression())}</>
}
