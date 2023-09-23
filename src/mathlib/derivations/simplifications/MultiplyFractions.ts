
import { Product, ProductType } from "../../../mathlib/expressions/Product";
import { Argument } from "../../../mathlib/Argument";
import { Expression } from "../../../mathlib/expressions/Expression";
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule";
import { Fraction, FractionType } from "../../../mathlib/expressions/Fraction";
import { productOrNot, productOrOne } from "../../../mathlib/ConvenientExpressions";
import { Relationship } from "../../../mathlib/Relationship";
import { setOf } from "../../../mathlib/util/ThingsThatShouldBeInTheStdLib";


export class MultiplyFractions extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return exp.class === ProductType;
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const p = exp as Product;

        const num = productOrNot(...p.factors.map(f =>  {
            if (f.class === FractionType) {
                return (f as Fraction).numerator
            } else {
                return f
            }
        }))

        const den = productOrOne(...p.factors.filter(f => {
            return f.class === FractionType
        }).map(f => (f as Fraction).denominator))


        return setOf(new Argument(setOf(exp), {
            n: exp,
            r: Relationship.Equal,
            n1: Fraction.of(num, den)
        }, "Multiply the fractions to combine them", RULE_ID))

    }

}

export const RULE_ID = "Multiply Fractions"