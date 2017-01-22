import Crafty from 'crafty'

Crafty.defineScene("Intro", function() {

  Crafty.e("2D, DOM, Text")
    .attr({ w: 100, h: 20, x: 150, y: 120 })
    .text("Press fire to start")
    .textAlign("center")
    .textColor("#FFFFFF")

  Crafty.e('Keyboard').bind('KeyDown', function() {
    if (this.isDown('SPACE')) Crafty.scene('Gameplay')
  })

});
