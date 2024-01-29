How can I make the nested Expression structure like I did in JS in Rust?

In JS, the expression references are garbage collected. I think Rc in Rust
is the nearest equivalent. I could use RefCell to have shared mutability,
but I shouldn't need shared mutability because expressions are immutable.

Now there's the question of implementing flywheel. I can't have a static
instances list in Rust. Can I?

I can have mutable static data. The problem is that Expression is an enum
with variants of the values. So where should the instances map be stored?
Not in each Expression class. In the Expression enum file.

So when is memory freed? If the instances map holds strong Rcs, expressions
are never deleted. I guess this was a problem in the JS one also. In flywheel
in general, when are things freed? I'll think about that after I have an MVP.


Inside rules, I need to match Expressions to types. I currently pass expressions
around with Arc<Expression>. I can't dereference Arc to match it. What if I 
put the Arc inside the Expression variants? Then Expression would be coppied...
