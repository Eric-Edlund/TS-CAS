use core::fmt;
use std::{
    collections::HashMap,
    fmt::Display,
    sync::{Arc, Mutex},
};

use once_cell::sync::Lazy;

pub mod exponent;
pub mod integer;
pub mod negation;
pub mod product;
pub mod sum;
pub mod variable;
pub mod fraction;
pub mod logarithm;
pub mod derivative;
pub mod integral;
pub mod trig_expression;
pub mod absolute_value;
pub mod constant;
mod read_from_json;

pub use integer::Integer;
pub use negation::Negation;
pub use product::Product;
use serde_json::Value;
pub use sum::Sum;
pub use exponent::Exponent;
pub use variable::Variable;
pub use fraction::Fraction;
pub use logarithm::Logarithm;
pub use derivative::Derivative;
pub use integral::Integral;
pub use trig_expression::TrigExp;
pub use absolute_value::AbsoluteValue;
pub use constant::ConstantExp;
pub use read_from_json::*;

pub trait IExpression {
    /**
     * Creates a string representing the expression and it's children
     * in ascii format for debugging.
     */
    fn to_unambigious_string(&self) -> String;

    /**
     * A string representing the operation used in generating hashes
     * for expressions without instantiating temporary versions of them.
     * The string is unique to the expression implementation.
     */
    fn id(&self) -> String;

    /**
    * Produce JSON object representing the expression.
    */
    fn to_json(&self) -> Value;
}

// Use this when refering to an Expression in case we need to change
// it later.
pub type ExpressionPtr = Expression;

// For JS interop
pub type ExpressionId = String;

/**
* This gives idiomatic disbatching at a small cost of boilerplate
* actually the boilerplate is pretty conventient- it centralizes
* the trivial "this expression type has property" boilerplate
* which in JS would be on each class separately. With this, we can
* implement stuff like hash as an implementation for the enum.
*
* We also get exaustive checking for Expression matches.
*
* If we want to access an Expression attribute, we have to
* unwrap the enum and consider each variant.
*/
#[derive(Eq, Clone)]
pub enum Expression {
    Negation(Arc<Negation>),
    Integer(Arc<Integer>),
    Product(Arc<Product>),
    Exponent(Arc<Exponent>),
    Sum(Arc<Sum>),
    Variable(Arc<Variable>),
    Fraction(Arc<Fraction>),
    Logarithm(Arc<Logarithm>),
    Derivative(Arc<Derivative>),
    Integral(Arc<Integral>),
    Trig(Arc<TrigExp>),
    AbsoluteValue(Arc<AbsoluteValue>),
    ConstantExp(Arc<ConstantExp>),
}

impl Expression {}

impl fmt::Debug for Expression {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}", format!("{:?}", match self {
            Expression::Negation(ref p) => p as &dyn fmt::Debug,
            Expression::Integer(p) => p as &dyn fmt::Debug,
            Expression::Product(p) => p as &dyn fmt::Debug,
            Expression::Exponent(p) => p as &dyn fmt::Debug,
            Expression::Sum(p) => p as &dyn fmt::Debug,
            Expression::Variable(p) => p as &dyn fmt::Debug,
            Expression::Fraction(p) => p as &dyn fmt::Debug,
            Expression::Logarithm(p) => p as &dyn fmt::Debug,
            Expression::Derivative(p) => p as &dyn fmt::Debug,
            Expression::Integral(p) => p as &dyn fmt::Debug,
            Expression::Trig(p) => p as &dyn fmt::Debug,
            Expression::AbsoluteValue(p) => p as &dyn fmt::Debug,
            Expression::ConstantExp(p) => p as &dyn fmt::Debug,
        }))
    }
}

impl PartialEq for Expression {
    fn eq(&self, other: &Self) -> bool {
        let first: Arc<dyn IExpression> = match self {
            Expression::Negation(p) => p.clone(),
            Expression::Integer(p) => p.clone(),
            Expression::Product(p) => p.clone(),
            Expression::Exponent(p) => p.clone(),
            Expression::Sum(p) => p.clone(),
            Expression::Variable(p) => p.clone(),
            Expression::Fraction(p) => p.clone(),
            Expression::Logarithm(p) => p.clone(),
            Expression::Derivative(p) => p.clone(),
            Expression::Integral(p) => p.clone(),
            Expression::Trig(p) => p.clone(),
            Expression::AbsoluteValue(p) => p.clone(),
            Expression::ConstantExp(p) => p.clone(),
        };
        let second: Arc<dyn IExpression> = match other {
            Expression::Negation(p) => p.clone(),
            Expression::Integer(p) => p.clone(),
            Expression::Product(p) => p.clone(),
            Expression::Exponent(p) => p.clone(),
            Expression::Sum(p) => p.clone(),
            Expression::Variable(p) => p.clone(),
            Expression::Fraction(p) => p.clone(),
            Expression::Logarithm(p) => p.clone(),
            Expression::Derivative(p) => p.clone(),
            Expression::Integral(p) => p.clone(),
            Expression::Trig(p) => p.clone(),
            Expression::AbsoluteValue(p) => p.clone(),
            Expression::ConstantExp(p) => p.clone(),
        };

        Arc::ptr_eq(&first, &second)
    }
}

// We implement Flywheel in all expression subclasses
pub(self) static EXPRESSION_INSTANCES: Lazy<Mutex<HashMap<ExpressionId, ExpressionPtr>>> =
    Lazy::new(|| Mutex::new(HashMap::new()));

impl Expression {
    /**
     * Gets the contained Expression.
     */
    pub fn as_stringable(&self) -> Arc<dyn IExpression> {
        match self {
            Expression::Integer(i) => i.clone(),
            Expression::Negation(n) => n.clone(),
            Expression::Product(p) => p.clone(),
            Expression::Exponent(e) => e.clone(),
            Expression::Sum(s) => s.clone(),
            Expression::Variable(v) => v.clone(),
            Expression::Fraction(f) => f.clone(),
            Expression::Logarithm(l) => l.clone(),
            Expression::Derivative(d) => d.clone(),
            Expression::Integral(i) => i.clone(),
            Expression::Trig(t) => t.clone(),
            Expression::AbsoluteValue(a) => a.clone(),
            Expression::ConstantExp(c) => c.clone(),
        }
    }

    pub fn to_json(&self) -> Value {
        match self {
            Expression::Integer(i) => i.to_json(),
            Expression::Negation(n) => n.to_json(),
            Expression::Product(p) => p.to_json(),
            Expression::Exponent(e) => e.to_json(),
            Expression::Sum(s) => s.to_json(),
            Expression::Variable(v) => v.to_json(),
            Expression::Fraction(f) => f.to_json(),
            Expression::Logarithm(l) => l.to_json(),
            Expression::Derivative(d) => d.to_json(),
            Expression::Integral(i) => i.to_json(),
            Expression::Trig(t) => t.to_json(),
            Expression::AbsoluteValue(a) => a.to_json(),
            Expression::ConstantExp(c) => c.to_json(),
        }
    }
}

impl Display for Expression {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.as_stringable().to_unambigious_string())
    }
}

impl std::hash::Hash for Expression {
    fn hash<H: std::hash::Hasher>(&self, state: &mut H) {
        self.as_stringable().id().hash(state)
    }
}
