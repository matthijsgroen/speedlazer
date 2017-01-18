import Crafty from 'crafty';
import 'app/systems/camera_system';

Crafty.c('CameraRelativeMotion', {

  init() {
    this.requires('Motion');
    this._cameraSystem = Crafty.s('CameraSystem');
    this._xResponse = 1;
    this._yResponse = 1;

    this._onMotionChange = (property) => {
      let delta = (property.oldValue - this._cameraSystem.camera[property.key]);
      switch(property.key) {
        case 'vx':
          this.vx += delta * this._xResponse;
          break;
        case 'vy':
          this.vy += delta * this._yResponse;
          break;
      }
    };
    this._cameraSystem.camera.bind('MotionChange', this._onMotionChange);
  },

  remove() {
    this._cameraSystem.camera.unbind('MotionChange', this._onMotionChange);
  },

  cameraRelativeMotion(settings) {
    this._xResponse = settings.xResponse || this._xResponse;
    this._yResponse = settings.yResponse || this._yResponse;
    return this;
  }

});
