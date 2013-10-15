define(['store'], function (store) {

	'use strict';

	return function () {

		var defaultUser = { name: '', isAdmin: false, isLoggedIn: false};

		var deleteUser = function () {
			store.remove('user');
		};

		var setUser = function (data) {
			store.save({
				key: 'user',
				name: data.name,
				isAdmin: data.isAdmin,
				isLoggedIn: true
			});
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