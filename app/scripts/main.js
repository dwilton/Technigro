'use strict';

require(['config'], function () {

	require([
		'knockout',
		'mapping',
		'router',
		'bindings',
		'app'
	], function (ko, mapping, router, bindings, App) {

		ko.mapping = mapping;

		// Apply Knockout Bindings
		ko.applyBindings(new App().init());

	});

});