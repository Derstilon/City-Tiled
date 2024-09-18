const gameCanvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = gameCanvas.getContext("2d");
if (!ctx) throw new Error("2d context not supported");
// Write HELLO WORLD on the canvas
ctx.font = "48px serif";
ctx.fillText("HELLO WORLD", 10, 50);
