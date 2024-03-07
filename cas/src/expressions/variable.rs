use core::fmt;
use std::sync::Arc;

use serde_json::json;

use crate::expressions::IExpression;

use super::{Expression, EXPRESSION_INSTANCES, ExpressionPtr};

#[derive(PartialEq, Eq, Hash)]
pub struct Variable {
    symbol: String,
}

impl Variable {
    pub fn of(symbol: &str) -> ExpressionPtr {
        let id = get_id(symbol);

        let mut instances = EXPRESSION_INSTANCES.lock().unwrap();

        if let Some(result) = instances.get(&id) {
            return result.clone();
        }

        let result = Expression::Variable(Arc::new(Variable {
            symbol: symbol.to_owned()
        }));

        instances.insert(id, result.clone());
        result
    }

    pub fn symbol(&self) -> &str {
        &self.symbol
    }
}

fn get_id(sym: &str) -> String {
    format!("var{}", sym)
}

impl IExpression for Variable {
    fn to_unambigious_string(&self) -> String {
        self.symbol.clone()
    }

    fn id(&self) -> String {
        get_id(&self.symbol)
    }

    fn to_json(&self) -> serde_json::Value {
        json!({
            "var": self.symbol
        })
    }
}

impl fmt::Debug for Variable {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}", self.symbol)
    }
}


#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn flywheel() {
        let a = Variable::of("a");
        let b = Variable::of("a");
        assert_eq!(a, b);
    }
}
