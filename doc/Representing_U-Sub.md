How can we represent u-substitution?

-   The UI knows what variables were substituted
-   The UI has an argument
-   The substitute variables are named well
-   They don't interfere with each other

So it sounds like we need to, at least internally, treat these temporary
variables as special? Their symbol will be decided later. This brings out a
bigger problem with how we've done this, which is that variables are all global.

1. We could say

Substitution implements Expression { Expr, Temp Vars, }

In which case we would need the temp vars to be global so that when a
Substitution is processed they can be leaked into outer expressions.

Or, we could treat substitutions as special and exclude them from leaky rules.
How would we do this? I don't think we have a way to, and all rules are leaky.

`Substitution` is also a strange thing to call an `Expression`.

2. Another option, is to treat substituted variables as just regular variables.
   We'll have to create another Expression type for them so that their symbols
   can be assigned dynamically. Or maybe it would be better to refactor symbol
   names out of the existing variable class into a table.

Say we do this. We now must associate substitution variables with their values.
Do we add equalities to the primay graph? There is no point to searching these
additional expressions when deriving.

3. Why do we need to actually create substitution variables at all? Aren't they
   just a trick for humans to see the pattern being integrated? The computer
   doesn't need to actually treat it as a real thing. What if U-Sub operations
   just provided extra data in their Argument so the UI could draw subsitutions?
   Then we don't need to change anything structural.

We will need to represent substitutions somehow so that we can keep using the 
iterative rule application approach. We could also treat integrals specially
and hide intermediate variables from the rest of the system.

---

Suppose we take option 3. I don't think we could keep the iterative approach we've
been using, because sometimes multiple substitutions are necessary, and other
integration methods might need to be applied after substitution.

So I think we're stuck with 2.
