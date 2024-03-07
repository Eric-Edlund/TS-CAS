use std::rc::Rc;

use crate::{argument::Argument, expressions::{Expression, ExpressionPtr}};

use super::DerivationRule;


/**
* sin(-x) = -sin(x)
* cos(-x) = cos(x)
*/
pub struct TrigReflections {}

impl DerivationRule for TrigReflections {
    fn apply(&self, input: ExpressionPtr) -> Vec<(ExpressionPtr, Rc<Argument>)> {
        // let trig = match input {
        //     Expression::Trig(ref t) => t,
        //     _ => return vec![]
        // };

        // let result = match trig.operation {

        // }
        vec![]
    }
}
