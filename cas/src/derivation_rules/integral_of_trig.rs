use std::rc::Rc;

use crate::{
    argument::Argument,
    expressions::{trig_expression::TrigFn, Expression, Negation, TrigExp},
};

use super::DerivationRule;

/**
* Handles all the basic trig identities for integration:
* sin(x) -> -cos(x)
* cos(x) -> sin(x)
*/
pub struct IntegralOfTrig {}

impl DerivationRule for IntegralOfTrig {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let integral = match input {
            Expression::Integral(ref i) => i,
            _ => return vec![],
        };

        let Expression::Trig(ref t) = integral.integrand() else {
            return vec![];
        };

        if t.exp() != integral.relative_to() {
            return vec![];
        };

        let exp = t.exp();

        let result = match t.operation {
            TrigFn::Sin => Negation::of(TrigExp::of(TrigFn::Cos, exp)),
            TrigFn::Cos => TrigExp::of(TrigFn::Sin, exp),
            _ => return vec![],
        };

        vec![(
            result,
            Argument::new(String::from("Integrate trig"), vec![input]),
        )]
    }
    fn name(&self) -> String {
        String::from("IntegralOfTrig")
    }
}

#[cfg(test)]
mod tests {
    use crate::{convenience_expressions::v, expressions::Integral};

    use super::*;

    #[test]
    fn test_1() {
        let rule = IntegralOfTrig {};

        let start = Integral::of(TrigExp::of(TrigFn::Sin, v("x")), v("x"));
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(result, Negation::of(TrigExp::of(TrigFn::Cos, v("x"))));
    }
}
