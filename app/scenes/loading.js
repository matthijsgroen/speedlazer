import Crafty from 'crafty'

Crafty.defineScene("Loading", function() {

  Crafty.background("#000");
  Crafty.e("2D, DOM, Text")
    .attr({ w: 600, h: 20, x: 0, y: 120 })
    .text("Loading")
    .textAlign("center")
    .textColor("#FFFFFF")

  // Crafty load code here

  new Promise((resolve, reject) => {
    setTimeout(() => { resolve() }, 200)
  }).then(function() {
    Crafty.scene("Intro")
  })
});
