import Crafty from 'crafty';
import 'app/components/camera_relative_motion';

Crafty.init(800,600, document.getElementById('game'));
Crafty.background('#000');

Crafty.e('2D, WebGL, Color').attr({
  x: 200,
  y: 200,
  w: 20,
  h: 20,
  z: 5
}).color('#F00');

Crafty.e('Multiway').multiway(100, {UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180})
  .bind('MotionChange', function(property) {
  let newValue = {};
  newValue[property.key] = this[property.key];
  Crafty.s('CameraSystem').camera.attr(newValue);
});

Crafty.e('Multiway').multiway(1, {W: -90, S: 90}).bind('MotionChange', function(property) {
  if (this.vy === 0) return;
  this.zoom = (this.zoom || 1.0);

  let oldScale = Crafty.viewport._scale;
  let newScale = this.zoom *= (1 + (this.vy * 0.10));

  let w = Crafty.viewport.width;
  let h = Crafty.viewport.height;

  Crafty.viewport.x -= ((w / oldScale) - (w / newScale)) / 2;
  Crafty.viewport.y -= ((h / oldScale) - (h / newScale)) / 2;
  Crafty.viewport.scale(newScale);
});

Crafty.e('2D, WebGL, Color, CameraRelativeMotion').attr({
  x: 700,
  y: 100,
  w: 30,
  h: 400,
  z: 10
}).color('#00F')

Crafty.e('2D, WebGL, Color, CameraRelativeMotion').attr({
  x: 500,
  y: 150,
  w: 20,
  h: 300
}).color('#0F0').cameraRelativeMotion({ xResponse: 0.5, yResponse: 0.5 });


