import Crafty from "crafty";
import scaleGame from "./lib/game_scaler";
import store from "./state";
import { createPlayer } from "./state/players/actions";

// Setup initial screen size and layers
Crafty.init(1024, 576, document.getElementById("game"));
Crafty.background("#000");

window.addEventListener("resize", scaleGame);
setTimeout(scaleGame, 0);

import { addControlScheme } from "./state/controls/actions";
import "./ui/player-ui";

store.dispatch(createPlayer(1, "#FF0000"));
store.dispatch(createPlayer(2, "#00FF00"));

Crafty.c("ControlScheme", {
  init: function() {},
  fire: function() {
    //console.log("fire!", down);
  },
  controlScheme: function(identifier) {
    this.controlIdentifier = identifier;
    store.dispatch(addControlScheme(identifier));
  }
});

Crafty.e("Keyboard, ControlScheme")
  .bind("KeyDown", function(e) {
    if (e.key === Crafty.keys.SPACE) this.fire(true);
  })
  .bind("KeyUp", function(e) {
    if (e.key === Crafty.keys.SPACE) this.fire(false);
  })
  .controlScheme("keyboard1");

//Crafty.e("2D, WebGL, Color")
//.attr({
//x: 10,
//y: 10,
//w: 30,
//h: 20
//})
//.color("#FF0000");

/*
 * reactive flow... ?
 *
 * User input -> Action -> Reducer -> State
 *
 * Subscribe, substate. On change, update props of entity (vx, vy?)
 *
 * Goals: Setup, debug game state, log replays
 *
 */
