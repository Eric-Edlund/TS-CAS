use std::cell::RefCell;
use std::collections::hash_map::Entry;
use std::collections::{HashMap, HashSet};
use std::rc::Rc;

use petgraph::data::DataMap;
use petgraph::graph::NodeIndex;

use crate::expressions::Expression;
use crate::{
    graph::{Graph, RelType, Relationship},
    optimization_profiles::OptimizationProfile,
};

#[derive(Clone)]
pub struct DerivationDebugInfo {
    /// How many times each rule was applied and returned an expression.
    pub rule_uses: HashMap<String, u32>,
}

/// Object used to expand graphs.
pub struct Deriver {
    node_indices: HashMap<Expression, NodeIndex>,
    optimizer: Box<dyn OptimizationProfile>,
    debug_info: Option<Rc<RefCell<DerivationDebugInfo>>>,
}

impl Deriver {
    pub fn new(optimizer: Box<dyn OptimizationProfile>) -> Deriver {
        Deriver {
            node_indices: HashMap::new(),
            optimizer,
            debug_info: None,
        }
    }

    pub fn set_debug(&mut self, debug: Option<Rc<RefCell<DerivationDebugInfo>>>) {
        self.debug_info = debug;

        if let Some(ref debug) = self.debug_info {
            let _ = self.optimizer.set_debug(debug.clone());
        }
    }

    /// Expands the graph with equivalent expressions.
    pub fn expand(&mut self, graph: &mut Graph, depth: u32, max_derivations: u32) {
        for i in graph.node_indices() {
            let node = graph.node_weight(i).unwrap();
            self.node_indices.insert(node.clone(), i);
        }
        for _ in 0..depth {
            if graph.node_count() as u32 >= max_derivations {
                return;
            }
            self.pass(graph);
        }
    }

    pub fn expand_increment(&mut self, graph: &mut Graph, depth: &mut u32, max_derviations: u32) {
        for i in graph.node_indices() {
            let node = graph.node_weight(i).unwrap();
            self.node_indices.insert(node.clone(), i);
        }
        for _ in 0..*depth {
            if graph.node_count() as u32 >= max_derviations {
                return;
            }
            self.pass(graph);
        }
        *depth -= 1;
    }

    fn pass(&mut self, graph: &mut Graph) {
        for i in graph.node_indices() {
            let expression = graph.node_weight(i).unwrap().clone();
            let equivalents = self.optimizer.find_equivalents(&expression);

            for (derived, argument) in equivalents {
                let index = if let Entry::Vacant(e) = self.node_indices.entry(derived.clone()) {
                    let result = graph.add_node(derived.clone());
                    e.insert(result);
                    result
                } else {
                    self.node_indices[&derived]
                };

                match graph.find_edge(i, index) {
                    Some(edge_id) => {
                        graph
                            .edge_weight_mut(edge_id)
                            .unwrap()
                            .derived_from
                            .insert(argument);
                    }
                    None => {
                        let mut new_edge = Relationship {
                            r_type: RelType::Equal,
                            derived_from: HashSet::new(),
                        };
                        new_edge.derived_from.insert(argument);
                        graph.add_edge(i, index, new_edge);
                    }
                }
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use crate::{
        convenience_expressions::i,
        expressions::{product::product_of, sum::sum_of},
        optimization_profiles::BruteForceProfile,
    };

    use super::*;

    #[test]
    fn applies_multiple_rules() {
        let mut deriver = Deriver::new(BruteForceProfile::new());
        let mut graph = Graph::new();
        let start = sum_of(&[i(1), i(3), i(3), product_of(&[i(3), i(3)])]);
        graph.add_node(start);
        deriver.expand(&mut graph, 5, 10000);

        assert!(graph.node_weights().any(|exp| *exp == i(16)));
    }
}
