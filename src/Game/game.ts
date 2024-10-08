import { Signal } from "typed-signals";
import { GameData } from "./gameData";
import { Drawer } from "./Drawer/drawer";
import { GameMap } from "./gameMap";
import { GameController } from "./gameController";
import { ConnectionHandler } from "../ConnectionHandler/connectionHandler";

export class Game extends ConnectionHandler {
    signals: {
        zoomChanged: Signal<(delta: [number, number]) => void>;
        dataUpdate: Signal<(data: GameData) => void>;
        canvasRightPressed: Signal<(position: [number, number]) => void>;
        canvasRightReleased: Signal<(offset: [number, number]) => void>;
        canvasLeftReleased: Signal<(offset: [number, number]) => void>;
        canvasLeftPressed: Signal<(position: [number, number]) => void>;
        cursorMoved: Signal<(position: [number, number]) => void>;
        mapMoved: Signal<(offset: [number, number]) => void>;
    } = {
        zoomChanged: new Signal(),
        dataUpdate: new Signal(),
        canvasRightPressed: new Signal(),
        canvasRightReleased: new Signal(),
        canvasLeftReleased: new Signal(),
        canvasLeftPressed: new Signal(),
        cursorMoved: new Signal(),
        mapMoved: new Signal(),
    };
    drawer: Drawer;
    gameCanvas: HTMLCanvasElement;
    gameMap: GameMap;
    gameController: GameController;
    constructor(canvasClass: string = "gameCanvas") {
        super();
        const canvasElement = document.getElementById(
            canvasClass,
        ) as HTMLCanvasElement | null;
        if (!canvasElement) throw new Error("Canvas not found");
        this.gameCanvas = canvasElement;
        // make gameCanvas fill the screen and add resize listener
        const ctx = this.gameCanvas.getContext("2d");
        if (!ctx) throw new Error("2d context not supported");
        this.drawer = new Drawer(this, ctx);
        this.gameMap = new GameMap(this);
        this.gameController = new GameController(this);
        this.drawer.addConnection(
            this.signals.dataUpdate,
            this.drawer.generateVisuals,
            this.drawer,
        );
        this.gameController.addConnection(
            this.signals.canvasRightPressed,
            this.gameController.setClickPosition,
            this.gameController,
        );
        this.gameController.addConnection(
            this.signals.canvasRightReleased,
            this.gameController.moveMapBasedOnOffset,
            this.gameController,
        );
        this.gameController.addConnection(
            this.signals.canvasRightReleased,
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
            this.signals.canvasRightReleased,
            this.drawer.applyOffset,
            this.drawer,
        );
        this.drawer.addConnection(
            this.signals.zoomChanged,
            this.drawer.updateScale,
            this.drawer,
        );
        console.log("Game created");
    }
    clearConnections(): void {
        this.drawer.clearConnections();
        this.gameController.clearConnections();
        this.gameMap.clearConnections();
        super.clearConnections();
    }
}
