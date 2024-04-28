use std::{cell::RefCell, collections::HashSet, rc::Rc};

use crate::{
    argument::Argument,
    derivation_rules::{ALL_RULES, STRICT_SIMPLIFYING_RULES},
    deriver::DerivationDebugInfo,
    equivalence_disbatchers::equiv,
    expressions::Expression,
};

/// An object to describe what optimization strategy should be used
/// to minimize derivation steps.
pub trait OptimizationProfile {
    /// Generates a set of equivalent expressions from the given expression.
    fn find_equivalents(&mut self, exp: &Expression) -> Vec<(Expression, Rc<Argument>)>;

    /// Sets the list of rules which are allowed to be used, if supported.
    /// Returns Err if not supported.
    fn set_rules(&mut self, _rules: &[String]) -> Result<(), ()> {
        Err(())
    }

    /// Sets a debug profile for the profile to store derivation info in.
    /// Returns Err if not supported.
    fn set_debug(&mut self, _debug: Rc<RefCell<DerivationDebugInfo>>) -> Result<(), ()> {
        Err(())
    }
}

/// For every expression including children, apply every derivation rule
/// on every pass.
pub struct BruteForceProfile {
    already_seen: HashSet<Expression>,
    allowed_rules: HashSet<String>,
    debug: Option<Rc<RefCell<DerivationDebugInfo>>>,
}
impl BruteForceProfile {
    pub fn new() -> Box<Self> {
        Box::new(Self {
            already_seen: HashSet::<Expression>::new(),
            allowed_rules: HashSet::from_iter(ALL_RULES.read().unwrap().iter().map(|r| r.name())),
            debug: None,
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
            .flat_map(|rule| {
                let result = equiv(exp, &|e| rule.apply(e.clone()));
                if let Option::Some(ref debug) = self.debug {
                    if !result.is_empty() {
                        *debug.borrow_mut().rule_uses.entry(rule.name()).or_insert(0) += 1;
                    }
                }
                result
            })
            .collect()
    }

    fn set_rules(&mut self, rules: &[String]) -> Result<(), ()> {
        self.allowed_rules = HashSet::from_iter(rules.iter().cloned());
        Ok(())
    }

    fn set_debug(&mut self, debug: Rc<RefCell<DerivationDebugInfo>>) -> Result<(), ()> {
        self.debug = Some(debug);
        Ok(())
    }
}

/// Apply evaluation/associative simplification rules with only one output
/// first. Expressions which are simplified by these rules are then excluded
/// from being used by more complex rules in later passes.
pub struct EvaluateFirstProfile {
    already_seen: HashSet<Expression>,
    debug: Option<Rc<RefCell<DerivationDebugInfo>>>,
}

impl EvaluateFirstProfile {
    pub fn new() -> Box<Self> {
        Box::new(Self {
            already_seen: HashSet::<Expression>::new(),
            debug: None,
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
            .flat_map(|rule| {
                let result = equiv(exp, &|e| rule.apply(e.clone()));
                if let Option::Some(ref debug) = self.debug {
                    if !result.is_empty() {
                        *debug.borrow_mut().rule_uses.entry(rule.name()).or_insert(0) += 1;
                    }
                }
                result
            })
            .peekable();

        if simple.peek().is_some() {
            return simple.collect();
        }

        let all_rules = ALL_RULES.read().unwrap();
        all_rules
            .iter()
            .flat_map(|rule| {
                let result = equiv(exp, &|e| rule.apply(e.clone()));
                if let Option::Some(ref debug) = self.debug {
                    if !result.is_empty() {
                        *debug.borrow_mut().rule_uses.entry(rule.name()).or_insert(0) += 1;
                    }
                }
                result
            })
            .collect()
    }

    fn set_rules(&mut self, _rules: &[String]) -> Result<(), ()> {
        Err(())
    }

    fn set_debug(&mut self, debug: Rc<RefCell<DerivationDebugInfo>>) -> Result<(), ()> {
        self.debug = Some(debug);
        Ok(())
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
}

// pub struct WalkBackEvaluateFirstProfile {
//     evaluate_first: Box<EvaluateFirstProfile>,
// }
//
// impl WalkBackEvaluateFirstProfile {
//     pub fn new() -> Box<Self> {
//         Self {
//             evaluate_first: EvaluateFirstProfile::new(),
//         }
//         .into()
//     }
// }
//
// impl OptimizationProfile for WalkBackEvaluateFirstProfile {
//     fn find_equivalents(&mut self, exp: &Expression) -> Vec<(Expression, Rc<Argument>)> {
//         let result = self.evaluate_first.find_equivalents()
//     }
//
//     fn set_rules(&mut self, rules: &[String]) -> Result<(), ()> {
//         self.evaluate_first.set_rules(rules)
//     }
//
//     fn set_debug(&mut self, debug: Rc<RefCell<DerivationDebugInfo>>) -> Result<(), ()> {
//         self.evaluate_first.set_debug(debug)
//     }
// }
