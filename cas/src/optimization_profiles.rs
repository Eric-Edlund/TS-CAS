use std::{cell::RefCell, collections::HashSet, rc::Rc};

use crate::derivation_rules::{ONLY_OUTSIDE_INTEGRANDS, REMAINING_RULES};
use crate::{
    argument::Argument,
    derivation_rules::{
        helpers::unique_child_leaves, ALL_RULES, ARITHMETIC, ARITHMETIC_IF_CONSTANT, IDENTITIES,
        STRICT_SIMPLIFYING_RULES,
    },
    deriver::DerivationDebugInfo,
    equivalence_disbatchers::{equiv, GuardDecision},
    expressions::Expression,
};

/// An object to describe what optimization strategy should be used
/// to minimize derivation steps.
pub trait OptimizationProfile {
    /// Generates a set of equivalent expressions from the given expression.
    /// Also gives a bool. If true, the returned expressions should be prioritized in the
    /// derivation process.
    fn find_equivalents(&mut self, exp: &Expression) -> (Vec<(Expression, Rc<Argument>)>, bool);

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
    fn find_equivalents(&mut self, exp: &Expression) -> (Vec<(Expression, Rc<Argument>)>, bool) {
        if self.already_seen.contains(exp) {
            return (vec![], false);
        }
        self.already_seen.insert(exp.clone());
        let rules = *ALL_RULES.read().unwrap();
        (
            rules
                .iter()
                .filter(|rule| self.allowed_rules.contains(&rule.name()))
                .flat_map(|rule| {
                    let result =
                        equiv(exp, &|e| rule.apply(e.clone()), &|_| GuardDecision::Explore);
                    if let Option::Some(ref debug) = self.debug {
                        if !result.is_empty() {
                            *debug.borrow_mut().rule_uses.entry(rule.name()).or_insert(0) += 1;
                        }
                    }
                    result
                })
                .collect(),
            false,
        )
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
    defeated_by_identities: HashSet<Expression>,
    defeated_by_arithmetic: HashSet<Expression>,
    seen_by_strict_simplifying_rules: HashSet<Expression>,
    debug: Option<Rc<RefCell<DerivationDebugInfo>>>,
}

impl EvaluateFirstProfile {
    pub fn new() -> Box<Self> {
        Box::new(Self {
            defeated_by_identities: HashSet::new(),
            defeated_by_arithmetic: HashSet::new(),
            seen_by_strict_simplifying_rules: HashSet::new(),
            debug: None,
        })
    }
}

impl OptimizationProfile for EvaluateFirstProfile {
    fn find_equivalents(&mut self, exp: &Expression) -> (Vec<(Expression, Rc<Argument>)>, bool) {
        if self.defeated_by_identities.contains(exp) {
            return (vec![], false);
        }

        for identity in *IDENTITIES.read().unwrap() {
            let mut result = equiv(exp, &|e| identity.apply(e.clone()), &|_| {
                GuardDecision::Explore
            });
            // Remove derivations we've already seen so we can add fractions with created common
            // denominators.
            result.retain(|(e, _)| {
                !self.defeated_by_identities.contains(e)
                    && !self.defeated_by_arithmetic.contains(e)
                    && !self.seen_by_strict_simplifying_rules.contains(e)
            });
            if !result.is_empty() {
                if let Option::Some(ref debug) = self.debug {
                    *debug
                        .borrow_mut()
                        .rule_uses
                        .entry(identity.name())
                        .or_insert(0) += 1;
                }
                self.defeated_by_identities.insert(exp.clone());
                return (result, true);
            }
        }

        if self.defeated_by_arithmetic.contains(exp) {
            return (vec![], false);
        }

        for rule in *ARITHMETIC.read().unwrap() {
            let result = equiv(exp, &|e| rule.apply(e.clone()), &|_| GuardDecision::Explore);
            if !result.is_empty() {
                if let Option::Some(ref debug) = self.debug {
                    *debug.borrow_mut().rule_uses.entry(rule.name()).or_insert(0) += 1;
                }
                self.defeated_by_arithmetic.insert(exp.clone());
                return (result, true);
            }
        }

        for rule in *ARITHMETIC_IF_CONSTANT.read().unwrap() {
            let result = equiv(exp, &|e| rule.apply(e.clone()), &|e| {
                if unique_child_leaves(e).all(|e| matches!(e, Expression::Integer(_))) {
                    GuardDecision::Explore
                } else {
                    GuardDecision::ExploreChildren
                }
            });
            if !result.is_empty() {
                if let Option::Some(ref debug) = self.debug {
                    *debug.borrow_mut().rule_uses.entry(rule.name()).or_insert(0) += 1;
                }
                self.defeated_by_arithmetic.insert(exp.clone());
                return (result, true);
            }
        }

        if self.seen_by_strict_simplifying_rules.contains(exp) {
            return (vec![], false);
        }
        self.seen_by_strict_simplifying_rules.insert(exp.clone());
        let mut strict_simplifying = STRICT_SIMPLIFYING_RULES
            .read()
            .unwrap()
            .iter()
            .flat_map(|rule| {
                let result = equiv(exp, &|e| rule.apply(e.clone()), &|_| GuardDecision::Explore);
                if let Option::Some(ref debug) = self.debug {
                    if !result.is_empty() {
                        *debug.borrow_mut().rule_uses.entry(rule.name()).or_insert(0) += 1;
                    }
                }
                result
            })
            .peekable();

        if strict_simplifying.peek().is_some() {
            return (strict_simplifying.collect(), true);
        }

        let all_rules = REMAINING_RULES.read().unwrap();
        let outside_integrands = ONLY_OUTSIDE_INTEGRANDS.read().unwrap();
        (
            all_rules
                .iter()
                .flat_map(|rule| {
                    let result =
                        equiv(exp, &|e| rule.apply(e.clone()), &|_| GuardDecision::Explore);
                    if let Option::Some(ref debug) = self.debug {
                        if !result.is_empty() {
                            *debug.borrow_mut().rule_uses.entry(rule.name()).or_insert(0) += 1;
                        }
                    }
                    result
                })
                .chain(outside_integrands.iter().flat_map(|rule| {
                    let result = equiv(exp, &|e| rule.apply(e.clone()), &|e| {
                        if matches!(e, Expression::Integral(_)) {
                            GuardDecision::TurnAround
                        } else {
                            GuardDecision::Explore
                        }
                    });
                    if let Option::Some(ref debug) = self.debug {
                        if !result.is_empty() {
                            *debug.borrow_mut().rule_uses.entry(rule.name()).or_insert(0) += 1;
                        }
                    }
                    result
                }))
                .collect(),
            false,
        )
    }

    fn set_rules(&mut self, _rules: &[String]) -> Result<(), ()> {
        Err(())
    }

    fn set_debug(&mut self, debug: Rc<RefCell<DerivationDebugInfo>>) -> Result<(), ()> {
        self.debug = Some(debug);
        Ok(())
    }
}

#[cfg(test)]
mod tests {
    use crate::{
        convenience_expressions::{i, v},
        expressions::{product::product_of, sum::sum_of, Exponent, Fraction, Integral},
    };

    use super::*;

    #[test]
    fn evaluate_first() {
        let mut profile = EvaluateFirstProfile::new();

        let start = Integral::of(
            Fraction::of(
                sum_of(&[product_of(&[i(2), Exponent::of(v("x"), i(2))]), v("x")]),
                v("x"),
            ),
            v("x"),
        );

        let first = profile.find_equivalents(&start);
        dbg!(&first);

        let _ = profile
            .find_equivalents(&first.0.first().unwrap().0)
            .0
            .first()
            .unwrap()
            .0
            .clone();
    }
}
