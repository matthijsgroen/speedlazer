import Crafty from "crafty";
import scaleGame from "app/lib/game_scaler";

// Setup initial screen size and layers
Crafty.init(1024, 576, document.getElementById("game"));
Crafty.background("#000");

window.addEventListener("resize", () => {
  scaleGame();
});

setTimeout(() => {
  scaleGame();
}, 0);


Crafty.e("2D, WebGL, Color")
  .attr({
    x: 10,
    y: 10,
    w: 10,
    h: 10
  })
  .color("#FF0000");
