import { ConnectionHandler } from "../ConnectionHandler/connectionHandler";
import { Game } from "./game";

export class GameController extends ConnectionHandler {
    clickPosition?: [number, number];
    canvasPressed: boolean = false;
    mouseMoveHandler: (event: MouseEvent) => void;
    mouseDownHandler: (event: MouseEvent) => void;
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
        console.log("Controls created");
        this.mouseMoveHandler = (event: MouseEvent) => {
            game.signals.cursorMoved.emit(getRelativePosition(event));
        };
        this.mouseDownHandler = (event: MouseEvent) => {
            if (event.target === game.gameCanvas) {
                game.signals.canvasPressed.emit(getRelativePosition(event));
                this.canvasPressed = true;
            }
        };
        this.mouseUpHandler = (event: MouseEvent) => {
            if (this.canvasPressed) {
                game.signals.canvasReleased.emit(getRelativePosition(event));
                this.canvasPressed = false;
            }
        };
        this.moveMapBasedOnOffset = (position: [number, number]) => {
            game.signals.mapMoved.emit(getOffset(position));
        };
        document.addEventListener("mousedown", this.mouseDownHandler);
        document.addEventListener("mouseup", this.mouseUpHandler);
        this.addConnection(game.signals.canvasPressed, () =>
            document.addEventListener("mousemove", this.mouseMoveHandler),
        );
        this.addConnection(game.signals.canvasReleased, () =>
            document.removeEventListener("mousemove", this.mouseMoveHandler),
        );
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
    }
}
