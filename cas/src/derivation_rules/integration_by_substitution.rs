use std::collections::HashSet;
use std::rc::Rc;

use petgraph::visit::IntoNodeReferences;
use serde_json::json;

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

use super::helpers::{
    children_rec_no_subs, dependent_variables, factors_in, separate_constant_factors,
    substitute_with, unique_child_leaves,
};
use super::DerivationRule;

/// U-substitution
pub struct IntegrateBySubstitution {}

impl DerivationRule for IntegrateBySubstitution {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let integral = match input {
            Expression::Integral(ref i) => i,
            _ => return vec![],
        };

        let integrand = integral.integrand();

        let sub_expressions = children_rec_no_subs(&integral.integrand())
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
                Expression::Integer(_) => vec![],
                _ => vec![exp],
            })
            // Don't make identity substitutions
            .filter(|exp| exp != &integral.variable())
            .filter(|exp| !matches!(exp, Expression::Substitution(_)))
            .filter(|exp| !is_one(exp));

        let mut substitutions = Vec::<(Expression, u32)>::new();

        'u_for: for u_exp in sub_expressions {
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
                    continue;
                }
            };

            // Search for du
            let mut found = false;
            substituted = product_of(
                &factors_in(&substituted)
                    .into_iter()
                    .filter_map(|exp| {
                        // Handle constant multiple differences between du and the integrand
                        let (exp_constants, exp_not) =
                            separate_constant_factors(&exp, &integral.variable());

                        if exp_not != du_not {
                            return Some(exp);
                        }

                        if found {
                            return Some(exp);
                        }
                        found = true;

                        if is_one(&exp_constants) && is_one(&du_constants) {
                            None
                        } else if is_one(&du_constants) {
                            Some(exp_constants)
                        } else {
                            Some(Fraction::of(exp_constants, du_constants.clone()))
                        }
                    })
                    .collect::<Vec<_>>(),
            );

            if !found {
                continue 'u_for;
            }

            // Valid substitutions leave none of the original variables
            let original_variables = dependent_variables(&integral.variable());
            let new_variables = unique_child_leaves(&substituted).collect::<HashSet<_>>();
            for var in &original_variables {
                if new_variables.contains(var) {
                    continue 'u_for;
                }
            }

            let Expression::Substitution(s) = u_sub.clone() else {
                unreachable!()
            };
            substitutions.push((Integral::of(substituted, u_sub), s.sub_id()));
        }

        substitutions
            .into_iter()
            .map(|(exp, sub_id)| {
                let mut arg = Argument::new_raw(
                    String::from("U-Substitution"),
                    vec![input.clone()],
                    self.name(),
                );
                arg.set_extra_data(json!({
                    "substitution_id": sub_id
                }));
                (exp, arg.into())
            })
            .collect()
    }

    fn name(&self) -> String {
        "IntegrationBySubstitution".into()
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
        derivation_rules::helpers::expect_no_result,
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
        let results = rule.apply(start);
        assert_eq!(results.len(), 1);

        let result = results.first().unwrap().0.clone();

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

    #[test]
    fn false_positive() {
        let rule = IntegrateBySubstitution {};

        expect_no_result(
            &rule,
            Integral::of(Substitution::of(i(1)), Substitution::of(i(2))),
        );
        let sub = Substitution::of(i(1));
        expect_no_result(&rule, Integral::of(sub.clone(), sub));
        expect_no_result(
            &rule,
            Integral::of(Substitution::of(v("x")), Substitution::of(v("x"))),
        );
    }
}
