use crate::expressions::{Product, ExpressionPtr, Sum, Exponent, Integer};


pub fn product(f: ExpressionPtr, f1: ExpressionPtr) -> ExpressionPtr {
    Product::of(&[f, f1]).unwrap()
}

pub fn sum(t: ExpressionPtr, t1: ExpressionPtr) -> ExpressionPtr {
    Sum::of(&[t, t1]).unwrap()
}

pub fn power(b: ExpressionPtr, p: ExpressionPtr) -> ExpressionPtr {
    Exponent::of(b, p)
}

pub fn i(value: u32) -> ExpressionPtr {
    Integer::of(value)
}
