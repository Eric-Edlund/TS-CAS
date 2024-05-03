use std::{rc::Rc, sync::RwLock};

use crate::{argument::Argument, expressions::Expression};

pub mod derivatives;
pub mod helpers;

mod add_fractions;
mod additive_identity;
mod anything_times_zero;
mod associative_property;
mod cancel_negatives;
mod cancel_trig_arcs;
mod cancel_trig_inverses;
mod combine_common_factors;
mod derivative_constant_coefficients;
mod derivative_of_constant;
mod derivative_of_negation;
mod derivative_of_power;
mod derivative_of_product;
mod derivative_of_sum;
mod derivative_of_trig;
mod distributive_property;
mod divide_fractions;
mod division_identity;
mod evaluate_exponents;
mod evaluate_fractions;
mod evaluate_logs;
mod evaluate_products;
mod evaluate_sums;
mod exponent_to_one;
mod exponent_to_zero;
mod foil;
mod fractions_in_denominator;
mod imaginary_identity;
mod inline_substitutions;
mod integral_constant_coefficients;
mod integral_of_constant;
mod integral_of_negative_one;
mod integral_of_trig;
mod integral_pull_out_negative;
mod integral_sum_rule;
mod integral_to_natural_log;
mod integrate_arctrig;
mod integration_by_substitution;
mod integration_power_rule;
mod log_of_one;
mod make_common_denominators;
mod multiplicative_identity;
mod multiply_exponent_powers;
mod multiply_exponents;
mod multiply_fractions;
mod one_to_any_power;
mod products_into_numerator;
mod propogate_undefined;
mod pull_negative_arround_fraction;
mod pull_out_unit_fractions;
mod pythagorean_identities;
mod split_fractions_over_addition;
mod subtract_exponents_on_fractions;
mod sum_coefficients_of_terms;
mod tan_identity;
mod trig_reflections;
mod undefined_fractions;
mod unit_fraction;
mod zero_times_anything;

pub trait DerivationRule {
    /// Produces a set of equivalent expressions from the given
    /// one. Result does not include the input.
    fn apply(&self, input: Expression) -> Vec<(Expression, Rc<Argument>)>;

    /// Returns the name for the rule so that it can be referenced.
    fn name(&self) -> String;
}

pub static ALL_RULES: RwLock<&[&(dyn DerivationRule + Sync)]> = RwLock::new(&[
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
    &foil::Foil {},
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
    &fractions_in_denominator::NestedFractions {},
    &multiply_fractions::MultiplyFractions {},
    &pull_negative_arround_fraction::PullNegativeOutOfFraction {},
    &integrate_arctrig::IntegrateArcTrig {},
    &imaginary_identity::ImaginaryIdentity {},
    &integration_by_substitution::IntegrateBySubstitution {},
    &inline_substitutions::InlineSubstitutions {},
    &integral_to_natural_log::IntegralToNaturalLog {},
    &integral_of_negative_one::FlipNegativeOne {},
    &split_fractions_over_addition::SplitFractionsAddition {},
    &unit_fraction::UnitFraction {},
    &anything_times_zero::AnythingTimesZero {},
    &undefined_fractions::UndefinedFractions {},
    &pull_out_unit_fractions::PullOutUnitFractions {},
    &exponent_to_one::ExponentToOne {},
    &propogate_undefined::PropogateUndefined {},
    &multiply_exponents::MultiplyExponents {},
]);

/// These rules always bring us closer to a simplified expression. Once all of
/// them have been applied to an expression, if any of them yielded a result,
/// we are confident that he original expression is no longer of interest.
pub static STRICT_SIMPLIFYING_RULES: RwLock<&[&(dyn DerivationRule + Sync)]> = RwLock::new(&[
    &associative_property::AssociativeProperty {},
    &integral_constant_coefficients::IntegralConstCoeff {},
    &derivative_constant_coefficients::PullOutConst {},
    &derivative_of_trig::DerivativeOfTrig {},
    &integral_pull_out_negative::IntegralPullOutNegative {},
    &integral_to_natural_log::IntegralToNaturalLog {},
    &integral_of_negative_one::FlipNegativeOne {},
    &pull_out_unit_fractions::PullOutUnitFractions {},
    &multiply_exponents::MultiplyExponents {},
]);

/// These rules have the same properties as arithmetic rules when their
/// input contains no variables.
pub static ARITHMETIC_IF_CONSTANT: RwLock<&[&(dyn DerivationRule + Sync)]> = RwLock::new(&[
    &make_common_denominators::MakeCommonDenominators {},
    &combine_common_factors::CombineCommonFactors {},
]);

/// These rules evaluate numeric expressions without losing any percision.
pub static ARITHMETIC: RwLock<&[&(dyn DerivationRule + Sync)]> = RwLock::new(&[
    &evaluate_sums::EvaluateSums {},
    &evaluate_products::EvaluateProducts {},
    &evaluate_logs::EvaluateLogs {},
    &evaluate_exponents::EvaluateExponents {},
    &evaluate_fractions::EvaluateFractions {},
]);

/// These rules could by applied in any order one at a time and in every case
/// that an equivalent is derived, the expression it was derived from may be
/// safetly ignored.
///
/// These identities are applied in order.
pub static IDENTITIES: RwLock<&[&(dyn DerivationRule + Sync)]> = RwLock::new(&[
    &propogate_undefined::PropogateUndefined {},
    &undefined_fractions::UndefinedFractions {},
    &anything_times_zero::AnythingTimesZero {},
    &additive_identity::AdditiveIdentity {},
    &cancel_negatives::CancelNegatives {},
    &exponent_to_zero::ExponentToZero {},
    &exponent_to_one::ExponentToOne {},
    &log_of_one::LogOfOne {},
    &multiplicative_identity::MultiplicativeIdentity {},
    &one_to_any_power::OneToAnything {},
    &division_identity::DivisionIdentity {},
    &unit_fraction::UnitFraction {},
    &integral_of_constant::IntegralOfConst {},
    &derivative_of_constant::DerivativeOfConst {},
]);
