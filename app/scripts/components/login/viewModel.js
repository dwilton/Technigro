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
		var animate = ko.observable('');

		// Subscribed Observables
		content.subscribe(function () {
			animate({});
		});

		// Init Components
		userLoginCom.init();
		recoverLoginCom.init();

		/**
		 * Init
		 * @return {Object} Instance
		 */
		var init = function () {

			p.subscribe('login.shake', function () {
				animate('shake');
			});

			return this;

		};

		/**
		 * ViewModel
		 * @type {Object}
		 */
		var ViewModel = {
			init: init,
			content: content,
			animate: animate
		};

		return ViewModel;

	};

});