import { ParseTree, TerminalNode } from "antlr4";
import { remove } from "../ConvenientExpressions";
import { ClosedContext, ExpressionContext, ImplicitProductContext, ProductContext, SumContext, UnaryOnExpressionContext } from "./arithmeticParser";
import arithmeticVisitor from "./arithmeticVisitor";


/**
 * Visitor that flattens sums and products in ASTs.
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
export class Flattener extends arithmeticVisitor<ClosedContext> {

    visitSum = (ctx: SumContext): ClosedContext => {
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
    private flattenAddition(ctx: SumContext): ClosedContext {
        // Check if children are sums
        // Reach down and take their children
        function takeChildren(child: SumContext) {
            remove(ctx.children!, child)
            
            // Move the expression up
            child._right.parentCtx = ctx
            ctx.children!.unshift(child._right)

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
            
            child._left.parentCtx = ctx
            ctx.children!.unshift(child._left)

            child.parentCtx = undefined
        }
        if (ctx._left instanceof SumContext) 
            takeChildren(ctx._left)
        if (ctx._right instanceof SumContext) 
            takeChildren(ctx._right)

        return ctx
    }

    visitProduct = (ctx: ProductContext): ClosedContext => {
        const flattened = this.flattenProduct(ctx)
        for (const child of flattened.children!) {
            this.visit(child)
        }
        return flattened
    }

    visitImplicitProduct = (ctx: ImplicitProductContext): ClosedContext => {
        const flattened = this.flattenProduct(ctx)
        for (const child of flattened.children!) {
            this.visit(child)
        }
        return flattened
    }

    private flattenProduct(ctx: ProductContext | ImplicitProductContext): ClosedContext {
        console.log("Flattening product " + ctx.getText() + " to")

        // Check if children are sums
        // Reach down and take their children
        function takeChildren(child: ProductContext | ImplicitProductContext) {
            remove(ctx.children!, child)
            
            child._right.parentCtx = ctx
            ctx.children!.unshift(child._right)

            // Move the operator up
            if (child instanceof ProductContext) {
                child.TIMES().parentCtx = ctx
                ctx.children!.unshift(child.TIMES())
            }

            child._left.parentCtx = ctx
            ctx.children!.unshift(child._left)

            child.parentCtx = undefined
        }
        if (ctx._left instanceof ProductContext) 
            takeChildren(ctx._left)
        if (ctx._right instanceof ProductContext) 
            takeChildren(ctx._right)

        console.log(ctx.getText())
        return ctx
    }
}