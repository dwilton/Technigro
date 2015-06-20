'use strict';

// App config
require.config({

	paths: {

		// Vendor
		'animo': '../vendor/animo.js/animo',
		'jquery': '../vendor/jquery/jquery',
		'knockout': '../vendor/knockout.js/knockout',
		'ladda': '../vendor/ladda/js/ladda',
		'mapping': '../vendor/knockout-mapping/knockout.mapping',
		'page': '../vendor/page/index',
		'pubsub': '../vendor/pubsub/src/pubsub',
		'spin': '../vendor/spin.js/spin',
		'text': '../vendor/text/text',
		'typeahead': '../vendor/typeahead.js/dist/typeahead',

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
		'page': { exports: 'page' },
		'typeahead': ['jquery']
	}

});