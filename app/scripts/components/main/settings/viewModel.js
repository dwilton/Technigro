define([
	'knockout'
], function (ko) {

	'use strict';

	/**
	 * Setting ViewModel
	 * @return {Object} ViewModel
	 */
	return function () {

		/**
		 * Init ViewModel
		 * @return {Object} Instance
		 */
		var init = function () {
			return this;
		};

		/**
		 * ViewModel
		 * @type {Object}
		 */
		var ViewModel = {
			init: init
		};

		return ViewModel;

	};

});