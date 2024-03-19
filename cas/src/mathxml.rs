
/**
* Wraps given string in parens
*/
#[allow(dead_code)]
pub fn in_paren(exp: &str) -> String {
    format!("<mo>(</mo>{}<mo>)</mo>", exp)
}

/**
* Wraps given string in <mrow>
*/
#[allow(dead_code)]
pub fn in_row(exp: &str) -> String {
    format!("<mrow>{}</mrow>", exp)
}
