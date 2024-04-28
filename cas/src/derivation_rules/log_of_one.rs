use std::rc::Rc;

use crate::{
    argument::Argument,
    expressions::{Expression, Integer},
};

use super::DerivationRule;

pub struct LogOfOne {}

impl DerivationRule for LogOfOne {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let log = match input {
            Expression::Logarithm(ref l) => l,
            _ => return vec![],
        };

        if let Expression::Integer(i) = log.exp() {
            if i.value() != 1 {
                return vec![];
            }
        } else {
            return vec![];
        }

        vec![(
            Integer::of(0),
            Argument::new(String::from("Log of 1 is 0"), vec![input]),
        )]
    }
    fn name(&self) -> String {
        String::from("LogOfOne")
    }
}

#[cfg(test)]
mod tests {
    use crate::expressions::{Integer, Logarithm};

    use super::DerivationRule;
    use super::LogOfOne;

    #[test]
    fn test_1() {
        let start = Logarithm::of(Integer::of(10), Integer::of(1));
        let rule = LogOfOne {};
        let result = rule.apply(start);
        assert_eq!(result.first().unwrap().0, Integer::of(0));
    }
}
