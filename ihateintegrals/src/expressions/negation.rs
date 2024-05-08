use core::fmt;
use std::sync::Arc;

use serde_json::json;

use super::{Expression, IExpression, EXPRESSION_INSTANCES};

/// The negation of an expression.
#[derive(PartialEq, Eq, Hash)]
pub struct Negation {
    expression: Expression,
}

impl Negation {
    pub fn of(expression: Expression) -> Expression {
        let id = get_id(&expression);

        let mut instances = EXPRESSION_INSTANCES.lock().unwrap();

        if let Some(result) = instances.get(&id) {
            return result.clone();
        }

        let result = Expression::Negation(Arc::new(Negation { expression }));
        instances.insert(id, result.clone());
        result
    }

    /// The expression being negated
    pub fn exp(&self) -> Expression {
        self.expression.clone()
    }
}

impl IExpression for Negation {
    fn to_unambigious_string(&self) -> String {
        format!(
            "-{}",
            self.expression.as_stringable().to_unambigious_string()
        )
    }

    fn id(&self) -> String {
        get_id(&self.expression)
    }

    fn to_json(&self) -> serde_json::Value {
        json!(["Negation", self.exp().to_json()])
    }
}

fn get_id(exp: &Expression) -> String {
    format!("negation{}", &exp.as_stringable().id())
}

impl fmt::Debug for Negation {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "-({})", self.expression)
    }
}

#[cfg(test)]
mod tests {
    use crate::expressions::Integer;

    use super::*;

    #[test]
    fn flywheel_impl() {
        let first = Negation::of(Integer::of(1));
        let second = Negation::of(Integer::of(1));
        let third = Negation::of(Integer::of(0));

        assert_eq!(first.as_stringable().id(), second.as_stringable().id());
        assert_eq!(first, second);
        assert_ne!(first, third);
        assert_ne!(first.as_stringable().id(), third.as_stringable().id());
    }
}
