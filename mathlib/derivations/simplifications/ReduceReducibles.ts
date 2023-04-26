import { Argument } from "../../Argument"
import { Expression } from "../../expressions/Expression"
import { Relationship } from "../../Relationship"
import { setOf } from "../../util/ThingsThatShouldBeInTheStdLib"
import { NoContextExpressionSimplificationRule } from "../NoContextExpressionSimplificationRule"



export class ReduceReducibles extends NoContextExpressionSimplificationRule {
    protected appliesImpl(exp: Expression): boolean {
        return exp.isReducible
    }
    protected applyImpl(exp: Expression): Set<Argument> {
        return new Set<Argument>([new Argument(setOf(exp), {
            n: exp,
            r: Relationship.Equal,
            n1: exp.reduced
        }, "Reduced")])
    }
    
}

