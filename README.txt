Jesus I hate compilers

[Building]

Use "npx webpack --mode production"
It will compile all the ts files into a bundle.js in the dist dir.

Then you open the integrator.html file in a browser and it will load it.

[Testing]

The project uses jest.
Test files should go in the 'tests' directory, although it 
doesn't matter where you put them. Test files must end in '.test.ts'.

To do the tests, run "npm test"
You have to have 'jest' installed on your system.

[How it Works]
Equation rendering is done with MathJax
Read the theory document in mathlib directory.


[Other]

I'm no javascript expert, but I think npm should get everything it needs from 
package.json and resolve it's own dependancies.

Good luck.