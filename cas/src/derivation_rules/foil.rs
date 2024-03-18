use std::rc::Rc;

use crate::{argument::Argument, expressions::{Expression, product::{product_of, product_of_iter}, sum::sum_of}};

use super::DerivationRule;


pub struct FOIL {}

/**
* (a+b)(c+d) = ac + ad + bc + bd
*/
impl DerivationRule for FOIL {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let product = match input {
            Expression::Product(ref p) => p,
            _ => return vec![],
        };

        let (sums, non_sums) = {
            let mut sums = Vec::new();
            let mut non_sums = Vec::new();
            for factor in product.factors() {
                match factor {
                    Expression::Sum(_) => sums.push(factor.clone()),
                    _ => non_sums.push(factor.clone()),
                }
            }
            (sums, non_sums)
        };

        // Foil every pair of sums
        let mut equivalents = Vec::<Expression>::new();

        for first in &sums {
            for second in &sums {
                if first == second {
                    continue;
                }
                let first_sum = match first {
                    Expression::Sum(ref s) => s,
                    _ => panic!()
                };
                let second_sum = match second {
                    Expression::Sum(ref s) => s,
                    _ => panic!()
                };
                let excluded_sums = sums.iter()
                    .filter(|s| *s != first && *s != second)
                    .map(|s| (*s).clone())
                    .collect::<Vec<Expression>>();
                // FOIL
                let mut new_terms = Vec::<Expression>::new();

                for term in first_sum.terms() {
                    for other in second_sum.terms() {
                        new_terms.push(product_of(&[term.clone(), other.clone()]));
                    }
                }

                equivalents.push(
                    product_of_iter(
                        &mut [sum_of(&new_terms)].into_iter()
                            .chain(non_sums.iter().map(|x| x.clone()).collect::<Vec<Expression>>())
                            .chain(excluded_sums)
                    )
                )
            }
        }

        equivalents.iter().map(|expression| {
            (expression.clone(), Argument::new(String::from("FOIL"), vec![input.clone()]))
        }).collect::<Vec<(Expression, Rc<Argument>)>>()
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::{derivation_rules::DerivationRule, convenience_expressions::v};

    #[test]
    fn test_1() {
        let rule = FOIL {};
        let start = product_of(&[sum_of(&[v("a"), v("b")]), sum_of(&[v("c"), v("d")])]);
        let result = rule.apply(start);
        assert_eq!(result.first().unwrap().0, 
            sum_of(&[
            product_of(&[v("a"), v("c")]), 
            product_of(&[v("a"), v("d")]),
            product_of(&[v("b"), v("c")]),
            product_of(&[v("b"), v("d")]),
            ]));
    }
}
