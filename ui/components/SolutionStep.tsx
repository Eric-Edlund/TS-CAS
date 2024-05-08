import { Substitution } from "../mathlib/expressions/Substitution"
import { Expression } from "../mathlib/expressions/Expression"
import { MathView } from "../mathlib/uielements/EditableMathView"
import { Logarithm } from "../mathlib/expressions/Logarithm"
import { AbsoluteValue } from "../mathlib/expressions/AbsoluteValue"
import { Variable } from "../mathlib/expressions/Variable"
import { ConstantExp } from "../mathlib/expressions/ConstantExp"

interface Props {
    argument: any
    expression: Expression
}

export function SolutionStep({ argument, expression }: Props) {
    return (
        <div class="row" style="font-size: medium;">
            <p class="col s6">{Argument({ argument })}</p>
            {new MathView(expression)}
        </div>
    )
}

interface ArgumentProps {
    argument: any
}

function Argument({ argument }: ArgumentProps) {
    return (
        <p>
            {messageDisbatch(argument.rule_name, argument.extra_data) ??
                argument.message}
        </p>
    )
}

function messageDisbatch(rule: string, extraData: any): any | null {
    switch (rule) {
        case "IntegrationBySubstitution":
            const substitution = Substitution.getById(extraData.substitution_id)
            const eq = `${substitution.toMathXML({})}<mo>=</mo>${substitution.child().toMathXML({})}`

            return (
                <p>
                    {"Substitute "}
                    {inlineMath(eq)}
                </p>
            )

        case "IntegrationToNaturalLog":
            let rhs = Logarithm.of(
                AbsoluteValue.of(Variable.of("u")),
                ConstantExp.of("Euler")
            )
            return (
                <p>
                    {"Apply integration rule "}
                    {inlineMath(
                        `<mrow><mo>∫</mo><mfrac><mi>du</mi><mi>u</mi></mfrac></mrow> <mo>=</mo> ${rhs.toMathXML({})}`
                    )}
                </p>
            )

        case "IntegralConstCoef":
            return <p>{"Pull constant out of integral."}</p>
    }

    return null
}

function inlineMath(content: string): HTMLElement {
    const equation = document.createElement("div")
    equation.style.display = "inline"
    equation.innerHTML = `<math>${content}</math>`
    // @ts-ignore
    MathJax.typeset([equation])
    return equation
}
