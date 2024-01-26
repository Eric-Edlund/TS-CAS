use std::{
    collections::HashMap,
    fmt::Display,
    sync::{Arc, Mutex},
};

use once_cell::sync::Lazy;

mod exponent;
pub mod integer;
pub mod negation;
pub mod product;

pub use integer::Integer;
pub use negation::Negation;
pub use product::Product;

pub trait IExpression {
    /**
     * Creates a string representing the expression and it's children
     * in ascii format for debugging.
     */
    fn to_unambigious_string(&self) -> String;

    /**
     * Creates a mathxml string to display this expression.
     */
    fn to_math_xml(&self) -> String;

    /**
     * A string representing the operation used in generating hashes
     * for expressions without instantiating temporary versions of them.
     * The string is unique to the expression implementation.
     */
    fn id(&self) -> String;
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
#[derive(Eq, Hash, Clone, Debug)]
pub enum Expression {
    Negation(Arc<negation::Negation>),
    Integer(Arc<integer::Integer>),
    Product(Arc<product::Product>),
    Exponent(Arc<exponent::Exponent>),
}

impl PartialEq for Expression {
    fn eq(&self, other: &Self) -> bool {
        self.as_stringable().id() == other.as_stringable().id()
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
        }
    }

    pub fn get_instance(id: ExpressionId) -> Option<ExpressionPtr> {
        let result = EXPRESSION_INSTANCES.lock().unwrap().get(&id).cloned();
        result
    }
}

impl Display for Expression {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.as_stringable().to_unambigious_string())
    }
}
