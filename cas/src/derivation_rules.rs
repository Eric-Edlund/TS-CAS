use std::{sync::Mutex, rc::Rc};

use crate::{expressions::ExpressionPtr, argument::Argument};

mod cancel_negatives;

pub trait DerivationRule {
    /**
    * Produces a set of equivalent expressions from the given
    * one. Result does not include the input.
    */
    fn apply(&self, input: ExpressionPtr) -> Vec<(ExpressionPtr, Rc<Argument>)>;
}

pub static ALL_RULES:  Mutex<&[&(dyn DerivationRule + Sync)]> = Mutex::new(&[
    &cancel_negatives::CancelNegatives {},
]);
