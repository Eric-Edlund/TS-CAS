use std::rc::Rc;

use crate::{argument::Argument, expressions::{Expression, Integer}};

use super::DerivationRule;


pub struct EvaluateExponents {}

impl DerivationRule for EvaluateExponents {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let exponent = match input {
            Expression::Exponent(ref e) => e,
            _ => return vec![]
        };

        let Expression::Integer(ref base) = exponent.base()
        else {
            return vec![];
        };

        let Expression::Integer(ref power) = exponent.power()
        else {
            return vec![];
        };

        vec![(
            Integer::of(base.value().pow(power.value())),
            Argument::new(String::from("Evaluate exponents"), vec![input])
        )]
    }
}

#[cfg(test)]
mod tests {
    use crate::{convenience_expressions::i, expressions::Exponent};

    use super::*;

    #[test]
    fn test_1() {
        let rule = EvaluateExponents {};

        let start = Exponent::of(i(7), i(8));
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(result, i(5764801));
    }
}
