define([
	'knockout',
	'jquery',
	'animo'
], function (ko, $) {

	'use strict';

	// animate: 'effect'
	// animate: { animation: 'effect_1', duration: 2, keep: true }
	// animate: { animation: ['effect_1', 'effect_2'], duration: 2, keep: true }
	ko.bindingHandlers.animate = {
		update: function (element, valueAccessor) {

			var observable = valueAccessor();
			var value = ko.utils.unwrapObservable(observable);
			var animate = {};

			if (typeof value === 'string') {
				animate.animation = value;
			} else {
				animate = ko.toJS(observable);
			}

			$(element).animo(animate, function () {
				if (ko.isObservable(observable)) {
					observable('');
				}
			});

		}
	};

});