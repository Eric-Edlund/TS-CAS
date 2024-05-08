mod common;
use common::*;
use serde_json::Value;

// Using a practice problem set for Calc 1
// https://mathcs.clarku.edu/~djoyce/ma120/integralpractice1.pdf

#[test]
fn single_variable_integrals() {
    let one = &num(1);
    let two = &num(2);
    let three = &num(3);
    let four = &num(4);
    let five = &num(5);
    let _six = &num(6);
    let seven = &num(7);
    let eight = &num(8);
    let nine = &num(9);
    let p1: Problem = (
        int(&sum3(&pow(X, four), &neg(&pow(X, three)), &pow(X, two)), X),
        sum3(
            &frac(&pow(X, five), five),
            &neg(&frac(&pow(X, four), four)),
            &frac(&pow(X, three), three),
        ),
    );

    let p2: Problem = (
        int(
            &sum4(
                &prod(five, &pow(T, eight)),
                &neg(&prod(two, &pow(T, four))),
                T,
                three,
            ),
            T,
        ),
        sum4(
            &frac(&prod(five, &pow(T, nine)), nine),
            &neg(&frac(&prod(two, &pow(T, five)), five)),
            &frac(&pow(T, two), two),
            &prod(three, T),
        ),
    );

    let _p3: Problem = (
        int(
            &sum(
                &prod(seven, &pow(X, &frac(three, two))),
                &prod(two, &pow(X, &frac(one, two))),
            ),
            X,
        ),
        sum(
            &frac(&prod(&num(14), &pow(X, &frac(five, two))), five),
            &frac(&prod(four, &pow(X, &frac(three, two))), three),
        ),
    );

    let p4: Problem = (
        int(
            &sum(
                &prod(three, &pow(X, &neg(two))),
                &neg(&prod(four, &pow(X, &neg(three)))),
            ),
            X,
        ),
        sum(
            &neg(&prod(three, &pow(X, &neg(one)))),
            &prod(two, &pow(X, &neg(two))),
        ),
    );

    let p5: Problem = (int(&frac(three, X), X), prod(three, &ln(&abs(X))));

    let p9: Problem = (
        int(&sum(&prod(two, &sin(X)), &prod(three, &cos(X))), X),
        sum(&neg(&prod(two, &cos(X))), &prod(three, &sin(X))),
    );

    let p11: Problem = (
        int(&frac(four, &sum(one, &pow(T, two))), T),
        prod(four, &arctan(T)),
    );

    add_test("problem 1", p1, 100);
    add_test("problem 2", p2, 100);
    add_test("problem 5", p5, 100);
    // add_test("problem 3", p3, 16);
    add_test("problem 4", p4, 100);
    add_test("problem 9", p9, 100);
    add_test("problem 11", p11, 100);

    report_results();
}

#[test]
fn loaded_simplification_tests() {
    let data_str = include_str!("test_data.json");
    let data_obj = serde_json::from_str::<Value>(data_str).expect("Failed to parse test data");
    let problems = data_obj
        .as_object()
        .unwrap()
        .get_key_value("problems")
        .unwrap()
        .1
        .as_array()
        .unwrap()
        .iter()
        .map::<Problem, _>(|v| {
            let obj = v.as_object().unwrap();
            (
                obj.get_key_value("input").unwrap().1.to_string(),
                obj.get_key_value("expected").unwrap().1.to_string(),
            )
        });

    let mut i = 1;
    for problem in problems {
        add_test(&format!("Loaded Test {i}"), problem, 100);
        i += 1;
    }

    report_results()
}
