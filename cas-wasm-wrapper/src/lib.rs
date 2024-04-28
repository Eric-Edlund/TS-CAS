use wasm_bindgen::prelude::*;

/// Just provide wrappers for the functions in cas. This is only a compilation
/// target.

#[wasm_bindgen]
pub fn simplify_with_steps(
    json_expression: &str,
    search_depth: u32,
    optimizer: &str,
    max_derivations: u32,
) -> String {
    cas::simplify_with_steps(
        json_expression,
        search_depth,
        optimizer,
        None,
        max_derivations,
    )
}

#[wasm_bindgen]
pub fn get_all_equivalents(json_expression: &str, search_depth: u32, optimizer: &str) -> String {
    cas::get_all_equivalents(json_expression, search_depth, optimizer)
}
