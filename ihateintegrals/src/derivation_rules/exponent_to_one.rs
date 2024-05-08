use std::rc::Rc;

use crate::{argument::Argument, derivation_rules::helpers::is_one, Expression};

use super::DerivationRule;

/// x^1 = x
pub struct ExponentToOne {}

impl DerivationRule for ExponentToOne {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let exponent = match input {
            Expression::Exponent(ref e) => e,
            _ => return vec![],
        };

        if !is_one(&exponent.power()) {
            return vec![];
        }

        vec![(
            exponent.base(),
            Argument::new(
                String::from("Anything to 1 is itself"),
                vec![input],
                self.name(),
            ),
        )]
    }

    fn name(&self) -> String {
        String::from("ExponentToOne")
    }
}
