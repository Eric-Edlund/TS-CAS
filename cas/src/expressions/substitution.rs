use core::fmt;
use std::sync::{Arc, Mutex};

use serde_json::json;

use super::{Expression, IExpression, EXPRESSION_INSTANCES};

#[derive(Clone, Hash, PartialEq, Eq)]
pub struct Substitution {
    exp: Expression,
    id: u32,
}

static SUBSTITUTION_COUNTER: Mutex<u32> = Mutex::new(0);

impl Substitution {
    /// Creates a new Substitution, not equal to any either substitution.
    /// Creating a substitution for 1 twice will produce two different
    /// substitutions.
    pub fn of(exp: Expression) -> Expression {
        let mut counter = SUBSTITUTION_COUNTER.lock().unwrap();
        let next_sub_id = *counter;
        *counter += 1;

        let id = format!("Substitution{}", next_sub_id);

        let mut instances = EXPRESSION_INSTANCES.lock().unwrap();

        if let Some(result) = instances.get(&id) {
            return result.clone();
        }

        let result = Expression::Substitution(Arc::new(Self {
            exp,
            id: next_sub_id,
        }));

        instances.insert(id, result.clone());
        result
    }

    pub fn exp(&self) -> Expression {
        self.exp.clone()
    }

    pub fn sub_id(&self) -> u32 {
        self.id
    }
}

impl IExpression for Substitution {
    fn to_unambigious_string(&self) -> String {
        format!("u{}", self.id)
    }

    fn id(&self) -> String {
        format!("Substitution{}", self.id)
    }

    fn to_json(&self) -> serde_json::Value {
        json!(["Substitution", json!(self.id), self.exp().to_json(),])
    }
}

impl fmt::Debug for Substitution {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "Sub{}={:?}", self.id, self.exp())
    }
}

#[cfg(test)]
mod tests {
    use crate::expressions::Integer;

    use super::*;

    #[test]
    fn flywheel() {
        let a = Substitution::of(Integer::of(1));
        let b = Substitution::of(Integer::of(1));

        assert_ne!(a, b);
    }
}
