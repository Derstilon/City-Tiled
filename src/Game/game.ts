import { Signal } from "typed-signals";
import { GameData } from "./gameData";
import { Drawer } from "./drawer";
import { GameMap } from "./gameMap";
import { GameController } from "./gameController";
import { ConnectionHandler } from "../ConnectionHandler/connectionHandler";

export class Game {
    signals: {
        dataUpdate: Signal<(data: GameData) => void>;
        canvasPressed: Signal<(position: [number, number]) => void>;
        canvasReleased: Signal<(offset: [number, number]) => void>;
        cursorMoved: Signal<(position: [number, number]) => void>;
        mapMoved: Signal<(offset: [number, number]) => void>;
    } = {
        dataUpdate: new Signal(),
        canvasPressed: new Signal(),
        canvasReleased: new Signal(),
        cursorMoved: new Signal(),
        mapMoved: new Signal(),
    };
    drawer: Drawer;
    gameCanvas: HTMLCanvasElement;
    gameMap: GameMap;
    gameController: GameController;
    constructor(canvasClass: string = "gameCanvas") {
        console.log("Game created");
        const canvasElement = document.getElementById(
            canvasClass,
        ) as HTMLCanvasElement | null;
        if (!canvasElement) throw new Error("Canvas not found");
        this.gameCanvas = canvasElement;
        const ctx = this.gameCanvas.getContext("2d");
        if (!ctx) throw new Error("2d context not supported");
        this.drawer = new Drawer(ctx);
        this.gameMap = new GameMap(this);
        this.gameController = new GameController(this);
        this.drawer.addConnection(
            this.signals.dataUpdate,
            this.drawer.generateVisuals,
            this.drawer,
        );
        this.gameController.addConnection(
            this.signals.canvasPressed,
            this.gameController.setClickPosition,
            this.gameController,
        );
        this.gameController.addConnection(
            this.signals.canvasReleased,
            this.gameController.moveMapBasedOnOffset,
            this.gameController,
        );
        this.gameController.addConnection(
            this.signals.canvasReleased,
            this.gameController.clearClickPosition,
            this.gameController,
        );
        this.gameController.addConnection(
            this.signals.cursorMoved,
            this.gameController.moveMapBasedOnOffset,
            this.gameController,
        );
        this.drawer.addConnection(
            this.signals.mapMoved,
            this.drawer.updateOffset,
            this.drawer,
        );
        this.drawer.addConnection(
            this.signals.canvasReleased,
            this.drawer.applyOffset,
            this.drawer,
        );
    }
}
