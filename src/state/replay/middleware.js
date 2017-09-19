import { REPLAY_START_RECORDING, REPLAY_STOP_RECORDING } from "./constants";
import { endGame, replayGame } from "src/state/game/actions";
import { START_GAME, REPLAY_GAME } from "src/state/game/constants";
import store from "src/state";
import Crafty from "crafty";

const replayFormat = {
  startFrame: 0,
  frames: []
};

let replay = { ...replayFormat };
let isRecording = false;

export const hasReplay = () => replay.frames.length > 0;

export const replayRecording = () => {
  const startFrame = Crafty.frame();
  let nextFrame = replay.frames.shift();

  const replayHandler = fd => {
    if (nextFrame && fd.frame - startFrame >= nextFrame.frame) {
      store.dispatch(nextFrame);
      if (nextFrame.type === REPLAY_GAME) {
        Crafty.scene("Gameplay");
      }

      if (replay.frames.length > 0) {
        nextFrame = replay.frames.shift();
      } else {
        Crafty.unbind("EnterFrame", replayHandler);
        store.dispatch(endGame());
        replay = { ...replayFormat };
        Crafty.scene("Intro");
      }
    }
  };
  Crafty.bind("EnterFrame", replayHandler);
};

const replayMiddleware = () => next => action => {
  if (action.type === REPLAY_START_RECORDING) {
    isRecording = true;
    replay = { ...replayFormat };
    replay.startFrame = Crafty.frame();
  } else if (action.type === REPLAY_STOP_RECORDING && isRecording) {
    isRecording = false;
  } else if (isRecording && action.replay && action.type == START_GAME) {
    const startReplay = replayGame(action.seed);
    replayFormat.frames.push({
      ...startReplay,
      frame: Crafty.frame() - replay.startFrame
    });
  } else if (isRecording && action.replay) {
    replayFormat.frames.push({
      ...action,
      frame: Crafty.frame() - replay.startFrame
    });
  }
  next(action);
};

export default replayMiddleware;
