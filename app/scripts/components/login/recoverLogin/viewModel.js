define([
	'knockout',
	'pubsub',
	'models/recoverLogin'
], function (ko, p, RecoverLoginModel) {

	'use strict';

	/**
	 * Recover Login ViewModel
	 * @return {Object} ViewModel
	 */
	return function () {

		// Models
		var recoverLoginModel = new RecoverLoginModel();

		// Observables
		var email = ko.observable('');
		var isLoading = ko.observable(false);
		var isFailed = ko.observable(false);
		var isSuccess = ko.observable(false);

		// Subscribed Observables
		isFailed.subscribe(function () {

			// Publish 'login.shake' event recover login failed
			if (isFailed()) {
				p.publish('login.shake');
			}

		});

		/**
		 * Refresh ViewModel
		 */
		var refresh = function () {
			email('');
			isFailed(false);
			isSuccess(false);
		};

		/**
		 * Recover Login
		 */
		var recover = function () {

			// Show loading indicator
			isLoading(true);

			// Hide failed message
			isFailed(false);

			// Recover login
			recoverLoginModel.recover({ email: email() }, recoverResult);

		};

		/**
		 * Recover Login Result
		 * @param  {Boolean} login
		 */
		var recoverResult = function (login) {

			// Hide loading indicator
			isLoading(false);

			if (login) {

				// Show success message
				isSuccess(true);

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
			email: email,
			isLoading: isLoading,
			isSuccess: isSuccess,
			isFailed: isFailed,
			recover: recover
		};

		return ViewModel;

	};

});