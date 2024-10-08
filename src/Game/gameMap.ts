import { Signal } from "typed-signals";
import { Drawer } from "./Drawer/drawer";
import { GameData } from "./gameData";
import { ConnectionHandler } from "../ConnectionHandler/connectionHandler";
import { MapTile } from "../Tile/mapTile";
import { Tile } from "../Tile/tile";
import { Game } from "./game";

export class GameMap extends ConnectionHandler {
    _data: GameData;
    data: GameData;
    constructor(game: Game) {
        super();
        this._data = new GameData();
        this.data = new Proxy(this._data, {
            get: (target, prop, receiver) => {
                if (prop === "put") {
                    return new Proxy(target[prop], {
                        apply: (target2, thisArg, argArray) => {
                            const result = Reflect.apply(
                                target2,
                                thisArg,
                                argArray,
                            );
                            game.signals.dataUpdate.emit(target);
                            return result;
                        },
                    });
                }
                return Reflect.get(target, prop, receiver);
            },
        });
        console.log("Map created");
    }
}
