import antlr4, { ParseTreeWalker } from "antlr4"
import { Expression } from "../expressions/Expression"
const { CommonTokenStream, CharStream } = antlr4
import arithmeticLexer from "./arithmeticLexer"
import arithmeticParser from "./arithmeticParser"
import { MathListenerImpl } from "./MathListenerImpl"


export function parse(input: string): Expression {
    
    const stream = new CharStream(input, true)
    const lexer = new arithmeticLexer(stream)
    const tokens = new CommonTokenStream(lexer)
    const parser = new arithmeticParser(tokens)
    //parser.buildParseTrees = true
    const tree = parser.expression()

    let result = "";
    const listener = new MathListenerImpl(result)
    ParseTreeWalker.DEFAULT.walk(listener, tree);
}