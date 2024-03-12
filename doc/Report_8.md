#

3/12/24 - Report 8

Worked 24 hours.

---

Had a lot of fun this week. I started out with MathQuill and LaTex parsing. I
wrote a function which walks the AST that unified-latex produces from MathQuill
and parses out expressions. It supports multiple integrals, complex derivatives
with the nice (d/dx) format, powers, addition, multipliction, the trig and
arctrig functions, numbers, variables, parentheses, fractions, unary minus and
partially logarithms. My understanding of langauge parsing is pretty mid but I
was able to kind of just keep recursing and get it done.

I added a lot more rules for integration and derivatives, added the 6 trig and 6
arctrig expressions and some rules for them, and fixed quite a few bugs and
inefficiencies in the existing rules. There are now 46 equivalence rules written
for the backend in Rust, which is more than the original 35 rules I implemented
in TypeScript.

Having so many rules in Rust, I am now experiencing the problem I encountered in
JS and probably the hardest part of this project. The deriver works by taking a
list of existing expressions, then for each one applying multiple rules to find
equivalents, then doing that iteratively. The time complexity of this process is
intrinsically $O(2^n)$, and for any non-trivial calculus problem, n will be at
least 10.

To handle this, I will need to be very clever in figuring out which rules are
necessary to be applied when and in what order produces the least waste and
still reaches a simplified form. I took a basic stab at this just so that
debugging in the moment could be done easier. The deriver now takes an abstract
optimization object which implements these details. I created a bute force
optimizer which does what I have been doing, and a basic EvaluateFirst optimizer
which evaluates numeric expressions like 1+1 before other rules are allowed to
derive further. This is certainly a complicated problem that I will need to
squint very hard at to solve, but this inital solution took an order of
magnitude off evaluation times for the few expressions I tried.

I also fixed some UI bugs, have begun adding integration tests from an online
Calc 1 worksheet, and learned that I have been spelling ambiguous wrong my whole
life.

## Next Week

Looking at the syllabus, I need to publish the backend as a Rust crate, write
user facing documentation for it, host the site online, package it as an
Electron app, write english explanations for each step taken so solve a problem,
and get this thing solving Calc III integrals. I'd also like to integrate some
other UI elements I built before the semester started, include some advertising
for my linkedin, and maybe try to monetize this. Crap.

So next week I'm going to solve as many named items from that list as I can, which
will probably include:

- Rust crate and user docs build process in the repo
- Electron app build process
- LinkedIn Advertising
- Pick a hosting service and get it published (and build process for updating)

This is getting complicated.

