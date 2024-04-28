use cas::simplify_with_steps;
use clap::Parser;
use std::io::{self, BufRead, BufReader};

/// Commandline utility to test the deriver.
/// Expressions are read from stdin in json format
/// separated by newlines and each solved and printed to stdout.
#[derive(Parser, Debug)]
struct Args {
    /// List of rules which may be used during derivation.
    /// Defaults to using all rules.
    #[arg(short, long)]
    allowed_rules: Option<Vec<String>>,

    /// The optimization profile to use.
    #[arg(short, long)]
    optimizer: Option<String>,
}

pub fn main() -> io::Result<()> {
    let args = Args::parse();
    let optimizer = args.optimizer.unwrap_or("brute_force".to_string());

    let mut reader = BufReader::new(io::stdin());
    let mut input = String::new();
    loop {
        input.clear();
        let read = reader.read_line(&mut input)?;
        if read == 0 {
            return Ok(());
        }
        println!(
            "{}",
            &simplify_with_steps(&input, 20, &optimizer, args.allowed_rules.clone())
        );
    }
}
