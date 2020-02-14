// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = (config) => {

  config.set({
    frameworks: ['jasmine','@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-spec-reporter')
    ],
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcov', 'text', 'text-summary', 'cobertura'],
      fixWebpackSourcePaths: true,
      thresholds: {
        statements: 50,
        lines: 50,
        branches: 50,
        functions: 50
      }
    },
    coverageReporter: {
      type: 'cobertura'
    },
    basePath: '',
    // files: ['**/*.spec.ts'],
    // preprocessors: { '**/*.spec.ts': ['myPreprocessor']},
    reporters: ['kjhtml', 'spec'],
    client: {
      clearContext: false
    },
    port: 9876,
    colors: true,
    browsers: ['Chrome'],
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false
  });

}

// module.exports = function (config) {
//   config.set({
//     basePath: '',
//     frameworks: ['jasmine', '@angular-devkit/build-angular'],
//     plugins: [
//       require('karma-jasmine'),
//       require('karma-chrome-launcher'),
//       require('karma-jasmine-html-reporter'),
//       require('karma-coverage-istanbul-reporter'),
//       require('@angular-devkit/build-angular/plugins/karma')
//     ],
//     client: {
//       clearContext: false // leave Jasmine Spec Runner output visible in browser
//     },
//     coverageIstanbulReporter: {
//       dir: require('path').join(__dirname, '../../coverage/sub-app1'),
//       reports: ['html', 'lcovonly', 'text-summary'],
//       fixWebpackSourcePaths: true
//     },
//     reporters: ['progress', 'kjhtml'],
//     port: 9876,
//     colors: true,
//     logLevel: config.LOG_INFO,
//     autoWatch: true,
//     browsers: ['Chrome'],
//     singleRun: false,
//     restartOnFileChange: true
//   });
// };