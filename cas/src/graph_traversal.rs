use std::cmp::Ordering;
use std::rc::Rc;

use crate::argument::Argument;
use crate::derivation_rules::helpers::children_of;
use crate::expressions::Expression;

use serde::ser::SerializeSeq;
use serde::Serialize;

/**
* Compares the human perceived complexity of the given expressions.
* Expressions with fewer children and components are simpler.
*/
pub fn expression_complexity_cmp(a: &Expression, b: &Expression) -> Ordering {
    let diff = complexity(b) as i32 - complexity(a) as i32;
    diff.cmp(&0).reverse()
}

fn complexity(a: &Expression) -> u32 {
    match a {
        Expression::Product(p) => {
            p.factors().len() as u32
                + p.factors().iter().map(complexity).sum::<u32>()
                + children_of(a)
                    .iter()
                    .filter(|x| matches!(x, Expression::Negation(_)))
                    .count() as u32
        }
        Expression::Sum(s) => {
            s.terms().len() as u32 + s.terms().iter().map(complexity).sum::<u32>()
        }
        Expression::Negation(n) => 1 + complexity(&n.child()),
        Expression::Exponent(e) => 2 + complexity(&e.base()) + complexity(&e.power()),
        Expression::Integer(_) => 1,
        Expression::Variable(_) => 1,
        Expression::Fraction(f) => 2 + complexity(&f.numerator()) + complexity(&f.denominator()),
        Expression::Logarithm(l) => 1 + complexity(&l.base()) + complexity(&l.exp()),
        Expression::Derivative(d) => 3 + complexity(&d.exp()) + complexity(&d.relative_to()),
        Expression::Integral(i) => 15 + complexity(&i.integrand()) + complexity(&i.relative_to()),
        Expression::Trig(t) => 2 + complexity(&t.exp()) + if t.arc() { 2 } else { 0 },
        Expression::AbsoluteValue(a) => 2 + complexity(&a.exp()),
        Expression::ConstantExp(_) => 1,
        Expression::Substitution(_) => 9999,
    }
}

pub struct Path {
    pub start: Expression,
    pub steps: Vec<(Rc<Argument>, Expression)>,
}

impl Serialize for Path {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::Serializer,
    {
        let mut seq = serializer.serialize_seq(Some(self.steps.len() * 2 + 1))?;
        seq.serialize_element(&self.start.to_json())?;
        for step in &self.steps {
            seq.serialize_element(step.0.message())?;
            seq.serialize_element(&step.1.to_json())?;
        }
        seq.end()
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::expressions::{Integer, Sum};

    #[test]
    fn test_1() {
        let exp1 = Integer::of(1);
        let exp2 = Sum::of(&[Integer::of(1), Integer::of(1)]).unwrap();
        assert_eq!(expression_complexity_cmp(&exp1, &exp2), Ordering::Less);
    }
}
