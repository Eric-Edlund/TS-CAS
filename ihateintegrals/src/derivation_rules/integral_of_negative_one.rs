use std::rc::Rc;

use crate::{
    argument::Argument,
    expressions::{Fraction, Integer, Integral},
    Expression,
};

use super::DerivationRule;

/// Flips x^-1 into 1/x in an integral.
pub struct FlipNegativeOne {}

impl DerivationRule for FlipNegativeOne {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let integral = match input {
            Expression::Integral(ref i) => i,
            _ => return vec![],
        };

        let Expression::Exponent(e) = integral.integrand() else {
            return vec![];
        };

        let Expression::Negation(n) = e.power() else {
            return vec![];
        };
        let Expression::Integer(i) = n.exp() else {
            return vec![];
        };

        if i.value() != 1 {
            return vec![];
        }

        vec![(
            Integral::of(Fraction::of(Integer::of(1), e.base()), integral.variable()),
            Argument::new(String::from("x^-1 = 1/x"), vec![input], self.name()),
        )]
    }

    fn name(&self) -> String {
        String::from("FlipNegativeOne")
    }
}
