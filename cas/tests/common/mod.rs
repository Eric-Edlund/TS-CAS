#![allow(dead_code)]

use std::thread;
use std::{sync::Mutex, thread::JoinHandle};

use anyhow::anyhow;
use cas::{
    expression_from_json, simplify_incremental, BruteForceProfile, DerivationHandle,
    EvaluateFirstProfile, OptimizationProfile,
};
use once_cell::sync::Lazy;

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
    String::from("\"E\"")
}
pub fn pi() -> String {
    String::from("\"Pi\"")
}
pub fn imag() -> String {
    String::from("\"ImaginaryUnit\"")
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

pub fn simplify_incremental_js(
    expression_json: &str,
    optimizer: &str,
) -> Result<DerivationHandle, anyhow::Error> {
    let exp = expression_from_json(expression_json)?;
    let opt: Box<dyn OptimizationProfile> = match optimizer {
        "brute_force" => BruteForceProfile::new(),
        "evaluate_first" => EvaluateFirstProfile::new(),
        _ => return Err(anyhow!("Invalid optimization profile given")),
    };

    Ok(simplify_incremental(&exp, opt, None))
}

/// Takes a start and expected expression in MathJSON format
/// and runs the deriver. Tests if the expected value is derived
/// and marked as the simplest equivalent found.
/// Returns true if the expected simplification was derived.
fn assert_simplify(start: &str, expected: &str, max_derivations: u32) -> bool {
    let Ok(mut handle) = simplify_incremental_js(start, "evaluate_first") else {
        println!("Failed to parse input expression.");
        return false;
    };
    handle.do_pass(max_derivations);
    let graph = handle.get_deriver();

    let Ok(expected_exp) = expression_from_json(expected) else {
        println!("Failed to parse expected expression.");
        return false;
    };

    graph.node_weights().any(|exp| *exp == expected_exp)
}

/// Tests that the problem's solution can be found within the given
/// parameters. Does this in a different thread.
pub fn add_test(name: &str, p: Problem, max_derivations: u32) {
    let n = name.to_string();

    let thread = thread::spawn(move || {
        let result = assert_simplify(&p.0, &p.1, max_derivations);
        TEST_RESULTS.lock().unwrap().push(TestResult {
            test: (n.to_string(), p, max_derivations),
            success: result,
        });
    });
    RUNNING_TESTS.lock().unwrap().push(thread);
}

/// Waits for all added tests to complete then prints diagnostics
/// for all the results.
pub fn report_results() {
    let mut passed_all = true;
    {
        let running = &mut *RUNNING_TESTS.lock().unwrap();
        while !running.is_empty() {
            let _ = running.pop().unwrap().join();
        }

        let mut results = TEST_RESULTS.lock().unwrap();
        for result in &*results {
            if result.success {
                println!("Test {} passed.", &result.test.0);
            } else {
                println!("Test {} FAILED.", &result.test.0);
                println!("\nInitial: {}", result.test.1 .0);
                println!("\nExpected (not found): {}", result.test.1 .1);
                passed_all = false;
            }
        }
        results.clear();
        running.clear();
    }

    assert!(passed_all);
}

/// Name, problem, max derivations
type Test = (String, Problem, u32);
struct TestResult {
    test: Test,
    success: bool,
}

static RUNNING_TESTS: Lazy<Mutex<Vec<JoinHandle<()>>>> = Lazy::new(|| Mutex::new(Vec::new()));
static TEST_RESULTS: Lazy<Mutex<Vec<TestResult>>> = Lazy::new(|| Mutex::new(Vec::new()));
