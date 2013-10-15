'use strict';

require.config({

	paths: {

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
		'store': 'lib/store'

	},

	shim: {
		'animo': ['jquery'],
		'mockjax': ['jquery'],
		'page': { exports: 'page' }
	}

});

require(['knockout', 'mapping', 'router', 'bindings', 'app'], function (ko, mapping, router, bindings, App) {

	ko.mapping = mapping;

	// Apply Knockout Bindings
	ko.applyBindings(new App());

});