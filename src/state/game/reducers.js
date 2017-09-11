import { START_GAME } from "src/state/game/constants";

const initial = {
  seed: null,
  state: "IDLE"
};

const gameReducers = (state = initial, action) => {
  if (action.type == START_GAME) {
    return {
      ...state,
      state: "PLAYING",
      seed: action.seed
    };
  }
  return state;
};

export default gameReducers;
