# JSON Parsing

2/11/24 - Report 4

Worked 7 hours.

---

## This Week

I spent a few hours learning to write Yacc grammars and checking out what
parsing tools are available in Rust. After realizing I don't understand
grammars very well, I decided that parsing expressions from ASCII was a 
task better suited to the frontend anyway. The Rust crate is just a CAS,
nothing more. In the future, I think I will remove the ability to produce
MathXML from the backend. Rendering and parsing input is involved and I don't 
want to do it over again.

Instead, I went through the frontend expressions and created a method
that encoded them to JSON. The JSON is passed to the backend, where I use 
Serde to decode it into the backend Expression objects and then do operations
on them. The backend can now apply rules from frontend parsed expressions
and return steps to simplify them. I still only have 4 equivalence rules implemented,
so what it can do is trivial.

I also implemented some new Expressions for the backend and fixed a few
frontend bugs.

## Next Week

I'd like to get the backend caught up functionally CAS wise with what I have
in JavaScript. That's big, but I need to get moving to finish this on time.




