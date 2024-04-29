use std::rc::Rc;

use crate::{
    argument::Argument, convenience_expressions::sum_of_iter, expressions::Fraction, Expression,
};

use super::DerivationRule;

/// Splits fractions with sum numerators
pub struct SplitFractionsAddition {}

impl DerivationRule for SplitFractionsAddition {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let fraction = match input {
            Expression::Fraction(ref f) => f,
            _ => return vec![],
        };

        let Expression::Sum(s) = fraction.numerator() else {
            return vec![];
        };

        let result = sum_of_iter(
            &mut s
                .terms()
                .iter()
                .map(|term| Fraction::of(term.clone(), fraction.denominator())),
        );

        vec![(
            result,
            Argument::new(String::from("Split fraction over addition"), vec![input]),
        )]
    }

    fn name(&self) -> String {
        String::from("SplitFractions")
    }
}

#[cfg(test)]
mod tests {
    use crate::{convenience_expressions::v, expressions::sum::sum_of};

    use super::*;

    #[test]
    fn test_1() {
        let rule = SplitFractionsAddition {};

        let start = Fraction::of(sum_of(&[v("a"), v("b")]), v("c"));
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(
            result,
            sum_of(&[Fraction::of(v("a"), v("c")), Fraction::of(v("b"), v("c")),])
        );
    }
}
