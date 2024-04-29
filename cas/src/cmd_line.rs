use cas::{
    get_all_equivalents, read_object_from_json, simplify_with_steps_internal, BruteForceProfile,
    DerivationDebugInfo, EvaluateFirstProfile, OptimizationProfile,
};
use clap::Parser;
use serde_json::json;
use std::{
    cell::RefCell,
    collections::HashMap,
    io::{self, BufRead, BufReader},
    rc::Rc,
};

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

    /// Set the maximum search depth of the derivation.
    /// Defaults to 20 which can be quite slow for complex problems.
    #[arg(short, long)]
    depth: Option<u32>,

    /// Report statistics about rules use during each derivation.
    #[arg(short, long, default_value_t = false)]
    report_rule_statistics: bool,

    /// The maximum number of equivalent expressions to derive before stopping.
    #[arg(short, long, default_value_t = 100000)]
    max_derivations: u32,
}

pub fn main() -> anyhow::Result<()> {
    let args = Args::parse();
    let optimizer = args.optimizer.unwrap_or("brute_force".to_string());
    let depth = args.depth.unwrap_or(20);
    let report_statistics = args.report_rule_statistics;

    let mut reader = BufReader::new(io::stdin());
    let mut input = String::new();
    loop {
        input.clear();
        let read = reader.read_line(&mut input)?;
        if read == 0 {
            return Ok(());
        }

        let debug = if report_statistics {
            Some(Rc::new(RefCell::new(DerivationDebugInfo {
                rule_uses: HashMap::new(),
            })))
        } else {
            None
        };

        let expression = match read_object_from_json(&input) {
            Ok(e) => e,
            _ => continue,
        };

        let opt: Box<dyn OptimizationProfile> = match optimizer.as_str() {
            "brute_force" => BruteForceProfile::new(),
            "evaluate_first" => EvaluateFirstProfile::new(),
            _ => panic!("Invalid optimizer"),
        };

        let result = &simplify_with_steps_internal(
            &expression,
            depth,
            opt,
            args.allowed_rules.clone(),
            debug.clone(),
            args.max_derivations,
        );

        println!("{}", json!(result));
        if report_statistics {
            println!("Rule Uses: ");
            let debug = debug.unwrap().borrow().clone();
            let mut uses: Vec<(String, u32)> = debug
                .rule_uses
                .iter()
                .map(|(a, b)| (a.clone(), *b))
                .collect();
            uses.sort_by(|a, b| b.1.cmp(&a.1));
            for entry in uses {
                println!("{}: {}", entry.0, entry.1);
            }
        }

        if !result.success {
            println!(
                "{}",
                get_all_equivalents(&input, depth, &optimizer, args.max_derivations)
            )
        }
    }
}
