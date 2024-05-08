import { render } from "solid-js/web"
import { MathView } from "./mathlib/uielements/EditableMathView"
import { Expression } from "./mathlib/expressions/Expression"
import { parseExpressionJSON } from "./mathlib/expressions-from-json"
import { CasWorkerMsg, IncrementalSimplifyResult } from "./CasWorkerTypes"
import { Accessor, Show, createEffect, createSignal } from "solid-js"
import { Step, StepList } from "./components/StepList"
import { ExpressionInput } from "./components/ExpressionInput"
import { SidePanel } from "./components/SidePanel"

declare const M: any

const casWorker = new Worker("casWorker.js")

const [expression, setExpression] = createSignal<Expression | null>(null)
const [steps, setSteps] = createSignal<Step[]>([])
const [answer, setAnswer] = createSignal<Expression | null>(null)
const [working, setWorking] = createSignal(false)
const [showLoadBar, setShowLoadBar] = createSignal(false)

createEffect(() => {
    console.log("Answer: " + answer()?.toJSON())
})

function onMobile() {
    let check = false;
    // @ts-ignore
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

document.addEventListener("DOMContentLoaded", () => {
    render(SidePanel, document.getElementById("slide-out")!)
    
    if (onMobile()) {
        render(() => <p>{"This page does not work on mobile. I'm not sure why yet. If you know post an "}<a href="https://github.com/Eric-Edlund/TS-CAS">{"issue"}</a>{"."}</p>, document.getElementById("body")!)
        return
    }

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
    render(
        () => (
            <Show when={answer() !== null}>
                <MathViewSolid expression={answer} />
                <div class="divider"></div>
            </Show>
        ),
        answerSummary
    )

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
    render(
        () => (
            <Show when={showLoadBar()}>
                <div class="progress">
                    <div class="indeterminate"></div>
                </div>
            </Show>
        ),
        loadBar
    )

    casWorker.onmessage = (
        incrementalResult: MessageEvent<IncrementalSimplifyResult>
    ) => {
        const {
            steps: res,
            failed,
            forProblem,
            finished
        } = incrementalResult.data

        if (failed || forProblem != expression()?.toJSON()) {
            setWorking(false)
            return
        }

        // TODO: Define a real interface for result so we don't have to guess what's there
        if (res === undefined) {
            setSteps([])
            return
        }

        // Contract Uninteresting Steps
        const UNINTERESTING_STEPS = new Set([
            "EvaluateSums",
            "EvaluateProducts",
            "MultiplicativeIdentity",
            "ExponentToOne",
            "UnitFraction",
            "PropogateUndefined",
            "AssociativeProperty",
        ])
        let i = 0
        while (i + 2 < res.length) {
            let argument = JSON.parse(JSON.stringify(res[i + 1]))
            if (UNINTERESTING_STEPS.has(argument.rule_name)) {
                res.splice(i, 2)
                continue
            }
            i += 2
        }

        const tmpSteps: Step[] = []

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
        if (res[res.length - 1]) {
            setAnswer(parseExpressionJSON(res[res.length - 1]))
        } else {
            setAnswer(null)
        }
    }

    createEffect(() => {
        if (expression() === null) {
            setWorking(false)
            setSteps([])
            setAnswer(null)
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
