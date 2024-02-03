Cargo:

To target web assembly, cargo.toml needs crate-type = ["cdylib"]

Webpack:

Webpack bundles the JavaScript and assembly for the webpage. The frontend
source is written in TypeScript, and Webpack uses the ts-loader rule to 
preprocess them into JavaScript. 

Wasm-pack:

The Rust library is compiled to webassembly by wasm-pack. It produces a `pkg`
folder in the cargo project. It has a few options for the target for the 
generated package. The compiled wasm is packaged with some JavaScript shims
which include it and declare what functions it exports, typescript definitions,
etc. 

https://rustwasm.github.io/docs/wasm-bindgen/reference/deployment.html#bundlers

Webpack again:

Webpack uses the WasmPackPlugin to automatically run wasm-pack and include
the result in the bundle.


Problem:

For some reason, the rust defined functions are not recognized in TS land.
The TS LSP recognizes them, but they don't work in the browser. There are so 
many opaque intermediate build steps I don't know where to look.

Looking in the generated `pkg` folder, when wasm-pack --target is bundler, I get
"rust_defined_function" doesn't exist. When I set --target web, I get that an 
internal bindgen function doesn't exist. --target bundler produces in the main
module folder of the result this:

```
import * as wasm from "./cas_bg.wasm";
import { __wbg_set_wasm } from "./cas_bg.js";
__wbg_set_wasm(wasm);
export * from "./cas_bg.js";
```

And looking in ./cas_bg.js, it defines the function that can't be found in the
browser. So somehow the "export *" maybe isn't being bundled?

When I run --target web, cas.js contains the contents of ./cas_bg.js from 
bundler mode. The error complains that an internal item isn't defined. I see
it also exports a function `__wbg_init()` which would initialize that variable...

Ah, so if I target web, then I can use a normal import statement on the
package, and I then just need to `await init()`, and it will load the wasm,
then I can use it.

I suppose the alternative, when using target bundler, was that it would
import the wasm when I imported the package automatically. This meant I would
have needed to use the dynamic async `import()` function. I used that though, 
and it still wasn't working. If I have time at the end, I will come back 
and figure out what this wasn't working.



