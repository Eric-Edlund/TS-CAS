// Generated from ./src/mathlib/userinput/arithmetic.g4 by ANTLR 4.13.0

import {ParseTreeListener} from "antlr4";


import { EquationContext } from "./arithmeticParser";
import { ExpressionContext } from "./arithmeticParser";
import { ProductContext } from "./arithmeticParser";
import { DivisionContext } from "./arithmeticParser";
import { SumContext } from "./arithmeticParser";
import { UnaryOnExpressionContext } from "./arithmeticParser";
import { PowerContext } from "./arithmeticParser";
import { ParenContext } from "./arithmeticParser";
import { UnaryOnAtomContext } from "./arithmeticParser";
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
	 * Enter a parse tree produced by the `Product`
	 * labeled alternative in `arithmeticParser.expression_part`.
	 * @param ctx the parse tree
	 */
	enterProduct?: (ctx: ProductContext) => void;
	/**
	 * Exit a parse tree produced by the `Product`
	 * labeled alternative in `arithmeticParser.expression_part`.
	 * @param ctx the parse tree
	 */
	exitProduct?: (ctx: ProductContext) => void;
	/**
	 * Enter a parse tree produced by the `Division`
	 * labeled alternative in `arithmeticParser.expression_part`.
	 * @param ctx the parse tree
	 */
	enterDivision?: (ctx: DivisionContext) => void;
	/**
	 * Exit a parse tree produced by the `Division`
	 * labeled alternative in `arithmeticParser.expression_part`.
	 * @param ctx the parse tree
	 */
	exitDivision?: (ctx: DivisionContext) => void;
	/**
	 * Enter a parse tree produced by the `Sum`
	 * labeled alternative in `arithmeticParser.expression_part`.
	 * @param ctx the parse tree
	 */
	enterSum?: (ctx: SumContext) => void;
	/**
	 * Exit a parse tree produced by the `Sum`
	 * labeled alternative in `arithmeticParser.expression_part`.
	 * @param ctx the parse tree
	 */
	exitSum?: (ctx: SumContext) => void;
	/**
	 * Enter a parse tree produced by the `UnaryOnExpression`
	 * labeled alternative in `arithmeticParser.expression_part`.
	 * @param ctx the parse tree
	 */
	enterUnaryOnExpression?: (ctx: UnaryOnExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryOnExpression`
	 * labeled alternative in `arithmeticParser.expression_part`.
	 * @param ctx the parse tree
	 */
	exitUnaryOnExpression?: (ctx: UnaryOnExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `Power`
	 * labeled alternative in `arithmeticParser.expression_part`.
	 * @param ctx the parse tree
	 */
	enterPower?: (ctx: PowerContext) => void;
	/**
	 * Exit a parse tree produced by the `Power`
	 * labeled alternative in `arithmeticParser.expression_part`.
	 * @param ctx the parse tree
	 */
	exitPower?: (ctx: PowerContext) => void;
	/**
	 * Enter a parse tree produced by the `Paren`
	 * labeled alternative in `arithmeticParser.expression_part`.
	 * @param ctx the parse tree
	 */
	enterParen?: (ctx: ParenContext) => void;
	/**
	 * Exit a parse tree produced by the `Paren`
	 * labeled alternative in `arithmeticParser.expression_part`.
	 * @param ctx the parse tree
	 */
	exitParen?: (ctx: ParenContext) => void;
	/**
	 * Enter a parse tree produced by the `UnaryOnAtom`
	 * labeled alternative in `arithmeticParser.expression_part`.
	 * @param ctx the parse tree
	 */
	enterUnaryOnAtom?: (ctx: UnaryOnAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryOnAtom`
	 * labeled alternative in `arithmeticParser.expression_part`.
	 * @param ctx the parse tree
	 */
	exitUnaryOnAtom?: (ctx: UnaryOnAtomContext) => void;
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

