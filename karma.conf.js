// Karma configuration
// Generated on Wed Dec 23 2015 10:34:09 GMT-0700 (MST)
var webpack = require('webpack'); //eslint-disable-line no-unused-vars
var webpackConfig = require('./webpack.config');

webpackConfig.devtool = 'inline-source-maps';

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'es5-shim'],


    // list of files / patterns to load in the browser
    files: [
      'tests.bundle.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests.bundle.js': [ 'webpack', 'sourcemap' ],
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    plugins: [
      'karma-es5-shim',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],

    webpack: webpackConfig,

    coverageReporter: {
      type: 'html', //produces a html document after code is run
      dir: 'coverage/' //path to created html doc
    },

    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};

