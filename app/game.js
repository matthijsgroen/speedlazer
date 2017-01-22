import Crafty from 'crafty'
import 'app/components/camera_relative_motion'
import 'app/scenes/loading'
import 'app/scenes/intro'
import 'app/scenes/gameplay'

Crafty.init(1024,576, document.getElementById('game'))
Crafty.background('#000')

Crafty.createLayer('UILayerDOM', 'DOM', {
  scaleResponse: 0,
  yResponse: 0,
  xResponse: 0,
  z: 40
})

Crafty.scene('Loading')

function scaleGame() {
  const gameElement = document.getElementById('game')
  let stageHeight = gameElement.clientHeight,
    stageWidth = gameElement.clientWidth,
    viewportHeight = window.innerHeight - 50,
    viewportWidth = window.innerWidth

  let ratioY = viewportHeight / stageHeight;
  let ratioX = viewportWidth / stageWidth;
  let ratio = Math.min(ratioY, ratioX);

  gameElement.style.transform = "scale(" + ratio + ")"

  //$('footer').css({ top: (576 * ratio) });
}

window.addEventListener("resize", () => {
  scaleGame();
})

// Handle the fullscreen button
//$(document).on('click', '#cr-stage', function () {
  //if (screenfull.enabled) {
    //screenfull.request($('#theater')[0]);
    //$('body').addClass('fullscreen');
    //scaleGame();
    //document.addEventListener(screenfull.raw.fullscreenchange, function () {
      //if (!screenfull.isFullscreen) {
        //// exit fullscreen code here
        //$('body').removeClass('fullscreen');
        //scaleGame();
      //}
    //});
  //}
//});

setTimeout(function() { scaleGame(); }, 0);


// Control zooming

//Crafty.e('Multiway, Tween').multiway(1, {W: -90, S: 90}).bind('MotionChange', function(property) {
  //if (this.vy === 0) return
  //this.zoom = (this.zoom || 1.0)

  //let oldScale = Crafty.viewport._scale
  //let newScale = this.zoom *= (1 + (this.vy * 0.50))

  //this.zoomEasing = new Crafty.easing(2000, "easeInOutQuad")
  //this.targetScale = newScale
//}).bind('ExitFrame', function(data) {
  //if (this.zoomEasing === undefined) return
  //this.zoomEasing.tick(data.dt)
  //let v = this.zoomEasing.value()

  //let oldScale = Crafty.viewport._scale
  //let newScale = (oldScale * (1 - v)) + (this.targetScale * v)

  //let w = Crafty.viewport.width
  //let h = Crafty.viewport.height

  //Crafty.viewport.x -= (((w / oldScale) - (w / newScale)) / 2)
  //Crafty.viewport.y -= (((h / oldScale) - (h / newScale)) / 2)
  //Crafty.viewport.scale(newScale)

  //if (this.zoomEasing.complete) delete this['zoomEasing']
//})

