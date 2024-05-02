import { Accessor, For, createEffect } from "solid-js"
import { Expression } from "../mathlib/expressions/Expression"
import { SolutionStep } from "./SolutionStep";

declare const MathJax: any;

export interface Step {
    argument: string
    expression: Expression
}


export interface Props {
    steps: Accessor<Step[]>
}

export function StepList({ steps }: Props): Element {
    createEffect(() => {
        MathJax.typeset()
    }, steps())

    return (
        <div>
            <For each={steps()}>
                {step => (
                    <SolutionStep
                        argument={step.argument}
                        expression={step.expression}
                    />
                )}
            </For>
        </div>
    )
}

