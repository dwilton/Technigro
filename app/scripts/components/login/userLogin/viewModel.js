define([
	'knockout',
	'pubsub',
	'models/login'
], function (ko, p, LoginModel) {

	'use strict';

	/**
	 * Login ViewModel
	 * @return {Object} ViewModel
	 */
	return function () {

		// Models
		var loginModel = new LoginModel();

		// Observables
		var username = ko.observable('');
		var password = ko.observable('');
		var isLoading = ko.observable(false);
		var isFailed = ko.observable(false);

		// Computed Observables
		var animation = ko.computed(function () {

			// Publish 'login' animation event
			p.publish('login.animation', isFailed() ? 'shake' : '');

		});

		/**
		 * Refresh ViewModel
		 */
		var refresh = function () {

			// Reset observables
			username('');
			password('');
			isLoading(false);
			isFailed(false);

		};

		/**
		 * Login
		 */
		var login = function () {

			// Show loading indicator
			isLoading(true);

			// Hide failed message
			isFailed(false);

			// Login
			loginModel.login({ username: username(), password: password() }, loginResult);

		};

		/**
		 * Login Result
		 * @param  {boolean} authenticated
		 */
		var loginResult = function (authenticated) {

			// Hide loading indicator
			isLoading(false);

			if (authenticated) {

				// Refresh the ViewModel
				refresh();

			} else {

				// Show failed message
				isFailed(true);

			}

		};

		/**
		 * ViewModel
		 * @type {Object}
		 */
		var ViewModel = {
			refresh: refresh,
			username: username,
			password: password,
			isLoading: isLoading,
			isFailed: isFailed,
			login: login
		};

		return ViewModel;

	};

});