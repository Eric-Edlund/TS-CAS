use std::collections::{HashMap, HashSet};
use std::rc::Rc;

use petgraph::data::DataMap;
use petgraph::graph::NodeIndex;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::argument::Argument;
use crate::derivation_rules::ALL_RULES;
use crate::expressions::{Derivative, Exponent, Expression, Fraction, Integral};
use crate::expressions::product::product_of;
use crate::expressions::sum::sum_of;
use crate::graph::{Graph, RelType, Relationship};

/**
* Object used to expand graphs.
*/
pub struct Deriver {
    node_indices: HashMap<Expression, NodeIndex>,
}

impl Deriver {
    pub fn new() -> Deriver {
        Deriver {
            node_indices: HashMap::new(),
        }
    }

    /*
     * Expands the graph with equivalent expressions.
     * @param depth The number of recursions used to search for equivlaents.
     */
    pub fn expand(&mut self, graph: &mut Graph, depth: u32) {
        for i in graph.node_indices() {
            let node = graph.node_weight(i).unwrap();
            self.node_indices.insert(node.clone(), i);
        }
        for _ in 0..depth {
            self.pass(graph);
        }
    }

    fn pass(&mut self, graph: &mut Graph) {
        let rules = *ALL_RULES.lock().unwrap();

        for i in graph.node_indices() {
            let expression = graph.node_weight(i).unwrap().clone();
            let equivalents = rules.iter()
                .map(|rule| {
                    equiv(&expression, &|exp| {
                        rule.apply(exp.clone())
                    })
                })
                .flatten()
                .inspect(|result| {
                    println!("Derived {:?} -> {:?}, {}", result.1.grounds().iter().nth(0).unwrap(), result.0, result.1.message());
                });

            for (derived, argument) in equivalents {
                let index = if self.node_indices.contains_key(&derived) {
                    self.node_indices[&derived]
                } else {
                    let result = graph.add_node(derived.clone());
                    self.node_indices.insert(derived, result);
                    result
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

#[wasm_bindgen]
extern "C" {
    // Use `js_namespace` here to bind `console.log(..)` instead of just
    // `log(..)`
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}



type Derivation = (Expression, Rc<Argument>);
type EquivList = Vec<Derivation>;
type EquivFn = dyn Fn(&Expression) -> EquivList;

/*
* Decomposes expressions, finding equivalents for their components using 
* the given equivalence finding rule.
*/
fn equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut result = HashSet::<Derivation>::new();
    result.extend(direct(exp));

    result.extend(match exp {
        Expression::Variable(_) => vec![],
        Expression::Integer(_) => vec![],
        Expression::Sum(_) => sum_equiv(exp, direct),
        Expression::Product(_) => product_equiv(exp, direct),
        Expression::Exponent(_) => exponent_equiv(exp, direct),
        Expression::Fraction(_) => fraction_equiv(exp, direct),
        Expression::Integral(_) => integral_equiv(exp, direct),
        Expression::Derivative(_) => derivative_equiv(exp, direct),
        _ => vec![] //TODO: Implement all expression variants
    });

    result.into_iter().collect()
}

fn sum_equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut equivalent_sums = HashSet::<Derivation>::new();

    let Expression::Sum(ref sum) = exp 
    else {
        panic!();
    };

    // Find equivalents for each term
    for (i, term) in sum.terms().iter().enumerate() {
        for deriv in equiv(term, direct) {
            let mut new_terms = sum.terms().clone();
            new_terms[i] = deriv.0;
            let result = (
                sum_of(&new_terms),
                deriv.1
            );
            equivalent_sums.insert(result);
        }
    }

    equivalent_sums.into_iter().collect()
}

fn product_equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut equivalent_products = HashSet::<Derivation>::new();

    let Expression::Product(ref product) = exp 
    else {
        panic!();
    };

    // Find equivalents for each factor 
    for (i, term) in product.factors().iter().enumerate() {
        for deriv in equiv(term, direct) {
            let mut new_factors = product.factors().clone();
            new_factors[i] = deriv.0;
            let result = (
                product_of(&new_factors),
                deriv.1
            );
            equivalent_products.insert(result);
        }
    }

    equivalent_products.into_iter().collect()
}

fn exponent_equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::Exponent(ref exponent) = exp 
    else {
        panic!();
    };

    // For power
    for deriv in equiv(&exponent.power(), direct) {
        equivalents.push(
            (Exponent::of(exponent.base(), deriv.0),
            deriv.1)
        );
    }

    // For base
    for deriv in equiv(&exponent.base(), direct) {
        equivalents.push(
            (Exponent::of(deriv.0, exponent.power()),
            deriv.1)
        );
    }

    equivalents
}

fn fraction_equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::Fraction(ref fraction) = exp 
    else {
        panic!();
    };

    // For numerator
    for deriv in equiv(&fraction.numerator(), direct) {
        equivalents.push(
            (Fraction::of(deriv.0, fraction.denominator()),
            deriv.1)
        );
    }
    // For denominator
    for deriv in equiv(&fraction.denominator(), direct) {
        equivalents.push(
            (Fraction::of(fraction.numerator(), deriv.0),
            deriv.1)
        );
    }

    equivalents
}

fn integral_equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::Integral(ref integral) = exp
    else {
        panic!();
    };

    // for integrand
    for deriv in equiv(&integral.integrand(), direct) {
        equivalents.push(
            (Integral::of(deriv.0, integral.relative_to()),
            deriv.1)
        );
    }

    // for variable
    for deriv in equiv(&integral.relative_to(), direct) {
        equivalents.push(
            (Integral::of(integral.integrand(), deriv.0),
            deriv.1)
        );
    }

    equivalents
}

fn derivative_equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::Derivative(ref derivative) = exp
    else {
        panic!();
    };

    // for exp 
    for deriv in equiv(&derivative.exp(), direct) {
        equivalents.push(
            (Derivative::of(deriv.0, derivative.relative_to()),
            deriv.1)
        );
    }

    // for variable
    for deriv in equiv(&derivative.relative_to(), direct) {
        equivalents.push(
            (Derivative::of(derivative.exp(), deriv.0),
            deriv.1)
        );
    }

    equivalents
    
}


#[cfg(test)]
mod tests {
    use crate::{expressions::{product::product_of, sum::sum_of}, convenience_expressions::i};

    use super::*;
    
    #[test]
    fn applies_multiple_rules() {
        let mut deriver = Deriver::new();
        let mut graph = Graph::new();
        let start = sum_of(&[i(1), i(3), i(3), product_of(&[i(3), i(3)])]);
        graph.add_node(start);
        deriver.expand(&mut graph, 5);

        assert!(graph.node_weights().any(|exp| *exp == i(16)));
    }
}
