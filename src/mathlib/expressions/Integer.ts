import { assert } from "../util/assert"
import { VariableValueMap } from "../VariableValueMap"
import { Expression } from "./Expression"

/**
 * Integer
 * Positive or negative
 */
export class Integer extends Expression {
    public static of(value: number): Integer {
        if (!Integer.instances.has(value)) {
            Integer.instances.set(value, new Integer(value))
        }
        return Integer.instances.get(value)!
    }
    private static instances: Map<number, Integer> = new Map()

    private constructor(value: number) {
        super()
        this.value = value
        assert(
            this.value % 1 == 0,
            "Creating non-integer integer " + this.value
        )
    }

    /**
     * @returns A positive version of this integer.
     */
    public butPositive(): Integer {
        return Integer.of(Math.abs(this.value))
    }

    public class: string = IntegerType
    public toMathXML(): string {
        return "<mn>" + this.value + "</mn>"
    }

    public toString(): string {
        return "" + this.value
    }
    public toUnambigiousString(): string {
        return "" + this.value
    }

    public get hash(): string {
        return "Int" + this.value
    }

    public evaluate(values: VariableValueMap): number {
        return this.value
    }

    public readonly value: number
    public readonly isReducible: boolean = false

    public readonly isConstant = true
    public readonly childCount = 0
}

export const IntegerType = "Integer"
