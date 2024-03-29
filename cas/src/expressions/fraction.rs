use core::fmt;
use std::sync::Arc;

use serde_json::json;

use super::{EXPRESSION_INSTANCES, Expression, IExpression};


#[derive(PartialEq, Eq, Hash)]
pub struct Fraction {
    numerator: Expression,
    denominator: Expression,
}

impl Fraction {
    pub fn of(numerator: Expression, denominator: Expression) -> Expression {
        let id = get_id(&numerator, &denominator);

        let mut instances = EXPRESSION_INSTANCES.lock().unwrap();

        if let Some(result) = instances.get(&id) {
            return result.clone();
        }

        let result = Expression::Fraction(Arc::new(Fraction {
            numerator,
            denominator,
        }));

        instances.insert(id, result.clone());
        result
    }

    pub fn numerator(&self) -> Expression {
        self.numerator.clone()
    }

    pub fn denominator(&self) -> Expression {
        self.denominator.clone()
    }
}

fn get_id(n: &Expression, d: &Expression) -> String {
    format!("Fraction{}{}", n.as_stringable().id(), d.as_stringable().id())
}

impl IExpression for Fraction {
    fn to_unambigious_string(&self) -> String {
        format!("({})/({})", 
            self.numerator.as_stringable().to_unambigious_string(),
            self.denominator.as_stringable().to_unambigious_string())
    }

    fn id(&self) -> String {
        get_id(&self.numerator, &self.denominator)
    }

    fn to_json(&self) -> serde_json::Value {
        json!([
            "Divide",
            self.numerator.to_json(),
            self.denominator.to_json()
        ])
    }
}

impl fmt::Debug for Fraction {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "Fraction({:?}, {:?})", self.numerator, self.denominator)
    }
}

#[cfg(test)]
mod tests {
    use crate::expressions::Integer;
    use super::*;

    #[test]
    fn flywheel() {
        let a = Fraction::of(Integer::of(1), Integer::of(1));
        let b = Fraction::of(Integer::of(1), Integer::of(1));
        let c = Fraction::of(Integer::of(2), Integer::of(1));
        assert_eq!(a, b);
        assert_ne!(a, c);
    }
}
