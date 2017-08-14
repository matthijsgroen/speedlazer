import * as constants from "./constants";

const initial = {};

const initialControlState = {
  playerId: null,
  fire: 0,
  up: 0,
  down: 0,
  left: 0,
  right: 0
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
  if (action.type === constants.CONTROL_ACTION) {
    const controlScheme = state[action.identifier];
    return {
      ...state,
      [action.identifier]: {
        ...controlScheme,
        ...action.props
      }
    };
  }
  return state;
};

export default controlReducers;
