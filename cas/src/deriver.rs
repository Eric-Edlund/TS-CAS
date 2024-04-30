use std::cell::RefCell;
use std::collections::hash_map::Entry;
use std::collections::{BinaryHeap, HashMap, HashSet};
use std::ops::Deref;
use std::rc::Rc;

use petgraph::graph::NodeIndex;

use crate::expressions::Expression;
use crate::graph_traversal::complexity_rec;
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
    graph: Graph,
    optimizer: Box<dyn OptimizationProfile>,
    _debug_info: Option<Rc<RefCell<DerivationDebugInfo>>>,
    _allowed_rules: Option<Vec<String>>,
    node_indices: HashMap<Expression, NodeIndex>,
    // Tuples are compared lexographically, so the sort descriminant is first
    derivation_queue: BinaryHeap<(u32, NodeIndex)>,
}

impl Deriver {
    pub fn new(
        graph: Graph,
        optimizer: Box<dyn OptimizationProfile>,
        allowed_rules: Option<Vec<String>>,
        debug_info: Option<Rc<RefCell<DerivationDebugInfo>>>,
    ) -> Self {
        let mut optimizer = optimizer;

        if let Some(debug) = debug_info.clone() {
            let _ = optimizer.set_debug(debug);
        }

        let mut derivation_queue = BinaryHeap::<(u32, NodeIndex)>::new();
        derivation_queue.extend(graph.node_indices().map(|n| (u32::MAX, n)));

        Self {
            graph,
            optimizer,
            _debug_info: debug_info,
            _allowed_rules: allowed_rules,
            node_indices: HashMap::new(),
            derivation_queue,
        }
    }

    /// Expands the graph until one of the given constraints is met.
    pub fn expand_to_constraint(&mut self, depth: u32, max_derivations: u32) {
        for i in self.graph.node_indices() {
            let node = self.graph.node_weight(i).unwrap();
            self.node_indices.insert(node.clone(), i);
        }
        for _ in 0..depth {
            if self.graph.node_count() as u32 >= max_derivations {
                return;
            }
            for i in self.graph.node_indices() {
                let expression = self.graph.node_weight(i).unwrap().clone();
                let equivalents = self.optimizer.find_equivalents(&expression);

                for (derived, argument) in equivalents {
                    let index = if let Entry::Vacant(e) = self.node_indices.entry(derived.clone()) {
                        let result = self.graph.add_node(derived.clone());
                        e.insert(result);
                        result
                    } else {
                        self.node_indices[&derived]
                    };

                    match self.graph.find_edge(i, index) {
                        Some(edge_id) => {
                            self.graph
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
                            self.graph.add_edge(i, index, new_edge);
                        }
                    }
                }
            }
        }
    }

    /// We might go slightly over max_new_derivations
    /// Returns true if nothing left to derive.
    pub fn expand_increment(&mut self, max_new_derivations: u32) -> bool {
        let mut derivations = 0;

        while let Some((_, curr_index)) = self.derivation_queue.pop() {
            let expression = self.graph.node_weight(curr_index).unwrap().clone();

            let equivalents = self.optimizer.find_equivalents(&expression);

            for (derived, argument) in equivalents {
                let index = if let Entry::Vacant(e) = self.node_indices.entry(derived.clone()) {
                    let result = self.graph.add_node(derived.clone());
                    e.insert(result);
                    derivations += 1;
                    self.derivation_queue.push((u32::MAX - complexity_rec(&derived), result));
                    result
                } else {
                    self.node_indices[&derived]
                };

                match self.graph.find_edge(curr_index, index) {
                    Some(edge_id) => {
                        self.graph
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
                        self.graph.add_edge(curr_index, index, new_edge);
                    }
                }
            }

            if derivations >= max_new_derivations {
                return false;
            }
        }
        true
    }
}

impl Deref for Deriver {
    type Target = Graph;

    fn deref(&self) -> &Self::Target {
        &self.graph
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
        let mut graph = Graph::new();
        let start = sum_of(&[i(1), i(3), i(3), product_of(&[i(3), i(3)])]);
        graph.add_node(start);
        let mut deriver = Deriver::new(graph, BruteForceProfile::new(), None, None);
        deriver.expand_to_constraint(5, 10000);

        assert!(deriver.node_weights().any(|exp| *exp == i(16)));
    }
}
