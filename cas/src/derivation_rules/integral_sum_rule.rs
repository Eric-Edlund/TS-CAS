use std::rc::Rc;

use crate::{argument::Argument, convenience_expressions::sum_of_iter, expressions::{Expression, Integral}};

use super::DerivationRule;


/**
* Break integrals over addition.
*/
pub struct IntegralSumRule {}

impl DerivationRule for IntegralSumRule {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let integral = match input {
            Expression::Integral(ref i) => i,
            _ => return vec![]
        };

        let sum = match integral.integrand() {
            Expression::Sum(s) => s,
            _ => return vec![]
        };

        vec![(
            sum_of_iter(&mut sum.terms().into_iter().map(|term| Integral::of(term.clone(), integral.relative_to()))),
            Argument::new(String::from("Split integral over addition"), vec![input])
        )]
    }
}

#[cfg(test)]
mod tests {
    use crate::{convenience_expressions::{i, v}, derivation_rules::DerivationRule, expressions::{sum::sum_of, Integral}};

    use super::IntegralSumRule;

    #[test]
    fn test_1() {
        let rule = IntegralSumRule {};

        let start = Integral::of(sum_of(&[i(1), i(2)]), v("x"));
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(result, sum_of(&[
            Integral::of(i(1), v("x")),
            Integral::of(i(2), v("x"))
        ]));
    }
}
