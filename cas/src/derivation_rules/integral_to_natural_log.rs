use std::rc::Rc;

use crate::{
    argument::Argument,
    expressions::{constant::Constant, AbsoluteValue, ConstantExp, Expression, Logarithm},
};

use super::DerivationRule;

/// Integrates 1/x
pub struct IntegralToNaturalLog {}

impl DerivationRule for IntegralToNaturalLog {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let integral = match input {
            Expression::Integral(ref i) => i,
            _ => return vec![],
        };

        let fraction = match integral.integrand() {
            Expression::Fraction(f) => f,
            _ => return vec![],
        };

        if let Expression::Integer(i) = fraction.numerator() {
            if i.value() != 1 {
                return vec![];
            }
        } else {
            return vec![];
        }

        if fraction.denominator() != integral.variable() {
            return vec![];
        }

        vec![(
            Logarithm::of(
                ConstantExp::of(Constant::Euler),
                AbsoluteValue::of(fraction.denominator()),
            ),
            Argument::new(
                String::from("Integral of du/u is ln(abs(u))"),
                vec![input],
                self.name(),
            ),
        )]
    }
    fn name(&self) -> String {
        String::from("IntegrationToNaturalLog")
    }
}
