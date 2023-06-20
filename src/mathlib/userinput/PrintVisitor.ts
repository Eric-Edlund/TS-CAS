import { AtomContext, EquationContext, ExpressionContext, RelopContext } from "./arithmeticParser";
import arithmeticVisitor from "./arithmeticVisitor";

/**
 * Prints the parse tree
 */
export class PrintVisitor extends arithmeticVisitor<null> {

	visitEquation = (ctx: EquationContext): null => {
        this.depth++
        for (const child of ctx.children ?? []) {
            console.log(spaces(this.depth) + child.getText())
            this.visit(child)
        }
        this.depth--
        return null;
    };

	visitExpression = (ctx: ExpressionContext): null => {
        this.depth++
        for (const child of ctx.children ?? []) {
            console.log(spaces(this.depth) + child.getText())
            this.visit(child)
        }
        this.depth--
        return null;
    };

	visitAtom = (ctx: AtomContext): null => {
        this.depth++
        for (const child of ctx.children ?? []) {
            console.log(spaces(this.depth) + child.getText())
            this.visit(child)
        }
        this.depth--
        return null;
    };

	visitRelop = (ctx: RelopContext): null => {
        this.depth++
        for (const child of ctx.children ?? []) {
            console.log(spaces(this.depth) + child.getText())
            this.visit(child)
        }
        this.depth--
        return null;
    };

    private depth: number = 0;
}

function spaces(depth: number): string {
    let out = "";
    for (let i=0; i < depth; i++) {
        out += i % 2 == 0 ? ' ' : '.';
    }
    return out;
}