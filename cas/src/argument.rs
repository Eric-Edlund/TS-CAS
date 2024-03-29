use std::hash::Hash;
use std::{collections::HashSet, rc::Rc};

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
}

impl Hash for Argument {
    fn hash<H: std::hash::Hasher>(&self, state: &mut H) {
        self.msg.hash(state);
    }
}

impl Argument {
    pub fn new(msg: String, grounds: Vec<Expression>) -> Rc<Argument> {
        Argument {
            msg,
            grounds: HashSet::from_iter(grounds),
        }
        .into()
    }

    pub fn message(&self) -> &str {
        &self.msg
    }

    pub fn grounds(&self) -> &HashSet<Expression> {
        &self.grounds
    }
}
