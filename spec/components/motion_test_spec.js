import Crafty from 'crafty';

describe('Motion', function() {
  beforeEach(function() {
    this.motion = Crafty.e('2D, Motion')
      .attr({
        x: 20,
        y: 20,
        w: 10,
        h: 10
      })
  })

  it('works!', function() {
    this.motion.attr({ vx: 50 })
    Crafty.timer.simulateFrames(5);

    // The game operates at 50 FPS, so with vx @ 50,
    // each frame the x moves 1 up
    expect(this.motion.x).to.eql(25)
  });
});
