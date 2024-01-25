pub mod expressions;

mod graph;
mod argument;
mod deriver;
mod derivation_rules;

use expressions::{Expression, ExpressionId};
use graph::Graph;
use deriver::Deriver;

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
