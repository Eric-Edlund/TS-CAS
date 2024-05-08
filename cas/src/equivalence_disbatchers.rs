use std::{collections::HashSet, rc::Rc};

use crate::{
    argument::Argument,
    expressions::{
        product::product_of, sum::sum_of, AbsoluteValue, Derivative, Exponent, Expression,
        Fraction, Integral, Logarithm, Negation, TrigExp,
    },
};

type Derivation = (Expression, Rc<Argument>);
type EquivList = Vec<Derivation>;
type EquivFn = dyn Fn(&Expression) -> EquivList;

pub enum GuardDecision {
    /// Explore and explore children.
    Explore,
    /// Do not explore, but continue to explore children.
    ExploreChildren,
    /// Do not explore, do not explore children.
    TurnAround,
}

/// Decomposes expressions, finding equivalents for their components using
/// the given equivalence finding rule.
pub fn equiv(
    exp: &Expression,
    direct: &EquivFn,
    guard: &impl Fn(&Expression) -> GuardDecision,
) -> EquivList {
    let mut result = HashSet::<Derivation>::new();
    let decision = guard(exp);
    if let GuardDecision::Explore = decision {
        result.extend(direct(exp))
    }

    if matches!(
        decision,
        GuardDecision::Explore | GuardDecision::ExploreChildren
    ) {
        result.extend(match exp {
            Expression::Variable(_) => vec![],
            Expression::Integer(_) => vec![],
            Expression::ConstantExp(_) => vec![],
            Expression::Substitution(_) => vec![],
            Expression::Sum(_) => sum_equiv(exp, direct, guard),
            Expression::Product(_) => product_equiv(exp, direct, guard),
            Expression::Exponent(_) => exponent_equiv(exp, direct, guard),
            Expression::Fraction(_) => fraction_equiv(exp, direct, guard),
            Expression::Integral(_) => integral_equiv(exp, direct, guard),
            Expression::Derivative(_) => derivative_equiv(exp, direct, guard),
            Expression::Negation(_) => negation_equiv(exp, direct, guard),
            Expression::Trig(_) => trig_equiv(exp, direct, guard),
            Expression::Logarithm(_) => log_equiv(exp, direct, guard),
            Expression::AbsoluteValue(_) => abs_equiv(exp, direct, guard),
            Expression::Undefined => vec![],
        });
    }

    result.into_iter().collect()
}

fn sum_equiv(
    exp: &Expression,
    direct: &EquivFn,
    guard: &impl Fn(&Expression) -> GuardDecision,
) -> EquivList {
    let mut equivalent_sums = HashSet::<Derivation>::new();

    let Expression::Sum(ref sum) = exp else {
        panic!();
    };

    // Find equivalents for each term
    for (i, term) in sum.terms().iter().enumerate() {
        for deriv in equiv(term, direct, guard) {
            let mut new_terms = sum.terms().clone();
            new_terms[i] = deriv.0;
            let result = (sum_of(&new_terms), deriv.1);
            equivalent_sums.insert(result);
        }
    }

    equivalent_sums.into_iter().collect()
}

fn product_equiv(
    exp: &Expression,
    direct: &EquivFn,
    guard: &impl Fn(&Expression) -> GuardDecision,
) -> EquivList {
    let mut equivalent_products = HashSet::<Derivation>::new();

    let Expression::Product(ref product) = exp else {
        panic!();
    };

    // Find equivalents for each factor
    for (i, term) in product.factors().iter().enumerate() {
        for deriv in equiv(term, direct, guard) {
            let mut new_factors = product.factors().clone();
            new_factors[i] = deriv.0;
            let result = (product_of(&new_factors), deriv.1);
            equivalent_products.insert(result);
        }
    }

    equivalent_products.into_iter().collect()
}

fn exponent_equiv(
    exp: &Expression,
    direct: &EquivFn,
    guard: &impl Fn(&Expression) -> GuardDecision,
) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::Exponent(ref exponent) = exp else {
        panic!();
    };

    // For power
    for deriv in equiv(&exponent.power(), direct, guard) {
        equivalents.push((Exponent::of(exponent.base(), deriv.0), deriv.1));
    }

    // For base
    for deriv in equiv(&exponent.base(), direct, guard) {
        equivalents.push((Exponent::of(deriv.0, exponent.power()), deriv.1));
    }

    equivalents
}

fn fraction_equiv(
    exp: &Expression,
    direct: &EquivFn,
    guard: &impl Fn(&Expression) -> GuardDecision,
) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::Fraction(ref fraction) = exp else {
        panic!();
    };

    // For numerator
    for deriv in equiv(&fraction.numerator(), direct, guard) {
        equivalents.push((Fraction::of(deriv.0, fraction.denominator()), deriv.1));
    }
    // For denominator
    for deriv in equiv(&fraction.denominator(), direct, guard) {
        equivalents.push((Fraction::of(fraction.numerator(), deriv.0), deriv.1));
    }

    equivalents
}

fn integral_equiv(
    exp: &Expression,
    direct: &EquivFn,
    guard: &impl Fn(&Expression) -> GuardDecision,
) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::Integral(ref integral) = exp else {
        panic!();
    };

    // for integrand
    for deriv in equiv(&integral.integrand(), direct, guard) {
        equivalents.push((Integral::of(deriv.0, integral.variable()), deriv.1));
    }

    // for variable
    for deriv in equiv(&integral.variable(), direct, guard) {
        equivalents.push((Integral::of(integral.integrand(), deriv.0), deriv.1));
    }

    equivalents
}

fn derivative_equiv(
    exp: &Expression,
    direct: &EquivFn,
    guard: &impl Fn(&Expression) -> GuardDecision,
) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::Derivative(ref derivative) = exp else {
        panic!();
    };

    // for exp
    for deriv in equiv(&derivative.exp(), direct, guard) {
        equivalents.push((Derivative::of(deriv.0, derivative.relative_to()), deriv.1));
    }

    // for variable
    for deriv in equiv(&derivative.relative_to(), direct, guard) {
        equivalents.push((Derivative::of(derivative.exp(), deriv.0), deriv.1));
    }

    equivalents
}

fn negation_equiv(
    exp: &Expression,
    direct: &EquivFn,
    guard: &impl Fn(&Expression) -> GuardDecision,
) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::Negation(ref negation) = exp else {
        panic!();
    };

    for deriv in equiv(&negation.exp(), direct, guard) {
        equivalents.push((Negation::of(deriv.0), deriv.1));
    }
    equivalents
}

fn trig_equiv(
    exp: &Expression,
    direct: &EquivFn,
    guard: &impl Fn(&Expression) -> GuardDecision,
) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::Trig(ref trig) = exp else {
        panic!();
    };

    for deriv in equiv(&trig.exp(), direct, guard) {
        equivalents.push((TrigExp::of(trig.operation, deriv.0), deriv.1));
    }
    equivalents
}

fn log_equiv(
    exp: &Expression,
    direct: &EquivFn,
    guard: &impl Fn(&Expression) -> GuardDecision,
) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::Logarithm(ref log) = exp else {
        panic!();
    };

    // for exp
    for deriv in equiv(&log.base(), direct, guard) {
        equivalents.push((Logarithm::of(deriv.0, log.exp()), deriv.1));
    }

    // for variable
    for deriv in equiv(&log.exp(), direct, guard) {
        equivalents.push((Logarithm::of(log.base(), deriv.0), deriv.1));
    }

    equivalents
}

fn abs_equiv(
    exp: &Expression,
    direct: &EquivFn,
    guard: &impl Fn(&Expression) -> GuardDecision,
) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::AbsoluteValue(ref abs) = exp else {
        panic!();
    };

    for deriv in equiv(&abs.exp(), direct, guard) {
        equivalents.push((AbsoluteValue::of(deriv.0), deriv.1));
    }

    equivalents
}

#[cfg(test)]
mod tests {
    use crate::{convenience_expressions::v, expressions::Integer};

    use super::*;

    #[test]
    fn equiv_guard_predicate() {
        let inner = Fraction::of(v("x"), v("y"));
        let result = equiv(
            &Fraction::of(inner.clone(), v("x")),
            &|_| {
                vec![(
                    Integer::of(1),
                    Argument::new(String::from(""), vec![], String::from("")),
                )]
            },
            &|e| {
                if e != &inner {
                    GuardDecision::Explore
                } else {
                    GuardDecision::ExploreChildren
                }
            },
        );

        assert_eq!(result.len(), 4);
    }
}
