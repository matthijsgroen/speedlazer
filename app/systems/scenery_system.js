import Crafty from 'crafty';

export const template = {
  init() {
  },

  update(newScenery) {
    console.log('updating scenery to', newScenery);
    return new Promise((resolve, reject) => {
      resolve(newScenery);
    });
  },

  remove() {
  },
};

Crafty.s('Scenery', template, {}, true);

export default function ScenerySystem() { return Crafty.s('Scenery'); }
