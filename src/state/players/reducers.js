import * as constants from "./constants";

const initial = [];

const playerReducers = (state = initial, action) => {
  if (action.type === constants.CREATE_PLAYER) {
    return state.concat({
      playerId: action.playerId,
      score: 0,
      constrolSet: null,
    });
  }
  return state;
};

export default playerReducers;
