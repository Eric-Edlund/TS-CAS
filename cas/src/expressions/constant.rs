use core::fmt;
use std::sync::Arc;

use serde_json::json;

use super::{Expression, IExpression, EXPRESSION_INSTANCES};

#[derive(PartialEq, Eq, Hash, Clone, Copy, Debug)]
pub enum Constant {
    Euler,
    Pi,
    Imaginary,
}

#[derive(PartialEq, Eq, Hash)]
pub struct ConstantExp {
    value: Constant,
}

impl ConstantExp {
    pub fn of(value: Constant) -> Expression {
        let id = format!("Const{:?}", value);

        let mut instances = EXPRESSION_INSTANCES.lock().unwrap();

        if let Some(result) = instances.get(&id) {
            return result.clone();
        }

        let result = Expression::ConstantExp(Arc::new(ConstantExp{ value }));

        instances.insert(id, result.clone());
        result
    }

    pub fn value(&self) -> Constant {
        self.value
    }
}

impl IExpression for ConstantExp {
    fn to_unambigious_string(&self) -> String {
        format!("{:?}", self.value)
    }

    fn id(&self) -> String {
        format!("Const{:?}", self.value)
    }

    fn to_json(&self) -> serde_json::Value {
        json!(match self.value {
            Constant::Euler => "E",
            Constant::Pi => "Pi",
            Constant::Imaginary => "ImaginaryUnit",
        })
    }
}

impl fmt::Debug for ConstantExp {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}", self.to_json().to_string())
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn flywheel() {
        let a = ConstantExp::of(Constant::Euler);
        let b = ConstantExp::of(Constant::Euler);
        assert_eq!(a, b);
        let c = ConstantExp::of(Constant::Pi);
        assert_ne!(a, c);
    }
}
