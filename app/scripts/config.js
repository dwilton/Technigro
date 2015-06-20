'use strict';

// ReuqireJS Config
require.config({

	paths: {

		// Vendor
		'animo': '../vendor/animo.js/animo',
		'jquery': '../vendor/jquery/jquery',
		'knockout': '../vendor/knockout/dist/knockout',
		'ladda': '../vendor/ladda/js/ladda',
		'mapping': '../vendor/knockout-mapping/knockout.mapping',
		'page': '../vendor/page/index',
		'pubsub': '../vendor/pubsub/src/pubsub',
		'spin': '../vendor/spin.js/spin',
		'text': '../vendor/text/text',
		'typeahead': '../vendor/typeahead.js/dist/typeahead',

		// Libraries
		'component': 'lib/component',
		'modernizr': 'lib/modernizr',
		'querystring': 'lib/querystring',
		'router': 'lib/router',
		'store': 'lib/store',

		// Settings
		'api': 'settings/api'

	},

	shim: {
		'animo': ['jquery'],
		'page': { exports: 'page' },
		'typeahead': ['jquery']
	}

});