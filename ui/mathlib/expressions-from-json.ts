import { Derivative } from "./expressions/Derivative";
import { Exponent } from "./expressions/Exponent";
import { Expression } from "./expressions/Expression";
import { Fraction } from "./expressions/Fraction";
import { Integer } from "./expressions/Integer";
import { Integral } from "./expressions/Integral";
import { Logarithm } from "./expressions/Logarithm";
import { Product } from "./expressions/Product";
import { Sum } from "./expressions/Sum";
import { Variable } from "./expressions/Variable";

/**
 * Parses an expression from the given input JSON array.
 * TODO: Write an actual spec for the obj
 */
export function parseExpressionJSON(input: any): Expression {
    return parseRec(input)
}

function parseRec(obj: any): Expression {
    if (typeof obj == "object") {
        if ("num" in obj) {
            return Integer.of(obj["num"])
        } else if ("var" in obj) {
            return Variable.of(obj["var"])
        }
    }

    let arr: string[] = obj;

    switch (obj[0]) {
        case "Sum": return Sum.of(arr.slice(1, arr.length)
            .map(parseRec));
        case "Product": return Product.of(arr.slice(1, arr.length)
            .map(parseRec));
        case "Pow": return Exponent.of(
            parseRec(arr[1]), 
            parseRec(arr[2])
        )
        case "Integral": return Integral.of(
            parseRec(arr[1]),
            parseRec(arr[2])
        );
        case "Derivative": return Derivative.of(
            parseRec(arr[1]), 
            parseRec(arr[2])
        );
        case "Logarithm": return Logarithm.of(
            parseRec(arr[1]), 
            parseRec(arr[2])
        );
        case "Divide": return Fraction.of(
            parseRec(arr[1]),
            parseRec(arr[2])
        );
        case "Negation": return Product.of([Integer.of(-1), parseRec(arr[1])]);
    }
}
