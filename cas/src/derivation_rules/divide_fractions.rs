use std::rc::Rc;

use crate::{expressions::{ExpressionPtr, Expression, Integer, sum::sum_of, Negation, Exponent, product::product_of, Fraction}, argument::Argument};

use super::DerivationRule;

/**
* (ab)/(ac) = b/c
*
* a^5/a^4 = a/1
*/
pub struct DivideFractions {}

impl DerivationRule for DivideFractions {
    fn apply(&self, input: ExpressionPtr) -> Vec<(ExpressionPtr, Rc<Argument>)> {
        let fraction = match input {
            Expression::Fraction(ref f) => f,
            _ => return vec![],
        };

        let mut numerator: Vec<ExpressionPtr> = match fraction.numerator() {
            Expression::Product(p) => p.factors().clone(),
            exp => vec![exp],
        };
        let mut denominator: Vec<ExpressionPtr> = match fraction.denominator() {
            Expression::Product(p) => p.factors().clone(),
            exp => vec![exp],
        };

        fn contains_base (list: &Vec<ExpressionPtr>, exp: &ExpressionPtr) -> bool {
            for e in list {
                match e {
                    Expression::Exponent(e) => if e.base() == *exp {
                        return true;
                    },
                    e => if *e == *exp {
                        return true;
                    }
                }
            };
            false
        }

        fn base_of(exp: &ExpressionPtr) -> ExpressionPtr {
            match exp {
                Expression::Exponent(e) => e.base(),
                _ => exp.clone(),
            }
        }

        for elem in &mut numerator {
            // If it's also in the denominator, mutate it 
            // and the one in the denominator.
            // Make it exist only in the numerator.
            let base = base_of(&elem);
            if !contains_base(&denominator, &base) {
                continue;
            }
            let top_power = match elem {
                Expression::Exponent(e) => e.power(),
                _ => Integer::of(1),
            };
            
            let bottom_match = denominator.iter_mut().find(|exp| base_of(&exp) == base).unwrap();
            let bottom_power = match bottom_match {
                Expression::Exponent(e) => e.power(),
                _ => Integer::of(1),
            };

            // Replace the numerator element
            *elem = Exponent::of(base, sum_of(&[top_power, Negation::of(bottom_power)]));
            // Replace the factor in the bottom with 1
            *bottom_match = Integer::of(1);
        }

        let result = Fraction::of(product_of(&numerator), product_of(&denominator));

        if result == input {
            return vec![];
        }

        vec![(result,
            Argument::new(String::from("Divided fraction"), vec![input]))]
    }
}

#[cfg(test)]
mod tests {
    use crate::{expressions::Fraction, convenience_expressions::{i, power, v}};
    use super::*;
    use crate::derivation_rules::DerivationRule;

    #[test]
    fn test_1() {
        let rule = DivideFractions {};

        let start = Fraction::of(power(v("a"), i(2)), v("a"));
        let result1 = rule.apply(start);

        assert_eq!(result1.first().unwrap().0,
            Fraction::of(power(v("a"), sum_of(&[i(2), Negation::of(i(1))])), i(1)));
    }
}


