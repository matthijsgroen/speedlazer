import * as constants from "./constants";
import * as controlConstants from "../controls/constants";

const initial = {};

const initialPlayer = {
  score: 0,
  state: constants.STATE_NO_CONTROLS
};

const playerReducers = (state = initial, action) => {
  if (action.type === constants.CREATE_PLAYER) {
    return {
      ...state,
      [action.playerId]: {
        ...initialPlayer,
        playerId: action.playerId,
        color: action.color
      }
    };
  }
  if (action.type === controlConstants.ATTACH_CONTROL_SCHEME) {
    const playerState = state[action.playerId];
    return {
      ...state,
      [action.playerId]: {
        ...playerState,
        state: constants.STATE_PLAYING
      }
    };
  }
  return state;
};

export default playerReducers;
