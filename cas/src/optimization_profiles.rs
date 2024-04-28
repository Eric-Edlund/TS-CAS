use std::{collections::HashSet, rc::Rc};

use crate::{
    argument::Argument,
    derivation_rules::{ALL_RULES, STRICT_SIMPLIFYING_RULES},
    equivalence_disbatchers::equiv,
    expressions::Expression,
};

/// An object to describe what optimization strategy should be used
/// to minimize derivation steps.
pub trait OptimizationProfile {
    /**
     * Generates a set of equivalent expressions from the given expression.
     */
    fn find_equivalents(&mut self, exp: &Expression) -> Vec<(Expression, Rc<Argument>)>;

    /// Sets the list of rules which are allowed to be used, if supported.
    /// Returns Err if not supported.
    fn set_rules(&mut self, rules: &[String]) -> Result<(), ()>;
}

/// For every expression including children, apply every derivation rule
/// on every pass.
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

/// Apply evaluation/associative simplification rules with only one output
/// first. Expressions which are simplified by these rules are then excluded
/// from being used by more complex rules in later passes.
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
