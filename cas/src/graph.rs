use std::rc::Rc;

use crate::argument::Argument;
use crate::expressions::ExpressionPtr;
use petgraph::graph::DiGraph;
use std::collections::HashSet;

/**
* A type of relationship between two expressions.
*/
#[derive(Debug)]
pub enum RelType {
    Equal,
}

/**
* Stores a relationship and a set of arguments
* which derived it. There may be no arguments,
* meaning this relationship wasn't derived.
*/
#[derive(Debug)]
pub struct Relationship {
    pub r_type: RelType,
    pub derived_from: HashSet<Rc<Argument>>,
}

/**
* Graph type for expressions
*/
pub type Graph = DiGraph<ExpressionPtr, Relationship, u32>;

