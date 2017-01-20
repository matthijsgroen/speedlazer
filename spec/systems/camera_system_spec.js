import Crafty from 'crafty';
import { template } from 'app/systems/camera_system';

describe('CameraSystem', () => {
  let cameraSystem

  beforeEach(() => {
    Crafty.s('TestCameraSystem', template, {})

    cameraSystem = Crafty.s('TestCameraSystem')
  })

  afterEach(() => {
    cameraSystem.destroy()
  })

  it('allows to control motion of the camera over x axis', () => {
    cameraSystem.camera.attr({ vx: 40 })
    expect(cameraSystem.camera.vx).to.eql(40)
  });

  it('allows to control motion of the camera over y axis', () => {
    cameraSystem.camera.attr({ vy: 40 })
    expect(cameraSystem.camera.vy).to.eql(40)
  });

  context('with tweening', () => {
    it('allows to tween motion of the camera over x axis', () => {
      cameraSystem.camera.tween({ vx: 60 }, 60)
      expect(cameraSystem.camera.vx).to.eql(0)
      Crafty.timer.simulateFrames(2, 20)

      expect(cameraSystem.camera.vx).to.eql(40)
    });
  });
});

