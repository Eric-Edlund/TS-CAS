import antlr4 from "antlr4"
const { InputStream, CommonTokenStream } = antlr4
import { mathLexer } from "./mathLexer.js"
import "./mathParser.js"


class ListenerImpl extends mathListener {

    constructor(output) {
        this.output = output;
    }
}



const text = "45 + 5 = 49"
const stream = new InputStream(text, true)
const lexer = new mathLexer(stream)
const tokens = CommonTokenStream(lexer)
const parser = new mathParser(tokens)
parser.buildParseTree = true
const tree = parser.equation()

let result = "";
const listener = new ListenerImpl(result)

antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
