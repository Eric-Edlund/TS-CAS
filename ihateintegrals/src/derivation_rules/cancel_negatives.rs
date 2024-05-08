use std::rc::Rc;
use std::sync::Arc;

use crate::argument::Argument;
use crate::expressions::Expression;
use crate::expressions::Negation;
use crate::expressions::Product;

use super::DerivationRule;

pub struct CancelNegatives {}

impl DerivationRule for CancelNegatives {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        // If true, result is negative
        let mut sign = false;

        let product: Arc<Product> = match input {
            Expression::Product(ref p) => p.clone(),
            Expression::Negation(ref n) => {
                sign = true;
                match n.exp() {
                    Expression::Product(p) => p,
                    _ => return vec![],
                }
            }
            _ => return vec![],
        };

        let mut new_factors: Vec<Expression> = vec![];

        for factor in product.factors() {
            match factor {
                Expression::Negation(f) => {
                    sign = !sign;
                    new_factors.push(f.exp().clone());
                }
                _ => new_factors.push(factor.clone()),
            }
        }

        let mut result = Product::of(&new_factors).unwrap();
        if sign {
            result = Negation::of(result);
        }

        if result == input {
            return vec![];
        }

        vec![(
            result,
            Argument::new(
                String::from("cancelled negatives"),
                vec![input.clone()],
                self.name(),
            ),
        )]
    }

    fn name(&self) -> String {
        String::from("CancelNegatives")
    }
}

#[cfg(test)]
mod tests {
    use crate::expressions::Integer;
    use crate::expressions::Negation;

    use super::*;

    #[test]
    fn test_1() {
        let rule = CancelNegatives {};

        // Two negatives -> positive
        let first =
            Product::of(&[Negation::of(Integer::of(1)), Negation::of(Integer::of(2))]).unwrap();
        let goal = Product::of(&[Integer::of(1), Integer::of(2)]).unwrap();
        println!("Start: {}, Goal: {}", first, goal);
        let results: Vec<Expression> = rule.apply(first.clone()).into_iter().map(|x| x.0).collect();

        assert!(
            !results.contains(&first),
            "Rules shouldn't return their inputs"
        );

        for exp in &results {
            println!("Contains: {}", exp);
        }

        println!("Num Expressions: {}", &results.len());

        assert!(results.contains(&goal));
    }
}
