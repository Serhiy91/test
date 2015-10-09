module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-coverage'
    ],
    files: [
      'dist/vendor/vendor.min.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'dist/test-football-app/test-football-app.js',
      'unit-tests/**/*.js'
  ],
    exclude: [
    ],
    preprocessors: {
      'src/**/!(*spec).js': 'coverage',
      'unit-tests/**/!(*spec).js': 'coverage'
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
};
