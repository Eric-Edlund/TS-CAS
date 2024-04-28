use std::rc::Rc;

use crate::expressions::trig_expression::TrigFn;
use crate::{argument::Argument, derivation_rules::DerivationRule, expressions::Expression};

/**
* Arcsin(sin(x)) = x
* sin(arcsin(x)) = x
* ...
*/
pub struct CancelTrigArcFunctions {}

fn inverse_of(f: TrigFn) -> TrigFn {
    match f {
        TrigFn::Sin => TrigFn::ArcSin,
        TrigFn::Cos => TrigFn::ArcCos,
        TrigFn::Tan => TrigFn::ArcTan,
        TrigFn::Csc => TrigFn::ArcCsc,
        TrigFn::Sec => TrigFn::ArcSec,
        TrigFn::Cot => TrigFn::ArcCot,
        TrigFn::ArcSin => TrigFn::Sin,
        TrigFn::ArcCos => TrigFn::Cos,
        TrigFn::ArcTan => TrigFn::Tan,
        TrigFn::ArcSec => TrigFn::Sec,
        TrigFn::ArcCsc => TrigFn::Csc,
        TrigFn::ArcCot => TrigFn::Cot,
    }
}

impl DerivationRule for CancelTrigArcFunctions {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let parent = match input {
            Expression::Trig(ref t) => t,
            _ => return vec![],
        };

        let child = match parent.exp() {
            Expression::Trig(t) => t,
            _ => return vec![],
        };

        if parent.operation != inverse_of(child.operation) {
            return vec![];
        }

        vec![(
            child.exp(),
            Argument::new(String::from("Trig arc inverse cancel"), vec![input]),
        )]
    }

    fn name(&self) -> String {
        String::from("CancelTrigArcs")
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::convenience_expressions::*;

    #[test]
    fn test_1() {
        let rule = CancelTrigArcFunctions {};

        let start = sin(arcsin(v("x")));
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(result, v("x"));
    }
}
