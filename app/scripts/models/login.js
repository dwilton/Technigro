define([
	'jquery',
	'pubsub',
	'models/user'
], function ($, p, UserModel) {

	'use strict';

	/**
	 * Login Model
	 * @return {Object} Model
	 */
	return function () {

		// Models
		var userModel = new UserModel();

		/**
		 * Login
		 * @param  {Object}   data
		 * @param  {Function} callback
		 */
		var login = function (data, callback) {
			$.getJSON('/api/login/', data)
				.done(function (data) {
					if (data.result) {
						userModel.setUser(data, function () {
							callback(data.result);
							p.publish('app.authenticate');
						});
					} else {
						callback(data.result);
					}
				});
		};

		/**
		 * Logut
		 */
		var logout = function () {
			userModel.deleteUser(function () {
				p.publish('app.authenticate');
			});
		};

		return {
			login: login,
			logout: logout
		};

	};

});