

use crate::{Expression, expressions::{ExpressionPtr, sum::sum_of}, argument::Argument};
use super::DerivationRule;

/**
* x + 0 is x
*/
pub struct AdditiveIdentity {}

impl DerivationRule for AdditiveIdentity {
    fn apply(&self, input: crate::expressions::ExpressionPtr) -> Vec<(crate::expressions::ExpressionPtr, std::rc::Rc<crate::argument::Argument>)> {
        let sum = match input {
            Expression::Sum(ref s) => s,
            _ => return vec![],
        };

        let non_zero_terms: Vec<ExpressionPtr> = sum.terms().iter()
            .filter(|x| match x {
                Expression::Integer(i) => i.value() != 0,
                _ => true,
            })
            .map(|x| x.clone())
            .collect();

        if non_zero_terms.len() == sum.terms().len() {
            return vec![];
        }
        if non_zero_terms.is_empty() {
            return vec![];
        }

        return vec![
            (
            sum_of(&non_zero_terms),
            Argument::new(String::from("additive identity"), vec![input.clone()]),
            )
        ]
    }
}

#[cfg(test)]
mod tests {
    
    use crate::expressions::Integer;

    use super::*;

    #[test]
    fn test_1() {
        let rule = AdditiveIdentity {};

        let first = sum_of(&[Integer::of(1), Integer::of(0)]);
        let result1: Vec<ExpressionPtr> = rule.apply(first).iter().map(|x| x.0.clone()).collect();
        println!("{:?}", result1);
        assert!(!result1.contains(&Integer::of(0)), "Didn't remove 0 from 1 + 0");
        assert!(result1.contains(&Integer::of(1)), "Didn' leave 1 in 1 + 0");
        assert!(result1.len() == 1);
    }
}
