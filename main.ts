import { loadPrimaryPage } from "./PrimaryPageLoader";
import { loadExpressionsTestPage } from "./ExpressionTestPageLoader"

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
            }
        }, 100);
   
}

