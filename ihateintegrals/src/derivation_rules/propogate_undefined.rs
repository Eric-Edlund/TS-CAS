use std::rc::Rc;

use crate::{argument::Argument, derivation_rules::helpers::children_rec, Expression};

use super::DerivationRule;

/// Any expression depending on undefined is undefined
pub struct PropogateUndefined {}

impl DerivationRule for PropogateUndefined {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        if !children_rec(&input).any(|e| e == Expression::Undefined) {
            return vec![];
        }

        vec![(
            Expression::Undefined,
            Argument::new(
                String::from("The expression is undefined"),
                vec![input],
                self.name(),
            ),
        )]
    }

    fn name(&self) -> String {
        String::from("PropogateUndefined")
    }
}

#[cfg(test)]
mod tests {
    use crate::{
        convenience_expressions::i, derivation_rules::helpers::expect_result, expressions::Fraction,
    };

    use super::*;

    #[test]
    fn test_1() {
        let rule = PropogateUndefined {};

        expect_result(
            &rule,
            Fraction::of(i(1), Expression::Undefined),
            Expression::Undefined,
        );
    }
}
