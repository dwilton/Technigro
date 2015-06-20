define([
	'knockout',
	'pubsub',
	'jquery'
], function (ko, p, $) {

	'use strict';

	// route: 'routeName'
	ko.bindingHandlers.route = {
		init: function (element, valueAccessor) {
			$(element).on('click', function () {
				p.publish('route', valueAccessor());
			});
		}
	};

});