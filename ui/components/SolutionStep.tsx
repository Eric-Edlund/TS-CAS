import { Expression } from "../mathlib/expressions/Expression"
import { MathView } from "../mathlib/uielements/EditableMathView"

interface Props {
    argument: string
    expression: Expression
}

export function SolutionStep({ argument, expression }: Props): Element {
    return (
        <div className="row">
            <p className="col s6">{argument}</p>
            {new MathView(expression)}
        </div>
    )
}
