use crate::{expressions::{Expression, Integer}, argument::Argument};

use super::DerivationRule;



/**
* x * 0 = 0
*/
pub struct AnythingTimesZero {}

impl DerivationRule for AnythingTimesZero {
    fn apply(&self, input: crate::expressions::Expression) -> Vec<(crate::expressions::Expression, std::rc::Rc<crate::argument::Argument>)> {
        let product = match input {
            Expression::Product(ref p) => p,
            _ => return vec![],
        };
        
        let is_zero = product.factors().contains(&Integer::of(0));

        if !is_zero {
            return vec![];
        }

        vec![(
            Integer::of(0),
            Argument::new(String::from("anything times zero is zero"), vec![input])
            )]
    }
}


#[cfg(test)]
mod tests {
    use crate::{expressions::{Product, Integer, Expression}, derivation_rules::DerivationRule};

    use super::AnythingTimesZero;


    #[test]
    fn test_1() {
        let rule = AnythingTimesZero {};

        let to_zero = Product::of(&[Integer::of(1), Integer::of(0)]).unwrap();
        let not_zero = Product::of(&[Integer::of(1), Integer::of(1)]).unwrap();

        let result1: Vec<Expression> = rule.apply(to_zero).iter().map(|x| x.0.clone()).collect();
        let result2: Vec<Expression> = rule.apply(not_zero).iter().map(|x| x.0.clone()).collect();

        assert_eq!(result1[0], Integer::of(0));
        assert_eq!(result1.len(), 1);
        assert_eq!(result2.len(), 0);
    }
}
