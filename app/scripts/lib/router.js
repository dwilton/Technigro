/**
 * Router exposed via pubsub
 */

define(['pubsub', 'page', 'querystring'], function (p, page, qs) {

	'use strict';

	// Setup router
	page({
		click: false,
		popstate: true,
		dispatch: false
	});

	// Route observer
	p.subscribe('route', function (name) {
		page(name);
	});

	// Set route observer
	p.subscribe('route.set', function (data) {
		page(data.name, function (ctx) {
			ctx.querystring = qs.parse(ctx.querystring);
			data.callback(ctx);
		});
	});

});