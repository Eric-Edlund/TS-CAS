import { BreakDerivativesOverAddition } from "./calculus/BreakDerivativesOverAddition"
import { ConstantDerivaties } from "./calculus/ConstantDerivative"
import { LogIntegralRule } from "./calculus/LogIntegralRule"
import { PowerRule } from "./calculus/PowerRule"
import { ProductRule } from "./calculus/ProductRule"
import { PullConstantsFromDerivatives } from "./calculus/PullConstantsFromDerivatives"
import { PullConstantsFromIntegrals } from "./calculus/PullConstantsFromIntegrals"
import { QuotientRule } from "./calculus/QuotientRule"
import { ReversePowerRule } from "./calculus/ReversePowerRule"
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
import { MultiplyFractions } from "./simplifications/MultiplyFractions"
import { OrderProducts } from "./simplifications/OrderProducts"
import { OrderSums } from "./simplifications/OrderSums"
import { RemoveCommonFactorsFromTopAndBottomOfFraction } from "./simplifications/RemoveCommonFactorsOnTopAndBottomOfFraction"
import { SubtractExponentsOnFractions } from "./simplifications/SubtractExponentsOnFractions"
import { SumCoefficientsOfAddedTerms } from "./simplifications/SumCoefficientsOfAddedTerms"

/**
 * 1 input, 1 output
 * Rewrite expressions to follow math conventions
 */
const conventionRules = [new OrderProducts(), new OrderSums()]

/**
 * 1 input, 1 output
 */
const evaluativeRules = [
    new EvaluateSums(),
    new CancelNegatives(),
    new CombineIntegerFactors()
]

const combinatoricRules = [
    new SumCoefficientsOfAddedTerms(),
    new CombineCommonFactorsMultiplication(),
    new MultiplyExponentPowers(),
    new SubtractExponentsOnFractions(),
    new CombineProductsAndFractions(),
    new MultiplyFractions()
]

const remainingNoContextSimplificationRules: NoContextExpressionSimplificationRule[] =
    [
        new USubstitution(),
        new PowerRule(),
        new PullConstantsFromDerivatives(),
        new PullConstantsFromIntegrals(),
        new AssociativePropertyOfProductsAndSums(),
        new ProductRule(),
        new QuotientRule(),
        new DivideFractions(),
        new RemoveCommonFactorsFromTopAndBottomOfFraction(),
        new BreakDerivativesOverAddition(),
        new ConstantDerivaties(),
        new ReversePowerRule(),
        new LogIntegralRule()
    ]

/**
 * A list of simplification rules.
 * If and only if an earlier rule fails to
 * produce equivalent expressions should later lists
 * be used.
 * This list only contains rules which converge to one answer.
 */
export const convergentSimplificationRules: NoContextExpressionSimplificationRule[] =
    [
        // Identity rules first
        new AnythingTimesZero(),
        new ExponentToZero(),
        new MultiplicativeIdentity(),
        new ExponentialIdentity(),
        new DivisionIdentity(),
        new AdditiveIdentity(),
        new LogOfOne(),
        ...evaluativeRules,
        ...combinatoricRules,
        ...conventionRules,
        ...remainingNoContextSimplificationRules
    ]

/**
 * These rules converge to factored form.
 */
export const factoringSimplificationRules: NoContextExpressionSimplificationRule[] =
    [new CombineCommonTermsAddition()]

/**
 * These rules converge to polynomial form.
 */
export const polynomialSimplificationRules: NoContextExpressionSimplificationRule[] =
    [new DistributiveProperty(), new FOIL()]
