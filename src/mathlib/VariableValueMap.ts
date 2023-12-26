import { Variable } from "./expressions/Variable"

/**
 * Maps variables to values so that expressions may be
 * evaluated.
 */
export interface VariableValueMap {
    valueOf(v: Variable): number
}
