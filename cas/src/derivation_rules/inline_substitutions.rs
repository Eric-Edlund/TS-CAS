use std::rc::Rc;

use crate::{argument::Argument, expressions::Expression};

use super::DerivationRule;

/// Inlines substitution expressions.
pub struct InlineSubstitutions {}

impl DerivationRule for InlineSubstitutions {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let sub = match input {
            Expression::Substitution(ref s) => s,
            _ => return vec![],
        };

        vec![(
            sub.exp(),
            Argument::new(String::from("Inline substitution"), vec![input]),
        )]
    }

    fn name(&self) -> String {
        String::from("InlineSubstitution")
    }
}

#[cfg(test)]
mod tests {
    use crate::{convenience_expressions::v, expressions::substitution::Substitution};

    use super::*;

    #[test]
    fn test_1() {
        let rule = InlineSubstitutions {};

        let start = Substitution::of(v("x"));
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(result, v("x"));
    }
}
