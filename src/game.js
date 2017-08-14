import Crafty from "crafty";
import scaleGame from "./lib/game_scaler";
import store from "./state";
import { createPlayer } from "./state/players/actions";

// Setup initial screen size and layers
Crafty.init(1024, 576, document.getElementById("game"));
Crafty.background("#000");

window.addEventListener("resize", scaleGame);
setTimeout(scaleGame, 0);

import {
  addControlScheme,
  controlAction,
  attachControls
} from "./state/controls/actions";
import "./ui/player-ui";

store.dispatch(createPlayer(1, "#FF0000"));
store.dispatch(createPlayer(2, "#00FF00"));

import "./components/connect";
import "./components/props";

const selectAttachedPlayer = (state, identifier) => {
  const playerId = (state.controls[identifier] || {}).playerId;
  if (!playerId) return null;
  return state.players[playerId];
};

const selectAvailablePlayers = state => {
  const result = [];
  for (const playerId in state.players) {
    const player = state.players[playerId];
    if (!player.controlScheme) result.push(player);
  }
  return result;
};

Crafty.c("ControlScheme", {
  init: function() {
    this.requires("Connect, Props");
  },
  fire: function(down) {
    if (
      down &&
      !this.state.attachedPlayer &&
      this.state.availablePlayers.length
    ) {
      const player = this.state.availablePlayers[0];
      store.dispatch(attachControls(this.controlIdentifier, player.playerId));
    }

    // Maybe check if there is a weapon to fire or if firing weapons is enabled.
    if (this.state.attachedPlayer) {
      store.dispatch(controlAction(this.controlIdentifier, { fire: down }));
    }
  },
  controlScheme: function(identifier) {
    this.controlIdentifier = identifier;
    store.dispatch(addControlScheme(identifier));
    this.mapState(state => ({
      attachedPlayer: selectAttachedPlayer(state, this.controlIdentifier),
      availablePlayers: selectAvailablePlayers(state)
    }));
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
