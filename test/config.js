var tests = [];
for (var file in window.__karma__.files) {
	if (/\.test\.js$/.test(file)) {
		tests.push(file);
	}
}

// Configure RequireJS
require.config({

	// Testacular serves files from '/base'
	baseUrl: '/base/app/scripts',

	// Paths
	paths: {
		// Assertion Library
		'chai': '../../node_modules/chai/chai',
	},

	// Ask requirejs to load these files (all our tests)
	deps: tests,

	// Start test run, once requirejs is done
	callback: window.__karma__.start

});

// Require existing app config
require(['config']);