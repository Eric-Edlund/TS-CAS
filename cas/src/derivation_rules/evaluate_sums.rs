use super::DerivationRule;

use crate::expressions::sum::sum_of;
use crate::expressions::{Expression, ExpressionPtr, Integer, Negation};
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

        let mut integer_terms: Vec<i64> = Vec::new();
        let mut other_terms: Vec<Expression> = Vec::new();

        for term in sum.terms() {
            match term {
                Expression::Integer(i) => integer_terms.push(i.value() as i64),
                Expression::Negation(n) => {
                    if let Expression::Integer(i) = n.child() {
                        integer_terms.push(-(i.value() as i64));
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

        let sum = integer_terms.iter().sum::<i64>();
        let new_int_term = if sum >= 0 {
            Integer::of(sum as u32)
        } else {
            Negation::of(Integer::of(-sum as u32))
        };
        other_terms.push(new_int_term);
        let result = sum_of(&other_terms);

        vec![
            (result, 
            Argument::new(String::from("Evaluate addition"), vec![input.clone()]))
        ]
    }
}

#[cfg(test)]
mod tests {
    use crate::expressions::Negation;
    use crate::expressions::{Integer, sum::sum_of};

    use super::EvaluateSums;
    use super::DerivationRule;

    #[test]
    fn test_1() {
        let rule = EvaluateSums {};

        let start = sum_of(&[Integer::of(1), Integer::of(4)]);
        assert!(rule.apply(start).first().unwrap().0 == Integer::of(5));

        let start1 = sum_of(&[Negation::of(Integer::of(4)), Integer::of(1)]);
        let result1 = rule.apply(start1).first().unwrap().0.clone();
        assert_eq!(result1, Negation::of(Integer::of(3)));
    }
}
