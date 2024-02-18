use std::{rc::Rc, collections::HashSet};
use std::hash::Hash;

use crate::convenience_expressions::sum_of_iter;
use crate::expressions::Negation;
use crate::expressions::product::{product_of, product_of_iter};
use crate::{expressions::{ExpressionPtr, Expression}, argument::Argument};

use super::DerivationRule;


/**
* a + 2a = (1 + 2)a
* a + -(2a) = (1 - 2)a
* a + ba = (1+b)a
*/
pub struct SumCoefficientsOfTerms {}

// Excludes the empty set
fn power_set<T>(set: Vec<T>) -> Vec<Vec<T>>
where T: PartialEq + Eq + Hash + Clone {
    let mut power_set = Vec::<Vec<T>>::new();

    let base: u32 = 2;
    for i in 1..base.pow(set.len() as u32) {
        let mut subset = Vec::<T>::new();
        for j in 0..set.len() {
            if i & (1 << j) != 0 {
                subset.push(set[j as usize].clone());
            }
        }
        power_set.push(subset);
    }

    return power_set;
}

impl DerivationRule for SumCoefficientsOfTerms {
    fn apply(&self, input: ExpressionPtr) -> Vec<(ExpressionPtr, Rc<Argument>)> {
        let terms = match input {
            Expression::Sum(ref s) => s.terms(),
            _ => return vec![],
        };

        let expanded_terms = terms.iter()
            .map(|term| {
                match term {
                    Expression::Negation(n) => (true, n.child()),
                    _ => (false, term.clone()),
                }
            })
            .map(|term| {
                match term.1 {
                    Expression::Product(p) => (term.0, p.factors().clone()),
                    _ => (term.0, vec![term.1.clone()]),
                }
            })
            .collect::<Vec<(bool, Vec<ExpressionPtr>)>>();

        let factors = expanded_terms.iter()
            .map(|term| term.1.clone())
            .flatten()
            .collect::<HashSet<ExpressionPtr>>()
            .into_iter()
            .collect();

        let mut equivalents = Vec::<ExpressionPtr>::new();

        for subset in power_set(factors) {
            // Figure out which terms are affected
            // The term is included if it contains all elements of subset
            let mut relevant = Vec::<(bool, Vec<ExpressionPtr>)>::new();
            let mut others = Vec::<ExpressionPtr>::new();
            for term in &expanded_terms {
                let mut overlaps_subset = false;
                for factor in &subset {
                    //TODO: Check tonains all temrs
                    if term.1.contains(&factor) {
                        overlaps_subset = true;
                    }
                }

                if overlaps_subset {
                    relevant.push(term.clone());
                } else {
                    others.push(product_of(&term.1));
                }
            }

            if relevant.is_empty() {
                continue;
            }

            fn remove_factors(exp: &[Expression], exclude: &Vec<Expression>) -> Expression {
                product_of_iter(&mut exp.into_iter()
                    .filter(|f| !exclude.contains(*f))
                    .map(|f| f.clone()))

            }

            // Remove the pulled out factors
            let mut filtered_terms = relevant.into_iter()
                .map(|exp| {
                    (exp.0, remove_factors(&exp.1, &subset))
                })
                .map(|exp| {
                    if exp.0 {
                        Negation::of(exp.1)
                    } else {
                        exp.1
                    }
                });
                
            let sum = sum_of_iter(&mut filtered_terms);

            let product = product_of(&[sum, product_of(&subset)]);

            let result = sum_of_iter(&mut [product].into_iter()
                .chain(others.into_iter()));

            equivalents.push(result);
        }
        
        equivalents.into_iter().map(|exp| {
            (exp, Argument::new(
                String::from("Sum coefficients of terms"), 
                vec![input.clone()])
            )
        }).collect()
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::{derivation_rules::DerivationRule, convenience_expressions::{v, i}, expressions::sum::sum_of};

    #[test]
    fn test_1() {
        let rule = SumCoefficientsOfTerms {};
        // ab + ac + 1
        let start = sum_of(&[
            product_of(&[v("a"), v("b")]),
            product_of(&[v("a"), v("c")]),
            i(1)
        ]);

        let result = rule.apply(start).first().unwrap().0.clone();
        // (b + c)a + 1
        assert_eq!(result, sum_of(&[
            product_of(&[
                sum_of(&[v("b"), v("c")]),
                v("a")
            ]),
            i(1)
        ]));
    }
}
