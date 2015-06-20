define([
	'knockout',
	'pubsub',
	'components/login/userLogin/component',
	'components/login/recoverLogin/component'
], function (ko, p, userLoginCom, recoverLoginCom) {

	'use strict';

	/**
	 * Login Container ViewModel
	 * @return {Object} ViewModel
	 */
	return function () {

		// Observables
		var content = ko.observable('userLogin');
		var animation = ko.observable('');

		// Subscribed Observables
		content.subscribe(function () {
			animation('');
		});

		// Init Components
		userLoginCom.init();
		recoverLoginCom.init();

		/**
		 * Init
		 * @return {Object} Instance
		 */
		var init = function () {
			p.subscribe('login.animation', animation);
			return this;
		};

		/**
		 * ViewModel
		 * @type {Object}
		 */
		var ViewModel = {
			init: init,
			content: content,
			animation: animation
		};

		return ViewModel;

	};

});