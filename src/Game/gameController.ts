import { ConnectionHandler } from "../ConnectionHandler/connectionHandler";
import { Game } from "./game";

export class GameController extends ConnectionHandler {
    clickPosition?: [number, number];
    canvasPressed: boolean = false;
    mouseMoveHandler: (event: MouseEvent) => void;
    mouseDownHandler: (event: MouseEvent) => void;
    mouseScrollHandler: (event: WheelEvent) => void;
    mouseUpHandler: (event: MouseEvent) => void;
    moveMapBasedOnOffset: (position: [number, number]) => void;

    constructor(game: Game) {
        super();
        const getRelativePosition = (event: MouseEvent): [number, number] => {
            const rect = game.gameCanvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            return [x, y];
        };
        const getOffset = (position: [number, number]): [number, number] => {
            return [
                position[0] - this.clickPosition![0],
                position[1] - this.clickPosition![1],
            ];
        };
        this.mouseMoveHandler = (event: MouseEvent) => {
            event.preventDefault();
            game.signals.cursorMoved.emit(getRelativePosition(event));
        };
        this.mouseDownHandler = (event: MouseEvent) => {
            event.preventDefault();
            if (event.target === game.gameCanvas) {
                // get mouse button
                const button = event.button;
                switch (button) {
                    case 0: // left button
                        game.signals.canvasLeftPressed.emit(
                            getRelativePosition(event),
                        );
                        break;
                    case 2: // right button
                        game.signals.canvasRightPressed.emit(
                            getRelativePosition(event),
                        );
                        this.canvasPressed = true;
                        break;
                    case 1: // middle button
                        break;
                }
            }
        };
        this.mouseUpHandler = (event: MouseEvent) => {
            event.preventDefault();
            if (this.canvasPressed) {
                const button = event.button;
                switch (button) {
                    case 0: // left button
                        game.signals.canvasLeftReleased.emit(
                            getRelativePosition(event),
                        );
                        break;
                    case 2: // right button
                        game.signals.canvasRightReleased.emit(
                            getRelativePosition(event),
                        );
                        this.canvasPressed = false;
                        break;
                    case 1: // middle button
                        break;
                }
            }
        };
        this.mouseScrollHandler = (event: WheelEvent) => {
            // event.preventDefault();
            game.signals.zoomChanged.emit([event.deltaX, event.deltaY]);
        };
        this.moveMapBasedOnOffset = (position: [number, number]) => {
            game.signals.mapMoved.emit(getOffset(position));
        };
        document.addEventListener("mousedown", this.mouseDownHandler);
        document.addEventListener("mouseup", this.mouseUpHandler);
        document.addEventListener("wheel", this.mouseScrollHandler);
        this.addConnection(game.signals.canvasRightPressed, () =>
            document.addEventListener("mousemove", this.mouseMoveHandler),
        );
        this.addConnection(game.signals.canvasRightReleased, () =>
            document.removeEventListener("mousemove", this.mouseMoveHandler),
        );
        console.log("Controls created");
    }
    setClickPosition(position: [number, number]) {
        this.clickPosition = position;
    }
    clearClickPosition() {
        this.clickPosition = undefined;
    }
    clearConnections(): void {
        super.clearConnections();
        document.removeEventListener("mousedown", this.mouseDownHandler);
        document.removeEventListener("mouseup", this.mouseUpHandler);
        document.removeEventListener("mousemove", this.mouseMoveHandler);
        document.removeEventListener("wheel", this.mouseScrollHandler);
    }
}
