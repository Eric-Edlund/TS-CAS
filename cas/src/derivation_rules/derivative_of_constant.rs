use std::rc::Rc;

use crate::{
    argument::Argument,
    expressions::{Expression, Integer},
};

use super::{helpers::is_constant, DerivationRule};

/**
* Derivative of constant is zero.
*/
pub struct DerivativeOfConst {}

impl DerivationRule for DerivativeOfConst {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let derivative = match input {
            Expression::Derivative(ref d) => d,
            _ => return vec![],
        };

        if !is_constant(&derivative.exp(), &derivative.relative_to()) {
            return vec![];
        }

        vec![(
            Integer::of(0),
            Argument::new(
                String::from("Derivative of constant is zero"),
                vec![input],
                self.name(),
            ),
        )]
    }
    fn name(&self) -> String {
        String::from("DerivativeOfConst")
    }
}

#[cfg(test)]
mod tests {
    use crate::{
        derivation_rules::DerivationRule,
        expressions::{Derivative, Integer, Variable},
    };

    use super::DerivativeOfConst;

    #[test]
    fn test_1() {
        let rule = DerivativeOfConst {};

        let start = Derivative::of(Integer::of(1), Variable::of("x"));
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(result, Integer::of(0));
    }
}
