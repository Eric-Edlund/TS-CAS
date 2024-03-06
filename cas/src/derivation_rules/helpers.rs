/*
* Helper functions for derivation rules.
*/

use std::{collections::LinkedList, iter::once};

use crate::expressions::{Expression, ExpressionPtr};

/**
* True if the given expression does not depend on any of the variables
* in the given delta expression.
* @param exp The expression being checked for constancy.
* @param relative The "dx" or "d whatever" change variable.
*/
pub fn is_constant(exp: &ExpressionPtr, delta: &ExpressionPtr) -> bool {
    let delta_vars: Vec<Expression> = dependent_variables(&delta);
    !children_rec(exp).chain(once(exp.clone())).any(|e|
        matches!(e, Expression::Variable(_)) && delta_vars.contains(&e)
    )
}

/**
* Gets all variables which determine the value of the expression,
* including the expression if it is a variable.
*/
fn dependent_variables(exp: &ExpressionPtr) -> Vec<ExpressionPtr> {
    if matches!(exp, Expression::Variable(_)) {
        return once(exp.clone()).collect();
    }
    children_rec(exp).filter(|e| matches!(e, Expression::Variable(_))).collect()
}

/**
* Gets all children of given expression recursively.
*/
pub fn children_rec(exp: &ExpressionPtr) -> impl Iterator<Item = ExpressionPtr> {
    let mut children = Vec::<ExpressionPtr>::new();
    let mut queue = LinkedList::<ExpressionPtr>::new();

    queue.extend(children_of(&exp));

    while !queue.is_empty() {
        let child = queue.pop_front().unwrap();
        children.push(child.clone());
        queue.extend(children_of(&child));
    }

    children.into_iter()
}

/**
* Grabs immediate children of given expression
*/
fn children_of<'a>(exp: &'a ExpressionPtr) -> Vec<ExpressionPtr> {
    match exp {
        Expression::Integer(_) => vec![],
        Expression::Product(p) => p.factors().clone(),
        Expression::Sum(s) => s.terms().clone(),
        Expression::Exponent(e) => [e.base(), e.power()].into_iter().collect(),
        Expression::Integral(i) => [i.integrand(), i.relative_to()].into_iter().collect(),
        Expression::Negation(n) => [n.child()].into_iter().collect(),
        Expression::Variable(_) => vec![],
        Expression::Fraction(f) => [f.numerator(), f.denominator()].into_iter().collect(),
        Expression::Logarithm(l) => [l.base(), l.exp()].into_iter().collect(),
        Expression::Derivative(d) => [d.exp(), d.relative_to()].into_iter().collect(),
    }
}


#[cfg(test)]
mod tests {
    use crate::{convenience_expressions::{i, v}, expressions::{product::product_of, sum::sum_of, Integer, Variable}};

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
}
