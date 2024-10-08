import { Game } from "./Game/game";
import { Tile } from "./Tile/tile";

const game = new Game("gameCanvas");
console.log(game);
const tile = new Tile();
tile._state.add(1);
game.gameMap._data.put(tile, [0, 0]);
const startGameBtn = document.getElementById("startGame");
startGameBtn?.addEventListener("click", () => {
    game.gameMap.data.put(tile, [1, 1]);
});
