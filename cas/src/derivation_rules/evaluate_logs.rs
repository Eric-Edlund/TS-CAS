use std::rc::Rc;

use crate::{expressions::{ExpressionPtr, Expression, Integer}, argument::Argument};

use super::DerivationRule;


/**
* Finds an exact integer representation of a logarithm if one exists.
*/
pub struct EvaluateLogs {}

impl DerivationRule for EvaluateLogs {
    fn apply(&self, input: ExpressionPtr) -> Vec<(ExpressionPtr, Rc<Argument>)> {
        let log = match input {
            Expression::Logarithm(ref l) => l,
            _ => return vec![],
        };

        let Expression::Integer(base) = log.base() 
        else {
            return vec![];
        };
        let Expression::Integer(exp) = log.exp()
        else {
            return vec![];
        };

        if base.value() == 0 {
            return vec![]
        }

        let mut value = exp.value();

        let mut result = -1;
        while value > 0 {
            value /= base.value();
            result += 1;
        }

        if value == 0 {
            vec![(Integer::of(result as u32), 
                Argument::new(String::from("Evaluate logarithm"), vec![input]))]
        } else {
            vec![]
        }
    }
}

#[cfg(test)]
mod tests {
    use super::EvaluateLogs;
    use crate::{derivation_rules::DerivationRule, expressions::Logarithm, convenience_expressions::i};

    #[test]
    fn test_1() {
        let rule = EvaluateLogs {};
        let start = Logarithm::of(i(2), i(8));
        let result = rule.apply(start).first().unwrap().0.clone();
        
        assert_eq!(result, i(3));

    }
}
