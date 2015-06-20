define([
	'knockout',
	'jquery',
	'plugins/spin'
], function (ko, $) {

	'use strict';

	// spin: true || false
	ko.bindingHandlers.spin = {
		init: function (element) {
			$(element).spin({ left: 0, color: '#666' });
		},
		update: function (element, valueAccessor) {
			var value = ko.utils.unwrapObservable(valueAccessor());
			var spin = $(element).data('plugin_spin').update(value);
		}
	};

});