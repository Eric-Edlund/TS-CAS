use core::fmt;
use std::sync::Arc;

use serde_json::json;

use super::{Expression, IExpression, EXPRESSION_INSTANCES};


#[derive(PartialEq, Eq, Hash)]
pub struct AbsoluteValue {
    exp: Expression,
}

impl AbsoluteValue {
    pub fn of(exp: Expression) -> Expression {
        let id = get_id(&exp);

        let mut instances = EXPRESSION_INSTANCES.lock().unwrap();

        if let Some(result) = instances.get(&id) {
            return result.clone();
        }

        let result = Expression::AbsoluteValue(Arc::new(AbsoluteValue { exp }));

        instances.insert(id, result.clone());
        result
    }

    pub fn exp(&self) -> Expression {
        self.exp.clone()
    }
}

fn get_id(exp: &Expression) -> String {
    format!("Abs {}", exp.as_stringable().id())
}

impl IExpression for AbsoluteValue {
    fn to_unambigious_string(&self) -> String {
        format!("abs({})", self.exp.as_stringable().to_unambigious_string())
    }

    fn id(&self) -> String {
        get_id(&self.exp)
    }

    fn to_json(&self) -> serde_json::Value {
        json!(["Abs", self.exp.to_json()])
    }
}

impl fmt::Debug for AbsoluteValue {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "abs({:?})", self.exp)
    }
}

#[cfg(test)]
mod tests {
    use crate::expressions::Integer;

    use super::*;

    #[test]
    fn flywheel() {
        let a = AbsoluteValue::of(Integer::of(1));
        let b = AbsoluteValue::of(Integer::of(1));
        assert_eq!(a, b);
    }
}
