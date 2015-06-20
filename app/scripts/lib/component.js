define([
	'knockout',
	'pubsub'
], function (ko, p) {

	'use strict';

	/**
	 * Component
	 * @param  {String} name
	 * @param  {Object} ViewModel
	 * @param  {String} view
	 * @return {Object} this
	 */
	return function (name, ViewModel, view) {

		var vm = {};

		var init = function (data) {

			vm = new ViewModel();

			initVM(data);

			// Register Component
			ko.components.register(name, {
				viewModel: function () {
					activateVM(data);
					refreshVM(data);
					return vm;
				},
				template: view
			});

			// Subscribers for all components
			p.subscribe('components.init', initVM);
			p.subscribe('components.refresh', refreshVM);

			// Subsscribers for this component
			p.subscribe('component.' + name + '.init', initVM);
			p.subscribe('component.' + name + '.activate', activateVM);
			p.subscribe('component.' + name + '.refresh', refreshVM);

			return this;

		};

		/**
		 * Calls the VM init method if it exists
		 * @param  {Object} data passed to the init method
		 */
		var initVM = function (data) {
			if (vm.init !== undefined) {
				vm.init(data);
			}
		};

		/**
		 * Calls the VM activate method if it exists
		 */
		var activateVM = function () {
			if (vm.activate !== undefined) {
				vm.activate();
			}
		};

		/**
		 * Calls the VM refresh method if it exists
		 */
		var refreshVM = function () {
			if (vm.refresh !== undefined) {
				vm.refresh();
			}
		};

		var Component = {
			init: init,
			name: name
		};

		return Component;

	};

});