use core::fmt;
use std::sync::Arc;

use serde_json::json;

use super::{Expression, IExpression, EXPRESSION_INSTANCES};

#[derive(PartialEq, Eq, Hash)]
pub struct Integer {
    value: u32,
}

impl Integer {
    pub fn of(value: u32) -> Expression {
        let id = format!("integer {}", value);

        let mut instances = EXPRESSION_INSTANCES.lock().unwrap();

        if let Some(result) = instances.get(&id) {
            return result.clone();
        }

        let result = Expression::Integer(Arc::new(Integer { value }));

        instances.insert(id, result.clone());
        result
    }

    pub fn value(&self) -> u32 {
        self.value
    }
}

impl IExpression for Integer {
    fn to_unambigious_string(&self) -> String {
        self.value.to_string()
    }

    fn id(&self) -> String {
        format!("integer{}", self.value)
    }

    fn to_json(&self) -> serde_json::Value {
        json!({
            "num": self.value
        })
    }
}

impl fmt::Debug for Integer {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}", self.value)
    }
}

#[cfg(test)]
mod tests {
    use crate::expressions::Integer;


    #[test]
    fn flywheel_integer() {
        let i0 = Integer::of(1);
        let i1 = Integer::of(1);
        let i2 = Integer::of(2);
        assert_ne!(i1.as_stringable().id(), i2.as_stringable().id(), 
        "Integer not generating unique flywheel hashes");

        assert_eq!(i0, i1);
    }
}
