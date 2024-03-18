use std::sync::Arc;

use serde_json::json;

use super::{IExpression, EXPRESSION_INSTANCES, Expression};


#[derive(PartialEq, Eq, Hash, Debug)]
pub struct Integral {
    integrand: Expression,
    relative_to: Expression,
}

impl Integral {
    pub fn of(integrand: Expression, relative_to: Expression) -> Expression {
        let id = get_id(&integrand, &relative_to);

        let mut instances = EXPRESSION_INSTANCES.lock().unwrap();

        if let Some(result) = instances.get(&id) {
            return result.clone();
        }

        let result = Expression::Integral(Arc::new(Integral {
            integrand,
            relative_to
        }));

        instances.insert(id, result.clone());
        result
    }

    pub fn integrand(&self) -> Expression {
        self.integrand.clone()
    }

    pub fn relative_to(&self) -> Expression {
        self.relative_to.clone()
    }
}

fn get_id(integrand: &Expression, relative_to: &Expression) -> String {
    format!("Integral{}{}", 
        integrand.as_stringable().id(), 
        relative_to.as_stringable().id())
}

impl IExpression for Integral {
    fn to_unambigious_string(&self) -> String {
        format!("int{}d{}",
            self.integrand.as_stringable().to_unambigious_string(),
            self.relative_to.as_stringable().to_unambigious_string())
    }

    fn id(&self) -> String {
        get_id(&self.integrand, &self.relative_to)
    }

    fn to_json(&self) -> serde_json::Value {
        json!([
            "Integral",
            self.integrand.to_json(),
            self.relative_to.to_json()
        ])
    }
}

#[cfg(test)]
mod tests {
    use crate::expressions::Integer;

    use super::Integral;

    #[test]
    fn flywheel() {
        let a = Integral::of(Integer::of(1), Integer::of(1));
        let b = Integral::of(Integer::of(1), Integer::of(1));
        let c = Integral::of(Integer::of(2), Integer::of(1));
        assert_eq!(a, b);
        assert_ne!(a, c);
    }
}
