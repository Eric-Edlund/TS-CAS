use serde_json::json;

use super::{Expression, IExpression, EXPRESSION_INSTANCES};
use core::fmt;
use std::sync::Arc;

#[derive(PartialEq, Eq, Hash)]
pub struct Exponent {
    base: Expression,
    power: Expression,
}

impl Exponent {
    pub fn of(base: Expression, power: Expression) -> Expression {
        let id = get_id(&base, &power);

        let mut instances = EXPRESSION_INSTANCES.lock().unwrap();

        if let Some(result) = instances.get(&id) {
            return result.clone();
        }

        let result = Expression::Exponent(Arc::new(Exponent { base, power }));
        instances.insert(id, result.clone());
        result
    }

    pub fn base(&self) -> Expression {
        self.base.clone()
    }

    pub fn power(&self) -> Expression {
        self.power.clone()
    }
}

impl IExpression for Exponent {
    fn to_unambigious_string(&self) -> String {
        format!(
            "({})^({})",
            self.base.as_stringable().to_unambigious_string(),
            self.power.as_stringable().to_unambigious_string()
        )
    }

    fn id(&self) -> String {
        get_id(&self.base, &self.power)
    }

    fn to_json(&self) -> serde_json::Value {
        json!(["Pow", self.base.to_json(), self.power.to_json()])
    }
}

fn get_id(base: &Expression, power: &Expression) -> String {
    format!(
        "exponent({})({})",
        &base.as_stringable().id(),
        &power.as_stringable().id()
    )
}

impl fmt::Debug for Exponent {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "Exponent({}, {})", self.base, self.power)
    }
}

#[cfg(test)]
mod tests {
    use crate::expressions::Integer;

    use super::Exponent;

    #[test]
    fn flywheel_impl() {
        let first = Exponent::of(Integer::of(1), Integer::of(1));
        let second = Exponent::of(Integer::of(1), Integer::of(1));
        let third = Exponent::of(Integer::of(1), Integer::of(0));
        let forth = Exponent::of(Integer::of(0), Integer::of(1));

        assert_eq!(first, second);
        assert_eq!(first.as_stringable().id(), second.as_stringable().id());
        assert_ne!(first, third);
        assert_ne!(first, forth);
        assert_ne!(third, forth);
    }
}
