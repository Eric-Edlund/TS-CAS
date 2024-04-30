use std::rc::Rc;

use crate::{argument::Argument, expressions::Integer, Expression};

use super::DerivationRule;

// x/0 = undefined
pub struct UndefinedFractions {}

impl DerivationRule for UndefinedFractions {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let frac = match input {
            Expression::Fraction(ref f) => f,
            _ => return vec![],
        };

        if frac.denominator() != Integer::of(0) {
            return vec![];
        };

        vec![(
            Expression::Undefined,
            Argument::new(String::from("Division by zero is undefined"), vec![]),
        )]
    }

    fn name(&self) -> String {
        String::from("UndefinedFractions")
    }
}
