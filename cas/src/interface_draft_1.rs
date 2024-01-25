
#[wasm_bindgen]
trait Expression {
    fn to_latex() -> String;
    fn to_ascii() -> String;
}

fn expression_from(str: &String) -> Result<&Expression, Err> {}
fn simplify(exp: &Expression) -> &Expression {}


// Maybe we want to reveal the graph?

struct Graph {}

fn derive_expand(graph: &mut Graph) -> () {}


// If we hide the graph...

trait SolutionSet {
    fn filter(allowedRules: Vec<Rule>);
    fn get_paths() -> Vec<Path>;

}

struct Step {
    rule_applied: Rule_ID,
    previous_state: &Step, // Or maybe Expression?
    new_state: &Expression
}

fn simplify(exp: &Expression, rules: Vec<Rule>) -> SolutionSet {}


fn bubbleSort<T>(vec: &mut Vec<T>) -> () {
    let max_index = vec.size() - 1;
    let have_swapped = true;
    while (have_swapped) {
        have_swapped = false;
        for i in 0 .. max_index - 1 {
            if (vec[i] > vec[i+1]) {
                let tmp = vec[i];
                vec[i] = vec[i+1];
                vec[i+1] = tmp;
                have_swapped = true;
            }
        }
        max_index -= 1;
    }
}
