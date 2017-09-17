import Crafty from "crafty";
import scaleGame from "./lib/game_scaler";
import store from "./state";
import { createPlayer } from "./state/players/actions";
import "src/scenes/Intro";
import "src/scenes/Gameplay";
import "src/scenes/Replay";
import registerControls from "./game/controls";

// Setup initial screen size and layers
Crafty.init(1024, 576, document.getElementById("game"));
Crafty.background("#000");

window.addEventListener("resize", scaleGame);
setTimeout(scaleGame, 0);

store.dispatch(createPlayer(1, "#FF0000"));
store.dispatch(createPlayer(2, "#00FF00"));
registerControls();

Crafty.scene("Intro");
//Crafty.scene("Gameplay");

Crafty.bind("StartGame", () => {
  Crafty.scene("Gameplay");
});
