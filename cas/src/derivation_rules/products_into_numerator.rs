use std::rc::Rc;

use crate::{
    argument::Argument,
    convenience_expressions::ordered,
    expressions::{product::product_of_iter, Expression, Fraction},
};

use super::DerivationRule;

/**
* a(b/c) = (ab)/c
*/
pub struct ProductsIntoNumerator {}

impl DerivationRule for ProductsIntoNumerator {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let product = match input {
            Expression::Product(ref p) => p,
            _ => return vec![],
        };

        let (fractions, not): (Vec<&Expression>, Vec<&Expression>) = product
            .factors()
            .iter()
            .partition(|x| matches!(x, Expression::Fraction(_)));

        if fractions.is_empty() {
            return vec![];
        }

        let mut results = Vec::<Expression>::new();
        for f in &fractions {
            let Expression::Fraction(fraction) = f else {
                panic!()
            };
            // Pull all factors into the fraction, not the powerset, too expensive
            let new_num = ordered(product_of_iter(
                &mut [fraction.numerator()]
                    .iter()
                    .chain(&mut not.iter().cloned())
                    .cloned(),
            ));

            results.push(product_of_iter(
                &mut [Fraction::of(new_num, fraction.denominator())]
                    .iter()
                    .chain(
                        fractions
                            .iter()
                            .filter(|fr| fr != &&&Expression::Fraction(fraction.clone()))
                            .cloned(),
                    )
                    .cloned(),
            ));
        }

        results
            .into_iter()
            .map(|exp| {
                (
                    exp,
                    Argument::new(String::from("Product into numerator"), vec![input.clone()]),
                )
            })
            .collect()
    }
}

#[cfg(test)]
mod tests {
    use crate::{convenience_expressions::v, expressions::product::product_of};

    use super::*;

    #[test]
    fn test_1() {
        let rule = ProductsIntoNumerator {};

        let start = product_of(&[v("x"), Fraction::of(v("a"), v("b"))]);
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(result, Fraction::of(product_of(&[v("a"), v("x")]), v("b")));
    }
}
