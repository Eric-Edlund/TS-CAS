use std::rc::Rc;

use crate::{expressions::{Expression, product::product_of_iter, sum::sum_of}, argument::Argument};

use super::DerivationRule;

/**
* Distributes multiplication over addition.
*
* a(b+c) = ab + ac 
*
*/
pub struct DistributiveProperty {}

impl DerivationRule for DistributiveProperty {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let product = match input {
            Expression::Product(ref p) => p,
            _ => return vec![],
        };

        // Get all the factors which are themselves sums
        let sum_factors = product.factors().iter()
            .filter(|factor| match factor {
                Expression::Sum(_) => true,
                _ => false,
            });

        let mut equivalents: Vec<Expression> = vec![];

        // For each factor which is a sum, distribute each subset of
        // the other factors in the product over it, adding each
        // as a result.

        for sum in sum_factors {
            let terms = match sum {
                Expression::Sum(s) => s.terms(),
                _ => panic!(),
            };
            // For each subset of the other factors
            let other_factors: Vec<&Expression> = product.factors().iter()
                .filter(|f| *f != sum)
                .collect();

            // Powerset of the other factors, excluding empty set
            let base: u32 = 2;
            for s in 1..base.pow(other_factors.len() as u32) {
                let (to_distribute, others) = { 
                    let mut subset: Vec<&Expression> = vec![];
                    let mut complement: Vec<&Expression> = vec![];
                    for i in 0..other_factors.len() {
                        if s & (1 << i) != 0 {
                            subset.push(other_factors[i]);
                        } else {
                            complement.push(other_factors[i]);
                        }
                    };
                    (subset, complement)
                };

                let new_terms = terms.iter()
                    .map(|term| {
                        product_of_iter(&mut [term].iter().map(|e| (*e).clone())
                            .chain(to_distribute.iter().map(|e| (*e).clone())))
                    })
                    .collect::<Vec<Expression>>();

                let new_factors = &mut new_terms.iter()
                    .chain(others)
                    .map(|e| e.clone())
                    .collect::<Vec<Expression>>();

                let equivalent = sum_of(new_factors);

                equivalents.push(equivalent);
            }
        }

        equivalents.iter().map(|eq| {
            (eq.clone(), Argument::new(String::from("Divide fractions"), vec![input.clone()]))
        })
            .collect()
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::{derivation_rules::DerivationRule, convenience_expressions::v, expressions::product::product_of};

    #[test]
    fn test_1() {
        let rule = DistributiveProperty {};

        // (a+b)c
        let start = product_of(&[sum_of(&[v("a"), v("b")]), v("c")]);
        let result = rule.apply(start).first().unwrap().0.clone();

        // ac + bc
        let expected = sum_of(&[product_of(&[v("a"), v("c")]), product_of(&[v("b"), v("c")])]); 
        assert_eq!(result, expected);
    }
}
