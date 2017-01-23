import Crafty from 'crafty'

Crafty.defineScene("Intro", function() {

  Crafty.e('Keyboard').bind('KeyDown', function() {
    if (this.isDown('SPACE')) Crafty.scene('Gameplay')
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
    }).delay(function() {
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
    .attr({ x: (w * .5) - 150, y: h * .6, w: 300 })
    .text('Press fire to start!')
    .textColor('#FF0000')
    .textFont({
      size: '15px',
      weight: 'bold',
      family: 'Press Start 2P'
    }).delay(function() {
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
