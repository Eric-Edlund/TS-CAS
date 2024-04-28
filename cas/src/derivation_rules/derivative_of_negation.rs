use std::rc::Rc;

use crate::{
    argument::Argument,
    expressions::{Derivative, Expression, Negation},
};

use super::DerivationRule;

pub struct PullOutNegation {}

impl DerivationRule for PullOutNegation {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let derivative = match input {
            Expression::Derivative(ref d) => d,
            _ => return vec![],
        };

        let Expression::Negation(ref n) = derivative.exp() else {
            return vec![];
        };

        vec![(
            Negation::of(Derivative::of(n.child(), derivative.relative_to())),
            Argument::new("Pull out constant -1".into(), vec![input]),
        )]
    }
    fn name(&self) -> String {
        String::from("DerivativePullNegation")
    }
}
