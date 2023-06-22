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
	public static readonly SCIENTIFIC_NUMBER = 1;
	public static readonly LPAREN = 2;
	public static readonly RPAREN = 3;
	public static readonly PLUS = 4;
	public static readonly MINUS = 5;
	public static readonly TIMES = 6;
	public static readonly DIV = 7;
	public static readonly GT = 8;
	public static readonly LT = 9;
	public static readonly EQ = 10;
	public static readonly POINT = 11;
	public static readonly POW = 12;
	public static readonly INT = 13;
	public static readonly LOG = 14;
	public static readonly VARIABLE = 15;
	public static readonly WS = 16;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_equation = 0;
	public static readonly RULE_expression = 1;
	public static readonly RULE_closed = 2;
	public static readonly RULE_right_closed = 3;
	public static readonly RULE_open = 4;
	public static readonly RULE_atom = 5;
	public static readonly RULE_relop = 6;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            "'('", "')'", 
                                                            "'+'", "'-'", 
                                                            null, "'/'", 
                                                            "'>'", "'<'", 
                                                            "'='", "'.'", 
                                                            "'^'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "SCIENTIFIC_NUMBER", 
                                                             "LPAREN", "RPAREN", 
                                                             "PLUS", "MINUS", 
                                                             "TIMES", "DIV", 
                                                             "GT", "LT", 
                                                             "EQ", "POINT", 
                                                             "POW", "INT", 
                                                             "LOG", "VARIABLE", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"equation", "expression", "closed", "right_closed", "open", "atom", "relop",
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
			this.state = 14;
			this.expression();
			this.state = 15;
			this.relop();
			this.state = 16;
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
			this.state = 18;
			this.open(0);
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

	public closed(): ClosedContext;
	public closed(_p: number): ClosedContext;
	// @RuleVersion(0)
	public closed(_p?: number): ClosedContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ClosedContext = new ClosedContext(this, this._ctx, _parentState);
		let _prevctx: ClosedContext = localctx;
		let _startState: number = 4;
		this.enterRecursionRule(localctx, 4, arithmeticParser.RULE_closed, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 33;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				{
				localctx = new ParenContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 21;
				this.match(arithmeticParser.LPAREN);
				this.state = 22;
				this.open(0);
				this.state = 23;
				this.match(arithmeticParser.RPAREN);
				}
				break;
			case 1:
			case 15:
				{
				localctx = new ClosedAtomContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 25;
				this.atom();
				}
				break;
			case 14:
				{
				localctx = new LogContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 26;
				this.match(arithmeticParser.LOG);
				this.state = 28;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 27;
					(localctx as LogContext)._base = this.closed(0);
					}
					break;
				}
				this.state = 30;
				(localctx as LogContext)._content = this.closed(2);
				}
				break;
			case 13:
				{
				localctx = new IntegralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 31;
				this.match(arithmeticParser.INT);
				this.state = 32;
				(localctx as IntegralContext)._integrand = this.closed(1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 48;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 46;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						localctx = new DivisionContext(this, new ClosedContext(this, _parentctx, _parentState));
						(localctx as DivisionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, arithmeticParser.RULE_closed);
						this.state = 35;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 36;
						this.match(arithmeticParser.DIV);
						this.state = 37;
						(localctx as DivisionContext)._right = this.closed(7);
						}
						break;
					case 2:
						{
						localctx = new PowerContext(this, new ClosedContext(this, _parentctx, _parentState));
						(localctx as PowerContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, arithmeticParser.RULE_closed);
						this.state = 38;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 39;
						this.match(arithmeticParser.POW);
						this.state = 40;
						(localctx as PowerContext)._right = this.closed(6);
						}
						break;
					case 3:
						{
						localctx = new ProductContext(this, new ClosedContext(this, _parentctx, _parentState));
						(localctx as ProductContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, arithmeticParser.RULE_closed);
						this.state = 41;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 42;
						this.match(arithmeticParser.TIMES);
						this.state = 43;
						(localctx as ProductContext)._right = this.closed(5);
						}
						break;
					case 4:
						{
						localctx = new ImplicitProductContext(this, new ClosedContext(this, _parentctx, _parentState));
						(localctx as ImplicitProductContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, arithmeticParser.RULE_closed);
						this.state = 44;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 45;
						(localctx as ImplicitProductContext)._right = this.closed(4);
						}
						break;
					}
					}
				}
				this.state = 50;
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

	public right_closed(): Right_closedContext;
	public right_closed(_p: number): Right_closedContext;
	// @RuleVersion(0)
	public right_closed(_p?: number): Right_closedContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Right_closedContext = new Right_closedContext(this, this._ctx, _parentState);
		let _prevctx: Right_closedContext = localctx;
		let _startState: number = 6;
		this.enterRecursionRule(localctx, 6, arithmeticParser.RULE_right_closed, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 55;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 13:
			case 14:
			case 15:
				{
				localctx = new ClosedIsRight_ClosedContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 52;
				this.closed(0);
				}
				break;
			case 4:
			case 5:
				{
				localctx = new UnaryOnExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 53;
				_la = this._input.LA(1);
				if(!(_la===4 || _la===5)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 54;
				this.closed(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 61;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new Right_ClosedImplicitProductContext(this, new Right_closedContext(this, _parentctx, _parentState));
					(localctx as Right_ClosedImplicitProductContext)._left = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, arithmeticParser.RULE_right_closed);
					this.state = 57;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 58;
					(localctx as Right_ClosedImplicitProductContext)._right = this.closed(0);
					}
					}
				}
				this.state = 63;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
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

	public open(): OpenContext;
	public open(_p: number): OpenContext;
	// @RuleVersion(0)
	public open(_p?: number): OpenContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: OpenContext = new OpenContext(this, this._ctx, _parentState);
		let _prevctx: OpenContext = localctx;
		let _startState: number = 8;
		this.enterRecursionRule(localctx, 8, arithmeticParser.RULE_open, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new Right_ClosedIsOpenContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 65;
			this.right_closed(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 72;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new SumContext(this, new OpenContext(this, _parentctx, _parentState));
					(localctx as SumContext)._left = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, arithmeticParser.RULE_open);
					this.state = 67;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 68;
					_la = this._input.LA(1);
					if(!(_la===4 || _la===5)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 69;
					(localctx as SumContext)._right = this.right_closed(0);
					}
					}
				}
				this.state = 74;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
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
		this.enterRule(localctx, 10, arithmeticParser.RULE_atom);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 75;
			_la = this._input.LA(1);
			if(!(_la===1 || _la===15)) {
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
		this.enterRule(localctx, 12, arithmeticParser.RULE_relop);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 77;
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
			return this.closed_sempred(localctx as ClosedContext, predIndex);
		case 3:
			return this.right_closed_sempred(localctx as Right_closedContext, predIndex);
		case 4:
			return this.open_sempred(localctx as OpenContext, predIndex);
		}
		return true;
	}
	private closed_sempred(localctx: ClosedContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);
		case 1:
			return this.precpred(this._ctx, 5);
		case 2:
			return this.precpred(this._ctx, 4);
		case 3:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private right_closed_sempred(localctx: Right_closedContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private open_sempred(localctx: OpenContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,16,80,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,1,0,1,0,1,0,1,0,1,1,1,1,1,
	2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,29,8,2,1,2,1,2,1,2,3,2,34,8,2,1,2,1,2,
	1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,47,8,2,10,2,12,2,50,9,2,1,3,1,3,
	1,3,1,3,3,3,56,8,3,1,3,1,3,5,3,60,8,3,10,3,12,3,63,9,3,1,4,1,4,1,4,1,4,
	1,4,1,4,5,4,71,8,4,10,4,12,4,74,9,4,1,5,1,5,1,6,1,6,1,6,0,3,4,6,8,7,0,2,
	4,6,8,10,12,0,2,1,0,4,5,2,0,1,1,15,15,83,0,14,1,0,0,0,2,18,1,0,0,0,4,33,
	1,0,0,0,6,55,1,0,0,0,8,64,1,0,0,0,10,75,1,0,0,0,12,77,1,0,0,0,14,15,3,2,
	1,0,15,16,3,12,6,0,16,17,3,2,1,0,17,1,1,0,0,0,18,19,3,8,4,0,19,3,1,0,0,
	0,20,21,6,2,-1,0,21,22,5,2,0,0,22,23,3,8,4,0,23,24,5,3,0,0,24,34,1,0,0,
	0,25,34,3,10,5,0,26,28,5,14,0,0,27,29,3,4,2,0,28,27,1,0,0,0,28,29,1,0,0,
	0,29,30,1,0,0,0,30,34,3,4,2,2,31,32,5,13,0,0,32,34,3,4,2,1,33,20,1,0,0,
	0,33,25,1,0,0,0,33,26,1,0,0,0,33,31,1,0,0,0,34,48,1,0,0,0,35,36,10,6,0,
	0,36,37,5,7,0,0,37,47,3,4,2,7,38,39,10,5,0,0,39,40,5,12,0,0,40,47,3,4,2,
	6,41,42,10,4,0,0,42,43,5,6,0,0,43,47,3,4,2,5,44,45,10,3,0,0,45,47,3,4,2,
	4,46,35,1,0,0,0,46,38,1,0,0,0,46,41,1,0,0,0,46,44,1,0,0,0,47,50,1,0,0,0,
	48,46,1,0,0,0,48,49,1,0,0,0,49,5,1,0,0,0,50,48,1,0,0,0,51,52,6,3,-1,0,52,
	56,3,4,2,0,53,54,7,0,0,0,54,56,3,4,2,0,55,51,1,0,0,0,55,53,1,0,0,0,56,61,
	1,0,0,0,57,58,10,1,0,0,58,60,3,4,2,0,59,57,1,0,0,0,60,63,1,0,0,0,61,59,
	1,0,0,0,61,62,1,0,0,0,62,7,1,0,0,0,63,61,1,0,0,0,64,65,6,4,-1,0,65,66,3,
	6,3,0,66,72,1,0,0,0,67,68,10,1,0,0,68,69,7,0,0,0,69,71,3,6,3,0,70,67,1,
	0,0,0,71,74,1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,73,9,1,0,0,0,74,72,1,0,
	0,0,75,76,7,1,0,0,76,11,1,0,0,0,77,78,5,10,0,0,78,13,1,0,0,0,7,28,33,46,
	48,55,61,72];

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
	public open(): OpenContext {
		return this.getTypedRuleContext(OpenContext, 0) as OpenContext;
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


export class ClosedContext extends ParserRuleContext {
	constructor(parser?: arithmeticParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return arithmeticParser.RULE_closed;
	}
	public copyFrom(ctx: ClosedContext): void {
		super.copyFrom(ctx);
	}
}
export class ImplicitProductContext extends ClosedContext {
	public _left!: ClosedContext;
	public _right!: ClosedContext;
	constructor(parser: arithmeticParser, ctx: ClosedContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public closed_list(): ClosedContext[] {
		return this.getTypedRuleContexts(ClosedContext) as ClosedContext[];
	}
	public closed(i: number): ClosedContext {
		return this.getTypedRuleContext(ClosedContext, i) as ClosedContext;
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
export class LogContext extends ClosedContext {
	public _base!: ClosedContext;
	public _content!: ClosedContext;
	constructor(parser: arithmeticParser, ctx: ClosedContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LOG(): TerminalNode {
		return this.getToken(arithmeticParser.LOG, 0);
	}
	public closed_list(): ClosedContext[] {
		return this.getTypedRuleContexts(ClosedContext) as ClosedContext[];
	}
	public closed(i: number): ClosedContext {
		return this.getTypedRuleContext(ClosedContext, i) as ClosedContext;
	}
	public enterRule(listener: arithmeticListener): void {
	    if(listener.enterLog) {
	 		listener.enterLog(this);
		}
	}
	public exitRule(listener: arithmeticListener): void {
	    if(listener.exitLog) {
	 		listener.exitLog(this);
		}
	}
	// @Override
	public accept<Result>(visitor: arithmeticVisitor<Result>): Result {
		if (visitor.visitLog) {
			return visitor.visitLog(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntegralContext extends ClosedContext {
	public _integrand!: ClosedContext;
	constructor(parser: arithmeticParser, ctx: ClosedContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INT(): TerminalNode {
		return this.getToken(arithmeticParser.INT, 0);
	}
	public closed(): ClosedContext {
		return this.getTypedRuleContext(ClosedContext, 0) as ClosedContext;
	}
	public enterRule(listener: arithmeticListener): void {
	    if(listener.enterIntegral) {
	 		listener.enterIntegral(this);
		}
	}
	public exitRule(listener: arithmeticListener): void {
	    if(listener.exitIntegral) {
	 		listener.exitIntegral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: arithmeticVisitor<Result>): Result {
		if (visitor.visitIntegral) {
			return visitor.visitIntegral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ProductContext extends ClosedContext {
	public _left!: ClosedContext;
	public _right!: ClosedContext;
	constructor(parser: arithmeticParser, ctx: ClosedContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TIMES(): TerminalNode {
		return this.getToken(arithmeticParser.TIMES, 0);
	}
	public closed_list(): ClosedContext[] {
		return this.getTypedRuleContexts(ClosedContext) as ClosedContext[];
	}
	public closed(i: number): ClosedContext {
		return this.getTypedRuleContext(ClosedContext, i) as ClosedContext;
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
export class DivisionContext extends ClosedContext {
	public _left!: ClosedContext;
	public _right!: ClosedContext;
	constructor(parser: arithmeticParser, ctx: ClosedContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DIV(): TerminalNode {
		return this.getToken(arithmeticParser.DIV, 0);
	}
	public closed_list(): ClosedContext[] {
		return this.getTypedRuleContexts(ClosedContext) as ClosedContext[];
	}
	public closed(i: number): ClosedContext {
		return this.getTypedRuleContext(ClosedContext, i) as ClosedContext;
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
export class ClosedAtomContext extends ClosedContext {
	constructor(parser: arithmeticParser, ctx: ClosedContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public atom(): AtomContext {
		return this.getTypedRuleContext(AtomContext, 0) as AtomContext;
	}
	public enterRule(listener: arithmeticListener): void {
	    if(listener.enterClosedAtom) {
	 		listener.enterClosedAtom(this);
		}
	}
	public exitRule(listener: arithmeticListener): void {
	    if(listener.exitClosedAtom) {
	 		listener.exitClosedAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: arithmeticVisitor<Result>): Result {
		if (visitor.visitClosedAtom) {
			return visitor.visitClosedAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PowerContext extends ClosedContext {
	public _left!: ClosedContext;
	public _right!: ClosedContext;
	constructor(parser: arithmeticParser, ctx: ClosedContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public POW(): TerminalNode {
		return this.getToken(arithmeticParser.POW, 0);
	}
	public closed_list(): ClosedContext[] {
		return this.getTypedRuleContexts(ClosedContext) as ClosedContext[];
	}
	public closed(i: number): ClosedContext {
		return this.getTypedRuleContext(ClosedContext, i) as ClosedContext;
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
export class ParenContext extends ClosedContext {
	constructor(parser: arithmeticParser, ctx: ClosedContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(arithmeticParser.LPAREN, 0);
	}
	public open(): OpenContext {
		return this.getTypedRuleContext(OpenContext, 0) as OpenContext;
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


export class Right_closedContext extends ParserRuleContext {
	constructor(parser?: arithmeticParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return arithmeticParser.RULE_right_closed;
	}
	public copyFrom(ctx: Right_closedContext): void {
		super.copyFrom(ctx);
	}
}
export class UnaryOnExpressionContext extends Right_closedContext {
	constructor(parser: arithmeticParser, ctx: Right_closedContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public closed(): ClosedContext {
		return this.getTypedRuleContext(ClosedContext, 0) as ClosedContext;
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
export class ClosedIsRight_ClosedContext extends Right_closedContext {
	constructor(parser: arithmeticParser, ctx: Right_closedContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public closed(): ClosedContext {
		return this.getTypedRuleContext(ClosedContext, 0) as ClosedContext;
	}
	public enterRule(listener: arithmeticListener): void {
	    if(listener.enterClosedIsRight_Closed) {
	 		listener.enterClosedIsRight_Closed(this);
		}
	}
	public exitRule(listener: arithmeticListener): void {
	    if(listener.exitClosedIsRight_Closed) {
	 		listener.exitClosedIsRight_Closed(this);
		}
	}
	// @Override
	public accept<Result>(visitor: arithmeticVisitor<Result>): Result {
		if (visitor.visitClosedIsRight_Closed) {
			return visitor.visitClosedIsRight_Closed(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Right_ClosedImplicitProductContext extends Right_closedContext {
	public _left!: Right_closedContext;
	public _right!: ClosedContext;
	constructor(parser: arithmeticParser, ctx: Right_closedContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public right_closed(): Right_closedContext {
		return this.getTypedRuleContext(Right_closedContext, 0) as Right_closedContext;
	}
	public closed(): ClosedContext {
		return this.getTypedRuleContext(ClosedContext, 0) as ClosedContext;
	}
	public enterRule(listener: arithmeticListener): void {
	    if(listener.enterRight_ClosedImplicitProduct) {
	 		listener.enterRight_ClosedImplicitProduct(this);
		}
	}
	public exitRule(listener: arithmeticListener): void {
	    if(listener.exitRight_ClosedImplicitProduct) {
	 		listener.exitRight_ClosedImplicitProduct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: arithmeticVisitor<Result>): Result {
		if (visitor.visitRight_ClosedImplicitProduct) {
			return visitor.visitRight_ClosedImplicitProduct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OpenContext extends ParserRuleContext {
	constructor(parser?: arithmeticParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return arithmeticParser.RULE_open;
	}
	public copyFrom(ctx: OpenContext): void {
		super.copyFrom(ctx);
	}
}
export class Right_ClosedIsOpenContext extends OpenContext {
	constructor(parser: arithmeticParser, ctx: OpenContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public right_closed(): Right_closedContext {
		return this.getTypedRuleContext(Right_closedContext, 0) as Right_closedContext;
	}
	public enterRule(listener: arithmeticListener): void {
	    if(listener.enterRight_ClosedIsOpen) {
	 		listener.enterRight_ClosedIsOpen(this);
		}
	}
	public exitRule(listener: arithmeticListener): void {
	    if(listener.exitRight_ClosedIsOpen) {
	 		listener.exitRight_ClosedIsOpen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: arithmeticVisitor<Result>): Result {
		if (visitor.visitRight_ClosedIsOpen) {
			return visitor.visitRight_ClosedIsOpen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SumContext extends OpenContext {
	public _left!: OpenContext;
	public _right!: Right_closedContext;
	constructor(parser: arithmeticParser, ctx: OpenContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public open(): OpenContext {
		return this.getTypedRuleContext(OpenContext, 0) as OpenContext;
	}
	public PLUS(): TerminalNode {
		return this.getToken(arithmeticParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(arithmeticParser.MINUS, 0);
	}
	public right_closed(): Right_closedContext {
		return this.getTypedRuleContext(Right_closedContext, 0) as Right_closedContext;
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
