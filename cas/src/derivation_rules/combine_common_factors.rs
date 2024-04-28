use std::{collections::HashMap, rc::Rc};

use crate::{
    argument::Argument,
    expressions::{product::product_of, sum::sum_of, Exponent, Expression, Integer},
};

use super::DerivationRule;

/**
 * Combines factors and exponents with like bases.
*/
pub struct CombineCommonFactors {}

impl DerivationRule for CombineCommonFactors {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let product = match input {
            Expression::Product(ref p) => p,
            _ => return vec![],
        };

        // factor bases -> terms of the new power
        let mut new_factors: HashMap<Expression, Vec<Expression>> = HashMap::new();

        for factor in product.factors() {
            match factor {
                Expression::Exponent(e) => {
                    if !new_factors.contains_key(&e.base()) {
                        new_factors.insert(e.base().clone(), vec![]);
                    }
                    new_factors.get_mut(&e.base()).unwrap().push(e.power())
                }
                _ => {
                    if !new_factors.contains_key(factor) {
                        new_factors.insert(factor.clone(), vec![]);
                    }
                    new_factors.get_mut(factor).unwrap().push(Integer::of(1));
                }
            }
        }

        let stripped = new_factors
            .iter()
            .map(|pair| {
                if pair.1.len() == 1 {
                    pair.0.clone()
                } else {
                    Exponent::of(pair.0.clone(), sum_of(pair.1))
                }
            })
            .collect::<Vec<Expression>>();

        if stripped.len() >= product.factors().len() {
            return vec![];
        }

        let result = product_of(&stripped);

        vec![(
            result,
            Argument::new("Combine common factors".to_owned(), vec![input]),
        )]
    }
}

#[cfg(test)]
mod tests {
    use crate::{
        convenience_expressions::{i, power},
        expressions::{product::product_of, sum::sum_of},
    };

    use super::CombineCommonFactors;
    use crate::derivation_rules::DerivationRule;

    #[test]
    fn test_1() {
        let rule = CombineCommonFactors {};
        let start = product_of(&[power(i(1), i(2)), i(1)]);
        let result = rule.apply(start);

        assert_eq!(
            result.first().unwrap().0,
            power(i(1), sum_of(&[i(2), i(1)]))
        );
    }
}
