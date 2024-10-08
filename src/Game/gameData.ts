import { isMapTile, MapTile } from "../Tile/mapTile";
import { Tile } from "../Tile/tile";

export class GameData {
    data;
    constructor() {
        this.data = new Map<string, MapTile>();
        console.log("Data created");
    }
    put(tile: MapTile): void;
    put(tile: Tile, position: [number, number]): void;
    put(tile: Tile | MapTile, position?: [number, number]) {
        if (isMapTile(tile) && !position)
            this.data.set(`${tile.position}`, tile);
        else {
            if (!position) throw new Error("Position is required");
            this.data.set(`${position}`, MapTile.fromBaseTile(tile, position));
        }
    }
    get(position: [number, number]): MapTile | undefined {
        return this.data.get(`${position}`);
    }
}
