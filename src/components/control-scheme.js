import store from "src/state";
import Crafty from "crafty";
import Connect from "./connect";
import Props from "./props";
import {
  addControlScheme,
  controlAction,
  attachControls
} from "src/state/controls/actions";
import { spawnShip } from "src/state/ships/actions";
import { startGame } from "src/state/game/actions";
import { recordStart } from "src/state/replay/actions";
import { createSeed } from "src/lib/random";
import { GAME_STATE_IDLE, GAME_STATE_PLAYING } from "src/state/game/constants";

const ControlScheme = "ControlScheme";

const selectAttachedPlayer = (state, identifier) => {
  const playerId = (state.controls[identifier] || {}).playerId;
  if (!playerId) return null;
  return state.players[playerId];
};

const selectGameState = state => state.gameState.state;

const selectAvailablePlayers = state => {
  const result = [];
  for (const playerId in state.players) {
    const player = state.players[playerId];
    if (!player.controlScheme) result.push(player);
  }
  return result;
};

Crafty.c(ControlScheme, {
  init: function() {
    this.requires([Connect, Props].join(","));
  },
  _dispatchControl: function(mutation) {
    if (!this.state.attachedPlayer) return;
    if (this.state.gameState !== GAME_STATE_PLAYING) return;
    store.dispatch(controlAction(this.controlIdentifier, mutation));
  },
  fire: function(value) {
    if (
      value > 0 &&
      !this.state.attachedPlayer &&
      this.state.availablePlayers.length
    ) {
      const player = this.state.availablePlayers[0];
      if (this.state.gameState == GAME_STATE_IDLE) {
        store.dispatch(recordStart());
        store.dispatch(startGame(createSeed()));
        Crafty.trigger("StartGame");
      }
      store.dispatch(spawnShip(this.controlIdentifier, player.playerId));
      store.dispatch(attachControls(this.controlIdentifier, player.playerId));
    }

    // Maybe check if there is a weapon to fire or if firing weapons is enabled.
    this._dispatchControl({ fire: value });
  },
  up: function(value) {
    this._dispatchControl({ up: value });
  },
  down: function(value) {
    this._dispatchControl({ down: value });
  },
  left: function(value) {
    this._dispatchControl({ left: value });
  },
  right: function(value) {
    this._dispatchControl({ right: value });
  },
  controlScheme: function(identifier) {
    this.controlIdentifier = identifier;
    store.dispatch(addControlScheme(identifier));
    this.mapState(state => ({
      attachedPlayer: selectAttachedPlayer(state, this.controlIdentifier),
      availablePlayers: selectAvailablePlayers(state),
      gameState: selectGameState(state)
    }));
  }
});

export default ControlScheme;
