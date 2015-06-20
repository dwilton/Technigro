/**
 * Router exposed via pubsub
 */

define([
	'pubsub',
	'page',
	'querystring'
], function (p, page, qs) {

	'use strict';

	// Setup the Router
	page({
		click: false,
		popstate: true,
		dispatch: false
	});

	// Subscriber for directing routes 'route'
	p.subscribe('route', function (name) {
		page(name);
	});

	// Subscribers for setting up routes 'route.set'
	p.subscribe('route.set', function (data) {
		page(data.name, function (ctx, next) {
			ctx.querystring = qs.parse(ctx.querystring);
			data.callback(ctx);
		});
	});

});