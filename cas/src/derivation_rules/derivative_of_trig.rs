use std::rc::Rc;

use crate::{
    argument::Argument,
    convenience_expressions::{abs, power, sqrt},
    expressions::{
        product::product_of, sum::sum_of, trig_expression::TrigFn, Derivative, Exponent,
        Expression, Fraction, Integer, Negation, TrigExp,
    },
};

use super::DerivationRule;

pub struct DerivativeOfTrig {}

impl DerivationRule for DerivativeOfTrig {
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)> {
        let derivative = match input {
            Expression::Derivative(ref d) => d,
            _ => return vec![],
        };

        let Expression::Trig(ref t) = derivative.exp() else {
            return vec![];
        };

        if t.exp() != derivative.relative_to() {
            return vec![];
        }

        let exp = t.exp();

        let result = match t.operation {
            TrigFn::Sin => TrigExp::of(TrigFn::Cos, exp),
            TrigFn::Cos => Negation::of(TrigExp::of(TrigFn::Sin, exp)),
            TrigFn::Tan => Exponent::of(TrigExp::of(TrigFn::Sec, exp), Integer::of(2)),
            TrigFn::Sec => product_of(&[
                TrigExp::of(TrigFn::Sec, exp.clone()),
                TrigExp::of(TrigFn::Tan, exp.clone()),
            ]),
            TrigFn::Csc => Negation::of(product_of(&[
                TrigExp::of(TrigFn::Csc, exp.clone()),
                TrigExp::of(TrigFn::Cot, exp.clone()),
            ])),
            TrigFn::Cot => Negation::of(Exponent::of(
                TrigExp::of(TrigFn::Csc, exp.clone()),
                Integer::of(2),
            )),
            TrigFn::ArcSin => Fraction::of(
                Derivative::of(exp.clone(), derivative.relative_to()),
                sqrt(sum_of(&[
                    Integer::of(1),
                    Negation::of(Exponent::of(exp.clone(), Integer::of(2))),
                ])),
            ),
            TrigFn::ArcCos => Fraction::of(
                Negation::of(Derivative::of(exp.clone(), derivative.relative_to())),
                sqrt(sum_of(&[
                    Integer::of(1),
                    Negation::of(Exponent::of(exp.clone(), Integer::of(2))),
                ])),
            ),
            TrigFn::ArcTan => Fraction::of(
                Derivative::of(exp.clone(), derivative.relative_to()),
                sum_of(&[Integer::of(1), Exponent::of(exp, Integer::of(2))]),
            ),
            TrigFn::ArcCot => Fraction::of(
                Negation::of(Derivative::of(exp.clone(), derivative.relative_to())),
                sum_of(&[Integer::of(1), Exponent::of(exp.clone(), Integer::of(2))]),
            ),
            TrigFn::ArcSec => Fraction::of(
                Integer::of(1),
                product_of(&[
                    abs(exp.clone()),
                    sqrt(sum_of(&[
                        power(exp.clone(), Integer::of(2)),
                        Negation::of(Integer::of(1)),
                    ])),
                ]),
            ),
            TrigFn::ArcCsc => Negation::of(Fraction::of(
                Integer::of(1),
                product_of(&[
                    abs(exp.clone()),
                    sqrt(sum_of(&[
                        power(exp.clone(), Integer::of(2)),
                        Negation::of(Integer::of(1)),
                    ])),
                ]),
            )),
        };

        vec![(
            result,
            Argument::new(
                String::from("Apply trig derivation rule"),
                vec![input],
                self.name(),
            ),
        )]
    }
    fn name(&self) -> String {
        String::from("DerivativeOfTrig")
    }
}
