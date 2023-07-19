Jesus I hate compilers

[Building the Website]

Run the "npm ____" tasks from the project root. They're listed
in package.json.
It will compile all the ts files into a bundle.js in the dist dir.

Then you open the integrator.html file in a browser and it will load it.

There are 3 webpack config files:
- webpack.common.js (contains common elements)
- webpack.dev.js (creates a dev bundle with dev stuff)
- webpack.prod.js (creates a prod bundle with prod optimizations)

[Building the Electron App]

I asked ChatGPT to set up the project, I have no clue how it works.
There are two scripts in package.json, "build-electron" and "run-electron".


[Testing]

The project uses jest.
Test files should go in the 'tests' directory, although it 
doesn't matter where you put them. Test files must end in '.test.ts'.

To do the tests, run "npm test"
You have to have 'jest' installed on your system.

[How it Works]
Equation rendering is done with MathJax
Read the theory document in mathlib directory.
Expression parsing is done with ANTLR.

[ANTLR]
The ANTLR runtime is a dependancy of the project. The way this work is
in the src files there is a grammar file (ending in .g) which describes
the grammar for parsing math expressions. We use the commandline tool
antlr4 to turn this file into generated js code which will parse math 
expressions. You have to install antlr4 on your system. On Neon it was

    sudo apt install antlr4

but this is a popular tool and I'm sure you can find it other ways.
I've added a dependancy to the project which adds the necessary
runtime files. The generated js files require these runtime files 
to work. They will be shipped to the client browser along with everything 
else.

[Other]

I'm no javascript expert, but I think npm should get everything it needs from 
package.json and resolve it's own dependencies.

Good luck.




// Notes

To find equivalents of complex expressions, we need access to their children.
This is difficult because subclasses have different child implementations.
Options:
    1. Expression has a children property subclasses implement
        Attempts to avoid reflection in equivalence rules
        But doesn't suceed in avoiding reflection because it's needed to construct the equivalent expressions

    2. Equivalence rules are organized by operation
        This already happens implicitly with how they're organized
        Matches how humans think about this stuff
        