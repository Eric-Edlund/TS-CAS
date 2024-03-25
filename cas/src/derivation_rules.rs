use std::{rc::Rc, sync::Mutex};

use crate::{argument::Argument, expressions::Expression};

pub mod helpers;
pub mod derivatives;

mod cancel_negatives;
mod additive_identity;
mod anything_times_zero;
mod associative_property;
mod evaluate_sums;
mod multiplicative_identity;
mod combine_common_factors;
mod division_identity;
mod log_of_one;
mod distributive_property;
mod exponent_to_zero;
mod multiply_exponent_powers;
mod divide_fractions;
mod foil;
mod sum_coefficients_of_terms;
mod subtract_exponents_on_fractions;
mod evaluate_products;
mod evaluate_fractions;
mod evaluate_logs;
mod make_common_denominators;
mod integration_power_rule;
mod integral_sum_rule;
mod integral_constant_coefficients;
mod integral_of_constant;
mod derivative_of_constant;
mod derivative_of_power;
mod derivative_of_product;
mod derivative_of_sum;
mod derivative_of_negation;
mod derivative_constant_coefficients;
mod evaluate_exponents;
mod pythagorean_identities;
mod tan_identity;
mod integral_of_trig;
mod derivative_of_trig;
mod cancel_trig_inverses;
mod cancel_trig_arcs;
mod trig_reflections;
mod integral_pull_out_negative;
mod products_into_numerator;
mod one_to_any_power;
mod add_fractions;
mod fractions_in_denominator;
mod multiply_fractions;
mod pull_negative_arround_fraction;
mod integrate_arctrig;
mod imaginary_identity;
mod integration_by_substitution;

pub trait DerivationRule {
    /**
     * Produces a set of equivalent expressions from the given
     * one. Result does not include the input.
     */
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)>;
}

pub static ALL_RULES: Mutex<&[&(dyn DerivationRule + Sync)]> =
    Mutex::new(&[
    &cancel_negatives::CancelNegatives {},
    &additive_identity::AdditiveIdentity {},
    &associative_property::AssociativeProperty {},
    &evaluate_sums::EvaluateSums {},
    &multiplicative_identity::MultiplicativeIdentity {},
    &combine_common_factors::CombineCommonFactors {},
    &division_identity::DivisionIdentity {},
    &log_of_one::LogOfOne {},
    &distributive_property::DistributiveProperty {},
    &exponent_to_zero::ExponentToZero {},
    &multiply_exponent_powers::MultiplyExponentPowers {},
    &divide_fractions::DivideFractions {},
    &foil::FOIL {},
    // TODO: These rules aren't passing tests yet
    // &sum_coefficients_of_terms::SumCoefficientsOfTerms {},
    // &subtract_exponents_on_fractions::SubtractExponentsOnFractions {},
    &evaluate_products::EvaluateProducts {},
    &evaluate_fractions::EvaluateFractions {},
    &evaluate_logs::EvaluateLogs {},
    &make_common_denominators::MakeCommonDenominators {},
    &integration_power_rule::IntegralPowerRule {},
    &integral_sum_rule::IntegralSumRule {},
    &integral_constant_coefficients::IntegralConstCoeff {},
    &integral_of_constant::IntegralOfConst {},
    &derivative_of_constant::DerivativeOfConst {},
    &derivative_of_power::PowerRule {},
    &derivative_of_sum::DerivativeOfSum {},
    &derivative_of_negation::PullOutNegation {},
    &derivative_constant_coefficients::PullOutConst {},
    &evaluate_exponents::EvaluateExponents {},
    &pythagorean_identities::Pythagoras {},
    &tan_identity::TanIdentity {},
    &integral_of_trig::IntegralOfTrig {},
    &derivative_of_trig::DerivativeOfTrig {},
    &cancel_trig_inverses::CancelTrigInverses {},
    &cancel_trig_arcs::CancelTrigArcFunctions {},
    &trig_reflections::TrigReflections {},
    &integral_pull_out_negative::IntegralPullOutNegative {},
    &products_into_numerator::ProductsIntoNumerator {},
    &one_to_any_power::OneToAnything {},
    &add_fractions::AddFractions {},
    &fractions_in_denominator::FractionInDenominator {},
    &multiply_fractions::MultiplyFractions {},
    &pull_negative_arround_fraction::PullNegativeOutOfFraction {},
    &integrate_arctrig::IntegrateArcTrig {},
    &imaginary_identity::ImaginaryIdentity {},
    &integration_by_substitution::IntegrateBySubstitution {},
]);

pub static STRICT_SIMPLIFYING_RULES: Mutex<&[&(dyn DerivationRule + Sync)]> =
    Mutex::new(&[
    &cancel_negatives::CancelNegatives {},
    &additive_identity::AdditiveIdentity {},
    &associative_property::AssociativeProperty {},
    &evaluate_sums::EvaluateSums {},
    &multiplicative_identity::MultiplicativeIdentity {},
    &division_identity::DivisionIdentity {},
    &log_of_one::LogOfOne {},
    &exponent_to_zero::ExponentToZero {},
    &evaluate_products::EvaluateProducts {},
    &evaluate_logs::EvaluateLogs {},
    &integral_constant_coefficients::IntegralConstCoeff {},
    &integral_of_constant::IntegralOfConst {},
    &derivative_of_constant::DerivativeOfConst {},
    &derivative_constant_coefficients::PullOutConst {},
    &evaluate_exponents::EvaluateExponents {},
    &derivative_of_trig::DerivativeOfTrig {},
    &integral_pull_out_negative::IntegralPullOutNegative {},
    &one_to_any_power::OneToAnything {},
]);

