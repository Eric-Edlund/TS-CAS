use std::rc::Rc;

use crate::{argument::Argument, expressions::Integer, Expression};

use super::DerivationRule;

/// x/x = 1
pub struct UnitFraction {}

impl DerivationRule for UnitFraction {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let fraction = match input {
            Expression::Fraction(ref f) => f,
            _ => return vec![],
        };

        if fraction.numerator() != fraction.denominator() {
            return vec![];
        }

        vec![(
            Integer::of(1),
            Argument::new(String::from("x/x = 1"), vec![input]),
        )]
    }

    fn name(&self) -> String {
        String::from("UnitFraction")
    }
}
