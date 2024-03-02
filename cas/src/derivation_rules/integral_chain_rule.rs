use std::rc::Rc;

use crate::{argument::Argument, expressions::{Expression, ExpressionPtr}};

use super::DerivationRule;


pub struct IntegralChainRule {}

impl DerivationRule for IntegralChainRule {
    fn apply(&self, input: ExpressionPtr) -> Vec<(ExpressionPtr, Rc<Argument>)> {
        let integral = match input {
            Expression::Integral(ref i) => i,
            _ => return vec![]
        };

        
        vec![]
    }
}
