import Crafty from "crafty";
import createPlayerUI from "src/ui/player-ui";
import "src/game/ships";

let playerUI;
Crafty.scene("Gameplay", () => {
  playerUI = createPlayerUI()

}, () => {
  playerUI.destroy();
});

