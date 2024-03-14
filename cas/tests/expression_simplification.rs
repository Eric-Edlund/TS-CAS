mod common;
use common::*;

// Using a practice problem set for Calc 1
// https://mathcs.clarku.edu/~djoyce/ma120/integralpractice1.pdf

#[test]
fn single_variable_integrals() {
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
            &pow(X, four), 
            &neg(&pow(X,three)), 
            &pow(X, two)
        ), X),
        sum3(
            &frac(&pow(X, five), five),
            &neg(&frac(&pow(X, four), four)),
            &frac(&pow(X, three), three)
        )
    );

    let p2: Problem = (
        int(
            &sum4(
                &prod(five, &pow(T, eight)),
                &neg(&prod(two, &pow(T, four))),
                T,
                three
            ),
            T
        ),
        sum4(
            &frac(&prod(five, &pow(T, nine)), nine),
            &neg(&frac(&prod(two, &pow(T, five)), five)),
            &frac(&pow(T, two), two),
            &prod(three, T)
        )
    );

    let p3: Problem = (
        int(
            &sum(
                &prod(seven, &pow(X, &frac(three, two))),
                &prod(two, &pow(X, &frac(one, two))
                ),
            ),
            X
        ),
        sum(
            &frac(&prod(&num(14), &pow(X,&frac(five, two))), five),
            &frac(&prod(four, &pow(X, &frac(three, two))), three)
        )
    );

    let p4: Problem = (
        int(
            &sum(
                &prod(three, &pow(X, &neg(two))),
                &neg(&prod(four, &pow(X, &neg(three))))
            ),
            X
        ),
        sum(
            &neg(&prod(three, &pow(X, &neg(one)))),
            &prod(two, &pow(X, &neg(two))),
        )
    );

    add_test("problem 1", p1, 11);
    add_test("problem 2", p2, 16);
    // add_test("problem 3", p3, 16);
    add_test("problem 4", p4, 18);

    report_results();
}
