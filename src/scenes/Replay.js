import Crafty from "crafty";
import { replayRecording } from "src/state/replay/middleware";
import registerControls from "../game/controls";

Crafty.scene("Replay", () => {
  registerControls();
  replayRecording();
});
