use std::rc::Rc;

use petgraph::algo::FloatMeasure;

use crate::{argument::Argument, convenience_expressions::cot, expressions::{product::product_of, trig_expression::TrigFn, Expression, ExpressionPtr, Fraction, TrigExp}};

use super::DerivationRule;


/**
* sin(x)/cos(x) = tan(x)
* cos(x)/sin(x) = cot(x)
*/
pub struct TanIdentity {}

impl DerivationRule for TanIdentity {
    fn apply(&self, input: ExpressionPtr) -> Vec<(ExpressionPtr, Rc<Argument>)> {
        let frac = match input {
            Expression::Fraction(ref f) => f,
            _ => return vec![]
        };

        let num_factors = match frac.numerator() {
            Expression::Product(p) => p.factors().clone(),
            _ => vec![frac.numerator()]
        };

        let den_factors = match frac.denominator() {
            Expression::Product(p) => p.factors().clone(),
            _ => vec![frac.denominator()]
        };

        let trig_params = num_factors.iter().chain(&den_factors)
            .filter_map(|factor| {
                match factor {
                    Expression::Trig(t) => Some(t.exp()),
                    _ => None
                }
            });

        fn is(e: &Expression, trig: TrigFn, exp: &Expression) -> bool {
            match e {
                Expression::Trig(t) => t.operation == trig && t.exp() == *exp,
                _ => false
            }
        }

        let mut results = Vec::<Expression>::new();
        for param in trig_params {
            // Check for tan
            {
                let mut found_sin = false;
                let mut found_cos = false;
                let (num, sin): (Vec<Expression>, Vec<Expression>) = num_factors.iter().cloned()
                    .partition(|f| {
                        if is(f, TrigFn::Sin, &param) && !found_sin {
                            found_sin = true;
                            false
                        } else {
                            true
                        }
                    });
                let (den, cos): (Vec<Expression>, Vec<Expression>) = den_factors.iter().cloned()
                    .partition(|f| {
                        if is(f, TrigFn::Cos, &param) && !found_cos {
                            found_cos = true;
                            false
                        } else {
                            true
                        }
                    });
                if !sin.is_empty() && !cos.is_empty() {
                    results.push(product_of(&[
                        Fraction::of(
                            product_of(&num),
                            product_of(&den)
                        ), 
                        TrigExp::of(TrigFn::Tan, param.clone())
                    ]));
                }
            }
            // Check for cot 
            {
                let mut found_cos = false;
                let mut found_sin = false;
                let (num, cos): (Vec<Expression>, Vec<Expression>) = num_factors.iter().cloned()
                    .partition(|f| {
                        if is(f, TrigFn::Cos, &param) && !found_cos {
                            found_cos = true;
                            false
                        } else {
                            true
                        }
                    });
                let (den, sin): (Vec<Expression>, Vec<Expression>) = den_factors.iter().cloned()
                    .partition(|f| {
                        if is(f, TrigFn::Sin, &param) && !found_sin {
                            found_sin = true;
                            false
                        } else {
                            true
                        }
                    });
                if !cos.is_empty() && !sin.is_empty() {
                    results.push(product_of(&[
                        Fraction::of(
                            product_of(&num),
                            product_of(&den)
                        ), 
                        cot(param.clone())
                    ]));
                }
            }
        }


        results.into_iter().map(|exp| {
            (exp.clone(),
            Argument::new(String::from("Tan/Cot identitiy"), vec![input.clone()]))
        }).collect()
    }
}

#[cfg(test)]
mod tests {
    use crate::{convenience_expressions::{cos, cot, sin, tan, v}, expressions::Integer};

    use super::*;

    #[test]
    fn test_1() {
        let rule = TanIdentity {};

        let start = Fraction::of(
            product_of(&[sin(v("x")), sin(v("y"))]),
            cos(v("x"))
        );
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(result, product_of(&[
            Fraction::of(
                sin(v("y")),
                Integer::of(1)
            ),
            tan(v("x"))
        ]));

        let start1 = Fraction::of(
            cos(v("x")),
            product_of(&[sin(v("x")), sin(v("y"))])
        );
        let result1 = rule.apply(start1).first().unwrap().0.clone();

        assert_eq!(result1, product_of(&[
            Fraction::of(
                Integer::of(1),
                sin(v("y"))
            ),
            cot(v("x"))
        ]));
    }
}
