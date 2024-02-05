pub mod expressions;

mod graph_traversal;
mod argument;
mod derivation_rules;
mod deriver;
pub mod graph;
mod mathxml;
mod convenience_expressions;

use convenience_expressions::{sum, product, i, power};
use deriver::Deriver;
use expressions::{Expression, ExpressionId, ExpressionPtr, Integer, Exponent};
use graph::Graph;
use graph_traversal::{expression_complexity_cmp, Path};
use petgraph::{visit::IntoNodeReferences, algo::astar};
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
pub fn simplify_with_steps(_ascii_expression: &str) -> String {
    let expression: ExpressionPtr = product(sum(i(1), i(1)), power(i(42), i(69)));
    let mut graph = Graph::new();
    let deriver = Deriver::new();

    let start = graph.add_node(expression.clone());
    deriver.expand(&mut graph);

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

    serde_json::to_string(&result).unwrap()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn simplify_with_steps_test() {
        // Shouldn't panic
        let result = simplify_with_steps("1 + 1");
        println!("{}", result);
    }
}
