import { Signal, SignalConnection } from "typed-signals";

export class ConnectionHandler {
    connections: Set<SignalConnection> = new Set();
    constructor() {
        console.log("ConnectionHandler created");
    }
    clearConnections() {
        this.connections.forEach((connection) => connection.disconnect());
        this.connections.clear();
    }
    addConnection<T extends (...args: any[]) => any>(
        signal: Signal<T>,
        callback: T,
        that: any = this,
    ) {
        const boundCallback = callback.bind(that) as T;
        this.connections.add(signal.connect(boundCallback));
    }
}
