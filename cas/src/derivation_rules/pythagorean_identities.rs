use std::rc::Rc;

use crate::{argument::Argument, expressions::{Expression, ExpressionPtr}};

use super::DerivationRule;


/**
* The pythagorean trig identities drived from
* sin^2(x) + cos^2(x) = 1
*/
pub struct Pythagoras {}

impl DerivationRule for Pythagoras {
    fn apply(&self, input: ExpressionPtr) -> Vec<(ExpressionPtr, Rc<Argument>)> {
        let sum = match input {
            Expression::Sum(ref s) => s,
            _ => return vec![]
        };
    }
}
