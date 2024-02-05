use std::cmp::Ordering;
use std::rc::Rc;

use crate::expressions::{ExpressionPtr, Expression};
use crate::argument::Argument;

use serde::Serialize;
use serde::ser::SerializeSeq;

/**
* Compares the human perceived complexity of the given expressions.
* Expressions with fewer children and components are simpler.
*/
pub fn expression_complexity_cmp(a: &ExpressionPtr, b: &ExpressionPtr) -> Ordering {
    let diff = complexity(b) - complexity(a);
    if diff == 0 {
        Ordering::Equal
    } else if diff > 0 {
        Ordering::Less
    } else {
        Ordering::Greater
    }
}

fn complexity(a: &ExpressionPtr) -> u32 {
    match a {
        Expression::Product(p) => {
            p.factors().len() as u32 
            + p.factors().iter().map(|x| complexity(x)).sum::<u32>()
        },
        Expression::Sum(s) => {
            s.terms().len() as u32
            + s.terms().iter().map(|x| complexity(x)).sum::<u32>()
        },
        Expression::Negation(n) => {
            1 + complexity(&n.child())
        },
        Expression::Exponent(e) => {
            2 + complexity(&e.base()) + complexity(&e.power())
        },
        Expression::Integer(_) => {
            1
        },
    }
}

pub struct Path {
    pub start: ExpressionPtr,
    pub steps: Vec<(Rc<Argument>, ExpressionPtr)>,
}

impl Serialize for Path {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::Serializer {
        let mut seq = serializer.serialize_seq(Some(self.steps.len() * 2 + 1))?;
        seq.serialize_element(&self.start.as_stringable().to_math_xml())?;
        for step in &self.steps {
            seq.serialize_element(step.0.message())?;
            seq.serialize_element(&step.1.as_stringable().to_math_xml())?;
        }
        seq.end()
    }
}

#[cfg(test)]
mod tests {
    use crate::expressions::{Integer, Sum};
    use super::*;

    #[test]
    fn test_1() {
        let exp1 = Integer::of(1);
        let exp2 = Sum::of(&[Integer::of(1), Integer::of(1)]).unwrap();
        assert_eq!(expression_complexity_cmp(&exp1, &exp2), Ordering::Less);
    }
}
