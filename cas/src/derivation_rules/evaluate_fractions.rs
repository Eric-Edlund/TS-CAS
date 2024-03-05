use std::rc::Rc;

use crate::{expressions::{ExpressionPtr, Expression, Integer, Fraction}, argument::Argument};

use super::DerivationRule;


/**
* If the numerator and denominator are both integers
* and they can be reduced to a single
* integer or a simpler fraction do so.
*/
pub struct EvaluateFractions {}

impl DerivationRule for EvaluateFractions {
    fn apply(&self, input: ExpressionPtr) -> Vec<(ExpressionPtr, Rc<Argument>)> {
        let fraction = match input {
            Expression::Fraction(ref f) => f,
            _ => return vec![],
        };

        let Expression::Integer(num) = fraction.numerator() 
        else {
            return vec![];
        };
        let Expression::Integer(den) = fraction.denominator() 
        else {
            return vec![];
        };

        let mut gcf = 1;

        for i in 2..=num.value() {
            if num.value() % i == 0 && den.value() % i == 0 {
                gcf = i;
            }
        }

        let (n, d) = (num.value() / gcf, den.value() / gcf);
        let result = if d == 1 {
            Integer::of(n)
        } else {
            Fraction::of(Integer::of(n), Integer::of(d))
        };

        if result == input {
            return vec![]
        }

        vec![(result,
            Argument::new(String::from("Reduce fraction"), vec![input]))]
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::{derivation_rules::DerivationRule, convenience_expressions::i};

    #[test]
    fn test_1() {
        let rule = EvaluateFractions {};

        let start = Fraction::of(i(8), i(4));
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(result, Integer::of(2));

        let start2 = Fraction::of(i(16), i(12));
        let result2 = rule.apply(start2).first().unwrap().0.clone();

        assert_eq!(result2, Fraction::of(i(4), i(3)));

        let start3 = Fraction::of(i(3), i(6));
        let result3 = rule.apply(start3).first().unwrap().0.clone();

        assert_eq!(result3, Fraction::of(i(1), i(2)));
        

    }
}
