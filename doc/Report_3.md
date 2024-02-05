# Implementing Backend

2/4/24 - Report 3

Worked 11 hours.

---

## This Week

Did some research on parsers for Rust. ANTLR doesn't yet have a Rust implementation
so I'm going to need to use something else.

I also thought for a few hours about the interface for the backend and realized
that I was spending too much time thinking considering that I can't predict
the future. MVP in mind, the backend passes JSON objects forward containing
the steps to solve a problem. I implemented serialization methods for all
the expression classes, did some logic for solution finding, implemented some
equivalence rules and plugged some more into the frontend prototype. 

The Rust
crate now compiles to WASM and is loaded and used by the website. I fought
with webpack a lot, learned very little.

## Next Week

Focusing on an MVP, next week I will figure out how to parse expressions in Rust,
then try to get some expression parsing working for the frontend.

Lots more reading:

https://doc.rust-lang.org/rust-by-example/variable_bindings.html
https://rustwasm.github.io/docs/book/reference/deploying-to-production.html
https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_Wasm
https://www.reddit.com/r/rust/comments/phbjcg/question_on_designing_ideal_rust_js_interface_via/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
https://github.com/RReverser/wasm-bindgen-rayon?tab=readme-ov-file
https://julien-decharentenay.medium.com/rust-webassembly-sharing-data-between-webworkers-f156ba65d141
https://rustwasm.github.io/wasm-bindgen/examples/hello-world.html
https://wasm-bindgen.netlify.app/exbuild/raytrace-parallel/
https://github.com/rustwasm/wasm-bindgen/blob/main/examples/raytrace-parallel/src/lib.rs
https://webpack.js.org/configuration/dev-server/
https://crates.io/crates/antlr-rust
https://stackoverflow.com/questions/68971726/mutating-elements-inside-iterator
https://stackoverflow.com/questions/35161176/checking-equality-of-custom-structs
https://docs.rs/petgraph/latest/petgraph/algo/astar/fn.astar.html
https://doc.rust-lang.org/std/cmp/enum.Ordering.html
https://stackoverflow.com/questions/43420605/which-algorithm-from-petgraph-will-find-the-shortest-path-from-a-to-b 
https://serde.rs/
https://github.com/serde-rs/json
https://docs.rs/serde_json/latest/serde_json/macro.json.html?search=Serialize
https://serde.rs/impl-serialize.html

