use std::sync::Arc;

use serde_json::json;

use super::{Expression, IExpression, EXPRESSION_INSTANCES};

#[derive(PartialEq, Eq, Hash, Debug)]
pub struct Logarithm {
    base: Expression,
    exp: Expression,
}

impl Logarithm {
    /// Flywheel gets instance of the logarithm of exp in base base.
    pub fn of(base: Expression, exp: Expression) -> Expression {
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

    pub fn base(&self) -> Expression {
        self.base.clone()
    }

    pub fn exp(&self) -> Expression {
        self.exp.clone()
    }
}

fn get_id(base: &Expression, exp: &Expression) -> String {
    format!(
        "Log{}{}",
        base.as_stringable().id(),
        exp.as_stringable().id()
    )
}

impl IExpression for Logarithm {
    fn to_unambigious_string(&self) -> String {
        format!(
            "log_({})({})",
            self.base.as_stringable().to_unambigious_string(),
            self.exp.as_stringable().to_unambigious_string()
        )
    }

    fn id(&self) -> String {
        get_id(&self.base, &self.exp)
    }

    fn to_json(&self) -> serde_json::Value {
        json!(["Logarithm", self.base.to_json(), self.exp.to_json()])
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::expressions::Integer;

    #[test]
    fn flywheel() {
        let a = Logarithm::of(Integer::of(1), Integer::of(1));
        let b = Logarithm::of(Integer::of(1), Integer::of(1));
        let c = Logarithm::of(Integer::of(2), Integer::of(1));
        assert_eq!(a, b);
        assert_ne!(a, c);
    }
}
