import { Expression } from "../mathlib/expressions/Expression"
import { MathView } from "../mathlib/uielements/EditableMathView"

interface Props {
    argument: string
    expression: Expression
}

export function SolutionStep({ argument, expression }: Props) {
    return (
        <div class="row">
            <p class="col s6">{argument}</p>
            {new MathView(expression)}
        </div>
    )
}
