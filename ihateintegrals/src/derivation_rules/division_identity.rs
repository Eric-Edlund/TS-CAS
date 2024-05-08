use super::DerivationRule;
use crate::argument::Argument;
use crate::expressions::Expression;
use std::rc::Rc;

/**
* x/1 = x
*/
pub struct DivisionIdentity {}

impl DerivationRule for DivisionIdentity {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
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

        vec![(
            fraction.numerator(),
            Argument::new(String::from("Division identity"), vec![input], self.name()),
        )]
    }
    fn name(&self) -> String {
        String::from("DivisionIdentity")
    }
}

#[cfg(test)]
mod tests {
    use crate::{convenience_expressions::i, expressions::Fraction};

    use super::DerivationRule;
    use super::DivisionIdentity;

    #[test]
    fn test_1() {
        let start = Fraction::of(i(2), i(1));
        let rule = DivisionIdentity {};
        let result = rule.apply(start);
        assert_eq!(result.first().unwrap().0, i(2));
    }
}
