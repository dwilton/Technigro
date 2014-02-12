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

	return function (name, ViewModel, View) {

		var	vm, view, element, active;

		var init = function () {

			vm = new ViewModel();
			view = View;
			active = false;

			// Init component
			initVM();

			// Create observers
			p.subscribe('component.' + name + '.activate', function (parentEl) { activate(parentEl); });
			p.subscribe('component.' + name + '.init', initVM);
			p.subscribe('component.' + name + '.refresh', refreshVM);
			p.subscribe('component.initAll', initVM);
			p.subscribe('component.refreshAll', refreshVM);

			return this;
		};

		var activate = function (parentEl) {

			// Hide all siblings
			var children = parentEl.childNodes;

			for (var i = 0; i < children.length; i = i + 1) {
				if (children[i].style) {
					children[i].style.display = 'none';
				}
			}

			// Activate or show component
			if (!active) {

				// Append view to the DOM
				var container = document.createElement('div');
				container.innerHTML = view;
				element = parentEl.appendChild(container.firstChild);

				// Set component as active
				active = true;

				// Apply knockout bindings
				ko.applyBindings(vm, element);

				// Call viewmodel 'activate' method if available
				if (vm.activate !== undefined) {
					vm.activate();
				}

				// Refresh component
				refreshVM();

			} else {

				// Refresh component
				refreshVM();

				// Show the component
				// TODO: replace with detectable viewModel method e.g. animateIn
				element.style.display = '';

			}

		};

		var deactivate = function () {

			// Set component as not active
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

		var refreshVM = function () {

			// Call viewmodel 'refresh' method if available
			if (vm.refresh !== undefined) {
				vm.refresh();
			}

		};

		var initVM = function () {

			// Call viewmodel 'init' method if available
			if (vm.init !== undefined) {
				vm.init();
			}

		};

		var Component = {
			init: init,
			name: name,
			activate: activate,
			deactivate: deactivate,
			initVM: initVM,
			refreshVM: refreshVM
		};

		return Component;

	};

});