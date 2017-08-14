import * as constants from "./constants";

const initial = {};

const START_MAX_HEALTH = 3;

const initialShip = {
  playerId: null,
  controlScheme: null,
  health: START_MAX_HEALTH,
  maxHealth: START_MAX_HEALTH
};

const shipReducers = (state = initial, action) => {
  if (action.type === constants.SPAWN_SHIP) {
    return {
      ...state,
      [action.id]: {
        ...initialShip,
        controlScheme: action.controlScheme,
        playerId: action.playerId
      }
    }
  }
  return state;
};

export default shipReducers;
