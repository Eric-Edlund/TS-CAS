import { loadPrimaryPage } from "./LoadPrimaryPage"
import { loadExpressionsTestPage } from "./LoadExpressionTestPage"
import { loadInputParseTestPage } from "./LoadInputParseTestPage"
import { loadSimplificationTestPage } from "./LoadSimplificationTestPage"
import { loadSolverPage } from "./LoadSolverPage"


window.onload = () => {
    /**
     * Populate html elements by their class.
     */
    const classes = document.getElementsByTagName("body")[0].classList

    if (classes.contains("expressionTestPage")) {
        loadExpressionsTestPage()
    } else if (classes.contains("primaryIntegrator")) {
        loadPrimaryPage()
    } else if (classes.contains("inputParseTest")) {
        loadInputParseTestPage()
    } else if (classes.contains("mathTests")) {
        loadSimplificationTestPage()
    } else if (classes.contains("solver_page")) {
        loadSolverPage()
    } else {
        alert("No page selected.")
    }
}
