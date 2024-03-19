#![allow(dead_code)]
use std::cmp::Ordering;

use crate::{derivation_rules::helpers::dependent_variables, expressions::{product::product_of, trig_expression::TrigFn, AbsoluteValue, Exponent, Expression, Fraction, Integer, Product, Sum, TrigExp, Variable}};

pub fn product(f: Expression, f1: Expression) -> Expression {
    Product::of(&[f, f1]).unwrap()
}

pub fn sum(t: Expression, t1: Expression) -> Expression {
    Sum::of(&[t, t1]).unwrap()
}

pub fn sum_of_iter(terms: &mut dyn Iterator<Item = Expression>) -> Expression {
    let terms = terms.collect::<Vec<Expression>>();
    if terms.len() == 1 {
        return terms[0].clone();
    }
    Sum::of(&terms).unwrap()
}


pub fn power(b: Expression, p: Expression) -> Expression {
    Exponent::of(b, p)
}

pub fn i(value: u32) -> Expression {
    Integer::of(value)
}

pub fn v(symbol: &str) -> Expression {
    Variable::of(symbol)
}

pub fn sin(exp: Expression) -> Expression {
    TrigExp::of(TrigFn::Sin, exp)
}
pub fn cos(exp: Expression) -> Expression {
    TrigExp::of(TrigFn::Cos, exp)
}
pub fn tan(exp: Expression) -> Expression {
    TrigExp::of(TrigFn::Tan, exp)
}
pub fn cot(exp: Expression) -> Expression {
    TrigExp::of(TrigFn::Cot, exp)
}
pub fn csc(exp: Expression) -> Expression {
    TrigExp::of(TrigFn::Csc, exp)
}
pub fn sec(exp: Expression) -> Expression {
    TrigExp::of(TrigFn::Sec, exp)
}
pub fn arcsin(exp: Expression) -> Expression {
    TrigExp::of(TrigFn::ArcSin, exp)
}
pub fn arccos(exp: Expression) -> Expression {
    TrigExp::of(TrigFn::ArcCos, exp)
}
pub fn arctan(exp: Expression) -> Expression {
    TrigExp::of(TrigFn::ArcTan, exp)
}
pub fn arccot(exp: Expression) -> Expression {
    TrigExp::of(TrigFn::ArcCot, exp)
}
pub fn arccsc(exp: Expression) -> Expression {
    TrigExp::of(TrigFn::ArcCsc, exp)
}
pub fn arcsec(exp: Expression) -> Expression {
    TrigExp::of(TrigFn::ArcSec, exp)
}
pub fn sqrt(exp: Expression) -> Expression {
    Exponent::of(exp, Fraction::of(i(1), i(2)))
}
pub fn abs(exp: Expression) -> Expression {
    AbsoluteValue::of(exp)
}

/**
* Returns a version of the expression with the products ordered
* nicely. This is stuff like 7a instead of a7.
* Not recursive.
*/
pub fn ordered(exp: Expression) -> Expression {
    match exp {
        Expression::Product(p) => {
            let mut factors = p.factors().clone();
            factors.sort_by(factor_ord);
            product_of(&factors)
        },
        _ => exp
    }
}

fn factor_ord(a: &Expression, b: &Expression) -> Ordering {
    let vars_a = dependent_variables(a);
    let vars_b = dependent_variables(b);
    if vars_a.is_empty() && !vars_b.is_empty() {
        return Ordering::Less;
    }
    if vars_b.is_empty() && !vars_a.is_empty() {
        return Ordering::Greater;
    }
    if vars_a.is_empty() && vars_b.is_empty() {
        return Ordering::Equal;
    }

    let min_a = vars_a.iter()
        .map(|e| match e {
            Expression::Variable(v) => v.symbol(),
            _ => panic!()
        })
        .min_by(|a, b| a.cmp(b))
        .unwrap();

    let min_b = vars_b.iter()
        .map(|e| match e {
            Expression::Variable(v) => v.symbol(),
            _ => panic!()
        })
        .min_by(|a, b| a.cmp(b))
        .unwrap();

    min_a.cmp(min_b)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn factor_ordering() {
        let start = product_of(&[v("x"), i(1)]);
        let end = ordered(start);
        assert_eq!(end, product_of(&[i(1), v("x")]));

        assert_eq!(factor_ord(&i(1), &v("x")), Ordering::Less);
        assert_eq!(factor_ord(&power(v("t"), i(5)), &i(2)), Ordering::Greater);

        let start1 = product_of(&[power(v("t"), i(5)), i(2)]);
        let end1 = ordered(start1);
        assert_eq!(end1, product_of(&[i(2), power(v("t"), i(5))]));

        let start2 = product_of(&[v("b"), v("a")]);
        let end2 = ordered(start2);
        assert_eq!(end2, product_of(&[v("a"), v("b")]));
    }
}
