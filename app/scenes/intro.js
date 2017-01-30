import Crafty from 'crafty'

Crafty.defineScene("Intro", function() {
  Crafty.e('Keyboard, 2D').bind('KeyDown', function() {
    // Adding 2D will auto destroy when scene is removed
    if (this.isDown('SPACE')) Crafty.scene('Gameplay', { script: 'engine_test' })
  })

  const w = Crafty.viewport.width
  const h = Crafty.viewport.height
  const offset = .15

  Crafty.e('2D, DOM, Text, Tween, Delay')
    .attr({ x: w * (.5 - offset), y: h * .4, w: 400 })
    .text('Speedlazer')
    .textColor('#0000ff')
    .textFont({
      size: '40px',
      weight: 'bold',
      family: 'Press Start 2P'
    })
    .delay(function() {
      this.tween({ x: (w * (.5 + offset)) - 400  }, 2000)
      this.one('TweenEnd', function() {
        this.tween({ x: w * (.5 - offset) }, 2000)
      })
    }, 4000, -1)
    .tween({ x: (w * (.5 + offset)) - 400  }, 2000)
    .one('TweenEnd', function() {
      this.tween({ x: w * (.5 - offset) }, 2000)
    })

  Crafty.e('2D, DOM, Text, Tween, Delay')
    .attr({ x: 0, y: h * .6, w: w })
    .text('Press fire to start!')
    .textColor('#FF0000')
    .textAlign('center')
    .textFont({
      size: '20px',
      weight: 'bold',
      family: 'Press Start 2P'
    })
    .delay(function() {
      this.tween({ alpha: 0.5 }, 1000)
      this.one('TweenEnd', function() {
        this.tween({ alpha: 1 }, 1000)
      })
    }, 2000, -1)
    .tween({ alpha: 0.5 }, 1000)
    .one('TweenEnd', function() {
      this.tween({ alpha: 1 }, 1000)
    })
});
