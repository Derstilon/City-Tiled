export class Visuals {
    _data: Map<string, string> = new Map();
    dataBounds: [[number, number], [number, number]] = [
        [0, 0],
        [0, 0],
    ];
    constructor() {
        console.log("Visuals created");
    }
    set(key: string, value: string) {
        this._data.set(key, value);
        const [x, y] = key.split(",").map((v) => parseInt(v));
        this.dataBounds[0] = [
            Math.min(this.dataBounds[0][0], x),
            Math.min(this.dataBounds[0][1], y),
        ];
        this.dataBounds[1] = [
            Math.max(this.dataBounds[1][0], x),
            Math.max(this.dataBounds[1][1], y),
        ];
    }
    get(key: string): string | undefined {
        return this._data.get(key);
    }
    boundWithDataBounds(
        origin: [number, number],
        bound: [number, number] = origin,
    ) {
        origin[0] = Math.min(this.dataBounds[1][0], origin[0]);
        origin[1] = Math.min(this.dataBounds[1][1], origin[1]);
        bound[0] = Math.max(this.dataBounds[0][0], bound[0]);
        bound[1] = Math.max(this.dataBounds[0][1], bound[1]);
    }
}
