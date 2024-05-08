use std::{collections::HashMap, rc::Rc};

use crate::{
    argument::Argument,
    derivation_rules::helpers::is_one,
    expressions::{product::product_of, sum::sum_of, Exponent, Integer},
    Expression,
};

use super::DerivationRule;

pub struct ProductExponents {}

impl DerivationRule for ProductExponents {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let product = match input {
            Expression::Product(ref p) => p,
            _ => return vec![],
        };

        let mut new_factors = HashMap::<Expression, Vec<Expression>>::new();
        let mut order = Vec::<Expression>::new();

        for factor in product.factors() {
            match factor {
                Expression::Exponent(ref e) => {
                    new_factors.entry(e.base()).or_default().push(e.power());
                    if !order.contains(&e.base()) {
                        order.push(e.base());
                    }
                }
                _ => {
                    new_factors
                        .entry(factor.clone())
                        .or_default()
                        .push(Integer::of(1));
                    if !order.contains(factor) {
                        order.push(factor.clone());
                    }
                }
            }
        }

        let factors = order
            .into_iter()
            .map(|base| {
                let powers = &new_factors[&base];
                if powers.len() == 1 {
                    let only = powers.first().unwrap();
                    if is_one(only) {
                        base
                    } else {
                        Exponent::of(base.clone(), (*only).clone())
                    }
                } else {
                    Exponent::of(base, sum_of(powers))
                }
            })
            .collect::<Vec<_>>();

        vec![(
            product_of(&factors),
            Argument::new(String::from("Add exponents"), vec![input], self.name()),
        )]
    }

    fn name(&self) -> String {
        String::from("ProductExponents")
    }
}

#[cfg(test)]
mod tests {
    use crate::{
        convenience_expressions::{i, v},
        derivation_rules::helpers::expect_result,
    };

    use super::*;

    #[test]
    fn test_1() {
        let rule = ProductExponents {};

        expect_result(
            &rule,
            product_of(&[v("a"), v("x"), v("x"), Exponent::of(v("y"), i(2))]),
            product_of(&[
                v("a"),
                Exponent::of(v("x"), sum_of(&[i(1), i(1)])),
                Exponent::of(v("y"), i(2)),
            ]),
        )
    }
}
