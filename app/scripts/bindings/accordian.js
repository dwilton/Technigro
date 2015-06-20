define([
	'knockout',
	'jquery',
	'plugins/accordian'
], function (ko, $) {

	'use strict';

	// accordian: true
	ko.bindingHandlers.accordian = {
		init: function (element) {
			$(element).accordian();
		}
	};

});