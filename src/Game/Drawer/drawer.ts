import { ConnectionHandler } from "../../ConnectionHandler/connectionHandler";
import { Game } from "../game";
import { GameData } from "../gameData";
import { Visuals } from "./visuals";

export class Drawer extends ConnectionHandler {
    ctx: CanvasRenderingContext2D;
    centerPosition: [number, number] = [0, 0];
    offset: [number, number] = [0, 0];
    scale: number = 100;
    visuals: Visuals;
    draw: boolean = true;
    resizeCanvas: () => void;
    constructor(game: Game, ctx: CanvasRenderingContext2D) {
        super();
        this.resizeCanvas = () => {
            ctx.canvas.width = window.innerWidth;
            ctx.canvas.height = window.innerHeight;
        };
        this.ctx = ctx;
        this.visuals = new Visuals();
        window.addEventListener("resize", this.resizeCanvas);
        this.resizeCanvas();
        this.drawMap();
        console.log("Drawer created");
    }
    generateVisuals(data: GameData) {
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
        console.log("Visuals generated", this.visuals);
    }
    updateScale(delta: [number, number]) {
        this.scale *= 1 - 0.001 * delta[1];
        this.scale = Math.max(50, Math.min(500, this.scale));
        let origin: [number, number] = [
            this.centerPosition[0] -
                this.offset[0] / this.scale -
                this.ctx.canvas.width / 2 / this.scale,
            this.centerPosition[1] -
                this.offset[1] / this.scale -
                this.ctx.canvas.height / 2 / this.scale,
        ];
        let bound: [number, number] = [
            this.centerPosition[0] -
                this.offset[0] / this.scale +
                this.ctx.canvas.width / 2 / this.scale,
            this.centerPosition[1] -
                this.offset[1] / this.scale +
                this.ctx.canvas.height / 2 / this.scale,
        ];
        this.visuals.boundWithDataBounds(origin, bound);
        origin = [
            this.centerPosition[0] -
                this.offset[0] / this.scale -
                this.ctx.canvas.width / 2 / this.scale -
                origin[0],
            this.centerPosition[1] -
                this.offset[1] / this.scale -
                this.ctx.canvas.height / 2 / this.scale -
                origin[1],
        ];
        bound = [
            this.centerPosition[0] -
                this.offset[0] / this.scale +
                this.ctx.canvas.width / 2 / this.scale -
                bound[0],
            this.centerPosition[1] -
                this.offset[1] / this.scale +
                this.ctx.canvas.height / 2 / this.scale -
                bound[1],
        ];
        this.centerPosition[0] -= origin[0] + bound[0];
        this.centerPosition[1] -= origin[1] + bound[1];
    }
    updateOffset(offset: [number, number]) {
        let origin: [number, number] = [
            this.centerPosition[0] -
                offset[0] / this.scale -
                this.ctx.canvas.width / 2 / this.scale,
            this.centerPosition[1] -
                offset[1] / this.scale -
                this.ctx.canvas.height / 2 / this.scale,
        ];
        let bound: [number, number] = [
            this.centerPosition[0] -
                offset[0] / this.scale +
                this.ctx.canvas.width / 2 / this.scale,
            this.centerPosition[1] -
                offset[1] / this.scale +
                this.ctx.canvas.height / 2 / this.scale,
        ];
        this.visuals.boundWithDataBounds(origin, bound);
        origin = [
            this.centerPosition[0] -
                offset[0] / this.scale -
                this.ctx.canvas.width / 2 / this.scale -
                origin[0],
            this.centerPosition[1] -
                offset[1] / this.scale -
                this.ctx.canvas.height / 2 / this.scale -
                origin[1],
        ];
        bound = [
            this.centerPosition[0] -
                offset[0] / this.scale +
                this.ctx.canvas.width / 2 / this.scale -
                bound[0],
            this.centerPosition[1] -
                offset[1] / this.scale +
                this.ctx.canvas.height / 2 / this.scale -
                bound[1],
        ];
        this.offset[0] = offset[0] + (origin[0] + bound[0]) * this.scale;
        this.offset[1] = offset[1] + (origin[1] + bound[1]) * this.scale;
    }
    applyOffset() {
        this.centerPosition[0] -= this.offset[0] / this.scale;
        this.centerPosition[1] -= this.offset[1] / this.scale;
        this.offset = [0, 0];
    }
    drawMap() {
        this.redraw();
        if (this.draw) window.requestAnimationFrame(() => this.drawMap());
    }
    redraw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
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
    clearConnections(): void {
        this.draw = false;
        super.clearConnections();
        window.removeEventListener("resize", this.resizeCanvas);
    }
}
