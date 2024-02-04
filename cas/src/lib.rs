pub mod expressions;

mod argument;
mod derivation_rules;
mod deriver;
pub mod graph;

use deriver::Deriver;
use expressions::{Expression, ExpressionId};
use graph::Graph;
use wasm_bindgen::prelude::*;

/**
* Takes an ascii string and reads it into an expression.
*/
pub fn expression_from_ascii(_string: &str) -> ExpressionId {
    todo!()
}

pub fn find_equivalents(exp: Expression) -> Graph {
    let mut graph = Graph::new();
    graph.add_node(exp);
    let deriver = Deriver::new();

    deriver.expand(&mut graph);

    return graph;
}

/**
* Takes an ascii math expression and returns a JSON object
* contianing a sequence of steps leading to a reduced expression.
*/
#[wasm_bindgen]
pub fn simplify_with_steps(expression: &str) -> String {
    return format!("{{steps: {expression}}}").to_string();
}
