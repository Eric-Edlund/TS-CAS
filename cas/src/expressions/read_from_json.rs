use crate::convenience_expressions::power;

use super::{Expression, sum::sum_of, Integer, product::product_of, variable::Variable, Fraction, Logarithm, Negation};
use serde_json::{Value, from_str};

/// Reads expression objects out of JSON expressions

/**
* Reads a JSON string into an expression or give an error message.
*/
pub fn read_object_from_json(json: &str) -> Result<Expression, String> {
    let obj = match from_str(json) {
        Ok(val) => val,
        Err(_) => return Err("Not a json".to_owned()),
    };

    read_obj_rec(&obj)
}

fn read_obj_rec(object: &Value) -> Result<Expression, String> {
    match object {
        Value::Array(arr) => {
            match arr.first().unwrap().as_str().unwrap() {
                "Sum" => {
                    let terms = arr.iter().skip(1).map(|term| read_obj_rec(term));

                    for t in terms.clone() {
                        if t.is_err() {
                            return Err("Undefined sub expression".to_owned());
                        }
                    }

                    Ok(sum_of(&terms.map(|term| term.unwrap()).collect::<Vec<Expression>>()))
                },
                "Product" => {
                    let factors = arr.iter().skip(1).map(|f| read_obj_rec(f));
                    if factors.clone().any(|f| f.is_err()) {
                        return Err("Undefined sub expression".to_owned());
                    }
                    Ok(product_of(&factors.map(|f| f.unwrap()).collect::<Vec<Expression>>()))
                },
                "Divide" => {
                    let numerator = match read_obj_rec(&arr[1]) {
                        Ok(val) => val,
                        Err(val) => return Err(val),
                    };
                    let denominator = match read_obj_rec(&arr[2]) {
                        Ok(val) => val,
                        Err(val) => return Err(val),
                    };

                    Ok(Fraction::of(
                        numerator,
                        denominator
                    ))
                },
                "Exponent" => {
                    Ok(power(read_obj_rec(&arr[1])?, read_obj_rec(&arr[2])?)) 
                },
                "Logarithm" => {
                    Ok(Logarithm::of(read_obj_rec(&arr[1])?, read_obj_rec(&arr[2])?))
                },
                s => panic!("Unimplemented operation {}", s)
            }
        },
        Value::Object(obj) => {
            if obj.contains_key("num") {
                let value = obj["num"].as_i64().unwrap();
                if value < 0 {
                    Ok(Negation::of(Integer::of(value.abs() as u32)))
                } else {
                    Ok(Integer::of(value.abs() as u32))
                }
            } else if obj.contains_key("var") {
                Ok(Variable::of(obj["var"].as_str().unwrap()))
            }else {
                Err(format!("Invalid object {:?}", obj))
            }
        }
        _ => panic!("Not implemented {}, {}", object, object.as_str().unwrap())
    }
}

#[cfg(test)]
mod tests {
    use crate::expressions::{Integer, Logarithm, Fraction};

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
}



