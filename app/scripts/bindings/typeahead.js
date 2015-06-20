define([
	'knockout',
	'jquery',
	'typeahead'
], function (ko, $) {

	'use strict';

	// typehead: { typehead: [{ name: 'Example Name 01' }, { name: 'Example Name 02' }] }
	ko.bindingHandlers.typeahead = {
		init: function (element, valueAccessor, allBindingsAccessor) {
			var options = ko.toJS(allBindingsAccessor().typeahead());
			$(element).attr('autocomplete', 'off').typeahead({
				name: 'typeahead',
				valueKey: 'name',
				local: options
			});
		}
	};

});