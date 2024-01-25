use std::rc::Rc;

use petgraph::graph::DiGraph;
use crate::expressions::ExpressionPtr;
use crate::argument::Argument;
use std::collections::HashSet;

/**
* A type of relationship between two expressions.
*/
pub enum RelType {
    Equal,
}

pub struct Relationship {
    pub r_type: RelType,
    pub derived_from: HashSet<Rc<Argument>>,
}

/**
* Graph type for expressions
*/
pub type Graph = DiGraph<ExpressionPtr, Relationship>;


