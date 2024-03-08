use std::rc::Rc;

use crate::{argument::Argument, expressions::{Expression, ExpressionPtr, Integral, Negation}};

use super::DerivationRule;


pub struct IntegralPullOutNegative {}

impl DerivationRule for IntegralPullOutNegative {
    fn apply(&self, input: ExpressionPtr) -> Vec<(ExpressionPtr, Rc<Argument>)> {
        let integral = match input {
            Expression::Integral(ref i) => i,
            _ => return vec![]
        };

        let Expression::Negation(ref integrand) = integral.integrand()
        else {
            return vec![]
        };

        vec![(
            Negation::of(Integral::of(integrand.child(), integral.relative_to())),
            Argument::new(String::from("Pull out negative (constant)"), vec![input])
        )]
    }
}

#[cfg(test)]
mod tests {
    use crate::convenience_expressions::v;

    use super::*;

    #[test]
    fn test_1() {
        let rule = IntegralPullOutNegative {};

        let start = Integral::of(Negation::of(v("x")), v("x"));
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(result, Negation::of(Integral::of(v("x"), v("x"))));
    }
}
