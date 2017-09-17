import { REPLAY_STOP_RECORDING, REPLAY_START_RECORDING } from "./constants";

export const recordStart = () => ({
  type: REPLAY_START_RECORDING
});

export const recordStop = () => ({
  type: REPLAY_STOP_RECORDING
});

export const replayRecording = () => ({
  type: REPLAY_RECORDING
})
