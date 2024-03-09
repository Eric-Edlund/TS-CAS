use std::rc::Rc;

use crate::{argument::Argument, expressions::{product::product_of, Expression, ExpressionPtr, Fraction, Integer}};

use super::DerivationRule;


/**
* a/(1/b) = ab/1
*/
pub struct FractionInDenominator {}

impl DerivationRule for FractionInDenominator {
    fn apply(&self, input: ExpressionPtr) -> Vec<(ExpressionPtr, Rc<Argument>)> {
        let outer = match input {
            Expression::Fraction(ref f) => f,
            _ => return vec![]
        };

        let Expression::Fraction(ref inner) = outer.denominator()
        else {
            return vec![]
        };

        vec![(
            product_of(&[
                Fraction::of(
                    outer.numerator(),
                    Integer::of(1)
                ),
                Fraction::of(
                    inner.denominator(),
                    inner.numerator()
                )
            ]),
            Argument::new(
                String::from("Multiply out fraction in denominator"), 
                vec![input]
            )
        )]
    }
}
