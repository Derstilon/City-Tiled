import { Game } from "./Game/game";
import { Tile } from "./Tile/tile";
let game: Game;
const startGameBtn = document.getElementById("startGame");
const uiContainer = document.getElementById("uiContainer");
startGameBtn?.addEventListener("click", () => {
    if (game) game.clearConnections();
    game = new Game("gameCanvas");
    console.log(game);
    const tile1 = new Tile([0]);
    const tile2 = new Tile([1]);
    game.gameMap.data.put(tile1, [0, 0]);
    game.gameMap.data.put(tile2, [1, 1]);
});
