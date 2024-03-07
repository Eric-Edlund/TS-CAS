use std::sync::Arc;

use serde_json::json;

use super::{ExpressionPtr, EXPRESSION_INSTANCES, Expression, IExpression};


#[derive(PartialEq, Eq, Hash, Debug)]
pub struct Logarithm {
    base: ExpressionPtr,
    exp: ExpressionPtr,
}

impl Logarithm {
    /**
    * Flywheel gets instance of the logarithm of exp in base base.
    */
    pub fn of(base: ExpressionPtr, exp: ExpressionPtr) -> ExpressionPtr {
        let id = get_id(&base, &exp);

        let mut instances = EXPRESSION_INSTANCES.lock().unwrap();

        if let Some(result) = instances.get(&id) {
            return result.clone();
        }

        let result = Expression::Logarithm(Arc::new(Logarithm {
            base: base.clone(),
            exp: exp.clone(),
        }));

        instances.insert(id, result.clone());
        result
    }

    pub fn base(&self) -> ExpressionPtr {
        self.base.clone()
    }

    pub fn exp(&self) -> ExpressionPtr {
        self.exp.clone()
    }
}

fn get_id(base: &ExpressionPtr, exp: &ExpressionPtr) -> String {
    format!("Log{}{}", base.as_stringable().id(), exp.as_stringable().id())
}

impl IExpression for Logarithm {
    fn to_unambigious_string(&self) -> String {
        format!("log_({})({})", 
        self.base.as_stringable().to_unambigious_string(),
        self.exp.as_stringable().to_unambigious_string())
    }

    fn id(&self) -> String {
        get_id(&self.base, &self.exp)
    }

    fn to_json(&self) -> serde_json::Value {
        json!([
            "Logarithm",
            self.base.to_json(),
            self.exp.to_json()
        ])
    }
}

#[cfg(test)]
mod tests {
    use crate::expressions::Integer;
    use super::*;

    #[test]
    fn flywheel() {
        let a = Logarithm::of(Integer::of(1), Integer::of(1));
        let b = Logarithm::of(Integer::of(1), Integer::of(1));
        let c = Logarithm::of(Integer::of(2), Integer::of(1));
        assert_eq!(a, b);
        assert_ne!(a, c);
    }
}
