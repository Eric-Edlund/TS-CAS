use std::hash::Hash;
use std::{collections::HashSet, rc::Rc};

use serde_json::{json, Value};

use crate::expressions::Expression;

/**
 * Stores a human readable argument describing why a relationship
* exists. Stores some number of expressions which the argument is
* based on.
 */
#[derive(PartialEq, Eq, Debug)]
pub struct Argument {
    msg: String,
    grounds: HashSet<Expression>,
    rule_name: String,
}

impl Hash for Argument {
    fn hash<H: std::hash::Hasher>(&self, state: &mut H) {
        self.msg.hash(state);
    }
}

impl Argument {
    pub fn new(msg: String, grounds: Vec<Expression>, rule_name: String) -> Rc<Argument> {
        Argument {
            msg,
            grounds: HashSet::from_iter(grounds),
            rule_name,
        }
        .into()
    }

    pub fn message(&self) -> &str {
        &self.msg
    }

    pub fn grounds(&self) -> &HashSet<Expression> {
        &self.grounds
    }

    pub fn rule_name(&self) -> &String {
        &self.rule_name
    }

    pub fn to_json(&self) -> Value {
        json!({
            "message": self.msg,
            "rule_name": self.rule_name
        })
    }
}
