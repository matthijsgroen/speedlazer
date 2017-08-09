import * as constants from "./constants";

export const createPlayer = playerId => ({
  type: constants.CREATE_PLAYER,
  playerId
});
