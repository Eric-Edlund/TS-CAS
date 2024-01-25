use std::{collections::HashSet, rc::Rc};
use std::hash::Hash;

use crate::expressions::ExpressionPtr;

/**
 * Connects one or more nodes (grounds) to one or more nodes (claims).
 * Contains an explanation/argument for the connection.
 */
#[derive(PartialEq, Eq)]
pub struct Argument {
    msg: String,
    grounds: HashSet<ExpressionPtr>,
}

impl Hash for Argument {
    fn hash<H: std::hash::Hasher>(&self, state: &mut H) {
        self.msg.hash(state);
    }
}

impl Argument {
    pub fn new(msg: String, grounds: Vec<ExpressionPtr>) -> Rc<Argument> {
        Argument {
            msg,
            grounds: HashSet::from_iter(grounds),
        }.into()
    }

    pub fn message(&self) -> &str {
        &self.msg
    }

    pub fn grounds(&self) -> &HashSet<ExpressionPtr> {
        &self.grounds 
    }
}
