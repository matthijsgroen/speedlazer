import Crafty from 'crafty';
import scaleGame from 'app/lib/game_scaler';

// Setup initial screen size and layers
Crafty.init(1024, 576, document.getElementById('game'))
Crafty.background('#000')

window.addEventListener("resize", () => {
  scaleGame();
});

setTimeout(() => {
  scaleGame();
}, 0);
