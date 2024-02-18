use std::rc::Rc;

use crate::{expressions::{ExpressionPtr, Expression, product::product_of}, argument::Argument, convenience_expressions::power};

use super::DerivationRule;


/**
* a^b^c = a^(bc)
*/
pub struct MultiplyExponentPowers {}

impl DerivationRule for MultiplyExponentPowers {
    fn apply(&self, input: ExpressionPtr) -> Vec<(ExpressionPtr, Rc<Argument>)> {
        let outer =  match input {
            Expression::Exponent(ref e) => e,
            _ => return vec![],
        };

        let inner = match outer.power() {
            Expression::Exponent(e) => e,
            _ => return vec![],
        };

        vec![(power(outer.base(), product_of(&[inner.base(), inner.power()])),
            Argument::new("Nested exponents multiply".to_owned(), vec![input]))]
    }
}

#[cfg(test)]
mod tests {
    use crate::{expressions::product::product_of, convenience_expressions::{power, i}};

    use super::MultiplyExponentPowers;
    use crate::derivation_rules::DerivationRule;

    #[test]
    fn test_1() {
        let start = power(i(1), power(i(2), i(3)));
        let rule = MultiplyExponentPowers{};
        let result = rule.apply(start);
        assert_eq!(result.first().unwrap().0, power(i(1), product_of(&[i(2), i(3)])));
    }
}
