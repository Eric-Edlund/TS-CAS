mod expressions;

mod argument;
mod convenience_expressions;
mod derivation_rules;
mod deriver;
mod equivalence_disbatchers;
pub mod graph;
mod graph_traversal;
mod mathxml;
mod optimization_profiles;

use std::{cell::RefCell, collections::HashSet, rc::Rc};

use anyhow::anyhow;
pub use deriver::DerivationDebugInfo;
use deriver::Deriver;
pub use expressions::{read_object_from_json, Expression};
use graph::Graph;
use graph_traversal::{better_solution_cmp, Path};
pub use optimization_profiles::{BruteForceProfile, EvaluateFirstProfile, OptimizationProfile};
use petgraph::{algo::astar, graph::NodeIndex, visit::IntoNodeReferences};
use serde::Serialize;
use serde_json::json;

pub fn simplify_incremental_js(
    expression_json: &str,
    optimizer: &str,
) -> Result<DerivationHandle, anyhow::Error> {
    let exp = read_object_from_json(expression_json)?;
    let opt: Box<dyn OptimizationProfile> = match optimizer {
        "brute_force" => BruteForceProfile::new(),
        "evaluate_first" => EvaluateFirstProfile::new(),
        _ => return Err(anyhow!("Invalid optimization profile given")),
    };

    Ok(simplify_incremental(&exp, opt, None))
}

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

/// - max_derivations The largest number of equivalent expressions to find before giving up.
pub fn simplify_internal(
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

#[derive(Serialize)]
pub struct DerivationResult {
    /// The derivation produced an equivalent expression of lower complexity than
    /// the given one.
    pub success: bool,

    /// If success, present and the last step will be the solution.
    pub steps: Option<Path>,
}

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

#[derive(Serialize)]
pub struct IncrementalResult {
    /// The path to the current simplest expression.
    pub steps: Option<Path>,

    /// If true, the operation is over.
    pub failed: Option<String>,

    /// If true, all future passes will yield nothing.
    pub finished: bool,
}

impl IncrementalResult {
    pub fn failed(reason: String) -> Self {
        Self {
            steps: None,
            failed: Some(reason),
            finished: false,
        }
    }
}

/// - optimizer brute_force | evaluate_first
pub fn get_all_equivalents(
    json_expression: &str,
    search_depth: u32,
    optimizer: &str,
    max_derivations: u32,
) -> String {
    let expression = match read_object_from_json(json_expression) {
        Ok(exp) => exp,
        Err(msg) => return msg.to_string(),
    };
    let mut graph = Graph::new();
    graph.add_node(expression.clone());
    let opt: Box<dyn OptimizationProfile> = match optimizer {
        "brute_force" => BruteForceProfile::new(),
        "evaluate_first" => EvaluateFirstProfile::new(),
        _ => panic!("Invalid optimizer"),
    };
    let mut deriver = Deriver::new(graph, opt, None, None);

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

#[cfg(test)]
mod tests {
    use self::expressions::{product::product_of, sum::sum_of, Integer};
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
}
