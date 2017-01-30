import Crafty from 'crafty'
//import script from 'app/scripts/engine_test';
import script from 'app/scripts/hello.lazerscript';

import ScriptSystem from 'app/systems/script_system'
import ScenerySystem from 'app/systems/scenery_system'

Crafty.defineScene("Gameplay", function(data) {
  //ScriptSystem().execute(data.script).then((v) => {
    //console.log('Script executed', v);
  //});

  script().then((v) => {
    console.log('Script executed', v);
  });

  Crafty.e('2D, UILayerDOM, Text').attr({
    x: 50,
    y: 20,
    w: 400,
    h: 20
  }).textColor('#FF0').text('Player 1: 0')

  let controls = { UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180 }

  let player = Crafty.e('2D, WebGL, Color, Multiway').attr({
    x: 200,
    y: 200,
    w: 20,
    h: 20,
    z: 5
  }).color('#F00')
    .multiway(200, controls, { normalize: true })
    .speed({ x: 200, y: 200 })

  // Dummy elements -- Move to scenery system

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
  }).color('#0F0').cameraRelativeMotion({ xResponse: 0.5, yResponse: 0.5 })

  Crafty.e('2D, WebGL, Color, Ground, CameraRelativeMotion').attr({
    x: 700,
    y: 560,
    w: 400,
    h: 20,
    z: 10
  }).color('#333')

})
