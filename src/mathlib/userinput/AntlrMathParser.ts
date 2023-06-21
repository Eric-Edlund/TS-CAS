import antlr4, { ParserRuleContext } from "antlr4"
import { Expression } from "../expressions/Expression"
const { CommonTokenStream, CharStream } = antlr4
import arithmeticLexer from "./arithmeticLexer"
import arithmeticParser, { ExpressionContext, Expression_partContext } from "./arithmeticParser"
import { ExpressionVisitor } from "./MathVisitorImpl"
import { PrintVisitor } from "./PrintVisitor"
import { SumFlattener } from "./SumFlattener"

/**
 * Parses the given input string to an expression.
 * @param input See the gramar file (.g4)
 * @returns 
 */
export function parseExpression(input: string): Expression {

    const stream = new CharStream(input, true)
    const lexer = new arithmeticLexer(stream)
    const tokens = new CommonTokenStream(lexer)
    const parser = new arithmeticParser(tokens)
    //parser.buildParseTrees = true
    const tree = parser.expression()

    

    tree.accept<Expression_partContext>(new SumFlattener())

    // Print debug info
    //tree.accept(new PrintVisitor())

    return tree.accept<Expression>(new ExpressionVisitor())
}
