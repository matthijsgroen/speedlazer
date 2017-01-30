module.exports = function(content) {
  console.log('COMPILER', content, this.resource);
  return '{' +
  '  main: [' +
  '   { s: "Scenery", c: "update", a: ["XIntro"] }' +
  '  ]' +
  '}';
}

