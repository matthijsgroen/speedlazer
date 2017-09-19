import * as constants from "./constants";

export const spawnShip = (controlScheme, playerId) => {
  return {
    type: constants.SPAWN_SHIP,
    replay: true,
    controlScheme,
    playerId
  };
};
