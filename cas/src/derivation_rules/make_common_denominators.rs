use std::rc::Rc;

use crate::{argument::Argument, convenience_expressions::sum_of_iter, expressions::{product::product_of, Expression, ExpressionPtr, Fraction}};

use super::DerivationRule;


/**
* Accepts sums with at least one fraction term and at least one non-fraction term.
* For each fraction term, converts all non-fraction terms to fractions with 
* the same base.
*/
pub struct MakeCommonDenominators {}

impl DerivationRule for MakeCommonDenominators {
    fn apply(&self, input: ExpressionPtr) -> Vec<(ExpressionPtr, Rc<Argument>)> {
        let sum = match input {
            Expression::Sum(ref s) => s,
            _ => return vec![]
        };

        let denominators = sum.terms().iter()
            .filter(|term| matches!(term, Expression::Fraction(_)))
            .map(|frac| {
                let Expression::Fraction(f) = frac else { panic!() };
                f.denominator()
            });


        let mut equivalents = Vec::<ExpressionPtr>::new();

        for denominator in denominators {
            equivalents.push(
                sum_of_iter(&mut sum.terms().into_iter()
                    .map(|term| {
                        match term {
                            Expression::Fraction(_) => term.clone(),
                            x => Fraction::of(
                                product_of(&[x.clone(), denominator.clone()]), 
                                denominator.clone()
                            )
                        }
                    })
                )
            )
        }

        equivalents.into_iter()
            .map(|exp| (exp, 
                Argument::new(
                    String::from("Make common denominators"),
                    vec![input.clone()]
                )
            ))
            .collect()
    }
}

#[cfg(test)]
mod tests {
    use crate::{convenience_expressions::v, expressions::sum::sum_of};

    use super::*;

    #[test]
    fn test_1() {
        let rule = MakeCommonDenominators {};

        let start = sum_of(&[v("x"), Fraction::of(v("y"), v("z"))]);
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(result, sum_of(&[
            Fraction::of(product_of(&[v("x"), v("z")]), v("z")),
            Fraction::of(v("y"), v("z"))
        ]))
    }
}
