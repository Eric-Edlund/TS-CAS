
export type CasWorkerMsg = {
    cancel: boolean
    expressionJson: string
}

export type IncrementalResult = {
    steps: string[]
    failed: string | null
    finished: boolean
}
