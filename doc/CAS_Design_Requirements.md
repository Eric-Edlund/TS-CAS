- The CAS package is a Rust library with a JS interface through WASM
- It produces and consumes ASCII and LaTeX math expressions
- It does symbol manipulation on expressions to find equivalent expressions
- 


For the Graph datastructure:

- Can navigate expression relationships
- Associates relationships with arguments
- Arguments associated with grounds
- 

Suppose the structure doesn't store Arugments. Instead, edges store the arguments
which derived them, then arguments store their source material. In this pattern,
algorithms are still their own nodes, but it's like we have two parallel graphs,
the argument graph dependent on the expression graph. The arguments don't connect
to each other though, so its hardly a graph. 

