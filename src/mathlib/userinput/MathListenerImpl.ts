import antlr4 from "antlr4"
import arithmeticListener from "./arithmeticListener"
import { File_Context } from "./arithmeticParser";


export class MathListenerImpl extends arithmeticListener {

    constructor(output: String) {
        super()
        this.output = output;
    }

    enterExpression_ = (ctx: File_Context) => {
        console.log("Enter expression")
    }



	// exitFile_?: (ctx: File_Context) => void;

	// enterEquation?: (ctx: EquationContext) => void;

	// exitEquation?: (ctx: EquationContext) => void;

	// enterExpression?: (ctx: ExpressionContext) => void;

	// exitExpression?: (ctx: ExpressionContext) => void;

	// enterAtom?: (ctx: AtomContext) => void;

	// exitAtom?: (ctx: AtomContext) => void;

	// enterScientific?: (ctx: ScientificContext) => void;

	// exitScientific?: (ctx: ScientificContext) => void;

	// enterVariable?: (ctx: VariableContext) => void;

	// exitVariable?: (ctx: VariableContext) => void;

	// enterRelop?: (ctx: RelopContext) => void;

	// exitRelop?: (ctx: RelopContext) => void;

    
    // yields mathml
    private output: String;

}



