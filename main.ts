import { loadPrimaryPage } from "./PrimaryPageLoader";
import { loadExpressionsTestPage } from "./ExpressionTestPageLoader"
import { loadInputParseTestPage } from "./InputParseTestPage";
import { loadSolverPage } from "./SolverPageLoader";

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
            }
        }, 100);
   
}

