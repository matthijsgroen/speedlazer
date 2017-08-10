import * as constants from "./constants";

const initial = [];
const START_MAX_HEALTH = 3;

const initialPlayer = {
  score: 0,
  health: START_MAX_HEALTH,
  maxHealth: START_MAX_HEALTH,
  state: constants.STATE_NO_CONTROLS
};

const playerReducers = (state = initial, action) => {
  if (action.type === constants.CREATE_PLAYER) {
    return state.concat({
      ...initialPlayer,
      playerId: action.playerId,
      color: action.color
    });
  }
  return state;
};

export default playerReducers;
