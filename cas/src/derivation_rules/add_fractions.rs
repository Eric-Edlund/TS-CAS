use std::rc::Rc;

use crate::{
    argument::Argument,
    convenience_expressions::sum_of_iter,
    expressions::{sum::sum_of, Expression, Fraction},
};

use super::DerivationRule;

/**
* Adds the numerators of fractions with common denominators.
*/
pub struct AddFractions {}

impl DerivationRule for AddFractions {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let sum = match input {
            Expression::Sum(ref s) => s,
            _ => return vec![],
        };

        let denominators = sum.terms().iter().filter_map(|term| match term {
            Expression::Fraction(f) => Some(f.denominator()),
            _ => None,
        });

        let mut results = Vec::<Expression>::new();

        for den in denominators {
            let mut num_terms = Vec::<Expression>::new();
            let mut others = Vec::<Expression>::new();
            for term in sum.terms() {
                match term {
                    Expression::Fraction(f) => {
                        if f.denominator() == den {
                            num_terms.push(f.numerator());
                        } else {
                            others.push(term.clone());
                        }
                    }
                    x => others.push(x.clone()),
                }
            }
            results.push(sum_of_iter(
                &mut others
                    .into_iter()
                    .chain(&mut [Fraction::of(sum_of(&num_terms), den)].iter().cloned()),
            ));
        }

        results
            .into_iter()
            .map(|exp| {
                (
                    exp,
                    Argument::new(String::from("Add fractions"), vec![input.clone()]),
                )
            })
            .collect()
    }

    fn name(&self) -> String {
        String::from("AddFractions")
    }
}
