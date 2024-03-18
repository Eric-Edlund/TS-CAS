use std::rc::Rc;

use crate::{argument::Argument, derivation_rules::helpers::is_constant, expressions::{sum::sum_of, Exponent, Expression, Fraction, Integer}};

use super::DerivationRule;


/**
* Reverse of the power rule.
*/
pub struct IntegralPowerRule {}

impl DerivationRule for IntegralPowerRule {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let integral = match input {
            Expression::Integral(ref i) => i,
            _ => return vec![],
        };

        // This works only if the integrand is the change variable to some 
        // constant power.
        let (base, power) = match integral.integrand() {
            Expression::Exponent(e) => {
                if e.base() == integral.relative_to() 
                && is_constant(&e.power(), &integral.relative_to()) {
                    (e.base(), e.power())
                } else {
                    return vec![];
                }
            },
            exp => {
                if exp == integral.relative_to() {
                    (exp, Integer::of(1))
                } else {
                    return vec![];
                }
            }
        };

        vec![(
            Fraction::of(
                Exponent::of(
                    base, 
                    sum_of(&[power.clone(), Integer::of(1)])
                ),
                sum_of(&[power, Integer::of(1)])
            ),
            Argument::new(String::from("Reverse power rule"), vec![input])
        )]
    }
}

#[cfg(test)]
mod tests {
    use crate::{convenience_expressions::{i, power, v}, derivation_rules::DerivationRule, expressions::{sum::sum_of, Fraction, Integral}};

    use super::IntegralPowerRule;

    #[test]
    fn test_1() {
        let start = Integral::of(v("x"), v("x"));
        let rule = IntegralPowerRule {};
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(result, 
            Fraction::of( 
                power(v("x"), 
                    sum_of(&[i(1), i(1)])
                ),
                sum_of(&[i(1), i(1)])
            )
        );

        let start2 = Integral::of(power(v("x"), i(3)), v("x"));
        let result2 = rule.apply(start2).first().unwrap().0.clone();

        assert_eq!(result2, Fraction::of(
            power(v("x"), sum_of(&[i(3), i(1)])),
            sum_of(&[i(3), i(1)])
        ));
    }
}
