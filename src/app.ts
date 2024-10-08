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
    const tile3 = new Tile([2]);
    const tile4 = new Tile([3]);
    game.gameMap.data.put(tile1, [-2, -2]);
    game.gameMap.data.put(tile2, [2, 2]);
    game.gameMap.data.put(tile3, [-2, 2]);
    game.gameMap.data.put(tile4, [2, -2]);
});
