use std::rc::Rc;

use crate::{argument::Argument, expressions::{product::product_of, Expression}};

use super::{helpers::is_constant, DerivationRule};


/**
* Integrates a constant.
*/
pub struct IntegralOfConst {}

impl DerivationRule for IntegralOfConst {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let integral = match input {
            Expression::Integral(ref i) => i,
            _ => return vec![]
        };

        if !is_constant(&integral.integrand(), &integral.relative_to()) {
            return vec![];
        }

        // It is constant
        let integrand = integral.integrand();

        vec![(product_of(&[integrand, integral.relative_to()]),
            Argument::new(String::from("Integrate constant"), vec![input])
        )]
    }
}

#[cfg(test)]
mod tests {
    use crate::{convenience_expressions::v, derivation_rules::DerivationRule, expressions::{product::product_of, Integral}};

    use super::IntegralOfConst;

    #[test]
    fn test_1() {
        let rule = IntegralOfConst {};

        let start = Integral::of(v("y"), v("x"));
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(result, product_of(&[v("y"), v("x")]));
    }
}
