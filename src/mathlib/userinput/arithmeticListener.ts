// Generated from ./src/mathlib/userinput/arithmetic.g4 by ANTLR 4.13.0

import {ParseTreeListener} from "antlr4";


import { EquationContext } from "./arithmeticParser";
import { ExpressionContext } from "./arithmeticParser";
import { ImplicitProductContext } from "./arithmeticParser";
import { LogContext } from "./arithmeticParser";
import { ProductContext } from "./arithmeticParser";
import { DivisionContext } from "./arithmeticParser";
import { ClosedAtomContext } from "./arithmeticParser";
import { PowerContext } from "./arithmeticParser";
import { ParenContext } from "./arithmeticParser";
import { UnaryOnExpressionContext } from "./arithmeticParser";
import { ClosedIsRight_ClosedContext } from "./arithmeticParser";
import { Right_ClosedImplicitProductContext } from "./arithmeticParser";
import { Right_ClosedIsOpenContext } from "./arithmeticParser";
import { IntegralContext } from "./arithmeticParser";
import { SumContext } from "./arithmeticParser";
import { AtomContext } from "./arithmeticParser";
import { RelopContext } from "./arithmeticParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `arithmeticParser`.
 */
export default class arithmeticListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `arithmeticParser.equation`.
	 * @param ctx the parse tree
	 */
	enterEquation?: (ctx: EquationContext) => void;
	/**
	 * Exit a parse tree produced by `arithmeticParser.equation`.
	 * @param ctx the parse tree
	 */
	exitEquation?: (ctx: EquationContext) => void;
	/**
	 * Enter a parse tree produced by `arithmeticParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `arithmeticParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `ImplicitProduct`
	 * labeled alternative in `arithmeticParser.closed`.
	 * @param ctx the parse tree
	 */
	enterImplicitProduct?: (ctx: ImplicitProductContext) => void;
	/**
	 * Exit a parse tree produced by the `ImplicitProduct`
	 * labeled alternative in `arithmeticParser.closed`.
	 * @param ctx the parse tree
	 */
	exitImplicitProduct?: (ctx: ImplicitProductContext) => void;
	/**
	 * Enter a parse tree produced by the `Log`
	 * labeled alternative in `arithmeticParser.closed`.
	 * @param ctx the parse tree
	 */
	enterLog?: (ctx: LogContext) => void;
	/**
	 * Exit a parse tree produced by the `Log`
	 * labeled alternative in `arithmeticParser.closed`.
	 * @param ctx the parse tree
	 */
	exitLog?: (ctx: LogContext) => void;
	/**
	 * Enter a parse tree produced by the `Product`
	 * labeled alternative in `arithmeticParser.closed`.
	 * @param ctx the parse tree
	 */
	enterProduct?: (ctx: ProductContext) => void;
	/**
	 * Exit a parse tree produced by the `Product`
	 * labeled alternative in `arithmeticParser.closed`.
	 * @param ctx the parse tree
	 */
	exitProduct?: (ctx: ProductContext) => void;
	/**
	 * Enter a parse tree produced by the `Division`
	 * labeled alternative in `arithmeticParser.closed`.
	 * @param ctx the parse tree
	 */
	enterDivision?: (ctx: DivisionContext) => void;
	/**
	 * Exit a parse tree produced by the `Division`
	 * labeled alternative in `arithmeticParser.closed`.
	 * @param ctx the parse tree
	 */
	exitDivision?: (ctx: DivisionContext) => void;
	/**
	 * Enter a parse tree produced by the `ClosedAtom`
	 * labeled alternative in `arithmeticParser.closed`.
	 * @param ctx the parse tree
	 */
	enterClosedAtom?: (ctx: ClosedAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `ClosedAtom`
	 * labeled alternative in `arithmeticParser.closed`.
	 * @param ctx the parse tree
	 */
	exitClosedAtom?: (ctx: ClosedAtomContext) => void;
	/**
	 * Enter a parse tree produced by the `Power`
	 * labeled alternative in `arithmeticParser.closed`.
	 * @param ctx the parse tree
	 */
	enterPower?: (ctx: PowerContext) => void;
	/**
	 * Exit a parse tree produced by the `Power`
	 * labeled alternative in `arithmeticParser.closed`.
	 * @param ctx the parse tree
	 */
	exitPower?: (ctx: PowerContext) => void;
	/**
	 * Enter a parse tree produced by the `Paren`
	 * labeled alternative in `arithmeticParser.closed`.
	 * @param ctx the parse tree
	 */
	enterParen?: (ctx: ParenContext) => void;
	/**
	 * Exit a parse tree produced by the `Paren`
	 * labeled alternative in `arithmeticParser.closed`.
	 * @param ctx the parse tree
	 */
	exitParen?: (ctx: ParenContext) => void;
	/**
	 * Enter a parse tree produced by the `UnaryOnExpression`
	 * labeled alternative in `arithmeticParser.right_closed`.
	 * @param ctx the parse tree
	 */
	enterUnaryOnExpression?: (ctx: UnaryOnExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryOnExpression`
	 * labeled alternative in `arithmeticParser.right_closed`.
	 * @param ctx the parse tree
	 */
	exitUnaryOnExpression?: (ctx: UnaryOnExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `ClosedIsRight_Closed`
	 * labeled alternative in `arithmeticParser.right_closed`.
	 * @param ctx the parse tree
	 */
	enterClosedIsRight_Closed?: (ctx: ClosedIsRight_ClosedContext) => void;
	/**
	 * Exit a parse tree produced by the `ClosedIsRight_Closed`
	 * labeled alternative in `arithmeticParser.right_closed`.
	 * @param ctx the parse tree
	 */
	exitClosedIsRight_Closed?: (ctx: ClosedIsRight_ClosedContext) => void;
	/**
	 * Enter a parse tree produced by the `Right_ClosedImplicitProduct`
	 * labeled alternative in `arithmeticParser.right_closed`.
	 * @param ctx the parse tree
	 */
	enterRight_ClosedImplicitProduct?: (ctx: Right_ClosedImplicitProductContext) => void;
	/**
	 * Exit a parse tree produced by the `Right_ClosedImplicitProduct`
	 * labeled alternative in `arithmeticParser.right_closed`.
	 * @param ctx the parse tree
	 */
	exitRight_ClosedImplicitProduct?: (ctx: Right_ClosedImplicitProductContext) => void;
	/**
	 * Enter a parse tree produced by the `Right_ClosedIsOpen`
	 * labeled alternative in `arithmeticParser.open`.
	 * @param ctx the parse tree
	 */
	enterRight_ClosedIsOpen?: (ctx: Right_ClosedIsOpenContext) => void;
	/**
	 * Exit a parse tree produced by the `Right_ClosedIsOpen`
	 * labeled alternative in `arithmeticParser.open`.
	 * @param ctx the parse tree
	 */
	exitRight_ClosedIsOpen?: (ctx: Right_ClosedIsOpenContext) => void;
	/**
	 * Enter a parse tree produced by the `Integral`
	 * labeled alternative in `arithmeticParser.open`.
	 * @param ctx the parse tree
	 */
	enterIntegral?: (ctx: IntegralContext) => void;
	/**
	 * Exit a parse tree produced by the `Integral`
	 * labeled alternative in `arithmeticParser.open`.
	 * @param ctx the parse tree
	 */
	exitIntegral?: (ctx: IntegralContext) => void;
	/**
	 * Enter a parse tree produced by the `Sum`
	 * labeled alternative in `arithmeticParser.open`.
	 * @param ctx the parse tree
	 */
	enterSum?: (ctx: SumContext) => void;
	/**
	 * Exit a parse tree produced by the `Sum`
	 * labeled alternative in `arithmeticParser.open`.
	 * @param ctx the parse tree
	 */
	exitSum?: (ctx: SumContext) => void;
	/**
	 * Enter a parse tree produced by `arithmeticParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `arithmeticParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;
	/**
	 * Enter a parse tree produced by `arithmeticParser.relop`.
	 * @param ctx the parse tree
	 */
	enterRelop?: (ctx: RelopContext) => void;
	/**
	 * Exit a parse tree produced by `arithmeticParser.relop`.
	 * @param ctx the parse tree
	 */
	exitRelop?: (ctx: RelopContext) => void;
}

