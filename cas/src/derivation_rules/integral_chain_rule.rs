use std::rc::Rc;

use crate::{argument::Argument, expressions::{Expression}};

use super::DerivationRule;


pub struct IntegralChainRule {}

impl DerivationRule for IntegralChainRule {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let _integral = match input {
            Expression::Integral(ref i) => i,
            _ => return vec![]
        };

        
        vec![]
    }
}
