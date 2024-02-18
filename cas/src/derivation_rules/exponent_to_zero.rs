use std::rc::Rc;

use crate::{expressions::ExpressionPtr, argument::Argument, expressions::{Expression, Integer}};

use super::DerivationRule;


pub struct ExponentToZero {}

impl DerivationRule for ExponentToZero {
    fn apply(&self, input: ExpressionPtr) -> Vec<(ExpressionPtr, Rc<Argument>)> {
        let exponent = match input {
            Expression::Exponent(ref e) => e,
            _ => return vec![],
        };

        if let Expression::Integer(i) = exponent.power() {
            if i.value() != 0 {
                return vec![];
            }
        } else {
            return vec![];
        }

        vec![(Integer::of(1),
            Argument::new(String::from("Anything to 0 is 1"), vec![input]))]
    }
}


#[cfg(test)]
mod tests {
    use crate::convenience_expressions::{i, power};

    use super::ExponentToZero;
    use crate::derivation_rules::DerivationRule;

    #[test]
    fn test_1() {
        let start = power(i(1), i(0));
        let rule = ExponentToZero {};
        let result = rule.apply(start);
        assert_eq!(result.first().unwrap().0, i(1));
    }
}

