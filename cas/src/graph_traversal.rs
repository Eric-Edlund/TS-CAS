use std::cmp::Ordering;
use std::rc::Rc;

use crate::argument::Argument;
use crate::derivation_rules::helpers::{children_of, children_rec};
use crate::expressions::Expression;

use serde::ser::SerializeSeq;
use serde::Serialize;

/// Ideally, the developer would be an ML expert and have some better metric for
/// how *solved* a given expression is compared to another. Instead, here we have
/// several approximations.
///
/// - A solution without an integral is ideal
/// - Substitutions in expressions without integrals should be punished
/// - Substitutions in expressions with integrals are ok

/// Compares the human perceived complexity of the given expressions.
/// Expressions with fewer children and components are simpler.
pub fn expression_complexity_cmp(a: &Expression, b: &Expression) -> Ordering {
    let diff = complexity_rec(b) as i32 - complexity_rec(a) as i32;
    diff.cmp(&0).reverse()
}

/// Tries to guess which expression is closer to being solved for cases when
/// there is no final solution.
pub fn better_solution_cmp(a: &Expression, b: &Expression) -> Ordering {
    fn contains_integral(e: &Expression) -> bool {
        children_rec(e)
            .chain([e.clone()])
            .any(|e| matches!(e, Expression::Integral(_)))
    }

    if contains_integral(a) && !contains_integral(b) {
        return Ordering::Greater;
    }
    if !contains_integral(a) && contains_integral(b) {
        return Ordering::Less;
    }

    fn contains_substitution(e: &Expression) -> bool {
        children_rec(e)
            .chain([e.clone()])
            .any(|e| matches!(e, Expression::Substitution(_)))
    }

    if contains_integral(a) && contains_integral(b) {
        return complexity_rec(a).cmp(&complexity_rec(b));
    }

    if contains_substitution(a) && !contains_substitution(b) {
        return Ordering::Greater;
    }
    if !contains_substitution(a) && contains_substitution(b) {
        return Ordering::Less;
    }

    complexity_rec(a).cmp(&complexity_rec(b))
}

/// Does not enter substitutions
/// Gets an integer heuristic representing the complexity of an expression. Higher is more
/// complex.
pub fn complexity_rec(a: &Expression) -> u32 {
    match a {
        Expression::Product(p) => {
            p.factors().len() as u32
                + p.factors().iter().map(complexity_rec).sum::<u32>()
                + children_of(a)
                    .iter()
                    .filter(|x| matches!(x, Expression::Negation(_)))
                    .count() as u32
        }
        Expression::Sum(s) => {
            s.terms().len() as u32 + s.terms().iter().map(complexity_rec).sum::<u32>()
        }
        Expression::Negation(n) => 1 + complexity_rec(&n.child()),
        Expression::Exponent(e) => 2 + complexity_rec(&e.base()) + complexity_rec(&e.power()),
        Expression::Integer(_) => 1,
        Expression::Variable(_) => 1,
        Expression::Fraction(f) => {
            2 + complexity_rec(&f.numerator()) + complexity_rec(&f.denominator())
        }
        Expression::Logarithm(l) => 1 + complexity_rec(&l.base()) + complexity_rec(&l.exp()),
        Expression::Derivative(d) => {
            3 + complexity_rec(&d.exp()) + complexity_rec(&d.relative_to())
        }
        Expression::Integral(i) => {
            // Prefer several simple integrals over 1 complicated one
            5 + complexity_rec(&i.integrand()).pow(2) + complexity_rec(&i.variable())
            // Prefer integrands with fewer occurances of the variable
            + children_rec(&i.integrand()).filter(|f| f == &i.variable()).count() as u32
        }
        Expression::Trig(t) => 2 + complexity_rec(&t.exp()) + if t.arc() { 2 } else { 0 },
        Expression::AbsoluteValue(a) => 2 + complexity_rec(&a.exp()),
        Expression::ConstantExp(_) => 1,
        Expression::Substitution(_) => 1,
        Expression::Undefined => 0,
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
