// Generated from ./src/mathlib/userinput/arithmetic.g4 by ANTLR 4.13.0

import { ParseTreeVisitor } from "antlr4"

import { EquationContext } from "./arithmeticParser"
import { ExpressionContext } from "./arithmeticParser"
import { LogContext } from "./arithmeticParser"
import { IntegralContext } from "./arithmeticParser"
import { ProductContext } from "./arithmeticParser"
import { DivisionContext } from "./arithmeticParser"
import { ClosedAtomContext } from "./arithmeticParser"
import { PowerContext } from "./arithmeticParser"
import { ParenContext } from "./arithmeticParser"
import { UnaryOnExpressionContext } from "./arithmeticParser"
import { ClosedIsRight_ClosedContext } from "./arithmeticParser"
import { Right_ClosedImplicitProductContext } from "./arithmeticParser"
import { Right_ClosedIsOpenContext } from "./arithmeticParser"
import { SumContext } from "./arithmeticParser"
import { AtomContext } from "./arithmeticParser"
import { RelopContext } from "./arithmeticParser"

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `arithmeticParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class arithmeticVisitor<
    Result
> extends ParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `arithmeticParser.equation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEquation?: (ctx: EquationContext) => Result
    /**
     * Visit a parse tree produced by `arithmeticParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result
    /**
     * Visit a parse tree produced by the `Log`
     * labeled alternative in `arithmeticParser.closed`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLog?: (ctx: LogContext) => Result
    /**
     * Visit a parse tree produced by the `Integral`
     * labeled alternative in `arithmeticParser.closed`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntegral?: (ctx: IntegralContext) => Result
    /**
     * Visit a parse tree produced by the `Product`
     * labeled alternative in `arithmeticParser.closed`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProduct?: (ctx: ProductContext) => Result
    /**
     * Visit a parse tree produced by the `Division`
     * labeled alternative in `arithmeticParser.closed`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDivision?: (ctx: DivisionContext) => Result
    /**
     * Visit a parse tree produced by the `ClosedAtom`
     * labeled alternative in `arithmeticParser.closed`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClosedAtom?: (ctx: ClosedAtomContext) => Result
    /**
     * Visit a parse tree produced by the `Power`
     * labeled alternative in `arithmeticParser.closed`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPower?: (ctx: PowerContext) => Result
    /**
     * Visit a parse tree produced by the `Paren`
     * labeled alternative in `arithmeticParser.closed`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParen?: (ctx: ParenContext) => Result
    /**
     * Visit a parse tree produced by the `UnaryOnExpression`
     * labeled alternative in `arithmeticParser.right_closed`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryOnExpression?: (ctx: UnaryOnExpressionContext) => Result
    /**
     * Visit a parse tree produced by the `ClosedIsRight_Closed`
     * labeled alternative in `arithmeticParser.right_closed`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClosedIsRight_Closed?: (ctx: ClosedIsRight_ClosedContext) => Result
    /**
     * Visit a parse tree produced by the `Right_ClosedImplicitProduct`
     * labeled alternative in `arithmeticParser.right_closed`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRight_ClosedImplicitProduct?: (
        ctx: Right_ClosedImplicitProductContext
    ) => Result
    /**
     * Visit a parse tree produced by the `Right_ClosedIsOpen`
     * labeled alternative in `arithmeticParser.open`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRight_ClosedIsOpen?: (ctx: Right_ClosedIsOpenContext) => Result
    /**
     * Visit a parse tree produced by the `Sum`
     * labeled alternative in `arithmeticParser.open`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSum?: (ctx: SumContext) => Result
    /**
     * Visit a parse tree produced by `arithmeticParser.atom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAtom?: (ctx: AtomContext) => Result
    /**
     * Visit a parse tree produced by `arithmeticParser.relop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelop?: (ctx: RelopContext) => Result
}
