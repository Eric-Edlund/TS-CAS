use std::rc::Rc;

use crate::{argument::Argument, convenience_expressions::{i, sqrt}, expressions::{constant::Constant, product::product_of, ConstantExp, Expression, Fraction}};

use super::DerivationRule;


/**
* Pulls i out of square roots of negations.
* TODO: Could it also pull i out of roots in other bases?
*/
pub struct ImaginaryIdentity {}

impl DerivationRule for ImaginaryIdentity {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let exp = match input {
            Expression::Exponent(ref e) => e,
            _ => return vec![]
        };

        if exp.power() != Fraction::of(i(1), i(2)) {
            return vec![]
        }

        let Expression::Negation(n) = exp.base() 
        else {
            return vec![]
        };

        vec![(
            product_of(&[
                ConstantExp::of(Constant::Imaginary),
                sqrt(n.child())
            ]),
            Argument::new(String::from("Imagainary Identity"), vec![input])
        )]
    }
}

#[cfg(test)]
mod tests {
    use crate::{convenience_expressions::v, expressions::Negation};

    use super::*;

    #[test]
    fn test_1() {
        let rule = ImaginaryIdentity {};

        let start = sqrt(Negation::of(v("a")));
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(result, product_of(&[
            ConstantExp::of(Constant::Imaginary),
            sqrt(v("a"))
        ]));
    }
}
