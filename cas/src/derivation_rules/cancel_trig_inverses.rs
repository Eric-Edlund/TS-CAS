use std::{collections::HashSet, rc::Rc};

use crate::{
    argument::Argument,
    expressions::{
        product::product_of_iter, trig_expression::TrigFn, Expression, Integer, TrigExp,
    },
};

use super::DerivationRule;

/**
* Cancels sinx cscx, ect.
*/
pub struct CancelTrigInverses {}

impl DerivationRule for CancelTrigInverses {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let product = match input {
            Expression::Product(ref p) => p,
            _ => return vec![],
        };

        let factors = product.factors().iter().collect::<HashSet<_>>();

        let contains = |trig: TrigFn, exp: &Expression| {
            factors.iter().any(|f| match f {
                Expression::Trig(t) => t.operation == trig && t.exp() == *exp,
                _ => false,
            })
        };

        let trig_params = factors.iter().filter_map(|f| match f {
            Expression::Trig(t) => Some(t.exp()),
            _ => None,
        });

        let product_without_first_of = |exp1: Expression, exp2: Expression| -> Expression {
            let mut found_1 = false;
            let mut found_2 = false;
            product_of_iter(
                &mut product
                    .factors()
                    .iter()
                    .filter(|f| {
                        if **f == exp1 && !found_1 {
                            found_1 = true;
                            false
                        } else if **f == exp2 && !found_2 {
                            found_2 = true;
                            false
                        } else {
                            true
                        }
                    })
                    .chain(&[Integer::of(1)])
                    .cloned(),
            )
        };

        let mut results = Vec::<Expression>::new();
        let mut try_substitute = |op1: TrigFn, op2: TrigFn, exp: Expression| {
            if contains(op1, &exp) && contains(op2, &exp) {
                results.push(product_without_first_of(
                    TrigExp::of(op1, exp.clone()),
                    TrigExp::of(op2, exp.clone()),
                ))
            }
        };

        for param in trig_params {
            try_substitute(TrigFn::Sin, TrigFn::Csc, param.clone());
            try_substitute(TrigFn::Cos, TrigFn::Sec, param.clone());
            try_substitute(TrigFn::Tan, TrigFn::Cot, param.clone());
        }

        results
            .into_iter()
            .map(|exp| {
                (
                    exp,
                    Argument::new(
                        String::from("Cancel trigonomic inverses"),
                        vec![input.clone()],
                    ),
                )
            })
            .collect()
    }
}

#[cfg(test)]
mod tests {
    use crate::{
        convenience_expressions::{csc, sin, v},
        expressions::product::product_of,
    };

    use super::*;

    #[test]
    fn test_1() {
        let rule = CancelTrigInverses {};

        let start = product_of(&[sin(v("x")), csc(v("x"))]);
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(result, Integer::of(1));
    }
}
