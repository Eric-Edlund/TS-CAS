use core::fmt;
use std::sync::Arc;

use serde_json::json;

use super::{Expression, IExpression, EXPRESSION_INSTANCES};

#[derive(PartialEq, Eq, Hash, Clone, Copy)]
pub enum TrigFn {
    Sin,
    Cos,
    Tan,
    Sec,
    Csc,
    Cot,
    ArcSin,
    ArcCos,
    ArcTan,
    ArcSec,
    ArcCsc,
    ArcCot,
}

impl fmt::Display for TrigFn {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(
            f,
            "{}",
            match self {
                TrigFn::Sin => "Sin",
                TrigFn::Cos => "Cos",
                TrigFn::Tan => "Tan",
                TrigFn::Csc => "Csc",
                TrigFn::Sec => "Sec",
                TrigFn::Cot => "Cot",
                TrigFn::ArcSin => "Arcsin",
                TrigFn::ArcCos => "Arccos",
                TrigFn::ArcTan => "Arctan",
                TrigFn::ArcSec => "Arcsec",
                TrigFn::ArcCsc => "Arccsc",
                TrigFn::ArcCot => "Arccot",
            }
        )
    }
}

/**
* Represents any of sin, cos, tan, sec, csc, cot, and arc*
*/
#[derive(PartialEq, Eq, Hash, Clone)]
pub struct TrigExp {
    pub operation: TrigFn,
    exp: Expression,
}

impl TrigExp {
    pub fn of(operation: TrigFn, exp: Expression) -> Expression {
        let id = get_id(&operation, &exp);

        let mut instances = EXPRESSION_INSTANCES.lock().unwrap();

        if let Some(result) = instances.get(&id) {
            return result.clone();
        }

        let result = Expression::Trig(Arc::new(TrigExp { operation, exp }));

        instances.insert(id, result.clone());
        result
    }

    pub fn exp(&self) -> Expression {
        self.exp.clone()
    }

    /**
     * True if the expression is an arc trig function.
     */
    pub fn arc(&self) -> bool {
        matches!(
            self.operation,
            TrigFn::ArcSin
                | TrigFn::ArcCos
                | TrigFn::ArcTan
                | TrigFn::ArcSec
                | TrigFn::ArcCsc
                | TrigFn::ArcCot
        )
    }
}

fn get_id(op: &TrigFn, exp: &Expression) -> String {
    format!("{} {}", op, exp.as_stringable().id())
}

impl IExpression for TrigExp {
    fn to_unambigious_string(&self) -> String {
        format!(
            "{}({})",
            self.operation,
            self.exp.as_stringable().to_unambigious_string()
        )
    }

    fn id(&self) -> String {
        get_id(&self.operation, &self.exp)
    }

    fn to_json(&self) -> serde_json::Value {
        json!([format!("{}", self.operation), self.exp.to_json()])
    }
}

impl fmt::Debug for TrigExp {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}({:?})", self.operation, self.exp)
    }
}
