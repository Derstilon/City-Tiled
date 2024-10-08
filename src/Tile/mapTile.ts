import { Tile } from "./tile";
export type Coords = [number, number];
export class MapTile extends Tile {
    position: Coords;
    constructor(position: Coords, startingState?: number[]) {
        super(startingState);
        this.position = position;
    }
    static fromBaseTile(tile: Tile, position: Coords): MapTile {
        return new MapTile(position, tile.state);
    }
}
export function isMapTile(tile: Tile | MapTile): tile is MapTile {
    return (tile as MapTile).position !== undefined;
}
