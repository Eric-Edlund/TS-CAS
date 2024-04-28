//
// // Contains all the logic for recursive derivation
//
// use crate::{convenience_expressions::{i, power, sum_of_iter, v}, derivation_rules::helpers::children_rec, expressions::{product::{product_of}, sum::sum_of, Derivative, Expression, Fraction, Integer, Logarithm, Negation, Product, Sum}};
//
// use super::helpers::is_constant;
//
// /**
// * Finds the derivative of the given expression relative to the given variable.
// * This function is recursive and the result will not contain a Derivative operation.
// */
// pub fn evaluate_derivative(exp: &Derivative) -> Expression {
//     fn contains_derivative(exp: &Expression) -> bool {
//         children_rec(exp).any(|e| matches!(e, Expression::Derivative(_)))
//     }
//
//     let variable = &exp.relative_to();
//     let mut result: Expression = exp.exp();
//
//     while contains_derivative(&result) {
//         result = match result {
//             Expression::Integer(_) => Integer::of(0),
//             Expression::Variable(_) => derivative_of_variable(&exp.exp(), variable),
//             Expression::Sum(ref s) => derivative_of_sum(s, variable),
//             Expression::Product(ref p) => derivative_of_product(p, variable),
//             Expression::Fraction(ref f) => derivative_of_fraction(f, variable),
//             Expression::Negation(ref n) => Negation::of(Derivative::of(n.child(), variable.clone())),
//             Expression::Logarithm(ref l) => derivative_of_logarithm(l, variable),
//             e=> panic!("Not implemented derivative for expression type {}", e)
//         }
//     }
//
//     result
// }
//
// // These remaining derivative_of_* functions are not recursive.
// // They return the result of applying one derivation rule, leaving
// // derivative operations in the result.
//
// fn derivative_of_variable(exp: &Expression, variable: &Expression) -> Expression {
//     if is_constant(exp, variable) {
//         Integer::of(0)
//     } else {
//         Integer::of(1)
//     }
// }
//
// fn derivative_of_sum(exp: &Sum, variable: &Expression) -> Expression {
//     sum_of_iter(&mut exp.terms().into_iter()
//         .map(|term| Derivative::of(term.clone(), variable.clone())))
// }
//
// fn derivative_of_product(exp: &Product, variable: &Expression) -> Expression {
//     // https://en.wikipedia.org/wiki/Product_rule#Generalizations
//     let factors = exp.factors();
//     let mut result = Vec::<Expression>::new();
//     for i in 0..factors.len() {
//         let mut new_factors = Vec::new();
//         new_factors.extend_from_slice(&factors[0..i]);
//         new_factors.push(Derivative::of(factors[i].clone(), variable.clone()));
//         new_factors.extend_from_slice(&factors[i+1..factors.len()]);
//         result.push(product_of(&new_factors));
//     }
//
//     product_of(&result)
// }
//
// fn derivative_of_fraction(exp: &Fraction, variable: &Expression) -> Expression {
//     Fraction::of(
//         sum_of(&[
//             product_of(&[exp.denominator(), Derivative::of(exp.numerator(), variable.clone())]),
//             Negation::of(
//                 product_of(&[
//                     exp.numerator(),
//                     Derivative::of(exp.denominator(), variable.clone())
//                 ])
//             )
//         ]),
//         power(exp.denominator(), i(2))
//     )
// }
//
// fn derivative_of_logarithm(exp: &Logarithm, variable: &Expression) -> Expression {
//     if !is_constant(&exp.base(), variable) {
//         panic!("Can't derivate logarithm with non-constant base");
//     }
//     Fraction::of(
//         Derivative::of(exp.exp(), variable.clone()),
//         product_of(&[Logarithm::of(v("e"), exp.base()), exp.exp()])
//     )
// }
