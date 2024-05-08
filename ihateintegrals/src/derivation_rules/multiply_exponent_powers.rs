use std::rc::Rc;

use crate::{
    argument::Argument,
    convenience_expressions::power,
    expressions::{product::product_of, Expression},
};

use super::DerivationRule;

/**
* a^b^c = a^(bc)
*/
pub struct MultiplyExponentPowers {}

impl DerivationRule for MultiplyExponentPowers {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let outer = match input {
            Expression::Exponent(ref e) => e,
            _ => return vec![],
        };

        let inner = match outer.power() {
            Expression::Exponent(e) => e,
            _ => return vec![],
        };

        vec![(
            power(outer.base(), product_of(&[inner.base(), inner.power()])),
            Argument::new(
                "Nested exponents multiply".to_owned(),
                vec![input],
                self.name(),
            ),
        )]
    }

    fn name(&self) -> String {
        String::from("MultiplyExponentPowers")
    }
}

#[cfg(test)]
mod tests {
    use crate::{
        convenience_expressions::{i, power},
        expressions::product::product_of,
    };

    use super::MultiplyExponentPowers;
    use crate::derivation_rules::DerivationRule;

    #[test]
    fn test_1() {
        let start = power(i(1), power(i(2), i(3)));
        let rule = MultiplyExponentPowers {};
        let result = rule.apply(start);
        assert_eq!(
            result.first().unwrap().0,
            power(i(1), product_of(&[i(2), i(3)]))
        );
    }
}
