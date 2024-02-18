#![allow(dead_code)]
use crate::expressions::{Product, ExpressionPtr, Sum, Exponent, Integer, Variable};


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
