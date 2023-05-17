/**
 * Interpret complicated touch gesture data.
 */
export class TouchGestureRecognizer {

    public constructor() {
        this.moveListeners = [];
        this.pinchListeners = [];
    }

    public addMoveListener(callback: MoveListener): void {
        this.moveListeners.push(callback);
    }

    /**
     * Adds a function that will be called when a pinch gesture has been detected.
     * @param callback Takes a center coordinate that's the average of the finger positions,
     *              the change in scale since the last call on (0, infinity) where 1 is no change,
     *              and the number of fingers in the gesture (an integer).
     */
    public addPinchListener(callback: PinchListener): void {
        this.pinchListeners.push(callback);
    }

    /**
     * Should take all touch events from the view using it.
     * @param event 
     */
    public processTouchDown(event: Event): void {

    }
    /**
     * Should take all touch events from the view using it.
     * @param event 
     */
     public processTouchMove(event: TouchEvent): void {
        for (const changed of event.changedTouches) {
            changed.clientX
        }

    }
    /**
     * Should take all touch events from the view using it.
     * @param event 
     */
     public processTouchEnd(event: TouchEvent): void {

    }
    /**
     * Should take all touch events from the view using it.
     * @param event 
     */
     public processTouchCancel(event: TouchEvent): void {

    }

    //private lastX: Map<Touch

    private readonly moveListeners: MoveListener[];
    private readonly pinchListeners: PinchListener[];
}

export type MoveListener = (deltaX: number, deltaY: number, fingers: number) => void;
export type PinchListener = (center: {x: number, y: number}, scaleDelta: number, fingers: number) => void;