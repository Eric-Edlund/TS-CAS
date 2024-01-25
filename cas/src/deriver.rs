use std::collections::HashSet;

use petgraph::data::DataMap;

use crate::graph::{Graph, Relationship, RelType};
use crate::derivation_rules::ALL_RULES;

/**
* Object used to expand graphs.
*/
pub struct Deriver {
}

impl Deriver {
    pub fn new() -> Deriver {
        Deriver {
        }
    }

    /*
    * Expands the graph with equivalent expressions.
    */
    pub fn expand(&self, graph: &mut Graph) {
        
        for i in graph.node_indices() {
            for rule in *ALL_RULES.lock().unwrap() {
                let exp = graph.node_weight(i).unwrap();
                let derived = rule.apply(exp.clone());

                for (equivalent, argument) in derived {
                    let j = graph.add_node(equivalent);
                    match graph.find_edge(i, j) {
                        Some(edge_id) => {
                            graph.edge_weight_mut(edge_id).unwrap().derived_from.insert(argument);
                        },
                        None => {
                            let mut new_edge = Relationship { r_type: RelType::Equal, derived_from: HashSet::new()};
                            new_edge.derived_from.insert(argument);
                            graph.add_edge(i, j, new_edge);

                        },

                    }
                }
            }
        }
    }
}
