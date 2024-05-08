use serde_json::json;

use super::IExpression;

pub struct Undefined {}

impl IExpression for Undefined {
    fn to_unambigious_string(&self) -> String {
        String::from("Undefined")
    }

    fn id(&self) -> String {
        String::from("Undefined")
    }

    fn to_json(&self) -> serde_json::Value {
        json!("Undefined")
    }
}

pub const UNDEFINED: Undefined = Undefined {};
