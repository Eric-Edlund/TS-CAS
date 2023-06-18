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
	public static readonly RULE_file_ = 0;
	public static readonly RULE_equation = 1;
	public static readonly RULE_expression = 2;
	public static readonly RULE_atom = 3;
	public static readonly RULE_scientific = 4;
	public static readonly RULE_variable = 5;
	public static readonly RULE_relop = 6;
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
		"file_", "equation", "expression", "atom", "scientific", "variable", "relop",
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
	public file_(): File_Context {
		let localctx: File_Context = new File_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 0, arithmeticParser.RULE_file_);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 17;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 110) !== 0)) {
				{
				{
				this.state = 14;
				this.equation();
				}
				}
				this.state = 19;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 20;
			this.match(arithmeticParser.EOF);
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
	public equation(): EquationContext {
		let localctx: EquationContext = new EquationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, arithmeticParser.RULE_equation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 22;
			this.expression(0);
			this.state = 23;
			this.relop();
			this.state = 24;
			this.expression(0);
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

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExpressionContext = localctx;
		let _startState: number = 4;
		this.enterRecursionRule(localctx, 4, arithmeticParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 38;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				{
				this.state = 27;
				this.match(arithmeticParser.LPAREN);
				this.state = 28;
				this.expression(0);
				this.state = 29;
				this.match(arithmeticParser.RPAREN);
				}
				break;
			case 1:
			case 2:
			case 5:
			case 6:
				{
				this.state = 34;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5 || _la===6) {
					{
					{
					this.state = 31;
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
					this.state = 36;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 37;
				this.atom();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 51;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 49;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, arithmeticParser.RULE_expression);
						this.state = 40;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 41;
						this.match(arithmeticParser.POW);
						this.state = 42;
						this.expression(6);
						}
						break;
					case 2:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, arithmeticParser.RULE_expression);
						this.state = 43;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 44;
						_la = this._input.LA(1);
						if(!(_la===7 || _la===8)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 45;
						this.expression(5);
						}
						break;
					case 3:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, arithmeticParser.RULE_expression);
						this.state = 46;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 47;
						_la = this._input.LA(1);
						if(!(_la===5 || _la===6)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 48;
						this.expression(4);
						}
						break;
					}
					}
				}
				this.state = 53;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
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
		try {
			this.state = 56;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 54;
				this.scientific();
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 55;
				this.variable();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public scientific(): ScientificContext {
		let localctx: ScientificContext = new ScientificContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, arithmeticParser.RULE_scientific);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 58;
			this.match(arithmeticParser.SCIENTIFIC_NUMBER);
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
	public variable(): VariableContext {
		let localctx: VariableContext = new VariableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, arithmeticParser.RULE_variable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 60;
			this.match(arithmeticParser.VARIABLE);
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
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 62;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 3584) !== 0))) {
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

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 4);
		case 2:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,14,65,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,1,0,5,0,16,8,0,10,0,12,0,
	19,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,5,2,33,8,2,10,2,
	12,2,36,9,2,1,2,3,2,39,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,50,8,
	2,10,2,12,2,53,9,2,1,3,1,3,3,3,57,8,3,1,4,1,4,1,5,1,5,1,6,1,6,1,6,0,1,4,
	7,0,2,4,6,8,10,12,0,3,1,0,5,6,1,0,7,8,1,0,9,11,64,0,17,1,0,0,0,2,22,1,0,
	0,0,4,38,1,0,0,0,6,56,1,0,0,0,8,58,1,0,0,0,10,60,1,0,0,0,12,62,1,0,0,0,
	14,16,3,2,1,0,15,14,1,0,0,0,16,19,1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,
	20,1,0,0,0,19,17,1,0,0,0,20,21,5,0,0,1,21,1,1,0,0,0,22,23,3,4,2,0,23,24,
	3,12,6,0,24,25,3,4,2,0,25,3,1,0,0,0,26,27,6,2,-1,0,27,28,5,3,0,0,28,29,
	3,4,2,0,29,30,5,4,0,0,30,39,1,0,0,0,31,33,7,0,0,0,32,31,1,0,0,0,33,36,1,
	0,0,0,34,32,1,0,0,0,34,35,1,0,0,0,35,37,1,0,0,0,36,34,1,0,0,0,37,39,3,6,
	3,0,38,26,1,0,0,0,38,34,1,0,0,0,39,51,1,0,0,0,40,41,10,5,0,0,41,42,5,13,
	0,0,42,50,3,4,2,6,43,44,10,4,0,0,44,45,7,1,0,0,45,50,3,4,2,5,46,47,10,3,
	0,0,47,48,7,0,0,0,48,50,3,4,2,4,49,40,1,0,0,0,49,43,1,0,0,0,49,46,1,0,0,
	0,50,53,1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,0,52,5,1,0,0,0,53,51,1,0,0,0,
	54,57,3,8,4,0,55,57,3,10,5,0,56,54,1,0,0,0,56,55,1,0,0,0,57,7,1,0,0,0,58,
	59,5,2,0,0,59,9,1,0,0,0,60,61,5,1,0,0,61,11,1,0,0,0,62,63,7,2,0,0,63,13,
	1,0,0,0,6,17,34,38,49,51,56];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!arithmeticParser.__ATN) {
			arithmeticParser.__ATN = new ATNDeserializer().deserialize(arithmeticParser._serializedATN);
		}

		return arithmeticParser.__ATN;
	}


	static DecisionsToDFA = arithmeticParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class File_Context extends ParserRuleContext {
	constructor(parser?: arithmeticParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(arithmeticParser.EOF, 0);
	}
	public equation_list(): EquationContext[] {
		return this.getTypedRuleContexts(EquationContext) as EquationContext[];
	}
	public equation(i: number): EquationContext {
		return this.getTypedRuleContext(EquationContext, i) as EquationContext;
	}
    public get ruleIndex(): number {
    	return arithmeticParser.RULE_file_;
	}
	public enterRule(listener: arithmeticListener): void {
	    if(listener.enterFile_) {
	 		listener.enterFile_(this);
		}
	}
	public exitRule(listener: arithmeticListener): void {
	    if(listener.exitFile_) {
	 		listener.exitFile_(this);
		}
	}
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
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: arithmeticParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(arithmeticParser.LPAREN, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(arithmeticParser.RPAREN, 0);
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
	public POW(): TerminalNode {
		return this.getToken(arithmeticParser.POW, 0);
	}
	public TIMES(): TerminalNode {
		return this.getToken(arithmeticParser.TIMES, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(arithmeticParser.DIV, 0);
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
}


export class AtomContext extends ParserRuleContext {
	constructor(parser?: arithmeticParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public scientific(): ScientificContext {
		return this.getTypedRuleContext(ScientificContext, 0) as ScientificContext;
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
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
}


export class ScientificContext extends ParserRuleContext {
	constructor(parser?: arithmeticParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SCIENTIFIC_NUMBER(): TerminalNode {
		return this.getToken(arithmeticParser.SCIENTIFIC_NUMBER, 0);
	}
    public get ruleIndex(): number {
    	return arithmeticParser.RULE_scientific;
	}
	public enterRule(listener: arithmeticListener): void {
	    if(listener.enterScientific) {
	 		listener.enterScientific(this);
		}
	}
	public exitRule(listener: arithmeticListener): void {
	    if(listener.exitScientific) {
	 		listener.exitScientific(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	constructor(parser?: arithmeticParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE(): TerminalNode {
		return this.getToken(arithmeticParser.VARIABLE, 0);
	}
    public get ruleIndex(): number {
    	return arithmeticParser.RULE_variable;
	}
	public enterRule(listener: arithmeticListener): void {
	    if(listener.enterVariable) {
	 		listener.enterVariable(this);
		}
	}
	public exitRule(listener: arithmeticListener): void {
	    if(listener.exitVariable) {
	 		listener.exitVariable(this);
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
	public GT(): TerminalNode {
		return this.getToken(arithmeticParser.GT, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(arithmeticParser.LT, 0);
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
}
