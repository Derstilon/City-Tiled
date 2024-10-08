import { ConnectionHandler } from "../ConnectionHandler/connectionHandler";
import { GameData } from "./gameData";

export class Drawer extends ConnectionHandler {
    ctx: CanvasRenderingContext2D;
    centerPosition: [number, number] = [0, 0];
    offset: [number, number] = [0, 0];
    scale: number = 100;
    visuals: Map<string, string> = new Map();
    constructor(ctx: CanvasRenderingContext2D) {
        super();
        console.log("Drawer created");
        this.ctx = ctx;
    }
    generateVisuals(data: GameData) {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        data.data.forEach((value, key) => {
            switch (value.state[0]) {
                case 0:
                    this.visuals.set(key, "red");
                    break;
                case 1:
                    this.visuals.set(key, "green");
                    break;
                case 2:
                    this.visuals.set(key, "blue");
                    break;
                case 3:
                    this.visuals.set(key, "yellow");
                    break;
                default:
                    throw new Error("Invalid color");
            }
        });
        this.drawMap();
    }
    updateOffset(offset: [number, number]) {
        this.offset[0] = offset[0];
        this.offset[1] = offset[1];
        this.redraw();
    }
    applyOffset() {
        this.centerPosition[0] -= this.offset[0] / this.scale;
        this.centerPosition[1] -= this.offset[1] / this.scale;
        this.offset = [0, 0];
    }
    drawMap() {
        this.redraw();
        window.requestAnimationFrame(() => this.drawMap());
    }
    redraw() {
        const relativeCenter: [number, number] = [
            this.centerPosition[0] - this.offset[0] / this.scale,
            this.centerPosition[1] - this.offset[1] / this.scale,
        ];
        // Calculate visible bounds of the map
        const origin = [
            Math.floor(
                relativeCenter[0] - this.ctx.canvas.width / 2 / this.scale,
            ),
            Math.floor(
                relativeCenter[1] - this.ctx.canvas.height / 2 / this.scale,
            ),
        ];
        const bound = [
            Math.ceil(
                1 + relativeCenter[0] + this.ctx.canvas.width / 2 / this.scale,
            ),
            Math.ceil(
                1 + relativeCenter[1] + this.ctx.canvas.height / 2 / this.scale,
            ),
        ];
        for (let x = origin[0]; x < bound[0]; x++) {
            for (let y = origin[1]; y < bound[1]; y++) {
                const color = this.visuals.get(`${x},${y}`);
                this.drawColor(color ?? "white", [x, y], relativeCenter);
            }
        }
        // Draw the map
    }
    drawColor(
        color: string,
        position: [number, number],
        center: [number, number],
    ) {
        this.ctx.fillStyle = color;
        const x =
            this.ctx.canvas.width / 2 +
            (position[0] - center[0] - 0.5) * this.scale;
        const y =
            this.ctx.canvas.height / 2 +
            (position[1] - center[1] - 0.5) * this.scale;
        const w = this.scale;
        const h = this.scale;
        this.ctx.fillRect(x, y, w, h);
        this.ctx.strokeRect(x, y, w, h);
    }
}
