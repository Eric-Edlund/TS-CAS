use std::rc::Rc;

use crate::{argument::Argument, expressions::{product::product_of_iter, Derivative, Expression, Integer}};

use super::{helpers::is_constant, DerivationRule};


/**
* Pulls out constant factors from integrals of products.
*/
pub struct PullOutConst {}

impl DerivationRule for PullOutConst {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let derivative = match input {
            Expression::Derivative(ref d) => d,
            _ => return vec![]
        };

        let Expression::Product(ref p) = derivative.exp()
        else {
            return vec![];
        };

        let (constant, not): (Vec<&Expression>, Vec<&Expression>) = p.factors()
            .iter()
            .partition(|f| is_constant(&f, &derivative.relative_to()));

        if constant.len() == 1 && **constant.first().unwrap() == Integer::of(1) {
            return vec![];
        };


        vec![(
            product_of_iter(&mut constant.into_iter().chain(&[Derivative::of(
                product_of_iter(&mut not.into_iter().cloned()),
                derivative.relative_to()
            )]).cloned()),
            Argument::new(String::from("Pull out constants"), vec![input])
        )]

    }
}

#[cfg(test)]
mod tests {
    use crate::{convenience_expressions::v, expressions::product::product_of};

    use super::*;

    #[test]
    fn test_1() {
        let rule = PullOutConst {};

        let start = Derivative::of(product_of(&[v("a"), v("b")]), v("b"));
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(result, product_of(&[v("a"), 
            Derivative::of(v("b"), v("b"))
        ]));
    }
}

