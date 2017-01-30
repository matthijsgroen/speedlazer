import Crafty from 'crafty';

export const template = {
  init() {
    this.scripts = {}
  },

  register(name, script) {
    this.scripts[name] = script;
  },

  execute(name, opts) {
    const options = opts || {};
    const script = this.scripts[name];

    return this.executeThread(script, 'main', options);
  },

  executeThread(script, method, options) {
    const thread = script[method];
    if (Array.isArray(thread)) {
      return this.sequence(thread, script, options);
    }

    //return new Promise((resolve, reject) => {
      //resolve(script[method]);
    //});
  },

  sequence(commands, script, options) {
    let current = commands.shift();
    return this.executeCommand(current, script, options).then((result) => {
      if (commands.length > 0) {
        return this.sequence(commands, script, options);
      }
    });
  },

  executeCommand(current, script, options) {
    if (current.s) {
      const sys = Crafty.s(current.s);
      return Promise.resolve(sys[current.c].apply(sys, current.a));
    }
  },

  remove() {
  },
};

Crafty.s('Script', template, {}, true);

export default function ScriptSystem() { return Crafty.s('Script'); }
