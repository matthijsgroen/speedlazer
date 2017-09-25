import {
  START_GAME,
  END_GAME,
  REPLAY_GAME,
  GAME_STATE_REPLAY,
  GAME_STATE_PLAYING,
  GAME_STATE_IDLE
} from "src/state/game/constants";

const initial = {
  seed: null,
  state: GAME_STATE_IDLE
};

const gameReducers = (state = initial, action) => {
  if (action.type === END_GAME) {
    return {
      ...initial
    };
  }
  if (action.type === START_GAME) {
    return {
      ...state,
      state: GAME_STATE_PLAYING,
      seed: action.seed
    };
  }
  if (action.type === REPLAY_GAME) {
    return {
      ...state,
      state: GAME_STATE_REPLAY,
      seed: action.seed
    };
  }
  return state;
};

export default gameReducers;
