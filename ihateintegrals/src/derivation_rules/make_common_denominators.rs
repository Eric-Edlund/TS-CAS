use std::rc::Rc;

use crate::{
    argument::Argument,
    convenience_expressions::sum_of_iter,
    expressions::{product::product_of, Expression, Fraction},
};

use super::DerivationRule;

/// Accepts sums with at least one fraction term and at least one non-fraction term.
/// For each fraction term, converts all non-fraction terms to fractions with
/// the same base.
///
/// Doesn't convert integrals.
pub struct MakeCommonDenominators {}

impl DerivationRule for MakeCommonDenominators {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let sum = match input {
            Expression::Sum(ref s) => s,
            _ => return vec![],
        };

        let denominators = sum
            .terms()
            .iter()
            .filter(|term| matches!(term, Expression::Fraction(_)))
            .map(|frac| {
                let Expression::Fraction(f) = frac else {
                    panic!()
                };
                f.denominator()
            })
            .filter(|den| {
                let Expression::Integer(i) = den else {
                    return true;
                };
                i.value() != 1
            });

        let mut equivalents = Vec::<Expression>::new();

        for denominator in denominators {
            equivalents.push(sum_of_iter(&mut sum.terms().iter().map(
                |term| match term {
                    Expression::Fraction(_) => term.clone(),
                    Expression::Integral(_) => term.clone(),
                    x => Fraction::of(
                        product_of(&[x.clone(), denominator.clone()]),
                        denominator.clone(),
                    ),
                },
            )))
        }

        equivalents
            .into_iter()
            .filter(|exp| exp != &input)
            .map(|exp| {
                (
                    exp,
                    Argument::new(
                        String::from("Make common denominators"),
                        vec![input.clone()],
                        self.name(),
                    ),
                )
            })
            .collect()
    }
    fn name(&self) -> String {
        String::from("MakeCommonDenominators")
    }
}

#[cfg(test)]
mod tests {
    use crate::{
        convenience_expressions::{i, v},
        derivation_rules::helpers::{expect_no_result, expect_result},
        expressions::{sum::sum_of, Integral},
    };

    use super::*;

    #[test]
    fn test_1() {
        let rule = MakeCommonDenominators {};

        let start = sum_of(&[v("x"), Fraction::of(v("y"), v("z"))]);
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(
            result,
            sum_of(&[
                Fraction::of(product_of(&[v("x"), v("z")]), v("z")),
                Fraction::of(v("y"), v("z"))
            ])
        );

        expect_no_result(
            &rule,
            sum_of(&[Integral::of(v("x"), v("x")), Fraction::of(v("a"), v("b"))]),
        );
    }
    #[test]
    fn no_trivial_derivations() {
        let rule = MakeCommonDenominators {};

        expect_result(
            &rule,
            sum_of(&[Fraction::of(i(1), i(2)), i(1)]),
            sum_of(&[
                Fraction::of(i(1), i(2)),
                Fraction::of(product_of(&[i(1), i(2)]), i(2)),
            ]),
        );
    }
    #[test]
    fn no_den_one() {
        let rule = MakeCommonDenominators {};

        expect_no_result(&rule, sum_of(&[v("x"), Fraction::of(v("x"), i(1))]));
    }
}
