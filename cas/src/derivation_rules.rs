use std::{rc::Rc, sync::Mutex};

use crate::{argument::Argument, expressions::ExpressionPtr};

mod cancel_negatives;
mod additive_identity;
mod anything_times_zero;
mod associative_property;

pub trait DerivationRule {
    /**
     * Produces a set of equivalent expressions from the given
     * one. Result does not include the input.
     */
    fn apply(&self, input: ExpressionPtr) -> Vec<(ExpressionPtr, Rc<Argument>)>;
}

pub static ALL_RULES: Mutex<&[&(dyn DerivationRule + Sync)]> =
    Mutex::new(&[
    &cancel_negatives::CancelNegatives {},
    &additive_identity::AdditiveIdentity {},
    &associative_property::AssociativeProperty {},
]);
