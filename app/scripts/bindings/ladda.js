define([
	'knockout',
	'jquery',
	'plugins/ladda'
], function (ko, $) {

	'use strict';

	// ladda: true || false
	ko.bindingHandlers.ladda = {
		init: function (element) {
			$(element).ladda();
		},
		update: function (element, valueAccessor) {
			var value = ko.utils.unwrapObservable(valueAccessor());
			var ladda = $(element).data('plugin_ladda').update(value);
		}
	};

});