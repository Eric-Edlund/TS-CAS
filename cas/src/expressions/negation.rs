use std::sync::Arc;

use super::{Expression, ExpressionPtr, IExpression, EXPRESSION_INSTANCES};

#[derive(PartialEq, Eq, Hash, Debug)]
pub struct Negation {
    expression: ExpressionPtr,
}

impl Negation {
    pub fn child(&self) -> ExpressionPtr {
        self.expression.clone()
    }

    pub fn of(expression: ExpressionPtr) -> ExpressionPtr {
        let id = get_id(&expression);

        let mut instances = EXPRESSION_INSTANCES.lock().unwrap();

        if let Some(result) = instances.get(&id) {
            return result.clone();
        }

        let result = Expression::Negation(Arc::new(Negation { expression }));
        instances.insert(id, result.clone());
        result
    }
}

impl IExpression for Negation {
    fn to_unambigious_string(&self) -> String {
        format!(
            "-{}",
            self.expression.as_stringable().to_unambigious_string()
        )
    }

    fn to_math_xml(&self) -> String {
        format!("-{}", self.expression.as_stringable().to_math_xml())
    }

    fn id(&self) -> String {
        get_id(&self.expression)
    }
}

fn get_id(exp: &ExpressionPtr) -> String {
    format!("negation{}", &exp.as_stringable().id())
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
