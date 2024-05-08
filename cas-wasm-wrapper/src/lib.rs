use ihateintegrals::{
    expression_from_json, BruteForceProfile, EvaluateFirstProfile, OptimizationProfile,
};
use serde_json::json;
use wasm_bindgen::prelude::*;

/// Just provide wrappers for the functions in ihateintegrals.

#[wasm_bindgen]
pub fn get_all_equivalents(
    json_expression: &str,
    search_depth: u32,
    optimizer: &str,
    max_derived: u32,
) -> String {
    let expression = expression_from_json(json_expression).expect("Invalid expression");
    let opt: Box<dyn OptimizationProfile> = match optimizer {
        "brute_force" => BruteForceProfile::new(),
        "evaluate_first" => EvaluateFirstProfile::new(),
        _ => panic!("Invalid optimizer"),
    };

    ihateintegrals::get_all_equivalents(&expression, opt, search_depth, max_derived)
}

#[wasm_bindgen]
pub struct DerivationHandle {
    handle: ihateintegrals::DerivationHandle,
    last_graph_checked: ihateintegrals::graph::Graph,
}

#[wasm_bindgen]
impl DerivationHandle {
    /// Does a pass of the derivation process.
    pub fn do_pass(&mut self, new_derivations: u32) -> String {
        json!(self.handle.do_pass(new_derivations)).to_string()
    }

    /// Gets the difference in the constructed derivation graph since the
    /// last time this function was called.
    pub fn get_graph_difference(&mut self) -> String {
        let new_graph: &ihateintegrals::graph::Graph = self.handle.deriver();
        let diff: Vec<_> = new_graph
            .clone()
            .into_nodes_edges()
            .1
            .iter()
            .filter(|edge| {
                !self
                    .last_graph_checked
                    .contains_edge(edge.source(), edge.target())
            })
            .map(|edge| {
                json!({
                    "source": new_graph.node_weight(edge.source()).unwrap().to_json(),
                    "edge": edge.weight.derived_from.iter().next().unwrap().to_json(),
                    "target": new_graph.node_weight(edge.target()).unwrap().to_json(),
                })
            })
            .collect();

        self.last_graph_checked = new_graph.clone();

        json!(diff).to_string()
    }
}

#[wasm_bindgen]
pub fn simplify_incremental(json_expression: &str, optimizer: &str) -> DerivationHandle {
    let expression = expression_from_json(json_expression).expect("Invalid expression");
    let opt: Box<dyn OptimizationProfile> = match optimizer {
        "brute_force" => BruteForceProfile::new(),
        "evaluate_first" => EvaluateFirstProfile::new(),
        _ => panic!("Invalid optimizer"),
    };
    DerivationHandle {
        handle: ihateintegrals::simplify_incremental(&expression, opt, None),
        last_graph_checked: ihateintegrals::graph::Graph::new(),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_1() {
        let mut handle =
            simplify_incremental("[\"Sum\", {\"num\": 1}, {\"num\": 1}]", "evaluate_first");
        assert_eq!(handle.get_graph_difference(), "[]");

        let _ = handle.do_pass(10);

        assert_ne!(handle.get_graph_difference(), "[]");
    }
}
