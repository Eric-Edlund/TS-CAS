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

/// Decomposes expressions, finding equivalents for their components using
/// the given equivalence finding rule.
pub fn equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut result = HashSet::<Derivation>::new();
    result.extend(direct(exp));

    result.extend(match exp {
        Expression::Variable(_) => vec![],
        Expression::Integer(_) => vec![],
        Expression::ConstantExp(_) => vec![],
        Expression::Substitution(_) => vec![],
        Expression::Sum(_) => sum_equiv(exp, direct),
        Expression::Product(_) => product_equiv(exp, direct),
        Expression::Exponent(_) => exponent_equiv(exp, direct),
        Expression::Fraction(_) => fraction_equiv(exp, direct),
        Expression::Integral(_) => integral_equiv(exp, direct),
        Expression::Derivative(_) => derivative_equiv(exp, direct),
        Expression::Negation(_) => negation_equiv(exp, direct),
        Expression::Trig(_) => trig_equiv(exp, direct),
        Expression::Logarithm(_) => log_equiv(exp, direct),
        Expression::AbsoluteValue(_) => abs_equiv(exp, direct),
    });

    result.into_iter().collect()
}

fn sum_equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut equivalent_sums = HashSet::<Derivation>::new();

    let Expression::Sum(ref sum) = exp else {
        panic!();
    };

    // Find equivalents for each term
    for (i, term) in sum.terms().iter().enumerate() {
        for deriv in equiv(term, direct) {
            let mut new_terms = sum.terms().clone();
            new_terms[i] = deriv.0;
            let result = (sum_of(&new_terms), deriv.1);
            equivalent_sums.insert(result);
        }
    }

    equivalent_sums.into_iter().collect()
}

fn product_equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut equivalent_products = HashSet::<Derivation>::new();

    let Expression::Product(ref product) = exp else {
        panic!();
    };

    // Find equivalents for each factor
    for (i, term) in product.factors().iter().enumerate() {
        for deriv in equiv(term, direct) {
            let mut new_factors = product.factors().clone();
            new_factors[i] = deriv.0;
            let result = (product_of(&new_factors), deriv.1);
            equivalent_products.insert(result);
        }
    }

    equivalent_products.into_iter().collect()
}

fn exponent_equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::Exponent(ref exponent) = exp else {
        panic!();
    };

    // For power
    for deriv in equiv(&exponent.power(), direct) {
        equivalents.push((Exponent::of(exponent.base(), deriv.0), deriv.1));
    }

    // For base
    for deriv in equiv(&exponent.base(), direct) {
        equivalents.push((Exponent::of(deriv.0, exponent.power()), deriv.1));
    }

    equivalents
}

fn fraction_equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::Fraction(ref fraction) = exp else {
        panic!();
    };

    // For numerator
    for deriv in equiv(&fraction.numerator(), direct) {
        equivalents.push((Fraction::of(deriv.0, fraction.denominator()), deriv.1));
    }
    // For denominator
    for deriv in equiv(&fraction.denominator(), direct) {
        equivalents.push((Fraction::of(fraction.numerator(), deriv.0), deriv.1));
    }

    equivalents
}

fn integral_equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::Integral(ref integral) = exp else {
        panic!();
    };

    // for integrand
    for deriv in equiv(&integral.integrand(), direct) {
        equivalents.push((Integral::of(deriv.0, integral.relative_to()), deriv.1));
    }

    // for variable
    for deriv in equiv(&integral.relative_to(), direct) {
        equivalents.push((Integral::of(integral.integrand(), deriv.0), deriv.1));
    }

    equivalents
}

fn derivative_equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::Derivative(ref derivative) = exp else {
        panic!();
    };

    // for exp
    for deriv in equiv(&derivative.exp(), direct) {
        equivalents.push((Derivative::of(deriv.0, derivative.relative_to()), deriv.1));
    }

    // for variable
    for deriv in equiv(&derivative.relative_to(), direct) {
        equivalents.push((Derivative::of(derivative.exp(), deriv.0), deriv.1));
    }

    equivalents
}

fn negation_equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::Negation(ref negation) = exp else {
        panic!();
    };

    for deriv in equiv(&negation.child(), direct) {
        equivalents.push((Negation::of(deriv.0), deriv.1));
    }
    equivalents
}

fn trig_equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::Trig(ref trig) = exp else {
        panic!();
    };

    for deriv in equiv(&trig.exp(), direct) {
        equivalents.push((TrigExp::of(trig.operation, deriv.0), deriv.1));
    }
    equivalents
}

fn log_equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::Logarithm(ref log) = exp else {
        panic!();
    };

    // for exp
    for deriv in equiv(&log.base(), direct) {
        equivalents.push((Logarithm::of(deriv.0, log.exp()), deriv.1));
    }

    // for variable
    for deriv in equiv(&log.exp(), direct) {
        equivalents.push((Logarithm::of(log.base(), deriv.0), deriv.1));
    }

    equivalents
}

fn abs_equiv(exp: &Expression, direct: &EquivFn) -> EquivList {
    let mut equivalents = Vec::<Derivation>::new();
    let Expression::AbsoluteValue(ref abs) = exp else {
        panic!();
    };

    for deriv in equiv(&abs.exp(), direct) {
        equivalents.push((AbsoluteValue::of(deriv.0), deriv.1));
    }

    equivalents
}
