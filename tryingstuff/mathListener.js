// Generated from math.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by mathParser.
function mathListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

mathListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
mathListener.prototype.constructor = mathListener;

// Enter a parse tree produced by mathParser#equation.
mathListener.prototype.enterEquation = function(ctx) {
};

// Exit a parse tree produced by mathParser#equation.
mathListener.prototype.exitEquation = function(ctx) {
};


// Enter a parse tree produced by mathParser#expression.
mathListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by mathParser#expression.
mathListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by mathParser#negation.
mathListener.prototype.enterNegation = function(ctx) {
};

// Exit a parse tree produced by mathParser#negation.
mathListener.prototype.exitNegation = function(ctx) {
};



exports.mathListener = mathListener;