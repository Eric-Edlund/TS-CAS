use std::rc::Rc;

use crate::{
    argument::Argument,
    expressions::{product::product_of, Exponent},
    Expression,
};

use super::DerivationRule;

/// x^y^z = a^(yz)
pub struct MultiplyExponents {}

impl DerivationRule for MultiplyExponents {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let outer = match input {
            Expression::Exponent(ref e) => e,
            _ => return vec![],
        };

        let (base, a, b) = if let Expression::Exponent(e) = outer.power() {
            (outer.base(), e.base(), e.power())
        } else if let Expression::Exponent(e) = outer.base() {
            (e.base(), e.power(), outer.power())
        } else {
            return vec![];
        };

        vec![(
            Exponent::of(base, product_of(&[a, b])),
            Argument::new(
                String::from("Exponents to exponents multiply"),
                vec![input],
                self.name(),
            ),
        )]
    }

    fn name(&self) -> String {
        String::from("MultiplyExponents")
    }
}

#[cfg(test)]
mod tests {
    use crate::{convenience_expressions::v, derivation_rules::helpers::expect_result};

    use super::*;

    #[test]
    fn test_1() {
        let rule = MultiplyExponents {};

        expect_result(
            &rule,
            Exponent::of(v("x"), Exponent::of(v("y"), v("z"))),
            Exponent::of(v("x"), product_of(&[v("y"), v("z")])),
        );

        expect_result(
            &rule,
            Exponent::of(Exponent::of(v("y"), v("z")), v("x")),
            Exponent::of(v("y"), product_of(&[v("z"), v("x")])),
        );
    }
}
