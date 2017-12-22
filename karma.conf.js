// Karma configuration
// Generated on Thu Dec 21 2017 23:16:39 GMT+0800 (CST)
var webpackTestConfig = require('./webpack.test.js')

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      'test/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],

    webpack: webpackTestConfig,

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*.js': ['coverage', 'webpack', 'sourcemap']
    },

    coverageReporter: {
      reporters: [
        {
          type: 'text-summary'
        }
      ],
      instrumenters: {
        isparta: require('isparta')
      },
      instrumenter: {
        '**/*.js': 'isparta'
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


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
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    plugins: [
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-chai',
    ],

  })
}
