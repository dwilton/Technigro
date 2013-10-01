module.exports = function(karma) {

	'use strict';

	karma.set({

		// Frameworks
		frameworks: ['mocha', 'requirejs'],

		// Base path, that will be used to resolve files and exclude
		basePath: '',

		files: [

			// Assertion library
			{pattern: 'node_modules/chai/chai.js', included: false},

			// Bower components
			{pattern: 'app/vendor/**/*.js', included: false},

			// All app and test modules
			{pattern: 'app/scripts/**/*.js', included: false},
			{pattern: 'app/scripts/**/*.html', included: false},
			{pattern: 'test/spec/**/*.test.js', included: false},

			'test/config.js'

		],

		// List of files to exclude
		exclude: ['app/scripts/main.js'],

		// level of logging
		// possible values: karma.LOG_DISABLE || karma.LOG_ERROR || karma.LOG_WARN || karma.LOG_INFO || karma.LOG_DEBUG
		// CLI --log-level debug
		logLevel: karma.LOG_INFO,

		// Web server port
		// CLI --port 9876
		port: 9876,

		// CLI runner port
		// CLI --runner-port 9100
		runnerPort: 9100,

		// Enable / disable colors in the output (reporters and logs)
		// CLI --colors --no-colors
		colors: true,

		// Enable / disable watching file and executing tests whenever any file changes
		// CLI --auto-watch --no-auto-watch
		autoWatch: false,

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		// CLI --browsers Chrome,Firefox,Safari
		browsers: ['PhantomJS'],

		// If browser does not capture in given timeout [ms], kill it
		// CLI --capture-timeout 60000
		captureTimeout: 60000,

		// Test results reporter to use
		// Possible values: 'dots', 'progress', 'junit', 'coverage'
		reporters: ['progress'],

		// Auto run tests on start (when browsers are captured) and exit
		// CLI --single-run --no-single-run
		singleRun: true,

		// Plugins
		plugins: ['karma-mocha', 'karma-html2js-preprocessor', 'karma-requirejs', 'karma-phantomjs-launcher', 'karma-chrome-launcher', 'karma-coverage']

	});
};