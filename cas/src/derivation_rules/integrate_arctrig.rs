use std::rc::Rc;

use crate::{
    argument::Argument,
    convenience_expressions::{arcsec, arcsin, arctan, i, sqrt},
    expressions::{product::product_of, AbsoluteValue, Exponent, Expression, Fraction, Integer},
};

use super::{helpers::is_constant, DerivationRule};

/**
* Integrates those fraction integrals
* into the arctrig functions.
* https://www.google.com/search?sca_esv=c75240d49f404294&sxsrf=ACQVn0_yMcGI4-3T8UdYJYSSEhKQWYaJxA:1710787551729&q=arc+trig+integrals&tbm=isch&source=lnms&sa=X&ved=2ahUKEwi28rmivP6EAxUIFFkFHQNCANoQ0pQJegQICRAB&biw=1975&bih=1140&dpr=1.75#imgrc=OHMp3AS1ATMVKM
*/
pub struct IntegrateArcTrig {}

impl DerivationRule for IntegrateArcTrig {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let integral = match input {
            Expression::Integral(ref i) => i,
            _ => return vec![],
        };

        let Expression::Fraction(f) = integral.integrand() else {
            return vec![];
        };

        let numerator = if !is_constant(&f.numerator(), &integral.relative_to()) {
            return vec![];
        } else {
            f.numerator()
        };

        let result: Expression = if let Expression::Sum(sum) = f.denominator() {
            let terms = sum.terms();
            if terms.len() != 2 {
                return vec![];
            }

            let (constant, not): (Vec<&Expression>, Vec<&Expression>) = terms
                .iter()
                .partition(|x| is_constant(x, &integral.relative_to()));

            if not.first().is_none() {
                return vec![];
            }
            if !not.len() == 1 {
                return vec![];
            }

            let a = *constant.first().unwrap();
            if not.first().unwrap() != &&Exponent::of(integral.relative_to(), Integer::of(2)) {
                return vec![];
            }

            product_of(&[
                numerator,
                Fraction::of(Integer::of(1), sqrt(a.clone())),
                arctan(Fraction::of(integral.relative_to(), sqrt(a.clone()))),
            ])
        } else if let Expression::Exponent(root) = f.denominator() {
            if root.power() != Fraction::of(i(1), i(2)) {
                return vec![];
            }
            let Expression::Sum(sum) = root.base() else {
                return vec![];
            };
            let terms = sum.terms();
            let a = if !terms
                .iter()
                .any(|t| is_constant(t, &integral.relative_to()))
            {
                return vec![];
            } else {
                terms
                    .iter()
                    .find(|t| is_constant(t, &integral.relative_to()))
                    .unwrap()
            };

            if terms.len() != 2 {
                return vec![];
            }

            product_of(&[
                numerator,
                arcsin(Fraction::of(integral.relative_to(), sqrt(a.clone()))),
            ])
        } else if let Expression::Product(prod) = f.denominator() {
            let factors = prod.factors();
            if !factors.len() == 2 {
                return vec![];
            }

            if !factors.contains(&integral.relative_to()) {
                return vec![];
            }

            let root = match factors.iter().find_map(|f| match f {
                Expression::Exponent(e) => {
                    if e.power() == Fraction::of(i(1), i(2)) {
                        Some(e)
                    } else {
                        None
                    }
                }
                _ => None,
            }) {
                Some(s) => s,
                _ => return vec![],
            };

            let Expression::Sum(sum) = root.base() else {
                return vec![];
            };
            let terms = sum.terms();

            let mut a: Option<Expression> = None;
            for term in terms {
                if is_constant(term, &integral.relative_to()) {
                    let Expression::Negation(n) = term else {
                        return vec![];
                    };
                    a = Some(n.child());
                } else {
                    let Expression::Exponent(e) = term else {
                        return vec![];
                    };
                    if e.base() != integral.relative_to() {
                        return vec![];
                    }
                }
            }

            if a.is_none() {
                return vec![];
            }
            let a_final = a.unwrap();

            product_of(&[
                numerator,
                Fraction::of(Integer::of(1), sqrt(a_final.clone())),
                arcsec(Fraction::of(
                    AbsoluteValue::of(integral.relative_to()),
                    sqrt(a_final.clone()),
                )),
            ])
        } else {
            return vec![];
        };

        vec![(
            result,
            Argument::new(String::from("Arctrig integration rule"), vec![input]),
        )]
    }
    fn name(&self) -> String {
        String::from("IntegralArctrig")
    }
}

#[cfg(test)]
mod tests {
    use crate::{
        convenience_expressions::{arctan, v},
        expressions::{sum::sum_of, Integral, Negation},
    };

    use super::*;

    #[test]
    fn test_1() {
        let rule = IntegrateArcTrig {};

        let start = Integral::of(
            Fraction::of(
                Integer::of(1),
                sqrt(sum_of(&[
                    Integer::of(4),
                    Negation::of(Exponent::of(v("x"), Integer::of(2))),
                ])),
            ),
            v("x"),
        );
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(
            result,
            product_of(&[i(1), arcsin(Fraction::of(v("x"), sqrt(i(4))))])
        );

        let start2 = Integral::of(
            Fraction::of(
                Integer::of(7),
                sum_of(&[Integer::of(2), Exponent::of(v("x"), Integer::of(2))]),
            ),
            v("x"),
        );
        let result2 = rule.apply(start2).first().unwrap().0.clone();

        assert_eq!(
            result2,
            product_of(&[
                i(7),
                Fraction::of(i(1), sqrt(i(2))),
                arctan(Fraction::of(v("x"), sqrt(i(2))))
            ])
        );

        let start3 = Integral::of(
            Fraction::of(
                v("a"),
                product_of(&[
                    v("x"),
                    sqrt(sum_of(&[Exponent::of(v("x"), i(2)), Negation::of(i(8))])),
                ]),
            ),
            v("x"),
        );
        let result3 = rule.apply(start3).first().unwrap().0.clone();

        assert_eq!(
            result3,
            product_of(&[
                v("a"),
                Fraction::of(i(1), sqrt(i(8))),
                arcsec(Fraction::of(AbsoluteValue::of(v("x")), sqrt(i(8))))
            ])
        );
    }
}
