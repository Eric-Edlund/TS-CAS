use crate::convenience_expressions::power;

use super::{
    constant::Constant, product::product_of, sum::sum_of, trig_expression::TrigFn,
    variable::Variable, AbsoluteValue, ConstantExp, Derivative, Exponent, Expression, Fraction,
    Integer, Integral, Logarithm, Negation, TrigExp,
};
use anyhow::anyhow;
use serde_json::{from_str, Value};

/// Reads expression objects out of JSON expressions

/// Reads a JSON string into an expression or give an error message.
pub fn read_object_from_json(json: &str) -> Result<Expression, anyhow::Error> {
    let obj: Value = match from_str(json) {
        Ok(val) => val,
        Err(_) => return Err(anyhow!("Not a json")),
    };

    read_obj_rec(&obj)
}

fn read_obj_rec(object: &Value) -> Result<Expression, anyhow::Error> {
    match object {
        Value::Array(arr) => match arr.first().unwrap().as_str().unwrap() {
            "Sum" => {
                let terms = arr.iter().skip(1).map(read_obj_rec);

                for t in terms.clone() {
                    if t.is_err() {
                        return Err(anyhow!("Undefined sub expression"));
                    }
                }
                Ok(sum_of(
                    &terms.map(|term| term.unwrap()).collect::<Vec<Expression>>(),
                ))
            }
            "Product" => {
                let factors = arr.iter().skip(1).map(read_obj_rec);
                if factors.clone().any(|f| f.is_err()) {
                    return Err(anyhow!("Undefined sub expression"));
                }
                Ok(product_of(
                    &factors.map(|f| f.unwrap()).collect::<Vec<Expression>>(),
                ))
            }
            "Divide" => {
                let numerator = match read_obj_rec(&arr[1]) {
                    Ok(val) => val,
                    Err(val) => return Err(val),
                };
                let denominator = match read_obj_rec(&arr[2]) {
                    Ok(val) => val,
                    Err(val) => return Err(val),
                };

                Ok(Fraction::of(numerator, denominator))
            }
            "Exponent" => Ok(power(read_obj_rec(&arr[1])?, read_obj_rec(&arr[2])?)),
            "Logarithm" => Ok(Logarithm::of(
                read_obj_rec(&arr[1])?,
                read_obj_rec(&arr[2])?,
            )),
            "Integral" => Ok(Integral::of(read_obj_rec(&arr[1])?, read_obj_rec(&arr[2])?)),
            "Derivative" => Ok(Derivative::of(
                read_obj_rec(&arr[1])?,
                read_obj_rec(&arr[2])?,
            )),
            "Pow" => Ok(Exponent::of(read_obj_rec(&arr[1])?, read_obj_rec(&arr[2])?)),
            "Negation" => Ok(Negation::of(read_obj_rec(&arr[1])?)),
            "Sin" => Ok(TrigExp::of(TrigFn::Sin, read_obj_rec(&arr[1])?)),
            "Cos" => Ok(TrigExp::of(TrigFn::Cos, read_obj_rec(&arr[1])?)),
            "Tan" => Ok(TrigExp::of(TrigFn::Tan, read_obj_rec(&arr[1])?)),
            "Sec" => Ok(TrigExp::of(TrigFn::Sec, read_obj_rec(&arr[1])?)),
            "Csc" => Ok(TrigExp::of(TrigFn::Csc, read_obj_rec(&arr[1])?)),
            "Cot" => Ok(TrigExp::of(TrigFn::Cot, read_obj_rec(&arr[1])?)),
            "Arcsin" => Ok(TrigExp::of(TrigFn::ArcSin, read_obj_rec(&arr[1])?)),
            "Arccos" => Ok(TrigExp::of(TrigFn::ArcCos, read_obj_rec(&arr[1])?)),
            "Arctan" => Ok(TrigExp::of(TrigFn::ArcTan, read_obj_rec(&arr[1])?)),
            "Arccsc" => Ok(TrigExp::of(TrigFn::ArcCsc, read_obj_rec(&arr[1])?)),
            "Arcsec" => Ok(TrigExp::of(TrigFn::ArcSec, read_obj_rec(&arr[1])?)),
            "Arccot" => Ok(TrigExp::of(TrigFn::ArcCot, read_obj_rec(&arr[1])?)),
            "Abs" => Ok(AbsoluteValue::of(read_obj_rec(&arr[1])?)),
            s => panic!("Unimplemented operation {}", s),
        },
        Value::Object(obj) => {
            if obj.contains_key("num") {
                let value = obj["num"].as_i64().unwrap();
                if value < 0 {
                    Ok(Negation::of(Integer::of(value.unsigned_abs() as u32)))
                } else {
                    Ok(Integer::of(value.unsigned_abs() as u32))
                }
            } else if obj.contains_key("var") {
                Ok(Variable::of(obj["var"].as_str().unwrap()))
            } else {
                Err(anyhow!(format!("Invalid object {:?}", obj)))
            }
        }
        Value::String(s) => match s.as_str() {
            "E" => Ok(ConstantExp::of(Constant::Euler)),
            "Pi" => Ok(ConstantExp::of(Constant::Pi)),
            "ImaginaryUnit" => Ok(ConstantExp::of(Constant::Imaginary)),
            _ => Err(anyhow!(format!("Invalid string {:?}", s))),
        },
        _ => panic!("Not implemented {}, {}", object, object.as_str().unwrap()),
    }
}

#[cfg(test)]
mod tests {
    use crate::{
        convenience_expressions::i,
        expressions::{Fraction, Integer, Integral, Logarithm},
    };

    use super::read_object_from_json;

    #[test]
    fn test_1() {
        let e = read_object_from_json("{\"num\": 1}");
        assert_eq!(e.unwrap(), Integer::of(1));
    }

    #[test]
    fn parse_fraction() {
        let e = read_object_from_json("[\"Divide\", {\"num\": 1}, {\"num\": 1}]");
        assert_eq!(e.unwrap(), Fraction::of(Integer::of(1), Integer::of(1)));
    }

    #[test]
    fn parse_logarithm() {
        let e = read_object_from_json("[\"Logarithm\", {\"num\": 1}, {\"num\": 1}]");
        assert_eq!(e.unwrap(), Logarithm::of(Integer::of(1), Integer::of(1)));
    }

    #[test]
    fn parse_integral() {
        let e = read_object_from_json("[\"Integral\", {\"num\": 1}, {\"num\": 2}]");
        assert_eq!(e.unwrap(), Integral::of(i(1), i(2)));
    }
}
