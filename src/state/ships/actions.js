import * as constants from "./constants";
import { guid } from "src/lib/random";

export const spawnShip = (controlScheme, playerId) => {
  return {
    type: constants.SPAWN_SHIP,
    id: guid(),
    controlScheme,
    playerId
  }
};
