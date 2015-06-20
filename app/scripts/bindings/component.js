define([
	'knockout',
	'pubsub'
], function (ko, p) {

	'use strict';

	/**
	 * Component Binding Handler
	 * @param  {Object} element         DOM element
	 * @param  {Function} valueAccessor Property involved in this binding
	 * @param  {Boolean} isInit
	 */
	var componentHandler = function (element, valueAccessor, isInit) {

		var observable = valueAccessor();
		var value = ko.utils.unwrapObservable(observable);
		var component = {};

		// Get the component
		if (typeof value === 'string') {
			component.name = value;
		} else {
			component = ko.toJS(value);
		}

		// If component parameters have been supplied
		if (component.params !== undefined) {

			// Publish an update to the component
			p.publish('component.' + component.name + '.update', component.params);

			if (isInit) {

				// The component should register changes
				p.publish('component.' + component.name + '.registerChanges', component.params);

				// Subscriber to update bindings based on component changes
				p.subscribe('component.' + component.name + '.changed', function (obj) {
						observable.params[obj.name](obj.value);
				});

			}

		}

		// Activate component
		p.publish('component.' + component.name + '.activate', element);

	};

	// component: 'componentName'
	// component: { name: 'componentName', params: { foo: 'bar' } }
	ko.bindingHandlers.component = {
		init: function (element, valueAccessor) {
			componentHandler(element, valueAccessor, true);
		},
		update: function (element, valueAccessor) {
			componentHandler(element, valueAccessor);
		}
	};

});