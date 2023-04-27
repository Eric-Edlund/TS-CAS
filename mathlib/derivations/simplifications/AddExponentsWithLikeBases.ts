import { Argument } from "../../Argument";
import { num, productOrNot, sum } from "../../ConvenientExpressions";
import { Exponent } from "../../expressions/Exponent";
import { Expression } from "../../expressions/Expression";
import { Product } from "../../expressions/Product";
import { Relationship } from "../../Relationship";
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib";
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule";

export class AddExponentsWithLikeBases extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return exp instanceof Product
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        const product = exp as Product

        const nonExponentFactors = product.factors.filter(f => !(f instanceof Exponent))
        const exponents = product.factors.filter(f => f instanceof Exponent).map(f => f as Exponent)

        const uniqueBases = new Set<Expression>()
        exponents.forEach(e => {
            uniqueBases.add(e.base)
        })

        
        const out = new Set<Argument>()
        for (const base of uniqueBases) {
            let powers: Expression[] = []
            const remainingExponents: Exponent[] = []
            exponents.forEach(e => {
                if (e.base === base) powers.push(e.power)
                else remainingExponents.push(e)
            })

            if (powers.length > 1) {
                out.add(new Argument(setOf(exp), {
                    n: exp,
                    r: Relationship.Equal,
                    n1: productOrNot(Exponent.of(base, sum(...powers)), ...remainingExponents, ...nonExponentFactors)
                }, "Add exponents with common bases"))
            }
        }

        return out
    }

}