mod expressions;

mod graph_traversal;
mod argument;
mod derivation_rules;
mod deriver;
pub mod graph;
mod mathxml;
mod convenience_expressions;

use deriver::Deriver;
use expressions::{Expression, read_object_from_json};
use graph::Graph;
use graph_traversal::{expression_complexity_cmp, Path};
use petgraph::{visit::IntoNodeReferences, algo::astar};
use serde_json::json;
use wasm_bindgen::prelude::*;

/**
* Takes an expression in JSON form, parses, simplifies then returns
* a JSON containing steps to solve it, or an error message.
* TODO: Actual spec for return type and input JSON
*
* Returned JSON is an object:
* {
*   "steps": [
*       "MathXMLExpression", // The problem given
*       "Argument string",
*       "MathXMLExpression",
*       "Argument string",
*       "MathXMLExpression"
*       ...
*   ],
*   "success": true | false
* }
*
* Where 
* 1) "steps" will be at least one long, the first
*   element being the given problem.
* 2) "success" is true if a simpler equivalent expression was found.
*/
#[wasm_bindgen]
pub fn simplify_with_steps(json_expression: &str, search_depth: u32) -> String {
    let expression = match read_object_from_json(json_expression) {
        Ok(exp) => exp,
        Err(msg) => return msg,
    };
    let mut graph = Graph::new();
    let mut deriver = Deriver::new();

    let start = graph.add_node(expression.clone());
    deriver.expand(&mut graph, search_depth);

    let simplest_exp = graph.node_references()
        .min_by(|a, b| expression_complexity_cmp(a.1, b.1))
        .expect("There must be at least one node");

    let shortest_path = astar(&graph, start, |n| n == simplest_exp.0, |_| 1, |_| 0)
        .expect("There must be a path because the graph is connected");

    let mut result = Path {start: expression.clone(), steps: vec![]}; 

    let mut last_node = start;
    for step in shortest_path.1.iter().skip(1) {
        let edge_id = graph.find_edge(last_node, *step).unwrap();
        result.steps.push((
            graph.edge_weight(edge_id).unwrap().derived_from.iter().nth(0).unwrap().clone(),
            graph.node_weight(*step).unwrap().clone()
        ));
        last_node = *step;
    }

    json!({
        "steps": &result,
        "success": &expression != simplest_exp.1
    }).to_string()
}

#[wasm_bindgen]
pub fn get_all_equivalents(json_expression: &str, search_depth: u32) -> String {
    let expression = match read_object_from_json(json_expression) {
        Ok(exp) => exp,
        Err(msg) => return msg,
    };
    let mut graph = Graph::new();
    let mut deriver = Deriver::new();

    graph.add_node(expression.clone());
    deriver.expand(&mut graph, search_depth);

    let mut result = Vec::new();
    result.extend(graph.node_weights().map(|e| e.as_stringable().to_json()));

    json!({
        "equivalents": &result,
    }).to_string()
}

