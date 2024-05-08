import { ParserRuleContext, ParseTree, TerminalNode } from "antlr4"
import { remove } from "../ConvenientExpressions"
import {
    ClosedContext,
    ExpressionContext,
    OpenContext,
    ProductContext,
    SumContext,
    UnaryOnExpressionContext
} from "./arithmeticParser"
import arithmeticVisitor from "./arithmeticVisitor"

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
     * This prevents us from needing to rearranging the
     * AST on the way back out.
     */
    private flattenAddition(ctx: SumContext): ClosedContext {
        // Check if children are sums
        // Reach down and take their children
        function takeChildren(child: SumContext) {
            remove(ctx.children!, child)

            // Move the expression up
            if (child._right instanceof SumContext) {
                takeChildren(child._right)
            } else {
                child._right.parentCtx = ctx
                ctx.children!.unshift(child._right)
            }
            // TODO: This isn't always correct because negation of sums
            // Or is is...
            // Also look at product flattening

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

            if (child._left instanceof SumContext) {
                takeChildren(child._left)
            } else {
                child._left.parentCtx = ctx
                ctx.children!.unshift(child._left)
            }

            child.parentCtx = undefined
        }
        if (ctx._left instanceof SumContext) takeChildren(ctx._left)
        if (ctx._right instanceof SumContext) takeChildren(ctx._right)

        return ctx
    }

    visitProduct = (ctx: ProductContext): ClosedContext => {
        const flattened = this.flattenProduct(ctx)
        for (const child of flattened.children!) {
            this.visit(child)
        }
        return flattened
    }

    private flattenProduct(ctx: ProductContext): ClosedContext {
        //console.log("Flattening product " + ctx.getText() + " to")

        function instanceOfProduct(child: ParserRuleContext): boolean {
            return child instanceof ProductContext
        }

        // Check if children are sums
        // Reach down and take their children
        function takeChildren(child: ProductContext) {
            remove(ctx.children!, child)

            if (instanceOfProduct(child._right)) {
                takeChildren(child._right as ProductContext)
            } else {
                child._right.parentCtx = ctx
                ctx.children!.unshift(child._right)
            }

            // Move the operator up
            if (child.TIMES() != null) {
                child.TIMES().parentCtx = ctx
                ctx.children!.unshift(child.TIMES())
            }

            if (instanceOfProduct(child._left)) {
                takeChildren(child._left as ProductContext)
            } else {
                child._left.parentCtx = ctx
                ctx.children!.unshift(child._left)
            }

            child.parentCtx = undefined
        }
        if (instanceOfProduct(ctx._left))
            takeChildren(ctx._left as ProductContext)
        if (instanceOfProduct(ctx._right))
            takeChildren(ctx._right as ProductContext)

        //console.log(ctx.getText())
        return ctx
    }
}
