require.config({

	paths: {

		// Components
		'animo': '../vendor/animo.js/animo',
		'jquery': '../vendor/jquery/jquery',
		'ko': '../vendor/knockout.js/knockout',
		'ladda': '../vendor/ladda/js/ladda',
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

require(['ko', 'router', 'bindings', 'app'], function (ko, router, bindings, App) {

	'use strict';

	// Apply Knockout Bindings
	ko.applyBindings(new App());

});