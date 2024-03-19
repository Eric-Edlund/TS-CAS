use std::rc::Rc;

use crate::{argument::Argument, convenience_expressions::sum_of_iter, expressions::{Derivative, Expression}};

use super::DerivationRule;


pub struct DerivativeOfSum {}

impl DerivationRule for DerivativeOfSum {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let derivative = match input {
            Expression::Derivative(ref d) => d,
            _ => return vec![]
        };

        let Expression::Sum(ref s) = derivative.exp()
        else {
            return vec![];
        };

        vec![(
            sum_of_iter(&mut s.terms().iter()
                .map(|term| Derivative::of(term.clone(), derivative.relative_to()))),
            Argument::new(String::from("Split derivative over addition"), vec![input])
        )]
    }
}

#[cfg(test)]
mod tests {
    use crate::{convenience_expressions::v, expressions::sum::sum_of};

    use super::*;

    #[test]
    fn test_1() {
        let rule = DerivativeOfSum {};

        let start = Derivative::of(sum_of(&[v("a"), v("b")]), v("c"));
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(result, sum_of(&[
            Derivative::of(v("a"), v("c")), 
            Derivative::of(v("b"), v("c"))
        ]))
    }
}
