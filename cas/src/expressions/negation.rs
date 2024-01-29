use std::sync::Arc;

use super::{Expression, ExpressionPtr, IExpression};

#[derive(PartialEq, Eq, Hash, Debug)]
pub struct Negation {
    expression: ExpressionPtr,
}

impl Negation {
    pub fn child(&self) -> ExpressionPtr {
        self.expression.clone()
    }

    pub fn of(expression: Expression) -> Expression {
        Expression::Negation(Arc::new(Negation { expression }))
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
        todo!()
    }

    fn id(&self) -> String {
        format!("negation{}", &self.expression.as_stringable().id())
    }
}
