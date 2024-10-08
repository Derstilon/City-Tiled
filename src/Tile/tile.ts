import { TileState } from "./tileState";

export class Tile {
    _state: TileState = new TileState();
    constructor(startingState?: number[]) {
        if (startingState && startingState.length > 4)
            throw new Error("Cannot create a tile with more than 4 values");
        this._state = new TileState(startingState);
        console.log("Tile created");
    }
    mergeState(newState: TileState) {
        if (newState.size + this._state.size >= 4)
            throw new Error("Cannot merge states with more than 4 values");
        newState.forEach((value) => this._state.add(value));
    }
    get state(): number[] {
        return Array.from(this._state.values());
    }
}
