import { START_GAME, END_GAME, REPLAY_GAME } from "src/state/game/constants";

const initial = {
  seed: null,
  state: "IDLE"
};

const gameReducers = (state = initial, action) => {
  if (action.type == END_GAME) {
    return {
      ...initial
    };
  }
  if (action.type == START_GAME) {
    return {
      ...state,
      state: "PLAYING",
      seed: action.seed
    };
  }
  if (action.type == REPLAY_GAME) {
    return {
      ...state,
      state: "REPLAY",
      seed: action.seed
    };
  }
  return state;
};

export default gameReducers;
