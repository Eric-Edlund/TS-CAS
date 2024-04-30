
export type CasWorkerMsg = {
    cancel: boolean
    expressionJson: string
}

export type IncrementalResult = {
    forProblem: string
    steps: string[]
    failed: string | null
    finished: boolean
}
