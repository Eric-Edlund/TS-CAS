// Generated from ./src/mathlib/userinput/arithmetic.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class arithmeticLexer extends Lexer {
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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"SCIENTIFIC_NUMBER", "NUMBER", "UNSIGNED_INTEGER", "E", "L", "O", "G", 
		"SIGN", "LPAREN", "RPAREN", "PLUS", "MINUS", "TIMES", "DIV", "GT", "LT", 
		"EQ", "POINT", "POW", "INT", "LOG", "VARIABLE", "WS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, arithmeticLexer._ATN, arithmeticLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "arithmetic.g4"; }

	public get literalNames(): (string | null)[] { return arithmeticLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return arithmeticLexer.symbolicNames; }
	public get ruleNames(): string[] { return arithmeticLexer.ruleNames; }

	public get serializedATN(): number[] { return arithmeticLexer._serializedATN; }

	public get channelNames(): string[] { return arithmeticLexer.channelNames; }

	public get modeNames(): string[] { return arithmeticLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,16,123,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,1,0,1,0,
	1,0,3,0,51,8,0,1,0,1,0,3,0,55,8,0,1,1,4,1,58,8,1,11,1,12,1,59,1,1,1,1,4,
	1,64,8,1,11,1,12,1,65,3,1,68,8,1,1,2,4,2,71,8,2,11,2,12,2,72,1,3,1,3,1,
	4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,
	1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,19,1,
	19,1,19,1,19,1,20,1,20,1,20,1,20,1,21,1,21,1,22,4,22,118,8,22,11,22,12,
	22,119,1,22,1,22,0,0,23,1,1,3,0,5,0,7,0,9,0,11,0,13,0,15,0,17,2,19,3,21,
	4,23,5,25,6,27,7,29,8,31,9,33,10,35,11,37,12,39,13,41,14,43,15,45,16,1,
	0,11,2,0,69,69,101,101,2,0,76,76,108,108,2,0,79,79,111,111,2,0,71,71,103,
	103,2,0,43,43,45,45,2,0,42,42,183,183,2,0,73,73,105,105,2,0,78,78,110,110,
	2,0,84,84,116,116,2,0,65,90,97,122,3,0,9,10,13,13,32,32,122,0,1,1,0,0,0,
	0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,
	0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,
	0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,1,47,1,0,0,0,3,57,1,
	0,0,0,5,70,1,0,0,0,7,74,1,0,0,0,9,76,1,0,0,0,11,78,1,0,0,0,13,80,1,0,0,
	0,15,82,1,0,0,0,17,84,1,0,0,0,19,86,1,0,0,0,21,88,1,0,0,0,23,90,1,0,0,0,
	25,92,1,0,0,0,27,94,1,0,0,0,29,96,1,0,0,0,31,98,1,0,0,0,33,100,1,0,0,0,
	35,102,1,0,0,0,37,104,1,0,0,0,39,106,1,0,0,0,41,110,1,0,0,0,43,114,1,0,
	0,0,45,117,1,0,0,0,47,54,3,3,1,0,48,50,3,7,3,0,49,51,3,15,7,0,50,49,1,0,
	0,0,50,51,1,0,0,0,51,52,1,0,0,0,52,53,3,5,2,0,53,55,1,0,0,0,54,48,1,0,0,
	0,54,55,1,0,0,0,55,2,1,0,0,0,56,58,2,48,57,0,57,56,1,0,0,0,58,59,1,0,0,
	0,59,57,1,0,0,0,59,60,1,0,0,0,60,67,1,0,0,0,61,63,5,46,0,0,62,64,2,48,57,
	0,63,62,1,0,0,0,64,65,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,68,1,0,0,0,
	67,61,1,0,0,0,67,68,1,0,0,0,68,4,1,0,0,0,69,71,2,48,57,0,70,69,1,0,0,0,
	71,72,1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,73,6,1,0,0,0,74,75,7,0,0,0,75,
	8,1,0,0,0,76,77,7,1,0,0,77,10,1,0,0,0,78,79,7,2,0,0,79,12,1,0,0,0,80,81,
	7,3,0,0,81,14,1,0,0,0,82,83,7,4,0,0,83,16,1,0,0,0,84,85,5,40,0,0,85,18,
	1,0,0,0,86,87,5,41,0,0,87,20,1,0,0,0,88,89,5,43,0,0,89,22,1,0,0,0,90,91,
	5,45,0,0,91,24,1,0,0,0,92,93,7,5,0,0,93,26,1,0,0,0,94,95,5,47,0,0,95,28,
	1,0,0,0,96,97,5,62,0,0,97,30,1,0,0,0,98,99,5,60,0,0,99,32,1,0,0,0,100,101,
	5,61,0,0,101,34,1,0,0,0,102,103,5,46,0,0,103,36,1,0,0,0,104,105,5,94,0,
	0,105,38,1,0,0,0,106,107,7,6,0,0,107,108,7,7,0,0,108,109,7,8,0,0,109,40,
	1,0,0,0,110,111,3,9,4,0,111,112,3,11,5,0,112,113,3,13,6,0,113,42,1,0,0,
	0,114,115,7,9,0,0,115,44,1,0,0,0,116,118,7,10,0,0,117,116,1,0,0,0,118,119,
	1,0,0,0,119,117,1,0,0,0,119,120,1,0,0,0,120,121,1,0,0,0,121,122,6,22,0,
	0,122,46,1,0,0,0,8,0,50,54,59,65,67,72,119,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!arithmeticLexer.__ATN) {
			arithmeticLexer.__ATN = new ATNDeserializer().deserialize(arithmeticLexer._serializedATN);
		}

		return arithmeticLexer.__ATN;
	}


	static DecisionsToDFA = arithmeticLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}