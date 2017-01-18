import Crafty from 'crafty';
import 'app/components/camera_relative_motion';

Crafty.init(800,600, document.getElementById('game'));
Crafty.background('#000');

Crafty.e('2D, WebGL, Color, Fourway').attr({
  x: 0,
  y: 0,
  w: 20,
  h: 20
}).color('#F00').fourway(100).bind('MotionChange', function(property) {
  let newValue = {};
  newValue[property.key] = this[property.key];
  Crafty.s('CameraSystem').camera.attr(newValue);
})

Crafty.e('2D, WebGL, Color, CameraRelativeMotion').attr({
  x: 400,
  y: 400,
  w: 20,
  h: 20
}).color('#00F')

Crafty.e('2D, WebGL, Color, CameraRelativeMotion').attr({
  x: 300,
  y: 200,
  w: 20,
  h: 20
}).color('#0F0').cameraRelativeMotion({ xResponse: 0.5, yResponse: 0.5 });

