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

		// Components
		'jquery': '../vendor/jquery/jquery.min',
		'ko': '../vendor/knockout.js/knockout',
		'page': '../vendor/page/index',
		'text': '../vendor/text/text',
		'pubsub': '../vendor/pubsub/src/pubsub',
		'ladda': '../vendor/ladda/js/ladda',
		'spin': '../vendor/spin.js/spin',

		// Libraries
		'buttonLoader': 'lib/buttonLoader',
		'component': 'lib/component',
		'customBindings': 'lib/customBindings',
		'cssAnimated': 'lib/cssAnimated',
		'modernizr': 'lib/modernizr',
		'tabs': 'lib/tabs',
		'touch': 'lib/touch'

	},

	shim: {
		'page': {
			exports: 'page'
		}
	},

	// ask requirejs to load these files (all our tests)
	deps: tests,

	// start test run, once requirejs is done
	callback: window.__karma__.start

});