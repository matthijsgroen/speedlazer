/*
 * https://github.com/webpack/karma-webpack#alternative-usage
 *
 * Without this, karma and webpack don't play nice together since webpack.
 *
 * With this, all specs are compiled together. Single specs can be run with
 * mochas describe.only feature.
 */
var testsContext = require.context('.', true, /_spec$/)
testsContext.keys().forEach(function (path) {
  try {
    testsContext(path);
  } catch (err) {
    console.error('[ERROR] WITH SPEC FILE:', path);
    console.error(err);
  }
});
