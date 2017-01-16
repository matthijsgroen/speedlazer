'use strict';

module.exports = function(karma) {
  karma.set({

    frameworks: [ 'mocha', 'chai' ],

    files: [
      'spec/spec_index.js'
    ],

    preprocessors: {
      'spec/spec_index.js': ['webpack']
    },

    client: {
      captureConsole: true,
      mocha: {
        reporter: 'html' // view on http://localhost:9876/debug.html
      }
    },

    reporters: ['mocha'],
    browsers: [ 'PhantomJS' ],

    webpack: require('./webpack.config.js'),
    webpackMiddleware: {
      stats: 'errors-only'
    }
  });
};
