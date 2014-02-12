define([
	'jquery',
	'pubsub',
	'models/user',
	'mocks/login'
], function ($, p, UserModel) {

	'use strict';

	return function () {

		var userModel = new UserModel();

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