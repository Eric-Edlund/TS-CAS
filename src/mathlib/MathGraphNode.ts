export abstract class MathGraphNode {
    constructor() {
        this.id = MathGraphNode.nextId
        MathGraphNode.nextId++
    }
    private static nextId = 1

    public readonly id: number
}
