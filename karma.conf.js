// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
const webpack = require('./webpack.test');
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    browsers: ['headlessChrome'],
    customLaunchers: {
      headlessChrome: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-webpack')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    files: [
      'node_modules/jquery/dist/jquery.js',
      'src/test.ts'
    ],
    preprocessors: {
      'src/test.ts': ['webpack'],
    },
    webpack,
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
  });
};
