import * as constants from "./constants";

export const createPlayer = (playerId, color) => ({
  type: constants.CREATE_PLAYER,
  color,
  playerId
});
