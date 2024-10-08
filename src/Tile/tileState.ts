export class TileState {
    private state = new Map<number, number>();
    private sumSize = 0;
    maxStateSize = 3;
    constructor(iterable?: Iterable<number> | null | undefined) {
        if (iterable) {
            for (const value of iterable) {
                this.add(value);
            }
        }
    }
    isFull() {
        return this.sumSize >= this.maxStateSize;
    }
    add(value: number): this {
        if (this.isFull()) {
            throw new Error("Cannot add more values to a full state");
        }
        if (this.state.has(value)) {
            this.state.set(value, this.state.get(value)! + 1);
        } else {
            this.state.set(value, 1);
        }
        this.sumSize++;
        return this;
    }
    clear(): void {
        this.state.clear();
        this.sumSize = 0;
    }
    delete(value: number): boolean {
        if (this.state.has(value)) {
            if (this.state.get(value)! > 1) {
                this.state.set(value, this.state.get(value)! - 1);
            } else {
                this.state.delete(value);
            }
            this.sumSize--;
            return true;
        }
        return false;
    }
    forEach(
        callbackfn: (value: number, value2: number, set: TileState) => void,
        thisArg?: any,
    ): void {
        this.state.forEach((value, key) => {
            for (let i = 0; i < value; i++) {
                callbackfn.call(thisArg, key, key, this);
            }
        });
    }
    has(value: number): boolean {
        return this.state.has(value);
    }
    get size(): number {
        return this.sumSize;
    }
    values(): SetIterator<number> {
        return Array.from(this.state.entries())
            .reduce<number[]>((acc, [key, value]) => {
                for (let i = 0; i < value; i++) {
                    acc.push(key);
                }
                return acc;
            }, [])
            .values();
    }
}
