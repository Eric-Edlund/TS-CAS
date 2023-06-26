import { loadPrimaryPage } from "./LoadPrimaryPage";
import { loadExpressionsTestPage } from "./LoadExpressionTestPage"
import { loadInputParseTestPage } from "./LoadInputParseTestPage";
import { loadSolverPage } from "./LoadSolverPage";
import { loadSimplificationTestPage } from "./LoadSimplificationTestPage";

window.onload = () => {
    setTimeout(
        function() {
           /**
             * Populate html elements by their class.
             */
            const classes = document.getElementsByTagName('body')[0].classList

            if (classes.contains('expressionTestPage')) {
                loadExpressionsTestPage()
            } else if (classes.contains('primaryIntegrator')) {
                loadPrimaryPage()
            } else if (classes.contains('inputParseTest')) {
                loadInputParseTestPage()
            } else if (classes.contains('solve_in_steps')) {
                loadSolverPage()
            } else if (classes.contains('mathTests')) {
                loadSimplificationTestPage()
            }
        }, 100);
   
}

