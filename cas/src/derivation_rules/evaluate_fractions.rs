use std::rc::Rc;

use crate::{
    argument::Argument,
    expressions::{product::product_of_iter, Expression, Fraction, Integer},
};

use super::DerivationRule;

/// If the numerator and denominator both contian integers
/// and they can be reduced to a simpler fraction do so.
pub struct EvaluateFractions {}

impl DerivationRule for EvaluateFractions {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let fraction = match input {
            Expression::Fraction(ref f) => f,
            _ => return vec![],
        };

        let num_factors = match fraction.numerator() {
            Expression::Product(p) => p.factors().clone(),
            x => vec![x],
        };
        let den_factors = match fraction.denominator() {
            Expression::Product(p) => p.factors().clone(),
            x => vec![x],
        };

        if num_factors
            .iter()
            .filter(|x| matches!(x, Expression::Integer(_)))
            .count()
            > 1
        {
            // Let another rule combine the integers first
            return vec![];
        }
        if den_factors
            .iter()
            .filter(|x| matches!(x, Expression::Integer(_)))
            .count()
            > 1
        {
            return vec![];
        }

        let Expression::Integer(ref num) = num_factors
            .iter()
            .find(|x| matches!(x, Expression::Integer(_)))
            .cloned()
            .unwrap_or(Integer::of(1))
        else {
            panic!()
        };

        let Expression::Integer(ref den) = den_factors
            .iter()
            .find(|x| matches!(x, Expression::Integer(_)))
            .cloned()
            .unwrap_or(Integer::of(1))
        else {
            panic!()
        };

        let mut gcf = 1;

        for i in 2..=num.value() {
            if num.value() % i == 0 && den.value() % i == 0 {
                gcf = i;
            }
        }

        let (n, d) = (num.value() / gcf, den.value() / gcf);
        if n == 1 && d == 1 {
            return vec![];
        }
        let result = Fraction::of(
            product_of_iter(
                &mut [Integer::of(n)].into_iter().chain(
                    &mut num_factors
                        .into_iter()
                        .filter(|x| !matches!(x, Expression::Integer(_))),
                ),
            ),
            product_of_iter(
                &mut [Integer::of(d)].into_iter().chain(
                    &mut den_factors
                        .into_iter()
                        .filter(|x| !matches!(x, Expression::Integer(_))),
                ),
            ),
        );

        if result == input {
            return vec![];
        }

        vec![(
            result,
            Argument::new(String::from("Reduce fraction"), vec![input]),
        )]
    }
    fn name(&self) -> String {
        String::from("EvaluateFractions")
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::{
        convenience_expressions::{i, power, v},
        derivation_rules::DerivationRule,
        expressions::{product::product_of, Negation},
    };

    #[test]
    fn test_1() {
        let rule = EvaluateFractions {};

        let start = Fraction::of(i(8), i(4));
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(result, Fraction::of(Integer::of(2), Integer::of(1)));

        let start2 = Fraction::of(i(16), i(12));
        let result2 = rule.apply(start2).first().unwrap().0.clone();

        assert_eq!(result2, Fraction::of(i(4), i(3)));

        let start3 = Fraction::of(i(3), i(6));
        let result3 = rule.apply(start3).first().unwrap().0.clone();

        assert_eq!(result3, Fraction::of(i(1), i(2)));

        let start4 = Fraction::of(product_of(&[i(4), power(v("x"), Negation::of(i(2)))]), i(2));
        let result4 = rule.apply(start4).first().unwrap().0.clone();

        assert_eq!(
            result4,
            Fraction::of(product_of(&[i(2), power(v("x"), Negation::of(i(2)))]), i(1))
        );

        // False positives
        let start5 = Fraction::of(i(1), i(1));
        let result5 = rule.apply(start5).first().is_none();
        assert!(result5);

        let start6 = Fraction::of(product_of(&[i(1), v("x")]), i(1));
        let result6 = rule.apply(start6).first().is_none();
        assert!(result6);
    }
}
