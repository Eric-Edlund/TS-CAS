use std::rc::Rc;

use crate::{
    argument::Argument,
    expressions::{product::product_of, Expression, Fraction, Integer},
};

use super::DerivationRule;

/**
* a/(1/b) = ab/1
*/
pub struct FractionInDenominator {}

impl DerivationRule for FractionInDenominator {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let outer = match input {
            Expression::Fraction(ref f) => f,
            _ => return vec![],
        };

        vec![(
            product_of(&[
                Fraction::of(outer.numerator(), Integer::of(1)),
                Fraction::of(outer.denominator(), Integer::of(1)),
            ]),
            Argument::new(
                String::from("Multiply out fraction in denominator"),
                vec![input],
            ),
        )]
    }
    fn name(&self) -> String {
        String::from("FractionsInDenominator")
    }
}

#[cfg(test)]
mod tests {
    use crate::convenience_expressions::{i, v};

    use super::*;

    #[test]
    fn test_1() {
        let rule = FractionInDenominator {};

        let start = Fraction::of(Fraction::of(v("x"), i(2)), i(2));
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(
            result,
            product_of(&[
                Fraction::of(Fraction::of(v("x"), i(2)), Integer::of(1)),
                Fraction::of(Integer::of(2), Integer::of(1))
            ])
        );
    }
}
