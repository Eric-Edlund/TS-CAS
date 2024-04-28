#![allow(dead_code)]

use std::thread;
use std::{collections::HashSet, sync::Mutex, thread::JoinHandle};

use cas::get_all_equivalents;
use once_cell::sync::Lazy;
use serde_json::Value;

/// Functions used to generate JSON expressions for testing the API.
///
/// It's important that there are no spaces bc we are comparing strings
/// for equality, not parsing them at all.

pub fn int(exp: &str, var: &str) -> String {
    format!("[\"Integral\",{},{}]", exp, var)
}
pub fn num(value: u32) -> String {
    format!("{{\"num\":{}}}", value)
}
pub fn frac(num: &str, den: &str) -> String {
    format!("[\"Divide\",{},{}]", num, den)
}
pub fn prod(a: &str, b: &str) -> String {
    format!("[\"Product\",{},{}]", a, b)
}
pub fn neg(a: &str) -> String {
    format!("[\"Negation\",{}]", a)
}
pub fn sum(a: &str, b: &str) -> String {
    format!("[\"Sum\",{},{}]", a, b)
}
pub fn sum3(a: &str, b: &str, c: &str) -> String {
    format!("[\"Sum\",{},{},{}]", a, b, c)
}
pub fn sum4(a: &str, b: &str, c: &str, d: &str) -> String {
    format!("[\"Sum\",{},{},{},{}]", a, b, c, d)
}
pub fn pow(base: &str, pow: &str) -> String {
    format!("[\"Pow\",{},{}]", base, pow)
}
pub fn log(base: &str, exp: &str) -> String {
    format!("[\"Logarithm\",{},{}]", base, exp)
}
pub fn ln(exp: &str) -> String {
    format!("[\"Logarithm\",{},{}]", e(), exp)
}
pub fn e() -> String {
    String::from("E")
}
pub fn pi() -> String {
    String::from("Pi")
}
pub fn imag() -> String {
    String::from("ImaginaryUnit")
}
pub fn abs(exp: &str) -> String {
    format!("[\"Abs\",{}]", exp)
}
pub fn sin(exp: &str) -> String {
    format!("[\"Sin\",{}]", exp)
}
pub fn cos(exp: &str) -> String {
    format!("[\"Cos\",{}]", exp)
}
pub fn arctan(exp: &str) -> String {
    format!("[\"Arctan\",{}]", exp)
}

pub const X: &str = "{\"var\":\"x\"}";
pub const T: &str = "{\"var\":\"t\"}";

/// Type to describe a simplification problem with a start expression
/// and expected solution.
pub type Problem = (String, String);

/// Takes a start and expected expression in MathJSON format
/// and runs the deriver. Tests if the expected value is derived
/// and marked as the simplest equivalent found.
/// Returns true if the expected simplification was derived.
fn assert_simplify(start: &str, expected: &str, depth: u32) -> bool {
    let result_json = get_all_equivalents(start, depth, "evaluate_first");
    let json = serde_json::from_str(&result_json).unwrap();
    let Value::Object(obj) = json else { panic!() };
    let Value::Array(ref equivalents) = obj["equivalents"] else {
        panic!()
    };
    let result = equivalents
        .iter()
        .map(|x| x.to_string())
        .collect::<HashSet<String>>();
    result.contains(expected)
}

/// Specifies a problem with several parameters for the deriver to use.
/// Tests that the problem's solution can be found within the given
/// parameters. Does this in a different thread.
pub fn add_test(name: &str, p: Problem, depth: u32) {
    let n = name.to_string();

    let thread = thread::spawn(move || {
        let result = assert_simplify(&p.0, &p.1, depth);
        TEST_RESULTS.lock().unwrap().push(TestResult {
            test: (n.to_string(), p, depth),
            success: result,
        });
    });
    RUNNING_TESTS.lock().unwrap().push(thread);
}

/// Waits for all added tests to complete then prints diagnostics
/// for all the results.
pub fn report_results() {
    let running = &mut *RUNNING_TESTS.lock().unwrap();
    while !running.is_empty() {
        let _ = running.pop().unwrap().join();
    }

    let mut passed_all = true;
    let results = &*TEST_RESULTS.lock().unwrap();
    for result in results {
        if result.success {
            println!("Test {} passed.", &result.test.0);
        } else {
            println!("Test {} FAILED.", &result.test.0);
            println!("\nInitial: {}", result.test.1 .0);
            println!("\nExpected (not found): {}", result.test.1 .1);
            passed_all = false;
        }
    }

    assert!(passed_all);
}

/// Name, problem, search depth
type Test = (String, Problem, u32);
struct TestResult {
    test: Test,
    success: bool,
}

static RUNNING_TESTS: Lazy<Mutex<Vec<JoinHandle<()>>>> = Lazy::new(|| Mutex::new(Vec::new()));
static TEST_RESULTS: Lazy<Mutex<Vec<TestResult>>> = Lazy::new(|| Mutex::new(Vec::new()));
