import Crafty from 'crafty';
import 'app/components/camera_relative_motion';

Crafty.init(800,600, document.getElementById('game'));
Crafty.background('#000');

Crafty.e('2D, WebGL, Color, Fourway').attr({
  x: 200,
  y: 200,
  w: 20,
  h: 20,
  z: 5
}).color('#F00');

Crafty.e('2D, Fourway').fourway(100).bind('MotionChange', function(property) {
  let newValue = {};
  newValue[property.key] = this[property.key];
  Crafty.s('CameraSystem').camera.attr(newValue);
})

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

