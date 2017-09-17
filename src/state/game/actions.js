import { START_GAME, END_GAME } from "./constants";

export const startGame = seed => ({
  type: START_GAME,
  seed
});

export const endGame = seed => ({
  type: END_GAME
});
