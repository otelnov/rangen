module.exports = function (config) {
  config.set({
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-webpack'),
      require('karma-spec-reporter')
    ],
    singleRun: false,
    browsers: [
      'Chrome'
    ],
    frameworks: [
      'jasmine'
    ],
    files: [
      'spec.bundle.js'
    ],
    preprocessors: {
      'spec.bundle.js': ['webpack']
    },
    webpack: require('./webpack.config.test'),
    webpackMiddleware: {
      stats: 'errors-only'
    },
    reporters: ['spec'],
    specReporter: {
      maxLogLines: 5,             // limit number of lines logged per test
      suppressErrorSummary: true, // do not print error summary
      suppressFailed: false,      // do not print information about failed tests
      suppressPassed: false,      // do not print information about passed tests
      suppressSkipped: true,      // do not print information about skipped tests
      showSpecTiming: false,      // print the time elapsed for each spec
      failFast: false              // test would finish with error when a first fail occurs.
    }
  });
};