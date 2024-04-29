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
pub fn get_all_equivalents(
    json_expression: &str,
    search_depth: u32,
    optimizer: &str,
    max_derived: u32,
) -> String {
    cas::get_all_equivalents(json_expression, search_depth, optimizer, max_derived)
}

#[wasm_bindgen]
pub fn simplify_incremental(
    json_expression: &str,
    depth: u32,
    optimizer: &str,
    max_derived: u32,
    callback: &js_sys::Function,
) {
    cas::simplify_with_steps_incremental(
        json_expression,
        depth,
        optimizer,
        None,
        max_derived,
        &|res| {
            let this = JsValue::NULL;
            let _ = callback.call1(&this, &JsValue::from(res));
        },
    );
}
