#![allow(dead_code)]
use crate::expressions::{trig_expression::TrigFn, Exponent, Expression, ExpressionPtr, Integer, Product, Sum, TrigExp, Variable};


pub fn product(f: ExpressionPtr, f1: ExpressionPtr) -> ExpressionPtr {
    Product::of(&[f, f1]).unwrap()
}

pub fn sum(t: ExpressionPtr, t1: ExpressionPtr) -> ExpressionPtr {
    Sum::of(&[t, t1]).unwrap()
}

pub fn sum_of_iter(terms: &mut dyn Iterator<Item = ExpressionPtr>) -> ExpressionPtr {
    let terms = terms.collect::<Vec<ExpressionPtr>>();
    if terms.len() == 1 {
        return terms[0].clone();
    }
    Sum::of(&terms).unwrap()
}


pub fn power(b: ExpressionPtr, p: ExpressionPtr) -> ExpressionPtr {
    Exponent::of(b, p)
}

pub fn i(value: u32) -> ExpressionPtr {
    Integer::of(value)
}

pub fn v(symbol: &str) -> ExpressionPtr {
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

