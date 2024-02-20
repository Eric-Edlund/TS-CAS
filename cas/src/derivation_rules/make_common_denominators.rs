use std::rc::Rc;

use crate::{expressions::{ExpressionPtr, Expression}, argument::Argument, convenience_expressions::sum_of_iter};

use super::DerivationRule;


/**
* Accepts sums with at least one fraction term and at least one non-fraction term.
* For each fraction term, converts all non-fraction terms to fractions with 
* the same base.
*/
pub struct MakeCommonDenominators {}

impl DerivationRule for MakeCommonDenominators {
    fn apply(&self, input: ExpressionPtr) -> Vec<(ExpressionPtr, Rc<Argument>)> {
        // let sum = match input {
        //     Expression::Sum(ref s) => s,
        //     _ => return vec![]
        // };

        // let (fractions, non_fractions) = sum.terms().iter()
        //     .partition(|term| match term {
        //         Expression::Fraction(_) => true,
        //         _ => false
        //     });

        // let denominators = fractions.iter()
        //     .map(|frac| {
        //         let Expression::Fraction(f) = frac else { panic!() };
        //         f.denominator();
        //     });

        // let mut equivalents = Vec::<ExpressionPtr>::new();



        // for denominator in denominators {
        // }
        vec![]
    }
}
