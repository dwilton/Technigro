/**
 * Custom Knockout Bindings
 */

define([
	'knockout',
	'pubsub',
	'jquery',
	'plugins/ladda',
	'plugins/spin',
	'plugins/tabs',
	'plugins/menu',
	'plugins/accordian',
	'plugins/toggleMenu',
	'lib/touch',
	'animo'
], function (ko, p, $) {

	'use strict';

	// route: 'routeName'
	ko.bindingHandlers.route = {
		init: function (element, valueAccessor) {
			$(element).on('click', function () {
				p.publish('route', valueAccessor());
			});
		}
	};

	// component: 'componentName'
	ko.bindingHandlers.component = {
		init: function (element, valueAccessor) {
			p.publish('component.' + valueAccessor() + '.activate', element);
		},
		update: function (element, valueAccessor) {
			p.publish('component.' + valueAccessor() + '.activate', element);
		}
	};

	// amino: { animation: 'effect' }
	// amino: { animation: ['effect_1', 'effect_2'], duration: 2, keep: true }
	ko.bindingHandlers.animo = {
		update: function (element, valueAccessor) {
			$(element).animo(valueAccessor());
		}
	};

	// tabs: true
	ko.bindingHandlers.tabs = {
		init: function (element, valueAccessor) {
			$(element).tabs();
		}
	};

	// menu: true
	ko.bindingHandlers.menu = {
		init: function (element, valueAccessor) {
			$(element).menu();
		}
	};

	// toggleMenu: true
	ko.bindingHandlers.toggleMenu = {
		init: function (element, valueAccessor) {
			$(element).toggleMenu();
		}
	};

	// accordian: true
	ko.bindingHandlers.accordian = {
		init: function (element, valueAccessor) {
			$(element).accordian();
		}
	};

	// spin: true || false
	ko.bindingHandlers.spin = {
		init: function (element, valueAccessor) {
			$(element).spin({ left: 0, color: '#666' });
		},
		update: function (element, valueAccessor) {
			var spin = $(element).data('plugin_spin').update(valueAccessor());
		}
	};

	// ladda: true || false
	ko.bindingHandlers.ladda = {
		init: function (element, valueAccessor) {
			$(element).ladda();
		},
		update: function (element, valueAccessor) {
			var ladda = $(element).data('plugin_ladda').update(valueAccessor());
		}
	};

});