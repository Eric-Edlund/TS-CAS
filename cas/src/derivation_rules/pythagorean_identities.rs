use std::{collections::HashSet, rc::Rc, sync::Arc};

use crate::{
    argument::Argument,
    convenience_expressions::sum_of_iter,
    expressions::{trig_expression::TrigFn, Exponent, Expression, Integer, TrigExp},
};

use super::DerivationRule;

/**
* sin^2(x) + cos^2(x) = 1
* 1 + cot^2(x) = csc^2(x)
* 1 + tan^2(x) = sec^2(x)
*/
pub struct Pythagoras {}

fn unwrap_squared_trig(exp: &Expression) -> Option<Arc<TrigExp>> {
    match exp {
        Expression::Exponent(ref e) => {
            if e.power() == Integer::of(2) {
                match e.base() {
                    Expression::Trig(t) => Some(t),
                    _ => None,
                }
            } else {
                None
            }
        }
        _ => None,
    }
}

fn is_one(exp: &&Expression) -> bool {
    match exp {
        Expression::Integer(i) => i.value() == 1,
        _ => false,
    }
}

impl DerivationRule for Pythagoras {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let sum = match input {
            Expression::Sum(ref s) => s,
            _ => return vec![],
        };

        let squared_trig_terms = sum
            .terms()
            .iter()
            .filter_map(unwrap_squared_trig)
            .collect::<HashSet<_>>();
        // List of expressions acted on by trig expressions
        let trig_params = squared_trig_terms
            .iter()
            .map(|x| x.exp())
            .collect::<HashSet<_>>();
        let ones = sum.terms().iter().filter(is_one).count();

        let has_term = |op: TrigFn, exp: &Expression| {
            squared_trig_terms
                .iter()
                .any(|t| t.operation == op && &t.exp() == exp)
        };

        // Check for each known combination
        let mut results = Vec::<Expression>::new();

        for exp in &trig_params {
            if has_term(TrigFn::Sin, exp) && has_term(TrigFn::Cos, exp) {
                let mut found_sin = false;
                let mut found_cos = false;
                results.push(sum_of_iter(
                    &mut sum
                        .terms()
                        .iter()
                        .filter(|term| {
                            let trig = match unwrap_squared_trig(term) {
                                Some(t) => t,
                                None => return true,
                            };
                            if trig.exp() == *exp {
                                if trig.operation == TrigFn::Sin && !found_sin {
                                    found_sin = true;
                                    false
                                } else if trig.operation == TrigFn::Cos && !found_cos {
                                    found_cos = true;
                                    false
                                } else {
                                    true
                                }
                            } else {
                                true
                            }
                        })
                        .chain(&[Integer::of(1)])
                        .cloned(),
                ))
            }
            if has_term(TrigFn::Cot, exp) && ones > 0 {
                let mut found_cot = false;
                let mut found_one = false;
                results.push(sum_of_iter(
                    &mut sum
                        .terms()
                        .iter()
                        .filter(|term| {
                            let trig = match unwrap_squared_trig(term) {
                                Some(t) => t,
                                None => {
                                    if **term == Integer::of(1) && !found_one {
                                        found_one = true;
                                        return false;
                                    }
                                    return true;
                                }
                            };
                            if trig.exp() == *exp {
                                if trig.operation == TrigFn::Cot && !found_cot {
                                    found_cot = true;
                                    false
                                } else {
                                    true
                                }
                            } else {
                                true
                            }
                        })
                        .chain(&[Exponent::of(
                            TrigExp::of(TrigFn::Csc, exp.clone()),
                            Integer::of(2),
                        )])
                        .cloned(),
                ))
            }
            if has_term(TrigFn::Tan, exp) && ones > 0 {
                let mut found_tan = false;
                let mut found_one = false;
                results.push(sum_of_iter(
                    &mut sum
                        .terms()
                        .iter()
                        .filter(|term| {
                            let trig = match unwrap_squared_trig(term) {
                                Some(t) => t,
                                None => {
                                    if **term == Integer::of(1) && !found_one {
                                        found_one = true;
                                        return false;
                                    }
                                    return true;
                                }
                            };
                            if trig.exp() == *exp {
                                if trig.operation == TrigFn::Tan && !found_tan {
                                    found_tan = true;
                                    false
                                } else {
                                    true
                                }
                            } else {
                                true
                            }
                        })
                        .chain(&[Exponent::of(
                            TrigExp::of(TrigFn::Sec, exp.clone()),
                            Integer::of(2),
                        )])
                        .cloned(),
                ))
            }
        }

        results
            .into_iter()
            .map(|equiv| {
                (
                    equiv,
                    Argument::new(String::from("Pythagorean identity"), vec![input.clone()]),
                )
            })
            .collect()
    }

    fn name(&self) -> String {
        String::from("PythagoreanIdentities")
    }
}

#[cfg(test)]
mod tests {
    use crate::{
        convenience_expressions::v,
        expressions::{sum::sum_of, Exponent},
    };

    use super::*;

    #[test]
    fn test_1() {
        let rule = Pythagoras {};

        let start = sum_of(&[
            Exponent::of(TrigExp::of(TrigFn::Sin, v("x")), Integer::of(2)),
            Exponent::of(TrigExp::of(TrigFn::Cos, v("x")), Integer::of(2)),
        ]);
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(result, Integer::of(1));

        let start2 = sum_of(&[
            Exponent::of(TrigExp::of(TrigFn::Sin, v("x")), Integer::of(2)),
            Exponent::of(TrigExp::of(TrigFn::Cos, v("x")), Integer::of(2)),
            Exponent::of(TrigExp::of(TrigFn::Sin, v("x")), Integer::of(2)),
        ]);
        let result2 = rule.apply(start2).first().unwrap().0.clone();

        assert_eq!(
            result2,
            sum_of(&[
                Exponent::of(TrigExp::of(TrigFn::Sin, v("x")), Integer::of(2)),
                Integer::of(1)
            ])
        );

        let start3 = sum_of(&[
            Exponent::of(TrigExp::of(TrigFn::Cot, v("x")), Integer::of(2)),
            Integer::of(1),
        ]);
        let result3 = rule.apply(start3).first().unwrap().0.clone();

        assert_eq!(
            result3,
            Exponent::of(TrigExp::of(TrigFn::Csc, v("x")), Integer::of(2))
        );
    }
}
