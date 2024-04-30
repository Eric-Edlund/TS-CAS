/*
* Helper functions for derivation rules.
*/

use std::{collections::LinkedList, iter::once};

use crate::convenience_expressions::i;
use crate::convenience_expressions::sum_of_iter;
use crate::expressions::product::product_of;
use crate::expressions::product::product_of_iter;
use crate::expressions::AbsoluteValue;
use crate::expressions::Derivative;
use crate::expressions::Exponent;
use crate::expressions::Integer;
use crate::expressions::{Expression, Fraction, Integral, Logarithm, Negation, TrigExp};

use super::DerivationRule;

/**
* True if the given expression does not depend on any of the variables
* in the given delta expression.
* @param exp The expression being checked for constancy.
* @param relative The "dx" or "d whatever" change variable.
*/
pub fn is_constant(exp: &Expression, delta: &Expression) -> bool {
    let delta_vars: Vec<Expression> = dependent_variables(delta);
    !children_rec(exp)
        .chain(once(exp.clone()))
        .any(|e| matches!(e, Expression::Variable(_)) && delta_vars.contains(&e))
}

/**
* Gets all variables which determine the value of the expression,
* including the expression if it is a variable.
*/
pub fn dependent_variables(exp: &Expression) -> Vec<Expression> {
    if matches!(exp, Expression::Variable(_)) {
        return once(exp.clone()).collect();
    }
    children_rec(exp)
        .filter(|e| matches!(e, Expression::Variable(_)))
        .collect()
}

/**
* Gets all children of given expression recursively.
* This includes branches and leafs. Does not include the
* given expression.
*/
pub fn children_rec(exp: &Expression) -> impl Iterator<Item = Expression> {
    let mut children = Vec::<Expression>::new();
    let mut queue = LinkedList::<Expression>::new();

    queue.extend(children_of(exp));

    while !queue.is_empty() {
        let child = queue.pop_front().unwrap();
        children.push(child.clone());
        queue.extend(children_of(&child));
    }

    children.into_iter()
}

/// Lists all the factors in the given expression.
/// Will search inside products and fractions. If it's a fraction,
/// each factor of the denominator is pulled out as a separate 1/x.
pub fn factors_in(exp: &Expression) -> Vec<Expression> {
    match exp {
        Expression::Product(p) => p.factors().clone(),
        Expression::Fraction(f) => {
            let mut facts = factors_in(&f.numerator());
            facts.extend(
                factors_in(&f.denominator())
                    .into_iter()
                    .map(|exp| Fraction::of(i(1), exp)),
            );
            facts
        }
        _ => vec![exp.clone()],
    }
}

/// Removes the given factor from the expression once. If the expression does
/// not contain the expression, returns none.
pub fn without_factor(exp: &Expression, factor: &Expression) -> Option<Expression> {
    // Pull apart fractions, products, etc.
    // Fraction denominator terms -> 1/part

    let mut factors = factors_in(exp);

    for i in 0..factors.len() {
        if &factors[i] == factor {
            factors.remove(i);
            return Some(product_of(&factors));
        }
    }

    None
}

/// Checks if the given expression is equal to the integer 1
pub fn is_one(exp: &Expression) -> bool {
    match exp {
        Expression::Integer(i) => i.value() == 1,
        _ => false,
    }
}

/// Separates the given expression into a product of factors constant relative to
/// the given variable and a product of factors dependent on the variable.
/// Either expression will be set to 1 if there was no respective part.
pub fn separate_constant_factors(
    exp: &Expression,
    variable: &Expression,
) -> (Expression, Expression) {
    match exp {
        Expression::Product(p) => {
            let factors = p.factors();
            let (constant, not): (Vec<&Expression>, Vec<&Expression>) =
                factors.iter().partition(|e| is_constant(e, variable));

            (
                product_of_iter(&mut constant.into_iter().cloned()),
                product_of_iter(&mut not.into_iter().cloned()),
            )
        }
        Expression::Fraction(f) => {
            let (const_num, var_num) = separate_constant_factors(&f.numerator(), variable);
            let (const_dom, var_dom) = separate_constant_factors(&f.denominator(), variable);

            (
                if is_one(&const_num) && is_one(&const_dom) {
                    Integer::of(1)
                } else if is_one(&const_dom) {
                    const_num
                } else {
                    Fraction::of(const_num, const_dom)
                },
                if is_one(&var_num) && is_one(&var_dom) {
                    Integer::of(1)
                } else if is_one(&var_dom) {
                    var_num
                } else {
                    Fraction::of(var_num, var_dom)
                },
            )
        }
        e => {
            if is_constant(e, variable) {
                (e.clone(), Integer::of(1))
            } else {
                (Integer::of(1), e.clone())
            }
        }
    }
}

/**
* Grabs immediate children of given expression
*/
pub fn children_of(exp: &Expression) -> Vec<Expression> {
    match exp {
        Expression::Integer(_) => vec![],
        Expression::ConstantExp(_) => vec![],
        Expression::Product(p) => p.factors().clone(),
        Expression::Sum(s) => s.terms().clone(),
        Expression::Exponent(e) => [e.base(), e.power()].into_iter().collect(),
        Expression::Integral(i) => [i.integrand(), i.variable()].into_iter().collect(),
        Expression::Negation(n) => [n.child()].into_iter().collect(),
        Expression::Variable(_) => vec![],
        Expression::Fraction(f) => [f.numerator(), f.denominator()].into_iter().collect(),
        Expression::Logarithm(l) => [l.base(), l.exp()].into_iter().collect(),
        Expression::Derivative(d) => [d.exp(), d.relative_to()].into_iter().collect(),
        Expression::Trig(t) => [t.exp()].into_iter().collect(),
        Expression::AbsoluteValue(a) => [a.exp()].into_iter().collect(),
        Expression::Substitution(s) => vec![s.exp()],
        Expression::Undefined => vec![],
    }
}

/// Searches the given expression, replacing all children which match the
/// predicate with the given replacement. Traverses the tree top down.
/// Does not traverse into subtituted expressions.
pub fn substitute<'a, P>(
    exp: &'a Expression,
    replacement: &'a Expression,
    predicate: &P,
) -> Expression
where
    P: Fn(&Expression) -> bool,
{
    if predicate(exp) {
        return replacement.clone();
    }

    let sub = |exp: &Expression| substitute(exp, replacement, predicate);

    match exp {
        Expression::Integer(_) => exp.clone(),
        Expression::ConstantExp(_) => exp.clone(),
        Expression::Variable(_) => exp.clone(),
        Expression::Substitution(_) => exp.clone(),
        Expression::Product(p) => product_of_iter(&mut p.factors().iter().map(sub)),
        Expression::Sum(s) => sum_of_iter(&mut s.terms().clone().iter().map(sub)),
        Expression::Exponent(e) => Exponent::of(sub(&e.base()), sub(&e.power())),
        Expression::Integral(i) => Integral::of(sub(&i.integrand()), sub(&i.variable())),
        Expression::Negation(n) => Negation::of(sub(&n.child())),
        Expression::Fraction(f) => Fraction::of(sub(&f.numerator()), sub(&f.denominator())),
        Expression::Logarithm(l) => Logarithm::of(sub(&l.base()), sub(&l.exp())),
        Expression::Derivative(d) => Derivative::of(sub(&d.exp()), sub(&d.relative_to())),
        Expression::Trig(t) => TrigExp::of(t.operation, sub(&t.exp())),
        Expression::AbsoluteValue(a) => AbsoluteValue::of(sub(&a.exp())),
        Expression::Undefined => exp.clone(),
    }
}

/// Asserts that the given rule derives expected from start.
pub fn expect_result(rule: &dyn DerivationRule, start: Expression, expected: Expression) {
    let result = rule.apply(start).first().unwrap().0.clone();
    assert_eq!(result, expected);
}

/// Asserts that the given rule derives nothing from start.
pub fn expect_no_result(rule: &dyn DerivationRule, start: Expression) {
    assert_eq!(None, rule.apply(start).first());
}

#[cfg(test)]
mod tests {
    use crate::{
        convenience_expressions::{i, v},
        expressions::{
            product::product_of, sum::sum_of, trig_expression::TrigFn, Integer, Variable,
        },
    };

    use super::*;

    #[test]
    fn expression_variables() {
        let vars = dependent_variables(&sum_of(&[Integer::of(1), Variable::of("x")]));
        assert!(vars[0] == Variable::of("x"));
    }

    #[test]
    fn constant() {
        let delta = sum_of(&[v("a"), i(1)]);
        let delta2 = sum_of(&[v("x")]);
        let const_exp = product_of(&[v("x"), i(1)]);
        let const_exp2 = product_of(&[v("y")]);
        let var_exp = product_of(&[v("a"), i(2)]);
        let var_exp2 = product_of(&[v("a"), v("b")]);

        assert!(is_constant(&const_exp, &delta));
        assert!(!is_constant(&var_exp, &delta));
        assert!(!is_constant(&var_exp2, &delta));
        assert!(is_constant(&const_exp2, &delta2));
    }

    #[test]
    fn substitute_test() {
        let first = Integral::of(
            product_of(&[
                TrigExp::of(TrigFn::Sin, v("x")),
                TrigExp::of(TrigFn::Cos, v("x")),
            ]),
            v("x"),
        );

        let result = substitute(&first, &v("a"), &|exp| {
            *exp == TrigExp::of(TrigFn::Sin, v("x"))
        });

        assert_eq!(
            result,
            Integral::of(
                product_of(&[v("a"), TrigExp::of(TrigFn::Cos, v("x")),]),
                v("x"),
            )
        )
    }
}
