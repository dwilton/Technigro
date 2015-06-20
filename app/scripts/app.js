define([
	'knockout',
	'pubsub',
	'models/user',
	'components/login/component',
	'components/main/component'
], function (ko, p, UserModel, loginCom, mainCom) {

	'use strict';

	/**
	 * App ViewModel
	 * @return {Object} ViewModel
	 */
	return function () {

		// Models
		var userModel = new UserModel();

		// Observables
		var content = ko.observable();

		// Init Components
		loginCom.init();
		mainCom.init();

		/**
		 * Init App
		 * @return {Object} Instance
		 */
		var init = function () {

			// Subscribers
			p.subscribe('app.authenticate', authenticate);

			// Authenticate App
			authenticate();

			return this;

		};

		/**
		 * Authenticates the current user object in localstorage
		 */
		var authenticate = function () {

			// Get the current user
			userModel.getUser(function (user) {

				if (user.isLoggedIn) {

					// Show 'Main' content
					content(mainCom.name);

					// Init all active components
					p.publish('components.init');

					// Trigger the current route
					p.publish('route', window.location.hash);

				} else {

					// Show "Login Component" content
					content(loginCom.name);

				}

			});

		};

		/**
		 * ViewModel
		 * @type {Object}
		 */
		var ViewModel = {
			init: init,
			content: content
		};

		return ViewModel;

	};

});