import { AbsoluteValue } from "./expressions/AbsoluteValue";
import { ConstantExp } from "./expressions/ConstantExp";
import { Derivative } from "./expressions/Derivative";
import { Exponent } from "./expressions/Exponent";
import { Expression } from "./expressions/Expression";
import { Fraction } from "./expressions/Fraction";
import { Integer } from "./expressions/Integer";
import { Integral } from "./expressions/Integral";
import { Logarithm } from "./expressions/Logarithm";
import { Product } from "./expressions/Product";
import { Sum } from "./expressions/Sum";
import { TrigExp } from "./expressions/TrigExp";
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

    if (typeof obj === "string") {
        if (obj === "E") {
            return ConstantExp.of("Euler")
        } else if (obj === "Pi") {
            return ConstantExp.of("Pi")
        } else if (obj === "ImaginaryUnit") {
            return ConstantExp.of("Imaginary")
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
            parseRec(arr[2]),
            parseRec(arr[1])
        );
        case "Divide": return Fraction.of(
            parseRec(arr[1]),
            parseRec(arr[2])
        );
        case "Negation": return Product.of([Integer.of(-1), parseRec(arr[1])]);
        case "Sin": return TrigExp.of("Sin", parseRec(arr[1]));
        case "Cos": return TrigExp.of("Cos", parseRec(arr[1]));
        case "Tan": return TrigExp.of("Tan", parseRec(arr[1]));
        case "Sec": return TrigExp.of("Sec", parseRec(arr[1]));
        case "Csc": return TrigExp.of("Csc", parseRec(arr[1]));
        case "Cot": return TrigExp.of("Cot", parseRec(arr[1]));
        case "Arcsin": return TrigExp.of("Arcsin", parseRec(arr[1]));
        case "Arccos": return TrigExp.of("Arccos", parseRec(arr[1]));
        case "Arctan": return TrigExp.of("Arctan", parseRec(arr[1]));
        case "Arccsc": return TrigExp.of("Arccsc", parseRec(arr[1]));
        case "Arcsec": return TrigExp.of("Arcsec", parseRec(arr[1]));
        case "Arccot": return TrigExp.of("Arccot", parseRec(arr[1]));
        case "Abs": return AbsoluteValue.of(parseRec(arr[1]));
    }
}
