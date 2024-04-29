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

use std::{cell::RefCell, collections::HashSet, rc::Rc, sync::Arc};

pub use deriver::DerivationDebugInfo;
use deriver::Deriver;
pub use expressions::{read_object_from_json, Expression};
use graph::Graph;
use graph_traversal::{better_solution_cmp, expression_complexity_cmp, Path};
pub use optimization_profiles::{BruteForceProfile, EvaluateFirstProfile, OptimizationProfile};
use petgraph::{
    algo::{astar, dijkstra},
    visit::IntoNodeReferences,
};
use serde::Serialize;
use serde_json::json;

/// Takes an expression in JSON form, parses, simplifies then returns
/// a JSON containing steps to solve it, or an error message.
/// TODO: Actual spec for return type and input JSON
///
/// Returned JSON is an object:
/// {
///   "steps": [
///       "MathXMLExpression", // The problem given
///       "Argument string",
///       "MathXMLExpression",
///       "Argument string",
///       "MathXMLExpression"
///       ...
///   ],
///   "success": true | false
/// }
///
/// Where
/// 1) "steps" will be at least one long, the first
///   element being the given problem.
/// 2) "success" is true if a simpler equivalent expression was found.
pub fn simplify_with_steps(
    json_expression: &str,
    search_depth: u32,
    optimizer: &str,
    allowed_rules: Option<Vec<String>>,
    max_derivations: u32,
) -> String {
    let expression = match read_object_from_json(json_expression) {
        Ok(exp) => exp,
        Err(msg) => return msg,
    };
    let opt: Box<dyn OptimizationProfile> = match optimizer {
        "brute_force" => BruteForceProfile::new(),
        "evaluate_first" => EvaluateFirstProfile::new(),
        _ => panic!("Invalid optimizer"),
    };

    let result = simplify_with_steps_internal(
        &expression,
        search_depth,
        opt,
        allowed_rules,
        None,
        max_derivations,
    );

    json!(result).to_string()
}

pub fn simplify_with_steps_incremental(
    json_expression: &str,
    search_depth: u32,
    optimizer: &str,
    allowed_rules: Option<Vec<String>>,
    max_derivations: u32,
    callback: &dyn Fn(String),
) {
    let expression = match read_object_from_json(json_expression) {
        Ok(exp) => exp,
        Err(msg) => {
            callback(json!(IncrementalResult::failed(msg)).to_string());
            return;
        }
    };
    let opt: Box<dyn OptimizationProfile> = match optimizer {
        "brute_force" => BruteForceProfile::new(),
        "evaluate_first" => EvaluateFirstProfile::new(),
        _ => panic!("Invalid optimizer"),
    };

    simplify_with_steps_internal_incremental(
        &expression,
        search_depth,
        opt,
        allowed_rules,
        None,
        max_derivations,
        &|res| {
            let json_res = json!(res);
            callback(json_res.to_string())
        },
    );
}

/// - max_derivations The largest number of equivalent expressions to find before giving up.
pub fn simplify_with_steps_internal(
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

    let mut deriver = Deriver::new(optimizer);
    deriver.set_debug(debug_data);
    deriver.expand(&mut graph, search_depth, max_derivations);

    let simplest_exp = graph
        .node_references()
        .min_by(|a, b| better_solution_cmp(a.1, b.1))
        .expect("There must be at least one node");
    let success = expression != simplest_exp.1;

    let shortest_path = astar(&graph, start, |n| n == simplest_exp.0, |_| 1, |_| 0)
        .expect("There must be a path because the graph is connected");

    let result_path = if success {
        let mut p = Path {
            start: expression.clone(),
            steps: vec![],
        };

        let mut last_node = start;
        for step in shortest_path.1.iter().skip(1) {
            let edge_id = graph.find_edge(last_node, *step).unwrap();
            p.steps.push((
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
        Some(p)
    } else {
        None
    };

    DerivationResult {
        success,
        steps: result_path,
    }
}

pub fn simplify_with_steps_internal_incremental(
    expression: &Expression,
    search_depth: u32,
    optimizer: Box<dyn OptimizationProfile>,
    allowed_rules: Option<Vec<String>>,
    debug_data: Option<Rc<RefCell<DerivationDebugInfo>>>,
    max_derivations: u32,
    callback: &dyn Fn(IncrementalResult),
) {
    let mut optimizer = optimizer;
    if let Some(rules) = allowed_rules {
        let _ = optimizer.set_rules(&rules);
    }

    let mut graph = Graph::new();
    let start = graph.add_node(expression.clone());

    let mut deriver = Deriver::new(optimizer);
    deriver.set_debug(debug_data);

    let mut depth = search_depth;
    let mut last: Option<Expression> = None;
    while depth > 0 {
        deriver.expand_increment(&mut graph, &mut depth, max_derivations);
        let mut simplest_exp = graph
            .node_references()
            .min_by(|a, b| expression_complexity_cmp(a.1, b.1))
            .expect("There must be at least one node");

        if simplest_exp.1 == expression {
            simplest_exp.1 = graph
                .node_weight(
                    *dijkstra(&graph, simplest_exp.0, None, |_| 1)
                        .iter()
                        .max_by(|a, b| b.1.cmp(a.1))
                        .unwrap()
                        .0,
                )
                .unwrap();
        }

        if let Some(ref last) = last {
            if last == simplest_exp.1 {
                continue;
            }
        }
        last = Some(simplest_exp.1.clone());

        let shortest_path = astar(&graph, start, |n| n == simplest_exp.0, |_| 1, |_| 0)
            .expect("There must be a path because the graph is connected");

        let mut result_path = Path {
            start: expression.clone(),
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

        callback(IncrementalResult {
            steps: Some(result_path),
            failed: None,
        })
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

#[derive(Serialize)]
pub struct IncrementalResult {
    /// The path to the current simplest expression.
    pub steps: Option<Path>,

    /// If true, the operation is over.
    pub failed: Option<String>,
}

impl IncrementalResult {
    pub fn failed(reason: String) -> Self {
        Self {
            steps: None,
            failed: Some(reason),
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
        Err(msg) => return msg,
    };
    let mut graph = Graph::new();
    let opt: Box<dyn OptimizationProfile> = match optimizer {
        "brute_force" => BruteForceProfile::new(),
        "evaluate_first" => EvaluateFirstProfile::new(),
        _ => panic!("Invalid optimizer"),
    };
    let mut deriver = Deriver::new(opt);

    graph.add_node(expression.clone());
    deriver.expand(&mut graph, search_depth, max_derivations);

    let mut result = Vec::new();
    result.extend(graph.node_weights().map(|e| e.as_stringable().to_json()));

    let rules = graph
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
