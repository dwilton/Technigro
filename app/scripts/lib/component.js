/**
 * Component
 * - Bundles the 'View' and 'ViewModel' into a reusable module
 * - Provides external access via pubsub
 * - Handles DOM manipluation and applies bindings
 * - Automatically triggers ViewModel methods if they exist e.g. init, activate, refresh
 */

define([
	'knockout',
	'pubsub'
], function (ko, p) {

	'use strict';

	/**
	 * Component
	 * @param  {String} name      Component name (Target the component with pubsub)
	 * @param  {Object} ViewModel ViewModel
	 * @param  {String} View      View Template
	 * @return {Object}           Instance of this
	 */
	return function (name, ViewModel, view) {

		var	vm, vmArgs, element, active;

		/**
		 * Init Component
		 * @param  {Object} args
		 * @return {Object}      Instance of this
		 */
		var init = function (args) {

			// Create a new instance of the ViewModel
			vm = new ViewModel();
			vmArgs = args;

			// Component is inactive
			active = false;

			// Init ViewModel
			initVM();

			// Subscribers of this component
			p.subscribe('component.' + name + '.activate', function (parentEl) { activate(parentEl); });
			p.subscribe('component.' + name + '.init', initVM);
			p.subscribe('component.' + name + '.refresh', refreshVM);

			// Subscribers for all components
			p.subscribe('component.initAll', initVM);
			p.subscribe('component.refreshAll', refreshVM);

			return this;

		};

		/**
		 * Active Component
		 * @param  {Object} parentEl Parent element
		 */
		var activate = function (parentEl) {

			// Hide all DOM siblings
			var children = parentEl.childNodes;

			for (var i = 0; i < children.length; i = i + 1) {
				if (children[i].style) {
					children[i].style.display = 'none';
				}
			}

			// Activate or show component
			if (!active) {

				// Append view to the DOM inside a new 'div' element
				var container = document.createElement('div');
				container.innerHTML = view;
				element = parentEl.appendChild(container.firstChild);

				// Component is active
				active = true;

				// Apply knockout bindings
				ko.applyBindings(vm, element);

				// Active ViewModel
				activateVM();

				// Refresh ViewModel
				refreshVM();

			} else {

				// Refresh ViewModel
				refreshVM();

				// Show the component
				// TODO: replace with detectable ViewModel method e.g. animateIn
				element.style.display = '';

			}

		};

		/**
		 * Deactivate Component
		 */
		var deactivate = function () {

			// Component is inactive
			active = false;

			if (element !== undefined) {

				// Remove knockout bindings
				if (ko.dataFor(element) !== undefined) {
					ko.cleanNode(element);
				}

				// Remove DOM elements
				element.parentNode.removeChild(element);

			}

		};

		/**
		 * Calls ViewModel 'init' method if it exists
		 */
		var initVM = function () {
			if (vm.init !== undefined) {
				vm.init(vmArgs);
			}
		};

		/**
		 * Calls ViewModel 'activate' method if it exists
		 */
		var activateVM = function () {
			if (vm.activate !== undefined) {
				vm.activate();
			}
		};

		/**
		 * Calls ViewModel 'refresh' method if it exists
		 */
		var refreshVM = function () {
			if (vm.refresh !== undefined) {
				vm.refresh();
			}
		};

		/**
		 * Component
		 * @type {Object}
		 */
		var Component = {
			init: init,
			name: name,
			activate: activate,
			deactivate: deactivate,
			initVM: initVM,
			activateVM: activateVM,
			refreshVM: refreshVM
		};

		return Component;

	};

});