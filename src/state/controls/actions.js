import * as constants from "./constants";

export const addControlScheme = identifier => ({
  type: constants.ADD_CONTROL_SCHEME,
  replay: true,
  identifier
});

export const controlAction = (identifier, props) => ({
  type: constants.CONTROL_ACTION,
  replay: true,
  identifier,
  props
});

export const attachControls = (identifier, playerId) => ({
  type: constants.ATTACH_CONTROL_SCHEME,
  replay: true,
  identifier,
  playerId
});
