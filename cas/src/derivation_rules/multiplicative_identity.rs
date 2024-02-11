use std::rc::Rc;

use crate::{argument::Argument, expressions::{ExpressionPtr, Expression, product::product_of}};

use super::DerivationRule;


pub struct MultiplicativeIdentity {}

impl DerivationRule for MultiplicativeIdentity {
    fn apply(&self, input: ExpressionPtr) -> Vec<(ExpressionPtr, Rc<Argument>)> {
        let product = match input {
            Expression::Product(ref p) => p,
            _ => return vec![],
        };

        let new_factors: Vec<Expression> = product.factors().iter()
            .filter(|f| {
                match f {
                    Expression::Integer(i) => i.value() != 1,
                    _ => true,
                }
            })
            .map(|f| f.clone())
            .collect();

        vec![
            (product_of(&new_factors),
            Argument::new("Multiplicative identity".to_owned(), vec![input]))
        ]
    }
}

#[cfg(test)]
mod tests {
    use crate::{expressions::product::product_of, convenience_expressions::i};

    use super::MultiplicativeIdentity;
    use super::DerivationRule;


    #[test]
    fn test_1() {
        let exp = product_of(&[i(1), i(32)]);
        let rule = MultiplicativeIdentity {};
        assert!(rule.apply(exp).first().unwrap().0 == i(32));
    }
}