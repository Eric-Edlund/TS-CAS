import { Argument } from "../../Argument"
import {
    product,
    productAndNotTimesOne,
    productOrNot,
    remove,
    removeNew
} from "../../ConvenientExpressions"
import { Derivative } from "../../expressions/Derivative"
import { Expression } from "../../expressions/Expression"
import { Product } from "../../expressions/Product"
import { Relationship } from "../../Relationship"
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib"
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule"

export class PullConstantsFromDerivatives extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return exp instanceof Derivative && exp.exp instanceof Product
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const d = exp as Derivative
        const p = d.exp as Product

        const constFactors = p.factors.filter(f => f.isConstant)

        const out = new Set<Argument>()
        for (const factor of constFactors) {
            out.add(
                new Argument(
                    setOf(d),
                    {
                        n: d,
                        r: Relationship.Equal,
                        n1: productAndNotTimesOne(
                            factor,
                            Derivative.of(
                                productOrNot(...removeNew(p.factors, factor)),
                                d.relativeTo
                            )
                        )
                    },
                    "Pull constant factor from derivative",
                    RULE_ID
                )
            )
        }

        return out
    }
}

export const RULE_ID = "Pull Constants from Derivs"
