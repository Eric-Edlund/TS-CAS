use std::collections::HashSet;

use cas::expressions::Expression;
use cas::find_equivalents;
use cas::expressions::Product;
use cas::expressions::Integer;
use cas::expressions::Negation;


#[test]
fn cancel_negatives() {
    let result = find_equivalents(Product::of(&[
        Negation::of(Integer::of(1)), 
        Negation::of(Integer::of(2))
    ]).unwrap()); 

    let mut equivalents = HashSet::<Expression>::new();
    for node in result.node_weights() {
        equivalents.insert(node.clone());
    }

    assert!(equivalents.len() > 0, "Rule didn't create anything");

    let expected = &Product::of(&[Integer::of(1), Integer::of(2)]).unwrap();
    println!("Expected Id: {}", expected.as_stringable().id());
    assert!(equivalents.contains(expected), "Result does not contain 1 * 2");
}

