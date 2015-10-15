module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    plugins: ["karma-coverage", "karma-jasmine", 'karma-chrome-launcher'],

    files: [
      'dist/vendor/vendor.min.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'dist/test-football-app/test-football-app.js',
      'src/**/*.html',
      'src/**/*.module.js',
      'src/**/*.js'
    ],

    exclude: [],

    preprocessors: {
      'src/**/!(*spec).js': ['coverage']
    },

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['Chrome'],

    singleRun: false
  })
};
