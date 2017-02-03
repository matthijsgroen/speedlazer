module.exports = function(content) {
  let filename = this.resource.split("/").slice(-1)[0].split(".")[0]
  return '' +
    'var ScriptSystem = require("app/systems/script_system");' +
    'ScriptSystem.default().register("'+ filename + '", ' + content + ');' +

    'module.exports = function(params) { return ScriptSystem.default().execute("hello", params); }';
}
