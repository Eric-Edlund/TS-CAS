use std::rc::Rc;

use crate::{argument::Argument, expressions::Expression};

use super::DerivationRule;

/**
* sin(-x) = -sin(x)
* cos(-x) = cos(x)
*/
pub struct TrigReflections {}

impl DerivationRule for TrigReflections {
    fn apply(&self, _input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        // let trig = match input {
        //     Expression::Trig(ref t) => t,
        //     _ => return vec![]
        // };

        // let result = match trig.operation {

        // }
        vec![]
    }

    fn name(&self) -> String {
        todo!()
    }
}
