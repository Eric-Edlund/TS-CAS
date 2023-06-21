import antlr4 from "antlr4"
import { sum } from "mathjs";
import { negative, product } from "../ConvenientExpressions";
import { Exponent } from "../expressions/Exponent";
import { Expression } from "../expressions/Expression";
import { Fraction } from "../expressions/Fraction";
import { Integer } from "../expressions/Integer";
import { Product } from "../expressions/Product";
import { Sum } from "../expressions/Sum";
import { Variable } from "../expressions/Variable";
import { assert } from "../util/assert";
import { AtomContext, DivisionContext, EquationContext, ExpressionContext, Expression_partContext, ImplicitProductContext, ParenContext, PowerContext, ProductContext, RelopContext, SumContext, UnaryOnAtomContext, UnaryOnExpressionContext } from "./arithmeticParser";
import arithmeticVisitor from "./arithmeticVisitor";

/**
 * Reads out an expression.
 */
export class ExpressionVisitor extends arithmeticVisitor<Expression> {

    private printChildren(ctx: Expression_partContext): void {
        let result = ""
        for (const child of ctx.children!) {
            result += child.getText() + "  "
        }
        console.log(result)
    }

    visitExpression = (ctx: ExpressionContext): Expression => {
        return this.visit(ctx.expression_part())
    };

	visitEquation = (ctx: EquationContext): Expression => {
        throw new Error("Can't parse equations with this visitor")
    };

    visitPower = (ctx: PowerContext): Expression => {
        return Exponent.of(
            this.visit(ctx._left),
            this.visit(ctx._right)
        )
    }

    visitParen = (ctx: ParenContext): Expression => {
        return this.visit(ctx.expression_part())
    }

    visitDivision = (ctx: DivisionContext): Expression => {
        return Fraction.of(
            this.visit(ctx._left),
            this.visit(ctx._right)
        )
    }

    visitProduct = (ctx: ProductContext): Expression => {
        return Product.of([
            ...ctx.expression_part_list().map(exp => this.visit(exp))
        ])
    }

    visitImplicitProduct = (ctx: ImplicitProductContext): Expression => {
        console.log("Implicit product of context")
        this.printChildren(ctx)
        return Product.of([
            this.visit(ctx._left),
            this.visit(ctx._right)
        ])
    }

    visitUnaryOnAtom = (ctx: UnaryOnAtomContext): Expression => {
        const isPositive = ctx.MINUS_list.length % 2 == 0
        if (isPositive)
            return this.visit(ctx.atom())
        return negative(this.visit(ctx.atom()))
    }

    visitUnaryOnExpression = (ctx: UnaryOnExpressionContext): Expression => {
        const isPositive = ctx.MINUS() == null
        if (isPositive)
            return this.visit(ctx.expression_part())
        return negative(this.visit(ctx.expression_part()))
    }

    visitSum = (ctx: SumContext): Expression => {
        // console.log("Visiting sum with " + ctx.children!.length + " children: " + ctx.toStringTree(null, ctx.parser!))

        // this.printChildren(ctx)

        // Sum of plus and minus components
        const terms: Expression[] = [this.visit(ctx.children![0])];
        for (let i=1; i < ctx.children!.length; i+= 2) {
            if (ctx.children![i].getText() == '-')
                terms.push(negative(this.visit(ctx.children![i+1])))
            else {
                terms.push(this.visit(ctx.children![i+1]))
            }   
        }
        //console.log("Printing made terms")
        for(const term of terms) {
            //console.log("  " + term.toString())
        }
        //console.log("done")
        return Sum.of(terms)
    }

	// visitExpression = (ctx: ExpressionContext): Expression => {
    //     // Guess what expression type it is, following pemdas
    //     if ((ctx.PLUS(0) != null || ctx.MINUS(0) != null) 
    //             && (ctx.expression_list().length ?? 0) > 1) {
            

    //     } else {
    //         console.log("Unknown expression type")
    //         for (const key of Object.keys(ctx)) {
    //             console.log(`${key}: ${(ctx as any)[key]}`)
    //         }
    //         for (const key of Object.getOwnPropertyNames(ctx)) {
    //             console.log(`${key}: ${(ctx as any)[key]}`)
    //         }
    //         console.log("Expressions: " + ctx.expression_list().length)
    //         console.log("Num children: " + ctx.children!.length)
    //         if (ctx.children?.length ?? 0 > 0)
    //             for (const child of ctx.children!) {
    //                 console.log("Child: " + child.getText())
    //             }
    //         throw new Error("Not implemented 1")
    //     }
    // };

	visitAtom = (ctx: AtomContext): Expression => {
        if (ctx.VARIABLE() != null) {
            return Variable.of(ctx.VARIABLE().getText())
        } else if (ctx.SCIENTIFIC_NUMBER() != null) {
            return Integer.of(
                Number.parseFloat(
                    ctx.SCIENTIFIC_NUMBER().getText()
                )
            )
        } else {
            throw new Error("Not implemented");
        }
    };

	visitRelop = (ctx: RelopContext): Expression => {
        throw new Error("Shouldn't happen with this visitor impl")
    };

}



