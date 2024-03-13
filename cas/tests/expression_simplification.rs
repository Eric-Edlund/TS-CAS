
use std::{collections::HashSet, sync::Mutex};

// Using a practice problem set for Calc 1
// https://mathcs.clarku.edu/~djoyce/ma120/integralpractice1.pdf
use cas::{get_all_equivalents, simplify_with_steps};
use once_cell::sync::Lazy;
use serde_json::Value;

// It's important that there are no spaces bc we are comparing strings
// for equality, not parsing them at all.
fn int(exp: &str, var: &str) -> String {
    format!("[\"Integral\",{},{}]", exp, var)
}
fn  num(value: u32) -> String {
    format!("{{\"num\":{}}}", value)
}
fn frac(num: &str, den: &str) -> String {
    format!("[\"Divide\",{},{}]", num, den)
}
fn prod(a: &str, b: &str) -> String {
    format!("[\"Product\",{},{}]", a, b)
}
fn neg(a: &str) -> String {
    format!("[\"Negation\",{}]", a)
}
fn sum(a: &str, b: &str) -> String {
    format!("[\"Sum\",{},{}]", a, b)
}
fn sum3(a: &str, b: &str, c: &str) -> String {
    format!("[\"Sum\",{},{},{}]", a, b, c)
}
fn sum4(a: &str, b: &str, c: &str, d: &str) -> String {
    format!("[\"Sum\",{},{},{},{}]", a, b, c, d)
}
fn pow(base: &str, pow: &str) -> String {
    format!("[\"Pow\",{},{}]", base, pow)
}

type Problem = (String, String);

static RUNS: Lazy<Mutex<u32>> = Lazy::new(|| Mutex::<u32>::new(0));
/**
* Takes a start and expected expression in MathJSON format 
* and runs the deriver. Tests if the expected value is derived
* and marked as the simplest equivalent found.
* Returns true if the expected simplification was derived.
*/
fn assert_simplify(start: &str, expected: &str, depth: u32) -> bool {
    let mut run = RUNS.lock().unwrap();
    *run += 1;
    println!("Running Derivation Test {}...", run);
    let result_json = get_all_equivalents(start, depth, "evaluate_first");
    let json = serde_json::from_str(&result_json).unwrap();
    let Value::Object(obj) = json
    else { panic!() };
    let Value::Array(ref equivalents) = obj["equivalents"]
    else { panic!() };
    let result = equivalents.iter().map(|x|x.to_string())
        .collect::<HashSet<String>>();
    println!("Found {} equivalents", result.len());
    if !result.contains(expected){
        println!("Failed to simplify. Input was {},\n\nExpected {}.\n",
            start, expected);
        false
    } else {
        println!("Found the expected answer!");
        true
    }
}

fn test(p: Problem, depth: u32) -> bool {
    assert_simplify(&p.0, &p.1, depth)
}

#[test]
fn single_variable_integrals() {
    let x: &str = "{\"var\":\"x\"}";
    let y: &str = "{\"var\":\"y\"}";
    let t: &str = "{\"var\":\"t\"}";
    let one = &num(1);
    let two = &num(2);
    let three = &num(3);
    let four = &num(4);
    let five = &num(5);
    let six = &num(6);
    let seven = &num(7);
    let eight = &num(8);
    let nine = &num(9);
    let p1: Problem = (
        int(&sum3(
            &pow(x, four), 
            &neg(&pow(x,three)), 
            &pow(x, two)
        ), x),
        sum3(
            &frac(&pow(x, five), five),
            &neg(&frac(&pow(x, four), four)),
            &frac(&pow(x, three), three)
        )
    );

    let p2: Problem = (
        int(
            &sum4(
                &prod(five, &pow(t, eight)),
                &neg(&prod(two, &pow(t, four))),
                t,
                three
            ),
            t
        ),
        sum4(
            &frac(&prod(five, &pow(t, nine)), nine),
            &frac(&prod(two, &pow(t, five)), five),
            &frac(&pow(t, two), two),
            &prod(three, t)
        )
    );

    let p3: Problem = (
        int(
            &sum(
                &prod(seven, &pow(x, &frac(three, two))),
                &prod(two, &pow(x, &frac(one, two))
                ),
            ),
            x
        ),
        sum(
            &frac(&prod(&num(14), &pow(x,&frac(five, two))), five),
            &frac(&prod(four, &pow(x, &frac(three, two))), three)
        )
    );

    let mut all_passed = false;
    all_passed &= test(p1, 15);
    all_passed &= test(p2, 16);
    all_passed &= test(p3, 16);

    if !all_passed {
        println!("Didn't successfully complete all dervations.");
        assert!(false);
    }
}
