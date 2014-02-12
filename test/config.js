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

	// ask requirejs to load these files (all our tests)
	deps: tests,

	// start test run, once requirejs is done
	callback: window.__karma__.start

});

require(['config']);