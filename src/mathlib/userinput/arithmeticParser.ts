// Generated from ./src/mathlib/userinput/arithmetic.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import arithmeticListener from "./arithmeticListener.js";
import arithmeticVisitor from "./arithmeticVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class arithmeticParser extends Parser {
	public static readonly VARIABLE = 1;
	public static readonly SCIENTIFIC_NUMBER = 2;
	public static readonly LPAREN = 3;
	public static readonly RPAREN = 4;
	public static readonly PLUS = 5;
	public static readonly MINUS = 6;
	public static readonly TIMES = 7;
	public static readonly DIV = 8;
	public static readonly GT = 9;
	public static readonly LT = 10;
	public static readonly EQ = 11;
	public static readonly POINT = 12;
	public static readonly POW = 13;
	public static readonly WS = 14;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_equation = 0;
	public static readonly RULE_expression = 1;
	public static readonly RULE_expression_part = 2;
	public static readonly RULE_atom = 3;
	public static readonly RULE_relop = 4;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, "'('", 
                                                            "')'", "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'>'", 
                                                            "'<'", "'='", 
                                                            "'.'", "'^'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "VARIABLE", 
                                                             "SCIENTIFIC_NUMBER", 
                                                             "LPAREN", "RPAREN", 
                                                             "PLUS", "MINUS", 
                                                             "TIMES", "DIV", 
                                                             "GT", "LT", 
                                                             "EQ", "POINT", 
                                                             "POW", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"equation", "expression", "expression_part", "atom", "relop",
	];
	public get grammarFileName(): string { return "arithmetic.g4"; }
	public get literalNames(): (string | null)[] { return arithmeticParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return arithmeticParser.symbolicNames; }
	public get ruleNames(): string[] { return arithmeticParser.ruleNames; }
	public get serializedATN(): number[] { return arithmeticParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, arithmeticParser._ATN, arithmeticParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public equation(): EquationContext {
		let localctx: EquationContext = new EquationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, arithmeticParser.RULE_equation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 10;
			this.expression();
			this.state = 11;
			this.relop();
			this.state = 12;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, arithmeticParser.RULE_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 14;
			this.expression_part(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expression_part(): Expression_partContext;
	public expression_part(_p: number): Expression_partContext;
	// @RuleVersion(0)
	public expression_part(_p?: number): Expression_partContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Expression_partContext = new Expression_partContext(this, this._ctx, _parentState);
		let _prevctx: Expression_partContext = localctx;
		let _startState: number = 4;
		this.enterRecursionRule(localctx, 4, arithmeticParser.RULE_expression_part, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 33;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				localctx = new ImplicitProductContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 17;
				(localctx as ImplicitProductContext)._left = this.atom();
				this.state = 18;
				(localctx as ImplicitProductContext)._right = this.atom();
				}
				break;
			case 2:
				{
				localctx = new UnaryOnExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 20;
				_la = this._input.LA(1);
				if(!(_la===5 || _la===6)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 21;
				this.expression_part(4);
				}
				break;
			case 3:
				{
				localctx = new UnaryOnAtomContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 25;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5 || _la===6) {
					{
					{
					this.state = 22;
					_la = this._input.LA(1);
					if(!(_la===5 || _la===6)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					this.state = 27;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 28;
				this.atom();
				}
				break;
			case 4:
				{
				localctx = new ParenContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 29;
				this.match(arithmeticParser.LPAREN);
				this.state = 30;
				this.expression_part(0);
				this.state = 31;
				this.match(arithmeticParser.RPAREN);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 49;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 47;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						localctx = new PowerContext(this, new Expression_partContext(this, _parentctx, _parentState));
						(localctx as PowerContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, arithmeticParser.RULE_expression_part);
						this.state = 35;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 36;
						this.match(arithmeticParser.POW);
						this.state = 37;
						(localctx as PowerContext)._right = this.expression_part(9);
						}
						break;
					case 2:
						{
						localctx = new DivisionContext(this, new Expression_partContext(this, _parentctx, _parentState));
						(localctx as DivisionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, arithmeticParser.RULE_expression_part);
						this.state = 38;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 39;
						this.match(arithmeticParser.DIV);
						this.state = 40;
						(localctx as DivisionContext)._right = this.expression_part(8);
						}
						break;
					case 3:
						{
						localctx = new ProductContext(this, new Expression_partContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, arithmeticParser.RULE_expression_part);
						this.state = 41;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 42;
						this.match(arithmeticParser.TIMES);
						this.state = 43;
						this.expression_part(7);
						}
						break;
					case 4:
						{
						localctx = new SumContext(this, new Expression_partContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, arithmeticParser.RULE_expression_part);
						this.state = 44;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 45;
						_la = this._input.LA(1);
						if(!(_la===5 || _la===6)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 46;
						this.expression_part(3);
						}
						break;
					}
					}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let localctx: AtomContext = new AtomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, arithmeticParser.RULE_atom);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 52;
			_la = this._input.LA(1);
			if(!(_la===1 || _la===2)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relop(): RelopContext {
		let localctx: RelopContext = new RelopContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, arithmeticParser.RULE_relop);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 54;
			this.match(arithmeticParser.EQ);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.expression_part_sempred(localctx as Expression_partContext, predIndex);
		}
		return true;
	}
	private expression_part_sempred(localctx: Expression_partContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 8);
		case 1:
			return this.precpred(this._ctx, 7);
		case 2:
			return this.precpred(this._ctx, 6);
		case 3:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,14,57,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,
	2,1,2,1,2,5,2,24,8,2,10,2,12,2,27,9,2,1,2,1,2,1,2,1,2,1,2,3,2,34,8,2,1,
	2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,48,8,2,10,2,12,2,51,9,
	2,1,3,1,3,1,4,1,4,1,4,0,1,4,5,0,2,4,6,8,0,2,1,0,5,6,1,0,1,2,59,0,10,1,0,
	0,0,2,14,1,0,0,0,4,33,1,0,0,0,6,52,1,0,0,0,8,54,1,0,0,0,10,11,3,2,1,0,11,
	12,3,8,4,0,12,13,3,2,1,0,13,1,1,0,0,0,14,15,3,4,2,0,15,3,1,0,0,0,16,17,
	6,2,-1,0,17,18,3,6,3,0,18,19,3,6,3,0,19,34,1,0,0,0,20,21,7,0,0,0,21,34,
	3,4,2,4,22,24,7,0,0,0,23,22,1,0,0,0,24,27,1,0,0,0,25,23,1,0,0,0,25,26,1,
	0,0,0,26,28,1,0,0,0,27,25,1,0,0,0,28,34,3,6,3,0,29,30,5,3,0,0,30,31,3,4,
	2,0,31,32,5,4,0,0,32,34,1,0,0,0,33,16,1,0,0,0,33,20,1,0,0,0,33,25,1,0,0,
	0,33,29,1,0,0,0,34,49,1,0,0,0,35,36,10,8,0,0,36,37,5,13,0,0,37,48,3,4,2,
	9,38,39,10,7,0,0,39,40,5,8,0,0,40,48,3,4,2,8,41,42,10,6,0,0,42,43,5,7,0,
	0,43,48,3,4,2,7,44,45,10,2,0,0,45,46,7,0,0,0,46,48,3,4,2,3,47,35,1,0,0,
	0,47,38,1,0,0,0,47,41,1,0,0,0,47,44,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,
	49,50,1,0,0,0,50,5,1,0,0,0,51,49,1,0,0,0,52,53,7,1,0,0,53,7,1,0,0,0,54,
	55,5,11,0,0,55,9,1,0,0,0,4,25,33,47,49];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!arithmeticParser.__ATN) {
			arithmeticParser.__ATN = new ATNDeserializer().deserialize(arithmeticParser._serializedATN);
		}

		return arithmeticParser.__ATN;
	}


	static DecisionsToDFA = arithmeticParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class EquationContext extends ParserRuleContext {
	constructor(parser?: arithmeticParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public relop(): RelopContext {
		return this.getTypedRuleContext(RelopContext, 0) as RelopContext;
	}
    public get ruleIndex(): number {
    	return arithmeticParser.RULE_equation;
	}
	public enterRule(listener: arithmeticListener): void {
	    if(listener.enterEquation) {
	 		listener.enterEquation(this);
		}
	}
	public exitRule(listener: arithmeticListener): void {
	    if(listener.exitEquation) {
	 		listener.exitEquation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: arithmeticVisitor<Result>): Result {
		if (visitor.visitEquation) {
			return visitor.visitEquation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: arithmeticParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_part(): Expression_partContext {
		return this.getTypedRuleContext(Expression_partContext, 0) as Expression_partContext;
	}
    public get ruleIndex(): number {
    	return arithmeticParser.RULE_expression;
	}
	public enterRule(listener: arithmeticListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: arithmeticListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: arithmeticVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expression_partContext extends ParserRuleContext {
	constructor(parser?: arithmeticParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return arithmeticParser.RULE_expression_part;
	}
	public copyFrom(ctx: Expression_partContext): void {
		super.copyFrom(ctx);
	}
}
export class ImplicitProductContext extends Expression_partContext {
	public _left!: AtomContext;
	public _right!: AtomContext;
	constructor(parser: arithmeticParser, ctx: Expression_partContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public atom_list(): AtomContext[] {
		return this.getTypedRuleContexts(AtomContext) as AtomContext[];
	}
	public atom(i: number): AtomContext {
		return this.getTypedRuleContext(AtomContext, i) as AtomContext;
	}
	public enterRule(listener: arithmeticListener): void {
	    if(listener.enterImplicitProduct) {
	 		listener.enterImplicitProduct(this);
		}
	}
	public exitRule(listener: arithmeticListener): void {
	    if(listener.exitImplicitProduct) {
	 		listener.exitImplicitProduct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: arithmeticVisitor<Result>): Result {
		if (visitor.visitImplicitProduct) {
			return visitor.visitImplicitProduct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ProductContext extends Expression_partContext {
	constructor(parser: arithmeticParser, ctx: Expression_partContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_part_list(): Expression_partContext[] {
		return this.getTypedRuleContexts(Expression_partContext) as Expression_partContext[];
	}
	public expression_part(i: number): Expression_partContext {
		return this.getTypedRuleContext(Expression_partContext, i) as Expression_partContext;
	}
	public TIMES(): TerminalNode {
		return this.getToken(arithmeticParser.TIMES, 0);
	}
	public enterRule(listener: arithmeticListener): void {
	    if(listener.enterProduct) {
	 		listener.enterProduct(this);
		}
	}
	public exitRule(listener: arithmeticListener): void {
	    if(listener.exitProduct) {
	 		listener.exitProduct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: arithmeticVisitor<Result>): Result {
		if (visitor.visitProduct) {
			return visitor.visitProduct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DivisionContext extends Expression_partContext {
	public _left!: Expression_partContext;
	public _right!: Expression_partContext;
	constructor(parser: arithmeticParser, ctx: Expression_partContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DIV(): TerminalNode {
		return this.getToken(arithmeticParser.DIV, 0);
	}
	public expression_part_list(): Expression_partContext[] {
		return this.getTypedRuleContexts(Expression_partContext) as Expression_partContext[];
	}
	public expression_part(i: number): Expression_partContext {
		return this.getTypedRuleContext(Expression_partContext, i) as Expression_partContext;
	}
	public enterRule(listener: arithmeticListener): void {
	    if(listener.enterDivision) {
	 		listener.enterDivision(this);
		}
	}
	public exitRule(listener: arithmeticListener): void {
	    if(listener.exitDivision) {
	 		listener.exitDivision(this);
		}
	}
	// @Override
	public accept<Result>(visitor: arithmeticVisitor<Result>): Result {
		if (visitor.visitDivision) {
			return visitor.visitDivision(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SumContext extends Expression_partContext {
	constructor(parser: arithmeticParser, ctx: Expression_partContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_part_list(): Expression_partContext[] {
		return this.getTypedRuleContexts(Expression_partContext) as Expression_partContext[];
	}
	public expression_part(i: number): Expression_partContext {
		return this.getTypedRuleContext(Expression_partContext, i) as Expression_partContext;
	}
	public PLUS(): TerminalNode {
		return this.getToken(arithmeticParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(arithmeticParser.MINUS, 0);
	}
	public enterRule(listener: arithmeticListener): void {
	    if(listener.enterSum) {
	 		listener.enterSum(this);
		}
	}
	public exitRule(listener: arithmeticListener): void {
	    if(listener.exitSum) {
	 		listener.exitSum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: arithmeticVisitor<Result>): Result {
		if (visitor.visitSum) {
			return visitor.visitSum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryOnExpressionContext extends Expression_partContext {
	constructor(parser: arithmeticParser, ctx: Expression_partContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_part(): Expression_partContext {
		return this.getTypedRuleContext(Expression_partContext, 0) as Expression_partContext;
	}
	public PLUS(): TerminalNode {
		return this.getToken(arithmeticParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(arithmeticParser.MINUS, 0);
	}
	public enterRule(listener: arithmeticListener): void {
	    if(listener.enterUnaryOnExpression) {
	 		listener.enterUnaryOnExpression(this);
		}
	}
	public exitRule(listener: arithmeticListener): void {
	    if(listener.exitUnaryOnExpression) {
	 		listener.exitUnaryOnExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: arithmeticVisitor<Result>): Result {
		if (visitor.visitUnaryOnExpression) {
			return visitor.visitUnaryOnExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PowerContext extends Expression_partContext {
	public _left!: Expression_partContext;
	public _right!: Expression_partContext;
	constructor(parser: arithmeticParser, ctx: Expression_partContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public POW(): TerminalNode {
		return this.getToken(arithmeticParser.POW, 0);
	}
	public expression_part_list(): Expression_partContext[] {
		return this.getTypedRuleContexts(Expression_partContext) as Expression_partContext[];
	}
	public expression_part(i: number): Expression_partContext {
		return this.getTypedRuleContext(Expression_partContext, i) as Expression_partContext;
	}
	public enterRule(listener: arithmeticListener): void {
	    if(listener.enterPower) {
	 		listener.enterPower(this);
		}
	}
	public exitRule(listener: arithmeticListener): void {
	    if(listener.exitPower) {
	 		listener.exitPower(this);
		}
	}
	// @Override
	public accept<Result>(visitor: arithmeticVisitor<Result>): Result {
		if (visitor.visitPower) {
			return visitor.visitPower(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryOnAtomContext extends Expression_partContext {
	constructor(parser: arithmeticParser, ctx: Expression_partContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public atom(): AtomContext {
		return this.getTypedRuleContext(AtomContext, 0) as AtomContext;
	}
	public PLUS_list(): TerminalNode[] {
	    	return this.getTokens(arithmeticParser.PLUS);
	}
	public PLUS(i: number): TerminalNode {
		return this.getToken(arithmeticParser.PLUS, i);
	}
	public MINUS_list(): TerminalNode[] {
	    	return this.getTokens(arithmeticParser.MINUS);
	}
	public MINUS(i: number): TerminalNode {
		return this.getToken(arithmeticParser.MINUS, i);
	}
	public enterRule(listener: arithmeticListener): void {
	    if(listener.enterUnaryOnAtom) {
	 		listener.enterUnaryOnAtom(this);
		}
	}
	public exitRule(listener: arithmeticListener): void {
	    if(listener.exitUnaryOnAtom) {
	 		listener.exitUnaryOnAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: arithmeticVisitor<Result>): Result {
		if (visitor.visitUnaryOnAtom) {
			return visitor.visitUnaryOnAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenContext extends Expression_partContext {
	constructor(parser: arithmeticParser, ctx: Expression_partContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(arithmeticParser.LPAREN, 0);
	}
	public expression_part(): Expression_partContext {
		return this.getTypedRuleContext(Expression_partContext, 0) as Expression_partContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(arithmeticParser.RPAREN, 0);
	}
	public enterRule(listener: arithmeticListener): void {
	    if(listener.enterParen) {
	 		listener.enterParen(this);
		}
	}
	public exitRule(listener: arithmeticListener): void {
	    if(listener.exitParen) {
	 		listener.exitParen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: arithmeticVisitor<Result>): Result {
		if (visitor.visitParen) {
			return visitor.visitParen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	constructor(parser?: arithmeticParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SCIENTIFIC_NUMBER(): TerminalNode {
		return this.getToken(arithmeticParser.SCIENTIFIC_NUMBER, 0);
	}
	public VARIABLE(): TerminalNode {
		return this.getToken(arithmeticParser.VARIABLE, 0);
	}
    public get ruleIndex(): number {
    	return arithmeticParser.RULE_atom;
	}
	public enterRule(listener: arithmeticListener): void {
	    if(listener.enterAtom) {
	 		listener.enterAtom(this);
		}
	}
	public exitRule(listener: arithmeticListener): void {
	    if(listener.exitAtom) {
	 		listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: arithmeticVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelopContext extends ParserRuleContext {
	constructor(parser?: arithmeticParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQ(): TerminalNode {
		return this.getToken(arithmeticParser.EQ, 0);
	}
    public get ruleIndex(): number {
    	return arithmeticParser.RULE_relop;
	}
	public enterRule(listener: arithmeticListener): void {
	    if(listener.enterRelop) {
	 		listener.enterRelop(this);
		}
	}
	public exitRule(listener: arithmeticListener): void {
	    if(listener.exitRelop) {
	 		listener.exitRelop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: arithmeticVisitor<Result>): Result {
		if (visitor.visitRelop) {
			return visitor.visitRelop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
