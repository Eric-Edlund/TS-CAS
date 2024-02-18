use std::sync::Arc;

use serde_json::json;

use super::{IExpression, ExpressionPtr, EXPRESSION_INSTANCES, Expression};

#[derive(PartialEq, Eq, Hash, Debug)]
pub struct Derivative {
    exp: ExpressionPtr,
    relative_to: ExpressionPtr,
}

impl Derivative {
    pub fn of(exp: ExpressionPtr, relative_to: ExpressionPtr) -> ExpressionPtr {
        let id = get_id(&exp, &relative_to);

        let mut instances = EXPRESSION_INSTANCES.lock().unwrap();

        if let Some(result) = instances.get(&id) {
            return result.clone();
        }

        let result = Expression::Derivative(Arc::new(Derivative {
            exp,
            relative_to
        }));

        instances.insert(id, result.clone());
        result
    }

    pub fn exp(&self) -> ExpressionPtr {
        self.exp.clone()
    }

    pub fn relative_to(&self) -> ExpressionPtr {
        self.relative_to.clone()
    }
}

fn get_id(exp: &ExpressionPtr, rel: &ExpressionPtr) -> String {
    format!("Derivative{}{}", 
        exp.as_stringable().id(),
        rel.as_stringable().id())
}

impl IExpression for Derivative {
    fn to_unambigious_string(&self) -> String {
        format!("d({})/d({})", 
            self.exp.as_stringable().to_unambigious_string(),
            self.relative_to.as_stringable().to_unambigious_string())
    }

    fn to_math_xml(&self) -> String {
        format!("<mfrac><mn>d</mn><mrow><mn>d</mn>{}</mrow></mfrac>{}",
            self.exp.as_stringable().to_math_xml(),
            self.relative_to.as_stringable().to_math_xml())
    }

    fn id(&self) -> String {
        todo!()
    }

    fn to_json(&self) -> serde_json::Value {
        json!([
            "Derivative",
            self.exp.to_json(),
            self.relative_to.to_json()
        ])
    }
}

#[cfg(test)]
mod tests {
    use crate::expressions::Integer;

    use super::Derivative;


    #[test]
    fn flywheel() {
        let a = Derivative::of(Integer::of(1), Integer::of(1));
        let b = Derivative::of(Integer::of(1), Integer::of(1));
        let c = Derivative::of(Integer::of(2), Integer::of(1));

        assert_eq!(a, b);
        assert_ne!(a, c);
    }
}
