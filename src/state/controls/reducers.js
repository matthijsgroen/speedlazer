import * as constants from "./constants";

const initial = {};

const initialControlState = {
  playerId: null,
  fire: false
};

const controlReducers = (state = initial, action) => {
  if (action.type === constants.ADD_CONTROL_SCHEME) {
    return {
      ...state,
      [action.identifier]: {
        ...initialControlState
      }
    };
  }
  if (action.type === constants.ATTACH_CONTROL_SCHEME) {
    const controlScheme = state[action.identifier];
    return {
      ...state,
      [action.identifier]: {
        ...controlScheme,
        playerId: action.playerId
      }
    };
  }
  return state;
};

export default controlReducers;
