use std::rc::Rc;

use crate::{argument::Argument, expressions::Integer, Expression};

use super::DerivationRule;

pub struct ZeroTimesAnything {}

impl DerivationRule for ZeroTimesAnything {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let product = match input {
            Expression::Product(ref p) => p,
            _ => return vec![],
        };

        if !product.factors().contains(&Integer::of(0)) {
            return vec![];
        }

        vec![(
            Integer::of(0),
            Argument::new(
                String::from("Anything times zero is zero"),
                vec![input],
                self.name(),
            ),
        )]
    }

    fn name(&self) -> String {
        String::from("ZeroAnything")
    }
}
