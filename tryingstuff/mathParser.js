// Generated from math.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require("antlr4/index")
var mathListener = require("./mathListener").mathListener
var grammarFileName = "math.g4"

var serializedATN = [
    "\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\f\u0015\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003\u0010\n\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0002\u0002\u0005\u0002\u0004\u0006\u0002\u0003",
    "\u0003\u0002\u000b\f\u0002\u0013\u0002\b\u0003\u0002\u0002\u0002\u0004",
    "\u000f\u0003\u0002\u0002\u0002\u0006\u0011\u0003\u0002\u0002\u0002\b",
    "\t\u0005\u0004\u0003\u0002\t\n\u0007\n\u0002\u0002\n\u000b\u0005\u0004",
    "\u0003\u0002\u000b\u0003\u0003\u0002\u0002\u0002\f\u0010\u0005\u0006",
    "\u0004\u0002\r\u0010\u0007\u000b\u0002\u0002\u000e\u0010\u0007\f\u0002",
    "\u0002\u000f\f\u0003\u0002\u0002\u0002\u000f\r\u0003\u0002\u0002\u0002",
    "\u000f\u000e\u0003\u0002\u0002\u0002\u0010\u0005\u0003\u0002\u0002\u0002",
    "\u0011\u0012\u0007\u0003\u0002\u0002\u0012\u0013\t\u0002\u0002\u0002",
    "\u0013\u0007\u0003\u0002\u0002\u0002\u0003\u000f"
].join("")

var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN)

var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
    return new antlr4.dfa.DFA(ds, index)
})

var sharedContextCache = new antlr4.PredictionContextCache()

var literalNames = [
    null,
    "'-'",
    "'+'",
    "'x'",
    "'/'",
    "'^'",
    "'log'",
    "'abs'",
    "'='"
]

var symbolicNames = [
    null,
    "MINUS",
    "PLUS",
    "TIMES",
    "DIV",
    "POW",
    "LOG",
    "ABS",
    "EQ",
    "NUMBER",
    "VARIABLE"
]

var ruleNames = ["equation", "expression", "negation"]

function mathParser(input) {
    antlr4.Parser.call(this, input)
    this._interp = new antlr4.atn.ParserATNSimulator(
        this,
        atn,
        decisionsToDFA,
        sharedContextCache
    )
    this.ruleNames = ruleNames
    this.literalNames = literalNames
    this.symbolicNames = symbolicNames
    return this
}

mathParser.prototype = Object.create(antlr4.Parser.prototype)
mathParser.prototype.constructor = mathParser

Object.defineProperty(mathParser.prototype, "atn", {
    get: function () {
        return atn
    }
})

mathParser.EOF = antlr4.Token.EOF
mathParser.MINUS = 1
mathParser.PLUS = 2
mathParser.TIMES = 3
mathParser.DIV = 4
mathParser.POW = 5
mathParser.LOG = 6
mathParser.ABS = 7
mathParser.EQ = 8
mathParser.NUMBER = 9
mathParser.VARIABLE = 10

mathParser.RULE_equation = 0
mathParser.RULE_expression = 1
mathParser.RULE_negation = 2

function EquationContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState)
    this.parser = parser
    this.ruleIndex = mathParser.RULE_equation
    return this
}

EquationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype)
EquationContext.prototype.constructor = EquationContext

EquationContext.prototype.expression = function (i) {
    if (i === undefined) {
        i = null
    }
    if (i === null) {
        return this.getTypedRuleContexts(ExpressionContext)
    } else {
        return this.getTypedRuleContext(ExpressionContext, i)
    }
}

EquationContext.prototype.EQ = function () {
    return this.getToken(mathParser.EQ, 0)
}

EquationContext.prototype.enterRule = function (listener) {
    if (listener instanceof mathListener) {
        listener.enterEquation(this)
    }
}

EquationContext.prototype.exitRule = function (listener) {
    if (listener instanceof mathListener) {
        listener.exitEquation(this)
    }
}

mathParser.EquationContext = EquationContext

mathParser.prototype.equation = function () {
    var localctx = new EquationContext(this, this._ctx, this.state)
    this.enterRule(localctx, 0, mathParser.RULE_equation)
    try {
        this.enterOuterAlt(localctx, 1)
        this.state = 6
        this.expression()
        this.state = 7
        this.match(mathParser.EQ)
        this.state = 8
        this.expression()
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re
            this._errHandler.reportError(this, re)
            this._errHandler.recover(this, re)
        } else {
            throw re
        }
    } finally {
        this.exitRule()
    }
    return localctx
}

function ExpressionContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState)
    this.parser = parser
    this.ruleIndex = mathParser.RULE_expression
    return this
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype)
ExpressionContext.prototype.constructor = ExpressionContext

ExpressionContext.prototype.negation = function () {
    return this.getTypedRuleContext(NegationContext, 0)
}

ExpressionContext.prototype.NUMBER = function () {
    return this.getToken(mathParser.NUMBER, 0)
}

ExpressionContext.prototype.VARIABLE = function () {
    return this.getToken(mathParser.VARIABLE, 0)
}

ExpressionContext.prototype.enterRule = function (listener) {
    if (listener instanceof mathListener) {
        listener.enterExpression(this)
    }
}

ExpressionContext.prototype.exitRule = function (listener) {
    if (listener instanceof mathListener) {
        listener.exitExpression(this)
    }
}

mathParser.ExpressionContext = ExpressionContext

mathParser.prototype.expression = function () {
    var localctx = new ExpressionContext(this, this._ctx, this.state)
    this.enterRule(localctx, 2, mathParser.RULE_expression)
    try {
        this.state = 13
        this._errHandler.sync(this)
        switch (this._input.LA(1)) {
            case mathParser.MINUS:
                this.enterOuterAlt(localctx, 1)
                this.state = 10
                this.negation()
                break
            case mathParser.NUMBER:
                this.enterOuterAlt(localctx, 2)
                this.state = 11
                this.match(mathParser.NUMBER)
                break
            case mathParser.VARIABLE:
                this.enterOuterAlt(localctx, 3)
                this.state = 12
                this.match(mathParser.VARIABLE)
                break
            default:
                throw new antlr4.error.NoViableAltException(this)
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re
            this._errHandler.reportError(this, re)
            this._errHandler.recover(this, re)
        } else {
            throw re
        }
    } finally {
        this.exitRule()
    }
    return localctx
}

function NegationContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState)
    this.parser = parser
    this.ruleIndex = mathParser.RULE_negation
    return this
}

NegationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype)
NegationContext.prototype.constructor = NegationContext

NegationContext.prototype.MINUS = function () {
    return this.getToken(mathParser.MINUS, 0)
}

NegationContext.prototype.NUMBER = function () {
    return this.getToken(mathParser.NUMBER, 0)
}

NegationContext.prototype.VARIABLE = function () {
    return this.getToken(mathParser.VARIABLE, 0)
}

NegationContext.prototype.enterRule = function (listener) {
    if (listener instanceof mathListener) {
        listener.enterNegation(this)
    }
}

NegationContext.prototype.exitRule = function (listener) {
    if (listener instanceof mathListener) {
        listener.exitNegation(this)
    }
}

mathParser.NegationContext = NegationContext

mathParser.prototype.negation = function () {
    var localctx = new NegationContext(this, this._ctx, this.state)
    this.enterRule(localctx, 4, mathParser.RULE_negation)
    var _la = 0 // Token type
    try {
        this.enterOuterAlt(localctx, 1)
        this.state = 15
        this.match(mathParser.MINUS)
        this.state = 16
        _la = this._input.LA(1)
        if (!(_la === mathParser.NUMBER || _la === mathParser.VARIABLE)) {
            this._errHandler.recoverInline(this)
        } else {
            this._errHandler.reportMatch(this)
            this.consume()
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re
            this._errHandler.reportError(this, re)
            this._errHandler.recover(this, re)
        } else {
            throw re
        }
    } finally {
        this.exitRule()
    }
    return localctx
}

exports.mathParser = mathParser
