// Does the intensive math operations async

import { Graph } from "./Graph";

declare var self: DedicatedWorkerGlobalScope;

interface DedicatedWorkerGlobalScope {
    onmessage: ((this: DedicatedWorkerGlobalScope, ev: MessageEvent) => any) | null;
    postMessage(message: any, transfer?: Transferable[]): void;
}


//@ts-ignore
self.onmessage = function (job: Graph) {
    console.log("Working")
}