//! Computer algebra system for solving integrals.
//!
//! <div class="warning">This crate is does not have a stable api.</div>
//!
//! Provides types to represent symbolic math expressions and derivation tools to simplify them
//! using equivalence rules.
//! - Parse expressions to and from JSON
//! - Derive their simplifications automatically
//! - Gives steps used during the simplification
//!
//! Here's an example of solving/simplifying a trivial integral.
//!
//! ```
//! // Create an expression for the integral of 2x with respect to x
//! let start = Integral::of(
//!     product_of(&[Integer::of(2), Variable::of("x")]),
//!     Variable::of("x"),
//! );
//!
//! // Create a derivation object for this expression
//! let mut handle = simplify_incremental(&start, EvaluateFirstProfile::new(), None);
//!
//! // Do some simplification work
//! let result = handle.do_pass(20);
//!
//! assert!(result.finished);
//! assert_eq!(result.failed, None);
//! assert_eq!(
//!     result.steps.unwrap().steps.last().unwrap().1,
//!     Exponent::of(Variable::of("x"), Integer::of(2))
//! );
//!
//! // Assess the produced derivation graph
//! let graph: &Graph = handle.get_deriver();
//! ```
//!

mod argument;
mod convenience_expressions;
mod derivation_rules;
mod deriver;
mod equivalence_disbatchers;
mod expressions;
pub mod graph;
mod graph_traversal;
mod mathxml;
mod optimization_profiles;

pub use deriver::DerivationDebugInfo;
use deriver::Deriver;
use expressions::read_from_json::read_object_from_json;
pub use expressions::Expression;
use graph::Graph;
use graph_traversal::better_solution_cmp;
pub use optimization_profiles::{BruteForceProfile, EvaluateFirstProfile, OptimizationProfile};
use petgraph::{algo::astar, graph::NodeIndex, visit::IntoNodeReferences};
use serde::Serialize;
use serde_json::json;
use std::{cell::RefCell, collections::HashSet, rc::Rc};

pub use expressions::absolute_value;
pub use expressions::constant;
pub use expressions::derivative;
pub use expressions::exponent;
pub use expressions::fraction;
pub use expressions::integer;
pub use expressions::integral;
pub use expressions::logarithm;
pub use expressions::negation;
pub use expressions::product;
pub use expressions::substitution;
pub use expressions::sum;
pub use expressions::trig_expression;
pub use expressions::undefined;
pub use expressions::variable;
pub use graph_traversal::Path;

/// Parses an expression from the given json string.
pub fn expression_from_json(exp: &str) -> Result<Expression, anyhow::Error> {
    read_object_from_json(exp)
}

/// Simplifies the given expression the best possible with the given constraints. This can take a long time for complex expressions,
/// in which case you should use the incremental simplification function.
///
/// * `expression` - The expression to simplify.
/// * `search_depth` - The maximum number of steps away from the initial expression the deriver
/// will go.
/// * `optimizer` - The optimizer to use when deriving.
/// * `allowed_rules` - The list of names of rules which may be used during derivation. If None,
/// all rules are used. This option must be supported by the supplied optimizer or else it will do
/// nothing.
/// * `debug_data` - If supplied, debug information about the derivation process is recorded in the
/// object.
pub fn simplify(
    expression: &Expression,
    search_depth: u32,
    optimizer: Box<dyn OptimizationProfile>,
    allowed_rules: Option<Vec<String>>,
    debug_data: Option<Rc<RefCell<DerivationDebugInfo>>>,
    max_derivations: u32,
) -> DerivationResult {
    let mut optimizer = optimizer;
    if let Some(rules) = allowed_rules {
        let _ = optimizer.set_rules(&rules);
    }

    let mut graph = Graph::new();
    let start = graph.add_node(expression.clone());

    let mut deriver = Deriver::new(graph, optimizer, None, debug_data);
    deriver.expand_to_constraint(search_depth, max_derivations);

    let simplest_exp = deriver
        .node_references()
        .min_by(|a, b| better_solution_cmp(a.1, b.1))
        .expect("There must be at least one node");
    let success = expression != simplest_exp.1;

    let result_path = if success {
        Some(build_path(&deriver, expression, start, simplest_exp.0))
    } else {
        None
    };

    DerivationResult {
        success,
        steps: result_path,
    }
}

/// The resulting simplification and steps from a derivation.
#[derive(Serialize)]
pub struct DerivationResult {
    /// The derivation produced an equivalent expression of lower complexity than
    /// the given one.
    pub success: bool,

    /// If success, present and the last step will be the solution.
    pub steps: Option<Path>,
}

/// Returns a derivation handle which stores the given expression and parameters and can be used to
/// incrementally simplify the given expression.
///
/// * `expression` - The expression to simplify.
/// * `optimizer` - The optimizer to use when deriving.
/// * `allowed_rules` - The list of names of rules which may be used during derivation. If None,
/// all rules are used. This option must be supported by the supplied optimizer or else it will do
/// nothing.
pub fn simplify_incremental(
    expression: &Expression,
    optimizer: Box<dyn OptimizationProfile>,
    allowed_rules: Option<Vec<String>>,
) -> DerivationHandle {
    let mut graph = Graph::new();
    let index = graph.add_node(expression.clone());
    let deriver = Deriver::new(graph, optimizer, allowed_rules, None);

    DerivationHandle {
        deriver,
        start_exp: expression.clone(),
        start: index,
    }
}

/// Stores a the data associated with a derivation calculation.
pub struct DerivationHandle {
    deriver: Deriver,
    start: NodeIndex,
    start_exp: Expression,
}

impl DerivationHandle {
    /// Works until the given number of new derivations have been made
    /// or there is nothing left to derive.
    pub fn do_pass(&mut self, derivations: u32) -> IncrementalResult {
        let finished = self.deriver.expand_increment(derivations);

        let simplest_exp = self
            .deriver
            .node_references()
            .min_by(|a, b| better_solution_cmp(a.1, b.1))
            .expect("There must be at least one node");

        let result_path = build_path(&self.deriver, &self.start_exp, self.start, simplest_exp.0);

        IncrementalResult {
            steps: Some(result_path),
            failed: None,
            finished,
        }
    }

    /// Returns a reference to the underlying deriver used by this handle.
    pub fn deriver(&self) -> &Deriver {
        &self.deriver
    }
}

#[derive(Serialize)]
pub struct IncrementalResult {
    /// The path to the current simplest expression.
    pub steps: Option<Path>,

    /// If true, the operation is over for the given reason.
    pub failed: Option<String>,

    /// If true, all future passes will yield nothing.
    pub finished: bool,
}

impl IncrementalResult {
    /// A static failed value.
    pub fn failed(reason: String) -> Self {
        Self {
            steps: None,
            failed: Some(reason),
            finished: false,
        }
    }
}

/// Generate all the equivalents for the given expression within the given constraints.
///
/// * `expression` - The expression to derive equivalents for.
/// * `optimizer` - The optimization profile to use when deriving.
/// * `search_depth` - The maximum number of steps away from the start expression to derive.
/// * `max_derivations` - The maximum number of equivalent expressions to derive. May be slightly
/// exceeded.
///
/// Returns a json object containing a list "equivalents" and list "rules_used".
pub fn get_all_equivalents(
    expression: &Expression,
    optimizer: Box<dyn OptimizationProfile>,
    search_depth: u32,
    max_derivations: u32,
) -> String {
    let mut graph = Graph::new();
    graph.add_node(expression.clone());
    let mut deriver = Deriver::new(graph, optimizer, None, None);

    deriver.expand_to_constraint(search_depth, max_derivations);

    let mut result = Vec::new();
    result.extend(deriver.node_weights().map(|e| e.as_stringable().to_json()));

    let rules = deriver
        .edge_weights()
        .flat_map(|e| &e.derived_from)
        .map(|arg| arg.message().to_string())
        .collect::<HashSet<String>>();

    json!({
        "equivalents": &result,
        "rules_used": rules,
    })
    .to_string()
}

fn build_path(graph: &Graph, start_exp: &Expression, start: NodeIndex, end: NodeIndex) -> Path {
    let shortest_path = astar(&graph, start, |n| n == end, |_| 1, |_| 0)
        .expect("There must be a path because the graph is connected");

    let mut result_path = Path {
        start: start_exp.clone(),
        steps: vec![],
    };

    let mut last_node = start;
    for step in shortest_path.1.iter().skip(1) {
        let edge_id = graph.find_edge(last_node, *step).unwrap();
        result_path.steps.push((
            graph
                .edge_weight(edge_id)
                .unwrap()
                .derived_from
                .iter()
                .next()
                .unwrap()
                .clone(),
            graph.node_weight(*step).unwrap().clone(),
        ));
        last_node = *step;
    }

    result_path
}

#[cfg(test)]
mod tests {
    use crate::expressions::Exponent;

    use self::expressions::{product::product_of, sum::sum_of, Integer, Integral, Variable};
    use optimization_profiles::BruteForceProfile;

    use super::*;

    #[test]
    fn incremental_derivation() {
        let start = sum_of(&[
            product_of(&[Integer::of(8), Integer::of(1)]),
            Integer::of(1),
        ]);

        let mut graph = Graph::new();
        let index = graph.add_node(start.clone());
        let mut deriver = Deriver::new(graph, BruteForceProfile::new(), None, None);
        deriver.expand_increment(100);

        let simplest_exp = deriver
            .node_references()
            .min_by(|a, b| better_solution_cmp(a.1, b.1))
            .expect("There must be at least one node");
        let path = build_path(&deriver, &start, index, simplest_exp.0);
        assert_eq!(path.steps.len(), 2);
    }

    #[test]
    fn crate_doc_example() {
        // Create an expression for the integral of 2x with respect to x
        let start = Integral::of(
            product_of(&[Integer::of(2), Variable::of("x")]),
            Variable::of("x"),
        );

        // Create a derivation object for this expression
        let mut handle = simplify_incremental(&start, EvaluateFirstProfile::new(), None);

        // Do some simplification work
        let result = handle.do_pass(20);

        assert!(result.finished);
        assert_eq!(result.failed, None);
        assert_eq!(
            result.steps.unwrap().steps.last().unwrap().1,
            Exponent::of(Variable::of("x"), Integer::of(2))
        );

        // Assess the produced derivation graph
        let _graph: &Graph = handle.deriver();
    }
}
