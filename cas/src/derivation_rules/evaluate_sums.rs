use super::DerivationRule;

use crate::expressions::sum::sum_of;
use crate::expressions::{ExpressionPtr, Expression, Integer};
use crate::argument::Argument;
use std::rc::Rc;

/**
* Combine any integer terms in sums.
* a + 2 + 2 = a + 4
* 2 + (-2) = 0
*/
pub struct EvaluateSums {}

impl DerivationRule for EvaluateSums {
    fn apply(&self, input: ExpressionPtr) -> Vec<(ExpressionPtr, Rc<Argument>)> {
        let sum = match input {
            Expression::Sum(ref s) => s,
            _ => return vec![],
        };

        let mut integer_terms: Vec<i32> = Vec::new();
        let mut other_terms: Vec<Expression> = Vec::new();

        for term in sum.terms() {
            match term {
                Expression::Integer(i) => integer_terms.push(i.value() as i32),
                Expression::Negation(n) => {
                    if let Expression::Integer(i) = n.child() {
                        integer_terms.push(-(i.value() as i32));
                    } else {
                        other_terms.push(term.clone());
                    }
                },
                _ => other_terms.push(term.clone()),
            }
        }

        if integer_terms.len() < 2 {
            return vec![];
        }

        let new_int_term = Integer::of(integer_terms.iter().sum::<i32>() as u32);
        other_terms.push(new_int_term);
        let result = sum_of(&other_terms);

        return vec![
            (result, 
            Argument::new(String::from("Evaluate addition"), vec![input.clone()]))
        ]
    }
}

#[cfg(test)]
mod tests {

    use crate::expressions::{Integer, sum::sum_of};

    use super::EvaluateSums;
    use super::DerivationRule;

    #[test]
    fn test_1() {
        let start = sum_of(&[Integer::of(1), Integer::of(4)]);
        let rule = EvaluateSums {};
        assert!(rule.apply(start).first().unwrap().0 == Integer::of(5));
    }
}
