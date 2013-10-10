define(['jquery', 'models/user', 'mocks/login'], function ($, User) {

	'use strict';

	return function () {

		var user = new User();

		var authenticate = function (data, callback) {
			$.getJSON('/api/login/', data)
				.done(function (data) {
					if(data.result) {
						user.setUser(data);
					}
					callback(data.result);
				});
		};

		var logout = function () {
			user.deleteUser();
		};

		return {
			authenticate: authenticate,
			logout: logout
		};
		
	}

});