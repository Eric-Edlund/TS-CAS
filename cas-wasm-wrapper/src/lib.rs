use serde_json::json;
use wasm_bindgen::prelude::*;

/// Just provide wrappers for the functions in cas. This is only a compilation
/// target.

#[wasm_bindgen]
pub fn get_all_equivalents(
    json_expression: &str,
    search_depth: u32,
    optimizer: &str,
    max_derived: u32,
) -> String {
    cas::get_all_equivalents(json_expression, search_depth, optimizer, max_derived)
}

#[wasm_bindgen]
pub struct DerivationHandle {
    handle: cas::DerivationHandle,
}

#[wasm_bindgen]
impl DerivationHandle {
    pub fn do_pass(&mut self, new_derivations: u32) -> String {
        json!(self.handle.do_pass(new_derivations)).to_string()
    }
}

#[wasm_bindgen]
pub fn simplify_incremental(json_expression: &str, optimizer: &str) -> DerivationHandle {
    match cas::simplify_incremental_js(json_expression, optimizer) {
        Ok(handle) => DerivationHandle { handle },
        Err(m) => panic!("{}", m),
    }
}
