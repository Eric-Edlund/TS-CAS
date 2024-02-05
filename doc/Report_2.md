# Backend Draft Done

1/28/24 - Report 2

Worked 9 hours.

---

## This Week

This week I built a prototype of the Rust CAS backend. This involved learning 
a lot about Rust, shared mutability, the pointer rules, memory management,
concurrency, etc. Lot of imposter syndrome, Rust is very hard/you need to 
really understand what you want.

I now have an example of every component in the JS implementation in Rust.

I did some reading on building for Web Assembly in Rust. I learned WebAssembly
still does not support threads natively and I will need to use hacky 
web worker libraries, possibly Rayon to get multithreading in the browser.
This means I should probably isolate the multithreading portion of the code 
so that this library can work outside the library also?

Passing custom objects between Rust and JavaScript is apparently also fairly
ugly. I read some discussions on Reddit about designing WASM applications with 
Rust and JavaScript. They suggested passing only standard data (strings, numbers),
between the sides. Most data structures in Rust crates can't be passed over,
and I'm using a Graph library. This means I should probably do the ANTLR 
parsing on the Rust side, so I can just pass in and out string descriptions 
of expressions. There's more discussion on this [here](Webassembly_barrier.md).

Hopefully building for web assembly doesn't hinder the backend's usefulness as
a generic Rust CAS package. I will need to do a lot more reading about
WASM inter-op before settling on a design.


## Next Week

I will continue reading about WebAssembly, planning a good interface,
and hopefully get some basic Rust-JS inter-op working. Once I have a plan for
the interface, I will start implementing more of the backend.


Lots more reading:

https://doc.rust-lang.org/rust-by-example/scope/lifetime/fn.html
https://stackoverflow.com/questions/66171697/how-to-resolve-indicate-anonymous-lifetime-error
https://stackoverflow.com/questions/39803237/build-hashset-from-a-vector-in-rust
https://docs.rs/petgraph/latest/petgraph/
https://doc.rust-lang.org/beta/reference/items/static-items.html
https://www.google.com/search?q=how+to+put+something+on+the+heap+rust&oq=how+to+put+something+on+the+heap+rust&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORigATIHCAEQIRirAjIHCAIQIRirAjIHCAMQIRirAtIBCDY1MTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8
https://doc.rust-lang.org/nomicon/send-and-sync.html
https://stackoverflow.com/questions/62248219/rust-accessing-option-from-mutex
https://doc.rust-lang.org/std/hash/trait.Hash.html
https://docs.rs/type-variance/latest/type_variance/#:~:text=Rust%20supports%20three%20different%20modes,and%20a%20type%20parameter%20T%20%3A&text=Covariance%3A%20F%20is,(unless%20T%20%3D%20U%20).
https://doc.rust-lang.org/rust-by-example/variable_bindings.html
https://www.reddit.com/r/rust/comments/g80pv0/are_all_rust_libs_on_crates_compatible_with_wasm/
https://github.com/rustwasm/wasm-bindgen
https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/convert/trait.IntoWasmAbi.html
https://www.reddit.com/r/rust/comments/phbjcg/question_on_designing_ideal_rust_js_interface_via/
https://chromestatus.com/feature/5724132452859904
https://www.reddit.com/r/rust/comments/12rn5fq/state_of_web_assembly_and/
https://docs.rs/wasm-bindgen-rayon/latest/wasm_bindgen_rayon/
https://doc.rust-lang.org/beta/reference/items/static-items.html
https://github.com/matklad/once_cell
https://stackoverflow.com/questions/48471607/how-to-match-on-an-option-inside-an-arc
https://doc.rust-lang.org/std/keyword.ref.html
https://stackoverflow.com/questions/51338579/how-to-convert-optiont-to-optiont-in-the-most-idiomatic-way-in-rust
https://doc.rust-lang.org/std/hash/trait.Hash.html
https://doc.rust-lang.org/reference/visibility-and-privacy.html
https://stackoverflow.com/questions/21324657/does-rust-support-ruby-like-string-interpolation
https://stackoverflow.com/questions/30414424/how-can-i-update-a-value-in-a-mutable-hashmap
https://doc.rust-lang.org/std/cell/struct.RefCell.html
https://doc.rust-lang.org/rust-by-example/testing/integration_testing.html
https://doc.rust-lang.org/rust-by-example/hello/print/print_display.html
https://stackoverflow.com/questions/44662312/how-to-filter-a-vector-of-custom-structs
https://medium.com/@ericdreichert/how-to-print-during-rust-tests-619bdc7ccebc
https://stackoverflow.com/questions/60423687/how-do-i-compare-an-arct-against-a-t 
https://doc.rust-lang.org/std/cmp/trait.Eq.html

