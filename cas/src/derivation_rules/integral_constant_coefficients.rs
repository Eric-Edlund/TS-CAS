use std::rc::Rc;

use crate::{argument::Argument, derivation_rules::helpers::is_constant, expressions::{product::product_of_iter, Expression, Integer, Integral}};

use super::DerivationRule;


/**
* Pulls constants out of integrals.
* This includes variables which are not dependent on the integral delta.
*/
pub struct IntegralConstCoeff {}

impl DerivationRule for IntegralConstCoeff {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let Expression::Integral(ref integral) = input 
        else {
            return vec![];
        };

        let factors = match integral.integrand() {
            Expression::Product(p) => p.factors().clone(),
            _ => vec![integral.integrand()],
        };

        let (constant, not): (Vec<&Expression>, Vec<&Expression>) = factors
            .iter()
            .partition(|e| is_constant(e, &integral.relative_to()));

        if constant.len() == 0 {
            return vec![];
        }

        if constant.len() == 1 && **constant.first().unwrap() == Integer::of(1) {
            return vec![];
        }

        vec![(
            product_of_iter(&mut constant.into_iter().chain(&[Integral::of(
                product_of_iter(&mut not.into_iter().cloned()),
                integral.relative_to()
            )]).cloned()),
            Argument::new(String::from("Pull out constants"), vec![input])
        )]
    }
}

#[cfg(test)]
mod tests {
    use crate::{convenience_expressions::{i, v}, derivation_rules::DerivationRule, expressions::{product::product_of, Integral}};

    use super::IntegralConstCoeff;

    #[test]
    fn test_1() {
        let rule = IntegralConstCoeff {};

        let start = Integral::of(product_of(&[i(1), i(2), v("a")]), v("x"));
        let result = rule.apply(start).first().unwrap().0.clone();

        assert_eq!(result, product_of(&[i(1), i(2), v("a"),
            Integral::of(i(1), v("x"))
        ]));

        let start2 = Integral::of(product_of(&[i(3), v("x"), v("y")]), v("y"));
        let result2 = rule.apply(start2).first().unwrap().0.clone();

        assert_eq!(result2, product_of(&[i(3), v("x"),
            Integral::of(v("y"), v("y"))
        ]));

        let start3 = Integral::of(product_of(&[v("x"), v("y")]), v("y"));
        let result3 = rule.apply(start3).first().unwrap().0.clone();

        assert_eq!(result3, product_of(&[v("x"),
            Integral::of(v("y"), v("y"))
        ]));
    
        let start4 = Integral::of(product_of(&[v("x"), v("y")]), v("x"));
        let result4 = rule.apply(start4).first().unwrap().0.clone();

        assert_eq!(result4, product_of(&[v("y"),
            Integral::of(v("x"), v("x"))
        ]));
    }
}
