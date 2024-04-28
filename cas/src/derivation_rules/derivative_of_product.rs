use std::rc::Rc;

use crate::{
    argument::Argument,
    expressions::{product::product_of, sum::sum_of, Derivative, Expression},
};

use super::DerivationRule;

pub struct ProductRule {}

impl DerivationRule for ProductRule {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let derivative = match input {
            Expression::Derivative(ref d) => d,
            _ => return vec![],
        };
        let variable = &derivative.relative_to();

        let Expression::Product(ref p) = derivative.exp() else {
            return vec![];
        };

        let factors = p.factors();
        let mut result = Vec::<Expression>::new();
        for i in 0..factors.len() {
            let mut new_factors = Vec::new();
            new_factors.extend_from_slice(&factors[0..i]);
            new_factors.push(Derivative::of(factors[i].clone(), variable.clone()));
            new_factors.extend_from_slice(&factors[i + 1..factors.len()]);
            result.push(product_of(&new_factors));
        }

        vec![(
            sum_of(&result),
            Argument::new(String::from("Product rule"), vec![input]),
        )]
    }
    fn name(&self) -> String {
        String::from("DerivativeOfProduct")
    }
}

#[cfg(test)]
mod tests {
    use crate::{convenience_expressions::v, expressions::sum::sum_of};

    use super::*;

    #[test]
    fn test_1() {
        let rule = ProductRule {};

        let start = Derivative::of(product_of(&[v("a"), v("b")]), v("x"));
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(
            result,
            sum_of(&[
                product_of(&[Derivative::of(v("a"), v("x")), v("b")]),
                product_of(&[v("a"), Derivative::of(v("b"), v("x"))])
            ])
        );
    }
}
