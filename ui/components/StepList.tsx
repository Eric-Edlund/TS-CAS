import { Accessor, For, createEffect } from "solid-js"
import { Expression } from "../mathlib/expressions/Expression"
import { SolutionStep } from "./SolutionStep"

declare const MathJax: any

export interface Step {
    argument: {
        message: string
        rule_name: string
        extra_data: any 
    }
    expression: Expression
}

export interface Props {
    steps: Accessor<Step[]>
}

export function StepList({ steps }: Props) {
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
