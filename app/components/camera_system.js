import Crafty from 'crafty';

export const template = {
  init() {
    this.camera = Crafty.e('2D, Motion, Tween');
  },

  remove() {
    this.camera.destroy();
  },
};

export default Crafty.s('CameraSystem', template, {}, true);
