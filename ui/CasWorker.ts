// This is a webworker

import { CasWorkerMsg, IncrementalResult } from "./CasWorkerTypes"

importScripts("./cas-wasm/index.js")

// @ts-ignore
const { simplify_incremental } = wasm_bindgen

console.log("Initializing worker")

async function init_wasm_in_worker() {
    // @ts-ignore
    await wasm_bindgen("./cas-wasm/index_bg.wasm")

    let incrementingPromise: Promise<void>;
    let queuedExpression: string | null = null;

    onmessage = function (this, e: MessageEvent<CasWorkerMsg>) {
        const { expressionJson, cancel } = e.data

        if (expressionJson === queuedExpression) {
            return 
        }
        queuedExpression = expressionJson
        if (cancel) {
            postMessage({failed: "cancelled", finished: true} as IncrementalResult)
            return
        }

        incrementingPromise = new Promise((res, _) => {
            let expression: string = expressionJson
            let handle = simplify_incremental(expressionJson, "evaluate_first")
            let count = 0;

            let incrementInterval = setInterval(() => {
                count++
                const incrementalResult = JSON.parse(handle.do_pass(50)) as IncrementalResult
                incrementalResult.forProblem = expression
                postMessage(incrementalResult)
                if (expression !== queuedExpression || count >= 1000 || incrementalResult.finished || incrementalResult.failed) {
                    handle.free()
                    clearInterval(incrementInterval)
                    res()
                    return
                }
            }, 1)
        })
    }
}
init_wasm_in_worker()
