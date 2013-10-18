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
		'animo': '../vendor/animo.js/animo',
		'jquery': '../vendor/jquery/jquery',
		'knockout': '../vendor/knockout.js/knockout',
		'ladda': '../vendor/ladda/js/ladda',
		'mapping': '../vendor/knockout-mapping/knockout.mapping',
		'mockjax': '../vendor/jquery-mockjax/jquery.mockjax',
		'page': '../vendor/page/index',
		'pubsub': '../vendor/pubsub/src/pubsub',
		'spin': '../vendor/spin.js/spin',
		'text': '../vendor/text/text',

		// Libraries
		'bindings': 'lib/bindings',
		'component': 'lib/component',
		'modernizr': 'lib/modernizr',
		'querystring': 'lib/querystring',
		'url': 'lib/url',
		'router': 'lib/router',
		'store': 'lib/store',

	},

	shim: {
		'animo': ['jquery'],
		'mockjax': ['jquery'],
		'page': { exports: 'page' }
	},

	// ask requirejs to load these files (all our tests)
	deps: tests,

	// start test run, once requirejs is done
	callback: window.__karma__.start

});