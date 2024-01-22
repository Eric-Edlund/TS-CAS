# Assessing the Project State

1/21/24 - Report 1

---


This week I assessed the current codebase, project structure/design and the
capabilities of the Rust language

### Current Project State

-   The actual CAS is written in JavaScript which isn't easily parallelized
    and is too slow for the problem.
-   The front end and the CAS backend aren't clearly separated, making the
    backend unreusable.
-   The CAS backend doesn't have a clear interface or documentation.
-   The codebase is a mess. There's dead stuff everywhere, no clear build
    instructions, there's a half finished electron app alternative to the
    website, there's no source formatter, git doesn't check that the tests are
    passing, the whole project looks like it was configured by a freshman.
-   The UI needs some actual design thinking
-   The current problem-solving architecture doesn't have a way to perform
    u-substitution
-   Eric hasn't thoroughly considered the theory of what he's trying to do and
    as a result the derivation logic isn't great.

## This Week

- Cleaned up the codebase, deleted dead files, etc.
- Started learning Rust, watched a lot of tutorials, read docs on memory safety
and the related Rust unique features.
- Started prototyping implementations for the CAS
- Considered alternatives to the current design of the CAS

Lot of reading:

https://doc.rust-lang.org/stable/book/ch07-05-separating-modules-into-different-files.html
https://doc.rust-lang.org/book/ch11-03-test-organization.html#:~:text=The%20tests%20Directory,files%20as%20an%20individual%20crate.
https://stackoverflow.com/questions/22596920/split-a-module-across-several-files
https://doc.rust-lang.org/rust-by-example/types/cast.html
https://stackoverflow.com/questions/70404603/how-to-return-the-contents-of-an-rc
https://doc.rust-lang.org/std/keyword.as.html
https://stackoverflow.com/questions/40024093/downcast-traits-inside-rc-for-ast-manipulation
https://users.rust-lang.org/t/how-to-downcast-rc-refcell-dyn-trait/63891
https://doc.rust-lang.org/std/any/index.html
https://www.reddit.com/r/rust/comments/3mtim0/rusts_flawed_dynamic_type/
https://www.reddit.com/r/rust/comments/kkap4e/how_to_cast_a_boxdyn_mytrait_to_an_actual_struct/
https://stackoverflow.com/questions/65447332/how-to-get-reference-to-struct-from-boxed-trait-object/65447909#65447909
https://doc.rust-lang.org/std/any/index.html
https://github.com/rust-lang/rust-analyzer/blob/master/docs/dev/style.md#getters--setters
https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html
https://doc.rust-lang.org/std/cell/
https://doc.rust-lang.org/std/marker/trait.Sync.html
https://doc.rust-lang.org/rust-by-example/scope/lifetime/lifetime_bounds.html

## Next Week

- Continue learning Rust and prototyping the CAS in Rust
- Design an MVP interface for the front end to use then prototype a web assembly
interface and work out exactly how integration with the front end will work


