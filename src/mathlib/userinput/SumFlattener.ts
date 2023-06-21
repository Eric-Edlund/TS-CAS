import { ParseTree, TerminalNode } from "antlr4";
import { remove } from "../ConvenientExpressions";
import { ExpressionContext, Expression_partContext, SumContext, UnaryOnExpressionContext } from "./arithmeticParser";
import arithmeticVisitor from "./arithmeticVisitor";


/**
 * Visitor that flattens sums in ASTs.
 * a + (b + c) -> a + b + c
 * 
 * This only happens if b + c isn't actually surrounded 
 * by parens.
 * 
 *        +
 *       / \
 *      a   +
 *         / \
 *        b   c
 * 
 * becomes
 * 
 *       +
 *      /|\
 *     a b c
 *   
 * 
 */
export class SumFlattener extends arithmeticVisitor<Expression_partContext> {

    visitSum = (ctx: SumContext): Expression_partContext => {
        const flattened = this.flattenAddition(ctx)
        for (const child of flattened.children!) {
            this.visit(child)
        }
        return flattened
    }

    private printChildren(ctx: SumContext): void {
        let result = ""
        for (const child of ctx.children!) {
            result += child.getText() + "  " 
        }
        console.log(result)
        //console.log(ctx.toStringTree(null, ctx.parser!))
    }

    /**
     * If the given sum's children are also sums, 
     * sets those sums parents to the ctx.
     * The given sumcontext and all its sum children
     * must have exactly 2 expression part children.
     * This prevents the mind fuck of rearranging the
     * AST on the way back out.
     */
    private flattenAddition(ctx: SumContext): Expression_partContext {
        // console.log("Abt to flatten " + ctx.getText())
        // this.printChildren(ctx)

        // Check if children are sums
        // Reach down and take their children
        for (const child of ctx.expression_part_list()) {
            if (child !instanceof SumContext) {
                remove(ctx.children!, child)
                
                // Move the expression up
                child.expression_part(1).parentCtx = ctx
                ctx.children!.unshift(child.expression_part(1))

                // Move the operator up
                if (child.MINUS() != null) {
                    child.MINUS().parentCtx = ctx
                    ctx.children!.unshift(child.MINUS())
                    //remove(child.children!, child.MINUS())
                } else {
                    child.PLUS().parentCtx = ctx
                    ctx.children!.unshift(child.PLUS())
                    //remove(child.children!, child.PLUS())
                }
                
                child.expression_part(0).parentCtx = ctx
                ctx.children!.unshift(child.expression_part(0))

                child.parentCtx = undefined

                // console.log("parent now has " + ctx.children!.length + " children")
                // this.printChildren(ctx)
            }

            //  console.log("Post flattening:")
            //  console.log("parent now has " + ctx.children!.length + " children")
            //  this.printChildren(ctx)
        }

        return ctx
    }

}