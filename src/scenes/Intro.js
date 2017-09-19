import Crafty from "crafty";
import store from "../state";
import { createPlayer } from "../state/players/actions";
import registerControls from "../game/controls";

Crafty.scene("Intro", () => {
  registerControls();

  store.dispatch(createPlayer(1, "#FF0000"));
  store.dispatch(createPlayer(2, "#00FF00"));
});
