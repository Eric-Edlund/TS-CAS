export interface CasWorkerMsg {
    cancel: boolean
    expressionJson: string
    operation: "simplify" | "graph"
}

export interface IncrementalResult {
    /**
     * The json string representing the expression of the operation.
     */
    forProblem: string
    /**
     * The operation has failed for the given reason.
     */
    failed: string | null
    /**
     * The operation is compelete or the timout was reached and no further results will come.
     */
    finished: boolean
}

export interface IncrementalSimplifyResult  extends IncrementalResult {
    steps: string[]
} 

export interface IncrementalGraphResult extends IncrementalResult {
    // The new graph data added in this pass
    newData: {
        // Expression json 
        source: string,
        // Argument text
        edge: string,
        target: string, 
    }[]
}
