/**
 * Component: DOM manipluation wapper, pairs View and ViewModel
 */

define(['pubsub', 'ko'], function (p, ko) {

	'use strict';

	return function (name, ViewModel, View) {

		var _name,
		_vm,
		_view,
		_element,
		_active = false;

		var init = function (name, ViewModel, View) {

			_name = name;
			_vm = new ViewModel();
			_view = View;

			// Activate observer
			p.subscribe('component.' + _name + '.activate', function (parentEl) {
				activate(parentEl);
			});

			// Deactivate observer
			p.subscribe('component.' + _name + '.deactivate', function (parentEl) {
				deactivate(parentEl);
			});

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
			if (!_active) {

				// Append view to the DOM
				var container = document.createElement('div');
				container.innerHTML = _view;
				_element = parentEl.appendChild(container.firstChild);

				// Set component as active
				_active = true;

				// Apply knockout bindings
				ko.applyBindings(_vm, _element);

				// Call activate method viewmodel if available
				if (_vm.activate !== undefined) {
					_vm.activate();
				}

				// Refresh component
				refresh();

			} else {

				// Refresh component
				refresh();

				// Show the component
				_element.style.display = '';

			}

		};

		var refresh = function () {

			// Call refresh method viewmodel if available
			if (_vm.refresh !== undefined) {
				_vm.refresh();
			}

		};

		var deactivate = function () {

			// Remove knockout bindings
			if (ko.dataFor(_element) !== undefined) {
				ko.cleanNode(_element);
			}

			// Remove DOM elements
			_element.parentNode.removeChild(_element);

			// Set component as not active
			_active = false;

		};

		var Component = {
			init: init
		};

		return Component.init(name, ViewModel, View);

	};

});