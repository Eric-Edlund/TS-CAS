use serde_json::json;
use wasm_bindgen::prelude::*;

/// Just provide wrappers for the functions in cas.

#[wasm_bindgen]
pub fn get_all_equivalents(
    json_expression: &str,
    search_depth: u32,
    optimizer: &str,
    max_derived: u32,
) -> String {
    cas::get_all_equivalents(json_expression, search_depth, optimizer, max_derived)
}

#[wasm_bindgen]
pub struct DerivationHandle {
    handle: cas::DerivationHandle,
    last_graph_checked: cas::graph::Graph,
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
        let new_graph: &cas::graph::Graph = self.handle.get_deriver();
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
                    "edge": edge.weight.derived_from.iter().next().unwrap().rule_name(),
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
    match cas::simplify_incremental_js(json_expression, optimizer) {
        Ok(handle) => DerivationHandle {
            handle,
            last_graph_checked: cas::graph::Graph::new(),
        },
        Err(m) => panic!("{}", m),
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
