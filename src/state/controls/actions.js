import * as constants from "./constants";

export const addControlScheme = identifier => ({
  type: constants.ADD_CONTROL_SCHEME,
  identifier
});
