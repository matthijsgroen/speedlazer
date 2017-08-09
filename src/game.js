import Crafty from "crafty";
import scaleGame from "./lib/game_scaler";
//import store from "./state";

// Setup initial screen size and layers
Crafty.init(1024, 576, document.getElementById("game"));
Crafty.background("#000");

window.addEventListener("resize", scaleGame);
setTimeout(scaleGame, 0);

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
