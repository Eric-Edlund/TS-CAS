# Final Report

5/8/24

Here I discuss the current state of the project and reflect on the process. Code
examples and documentation of the exposed api can be found in the
[crate documentation](https://docs.rs/ihateintegrals/0.1.2/ihateintegrals/).

## Cas Library

Starting with what I didn't acheive, the library certainly cannot solve complex
calculus 3 integrals. The coverage of expressions it can simplify usefully is
spotty: I'd estimate it solves well under 1/2 of integrals I might expect to
give it.

I have to say, I didn't see this coming at all. The final product uses 57
derivation rules, most of them being fairly fundamental. 14 are identities, 7
are arithmetic, 10 are integration and 6 are derivative rules. Apparently, there
are quite few (or maybe very few) rules more than that.

I have quite a few integration tests, certainly not enough to be conclusive, but
I speculate that it can integrate any polynomial. There are many problems it
currently gets wrong, most of them involving u-substitution in ways I haven't
tested.

In terms of tests, the syllabus said I needed tests, and I have many. The crate
includes 81 unit tests and 15 integration cases. Again, the integration tests
are kind of here and there. The project is unfortunately still undeveloped in
terms of precise expected functionality.

The library has been tested to solve integrals in their simplest forms matching
many trig and arctrig forms, polynomials, fractions, exponents and constants.

The crate exposes types to represent math expressions and supports parsing
expressions to and from what is approximately
[MathJSON](https://cortexjs.io/math-json/). I say approximately only because I
haven't done any testing against an official spec. The integration tests all
exercise this process so it does work consistently.

The steps used to derive equivalent expressions are provided with optional
metadata about the step for some rules. For example, the rule for u-substitution
provides the substitution made which could otherwise be ambiguous to consumers.

The crate includes a CLI tool that reads JSON expressions from std in and runs
the derivation process on them with parameters passed in as flags. Rust has very
nice CLI tooling libraries so this was super easy.

## Website

The website came out really nice
[https://ihateintegrals.com/solver.html](https://ihateintegrals.com/solver.html).
I replaced my custom ANTLR expression parsing with MathQuill, which is the
library Desmos uses to take input latex. I still had to do walk the latex AST,
which came in very nicely with the discussion of context free languages this
semester.

I used the Materialize css library instead of writing just css. I think it's
criminal that I wasn't taught to use a css library last year. I tried to use
switch my UI to using React twice in the semester, but both times the switch to
redoing everything in the vdom was too much. Eventually I tried Solid JS
instead, which is like React but instead of vdom elements it just manipulates
the DOM directly. This was much easier to gradually adopt, and the signals were
immediately useful.

The library compiles to Web Assembly and is run in a separate WebWorker from the
ui to avoid blocking. It communicates with the UI through message passing. The
ui parses the given latex expression then sends a job request. The worker then
replies several times with intermediate responses which improve as the deriver
works so the user can see it working.

There's a side panel with my LinkedIn, links the repository and the list of open
source licenses I used.

There are two pages. The solver page takes an expression and displays the steps
taken to reach the simplest equivalent expression it could find within 4
seconds. Each step has a short explanation of the rule it used and the
expression after the rule was applied.

The second page is a view of the derivation graph created from the deriver. This
view already existed before the semester started, but I adapted it to the
backend. It isn't clean enough to be useful to users, but for debugging it was a
god send.

The website doesn't work on mobile. I haven't figured out why, but expressions
can't be entered or aren't rendering. The site displays an alternative message
page explaining this on mobile devices.

## Reflection

Some early design decisions I made about derivation and expressions bit me. I've
never worked on a project long enough for that to happen and I feel like I've
gained some insight.

I'm questioning value of inheritance in programming. Rust doesn't support it and
I was completely fine. I mostly learned programming in Java and in one of my
projects I had a 4 layer deep inheritance tree. I'm not sure why I did that
anymore.

I used NeoVim pretty much the whole semester while developing this. Vim is so
cool.

I'm definitely better at Rust than when I started, but I definately am not a 
pro-Rustacean yet. I learned more every day how huge Rust is. So many assumptions
C++ and Java make Rust makes explicit, and while it's nice that the only bugs
I encountered during this project were logic errors, I also had to do a lot of 
fighting with types. After every fight I always thought, "oh, of course that's 
how it is." Sometimes, if I had tried to do what I was doing in C++ it would have just
keeled over at runtime instead. 

Maybe I'm just having skill issues with the 
language, but despite this benefit, I'm now a little skeptical of Rust
as my language choice for this. There were just too many details that really 
shouldn't have come up. Like to pass around an interface instead of a concrete
type, you can't just pass around a pointer like in C++ because of the ownership
semantics. So if I own the interface object I'm pointing to, I have to use the
type `Box<dyn Trait>` or `Rc<dyn Trait>` or one of at least 3 others, but if 
I'm just borrowing an object I then take `&dyn Trait`. That's just a lot of
typing and thinking.

If I did it again, I might try Go instead.


