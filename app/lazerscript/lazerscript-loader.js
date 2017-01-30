module.exports = function(content) {
  console.log('LOADER', content, this.resource);
  return '' +
    'var ScriptSystem = require("app/systems/script_system");' +
    'ScriptSystem.default().register("hello", ' + content + ');' +

    'module.exports = function(params) { return ScriptSystem.default().execute("hello", params); }';
}
