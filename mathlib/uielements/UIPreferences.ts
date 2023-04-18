

class UIPreferences {

    /**
     * @param callback Function called whenever a ui preference
     * is changed.
     */
     public onUpdate(callback: () => void) {
        this.callbacks.push(callback)
    }
    

    // Getters and Setters

    /**
     * Background color of a graph edge denoting
     * equality between two expressions.
     * Css value.
     */
    public get edgeEqualsBackgroundColor(): string {
        return this._edgeEqualsBackgroundColor
    }
    public set edgeEqualsBackgroundColor(val: string) {
        this._edgeEqualsBackgroundColor = val
        this.callbacks.forEach(c => c())
    }


    // Preference Values
    private _edgeEqualsBackgroundColor: string = "none"
    private readonly callbacks: (() => void)[] = []
}

export const uiPreferences = new UIPreferences()