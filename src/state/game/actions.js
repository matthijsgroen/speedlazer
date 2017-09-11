import { START_GAME } from "./constants";

export const startGame = seed => ({
  type: START_GAME,
  seed
});
