import * as constants from "./constants";

const initial = {};

const controlReducers = (state = initial, action) => {
  if (action.type === constants.ADD_CONTROL_SCHEME) {
    return {
      ...state,
      [action.identifier]: {
        fire: false
      }
    };
  }
  return state;
};

export default controlReducers;
