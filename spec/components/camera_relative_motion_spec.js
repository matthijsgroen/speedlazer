import Crafty from 'crafty';
import 'app/components/camera_relative_motion';

describe('CameraRelativeMotion', () => {
  let cameraRelativeMotion

  beforeEach(() => {
    Crafty.s('Camera').camera.attr({ vx: 0, vy: 0 })
    cameraRelativeMotion = Crafty.e('CameraRelativeMotion')
  })

  afterEach(() => {
    cameraRelativeMotion.destroy()
  })

  context("Moving with the camera", () => {

    it("Updates the vx", () => {
      Crafty.s('Camera').camera.vx = 10

      expect(cameraRelativeMotion.vx).to.eql(-10)
    })

    it("Updates the vy", () => {
      Crafty.s('Camera').camera.vy = 10

      expect(cameraRelativeMotion.vy).to.eql(-10)
    })
  })

  context("Having different response", () => {
    it("Updates the vx", () => {
      cameraRelativeMotion.cameraRelativeMotion({ xResponse: 0.5 })
      Crafty.s('Camera').camera.vx = 10

      expect(cameraRelativeMotion.vx).to.eql(-5)
    })
  })
})
