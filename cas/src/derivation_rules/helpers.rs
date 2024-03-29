/*
* Helper functions for derivation rules.
*/

use std::{collections::LinkedList, iter::once};

use crate::{convenience_expressions::sum_of_iter, expressions::{product::product_of_iter, Exponent, Expression, Integral, Negation}};

/**
* True if the given expression does not depend on any of the variables
* in the given delta expression.
* @param exp The expression being checked for constancy.
* @param relative The "dx" or "d whatever" change variable.
*/
pub fn is_constant(exp: &Expression, delta: &Expression) -> bool {
    let delta_vars: Vec<Expression> = dependent_variables(&delta);
    !children_rec(exp).chain(once(exp.clone())).any(|e|
        matches!(e, Expression::Variable(_)) && delta_vars.contains(&e)
    )
}

/**
* Gets all variables which determine the value of the expression,
* including the expression if it is a variable.
*/
pub fn dependent_variables(exp: &Expression) -> Vec<Expression> {
    if matches!(exp, Expression::Variable(_)) {
        return once(exp.clone()).collect();
    }
    children_rec(exp).filter(|e| matches!(e, Expression::Variable(_))).collect()
}

/**
* Gets all children of given expression recursively.
* This includes branches and leafs. Does not include the
* given expression.
*/
pub fn children_rec(exp: &Expression) -> impl Iterator<Item = Expression> {
    let mut children = Vec::<Expression>::new();
    let mut queue = LinkedList::<Expression>::new();

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
pub fn children_of<'a>(exp: &'a Expression) -> Vec<Expression> {
    match exp {
        Expression::Integer(_) => vec![],
        Expression::ConstantExp(_) => vec![],
        Expression::Product(p) => p.factors().clone(),
        Expression::Sum(s) => s.terms().clone(),
        Expression::Exponent(e) => [e.base(), e.power()].into_iter().collect(),
        Expression::Integral(i) => [i.integrand(), i.relative_to()].into_iter().collect(),
        Expression::Negation(n) => [n.child()].into_iter().collect(),
        Expression::Variable(_) => vec![],
        Expression::Fraction(f) => [f.numerator(), f.denominator()].into_iter().collect(),
        Expression::Logarithm(l) => [l.base(), l.exp()].into_iter().collect(),
        Expression::Derivative(d) => [d.exp(), d.relative_to()].into_iter().collect(),
        Expression::Trig(t) => [t.exp()].into_iter().collect(),
        Expression::AbsoluteValue(a) => [a.exp()].into_iter().collect(),
    }
}

/// Substitutes all children in exp equal to this with with.
/// Returns the substituted expression and the number of substitutions
/// made.
pub fn substitute_rec(exp: &Expression, this: &Expression, with: &Expression) -> impl Iterator<Item = Expression> {
    let mut children = Vec::<Expression>::new();
    let mut queue = LinkedList::<Expression>::new();

    queue.extend(children_of(&exp));

    while !queue.is_empty() {
        let child = queue.pop_front().unwrap();
        children.push(child.clone());
        queue.extend(children_of(&child));
    }

    children.into_iter()
}

fn substitute<'a>(exp: &'a Expression, this: &Expression, with: &Expression) -> Expression {
    let mut count = 0;
    let result: Expression = match exp {
        Expression::Integer(_) => {
            if exp == this {
                count += 1;
                with.clone()
            } else {
                exp.clone()
            }
        },
        Expression::ConstantExp(_) => {
            if exp == this {
                count += 1;
                with.clone()
            } else {
                exp.clone()
            }
        },
        Expression::Product(p) => {
            product_of_iter(&mut p.factors().clone().into_iter()
                .map(|exp| {
                    if exp == *this {
                        count += 1;
                        with.clone()
                    } else {
                        exp
                    }
                }))
        },
        Expression::Sum(s) => {
            sum_of_iter(&mut s.terms().clone().into_iter()
                .map(|exp| {
                    if exp == *this {
                        count += 1;
                        with.clone()
                    } else {
                        exp
                    }
                }))
        },
        Expression::Exponent(e) => {
            let mut result: Expression = exp.clone();
            if e.base() == *this {
                count += 1;
                result = Exponent::of(with.clone(), e.power());
            }
            if e.power() == *this {
                count += 1;
                result = Exponent::of(e.base(), with.clone());
            }
            result
        },
        Expression::Integral(i) => {
            let mut result: Expression = exp.clone();
            if i.integrand() == *this {
                count += 1;
                result = Integral::of(with.clone(), i.relative_to());
            }
            if i.relative_to() == *this {
                count += 1;
                result = Integral::of(i.integrand(), with.clone());
            }
            result
        },
        Expression::Negation(n) => {
            let mut result: Expression = exp.clone();
            if n.child() == *this {
                count += 1;
                result = Negation::of(with.clone());
            }
            result
        },
        Expression::Variable(_) => {
            if exp == *this {
                with.clone()
            } else {
                exp.clone()
            }
        },
        Expression::Fraction(f) => {
            let mut result: Expression = exp.clone();
            if f.numerator() == 
            [f.numerator(), f.denominator()].into_iter().collect()
        },
        Expression::Logarithm(l) => [l.base(), l.exp()].into_iter().collect(),
        Expression::Derivative(d) => [d.exp(), d.relative_to()].into_iter().collect(),
        Expression::Trig(t) => [t.exp()].into_iter().collect(),
        Expression::AbsoluteValue(a) => [a.exp()].into_iter().collect(),
    };

    (result, count)
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
