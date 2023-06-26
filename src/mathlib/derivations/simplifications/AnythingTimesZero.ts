import { Argument } from "../../Argument";
import { Expression } from "../../expressions/Expression";
import { Integer } from "../../expressions/Integer";
import { Product } from "../../expressions/Product";
import { Relationship } from "../../Relationship";
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib";
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule";


export class AnythingTimesZero extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return exp instanceof Product
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const product = exp as Product

        let isZero = false
        for (const factor of product.factors)
            if (factor instanceof Integer && factor.value === 0) {
                isZero = true;
                break;
            }

        if (!isZero) return setOf()

        return setOf(new Argument(setOf(exp), {
            n: exp,
            r: Relationship.Equal,
            n1: Integer.of(0)
        }, "Anything times zero is zero"))
    }
    
}