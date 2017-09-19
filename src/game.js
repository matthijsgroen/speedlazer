import Crafty from "crafty";
import scaleGame from "./lib/game_scaler";
import "src/scenes/Intro";
import "src/scenes/Gameplay";
import "src/scenes/Replay";

// Setup initial screen size and layers
Crafty.init(1024, 576, document.getElementById("game"));
Crafty.background("#000");

window.addEventListener("resize", scaleGame);
setTimeout(scaleGame, 0);

Crafty.scene("Intro");

Crafty.bind("StartGame", () => {
  Crafty.scene("Gameplay");
});
