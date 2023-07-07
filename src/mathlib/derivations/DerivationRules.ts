import { BreakDerivativesOverAddition } from "./calculus/BreakDerivativesOverAddition"
import { PowerRule } from "./calculus/PowerRule"
import { ProductRule } from "./calculus/ProductRule"
import { PullConstantsFromDerivatives } from "./calculus/PullConstantsFromDerivatives"
import { QuotientRule } from "./calculus/QuotientRule"
import { USubstitution } from "./calculus/USubstitution"
import { NoContextExpressionSimplificationRule } from "./NoContextExpressionSimplificationRule"
import { AdditiveIdentity } from "./simplifications/AdditiveIdentity"
import { AnythingTimesZero } from "./simplifications/AnythingTimesZero"
import { AssociativePropertyOfProductsAndSums } from "./simplifications/AssociativePropertyOfProductsAndSums"
import { CancelNegatives } from "./simplifications/CancelNegatives"
import { CombineCommonFactorsMultiplication } from "./simplifications/CombineCommonFactorsMultiplication"
import { CombineCommonTermsAddition } from "./simplifications/CombineCommonTermsAddition"
import { CombineIntegerFactors } from "./simplifications/CombineIntegerFactors"
import { CombineProductsAndFractions } from "./simplifications/CombineProductsAndFractions"
import { DistributiveProperty } from "./simplifications/DistributiveProperty"
import { DivideFractions } from "./simplifications/DivideFractions"
import { DivisionIdentity } from "./simplifications/DivisionIdentity"
import { EvaluateSums } from "./simplifications/EvaluateSums"
import { ExponentialIdentity } from "./simplifications/ExponentialIdentity"
import { ExponentToZero } from "./simplifications/ExponentToZero"
import { FOIL } from "./simplifications/FOIL"
import { LogOfOne } from "./simplifications/LogOfOne"
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
    new CombineCommonFactorsMultiplication(),
    new MultiplyExponentPowers(),
    new SubtractExponentsOnFractions(),
    new CombineProductsAndFractions(),
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
 * A list of simplification rules.
 * If and only if an earlier rule fails to 
 * produce equivalent expressions should later lists
 * be used.
 * This list only contains rules which converge to one answer.
 */
export const convergentSimplificationRules: NoContextExpressionSimplificationRule[] = [
    // Identity rules first
    new AnythingTimesZero(),
    new ExponentToZero(),
    new MultiplicativeIdentity(),
    new ExponentialIdentity(),
    new DivisionIdentity(),
    new AdditiveIdentity(),
    new LogOfOne(),
    ...beautifyingRules,
    ...evaluativeRules,
    ...combinatoricRules,
    ...remainingNoContextSimplificationRules,
]

/**
 * These rules converge to factored form.
 */
export const factoringSimplificationRules : NoContextExpressionSimplificationRule[] = [
    new CombineCommonTermsAddition(),
]

/**
 * These rules converge to polynomial form.
 */
export const polynomialSimplificationRules : NoContextExpressionSimplificationRule[] = [
    new DistributiveProperty(), 
    new FOIL(),
]