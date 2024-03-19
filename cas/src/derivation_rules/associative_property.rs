use crate::{expressions::{Expression, sum::sum_of, product::product_of}, argument::Argument};

use super::DerivationRule;


/**
* Flattens products in products and sums in sums
*/
pub struct AssociativeProperty {}

impl DerivationRule for AssociativeProperty {
    fn apply(&self, input: crate::expressions::Expression) -> Vec<(crate::expressions::Expression, std::rc::Rc<crate::argument::Argument>)> {
        if let Expression::Sum(ref sum) = input {
            let mut new_terms: Vec<Expression> = vec![];

            for term in sum.terms() {
                match term {
                    Expression::Sum(ref s) => {
                        for t in s.terms() {
                            new_terms.push(t.clone());
                        }
                    },
                    _ => new_terms.push(term.clone()),
                }
            }

            if new_terms.len() == sum.terms().len() {
                return vec![];
            }

            vec![(
                sum_of(&new_terms),
                Argument::new(String::from("Associative property of addition"), vec![input.clone()])
                )]

        } else if let Expression::Product(ref product) = input {
            let mut new_factors: Vec<Expression> = vec![];

            for factor in product.factors() {
                match factor {
                    Expression::Product(ref p) => {
                        for f in p.factors() {
                            new_factors.push(f.clone());
                        }
                    },
                        _ => new_factors.push(factor.clone())
                }
            }

            if new_factors.len() == product.factors().len() {
                return vec![];
            }

            vec![(
                product_of(&new_factors),
                Argument::new(String::from("Associative property of multiplication"), vec![input.clone()])
                )]
            
        } else {
            vec![]
        }
    }
}

#[cfg(test)]
mod tests {
    use crate::expressions::Expression;
    use crate::expressions::{Integer, Sum, Product};

    use super::AssociativeProperty;
    use super::DerivationRule;


    #[test]
    fn test_1() {
        let rule = AssociativeProperty {};

        let sum_of_sums = Sum::of(&[Sum::of(&[Integer::of(1), Integer::of(1)]).unwrap(), Integer::of(1)]).unwrap();
        let product_of_products = Product::of(&[Product::of(&[Integer::of(1), Integer::of(1)]).unwrap(), Integer::of(1)]).unwrap();

        let result1: Vec<Expression> = rule.apply(sum_of_sums).iter().map(|x| x.0.clone()).collect();
        let result2: Vec<Expression> = rule.apply(product_of_products).iter().map(|x| x.0.clone()).collect();

        assert_eq!(result1[0], Sum::of(&[Integer::of(1), Integer::of(1), Integer::of(1)]).unwrap());
        assert_eq!(result2[0], Product::of(&[Integer::of(1), Integer::of(1), Integer::of(1)]).unwrap());
}
}
