import { REPLAY_START_RECORDING, REPLAY_STOP_RECORDING } from "./constants";
import store from "src/state";
import Crafty from "crafty";

const replayFormat = {
  startFrame: 0,
  frames: []
}

let replay = { ...replayFormat };
let isRecording = false;

export const replayRecording = () => {
  console.log("Starting replay!");
  const startFrame = Crafty.frame();
  let nextFrame = replay.frames.shift();

  const replayHandler = (fd) => {
    if (fd.frame - startFrame >= nextFrame.frame) {
      console.log(nextFrame);
      store.dispatch(nextFrame);
      //if (nextFrame.type === "START_GAME") {
      //}

      if (replay.frames.length > 0) {
        nextFrame = replay.frames.shift();
      } else {
        console.log("Done!");
        Crafty.unbind("EnterFrame", replayHandler);
      }
    }
  };
  Crafty.bind("EnterFrame", replayHandler);
  Crafty.scene("Gameplay");

};

const replayMiddleware = store => next => action => {
  if (action.type === REPLAY_START_RECORDING) {
    console.log("Start recording!")
    isRecording = true;
    replay = { ...replayFormat };
    replay.startFrame = Crafty.frame()
  } else if (action.type === REPLAY_STOP_RECORDING) {
    console.log("Stop recording!")
    isRecording = false;
  } else if (isRecording) {
    replayFormat.frames.push({
      ...action,
      frame: Crafty.frame() - replay.startFrame
    })
  }
  next(action);
}

export default replayMiddleware;
