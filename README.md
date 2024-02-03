# A Computer Algebra System built in TypeScript + Rust

Does integrals so I don't have to. Also has a UI.


## Building the Website

Run the "npm *" tasks from the project root. They're listed
in package.json.
It will compile all the ts files into a bundle.js in `public`.

Then run `npm run serve` to start a local dev server and devigate
to one of the html files in `public`.

## Testing

The project uses jest.
Test files should go in the 'tests' directory, although it 
doesn't matter where you put them. Test files must end in '.test.ts'.

To do the tests, run "npm test"
You have to have 'jest' installed on your system.

## How it Works

Equation rendering is done with MathJax
Read the theory document in `mathlib` directory.
Expression parsing is done with ANTLR.

## ANTLR

The ANTLR runtime is a dependency of the project. The way this work is
in the src files there is a grammar file (ending in .g) which describes
the grammar for parsing math expressions. We use the command line tool
antlr4 to turn this file into generated JS code which will parse math 
expressions. You have to install antlr4 on your system. On KDE Neon it was

    sudo apt install antlr4

but this is a popular tool, and I'm sure you can find it other ways.
I've added a dependency to the project which adds the necessary
runtime files. The generated JS files require these runtime files 
to work. They will be shipped to the client browser along with everything 
else.

Good luck.

