# Backend Progress

2/18/24 - Report 5

Worked 10 hours.

---

## This Week

I converted a lot more rules from JS to Rust. I changed how expressions 
are encoded. The backend did encode them to MathXML so they could be rendered
directly, but that lead to some weird edge cases and code duplication so I 
changed the encoding to JSON. I then implemented JSON parsing in the frontend
so now the backend expressions are parsed into the frontend representation 
of expressions, and those are rendered as they were already.

Their are some quirks with doing things this way. In the backend, I revised
how negative numbers were represented, adding a unary negation operation. In 
the frontend, negation is done by multiplying by -1. I will need to do a little
more interpreting to get the conversion perfect.

I then did a little work to make the frontend display the steps from the backend
in order.

I did not reach feature equality with the JS implementation of the CAS.

## Next Week

There aren't too many more rules to implement before the backend is equal
to the frontend. I think I'll take a break from rule derivations next week
and work on the UI. Right now it's very white and sad.
