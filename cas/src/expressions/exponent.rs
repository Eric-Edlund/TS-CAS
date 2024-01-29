use super::{ExpressionPtr, IExpression};
use std::rc::Rc;

#[derive(PartialEq, Eq, Hash, Debug)]
pub struct Exponent {
    base: ExpressionPtr,
    power: ExpressionPtr,
}

impl Exponent {
    pub fn of(base: ExpressionPtr, power: ExpressionPtr) -> Rc<Exponent> {
        Exponent { base, power }.into()
    }
}

impl IExpression for Exponent {
    fn to_unambigious_string(&self) -> String {
        String::from("({self.base.to_unambigious_string()})^(self.power.to_unambigious_string())")
    }

    fn to_math_xml(&self) -> String {
        todo!()
    }

    fn id(&self) -> String {
        format!(
            "({})^({})",
            &self.base.as_stringable().id(),
            &self.base.as_stringable().id()
        )
    }
}
