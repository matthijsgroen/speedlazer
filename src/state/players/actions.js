import { CREATE_PLAYER, SCORE_POINTS } from "./constants";

export const createPlayer = (playerId, color) => ({
  type: CREATE_PLAYER,
  color,
  playerId
});

export const scorePoints = (playerId, points) => ({
  type: SCORE_POINTS,
  playerId,
  points
});
