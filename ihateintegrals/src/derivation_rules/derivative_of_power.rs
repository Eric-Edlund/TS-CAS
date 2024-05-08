use std::rc::Rc;

use crate::{
    argument::Argument,
    convenience_expressions::i,
    expressions::{product::product_of, sum::sum_of, Exponent, Expression, Integer, Negation},
};

use super::{helpers::is_constant, DerivationRule};

pub struct PowerRule {}

impl DerivationRule for PowerRule {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let derivative = match input {
            Expression::Derivative(ref d) => d,
            _ => return vec![],
        };

        let variable = derivative.relative_to();

        let (base, power) = match derivative.exp() {
            Expression::Exponent(ref p) => {
                if p.base() == variable && is_constant(&p.power(), &variable) {
                    (p.base(), p.power())
                } else {
                    return vec![];
                }
            }
            exp => {
                if exp == variable {
                    (exp, Integer::of(1))
                } else {
                    return vec![];
                }
            }
        };

        vec![(
            product_of(&[
                power.clone(),
                Exponent::of(base, sum_of(&[power, Negation::of(i(1))])),
            ]),
            Argument::new(String::from("Apply power rule"), vec![input], self.name()),
        )]
    }
    fn name(&self) -> String {
        String::from("DerivativeOfPower")
    }
}

#[cfg(test)]
mod tests {
    use crate::{
        convenience_expressions::{i, power, v},
        derivation_rules::DerivationRule,
        expressions::{product::product_of, sum::sum_of, Derivative, Negation},
    };

    use super::PowerRule;

    #[test]
    fn test_1() {
        let rule = PowerRule {};

        let start = Derivative::of(v("x"), v("x"));
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(
            result,
            product_of(&[i(1), power(v("x"), sum_of(&[i(1), Negation::of(i(1))]))])
        );

        let start2 = Derivative::of(power(v("x"), i(2)), v("x"));
        let result2 = rule.apply(start2).first().unwrap().0.clone();

        assert_eq!(
            result2,
            product_of(&[i(2), power(v("x"), sum_of(&[i(2), Negation::of(i(1))]))])
        )
    }
}
