import Crafty from "crafty";
import scaleGame from "./lib/game_scaler";
import store from "./state";
import { createPlayer } from "./state/players/actions";
import "src/scenes/Intro";
import "src/scenes/Gameplay";

// Setup initial screen size and layers
Crafty.init(1024, 576, document.getElementById("game"));
Crafty.background("#000");

window.addEventListener("resize", scaleGame);
setTimeout(scaleGame, 0);

import ControlScheme from "./components/control-scheme";

store.dispatch(createPlayer(1, "#FF0000"));
store.dispatch(createPlayer(2, "#00FF00"));

// TODO: Add some smoothing by adding transition with .5 values between frames
Crafty.e("Keyboard", ControlScheme)
  .bind("KeyDown", function(e) {
    if (e.key === Crafty.keys.SPACE) this.fire(1);
    if (e.key === Crafty.keys.UP_ARROW) this.up(1);
    if (e.key === Crafty.keys.DOWN_ARROW) this.down(1);
    if (e.key === Crafty.keys.LEFT_ARROW) this.left(1);
    if (e.key === Crafty.keys.RIGHT_ARROW) this.right(1);
  })
  .bind("KeyUp", function(e) {
    if (e.key === Crafty.keys.SPACE) this.fire(0);
    if (e.key === Crafty.keys.UP_ARROW) this.up(0);
    if (e.key === Crafty.keys.DOWN_ARROW) this.down(0);
    if (e.key === Crafty.keys.LEFT_ARROW) this.left(0);
    if (e.key === Crafty.keys.RIGHT_ARROW) this.right(0);
  })
  .controlScheme("keyboard1");

//Crafty.scene("Intro");
Crafty.scene("Gameplay");

Crafty.bind("StartGame", () => {
  Crafty.scene("Gameplay");
});
