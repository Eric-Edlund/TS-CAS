use std::rc::Rc;

use crate::{argument::Argument, expressions::{Expression, ExpressionPtr, Integer}};

use super::DerivationRule;

/**
* 1^x is 1
*/
pub struct OneToAnything {}

impl DerivationRule for OneToAnything {
    fn apply(&self, input: ExpressionPtr) -> Vec<(ExpressionPtr, Rc<Argument>)> {
        let power = match input {
            Expression::Exponent(ref e) => e,
            _ => return vec![]
        };

        let Expression::Integer(i) = power.base()
        else {
            return vec![];
        };

        if i.value() != 1 {
            return vec![];
        }

        vec![(
            Integer::of(1),
            Argument::new(String::from("One to anything is one"), vec![input])
        )]
    }
}
