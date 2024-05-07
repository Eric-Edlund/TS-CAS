use std::rc::Rc;

use petgraph::visit::IntoNodeReferences;

use crate::derivation_rules::associative_property;
use crate::derivation_rules::helpers::is_one;
use crate::deriver::Deriver;
use crate::expressions::derivative::Derivative;
use crate::expressions::product::product_of;
use crate::expressions::{Exponent, Fraction, Integer};

use crate::EvaluateFirstProfile;
use crate::{
    argument::Argument,
    derivation_rules::helpers::children_rec,
    expressions::{substitution::Substitution, Expression, Integral},
    graph::Graph,
    graph_traversal::expression_complexity_cmp,
};

use super::helpers::{separate_constant_factors, substitute_with};
use super::{helpers::without_factor, DerivationRule};

/// U-substitution
pub struct IntegrateBySubstitution {}

impl DerivationRule for IntegrateBySubstitution {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let integral = match input {
            Expression::Integral(ref i) => i,
            _ => return vec![],
        };

        let integrand = integral.integrand();

        let sub_expressions = children_rec(&integral.integrand())
            // Consider x^2 as a possible substitution for x^4
            .flat_map(|exp| match exp {
                Expression::Exponent(ref e) => {
                    let Expression::Integer(i) = e.power() else {
                        return vec![exp];
                    };
                    // TODO: Find more factors?
                    if i.value() % 2 == 0 {
                        vec![
                            exp.clone(),
                            Exponent::of(e.base(), Integer::of(i.value() / 2)),
                        ]
                    } else {
                        vec![exp]
                    }
                }
                _ => vec![exp],
            });

        let mut substitutions = Vec::<Expression>::new();

        for u_exp in sub_expressions {
            let u_sub = Substitution::of(u_exp.clone());

            // Search the integrand for u
            let mut substituted = substitute_with(&integrand, &|exp| {
                if exp == &u_exp {
                    return Some(u_sub.clone());
                }

                // Handle x^2 with x^4
                match exp {
                    Expression::Exponent(ref e) => {
                        let Expression::Integer(i) = e.power() else {
                            return (*exp == u_exp).then(|| u_sub.clone());
                        };
                        if i.value() % 2 == 0
                            && u_exp == Exponent::of(e.base(), Integer::of(i.value() / 2))
                        {
                            Some(Exponent::of(u_sub.clone(), Integer::of(i.value() / 2)))
                        } else {
                            None
                        }
                    }
                    _ => None,
                }
            });

            let (du_constants, du_not) = match simplest_derivative(&u_exp, &integral.variable()) {
                Some(e) => separate_constant_factors(&e, &u_exp),
                None => {
                    println!("No derivative found");
                    continue;
                }
            };
            let du_sub = Substitution::of(du_not.clone());

            // Search for du
            substituted = substitute_with(&substituted, &|exp| {
                // Handle constant multiple differences between du and the integrand
                let (exp_constants, exp_not) = separate_constant_factors(exp, &integral.variable());

                if exp_not != du_not {
                    return None;
                }
                let coefficient = if is_one(&exp_constants) && is_one(&du_constants) {
                    None
                } else if is_one(&du_constants) {
                    Some(exp_constants)
                } else {
                    Some(Fraction::of(exp_constants, du_constants.clone()))
                };

                if let Some(coefficient) = coefficient {
                    Some(product_of(&[coefficient, du_sub.clone()]))
                } else {
                    Some(product_of(&[du_sub.clone()]))
                }
            });

            let associative_property = associative_property::AssociativeProperty {};
            substituted = associative_property
                .apply(substituted.clone())
                .into_iter()
                .map(|t| t.0)
                .nth(0)
                .unwrap_or(substituted);

            if let Some(new_integrand) = without_factor(&substituted, &du_sub) {
                substitutions.push(Integral::of(new_integrand, u_sub));
            }
        }

        substitutions
            .into_iter()
            .map(|exp| {
                (
                    exp,
                    Argument::new(
                        String::from("U-substitution"),
                        vec![input.clone()],
                        self.name(),
                    ),
                )
            })
            .collect()
    }

    fn name(&self) -> String {
        "u-sub".into()
    }
}

/// Evaluates the derivative, returns the simplest equivalent
/// which doesn't include derivatives of the given variable,
/// or None if the derivative couldn't be solved.
fn simplest_derivative(exp: &Expression, variable: &Expression) -> Option<Expression> {
    let mut graph = Graph::new();
    graph.add_node(Derivative::of(exp.clone(), variable.clone()));
    let mut deriver = Deriver::new(graph, EvaluateFirstProfile::new(), None, None);
    deriver.expand_to_constraint(10, 100);

    deriver
        .node_references()
        .map(|x| x.1.clone())
        .filter(|x| {
            children_rec(x)
                .chain([x.clone()])
                .all(|e| !matches!(e, Expression::Derivative(_)))
        })
        .min_by(expression_complexity_cmp)
}

#[cfg(test)]
mod tests {
    use crate::{
        convenience_expressions::{i, v},
        expressions::{product::product_of, trig_expression::TrigFn, Integral, TrigExp},
    };

    use super::*;

    #[test]
    fn find_simplest_derivative_test() {
        assert_eq!(Some(i(1)), simplest_derivative(&v("x"), &v("x")));
    }

    #[test]
    fn test_1() {
        let rule = IntegrateBySubstitution {};

        let start = Integral::of(
            product_of(&[
                TrigExp::of(TrigFn::Sin, v("x")),
                TrigExp::of(TrigFn::Cos, v("x")),
            ]),
            v("x"),
        );
        let result = rule.apply(start).first().unwrap().0.clone();

        // We have to reuse the substitution from the result to get
        // referential equality because flywheel.
        println!("{:?}", result);
        let sub = children_rec(&result)
            .chain(vec![result.clone()])
            .find(|exp| matches!(exp, Expression::Substitution(_)))
            .unwrap();
        let typed_sub = match &sub {
            Expression::Substitution(s) => s,
            _ => unreachable!(),
        };

        assert_eq!(result, Integral::of(sub.clone(), sub.clone()));
        assert_eq!(typed_sub.exp(), TrigExp::of(TrigFn::Sin, v("x")));
    }
}
