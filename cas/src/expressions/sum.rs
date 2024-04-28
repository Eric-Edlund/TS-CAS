use core::fmt;
use std::sync::Arc;

use serde_json::json;
use serde_json::Value;

use super::Expression;
use super::IExpression;
use super::EXPRESSION_INSTANCES;

#[derive(PartialEq, Eq, Hash)]
pub struct Sum {
    terms: Vec<Expression>,
}

impl Sum {
    pub fn of(terms: &[Expression]) -> Result<Expression, ()> {
        if terms.len() < 2 {
            return Err(());
        }

        let id = id_from_terms(terms);

        let mut instances = EXPRESSION_INSTANCES.lock().unwrap();

        let result = instances.get(&id);
        if let Some(result) = result {
            return Ok(result.clone());
        }

        let result = Sum {
            terms: terms.to_vec(),
        };

        let pointer = Expression::Sum(Arc::new(result));
        instances.insert(id, pointer.clone());
        Ok(pointer)
    }

    pub fn terms(&self) -> &Vec<Expression> {
        &self.terms
    }
}

/**
* Takes one or more terms. If 2 or more, returns sum,
* otherwise, returns the given term.
*/
pub fn sum_of(terms: &[Expression]) -> Expression {
    if terms.len() == 1 {
        return terms[0].clone();
    }
    Sum::of(terms).expect("Update this function to match rep invariant of sum")
}

impl IExpression for Sum {
    fn to_unambigious_string(&self) -> String {
        let mut terms_iter = self
            .terms
            .iter()
            .map(|x| x.as_stringable().to_unambigious_string());
        let mut result = terms_iter.nth(0).unwrap();
        for term in terms_iter.skip(1) {
            result += " + ";
            result += term.as_str();
        }

        result
    }

    fn id(&self) -> String {
        id_from_terms(&self.terms)
    }

    fn to_json(&self) -> Value {
        json!(&mut [json!("Sum")]
            .into_iter()
            .chain(self.terms.iter().map(|term| term.to_json()))
            .collect::<Vec<Value>>())
    }
}

fn id_from_terms(terms: &[Expression]) -> String {
    String::from("sum")
        + terms
            .iter()
            .map(|x| x.as_stringable().id())
            .reduce(|x, y| x + y.as_str())
            .unwrap()
            .as_str()
}

impl fmt::Debug for Sum {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        let result = self
            .terms
            .iter()
            .map(|term| format!("{:?}", term))
            .reduce(|a, b| a + " " + &b)
            .unwrap();
        write!(f, "+({:?})", result)
    }
}

#[cfg(test)]
mod tests {
    use crate::expressions::Integer;

    use super::*;

    #[test]
    fn flywheel_test() {
        assert_eq!(
            Sum::of(&[Integer::of(1), Integer::of(1)]),
            Sum::of(&[Integer::of(1), Integer::of(1)]),
            "Flywheel not working"
        );
    }

    #[test]
    fn rep_ok_enforced() {
        assert!(Sum::of(&[Integer::of(1)]).is_err()); // Because needs >= 2 terms
    }
}
