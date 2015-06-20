define([
	'knockout',
	'jquery',
	'plugins/menu'
], function (ko, $) {

	'use strict';

	// menu: true
	ko.bindingHandlers.menu = {
		init: function (element) {
			$(element).menu();
		}
	};

});