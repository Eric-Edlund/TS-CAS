use std::rc::Rc;

use crate::{
    argument::Argument,
    derivation_rules::helpers::is_one,
    expressions::{
        product::product_of, sum::sum_of, Exponent, Expression, Fraction, Integer, Negation,
    },
};

use super::DerivationRule;

/// TODO: Not (ab)/(ac) = (a/a)(b/c),
///
/// Only: a^5/a^4 = a/1
pub struct DivideFractions {}

impl DerivationRule for DivideFractions {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let fraction = match input {
            Expression::Fraction(ref f) => f,
            _ => return vec![],
        };

        let mut numerator: Vec<Expression> = match fraction.numerator() {
            Expression::Product(p) => p.factors().clone(),
            exp => vec![exp],
        };
        let mut denominator: Vec<Expression> = match fraction.denominator() {
            Expression::Product(p) => p.factors().clone(),
            exp => vec![exp],
        };

        fn contains_base(list: &Vec<Expression>, exp: &Expression) -> bool {
            for e in list {
                match e {
                    Expression::Exponent(e) => {
                        if e.base() == *exp {
                            return true;
                        }
                    }
                    e => {
                        if *e == *exp {
                            return true;
                        }
                    }
                }
            }
            false
        }

        fn base_of(exp: &Expression) -> Expression {
            match exp {
                Expression::Exponent(e) => e.base(),
                _ => exp.clone(),
            }
        }

        for elem in &mut numerator {
            // If it's also in the denominator, mutate it
            // and the one in the denominator.
            // Make it exist only in the numerator.
            let base = base_of(elem);
            if !contains_base(&denominator, &base) {
                continue;
            }
            let top_power = match elem {
                Expression::Exponent(e) => e.power(),
                _ => Integer::of(1),
            };

            let bottom_match = denominator
                .iter_mut()
                .find(|exp| base_of(exp) == base)
                .unwrap();
            let bottom_power = match bottom_match {
                Expression::Exponent(e) => e.power(),
                _ => Integer::of(1),
            };

            // Replace the numerator element
            *elem = Exponent::of(base, sum_of(&[top_power, Negation::of(bottom_power)]));
            // Replace the factor in the bottom with 1
            *bottom_match = Integer::of(1);
        }

        let result = if is_one(&product_of(&denominator)) {
            product_of(&numerator)
        } else {
            Fraction::of(product_of(&numerator), product_of(&denominator))
        };

        if result == input {
            return vec![];
        }

        vec![(
            result,
            Argument::new(String::from("Divided fraction"), vec![input]),
        )]
    }
    fn name(&self) -> String {
        String::from("DivideFractions")
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::derivation_rules::DerivationRule;
    use crate::{
        convenience_expressions::{i, power, v},
        expressions::Fraction,
    };

    #[test]
    fn test_1() {
        let rule = DivideFractions {};

        let start = Fraction::of(power(v("a"), i(2)), v("a"));
        let result1 = rule.apply(start);

        assert_eq!(
            result1.first().unwrap().0,
            Fraction::of(power(v("a"), sum_of(&[i(2), Negation::of(i(1))])), i(1))
        );
    }
}
