import { TileState } from "./tileState";

export type PieceShape =
    | 0 // O
    | 1 // I
    | 2 // S
    | 3 // Z
    | 4 // L
    | 5 // J
    | 6; // T

export class TilePiece {
    shape: PieceShape;
    states: [TileState, TileState, TileState, TileState];
    constructor(
        shape: PieceShape,
        states: [TileState, TileState, TileState, TileState],
    ) {
        this.shape = shape;
        this.states = states;
    }
}
