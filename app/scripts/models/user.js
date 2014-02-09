define(['store'], function (store) {

	'use strict';

	return function () {

		var defaultUser = { name: '', isAdmin: false, isLoggedIn: false};

		var deleteUser = function (callback) {
			store.remove('user', function () {
				callback();
			});
		};

		var setUser = function (data, callback) {
			store.save({
				key: 'user',
				name: data.name,
				isAdmin: data.isAdmin,
				isLoggedIn: true
			}, callback);
		};

		var getUser = function (callback) {
			store.get('user', function (data) {
				if (data === null) {
					data = defaultUser;
				}
				callback(data);
			});
		};

		var User = {
			deleteUser: deleteUser,
			setUser: setUser,
			getUser: getUser
		};

		return User;

	};

});