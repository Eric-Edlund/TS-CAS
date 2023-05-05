import { BreakDerivativesOverAddition } from "./calculus/BreakDerivativesOverAddition"
import { PowerRule } from "./calculus/PowerRule"
import { ProductRule } from "./calculus/ProductRule"
import { PullConstantsFromDerivatives } from "./calculus/PullConstantsFromDerivatives"
import { QuotientRule } from "./calculus/QuotientRule"
import { USubstitution } from "./calculus/USubstitution"
import { NoContextExpressionSimplificationRule } from "./NoContextExpressionSimplificationRule"
import { AdditiveIdentity } from "./simplifications/AdditiveIdentity"
import { AssociativePropertyOfProductsAndSums } from "./simplifications/AssociativePropertyOfProductsAndSums"
import { CancelNegatives } from "./simplifications/CancelNegatives"
import { CombineCommonFactorsMultiplication } from "./simplifications/CombineCommonFactorsMultiplication"
import { CombineCommonTermsAddition } from "./simplifications/CombineCommonTermsAddition"
import { CombineIntegerFactors } from "./simplifications/CombineIntegerFactors"
import { DivideFractions } from "./simplifications/DivideFractions"
import { DivisionIdentity } from "./simplifications/DivisionIdentity"
import { EvaluateSums } from "./simplifications/EvaluateSums"
import { ExponentialIdentity } from "./simplifications/ExponentialIdentity"
import { ExponentToZero } from "./simplifications/ExponentToZero"
import { MultiplicativeIdentity } from "./simplifications/MultiplicativeIdentity"
import { MultiplyExponentPowers } from "./simplifications/MultiplyExponentPowers"
import { OrderSums } from "./simplifications/OrderSums"
import { RemoveCommonFactorsFromTopAndBottomOfFraction } from "./simplifications/RemoveCommonFactorsOnTopAndBottomOfFraction"
import { SubtractExponentsOnFractions } from "./simplifications/SubtractExponentsOnFractions"
import { SumCoefficientsOfAddedTerms } from "./simplifications/SumCoefficientsOfAddedTerms"

/**
 * 1 input, 1 output
 */
 const beautifyingRules = [
    new OrderSums(),
]

/**
 * 1 input, 1 output
 */
const evaluativeRules = [
    new EvaluateSums(),
    new CancelNegatives(),
    new CombineIntegerFactors(),
]

const combinatoricRules = [
    new SumCoefficientsOfAddedTerms(),
    new CombineCommonTermsAddition(),
    new CombineCommonFactorsMultiplication(),
    new MultiplyExponentPowers(),
    new SubtractExponentsOnFractions(),
]

const remainingNoContextSimplificationRules: NoContextExpressionSimplificationRule[] = [
    new USubstitution(),
    new PowerRule(),
    new PullConstantsFromDerivatives(),
    new AssociativePropertyOfProductsAndSums(),
    new ProductRule(),
    new QuotientRule(),
    new DivideFractions(),
    new RemoveCommonFactorsFromTopAndBottomOfFraction(),
    new BreakDerivativesOverAddition(),
]

/**
 * A list of lists of simplification rules.
 * Earlier lists should be tried first.
 * If and only if an earlier list fails to 
 * produce equivalent expressions should later lists
 * be used.
 */
export const simplificationOrder: NoContextExpressionSimplificationRule[][] = [
    // Identity rules first
    [new ExponentToZero()],
    [new MultiplicativeIdentity()],
    [new ExponentialIdentity()],
    [new DivisionIdentity()],
    [new AdditiveIdentity()],
    beautifyingRules,
    evaluativeRules,
    combinatoricRules,
    remainingNoContextSimplificationRules,
]