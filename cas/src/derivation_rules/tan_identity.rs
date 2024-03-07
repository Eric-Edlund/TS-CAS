use std::rc::Rc;

use crate::{argument::Argument, expressions::{Expression, ExpressionPtr}};

use super::DerivationRule;


pub struct TanIdentity {}

impl DerivationRule for TanIdentity {
    fn apply(&self, input: ExpressionPtr) -> Vec<(ExpressionPtr, Rc<Argument>)> {
        let frac = match input {
            Expression::Fraction(ref f) => f,
            _ => return vec![]
        };


    }
}
