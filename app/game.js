import Crafty from 'crafty';

Crafty.init(500,350, document.getElementById('game'));
Crafty.background('#000');

Crafty.e('2D, WebGL, Color').attr({
  x: 0,
  y: 0,
  w: 20,
  h: 20
}).color('#F00')
