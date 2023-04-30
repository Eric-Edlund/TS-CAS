import { Expression } from "../expressions/Expression";
import { Graph } from "../Graph";
import math, { create, all } from 'mathjs';
import { Sum } from "../expressions/Sum";
import { Exponent } from "../expressions/Exponent";
import { Variable } from "../expressions/Variable";
import { Integer } from "../expressions/Integer";
import { Fraction } from "../expressions/Fraction";
import { Product } from "../expressions/Product";
import { negative, sum } from "../ConvenientExpressions";

export function parseExpression(input: string): Expression {
    const math = create(all)

    const tree = math.parse(input)

    // Traverse the tree and flatten additions
    tree.traverse(function (node: MathNode, path, parent: MathNode | null) {
        if (node.type == 'OperatorNode' && parent != null && parent.args != undefined && path != null && node.op === '+') {
            const index = parent.args.indexOf(node);
            parent.args.splice(index, 1, ...node.args);
        }
    });

    return createExpression(tree)!
}

export function parseToLatex(input: string): string {
    const math = create(all)

    const tree = math.parse(input)

    return tree.toTex()
}

declare type MathNode = math.MathNode & any

function createExpression(node: MathNode): Expression {
    console.log(node)
    switch (node.type) {
    case 'OperatorNode':
        switch(node.fn) {
            case 'add':
                return Sum.of(node.args.map(createExpression))
            case 'pow': {
                const children = node.args.map(createExpression)
                return Exponent.of(children[0], children[1])
            }
            case 'divide': {
                const children = node.args.map(createExpression)
                return Fraction.of(children[0], children[1])
            }
            case 'multiply': {
                return Product.of(node.args.map(createExpression))
            }
            case 'subtract': {
                const children: Expression[] = node.args.map(createExpression)
                const result: Expression[] = [children[0]]
                for (let i=1; i < children.length; i++) {
                    result.push(negative(children[i]))
                }
                return sum(...result)
            }
            case 'unaryMinus': {
                return negative(node.args.map(createExpression)[0])
            }
            default: throw new Error(`Haven't implemented ${node.op}`)
                
        }
        
    case 'SymbolNode':
        return Variable.of(node.name);
    case 'ConstantNode':
        return Integer.of(node.value);
    case 'ParenthesisNode':
        return Variable.of('b')
    default:
        throw new Error(`Unsupported node type: ${node.type}`);
    }
}