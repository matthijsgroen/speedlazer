import * as constants from "./constants";
import * as gameConst from "../game/constants";

const initial = {};

const START_MAX_HEALTH = 3;

const initialShip = {
  playerId: null,
  controlScheme: null,
  health: START_MAX_HEALTH,
  maxHealth: START_MAX_HEALTH
};

const shipReducers = (state = initial, action) => {
  if (action.type === gameConst.END_GAME) {
    return initial;
  }
  if (action.type === constants.SPAWN_SHIP) {
    return {
      ...state,
      [action.playerId]: {
        ...initialShip,
        controlScheme: action.controlScheme,
        playerId: action.playerId
      }
    };
  }
  return state;
};

export default shipReducers;
