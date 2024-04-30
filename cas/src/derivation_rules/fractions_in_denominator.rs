use std::rc::Rc;

use crate::{
    argument::Argument,
    expressions::{product::product_of, Expression, Fraction, Integer},
};

use super::DerivationRule;

/**
* a/(1/b) = ab/1
*/
pub struct NestedFractions {}

impl DerivationRule for NestedFractions {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let outer = match input {
            Expression::Fraction(ref f) => f,
            _ => return vec![],
        };

        let num_frac = match outer.numerator() {
            Expression::Fraction(f) => Some(f),
            _ => None,
        };
        let den_frac = match outer.denominator() {
            Expression::Fraction(f) => Some(f),
            _ => None,
        };

        if num_frac.is_none() && den_frac.is_none() {
            return vec![];
        }

        fn reciprocal(frac: &Fraction) -> Expression {
            Fraction::of(frac.denominator(), frac.numerator())
        }

        let result = if num_frac.is_some() && den_frac.is_some() {
            product_of(&[outer.numerator(), reciprocal(&den_frac.unwrap())])
        } else if num_frac.is_some() {
            product_of(&[
                outer.numerator(),
                Fraction::of(outer.denominator(), Integer::of(1)),
            ])
        } else {
            product_of(&[
                Fraction::of(outer.numerator(), Integer::of(1)),
                reciprocal(&den_frac.unwrap()),
            ])
        };

        vec![(
            result,
            Argument::new(String::from("Flip out nested fractions"), vec![input]),
        )]
    }
    fn name(&self) -> String {
        String::from("NestedFractions")
    }
}

#[cfg(test)]
mod tests {
    use crate::convenience_expressions::{i, v};

    use super::*;

    #[test]
    fn numerator_frac() {
        let rule = NestedFractions {};

        let start = Fraction::of(Fraction::of(v("x"), i(2)), i(2));
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(
            result,
            product_of(&[
                Fraction::of(v("x"), i(2)),
                Fraction::of(Integer::of(2), Integer::of(1))
            ])
        );
    }

    #[test]
    fn denominator_frac() {
        let rule = NestedFractions {};

        let start = Fraction::of(i(2), Fraction::of(v("x"), i(2)));
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(
            result,
            product_of(&[
                Fraction::of(Integer::of(2), Integer::of(1)),
                Fraction::of(i(2), v("x")),
            ])
        );
    }
}
