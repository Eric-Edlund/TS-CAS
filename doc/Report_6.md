# Async Work and UI

3/1/24 - Report 6 

Worked 7 hours.

---

## This Week

The UI looks much nicer now. I added Google's Materialize to the project,
which is just a CSS library, and applied some basic formatting. Everything
looks congruent now.

While thinking about the UI, I found myself looking for a clean way to 
react to state changes. I spent about an hour trying out React JS, but 
I decided it wasn't worth the extra build step and all the added complexity
of having a nested "virtual dom" inside the real dom and making state 
observable.

I spent the rest of the week exploring multithreading. This turned out to be
pretty ugly. To support shared memory between threads, the web server needs 
to supply special headers to make the browser enter a special security mode
for the website. Then to actualy use threading in Rust, I have to 
use `rayon-bindgen`, which requires that I use a nightly build of Rust, 
so I have to rebuild the standard library with a bunch of special flags
and other nonsense only for my editor to no longer provide semantic suggestions
and Webpack to complain about the project structure. 

I got it mostly working, but because of the IDE support issue I've put it in 
a branch and will revisit it towards the end of the semester.

## Next Week

I will figure out how to represent u-substitution and get some basic 
integration Rules working.

