use std::rc::Rc;

use crate::{
    argument::Argument,
    expressions::{product::product_of, Fraction},
    Expression,
};

use super::{helpers::factors_in, DerivationRule};

/// (ab)/(ac) = (a/a)(b/c)
pub struct PullOutUnitFractions {}

impl DerivationRule for PullOutUnitFractions {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let frac = match input {
            Expression::Fraction(ref f) => f,
            _ => return vec![],
        };

        let mut numerator = factors_in(&frac.numerator());
        let mut denominator = factors_in(&frac.denominator());

        let mut common = Vec::<Expression>::new();

        let mut i = 0;
        'outer: while i < numerator.len() {
            let mut j = 0;
            while j < denominator.len() {
                if numerator[i] == denominator[j] {
                    common.push(numerator.remove(i));
                    denominator.remove(j);
                    continue 'outer;
                }
                j += 1;
            }
            i += 1;
        }

        if common.is_empty() || (numerator.is_empty() && denominator.is_empty()) {
            return vec![];
        }

        let new_rhs = if denominator.is_empty() {
            product_of(&numerator)
        } else {
            Fraction::of(product_of(&numerator), product_of(&denominator))
        };

        vec![(
            product_of(&[
                Fraction::of(product_of(&common), product_of(&common)),
                new_rhs,
            ]),
            Argument::new(
                String::from("Pull same out of top and bottom of fraction"),
                vec![input],
                self.name(),
            ),
        )]
    }

    fn name(&self) -> String {
        String::from("PullOutUnitFractions")
    }
}

#[cfg(test)]
mod tests {
    use crate::{
        convenience_expressions::v,
        derivation_rules::helpers::{expect_no_result, expect_result},
        expressions::{product::product_of, Fraction},
    };

    use super::*;

    #[test]
    fn test_1() {
        let rule = PullOutUnitFractions {};

        expect_result(
            &rule,
            Fraction::of(product_of(&[v("a"), v("b")]), product_of(&[v("a"), v("c")])),
            product_of(&[Fraction::of(v("a"), v("a")), Fraction::of(v("b"), v("c"))]),
        );

        expect_no_result(&rule, Fraction::of(v("a"), v("a")))
    }
}
