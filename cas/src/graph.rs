use std::rc::Rc;

use crate::argument::Argument;
use crate::expressions::Expression;
use petgraph::graph::DiGraph;
use std::collections::HashSet;

/// A type of relationship between two expressions.
#[derive(Debug, Clone)]
pub enum RelType {
    Equal,
}

/// Stores a relationship and a set of arguments
/// which derived it. There may be no arguments,
/// meaning this relationship wasn't derived.
#[derive(Debug, Clone)]
pub struct Relationship {
    pub r_type: RelType,
    pub derived_from: HashSet<Rc<Argument>>,
}

/// Graph type for expressions
pub type Graph = DiGraph<Expression, Relationship, u32>;
