// This is a webworker

import { CasWorkerMsg, IncrementalResult } from "./CasWorkerTypes"

importScripts("./cas-wasm/index.js")

let ready = false

// @ts-ignore
const { simplify_incremental } = wasm_bindgen

console.log("Initializing worker")

onmessage = function (this, e: MessageEvent<CasWorkerMsg>) {
    function res() {
        const { expressionJson } = e.data

        simplify_incremental(
            expressionJson,
            20,
            "evaluate_first",
            1000,
            function (inc: string) {
                const result = JSON.parse(inc) as IncrementalResult
                postMessage(result)
            }
        )
    }
    new Promise(() => {
        setInterval(() => {
            if (ready) {
                res()
            }
        })
    })
}
async function init_wasm_in_worker() {
    // @ts-ignore
    await wasm_bindgen("./cas-wasm/index_bg.wasm")
    ready = true
}
init_wasm_in_worker()
