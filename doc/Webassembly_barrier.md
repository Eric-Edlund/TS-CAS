WebAssembly and JavaScript are executed sequentially with the 
Runtime jumping between them. What parts of the application should be in Rust?
What parts in JavaScript? What constraints does the interface have? How will
multithreading work?

## Threading

There is no multithreading in WebAssembly, and it probably won't be implemented
by browsers this semester. The existing solution is to use web workers.

https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers

- Worker threads can't access the DOM
- Workers communicate through message passing by coppying data
- Workers can fork
- A worker object uses the .postMessage() and onmessage functions

So from the JS side, this will look like:

```
const backend = new Worker("backend.js");
backend.onmessage = (e) => {
    // Update DOM
}

// Request solution
backend.postMessage(["Solve", "x+2+2"]);

```

I might ship a nice wrapper for the threaded stuff with the library somehow...

It is possible, apparently, via SharedArrayBuffer to share memory between 
wasm threads. I don't think I will need to deal with SharedArrayBuffer by hand
in this project, it looks like the `wasm_bindgen` Rust libs handle it.

Some `backend.js` will call into web assembly. How will this look in Rust?

https://rustwasm.github.io/wasm-bindgen/examples/raytrace.html

This online raytracing example demonstrates using SharedArrayBuffer with workers
manually.

https://github.com/RReverser/wasm-bindgen-rayon?tab=readme-ov-file

This is a project that might be able to hide some of the details.

Both solutions require a lot of gross compiler flags and recompiling the 
standard library.


## Interface

The backend will be running as a web worker and is communicated with by message
passing. We could create a JS class to hide some of this behind Promises/more 
familiar things. It sounds like messages passed into the backend do not 
interrupt execution. The backend will need to occasionally return control to
the browser to check if a new message is available. 

I don't want to pass custom Rust objects across the barrier. There isn't automatic
support for Vec<Anything> being passed, and the prevailing solution on the 
internet is to serialize things to JSON, which I would rather avoid for an MVP.

MVP in mind, I already have expression parsing setup in JavaScript. Would it 
be worth it to parse in JS then pass JSON to the backend and then parse that 
into expressions? No, I'll just move parsing to the backend.

I imagine there will be a time when directly manipulating expressions will be
useful for the frontend, but I'll do that later.

So round 1, Rust parses expressions from ASCII, processes them, then returns
some human-readable responses. We have a two UI modes already: 
the web expression-graph view and the simple shortest path steps-to-solution.
For graph to work, we will need to pass a serialized graph. For the steps view
we also will need a graph, for cases where there are multiple paths to
the solution we might want to see.

If we pass only strings across wasm, we could divide responsibility a few ways:

1. Rust generates a JSON graph of expression strings.

2. Rust stores Job objects which can be queried indirectly for this info
with some sort of jobId system from JavaScript.

3. ...
