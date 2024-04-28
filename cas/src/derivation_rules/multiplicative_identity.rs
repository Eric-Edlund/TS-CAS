use std::rc::Rc;

use crate::{
    argument::Argument,
    expressions::{product::product_of, Expression},
};

use super::DerivationRule;

pub struct MultiplicativeIdentity {}

impl DerivationRule for MultiplicativeIdentity {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let product = match input {
            Expression::Product(ref p) => p,
            _ => return vec![],
        };

        let new_factors: Vec<Expression> = product
            .factors()
            .iter()
            .filter(|f| match f {
                Expression::Integer(i) => i.value() != 1,
                _ => true,
            })
            .cloned()
            .collect();

        let result = product_of(&new_factors);
        if result == input {
            return vec![];
        }

        vec![(
            result,
            Argument::new("Multiplicative identity".to_owned(), vec![input]),
        )]
    }
}

#[cfg(test)]
mod tests {
    use crate::{convenience_expressions::i, expressions::product::product_of};

    use super::DerivationRule;
    use super::MultiplicativeIdentity;

    #[test]
    fn test_1() {
        let exp = product_of(&[i(1), i(32)]);
        let rule = MultiplicativeIdentity {};
        assert!(rule.apply(exp).first().unwrap().0 == i(32));
    }
}
