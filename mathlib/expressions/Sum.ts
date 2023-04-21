import { assert } from "../util/assert";
import { Expression } from "./Expression";
import { Integer, IntegerType } from "./Integer";
import { Product } from "./Product";
import { VariableType } from "./Variable";


/**
 * Expression representing the sum of 2 or more terms.
 */
export class Sum extends Expression {

    /**
     * Factory method consntructor.
     * @param terms Contains at least 2 elements
     */
    public static of(terms: Expression[]): Sum {
        const hash = terms.map<string>(t => t.hash).join("")
        if (!Sum.instances.has(hash)) {
            Sum.instances.set(hash, new Sum(terms))
        }
        return Sum.instances.get(hash)!
    }
    private static readonly instances: Map<string, Sum> = new Map();

    private constructor(terms: Expression[]){
        super()
        assert(terms.length >= 2, "Creating sum with less than 2 terms.")
        this.terms = terms;
        this.isReducible = this.terms.map<boolean>(t => t.isReducible || t.class == IntegerType).reduce((a, b) => a && b)

        this.isHealthy = this.determineHealth()
        this.isConstant = this.terms.map<boolean>(t => t.isConstant).reduce((a, b) => a && b)
        Object.freeze(this.terms)
    }

    /**
     * Returns a new Expression without the given term.
     * If the sum contains the term multiple times, 
     * only removes one. If it doesn't contain the term, 
     * returns itself.
     * @param term A term in this sum.
     */
    public without(term: Expression): Expression {
        const newTerms = [...this.terms]
        
        const index = newTerms.findIndex((value) => {
            return value === term
        })
        if (index == -1) return this

        newTerms.splice(index, 1)
        if (newTerms.length < 2) {
            return newTerms[0] // Gauranteed there's one term here
        }
        return Sum.of(newTerms)
    }


    public toMathXML(): string {
        function wrapIfNeeded(exp: Expression): string {
            if (exp.class == SumType)
                return "<mo>(</mo>" + exp.toMathXML() + "<mo>)</mo>"
            return exp.toMathXML()
        }

        let out = wrapIfNeeded(this.terms[0])
        for (let i=1; i < this.terms.length; i++) {
            const term = this.terms[i]
            // Subtract negative terms instead of adding negatives
            if (term instanceof Product && term.isNegation) {
                out += "<mo>-</mo>" + wrapIfNeeded(term.negation)
            } else if (term instanceof Integer && term.value <  0) {
                out += "<mo>-</mo>" + wrapIfNeeded(term.butPositive())
            } else {
                out += "<mo>+</mo>" + wrapIfNeeded(this.terms[i])
            }
        }
        return out;
    }

    public toString(): string {
        let out = ""
        for (const exp of this.terms) {
            out += exp.toString() + "+"
        }
        out = out.substring(0, out.length - 1)
        return out
    }

    public get hash(): string {
        return "Sum" + this.terms.map<string>(e => e.hash).join()
    }
    
    public readonly class = SumType;
    /**
     * Ordered, immutable
     */
    public readonly terms: Expression[];
    public readonly isReducible: boolean;

    public get reduced(): Integer {
        return Integer.of(this.terms.map<number>(t => t.reduced.value).reduce((a, b) => a + b))
    }

    /**
     * Figure out if we're healthy.
     */
    private determineHealth(): boolean {
        if (this.terms.filter(t => t.isReducible || t instanceof Integer).length > 1)
            return false

        this.terms.forEach(t => {
            if (t instanceof Integer)
                if (t.value == 0) return false
        })
        
        this.terms.forEach(term => {
            if (!term.isHealthy) return false
        })

        const correctOrdering = orderTerms(...this.terms)
        for (let i=0; i < this.terms.length; i++) {
            if (this.terms[i] !== correctOrdering[i]) return false
        }

        //TODO: Check condition 3

        return true
    }

    /**
     * A sum is healthy iff:
     * 
     * 1. Contains a max of 1 reducible term.
     * 2. Products with integer coefficients are combined.
     *  a + 2a = 3a,
     *  a + -a = 0
     * 3. No term is 0
     * 4. All terms are healthy.
     * 5. Terms are ordered correctly.
     */
    public readonly isHealthy: boolean
    public readonly isConstant: boolean
    public get children(): Expression[] {
        return [...this.terms]
    }
}

export const SumType = "Sum"

/**
 * Returns the given terms ordered correctly to
 * be placed in a Sum. Alters the given array.
 * @param terms 
 */
export function orderTerms(...terms: Expression[]): Expression[] {
    // A note about the sort function bc the documentation is cryptic
    // If a should be put before b in the sum, return a negative value
    return terms.sort((a, b) => {
        // Variables before Integers
        if (a.class == IntegerType && (b.class == VariableType || (b instanceof Product && b.isNegation && b.negation.class == VariableType))) {
            return 1
        }
        if ((a.class == VariableType || (a instanceof Product && a.isNegation && a.negation.class == VariableType)) && b.class == IntegerType) {
            return -1
        }

        return 0
    })
}