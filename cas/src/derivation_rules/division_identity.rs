use super::DerivationRule;
use crate::expressions::{ExpressionPtr, Expression};
use crate::argument::Argument;
use std::rc::Rc;

pub struct DivisionIdentity {}

impl DerivationRule for DivisionIdentity {
    fn apply(&self, input: ExpressionPtr) -> Vec<(ExpressionPtr, Rc<Argument>)> {
        let fraction = match input {
            Expression::Fraction(ref f) => f,
            _ => return vec![],
        };

        if let Expression::Integer(integer) = fraction.denominator() {
            if integer.value() != 1 {
                return vec![];
            }
        } else {
            return vec![];
        }

        vec![(fraction.numerator(),
            Argument::new(String::from("Division identity"), vec![input]))]
    }
}


#[cfg(test)]
mod tests {
    use crate::{expressions::Fraction, convenience_expressions::i};

    use super::DivisionIdentity;
    use super::DerivationRule;

    #[test]
    fn test_1() {
        let start = Fraction::of(i(2), i(1));
        let rule = DivisionIdentity{};
        let result = rule.apply(start);
        assert_eq!(result.first().unwrap().0, i(2));
    }
}
