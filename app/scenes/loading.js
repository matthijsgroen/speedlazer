import Crafty from 'crafty'

Crafty.defineScene("Loading", function() {

  const w = Crafty.viewport.width
  const h = Crafty.viewport.height

  Crafty.background("#000")
  Crafty.e('2D, DOM, Text')
    .attr({ x: 0, y: h / 2, w: w })
    .text('Loading...')
    .textColor('#333')
    .textAlign('center')
    .textFont({
      size: '20px',
      weight: 'bold',
      family: 'Press Start 2P'
    })

  // Crafty load code here

  new Promise((resolve, reject) => {
    setTimeout(() => { resolve() }, 200)
  }).then(function() {
    Crafty.scene("Intro")
  })
});
