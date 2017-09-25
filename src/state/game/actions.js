import { START_GAME, END_GAME, REPLAY_GAME } from "./constants";

export const startGame = seed => ({
  type: START_GAME,
  replay: true,
  seed
});

export const replayGame = seed => ({
  type: REPLAY_GAME,
  seed
});

export const endGame = () => ({
  type: END_GAME,
  replay: true
});
