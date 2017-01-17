import Crafty from 'crafty';

describe('Motion', () => {
  let motion;

  beforeEach(() => {
    motion = Crafty.e('2D, Motion')
      .attr({
        x: 20,
        y: 20,
        w: 10,
        h: 10
      });
  })

  it('works!', () => {
    motion.attr({ vx: 50 })
    Crafty.timer.simulateFrames(5);

    // The game operates at 50 FPS, so with vx @ 50,
    // each frame the x moves 1 up
    expect(motion.x).to.eql(25)
  });
});
