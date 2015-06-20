define([
	'knockout',
	'jquery',
	'plugins/tabs'
], function (ko, $) {

	'use strict';

	// tabs: 'tabContentId'
	ko.bindingHandlers.tabs = {
		init: function (element, valueAccessor) {
			var value = ko.utils.unwrapObservable(valueAccessor());
			$(element).tabs({ tabContentId: value });
		}
	};

});