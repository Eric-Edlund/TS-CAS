// Generated from ./src/mathlib/userinput/arithmetic.g4 by ANTLR 4.13.0

import {ParseTreeVisitor} from 'antlr4';


import { EquationContext } from "./arithmeticParser";
import { ExpressionContext } from "./arithmeticParser";
import { ImplicitProductContext } from "./arithmeticParser";
import { ProductContext } from "./arithmeticParser";
import { DivisionContext } from "./arithmeticParser";
import { SumContext } from "./arithmeticParser";
import { UnaryOnExpressionContext } from "./arithmeticParser";
import { PowerContext } from "./arithmeticParser";
import { UnaryOnAtomContext } from "./arithmeticParser";
import { ParenContext } from "./arithmeticParser";
import { AtomContext } from "./arithmeticParser";
import { RelopContext } from "./arithmeticParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `arithmeticParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class arithmeticVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `arithmeticParser.equation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquation?: (ctx: EquationContext) => Result;
	/**
	 * Visit a parse tree produced by `arithmeticParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `ImplicitProduct`
	 * labeled alternative in `arithmeticParser.expression_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplicitProduct?: (ctx: ImplicitProductContext) => Result;
	/**
	 * Visit a parse tree produced by the `Product`
	 * labeled alternative in `arithmeticParser.expression_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProduct?: (ctx: ProductContext) => Result;
	/**
	 * Visit a parse tree produced by the `Division`
	 * labeled alternative in `arithmeticParser.expression_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDivision?: (ctx: DivisionContext) => Result;
	/**
	 * Visit a parse tree produced by the `Sum`
	 * labeled alternative in `arithmeticParser.expression_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSum?: (ctx: SumContext) => Result;
	/**
	 * Visit a parse tree produced by the `UnaryOnExpression`
	 * labeled alternative in `arithmeticParser.expression_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryOnExpression?: (ctx: UnaryOnExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `Power`
	 * labeled alternative in `arithmeticParser.expression_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPower?: (ctx: PowerContext) => Result;
	/**
	 * Visit a parse tree produced by the `UnaryOnAtom`
	 * labeled alternative in `arithmeticParser.expression_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryOnAtom?: (ctx: UnaryOnAtomContext) => Result;
	/**
	 * Visit a parse tree produced by the `Paren`
	 * labeled alternative in `arithmeticParser.expression_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParen?: (ctx: ParenContext) => Result;
	/**
	 * Visit a parse tree produced by `arithmeticParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;
	/**
	 * Visit a parse tree produced by `arithmeticParser.relop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelop?: (ctx: RelopContext) => Result;
}

