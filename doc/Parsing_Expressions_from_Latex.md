We have a Latex parser which reads Latex strings into a Latex AST.
We now need to read expressions from that AST. I have no idea how to do this.

The Latex Tree groups some things correctly, like numerators and denominators
are grouped under fractions. But Addition and multiplication are just a list 
of symbols.
