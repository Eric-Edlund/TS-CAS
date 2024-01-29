use std::sync::Arc;

use super::{Expression, ExpressionPtr, IExpression, EXPRESSION_INSTANCES};

#[derive(PartialEq, Eq, Hash, Debug)]
pub struct Integer {
    value: u32,
}

impl Integer {
    pub fn of(value: u32) -> ExpressionPtr {
        let id = String::from("integer {value}");

        if let Some(result) = EXPRESSION_INSTANCES.lock().unwrap().get(&id) {
            return result.clone();
        }

        let result = Expression::Integer(Arc::new(Integer { value }));

        EXPRESSION_INSTANCES
            .lock()
            .unwrap()
            .insert(id, result.clone());
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

    fn to_math_xml(&self) -> String {
        String::from("<mn>") + self.value.to_string().as_str() + "</mn>"
    }

    fn id(&self) -> String {
        format!("integer{}", self.value)
    }
}
