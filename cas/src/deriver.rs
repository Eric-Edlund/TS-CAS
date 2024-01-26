use std::collections::HashSet;

use petgraph::data::DataMap;

use crate::derivation_rules::ALL_RULES;
use crate::graph::{Graph, RelType, Relationship};

/**
* Object used to expand graphs.
* TODO: Currently has no state, we use an object instead of just functions
* because later we plan to have configuration options for derivation
* and it will be nicer to store them in an object.
*/
pub struct Deriver {}

impl Deriver {
    pub fn new() -> Deriver {
        Deriver {}
    }

    /*
     * Expands the graph with equivalent expressions.
     */
    pub fn expand(&self, graph: &mut Graph) {
        for i in graph.node_indices() {
            for rule in *ALL_RULES.lock().unwrap() {
                let exp = graph.node_weight(i).unwrap();
                let equivalents = rule.apply(exp.clone());

                for (equivalent, argument) in equivalents {
                    let graph_index = graph.add_node(equivalent);
                    match graph.find_edge(i, graph_index) {
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
                            graph.add_edge(i, graph_index, new_edge);
                        }
                    }
                }
            }
        }
    }
}
