use std::rc::Rc;

use crate::{
    argument::Argument,
    expressions::{Expression, Fraction, Negation},
};

use super::DerivationRule;

pub struct PullNegativeOutOfFraction {}

impl DerivationRule for PullNegativeOutOfFraction {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let frac = match input {
            Expression::Fraction(ref f) => f,
            _ => return vec![],
        };

        let num = match frac.numerator() {
            Expression::Negation(n) => Some(n),
            _ => None,
        };
        let den = match frac.denominator() {
            Expression::Negation(n) => Some(n),
            _ => None,
        };

        let result = if (num.is_some() && den.is_some()) || (num.is_none() && den.is_none()) {
            return vec![];
        } else if num.is_some() {
            Negation::of(Fraction::of(num.unwrap().child(), frac.denominator()))
        } else {
            Negation::of(Fraction::of(frac.numerator(), den.unwrap().child()))
        };

        vec![(
            result,
            Argument::new(String::from("Pull negative out of fraction"), vec![input]),
        )]
    }
}
