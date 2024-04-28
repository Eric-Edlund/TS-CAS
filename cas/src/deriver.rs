use std::collections::hash_map::Entry;
use std::collections::{HashMap, HashSet};
use std::rc::Rc;

use petgraph::data::DataMap;
use petgraph::graph::NodeIndex;

use crate::argument::Argument;
use crate::derivation_rules::{ALL_RULES, STRICT_SIMPLIFYING_RULES};
use crate::expressions::product::product_of;
use crate::expressions::sum::sum_of;
use crate::expressions::{
    AbsoluteValue, Derivative, Exponent, Expression, Fraction, Integral, Logarithm, Negation,
    TrigExp,
};
use crate::graph::{Graph, RelType, Relationship};

/**
* An object to describe what optimization strategy should be used
* to minimize derivation steps.
*/
pub trait OptimizationProfile {
    /**
     * Generates a set of equivalent expressions from the given expression.
     */
    fn find_equivalents(&mut self, exp: &Expression) -> Vec<(Expression, Rc<Argument>)>;

    /// Sets the list of rules which are allowed to be used, if supported.
    /// Returns Err if not supported.
    fn set_rules(&mut self, rules: &[String]) -> Result<(), ()>;
}

/**
* For every expression including children, apply every derivation rule
* on every pass.
*/
pub struct BruteForceProfile {
    already_seen: HashSet<Expression>,
    allowed_rules: HashSet<String>,
}
impl BruteForceProfile {
    pub fn new() -> Box<Self> {
        Box::new(Self {
            already_seen: HashSet::<Expression>::new(),
            allowed_rules: HashSet::from_iter(ALL_RULES.read().unwrap().iter().map(|r| r.name())),
        })
    }
}

impl OptimizationProfile for BruteForceProfile {
    fn find_equivalents(&mut self, exp: &Expression) -> Vec<(Expression, Rc<Argument>)> {
        if self.already_seen.contains(exp) {
            return vec![];
        }
        self.already_seen.insert(exp.clone());
        let rules = *ALL_RULES.read().unwrap();
        rules
            .iter()
            .filter(|rule| self.allowed_rules.contains(&rule.name()))
            .flat_map(|rule| equiv(exp, &|e| rule.apply(e.clone())))
            .collect()
    }

    fn set_rules(&mut self, rules: &[String]) -> Result<(), ()> {
        self.allowed_rules = HashSet::from_iter(rules.iter().cloned());
        Ok(())
    }
}

/**
* Apply evaluation/associative simplification rules with only one output
* first. Expressions which are simplified by these rules are then excluded
* from being used by more <complex rules in later passes.
*/
pub struct EvaluateFirstProfile {
    already_seen: HashSet<Expression>,
}

impl EvaluateFirstProfile {
    pub fn new() -> Box<Self> {
        Box::new(Self {
            already_seen: HashSet::<Expression>::new(),
        })
    }
}

impl OptimizationProfile for EvaluateFirstProfile {
    fn find_equivalents(&mut self, exp: &Expression) -> Vec<(Expression, Rc<Argument>)> {
        if self.already_seen.contains(exp) {
            return vec![];
        }
        self.already_seen.insert(exp.clone());
        let simplifying_rules = STRICT_SIMPLIFYING_RULES.read().unwrap();

        let mut simple = simplifying_rules
            .iter()
            .flat_map(|rule| equiv(exp, &|e| rule.apply(e.clone())))
            .peekable();

        if simple.peek().is_some() {
            return simple.collect();
        }

        let all_rules = ALL_RULES.read().unwrap();
        all_rules
            .iter()
            .flat_map(|rule| equiv(exp, &|e| rule.apply(e.clone())))
            .collect()
    }

    fn set_rules(&mut self, _rules: &[String]) -> Result<(), ()> {
        Err(())
    }
}

/// Applies derivative and simplifying rules only. Evaluates derivatives as
/// efficiently as possible. Not a general solver.
pub struct DerivativesOnlyProfile {
    already_seen: HashSet<Expression>,
}

impl DerivativesOnlyProfile {
    pub fn new() -> Self {
        Self {
            already_seen: HashSet::new(),
        }
    }
}

impl OptimizationProfile for DerivativesOnlyProfile {
    fn find_equivalents(&mut self, exp: &Expression) -> Vec<(Expression, Rc<Argument>)> {
        if self.already_seen.contains(exp) {
            return vec![];
        }
        self.already_seen.insert(exp.clone());
        let simplifying_rules = STRICT_SIMPLIFYING_RULES.read().unwrap();

        let mut simple = simplifying_rules
            .iter()
            .flat_map(|rule| equiv(exp, &|e| rule.apply(e.clone())))
            .peekable();

        if simple.peek().is_some() {
            simple.collect()
        } else {
            vec![]
        }
    }

    fn set_rules(&mut self, _rules: &[String]) -> Result<(), ()> {
        Err(())
    }
}

/**
* Object used to expand graphs.
*/
pub struct Deriver {
    node_indices: HashMap<Expression, NodeIndex>,
    optimizer: Box<dyn OptimizationProfile>,
}

impl Deriver {
    pub fn new(optimizer: Box<dyn OptimizationProfile>) -> Deriver {
        Deriver {
            node_indices: HashMap::new(),
            optimizer,
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
        Expression::ConstantExp(_) => vec![],
        Expression::Substitution(_) => vec![],
        Expression::Sum(_) => sum_equiv(exp, direct),
        Expression::Product(_) => product_equiv(exp, direct),
        Expression::Exponent(_) => exponent_equiv(exp, direct),
        Expression::Fraction(_) => fraction_equiv(exp, direct),
        Expression::Integral(_) => integral_equiv(exp, direct),
        Expression::Derivative(_) => derivative_equiv(exp, direct),
        Expression::Negation(_) => negation_equiv(exp, direct),
        Expression::Trig(_) => trig_equiv(exp, direct),
        Expression::Logarithm(_) => log_equiv(exp, direct),
        Expression::AbsoluteValue(_) => abs_equiv(exp, direct),
    });

    result.into_iter().collect()
}

fn sum_equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut equivalent_sums = HashSet::<Derivation>::new();

    let Expression::Sum(ref sum) = exp else {
        panic!();
    };

    // Find equivalents for each term
    for (i, term) in sum.terms().iter().enumerate() {
        for deriv in equiv(term, direct) {
            let mut new_terms = sum.terms().clone();
            new_terms[i] = deriv.0;
            let result = (sum_of(&new_terms), deriv.1);
            equivalent_sums.insert(result);
        }
    }

    equivalent_sums.into_iter().collect()
}

fn product_equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut equivalent_products = HashSet::<Derivation>::new();

    let Expression::Product(ref product) = exp else {
        panic!();
    };

    // Find equivalents for each factor
    for (i, term) in product.factors().iter().enumerate() {
        for deriv in equiv(term, direct) {
            let mut new_factors = product.factors().clone();
            new_factors[i] = deriv.0;
            let result = (product_of(&new_factors), deriv.1);
            equivalent_products.insert(result);
        }
    }

    equivalent_products.into_iter().collect()
}

fn exponent_equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::Exponent(ref exponent) = exp else {
        panic!();
    };

    // For power
    for deriv in equiv(&exponent.power(), direct) {
        equivalents.push((Exponent::of(exponent.base(), deriv.0), deriv.1));
    }

    // For base
    for deriv in equiv(&exponent.base(), direct) {
        equivalents.push((Exponent::of(deriv.0, exponent.power()), deriv.1));
    }

    equivalents
}

fn fraction_equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::Fraction(ref fraction) = exp else {
        panic!();
    };

    // For numerator
    for deriv in equiv(&fraction.numerator(), direct) {
        equivalents.push((Fraction::of(deriv.0, fraction.denominator()), deriv.1));
    }
    // For denominator
    for deriv in equiv(&fraction.denominator(), direct) {
        equivalents.push((Fraction::of(fraction.numerator(), deriv.0), deriv.1));
    }

    equivalents
}

fn integral_equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::Integral(ref integral) = exp else {
        panic!();
    };

    // for integrand
    for deriv in equiv(&integral.integrand(), direct) {
        equivalents.push((Integral::of(deriv.0, integral.relative_to()), deriv.1));
    }

    // for variable
    for deriv in equiv(&integral.relative_to(), direct) {
        equivalents.push((Integral::of(integral.integrand(), deriv.0), deriv.1));
    }

    equivalents
}

fn derivative_equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::Derivative(ref derivative) = exp else {
        panic!();
    };

    // for exp
    for deriv in equiv(&derivative.exp(), direct) {
        equivalents.push((Derivative::of(deriv.0, derivative.relative_to()), deriv.1));
    }

    // for variable
    for deriv in equiv(&derivative.relative_to(), direct) {
        equivalents.push((Derivative::of(derivative.exp(), deriv.0), deriv.1));
    }

    equivalents
}

fn negation_equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::Negation(ref negation) = exp else {
        panic!();
    };

    for deriv in equiv(&negation.child(), direct) {
        equivalents.push((Negation::of(deriv.0), deriv.1));
    }
    equivalents
}

fn trig_equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::Trig(ref trig) = exp else {
        panic!();
    };

    for deriv in equiv(&trig.exp(), direct) {
        equivalents.push((TrigExp::of(trig.operation, deriv.0), deriv.1));
    }
    equivalents
}

fn log_equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::Logarithm(ref log) = exp else {
        panic!();
    };

    // for exp
    for deriv in equiv(&log.base(), direct) {
        equivalents.push((Logarithm::of(deriv.0, log.exp()), deriv.1));
    }

    // for variable
    for deriv in equiv(&log.exp(), direct) {
        equivalents.push((Logarithm::of(log.base(), deriv.0), deriv.1));
    }

    equivalents
}

fn abs_equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::AbsoluteValue(ref abs) = exp else {
        panic!();
    };

    for deriv in equiv(&abs.exp(), direct) {
        equivalents.push((AbsoluteValue::of(deriv.0), deriv.1));
    }

    equivalents
}

#[cfg(test)]
mod tests {
    use crate::{
        convenience_expressions::i,
        expressions::{product::product_of, sum::sum_of},
    };

    use super::*;

    #[test]
    fn applies_multiple_rules() {
        let mut deriver = Deriver::new(BruteForceProfile::new());
        let mut graph = Graph::new();
        let start = sum_of(&[i(1), i(3), i(3), product_of(&[i(3), i(3)])]);
        graph.add_node(start);
        deriver.expand(&mut graph, 5);

        assert!(graph.node_weights().any(|exp| *exp == i(16)));
    }
}
