import Crafty from 'crafty'

export const template = {
  init() {
    this.camera = Crafty.e('2D, Motion, Tween');
  },

  forceSpeed(x, y) {
    this.camera.attr({ vx: x, vy: y })
  },

  remove() {
    this.camera.destroy();
  },
};

Crafty.s('Camera', template, {}, true);

export default function CameraSystem() { return Crafty.s('Camera') };
