// This is a webworker

import { CasWorkerMsg, IncrementalGraphResult, IncrementalResult, IncrementalSimplifyResult } from "./CasWorkerTypes"

importScripts("./cas-wasm/index.js")

// @ts-ignore
const { simplify_incremental } = wasm_bindgen

console.log("Initializing worker")

async function init_wasm_in_worker() {
    // @ts-ignore
    await wasm_bindgen("./cas-wasm/index_bg.wasm")

    let incrementingPromise: Promise<void>;
    let queuedExpression: string | null = null;
    let queuedTask: CasWorkerMsg;

    onmessage = function (this, e: MessageEvent<CasWorkerMsg>) {
        const { expressionJson, cancel, operation } = e.data

        // Is this how JS works?
        if (queuedTask == e.data) {
            return
        }

        if (expressionJson === queuedExpression) {
            return 
        }

        queuedExpression = expressionJson
        if (cancel) {
            postMessage({failed: "cancelled", finished: true} as IncrementalSimplifyResult)
            return
        }

        incrementingPromise = new Promise((res, _) => {
            let expression: string = expressionJson
            let op = operation
            let handle = simplify_incremental(expressionJson, "evaluate_first")
            let count = 0;

            let incrementInterval = setInterval(() => {
                count++
                let incrementalResult = JSON.parse(handle.do_pass(50)) as IncrementalSimplifyResult & IncrementalGraphResult
                if (op == 'graph') {
                    // @ts-ignore
                    incrementalResult.newData = JSON.parse(handle.get_graph_difference()) as IncrementalGraphResult
                }
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
